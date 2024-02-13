import { Box } from "@mui/material";
import OrdersContainer from "./components/OrdersContainer";
import { useParams, useSearchParams } from "react-router-dom";

export default function CompanyDetailPage() {
  const companyId = useParams<{companyId: string}>().companyId!;
  const [searchParams] = useSearchParams();
  const companyName = searchParams.get("company_name");

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", p: 6 }}
    >
      <OrdersContainer companyId={companyId} companyName={companyName!} />
    </Box>
  );
}