import {
  IFeatureInstance,
  ITransaction,
} from "../../../../redux/interfaces";

export interface ICustomInstance extends IFeatureInstance {
  instance_metadata: { docs: ITransaction[] };
}
