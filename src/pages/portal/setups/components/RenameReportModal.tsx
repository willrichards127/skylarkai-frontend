import React, { memo, useCallback, useEffect, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { XModal } from "../../../../components/XModal";

export const RenameReportModal = memo(
  ({
    open,
    data,
    onClose,
    onSaveName,
  }: {
    data: {name: string; id: number};
    open: boolean;
    onClose: () => void;
    onSaveName: (id: number, newName: string) => void;
  }) => {
    const [form, setForm] = useState<{
      name: string;
    }>({
      name: "",
    });

    const onSave = useCallback(() => {
      onSaveName(data.id, form.name);
      onClose();
    }, [onSaveName, data.id, form.name, onClose]);

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      },
      []
    );

    useEffect(() => {
      setForm({ name: data.name });
    }, [data.name]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="xs"
        header="Rename Report"
        footer={
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button variant="outlined">
              <Box mx={1} onClick={onClose}>
                Cancel
              </Box>
            </Button>
            <Button
              variant="contained"
              disabled={!form.name}
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
            name="name"
            label="Report name"
            value={form.name}
            onChange={onChange}
            size="small"
            fullWidth
          />
        </Stack>
      </XModal>
    );
  }
);
