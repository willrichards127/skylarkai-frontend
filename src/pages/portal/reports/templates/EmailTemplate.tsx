import { useCallback, useRef, useState, useEffect, memo } from "react";
import { Stack, Box, TextField, Typography, Button } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { EmailSearchInput } from "../../../../components/EmailSearchInput";
import { ConfirmModal } from "../../../../components/modals/ConfirmModal";
import { useSendReportsViaEmailsMutation } from "../../../../redux/services/transcriptAPI";
import { getPdfInBase64 } from "../../../../shared/utils/pdf-generator";

const baseFrame = `<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

</style>
</head>
<body>
<div style="text-align: center;">
<img class="skylark_logo" src="data:image/png;base64,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" />
</div>
<h2 style="text-align: center;">{title}</h2>
{content}
<p style="text-align: center;">Thanks <a href="https://www.skylarkai.com/">https://www.skylarkai.com</a></p>
<hr style="width: 320px; margin-top: 36px;" />
<div style="text-align: center; padding: 24px;">
<a href="https://twitter.com/" style="margin: 16px;"><img class="twitter" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBpZTbbcIwFIbtEHjgKSOkE5QR6AYwASAhLuIFJiCdAPoAiLwEJmg7AWUDuoG7QR4j5db/RDGKIjdpwi9ZPr59to+PD2c1tNvtOpqmGTDFfD4X+XEuJy0Wi9t/YLquv8M0M90fQRC80iac88FsNhslUNu2L7TrZDIZ/QU8HA4mFl5ywKxcwF/a7bbQqBXHsYkyJDgtVq1oNBrrAmACbTabjud5RgLFsUUK79Jp9vv9UgEvAiYKw7BPPtbTxhmwrlyMU21Qr4/H4xc2ovJdBqR58tESaBRFN0C3MJeZefS6PdyCCi0qhMrb3qHwxYauzh6TkIZ8qE/2oHDbq7S5NOC/E6oBqycxnU6fZEOTRqvVIn9uWT1Z2cYdSvGFasiqi055VkIpHOCXFaso/KJ+vk/LNgA+AUy+sVBcVi5LlTN0xUQTMddFRBisQBhfInm8qcZ4mnkGBCEYK/mO9HPwA1dFWS0JqTQDUTj1UDqKeS5g9OssZLIrKxHPdziOY/i+/yzbAInxePzDKugXk+qwUXS+oYYAAAAASUVORK5CYII=" /></a>
<a href="https://www.facebook.com/" style="margin: 16px;"><img class="facebook" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADZSURBVHgB7ZLRDYIwEIbbQgJb2BHcQEfQDSAhgS1kBN8IT8YNdBM3ECYQXwkB/yOQIJqUQh/5k+aOXvNx/7U8SRJPCHFhy0UcsWFmJG2mr6xpmowSzrkkSF/QhR3DMLz1H+MRCTZd8RD0T5M7q6rq3udpmsawuINdOQvmOM6LIqxJhBNAP2d0bCql6uyBdabEsqw3Rdd1i7Isva5+6JYaBitFFEXX4Z7v+wVCu4fZbYe1RTZxCV8wW3F4j7+3k4ZNGQRBTheAt/XsOmfGOhtrhc2A1XWdMzPKPhuLQXcrpjmkAAAAAElFTkSuQmCC" /></a>
<a href="https://www.linkedin.com/" style="margin: 16px;"><img class="linkedin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE+SURBVHgBzVRLToRAEK1uCGE5N5AjjCfQG8icYDYkwMojyNzAHZCwkBOoJzCeYLgBeAOWhPDx1QhKTzSSduNLSFcV1a+rul+3iOPYkVIeiWhD+qi6rtuBR+7/SMRwTNO8kcuIEKLAEPFKpAGFrO/7ne/7B8uyLkkDCplt2zWPTdNota2QtW17TJLk1jCMR9KAeeZzZe4wDDX2j/1qHMeKDfhb2AXvK74N7GuEnR/JUJHred4bywUTSoQegiA48L80Tfew8zl3ktTLklDSSuBgciaY/TAMuer7Zc5qMlQWoZISY/k5WcpXLTK0fTWZTpZlF2xASrUWGVpyfstZTbYG/5dM4HTu6ONyM56wNyxYvk4uCxQCLk6JQrj09booeVMsOr8B7qT8EzBhy8r/pgglb4bEo/ZMmk/OAjU6yN8BiBBzZbqCI2kAAAAASUVORK5CYII=" /></a>
</div>
<div style="text-align: center; color: grey;">
<p style="margin: 4px;">Copyright © 2024</p>
<p style="margin: 4px;">Skylark</p>
<p style="margin: 4px;">A better company begins with a personalised employee experience.</p>
</div>
</body>
</html>`;

