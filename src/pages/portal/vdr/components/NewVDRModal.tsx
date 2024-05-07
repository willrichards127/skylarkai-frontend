import { memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, TextField, CircularProgress } from "@mui/material";

import { XModal } from "../../../../components/XModal";
import { useSaveVDRMutation } from "../../../../redux/services/vdrApi";

export const NewVDRModal = memo(
  ({
    open,
    unitId,
    type,
    unitName,
    onClose,
  }: {
    unitId: string;
    type: string;
    unitName: string;
    open: boolean;
    onClose: () => void;
  }) => {
    const [name, setName] = useState<string>("");

    const params = useParams();
    const navigate = useNavigate();
    const [saveVDR, { isLoading, isSuccess, data }] = useSaveVDRMutation();

    const onCreateNew = useCallback(() => {
      if (name) {
        saveVDR({ unitId: +params.unitId!, data: { name } });
      }
    }, [saveVDR, params, name]);

    useEffect(() => {
      if (isSuccess && data) {
        navigate(
          `/portal/vdrs/${data.id}?unitId=${unitId}&unitName=${unitName}&type=${type}`
        );
      }
    }, [navigate, isSuccess, data, unitId, unitName, type]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="sm"
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
              justifyContent: "flex-end",
            }}
          >
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
