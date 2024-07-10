import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Stack,
  MenuItem,
} from "@mui/material";
import { XModal } from "../../../components/XModal";
import { useSelector } from "react-redux";
import { currentUser } from "../../../redux/features/authSlice";

export const NewTicketModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { user } = useSelector(currentUser);

  const [ticket, setTicket] = useState<{ feature_id: number; message: string }>(
    {
      feature_id: 1,
      message: "",
    }
  );

  return (
    <XModal
      open={open}
      onClose={onClose}
      size="md"
      header="Create New Support"
      footer={
        <Box
          sx={{
            textAlign: "right",
            pr: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{ minWidth: 120 }}
            disabled={!ticket.feature_id || !ticket.message}
          >
            Submit
          </Button>
        </Box>
      }
    >
      <Stack spacing={4} direction="row">
        <Stack spacing={2} width="50%">
          <Typography variant="body1" gutterBottom>
            Select Feature
          </Typography>
          <TextField
            select
            fullWidth
            size="small"
            value={ticket.feature_id}
            onChange={(e) =>
              setTicket((prev) => ({ ...prev, feature_id: +e.target.value }))
            }
          >
            {(user!.main_features || []).map((feature) => (
              <MenuItem key={feature.id} value={feature.id}>
                {feature.feature}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack spacing={2} width="50%">
          <Typography variant="body1" gutterBottom>
            Your Message
          </Typography>
          <TextField
            fullWidth
            size="small"
            multiline
            rows={5}
            placeholder="Enter your message"
            value={ticket.message}
            onChange={(e) =>
              setTicket((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </Stack>
      </Stack>
    </XModal>
  );
};
