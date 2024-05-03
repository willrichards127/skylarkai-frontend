import React, { memo, useCallback, useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Box, Stack, Button, TextField, CircularProgress } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { XModal } from "../../../../components/XModal";
import { NeutralLoadingButton } from "../../../../components/buttons/NeutralLoadingButton";
import {
  useAddUnitMutation,
  useUpdateUnitMutation,
} from "../../../../redux/services/setupApi";

export const NewUnitModal = memo(
  ({
    open,
    initialUnit,
    category,
    onClose,
  }: {
    category: string;
    initialUnit: any;
    open: boolean;
    onClose: () => void;
  }) => {
    const isEdit = !!initialUnit;
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [addUnit, { isLoading: isLoadingAdd, isSuccess: isSuccessAdd }] =
      useAddUnitMutation();
    const [
      updateUnit,
      { isLoading: isLoadingUpdate, isSuccess: isSuccessUpdate },
    ] = useUpdateUnitMutation();
    const [form, setForm] = useState<{
      id?: number;
      name: string;
      website?: string;
      logo_file?: File;
      logo?: string;
      description?: string;
    }>({
      name: "",
    });

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      },
      []
    );

    const onAction = useCallback(() => {
      if (isEdit) {
        updateUnit({
          ...form,
          id: form.id!,
        });
      } else {
        addUnit({
          ...form,
          type: category === "company" ? 1 : 2,
        });
      }
    }, [addUnit, isEdit, updateUnit, form, category]);

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
      if (isSuccessAdd || isSuccessUpdate) {
        toast.success(
          `The new ${category} was ${
            isEdit ? "updated" : "added"
          } successfully.`
        );
        onClose();
      }
    }, [isSuccessAdd, isSuccessUpdate, category, isEdit, onClose]);

    useEffect(() => {
      if (!initialUnit) return;
      setForm({
        id: initialUnit.id,
        description: initialUnit.description,
        website: initialUnit.website,
        name: initialUnit.name,
        logo: `${import.meta.env.VITE_API_URL}api/static/avatar/${
          initialUnit.logo
        }`,
      });
    }, [initialUnit]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="md"
        header={`${isEdit ? "Update" : "Add new"} ${category}`}
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
              loading={isLoadingAdd || isLoadingUpdate}
              variant="contained"
              sx={{ minWidth: 120 }}
              onClick={onAction}
              disabled={!form.name}
            >
              {isEdit ? "Update" : "Add"} {category}
            </NeutralLoadingButton>
          </Box>
        }
      >
        {isLoadingAdd || isLoadingUpdate ? (
          <Box textAlign="center" p={4}>
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 4, p: 2 }}>
            <Box
              sx={{
                borderRadius: "50%",
                width: 120,
                height: 120,
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
              {form.logo ? (
                <img
                  src={form.logo}
                  width={120}
                  height={120}
                  alt="company logo"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    borderRadius: "50%",
                    border: "2px solid white",
                    cursor: "pointer",
                  }}
                  onClick={onUploadLogo}
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
                sx={{ width: 600, textTransform: "capitalize" }}
              />
              {category === "company" && (
                <TextField
                  size="small"
                  name="website"
                  label="Website (Optional)"
                  value={form.website}
                  onChange={onChange}
                  sx={{ width: 600 }}
                />
              )}
              <TextField
                size="small"
                name="description"
                label={`${category} Description`}
                value={form.description}
                rows={4}
                multiline
                onChange={onChange}
                sx={{ width: 600, textTransform: "capitalize" }}
              />
            </Stack>
          </Box>
        )}
      </XModal>
    );
  }
);
