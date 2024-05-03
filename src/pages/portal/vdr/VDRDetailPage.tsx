import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetVDRQuery } from "../../../redux/services/vdrApi";
import { FileUploader } from "../../../components/FileUploader";
import { useEffect, useState } from "react";
import { DocumentChip } from "../../../components/DocumentChip";
import { FileViewModal } from "../../premium/components/sub-components/FileViewModal";
import { useIngestFilesMutation } from "../../../redux/services/setupApi";
import { getDate } from "../../../shared/utils/parse";

export default function VDRDetailPage() {
  const vdrId = useParams<{ vdrId: string }>().vdrId!;
  const [searchParams] = useSearchParams();
  const unitName = searchParams.get("unitName");

  const { data, isLoading, refetch } = useGetVDRQuery({ vdrId: +vdrId });
  const [ingestFiles] = useIngestFilesMutation();

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [viewFile, setViewFile] = useState<File>();

  useEffect(() => {
    const p = setInterval(() => refetch(), 1000 * 60 * 1);
    return () => clearInterval(p);
  }, []);

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
            sx={{ width: "100%", minHeight: 100, background: "black", p: 2 }}
          >
            <Typography variant="h6">{data.name}</Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "end", mb: 1 }}>
                <Button
                  variant="contained"
                  sx={{ minWidth: 140 }}
                  onClick={onIngestFiles}
                >
                  Ingest File
                </Button>
              </Box>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Select Documents
              </Typography>
              <Box mb={1}>
                <FileUploader
                  onUploadCompleted={onCompanyFilesUploaded}
                  cloud
                />
              </Box>
              {selectedFiles.length ? (
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
