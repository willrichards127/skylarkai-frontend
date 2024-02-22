import { memo, useCallback, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { XModal } from "../../../../components/XModal";

export const SearchTextModal = memo(
  ({
    open,
    onSearch,
    onClose,
  }: {
    open: boolean;
    onSearch: (text: string) => void;
    onClose: () => void;
  }) => {
    const [searchText, setSearchText] = useState<string>("");
    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchText(e.target.value);
      },
      []
    );

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="sm"
        header={<Box mb={2}>Search Text</Box>}
        footer={
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={!searchText}
              onClick={() => {
                onSearch(searchText);
                onClose();
              }}
            >
              Search
            </Button>
          </Box>
        }
      >
        <TextField
          fullWidth
          value={searchText}
          onChange={onChange}
          autoComplete="reset-password"
        />
      </XModal>
    );
  }
);
