import { memo } from "react";
import { XModal } from "../XModal";
import { Box, Typography } from "@mui/material";

export const DetailCompanyModal = memo(
  ({
    open,
    title,
    onClose,
    data,
  }: {
    open: boolean;
    title: string;
    onClose: () => void;
    data: { [key in string]: any };
  }) => {
    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box textAlign="center">{title}</Box>}
        size="lg"
      >
        <Box display={"flex"} flexDirection={"column"} gap={1} maxHeight={400} overflow={"auto"} my={1}>
          {Object.keys(data).map((key, index) => (
            <Box display={"flex"} flexDirection={"row"} key={`more-detail-company-${index}`} gap={1}>
              <Typography variant="body1" sx={{fontWeight: "bold"}}>{`${key}:`}</Typography>
              <Typography variant="body1">{data[key]}</Typography>
            </Box>
          ))}
        </Box>
      </XModal>
    );
  }
);
