/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Logo,
  FeaturesIcon,
  HelpIcon as Help2Icon,
  SupportIcon,
} from "../../components/Svgs";
import { Notifications } from "./Notifications";
import { XPopmenu } from "../../components/XPopmenu";
import { currentUser, clearUserInfo } from "../../redux/features/authSlice";
import { HeaderConfig } from "../../shared/models/constants";
import { useGetSubScriptionFeaturesQuery } from "../../redux/services/mainFeaturesAPI";
import { useAddUserActivityMutation } from "../../redux/services/userAPI";

const profileDropdownItems = [
  {
    id: "help",
    content: (
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <HelpIcon />
        Help
      </Box>
    ),
    clickable: true,
  },
  {
    id: "logout",
    content: (
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <LogoutIcon />
        Logout
      </Box>
    ),
    clickable: true,
  },
];

export const MainAppBar = memo(() => {
  const { userInfo: user } = useSelector(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { data: features } = useGetSubScriptionFeaturesQuery({
    subscription_id: user.subscription_id,
  });
  const [addActivity] = useAddUserActivityMutation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onFeatures = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  }, []);

  const onItem = useCallback(
    (itemId: string) => {
      if (itemId === "logout") {
        addActivity({ user_action_id: 2 }); // 2: logout
        dispatch(clearUserInfo() as any);
      }
      if (itemId === "help") {
        navigate("/help");
      }
    },
    [navigate, dispatch, addActivity]
  );

  return (
    <AppBar position="static" color="secondary" enableColorOnDark>
      <Toolbar
        sx={{
          minHeight: `${HeaderConfig.mainToolbarHeight}px !important`,
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Logo />
          <Box mr="auto" />
          <Notifications />
          <Box ml={2}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box textAlign="right">
                <Typography variant="body2" fontWeight="bold">
                  {user.username}
                </Typography>
                <Typography variant="caption">USA</Typography>
              </Box>
              <XPopmenu
                onItem={onItem}
                triggerEl={
                  <IconButton>
                    <Avatar
                      variant="rounded"
                      src="/staf.png"
                      sx={{ bgcolor: "white" }}
                    />
                  </IconButton>
                }
                items={profileDropdownItems}
              />
            </Box>
          </Box>
        </Box>
      </Toolbar>
      <Box
        sx={{
          bgcolor: "secondary.main",
          height: HeaderConfig.subToolbarHeight,
          px: 4,
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, height: "100%" }}
        >          
          <Box
            sx={{
              ml: 4,
            }}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Box
                component={Link}
                to="/premium"
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  color: "white",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: location.pathname.includes("/premium")
                    ? "bold"
                    : "normal",
                  opacity: location.pathname.includes("/premium")
                    ? 1
                    : 0.3,
                }}
              >
                <FeaturesIcon />
                Features
              </Box>
              <Box onClick={onFeatures} sx={{ cursor: "pointer", pt: 1 }}>
                <ExpandMoreIcon />
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {(features || []).map((feature) => (
                  <MenuItem
                    key={feature.id}
                    selected={
                      location.pathname === `/premium/${feature.id}`
                    }
                    onClick={() => {
                      setAnchorEl(null);
                      navigate(`/premium/${feature.id}`);
                    }}
                  >
                    {feature.feature}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
          <Box
            component={Link}
            to="/help"
            sx={{
              ml: 4,
              color: "white",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: location.pathname.includes("/help")
                ? "bold"
                : "normal",
              opacity: location.pathname.includes("/help") ? 1 : 0.3,
            }}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Help2Icon />
              Help
            </Box>
          </Box>
          <Box
            component={Link}
            to="/support"
            sx={{
              ml: 4,
              color: "white",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: location.pathname.includes("/support")
                ? "bold"
                : "normal",
              opacity: location.pathname.includes("/support") ? 1 : 0.3,
            }}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <SupportIcon />
              Support
            </Box>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
});
