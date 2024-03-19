import { memo, useState } from "react";
import { Box, Button } from "@mui/material";
import { XModal } from "../XModal";
import Templateview from "../TemplateView";
import {
  ITemplateItem,
  ITemplateItemPure,
} from "../../shared/models/interfaces";
import { addIdtoTemplateJson } from "../TemplateView/utils";

export const TemplateViewModal = memo(
  ({
    open,
    onClose,
    data,
    onSave,
  }: {
    open: boolean;
    onClose: () => void;
    data: ITemplateItemPure[];
    onSave: (items: ITemplateItem[]) => void;
  }) => {
    const [items] = useState<ITemplateItem[]>(
      addIdtoTemplateJson(data)
    );
    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box textAlign="center">Temmplate View</Box>}
        footer={
          <Box display="flex" justifyContent="end" width="100%" px={1}>
            <Button
              variant="contained"
              onClick={() => {
                onSave(items);
                onClose();
              }}
            >
              Save
            </Button>
          </Box>
        }
        size="md"
      >
        <Box maxHeight={400} overflow={"auto"}>
          <Templateview data={addIdtoTemplateJson(data)} isEditMode={false} />
        </Box>
      </XModal>
    );
  }
);

TemplateViewModal.displayName = "TemplateViewModal";
