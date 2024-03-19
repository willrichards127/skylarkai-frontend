/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useMemo, useState } from "react";
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
  Button,
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
  WelcomeIcon,
  // AdvancedFeaturesIcon,
  AnalysisIcon,
  ToolsIcon,
} from "../../components/Svgs";
import { Notifications } from "./Notifications";
import { XPopmenu } from "../../components/XPopmenu";
import { currentUser, clearUserInfo } from "../../redux/features/authSlice";
import { HeaderConfig } from "../../shared/models/constants";
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
  const { user } = useSelector(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isPortal = useMemo(
    () => location.pathname.includes("/portal/"),
    [location]
  );

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

  const isAdmin = user!.user_role === 4; // user_role = 4: admin

  const isEnterprise = user!.user_categorization_id === 2;

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
                  {user!.username}
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
      {!isAdmin ? (
        <Box
          sx={{
            bgcolor: "secondary.main",
            height: HeaderConfig.subToolbarHeight,
            px: 4,
          }}
        >
          {isPortal ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                height: "100%",
              }}
            >
              {/* <Box
                component={Link}
                to="/portal/dashboard"
                sx={{
                  ml: 4,
                  color: "white",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: location.pathname.includes("/portal/dashboard")
                    ? "bold"
                    : "normal",
                  opacity: location.pathname.includes("/portal/dashboard")
                    ? 1
                    : 0.3,
                }}
              >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <WelcomeIcon />
                  Dashboard
                </Box>
              </Box> */}
              <Box
                sx={{
                  ml: 4,
                }}
              >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Box
                    component={Link}
                    to="/welcome"
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      color: "white",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: location.pathname.includes("/features")
                        ? "bold"
                        : "normal",
                      opacity: location.pathname.includes("/features")
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
                    {(user!.main_features || []).map((feature) => (
                      <MenuItem
                        key={feature.id}
                        selected={
                          location.pathname === `/features/${feature.id}`
                        }
                        onClick={() => {
                          setAnchorEl(null);
                          navigate(`/features/${feature.id}`);
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
                to="/portal/reports"
                sx={{
                  ml: 4,
                  color: "white",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: location.pathname.includes("/portal/reports")
                    ? "bold"
                    : "normal",
                  opacity: location.pathname.includes("/portal/reports")
                    ? 1
                    : 0.3,
                }}
              >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <AnalysisIcon />
                  Analysis
                </Box>
              </Box>
              <Box
                component={Link}
                to="/portal/setups"
                sx={{
                  ml: 4,
                  color: "white",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: location.pathname.includes("/portal/setups")
                    ? "bold"
                    : "normal",
                  opacity: location.pathname.includes("/portal/setups")
                    ? 1
                    : 0.3,
                }}
              >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <ToolsIcon />
                  Tools
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

              <Box component={Link} to="/features/1" ml="auto">
                <Button variant="contained" sx={{ minWidth: 160 }}>
                  Access Premium Portal
                </Button>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  height: "100%",
                }}
              >
                {isEnterprise && (
                  <Box
                    component={Link}
                    to="/welcome"
                    sx={{
                      ml: 4,
                      color: "white",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: location.pathname.includes("/welcome")
                        ? "bold"
                        : "normal",
                      opacity: location.pathname.includes("/welcome") ? 1 : 0.3,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <WelcomeIcon />
                      Welcome
                    </Box>
                  </Box>
                )}
                <Box
                  sx={{
                    ml: 4,
                  }}
                >
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Box
                      component={Link}
                      to="/welcome"
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        color: "white",
                        textDecoration: "none",
                        fontSize: 14,
                        fontWeight: location.pathname.includes("/features")
                          ? "bold"
                          : "normal",
                        opacity: location.pathname.includes("/features")
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
                      {(user!.main_features || []).map((feature) => (
                        <MenuItem
                          key={feature.id}
                          selected={
                            location.pathname === `/features/${feature.id}`
                          }
                          onClick={() => {
                            setAnchorEl(null);
                            navigate(`/features/${feature.id}`);
                          }}
                        >
                          {feature.feature}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Box>
                {/* {isEnterprise && (
                  <Box
                    component={Link}
                    to="/advanced-features"
                    sx={{
                      ml: 4,
                      color: "white",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: location.pathname.includes(
                        "/advanced-features"
                      )
                        ? "bold"
                        : "normal",
                      opacity: location.pathname.includes("/advanced-features")
                        ? 1
                        : 0.3,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <AdvancedFeaturesIcon />
                      Advanced Features
                    </Box>
                  </Box>
                )} */}
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
              {isEnterprise && (
                <Link to="/portal/reports">
                  <Button variant="contained" sx={{ minWidth: 160 }}>
                    Access Enterprise Portal
                  </Button>
                </Link>
              )}
            </Box>
          )}
        </Box>
      ) : null}
    </AppBar>
  );
});
