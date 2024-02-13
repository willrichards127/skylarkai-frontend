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
import { useGetSubScriptionFeaturesQuery } from "../../../../redux/services/mainFeaturesAPI";
import { IMainFeature } from "../../../../redux/interfaces";

export const LeftNavbar = ({
  featureNavSection,
}: {
  featureNavSection?: ReactNode;
}) => {
  const { featureId } = useParams();

  const navigate = useNavigate();
  const { userInfo: user } = useSelector(currentUser);

  const { data: features } = useGetSubScriptionFeaturesQuery({
    subscription_id: user.subscription_id,
  });

  const onItem = useCallback(
    (itemId: number) => {
      navigate(`/premium/${itemId}`);
    },
    [navigate]
  );

  return (
    <Box
      sx={{
        width: leftNavWidth,
        bgcolor: "#060606",
        p: 3,
        height: "100%",
      }}
    >
      <List sx={{ maxHeight: 480, overflowY: "auto" }}>
        {(features || []).map((item: IMainFeature) => (
          <ListItem disablePadding key={item.id}>
            <ListItemButton
              selected={featureId === item.id.toString()}
              onClick={() => onItem(item.id)}
            >
              <ListItemIcon>
                <CircleIcon
                  sx={{
                    color:
                      featureId === item.id.toString()
                        ? "green"
                        : "rgba(50,50,50,0.4)",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={item.feature} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {featureNavSection}
    </Box>
  );
};
