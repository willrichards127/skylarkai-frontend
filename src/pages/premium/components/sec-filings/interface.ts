import { IFeatureInstance, IEdgarFile, ITopic } from "../../../../redux/interfaces";

export interface ICustomInstance extends IFeatureInstance {
  instance_metadata: { docs: IEdgarFile[], suggestions: ITopic[] };
}
