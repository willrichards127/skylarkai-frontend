import React, { memo, useCallback, useEffect, useState } from "react";
import { Box, Button, TextField, Stack } from "@mui/material";
import { XModal } from "../XModal";
import { LoadingSpinner } from "../loading-spinners/LoadingSpinner";
import { toast } from "react-toastify";
import { useSendReportsViaEmailsMutation } from "../../redux/services/transcriptAPI";

export const SendEmailModal = memo(
  ({
    open,
    onClose,
    content,
    initialSubject,
  }: {
    open: boolean;
    content: string; // base64 string
    initialSubject?: string;
    onClose: () => void;
  }) => {
    const [sendEmails, { isLoading, isSuccess, isError }] =
      useSendReportsViaEmailsMutation();
    const [subject, setSubject] = useState<string>("");
    const [emails, setEmails] = useState<string>("");

    const onChangeSubject = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(e.target.value);
      },
      []
    );

    const onChangeEmails = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmails(e.target.value);
      },
      []
    );

    const onSend = useCallback(() => {
      sendEmails({
        subject,
        base64str: content,
        emails: emails.split(",").map((email) => email.trim()),
      });
      onClose()
    }, [subject, emails, content, sendEmails, onClose]);

    useEffect(() => {
      if (initialSubject) setSubject(initialSubject);
    }, [initialSubject]);

    if (isSuccess) {
      toast.success("Sent the report.");
    }

    if (isError) {
      toast.error("Failed to send the report.");
    }

    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box textAlign="center">Send Report</Box>}
        footer={
          <Box textAlign="center" width="100%">
            <Button
              variant="contained"
              onClick={onSend}
              disabled={!subject || !emails || !emails.includes("@")}
            >
              Send
            </Button>
          </Box>
        }
        size="sm"
      >
        {isLoading ? (
          <LoadingSpinner size={114} loadingDescription="Exporting the file" />
        ) : (
          <Stack px={3} spacing={2}>
            <TextField
              label="Subject"
              fullWidth
              value={subject}
              onChange={onChangeSubject}
              size="small"
            />
            <TextField
              label="Emails"
              fullWidth
              value={emails}
              onChange={onChangeEmails}
              size="small"
            />
          </Stack>
        )}
      </XModal>
    );
  }
);