export const EmailTemplate = memo(
  ({
    prefix,
    element,
    filename,
    initialTitle,
    initialContent,
    onActionPerformed,
    onClose,
  }: {
    element?: HTMLDivElement;
    prefix?: string;
    filename?: string;
    initialTitle?: string;
    initialContent?: string;
    onClose: () => void;
    onActionPerformed?: () => void;
  }) => {
    const editorRef = useRef<any>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [sendEmails, { isLoading, isSuccess }] =
      useSendReportsViaEmailsMutation();

    const [confirmModal, showConfirmModal] = useState<boolean>(false);
    const [form, setForm] = useState<{
      emails: string;
      title: string;
      content: string;
    }>({ emails: "", title: "", content: "" });

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      },
      []
    );

    const onSend = useCallback(async () => {
      const emailAddresses = form.emails
        .split(",")
        .map((email) => email.trim());
      if (onActionPerformed) onActionPerformed();
      const container = document.createElement("div");

      // replace images for following email template
      // ref: https://www.twilio.com/en-us/blog/send-emails-embedded-gifs-images-sendgrid-python
      const iframeHtml =
        iframeRef.current!.contentWindow!.document.documentElement;
      const iframeContainer = document.createElement("div");
      iframeContainer.appendChild(iframeHtml.cloneNode(true));

      const logoEl: HTMLImageElement =
        iframeContainer.querySelector(".skylark_logo")!;
      logoEl!.src = "_cid:skylark_logo";
      const twitterEl: HTMLImageElement =
        iframeContainer.querySelector(".twitter")!;
      twitterEl!.src = "_cid:twitter";
      const facebookEl: HTMLImageElement =
        iframeContainer.querySelector(".facebook")!;
      facebookEl!.src = "_cid:facebook";
      const linkedinEl: HTMLImageElement =
        iframeContainer.querySelector(".linkedin")!;
      linkedinEl!.src = "_cid:linkedin";

      if (element) {
        container.appendChild(element.cloneNode(true));
        const removeItems = container.querySelectorAll(
          ".suggestions, .topic, .loading, .no-print"
        );
        for (const item of removeItems) {
          item.remove();
        }
        const base64str = await getPdfInBase64(
          (prefix || "") + container.innerHTML,
          "Skylark"
        );
        sendEmails({
          subject: form.title,
          base64str,
          filename: filename || "Report.pdf",
          template: iframeContainer.outerHTML,
          emails: emailAddresses,
        });
      } else {
        sendEmails({
          subject: form.title,
          template: iframeContainer.outerHTML,
          emails: emailAddresses,
        });
      }

      showConfirmModal(true);
    }, [form, filename, element, prefix, onActionPerformed, sendEmails]);

    useEffect(() => {
      if (initialTitle || initialContent) {
        setForm((prev) => ({
          ...prev,
          ...(!!initialTitle && { title: initialTitle }),
          ...(!!initialContent && { content: initialContent }),
        }));
      }
    }, [initialTitle, initialContent]);

    return (
      <Stack spacing={2}>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={2} direction="row">
            <Stack spacing={2} width="100%">
              <Typography variant="body2" fontWeight="bold">
                Email(s)
              </Typography>
              <EmailSearchInput
                value={form.emails}
                onChanged={(value) =>
                  setForm((prev) => ({ ...prev, emails: value }))
                }
              />
              <Typography variant="body2" fontWeight="bold">
                Email Title
              </Typography>
              <TextField
                name="title"
                size="small"
                value={form.title}
                onChange={onChange}
                sx={{ "& .MuiInputBase-root": { width: 540 } }}
              />
              <Editor
                apiKey="69ipaoh1jiynpwws60b1nj6fht4zidofpoagklhvb3wnh07a"
                onInit={(_, editor) => (editorRef.current = editor)}
                value={form.content}
                onEditorChange={(newValue) =>
                  setForm((prev) => ({ ...prev, content: newValue }))
                }
                init={{
                  menubar: false,
                  plugins: "lists anchor link image code media table",
                  toolbar:
                    "blocks | bold italic" +
                    "alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "table tablerowheader | image",
                  width: "100%",
                  height: 430,
                }}
              />
            </Stack>
            <Stack spacing={2} width="100%">
              <Typography variant="body2" fontWeight="bold">
                Preview
              </Typography>
              <Box sx={{ flex: 1, bgcolor: "white", color: "black" }}>
                <iframe
                  ref={iframeRef}
                  srcDoc={baseFrame
                    .replace("{title}", form.title)
                    .replace("{content}", form.content)}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    padding: "16px",
                  }}
                />
              </Box>
            </Stack>
          </Stack>
          <Box
            sx={{ display: "flex", gap: 2, justifyContent: "flex-end", pt: 2 }}
          >
            <Button variant="outlined" onClick={onClose} sx={{ minWidth: 100 }}>
              Close
            </Button>
            <Button
              variant="contained"
              disabled={!form.title || !form.content || !form.emails.length}
              onClick={onSend}
            >
              Send Email
            </Button>
          </Box>
          {confirmModal && (
            <ConfirmModal
              loading={isLoading}
              open={confirmModal}
              icon={
                isSuccess ? (
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 64, color: "primary.main" }}
                  />
                ) : (
                  <ErrorOutlineIcon
                    sx={{ fontSize: 64, color: "error.main" }}
                  />
                )
              }
              title={
                isSuccess ? "Email has been sent." : "Failed to send the email."
              }
              desc="Click close to go back."
              onClose={() => showConfirmModal(false)}
            />
          )}
        </Box>
      </Stack>
    );
  }
);
