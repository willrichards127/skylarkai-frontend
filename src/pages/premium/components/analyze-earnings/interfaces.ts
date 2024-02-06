import { IFeatureInstance, ITranscript } from "../../../../redux/interfaces";

export interface ICustomInstance extends IFeatureInstance {
  instance_metadata: { docs: ITranscript[]; report?: string };
}
