import { useState, useCallback } from "react";
import { TextField, Box, IconButton } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { EmailSearchModal } from "./EmailSearchModal";

export const EmailSearchInput = ({
  value,
  onChanged,
}: {
  value: string;
  onChanged: (value: string) => void;
}) => {
  const [searchModal, showSearchModal] = useState<boolean>(false);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChanged(e.target.value);
    },
    [onChanged]
  );

  const onApplied = useCallback(
    (value: string) => {
      onChanged(value);
    },
    [onChanged]
  );

  const onSearchModal = useCallback(() => {
    showSearchModal(true);
  }, []);

  return (
    <Box
      sx={{ width: "100%", display: "flex", gap: 1, alignItems: "flex-start" }}
    >
      <TextField
        fullWidth
        value={value}
        onChange={onChange}
        size="small"
        helperText="You can input several emails by adding comma(,)."
      />
      <IconButton size="small" onClick={onSearchModal} sx={{ mt: 0.5 }}>
        <PersonSearchIcon />
      </IconButton>
      {searchModal && (
        <EmailSearchModal
          initialEmails={value}
          open={searchModal}
          onClose={() => showSearchModal(false)}
          onApplied={onApplied}
        />
      )}
    </Box>
  );
};
