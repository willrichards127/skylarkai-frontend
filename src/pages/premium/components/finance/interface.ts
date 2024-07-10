import { IFeatureInstance, IEdgarFile } from "../../../../redux/interfaces";

export interface ICustomInstance extends IFeatureInstance {
  instance_metadata: { docs: IEdgarFile[] };
}
