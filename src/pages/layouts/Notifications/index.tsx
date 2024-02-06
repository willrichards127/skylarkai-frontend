import { useCallback, useState } from "react";
import {
  IconButton,
  Badge,
  Divider,
  Menu,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NotificationItem } from "./NotificationItem";
import { useLazyGetFetchFileLogsQuery } from "../../../redux/services/transcriptAPI";

export const Notifications = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const [fetchNotifications, { data: notifications, isLoading }] =
    useLazyGetFetchFileLogsQuery();

  const onOpenMenu = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(e.currentTarget);
      fetchNotifications();
    },
    [fetchNotifications]
  );

  const onClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = !!anchorEl;

  return (
    <>
      <IconButton onClick={onOpenMenu}>
        <Badge color="info" variant="dot" invisible={!notifications?.length}>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiList-root": {
            padding: 0,
          },
          "& .MuiPaper-root": {
            borderRadius: 2,
            border: "1px solid",
            borderColor: "primary.main",
            bgcolor: "secondary.dark",
          },
        }}
      >
        {isLoading ? (
          <MenuItem sx={{ textAlign: "center", fontSize: 16 }}>
            <CircularProgress />
          </MenuItem>
        ) : !notifications?.length ? (
          <MenuItem sx={{ textAlign: "center", fontSize: 10, color: "grey" }}>
            No notifications available.
          </MenuItem>
        ) : (
          notifications!.map((notification) => (
            <MenuItem key={notification.id}>
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
              <Divider style={{ margin: 0 }} />
            </MenuItem>
          ))
        )}
      </Menu>
    </>
  );
};
