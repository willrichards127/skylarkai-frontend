import { IFeatureInstance } from "../../../../../redux/interfaces";

export interface ICustomInstance extends IFeatureInstance {
  instance_metadata: {
    filename0?: string;
    filename1?: string;
    report?: string;
    criteria?: string[]
  };
}
