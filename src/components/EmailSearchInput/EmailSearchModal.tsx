import React, { useCallback, useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { XModal } from "../XModal";
import { EmailItem } from "./EmailItem";
import { useGetUsersQuery } from "../../redux/services/userAPI";
import { currentUser } from "../../redux/features/authSlice";

export const EmailSearchModal = ({
  initialEmails,
  open,
  onApplied,
  onClose,
}: {
  initialEmails?: string;
  open: boolean;
  onApplied: (value: string) => void;
  onClose: () => void;
}) => {
  const curUser = useSelector(currentUser);
  const [isInMyCompany, setIsInMyCompany] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [emails, setEmails] = useState<string[]>([]);

  const { isLoading, data: users } = useGetUsersQuery();

  const onChangeCompany = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsInMyCompany(event.target.checked);
    },
    []
  );

  const onChangeSelection = useCallback((value: string) => {
    setEmails((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }, []);

  const filteredUsers = useMemo(() => {
    if (!users?.length) return [];
    const filtered = users.filter((user) =>
      user.email.toLowerCase().includes(search.toLocaleLowerCase())
    );
    return filtered.filter((user) =>
      isInMyCompany ? user.tenant_id === curUser.user!.tenant_id : true
    );
  }, [users, search, curUser, isInMyCompany]);

  useEffect(() => {
    if (!initialEmails) return;
    setEmails(initialEmails.split(",").map((item) => item.trim()));
  }, [initialEmails]);

  return (
    <XModal
      open={open}
      onClose={() => onClose()}
      header={<Box textAlign="center">Search Emails</Box>}
      footer={
        <Box display="flex" justifyContent="end" width="100%" px={1} gap={2}>
          <Button variant="outlined" onClick={onClose} sx={{ minWidth: 120 }}>
            Close
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              onApplied(emails.join(", "));
              onClose();
            }}
            disabled={!emails.length}
            sx={{ minWidth: 120 }}
          >
            Add
          </Button>
        </Box>
      }
      size="xs"
    >
      <Stack spacing={1}>
        <TextField
          fullWidth
          size="small"
          placeholder="Enter the email.."
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2" fontSize={12}>
              {filteredUsers.length} email(s)
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={isInMyCompany}
                  onChange={onChangeCompany}
                />
              }
              label={<Box fontSize={12}>Same Company?</Box>}
            />
          </Box>
          <Stack
            spacing={0.5}
            height={400}
            sx={{ overflowY: "auto", border: "1px solid grey", p: 1 }}
          >
            {isLoading ? (
              <Box sx={{ width: "100%", p: 2 }}>
                <CircularProgress />
              </Box>
            ) : filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <EmailItem
                  key={user.id}
                  name={user.username}
                  email={user.email}
                  persona_id={user.persona_id}
                  company={user.company}
                  checked={emails.includes(user.email)}
                  onClick={() => onChangeSelection(user.email)}
                />
              ))
            ) : (
              <Box
                sx={{
                  width: "100%",
                  p: 2,
                  color: "grey",
                  textAlign: "center",
                  fontSize: 12,
                }}
              >
                No matched emails available.
              </Box>
            )}
          </Stack>
        </Box>
      </Stack>
    </XModal>
  );
};
