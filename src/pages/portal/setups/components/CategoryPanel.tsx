import { memo, useMemo, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { CollapsiblePanel } from "../../../../components/CollapsiblePanel";
import DndListItem from "./DndListItem";
import { ITemplateNode } from "../../../../shared/models/interfaces";
import { useGetVDRsQuery } from "../../../../redux/services/vdrApi";
import { IVDRDetail } from "../../vdr/interfaces";

const CategoryPanel = memo(
  ({ categoryDict }: { categoryDict: Record<string, ITemplateNode[]> }) => {
    const [searchParams] = useSearchParams();
    const unitId = searchParams.get("unitId");
    const { data: vdrs } = useGetVDRsQuery({ unitId: +unitId! });

    const vdrsWithId = useMemo(() => {
      if (vdrs) {
        return vdrs.map((vdr) => ({
          ...vdr,
          files: vdr.files.map((f, index) => ({
            ...f,
            id: `${vdr.name}-${index + 1}`,
          })),
        }));
      }
    }, [vdrs]);

    const categoryList = useMemo(
      () => Object.entries(categoryDict),
      [categoryDict]
    );
    const [open, setOpen] = useState(true);

    const onToggleDrawer = useCallback(() => {
      setOpen((prev) => !prev);
    }, []);

    const convertToTemplateNode = (
      node: ITemplateNode,
      vdr: IVDRDetail
    ): ITemplateNode => {
      return {
        ...node,
        label: vdr.name,
        properties: {
          vdrId: vdr.id,
          files: vdr.files,
        },
      };
    };

    return (
      <Box sx={{ position: "relative", width: open ? 340 : 60 }}>
        {!open ? (
          <IconButton
            color="primary"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
            onClick={onToggleDrawer}
          >
            <KeyboardDoubleArrowRightIcon />
          </IconButton>
        ) : (
          <Box
            sx={{
              width: 340,
              height: "100%",
              bgcolor: "secondary.main",
              borderTop: "2px solid",
              borderColor: "background.paper",
              p: 1,
              overflowY: "auto",
            }}
          >
            <Box pb={1} width="100%" textAlign="right">
              <IconButton
                color="primary"
                onClick={onToggleDrawer}
                sx={{ ml: "auto" }}
              >
                <KeyboardDoubleArrowLeftIcon />
              </IconButton>
            </Box>
            {categoryList.map(([label, items]) => (
              <Box key={`category-${label}`} mb={1}>
                <CollapsiblePanel
                  label={
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      pl={2}
                      sx={{ textTransform: "uppercase" }}
                    >
                      {label}
                    </Typography>
                  }
                >
                  {items.map((item) =>
                    item.template_node_id === 1 ? (
                      <>
                        <DndListItem
                          key={`template-${item.template_node_id}`}
                          item={item}
                          draggable={false}
                        />
                        {vdrsWithId && vdrsWithId.length ? (
                          <Box sx={{ pl: 2 }}>
                            {vdrsWithId.map((vdr, index) => (
                              <DndListItem
                                key={`vdr-${item.template_node_id}-${index}`}
                                item={convertToTemplateNode(item, vdr)}
                              />
                            ))}
                          </Box>
                        ) : null}
                      </>
                    ) : (
                      <DndListItem key={item.template_node_id} item={item} />
                    )
                  )}
                </CollapsiblePanel>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    );
  }
);

CategoryPanel.displayName = "CategoryPanel";

export default CategoryPanel;
