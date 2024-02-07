import { useParams } from "react-router-dom";
import SetupPanel from "./components/SetupPanel";

export default function SetupDetailPage() {
  const setupId = useParams<{setupId: string}>().setupId!;
	return <SetupPanel setupId={setupId} />;
}
