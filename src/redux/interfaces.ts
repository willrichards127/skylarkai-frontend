/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ISubscription {
  subscription_id: number;
  subscription_name: string;
}
export interface IMainFeature {
  id: number;
  feature: string;
  description?: string;
  img_url: string;
}
export interface IUser {
  user_id?: number;
  email: string;
  username: string;
  user_role: number; // persona id
  tenant_id?: number;
  main_features?: IMainFeature[];
  company: string;
  company_website?: string;
  phone?: string;
  password?: string;
  status?: number;
  created_at?: string;
}

export type IUserRegister = Omit<IUser, "user_role"> & { persona_id: number };

export interface IUserAuth {
  user?: IUser;
  sys_graph_id?: number;
  token?: string;
  loading?: boolean;
  error?: boolean; // only for clear activities
}

export interface ITranscript {
  file_name: string;
}

export const metrics: TMetric[] = [
  "Accuracy",
  "Relevance",
  "Specificity",
  "Currentness",
  "Verbosity",
];

export interface IMetricContent {
  rating: number | null;
  feedback: string;
}

export type TMetric =
  | "Accuracy"
  | "Relevance"
  | "Specificity"
  | "Currentness"
  | "Verbosity";

export interface IChat {
  type: "question" | "answer" | "loading" | "topic" | "suggestions";
  content: string | string[];
  tables?: string[];
  reference?: string[];
  rating?: number;
  rating_response?: Record<TMetric, IMetricContent>;
}

export interface ICompany {
  cik_str?: number;
  is_available?: boolean;
  ticker: string;
  company_name: string;
}

export interface IChatResponse {
  id: number;
  user_id: number;
  feature_id: number;
  question: string;
  answer: string;
}

export interface IFetchFileResponse {
  id: number;
  fetch_status: number; // 0: failed, 1: completed & success, 2: pending
  analysis_type: number; // 0: transcript, 1: edgar
  company_name?: string;
  ticker: string;
  is_visited?: boolean;
  created_at: string;
}

export interface IEdgarFile {
  file_name: string;
  title?: string;
  filing_date: string;
  form_type: string;
  url: string;
}

export interface ITransaction {
  insider_name: string;
  company_name: string;
  Director: boolean;
  Officer: boolean;
  TenPercentOwner: boolean;
  transaction_type: string;
  remaing?: number;
  shares?: number;
  prices?: number;
  Other?: string;
  transaction_code?: string;
  OfficerTitle: string;
  transaction_dump: string;
  footnotes: string;
  url: string;
  file_name: string;
  reported_date: string;
}

export interface IFeatureInstance {
  id?: number;
  instance_name: string;
  feature_id: number;
  company_name: string;
  company_url?: string;
  ticker: string;
  is_company_available?: boolean;
  instance_metadata?: Record<string, any>;
  view_doc?: string;
  created_at?: string;
  step?: string;
  saved?: boolean;
}

export interface ITopic {
  topic: string;
  queries: string[];
}

export interface IResponseAnswer {
  question?: string;
  answer: string;
  data: string[];
  question_history?: string[][] | string[] | string;
}
