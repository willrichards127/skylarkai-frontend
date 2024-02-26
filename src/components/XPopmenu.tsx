import React, {
  memo,
  cloneElement,
  useState,
  useMemo,
  useCallback,
} from "react";
import { Divider, Menu, MenuItem } from "@mui/material";
import { IMenuItem } from "../shared/models/interfaces";

export const XPopmenu = memo(
  ({
    triggerEl,
    items,
    onItem,
  }: {
    triggerEl: JSX.Element;
    items: IMenuItem[];
    onItem?: (itemId: string) => void;
  }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const onShowPopover = useCallback((e: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(e.currentTarget);
    }, []);
    const onClose = useCallback(() => {
      setAnchorEl(null);
    }, []);

    const onItemClick = useCallback(
      (itemId: string) => {
        onItem?.(itemId);
        setAnchorEl(null);
      },
      [onItem]
    );

    const cloneEl = useMemo(
      () =>
        cloneElement(triggerEl, {
          onClick: onShowPopover,
        }),
      [triggerEl, onShowPopover]
    );

    const open = !!anchorEl;

    return (
      <>
        {cloneEl}
        <Menu
          open={open}
          anchorEl={anchorEl}
          onClose={onClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            "& .MuiList-root": {
              padding: 0
            },
            "& .MuiPaper-root": {
              borderRadius: 2,
              border: "1px solid",
              borderColor: "primary.main",
              bgcolor: "secondary.dark",
            },
          }}
        >
          {items.map((item, index) =>
            item.id === "divider" ? (
              <Divider key={item.id + index} style={{margin: 0}} />
            ) : (
              <MenuItem
                key={item.id}
                onClick={() => onItemClick(item.id)}
                sx={{
                  pointerEvents: item.clickable ? "auto" : "none",
                }}
              >
                {item.content}
              </MenuItem>
            )
          )}
        </Menu>
      </>
    );
  }
);
