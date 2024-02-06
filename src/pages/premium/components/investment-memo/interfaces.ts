import { IFeatureInstance } from "../../../../redux/interfaces";

export interface ICustomInstance extends IFeatureInstance {
  instance_metadata: {
    template: string;
    report?: string;
  };
}
