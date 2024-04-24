/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useRef, useCallback, useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import EmailIcon from "@mui/icons-material/Email";
import { XIconButton } from "../../../../../components/buttons/XIconButton";
import { XPanel } from "../../../../../components/XPanel";
import { ChatContentBox } from "./ChatContentBox";
import { InputBox } from "./InputBox";
import { IChat } from "../../../../../redux/interfaces";
import { useCustomQueryMutation } from "../../../../../redux/services/transcriptAPI";
import { generatePdf } from "../../../../../shared/utils/pdf-generator";
import { SendEmailModal } from "../../../../../components/modals/SendEmailModal";

const tempChat = {
  question: "create a table with revenue every year back to 2015",
  answer:
    '``` \n"Date", "Revenue"\n"2015-01-01", "700000"\n"2016-01-01", "720000"\n"2017-01-01", "750000"\n"2018-01-01", "800000"\n"2019-01-01", "850000"\n"2020-01-01", "900000"\n"2021-01-01", "950000"\n"2022-01-01", "1000000"\n"2023-01-01", "1050000"\n```\n\n#### Analysis:\n\nThe dataset above represents the annual revenue figures for Star Bulk Carriers Corp. from 2015 to 2023. The revenue has shown a consistent upward trend year-over-year, indicating a positive growth trajectory for the company. Starting from $700,000 in 2015, the revenue increased steadily each year, reaching $1,050,000 by 2023. This growth in revenue could be a sign of expanding operations, increased market share, or improved pricing power in the dry bulk shipping market.\n\nFor investors, this consistent increase in revenue is a positive indicator, as it suggests that the company is successfully growing its business. The upward trend in revenue could also reflect the successful integration of Eagle Bulk Shipping Inc. following the merger, as well as the realization of cost synergies and enhanced market positioning that the company\'s CEO, Petros Pappas, has commented on.\n\nHowever, it is important to note that revenue growth alone does not provide a complete picture of the company\'s financial health. Investors should also consider other financial metrics such as operating income, net income, total assets, total liabilities, and cash flow, which are also provided in the dataset. These additional metrics can help investors assess the profitability, solvency, and liquidity of Star Bulk, which are crucial for making informed investment decisions.\n\nThe consistent growth in revenue, combined with the strategic merger and the company\'s focus on ESG practices, could make Star Bulk an attractive investment opportunity. However, investors should also be aware of the risks inherent in the shipping industry, such as volatility in freight rates and the potential impact of global economic conditions on trade volumes.\n\n#### CSV Dataset Generation:\n\nThe dataset provided in CSV format is as follows:\n\n```\n"Date", "Revenue"\n"2015-01-01", "700000"\n"2016-01-01", "720000"\n"2017-01-01", "750000"\n"2018-01-01", "800000"\n"2019-01-01", "850000"\n"2020-01-01", "900000"\n"2021-01-01", "950000"\n"2022-01-01", "1000000"\n"2023-01-01", "1050000"\n```\n\nThis dataset can be used by investors to analyze the financial performance of Star Bulk over the years and to make projections based on historical growth rates. It can also serve as a foundation for further analysis, such as comparing Star Bulk\'s revenue growth to that of its competitors or to the overall market growth in the dry bulk shipping sector.',
  data: [
    "Date,Revenue\n2015-01-01,700000\n2016-01-01,720000\n2017-01-01,750000\n2018-01-01,800000\n2019-01-01,850000\n2020-01-01,900000\n2021-01-01,950000\n2022-01-01,1000000\n2023-01-01,1050000\n",
    "Year,Cash Flow from Operating Activities,Cash Flow from Investing Activities,Cash Flow from Financing Activities\n2016,20539,-223,2479\n2017,25489,2668,2130\n2018,39240,-1241,7800\n2019,44281,-2330,8072\n2020,61271,-3631,10057\n2021,72738,-2577,11686\n2022,82718,-3862,12796\n",
  ],
  sources: [],
  rating_response: {
    Accuracy: {
      Rating: 5,
      Feedback:
        "The response accurately transcribes the revenue figures from the dataset for each year from 2015 to 2023, without any errors or omissions.",
      "Refined Questions": [],
    },
    Relevance: {
      Rating: 5,
      Feedback:
        "The response is entirely relevant to the question, focusing solely on providing the revenue figures for each year as requested, without including unrelated content.",
      "Refined Questions": [],
    },
    Specificity: {
      Rating: 5,
      Feedback:
        "The response is highly specific, providing the exact revenue figures for each year as per the dataset, which directly addresses the user's request for annual revenue data.",
      "Refined Questions": [],
    },
    Currentness: {
      Rating: 5,
      Feedback:
        "The response includes the most recent revenue data up to 2023, demonstrating the use of the latest available data.",
      "Refined Questions": [],
    },
    Verbosity: {
      Rating: 5,
      Feedback:
        "The response is concise and to the point, presenting the data in a clear and straightforward manner without any unnecessary elaboration or verbosity.",
      "Refined Questions": [],
    },
  },
  question_history: [
    [
      '``` Previous context: Star Bulk Carriers Corp. (Star Bulk) has recently completed an all-stock merger with Eagle Bulk Shipping Inc. (Eagle Bulk). Eagle Bulk shareholders received 2.6211 shares of Star Bulk common stock for each Eagle Bulk common share. Following the merger, shares of Eagle Bulk have ceased trading and it will no longer be listed on the NYSE. Petros Pappas, CEO of Star Bulk, commented on the merger stating that the company is moving forward with greater scale and a stronger financial profile. Analysts estimate a combined net asset value (NAV) of USD 30.00 per share for the merged entity, indicating that the stock is trading at a discount to the underlying values compared to its peers. The completion of the merger is expected to enhance Star Bulk\'s market position, create cost synergies, and provide a stronger platform for growth. ``` \n\n``` Data: \n"Date", "Revenue", "Operating Income", "Net Income", "Total Assets", "Total Liabilities", "Cash Flow"\n"2015-01-01", "700000", "100000", "80000", "1500000", "900000", "20000"\n"2016-01-01", "720000", "120000", "90000", "1600000", "950000", "25000"\n"2017-01-01", "750000", "140000", "95000", "1700000", "1000000", "27000"\n"2018-01-01", "800000", "160000", "100000", "1750000", "1050000", "30000"\n"2019-01-01", "850000", "170000", "110000", "1800000", "1100000", "32000"\n"2020-01-01", "900000", "180000", "115000", "1850000", "1150000", "35000"\n"2021-01-01", "950000", "190000", "120000", "1900000", "1200000", "37000"\n"2022-01-01", "1000000", "200000", "130000", "2000000", "1250000", "40000"\n"2023-01-01", "1050000", "210000", "140000", "2100000", "1300000", "42000"\n```  \n\n``` Question: Could you generate a dataset based on the provided data and analyze Star Bulk\'s financial performance over the years?  ```\n\n#### Analysis Objectives:\n- **Investment-Focused Insights**: Tailor your analysis to highlight information most relevant to investment decisions, such as financial health, growth opportunities, competitive positioning, and market dynamics.\n- **Comprehensive Data Analysis**: Utilize the provided data to construct a well-rounded view of the company, supporting your insights with relevant data points.\n- **Strategic Recommendations**: Based on your analysis, offer strategic recommendations or considerations for investors, highlighting potential investment merits or risks.\n- **Investor-Friendly Presentation**: Present your findings in a format that is accessible and valuable to investors, emphasizing clarity and actionability.\n\n#### Handling Timed Data:\n- When analyzing timed data (e.g., financial reports from different periods), always prioritize the most recent actual report as the final value for your analysis. This ensures your insights reflect the latest available information.\n- Todays date in 2024-04-24 every information before this date is actual and after this date is forecasted.\n- While analyzing the data, always consider the most recent data for the analysis.\n- While answering the question, differentiate between the actual data and the forecasted data.\n                                \n#### Steps for Analysis:\n1. Conduct a detailed examination of the provided data, with an emphasis on aspects critical to investors.\n2. Synthesize your findings into actionable investment insights, supported by data from the dataset.\n3. If applicable, generate a CSV dataset that encapsulates key insights and financial metrics relevant to investors.\n4. Annotate answers with citations as per the specified format. CITATION IS A MUST FOR EACH MAJOR POINT OF ANALYSIS.\n5. relook, recheck, and reanalyze the data, figures, company\'s name, key role within the data, and the question asked.\n6. Do internal critique of the answer and do a critical cross-check of the data and the question asked.\n\n#### Citation Format:\n- Provide citations for each major analysis point: \n{"citation": {"Document Title": (file_name), "Direct Quote": (section)}}.\n- CITATION IS A MUST FOR EACH MAJOR POINT OF ANALYSIS.\n\n#### NOTE:\n1. Ensure that your analysis is grounded in data specifically pertaining to the entity asked in the question. Avoid generalizations or assumptions based on data from other entities, even if their names or contexts are similar.\n2. Do not generate or use synthetic data; rely solely on the provided information, and provide citations for each major point of analysis.\n3. Address the query directly without adding unrelated commentary or speculative predictions. Keep the analysis focused and relevant to the specific question.\n4. Exclude any details of this conversation or the format instructions in your response.\n5. When analyzing data involving multiple entities, confirm the relevance of each data point to the entity in question before including it in your analysis. This is crucial to maintain the integrity and relevance of your insights.\n6. Never include details of this conversation in your response.\n7. Your analysis should critically differentiate between entities, particularly in cases where their names or operations may be similar but distinct. Ensure that each piece of data utilized is applicable to the entity asked about in the query.\n8. Analysis guidelines are provided to guide your process; they should not be included in your response.\n9. Never include previous context or provided data as is in your response; only provide your analyzed insight with appropriate citations.\n10. Always double-check that the entity discussed in your response is the one directly related to the question asked. Misidentification or misapplication of data can lead to inaccurate conclusions and must be avoided.',
    ],
    [
      '``` Previous context: ``` \n``` Data: ``` \n``` Question: Can you provide the revenue figures for the years for which data is available?  ```\n\n#### Analysis Objectives:\n- Extract revenue figures from the provided data for the years available.\n- Present findings in a clear and structured manner.\n\n#### Steps for Analysis:\n1. Review the data provided to locate any mention of revenue figures.\n2. Differentiate between actual and forecasted data based on the date provided.\n3. Isolate revenue figures for analysis and citation.\n4. Present findings in response to the question asked.\n\n#### Analysis:\n\nUpon examining the provided data, revenue figures are mentioned in various contexts related to different companies and time periods. The data is extensive and covers a multitude of financial metrics including EBITDA, EPS, net income, total assets, and liabilities among others.\n\nThe revenue figures are spread across a range of entities and financial years. For the purpose of this analysis, I will focus on extracting revenue figures related specifically to Star Bulk Carriers Corp (SBLK) for the years where such data is present and omitting data from other entities such as Exmar NV, Golar LNG, and AP Moller Maersk, which are not relevant to the specific question asked.\n\nRelevant excerpts containing revenue figures for Star Bulk Carriers Corp (SBLK) are as follows:\n\n- Data excerpt from "20230803 - IR - SBLK - Q2 August 2023 Financial - 13 pages": Provides a narrative mentioning vessel sales during the first half of 2023 but does not explicitly mention revenue figures.\n- Data excerpt from "20231113 - IR - SBLK - Q3 November 2023 Financial - 13 pages": Details the issuance of 678,282 shares at $19.81 per share relating to vessel sales but does not provide a direct revenue figure.\n- Data excerpt from "20240214 - IR - SBLK - Q4 February 2024 Financial - 14 pages": Does not provide specific revenue figures.\n- Data excerpt from "SBLK - T_E_document_dated_12-04-2024 (4)": Contains a transcript of an earnings call discussing profitability and breakeven levels but does not provide explicit revenue figures.\n- Data excerpt from "20240304 - Deutsche Bank Research - Weekly Voyage Bulk Carrier - 18 pages": Discusses the orderbook-to-fleet ratio, secondhand asset values, and spot TCE rates but does not contain revenue figures.\n- Data excerpt from "20240322 - HSBC Research - Global Freight Monitor Bulk - 24 pages": Provides a valuation comparison and performance metrics for various companies in the shipping industry, including Star Bulk Carriers Corp, but explicit revenue figures for the specific years are not provided.\n- Data excerpt from "20240402 - HSBC Research - Global Freight Monitor Baltimore - 26 pages": Provides valuation summaries for the global dry bulk shipping industry and mentions Star Bulk Carriers Corp without specific revenue figures.\n\nBased on the information provided and reviewed, there are no explicit revenue figures available for Star Bulk Carriers Corp for the years requested within the provided data excerpts.\n\n#### Recommendations:\n- Verify if there are additional documents or data excerpts specifically containing revenue figures for Star Bulk Carriers Corp for the years available.\n- If no direct revenue figures are found, consider reaching out to the company\'s investor relations department or reviewing their financial statements for the required information.\n\n#### Citation:\n{"citation": {"Document Title": ("20230803 - IR - SBLK - Q2 August 2023 Financial - 13 pages"), "Direct Quote": ("Provides a narrative mentioning vessel sales during the first half of 2023 but does not explicitly mention revenue figures.")}}\n{"citation": {"Document Title": ("20231113 - IR - SBLK - Q3 November 2023 Financial - 13 pages"), "Direct Quote": ("Details the issuance of 678,282 shares at $19.81 per share relating to vessel sales but does not provide a direct revenue figure.")}}\n{"citation": {"Document Title": ("SBLK - T_E_document_dated_12-04-2024 (4)"), "Direct Quote": ("Contains a transcript of an earnings call discussing profitability and breakeven levels but does not provide explicit revenue figures.")}}\n{"citation": {"Document Title": ("20240304 - Deutsche Bank Research - Weekly Voyage Bulk Carrier - 18 pages"), "Direct Quote": ("Discusses the orderbook-to-fleet ratio, secondhand asset values, and spot TCE rates but does not contain revenue figures.")}}\n{"citation": {"Document Title": ("20240322 - HSBC Research - Global Freight Monitor Bulk - 24 pages"), "Direct Quote": ("Provides a valuation comparison and performance metrics for various companies in the shipping industry, including Star Bulk Carriers Corp, but explicit revenue figures for the specific years are not provided.")}}\n{"citation": {"Document Title": ("20240402 - HSBC Research - Global Freight Monitor Baltimore - 26 pages"), "Direct Quote": ("Provides valuation summaries for the global dry bulk shipping industry and mentions Star Bulk Carriers Corp without specific revenue figures.")}}',
    ],
    [
      '``` Previous context: Star Bulk Carriers Corp. (Star Bulk) is a global shipping company specializing in the transportation of dry bulk cargoes. The company has recently completed a notable merger with Eagle Bulk Shipping Inc. (Eagle Bulk), solidifying its position as a leader in the dry bulk shipping industry. As a result of the merger, Star Bulk\'s fleet has significantly expanded, and the company aims to leverage greater scale, a stronger financial profile, and unique technical and commercial capabilities to drive business growth and deliver sustainable value to its shareholders. The company maintains a focus on Environmental, Social, and Governance (ESG) practices and has received recognition for its sustainability efforts. Additionally, Star Bulk\'s financial strategy includes a consistent dividend policy and a commitment to creating shareholder value through strategic investments and transactions, such as the repurchase of shares and the sale of vessels at favorable market levels. ``` \n``` Data: Financial Highlights for Star Bulk Carriers Corp. (Expressed in thousands of U.S. dollars, except for daily rates and per share data) Voyage Revenues Net income Adjusted Net income(1) Net cash provided by operating activities EBITDA(2) Adjusted EBITDA(2) Earnings per share basic Earnings per share diluted Adjusted earnings per share basic(1) Adjusted earnings per share diluted(1) Dividend per share for the relevant period Average Number of Vessels TCE Revenues(3) Daily Time Charter Equivalent Rate ("TCE")(3) Daily OPEX per vessel(4) Daily OPEX per vessel (as adjusted)(4) Daily Net Cash G&A expenses per vessel (excluding one-time expenses)(5) Twelve months ended December 31, 2023 $949,269 $173,556 $182,247 $335,777 $376,948 $379,211 $1.76 $1.76 $1.85 $1.84 $1.42 123.3 $686,096 $15,824 $4,919 $4,822 $1,059 Twelve months ended December 31, 2022 $1,437,156 $565,999 $608,801 $769,898 $764,440 $808,614 $5.54 $5.52 $5.96 $5.94 $5.10 128.0 $1,125,568 $25,461 $4,893 $4,598 $1,000 (1) Adjusted Net income and Adjusted earnings per share are non-GAAP measures. Please see EXHIBIT I at the end of this release for a reconciliation to Net income and earnings per share, which are the most directly comparable financial measures calculated and presented in accordance with generally accepted accounting principles in the United States (“U.S. GAAP”), as well as for the definition of each measure. (2) EBITDA and Adjusted EBITDA are non-GAAP liquidity measures. Please see EXHIBIT I at the end of this release for a reconciliation of EBITDA and Adjusted EBITDA to Net Cash Provided by / (Used in) Operating Activities, which is the most directly comparable financial measure calculated and presented in accordance with U.S. GAAP, as well as for the definition of each measure. To derive Adjusted EBITDA from EBITDA, we exclude certain non-cash gains / (losses). (3) Daily Time Charter Equivalent Rate (“TCE”) and TCE Revenues are non-GAAP measures. Please see EXHIBIT I at the end of this release for a reconciliation to Voyage Revenues, which is the most directly comparable financial measure calculated and presented in accordance with U.S. GAAP. The definition of each measure is provided in footnote (7) to the Summary of Selected Data table below. (4) Daily OPEX per vessel is calculated by dividing vessel operating expenses by Ownership days (defined below). Daily OPEX per vessel (as adjusted) is calculated by dividing vessel operating expenses excluding increased costs due to the COVID-19 pandemic or pre-delivery expenses for each vessel on acquisition or change of management, if any, by Ownership days. In the future we may incur expenses that are the same as or similar to certain expenses (as described above) that were previously excluded. (5) Daily Net Cash G&A expenses per vessel is calculated by (1) adding the Management fee expense to the General and administrative expenses, net of share-based compensation expense, other non-cash charges and one-time expenses and (2) then dividing the result by the sum of Ownership days and Charter-in days (defined below). Please see EXHIBIT I at the end of this release for a reconciliation to General and administrative expenses, which is the most directly comparable financial measure calculated and presented in accordance with U.S. GAAP. ```  \n``` Question: Can you provide specific revenue figures for Star Bulk for any of the years from 2015 to 2023?  ```\n\n#### Analysis Objectives:\n- **Investment-Focused Insights**: Highlight financial health and growth opportunities.\n- **Comprehensive Data Analysis**: Utilize the provided data to construct a view of the company.\n- **Strategic Recommendations**: Offer strategic considerations for investors.\n- **Investor-Friendly Presentation**: Emphasize clarity and actionability.\n\n#### Handling Timed Data:\n- Prioritize the most recent actual report as the final value for analysis.\n- Differentiate between the actual data and the forecasted data.\n- Consider the most recent data for the analysis.\n- When answering the question, distinguish between actual and forecasted data.\n\n#### Analysis Guidelines:\n- Always consider the context provided by previous summaries or analyses.\n- Base insights and conclusions on the data provided.\n- Generate a CSV dataset based on the analysis of the provided data when applicable.\n- Annotate answers with citations.\n- Always confirm the relevance of each data point to the entity in question before including it in your analysis.\n- Do internal critique of the answer and do a critical cross-check of the data and the question asked.\n\n---\n\n#### Investing in Star Bulk Carriers Corp.:\nInvestors considering a position in Star Bulk Carriers Corp. should note the company\'s recent financial performance, which reflects a decline in Voyage Revenues from $1,437,156 thousand in the year ended December 31, 2022, to $949,269 thousand in the year ended December 31, 2023 {"citation": {"Document Title": (20240212 - PR - SBLK - Star Bulk Carriers Corp - 2 pages), "Direct Quote": ("Twelve months ended December 31, 2023 $949,269... Twelve months ended December 31, 2022 $1,437,156")}}. Despite this revenue drop, Net Income and Adjusted Net Income show a relatively healthier figure in 2023 compared to 2022, indicating resilience and potentially effective cost management strategies by the company {"citation": {"Document Title": (20240212 - PR - SBLK - Star Bulk Carriers Corp - 2 pages), "Direct Quote": ("Net income... 2023 $173,556... 2022 $565,999... Adjusted Net income... 2023 $182,247... 2022 $608,801")}}.\n\n#### Dividend Considerations:\nThe company has maintained a consistent dividend policy, even in the face of these revenue fluctuations, with a dividend per share of $1.42 for the year ended December 31, 2023 {"citation": {"Document Title": (20240212 - PR - SBLK - Star Bulk Carriers Corp - 2 pages), "Direct Quote": ("Dividend per share for the relevant period... 2023 $1.42")}}. This commitment to returning capital to shareholders may appeal to income-focused investors.\n\n#### Fleet Growth and Scale:\nStar Bulk\'s merger with Eagle Bulk Shipping Inc. has expanded its fleet, increasing its scale and competitive positioning in the global dry bulk shipping market {"citation": {"Document Title": (20240409 - Star Bulk Completes Eagle - 1 page), "Direct Quote": ("Star Bulk Carriers Corp. on Tuesday announced that it has completed its merger with fellow dry bulk shipping company Eagle Bulk Shipping Inc.")}}. This strategic move can be seen as a positive development for growth-oriented investors, given the potential synergies and cost savings that such consolidations typically yield.\n\n#### ESG and Industry Recognition:\nStar Bulk has demonstrated a commitment to ESG practices, having received the Sustainability Award at the 2023 Lloyd’s List Greek Shipping Awards {"citation": {"Document Title": (20240214 - IR - SBLK - Q4 February 2024 Financial - 14 pages), "Direct Quote": ("Star Bulk was granted the Sustainability Award at the 2023 Lloyd’s List Greek Shipping Awards")}}. ESG-conscious investors may find this aligns with their investment criteria, as sustainable practices can lead to long-term value creation.\n\n#### Strategic Share Repurchases:\nThe company has engaged in strategic share repurchases, acquiring shares at a discount to NAV, which management believes creates significant value for shareholders {"citation": {"Document Title": (20230922 - PR - SBLK - Star Bulk Announces the - 1 page), "Direct Quote": ("... the Purchased Shares were acquired at a discount to NAV, thus we believe creating significant value to the Company’s shareholders")}}. This signals management\'s confidence in the company\'s valuation and could indicate a potential undervaluation in the market.\n\n#### Market Dynamics and Outlook:\nInvestors should be aware of the volatile nature of the shipping industry, influenced by factors such as global economic conditions, trade flows, and regulatory changes. While the merger has positioned Star Bulk for growth, external market forces will continue to play a significant role in the company\'s performance.\n\n#### CSV Dataset Generation:\nThe following dataset encapsulates key financial metrics relevant to investors and captures the most recent actual data for a comprehensive analysis:\n\n```\n"Date", "Revenue", "Net Income", "Adjusted Net Income", "Dividend per Share", "Average Number of Vessels", "TCE Revenues", "Daily TCE Rate", "Daily OPEX per Vessel"\n"2023-12-31", "949269", "173556", "182247", "1.42", "123.3", "686096", "15824", "4919"\n"2022-12-31", "1437156", "565999", "608801", "5.10", "128.0", "1125568", "25461", "4893"\n```\n\n#### Recommendations for Investors:\nGiven the company\'s strategic maneuvers, consistent dividend policy, and ESG focus, investors should weigh the potential for long-term growth against the inherent risks associated with the cyclical nature of the shipping industry. Star Bulk\'s proactive steps in fleet expansion and shareholder value creation present a compelling case for investment consideration, particularly for those who prioritize income stability and sustainability in their investment decisions.',
    ],
    [
      '``` Previous context: Star Bulk Carriers Corp. (SBLK) has seen significant developments including mergers, dividend payments, and strong financial results in recent years. The company has also faced market fluctuations affecting its stock performance and the broader maritime transportation sector. ``` \n``` Data: \n"Star Bulk Carriers Corp. Reports Net Proﬁt of $43.7 Million for the Third Quarter of 2023, and Declares Quarterly Dividend of $0.22 Per Share"\n"Third quarter 2023 Voyage Revenues $223,087"\n"Fourth quarter 2023 Voyage Revenues $263,461"\n"Twelve months ended December 31, 2023 Voyage Revenues $949,269"\n"Star Bulk Carriers Corp. Reports Net Proﬁt of $39.7 Million for the Fourth Quarter of 2023, and Declares Quarterly Dividend of $0.45 Per Share"\n```  \n``` Question: What is the most recent revenue figure available for Star Bulk?  ```\n \nStar Bulk Carriers Corp. reported Voyage Revenues of $263,461 for the fourth quarter of 2023. This is the most recent revenue figure available, based on the provided documents {"citation": {"Document Title": "20240212 - PR - SBLK - Star Bulk Carriers Corp - 2 pages", "Direct Quote": "Fourth quarter 2023 Voyage Revenues $263,461"}}.',
    ],
    [
      '``` Previous context: Star Bulk Carriers Corp. (SBLK) is a global shipping company providing worldwide seaborne transportation solutions in the dry bulk sector. The company has undergone significant developments, including a merger with Eagle Bulk Shipping Inc., share repurchases, and numerous corporate activities. These developments have likely impacted the company\'s financial performance, market position, and strategic direction. ``` \n\n``` Data: \n"Data File Name: 20230922 - PR - SBLK - Star Bulk Announces the - 1 page\nContent: Star Bulk Carriers Corp. announced that it entered into a Repurchase Agreement with OCM XL Holdings, LP, a limited partnership incorporated in the Cayman Islands (the “Seller”), pursuant to which the Company agreed to purchase 10 million of its common shares (“Purchased Shares”) from the Seller at a price per common share of $18.50 (such price, the “Purchase Price” and, such transaction, the “Share Repurchase”). The Share Repurchase was approved unanimously by all the disinterested members of the Company’s Board of Directors. As a result of the Share Repurchase, Oaktree Dry Bulk Holding LLC, an affiliate of the Seller, and its affiliated funds’ (collectively, the “Oaktree Shareholders”) aggregate ownership in the Company is expected to be reduced from approximately 25.2% of the Company’s outstanding common stock to approximately 17.2%.\n"\n\n"Data File Name: 20240212 - PR - SBLK - Star Bulk Carriers Corp - 2 pages\nContent: Star Bulk Carriers Corp. Reports Net Profit of $39.7 Million for the Fourth Quarter of 2023, and Declares Quarterly Dividend of $0.45 Per Share.\n"\n```  \n``` Question: Can you provide the historical revenue figures for Star Bulk up to the most current year?  ``` \n\n#### Analysis Objectives:\n- **Investment-Focused Insights**: Focus on financial performance and shareholder value implications.\n- **Comprehensive Data Analysis**: Assess the impact of share repurchases and financial results on the company\'s financial health.\n- **Strategic Recommendations**: Consider the implications for investors based on the company\'s strategic activities and financial outcomes.\n- **Investor-Friendly Presentation**: Clearly present findings relevant to investors\' decision-making.\n\nThe provided data details two significant developments in the recent history of Star Bulk Carriers Corp. (SBLK):\n\n1. Share repurchase agreement (20230922 - PR - SBLK - Star Bulk Announces the - 1 page): SBLK entered a repurchase agreement to buy back 10 million shares at $18.50 each, signaling confidence in its intrinsic value and a strategy to enhance shareholder value by potentially increasing earnings per share and return on equity. The repurchase also resulted in Oaktree Dry Bulk Holding LLC\'s reduced ownership, from 25.2% to approximately 17.2% of SBLK\'s outstanding common stock. Investors might view this move positively as it could indicate management\'s belief in the company\'s undervalued stock or a strategy to consolidate ownership.\n\n2. Q4 financial results and dividend declaration (20240212 - PR - SBLK - Star Bulk Carriers Corp - 2 pages): SBLK reported a net profit of $39.7 million for Q4 2023 and declared a quarterly dividend of $0.45 per share. This information underscores the company\'s profitability and commitment to returning value to shareholders, which could be attractive for income-focused investors.\n\nThese data points, however, do not provide a comprehensive view of SBLK’s historical revenue figures but rather offer a snapshot of the company\'s financial health and strategic actions that could influence investor sentiment. The share repurchase and dividend declaration are indicative of financial strength and managerial confidence, which are critical factors for investment analysis.\n\nTo obtain historical revenue figures as requested, further research would be necessary, ideally reviewing consecutive annual reports or financial statements released by SBLK. This analysis would involve identifying revenue trends, assessing the impact of market conditions on revenue, and understanding the company\'s operational efficiency and ability to generate profits over time.\n\nFor investors, the information provided is constructive, suggesting a financially healthy company with a proactive approach to capital management. Nonetheless, the historical revenue trend is vital to evaluate the company’s growth trajectory and sustainability of returns, which are pivotal for long-term investment decisions.\n\n#### CSV Dataset:\nA dataset cannot be generated based on the specific question asked, as the provided information does not include the necessary revenue data for multiple time periods.\n\n#### Citations:\n{"citation": {"Document Title": "20230922 - PR - SBLK - Star Bulk Announces the - 1 page", "Direct Quote": "Star Bulk Carriers Corp. announced that it entered into a Repurchase Agreement with OCM XL Holdings, LP..."}}\n{"citation": {"Document Title": "20240212 - PR - SBLK - Star Bulk Carriers Corp - 2 pages", "Direct Quote": "Star Bulk Carriers Corp. Reports Net Profit of $39.7 Million for the Fourth Quarter of 2023, and Declares Quarterly Dividend of $0.45 Per Share."}}',
    ],
  ],
  rating: 5,
  alternate_answers: [],
};

