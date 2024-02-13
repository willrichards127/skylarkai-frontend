import React, { memo, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Box, Button, TextField, CircularProgress } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { XModal } from "../../../../components/XModal";
import { NeutralLoadingButton } from "../../../../components/buttons/NeutralLoadingButton";
import { useAddTargetCompanyMutation } from "../../../../redux/services/workOrderApi";

export const NewCompanyModal = memo(
  ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const [addTargetCompany, { isLoading, isSuccess }] =
      useAddTargetCompanyMutation();
    const [form, setForm] = useState<{
      companyName: string;
      logo?: string;
    }>({
      companyName: "",
    });

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      },
      []
    );

    const onAddCompany = useCallback(() => {
      addTargetCompany(form);
    }, [addTargetCompany, form]);

    useEffect(() => {
      if (isSuccess) {
        toast.success("The new company was added successfully.");
        onClose();
      }
    }, [isSuccess, onClose]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="sm"
        header="Add New Company"
        footer={
          <Box
            sx={{
              width: "100%",
              display: "flex",
              p: 2,
              gap: 1,
              borderRadius: 2,
              bgcolor: "secondary.main",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="outlined" sx={{ minWidth: 120 }} onClick={onClose}>
              Close
            </Button>
            <NeutralLoadingButton
              loading={isLoading}
              variant="contained"
              sx={{ minWidth: 120 }}
              onClick={onAddCompany}
              disabled={!form.companyName}
            >
              Add Company
            </NeutralLoadingButton>
          </Box>
        }
      >
        {isLoading ? (
          <Box textAlign="center" p={4}>
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 4, pt: 2 }}>
            <Box
              sx={{
                borderRadius: "50%",
                width: 90,
                height: 90,
                bgcolor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {form.logo ? (
                <img
                  src={form.logo}
                  width={90}
                  height={90}
                  alt="company logo"
                  style={{ position: "absolute", left: 0, top: 0 }}
                />
              ) : (
                <CameraAltIcon
                  sx={{ color: "grey", fontSize: 36, cursor: "pointer" }}
                />
              )}
            </Box>
            <TextField
              size="small"
              name="companyName"
              label="Target Company"
              value={form.companyName}
              onChange={onChange}
              sx={{ width: 400 }}
            />
          </Box>
        )}
      </XModal>
    );
  }
);

NewCompanyModal.displayName = "NewCompanyModal";
