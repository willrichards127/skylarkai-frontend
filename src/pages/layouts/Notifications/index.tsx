import { useCallback, useState } from "react";
import {
  IconButton,
  Badge,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NotificationItem } from "./NotificationItem";
import { useNotification } from "../../../shared/socket/NotificationProvider";

export const Notifications = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const { notifications, sendMessage } = useNotification();

  const onOpenMenu = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    sendMessage();
  }, []);

  const onClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = !!anchorEl;

  return (
    <>
      <IconButton onClick={onOpenMenu}>
        <Badge color="info" variant="dot" invisible={notifications.every(notification => notification.marked)}>
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
            maxWidth: 320,
            maxHeight: 360,
          },
          "& .MuiPaper-root": {
            borderRadius: 2,
            border: "1px solid",
            borderColor: "primary.main",
            bgcolor: "secondary.dark",
          },
        }}
      >
        {!notifications.length ? (
          <MenuItem sx={{ textAlign: "center", fontSize: 10, color: "grey" }}>
            No notifications available.
          </MenuItem>
        ) : (
          notifications.map((notification, index) => (
            <MenuItem key={`notification-${index}`}>
              <NotificationItem notification={notification} />
              <Divider style={{ margin: 0 }} />
            </MenuItem>
          ))
        )}
      </Menu>
    </>
  );
};
