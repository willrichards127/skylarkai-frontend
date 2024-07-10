import React, { memo, useCallback, useEffect, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { XModal } from "../../../../components/XModal";

export const SaveSetupModal = memo(
  ({
    open,
    existingSetupName,
    onClose,
    onSaveName,
  }: {
    existingSetupName?: string;
    open: boolean;
    onClose: () => void;
    onSaveName: (setupName: string) => void;
  }) => {
    const [form, setForm] = useState<{
      setup: string;
    }>({
      setup: "",
    });

    const onSave = useCallback(() => {
      onSaveName(form.setup);
      onClose();
    }, [onSaveName, onClose, form]);

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      },
      []
    );

    useEffect(() => {
      if (!existingSetupName) return;
      setForm({ setup: existingSetupName });
    }, [existingSetupName]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="xs"
        header="Save Setup"
        footer={
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button variant="outlined">
              <Box mx={1} onClick={onClose}>
                Cancel
              </Box>
            </Button>
            <Button
              variant="contained"
              disabled={!form.setup}
              onClick={onSave}
              sx={{ minWidth: 92 }}
            >
              Save
            </Button>
          </Box>
        }
      >
        <Stack spacing={2}>
          <TextField
            name="setup"
            label="Setup name"
            value={form.setup}
            onChange={onChange}
            size="small"
            fullWidth
          />
        </Stack>
      </XModal>
    );
  }
);
