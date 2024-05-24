import { ReactNode, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentUser } from "../../../../redux/features/authSlice";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Divider,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { leftNavWidth } from "../../../../shared/models/constants";
import { IMainFeature } from "../../../../redux/interfaces";

export const LeftNavbar = ({
  featureNavSection,
}: {
  featureNavSection?: ReactNode;
}) => {
  const { featureId } = useParams();

  const navigate = useNavigate();
  const { user } = useSelector(currentUser);

  const onItem = useCallback(
    (itemId: number) => {
      navigate(`/features/${itemId}`);
    },
    [navigate]
  );

  return (
    <Box
      sx={{
        width: leftNavWidth,
        bgcolor: "#060606",
        p: 2,
        height: "100%",
      }}
    >
      <List sx={{ maxHeight: 480, overflowY: "auto" }}>
        {(user!.main_features || []).map((item: IMainFeature) => (
          <ListItem disablePadding key={item.id}>
            <ListItemButton
              disabled={item.id < 5}
              selected={featureId === item.id.toString()}
              onClick={() => onItem(item.id)}
            >
              <ListItemIcon>
                <CircleIcon
                  sx={{
                    fontSize: 16,
                    color:
                      featureId === item.id.toString()
                        ? "green"
                        : "rgba(50,50,50,0.4)",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={<Box fontSize={14}>{item.feature}</Box>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {featureNavSection}
    </Box>
  );
};
