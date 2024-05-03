import React, { memo, useCallback, useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Box, Stack, Button, TextField, CircularProgress } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { XModal } from "../../../../components/XModal";
import { NeutralLoadingButton } from "../../../../components/buttons/NeutralLoadingButton";
import { useAddUnitMutation } from "../../../../redux/services/setupApi";

export const NewUnitModal = memo(
  ({
    open,
    category,
    onClose,
  }: {
    category: string;
    open: boolean;
    onClose: () => void;
  }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [addUnit, { isLoading, isSuccess }] = useAddUnitMutation();
    const [form, setForm] = useState<{
      name: string;
      website?: string;
      description?: string;
      logo_file?: File;
      logo?: string;
    }>({
      name: "",
    });

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      },
      []
    );

    const onAddUnit = useCallback(() => {
      addUnit({
        ...form,
        type: category === "company" ? 1 : 2,
      });
    }, [addUnit, form, category]);

    const onUploadLogo = useCallback(() => {
      if (!fileInputRef.current) return;
      fileInputRef.current.click();
    }, []);

    const onFileChange = useCallback(() => {
      if (fileInputRef.current && fileInputRef.current?.files?.length) {
        const selectedFile = fileInputRef.current.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          setForm((prev) => ({
            ...prev,
            logo: reader.result,
            logo_file: selectedFile,
          }));
        };
        reader.readAsDataURL(selectedFile);
      }
    }, []);

    useEffect(() => {
      if (isSuccess) {
        toast.success(`The new ${category} was added successfully.`);
        onClose();
      }
    }, [isSuccess, category, onClose]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="sm"
        header={`Add new ${category}`}
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
              // loading={isLoading}
              variant="contained"
              sx={{ minWidth: 120 }}
              onClick={onAddUnit}
              disabled={!form.name}
            >
              Add {category}
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
              <input
                type="file"
                ref={fileInputRef}
                onChange={onFileChange}
                style={{ display: "none" }}
              />
              {form.logo_file ? (
                <img
                  src={form.logo}
                  width={90}
                  height={90}
                  alt="company logo"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    borderRadius: "50%",
                    border: "2px solid white",
                  }}
                />
              ) : (
                <CameraAltIcon
                  sx={{ color: "grey", fontSize: 36, cursor: "pointer" }}
                  onClick={onUploadLogo}
                />
              )}
            </Box>
            <Stack spacing={2}>
              <TextField
                size="small"
                name="name"
                label={`${category} name`}
                value={form.name}
                onChange={onChange}
                sx={{ width: 400, textTransform: "capitalize" }}
              />
              {category === "company" && (
                <TextField
                  size="small"
                  name="website"
                  label="Website (Optional)"
                  value={form.website}
                  onChange={onChange}
                  sx={{ width: 400 }}
                />
              )}
              <TextField
                size="small"
                name="description"
                multiline
                rows={6}
                label={`Description (Optional)`}
                value={form.description}
                onChange={onChange}
                sx={{ width: 400, textTransform: "capitalize" }}
              />
            </Stack>
          </Box>
        )}
      </XModal>
    );
  }
);
