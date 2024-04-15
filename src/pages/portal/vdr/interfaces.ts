export interface IVDR {
  id: number;
  name: string;
  filenames: string[];
  status: number; // 1: processing = ingesting, 2: completed, 0: draft
  rating: number;
  created: string;
  updated: string;
}