import { IFeatureInstance, ITranscript } from "../../../../redux/interfaces";

export interface ICustomInstance extends IFeatureInstance {
  instance_metadata: {
    criteria?: string[];
    docs?: ITranscript[];
    db_files?: { graph_id: number; name: string; date: string; id?: number }[];
    report?: string;
  };
}
