import { IFeatureInstance } from "../../../../redux/interfaces";

export interface ICustomInstance extends IFeatureInstance {
  instance_metadata: {
    template_content?: string;
    template_name?: string;
    uploaded_template_file?: File;
    uploaded_files: File[];
    uploaded_file_names: string[];
    report?: string;
  };
}