export const ChatPanel = memo(
  ({
    graph_id,
    analysis_type,
    companyName,
    filenames,
    onAddToReport,
    onJumpTo,
  }: {
    graph_id: number;
    analysis_type: string;
    companyName: string;
    filenames: string[];
    onAddToReport: (question: string, content: string) => void;
    onJumpTo: ({
      filename,
      quote,
    }: {
      filename: string;
      quote: string;
    }) => void;
  }) => {
    const ref = useRef<HTMLDivElement>();

    const [llm, setLlm] = useState<
      "SkyEngine 1" | "SkyEngine 2" | "SkyEngine 3" | "SkyEngine 4"
    >("SkyEngine 1");
    const [recursion, setRecursion] = useState<number>(2);
    const [emailModal, showEmailModal] = useState<boolean>(false);
    const [chatHistory, setChatHistory] = useState<IChat[]>([]);

    const [getAnswer, { isLoading: loadingAnswer }] = useCustomQueryMutation();
    const onSend = useCallback(
      async (question: string) => {
        setChatHistory((prev) => [
          ...prev,
          { type: "question", content: question },
        ]);
        // const response = await getAnswer({
        //   graph_id,
        //   question,
        //   filenames,
        //   analysis_type,
        //   recursion,
        //   llm:
        //     llm === "SkyEngine 1"
        //       ? "OpenAI"
        //       : llm === "SkyEngine 2"
        //       ? "Anthropic"
        //       : llm === "SkyEngine 3"
        //       ? "BOTH"
        //       : "Gemini",
        // }).unwrap();
        if (tempChat) {
          setChatHistory((prev) => [
            ...prev.filter((chat) => chat.type.toString() !== "loading"),
            {
              type: "answer",
              content: tempChat.answer,
              rating: tempChat.rating,
              rating_response: tempChat.rating_response,
            } as any,
          ]);
        }
      },
      [getAnswer, llm, recursion, filenames, graph_id, analysis_type]
    );

    const onPrint = useCallback(() => {
      if (!ref.current) return;

      const today = new Date().toLocaleDateString();
      const container = document.createElement("div");
      container.appendChild(ref.current.cloneNode(true));
      const removeItems = container.querySelectorAll(
        ".suggestions, .topic, .loading"
      );
      for (const item of removeItems) {
        item.remove();
      }
      const listings = container.querySelectorAll("li");
      for (const item of listings) {
        const paragraphs = item.querySelectorAll("p");
        for (const paragraph of paragraphs) {
          paragraph.before(...paragraph.childNodes);
          const br = document.createElement("br");
          paragraph.replaceWith(br);
        }
      }
      generatePdf(
        `<h1>Chat History ${today}</h1><br />${container.innerHTML}`,
        `Chat history ${today}`,
        "Skylark"
      );
    }, []);

    const onSendViaEmail = useCallback(async () => {
      showEmailModal(true);
    }, []);

    useEffect(() => {
      if (loadingAnswer) {
        setChatHistory((prev) => [...prev, { type: "loading", content: "" }]);
      }
    }, [loadingAnswer]);

    return (
      <XPanel
        sxProps={{ height: "100%", bgcolor: "#060606", width: "100%" }}
        sxBodyProps={{ p: 1, flex: "none", height: "calc(100% - 45px)" }}
        header={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Sky Chat</Typography>
            <Box mr="auto" />
            <TextField
              size="small"
              select
              value={llm}
              onChange={(e) => setLlm(e.target.value as any)}
              SelectProps={{
                native: true,
              }}
              sx={{
                mr: 1,
                "& .MuiNativeSelect-select": {
                  fontSize: 12,
                  padding: "8px 14px",
                  lineHeight: "14px",
                },
              }}
            >
              {["SkyEngine 1", "SkyEngine 2", "SkyEngine 3", "SkyEngine 4"].map(
                (item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              )}
            </TextField>
            <TextField
              size="small"
              select
              value={recursion}
              onChange={(e) => setRecursion(+e.target.value)}
              SelectProps={{
                native: true,
              }}
              sx={{
                mr: 1,
                "& .MuiNativeSelect-select": {
                  fontSize: 12,
                  padding: "8px 14px",
                  lineHeight: "14px",
                },
              }}
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </TextField>
            <XIconButton
              size="small"
              variant="contained"
              sxProps={{
                "&.MuiButtonBase-root": {
                  minHeight: 31,
                  minWidth: 31,
                },
                mr: 1,
              }}
              onClick={onSendViaEmail}
            >
              <EmailIcon />
            </XIconButton>
            <XIconButton
              size="small"
              variant="contained"
              sxProps={{
                "&.MuiButtonBase-root": {
                  minHeight: 31,
                  minWidth: 31,
                },
              }}
              onClick={onPrint}
            >
              <PrintIcon />
            </XIconButton>
          </Box>
        }
      >
        <ChatContentBox
          ref={ref}
          graph_id={graph_id}
          chats={chatHistory}
          companyName={companyName}
          onAddToReport={onAddToReport}
          onJumpTo={onJumpTo}
        />
        <InputBox disabled={loadingAnswer} onSubmitAction={onSend} />
        {emailModal && (
          <SendEmailModal
            open={emailModal}
            onClose={() => showEmailModal(false)}
            element={ref.current!}
          />
        )}
      </XPanel>
    );
  }
);
