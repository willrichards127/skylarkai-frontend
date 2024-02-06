import { IFeatureInstance, ITranscript } from "../../../../../redux/interfaces";

export interface ICustomInstance extends IFeatureInstance {
  instance_metadata: {
    criteria?: string[];
    docs: ITranscript[];
    report?: string;
  };
}
