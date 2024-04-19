export interface IVDR {
  id: number;
  name: string;
}

export interface IVDRList extends IVDR {
  count: number;
  status: number; // 1: processing = ingesting, 2: completed, 0: draft
}


export interface IVDRDetail extends IVDR {
  files: {
    file_name: string;
    ingested: boolean;
    ingested_at: string;
  }[]
  status: number; // 1: processing = ingesting, 2: completed, 0: draft
}