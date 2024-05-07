import { useState, useCallback, useEffect, ReactNode } from "react";
import { useDropzone } from "react-dropzone";
import useDrivePicker from "react-google-drive-picker";
import { ReactOneDriveFilePicker } from "react-onedrive-filepicker";
import { Box, Typography, LinearProgress, Stack } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import {
  DataRoomIcon,
  DropBoxIcon,
  GoogleDriveIcon,
  OneDriveIcon,
} from "./Svgs";
import { DocumentChip } from "./DocumentChip";
import { FileViewModal } from "../pages/premium/components/sub-components/FileViewModal";

const LIMIT_DOCS = 125829120;

export const formatBytes = (bytes: number, decimals = 2): string => {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};

const CloudButton = ({
  name,
  icon,
  onClick,
}: {
  name: string;
  icon: ReactNode;
  onClick?: () => void;
}) => (
  <Box
    sx={{
      boxSizing: "border-box",
      minWidth: 108,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      bgcolor: "#36363E",
      borderRadius: 1,
      gap: 1,
      p: 1,
      border: "2px solid",
      borderColor: "transparent",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#A9B6FF",
      },
    }}
    onClick={onClick}
  >
    {icon}
    <Typography variant="subtitle2">{name}</Typography>
  </Box>
);

export const FileUploader = ({
  loading,
  initialFiles,
  onUploadCompleted,
  isOneFileOnly,
  disabled = false,
  limit = LIMIT_DOCS,
  accept,
  cloud,
  showFileList,
  layoutDirection = "row",
}: {
  initialFiles?: File[];
  loading?: boolean;
  disabled?: boolean;
  isOneFileOnly?: boolean;
  onUploadCompleted: (files: File[]) => void;
  limit?: number;
  accept?: string[];
  cloud?: boolean;
  layoutDirection?: "row" | "column";
  showFileList?: boolean;
}) => {
  const [openPicker] = useDrivePicker();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [viewFile, setViewFile] = useState<File>();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (limit) {
        for (let i = 0; i < acceptedFiles.length; i++) {
          if (acceptedFiles[i].size > limit) {
            return;
          }
        }
      }
      const newFiles = [...uploadedFiles, ...acceptedFiles];
      setUploadedFiles(newFiles);
      onUploadCompleted(newFiles);
    },
    [onUploadCompleted, limit, uploadedFiles]
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    multiple: !isOneFileOnly,
    disabled,
  });

  useEffect(() => {
    if (initialFiles?.length) {
      setUploadedFiles(initialFiles);
    } else {
      setUploadedFiles([]);
    }
  }, [initialFiles]);

  const handleGoogleDrive = () => {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          apiKey: "AIzaSyCENVD-OrG_k45HHXvRQH5dpSSPe2lPfZ8",
        })
        .then(() => {
          let tokenInfo = gapi.auth.getToken();
          openPicker({
            clientId:
              "78710376447-lbbsjg6rhon7a2q4t658g771t2j99kon.apps.googleusercontent.com",
            developerKey: "AIzaSyCENVD-OrG_k45HHXvRQH5dpSSPe2lPfZ8",
            viewId: "DOCS",
            token: tokenInfo?.access_token,
            supportDrives: true,
            multiselect: !isOneFileOnly,
            callbackFunction: (data) => {
              if (data.action === "cancel") {
                console.log("User clicked cancel/close button");
                return;
              }
              if (!tokenInfo) {
                tokenInfo = gapi.auth.getToken();
              }

              const fetchOptions = {
                headers: {
                  Authorization: `Bearer ${tokenInfo.access_token}`,
                },
              };
              const driveFileUrl = "https://www.googleapis.com/drive/v3/files";
              Promise.all(
                data.docs.map(async (doc) => {
                  let response;
                  if (
                    doc.mimeType === "application/vnd.google-apps.document" ||
                    doc.mimeType ===
                      "application/vnd.google-apps.spreadsheet" ||
                    doc.mimeType === "application/vnd.google-apps.presentation"
                  ) {
                    response = await fetch(
                      `${driveFileUrl}/${doc.id}/export?mimeType=application/pdf`,
                      fetchOptions
                    );
                  } else {
                    response = await fetch(
                      `${driveFileUrl}/${doc.id}?alt=media`,
                      fetchOptions
                    );
                  }
                  return {
                    ...doc,
                    blob: await response.blob(),
                  };
                })
              ).then((responses) => {
                const files = responses.map(
                  (doc) => new File([doc.blob], doc.name)
                );
                const newFiles = [...uploadedFiles, ...files];
                setUploadedFiles(newFiles);
                onUploadCompleted(newFiles);
              });
            },
          });
        });
    });
  };

  const handleDropBox = () => {
    (window as any).Dropbox.choose({
      success: function (files: Dropbox.ChooserFile[]) {
        Promise.all(
          files.map(async (file) => {
            const response = await fetch(file.link);
            return {
              name: file.name,
              blob: await response.blob(),
            };
          })
        ).then((responses) => {
          const files = responses.map((doc) => new File([doc.blob], doc.name));
          const newFiles = [...uploadedFiles, ...files];
          setUploadedFiles(newFiles);
          onUploadCompleted(newFiles);
        });
      },
      cancel: function () {
        console.log("cancelled");
      },
      linkType: "direct",
      multiple: !isOneFileOnly,
    });
  };

  const handleRemove = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => index !== i);
    setUploadedFiles(newFiles);
    onUploadCompleted(newFiles);
  };

  const handleShowFile = (index: number) => {
    const file = uploadedFiles[index];
    setViewFile(file);
  };

  return (
    <Stack
      direction={layoutDirection}
      spacing={2}
      style={{ width: "100%", position: "relative" }}
    >
      <Box
        width={layoutDirection === "row" && cloud ? "50%" : "100%"}
        position={"relative"}
      >
        <input
          {...getInputProps()}
          multiple={!isOneFileOnly}
          accept={accept?.join(",")}
        />
        <Box
          sx={{
            width: "100%",
            borderRadius: 1,
            border: "1px dashed",
            borderColor: "#C9CCDC",
            p: 1,
          }}
        >
          {loading ? (
            <LinearProgress />
          ) : (
            <Box
              {...getRootProps()}
              sx={{
                display: "flex",
                gap: 4,
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#000D1C",
                p: 3,
              }}
            >
              <CloudUploadOutlinedIcon
                sx={{ fontSize: 32, color: "#415DFF" }}
              />
              <Box>
                <Typography variant="body1">
                  <Typography fontWeight={600} color="#415DFF" display="inline">
                    Upload
                  </Typography>{" "}
                  or Drag and drop file
                </Typography>
                {limit && (
                  <Typography variant="subtitle2" color="text.secondary" mt={1}>
                    upto {formatBytes(limit, 2)}
                  </Typography>
                )}
              </Box>
            </Box>
          )}
        </Box>
        {showFileList ? (
          <Box
            className="nowheel"
            sx={{
              maxWidth: 320,
              maxHeight: 220,
              overflowY: "auto",
            }}
          >
            {!!uploadedFiles.length &&
              uploadedFiles.map((file: File, index: number) => (
                <DocumentChip
                  key={`${file.name}-${index}`}
                  label={file.name}
                  deletable={true}
                  selected={false}
                  onClick={() => handleShowFile(index)}
                  onDelete={() => handleRemove(index)}
                />
              ))}
          </Box>
        ) : null}
      </Box>
      {cloud && (
        <>
          <Typography sx={{ opacity: 0.7, textAlign: "center" }}>or</Typography>
          <Box width={layoutDirection === "row" && cloud ? "50%" : "100%"}>
            <Typography variant="body1" fontWeight={600} mb={1}>
              Upload from Drive
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <CloudButton
                name="Google Drive"
                icon={<GoogleDriveIcon />}
                onClick={handleGoogleDrive}
              />
              <ReactOneDriveFilePicker
                clientID="80dadb7e-58c4-44b3-a03b-c91a068139dc"
                action="query"
                multiSelect={!isOneFileOnly}
                onSuccess={(result) => {
                  alert(JSON.stringify(result));
                }}
                onCancel={(result) => {
                  alert(JSON.stringify(result));
                }}
              >
                <CloudButton name="One Drive" icon={<OneDriveIcon />} />
              </ReactOneDriveFilePicker>
              <CloudButton
                name="Dropbox"
                icon={<DropBoxIcon />}
                onClick={handleDropBox}
              />
              <CloudButton
                name="Data Room"
                icon={<DataRoomIcon />}
                onClick={open}
              />
            </Box>
          </Box>
        </>
      )}
      {viewFile ? (
        <FileViewModal
          open={!!viewFile}
          onClose={() => setViewFile(undefined)}
          file={viewFile}
        />
      ) : null}
    </Stack>
  );
};
