import { useRef, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, CellClickedEvent } from "ag-grid-community";
import { Box } from "@mui/material";

const AGTable = <T extends Record<string, any>>({
  columnDefs,
  rowData,
  onCellClicked,
}: {
  columnDefs: ColDef[];
  rowData: T[];
  headerPanelHeight?: number;
  onCellClicked?: (event: CellClickedEvent<any, any>) => void;
}) => {
  const gridRef = useRef<any>();
  const containerStyle: any = useMemo(
    () => ({
      width: "100%",
      height: "100%",
    }),
    []
  );
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const defaultColDef = useMemo<ColDef>(
    () => ({
      flex: 1,
      resizable: true,
      autoHeight: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      sortable: true,
    }),
    []
  );

  return (
    <Box sx={{ height: "100%" }}>
      <div style={containerStyle}>
        <div style={gridStyle} className="ag-theme-alpine-dark">
          <AgGridReact
            ref={gridRef}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowData={rowData}
            suppressRowClickSelection={true}
            onCellClicked={onCellClicked}
          />
        </div>
      </div>
    </Box>
  );
};

export default AGTable;
