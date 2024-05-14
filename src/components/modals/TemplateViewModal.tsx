import { memo, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { XModal } from "../XModal";
import Templateview from "../TemplateView";
import { ITemplate, ITemplateItem } from "../../shared/models/interfaces";
import {
  addIdtoTemplateJson,
  removeIdTemplateJson,
  selectAll,
} from "../TemplateView/utils";

export const TemplateViewModal = memo(
  ({
    open,
    onClose,
    data,
    isEditMode,
  }: {
    open: boolean;
    onClose: (data?: ITemplate) => void;
    data: ITemplate;
    isEditMode?: boolean;
  }) => {
    const [title, setTitle] = useState<string>(data.title);
    const [items, setItems] = useState<ITemplateItem[]>(
      addIdtoTemplateJson(data.data)
    );

    return (
      <XModal
        open={open}
        onClose={() => onClose()}
        header={<Box textAlign="center">Template View</Box>}
        footer={
          <Box
            display="flex"
            justifyContent={isEditMode ? "space-between" : "end"}
            width="100%"
            px={1}
          >
            {isEditMode && (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setItems((prev) => selectAll(prev, true));
                  }}
                >
                  Select All
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    setItems((prev) => selectAll(prev, false));
                  }}
                >
                  Deselect All
                </Button>
              </Box>
            )}
            <Button
              variant="contained"
              onClick={() => {
                onClose({ title, data: removeIdTemplateJson(items) });
              }}
            >
              Save
            </Button>
          </Box>
        }
        size="md"
      >
        <Box paddingTop={1}>
          {isEditMode && (
            <TextField
              fullWidth
              placeholder="Enter report name"
              label="Report name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          )}
          <Box maxHeight={400} overflow={"auto"} marginTop={1}>
            <Templateview
              data={items}
              onChangeData={setItems}
              isEditMode={isEditMode}
            />
          </Box>
        </Box>
      </XModal>
    );
  }
);

TemplateViewModal.displayName = "TemplateViewModal";
