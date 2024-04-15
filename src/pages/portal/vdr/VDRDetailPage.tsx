import { useParams } from "react-router-dom";

export default function VDRDetailPage() {
  const vdrId = useParams<{ vdrId: string }>().vdrId!;
  return <></>;
}
