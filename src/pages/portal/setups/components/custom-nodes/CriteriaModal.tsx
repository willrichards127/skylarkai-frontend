import { memo, useCallback, useState } from "react";
import { Box, Stack, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { XModal } from "../../../../../components/XModal";
import { XChip } from "../../../../../components/XChip";
import { XAccordions } from "../../../../../components/XAccordion";
import { ITemplateNode } from "../../../../../shared/models/interfaces";

// const criterias = [{}];

export const CriteriaModal = memo(
  ({
    open,
    nodeId,
    // nodeContent,
    onClose,
  }: {
    open: boolean;
    nodeId: string;
    nodeContent: ITemplateNode;
    onClose: () => void;
  }) => {
    const [search, setSearch] = useState<string>("");

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    }, []);

    return (
      <XModal
        floatAlign="flex-end"
        open={open}
        onClose={onClose}
        header={
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            Criteria
            <XChip label={nodeId} />
          </Box>
        }
        size="sm"
      >
        <Stack spacing={1}>
          <TextField
            fullWidth
            value={search}
            onChange={onChange}
            size="small"
            placeholder="Search Criteria..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ height: 640, overflowY: "auto" }}>
            <XAccordions
              options={Array.from(Array(30).keys()).map((index) => ({
                summary: `Criteria ${index + 1}`,
                detail: `Criteria ${index + 1} Detail`,
              }))}
            />
          </Box>
        </Stack>
      </XModal>
    );
  }
);
