import { memo, useState } from "react";
import { TextField, IconButton, Box, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BarChartIcon from "@mui/icons-material/BarChart";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { IDNDItem } from "../../../../../shared/models/interfaces";

const ActionPane = styled(Box)({
  position: "absolute",
  gap: 0.5,
  right: 2,
  top: 2,
  backgroundColor: "rgba(255,255,255,0.8)",
  border: "1px solid grey",
  borderRadius: 4,
  alignItems: "center",
  display: "none",
  zIndex: 99999,
});

export const ItemActionPane = memo(
  ({
    item,
    onAddNew,
    onRemove,
    onShowViz,
    onDownloadCSV,
    onRerunSection,
  }: {
    item: IDNDItem;
    onAddNew: () => void;
    onRemove: () => void;
    onShowViz: () => void;
    onDownloadCSV: () => void;
    onRerunSection: (htmlContent: string, llm: string) => void;
  }) => {
    const [llm, setLlm] = useState<string>("OpenAI");

    return (
      <ActionPane className="no-save no-print">
        <IconButton size="small" onClick={onAddNew} title="Add New Item">
          <AddIcon sx={{ fontSize: 16, color: "black" }} />
        </IconButton>
        {item.value.tag === "table" && (
          <>
            <IconButton
              size="small"
              onClick={onDownloadCSV}
              title="Download CSV File"
            >
              <FileDownloadIcon sx={{ fontSize: 16, color: "black" }} />
            </IconButton>
            <IconButton size="small" onClick={onShowViz} title="Visualize">
              <BarChartIcon sx={{ fontSize: 16, color: "black" }} />
            </IconButton>
          </>
        )}
        <IconButton size="small" onClick={onRemove} title="Remove Item">
          <DeleteForeverIcon sx={{ fontSize: 16, color: "black" }} />
        </IconButton>

        {item.value.tag === "h2" && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              select
              color="info"
              size="small"
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: 12,
                  color: "black",
                },
                "& .MuiNativeSelect-select": {
                  height: 20,
                  paddingTop: 0.5,
                  paddingBottom: 0.5,
                  paddingRight: 4,
                },
                "& .MuiSvgIcon-root": {
                  color: "black",
                },
              }}
              value={llm}
              onChange={(e) => {
                setLlm(e.target.value);
              }}
              SelectProps={{
                native: true,
              }}
            >
              {["OpenAI", "Anthropic", "Gemini"].map((option) => (
                <option
                  key={option}
                  value={option}
                  style={{ background: "white" }}
                >
                  {option}
                </option>
              ))}
            </TextField>
            <IconButton
              size="small"
              onClick={() => onRerunSection(item.value.content, llm)}
              title="Re-run this section"
            >
              <RestartAltIcon sx={{ fontSize: 16, color: "info.main" }} />
            </IconButton>
          </Box>
        )}
      </ActionPane>
    );
  }
);
