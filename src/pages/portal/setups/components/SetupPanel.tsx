import { memo } from "react";
import { Box } from "@mui/material";
import CategoryPanel from "./CategoryPanel";
import WorkflowPanel from "./WorkflowPanel";
import { ITemplateNode } from "../../../../shared/models/interfaces";
import { useGetCategoriesQuery } from "../../../../redux/services/setupApi";

const SetupPanel = memo(({ setupId }: { setupId: string }) => {
  const { data, isFetching } = useGetCategoriesQuery();

  return (
    <Box sx={{ height: "100%", display: "flex", bgcolor: "secondary.dark" }}>
      {!isFetching && (
        <CategoryPanel categoryDict={data as Record<string, ITemplateNode[]>} />
      )}
      {!isFetching && (
        <WorkflowPanel
          setupId={setupId}
          categoryDict={data as Record<string, ITemplateNode[]>}
        />
      )}
    </Box>
  );
});

SetupPanel.displayName = "SetupPanel";
export default SetupPanel;
