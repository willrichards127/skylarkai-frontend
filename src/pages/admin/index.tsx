import { useCallback, useState } from "react";
// import { useSelector } from "react-redux";
import { colors, Box, Tabs, Tab } from "@mui/material";
import { UserManagement } from "./components/UserManagement";
import { SystemManagement } from "./components/SystemManagement";
// import { currentUser } from "../../redux/features/authSlice";

const tabs = ["User Management", "System Management"];

const AdminPage = () => {
  // const { user } = useSelector(currentUser);

  const [tab, setTab] = useState<string>(tabs[0]);

  const onChange = useCallback((_: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  }, []);

  return (
    <Box>
      <Tabs
        value={tab}
        onChange={onChange}
        indicatorColor="primary"
        textColor="inherit"
        sx={{
          "&.MuiTabs-root": {
            borderBottom: "1px solid",
            borderColor: colors.grey[800],
          },
        }}
      >
        {["User Management", "System Management"].map((tabItem) => (
          <Tab key={tabItem} label={tabItem} value={tabItem} />
        ))}
      </Tabs>
      {tab === tabs[0] && <UserManagement />}
      {tab === tabs[1] && <SystemManagement />}
    </Box>
  );
};

export default AdminPage;
