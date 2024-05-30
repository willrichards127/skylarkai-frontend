import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useGetVDRQuery } from "../../../redux/services/vdrApi";
import { FileUploader } from "../../../components/FileUploader";
import { useEffect, useState } from "react";
import { DocumentChip } from "../../../components/DocumentChip";
import { FileViewModal } from "../../premium/components/sub-components/FileViewModal";
import { useIngestFilesMutation } from "../../../redux/services/setupApi";
import { getDate } from "../../../shared/utils/parse";
import { useNotification } from "../../../shared/socket/NotificationProvider";

export default function VDRDetailPage() {
  const vdrId = useParams<{ vdrId: string }>().vdrId!;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const unitId = searchParams.get("unitId");
  const unitName = searchParams.get("unitName");
  const type = searchParams.get("type");

  const { lastNotification } = useNotification();
  const { data, isLoading, refetch } = useGetVDRQuery({ vdrId: +vdrId });
  const [ingestFiles, { isLoading: isIngesting }] = useIngestFilesMutation();

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewFile, setViewFile] = useState<File>();

  useEffect(() => {
    if (
      lastNotification &&
      lastNotification.event_type === "ingest_completed"
    ) {
      refetch();
    }
  }, [lastNotification]);

  const onCompanyFilesUploaded = (files: File[]) => {
    setSelectedFiles(files);
  };

  const onIngestFiles = async () => {
    if (data && selectedFiles.length) {
      await ingestFiles({
        setupId: data.id,
        companyName: unitName!,
        analysisType: "financial_diligence",
        background: true,
        files: selectedFiles,
      });
      await refetch();
      setSelectedFiles([]);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {isLoading ? (
        <Box textAlign="center" p={4}>
          <CircularProgress />
        </Box>
      ) : data ? (
        <>
          <Box
            sx={{
              width: "100%",
              background: "black",
              p: 1,
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <IconButton
              disabled={isIngesting}
              size="small"
              onClick={() =>
                navigate(
                  `/portal/units/${unitId}/vdrs?unitName=${unitName}&type=${type}`
                )
              }
              sx={{ minWidth: 32, minHeight: 32 }}
            >
              <ArrowBackIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <Typography variant="h6">{data.name}</Typography>
            <Box mr="auto" />
            <Button
              variant="contained"
              sx={{ minWidth: 140, mr: 2 }}
              onClick={onIngestFiles}
              disabled={isIngesting}
            >
              Ingest Files
            </Button>
          </Box>
          <Box sx={{ p: 2 }}>
            <Box>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Select Documents
              </Typography>
              <Box mb={1}>
                <FileUploader
                  initialFiles={selectedFiles}
                  onUploadCompleted={onCompanyFilesUploaded}
                  cloud
                />
              </Box>
              {isIngesting ? (
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", py: 2 }}>
                  <CircularProgress />
                </Box>
              ) : selectedFiles.length ? (
                <Grid container columnSpacing={3} rowSpacing={3}>
                  {selectedFiles.map((file, index) => (
                    <Grid
                      key={`selected-file-${index}`}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      xl={2}
                    >
                      <DocumentChip
                        sx={{ bgcolor: "black", py: 1.5 }}
                        label={file.name}
                        selected={false}
                        deletable
                        onClick={() => {
                          setViewFile(file);
                        }}
                        onDelete={() => {
                          setSelectedFiles((prev) =>
                            prev.filter((f) => f.name !== file.name)
                          );
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : null}
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" sx={{ mb: 1 }}>
              Ingested Documents
            </Typography>
            {data && data.files?.length ? (
              <Grid container columnSpacing={3} rowSpacing={3}>
                {data.files.map((file, index) => (
                  <Grid
                    key={`uploaded-file-${index}`}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                  >
                    <DocumentChip
                      sx={{ bgcolor: "black", py: 1.5 }}
                      label={file.file_name}
                      description={
                        <>
                          <Typography variant="body2" sx={{ fontSize: 11 }}>
                            {!file.ingested_at
                              ? "Pending"
                              : file.ingested
                              ? "Success"
                              : "Fail"}
                          </Typography>
                          {file.ingested_at ? (
                            <Typography variant="body2" sx={{ fontSize: 11 }}>
                              {getDate(new Date(file.ingested_at))}
                            </Typography>
                          ) : null}
                        </>
                      }
                      selected={false}
                      renderIcon={() => (
                        <Box
                          sx={{
                            width: 16,
                            height: 16,
                            borderRadius: "100%",
                            bgcolor: !file.ingested_at
                              ? "orange"
                              : file.ingested
                              ? "green"
                              : "red",
                          }}
                        />
                      )}
                      onClick={() => {}}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : null}
          </Box>
        </>
      ) : null}
      {viewFile ? (
        <FileViewModal
          open={!!viewFile}
          onClose={() => setViewFile(undefined)}
          file={viewFile}
        />
      ) : null}
    </Box>
  );
}
