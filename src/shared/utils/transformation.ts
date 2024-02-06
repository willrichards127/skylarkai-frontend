import { secCategories, secFormTitles } from "../../models/constants";
import { IEdgarFile } from "../../redux/interfaces";

const parseDate = (str: string) => {
  const year = parseInt(str.substring(0, 4), 10);
  const month = parseInt(str.substring(4, 6), 10) - 1; // Months are zero-based
  const day = parseInt(str.substring(6, 8), 10);
  return new Date(year, month, day);
};

const getQuarter = (date: Date) => {
  const month = date.getMonth() + 1; // Adding 1 because getMonth() returns zero-based months
  return Math.ceil(month / 3);
};

export const categorizeEdgars = (docs: IEdgarFile[]) => {
  const categorized: Record<string, IEdgarFile[]> = {};
  for (const doc of docs) {
    for (const { category, forms } of secCategories) {
      if (!categorized[category]) {
        categorized[category] = [];
      }
      if (forms.includes(doc.form_type)) {
        if (doc.form_type === "10-K") {
          const [, , date] = doc.file_name.split("-");
          const fiscalYear = parseDate(date).getFullYear();
          categorized[category].push({
            ...doc,
            title: fiscalYear ? `FY ${fiscalYear}` : "",
          });
        } else if (doc.form_type === "10-Q") {
          const [, , date] = doc.file_name.split("-");
          const quarter = getQuarter(parseDate(date));
          categorized[category].push({
            ...doc,
            title: quarter ? `Q${getQuarter(parseDate(date))}` : "",
          });
        } else {
          categorized[category].push({
            ...doc,
            title: secFormTitles[doc.form_type] || "",
          });
        }
      }
    }
  }
  return categorized;
};
