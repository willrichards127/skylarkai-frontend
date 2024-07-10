/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import AskSecFilingsFeature from "./components/sec-filings";
import InvestmentMemoFeature from "./components/investment-memo";
import InsiderTransactionFeature from "./components/insider-transactions";
import AnalyzeEarningCallsFeature from "./components/analyze-earnings";
import CompareDocumentsFeature from "./components/compare-documents";
import SentimentalAnalysisFeature from "./components/sentimental-analysis";
// import ChatDataFeature from "./components/chat-data";
// import FinanceFeature from "./components/finance";

const compDict: Record<number, any> = {
  1: AskSecFilingsFeature,
  2: InvestmentMemoFeature,
  3: InsiderTransactionFeature,
  4: AnalyzeEarningCallsFeature,
  5: CompareDocumentsFeature,
  6: SentimentalAnalysisFeature,
  // 7: ChatDataFeature,
  // 8: FinanceFeature,
};

export default function FeaturePage() {
  const { featureId } = useParams();
  const FeatureComp = compDict[+featureId!];
  return (
    <FeatureComp featureId={+featureId!} />
  );
}
