export type NotificationData = {
  event_type: "ingest_completed" | "report_completed";
  task_id: string;
  message: string;
  marked?: boolean;
}