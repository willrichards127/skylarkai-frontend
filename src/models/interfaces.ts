export interface IMenuItem {
  content?: React.ReactNode;
  id: string | "divider";
  clickable?: boolean;
}

export type TChat = "question" | "answer";
