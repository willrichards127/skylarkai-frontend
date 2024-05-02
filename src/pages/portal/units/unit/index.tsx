import { Outlet, useParams, useSearchParams } from "react-router-dom";
import { colors, Box, Typography, Avatar, Stack } from "@mui/material";
import { Layout } from "../../Layout";

const UnitPage = () => {
  const unitId = useParams<{ unitId: string }>().unitId!;
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const unitName = searchParams.get("unitName");
  const logo = searchParams.get("logo");

  return (
    <Box p={2}>
      <Stack spacing={2} direction={"row"} alignItems={"center"}>
        <Avatar
          sx={{ width: 48, height: 48, bgcolor: colors.blue[500] }}
          src={`${import.meta.env.VITE_API_URL}api/static/avatar/${logo}`}
          alt={unitName!}
        >
          {unitName!.substring(0, 1)}
        </Avatar>
        <Typography variant="h6">{unitName}</Typography>
      </Stack>
      <Layout unitId={+unitId} unitName={unitName!} type={type!} />
      <Outlet />
    </Box>
  );
};

export default UnitPage;
