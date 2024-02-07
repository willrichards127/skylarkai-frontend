import { useParams, useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";
import EditOrderPanel from "./components/EditOrderPanel";
import SummaryOrderPanel from "./components/SummaryOrderPanel";
import CompletedOrderPanel from "./components/CompletedOrderPanel";
import WIPPanel from "./components/WIPPanel";

export default function OrderDetailPage() {
  const {orderId, companyId} = useParams<{orderId: string; companyId: string;}>();
  const [searchParams] = useSearchParams();
  const viewMode = searchParams.get("view_mode");
  const companyName = searchParams.get("company_name");
  const workOrderName = searchParams.get("work_order_name");

  return (
    <Box sx={{ height: "100%", bgcolor: "secondary.dark" }}>
      {viewMode === "edit" && (
        <EditOrderPanel
          companyId={companyId!}
          orderId={orderId!}
          companyName={companyName!}
          workOrderName={workOrderName}
        />
      )}
      {viewMode === "summary" && (
        <SummaryOrderPanel
          companyId={companyId!}
          orderId={orderId!}
          companyName={companyName!}
          workOrderName={workOrderName!}
        />
      )}
      {viewMode === "wip" && (
        <WIPPanel workOrderName={workOrderName!} companyName={companyName!} />
      )}
      {viewMode === "completed" && (
        <CompletedOrderPanel
          companyId={companyId!}
          orderId={orderId!}
          companyName={companyName!}
          workOrderName={workOrderName!}
        />
      )}
    </Box>
  );
}
