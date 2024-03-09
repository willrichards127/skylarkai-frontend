import React, { memo, useCallback, useEffect, useState } from "react";
import { TextField, Box } from "@mui/material";
import { XIconButton } from "../../../../../components/buttons/XIconButton";
import { SendIcon } from "../../../../../components/Svgs";

export const InputBox = memo(
  ({
    initialQuestion,
    onSubmitAction,
    disabled,
  }: {
    initialQuestion?: string;
    disabled?: boolean;
    onSubmitAction: (inputedText: string) => void;
  }) => {
    const [text, setText] = useState<string>("");
    const onSubmit = useCallback(
      (e: React.FormEvent<HTMLFormElement> | undefined) => {
        if (!e) return;
        e?.preventDefault();
        onSubmitAction(text);
        setText("");
      },
      [onSubmitAction, text]
    );

    useEffect(() => {
      if (initialQuestion) onSubmitAction(initialQuestion);
    }, [initialQuestion, onSubmitAction]);
    return (
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          width: "100%",
          display: "flex",
          gap: 1,
          py: 1,
        }}
      >
        <TextField
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          value={text}
          fullWidth
          multiline
          rows={2}
          size="small"
          disabled={disabled}
          autoComplete="new-password"
          sx={{ "& .MuiInputBase-input": { fontSize: 13 } }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmitAction(text);
              setText("");
            }
          }}
        />
        <XIconButton
          type="submit"
          size="small"
          variant="contained"
          disabled={disabled}
          sxProps={{ "&.MuiButtonBase-root": { minWidth: 63 } }}
        >
          <SendIcon width={16} height={16} />
        </XIconButton>
      </Box>
    );
  }
);

InputBox.displayName = "InputBox";
