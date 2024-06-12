import { Outlet, useParams, useSearchParams } from "react-router-dom";
import {
  colors,
  Backdrop,
  Box,
  Typography,
  Avatar,
  Stack,
  CircularProgress,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { Layout } from "../../Layout";
import { useGetUnitQuery } from "../../../../redux/services/setupApi";
import { ensureHttpOrHttps } from "../../../../shared/utils/base";

const UnitPage = () => {
  const unitId = useParams<{ unitId: string }>().unitId!;
  const [searchParams] = useSearchParams();
  const analyst = searchParams.get("analyst");

  const { isLoading, data: unit } = useGetUnitQuery(
    { unitId: +unitId! },
    { skip: !unitId }
  );

  return (
    <Box p={2} height="100%">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {!isLoading && (
        <>
          <Stack
            spacing={2}
            direction={"row"}
            alignItems={"center"}
            width="100%"
          >
            {unit!.logo ? (
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  bgcolor: colors.blue[500],
                  border: "2px solid white",
                }}
                src={`${import.meta.env.VITE_API_URL}api/static/avatar/${
                  unit!.logo
                }`}
                alt={unit!.name}
              >
                {unit!.name.substring(0, 1)}
              </Avatar>
            ) : (
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  bgcolor: colors.blue[500],
                  border: "2px solid white",
                }}
              >
                {unit!.name.substring(0, 1)}
              </Avatar>
            )}
            <Box>
              <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                {unit!.name}
              </Typography>
              {!!analyst && (
                <Typography
                  variant="subtitle2"
                  fontSize={13}
                  sx={{ whiteSpace: "nowrap" }}
                >
                  Analyst: {analyst}
                </Typography>
              )}
              <Typography
                variant="subtitle2"
                color="grey"
                fontSize={13}
                sx={{ whiteSpace: "nowrap" }}
              >
                Updated: {new Date(unit!.updated_at || "").toLocaleDateString()}
              </Typography>
            </Box>

            <Stack spacing={1} py={1} pl={10}>
              {unit!.type === 1 && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LinkIcon sx={{ color: "grey" }} />
                  <Typography variant="subtitle2" color="grey" fontSize={13}>
                    Website:
                  </Typography>
                  {unit!.website ? (
                    <a
                      href={ensureHttpOrHttps(unit!.website)}
                      target="_blank"
                      rel='noopener noreferrer'
                      style={{ color: "lightblue", fontSize: 13 }}
                    >
                      {unit!.website}
                    </a>
                  ) : (
                    <p style={{ color: "grey", fontSize: 13 }}>
                      The website for this company is not provided.
                    </p>
                  )}
                </Box>
              )}
              <Typography variant="subtitle2" color="grey" fontSize={13}>
                {unit!.description || ""}
              </Typography>
            </Stack>
          </Stack>
          <Layout
            unitId={+unitId}
            unitName={unit!.name}
            type={unit!.type === 1 ? "companies" : "sectors"}
          />
          <Outlet />
        </>
      )}
    </Box>
  );
};

export default UnitPage;
