import { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { XModal } from "../../../../components/XModal";
import { EmailSearchInput } from "../../../../components/EmailSearchInput";

export const InviteCollaboraterModal = ({
  open,
  onActionPerformed,
  onClose,
}: {
  open: boolean;
  onActionPerformed: (value: string) => void;
  onClose: () => void;
}) => {
  const [emails, setEmails] = useState<string>("");

  return (
    <XModal
      open={open}
      onClose={() => onClose()}
      header={<Box textAlign="center">Send Invitation</Box>}
      footer={
        <Box display="flex" justifyContent="end" width="100%" px={1} gap={2}>
          <Button variant="outlined" onClick={onClose} sx={{ minWidth: 120 }}>
            Close
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              onActionPerformed(emails);
              onClose();
            }}
            disabled={!emails}
            sx={{ minWidth: 120 }}
          >
            Send Invitation
          </Button>
        </Box>
      }
      size="xs"
    >
      <Stack spacing={1}>
        <EmailSearchInput
          value={emails}
          onChanged={(value) => setEmails(value)}
        />
      </Stack>
    </XModal>
  );
};
