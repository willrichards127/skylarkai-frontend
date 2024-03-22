import { memo, useCallback, useMemo } from "react";
import { Box, colors } from "@mui/material";

import { Chart } from "../Chart";
import { XWidgetDrawer } from "./XWidgetDrawer";
import { TColumn } from "../../../../../shared/models/types";
import { ExtraProps } from "react-markdown";
import {
  IAxisKey,
  IReportItemValue,
} from "../../../../../shared/models/interfaces";

type XWidgetProps = React.TableHTMLAttributes<HTMLTableElement> &
  ExtraProps & {
    data: IReportItemValue;
    onChangeData: (value: Partial<IReportItemValue>) => void;
    isVisualize: boolean;
    onCloseVisualize: () => void;
  };

export const XWidget = memo(
  ({ data, onChangeData, isVisualize, onCloseVisualize }: XWidgetProps) => {
    const metadata = data.metadata!;

    const columns = useMemo(
      () => (metadata.columns || []) as TColumn[],
      [metadata.columns]
    );
    const rows = useMemo(() => metadata.rows || [], [metadata.rows]);

    const generateInnerHtml = useCallback((rows: any, columns: TColumn[]) => {
      return `<table style="border-collapse: collapse; width: 100%;"><thead><tr>${columns
        .map(
          (col) =>
            `<th${col.isUnChecked ? ` class='table-cell-hide'` : ""} style="font-size: 13px; word-break: break-word;">${
              col.label
            }</th>`
        )
        .join("")}</tr></thead><tbody>${rows
        .map(
          (row: any) =>
            `<tr${row.isUnChecked ? ` class='table-row-hide'` : ""}>${columns
              .map(
                (col) =>
                  `<td${
                    col.isUnChecked || row.isUnChecked
                      ? ` class='table-cell-hide'`
                      : ""
                  } style="font-size: 12px; word-break: break-word;">${row[col.label]}</td>`
              )
              .join("")}</tr>`
        )
        .join("")}</tbody></table>`;
    }, []);

    const onChangeColumn = useCallback(
      (colLabel: string) => {
        const newColumns = columns.map((col) => ({
          ...col,
          isUnChecked:
            col.label === colLabel ? !col.isUnChecked : col.isUnChecked,
        }));
        onChangeData({
          content: generateInnerHtml(rows, newColumns),
          metadata: { ...metadata, columns: newColumns },
        });
      },
      [rows, columns, onChangeData, generateInnerHtml, metadata]
    );

    const onChangeRow = useCallback(
      (rowIndex: number) => {
        const newRows = rows.map((row: any, index: number) => ({
          ...row,
          isUnChecked: index === rowIndex ? !row.isUnChecked : row.isUnChecked,
        }));
        onChangeData({
          content: generateInnerHtml(newRows, columns),
          metadata: { ...metadata, rows: newRows },
        });
      },
      [rows, columns, onChangeData, generateInnerHtml, metadata]
    );

    const onChangeVisualType = (newType: string) => {
      onChangeData({ metadata: { ...metadata, visual: newType } });
    };

    const onChangeAxis = (axis: IAxisKey, index: string) => {
      const axisData = { ...(metadata.axis || { x: "", y: [] }) };
      if (axis === "x") {
        axisData["x"] = axisData["x"] !== index ? index : "";
      } else {
        if (axisData["y"].includes(index)) {
          axisData["y"] = axisData["y"].filter((value) => value !== index);
        } else {
          axisData["y"].push(index);
        }
      }

      onChangeData({ metadata: { ...metadata, axis: axisData } });
    };

    return metadata ? (
      <Box
        style={{
          width: '100%',
          display: "flex",
          flexDirection: "column",
          marginTop: "4px",
          marginBottom: "8px",
        }}
      >
        {metadata.visual === "table" ? (
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={`col-${index}`}
                    style={{
                      textAlign: "center",
                      padding: "4px",
                      fontSize: '13px',
                      wordBreak: 'break-word',
                      border: `1px solid ${colors.grey[500]}`,
                    }}
                    className={col.isUnChecked ? "table-cell-hide" : undefined}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row: any, rowIndex: number) => (
                <tr
                  className={row.isUnChecked ? "table-row-hide" : undefined}
                  key={`row-${rowIndex}`}
                >
                  {columns.map((col, colIndex) => (
                    <td
                      key={`row-${rowIndex}-col-${colIndex}`}
                      style={{
                        textAlign: "center",
                        padding: "4px",
                        fontSize: '12px',
                        border: `1px solid ${colors.grey[500]}`,
                        wordBreak: 'break-word',
                      }}
                      className={
                        row.isUnChecked || col.isUnChecked
                          ? "table-cell-hide"
                          : undefined
                      }
                    >
                      {row[col.label]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <Box>
            <Chart data={metadata} />
          </Box>
        )}
        <XWidgetDrawer
          open={isVisualize}
          visualType={metadata.visual}
          columns={columns}
          rows={rows}
          axis={metadata.axis || { x: "", y: [] }}
          onClose={onCloseVisualize}
          onChangeVisualType={onChangeVisualType}
          onChangeColumn={onChangeColumn}
          onChangeRow={onChangeRow}
          onChangeAxis={onChangeAxis}
        />
      </Box>
    ) : null;
  }
);
