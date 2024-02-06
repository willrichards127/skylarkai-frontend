/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import AskSecFilingsFeature from "./components/sec-filings";
import InvestmentMemoFeature from "./components/investment-memo";
import InsiderTransactionFeature from "./components/insider-transactions";
import AnalyzeEarningCallsFeature from "./components/analyze-earnings";
import CompareDocumentsFeature from "./components/compare-documents";
import SentimentalAnalysisFeature from "./components/sentimental-analysis";

const compDict: Record<number, any> = {
  1: AskSecFilingsFeature,
  2: InvestmentMemoFeature,
  3: InsiderTransactionFeature,
  4: AnalyzeEarningCallsFeature,
  5: CompareDocumentsFeature,
  6: SentimentalAnalysisFeature,
};

export default function FeaturePage() {
  const { featureId } = useParams();
  const FeatureComp = compDict[+featureId!];
  return (
    <Layout>
      <FeatureComp featureId={+featureId!} />
    </Layout>
  );
}
