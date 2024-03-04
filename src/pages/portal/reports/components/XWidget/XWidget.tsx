import { memo, useCallback, useMemo } from "react";
import { Box, colors } from "@mui/material";

import { Chart } from "../Chart";
import { XWidgetDrawer } from "./XWidgetDrawer";
import { TChartType, TColumn } from "../../../../../shared/models/types";
import { ExtraProps } from "react-markdown";
import { IReportItemValue } from "../../../../../shared/models/interfaces";

type XWidgetProps = React.TableHTMLAttributes<HTMLTableElement> &
  ExtraProps & {
    data: IReportItemValue;
    onChangeData: (value: Partial<IReportItemValue>) => void;
    isVisualize: boolean;
    onCloseVisualize: () => void;
  };

export const XWidget = memo(
  ({ data, onChangeData, isVisualize, onCloseVisualize }: XWidgetProps) => {
    const columns = useMemo(
      () => (data.metadata.columns || []) as TColumn[],
      [data.metadata.columns]
    );
    const rows = useMemo(() => data.metadata.rows || [], [data.metadata.rows]);

    const generateInnerHtml = useCallback((rows: any, columns: TColumn[]) => {
      return `<table><thead><tr>${columns
        .map(
          (col) =>
            `<th${col.isUnChecked ? ` class='table-cell-hide'` : ""}>${
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
                  }>${row[col.label]}</td>`
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
          metadata: { ...data.metadata, columns: newColumns },
        });
      },
      [rows, columns, onChangeData, generateInnerHtml, data.metadata]
    );

    const onChangeRow = useCallback(
      (rowIndex: number) => {
        const newRows = rows.map((row: any, index: number) => ({
          ...row,
          isUnChecked: index === rowIndex ? !row.isUnChecked : row.isUnChecked,
        }));
        onChangeData({
          content: generateInnerHtml(newRows, columns),
          metadata: { ...data.metadata, rows: newRows },
        });
      },
      [rows, columns, onChangeData, generateInnerHtml, data.metadata]
    );

    const onChangeVisualType = (newType: string) => {
      onChangeData({ visual: newType });
    };

    return data ? (
      <Box sx={{ display: "flex", flexDirection: "column", mt: 4, mb: 8 }}>
        {data.visual === "table" ? (
          <table style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={`col-${index}`}
                    style={{
                      textAlign: "center",
                      padding: "4px 8px",
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
                        padding: "4px 8px",
                        border: `1px solid ${colors.grey[500]}`,
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
            <Chart
              chartType={data.visual as TChartType}
              columns={columns.filter((col) => !col.isUnChecked)}
              rows={rows.filter((row: any) => !row.isUnChecked)}
            />
          </Box>
        )}
        <XWidgetDrawer
          open={isVisualize}
          visualType={data.visual}
          columns={columns}
          rows={rows}
          onClose={onCloseVisualize}
          onChangeVisualType={onChangeVisualType}
          onChangeColumn={onChangeColumn}
          onChangeRow={onChangeRow}
        />
      </Box>
    ) : null;
  }
);
