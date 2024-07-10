export interface IVDR {
  id: number;
  name?: string;
  is_active?: string;
}

export interface IVDRFile {
  file_name: string;
  ingested: boolean;
  ingested_at: string;
}

export interface IVDRFileWithId extends IVDRFile {
  id: string;
}

export interface IVDRDetail extends IVDR {
  files: IVDRFile[];
  status: number; // 1: processing = ingesting, 2: completed, 0: draft
}

export interface IVDRFileExtend extends IVDRFileWithId {
  checked?: boolean;
}
