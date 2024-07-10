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
import { convertUtcToLocal } from "../../../../shared/utils/dateUtils";
import { DetailCompanyModal } from "../../../../components/modals/DetailCompanyModal";
import { useState } from "react";

const UnitPage = () => {
  const unitId = useParams<{ unitId: string }>().unitId!;
  const [searchParams] = useSearchParams();
  const analyst = searchParams.get("analyst");
  const [isDetailOpen, showDetailModal] = useState<boolean>(false);

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
                Updated: {convertUtcToLocal(unit!.updated_at || "")}
              </Typography>
            </Box>

            <Stack spacing={1} py={1} pl={10} maxWidth={"50%"}>
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
                      rel="noopener noreferrer"
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
              <Typography
                variant="body1"
                color="grey"
                fontSize={13}
                sx={{
                  WebkitLineClamp: "3",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {unit!.description || ""}
              </Typography>
              {unit.meta_data ? (
                <Box display={"flex"} justifyContent={"end"}>
                  <Typography
                    variant="caption"
                    fontSize={13}
                    sx={{ cursor: "pointer" }}
                    onClick={() => showDetailModal(true)}
                  >
                    More detail
                  </Typography>
                </Box>
              ) : null}
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
      {isDetailOpen && unit && (
        <DetailCompanyModal
          open={isDetailOpen}
          onClose={() => showDetailModal(false)}
          title={unit.name}
          data={unit.meta_data}
        />
      )}
    </Box>
  );
};

export default UnitPage;
