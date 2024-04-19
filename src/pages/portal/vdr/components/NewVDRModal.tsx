import { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

import { XModal } from "../../../../components/XModal";
import { useSaveVDRMutation } from "../../../../redux/services/vdrApi";

export const NewVDRModal = memo(
  ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const [name, setName] = useState<string>("");

    const navigate = useNavigate();
    const [saveVDR, { isLoading, isSuccess, data }] = useSaveVDRMutation();

    const onCreateNew = useCallback(() => {
      if (name) {
        saveVDR({ data: { name } });
      }
    }, [saveVDR, name]);

    useEffect(() => {
      if (isSuccess && data) {
        navigate(`/portal/vdrs/${data.id}`);
      }
    }, [navigate, isSuccess, data]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="md"
        header="New Virtual Data Room"
        footer={
          <Box
            sx={{
              width: "100%",
              display: "flex",
              p: 2,
              borderRadius: 2,
              bgcolor: "secondary.main",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold" mr="auto">
              Create New Virtual Data Room
            </Typography>
            <Button
              variant="contained"
              sx={{ minWidth: 120 }}
              onClick={onCreateNew}
            >
              Create New
            </Button>
          </Box>
        }
      >
        {isLoading ? (
          <Box textAlign="center" p={4}>
            <CircularProgress />
          </Box>
        ) : (
          <Box pt={2}>
            <TextField
              label="VDR name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size="small"
              fullWidth
            />
          </Box>
        )}
      </XModal>
    );
  }
);

NewVDRModal.displayName = "NewVDRModal";
