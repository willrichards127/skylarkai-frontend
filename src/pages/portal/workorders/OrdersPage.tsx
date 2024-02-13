import { useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";
import OrdersContainer from "./components/OrdersContainer";

export default function OrdersPage() {
  const [searchParams] = useSearchParams();
  const companyId = searchParams.get("companyId");
  const companyName = searchParams.get("companyName");

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", p: 6 }}
    >      
      <OrdersContainer companyId={companyId!} companyName={companyName!}/>
    </Box>
  );
}