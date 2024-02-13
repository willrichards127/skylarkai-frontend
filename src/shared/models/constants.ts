import { ICompany, ITopic } from "../../redux/interfaces";

export const HeaderConfig = {
  mainToolbarHeight: 64,
  subToolbarHeight: 44,
};

export const bottomNavHeight = 390;
export const helpNavWidth = 400;
export const leftNavWidth = 360;
export const chatboxWidth = 480;

export const topicDict = {
  Financials: [
    "financial_statements_analysis",
    "management_discussion_analysis",
  ],
  News: ["legal_proceedings"],
  "Prospectuses and Registrations": ["risk_factors"],
  Proxies: ["executive_compensation"],
  Ownership: ["business_overview"],
  Other: [],
};

export const secCategories = [
  {
    category: "Financials",
    forms: ["10-K", "10-Q"],
  },
  {
    category: "News",
    forms: ["8-K"],
  },
  {
    category: "Prospectuses and Registrations",
    forms: ["424B2", "FWP", "25-NSE", "S-8", "S-8 POS", "S-3ASR", "8-A12B"],
  },
  {
    category: "Proxies",
    forms: [
      "PX14A6G",
      "DEFA14A",
      "DEF 14A",
      "PX14A6N",
      "PRE 14A",
      "DFAN14A",
      "DEFR14A",
    ],
  },
  {
    category: "Ownership",
    forms: [
      "4",
      "144",
      "SC 13G/A",
      "4/A",
      "SC 13G",
      "3/A",
      "3",
      "SC TO-I/A",
      "SC TO-I",
    ],
  },
  {
    category: "Other",
    forms: [
      "SD",
      "IRANNOTICE",
      "CERT",
      "25",
      "CERTNYS",
      "NO ACT",
      "UPLOAD",
      "CORRESP",
      "10-K405",
    ],
  },
];

export const secFormTitles: Record<string, string> = {
  "8-K": "Current Report",
  "424B2": "Prospectus",
  "FWP": "Free Writing Prospectus",
  "25-NSE": "Notification of Late Filing",
  "S-8": "Registration of Securities for Employee Benefit Plan",
  "S-8 POS": "Post-Effective Amendment to an S-8 Filing",
  "S-3ASR": "Automatic Shelf Registration Statement",
  "8-A12B": "Registration of Certain Classes of Securities",
  "PX14A6G": "Preliminary Proxy Soliciting Material",
  "DEFA14A": "Additional Definitive Proxy Soliciting Material",
  "DEF 14A": "Definitive Proxy Statement",
  "PX14A6N": "Preliminary Proxy Soliciting Material",
  "PRE 14A": "Preliminary Proxy Statement",
  "DFAN14A": "Additional Definitive Proxy Soliciting Material",
  "DEFR14A": "Additional Definitive Proxy Soliciting Material",
  "4": "Statement of Changes in Beneficial Ownership",
  "144": "Notice of Proposed Sale of Securities",
  "SC 13G/A": "Amendment to the SC 13G filing",
  "4/A": "Amendment to the Statement of Changes in Beneficial Ownership",
  "SC 13G": "Statement of Beneficial Ownership of Common Stock",
  "3/A": "Amendment to the Initial SC 13D/G filing",
  "3": "Initial Statement of Beneficial Ownership of Common Stock",
  "SC TO-I/A": "Amendment to the Tender Offer Statement",
  "SC TO-I": "Tender Offer Statement",
  "SD": "Specialized Disclosure Report",
  "IRANNOTICE": "Iran Notice",
  "CERT": "Certification",
  "25": "Notification of Late Filing",
  "CERTNYS": "Certification for New York Stock Exchange",
  "NO ACT": "Notice of Effectiveness",
  "UPLOAD": "Upload Submission",
  "CORRESP": "Correspondence",
  "10-K405": "Annual Report"
};

export const investmentTemplate = `
# Investment Memo Template\n\n ## Executive Summary\n- **Investment Thesis:** Brief overview of the investment opportunity.\n- **Key Metrics:** Summary of financial and operational metrics.\n- **Recommendation:** Proposed action (buy, hold, sell).\n\n## Company Overview\n- **Company Description:** Brief description of the company.\n- **Industry Analysis:** Overview of the industry and market trends.\n- **Competitive Positioning:** Analysis of the company's position in the market.\n\n## Financial Analysis\n- **Revenue Analysis:** Breakdown of revenue streams and growth.\n- **Profitability Analysis:** Examination of margins and profit trends.\n- **Balance Sheet Analysis:** Assessment of financial health (assets, liabilities, equity).\n- **Cash Flow Analysis:** Evaluation of operational, investing, and financing cash flows.\n\n## Strategic Analysis\n- **Business Model:** Analysis of the company's business model and its sustainability.\n- **Growth Strategy:** Review of the company's growth plans and potential.\n- **Risks and Mitigation:** Identification of potential risks and mitigation strategies.\n\n## Management and Governance\n- **Management Team:** Overview of the management team's background and experience.\n- **Corporate Governance:** Assessment of governance structures and policies.\n\n## Investment Rationale\n- **Value Proposition:** Justification of the investment value.\n- **Investment Risk:** Analysis of potential investment risks.\n- **Exit Strategies:** Potential exit options and scenarios.\n\n## Financial Projections and Valuation\n- **Projection Summary:** Future financial projections.\n- **Valuation Analysis:** Valuation methods and outcomes (e.g., DCF, comparables).\n\n## Appendices\n- **Additional Data:** Any additional relevant data or information.\n- **Sources:** References and sources of information."
`;

export const tickers: ICompany[] = [
  {
    cik_str: 320193,
    ticker: "AAPL",
    company_name: "Apple Inc.",
  },
  {
    cik_str: 789019,
    ticker: "MSFT",
    company_name: "MICROSOFT CORP",
  },
  {
    cik_str: 1652044,
    ticker: "GOOGL",
    company_name: "Alphabet Inc.",
  },
  {
    cik_str: 1018724,
    ticker: "AMZN",
    company_name: "AMAZON COM INC",
  },
  {
    cik_str: 1045810,
    ticker: "NVDA",
    company_name: "NVIDIA CORP",
  },
  {
    cik_str: 1326801,
    ticker: "META",
    company_name: "Meta Platforms, Inc.",
  },
  {
    cik_str: 1318605,
    ticker: "TSLA",
    company_name: "Tesla, Inc.",
  },
  {
    cik_str: 1067983,
    ticker: "BRK-B",
    company_name: "BERKSHIRE HATHAWAY INC",
  },
  {
    cik_str: 59478,
    ticker: "LLY",
    company_name: "ELI LILLY & Co",
  },
  {
    cik_str: 1403161,
    ticker: "V",
    company_name: "VISA INC.",
  },
  {
    cik_str: 1046179,
    ticker: "TSM",
    company_name: "TAIWAN SEMICONDUCTOR MANUFACTURING CO LTD",
  },
  {
    cik_str: 1730168,
    ticker: "AVGO",
    company_name: "Broadcom Inc.",
  },
  {
    cik_str: 731766,
    ticker: "UNH",
    company_name: "UNITEDHEALTH GROUP INC",
  },
  {
    cik_str: 19617,
    ticker: "JPM",
    company_name: "JPMORGAN CHASE & CO",
  },
  {
    cik_str: 353278,
    ticker: "NVO",
    company_name: "NOVO NORDISK A S",
  },
  {
    cik_str: 884394,
    ticker: "SPY",
    company_name: "SPDR S&P 500 ETF TRUST",
  },
  {
    cik_str: 104169,
    ticker: "WMT",
    company_name: "Walmart Inc.",
  },
  {
    cik_str: 824046,
    ticker: "LVMUY",
    company_name: "LVMH MOET HENNESSY LOUIS VUITTON",
  },
  {
    cik_str: 34088,
    ticker: "XOM",
    company_name: "EXXON MOBIL CORP",
  },
  {
    cik_str: 1141391,
    ticker: "MA",
    company_name: "Mastercard Inc",
  },
  {
    cik_str: 200406,
    ticker: "JNJ",
    company_name: "JOHNSON & JOHNSON",
  },
  {
    cik_str: 354950,
    ticker: "HD",
    company_name: "HOME DEPOT, INC.",
  },
  {
    cik_str: 1047716,
    ticker: "LTMAY",
    company_name: "LATAM AIRLINES GROUP S.A.",
  },
  {
    cik_str: 80424,
    ticker: "PG",
    company_name: "PROCTER & GAMBLE Co",
  },
  {
    cik_str: 909832,
    ticker: "COST",
    company_name: "COSTCO WHOLESALE CORP /NEW",
  },
  {
    cik_str: 937966,
    ticker: "ASML",
    company_name: "ASML HOLDING NV",
  },
  {
    cik_str: 1341439,
    ticker: "ORCL",
    company_name: "ORACLE CORP",
  },
  {
    cik_str: 796343,
    ticker: "ADBE",
    company_name: "ADOBE INC.",
  },
  {
    cik_str: 93410,
    ticker: "CVX",
    company_name: "CHEVRON CORP",
  },
  {
    cik_str: 1551152,
    ticker: "ABBV",
    company_name: "AbbVie Inc.",
  },
  {
    cik_str: 310158,
    ticker: "MRK",
    company_name: "Merck & Co., Inc.",
  },
  {
    cik_str: 70858,
    ticker: "BAC",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 21344,
    ticker: "KO",
    company_name: "COCA COLA CO",
  },
  {
    cik_str: 1108524,
    ticker: "CRM",
    company_name: "Salesforce, Inc.",
  },
  {
    cik_str: 1094517,
    ticker: "TM",
    company_name: "TOYOTA MOTOR CORP/",
  },
  {
    cik_str: 77476,
    ticker: "PEP",
    company_name: "PEPSICO INC",
  },
  {
    cik_str: 1061736,
    ticker: "FMX",
    company_name: "MEXICAN ECONOMIC DEVELOPMENT INC",
  },
  {
    cik_str: 2488,
    ticker: "AMD",
    company_name: "ADVANCED MICRO DEVICES INC",
  },
  {
    cik_str: 1467373,
    ticker: "ACN",
    company_name: "Accenture plc",
  },
  {
    cik_str: 63908,
    ticker: "MCD",
    company_name: "MCDONALDS CORP",
  },
  {
    cik_str: 1065280,
    ticker: "NFLX",
    company_name: "NETFLIX INC",
  },
  {
    cik_str: 1306965,
    ticker: "SHEL",
    company_name: "Shell plc",
  },
  {
    cik_str: 858877,
    ticker: "CSCO",
    company_name: "CISCO SYSTEMS, INC.",
  },
  {
    cik_str: 97745,
    ticker: "TMO",
    company_name: "THERMO FISHER SCIENTIFIC INC.",
  },
  {
    cik_str: 901832,
    ticker: "AZN",
    company_name: "ASTRAZENECA PLC",
  },
  {
    cik_str: 1114448,
    ticker: "NVS",
    company_name: "NOVARTIS AG",
  },
  {
    cik_str: 1737806,
    ticker: "PDD",
    company_name: "PDD Holdings Inc.",
  },
  {
    cik_str: 1707925,
    ticker: "LIN",
    company_name: "LINDE PLC",
  },
  {
    cik_str: 50863,
    ticker: "INTC",
    company_name: "INTEL CORP",
  },
  {
    cik_str: 1577552,
    ticker: "BABA",
    company_name: "Alibaba Group Holding Ltd",
  },
  {
    cik_str: 1800,
    ticker: "ABT",
    company_name: "ABBOTT LABORATORIES",
  },
  {
    cik_str: 320187,
    ticker: "NKE",
    company_name: "NIKE, Inc.",
  },
  {
    cik_str: 1283699,
    ticker: "TMUS",
    company_name: "T-Mobile US, Inc.",
  },
  {
    cik_str: 1000184,
    ticker: "SAP",
    company_name: "SAP SE",
  },
  {
    cik_str: 72971,
    ticker: "WFC",
    company_name: "WELLS FARGO & COMPANY/MN",
  },
  {
    cik_str: 1166691,
    ticker: "CMCSA",
    company_name: "COMCAST CORP",
  },
  {
    cik_str: 896878,
    ticker: "INTU",
    company_name: "INTUIT INC.",
  },
  {
    cik_str: 1744489,
    ticker: "DIS",
    company_name: "Walt Disney Co",
  },
  {
    cik_str: 1144967,
    ticker: "HDB",
    company_name: "HDFC BANK LTD",
  },
  {
    cik_str: 313616,
    ticker: "DHR",
    company_name: "DANAHER CORP /DE/",
  },
  {
    cik_str: 811809,
    ticker: "BHP",
    company_name: "BHP Group Ltd",
  },
  {
    cik_str: 1067839,
    ticker: "QQQ",
    company_name: "INVESCO QQQ TRUST, SERIES 1",
  },
  {
    cik_str: 12927,
    ticker: "BA",
    company_name: "BOEING CO",
  },
  {
    cik_str: 804328,
    ticker: "QCOM",
    company_name: "QUALCOMM INC/DE",
  },
  {
    cik_str: 879764,
    ticker: "TTE",
    company_name: "TotalEnergies SE",
  },
  {
    cik_str: 732712,
    ticker: "VZ",
    company_name: "VERIZON COMMUNICATIONS INC",
  },
  {
    cik_str: 78003,
    ticker: "PFE",
    company_name: "PFIZER INC",
  },
  {
    cik_str: 97476,
    ticker: "TXN",
    company_name: "TEXAS INSTRUMENTS INC",
  },
  {
    cik_str: 1089113,
    ticker: "HSBC",
    company_name: "HSBC HOLDINGS PLC",
  },
  {
    cik_str: 895421,
    ticker: "MS",
    company_name: "MORGAN STANLEY",
  },
  {
    cik_str: 1373715,
    ticker: "NOW",
    company_name: "ServiceNow, Inc.",
  },
  {
    cik_str: 318154,
    ticker: "AMGN",
    company_name: "AMGEN INC",
  },
  {
    cik_str: 51143,
    ticker: "IBM",
    company_name: "INTERNATIONAL BUSINESS MACHINES CORP",
  },
  {
    cik_str: 1413329,
    ticker: "PM",
    company_name: "Philip Morris International Inc.",
  },
  {
    cik_str: 100885,
    ticker: "UNP",
    company_name: "UNION PACIFIC CORP",
  },
  {
    cik_str: 1393818,
    ticker: "BX",
    company_name: "Blackstone Inc.",
  },
  {
    cik_str: 18230,
    ticker: "CAT",
    company_name: "CATERPILLAR INC",
  },
  {
    cik_str: 887028,
    ticker: "RTNTF",
    company_name: "RIO TINTO LTD",
  },
  {
    cik_str: 1000275,
    ticker: "RY",
    company_name: "ROYAL BANK OF CANADA",
  },
  {
    cik_str: 64040,
    ticker: "SPGI",
    company_name: "S&P Global Inc.",
  },
  {
    cik_str: 1163165,
    ticker: "COP",
    company_name: "CONOCOPHILLIPS",
  },
  {
    cik_str: 6951,
    ticker: "AMAT",
    company_name: "APPLIED MATERIALS INC /DE",
  },
  {
    cik_str: 1090727,
    ticker: "UPS",
    company_name: "UNITED PARCEL SERVICE INC",
  },
  {
    cik_str: 773840,
    ticker: "HON",
    company_name: "HONEYWELL INTERNATIONAL INC",
  },
  {
    cik_str: 40545,
    ticker: "GE",
    company_name: "GENERAL ELECTRIC CO",
  },
  {
    cik_str: 4962,
    ticker: "AXP",
    company_name: "AMERICAN EXPRESS CO",
  },
  {
    cik_str: 1543151,
    ticker: "UBER",
    company_name: "Uber Technologies, Inc",
  },
  {
    cik_str: 60667,
    ticker: "LOW",
    company_name: "LOWES COMPANIES INC",
  },
  {
    cik_str: 753308,
    ticker: "NEE",
    company_name: "NEXTERA ENERGY INC",
  },
  {
    cik_str: 316709,
    ticker: "SCHW",
    company_name: "SCHWAB CHARLES CORP",
  },
  {
    cik_str: 1668717,
    ticker: "BUD",
    company_name: "Anheuser-Busch InBev SA/NV",
  },
  {
    cik_str: 886982,
    ticker: "GS",
    company_name: "GOLDMAN SACHS GROUP INC",
  },
  {
    cik_str: 1045609,
    ticker: "PLD",
    company_name: "Prologis, Inc.",
  },
  {
    cik_str: 1075531,
    ticker: "BKNG",
    company_name: "Booking Holdings Inc.",
  },
  {
    cik_str: 1378580,
    ticker: "EADSY",
    company_name: "Airbus SE/ADR",
  },
  {
    cik_str: 1121404,
    ticker: "SNY",
    company_name: "Sanofi",
  },
  {
    cik_str: 1364742,
    ticker: "BLK",
    company_name: "BlackRock Inc.",
  },
  {
    cik_str: 217410,
    ticker: "UL",
    company_name: "UNILEVER PLC",
  },
  {
    cik_str: 732717,
    ticker: "T",
    company_name: "AT&T INC.",
  },
  {
    cik_str: 863064,
    ticker: "RIO",
    company_name: "RIO TINTO PLC",
  },
  {
    cik_str: 101829,
    ticker: "RTX",
    company_name: "RTX Corp",
  },
  {
    cik_str: 1035267,
    ticker: "ISRG",
    company_name: "INTUITIVE SURGICAL INC",
  },
  {
    cik_str: 313838,
    ticker: "SONY",
    company_name: "Sony Group Corp",
  },
  {
    cik_str: 947263,
    ticker: "TD",
    company_name: "TORONTO DOMINION BANK",
  },
  {
    cik_str: 1156039,
    ticker: "ELV",
    company_name: "Elevance Health, Inc.",
  },
  {
    cik_str: 936468,
    ticker: "LMT",
    company_name: "LOCKHEED MARTIN CORP",
  },
  {
    cik_str: 310764,
    ticker: "SYK",
    company_name: "STRYKER CORP",
  },
  {
    cik_str: 315189,
    ticker: "DE",
    company_name: "DEERE & CO",
  },
  {
    cik_str: 829224,
    ticker: "SBUX",
    company_name: "STARBUCKS CORP",
  },
  {
    cik_str: 1613103,
    ticker: "MDT",
    company_name: "Medtronic plc",
  },
  {
    cik_str: 875320,
    ticker: "VRTX",
    company_name: "VERTEX PHARMACEUTICALS INC / MA",
  },
  {
    cik_str: 14272,
    ticker: "BMY",
    company_name: "BRISTOL MYERS SQUIBB CO",
  },
  {
    cik_str: 109198,
    ticker: "TJX",
    company_name: "TJX COMPANIES INC /DE/",
  },
  {
    cik_str: 882095,
    ticker: "GILD",
    company_name: "GILEAD SCIENCES, INC.",
  },
  {
    cik_str: 707549,
    ticker: "LRCX",
    company_name: "LAM RESEARCH CORP",
  },
  {
    cik_str: 67088,
    ticker: "MUFG",
    company_name: "MITSUBISHI UFJ FINANCIAL GROUP INC",
  },
  {
    cik_str: 1327567,
    ticker: "PANW",
    company_name: "Palo Alto Networks Inc",
  },
  {
    cik_str: 6281,
    ticker: "ADI",
    company_name: "ANALOG DEVICES INC",
  },
  {
    cik_str: 1103982,
    ticker: "MDLZ",
    company_name: "Mondelez International, Inc.",
  },
  {
    cik_str: 313807,
    ticker: "BP",
    company_name: "BP PLC",
  },
  {
    cik_str: 1053507,
    ticker: "AMT",
    company_name: "AMERICAN TOWER CORP /MA/",
  },
  {
    cik_str: 8670,
    ticker: "ADP",
    company_name: "AUTOMATIC DATA PROCESSING INC",
  },
  {
    cik_str: 62709,
    ticker: "MMC",
    company_name: "MARSH & MCLENNAN COMPANIES, INC.",
  },
  {
    cik_str: 1119639,
    ticker: "PBR",
    company_name: "PETROBRAS - PETROLEO BRASILEIRO SA",
  },
  {
    cik_str: 64803,
    ticker: "CVS",
    company_name: "CVS HEALTH Corp",
  },
  {
    cik_str: 1610520,
    ticker: "UBS",
    company_name: "UBS Group AG",
  },
  {
    cik_str: 831001,
    ticker: "C",
    company_name: "CITIGROUP INC",
  },
  {
    cik_str: 1551182,
    ticker: "ETN",
    company_name: "Eaton Corp plc",
  },
  {
    cik_str: 1594805,
    ticker: "SHOP",
    company_name: "SHOPIFY INC.",
  },
  {
    cik_str: 80661,
    ticker: "PGR",
    company_name: "PROGRESSIVE CORP/OH/",
  },
  {
    cik_str: 872589,
    ticker: "REGN",
    company_name: "REGENERON PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1559720,
    ticker: "ABNB",
    company_name: "Airbnb, Inc.",
  },
  {
    cik_str: 896159,
    ticker: "CB",
    company_name: "Chubb Ltd",
  },
  {
    cik_str: 1140625,
    ticker: "EQNR",
    company_name: "EQUINOR ASA",
  },
  {
    cik_str: 1274152,
    ticker: "CSLLY",
    company_name: "CSL LTD",
  },
  {
    cik_str: 723125,
    ticker: "MU",
    company_name: "MICRON TECHNOLOGY INC",
  },
  {
    cik_str: 1555280,
    ticker: "ZTS",
    company_name: "Zoetis Inc.",
  },
  {
    cik_str: 883241,
    ticker: "SNPS",
    company_name: "SYNOPSYS INC",
  },
  {
    cik_str: 1103838,
    ticker: "IBN",
    company_name: "ICICI BANK LTD",
  },
  {
    cik_str: 1739940,
    ticker: "CI",
    company_name: "Cigna Group",
  },
  {
    cik_str: 948401,
    ticker: "CFRUY",
    company_name: "COMPAGNIE FINANCIERE RICHEMONT AG /FI",
  },
  {
    cik_str: 885725,
    ticker: "BSX",
    company_name: "BOSTON SCIENTIFIC CORP",
  },
  {
    cik_str: 1099590,
    ticker: "MELI",
    company_name: "MERCADOLIBRE INC",
  },
  {
    cik_str: 748954,
    ticker: "ATLKY",
    company_name: "ATLAS COPCO AB",
  },
  {
    cik_str: 835403,
    ticker: "DEO",
    company_name: "DIAGEO PLC",
  },
  {
    cik_str: 1091587,
    ticker: "ABBNY",
    company_name: "ABB LTD",
  },
  {
    cik_str: 798354,
    ticker: "FI",
    company_name: "FISERV INC",
  },
  {
    cik_str: 319201,
    ticker: "KLAC",
    company_name: "KLA CORP",
  },
  {
    cik_str: 89800,
    ticker: "SHW",
    company_name: "SHERWIN WILLIAMS CO",
  },
  {
    cik_str: 1443276,
    ticker: "TOELY",
    company_name: "Tokyo Electron LTD",
  },
  {
    cik_str: 310732,
    ticker: "BNPQY",
    company_name: "BNP PARIBAS",
  },
  {
    cik_str: 92122,
    ticker: "SO",
    company_name: "SOUTHERN CO",
  },
  {
    cik_str: 16868,
    ticker: "CNI",
    company_name: "CANADIAN NATIONAL RAILWAY CO",
  },
  {
    cik_str: 49826,
    ticker: "ITW",
    company_name: "ILLINOIS TOOL WORKS INC",
  },
  {
    cik_str: 1067491,
    ticker: "INFY",
    company_name: "Infosys Ltd",
  },
  {
    cik_str: 1442651,
    ticker: "SHECY",
    company_name: "Shin-Etsu Chemical Co., Ltd.",
  },
  {
    cik_str: 1156375,
    ticker: "CME",
    company_name: "CME GROUP INC.",
  },
  {
    cik_str: 813672,
    ticker: "CDNS",
    company_name: "CADENCE DESIGN SYSTEMS INC",
  },
  {
    cik_str: 1101239,
    ticker: "EQIX",
    company_name: "EQUINIX INC",
  },
  {
    cik_str: 895728,
    ticker: "ENB",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 1067318,
    ticker: "MBGYY",
    company_name: "DAIMLER AG",
  },
  {
    cik_str: 1326160,
    ticker: "DUK",
    company_name: "Duke Energy CORP",
  },
  {
    cik_str: 87347,
    ticker: "SLB",
    company_name: "SCHLUMBERGER LIMITED/NV",
  },
  {
    cik_str: 1131399,
    ticker: "GSK",
    company_name: "GSK plc",
  },
  {
    cik_str: 764180,
    ticker: "MO",
    company_name: "ALTRIA GROUP, INC.",
  },
  {
    cik_str: 1327811,
    ticker: "WDAY",
    company_name: "Workday, Inc.",
  },
  {
    cik_str: 929869,
    ticker: "RELX",
    company_name: "RELX PLC",
  },
  {
    cik_str: 1404912,
    ticker: "KKR",
    company_name: "KKR & Co. Inc.",
  },
  {
    cik_str: 1596532,
    ticker: "ANET",
    company_name: "Arista Networks, Inc.",
  },
  {
    cik_str: 1096200,
    ticker: "ENLAY",
    company_name: "ENEL SOCIETA PER AZIONI",
  },
  {
    cik_str: 1133421,
    ticker: "NOC",
    company_name: "NORTHROP GRUMMAN CORP /DE/",
  },
  {
    cik_str: 860730,
    ticker: "HCA",
    company_name: "HCA Healthcare, Inc.",
  },
  {
    cik_str: 1973239,
    ticker: "ARM",
    company_name: "ARM HOLDINGS PLC /UK",
  },
  {
    cik_str: 823768,
    ticker: "WM",
    company_name: "WASTE MANAGEMENT INC",
  },
  {
    cik_str: 1524684,
    ticker: "GLNCY",
    company_name: "Glencore plc/ADR",
  },
  {
    cik_str: 1059556,
    ticker: "MCO",
    company_name: "MOODYS CORP /DE/",
  },
  {
    cik_str: 16875,
    ticker: "CP",
    company_name: "CANADIAN PACIFIC KANSAS CITY LTD/CN",
  },
  {
    cik_str: 1048911,
    ticker: "FDX",
    company_name: "FEDEX CORP",
  },
  {
    cik_str: 1605484,
    ticker: "STLA",
    company_name: "Stellantis N.V.",
  },
  {
    cik_str: 36104,
    ticker: "USB",
    company_name: "US BANCORP \\DE\\",
  },
  {
    cik_str: 1571949,
    ticker: "ICE",
    company_name: "Intercontinental Exchange, Inc.",
  },
  {
    cik_str: 40533,
    ticker: "GD",
    company_name: "GENERAL DYNAMICS CORP",
  },
  {
    cik_str: 821189,
    ticker: "EOG",
    company_name: "EOG RESOURCES INC",
  },
  {
    cik_str: 10795,
    ticker: "BDX",
    company_name: "BECTON DICKINSON & CO",
  },
  {
    cik_str: 1110646,
    ticker: "NTES",
    company_name: "NetEase, Inc.",
  },
  {
    cik_str: 1017413,
    ticker: "CNQ",
    company_name: "CANADIAN NATURAL RESOURCES LTD",
  },
  {
    cik_str: 277948,
    ticker: "CSX",
    company_name: "CSX CORP",
  },
  {
    cik_str: 927971,
    ticker: "BMO",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 1303523,
    ticker: "BTI",
    company_name: "British American Tobacco p.l.c.",
  },
  {
    cik_str: 21665,
    ticker: "CL",
    company_name: "COLGATE PALMOLIVE CO",
  },
  {
    cik_str: 1633917,
    ticker: "PYPL",
    company_name: "PayPal Holdings, Inc.",
  },
  {
    cik_str: 315293,
    ticker: "AON",
    company_name: "Aon plc",
  },
  {
    cik_str: 891478,
    ticker: "SAN",
    company_name: "Banco Santander, S.A.",
  },
  {
    cik_str: 1640147,
    ticker: "SNOW",
    company_name: "Snowflake Inc.",
  },
  {
    cik_str: 1048286,
    ticker: "MAR",
    company_name: "MARRIOTT INTERNATIONAL INC /MD/",
  },
  {
    cik_str: 1132597,
    ticker: "ITUB",
    company_name: "Itau Unibanco Holding S.A.",
  },
  {
    cik_str: 1075124,
    ticker: "TRI",
    company_name: "THOMSON REUTERS CORP /CAN/",
  },
  {
    cik_str: 1648416,
    ticker: "RACE",
    company_name: "Ferrari N.V.",
  },
  {
    cik_str: 917851,
    ticker: "VALE",
    company_name: "Vale S.A.",
  },
  {
    cik_str: 1058090,
    ticker: "CMG",
    company_name: "CHIPOTLE MEXICAN GRILL INC",
  },
  {
    cik_str: 27419,
    ticker: "TGT",
    company_name: "TARGET CORP",
  },
  {
    cik_str: 1397187,
    ticker: "LULU",
    company_name: "lululemon athletica inc.",
  },
  {
    cik_str: 1022837,
    ticker: "SMFG",
    company_name: "SUMITOMO MITSUI FINANCIAL GROUP, INC.",
  },
  {
    cik_str: 1001838,
    ticker: "SCCO",
    company_name: "SOUTHERN COPPER CORP/",
  },
  {
    cik_str: 1535527,
    ticker: "CRWD",
    company_name: "CrowdStrike Holdings, Inc.",
  },
  {
    cik_str: 713676,
    ticker: "PNC",
    company_name: "PNC FINANCIAL SERVICES GROUP, INC.",
  },
  {
    cik_str: 927653,
    ticker: "MCK",
    company_name: "MCKESSON CORP",
  },
  {
    cik_str: 1545460,
    ticker: "OLCLY",
    company_name: "Oriental Land Co., Ltd./ADR",
  },
  {
    cik_str: 1413447,
    ticker: "NXPI",
    company_name: "NXP Semiconductors N.V.",
  },
  {
    cik_str: 2969,
    ticker: "APD",
    company_name: "Air Products & Chemicals, Inc.",
  },
  {
    cik_str: 1001085,
    ticker: "BN",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 831259,
    ticker: "FCX",
    company_name: "FREEPORT-MCMORAN INC",
  },
  {
    cik_str: 820313,
    ticker: "APH",
    company_name: "AMPHENOL CORP /DE/",
  },
  {
    cik_str: 49071,
    ticker: "HUM",
    company_name: "HUMANA INC",
  },
  {
    cik_str: 1129137,
    ticker: "AMX",
    company_name: "AMERICA MOVIL SAB DE CV/",
  },
  {
    cik_str: 66740,
    ticker: "MMM",
    company_name: "3M CO",
  },
  {
    cik_str: 882835,
    ticker: "ROP",
    company_name: "ROPER TECHNOLOGIES INC",
  },
  {
    cik_str: 76334,
    ticker: "PH",
    company_name: "PARKER HANNIFIN CORP",
  },
  {
    cik_str: 865752,
    ticker: "MNST",
    company_name: "Monster Beverage Corp",
  },
  {
    cik_str: 898173,
    ticker: "ORLY",
    company_name: "O REILLY AUTOMOTIVE INC",
  },
  {
    cik_str: 723254,
    ticker: "CTAS",
    company_name: "CINTAS CORP",
  },
  {
    cik_str: 1650372,
    ticker: "TEAM",
    company_name: "Atlassian Corp",
  },
  {
    cik_str: 1061219,
    ticker: "EPD",
    company_name: "ENTERPRISE PRODUCTS PARTNERS L.P.",
  },
  {
    cik_str: 1534701,
    ticker: "PSX",
    company_name: "Phillips 66",
  },
  {
    cik_str: 9631,
    ticker: "BNS",
    company_name: "BANK OF NOVA SCOTIA",
  },
  {
    cik_str: 1510295,
    ticker: "MPC",
    company_name: "Marathon Petroleum Corp",
  },
  {
    cik_str: 31462,
    ticker: "ECL",
    company_name: "ECOLAB INC.",
  },
  {
    cik_str: 1091667,
    ticker: "CHTR",
    company_name: "CHARTER COMMUNICATIONS, INC. /MO/",
  },
  {
    cik_str: 1260221,
    ticker: "TDG",
    company_name: "TransDigm Group INC",
  },
  {
    cik_str: 1466258,
    ticker: "TT",
    company_name: "Trane Technologies plc",
  },
  {
    cik_str: 32604,
    ticker: "EMR",
    company_name: "EMERSON ELECTRIC CO",
  },
  {
    cik_str: 68505,
    ticker: "MSI",
    company_name: "Motorola Solutions, Inc.",
  },
  {
    cik_str: 1858681,
    ticker: "APO",
    company_name: "Apollo Global Management, Inc.",
  },
  {
    cik_str: 1038357,
    ticker: "PXD",
    company_name: "PIONEER NATURAL RESOURCES CO",
  },
  {
    cik_str: 702165,
    ticker: "NSC",
    company_name: "NORFOLK SOUTHERN CORP",
  },
  {
    cik_str: 842180,
    ticker: "BBVA",
    company_name: "BANCO BILBAO VIZCAYA ARGENTARIA, S.A.",
  },
  {
    cik_str: 1060391,
    ticker: "RSG",
    company_name: "REPUBLIC SERVICES, INC.",
  },
  {
    cik_str: 1002242,
    ticker: "E",
    company_name: "ENI SPA",
  },
  {
    cik_str: 354190,
    ticker: "AJG",
    company_name: "Arthur J. Gallagher & Co.",
  },
  {
    cik_str: 1835632,
    ticker: "MRVL",
    company_name: "Marvell Technology, Inc.",
  },
  {
    cik_str: 75362,
    ticker: "PCAR",
    company_name: "PACCAR INC",
  },
  {
    cik_str: 769397,
    ticker: "ADSK",
    company_name: "Autodesk, Inc.",
  },
  {
    cik_str: 1063761,
    ticker: "SPG",
    company_name: "SIMON PROPERTY GROUP INC /DE/",
  },
  {
    cik_str: 1947559,
    ticker: "ANZGY",
    company_name: "ANZ GROUP HOLDINGS LIMITED/ADR",
  },
  {
    cik_str: 797468,
    ticker: "OXY",
    company_name: "OCCIDENTAL PETROLEUM CORP /DE/",
  },
  {
    cik_str: 1393311,
    ticker: "PSA",
    company_name: "Public Storage",
  },
  {
    cik_str: 1039765,
    ticker: "ING",
    company_name: "ING GROEP NV",
  },
  {
    cik_str: 1001250,
    ticker: "EL",
    company_name: "ESTEE LAUDER COMPANIES INC",
  },
  {
    cik_str: 882184,
    ticker: "DHI",
    company_name: "HORTON D R INC /DE/",
  },
  {
    cik_str: 827054,
    ticker: "MCHP",
    company_name: "MICROCHIP TECHNOLOGY INC",
  },
  {
    cik_str: 1004315,
    ticker: "NGG",
    company_name: "NATIONAL GRID PLC",
  },
  {
    cik_str: 766704,
    ticker: "WELL",
    company_name: "WELLTOWER INC.",
  },
  {
    cik_str: 1571996,
    ticker: "DELL",
    company_name: "Dell Technologies Inc.",
  },
  {
    cik_str: 1051470,
    ticker: "CCI",
    company_name: "CROWN CASTLE INC.",
  },
  {
    cik_str: 927628,
    ticker: "COF",
    company_name: "CAPITAL ONE FINANCIAL CORP",
  },
  {
    cik_str: 92230,
    ticker: "TFC",
    company_name: "TRUIST FINANCIAL CORP",
  },
  {
    cik_str: 1099219,
    ticker: "MET",
    company_name: "METLIFE INC",
  },
  {
    cik_str: 1467858,
    ticker: "GM",
    company_name: "General Motors Co",
  },
  {
    cik_str: 1222333,
    ticker: "GLD",
    company_name: "SPDR GOLD TRUST",
  },
  {
    cik_str: 30554,
    ticker: "CTA-PA",
    company_name: "EIDP, Inc.",
  },
  {
    cik_str: 4977,
    ticker: "AFL",
    company_name: "AFLAC INC",
  },
  {
    cik_str: 715153,
    ticker: "HMC",
    company_name: "HONDA MOTOR CO LTD",
  },
  {
    cik_str: 1783180,
    ticker: "CARR",
    company_name: "CARRIER GLOBAL Corp",
  },
  {
    cik_str: 900075,
    ticker: "CPRT",
    company_name: "COPART INC",
  },
  {
    cik_str: 849395,
    ticker: "CRH",
    company_name: "CRH PUBLIC LTD CO",
  },
  {
    cik_str: 1471055,
    ticker: "BSBR",
    company_name: "Banco Santander (Brasil) S.A.",
  },
  {
    cik_str: 1032208,
    ticker: "SRE",
    company_name: "SEMPRA",
  },
  {
    cik_str: 37996,
    ticker: "F",
    company_name: "FORD MOTOR CO",
  },
  {
    cik_str: 1164727,
    ticker: "NEM",
    company_name: "NEWMONT Corp /DE/",
  },
  {
    cik_str: 5272,
    ticker: "AIG",
    company_name: "AMERICAN INTERNATIONAL GROUP, INC.",
  },
  {
    cik_str: 866787,
    ticker: "AZO",
    company_name: "AUTOZONE INC",
  },
  {
    cik_str: 1099800,
    ticker: "EW",
    company_name: "Edwards Lifesciences Corp",
  },
  {
    cik_str: 1093557,
    ticker: "DXCM",
    company_name: "DEXCOM INC",
  },
  {
    cik_str: 723531,
    ticker: "PAYX",
    company_name: "PAYCHEX INC",
  },
  {
    cik_str: 1418135,
    ticker: "KDP",
    company_name: "Keurig Dr Pepper Inc.",
  },
  {
    cik_str: 1565025,
    ticker: "ABEV",
    company_name: "AMBEV S.A.",
  },
  {
    cik_str: 745732,
    ticker: "ROST",
    company_name: "ROSS STORES, INC.",
  },
  {
    cik_str: 1276187,
    ticker: "ET",
    company_name: "Energy Transfer LP",
  },
  {
    cik_str: 1004980,
    ticker: "PCG",
    company_name: "PG&E Corp",
  },
  {
    cik_str: 932787,
    ticker: "STM",
    company_name: "STMicroelectronics N.V.",
  },
  {
    cik_str: 1585689,
    ticker: "HLT",
    company_name: "Hilton Worldwide Holdings Inc.",
  },
  {
    cik_str: 1446519,
    ticker: "DKILY",
    company_name: "Daikin Industries Ltd",
  },
  {
    cik_str: 1637459,
    ticker: "KHC",
    company_name: "Kraft Heinz Co",
  },
  {
    cik_str: 874716,
    ticker: "IDXX",
    company_name: "IDEXX LABORATORIES INC /DE",
  },
  {
    cik_str: 1262039,
    ticker: "FTNT",
    company_name: "Fortinet, Inc.",
  },
  {
    cik_str: 4447,
    ticker: "HES",
    company_name: "HESS CORP",
  },
  {
    cik_str: 1385157,
    ticker: "TEL",
    company_name: "TE Connectivity Ltd.",
  },
  {
    cik_str: 1035002,
    ticker: "VLO",
    company_name: "VALERO ENERGY CORP/TX",
  },
  {
    cik_str: 16918,
    ticker: "STZ",
    company_name: "CONSTELLATION BRANDS, INC.",
  },
  {
    cik_str: 4904,
    ticker: "AEP",
    company_name: "AMERICAN ELECTRIC POWER CO INC",
  },
  {
    cik_str: 1446598,
    ticker: "DNZOY",
    company_name: "Denso Corp",
  },
  {
    cik_str: 1549802,
    ticker: "JD",
    company_name: "JD.com, Inc.",
  },
  {
    cik_str: 1395064,
    ticker: "TAK",
    company_name: "TAKEDA PHARMACEUTICAL CO LTD",
  },
  {
    cik_str: 878927,
    ticker: "ODFL",
    company_name: "OLD DOMINION FREIGHT LINE, INC.",
  },
  {
    cik_str: 1335730,
    ticker: "MFG",
    company_name: "MIZUHO FINANCIAL GROUP INC",
  },
  {
    cik_str: 1512673,
    ticker: "SQ",
    company_name: "Block, Inc.",
  },
  {
    cik_str: 1279967,
    ticker: "CRARY",
    company_name: "CREDIT AGRICOLE S A",
  },
  {
    cik_str: 73309,
    ticker: "NUE",
    company_name: "NUCOR CORP",
  },
  {
    cik_str: 1045520,
    ticker: "CM",
    company_name: "CANADIAN IMPERIAL BANK OF COMMERCE /CAN/",
  },
  {
    cik_str: 1408198,
    ticker: "MSCI",
    company_name: "MSCI Inc.",
  },
  {
    cik_str: 86312,
    ticker: "TRV",
    company_name: "TRAVELERS COMPANIES, INC.",
  },
  {
    cik_str: 107263,
    ticker: "WMB",
    company_name: "WILLIAMS COMPANIES, INC.",
  },
  {
    cik_str: 1297996,
    ticker: "DLR",
    company_name: "DIGITAL REALTY TRUST, INC.",
  },
  {
    cik_str: 895564,
    ticker: "BAESY",
    company_name: "BAE SYSTEMS PLC /FI/",
  },
  {
    cik_str: 726728,
    ticker: "O",
    company_name: "REALTY INCOME CORP",
  },
  {
    cik_str: 55785,
    ticker: "KMB",
    company_name: "KIMBERLY CLARK CORP",
  },
  {
    cik_str: 1478242,
    ticker: "IQV",
    company_name: "IQVIA HOLDINGS INC.",
  },
  {
    cik_str: 715957,
    ticker: "D",
    company_name: "DOMINION ENERGY, INC",
  },
  {
    cik_str: 277135,
    ticker: "GWW",
    company_name: "W.W. GRAINGER, INC.",
  },
  {
    cik_str: 3570,
    ticker: "LNG",
    company_name: "Cheniere Energy, Inc.",
  },
  {
    cik_str: 7084,
    ticker: "ADM",
    company_name: "Archer-Daniels-Midland Co",
  },
  {
    cik_str: 311337,
    ticker: "SU",
    company_name: "SUNCOR ENERGY INC",
  },
  {
    cik_str: 1232384,
    ticker: "TRP",
    company_name: "TC ENERGY CORP",
  },
  {
    cik_str: 1090872,
    ticker: "A",
    company_name: "AGILENT TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1691493,
    ticker: "NU",
    company_name: "Nu Holdings Ltd.",
  },
  {
    cik_str: 1140859,
    ticker: "COR",
    company_name: "Cencora, Inc.",
  },
  {
    cik_str: 1944048,
    ticker: "KVUE",
    company_name: "Kenvue Inc.",
  },
  {
    cik_str: 1329099,
    ticker: "BIDU",
    company_name: "Baidu, Inc.",
  },
  {
    cik_str: 1071739,
    ticker: "CNC",
    company_name: "CENTENE CORP",
  },
  {
    cik_str: 1792789,
    ticker: "DASH",
    company_name: "DoorDash, Inc.",
  },
  {
    cik_str: 202058,
    ticker: "LHX",
    company_name: "L3HARRIS TECHNOLOGIES, INC. /DE/",
  },
  {
    cik_str: 1390777,
    ticker: "BK",
    company_name: "Bank of New York Mellon Corp",
  },
  {
    cik_str: 1039684,
    ticker: "OKE",
    company_name: "ONEOK INC /NEW/",
  },
  {
    cik_str: 920760,
    ticker: "LEN",
    company_name: "LENNAR CORP /NEW/",
  },
  {
    cik_str: 1561550,
    ticker: "DDOG",
    company_name: "Datadog, Inc.",
  },
  {
    cik_str: 1067701,
    ticker: "URI",
    company_name: "UNITED RENTALS, INC.",
  },
  {
    cik_str: 40704,
    ticker: "GIS",
    company_name: "GENERAL MILLS INC",
  },
  {
    cik_str: 1321655,
    ticker: "PLTR",
    company_name: "Palantir Technologies Inc.",
  },
  {
    cik_str: 1506307,
    ticker: "KMI",
    company_name: "KINDER MORGAN, INC.",
  },
  {
    cik_str: 844551,
    ticker: "WDS",
    company_name: "WOODSIDE ENERGY GROUP LTD",
  },
  {
    cik_str: 1832433,
    ticker: "FERG",
    company_name: "Ferguson plc",
  },
  {
    cik_str: 1109357,
    ticker: "EXC",
    company_name: "EXELON CORP",
  },
  {
    cik_str: 1639920,
    ticker: "SPOT",
    company_name: "Spotify Technology S.A.",
  },
  {
    cik_str: 820027,
    ticker: "AMP",
    company_name: "AMERIPRISE FINANCIAL INC",
  },
  {
    cik_str: 1868275,
    ticker: "CEG",
    company_name: "Constellation Energy Corp",
  },
  {
    cik_str: 1086888,
    ticker: "MFC",
    company_name: "MANULIFE FINANCIAL CORP",
  },
  {
    cik_str: 1058290,
    ticker: "CTSH",
    company_name: "COGNIZANT TECHNOLOGY SOLUTIONS CORP",
  },
  {
    cik_str: 712515,
    ticker: "EA",
    company_name: "ELECTRONIC ARTS INC.",
  },
  {
    cik_str: 1751788,
    ticker: "DOW",
    company_name: "DOW INC.",
  },
  {
    cik_str: 47111,
    ticker: "HSY",
    company_name: "HERSHEY CO",
  },
  {
    cik_str: 899051,
    ticker: "ALL",
    company_name: "ALLSTATE CORP",
  },
  {
    cik_str: 1318220,
    ticker: "WCN",
    company_name: "Waste Connections, Inc.",
  },
  {
    cik_str: 1160330,
    ticker: "BBD",
    company_name: "BANK BRADESCO",
  },
  {
    cik_str: 96021,
    ticker: "SYY",
    company_name: "SYSCO CORP",
  },
  {
    cik_str: 1037868,
    ticker: "AME",
    company_name: "AMETEK INC/",
  },
  {
    cik_str: 1160106,
    ticker: "LYG",
    company_name: "Lloyds Banking Group plc",
  },
  {
    cik_str: 1137774,
    ticker: "PRU",
    company_name: "PRUDENTIAL FINANCIAL INC",
  },
  {
    cik_str: 1450468,
    ticker: "MRAAY",
    company_name: "Murata Manufacturing Co., Ltd./ADR",
  },
  {
    cik_str: 1167379,
    ticker: "ALC",
    company_name: "ALCON INC",
  },
  {
    cik_str: 1278680,
    ticker: "IAU",
    company_name: "ISHARES GOLD TRUST",
  },
  {
    cik_str: 1900304,
    ticker: "HLN",
    company_name: "Haleon plc",
  },
  {
    cik_str: 1097864,
    ticker: "ON",
    company_name: "ON SEMICONDUCTOR CORP",
  },
  {
    cik_str: 1781335,
    ticker: "OTIS",
    company_name: "Otis Worldwide Corp",
  },
  {
    cik_str: 815556,
    ticker: "FAST",
    company_name: "FASTENAL CO",
  },
  {
    cik_str: 1012037,
    ticker: "CODYY",
    company_name: "COMPAGNIE DE SAINT GOBAIN",
  },
  {
    cik_str: 718940,
    ticker: "BCE",
    company_name: "BCE INC",
  },
  {
    cik_str: 1041061,
    ticker: "YUM",
    company_name: "YUM BRANDS INC",
  },
  {
    cik_str: 1300514,
    ticker: "LVS",
    company_name: "LAS VEGAS SANDS CORP",
  },
  {
    cik_str: 875045,
    ticker: "BIIB",
    company_name: "BIOGEN INC.",
  },
  {
    cik_str: 1552000,
    ticker: "MPLX",
    company_name: "MPLX LP",
  },
  {
    cik_str: 1176948,
    ticker: "ARES",
    company_name: "Ares Management Corp",
  },
  {
    cik_str: 833444,
    ticker: "JCI",
    company_name: "Johnson Controls International plc",
  },
  {
    cik_str: 1671933,
    ticker: "TTD",
    company_name: "Trade Desk, Inc.",
  },
  {
    cik_str: 1442145,
    ticker: "VRSK",
    company_name: "Verisk Analytics, Inc.",
  },
  {
    cik_str: 749251,
    ticker: "IT",
    company_name: "GARTNER INC",
  },
  {
    cik_str: 1057352,
    ticker: "CSGP",
    company_name: "COSTAR GROUP, INC.",
  },
  {
    cik_str: 1461748,
    ticker: "PPERY",
    company_name: "PT Bank Mandiri (Persero) Tbk / ADR",
  },
  {
    cik_str: 1791706,
    ticker: "LI",
    company_name: "Li Auto Inc.",
  },
  {
    cik_str: 1136893,
    ticker: "FIS",
    company_name: "Fidelity National Information Services, Inc.",
  },
  {
    cik_str: 79879,
    ticker: "PPG",
    company_name: "PPG INDUSTRIES INC",
  },
  {
    cik_str: 1024478,
    ticker: "ROK",
    company_name: "ROCKWELL AUTOMATION, INC",
  },
  {
    cik_str: 1679788,
    ticker: "COIN",
    company_name: "Coinbase Global, Inc.",
  },
  {
    cik_str: 26172,
    ticker: "CMI",
    company_name: "CUMMINS INC",
  },
  {
    cik_str: 72903,
    ticker: "XEL",
    company_name: "XCEL ENERGY INC",
  },
  {
    cik_str: 861967,
    ticker: "WTKWY",
    company_name: "WOLTERS KLUWER N V /FI",
  },
  {
    cik_str: 1123360,
    ticker: "GPN",
    company_name: "GLOBAL PAYMENTS INC",
  },
  {
    cik_str: 1932393,
    ticker: "GEHC",
    company_name: "GE HealthCare Technologies Inc.",
  },
  {
    cik_str: 1701605,
    ticker: "BKR",
    company_name: "Baker Hughes Co",
  },
  {
    cik_str: 1381197,
    ticker: "IBKR",
    company_name: "Interactive Brokers Group, Inc.",
  },
  {
    cik_str: 1682852,
    ticker: "MRNA",
    company_name: "Moderna, Inc.",
  },
  {
    cik_str: 1713683,
    ticker: "ZS",
    company_name: "Zscaler, Inc.",
  },
  {
    cik_str: 1618756,
    ticker: "QSR",
    company_name: "Restaurant Brands International Inc.",
  },
  {
    cik_str: 56873,
    ticker: "KR",
    company_name: "KROGER CO",
  },
  {
    cik_str: 1755672,
    ticker: "CTVA",
    company_name: "Corteva, Inc.",
  },
  {
    cik_str: 1910139,
    ticker: "MBLY",
    company_name: "Mobileye Global Inc.",
  },
  {
    cik_str: 1705696,
    ticker: "VICI",
    company_name: "VICI PROPERTIES INC.",
  },
  {
    cik_str: 1709048,
    ticker: "GFS",
    company_name: "GLOBALFOUNDRIES Inc.",
  },
  {
    cik_str: 1289490,
    ticker: "EXR",
    company_name: "Extra Space Storage Inc.",
  },
  {
    cik_str: 1047862,
    ticker: "ED",
    company_name: "CONSOLIDATED EDISON INC",
  },
  {
    cik_str: 1120193,
    ticker: "NDAQ",
    company_name: "NASDAQ, INC.",
  },
  {
    cik_str: 45012,
    ticker: "HAL",
    company_name: "HALLIBURTON CO",
  },
  {
    cik_str: 884887,
    ticker: "RCL",
    company_name: "ROYAL CARIBBEAN CRUISES LTD",
  },
  {
    cik_str: 1666700,
    ticker: "DD",
    company_name: "DuPont de Nemours, Inc.",
  },
  {
    cik_str: 788784,
    ticker: "PEG",
    company_name: "PUBLIC SERVICE ENTERPRISE GROUP INC",
  },
  {
    cik_str: 1050915,
    ticker: "PWR",
    company_name: "QUANTA SERVICES, INC.",
  },
  {
    cik_str: 1021020,
    ticker: "OEZVY",
    company_name: "OSTERREICHISCHE ELEKTRIZITATSWIRTSCHAFTS /FI",
  },
  {
    cik_str: 1433913,
    ticker: "BDORY",
    company_name: "BANCO DO BRASIL S.A.",
  },
  {
    cik_str: 1475260,
    ticker: "CVE",
    company_name: "CENOVUS ENERGY INC.",
  },
  {
    cik_str: 756894,
    ticker: "GOLD",
    company_name: "BARRICK GOLD CORP",
  },
  {
    cik_str: 1489393,
    ticker: "LYB",
    company_name: "LyondellBasell Industries N.V.",
  },
  {
    cik_str: 1038143,
    ticker: "ORAN",
    company_name: "ORANGE",
  },
  {
    cik_str: 1116578,
    ticker: "PUK",
    company_name: "PRUDENTIAL PLC",
  },
  {
    cik_str: 916076,
    ticker: "MLM",
    company_name: "MARTIN MARIETTA MATERIALS INC",
  },
  {
    cik_str: 1280452,
    ticker: "MPWR",
    company_name: "MONOLITHIC POWER SYSTEMS INC",
  },
  {
    cik_str: 1699150,
    ticker: "IR",
    company_name: "Ingersoll Rand Inc.",
  },
  {
    cik_str: 1947542,
    ticker: "TLGPY",
    company_name: "Telstra Group Ltd",
  },
  {
    cik_str: 47217,
    ticker: "HPQ",
    company_name: "HP INC",
  },
  {
    cik_str: 33185,
    ticker: "EFX",
    company_name: "EQUIFAX INC",
  },
  {
    cik_str: 1041130,
    ticker: "DIA",
    company_name: "SPDR DOW JONES INDUSTRIAL AVERAGE ETF TRUST",
  },
  {
    cik_str: 1437107,
    ticker: "WBD",
    company_name: "Warner Bros. Discovery, Inc.",
  },
  {
    cik_str: 1441816,
    ticker: "MDB",
    company_name: "MongoDB, Inc.",
  },
  {
    cik_str: 850918,
    ticker: "GWLIF",
    company_name: "GREAT-WEST LIFECO INC.",
  },
  {
    cik_str: 1097362,
    ticker: "SLF",
    company_name: "SUN LIFE FINANCIAL INC",
  },
  {
    cik_str: 1837240,
    ticker: "SYM",
    company_name: "Symbotic Inc.",
  },
  {
    cik_str: 49938,
    ticker: "IMO",
    company_name: "IMPERIAL OIL LTD",
  },
  {
    cik_str: 1038683,
    ticker: "RYAAY",
    company_name: "RYANAIR HOLDINGS PLC",
  },
  {
    cik_str: 1396009,
    ticker: "VMC",
    company_name: "Vulcan Materials CO",
  },
  {
    cik_str: 1402057,
    ticker: "CDW",
    company_name: "CDW Corp",
  },
  {
    cik_str: 1834584,
    ticker: "CPNG",
    company_name: "Coupang, Inc.",
  },
  {
    cik_str: 1650107,
    ticker: "CCEP",
    company_name: "COCA-COLA EUROPACIFIC PARTNERS plc",
  },
  {
    cik_str: 1041792,
    ticker: "ELP",
    company_name: "ENERGY CO OF PARANA",
  },
  {
    cik_str: 1132924,
    ticker: "CHT",
    company_name: "CHUNGHWA TELECOM CO LTD",
  },
  {
    cik_str: 1393052,
    ticker: "VEEV",
    company_name: "VEEVA SYSTEMS INC",
  },
  {
    cik_str: 814547,
    ticker: "FICO",
    company_name: "FAIR ISAAC CORP",
  },
  {
    cik_str: 935703,
    ticker: "DLTR",
    company_name: "DOLLAR TREE, INC.",
  },
  {
    cik_str: 947484,
    ticker: "ACGL",
    company_name: "ARCH CAPITAL GROUP LTD.",
  },
  {
    cik_str: 1090012,
    ticker: "DVN",
    company_name: "DEVON ENERGY CORP/DE",
  },
  {
    cik_str: 29534,
    ticker: "DG",
    company_name: "DOLLAR GENERAL CORP",
  },
  {
    cik_str: 312069,
    ticker: "BCS",
    company_name: "BARCLAYS PLC",
  },
  {
    cik_str: 1404655,
    ticker: "HUBS",
    company_name: "HUBSPOT INC",
  },
  {
    cik_str: 889132,
    ticker: "PKX",
    company_name: "POSCO HOLDINGS INC.",
  },
  {
    cik_str: 936958,
    ticker: "MDY",
    company_name: "SPDR S&P MIDCAP 400 ETF TRUST",
  },
  {
    cik_str: 1601046,
    ticker: "KEYS",
    company_name: "Keysight Technologies, Inc.",
  },
  {
    cik_str: 1138118,
    ticker: "CBRE",
    company_name: "CBRE GROUP, INC.",
  },
  {
    cik_str: 1123799,
    ticker: "WIT",
    company_name: "WIPRO LTD",
  },
  {
    cik_str: 1539838,
    ticker: "FANG",
    company_name: "Diamondback Energy, Inc.",
  },
  {
    cik_str: 946581,
    ticker: "TTWO",
    company_name: "TAKE TWO INTERACTIVE SOFTWARE INC",
  },
  {
    cik_str: 1697862,
    ticker: "ARGX",
    company_name: "ARGENX SE",
  },
  {
    cik_str: 27904,
    ticker: "DAL",
    company_name: "DELTA AIR LINES, INC.",
  },
  {
    cik_str: 1805284,
    ticker: "RKT",
    company_name: "Rocket Companies, Inc.",
  },
  {
    cik_str: 1446596,
    ticker: "FANUY",
    company_name: "Fanuc Ltd",
  },
  {
    cik_str: 1725964,
    ticker: "NTR",
    company_name: "Nutrien Ltd.",
  },
  {
    cik_str: 14693,
    ticker: "BF-B",
    company_name: "BROWN FORMAN CORP",
  },
  {
    cik_str: 827052,
    ticker: "EIX",
    company_name: "EDISON INTERNATIONAL",
  },
  {
    cik_str: 1477333,
    ticker: "NET",
    company_name: "Cloudflare, Inc.",
  },
  {
    cik_str: 2809,
    ticker: "AEM",
    company_name: "AGNICO EAGLE MINES LTD",
  },
  {
    cik_str: 1034054,
    ticker: "SBAC",
    company_name: "SBA COMMUNICATIONS CORP",
  },
  {
    cik_str: 783325,
    ticker: "WEC",
    company_name: "WEC ENERGY GROUP, INC.",
  },
  {
    cik_str: 105770,
    ticker: "WST",
    company_name: "WEST PHARMACEUTICAL SERVICES INC",
  },
  {
    cik_str: 1547873,
    ticker: "PTCAY",
    company_name: "PT Chandra Asri Petrochemical Tbk/ADR",
  },
  {
    cik_str: 1393612,
    ticker: "DFS",
    company_name: "Discover Financial Services",
  },
  {
    cik_str: 1524472,
    ticker: "XYL",
    company_name: "Xylem Inc.",
  },
  {
    cik_str: 1444406,
    ticker: "EC",
    company_name: "ECOPETROL S.A.",
  },
  {
    cik_str: 1564408,
    ticker: "SNAP",
    company_name: "Snap Inc",
  },
  {
    cik_str: 1315098,
    ticker: "RBLX",
    company_name: "Roblox Corp",
  },
  {
    cik_str: 1159508,
    ticker: "DB",
    company_name: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
  },
  {
    cik_str: 915912,
    ticker: "AVB",
    company_name: "AVALONBAY COMMUNITIES INC",
  },
  {
    cik_str: 868675,
    ticker: "TU",
    company_name: "TELUS CORP",
  },
  {
    cik_str: 1037646,
    ticker: "MTD",
    company_name: "METTLER TOLEDO INTERNATIONAL INC/",
  },
  {
    cik_str: 24741,
    ticker: "GLW",
    company_name: "CORNING INC /NY",
  },
  {
    cik_str: 721371,
    ticker: "CAH",
    company_name: "CARDINAL HEALTH INC",
  },
  {
    cik_str: 1353283,
    ticker: "SPLK",
    company_name: "SPLUNK INC",
  },
  {
    cik_str: 1013462,
    ticker: "ANSS",
    company_name: "ANSYS INC",
  },
  {
    cik_str: 1410636,
    ticker: "AWK",
    company_name: "American Water Works Company, Inc.",
  },
  {
    cik_str: 1383650,
    ticker: "CQP",
    company_name: "Cheniere Energy Partners, L.P.",
  },
  {
    cik_str: 1659166,
    ticker: "FTV",
    company_name: "Fortive Corp",
  },
  {
    cik_str: 1446437,
    ticker: "YAHOY",
    company_name: "Yahoo! Japan Corp",
  },
  {
    cik_str: 16988,
    ticker: "CAJPY",
    company_name: "CANON INC",
  },
  {
    cik_str: 1001807,
    ticker: "TLK",
    company_name:
      "PERUSAHAAN PERSEROAN PERSERO PT TELEKOMUNIKASI INDONESIA TBK",
  },
  {
    cik_str: 1671750,
    ticker: "DSCSY",
    company_name: "Disco Corporation/ADR",
  },
  {
    cik_str: 1140536,
    ticker: "WTW",
    company_name: "WILLIS TOWERS WATSON PLC",
  },
  {
    cik_str: 1334687,
    ticker: "CJPRY",
    company_name: "CENTRAL JAPAN RAILWAY CO",
  },
  {
    cik_str: 1158838,
    ticker: "ATEYY",
    company_name: "ADVANTEST CORP",
  },
  {
    cik_str: 1451279,
    ticker: "SAUHY",
    company_name: "Straumann Holding AG / ADR",
  },
  {
    cik_str: 844150,
    ticker: "NWG",
    company_name: "NatWest Group plc",
  },
  {
    cik_str: 943819,
    ticker: "RMD",
    company_name: "RESMED INC",
  },
  {
    cik_str: 1061574,
    ticker: "GIB",
    company_name: "CGI INC",
  },
  {
    cik_str: 1506293,
    ticker: "PINS",
    company_name: "PINTEREST, INC.",
  },
  {
    cik_str: 1136869,
    ticker: "ZBH",
    company_name: "ZIMMER BIOMET HOLDINGS, INC.",
  },
  {
    cik_str: 1776985,
    ticker: "BNTX",
    company_name: "BioNTech SE",
  },
  {
    cik_str: 1521332,
    ticker: "APTV",
    company_name: "Aptiv PLC",
  },
  {
    cik_str: 1121788,
    ticker: "GRMN",
    company_name: "GARMIN LTD",
  },
  {
    cik_str: 106535,
    ticker: "WY",
    company_name: "WEYERHAEUSER CO",
  },
  {
    cik_str: 874766,
    ticker: "HIG",
    company_name: "HARTFORD FINANCIAL SERVICES GROUP, INC.",
  },
  {
    cik_str: 1403568,
    ticker: "ULTA",
    company_name: "Ulta Beauty, Inc.",
  },
  {
    cik_str: 93751,
    ticker: "STT",
    company_name: "STATE STREET CORP",
  },
  {
    cik_str: 733099,
    ticker: "RCI",
    company_name: "ROGERS COMMUNICATIONS INC",
  },
  {
    cik_str: 35527,
    ticker: "FITB",
    company_name: "FIFTH THIRD BANCORP",
  },
  {
    cik_str: 815097,
    ticker: "CCL",
    company_name: "CARNIVAL CORP",
  },
  {
    cik_str: 1113169,
    ticker: "TROW",
    company_name: "PRICE T ROWE GROUP INC",
  },
  {
    cik_str: 36270,
    ticker: "MTB",
    company_name: "M&T BANK CORP",
  },
  {
    cik_str: 916365,
    ticker: "TSCO",
    company_name: "TRACTOR SUPPLY CO /DE/",
  },
  {
    cik_str: 313927,
    ticker: "CHD",
    company_name: "CHURCH & DWIGHT CO INC /DE/",
  },
  {
    cik_str: 1178670,
    ticker: "ALNY",
    company_name: "ALNYLAM PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 906107,
    ticker: "EQR",
    company_name: "EQUITY RESIDENTIAL",
  },
  {
    cik_str: 720005,
    ticker: "RJF",
    company_name: "RAYMOND JAMES FINANCIAL INC",
  },
  {
    cik_str: 1060955,
    ticker: "ICLR",
    company_name: "ICON PLC",
  },
  {
    cik_str: 63271,
    ticker: "PCRFY",
    company_name: "PANASONIC Corp",
  },
  {
    cik_str: 936340,
    ticker: "DTE",
    company_name: "DTE ENERGY CO",
  },
  {
    cik_str: 1050952,
    ticker: "PUBGY",
    company_name: "PUBLICIS GROUPE SA",
  },
  {
    cik_str: 1383312,
    ticker: "BR",
    company_name: "BROADRIDGE FINANCIAL SOLUTIONS, INC.",
  },
  {
    cik_str: 814052,
    ticker: "TEF",
    company_name: "TELEFONICA S A",
  },
  {
    cik_str: 1035443,
    ticker: "ARE",
    company_name: "ALEXANDRIA REAL ESTATE EQUITIES, INC.",
  },
  {
    cik_str: 46619,
    ticker: "HEI",
    company_name: "HEICO CORP",
  },
  {
    cik_str: 4281,
    ticker: "HWM",
    company_name: "Howmet Aerospace Inc.",
  },
  {
    cik_str: 1243429,
    ticker: "MT",
    company_name: "ArcelorMittal",
  },
  {
    cik_str: 839923,
    ticker: "VOD",
    company_name: "VODAFONE GROUP PUBLIC LTD CO",
  },
  {
    cik_str: 1269238,
    ticker: "TCOM",
    company_name: "Trip.com Group Ltd",
  },
  {
    cik_str: 1323404,
    ticker: "WPM",
    company_name: "Wheaton Precious Metals Corp.",
  },
  {
    cik_str: 822416,
    ticker: "PHM",
    company_name: "PULTEGROUP INC/MI/",
  },
  {
    cik_str: 1014473,
    ticker: "VRSN",
    company_name: "VERISIGN INC/CA",
  },
  {
    cik_str: 915191,
    ticker: "FRFHF",
    company_name: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    cik_str: 906163,
    ticker: "NVR",
    company_name: "NVR INC",
  },
  {
    cik_str: 65984,
    ticker: "ETR",
    company_name: "ENTERGY CORP /DE/",
  },
  {
    cik_str: 1618921,
    ticker: "WBA",
    company_name: "Walgreens Boots Alliance, Inc.",
  },
  {
    cik_str: 1065088,
    ticker: "EBAY",
    company_name: "EBAY INC",
  },
  {
    cik_str: 943452,
    ticker: "WAB",
    company_name: "WESTINGHOUSE AIR BRAKE TECHNOLOGIES CORP",
  },
  {
    cik_str: 1031296,
    ticker: "FE",
    company_name: "FIRSTENERGY CORP",
  },
  {
    cik_str: 1585521,
    ticker: "ZM",
    company_name: "Zoom Video Communications, Inc.",
  },
  {
    cik_str: 1179929,
    ticker: "MOH",
    company_name: "MOLINA HEALTHCARE, INC.",
  },
  {
    cik_str: 72741,
    ticker: "ES",
    company_name: "EVERSOURCE ENERGY",
  },
  {
    cik_str: 1874178,
    ticker: "RIVN",
    company_name: "Rivian Automotive, Inc. / DE",
  },
  {
    cik_str: 1125259,
    ticker: "CUK",
    company_name: "CARNIVAL PLC",
  },
  {
    cik_str: 1645590,
    ticker: "HPE",
    company_name: "Hewlett Packard Enterprise Co",
  },
  {
    cik_str: 1335258,
    ticker: "LYV",
    company_name: "Live Nation Entertainment, Inc.",
  },
  {
    cik_str: 1456346,
    ticker: "FNV",
    company_name: "FRANCO NEVADA Corp",
  },
  {
    cik_str: 886986,
    ticker: "TECK",
    company_name: "TECK RESOURCES LTD",
  },
  {
    cik_str: 29905,
    ticker: "DOV",
    company_name: "DOVER Corp",
  },
  {
    cik_str: 798941,
    ticker: "FCNCA",
    company_name: "FIRST CITIZENS BANCSHARES INC /DE/",
  },
  {
    cik_str: 728535,
    ticker: "JBHT",
    company_name: "HUNT J B TRANSPORT SERVICES INC",
  },
  {
    cik_str: 1758730,
    ticker: "TW",
    company_name: "Tradeweb Markets Inc.",
  },
  {
    cik_str: 1757898,
    ticker: "STE",
    company_name: "STERIS plc",
  },
  {
    cik_str: 79282,
    ticker: "BRO",
    company_name: "BROWN & BROWN, INC.",
  },
  {
    cik_str: 1070304,
    ticker: "IX",
    company_name: "ORIX CORP",
  },
  {
    cik_str: 1687229,
    ticker: "INVH",
    company_name: "Invitation Homes Inc.",
  },
  {
    cik_str: 908937,
    ticker: "SIRI",
    company_name: "SIRIUS XM HOLDINGS INC.",
  },
  {
    cik_str: 84839,
    ticker: "ROL",
    company_name: "ROLLINS INC",
  },
  {
    cik_str: 1703399,
    ticker: "SE",
    company_name: "Sea Ltd",
  },
  {
    cik_str: 1002910,
    ticker: "AEE",
    company_name: "AMEREN CORP",
  },
  {
    cik_str: 1316835,
    ticker: "BLDR",
    company_name: "Builders FirstSource, Inc.",
  },
  {
    cik_str: 910631,
    ticker: "KOF",
    company_name: "COCA COLA FEMSA SAB DE CV",
  },
  {
    cik_str: 857005,
    ticker: "PTC",
    company_name: "PTC INC.",
  },
  {
    cik_str: 1033767,
    ticker: "UMC",
    company_name: "UNITED MICROELECTRONICS CORP",
  },
  {
    cik_str: 51253,
    ticker: "IFF",
    company_name: "INTERNATIONAL FLAVORS & FRAGRANCES INC",
  },
  {
    cik_str: 1110803,
    ticker: "ILMN",
    company_name: "ILLUMINA, INC.",
  },
  {
    cik_str: 1094285,
    ticker: "TDY",
    company_name: "TELEDYNE TECHNOLOGIES INC",
  },
  {
    cik_str: 1022671,
    ticker: "STLD",
    company_name: "STEEL DYNAMICS INC",
  },
  {
    cik_str: 1434265,
    ticker: "GMAB",
    company_name: "GENMAB A/S",
  },
  {
    cik_str: 1666175,
    ticker: "FTS",
    company_name: "Fortis Inc.",
  },
  {
    cik_str: 1783398,
    ticker: "UWMC",
    company_name: "UWM Holdings Corp",
  },
  {
    cik_str: 1324424,
    ticker: "EXPE",
    company_name: "Expedia Group, Inc.",
  },
  {
    cik_str: 313216,
    ticker: "PHG",
    company_name: "KONINKLIJKE PHILIPS NV",
  },
  {
    cik_str: 1190723,
    ticker: "TS",
    company_name: "TENARIS SA",
  },
  {
    cik_str: 717826,
    ticker: "ERIC",
    company_name: "ERICSSON LM TELEPHONE CO",
  },
  {
    cik_str: 922224,
    ticker: "PPL",
    company_name: "PPL Corp",
  },
  {
    cik_str: 1175454,
    ticker: "FLT",
    company_name: "FLEETCOR TECHNOLOGIES INC",
  },
  {
    cik_str: 740260,
    ticker: "VTR",
    company_name: "Ventas, Inc.",
  },
  {
    cik_str: 1020569,
    ticker: "IRM",
    company_name: "IRON MOUNTAIN INC",
  },
  {
    cik_str: 1967680,
    ticker: "VLTO",
    company_name: "Veralto Corp",
  },
  {
    cik_str: 10456,
    ticker: "BAX",
    company_name: "BAXTER INTERNATIONAL INC",
  },
  {
    cik_str: 1097149,
    ticker: "ALGN",
    company_name: "ALIGN TECHNOLOGY INC",
  },
  {
    cik_str: 940944,
    ticker: "DRI",
    company_name: "DARDEN RESTAURANTS INC",
  },
  {
    cik_str: 40987,
    ticker: "GPC",
    company_name: "GENUINE PARTS CO",
  },
  {
    cik_str: 1122411,
    ticker: "ASX",
    company_name: "ASE Technology Holding Co., Ltd.",
  },
  {
    cik_str: 1009001,
    ticker: "CCJ",
    company_name: "CAMECO CORP",
  },
  {
    cik_str: 1809587,
    ticker: "BEKE",
    company_name: "KE Holdings Inc.",
  },
  {
    cik_str: 1651308,
    ticker: "BGNE",
    company_name: "BeiGene, Ltd.",
  },
  {
    cik_str: 1069183,
    ticker: "AXON",
    company_name: "AXON ENTERPRISE, INC.",
  },
  {
    cik_str: 904851,
    ticker: "YPF",
    company_name: "YPF SOCIEDAD ANONIMA",
  },
  {
    cik_str: 1374310,
    ticker: "CBOE",
    company_name: "Cboe Global Markets, Inc.",
  },
  {
    cik_str: 1389170,
    ticker: "TRGP",
    company_name: "Targa Resources Corp.",
  },
  {
    cik_str: 858470,
    ticker: "CTRA",
    company_name: "Coterra Energy Inc.",
  },
  {
    cik_str: 1000697,
    ticker: "WAT",
    company_name: "WATERS CORP /DE/",
  },
  {
    cik_str: 1823945,
    ticker: "OWL",
    company_name: "BLUE OWL CAPITAL INC.",
  },
  {
    cik_str: 1126328,
    ticker: "PFG",
    company_name: "PRINCIPAL FINANCIAL GROUP INC",
  },
  {
    cik_str: 1439124,
    ticker: "EBR",
    company_name: "BRAZILIAN ELECTRIC POWER CO",
  },
  {
    cik_str: 920148,
    ticker: "LH",
    company_name: "LABORATORY CORP OF AMERICA HOLDINGS",
  },
  {
    cik_str: 49196,
    ticker: "HBAN",
    company_name: "HUNTINGTON BANCSHARES INC /MD/",
  },
  {
    cik_str: 55067,
    ticker: "K",
    company_name: "KELLANOVA",
  },
  {
    cik_str: 1130310,
    ticker: "CNP",
    company_name: "CENTERPOINT ENERGY INC",
  },
  {
    cik_str: 1674101,
    ticker: "VRT",
    company_name: "Vertiv Holdings Co",
  },
  {
    cik_str: 910521,
    ticker: "DECK",
    company_name: "DECKERS OUTDOOR CORP",
  },
  {
    cik_str: 1048477,
    ticker: "BMRN",
    company_name: "BIOMARIN PHARMACEUTICAL INC",
  },
  {
    cik_str: 9389,
    ticker: "BALL",
    company_name: "BALL Corp",
  },
  {
    cik_str: 11544,
    ticker: "WRB",
    company_name: "BERKLEY W R CORP",
  },
  {
    cik_str: 63754,
    ticker: "MKC",
    company_name: "MCCORMICK & CO INC",
  },
  {
    cik_str: 1546066,
    ticker: "PBA",
    company_name: "PEMBINA PIPELINE CORP",
  },
  {
    cik_str: 1096343,
    ticker: "MKL",
    company_name: "MARKEL GROUP INC.",
  },
  {
    cik_str: 1642896,
    ticker: "IOT",
    company_name: "Samsara Inc.",
  },
  {
    cik_str: 100493,
    ticker: "TSN",
    company_name: "TYSON FOODS, INC.",
  },
  {
    cik_str: 1446705,
    ticker: "NTDTY",
    company_name: "NTT Data Corp",
  },
  {
    cik_str: 1764757,
    ticker: "DIDIY",
    company_name: "DiDi Global Inc.",
  },
  {
    cik_str: 1002047,
    ticker: "NTAP",
    company_name: "NetApp, Inc.",
  },
  {
    cik_str: 746515,
    ticker: "EXPD",
    company_name: "EXPEDITORS INTERNATIONAL OF WASHINGTON INC",
  },
  {
    cik_str: 1281761,
    ticker: "RF",
    company_name: "REGIONS FINANCIAL CORP",
  },
  {
    cik_str: 21076,
    ticker: "CLX",
    company_name: "CLOROX CO /DE/",
  },
  {
    cik_str: 4127,
    ticker: "SWKS",
    company_name: "SKYWORKS SOLUTIONS, INC.",
  },
  {
    cik_str: 711404,
    ticker: "COO",
    company_name: "COOPER COMPANIES, INC.",
  },
  {
    cik_str: 924613,
    ticker: "NOK",
    company_name: "NOKIA CORP",
  },
  {
    cik_str: 1086222,
    ticker: "AKAM",
    company_name: "AKAMAI TECHNOLOGIES INC",
  },
  {
    cik_str: 1262823,
    ticker: "WLK",
    company_name: "WESTLAKE CORP",
  },
  {
    cik_str: 1274494,
    ticker: "FSLR",
    company_name: "FIRST SOLAR, INC.",
  },
  {
    cik_str: 1101302,
    ticker: "ENTG",
    company_name: "ENTEGRIS INC",
  },
  {
    cik_str: 1066119,
    ticker: "VIV",
    company_name: "TELEFONICA BRASIL S.A.",
  },
  {
    cik_str: 1137789,
    ticker: "STX",
    company_name: "Seagate Technology Holdings plc",
  },
  {
    cik_str: 73124,
    ticker: "NTRS",
    company_name: "NORTHERN TRUST CORP",
  },
  {
    cik_str: 1015922,
    ticker: "CHKP",
    company_name: "CHECK POINT SOFTWARE TECHNOLOGIES LTD",
  },
  {
    cik_str: 915913,
    ticker: "ALB",
    company_name: "ALBEMARLE CORP",
  },
  {
    cik_str: 48465,
    ticker: "HRL",
    company_name: "HORMEL FOODS CORP /DE/",
  },
  {
    cik_str: 1319161,
    ticker: "WMG",
    company_name: "Warner Music Group Corp.",
  },
  {
    cik_str: 92380,
    ticker: "LUV",
    company_name: "SOUTHWEST AIRLINES CO",
  },
  {
    cik_str: 1013237,
    ticker: "FDS",
    company_name: "FACTSET RESEARCH SYSTEMS INC",
  },
  {
    cik_str: 48898,
    ticker: "HUBB",
    company_name: "HUBBELL INC",
  },
  {
    cik_str: 898293,
    ticker: "JBL",
    company_name: "JABIL INC",
  },
  {
    cik_str: 29989,
    ticker: "OMC",
    company_name: "OMNICOM GROUP INC.",
  },
  {
    cik_str: 731802,
    ticker: "ATO",
    company_name: "ATMOS ENERGY CORP",
  },
  {
    cik_str: 860731,
    ticker: "TYL",
    company_name: "TYLER TECHNOLOGIES INC",
  },
  {
    cik_str: 811156,
    ticker: "CMS",
    company_name: "CMS ENERGY CORP",
  },
  {
    cik_str: 1463101,
    ticker: "ENPH",
    company_name: "Enphase Energy, Inc.",
  },
  {
    cik_str: 859737,
    ticker: "HOLX",
    company_name: "HOLOGIC INC",
  },
  {
    cik_str: 1883685,
    ticker: "DKNG",
    company_name: "DraftKings Inc.",
  },
  {
    cik_str: 922621,
    ticker: "ERIE",
    company_name: "ERIE INDEMNITY CO",
  },
  {
    cik_str: 1802768,
    ticker: "RPRX",
    company_name: "Royalty Pharma plc",
  },
  {
    cik_str: 1352010,
    ticker: "EPAM",
    company_name: "EPAM Systems, Inc.",
  },
  {
    cik_str: 1443646,
    ticker: "BAH",
    company_name: "Booz Allen Hamilton Holding Corp",
  },
  {
    cik_str: 912593,
    ticker: "SUI",
    company_name: "SUN COMMUNITIES INC",
  },
  {
    cik_str: 1533232,
    ticker: "BEP",
    company_name: "Brookfield Renewable Partners L.P.",
  },
  {
    cik_str: 1375365,
    ticker: "SMCI",
    company_name: "Super Micro Computer, Inc.",
  },
  {
    cik_str: 764478,
    ticker: "BBY",
    company_name: "BEST BUY CO INC",
  },
  {
    cik_str: 1095073,
    ticker: "EG",
    company_name: "EVEREST GROUP, LTD.",
  },
  {
    cik_str: 1400691,
    ticker: "HDELY",
    company_name: "HeidelbergCement AG",
  },
  {
    cik_str: 909037,
    ticker: "SQM",
    company_name: "CHEMICAL & MINING CO OF CHILE INC",
  },
  {
    cik_str: 1913510,
    ticker: "VFS",
    company_name: "VinFast Auto Ltd.",
  },
  {
    cik_str: 106040,
    ticker: "WDC",
    company_name: "WESTERN DIGITAL CORP",
  },
  {
    cik_str: 1306830,
    ticker: "CE",
    company_name: "Celanese Corp",
  },
  {
    cik_str: 1677250,
    ticker: "ZTO",
    company_name: "ZTO Express (Cayman) Inc.",
  },
  {
    cik_str: 1673358,
    ticker: "YUMC",
    company_name: "Yum China Holdings, Inc.",
  },
  {
    cik_str: 749098,
    ticker: "MGA",
    company_name: "MAGNA INTERNATIONAL INC",
  },
  {
    cik_str: 20286,
    ticker: "CINF",
    company_name: "CINCINNATI FINANCIAL CORP",
  },
  {
    cik_str: 97210,
    ticker: "TER",
    company_name: "TERADYNE, INC",
  },
  {
    cik_str: 1773383,
    ticker: "DT",
    company_name: "Dynatrace, Inc.",
  },
  {
    cik_str: 105016,
    ticker: "WSO",
    company_name: "WATSCO INC",
  },
  {
    cik_str: 832101,
    ticker: "IEX",
    company_name: "IDEX CORP /DE/",
  },
  {
    cik_str: 52988,
    ticker: "J",
    company_name: "JACOBS SOLUTIONS INC.",
  },
  {
    cik_str: 8818,
    ticker: "AVY",
    company_name: "Avery Dennison Corp",
  },
  {
    cik_str: 33213,
    ticker: "EQT",
    company_name: "EQT Corp",
  },
  {
    cik_str: 1397911,
    ticker: "LPLA",
    company_name: "LPL Financial Holdings Inc.",
  },
  {
    cik_str: 1438077,
    ticker: "JRONY",
    company_name: "Jeronimo Martins SGPS SA",
  },
  {
    cik_str: 1669414,
    ticker: "SMPNY",
    company_name: "Sompo Japan Nipponkoa Holdings, Inc./ADR",
  },
  {
    cik_str: 1069202,
    ticker: "LII",
    company_name: "LENNOX INTERNATIONAL INC",
  },
  {
    cik_str: 759944,
    ticker: "CFG",
    company_name: "CITIZENS FINANCIAL GROUP INC/RI",
  },
  {
    cik_str: 1022079,
    ticker: "DGX",
    company_name: "QUEST DIAGNOSTICS INC",
  },
  {
    cik_str: 896076,
    ticker: "MGDDY",
    company_name: "MICHELIN COMPAGNIE GENERALE DES ETABLISSEMENTS MICHELIN /FI",
  },
  {
    cik_str: 920522,
    ticker: "ESS",
    company_name: "ESSEX PROPERTY TRUST, INC.",
  },
  {
    cik_str: 861884,
    ticker: "RS",
    company_name: "RELIANCE STEEL & ALUMINUM CO",
  },
  {
    cik_str: 217346,
    ticker: "TXT",
    company_name: "TEXTRON INC",
  },
  {
    cik_str: 60086,
    ticker: "L",
    company_name: "LOEWS CORP",
  },
  {
    cik_str: 1069347,
    ticker: "SGSOY",
    company_name: "SGS SOCIETE GENERALE DE SURVEILLANCE HOLDING SA /FI",
  },
  {
    cik_str: 62996,
    ticker: "MAS",
    company_name: "MASCO CORP /DE/",
  },
  {
    cik_str: 1722482,
    ticker: "AVTR",
    company_name: "Avantor, Inc.",
  },
  {
    cik_str: 1601712,
    ticker: "SYF",
    company_name: "Synchrony Financial",
  },
  {
    cik_str: 1445930,
    ticker: "KB",
    company_name: "KB Financial Group Inc.",
  },
  {
    cik_str: 1679273,
    ticker: "LW",
    company_name: "Lamb Weston Holdings, Inc.",
  },
  {
    cik_str: 1744676,
    ticker: "TME",
    company_name: "Tencent Music Entertainment Group",
  },
  {
    cik_str: 945841,
    ticker: "POOL",
    company_name: "POOL CORP",
  },
  {
    cik_str: 790051,
    ticker: "CSL",
    company_name: "CARLISLE COMPANIES INC",
  },
  {
    cik_str: 1263043,
    ticker: "SHG",
    company_name: "SHINHAN FINANCIAL GROUP CO LTD",
  },
  {
    cik_str: 93556,
    ticker: "SWK",
    company_name: "STANLEY BLACK & DECKER, INC.",
  },
  {
    cik_str: 1159152,
    ticker: "JHX",
    company_name: "James Hardie Industries plc",
  },
  {
    cik_str: 1996862,
    ticker: "BG",
    company_name: "Bunge Global SA",
  },
  {
    cik_str: 91440,
    ticker: "SNA",
    company_name: "Snap-on Inc",
  },
  {
    cik_str: 1567094,
    ticker: "CNHI",
    company_name: "CNH Industrial N.V.",
  },
  {
    cik_str: 1609711,
    ticker: "GDDY",
    company_name: "GoDaddy Inc.",
  },
  {
    cik_str: 1336920,
    ticker: "LDOS",
    company_name: "Leidos Holdings, Inc.",
  },
  {
    cik_str: 1527166,
    ticker: "CG",
    company_name: "Carlyle Group Inc.",
  },
  {
    cik_str: 1810806,
    ticker: "U",
    company_name: "Unity Software Inc.",
  },
  {
    cik_str: 1378789,
    ticker: "AER",
    company_name: "AerCap Holdings N.V.",
  },
  {
    cik_str: 858446,
    ticker: "IHG",
    company_name: "INTERCONTINENTAL HOTELS GROUP PLC /NEW/",
  },
  {
    cik_str: 1937926,
    ticker: "BAM",
    company_name: "Brookfield Asset Management Ltd.",
  },
  {
    cik_str: 789570,
    ticker: "MGM",
    company_name: "MGM Resorts International",
  },
  {
    cik_str: 1402436,
    ticker: "SSNC",
    company_name: "SS&C Technologies Holdings Inc",
  },
  {
    cik_str: 1032975,
    ticker: "LOGI",
    company_name: "LOGITECH INTERNATIONAL S.A.",
  },
  {
    cik_str: 849399,
    ticker: "GEN",
    company_name: "Gen Digital Inc.",
  },
  {
    cik_str: 811250,
    ticker: "HLDCY",
    company_name: "HENDERSON LAND DEVELOPMENT COMPANY LTD /FI",
  },
  {
    cik_str: 75677,
    ticker: "PKG",
    company_name: "PACKAGING CORP OF AMERICA",
  },
  {
    cik_str: 1031308,
    ticker: "BSY",
    company_name: "BENTLEY SYSTEMS INC",
  },
  {
    cik_str: 1562401,
    ticker: "AMH",
    company_name: "American Homes 4 Rent",
  },
  {
    cik_str: 1445475,
    ticker: "BOUYY",
    company_name: "Bouygues SA",
  },
  {
    cik_str: 1324404,
    ticker: "CF",
    company_name: "CF Industries Holdings, Inc.",
  },
  {
    cik_str: 38777,
    ticker: "BEN",
    company_name: "FRANKLIN RESOURCES INC",
  },
  {
    cik_str: 42888,
    ticker: "GGG",
    company_name: "GRACO INC",
  },
  {
    cik_str: 1145197,
    ticker: "PODD",
    company_name: "INSULET CORP",
  },
  {
    cik_str: 110621,
    ticker: "RPM",
    company_name: "RPM INTERNATIONAL INC/DE/",
  },
  {
    cik_str: 1172724,
    ticker: "GFI",
    company_name: "GOLD FIELDS LTD",
  },
  {
    cik_str: 23217,
    ticker: "CAG",
    company_name: "CONAGRA BRANDS INC.",
  },
  {
    cik_str: 72331,
    ticker: "NDSN",
    company_name: "NORDSON CORP",
  },
  {
    cik_str: 100517,
    ticker: "UAL",
    company_name: "United Airlines Holdings, Inc.",
  },
  {
    cik_str: 101778,
    ticker: "MRO",
    company_name: "MARATHON OIL CORP",
  },
  {
    cik_str: 1281721,
    ticker: "SGIOY",
    company_name: "SHIONOGI & CO LTD",
  },
  {
    cik_str: 882602,
    ticker: "OMVKY",
    company_name: "OMV AKTIENGESELLSCHAFT /FI",
  },
  {
    cik_str: 1734722,
    ticker: "PATH",
    company_name: "UiPath, Inc.",
  },
  {
    cik_str: 1025378,
    ticker: "WPC",
    company_name: "W. P. Carey Inc.",
  },
  {
    cik_str: 1736541,
    ticker: "NIO",
    company_name: "NIO Inc.",
  },
  {
    cik_str: 1406234,
    ticker: "BIP",
    company_name: "Brookfield Infrastructure Partners L.P.",
  },
  {
    cik_str: 879169,
    ticker: "INCY",
    company_name: "INCYTE CORP",
  },
  {
    cik_str: 877212,
    ticker: "ZBRA",
    company_name: "ZEBRA TECHNOLOGIES CORP",
  },
  {
    cik_str: 895417,
    ticker: "ELS",
    company_name: "EQUITY LIFESTYLE PROPERTIES INC",
  },
  {
    cik_str: 1889539,
    ticker: "CRBG",
    company_name: "Corebridge Financial, Inc.",
  },
  {
    cik_str: 1748790,
    ticker: "AMCR",
    company_name: "Amcor plc",
  },
  {
    cik_str: 1286681,
    ticker: "DPZ",
    company_name: "DOMINOS PIZZA INC",
  },
  {
    cik_str: 909327,
    ticker: "SUZ",
    company_name: "Suzano S.A.",
  },
  {
    cik_str: 879101,
    ticker: "KIM",
    company_name: "KIMCO REALTY CORP",
  },
  {
    cik_str: 1056696,
    ticker: "MANH",
    company_name: "MANHATTAN ASSOCIATES INC",
  },
  {
    cik_str: 1810997,
    ticker: "XPEV",
    company_name: "XPENG INC.",
  },
  {
    cik_str: 1692819,
    ticker: "VST",
    company_name: "Vistra Corp.",
  },
  {
    cik_str: 1754301,
    ticker: "FOXA",
    company_name: "Fox Corp",
  },
  {
    cik_str: 930157,
    ticker: "RTO",
    company_name: "RENTOKIL INITIAL PLC /FI",
  },
  {
    cik_str: 1447669,
    ticker: "TWLO",
    company_name: "TWILIO INC",
  },
  {
    cik_str: 1428439,
    ticker: "ROKU",
    company_name: "ROKU, INC",
  },
  {
    cik_str: 1370946,
    ticker: "OC",
    company_name: "Owens Corning",
  },
  {
    cik_str: 24545,
    ticker: "TAP",
    company_name: "MOLSON COORS BEVERAGE CO",
  },
  {
    cik_str: 1070750,
    ticker: "HST",
    company_name: "HOST HOTELS & RESORTS, INC.",
  },
  {
    cik_str: 16732,
    ticker: "CPB",
    company_name: "CAMPBELL SOUP CO",
  },
  {
    cik_str: 91576,
    ticker: "KEY",
    company_name: "KEYCORP /NEW/",
  },
  {
    cik_str: 1552033,
    ticker: "TRU",
    company_name: "TransUnion",
  },
  {
    cik_str: 1660134,
    ticker: "OKTA",
    company_name: "Okta, Inc.",
  },
  {
    cik_str: 1001474,
    ticker: "KKPNY",
    company_name: "KONINKLIJKE KPN N V",
  },
  {
    cik_str: 352541,
    ticker: "LNT",
    company_name: "ALLIANT ENERGY CORP",
  },
  {
    cik_str: 91419,
    ticker: "SJM",
    company_name: "J M SMUCKER Co",
  },
  {
    cik_str: 1331875,
    ticker: "FNF",
    company_name: "Fidelity National Financial, Inc.",
  },
  {
    cik_str: 1897982,
    ticker: "AZPN",
    company_name: "Aspen Technology, Inc.",
  },
  {
    cik_str: 1787425,
    ticker: "XP",
    company_name: "XP Inc.",
  },
  {
    cik_str: 1468174,
    ticker: "H",
    company_name: "Hyatt Hotels Corp",
  },
  {
    cik_str: 1564708,
    ticker: "NWSA",
    company_name: "NEWS CORP",
  },
  {
    cik_str: 1751008,
    ticker: "APP",
    company_name: "AppLovin Corp",
  },
  {
    cik_str: 719955,
    ticker: "WSM",
    company_name: "WILLIAMS SONOMA INC",
  },
  {
    cik_str: 1261333,
    ticker: "DOCU",
    company_name: "DOCUSIGN, INC.",
  },
  {
    cik_str: 1646972,
    ticker: "ACI",
    company_name: "Albertsons Companies, Inc.",
  },
  {
    cik_str: 1820953,
    ticker: "AFRM",
    company_name: "Affirm Holdings, Inc.",
  },
  {
    cik_str: 1163653,
    ticker: "NMR",
    company_name: "NOMURA HOLDINGS INC",
  },
  {
    cik_str: 51434,
    ticker: "IP",
    company_name: "INTERNATIONAL PAPER CO /NEW/",
  },
  {
    cik_str: 874761,
    ticker: "AES",
    company_name: "AES CORP",
  },
  {
    cik_str: 74208,
    ticker: "UDR",
    company_name: "UDR, Inc.",
  },
  {
    cik_str: 864749,
    ticker: "TRMB",
    company_name: "TRIMBLE INC.",
  },
  {
    cik_str: 51644,
    ticker: "IPG",
    company_name: "INTERPUBLIC GROUP OF COMPANIES, INC.",
  },
  {
    cik_str: 1634997,
    ticker: "AGR",
    company_name: "Avangrid, Inc.",
  },
  {
    cik_str: 1003935,
    ticker: "NICE",
    company_name: "NICE Ltd.",
  },
  {
    cik_str: 1575965,
    ticker: "GLPI",
    company_name: "Gaming & Leisure Properties, Inc.",
  },
  {
    cik_str: 1504122,
    ticker: "PTBRY",
    company_name: "PT Bank Negara Indonesia (Persero) Tbk/ADR",
  },
  {
    cik_str: 866374,
    ticker: "FLEX",
    company_name: "FLEX LTD.",
  },
  {
    cik_str: 868857,
    ticker: "ACM",
    company_name: "AECOM",
  },
  {
    cik_str: 1372920,
    ticker: "EDU",
    company_name: "New Oriental Education & Technology Group Inc.",
  },
  {
    cik_str: 1065696,
    ticker: "LKQ",
    company_name: "LKQ CORP",
  },
  {
    cik_str: 59527,
    ticker: "LECO",
    company_name: "LINCOLN ELECTRIC HOLDINGS INC",
  },
  {
    cik_str: 31791,
    ticker: "RVTY",
    company_name: "REVVITY, INC.",
  },
  {
    cik_str: 910606,
    ticker: "REG",
    company_name: "REGENCY CENTERS CORP",
  },
  {
    cik_str: 1792044,
    ticker: "VTRS",
    company_name: "Viatris Inc",
  },
  {
    cik_str: 1811074,
    ticker: "TPL",
    company_name: "Texas Pacific Land Corp",
  },
  {
    cik_str: 1880661,
    ticker: "TPG",
    company_name: "TPG Inc.",
  },
  {
    cik_str: 1855612,
    ticker: "GRAB",
    company_name: "Grab Holdings Ltd",
  },
  {
    cik_str: 1333141,
    ticker: "FMS",
    company_name: "Fresenius Medical Care AG",
  },
  {
    cik_str: 779152,
    ticker: "JKHY",
    company_name: "JACK HENRY & ASSOCIATES INC",
  },
  {
    cik_str: 1446444,
    ticker: "TKHVY",
    company_name: "Turk Hava Yollari A.O.",
  },
  {
    cik_str: 914475,
    ticker: "NBIX",
    company_name: "NEUROCRINE BIOSCIENCES INC",
  },
  {
    cik_str: 842023,
    ticker: "TECH",
    company_name: "BIO-TECHNE Corp",
  },
  {
    cik_str: 1711269,
    ticker: "EVRG",
    company_name: "Evergy, Inc.",
  },
  {
    cik_str: 1617640,
    ticker: "ZG",
    company_name: "ZILLOW GROUP, INC.",
  },
  {
    cik_str: 1507079,
    ticker: "FND",
    company_name: "Floor & Decor Holdings, Inc.",
  },
  {
    cik_str: 1579298,
    ticker: "BURL",
    company_name: "Burlington Stores, Inc.",
  },
  {
    cik_str: 1285785,
    ticker: "MOS",
    company_name: "MOSAIC CO",
  },
  {
    cik_str: 1780232,
    ticker: "GFL",
    company_name: "GFL Environmental Inc.",
  },
  {
    cik_str: 1571283,
    ticker: "REXR",
    company_name: "Rexford Industrial Realty, Inc.",
  },
  {
    cik_str: 1633931,
    ticker: "BLD",
    company_name: "TopBuild Corp",
  },
  {
    cik_str: 1124140,
    ticker: "EXAS",
    company_name: "EXACT SCIENCES CORP",
  },
  {
    cik_str: 1289419,
    ticker: "MORN",
    company_name: "Morningstar, Inc.",
  },
  {
    cik_str: 1170010,
    ticker: "KMX",
    company_name: "CARMAX INC",
  },
  {
    cik_str: 96943,
    ticker: "TFX",
    company_name: "TELEFLEX INC",
  },
  {
    cik_str: 1161125,
    ticker: "BCH",
    company_name: "BANK OF CHILE",
  },
  {
    cik_str: 1001290,
    ticker: "BAP",
    company_name: "CREDICORP LTD",
  },
  {
    cik_str: 1100682,
    ticker: "CRL",
    company_name: "CHARLES RIVER LABORATORIES INTERNATIONAL, INC.",
  },
  {
    cik_str: 1792580,
    ticker: "OVV",
    company_name: "Ovintiv Inc.",
  },
  {
    cik_str: 4457,
    ticker: "UHAL",
    company_name: "U-Haul Holding Co /NV/",
  },
  {
    cik_str: 1082554,
    ticker: "UTHR",
    company_name: "UNITED THERAPEUTICS Corp",
  },
  {
    cik_str: 77360,
    ticker: "PNR",
    company_name: "PENTAIR plc",
  },
  {
    cik_str: 1385535,
    ticker: "GLPEY",
    company_name: "Galp Energia, SGPS, S.A.",
  },
  {
    cik_str: 1341766,
    ticker: "CELH",
    company_name: "Celsius Holdings, Inc.",
  },
  {
    cik_str: 91142,
    ticker: "AOS",
    company_name: "SMITH A O CORP",
  },
  {
    cik_str: 1590955,
    ticker: "PAYC",
    company_name: "Paycom Software, Inc.",
  },
  {
    cik_str: 845982,
    ticker: "SNN",
    company_name: "SMITH & NEPHEW PLC",
  },
  {
    cik_str: 1849253,
    ticker: "RYAN",
    company_name: "RYAN SPECIALTY HOLDINGS, INC.",
  },
  {
    cik_str: 320335,
    ticker: "GL",
    company_name: "GLOBE LIFE INC.",
  },
  {
    cik_str: 1046102,
    ticker: "RBA",
    company_name: "RB GLOBAL INC.",
  },
  {
    cik_str: 1333986,
    ticker: "EQH",
    company_name: "Equitable Holdings, Inc.",
  },
  {
    cik_str: 1707753,
    ticker: "ESTC",
    company_name: "Elastic N.V.",
  },
  {
    cik_str: 1089063,
    ticker: "DKS",
    company_name: "DICK'S SPORTING GOODS, INC.",
  },
  {
    cik_str: 1287750,
    ticker: "ARCC",
    company_name: "ARES CAPITAL CORP",
  },
  {
    cik_str: 21175,
    ticker: "CNA",
    company_name: "CNA FINANCIAL CORP",
  },
  {
    cik_str: 1474432,
    ticker: "PSTG",
    company_name: "Pure Storage, Inc.",
  },
  {
    cik_str: 1794515,
    ticker: "ZI",
    company_name: "ZoomInfo Technologies Inc.",
  },
  {
    cik_str: 1076378,
    ticker: "CX",
    company_name: "CEMEX SAB DE CV",
  },
  {
    cik_str: 1618732,
    ticker: "NTNX",
    company_name: "Nutanix, Inc.",
  },
  {
    cik_str: 1555812,
    ticker: "SMKUY",
    company_name: "Siam Makro Public Co Limited/ADR",
  },
  {
    cik_str: 1611983,
    ticker: "LBRDA",
    company_name: "Liberty Broadband Corp",
  },
  {
    cik_str: 1135951,
    ticker: "RDY",
    company_name: "DR REDDYS LABORATORIES LTD",
  },
  {
    cik_str: 1801198,
    ticker: "LEGN",
    company_name: "Legend Biotech Corp",
  },
  {
    cik_str: 1483994,
    ticker: "HTHT",
    company_name: "H World Group Ltd",
  },
  {
    cik_str: 1002638,
    ticker: "OTEX",
    company_name: "OPEN TEXT CORP",
  },
  {
    cik_str: 818686,
    ticker: "TEVA",
    company_name: "TEVA PHARMACEUTICAL INDUSTRIES LTD",
  },
  {
    cik_str: 1037540,
    ticker: "BXP",
    company_name: "BOSTON PROPERTIES INC",
  },
  {
    cik_str: 1013871,
    ticker: "NRG",
    company_name: "NRG ENERGY, INC.",
  },
  {
    cik_str: 1024305,
    ticker: "COTY",
    company_name: "COTY INC.",
  },
  {
    cik_str: 1811210,
    ticker: "LCID",
    company_name: "Lucid Group, Inc.",
  },
  {
    cik_str: 1111711,
    ticker: "NI",
    company_name: "NISOURCE INC.",
  },
  {
    cik_str: 1915657,
    ticker: "DINO",
    company_name: "HF Sinclair Corp",
  },
  {
    cik_str: 794170,
    ticker: "TOL",
    company_name: "Toll Brothers, Inc.",
  },
  {
    cik_str: 1177702,
    ticker: "SAIA",
    company_name: "SAIA INC",
  },
  {
    cik_str: 1604778,
    ticker: "QRVO",
    company_name: "Qorvo, Inc.",
  },
  {
    cik_str: 898174,
    ticker: "RGA",
    company_name: "REINSURANCE GROUP OF AMERICA INC",
  },
  {
    cik_str: 1732845,
    ticker: "WRK",
    company_name: "WestRock Co",
  },
  {
    cik_str: 769218,
    ticker: "AEG",
    company_name: "AEGON LTD.",
  },
  {
    cik_str: 1604028,
    ticker: "WMS",
    company_name: "ADVANCED DRAINAGE SYSTEMS, INC.",
  },
  {
    cik_str: 1468608,
    ticker: "VDMCY",
    company_name: "Vodacom Group Ltd / ADR",
  },
  {
    cik_str: 1219601,
    ticker: "CCK",
    company_name: "CROWN HOLDINGS, INC.",
  },
  {
    cik_str: 1841666,
    ticker: "APA",
    company_name: "APA Corp",
  },
  {
    cik_str: 1019849,
    ticker: "PAG",
    company_name: "PENSKE AUTOMOTIVE GROUP, INC.",
  },
  {
    cik_str: 1665918,
    ticker: "USFD",
    company_name: "US Foods Holding Corp.",
  },
  {
    cik_str: 1127055,
    ticker: "VIVHY",
    company_name: "VIVENDI",
  },
  {
    cik_str: 1177609,
    ticker: "FIVE",
    company_name: "FIVE BELOW, INC",
  },
  {
    cik_str: 765880,
    ticker: "PEAK",
    company_name: "HEALTHPEAK PROPERTIES, INC.",
  },
  {
    cik_str: 1450123,
    ticker: "JBSAY",
    company_name: "JBS S.A.",
  },
  {
    cik_str: 1725057,
    ticker: "CDAY",
    company_name: "Ceridian HCM Holding Inc.",
  },
  {
    cik_str: 1423902,
    ticker: "WES",
    company_name: "Western Midstream Partners, LP",
  },
  {
    cik_str: 1090425,
    ticker: "LAMR",
    company_name: "LAMAR ADVERTISING CO/NEW",
  },
  {
    cik_str: 1048695,
    ticker: "FFIV",
    company_name: "F5, INC.",
  },
  {
    cik_str: 913144,
    ticker: "RNR",
    company_name: "RENAISSANCERE HOLDINGS LTD",
  },
  {
    cik_str: 906345,
    ticker: "CPT",
    company_name: "CAMDEN PROPERTY TRUST",
  },
  {
    cik_str: 915389,
    ticker: "EMN",
    company_name: "EASTMAN CHEMICAL CO",
  },
  {
    cik_str: 1278021,
    ticker: "MKTX",
    company_name: "MARKETAXESS HOLDINGS INC",
  },
  {
    cik_str: 40729,
    ticker: "ALLY",
    company_name: "Ally Financial Inc.",
  },
  {
    cik_str: 1070423,
    ticker: "PAA",
    company_name: "PLAINS ALL AMERICAN PIPELINE LP",
  },
  {
    cik_str: 1557860,
    ticker: "GLOB",
    company_name: "Globant S.A.",
  },
  {
    cik_str: 1618673,
    ticker: "PFGC",
    company_name: "Performance Food Group Co",
  },
  {
    cik_str: 1579241,
    ticker: "ALLE",
    company_name: "Allegion plc",
  },
  {
    cik_str: 1590895,
    ticker: "CZR",
    company_name: "Caesars Entertainment, Inc.",
  },
  {
    cik_str: 1588823,
    ticker: "TFII",
    company_name: "TFI International Inc.",
  },
  {
    cik_str: 726958,
    ticker: "CASY",
    company_name: "CASEYS GENERAL STORES INC",
  },
  {
    cik_str: 105634,
    ticker: "EME",
    company_name: "EMCOR Group, Inc.",
  },
  {
    cik_str: 1127248,
    ticker: "EMRAF",
    company_name: "EMERA INC",
  },
  {
    cik_str: 1062579,
    ticker: "DOX",
    company_name: "AMDOCS LTD",
  },
  {
    cik_str: 1501585,
    ticker: "HII",
    company_name: "HUNTINGTON INGALLS INDUSTRIES, INC.",
  },
  {
    cik_str: 352915,
    ticker: "UHS",
    company_name: "UNIVERSAL HEALTH SERVICES INC",
  },
  {
    cik_str: 813828,
    ticker: "PARA",
    company_name: "Paramount Global",
  },
  {
    cik_str: 806968,
    ticker: "WPP",
    company_name: "WPP plc",
  },
  {
    cik_str: 1298675,
    ticker: "CUBE",
    company_name: "CubeSmart",
  },
  {
    cik_str: 1069157,
    ticker: "EWBC",
    company_name: "EAST WEST BANCORP INC",
  },
  {
    cik_str: 730272,
    ticker: "RGEN",
    company_name: "REPLIGEN CORP",
  },
  {
    cik_str: 1174922,
    ticker: "WYNN",
    company_name: "WYNN RESORTS LTD",
  },
  {
    cik_str: 1109354,
    ticker: "BRKR",
    company_name: "BRUKER CORP",
  },
  {
    cik_str: 89089,
    ticker: "SCI",
    company_name: "SERVICE CORP INTERNATIONAL",
  },
  {
    cik_str: 1166003,
    ticker: "XPO",
    company_name: "XPO, Inc.",
  },
  {
    cik_str: 1519751,
    ticker: "FBIN",
    company_name: "Fortune Brands Innovations, Inc.",
  },
  {
    cik_str: 1783879,
    ticker: "HOOD",
    company_name: "Robinhood Markets, Inc.",
  },
  {
    cik_str: 1042046,
    ticker: "AFG",
    company_name: "AMERICAN FINANCIAL GROUP INC",
  },
  {
    cik_str: 1467623,
    ticker: "DBX",
    company_name: "DROPBOX, INC.",
  },
  {
    cik_str: 1043219,
    ticker: "NLY",
    company_name: "ANNALY CAPITAL MANAGEMENT INC",
  },
  {
    cik_str: 1043277,
    ticker: "CHRW",
    company_name: "C. H. ROBINSON WORLDWIDE, INC.",
  },
  {
    cik_str: 895126,
    ticker: "CHK",
    company_name: "CHESAPEAKE ENERGY CORP",
  },
  {
    cik_str: 78128,
    ticker: "WTRG",
    company_name: "Essential Utilities, Inc.",
  },
  {
    cik_str: 1170858,
    ticker: "SBS",
    company_name:
      "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO-SABESP",
  },
  {
    cik_str: 927066,
    ticker: "DVA",
    company_name: "DAVITA INC.",
  },
  {
    cik_str: 1720635,
    ticker: "NVT",
    company_name: "nVent Electric plc",
  },
  {
    cik_str: 1000228,
    ticker: "HSIC",
    company_name: "HENRY SCHEIN INC",
  },
  {
    cik_str: 1370637,
    ticker: "ETSY",
    company_name: "ETSY INC",
  },
  {
    cik_str: 1653482,
    ticker: "GTLB",
    company_name: "Gitlab Inc.",
  },
  {
    cik_str: 82811,
    ticker: "RRX",
    company_name: "REGAL REXNORD CORP",
  },
  {
    cik_str: 1015820,
    ticker: "QGEN",
    company_name: "QIAGEN N.V.",
  },
  {
    cik_str: 1481045,
    ticker: "DSEEY",
    company_name: "Daiwa Securities Group Inc.",
  },
  {
    cik_str: 855658,
    ticker: "LSCC",
    company_name: "LATTICE SEMICONDUCTOR CORP",
  },
  {
    cik_str: 20212,
    ticker: "CHDN",
    company_name: "Churchill Downs Inc",
  },
  {
    cik_str: 1562088,
    ticker: "DUOL",
    company_name: "Duolingo, Inc.",
  },
  {
    cik_str: 1177394,
    ticker: "SNX",
    company_name: "TD SYNNEX CORP",
  },
  {
    cik_str: 1858985,
    ticker: "ONON",
    company_name: "On Holding AG",
  },
  {
    cik_str: 216228,
    ticker: "ITT",
    company_name: "ITT INC.",
  },
  {
    cik_str: 1027552,
    ticker: "BSAC",
    company_name: "BANCO SANTANDER CHILE",
  },
  {
    cik_str: 6201,
    ticker: "AAL",
    company_name: "American Airlines Group Inc.",
  },
  {
    cik_str: 822818,
    ticker: "CLH",
    company_name: "CLEAN HARBORS INC",
  },
  {
    cik_str: 764065,
    ticker: "CLF",
    company_name: "CLEVELAND-CLIFFS INC.",
  },
  {
    cik_str: 1611052,
    ticker: "PCOR",
    company_name: "PROCORE TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1321732,
    ticker: "PEN",
    company_name: "Penumbra Inc",
  },
  {
    cik_str: 930826,
    ticker: "SLVYY",
    company_name: "SOLVAY S A /ADR/",
  },
  {
    cik_str: 1658566,
    ticker: "PR",
    company_name: "Permian Resources Corp",
  },
  {
    cik_str: 887225,
    ticker: "KEP",
    company_name: "KOREA ELECTRIC POWER CORP",
  },
  {
    cik_str: 1065837,
    ticker: "SKX",
    company_name: "SKECHERS USA INC",
  },
  {
    cik_str: 1043604,
    ticker: "JNPR",
    company_name: "JUNIPER NETWORKS INC",
  },
  {
    cik_str: 1492691,
    ticker: "KNX",
    company_name: "Knight-Swift Transportation Holdings Inc.",
  },
  {
    cik_str: 1446418,
    ticker: "MTLHY",
    company_name: "Mitsubishi Chemical Holdings Corp",
  },
  {
    cik_str: 891103,
    ticker: "MTCH",
    company_name: "Match Group, Inc.",
  },
  {
    cik_str: 701985,
    ticker: "BBWI",
    company_name: "Bath & Body Works, Inc.",
  },
  {
    cik_str: 1766502,
    ticker: "CHWY",
    company_name: "Chewy, Inc.",
  },
  {
    cik_str: 1591698,
    ticker: "PCTY",
    company_name: "Paylocity Holding Corp",
  },
  {
    cik_str: 1027664,
    ticker: "ESLT",
    company_name: "ELBIT SYSTEMS LTD",
  },
  {
    cik_str: 315213,
    ticker: "RHI",
    company_name: "ROBERT HALF INC.",
  },
  {
    cik_str: 1977102,
    ticker: "BIRK",
    company_name: "Birkenstock Holding plc",
  },
  {
    cik_str: 1668397,
    ticker: "MEDP",
    company_name: "Medpace Holdings, Inc.",
  },
  {
    cik_str: 1845338,
    ticker: "MNDY",
    company_name: "monday.com Ltd.",
  },
  {
    cik_str: 1560385,
    ticker: "LSXMA",
    company_name: "Liberty Media Corp",
  },
  {
    cik_str: 737758,
    ticker: "TTC",
    company_name: "TORO CO",
  },
  {
    cik_str: 1529192,
    ticker: "VIPS",
    company_name: "Vipshop Holdings Ltd",
  },
  {
    cik_str: 1690820,
    ticker: "CVNA",
    company_name: "CARVANA CO.",
  },
  {
    cik_str: 1438654,
    ticker: "RDEIY",
    company_name: "Red Electrica Corporacion SA/ADR",
  },
  {
    cik_str: 880266,
    ticker: "AGCO",
    company_name: "AGCO CORP /DE",
  },
  {
    cik_str: 1050446,
    ticker: "MSTR",
    company_name: "MICROSTRATEGY Inc",
  },
  {
    cik_str: 929008,
    ticker: "WCC",
    company_name: "WESCO INTERNATIONAL INC",
  },
  {
    cik_str: 1635088,
    ticker: "ROIV",
    company_name: "Roivant Sciences Ltd.",
  },
  {
    cik_str: 12208,
    ticker: "BIO",
    company_name: "BIO-RAD LABORATORIES, INC.",
  },
  {
    cik_str: 831641,
    ticker: "TTEK",
    company_name: "TETRA TECH INC",
  },
  {
    cik_str: 1037038,
    ticker: "RL",
    company_name: "RALPH LAUREN CORP",
  },
  {
    cik_str: 1347557,
    ticker: "PAC",
    company_name: "Pacific Airport Group",
  },
  {
    cik_str: 1531152,
    ticker: "BJ",
    company_name: "BJ's Wholesale Club Holdings, Inc.",
  },
  {
    cik_str: 801337,
    ticker: "WBS",
    company_name: "WEBSTER FINANCIAL CORP",
  },
  {
    cik_str: 1123452,
    ticker: "ASR",
    company_name: "SOUTHEAST AIRPORT GROUP",
  },
  {
    cik_str: 1545772,
    ticker: "BPYPP",
    company_name: "Brookfield Property Partners L.P.",
  },
  {
    cik_str: 1818874,
    ticker: "SOFI",
    company_name: "SoFi Technologies, Inc.",
  },
  {
    cik_str: 1826168,
    ticker: "TIMB",
    company_name: "TIM S.A.",
  },
  {
    cik_str: 1163302,
    ticker: "X",
    company_name: "UNITED STATES STEEL CORP",
  },
  {
    cik_str: 1294591,
    ticker: "RKUNY",
    company_name: "Rakuten Group, Inc.",
  },
  {
    cik_str: 1037976,
    ticker: "JLL",
    company_name: "JONES LANG LASALLE INC",
  },
  {
    cik_str: 1267238,
    ticker: "AIZ",
    company_name: "ASSURANT, INC.",
  },
  {
    cik_str: 19584,
    ticker: "CHE",
    company_name: "CHEMED CORP",
  },
  {
    cik_str: 1005284,
    ticker: "OLED",
    company_name: "UNIVERSAL DISPLAY CORP \\PA\\",
  },
  {
    cik_str: 1598110,
    ticker: "CYBR",
    company_name: "CyberArk Software Ltd.",
  },
  {
    cik_str: 1034670,
    ticker: "ALV",
    company_name: "AUTOLIV INC",
  },
  {
    cik_str: 1206264,
    ticker: "TPX",
    company_name: "TEMPUR SEALY INTERNATIONAL, INC.",
  },
  {
    cik_str: 1131383,
    ticker: "STN",
    company_name: "STANTEC INC",
  },
  {
    cik_str: 800954,
    ticker: "OMRNY",
    company_name: "OMRON CORP /FI",
  },
  {
    cik_str: 1069878,
    ticker: "TREX",
    company_name: "TREX CO INC",
  },
  {
    cik_str: 1681459,
    ticker: "FTI",
    company_name: "TechnipFMC plc",
  },
  {
    cik_str: 1513761,
    ticker: "NCLH",
    company_name: "Norwegian Cruise Line Holdings Ltd.",
  },
  {
    cik_str: 1647088,
    ticker: "WSC",
    company_name: "WillScot Mobile Mini Holdings Corp.",
  },
  {
    cik_str: 873303,
    ticker: "SRPT",
    company_name: "Sarepta Therapeutics, Inc.",
  },
  {
    cik_str: 5513,
    ticker: "UNM",
    company_name: "Unum Group",
  },
  {
    cik_str: 812011,
    ticker: "MTN",
    company_name: "VAIL RESORTS INC",
  },
  {
    cik_str: 764622,
    ticker: "PNW",
    company_name: "PINNACLE WEST CAPITAL CORP",
  },
  {
    cik_str: 34903,
    ticker: "FRT",
    company_name: "FEDERAL REALTY INVESTMENT TRUST",
  },
  {
    cik_str: 26324,
    ticker: "CW",
    company_name: "CURTISS WRIGHT CORP",
  },
  {
    cik_str: 49600,
    ticker: "EGP",
    company_name: "EASTGROUP PROPERTIES INC",
  },
  {
    cik_str: 1650164,
    ticker: "TOST",
    company_name: "Toast, Inc.",
  },
  {
    cik_str: 1438569,
    ticker: "GRFS",
    company_name: "Grifols SA",
  },
  {
    cik_str: 1868778,
    ticker: "INFA",
    company_name: "Informatica Inc.",
  },
  {
    cik_str: 1455863,
    ticker: "COLD",
    company_name: "AMERICOLD REALTY TRUST",
  },
  {
    cik_str: 1023128,
    ticker: "LAD",
    company_name: "LITHIA MOTORS INC",
  },
  {
    cik_str: 896622,
    ticker: "ATR",
    company_name: "APTARGROUP, INC.",
  },
  {
    cik_str: 1446457,
    ticker: "BDNNY",
    company_name: "Boliden AB",
  },
  {
    cik_str: 1015650,
    ticker: "SKM",
    company_name: "SK TELECOM CO LTD",
  },
  {
    cik_str: 938323,
    ticker: "PSO",
    company_name: "PEARSON PLC",
  },
  {
    cik_str: 1116132,
    ticker: "TPR",
    company_name: "TAPESTRY, INC.",
  },
  {
    cik_str: 1073404,
    ticker: "GGB",
    company_name: "GERDAU S.A.",
  },
  {
    cik_str: 1308547,
    ticker: "DLB",
    company_name: "Dolby Laboratories, Inc.",
  },
  {
    cik_str: 1856525,
    ticker: "CNM",
    company_name: "Core & Main, Inc.",
  },
  {
    cik_str: 1771917,
    ticker: "KRTX",
    company_name: "Karuna Therapeutics, Inc.",
  },
  {
    cik_str: 1511737,
    ticker: "UI",
    company_name: "Ubiquiti Inc.",
  },
  {
    cik_str: 920371,
    ticker: "SSD",
    company_name: "Simpson Manufacturing Co., Inc.",
  },
  {
    cik_str: 108312,
    ticker: "WWD",
    company_name: "Woodward, Inc.",
  },
  {
    cik_str: 1499620,
    ticker: "TAL",
    company_name: "TAL Education Group",
  },
  {
    cik_str: 908255,
    ticker: "BWA",
    company_name: "BORGWARNER INC",
  },
  {
    cik_str: 1047127,
    ticker: "AMKR",
    company_name: "AMKOR TECHNOLOGY, INC.",
  },
  {
    cik_str: 1302215,
    ticker: "HLI",
    company_name: "HOULIHAN LOKEY, INC.",
  },
  {
    cik_str: 74260,
    ticker: "ORI",
    company_name: "OLD REPUBLIC INTERNATIONAL CORP",
  },
  {
    cik_str: 1669162,
    ticker: "KNSL",
    company_name: "Kinsale Capital Group, Inc.",
  },
  {
    cik_str: 1528396,
    ticker: "GWRE",
    company_name: "Guidewire Software, Inc.",
  },
  {
    cik_str: 1347426,
    ticker: "BMA",
    company_name: "Macro Bank Inc.",
  },
  {
    cik_str: 1436786,
    ticker: "OUKPY",
    company_name: "Outotec OYJ",
  },
  {
    cik_str: 350894,
    ticker: "SEIC",
    company_name: "SEI INVESTMENTS CO",
  },
  {
    cik_str: 1786352,
    ticker: "BILL",
    company_name: "BILL Holdings, Inc.",
  },
  {
    cik_str: 96223,
    ticker: "JEF",
    company_name: "Jefferies Financial Group Inc.",
  },
  {
    cik_str: 317540,
    ticker: "COKE",
    company_name: "Coca-Cola Consolidated, Inc.",
  },
  {
    cik_str: 1342874,
    ticker: "TX",
    company_name: "Ternium S.A.",
  },
  {
    cik_str: 1309108,
    ticker: "WEX",
    company_name: "WEX Inc.",
  },
  {
    cik_str: 855654,
    ticker: "IMGN",
    company_name: "ImmunoGen, Inc.",
  },
  {
    cik_str: 842162,
    ticker: "LEA",
    company_name: "LEAR CORP",
  },
  {
    cik_str: 1449003,
    ticker: "ASXFY",
    company_name: "ASX Ltd.",
  },
  {
    cik_str: 1327068,
    ticker: "USO",
    company_name: "United States Oil Fund, LP",
  },
  {
    cik_str: 1378992,
    ticker: "BERY",
    company_name: "BERRY GLOBAL GROUP, INC.",
  },
  {
    cik_str: 39911,
    ticker: "GPS",
    company_name: "GAP INC",
  },
  {
    cik_str: 910073,
    ticker: "NYCB",
    company_name: "NEW YORK COMMUNITY BANCORP INC",
  },
  {
    cik_str: 1600033,
    ticker: "ELF",
    company_name: "e.l.f. Beauty, Inc.",
  },
  {
    cik_str: 29644,
    ticker: "DCI",
    company_name: "DONALDSON Co INC",
  },
  {
    cik_str: 914208,
    ticker: "IVZ",
    company_name: "Invesco Ltd.",
  },
  {
    cik_str: 1583708,
    ticker: "S",
    company_name: "SentinelOne, Inc.",
  },
  {
    cik_str: 1324948,
    ticker: "RBC",
    company_name: "RBC Bearings INC",
  },
  {
    cik_str: 1442653,
    ticker: "ROHCY",
    company_name: "ROHM Co., Ltd.",
  },
  {
    cik_str: 1474735,
    ticker: "GNRC",
    company_name: "GENERAC HOLDINGS INC.",
  },
  {
    cik_str: 85535,
    ticker: "RGLD",
    company_name: "ROYAL GOLD INC",
  },
  {
    cik_str: 1289460,
    ticker: "TXRH",
    company_name: "Texas Roadhouse, Inc.",
  },
  {
    cik_str: 1232524,
    ticker: "JAZZ",
    company_name: "Jazz Pharmaceuticals plc",
  },
  {
    cik_str: 1021860,
    ticker: "NOV",
    company_name: "NOV Inc.",
  },
  {
    cik_str: 1796209,
    ticker: "APG",
    company_name: "APi Group Corp",
  },
  {
    cik_str: 916540,
    ticker: "DAR",
    company_name: "DARLING INGREDIENTS INC.",
  },
  {
    cik_str: 1535929,
    ticker: "VOYA",
    company_name: "Voya Financial, Inc.",
  },
  {
    cik_str: 103379,
    ticker: "VFC",
    company_name: "V F CORP",
  },
  {
    cik_str: 1767582,
    ticker: "LKNCY",
    company_name: "Luckin Coffee Inc.",
  },
  {
    cik_str: 769520,
    ticker: "MIDD",
    company_name: "MIDDLEBY Corp",
  },
  {
    cik_str: 1573516,
    ticker: "MUSA",
    company_name: "Murphy USA Inc.",
  },
  {
    cik_str: 888491,
    ticker: "OHI",
    company_name: "OMEGA HEALTHCARE INVESTORS INC",
  },
  {
    cik_str: 1749723,
    ticker: "NFE",
    company_name: "New Fortress Energy Inc.",
  },
  {
    cik_str: 70318,
    ticker: "THC",
    company_name: "TENET HEALTHCARE CORP",
  },
  {
    cik_str: 887936,
    ticker: "FCN",
    company_name: "FTI CONSULTING, INC",
  },
  {
    cik_str: 1849853,
    ticker: "STVN",
    company_name: "Stevanato Group S.p.A.",
  },
  {
    cik_str: 1754581,
    ticker: "FUTU",
    company_name: "Futu Holdings Ltd",
  },
  {
    cik_str: 912767,
    ticker: "UFPI",
    company_name: "UFP INDUSTRIES INC",
  },
  {
    cik_str: 36966,
    ticker: "FHN",
    company_name: "FIRST HORIZON CORP",
  },
  {
    cik_str: 751364,
    ticker: "NNN",
    company_name: "NNN REIT, INC.",
  },
  {
    cik_str: 750004,
    ticker: "LNW",
    company_name: "Light & Wonder, Inc.",
  },
  {
    cik_str: 1469395,
    ticker: "PAM",
    company_name: "Pampa Energy Inc.",
  },
  {
    cik_str: 1835830,
    ticker: "KVYO",
    company_name: "Klaviyo, Inc.",
  },
  {
    cik_str: 71691,
    ticker: "NYT",
    company_name: "NEW YORK TIMES CO",
  },
  {
    cik_str: 1492422,
    ticker: "APLS",
    company_name: "Apellis Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1264136,
    ticker: "WF",
    company_name: "WOORI FINANCIAL GROUP INC.",
  },
  {
    cik_str: 1973832,
    ticker: "AU",
    company_name: "AngloGold Ashanti PLC",
  },
  {
    cik_str: 1838413,
    ticker: "YMM",
    company_name: "Full Truck Alliance Co. Ltd.",
  },
  {
    cik_str: 1650729,
    ticker: "SITE",
    company_name: "SiteOne Landscape Supply, Inc.",
  },
  {
    cik_str: 37785,
    ticker: "FMC",
    company_name: "FMC CORP",
  },
  {
    cik_str: 1805387,
    ticker: "CERE",
    company_name: "Cerevel Therapeutics Holdings, Inc.",
  },
  {
    cik_str: 1789832,
    ticker: "HESM",
    company_name: "Hess Midstream LP",
  },
  {
    cik_str: 1596783,
    ticker: "CTLT",
    company_name: "Catalent, Inc.",
  },
  {
    cik_str: 704532,
    ticker: "ONTO",
    company_name: "ONTO INNOVATION INC.",
  },
  {
    cik_str: 1330568,
    ticker: "SLV",
    company_name: "iShares Silver Trust",
  },
  {
    cik_str: 701818,
    ticker: "KGC",
    company_name: "KINROSS GOLD CORP",
  },
  {
    cik_str: 917273,
    ticker: "RMBS",
    company_name: "RAMBUS INC",
  },
  {
    cik_str: 1616862,
    ticker: "AXTA",
    company_name: "Axalta Coating Systems Ltd.",
  },
  {
    cik_str: 1475922,
    ticker: "PRI",
    company_name: "Primerica, Inc.",
  },
  {
    cik_str: 1408075,
    ticker: "GPK",
    company_name: "GRAPHIC PACKAGING HOLDING CO",
  },
  {
    cik_str: 1636222,
    ticker: "WING",
    company_name: "Wingstop Inc.",
  },
  {
    cik_str: 723612,
    ticker: "CAR",
    company_name: "AVIS BUDGET GROUP, INC.",
  },
  {
    cik_str: 355811,
    ticker: "GNTX",
    company_name: "GENTEX CORP",
  },
  {
    cik_str: 939767,
    ticker: "EXEL",
    company_name: "EXELIXIS, INC.",
  },
  {
    cik_str: 28412,
    ticker: "CMA",
    company_name: "COMERICA INC /NEW/",
  },
  {
    cik_str: 1107843,
    ticker: "QLYS",
    company_name: "QUALYS, INC.",
  },
  {
    cik_str: 315852,
    ticker: "RRC",
    company_name: "RANGE RESOURCES CORP",
  },
  {
    cik_str: 1050140,
    ticker: "DSGX",
    company_name: "DESCARTES SYSTEMS GROUP INC",
  },
  {
    cik_str: 818479,
    ticker: "XRAY",
    company_name: "DENTSPLY SIRONA Inc.",
  },
  {
    cik_str: 1772016,
    ticker: "BRBR",
    company_name: "BELLRING BRANDS, INC.",
  },
  {
    cik_str: 871464,
    ticker: "HNGKY",
    company_name: "HONGKONG LAND HOLDINGS LTD /FI",
  },
  {
    cik_str: 1071371,
    ticker: "CIB",
    company_name: "BANCOLOMBIA SA",
  },
  {
    cik_str: 1357615,
    ticker: "KBR",
    company_name: "KBR, INC.",
  },
  {
    cik_str: 1852244,
    ticker: "GXO",
    company_name: "GXO Logistics, Inc.",
  },
  {
    cik_str: 1486957,
    ticker: "BWXT",
    company_name: "BWX Technologies, Inc.",
  },
  {
    cik_str: 16058,
    ticker: "CACI",
    company_name: "CACI INTERNATIONAL INC /DE/",
  },
  {
    cik_str: 851205,
    ticker: "CGNX",
    company_name: "COGNEX CORP",
  },
  {
    cik_str: 1035983,
    ticker: "FIX",
    company_name: "COMFORT SYSTEMS USA INC",
  },
  {
    cik_str: 1541309,
    ticker: "CSXXY",
    company_name: "carsales.com Limited/ADR",
  },
  {
    cik_str: 1021635,
    ticker: "OGE",
    company_name: "OGE ENERGY CORP.",
  },
  {
    cik_str: 1584509,
    ticker: "ARMK",
    company_name: "Aramark",
  },
  {
    cik_str: 1520697,
    ticker: "ACHC",
    company_name: "Acadia Healthcare Company, Inc.",
  },
  {
    cik_str: 874015,
    ticker: "IONS",
    company_name: "IONIS PHARMACEUTICALS INC",
  },
  {
    cik_str: 1699838,
    ticker: "CFLT",
    company_name: "Confluent, Inc.",
  },
  {
    cik_str: 1581068,
    ticker: "BRX",
    company_name: "Brixmor Property Group Inc.",
  },
  {
    cik_str: 1637810,
    ticker: "FSV",
    company_name: "FirstService Corp",
  },
  {
    cik_str: 201533,
    ticker: "CMS-PB",
    company_name: "CONSUMERS ENERGY CO",
  },
  {
    cik_str: 22356,
    ticker: "CBSH",
    company_name: "COMMERCE BANCSHARES INC /MO/",
  },
  {
    cik_str: 1842827,
    ticker: "BZ",
    company_name: "Kanzhun Ltd",
  },
  {
    cik_str: 921825,
    ticker: "FR",
    company_name: "FIRST INDUSTRIAL REALTY TRUST INC",
  },
  {
    cik_str: 918646,
    ticker: "EXP",
    company_name: "EAGLE MATERIALS INC",
  },
  {
    cik_str: 1604821,
    ticker: "NTRA",
    company_name: "Natera, Inc.",
  },
  {
    cik_str: 1114700,
    ticker: "GGAL",
    company_name: "GRUPO FINANCIERO GALICIA SA",
  },
  {
    cik_str: 1479094,
    ticker: "STAG",
    company_name: "STAG Industrial, Inc.",
  },
  {
    cik_str: 892450,
    ticker: "KT",
    company_name: "KT CORP",
  },
  {
    cik_str: 78239,
    ticker: "PVH",
    company_name: "PVH CORP. /DE/",
  },
  {
    cik_str: 1766363,
    ticker: "EDR",
    company_name: "Endeavor Group Holdings, Inc.",
  },
  {
    cik_str: 775158,
    ticker: "OSK",
    company_name: "OSHKOSH CORP",
  },
  {
    cik_str: 1430162,
    ticker: "CSAN",
    company_name: "Cosan S.A.",
  },
  {
    cik_str: 1046257,
    ticker: "INGR",
    company_name: "Ingredion Inc",
  },
  {
    cik_str: 1212545,
    ticker: "WAL",
    company_name: "WESTERN ALLIANCE BANCORPORATION",
  },
  {
    cik_str: 46080,
    ticker: "HAS",
    company_name: "HASBRO, INC.",
  },
  {
    cik_str: 7332,
    ticker: "SWN",
    company_name: "SOUTHWESTERN ENERGY CO",
  },
  {
    cik_str: 100826,
    ticker: "UELMO",
    company_name: "UNION ELECTRIC CO",
  },
  {
    cik_str: 853816,
    ticker: "LSTR",
    company_name: "LANDSTAR SYSTEM INC",
  },
  {
    cik_str: 39263,
    ticker: "CFR",
    company_name: "CULLEN/FROST BANKERS, INC.",
  },
  {
    cik_str: 1818201,
    ticker: "CCCS",
    company_name: "CCC Intelligent Solutions Holdings Inc.",
  },
  {
    cik_str: 1612042,
    ticker: "ASND",
    company_name: "Ascendis Pharma A/S",
  },
  {
    cik_str: 1642545,
    ticker: "SWAV",
    company_name: "Shockwave Medical, Inc.",
  },
  {
    cik_str: 1957132,
    ticker: "SN",
    company_name: "SharkNinja, Inc.",
  },
  {
    cik_str: 932470,
    ticker: "TEO",
    company_name: "TELECOM ARGENTINA SA",
  },
  {
    cik_str: 1513845,
    ticker: "YNDX",
    company_name: "Yandex N.V.",
  },
  {
    cik_str: 1486159,
    ticker: "CHRD",
    company_name: "Chord Energy Corp",
  },
  {
    cik_str: 1092699,
    ticker: "SPSC",
    company_name: "SPS COMMERCE INC",
  },
  {
    cik_str: 1124198,
    ticker: "FLR",
    company_name: "FLUOR CORP",
  },
  {
    cik_str: 1579091,
    ticker: "CART",
    company_name: "Maplebear Inc.",
  },
  {
    cik_str: 720672,
    ticker: "SF",
    company_name: "STIFEL FINANCIAL CORP",
  },
  {
    cik_str: 1465128,
    ticker: "STWD",
    company_name: "STARWOOD PROPERTY TRUST, INC.",
  },
  {
    cik_str: 1408710,
    ticker: "FN",
    company_name: "Fabrinet",
  },
  {
    cik_str: 1115055,
    ticker: "PNFP",
    company_name: "PINNACLE FINANCIAL PARTNERS INC",
  },
  {
    cik_str: 1739104,
    ticker: "ELAN",
    company_name: "Elanco Animal Health Inc",
  },
  {
    cik_str: 1743881,
    ticker: "BBIO",
    company_name: "BridgeBio Pharma, Inc.",
  },
  {
    cik_str: 851968,
    ticker: "MHK",
    company_name: "MOHAWK INDUSTRIES INC",
  },
  {
    cik_str: 1447137,
    ticker: "BKGFY",
    company_name: "Berkeley Group Holdings plc",
  },
  {
    cik_str: 1472787,
    ticker: "FAF",
    company_name: "First American Financial Corp",
  },
  {
    cik_str: 1544522,
    ticker: "FRSH",
    company_name: "Freshworks Inc.",
  },
  {
    cik_str: 12659,
    ticker: "HRB",
    company_name: "H&R BLOCK INC",
  },
  {
    cik_str: 1520006,
    ticker: "MTDR",
    company_name: "Matador Resources Co",
  },
  {
    cik_str: 63276,
    ticker: "MAT",
    company_name: "MATTEL INC /DE/",
  },
  {
    cik_str: 7536,
    ticker: "ARW",
    company_name: "ARROW ELECTRONICS, INC.",
  },
  {
    cik_str: 795403,
    ticker: "WTS",
    company_name: "WATTS WATER TECHNOLOGIES INC",
  },
  {
    cik_str: 1616707,
    ticker: "W",
    company_name: "Wayfair Inc.",
  },
  {
    cik_str: 109563,
    ticker: "AIT",
    company_name: "APPLIED INDUSTRIAL TECHNOLOGIES INC",
  },
  {
    cik_str: 1237831,
    ticker: "GMED",
    company_name: "GLOBUS MEDICAL INC",
  },
  {
    cik_str: 1433270,
    ticker: "AR",
    company_name: "ANTERO RESOURCES Corp",
  },
  {
    cik_str: 1493594,
    ticker: "MTSI",
    company_name: "MACOM Technology Solutions Holdings, Inc.",
  },
  {
    cik_str: 1571123,
    ticker: "SAIC",
    company_name: "Science Applications International Corp",
  },
  {
    cik_str: 275880,
    ticker: "PSN",
    company_name: "PARSONS CORP",
  },
  {
    cik_str: 764038,
    ticker: "SSB",
    company_name: "SouthState Corp",
  },
  {
    cik_str: 1173382,
    ticker: "CAE",
    company_name: "CAE INC",
  },
  {
    cik_str: 1803599,
    ticker: "CNXC",
    company_name: "Concentrix Corp",
  },
  {
    cik_str: 820318,
    ticker: "COHR",
    company_name: "COHERENT CORP.",
  },
  {
    cik_str: 785161,
    ticker: "EHC",
    company_name: "Encompass Health Corp",
  },
  {
    cik_str: 66570,
    ticker: "MSA",
    company_name: "MSA Safety Inc",
  },
  {
    cik_str: 1423689,
    ticker: "AGNC",
    company_name: "AGNC Investment Corp.",
  },
  {
    cik_str: 941221,
    ticker: "ICL",
    company_name: "ICL Group Ltd.",
  },
  {
    cik_str: 1722684,
    ticker: "WH",
    company_name: "WYNDHAM HOTELS & RESORTS, INC.",
  },
  {
    cik_str: 14930,
    ticker: "BC",
    company_name: "BRUNSWICK CORP",
  },
  {
    cik_str: 1509589,
    ticker: "CIVI",
    company_name: "CIVITAS RESOURCES, INC.",
  },
  {
    cik_str: 1360604,
    ticker: "HR",
    company_name: "Healthcare Realty Trust Inc",
  },
  {
    cik_str: 717423,
    ticker: "MUR",
    company_name: "MURPHY OIL CORP",
  },
  {
    cik_str: 1334036,
    ticker: "CROX",
    company_name: "Crocs, Inc.",
  },
  {
    cik_str: 106640,
    ticker: "WHR",
    company_name: "WHIRLPOOL CORP /DE/",
  },
  {
    cik_str: 1433195,
    ticker: "APPF",
    company_name: "APPFOLIO INC",
  },
  {
    cik_str: 109380,
    ticker: "ZION",
    company_name: "ZIONS BANCORPORATION, NATIONAL ASSOCIATION /UT/",
  },
  {
    cik_str: 889331,
    ticker: "LFUS",
    company_name: "LITTELFUSE INC /DE",
  },
  {
    cik_str: 1040829,
    ticker: "RHP",
    company_name: "Ryman Hospitality Properties, Inc.",
  },
  {
    cik_str: 74303,
    ticker: "OLN",
    company_name: "OLIN Corp",
  },
  {
    cik_str: 1570585,
    ticker: "LBTYA",
    company_name: "Liberty Global Ltd.",
  },
  {
    cik_str: 1558812,
    ticker: "MEJHY",
    company_name: "MEIJI Holdings Co Ltd/ADR",
  },
  {
    cik_str: 1576789,
    ticker: "WIX",
    company_name: "Wix.com Ltd.",
  },
  {
    cik_str: 885550,
    ticker: "CACC",
    company_name: "CREDIT ACCEPTANCE CORP",
  },
  {
    cik_str: 28917,
    ticker: "DDS",
    company_name: "DILLARD'S, INC.",
  },
  {
    cik_str: 1835963,
    ticker: "GLBE",
    company_name: "Global-E Online Ltd.",
  },
  {
    cik_str: 1852131,
    ticker: "NXT",
    company_name: "Nextracker Inc.",
  },
  {
    cik_str: 1603923,
    ticker: "WFRD",
    company_name: "Weatherford International plc",
  },
  {
    cik_str: 1567514,
    ticker: "ITCI",
    company_name: "Intra-Cellular Therapies, Inc.",
  },
  {
    cik_str: 1437178,
    ticker: "EGFEY",
    company_name: "EFG Eurobank Ergasias S.A./ADR",
  },
  {
    cik_str: 1673504,
    ticker: "AGLY",
    company_name: "Atlantis Glory Inc.",
  },
  {
    cik_str: 1366561,
    ticker: "SMAR",
    company_name: "SMARTSHEET INC",
  },
  {
    cik_str: 1144215,
    ticker: "AYI",
    company_name: "ACUITY BRANDS INC",
  },
  {
    cik_str: 931427,
    ticker: "TGS",
    company_name: "GAS TRANSPORTER OF THE SOUTH INC",
  },
  {
    cik_str: 936395,
    ticker: "CIEN",
    company_name: "CIENA CORP",
  },
  {
    cik_str: 1447629,
    ticker: "LNNGY",
    company_name: "Li Ning Co. Ltd.",
  },
  {
    cik_str: 1398659,
    ticker: "G",
    company_name: "Genpact LTD",
  },
  {
    cik_str: 833079,
    ticker: "MTH",
    company_name: "Meritage Homes CORP",
  },
  {
    cik_str: 1815846,
    ticker: "MNSO",
    company_name: "MINISO Group Holding Ltd",
  },
  {
    cik_str: 1402388,
    ticker: "WFG",
    company_name: "WEST FRASER TIMBER CO., LTD",
  },
  {
    cik_str: 1049502,
    ticker: "MKSI",
    company_name: "MKS INSTRUMENTS INC",
  },
  {
    cik_str: 1944013,
    ticker: "CR",
    company_name: "Crane Co",
  },
  {
    cik_str: 350698,
    ticker: "AN",
    company_name: "AUTONATION, INC.",
  },
  {
    cik_str: 1125376,
    ticker: "ENSG",
    company_name: "ENSIGN GROUP, INC",
  },
  {
    cik_str: 802481,
    ticker: "PPC",
    company_name: "PILGRIMS PRIDE CORP",
  },
  {
    cik_str: 1068851,
    ticker: "PB",
    company_name: "PROSPERITY BANCSHARES INC",
  },
  {
    cik_str: 813762,
    ticker: "IEP",
    company_name: "ICAHN ENTERPRISES L.P.",
  },
  {
    cik_str: 717605,
    ticker: "HXL",
    company_name: "HEXCEL CORP /DE/",
  },
  {
    cik_str: 1477049,
    ticker: "PHYS",
    company_name: "Sprott Physical Gold Trust",
  },
  {
    cik_str: 1973266,
    ticker: "TKO",
    company_name: "TKO Group Holdings, Inc.",
  },
  {
    cik_str: 1895262,
    ticker: "NE",
    company_name: "Noble Corp plc",
  },
  {
    cik_str: 1360901,
    ticker: "EVR",
    company_name: "Evercore Inc.",
  },
  {
    cik_str: 1764013,
    ticker: "IMVT",
    company_name: "Immunovant, Inc.",
  },
  {
    cik_str: 1308606,
    ticker: "SRC",
    company_name: "SPIRIT REALTY CAPITAL, INC.",
  },
  {
    cik_str: 230557,
    ticker: "SIGI",
    company_name: "SELECTIVE INSURANCE GROUP INC",
  },
  {
    cik_str: 1449005,
    ticker: "JSCPY",
    company_name: "JSR Corp.",
  },
  {
    cik_str: 730263,
    ticker: "THO",
    company_name: "THOR INDUSTRIES INC",
  },
  {
    cik_str: 917251,
    ticker: "ADC",
    company_name: "AGREE REALTY CORP",
  },
  {
    cik_str: 1637207,
    ticker: "PLNT",
    company_name: "Planet Fitness, Inc.",
  },
  {
    cik_str: 20520,
    ticker: "FYBR",
    company_name: "Frontier Communications Parent, Inc.",
  },
  {
    cik_str: 1703056,
    ticker: "ADT",
    company_name: "ADT Inc.",
  },
  {
    cik_str: 937098,
    ticker: "TNET",
    company_name: "TRINET GROUP, INC.",
  },
  {
    cik_str: 1723089,
    ticker: "CHX",
    company_name: "ChampionX Corp",
  },
  {
    cik_str: 906553,
    ticker: "BYD",
    company_name: "BOYD GAMING CORP",
  },
  {
    cik_str: 1076930,
    ticker: "NOVT",
    company_name: "NOVANTA INC",
  },
  {
    cik_str: 314590,
    ticker: "SSL",
    company_name: "SASOL LTD",
  },
  {
    cik_str: 1819928,
    ticker: "DV",
    company_name: "DoubleVerify Holdings, Inc.",
  },
  {
    cik_str: 94845,
    ticker: "LEVI",
    company_name: "LEVI STRAUSS & CO",
  },
  {
    cik_str: 1759509,
    ticker: "LYFT",
    company_name: "Lyft, Inc.",
  },
  {
    cik_str: 84246,
    ticker: "RLI",
    company_name: "RLI CORP",
  },
  {
    cik_str: 1061894,
    ticker: "GIL",
    company_name: "Gildan Activewear Inc.",
  },
  {
    cik_str: 866291,
    ticker: "ALGM",
    company_name: "ALLEGRO MICROSYSTEMS, INC.",
  },
  {
    cik_str: 1288847,
    ticker: "FIVN",
    company_name: "Five9, Inc.",
  },
  {
    cik_str: 932696,
    ticker: "NSIT",
    company_name: "INSIGHT ENTERPRISES INC",
  },
  {
    cik_str: 1701732,
    ticker: "ALTR",
    company_name: "Altair Engineering Inc.",
  },
  {
    cik_str: 1623925,
    ticker: "AM",
    company_name: "Antero Midstream Corp",
  },
  {
    cik_str: 1588489,
    ticker: "GBTC",
    company_name: "Grayscale Bitcoin Trust (BTC)",
  },
  {
    cik_str: 1433642,
    ticker: "HLNE",
    company_name: "Hamilton Lane INC",
  },
  {
    cik_str: 899689,
    ticker: "VNO",
    company_name: "VORNADO REALTY TRUST",
  },
  {
    cik_str: 937556,
    ticker: "MASI",
    company_name: "MASIMO CORP",
  },
  {
    cik_str: 1770787,
    ticker: "TXG",
    company_name: "10x Genomics, Inc.",
  },
  {
    cik_str: 1873875,
    ticker: "IXHL",
    company_name: "Incannex Healthcare Inc.",
  },
  {
    cik_str: 1649094,
    ticker: "PCVX",
    company_name: "Vaxcyte, Inc.",
  },
  {
    cik_str: 1666138,
    ticker: "ATKR",
    company_name: "Atkore Inc.",
  },
  {
    cik_str: 1655888,
    ticker: "OBDC",
    company_name: "Blue Owl Capital Corp",
  },
  {
    cik_str: 1584207,
    ticker: "OMF",
    company_name: "OneMain Holdings, Inc.",
  },
  {
    cik_str: 18349,
    ticker: "SNV",
    company_name: "SYNOVUS FINANCIAL CORP",
  },
  {
    cik_str: 763901,
    ticker: "BPOP",
    company_name: "POPULAR, INC.",
  },
  {
    cik_str: 15615,
    ticker: "MTZ",
    company_name: "MASTEC INC",
  },
  {
    cik_str: 824142,
    ticker: "AAON",
    company_name: "AAON, INC.",
  },
  {
    cik_str: 1015328,
    ticker: "WTFC",
    company_name: "WINTRUST FINANCIAL CORP",
  },
  {
    cik_str: 1530721,
    ticker: "CPRI",
    company_name: "Capri Holdings Ltd",
  },
  {
    cik_str: 887343,
    ticker: "COLB",
    company_name: "COLUMBIA BANKING SYSTEM, INC.",
  },
  {
    cik_str: 1569650,
    ticker: "OZK",
    company_name: "Bank OZK",
  },
  {
    cik_str: 1437774,
    ticker: "BZZUY",
    company_name: "BUZZI UNICEM S.p.A.",
  },
  {
    cik_str: 1794669,
    ticker: "FOUR",
    company_name: "Shift4 Payments, Inc.",
  },
  {
    cik_str: 1428336,
    ticker: "HQY",
    company_name: "HEALTHEQUITY, INC.",
  },
  {
    cik_str: 771992,
    ticker: "PAAS",
    company_name: "PAN AMERICAN SILVER CORP",
  },
  {
    cik_str: 1003078,
    ticker: "MSM",
    company_name: "MSC INDUSTRIAL DIRECT CO INC",
  },
  {
    cik_str: 1014739,
    ticker: "OPCH",
    company_name: "Option Care Health, Inc.",
  },
  {
    cik_str: 1094972,
    ticker: "UGP",
    company_name: "ULTRAPAR HOLDINGS INC",
  },
  {
    cik_str: 1553915,
    ticker: "CRCBY",
    company_name: "Chongqing Rural Commercial Bank Co., Ltd./ADR",
  },
  {
    cik_str: 1786431,
    ticker: "REYN",
    company_name: "Reynolds Consumer Products Inc.",
  },
  {
    cik_str: 98362,
    ticker: "TKR",
    company_name: "TIMKEN CO",
  },
  {
    cik_str: 1934850,
    ticker: "FG",
    company_name: "F&G Annuities & Life, Inc.",
  },
  {
    cik_str: 1157557,
    ticker: "CIG",
    company_name: "ENERGY CO OF MINAS GERAIS",
  },
  {
    cik_str: 1764046,
    ticker: "CLVT",
    company_name: "CLARIVATE Plc",
  },
  {
    cik_str: 22444,
    ticker: "CMC",
    company_name: "COMMERCIAL METALS Co",
  },
  {
    cik_str: 1448978,
    ticker: "SMBMY",
    company_name: "SembCorp Marine Ltd.",
  },
  {
    cik_str: 1782754,
    ticker: "AZEK",
    company_name: "AZEK Co Inc.",
  },
  {
    cik_str: 714310,
    ticker: "VLY",
    company_name: "VALLEY NATIONAL BANCORP",
  },
  {
    cik_str: 1592000,
    ticker: "ENLC",
    company_name: "EnLink Midstream, LLC",
  },
  {
    cik_str: 1528849,
    ticker: "RH",
    company_name: "RH",
  },
  {
    cik_str: 1046311,
    ticker: "CHH",
    company_name: "CHOICE HOTELS INTERNATIONAL INC /DE",
  },
  {
    cik_str: 913353,
    ticker: "CIGI",
    company_name: "Colliers International Group Inc.",
  },
  {
    cik_str: 1291733,
    ticker: "GOL",
    company_name: "Gol Intelligent Airlines Inc.",
  },
  {
    cik_str: 875357,
    ticker: "BOKF",
    company_name: "BOK FINANCIAL CORP",
  },
  {
    cik_str: 892553,
    ticker: "GTLS",
    company_name: "CHART INDUSTRIES INC",
  },
  {
    cik_str: 1562476,
    ticker: "TMHC",
    company_name: "Taylor Morrison Home Corp",
  },
  {
    cik_str: 1546354,
    ticker: "DUFRY",
    company_name: "Dufry AG/ADR",
  },
  {
    cik_str: 1422183,
    ticker: "FSK",
    company_name: "FS KKR Capital Corp",
  },
  {
    cik_str: 1299939,
    ticker: "CADE",
    company_name: "Cadence Bank",
  },
  {
    cik_str: 1609550,
    ticker: "INSP",
    company_name: "Inspire Medical Systems, Inc.",
  },
  {
    cik_str: 1675149,
    ticker: "AA",
    company_name: "Alcoa Corp",
  },
  {
    cik_str: 1159036,
    ticker: "HALO",
    company_name: "HALOZYME THERAPEUTICS, INC.",
  },
  {
    cik_str: 1419612,
    ticker: "SEDG",
    company_name: "SOLAREDGE TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1437153,
    ticker: "CUYTY",
    company_name: "Colruyt SA",
  },
  {
    cik_str: 1619762,
    ticker: "IGT",
    company_name: "International Game Technology PLC",
  },
  {
    cik_str: 1448893,
    ticker: "ESNT",
    company_name: "Essent Group Ltd.",
  },
  {
    cik_str: 1018963,
    ticker: "ATI",
    company_name: "ATI INC",
  },
  {
    cik_str: 1602065,
    ticker: "VNOM",
    company_name: "Viper Energy, Inc.",
  },
  {
    cik_str: 91767,
    ticker: "SON",
    company_name: "SONOCO PRODUCTS CO",
  },
  {
    cik_str: 1178819,
    ticker: "AGI",
    company_name: "ALAMOS GOLD INC",
  },
  {
    cik_str: 1477294,
    ticker: "ST",
    company_name: "Sensata Technologies Holding plc",
  },
  {
    cik_str: 1831097,
    ticker: "AGL",
    company_name: "agilon health, inc.",
  },
  {
    cik_str: 794367,
    ticker: "M",
    company_name: "Macy's, Inc.",
  },
  {
    cik_str: 1786842,
    ticker: "VNT",
    company_name: "Vontier Corp",
  },
  {
    cik_str: 1124941,
    ticker: "BECN",
    company_name: "BEACON ROOFING SUPPLY INC",
  },
  {
    cik_str: 1590714,
    ticker: "ESI",
    company_name: "Element Solutions Inc",
  },
  {
    cik_str: 1530950,
    ticker: "POST",
    company_name: "Post Holdings, Inc.",
  },
  {
    cik_str: 1676238,
    ticker: "BRZE",
    company_name: "Braze, Inc.",
  },
  {
    cik_str: 1597264,
    ticker: "BPMC",
    company_name: "Blueprint Medicines Corp",
  },
  {
    cik_str: 1282637,
    ticker: "NEU",
    company_name: "NEWMARKET CORP",
  },
  {
    cik_str: 1860742,
    ticker: "BLCO",
    company_name: "Bausch & Lomb Corp",
  },
  {
    cik_str: 895419,
    ticker: "WOLF",
    company_name: "WOLFSPEED, INC.",
  },
  {
    cik_str: 1142417,
    ticker: "NXST",
    company_name: "NEXSTAR MEDIA GROUP, INC.",
  },
  {
    cik_str: 1326380,
    ticker: "GME",
    company_name: "GameStop Corp.",
  },
  {
    cik_str: 1445305,
    ticker: "WK",
    company_name: "WORKIVA INC",
  },
  {
    cik_str: 1534504,
    ticker: "PBF",
    company_name: "PBF Energy Inc.",
  },
  {
    cik_str: 1866368,
    ticker: "CWAN",
    company_name: "Clearwater Analytics Holdings, Inc.",
  },
  {
    cik_str: 1411207,
    ticker: "ALSN",
    company_name: "Allison Transmission Holdings Inc",
  },
  {
    cik_str: 876437,
    ticker: "MTG",
    company_name: "MGIC INVESTMENT CORP",
  },
  {
    cik_str: 1437578,
    ticker: "BFAM",
    company_name: "BRIGHT HORIZONS FAMILY SOLUTIONS INC.",
  },
  {
    cik_str: 1476150,
    ticker: "TRNO",
    company_name: "Terreno Realty Corp",
  },
  {
    cik_str: 840489,
    ticker: "FCFS",
    company_name: "FirstCash Holdings, Inc.",
  },
  {
    cik_str: 1556593,
    ticker: "RITM",
    company_name: "Rithm Capital Corp.",
  },
  {
    cik_str: 1745431,
    ticker: "STNE",
    company_name: "StoneCo Ltd.",
  },
  {
    cik_str: 1521036,
    ticker: "LNTH",
    company_name: "Lantheus Holdings, Inc.",
  },
  {
    cik_str: 30625,
    ticker: "FLS",
    company_name: "FLOWSERVE CORP",
  },
  {
    cik_str: 1884082,
    ticker: "PSNY",
    company_name: "Polestar Automotive Holding UK PLC",
  },
  {
    cik_str: 1660280,
    ticker: "TENB",
    company_name: "Tenable Holdings, Inc.",
  },
  {
    cik_str: 1820872,
    ticker: "GBTG",
    company_name: "Global Business Travel Group, Inc.",
  },
  {
    cik_str: 1866581,
    ticker: "BROS",
    company_name: "Dutch Bros Inc.",
  },
  {
    cik_str: 931015,
    ticker: "PII",
    company_name: "Polaris Inc.",
  },
  {
    cik_str: 1877322,
    ticker: "ESAB",
    company_name: "ESAB Corp",
  },
  {
    cik_str: 1791863,
    ticker: "BEPC",
    company_name: "Brookfield Renewable Corp",
  },
  {
    cik_str: 1032220,
    ticker: "MMS",
    company_name: "MAXIMUS, INC.",
  },
  {
    cik_str: 354518,
    ticker: "EBCOY",
    company_name: "EBARA CORP /ADR/",
  },
  {
    cik_str: 1842022,
    ticker: "DTM",
    company_name: "DT Midstream, Inc.",
  },
  {
    cik_str: 1618563,
    ticker: "NSA",
    company_name: "National Storage Affiliates Trust",
  },
  {
    cik_str: 1489079,
    ticker: "ADOOY",
    company_name: "Adaro Energy PT/ADR/",
  },
  {
    cik_str: 1567683,
    ticker: "CWEN",
    company_name: "Clearway Energy, Inc.",
  },
  {
    cik_str: 1799208,
    ticker: "DNB",
    company_name: "Dun & Bradstreet Holdings, Inc.",
  },
  {
    cik_str: 1012100,
    ticker: "SEE",
    company_name: "SEALED AIR CORP/DE",
  },
  {
    cik_str: 89439,
    ticker: "MLI",
    company_name: "MUELLER INDUSTRIES INC",
  },
  {
    cik_str: 1057877,
    ticker: "IDA",
    company_name: "IDACORP INC",
  },
  {
    cik_str: 1580905,
    ticker: "IBP",
    company_name: "Installed Building Products, Inc.",
  },
  {
    cik_str: 1575515,
    ticker: "SFM",
    company_name: "Sprouts Farmers Market, Inc.",
  },
  {
    cik_str: 1439288,
    ticker: "ZWS",
    company_name: "Zurn Elkay Water Solutions Corp",
  },
  {
    cik_str: 911177,
    ticker: "CWST",
    company_name: "CASELLA WASTE SYSTEMS INC",
  },
  {
    cik_str: 1331520,
    ticker: "HOMB",
    company_name: "HOME BANCSHARES INC",
  },
  {
    cik_str: 1004434,
    ticker: "AMG",
    company_name: "AFFILIATED MANAGERS GROUP, INC.",
  },
  {
    cik_str: 1828108,
    ticker: "AUR",
    company_name: "Aurora Innovation, Inc.",
  },
  {
    cik_str: 729986,
    ticker: "UBSI",
    company_name: "UNITED BANKSHARES INC/WV",
  },
  {
    cik_str: 1286043,
    ticker: "KRG",
    company_name: "KITE REALTY GROUP TRUST",
  },
  {
    cik_str: 1111928,
    ticker: "IPGP",
    company_name: "IPG PHOTONICS CORP",
  },
  {
    cik_str: 1723690,
    ticker: "BILI",
    company_name: "Bilibili Inc.",
  },
  {
    cik_str: 1455955,
    ticker: "PUTKY",
    company_name: "PT United Tractors Tbk / ADR",
  },
  {
    cik_str: 1820877,
    ticker: "AIRC",
    company_name: "Apartment Income REIT Corp.",
  },
  {
    cik_str: 1833756,
    ticker: "DRS",
    company_name: "Leonardo DRS, Inc.",
  },
  {
    cik_str: 1297989,
    ticker: "EXLS",
    company_name: "ExlService Holdings, Inc.",
  },
  {
    cik_str: 1451505,
    ticker: "RIG",
    company_name: "Transocean Ltd.",
  },
  {
    cik_str: 1418819,
    ticker: "IRDM",
    company_name: "Iridium Communications Inc.",
  },
  {
    cik_str: 707179,
    ticker: "ONB",
    company_name: "OLD NATIONAL BANCORP /IN/",
  },
  {
    cik_str: 793952,
    ticker: "HOG",
    company_name: "HARLEY-DAVIDSON, INC.",
  },
  {
    cik_str: 766421,
    ticker: "ALK",
    company_name: "ALASKA AIR GROUP, INC.",
  },
  {
    cik_str: 887153,
    ticker: "SIM",
    company_name: "GRUPO SIMEC, S.A.B. de C.V.",
  },
  {
    cik_str: 52827,
    ticker: "RYN",
    company_name: "RAYONIER INC",
  },
  {
    cik_str: 1674416,
    ticker: "CRSP",
    company_name: "CRISPR Therapeutics AG",
  },
  {
    cik_str: 78150,
    ticker: "PHI",
    company_name: "PLDT Inc.",
  },
  {
    cik_str: 1495153,
    ticker: "MMYT",
    company_name: "MakeMyTrip Ltd",
  },
  {
    cik_str: 1050797,
    ticker: "COLM",
    company_name: "COLUMBIA SPORTSWEAR CO",
  },
  {
    cik_str: 85961,
    ticker: "R",
    company_name: "RYDER SYSTEM INC",
  },
  {
    cik_str: 1510599,
    ticker: "PDI",
    company_name: "PIMCO Dynamic Income Fund",
  },
  {
    cik_str: 37808,
    ticker: "FNB",
    company_name: "FNB CORP/PA/",
  },
  {
    cik_str: 1274173,
    ticker: "JHG",
    company_name: "JANUS HENDERSON GROUP PLC",
  },
  {
    cik_str: 1025996,
    ticker: "KRC",
    company_name: "KILROY REALTY CORP",
  },
  {
    cik_str: 1361113,
    ticker: "VRNS",
    company_name: "VARONIS SYSTEMS INC",
  },
  {
    cik_str: 1062066,
    ticker: "ALSMY",
    company_name: "ALSTOM",
  },
  {
    cik_str: 60519,
    ticker: "LPX",
    company_name: "LOUISIANA-PACIFIC CORP",
  },
  {
    cik_str: 1476204,
    ticker: "PECO",
    company_name: "Phillips Edison & Company, Inc.",
  },
  {
    cik_str: 314808,
    ticker: "VAL",
    company_name: "Valaris Ltd",
  },
  {
    cik_str: 1674910,
    ticker: "VVV",
    company_name: "VALVOLINE INC",
  },
  {
    cik_str: 833640,
    ticker: "POWI",
    company_name: "POWER INTEGRATIONS INC",
  },
  {
    cik_str: 868671,
    ticker: "GBCI",
    company_name: "GLACIER BANCORP, INC.",
  },
  {
    cik_str: 1144980,
    ticker: "ABG",
    company_name: "ASBURY AUTOMOTIVE GROUP INC",
  },
  {
    cik_str: 795266,
    ticker: "KBH",
    company_name: "KB HOME",
  },
  {
    cik_str: 1846832,
    ticker: "DLO",
    company_name: "dLocal Ltd",
  },
  {
    cik_str: 1736035,
    ticker: "BXSL",
    company_name: "Blackstone Secured Lending Fund",
  },
  {
    cik_str: 884614,
    ticker: "UGI",
    company_name: "UGI CORP /PA/",
  },
  {
    cik_str: 1363829,
    ticker: "ESGR",
    company_name: "Enstar Group LTD",
  },
  {
    cik_str: 924805,
    ticker: "FRHC",
    company_name: "Freedom Holding Corp.",
  },
  {
    cik_str: 1688568,
    ticker: "DXC",
    company_name: "DXC Technology Co",
  },
  {
    cik_str: 1659939,
    ticker: "ENIC",
    company_name: "Enel Chile S.A.",
  },
  {
    cik_str: 1819848,
    ticker: "JOBY",
    company_name: "Joby Aviation, Inc.",
  },
  {
    cik_str: 1049659,
    ticker: "SID",
    company_name: "NATIONAL STEEL CO",
  },
  {
    cik_str: 69891,
    ticker: "FIZZ",
    company_name: "NATIONAL BEVERAGE CORP",
  },
  {
    cik_str: 59558,
    ticker: "LNC",
    company_name: "LINCOLN NATIONAL CORP",
  },
  {
    cik_str: 1861560,
    ticker: "NUVL",
    company_name: "Nuvalent, Inc.",
  },
  {
    cik_str: 1070494,
    ticker: "ACAD",
    company_name: "ACADIA PHARMACEUTICALS INC",
  },
  {
    cik_str: 1906324,
    ticker: "QDEL",
    company_name: "QuidelOrtho Corp",
  },
  {
    cik_str: 1214816,
    ticker: "AXS",
    company_name: "AXIS CAPITAL HOLDINGS LTD",
  },
  {
    cik_str: 1128928,
    ticker: "FLO",
    company_name: "FLOWERS FOODS INC",
  },
  {
    cik_str: 102729,
    ticker: "VMI",
    company_name: "VALMONT INDUSTRIES INC",
  },
  {
    cik_str: 1328581,
    ticker: "BCC",
    company_name: "BOISE CASCADE Co",
  },
  {
    cik_str: 849869,
    ticker: "SLGN",
    company_name: "SILGAN HOLDINGS INC",
  },
  {
    cik_str: 57515,
    ticker: "LANC",
    company_name: "LANCASTER COLONY CORP",
  },
  {
    cik_str: 1552275,
    ticker: "SUN",
    company_name: "Sunoco LP",
  },
  {
    cik_str: 1280058,
    ticker: "BLKB",
    company_name: "BLACKBAUD INC",
  },
  {
    cik_str: 1516513,
    ticker: "DOCS",
    company_name: "Doximity, Inc.",
  },
  {
    cik_str: 70145,
    ticker: "NFG",
    company_name: "NATIONAL FUEL GAS CO",
  },
  {
    cik_str: 1776967,
    ticker: "NTCO",
    company_name: "Natura &Co Holding S.A.",
  },
  {
    cik_str: 889900,
    ticker: "PTEN",
    company_name: "PATTERSON UTI ENERGY INC",
  },
  {
    cik_str: 1520262,
    ticker: "ALKS",
    company_name: "Alkermes plc.",
  },
  {
    cik_str: 1157601,
    ticker: "MDGL",
    company_name: "MADRIGAL PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1122491,
    ticker: "BRFS",
    company_name: "BRF S.A.",
  },
  {
    cik_str: 277509,
    ticker: "FSS",
    company_name: "FEDERAL SIGNAL CORP /DE/",
  },
  {
    cik_str: 861878,
    ticker: "SRCL",
    company_name: "STERICYCLE INC",
  },
  {
    cik_str: 1296445,
    ticker: "ORA",
    company_name: "ORMAT TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1621563,
    ticker: "SUM",
    company_name: "Summit Materials, Inc.",
  },
  {
    cik_str: 1788348,
    ticker: "BIPC",
    company_name: "Brookfield Infrastructure Corp",
  },
  {
    cik_str: 932417,
    ticker: "VIAAY",
    company_name: "VIENNA INTERNATIONAL AIRPORT",
  },
  {
    cik_str: 56047,
    ticker: "KEX",
    company_name: "KIRBY CORP",
  },
  {
    cik_str: 817720,
    ticker: "SYNA",
    company_name: "SYNAPTICS Inc",
  },
  {
    cik_str: 1748797,
    ticker: "DOOO",
    company_name: "BRP Inc.",
  },
  {
    cik_str: 1442655,
    ticker: "NGKSY",
    company_name: "NGK Spark Plug Co., Ltd.",
  },
  {
    cik_str: 1639438,
    ticker: "CAVA",
    company_name: "CAVA GROUP, INC.",
  },
  {
    cik_str: 1487712,
    ticker: "AL",
    company_name: "AIR LEASE CORP",
  },
  {
    cik_str: 1745916,
    ticker: "PFSI",
    company_name: "PennyMac Financial Services, Inc.",
  },
  {
    cik_str: 1817358,
    ticker: "ASO",
    company_name: "Academy Sports & Outdoors, Inc.",
  },
  {
    cik_str: 1835681,
    ticker: "PWSC",
    company_name: "POWERSCHOOL HOLDINGS, INC.",
  },
  {
    cik_str: 1823529,
    ticker: "ACT",
    company_name: "Enact Holdings, Inc.",
  },
  {
    cik_str: 1674168,
    ticker: "HGV",
    company_name: "Hilton Grand Vacations Inc.",
  },
  {
    cik_str: 313143,
    ticker: "HAE",
    company_name: "HAEMONETICS CORP",
  },
  {
    cik_str: 9092,
    ticker: "BMI",
    company_name: "BADGER METER INC",
  },
  {
    cik_str: 772406,
    ticker: "CRUS",
    company_name: "CIRRUS LOGIC, INC.",
  },
  {
    cik_str: 913290,
    ticker: "FRO",
    company_name: "Frontline plc",
  },
  {
    cik_str: 1692115,
    ticker: "SWX",
    company_name: "Southwest Gas Holdings, Inc.",
  },
  {
    cik_str: 9326,
    ticker: "BCPC",
    company_name: "BALCHEM CORP",
  },
  {
    cik_str: 1722608,
    ticker: "IQ",
    company_name: "iQIYI, Inc.",
  },
  {
    cik_str: 832988,
    ticker: "SIG",
    company_name: "SIGNET JEWELERS LTD",
  },
  {
    cik_str: 1639300,
    ticker: "OLLI",
    company_name: "Ollie's Bargain Outlet Holdings, Inc.",
  },
  {
    cik_str: 822663,
    ticker: "IPAR",
    company_name: "INTER PARFUMS INC",
  },
  {
    cik_str: 1627223,
    ticker: "CC",
    company_name: "Chemours Co",
  },
  {
    cik_str: 16040,
    ticker: "CBT",
    company_name: "CABOT CORP",
  },
  {
    cik_str: 1378239,
    ticker: "OMAB",
    company_name: "Central North Airport Group",
  },
  {
    cik_str: 1670592,
    ticker: "YETI",
    company_name: "YETI Holdings, Inc.",
  },
  {
    cik_str: 1113232,
    ticker: "ACLS",
    company_name: "AXCELIS TECHNOLOGIES INC",
  },
  {
    cik_str: 944695,
    ticker: "THG",
    company_name: "HANOVER INSURANCE GROUP, INC.",
  },
  {
    cik_str: 8858,
    ticker: "AVT",
    company_name: "AVNET INC",
  },
  {
    cik_str: 1174169,
    ticker: "AQN",
    company_name: "ALGONQUIN POWER & UTILITIES CORP.",
  },
  {
    cik_str: 67887,
    ticker: "MOG-A",
    company_name: "MOOG INC.",
  },
  {
    cik_str: 784977,
    ticker: "POR",
    company_name: "PORTLAND GENERAL ELECTRIC CO /OR/",
  },
  {
    cik_str: 1590364,
    ticker: "FTAI",
    company_name: "FTAI Aviation Ltd.",
  },
  {
    cik_str: 1822479,
    ticker: "SHC",
    company_name: "Sotera Health Co",
  },
  {
    cik_str: 1910851,
    ticker: "RCM",
    company_name: "R1 RCM Inc. /DE",
  },
  {
    cik_str: 38725,
    ticker: "FELE",
    company_name: "FRANKLIN ELECTRIC CO INC",
  },
  {
    cik_str: 890564,
    ticker: "ASGN",
    company_name: "ASGN Inc",
  },
  {
    cik_str: 1868941,
    ticker: "FLNC",
    company_name: "Fluence Energy, Inc.",
  },
  {
    cik_str: 39368,
    ticker: "FUL",
    company_name: "FULLER H B CO",
  },
  {
    cik_str: 1307954,
    ticker: "HUN",
    company_name: "Huntsman CORP",
  },
  {
    cik_str: 1039828,
    ticker: "AEL",
    company_name: "AMERICAN EQUITY INVESTMENT LIFE HOLDING CO",
  },
  {
    cik_str: 893538,
    ticker: "SM",
    company_name: "SM Energy Co",
  },
  {
    cik_str: 7431,
    ticker: "AWI",
    company_name: "ARMSTRONG WORLD INDUSTRIES INC",
  },
  {
    cik_str: 1365135,
    ticker: "WU",
    company_name: "Western Union CO",
  },
  {
    cik_str: 933136,
    ticker: "COOP",
    company_name: "Mr. Cooper Group Inc.",
  },
  {
    cik_str: 1029199,
    ticker: "EEFT",
    company_name: "EURONET WORLDWIDE, INC.",
  },
  {
    cik_str: 88205,
    ticker: "SPXC",
    company_name: "SPX Technologies, Inc.",
  },
  {
    cik_str: 1477720,
    ticker: "ASAN",
    company_name: "Asana, Inc.",
  },
  {
    cik_str: 1809104,
    ticker: "ALIT",
    company_name: "Alight, Inc. / Delaware",
  },
  {
    cik_str: 1674862,
    ticker: "ASH",
    company_name: "ASHLAND INC.",
  },
  {
    cik_str: 1628171,
    ticker: "RVMD",
    company_name: "Revolution Medicines, Inc.",
  },
  {
    cik_str: 1692063,
    ticker: "SNDR",
    company_name: "Schneider National, Inc.",
  },
  {
    cik_str: 1698990,
    ticker: "MGY",
    company_name: "Magnolia Oil & Gas Corp",
  },
  {
    cik_str: 356309,
    ticker: "NJR",
    company_name: "NEW JERSEY RESOURCES CORP",
  },
  {
    cik_str: 1747009,
    ticker: "ETRN",
    company_name: "Equitrans Midstream Corp",
  },
  {
    cik_str: 1000753,
    ticker: "NSP",
    company_name: "INSPERITY, INC.",
  },
  {
    cik_str: 851520,
    ticker: "EXPO",
    company_name: "EXPONENT INC",
  },
  {
    cik_str: 1837429,
    ticker: "BNRE",
    company_name: "Brookfield Reinsurance Ltd.",
  },
  {
    cik_str: 36029,
    ticker: "FFIN",
    company_name: "FIRST FINANCIAL BANKSHARES INC",
  },
  {
    cik_str: 890926,
    ticker: "RDN",
    company_name: "RADIAN GROUP INC",
  },
  {
    cik_str: 1800227,
    ticker: "IAC",
    company_name: "IAC Inc.",
  },
  {
    cik_str: 1710864,
    ticker: "MSSMY",
    company_name: "Misumi Group Inc./ADR",
  },
  {
    cik_str: 1013857,
    ticker: "PEGA",
    company_name: "PEGASYSTEMS INC",
  },
  {
    cik_str: 1345105,
    ticker: "CPA",
    company_name: "Copa Holdings, S.A.",
  },
  {
    cik_str: 1394832,
    ticker: "ATS",
    company_name: "ATS Corp /ATS",
  },
  {
    cik_str: 1018840,
    ticker: "ANF",
    company_name: "ABERCROMBIE & FITCH CO /DE/",
  },
  {
    cik_str: 816761,
    ticker: "TDC",
    company_name: "TERADATA CORP /DE/",
  },
  {
    cik_str: 1038074,
    ticker: "SLAB",
    company_name: "SILICON LABORATORIES INC.",
  },
  {
    cik_str: 1720671,
    ticker: "HCP",
    company_name: "HashiCorp, Inc.",
  },
  {
    cik_str: 1434588,
    ticker: "LOPE",
    company_name: "Grand Canyon Education, Inc.",
  },
  {
    cik_str: 1717161,
    ticker: "CEPU",
    company_name: "CENTRAL PUERTO S.A.",
  },
  {
    cik_str: 1867072,
    ticker: "KD",
    company_name: "Kyndryl Holdings, Inc.",
  },
  {
    cik_str: 1806837,
    ticker: "VERX",
    company_name: "Vertex, Inc.",
  },
  {
    cik_str: 1447945,
    ticker: "ASMVY",
    company_name: "ASM Pacific Technology Ltd.",
  },
  {
    cik_str: 711377,
    ticker: "NEOG",
    company_name: "NEOGEN CORP",
  },
  {
    cik_str: 1638833,
    ticker: "SGRY",
    company_name: "Surgery Partners, Inc.",
  },
  {
    cik_str: 1429937,
    ticker: "BTG",
    company_name: "B2GOLD CORP",
  },
  {
    cik_str: 949870,
    ticker: "SAM",
    company_name: "BOSTON BEER CO INC",
  },
  {
    cik_str: 90896,
    ticker: "SKY",
    company_name: "Skyline Champion Corp",
  },
  {
    cik_str: 1381668,
    ticker: "TFSL",
    company_name: "TFS Financial CORP",
  },
  {
    cik_str: 40211,
    ticker: "GATX",
    company_name: "GATX CORP",
  },
  {
    cik_str: 42582,
    ticker: "GT",
    company_name: "GOODYEAR TIRE & RUBBER CO /OH/",
  },
  {
    cik_str: 1364479,
    ticker: "HRI",
    company_name: "HERC HOLDINGS INC",
  },
  {
    cik_str: 1071321,
    ticker: "TKC",
    company_name: "TURKCELL ILETISIM HIZMETLERI A S",
  },
  {
    cik_str: 1981792,
    ticker: "HHH",
    company_name: "Howard Hughes Holdings Inc.",
  },
  {
    cik_str: 1032033,
    ticker: "SLM",
    company_name: "SLM Corp",
  },
  {
    cik_str: 30697,
    ticker: "WEN",
    company_name: "Wendy's Co",
  },
  {
    cik_str: 1273813,
    ticker: "AGO",
    company_name: "ASSURED GUARANTY LTD",
  },
  {
    cik_str: 856982,
    ticker: "MMSI",
    company_name: "MERIT MEDICAL SYSTEMS INC",
  },
  {
    cik_str: 1704715,
    ticker: "AMR",
    company_name: "Alpha Metallurgical Resources, Inc.",
  },
  {
    cik_str: 1636519,
    ticker: "MSGS",
    company_name: "Madison Square Garden Sports Corp.",
  },
  {
    cik_str: 1717393,
    ticker: "CAAP",
    company_name: "CORPORACION AMERICA AIRPORTS S.A.",
  },
  {
    cik_str: 1757073,
    ticker: "NVST",
    company_name: "Envista Holdings Corp",
  },
  {
    cik_str: 1104506,
    ticker: "INSM",
    company_name: "INSMED Inc",
  },
  {
    cik_str: 1031203,
    ticker: "GPI",
    company_name: "GROUP 1 AUTOMOTIVE INC",
  },
  {
    cik_str: 750577,
    ticker: "HWC",
    company_name: "HANCOCK WHITNEY CORP",
  },
  {
    cik_str: 927003,
    ticker: "AEIS",
    company_name: "ADVANCED ENERGY INDUSTRIES INC",
  },
  {
    cik_str: 1726122,
    ticker: "CEF",
    company_name: "Sprott Physical Gold & Silver Trust",
  },
  {
    cik_str: 1611647,
    ticker: "FRPT",
    company_name: "Freshpet, Inc.",
  },
  {
    cik_str: 1672013,
    ticker: "GOLF",
    company_name: "Acushnet Holdings Corp.",
  },
  {
    cik_str: 101382,
    ticker: "UMBF",
    company_name: "UMB FINANCIAL CORP",
  },
  {
    cik_str: 1469367,
    ticker: "RUN",
    company_name: "Sunrun Inc.",
  },
  {
    cik_str: 1576263,
    ticker: "MRTX",
    company_name: "Mirati Therapeutics, Inc.",
  },
  {
    cik_str: 1822993,
    ticker: "JXN",
    company_name: "Jackson Financial Inc.",
  },
  {
    cik_str: 1507605,
    ticker: "MARA",
    company_name: "MARATHON DIGITAL HOLDINGS, INC.",
  },
  {
    cik_str: 919012,
    ticker: "AEO",
    company_name: "AMERICAN EAGLE OUTFITTERS INC",
  },
  {
    cik_str: 67716,
    ticker: "MDU",
    company_name: "MDU RESOURCES GROUP INC",
  },
  {
    cik_str: 1728951,
    ticker: "EPRT",
    company_name: "ESSENTIAL PROPERTIES REALTY TRUST, INC.",
  },
  {
    cik_str: 1656081,
    ticker: "DAVA",
    company_name: "Endava plc",
  },
  {
    cik_str: 1702744,
    ticker: "SMPL",
    company_name: "Simply Good Foods Co",
  },
  {
    cik_str: 773141,
    ticker: "MDC",
    company_name: "M.D.C. HOLDINGS, INC.",
  },
  {
    cik_str: 1289308,
    ticker: "ENS",
    company_name: "EnerSys",
  },
  {
    cik_str: 1626115,
    ticker: "PJT",
    company_name: "PJT Partners Inc.",
  },
  {
    cik_str: 874866,
    ticker: "CRVL",
    company_name: "CORVEL CORP",
  },
  {
    cik_str: 1585364,
    ticker: "PRGO",
    company_name: "PERRIGO Co plc",
  },
  {
    cik_str: 97216,
    ticker: "TEX",
    company_name: "TEREX CORP",
  },
  {
    cik_str: 921738,
    ticker: "PENN",
    company_name: "PENN Entertainment, Inc.",
  },
  {
    cik_str: 1495798,
    ticker: "LCCTF",
    company_name: "L'Occitane International S.A./ADR/",
  },
  {
    cik_str: 1494728,
    ticker: "PSLV",
    company_name: "Sprott Physical Silver Trust",
  },
  {
    cik_str: 1412558,
    ticker: "EVO",
    company_name: "Evotec SE",
  },
  {
    cik_str: 1418121,
    ticker: "APLE",
    company_name: "Apple Hospitality REIT, Inc.",
  },
  {
    cik_str: 1839439,
    ticker: "PYCR",
    company_name: "PAYCOR HCM, INC.",
  },
  {
    cik_str: 1545851,
    ticker: "CPG",
    company_name: "Crescent Point Energy Corp.",
  },
  {
    cik_str: 78890,
    ticker: "BCO",
    company_name: "BRINKS CO",
  },
  {
    cik_str: 1739445,
    ticker: "ACA",
    company_name: "Arcosa, Inc.",
  },
  {
    cik_str: 1110452,
    ticker: "AFLYY",
    company_name: "AIR FRANCE-KLM /FI",
  },
  {
    cik_str: 1192448,
    ticker: "GKOS",
    company_name: "GLAUKOS Corp",
  },
  {
    cik_str: 1816007,
    ticker: "LU",
    company_name: "Lufax Holding Ltd",
  },
  {
    cik_str: 1596967,
    ticker: "MC",
    company_name: "Moelis & Co",
  },
  {
    cik_str: 1841804,
    ticker: "INST",
    company_name: "INSTRUCTURE HOLDINGS, INC.",
  },
  {
    cik_str: 1061630,
    ticker: "BXMT",
    company_name: "BLACKSTONE MORTGAGE TRUST, INC.",
  },
  {
    cik_str: 871763,
    ticker: "MAN",
    company_name: "ManpowerGroup Inc.",
  },
  {
    cik_str: 1496963,
    ticker: "SQSP",
    company_name: "Squarespace, Inc.",
  },
  {
    cik_str: 1863105,
    ticker: "ESMT",
    company_name: "EngageSmart, Inc.",
  },
  {
    cik_str: 1109345,
    ticker: "NVMI",
    company_name: "NOVA LTD.",
  },
  {
    cik_str: 776867,
    ticker: "WTM",
    company_name: "WHITE MOUNTAINS INSURANCE GROUP LTD",
  },
  {
    cik_str: 1666134,
    ticker: "BL",
    company_name: "BLACKLINE, INC.",
  },
  {
    cik_str: 1380366,
    ticker: "GNNDY",
    company_name: "GN STORE NORD A/S",
  },
  {
    cik_str: 1647639,
    ticker: "UPST",
    company_name: "Upstart Holdings, Inc.",
  },
  {
    cik_str: 1381640,
    ticker: "MLCO",
    company_name: "Melco Resorts & Entertainment LTD",
  },
  {
    cik_str: 1515673,
    ticker: "RARE",
    company_name: "Ultragenyx Pharmaceutical Inc.",
  },
  {
    cik_str: 1023514,
    ticker: "HMY",
    company_name: "HARMONY GOLD MINING CO LTD",
  },
  {
    cik_str: 1769731,
    ticker: "AMTD",
    company_name: "AMTD IDEA GROUP",
  },
  {
    cik_str: 1158449,
    ticker: "AAP",
    company_name: "ADVANCE AUTO PARTS INC",
  },
  {
    cik_str: 1531048,
    ticker: "NARI",
    company_name: "Inari Medical, Inc.",
  },
  {
    cik_str: 1130464,
    ticker: "BKH",
    company_name: "BLACK HILLS CORP /SD/",
  },
  {
    cik_str: 81362,
    ticker: "KWR",
    company_name: "QUAKER CHEMICAL CORP",
  },
  {
    cik_str: 1786909,
    ticker: "SBSW",
    company_name: "Sibanye Stillwater Ltd",
  },
  {
    cik_str: 1108426,
    ticker: "PNM",
    company_name: "PNM RESOURCES INC",
  },
  {
    cik_str: 1338749,
    ticker: "PCH",
    company_name: "POTLATCHDELTIC CORP",
  },
  {
    cik_str: 1564538,
    ticker: "GRP-UN",
    company_name: "GRANITE REAL ESTATE INVESTMENT TRUST",
  },
  {
    cik_str: 1178879,
    ticker: "FOLD",
    company_name: "AMICUS THERAPEUTICS, INC.",
  },
  {
    cik_str: 46765,
    ticker: "HP",
    company_name: "Helmerich & Payne, Inc.",
  },
  {
    cik_str: 1682745,
    ticker: "VRRM",
    company_name: "VERRA MOBILITY Corp",
  },
  {
    cik_str: 1372612,
    ticker: "BOX",
    company_name: "BOX INC",
  },
  {
    cik_str: 1061983,
    ticker: "CYTK",
    company_name: "CYTOKINETICS INC",
  },
  {
    cik_str: 1104485,
    ticker: "NOG",
    company_name: "NORTHERN OIL & GAS, INC.",
  },
  {
    cik_str: 25232,
    ticker: "CUZ",
    company_name: "COUSINS PROPERTIES INC",
  },
  {
    cik_str: 1560327,
    ticker: "RPD",
    company_name: "Rapid7, Inc.",
  },
  {
    cik_str: 1581990,
    ticker: "PAGP",
    company_name: "PLAINS GP HOLDINGS LP",
  },
  {
    cik_str: 1336917,
    ticker: "UAA",
    company_name: "Under Armour, Inc.",
  },
  {
    cik_str: 1955520,
    ticker: "KNF",
    company_name: "Knife River Corp",
  },
  {
    cik_str: 1577526,
    ticker: "AI",
    company_name: "C3.ai, Inc.",
  },
  {
    cik_str: 1821586,
    ticker: "MLTX",
    company_name: "MoonLake Immunotherapeutics",
  },
  {
    cik_str: 814453,
    ticker: "NWL",
    company_name: "NEWELL BRANDS INC.",
  },
  {
    cik_str: 1122976,
    ticker: "AVNT",
    company_name: "AVIENT CORP",
  },
  {
    cik_str: 1284812,
    ticker: "CNS",
    company_name: "COHEN & STEERS, INC.",
  },
  {
    cik_str: 351569,
    ticker: "ABCB",
    company_name: "Ameris Bancorp",
  },
  {
    cik_str: 1045450,
    ticker: "EPR",
    company_name: "EPR PROPERTIES",
  },
  {
    cik_str: 29002,
    ticker: "DIOD",
    company_name: "DIODES INC /DEL/",
  },
  {
    cik_str: 1396440,
    ticker: "MAIN",
    company_name: "Main Street Capital CORP",
  },
  {
    cik_str: 821130,
    ticker: "USM",
    company_name: "UNITED STATES CELLULAR CORP",
  },
  {
    cik_str: 825313,
    ticker: "AB",
    company_name: "ALLIANCEBERNSTEIN HOLDING L.P.",
  },
  {
    cik_str: 3453,
    ticker: "MATX",
    company_name: "Matson, Inc.",
  },
  {
    cik_str: 1111335,
    ticker: "VC",
    company_name: "VISTEON CORP",
  },
  {
    cik_str: 1430723,
    ticker: "SFBS",
    company_name: "ServisFirst Bancshares, Inc.",
  },
  {
    cik_str: 1609253,
    ticker: "CRC",
    company_name: "California Resources Corp",
  },
  {
    cik_str: 1355444,
    ticker: "ERJ",
    company_name: "EMBRAER S.A.",
  },
  {
    cik_str: 1368622,
    ticker: "AVAV",
    company_name: "AeroVironment Inc",
  },
  {
    cik_str: 857855,
    ticker: "UCBI",
    company_name: "UNITED COMMUNITY BANKS INC",
  },
  {
    cik_str: 1698535,
    ticker: "NXE",
    company_name: "NexGen Energy Ltd.",
  },
  {
    cik_str: 1604481,
    ticker: "EURN",
    company_name: "Euronav NV",
  },
  {
    cik_str: 1446694,
    ticker: "SHWDY",
    company_name: "Showa Denko K.K./ADR",
  },
  {
    cik_str: 1902733,
    ticker: "NCNO",
    company_name: "nCino, Inc.",
  },
  {
    cik_str: 58492,
    ticker: "LEG",
    company_name: "LEGGETT & PLATT INC",
  },
  {
    cik_str: 1508633,
    ticker: "IHCPF",
    company_name: "Inchcape plc/ADR",
  },
  {
    cik_str: 1290109,
    ticker: "LPL",
    company_name: "LG Display Co., Ltd.",
  },
  {
    cik_str: 1587732,
    ticker: "OGS",
    company_name: "ONE Gas, Inc.",
  },
  {
    cik_str: 66756,
    ticker: "ALE",
    company_name: "ALLETE INC",
  },
  {
    cik_str: 1579428,
    ticker: "AXSM",
    company_name: "Axsome Therapeutics, Inc.",
  },
  {
    cik_str: 1834048,
    ticker: "ASAI",
    company_name: "Sendas Distributor S.A.",
  },
  {
    cik_str: 1466085,
    ticker: "IRT",
    company_name: "INDEPENDENCE REALTY TRUST, INC.",
  },
  {
    cik_str: 933974,
    ticker: "AZTA",
    company_name: "Azenta, Inc.",
  },
  {
    cik_str: 1628908,
    ticker: "EVH",
    company_name: "Evolent Health, Inc.",
  },
  {
    cik_str: 88121,
    ticker: "SEB",
    company_name: "SEABOARD CORP /DE/",
  },
  {
    cik_str: 1497770,
    ticker: "WD",
    company_name: "Walker & Dunlop, Inc.",
  },
  {
    cik_str: 1158324,
    ticker: "CCOI",
    company_name: "COGENT COMMUNICATIONS HOLDINGS, INC.",
  },
  {
    cik_str: 1511337,
    ticker: "RLJ",
    company_name: "RLJ Lodging Trust",
  },
  {
    cik_str: 1030894,
    ticker: "CLS",
    company_name: "CELESTICA INC",
  },
  {
    cik_str: 816956,
    ticker: "CNMD",
    company_name: "CONMED Corp",
  },
  {
    cik_str: 912242,
    ticker: "MAC",
    company_name: "MACERICH CO",
  },
  {
    cik_str: 799292,
    ticker: "MHO",
    company_name: "M/I HOMES, INC.",
  },
  {
    cik_str: 1856314,
    ticker: "YOU",
    company_name: "Clear Secure, Inc.",
  },
  {
    cik_str: 1364885,
    ticker: "SPR",
    company_name: "Spirit AeroSystems Holdings, Inc.",
  },
  {
    cik_str: 1782170,
    ticker: "RELY",
    company_name: "Remitly Global, Inc.",
  },
  {
    cik_str: 1969373,
    ticker: "VTMX",
    company_name: "Vesta Real Estate Corporation, S.A.B. de C.V.",
  },
  {
    cik_str: 717954,
    ticker: "UNF",
    company_name: "UNIFIRST CORP",
  },
  {
    cik_str: 825542,
    ticker: "SMG",
    company_name: "SCOTTS MIRACLE-GRO CO",
  },
  {
    cik_str: 1712807,
    ticker: "PAGS",
    company_name: "PagSeguro Digital Ltd.",
  },
  {
    cik_str: 1617406,
    ticker: "PK",
    company_name: "Park Hotels & Resorts Inc.",
  },
  {
    cik_str: 1169561,
    ticker: "CVLT",
    company_name: "COMMVAULT SYSTEMS INC",
  },
  {
    cik_str: 1621434,
    ticker: "BSM",
    company_name: "Black Stone Minerals, L.P.",
  },
  {
    cik_str: 1685040,
    ticker: "BHF",
    company_name: "Brighthouse Financial, Inc.",
  },
  {
    cik_str: 1564902,
    ticker: "SEAS",
    company_name: "SeaWorld Entertainment, Inc.",
  },
  {
    cik_str: 1477449,
    ticker: "TDOC",
    company_name: "Teladoc Health, Inc.",
  },
  {
    cik_str: 1126956,
    ticker: "SR",
    company_name: "SPIRE INC",
  },
  {
    cik_str: 912615,
    ticker: "URBN",
    company_name: "URBAN OUTFITTERS INC",
  },
  {
    cik_str: 1527636,
    ticker: "ATHM",
    company_name: "Autohome Inc.",
  },
  {
    cik_str: 1949543,
    ticker: "STR",
    company_name: "Sitio Royalties Corp.",
  },
  {
    cik_str: 928876,
    ticker: "TSEM",
    company_name: "TOWER SEMICONDUCTOR LTD",
  },
  {
    cik_str: 1648257,
    ticker: "HCM",
    company_name: "HUTCHMED (China) Ltd",
  },
  {
    cik_str: 1811414,
    ticker: "QS",
    company_name: "QuantumScape Corp",
  },
  {
    cik_str: 785956,
    ticker: "JJSF",
    company_name: "J&J SNACK FOODS CORP",
  },
  {
    cik_str: 1433660,
    ticker: "JBT",
    company_name: "John Bean Technologies CORP",
  },
  {
    cik_str: 1592438,
    ticker: "ROYMY",
    company_name: "Royal Mail plc/ADR",
  },
  {
    cik_str: 780571,
    ticker: "ITRI",
    company_name: "ITRON, INC.",
  },
  {
    cik_str: 98222,
    ticker: "TDW",
    company_name: "TIDEWATER INC",
  },
  {
    cik_str: 1551306,
    ticker: "PGNY",
    company_name: "Progyny, Inc.",
  },
  {
    cik_str: 1576280,
    ticker: "GH",
    company_name: "Guardant Health, Inc.",
  },
  {
    cik_str: 771497,
    ticker: "ABM",
    company_name: "ABM INDUSTRIES INC /DE/",
  },
  {
    cik_str: 1821825,
    ticker: "OGN",
    company_name: "Organon & Co.",
  },
  {
    cik_str: 745308,
    ticker: "JOE",
    company_name: "ST JOE Co",
  },
  {
    cik_str: 917520,
    ticker: "IART",
    company_name: "INTEGRA LIFESCIENCES HOLDINGS CORP",
  },
  {
    cik_str: 1012019,
    ticker: "RUSHA",
    company_name: "RUSH ENTERPRISES INC \\TX\\",
  },
  {
    cik_str: 1689923,
    ticker: "AYX",
    company_name: "Alteryx, Inc.",
  },
  {
    cik_str: 850460,
    ticker: "WIRE",
    company_name: "ENCORE WIRE CORP",
  },
  {
    cik_str: 1424182,
    ticker: "BNL",
    company_name: "Broadstone Net Lease, Inc.",
  },
  {
    cik_str: 860413,
    ticker: "FIBK",
    company_name: "FIRST INTERSTATE BANCSYSTEM INC",
  },
  {
    cik_str: 1633978,
    ticker: "LITE",
    company_name: "Lumentum Holdings Inc.",
  },
  {
    cik_str: 1718512,
    ticker: "GTES",
    company_name: "Gates Industrial Corp plc",
  },
  {
    cik_str: 1195737,
    ticker: "NEA",
    company_name: "Nuveen AMT-Free Quality Municipal Income Fund",
  },
  {
    cik_str: 1670541,
    ticker: "ADNT",
    company_name: "Adient plc",
  },
  {
    cik_str: 1760965,
    ticker: "KTB",
    company_name: "Kontoor Brands, Inc.",
  },
  {
    cik_str: 1090633,
    ticker: "IIJIY",
    company_name: "INTERNET INITIATIVE JAPAN INC",
  },
  {
    cik_str: 1737706,
    ticker: "SDRL",
    company_name: "Seadrill Ltd",
  },
  {
    cik_str: 67215,
    ticker: "DY",
    company_name: "DYCOM INDUSTRIES INC",
  },
  {
    cik_str: 1492298,
    ticker: "SBRA",
    company_name: "Sabra Health Care REIT, Inc.",
  },
  {
    cik_str: 1828365,
    ticker: "RLX",
    company_name: "RLX Technology Inc.",
  },
  {
    cik_str: 1258602,
    ticker: "NNI",
    company_name: "NELNET INC",
  },
  {
    cik_str: 1800667,
    ticker: "FROG",
    company_name: "JFrog Ltd",
  },
  {
    cik_str: 886346,
    ticker: "KAI",
    company_name: "KADANT INC",
  },
  {
    cik_str: 1466593,
    ticker: "OTTR",
    company_name: "Otter Tail Corp",
  },
  {
    cik_str: 1711279,
    ticker: "KRYS",
    company_name: "Krystal Biotech, Inc.",
  },
  {
    cik_str: 1522540,
    ticker: "MQ",
    company_name: "Marqeta, Inc.",
  },
  {
    cik_str: 1561680,
    ticker: "TPH",
    company_name: "Tri Pointe Homes, Inc.",
  },
  {
    cik_str: 1114483,
    ticker: "ITGR",
    company_name: "Integer Holdings Corp",
  },
  {
    cik_str: 17843,
    ticker: "CRS",
    company_name: "CARPENTER TECHNOLOGY CORP",
  },
  {
    cik_str: 1561894,
    ticker: "HASI",
    company_name: "Hannon Armstrong Sustainable Infrastructure Capital, Inc.",
  },
  {
    cik_str: 1517375,
    ticker: "SPT",
    company_name: "Sprout Social, Inc.",
  },
  {
    cik_str: 1801368,
    ticker: "MP",
    company_name: "MP Materials Corp. / DE",
  },
  {
    cik_str: 1167419,
    ticker: "RIOT",
    company_name: "Riot Platforms, Inc.",
  },
  {
    cik_str: 1835539,
    ticker: "OLK",
    company_name: "Olink Holding AB (publ)",
  },
  {
    cik_str: 797721,
    ticker: "VSAT",
    company_name: "VIASAT INC",
  },
  {
    cik_str: 103730,
    ticker: "VSH",
    company_name: "VISHAY INTERTECHNOLOGY INC",
  },
  {
    cik_str: 1765159,
    ticker: "NVEI",
    company_name: "Nuvei Corp",
  },
  {
    cik_str: 1600438,
    ticker: "GMS",
    company_name: "GMS Inc.",
  },
  {
    cik_str: 1993004,
    ticker: "NWE",
    company_name: "NorthWestern Energy Group, Inc.",
  },
  {
    cik_str: 1592386,
    ticker: "VIRT",
    company_name: "Virtu Financial, Inc.",
  },
  {
    cik_str: 861842,
    ticker: "CATY",
    company_name: "CATHAY GENERAL BANCORP",
  },
  {
    cik_str: 315709,
    ticker: "IBOC",
    company_name: "INTERNATIONAL BANCSHARES CORP",
  },
  {
    cik_str: 105132,
    ticker: "WDFC",
    company_name: "WD 40 CO",
  },
  {
    cik_str: 935036,
    ticker: "ACIW",
    company_name: "ACI WORLDWIDE, INC.",
  },
  {
    cik_str: 1828016,
    ticker: "PLTK",
    company_name: "Playtika Holding Corp.",
  },
  {
    cik_str: 1070412,
    ticker: "CNX",
    company_name: "CNX Resources Corp",
  },
  {
    cik_str: 7789,
    ticker: "ASB",
    company_name: "ASSOCIATED BANC-CORP",
  },
  {
    cik_str: 1013131,
    ticker: "BVN",
    company_name: "BUENAVENTURA MINING CO INC",
  },
  {
    cik_str: 763744,
    ticker: "LCII",
    company_name: "LCI INDUSTRIES",
  },
  {
    cik_str: 1553920,
    ticker: "BBMPY",
    company_name: "BBMG Corporation/ADR",
  },
  {
    cik_str: 913142,
    ticker: "BDC",
    company_name: "BELDEN INC.",
  },
  {
    cik_str: 1376139,
    ticker: "CVI",
    company_name: "CVR ENERGY INC",
  },
  {
    cik_str: 1230245,
    ticker: "PIPR",
    company_name: "PIPER SANDLER COMPANIES",
  },
  {
    cik_str: 1714899,
    ticker: "DNLI",
    company_name: "Denali Therapeutics Inc.",
  },
  {
    cik_str: 1094831,
    ticker: "BGC",
    company_name: "BGC Group, Inc.",
  },
  {
    cik_str: 1807192,
    ticker: "CD",
    company_name: "Chindata Group Holdings Ltd",
  },
  {
    cik_str: 1671927,
    ticker: "IMCR",
    company_name: "Immunocore Holdings plc",
  },
  {
    cik_str: 1549107,
    ticker: "MANU",
    company_name: "Manchester United plc",
  },
  {
    cik_str: 871459,
    ticker: "DFIHY",
    company_name: "DAIRY FARM INTERNATIONAL HOLDINGS LTD /FI",
  },
  {
    cik_str: 1664703,
    ticker: "BE",
    company_name: "Bloom Energy Corp",
  },
  {
    cik_str: 913241,
    ticker: "SHOO",
    company_name: "STEVEN MADDEN, LTD.",
  },
  {
    cik_str: 1742924,
    ticker: "LTHM",
    company_name: "Livent Corp.",
  },
  {
    cik_str: 1836470,
    ticker: "SRAD",
    company_name: "Sportradar Group AG",
  },
  {
    cik_str: 1807794,
    ticker: "CRDO",
    company_name: "Credo Technology Group Holding Ltd",
  },
  {
    cik_str: 760498,
    ticker: "BANF",
    company_name: "BANCFIRST CORP /OK/",
  },
  {
    cik_str: 56978,
    ticker: "KLIC",
    company_name: "KULICKE & SOFFA INDUSTRIES INC",
  },
  {
    cik_str: 1039399,
    ticker: "FORM",
    company_name: "FORMFACTOR INC",
  },
  {
    cik_str: 1524358,
    ticker: "VAC",
    company_name: "MARRIOTT VACATIONS WORLDWIDE Corp",
  },
  {
    cik_str: 1624794,
    ticker: "CSWI",
    company_name: "CSW INDUSTRIALS, INC.",
  },
  {
    cik_str: 1088856,
    ticker: "CORT",
    company_name: "CORCEPT THERAPEUTICS INC",
  },
  {
    cik_str: 1164863,
    ticker: "NPO",
    company_name: "Enpro Inc.",
  },
  {
    cik_str: 1366868,
    ticker: "GSAT",
    company_name: "Globalstar, Inc.",
  },
  {
    cik_str: 1574540,
    ticker: "DOC",
    company_name: "Physicians Realty Trust",
  },
  {
    cik_str: 885639,
    ticker: "KSS",
    company_name: "KOHLS Corp",
  },
  {
    cik_str: 1657853,
    ticker: "HTZ",
    company_name: "HERTZ GLOBAL HOLDINGS, INC",
  },
  {
    cik_str: 1483934,
    ticker: "STNG",
    company_name: "Scorpio Tankers Inc.",
  },
  {
    cik_str: 806628,
    ticker: "DNP",
    company_name: "DNP SELECT INCOME FUND INC",
  },
  {
    cik_str: 1796022,
    ticker: "STEP",
    company_name: "StepStone Group Inc.",
  },
  {
    cik_str: 1569345,
    ticker: "CXM",
    company_name: "Sprinklr, Inc.",
  },
  {
    cik_str: 896262,
    ticker: "AMED",
    company_name: "AMEDISYS INC",
  },
  {
    cik_str: 1064728,
    ticker: "BTU",
    company_name: "PEABODY ENERGY CORP",
  },
  {
    cik_str: 860748,
    ticker: "KMPR",
    company_name: "KEMPER Corp",
  },
  {
    cik_str: 1417398,
    ticker: "HI",
    company_name: "Hillenbrand, Inc.",
  },
  {
    cik_str: 1517302,
    ticker: "APAM",
    company_name: "Artisan Partners Asset Management Inc.",
  },
  {
    cik_str: 886977,
    ticker: "MEOH",
    company_name: "METHANEX CORP",
  },
  {
    cik_str: 1824920,
    ticker: "IONQ",
    company_name: "IonQ, Inc.",
  },
  {
    cik_str: 1084048,
    ticker: "ZD",
    company_name: "ZIFF DAVIS, INC.",
  },
  {
    cik_str: 1388658,
    ticker: "IRTC",
    company_name: "iRhythm Technologies, Inc.",
  },
  {
    cik_str: 1694028,
    ticker: "LBRT",
    company_name: "Liberty Energy Inc.",
  },
  {
    cik_str: 1056903,
    ticker: "AWR",
    company_name: "AMERICAN STATES WATER CO",
  },
  {
    cik_str: 1299709,
    ticker: "AX",
    company_name: "Axos Financial, Inc.",
  },
  {
    cik_str: 1632127,
    ticker: "CABO",
    company_name: "Cable One, Inc.",
  },
  {
    cik_str: 1356570,
    ticker: "WNS",
    company_name: "WNS (HOLDINGS) LTD",
  },
  {
    cik_str: 1935979,
    ticker: "BHVN",
    company_name: "Biohaven Ltd.",
  },
  {
    cik_str: 1126874,
    ticker: "ERF",
    company_name: "ENERPLUS Corp",
  },
  {
    cik_str: 1311370,
    ticker: "LAZ",
    company_name: "Lazard Ltd",
  },
  {
    cik_str: 1035201,
    ticker: "CWT",
    company_name: "CALIFORNIA WATER SERVICE GROUP",
  },
  {
    cik_str: 1582313,
    ticker: "XENE",
    company_name: "Xenon Pharmaceuticals Inc.",
  },
  {
    cik_str: 1320414,
    ticker: "SEM",
    company_name: "SELECT MEDICAL HOLDINGS CORP",
  },
  {
    cik_str: 879407,
    ticker: "ARWR",
    company_name: "ARROWHEAD PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1582961,
    ticker: "DOCN",
    company_name: "DigitalOcean Holdings, Inc.",
  },
  {
    cik_str: 1651562,
    ticker: "COUR",
    company_name: "Coursera, Inc.",
  },
  {
    cik_str: 719413,
    ticker: "HL",
    company_name: "HECLA MINING CO/DE/",
  },
  {
    cik_str: 1345016,
    ticker: "YELP",
    company_name: "YELP INC",
  },
  {
    cik_str: 1848309,
    ticker: "SGML",
    company_name: "Sigma Lithium Corp",
  },
  {
    cik_str: 25445,
    ticker: "CXT",
    company_name: "Crane NXT, Co.",
  },
  {
    cik_str: 944148,
    ticker: "CBZ",
    company_name: "CBIZ, Inc.",
  },
  {
    cik_str: 1287865,
    ticker: "MPW",
    company_name: "MEDICAL PROPERTIES TRUST INC",
  },
  {
    cik_str: 56679,
    ticker: "KFY",
    company_name: "KORN FERRY",
  },
  {
    cik_str: 785786,
    ticker: "PLXS",
    company_name: "PLEXUS CORP",
  },
  {
    cik_str: 913059,
    ticker: "BBAR",
    company_name: "Banco BBVA Argentina S.A.",
  },
  {
    cik_str: 1459200,
    ticker: "ALRM",
    company_name: "Alarm.com Holdings, Inc.",
  },
  {
    cik_str: 43920,
    ticker: "GEF",
    company_name: "GREIF, INC",
  },
  {
    cik_str: 1384905,
    ticker: "RNG",
    company_name: "RingCentral, Inc.",
  },
  {
    cik_str: 1509991,
    ticker: "KOS",
    company_name: "Kosmos Energy Ltd.",
  },
  {
    cik_str: 39899,
    ticker: "TGNA",
    company_name: "TEGNA INC",
  },
  {
    cik_str: 1710366,
    ticker: "CEIX",
    company_name: "CONSOL Energy Inc.",
  },
  {
    cik_str: 1224608,
    ticker: "CNO",
    company_name: "CNO Financial Group, Inc.",
  },
  {
    cik_str: 1580670,
    ticker: "LGIH",
    company_name: "LGI Homes, Inc.",
  },
  {
    cik_str: 1714174,
    ticker: "BUR",
    company_name: "Burford Capital Ltd",
  },
  {
    cik_str: 1830214,
    ticker: "DNA",
    company_name: "Ginkgo Bioworks Holdings, Inc.",
  },
  {
    cik_str: 819793,
    ticker: "AIN",
    company_name: "ALBANY INTERNATIONAL CORP /DE/",
  },
  {
    cik_str: 1040971,
    ticker: "SLG",
    company_name: "SL GREEN REALTY CORP",
  },
  {
    cik_str: 1054905,
    ticker: "IOSP",
    company_name: "INNOSPEC INC.",
  },
  {
    cik_str: 1704292,
    ticker: "ZLAB",
    company_name: "Zai Lab Ltd",
  },
  {
    cik_str: 1603756,
    ticker: "AXNX",
    company_name: "Axonics, Inc.",
  },
  {
    cik_str: 1295947,
    ticker: "PBH",
    company_name: "Prestige Consumer Healthcare Inc.",
  },
  {
    cik_str: 1077428,
    ticker: "TCBI",
    company_name: "TEXAS CAPITAL BANCSHARES INC/TX",
  },
  {
    cik_str: 104889,
    ticker: "GHC",
    company_name: "Graham Holdings Co",
  },
  {
    cik_str: 897723,
    ticker: "SANM",
    company_name: "SANMINA CORP",
  },
  {
    cik_str: 894315,
    ticker: "SITC",
    company_name: "SITE Centers Corp.",
  },
  {
    cik_str: 899715,
    ticker: "SKT",
    company_name: "TANGER INC.",
  },
  {
    cik_str: 67347,
    ticker: "MOD",
    company_name: "MODINE MANUFACTURING CO",
  },
  {
    cik_str: 1691303,
    ticker: "HCC",
    company_name: "WARRIOR MET COAL, INC.",
  },
  {
    cik_str: 50725,
    ticker: "GFF",
    company_name: "GRIFFON CORP",
  },
  {
    cik_str: 354647,
    ticker: "CVBF",
    company_name: "CVB FINANCIAL CORP",
  },
  {
    cik_str: 866706,
    ticker: "ESE",
    company_name: "ESCO TECHNOLOGIES INC",
  },
  {
    cik_str: 1420800,
    ticker: "ENOV",
    company_name: "Enovis CORP",
  },
  {
    cik_str: 1037676,
    ticker: "ARCH",
    company_name: "ARCH RESOURCES, INC.",
  },
  {
    cik_str: 1877787,
    ticker: "ZGN",
    company_name: "Ermenegildo Zegna N.V.",
  },
  {
    cik_str: 912958,
    ticker: "TIGO",
    company_name: "MILLICOM INTERNATIONAL CELLULAR SA",
  },
  {
    cik_str: 1361658,
    ticker: "TNL",
    company_name: "Travel & Leisure Co.",
  },
  {
    cik_str: 1771515,
    ticker: "GO",
    company_name: "Grocery Outlet Holding Corp.",
  },
  {
    cik_str: 1580560,
    ticker: "FLYW",
    company_name: "Flywire Corp",
  },
  {
    cik_str: 1253986,
    ticker: "ABR",
    company_name: "ARBOR REALTY TRUST INC",
  },
  {
    cik_str: 1056288,
    ticker: "FHI",
    company_name: "FEDERATED HERMES, INC.",
  },
  {
    cik_str: 1620533,
    ticker: "SHAK",
    company_name: "Shake Shack Inc.",
  },
  {
    cik_str: 1653653,
    ticker: "RRR",
    company_name: "Red Rock Resorts, Inc.",
  },
  {
    cik_str: 1532173,
    ticker: "KOZAY",
    company_name: "Koza Altin Isletmeleri A.S./ADR",
  },
  {
    cik_str: 46195,
    ticker: "BOH",
    company_name: "BANK OF HAWAII CORP",
  },
  {
    cik_str: 860546,
    ticker: "CDP",
    company_name: "COPT DEFENSE PROPERTIES",
  },
  {
    cik_str: 36377,
    ticker: "FHB",
    company_name: "FIRST HAWAIIAN, INC.",
  },
  {
    cik_str: 1727263,
    ticker: "FTDR",
    company_name: "Frontdoor, Inc.",
  },
  {
    cik_str: 72333,
    ticker: "JWN",
    company_name: "NORDSTROM INC",
  },
  {
    cik_str: 1109138,
    ticker: "CAMT",
    company_name: "CAMTEK LTD",
  },
  {
    cik_str: 1326110,
    ticker: "IBRX",
    company_name: "ImmunityBio, Inc.",
  },
  {
    cik_str: 776901,
    ticker: "INDB",
    company_name: "INDEPENDENT BANK CORP",
  },
  {
    cik_str: 1451809,
    ticker: "SITM",
    company_name: "SITIME Corp",
  },
  {
    cik_str: 1071438,
    ticker: "BAK",
    company_name: "BRASKEM SA",
  },
  {
    cik_str: 1699136,
    ticker: "WHD",
    company_name: "Cactus, Inc.",
  },
  {
    cik_str: 1965040,
    ticker: "FTRE",
    company_name: "Fortrea Holdings Inc.",
  },
  {
    cik_str: 1297184,
    ticker: "AMPH",
    company_name: "Amphastar Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1364250,
    ticker: "DEI",
    company_name: "Douglas Emmett Inc",
  },
  {
    cik_str: 1834622,
    ticker: "HAYW",
    company_name: "Hayward Holdings, Inc.",
  },
  {
    cik_str: 850209,
    ticker: "FL",
    company_name: "FOOT LOCKER, INC.",
  },
  {
    cik_str: 1057706,
    ticker: "FBP",
    company_name: "FIRST BANCORP /PR/",
  },
  {
    cik_str: 1869198,
    ticker: "LTH",
    company_name: "Life Time Group Holdings, Inc.",
  },
  {
    cik_str: 1726978,
    ticker: "GSHD",
    company_name: "Goosehead Insurance, Inc.",
  },
  {
    cik_str: 1276520,
    ticker: "GNW",
    company_name: "GENWORTH FINANCIAL INC",
  },
  {
    cik_str: 1406666,
    ticker: "CALX",
    company_name: "CALIX, INC",
  },
  {
    cik_str: 1830043,
    ticker: "BMBL",
    company_name: "Bumble Inc.",
  },
  {
    cik_str: 108516,
    ticker: "WOR",
    company_name: "WORTHINGTON ENTERPRISES, INC.",
  },
  {
    cik_str: 752714,
    ticker: "MGRC",
    company_name: "MCGRATH RENTCORP",
  },
  {
    cik_str: 1603145,
    ticker: "NEP",
    company_name: "NEXTERA ENERGY PARTNERS, LP",
  },
  {
    cik_str: 910108,
    ticker: "LXP",
    company_name: "LXP Industrial Trust",
  },
  {
    cik_str: 916789,
    ticker: "HELE",
    company_name: "HELEN OF TROY LTD",
  },
  {
    cik_str: 1093691,
    ticker: "PLUG",
    company_name: "PLUG POWER INC",
  },
  {
    cik_str: 1028918,
    ticker: "PPBI",
    company_name: "PACIFIC PREMIER BANCORP INC",
  },
  {
    cik_str: 1381531,
    ticker: "UFS",
    company_name: "Domtar CORP",
  },
  {
    cik_str: 1820721,
    ticker: "ARRY",
    company_name: "Array Technologies, Inc.",
  },
  {
    cik_str: 1756770,
    ticker: "CURLF",
    company_name: "Curaleaf Holdings, Inc.",
  },
  {
    cik_str: 1898416,
    ticker: "ALVO",
    company_name: "Alvotech",
  },
  {
    cik_str: 940942,
    ticker: "HUBG",
    company_name: "Hub Group, Inc.",
  },
  {
    cik_str: 1405495,
    ticker: "IDCC",
    company_name: "InterDigital, Inc.",
  },
  {
    cik_str: 1563411,
    ticker: "CSTM",
    company_name: "CONSTELLIUM SE",
  },
  {
    cik_str: 109177,
    ticker: "SPB",
    company_name: "Spectrum Brands Holdings, Inc.",
  },
  {
    cik_str: 1279495,
    ticker: "BTE",
    company_name: "BAYTEX ENERGY CORP.",
  },
  {
    cik_str: 1424929,
    ticker: "FOXF",
    company_name: "FOX FACTORY HOLDING CORP",
  },
  {
    cik_str: 1441683,
    ticker: "APPN",
    company_name: "APPIAN CORP",
  },
  {
    cik_str: 1679688,
    ticker: "DBRG",
    company_name: "DigitalBridge Group, Inc.",
  },
  {
    cik_str: 828944,
    ticker: "WSFS",
    company_name: "WSFS FINANCIAL CORP",
  },
  {
    cik_str: 1001316,
    ticker: "TGTX",
    company_name: "TG THERAPEUTICS, INC.",
  },
  {
    cik_str: 746598,
    ticker: "BRC",
    company_name: "BRADY CORP",
  },
  {
    cik_str: 1845257,
    ticker: "LFST",
    company_name: "LifeStance Health Group, Inc.",
  },
  {
    cik_str: 1677576,
    ticker: "IIPR",
    company_name: "INNOVATIVE INDUSTRIAL PROPERTIES INC",
  },
  {
    cik_str: 723188,
    ticker: "CBU",
    company_name: "COMMUNITY BANK SYSTEM, INC.",
  },
  {
    cik_str: 278166,
    ticker: "CVCO",
    company_name: "CAVCO INDUSTRIES INC.",
  },
  {
    cik_str: 1652130,
    ticker: "NTLA",
    company_name: "Intellia Therapeutics, Inc.",
  },
  {
    cik_str: 104918,
    ticker: "AVA",
    company_name: "AVISTA CORP",
  },
  {
    cik_str: 310142,
    ticker: "SXT",
    company_name: "SENSIENT TECHNOLOGIES CORP",
  },
  {
    cik_str: 1590717,
    ticker: "CTRE",
    company_name: "CareTrust REIT, Inc.",
  },
  {
    cik_str: 1762506,
    ticker: "VIST",
    company_name: "Vista Energy, S.A.B. de C.V.",
  },
  {
    cik_str: 1801169,
    ticker: "OPEN",
    company_name: "Opendoor Technologies Inc.",
  },
  {
    cik_str: 1060822,
    ticker: "CRI",
    company_name: "CARTERS INC",
  },
  {
    cik_str: 1651717,
    ticker: "NOMD",
    company_name: "Nomad Foods Ltd",
  },
  {
    cik_str: 1639691,
    ticker: "LIVN",
    company_name: "LivaNova PLC",
  },
  {
    cik_str: 1823306,
    ticker: "LSPD",
    company_name: "Lightspeed Commerce Inc.",
  },
  {
    cik_str: 1649904,
    ticker: "RYTM",
    company_name: "RHYTHM PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1827090,
    ticker: "CERT",
    company_name: "Certara, Inc.",
  },
  {
    cik_str: 1069258,
    ticker: "KTOS",
    company_name: "KRATOS DEFENSE & SECURITY SOLUTIONS, INC.",
  },
  {
    cik_str: 1929561,
    ticker: "RXO",
    company_name: "RXO, Inc.",
  },
  {
    cik_str: 883948,
    ticker: "AUB",
    company_name: "Atlantic Union Bankshares Corp",
  },
  {
    cik_str: 1567526,
    ticker: "IHICY",
    company_name: "IHI Corporation/ADR",
  },
  {
    cik_str: 1157408,
    ticker: "LRN",
    company_name: "Stride, Inc.",
  },
  {
    cik_str: 1829726,
    ticker: "TFPM",
    company_name: "Triple Flag Precious Metals Corp.",
  },
  {
    cik_str: 1888886,
    ticker: "GPCR",
    company_name: "Structure Therapeutics Inc.",
  },
  {
    cik_str: 1161728,
    ticker: "MGEE",
    company_name: "MGE ENERGY INC",
  },
  {
    cik_str: 1740332,
    ticker: "REZI",
    company_name: "RESIDEO TECHNOLOGIES, INC.",
  },
  {
    cik_str: 894405,
    ticker: "ARCB",
    company_name: "ARCBEST CORP /DE/",
  },
  {
    cik_str: 1576940,
    ticker: "CCS",
    company_name: "Century Communities, Inc.",
  },
  {
    cik_str: 1831651,
    ticker: "SHLS",
    company_name: "Shoals Technologies Group, Inc.",
  },
  {
    cik_str: 793074,
    ticker: "WERN",
    company_name: "WERNER ENTERPRISES INC",
  },
  {
    cik_str: 1840776,
    ticker: "HGTY",
    company_name: "Hagerty, Inc.",
  },
  {
    cik_str: 700564,
    ticker: "FULT",
    company_name: "FULTON FINANCIAL CORP",
  },
  {
    cik_str: 1083839,
    ticker: "NAD",
    company_name: "Nuveen Quality Municipal Income Fund",
  },
  {
    cik_str: 1504764,
    ticker: "AVAL",
    company_name: "Grupo Aval Acciones Y Valores S.A.",
  },
  {
    cik_str: 1627272,
    ticker: "OR",
    company_name: "Osisko Gold Royalties LTD",
  },
  {
    cik_str: 1541401,
    ticker: "ESRT",
    company_name: "Empire State Realty Trust, Inc.",
  },
  {
    cik_str: 1142750,
    ticker: "AMN",
    company_name: "AMN HEALTHCARE SERVICES INC",
  },
  {
    cik_str: 1565687,
    ticker: "INTA",
    company_name: "Intapp, Inc.",
  },
  {
    cik_str: 1559865,
    ticker: "EVTC",
    company_name: "EVERTEC, Inc.",
  },
  {
    cik_str: 885590,
    ticker: "BHC",
    company_name: "Bausch Health Companies Inc.",
  },
  {
    cik_str: 1759655,
    ticker: "PRVA",
    company_name: "Privia Health Group, Inc.",
  },
  {
    cik_str: 1577916,
    ticker: "PINC",
    company_name: "Premier, Inc.",
  },
  {
    cik_str: 16160,
    ticker: "CALM",
    company_name: "CAL-MAINE FOODS INC",
  },
  {
    cik_str: 1421876,
    ticker: "GLPG",
    company_name: "GALAPAGOS NV",
  },
  {
    cik_str: 1883313,
    ticker: "SVV",
    company_name: "Savers Value Village, Inc.",
  },
  {
    cik_str: 1508478,
    ticker: "ARCO",
    company_name: "Arcos Dorados Holdings Inc.",
  },
  {
    cik_str: 1328237,
    ticker: "DBC",
    company_name: "Invesco DB Commodity Index Tracking Fund",
  },
  {
    cik_str: 1362004,
    ticker: "ICFI",
    company_name: "ICF International, Inc.",
  },
  {
    cik_str: 1337619,
    ticker: "ENV",
    company_name: "ENVESTNET, INC.",
  },
  {
    cik_str: 837465,
    ticker: "MODG",
    company_name: "Topgolf Callaway Brands Corp.",
  },
  {
    cik_str: 1280263,
    ticker: "AMBA",
    company_name: "AMBARELLA INC",
  },
  {
    cik_str: 918608,
    ticker: "EGO",
    company_name: "ELDORADO GOLD CORP /FI",
  },
  {
    cik_str: 1967649,
    ticker: "VSTS",
    company_name: "Vestis Corp",
  },
  {
    cik_str: 1395213,
    ticker: "EDN",
    company_name: "EDENOR",
  },
  {
    cik_str: 1494259,
    ticker: "CARG",
    company_name: "CarGurus, Inc.",
  },
  {
    cik_str: 1090116,
    ticker: "NVG",
    company_name: "Nuveen AMT-Free Municipal Credit Income Fund",
  },
  {
    cik_str: 1070235,
    ticker: "BB",
    company_name: "BLACKBERRY Ltd",
  },
  {
    cik_str: 868780,
    ticker: "DORM",
    company_name: "Dorman Products, Inc.",
  },
  {
    cik_str: 1476765,
    ticker: "GBDC",
    company_name: "GOLUB CAPITAL BDC, Inc.",
  },
  {
    cik_str: 1810546,
    ticker: "EBC",
    company_name: "Eastern Bankshares, Inc.",
  },
  {
    cik_str: 1756262,
    ticker: "TMDX",
    company_name: "TransMedics Group, Inc.",
  },
  {
    cik_str: 1853513,
    ticker: "MCW",
    company_name: "Mister Car Wash, Inc.",
  },
  {
    cik_str: 1334933,
    ticker: "UEC",
    company_name: "URANIUM ENERGY CORP",
  },
  {
    cik_str: 1553079,
    ticker: "ESBA",
    company_name: "Empire State Realty OP, L.P.",
  },
  {
    cik_str: 1281895,
    ticker: "RCKT",
    company_name: "ROCKET PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1825088,
    ticker: "DFH",
    company_name: "Dream Finders Homes, Inc.",
  },
  {
    cik_str: 700923,
    ticker: "MYRG",
    company_name: "MYR GROUP INC.",
  },
  {
    cik_str: 891024,
    ticker: "PDCO",
    company_name: "PATTERSON COMPANIES, INC.",
  },
  {
    cik_str: 1104657,
    ticker: "MTRN",
    company_name: "MATERION Corp",
  },
  {
    cik_str: 1077183,
    ticker: "NEO",
    company_name: "NEOGENOMICS INC",
  },
  {
    cik_str: 1848763,
    ticker: "RNW",
    company_name: "ReNew Energy Global plc",
  },
  {
    cik_str: 1750,
    ticker: "AIR",
    company_name: "AAR CORP",
  },
  {
    cik_str: 23194,
    ticker: "CRK",
    company_name: "COMSTOCK RESOURCES INC",
  },
  {
    cik_str: 921082,
    ticker: "HIW",
    company_name: "HIGHWOODS PROPERTIES, INC.",
  },
  {
    cik_str: 1042074,
    ticker: "CBAY",
    company_name: "CymaBay Therapeutics, Inc.",
  },
  {
    cik_str: 1299130,
    ticker: "PACB",
    company_name: "PACIFIC BIOSCIENCES OF CALIFORNIA, INC.",
  },
  {
    cik_str: 1526520,
    ticker: "TRIP",
    company_name: "TripAdvisor, Inc.",
  },
  {
    cik_str: 1454480,
    ticker: "SHZNY",
    company_name: "Shenzhen Expressway Co. / ADR",
  },
  {
    cik_str: 1601072,
    ticker: "AY",
    company_name: "Atlantica Sustainable Infrastructure plc",
  },
  {
    cik_str: 1786205,
    ticker: "ACLX",
    company_name: "Arcellx, Inc.",
  },
  {
    cik_str: 730708,
    ticker: "SBCF",
    company_name: "SEACOAST BANKING CORP OF FLORIDA",
  },
  {
    cik_str: 790526,
    ticker: "RDNT",
    company_name: "RadNet, Inc.",
  },
  {
    cik_str: 812074,
    ticker: "OI",
    company_name: "O-I Glass, Inc. /DE/",
  },
  {
    cik_str: 1287032,
    ticker: "PSEC",
    company_name: "PROSPECT CAPITAL CORP",
  },
  {
    cik_str: 1144800,
    ticker: "TAC",
    company_name: "TRANSALTA CORP",
  },
  {
    cik_str: 1517413,
    ticker: "FSLY",
    company_name: "Fastly, Inc.",
  },
  {
    cik_str: 1086600,
    ticker: "ARLP",
    company_name: "ALLIANCE RESOURCE PARTNERS LP",
  },
  {
    cik_str: 1809519,
    ticker: "GDRX",
    company_name: "GoodRx Holdings, Inc.",
  },
  {
    cik_str: 884713,
    ticker: "PRMW",
    company_name: "Primo Water Corp /CN/",
  },
  {
    cik_str: 877860,
    ticker: "NHI",
    company_name: "NATIONAL HEALTH INVESTORS INC",
  },
  {
    cik_str: 1595761,
    ticker: "WB",
    company_name: "WEIBO Corp",
  },
  {
    cik_str: 84748,
    ticker: "ROG",
    company_name: "ROGERS CORP",
  },
  {
    cik_str: 730464,
    ticker: "ATGE",
    company_name: "Adtalem Global Education Inc.",
  },
  {
    cik_str: 1410384,
    ticker: "QTWO",
    company_name: "Q2 Holdings, Inc.",
  },
  {
    cik_str: 1655891,
    ticker: "TRMD",
    company_name: "TORM plc",
  },
  {
    cik_str: 888746,
    ticker: "CCU",
    company_name: "UNITED BREWERIES CO INC",
  },
  {
    cik_str: 1584425,
    ticker: "TCN",
    company_name: "Tricon Residential Inc.",
  },
  {
    cik_str: 1504008,
    ticker: "BKU",
    company_name: "BankUnited, Inc.",
  },
  {
    cik_str: 1773427,
    ticker: "SWTX",
    company_name: "SpringWorks Therapeutics, Inc.",
  },
  {
    cik_str: 897077,
    ticker: "ALG",
    company_name: "ALAMO GROUP INC",
  },
  {
    cik_str: 1828318,
    ticker: "ENVX",
    company_name: "Enovix Corp",
  },
  {
    cik_str: 1857154,
    ticker: "DNUT",
    company_name: "Krispy Kreme, Inc.",
  },
  {
    cik_str: 1570187,
    ticker: "OSTIY",
    company_name: "Osterreichische Post AG ADR",
  },
  {
    cik_str: 901491,
    ticker: "PZZA",
    company_name: "PAPA JOHNS INTERNATIONAL INC",
  },
  {
    cik_str: 1628369,
    ticker: "CWK",
    company_name: "Cushman & Wakefield plc",
  },
  {
    cik_str: 1741530,
    ticker: "QFIN",
    company_name: "Qifu Technology, Inc.",
  },
  {
    cik_str: 1958140,
    ticker: "BATRA",
    company_name: "Atlanta Braves Holdings, Inc.",
  },
  {
    cik_str: 1858257,
    ticker: "AVDX",
    company_name: "AvidXchange Holdings, Inc.",
  },
  {
    cik_str: 90498,
    ticker: "SFNC",
    company_name: "SIMMONS FIRST NATIONAL CORP",
  },
  {
    cik_str: 1280784,
    ticker: "HTGC",
    company_name: "Hercules Capital, Inc.",
  },
  {
    cik_str: 1379438,
    ticker: "EXG",
    company_name:
      "Eaton Vance Tax-Managed Global Diversified Equity Income Fund",
  },
  {
    cik_str: 874238,
    ticker: "STRL",
    company_name: "STERLING INFRASTRUCTURE, INC.",
  },
  {
    cik_str: 876167,
    ticker: "PRGS",
    company_name: "PROGRESS SOFTWARE CORP /MA",
  },
  {
    cik_str: 1114995,
    ticker: "PI",
    company_name: "IMPINJ INC",
  },
  {
    cik_str: 1795139,
    ticker: "GTBIF",
    company_name: "Green Thumb Industries Inc.",
  },
  {
    cik_str: 883984,
    ticker: "ICUI",
    company_name: "ICU MEDICAL INC/DE",
  },
  {
    cik_str: 1842718,
    ticker: "IAS",
    company_name: "INTEGRAL AD SCIENCE HOLDING CORP.",
  },
  {
    cik_str: 1085869,
    ticker: "PRFT",
    company_name: "PERFICIENT INC",
  },
  {
    cik_str: 1373670,
    ticker: "GRBK",
    company_name: "Green Brick Partners, Inc.",
  },
  {
    cik_str: 874499,
    ticker: "GPOR",
    company_name: "GULFPORT ENERGY CORP",
  },
  {
    cik_str: 1853717,
    ticker: "ATAT",
    company_name: "Atour Lifestyle Holdings Ltd",
  },
  {
    cik_str: 912562,
    ticker: "ROCK",
    company_name: "GIBRALTAR INDUSTRIES, INC.",
  },
  {
    cik_str: 1721947,
    ticker: "JAMF",
    company_name: "Jamf Holding Corp.",
  },
  {
    cik_str: 1530238,
    ticker: "YY",
    company_name: "JOYY Inc.",
  },
  {
    cik_str: 1522727,
    ticker: "USAC",
    company_name: "USA Compression Partners, LP",
  },
  {
    cik_str: 1610250,
    ticker: "BOOT",
    company_name: "Boot Barn Holdings, Inc.",
  },
  {
    cik_str: 1845097,
    ticker: "AMBP",
    company_name: "Ardagh Metal Packaging S.A.",
  },
  {
    cik_str: 1210677,
    ticker: "FA",
    company_name: "FIRST ADVANTAGE CORP",
  },
  {
    cik_str: 1078271,
    ticker: "EXTR",
    company_name: "EXTREME NETWORKS INC",
  },
  {
    cik_str: 1932737,
    ticker: "NWTN",
    company_name: "NWTN, Inc.",
  },
  {
    cik_str: 1547903,
    ticker: "NMIH",
    company_name: "NMI Holdings, Inc.",
  },
  {
    cik_str: 1389050,
    ticker: "AROC",
    company_name: "Archrock, Inc.",
  },
  {
    cik_str: 1275214,
    ticker: "CSQ",
    company_name: "CALAMOS STRATEGIC TOTAL RETURN FUND",
  },
  {
    cik_str: 1495932,
    ticker: "EXPI",
    company_name: "EXP World Holdings, Inc.",
  },
  {
    cik_str: 1110805,
    ticker: "NS",
    company_name: "NuStar Energy L.P.",
  },
  {
    cik_str: 1615903,
    ticker: "IFS",
    company_name: "Intercorp Financial Services Inc.",
  },
  {
    cik_str: 929351,
    ticker: "LGF-A",
    company_name: "LIONS GATE ENTERTAINMENT CORP /CN/",
  },
  {
    cik_str: 1320695,
    ticker: "THS",
    company_name: "TreeHouse Foods, Inc.",
  },
  {
    cik_str: 99780,
    ticker: "TRN",
    company_name: "TRINITY INDUSTRIES INC",
  },
  {
    cik_str: 1745999,
    ticker: "BEAM",
    company_name: "Beam Therapeutics Inc.",
  },
  {
    cik_str: 1804745,
    ticker: "DRVN",
    company_name: "Driven Brands Holdings Inc.",
  },
  {
    cik_str: 1607939,
    ticker: "UDMY",
    company_name: "Udemy, Inc.",
  },
  {
    cik_str: 1049521,
    ticker: "MRCY",
    company_name: "MERCURY SYSTEMS INC",
  },
  {
    cik_str: 1137887,
    ticker: "NZF",
    company_name: "Nuveen Municipal Credit Income Fund",
  },
  {
    cik_str: 887733,
    ticker: "CENT",
    company_name: "CENTRAL GARDEN & PET CO",
  },
  {
    cik_str: 1718227,
    ticker: "ROAD",
    company_name: "Construction Partners, Inc.",
  },
  {
    cik_str: 19745,
    ticker: "CPK",
    company_name: "CHESAPEAKE UTILITIES CORP",
  },
  {
    cik_str: 1001082,
    ticker: "DISH",
    company_name: "DISH Network CORP",
  },
  {
    cik_str: 1546417,
    ticker: "BLMN",
    company_name: "Bloomin' Brands, Inc.",
  },
  {
    cik_str: 733269,
    ticker: "RAMP",
    company_name: "LiveRamp Holdings, Inc.",
  },
  {
    cik_str: 1964789,
    ticker: "HUT",
    company_name: "Hut 8 Corp.",
  },
  {
    cik_str: 1819994,
    ticker: "RKLB",
    company_name: "Rocket Lab USA, Inc.",
  },
  {
    cik_str: 1570827,
    ticker: "VCTR",
    company_name: "Victory Capital Holdings, Inc.",
  },
  {
    cik_str: 1527508,
    ticker: "PTVE",
    company_name: "Pactiv Evergreen Inc.",
  },
  {
    cik_str: 1579877,
    ticker: "OUT",
    company_name: "OUTFRONT Media Inc.",
  },
  {
    cik_str: 1834488,
    ticker: "NABL",
    company_name: "N-able, Inc.",
  },
  {
    cik_str: 1658247,
    ticker: "CRNX",
    company_name: "Crinetics Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1650132,
    ticker: "FCPT",
    company_name: "Four Corners Property Trust, Inc.",
  },
  {
    cik_str: 928022,
    ticker: "CPE",
    company_name: "Callon Petroleum Co",
  },
  {
    cik_str: 708955,
    ticker: "FFBC",
    company_name: "FIRST FINANCIAL BANCORP /OH/",
  },
  {
    cik_str: 1593538,
    ticker: "NAVI",
    company_name: "NAVIENT CORP",
  },
  {
    cik_str: 885245,
    ticker: "BKE",
    company_name: "BUCKLE INC",
  },
  {
    cik_str: 1632790,
    ticker: "ENR",
    company_name: "ENERGIZER HOLDINGS, INC.",
  },
  {
    cik_str: 921638,
    ticker: "SSRM",
    company_name: "SSR MINING INC.",
  },
  {
    cik_str: 1041803,
    ticker: "PSMT",
    company_name: "PRICESMART INC",
  },
  {
    cik_str: 1207179,
    ticker: "GLNG",
    company_name: "GOLAR LNG LTD",
  },
  {
    cik_str: 1690680,
    ticker: "NMRK",
    company_name: "NEWMARK GROUP, INC.",
  },
  {
    cik_str: 1013934,
    ticker: "STRA",
    company_name: "Strategic Education, Inc.",
  },
  {
    cik_str: 1856608,
    ticker: "SOVO",
    company_name: "Sovos Brands, Inc.",
  },
  {
    cik_str: 1676725,
    ticker: "IDYA",
    company_name: "IDEAYA Biosciences, Inc.",
  },
  {
    cik_str: 893691,
    ticker: "DOOR",
    company_name: "MASONITE INTERNATIONAL CORP",
  },
  {
    cik_str: 1915760,
    ticker: "HMNTY",
    company_name: "Hemnet Group AB/ADR",
  },
  {
    cik_str: 1265131,
    ticker: "HTH",
    company_name: "Hilltop Holdings Inc.",
  },
  {
    cik_str: 1907085,
    ticker: "ODD",
    company_name: "Oddity Tech Ltd",
  },
  {
    cik_str: 1922641,
    ticker: "ENLT",
    company_name: "Enlight Renewable Energy Ltd.",
  },
  {
    cik_str: 1825155,
    ticker: "TIXT",
    company_name: "TELUS International (Cda) Inc.",
  },
  {
    cik_str: 1898795,
    ticker: "LVWR",
    company_name: "LiveWire Group, Inc.",
  },
  {
    cik_str: 1543726,
    ticker: "NHNKY",
    company_name: "Nihon Kohden Corporation/ADR",
  },
  {
    cik_str: 1637873,
    ticker: "ACVA",
    company_name: "ACV Auctions Inc.",
  },
  {
    cik_str: 1679049,
    ticker: "INSW",
    company_name: "International Seaways, Inc.",
  },
  {
    cik_str: 1529274,
    ticker: "ALKT",
    company_name: "ALKAMI TECHNOLOGY, INC.",
  },
  {
    cik_str: 712534,
    ticker: "FRME",
    company_name: "FIRST MERCHANTS CORP",
  },
  {
    cik_str: 1770450,
    ticker: "XRX",
    company_name: "Xerox Holdings Corp",
  },
  {
    cik_str: 70866,
    ticker: "VYX",
    company_name: "NCR VOYIX Corp",
  },
  {
    cik_str: 1350593,
    ticker: "MWA",
    company_name: "Mueller Water Products, Inc.",
  },
  {
    cik_str: 1490978,
    ticker: "SDGR",
    company_name: "Schrodinger, Inc.",
  },
  {
    cik_str: 1885522,
    ticker: "NMRA",
    company_name: "Neumora Therapeutics, Inc.",
  },
  {
    cik_str: 1809987,
    ticker: "MIR",
    company_name: "Mirion Technologies, Inc.",
  },
  {
    cik_str: 1611547,
    ticker: "UE",
    company_name: "Urban Edge Properties",
  },
  {
    cik_str: 1039065,
    ticker: "OSIS",
    company_name: "OSI SYSTEMS INC",
  },
  {
    cik_str: 1295810,
    ticker: "SHO",
    company_name: "Sunstone Hotel Investors, Inc.",
  },
  {
    cik_str: 1070081,
    ticker: "PTCT",
    company_name: "PTC THERAPEUTICS, INC.",
  },
  {
    cik_str: 1588978,
    ticker: "PRCT",
    company_name: "PROCEPT BioRobotics Corp",
  },
  {
    cik_str: 1825570,
    ticker: "PAX",
    company_name: "Patria Investments Ltd",
  },
  {
    cik_str: 1711375,
    ticker: "LOMA",
    company_name: "Loma Negra Compania Industrial Argentina Sociedad Anonima",
  },
  {
    cik_str: 107687,
    ticker: "WGO",
    company_name: "WINNEBAGO INDUSTRIES INC",
  },
  {
    cik_str: 1295401,
    ticker: "TBBK",
    company_name: "Bancorp, Inc.",
  },
  {
    cik_str: 766829,
    ticker: "SJW",
    company_name: "SJW GROUP",
  },
  {
    cik_str: 861459,
    ticker: "GVA",
    company_name: "GRANITE CONSTRUCTION INC",
  },
  {
    cik_str: 805676,
    ticker: "PRK",
    company_name: "PARK NATIONAL CORP /OH/",
  },
  {
    cik_str: 835011,
    ticker: "MGPI",
    company_name: "MGP INGREDIENTS INC",
  },
  {
    cik_str: 1568100,
    ticker: "PD",
    company_name: "PagerDuty, Inc.",
  },
  {
    cik_str: 1314727,
    ticker: "SONO",
    company_name: "Sonos Inc",
  },
  {
    cik_str: 891014,
    ticker: "MTX",
    company_name: "MINERALS TECHNOLOGIES INC",
  },
  {
    cik_str: 1625297,
    ticker: "INDV",
    company_name: "INDIVIOR PLC",
  },
  {
    cik_str: 912093,
    ticker: "VIAV",
    company_name: "VIAVI SOLUTIONS INC.",
  },
  {
    cik_str: 912766,
    ticker: "LAUR",
    company_name: "LAUREATE EDUCATION, INC.",
  },
  {
    cik_str: 913760,
    ticker: "SNEX",
    company_name: "StoneX Group Inc.",
  },
  {
    cik_str: 1526113,
    ticker: "GNL",
    company_name: "Global Net Lease, Inc.",
  },
  {
    cik_str: 1530804,
    ticker: "TROX",
    company_name: "Tronox Holdings plc",
  },
  {
    cik_str: 64996,
    ticker: "MCY",
    company_name: "MERCURY GENERAL CORP",
  },
  {
    cik_str: 925261,
    ticker: "AKO-A",
    company_name: "ANDINA BOTTLING CO INC",
  },
  {
    cik_str: 1841156,
    ticker: "PAY",
    company_name: "Paymentus Holdings, Inc.",
  },
  {
    cik_str: 2230,
    ticker: "ADX",
    company_name: "ADAMS DIVERSIFIED EQUITY FUND, INC.",
  },
  {
    cik_str: 78749,
    ticker: "AGYS",
    company_name: "AGILYSYS INC",
  },
  {
    cik_str: 1262976,
    ticker: "CMPR",
    company_name: "CIMPRESS plc",
  },
  {
    cik_str: 1534281,
    ticker: "MBUMY",
    company_name: "Mabuchi Motor Co., Ltd./ADR",
  },
  {
    cik_str: 821483,
    ticker: "PARR",
    company_name: "PAR PACIFIC HOLDINGS, INC.",
  },
  {
    cik_str: 1286139,
    ticker: "LZ",
    company_name: "LEGALZOOM.COM, INC.",
  },
  {
    cik_str: 1666291,
    ticker: "CMTG",
    company_name: "Claros Mortgage Trust, Inc.",
  },
  {
    cik_str: 1559053,
    ticker: "PRTA",
    company_name: "PROTHENA CORP PUBLIC LTD CO",
  },
  {
    cik_str: 1639825,
    ticker: "PTON",
    company_name: "PELOTON INTERACTIVE, INC.",
  },
  {
    cik_str: 66382,
    ticker: "MLKN",
    company_name: "MILLERKNOLL, INC.",
  },
  {
    cik_str: 55242,
    ticker: "KMT",
    company_name: "KENNAMETAL INC",
  },
  {
    cik_str: 1275617,
    ticker: "UTF",
    company_name: "COHEN & STEERS INFRASTRUCTURE FUND INC",
  },
  {
    cik_str: 1051512,
    ticker: "TDS",
    company_name: "TELEPHONE & DATA SYSTEMS INC /DE/",
  },
  {
    cik_str: 920822,
    ticker: "OUTKY",
    company_name: "OUTOKUMPU OY /FI",
  },
  {
    cik_str: 94049,
    ticker: "SCL",
    company_name: "STEPAN CO",
  },
  {
    cik_str: 803649,
    ticker: "EQC",
    company_name: "Equity Commonwealth",
  },
  {
    cik_str: 1534675,
    ticker: "TGLS",
    company_name: "Tecnoglass Inc.",
  },
  {
    cik_str: 936528,
    ticker: "WAFD",
    company_name: "WAFD INC",
  },
  {
    cik_str: 26780,
    ticker: "DAN",
    company_name: "DANA INC",
  },
  {
    cik_str: 701374,
    ticker: "SIX",
    company_name: "Six Flags Entertainment Corp",
  },
  {
    cik_str: 76605,
    ticker: "PATK",
    company_name: "PATRICK INDUSTRIES INC",
  },
  {
    cik_str: 1354327,
    ticker: "PGTI",
    company_name: "PGT Innovations, Inc.",
  },
  {
    cik_str: 1856485,
    ticker: "SLVM",
    company_name: "Sylvamo Corp",
  },
  {
    cik_str: 73756,
    ticker: "OII",
    company_name: "OCEANEERING INTERNATIONAL INC",
  },
  {
    cik_str: 1866175,
    ticker: "CRGY",
    company_name: "Crescent Energy Co",
  },
  {
    cik_str: 1655759,
    ticker: "ARVN",
    company_name: "ARVINAS, INC.",
  },
  {
    cik_str: 793733,
    ticker: "SKYW",
    company_name: "SKYWEST INC",
  },
  {
    cik_str: 1022408,
    ticker: "PLUS",
    company_name: "EPLUS INC",
  },
  {
    cik_str: 1263994,
    ticker: "UTG",
    company_name: "REAVES UTILITY INCOME FUND",
  },
  {
    cik_str: 1898496,
    ticker: "GETY",
    company_name: "Getty Images Holdings, Inc.",
  },
  {
    cik_str: 1921963,
    ticker: "ATMU",
    company_name: "Atmus Filtration Technologies Inc.",
  },
  {
    cik_str: 1864163,
    ticker: "INTR",
    company_name: "Inter & Co, Inc.",
  },
  {
    cik_str: 1384101,
    ticker: "VCYT",
    company_name: "VERACYTE, INC.",
  },
  {
    cik_str: 1723596,
    ticker: "CLBK",
    company_name: "Columbia Financial, Inc.",
  },
  {
    cik_str: 1413159,
    ticker: "TGH",
    company_name: "TEXTAINER GROUP HOLDINGS LTD",
  },
  {
    cik_str: 1771007,
    ticker: "AFYA",
    company_name: "Afya Ltd",
  },
  {
    cik_str: 1564618,
    ticker: "IBTX",
    company_name: "Independent Bank Group, Inc.",
  },
  {
    cik_str: 1289848,
    ticker: "HURN",
    company_name: "Huron Consulting Group Inc.",
  },
  {
    cik_str: 1329394,
    ticker: "SIMO",
    company_name: "Silicon Motion Technology CORP",
  },
  {
    cik_str: 1627475,
    ticker: "UPWK",
    company_name: "UPWORK, INC",
  },
  {
    cik_str: 1856437,
    ticker: "VSCO",
    company_name: "Victoria's Secret & Co.",
  },
  {
    cik_str: 744218,
    ticker: "CLDX",
    company_name: "Celldex Therapeutics, Inc.",
  },
  {
    cik_str: 1823652,
    ticker: "EVEX",
    company_name: "Eve Holding, Inc.",
  },
  {
    cik_str: 1317833,
    ticker: "AQPW",
    company_name: "Golden Ally Lifetech Group, Inc.",
  },
  {
    cik_str: 1525769,
    ticker: "PLAY",
    company_name: "Dave & Buster's Entertainment, Inc.",
  },
  {
    cik_str: 1552797,
    ticker: "DKL",
    company_name: "Delek Logistics Partners, LP",
  },
  {
    cik_str: 1601830,
    ticker: "RXRX",
    company_name: "RECURSION PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 827876,
    ticker: "CLSK",
    company_name: "CLEANSPARK, INC.",
  },
  {
    cik_str: 1591587,
    ticker: "AMK",
    company_name: "AssetMark Financial Holdings, Inc.",
  },
  {
    cik_str: 1293135,
    ticker: "VET",
    company_name: "VERMILION ENERGY INC.",
  },
  {
    cik_str: 1425205,
    ticker: "IOVA",
    company_name: "IOVANCE BIOTHERAPEUTICS, INC.",
  },
  {
    cik_str: 1386716,
    ticker: "SBLK",
    company_name: "Star Bulk Carriers Corp.",
  },
  {
    cik_str: 811532,
    ticker: "FUN",
    company_name: "CEDAR FAIR L P",
  },
  {
    cik_str: 1826018,
    ticker: "ROVR",
    company_name: "ROVER GROUP, INC.",
  },
  {
    cik_str: 1462120,
    ticker: "LOB",
    company_name: "Live Oak Bancshares, Inc.",
  },
  {
    cik_str: 1581280,
    ticker: "TWST",
    company_name: "Twist Bioscience Corp",
  },
  {
    cik_str: 1802665,
    ticker: "HRMY",
    company_name: "Harmony Biosciences Holdings, Inc.",
  },
  {
    cik_str: 790359,
    ticker: "NBTB",
    company_name: "NBT BANCORP INC",
  },
  {
    cik_str: 1735707,
    ticker: "GTX",
    company_name: "Garrett Motion Inc.",
  },
  {
    cik_str: 1339605,
    ticker: "HEES",
    company_name: "H&E Equipment Services, Inc.",
  },
  {
    cik_str: 1853145,
    ticker: "EVCM",
    company_name: "EverCommerce Inc.",
  },
  {
    cik_str: 1824502,
    ticker: "ACHR",
    company_name: "Archer Aviation Inc.",
  },
  {
    cik_str: 1739942,
    ticker: "SWI",
    company_name: "SolarWinds Corp",
  },
  {
    cik_str: 1576018,
    ticker: "SPNT",
    company_name: "SiriusPoint Ltd",
  },
  {
    cik_str: 1190935,
    ticker: "PTY",
    company_name: "PIMCO CORPORATE & INCOME OPPORTUNITY FUND",
  },
  {
    cik_str: 1941365,
    ticker: "MBC",
    company_name: "MasterBrand, Inc.",
  },
  {
    cik_str: 1892316,
    ticker: "LDDD",
    company_name: "Longduoduo Co Ltd",
  },
  {
    cik_str: 1260729,
    ticker: "GDV",
    company_name: "GABELLI DIVIDEND & INCOME TRUST",
  },
  {
    cik_str: 1298946,
    ticker: "DRH",
    company_name: "DiamondRock Hospitality Co",
  },
  {
    cik_str: 1742692,
    ticker: "INMD",
    company_name: "InMode Ltd.",
  },
  {
    cik_str: 1322422,
    ticker: "HBM",
    company_name: "Hudbay Minerals Inc.",
  },
  {
    cik_str: 800240,
    ticker: "ODP",
    company_name: "ODP Corp",
  },
  {
    cik_str: 1340736,
    ticker: "ETY",
    company_name: "Eaton Vance Tax-Managed Diversified Equity Income Fund",
  },
  {
    cik_str: 48287,
    ticker: "HNI",
    company_name: "HNI CORP",
  },
  {
    cik_str: 1607678,
    ticker: "VKTX",
    company_name: "Viking Therapeutics, Inc.",
  },
  {
    cik_str: 1158463,
    ticker: "JBLU",
    company_name: "JETBLUE AIRWAYS CORP",
  },
  {
    cik_str: 1692787,
    ticker: "KNTK",
    company_name: "Kinetik Holdings Inc.",
  },
  {
    cik_str: 1508655,
    ticker: "TSLX",
    company_name: "Sixth Street Specialty Lending, Inc.",
  },
  {
    cik_str: 1527590,
    ticker: "RC",
    company_name: "Ready Capital Corp",
  },
  {
    cik_str: 946673,
    ticker: "BANR",
    company_name: "BANNER CORP",
  },
  {
    cik_str: 715072,
    ticker: "RNST",
    company_name: "RENASANT CORP",
  },
  {
    cik_str: 912892,
    ticker: "TV",
    company_name: "GRUPO TELEVISA, S.A.B.",
  },
  {
    cik_str: 810136,
    ticker: "PLAB",
    company_name: "PHOTRONICS INC",
  },
  {
    cik_str: 1385280,
    ticker: "CNK",
    company_name: "Cinemark Holdings, Inc.",
  },
  {
    cik_str: 821026,
    ticker: "ANDE",
    company_name: "Andersons, Inc.",
  },
  {
    cik_str: 1649749,
    ticker: "FBK",
    company_name: "FB Financial Corp",
  },
  {
    cik_str: 1477641,
    ticker: "DQ",
    company_name: "DAQO NEW ENERGY CORP.",
  },
  {
    cik_str: 1834494,
    ticker: "MLNK",
    company_name: "MeridianLink, Inc.",
  },
  {
    cik_str: 845877,
    ticker: "AGM",
    company_name: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    cik_str: 899923,
    ticker: "MYGN",
    company_name: "MYRIAD GENETICS INC",
  },
  {
    cik_str: 1029145,
    ticker: "GOGL",
    company_name: "Golden Ocean Group Ltd",
  },
  {
    cik_str: 1851003,
    ticker: "ZETA",
    company_name: "Zeta Global Holdings Corp.",
  },
  {
    cik_str: 1350653,
    ticker: "ATEC",
    company_name: "Alphatec Holdings, Inc.",
  },
  {
    cik_str: 933267,
    ticker: "IRS",
    company_name: "IRSA INVESTMENTS & REPRESENTATIONS INC",
  },
  {
    cik_str: 703351,
    ticker: "EAT",
    company_name: "BRINKER INTERNATIONAL, INC",
  },
  {
    cik_str: 1392972,
    ticker: "PRO",
    company_name: "PROS Holdings, Inc.",
  },
  {
    cik_str: 203596,
    ticker: "WSBC",
    company_name: "WESBANCO INC",
  },
  {
    cik_str: 1029142,
    ticker: "DVAX",
    company_name: "DYNAVAX TECHNOLOGIES CORP",
  },
  {
    cik_str: 933036,
    ticker: "UPBD",
    company_name: "UPBOUND GROUP, INC.",
  },
  {
    cik_str: 1845815,
    ticker: "PAYO",
    company_name: "Payoneer Global Inc.",
  },
  {
    cik_str: 1599298,
    ticker: "SMMT",
    company_name: "Summit Therapeutics Inc.",
  },
  {
    cik_str: 1575828,
    ticker: "XPRO",
    company_name: "EXPRO GROUP HOLDINGS N.V.",
  },
  {
    cik_str: 1773751,
    ticker: "HIMS",
    company_name: "Hims & Hers Health, Inc.",
  },
  {
    cik_str: 1288469,
    ticker: "MXL",
    company_name: "MAXLINEAR, INC",
  },
  {
    cik_str: 1438133,
    ticker: "TNDM",
    company_name: "TANDEM DIABETES CARE INC",
  },
  {
    cik_str: 751978,
    ticker: "VICR",
    company_name: "VICOR CORP",
  },
  {
    cik_str: 812801,
    ticker: "NUV",
    company_name: "NUVEEN MUNICIPAL VALUE FUND INC",
  },
  {
    cik_str: 1096752,
    ticker: "EPC",
    company_name: "EDGEWELL PERSONAL CARE Co",
  },
  {
    cik_str: 1792849,
    ticker: "HPK",
    company_name: "HighPeak Energy, Inc.",
  },
  {
    cik_str: 1408100,
    ticker: "KW",
    company_name: "Kennedy-Wilson Holdings, Inc.",
  },
  {
    cik_str: 1669811,
    ticker: "DFIN",
    company_name: "Donnelley Financial Solutions, Inc.",
  },
  {
    cik_str: 1050377,
    ticker: "CNXN",
    company_name: "PC CONNECTION INC",
  },
  {
    cik_str: 1407623,
    ticker: "ROIC",
    company_name: "RETAIL OPPORTUNITY INVESTMENTS CORP",
  },
  {
    cik_str: 59440,
    ticker: "VGR",
    company_name: "VECTOR GROUP LTD",
  },
  {
    cik_str: 1067294,
    ticker: "CBRL",
    company_name: "CRACKER BARREL OLD COUNTRY STORE, INC",
  },
  {
    cik_str: 1715497,
    ticker: "BORR",
    company_name: "Borr Drilling Ltd",
  },
  {
    cik_str: 1307748,
    ticker: "IVT",
    company_name: "InvenTrust Properties Corp.",
  },
  {
    cik_str: 1984060,
    ticker: "AESI",
    company_name: "Atlas Energy Solutions Inc.",
  },
  {
    cik_str: 1539638,
    ticker: "TFIN",
    company_name: "Triumph Financial, Inc.",
  },
  {
    cik_str: 1361538,
    ticker: "PRIM",
    company_name: "Primoris Services Corp",
  },
  {
    cik_str: 1043509,
    ticker: "SAH",
    company_name: "SONIC AUTOMOTIVE INC",
  },
  {
    cik_str: 1568651,
    ticker: "OSCR",
    company_name: "Oscar Health, Inc.",
  },
  {
    cik_str: 1888447,
    ticker: "EE",
    company_name: "Excelerate Energy, Inc.",
  },
  {
    cik_str: 310354,
    ticker: "SXI",
    company_name: "STANDEX INTERNATIONAL CORP/DE/",
  },
  {
    cik_str: 1635984,
    ticker: "NWLI",
    company_name: "National Western Life Group, Inc.",
  },
  {
    cik_str: 18926,
    ticker: "LUMN",
    company_name: "Lumen Technologies, Inc.",
  },
  {
    cik_str: 1850270,
    ticker: "PROK",
    company_name: "PROKIDNEY CORP.",
  },
  {
    cik_str: 107140,
    ticker: "WLY",
    company_name: "JOHN WILEY & SONS, INC.",
  },
  {
    cik_str: 1532961,
    ticker: "NVEE",
    company_name: "NV5 Global, Inc.",
  },
  {
    cik_str: 1620393,
    ticker: "NXRT",
    company_name: "NexPoint Residential Trust, Inc.",
  },
  {
    cik_str: 887359,
    ticker: "VCEL",
    company_name: "Vericel Corp",
  },
  {
    cik_str: 1596993,
    ticker: "LPG",
    company_name: "DORIAN LPG LTD.",
  },
  {
    cik_str: 1629019,
    ticker: "MBIN",
    company_name: "Merchants Bancorp",
  },
  {
    cik_str: 1166388,
    ticker: "VRNT",
    company_name: "VERINT SYSTEMS INC",
  },
  {
    cik_str: 1308648,
    ticker: "AG",
    company_name: "FIRST MAJESTIC SILVER CORP",
  },
  {
    cik_str: 1724965,
    ticker: "TALO",
    company_name: "TALOS ENERGY INC.",
  },
  {
    cik_str: 1030469,
    ticker: "OFG",
    company_name: "OFG BANCORP",
  },
  {
    cik_str: 1446847,
    ticker: "IRWD",
    company_name: "IRONWOOD PHARMACEUTICALS INC",
  },
  {
    cik_str: 105418,
    ticker: "WMK",
    company_name: "WEIS MARKETS INC",
  },
  {
    cik_str: 1481513,
    ticker: "JKS",
    company_name: "JinkoSolar Holding Co., Ltd.",
  },
  {
    cik_str: 103145,
    ticker: "VECO",
    company_name: "VEECO INSTRUMENTS INC",
  },
  {
    cik_str: 1694426,
    ticker: "DK",
    company_name: "Delek US Holdings, Inc.",
  },
  {
    cik_str: 1496919,
    ticker: "MRRTY",
    company_name: "MARFRIG GLOBAL FOODS S.A.",
  },
  {
    cik_str: 1474098,
    ticker: "PEB",
    company_name: "Pebblebrook Hotel Trust",
  },
  {
    cik_str: 1681769,
    ticker: "CCYC",
    company_name: "BRILLIANT N.E.V. CORP.",
  },
  {
    cik_str: 887596,
    ticker: "CAKE",
    company_name: "CHEESECAKE FACTORY INC",
  },
  {
    cik_str: 1840572,
    ticker: "BOWL",
    company_name: "Bowlero Corp.",
  },
  {
    cik_str: 75252,
    ticker: "OMI",
    company_name: "OWENS & MINOR INC/VA/",
  },
  {
    cik_str: 1839839,
    ticker: "JBI",
    company_name: "Janus International Group, Inc.",
  },
  {
    cik_str: 1467760,
    ticker: "ARI",
    company_name: "Apollo Commercial Real Estate Finance, Inc.",
  },
  {
    cik_str: 926326,
    ticker: "OMCL",
    company_name: "OMNICELL, INC.",
  },
  {
    cik_str: 1831840,
    ticker: "SEMR",
    company_name: "SEMrush Holdings, Inc.",
  },
  {
    cik_str: 799195,
    ticker: "USA",
    company_name: "LIBERTY ALL STAR EQUITY FUND",
  },
  {
    cik_str: 1419945,
    ticker: "TNK",
    company_name: "TEEKAY TANKERS LTD.",
  },
  {
    cik_str: 1048268,
    ticker: "IESC",
    company_name: "IES Holdings, Inc.",
  },
  {
    cik_str: 1500217,
    ticker: "AAT",
    company_name: "American Assets Trust, Inc.",
  },
  {
    cik_str: 1616318,
    ticker: "VSTO",
    company_name: "Vista Outdoor Inc.",
  },
  {
    cik_str: 899629,
    ticker: "AKR",
    company_name: "ACADIA REALTY TRUST",
  },
  {
    cik_str: 1689796,
    ticker: "JBGS",
    company_name: "JBG SMITH Properties",
  },
  {
    cik_str: 36146,
    ticker: "TRMK",
    company_name: "TRUSTMARK CORP",
  },
  {
    cik_str: 1488813,
    ticker: "CUBI",
    company_name: "Customers Bancorp, Inc.",
  },
  {
    cik_str: 1323885,
    ticker: "ATRC",
    company_name: "AtriCure, Inc.",
  },
  {
    cik_str: 1836057,
    ticker: "BIGZ",
    company_name: "BlackRock Innovation & Growth Term Trust",
  },
  {
    cik_str: 1411579,
    ticker: "AMC",
    company_name: "AMC ENTERTAINMENT HOLDINGS, INC.",
  },
  {
    cik_str: 1772695,
    ticker: "NOVA",
    company_name: "Sunnova Energy International Inc.",
  },
  {
    cik_str: 1819796,
    ticker: "GCMG",
    company_name: "GCM Grosvenor Inc.",
  },
  {
    cik_str: 1822492,
    ticker: "HLMN",
    company_name: "Hillman Solutions Corp.",
  },
  {
    cik_str: 97134,
    ticker: "TNC",
    company_name: "TENNANT CO",
  },
  {
    cik_str: 721994,
    ticker: "LKFN",
    company_name: "LAKELAND FINANCIAL CORP",
  },
  {
    cik_str: 1549346,
    ticker: "SSTK",
    company_name: "Shutterstock, Inc.",
  },
  {
    cik_str: 1406587,
    ticker: "FOR",
    company_name: "Forestar Group Inc.",
  },
  {
    cik_str: 1498547,
    ticker: "CMRF",
    company_name: "CIM REAL ESTATE FINANCE TRUST, INC.",
  },
  {
    cik_str: 1498710,
    ticker: "SAVE",
    company_name: "Spirit Airlines, Inc.",
  },
  {
    cik_str: 1853860,
    ticker: "ERO",
    company_name: "Ero Copper Corp.",
  },
  {
    cik_str: 1526125,
    ticker: "GDS",
    company_name: "GDS Holdings Ltd",
  },
  {
    cik_str: 912728,
    ticker: "FWRD",
    company_name: "FORWARD AIR CORP",
  },
  {
    cik_str: 1253327,
    ticker: "EVT",
    company_name: "EATON VANCE TAX ADVANTAGED DIVIDEND INCOME FUND",
  },
  {
    cik_str: 21535,
    ticker: "COHU",
    company_name: "COHU INC",
  },
  {
    cik_str: 1101215,
    ticker: "BFH",
    company_name: "BREAD FINANCIAL HOLDINGS, INC.",
  },
  {
    cik_str: 1597033,
    ticker: "SABR",
    company_name: "Sabre Corp",
  },
  {
    cik_str: 1572694,
    ticker: "GSBD",
    company_name: "Goldman Sachs BDC, Inc.",
  },
  {
    cik_str: 1864843,
    ticker: "ECAT",
    company_name: "BlackRock ESG Capital Allocation Term Trust",
  },
  {
    cik_str: 1488139,
    ticker: "AMRC",
    company_name: "Ameresco, Inc.",
  },
  {
    cik_str: 1025835,
    ticker: "EFSC",
    company_name: "ENTERPRISE FINANCIAL SERVICES CORP",
  },
  {
    cik_str: 1331284,
    ticker: "DHT",
    company_name: "DHT Holdings, Inc.",
  },
  {
    cik_str: 1070985,
    ticker: "CXW",
    company_name: "CoreCivic, Inc.",
  },
  {
    cik_str: 1653477,
    ticker: "NGVT",
    company_name: "Ingevity Corp",
  },
  {
    cik_str: 1871130,
    ticker: "BBUC",
    company_name: "Brookfield Business Corp",
  },
  {
    cik_str: 1828962,
    ticker: "CRCT",
    company_name: "Cricut, Inc.",
  },
  {
    cik_str: 1357450,
    ticker: "HOLI",
    company_name: "Hollysys Automation Technologies, Ltd.",
  },
  {
    cik_str: 18654,
    ticker: "AILIH",
    company_name: "Ameren Illinois Co",
  },
  {
    cik_str: 1854587,
    ticker: "CLBT",
    company_name: "Cellebrite DI Ltd.",
  },
  {
    cik_str: 807882,
    ticker: "JACK",
    company_name: "JACK IN THE BOX INC",
  },
  {
    cik_str: 903129,
    ticker: "THRM",
    company_name: "GENTHERM Inc",
  },
  {
    cik_str: 799167,
    ticker: "MRTN",
    company_name: "MARTEN TRANSPORT LTD",
  },
  {
    cik_str: 814083,
    ticker: "CLM",
    company_name: "CORNERSTONE STRATEGIC VALUE FUND INC",
  },
  {
    cik_str: 718937,
    ticker: "STAA",
    company_name: "STAAR SURGICAL CO",
  },
  {
    cik_str: 1083446,
    ticker: "AMEH",
    company_name: "Apollo Medical Holdings, Inc.",
  },
  {
    cik_str: 1380936,
    ticker: "GOF",
    company_name: "GUGGENHEIM STRATEGIC OPPORTUNITIES FUND",
  },
  {
    cik_str: 1078075,
    ticker: "NTCT",
    company_name: "NETSCOUT SYSTEMS INC",
  },
  {
    cik_str: 1095651,
    ticker: "SAFE",
    company_name: "Safehold Inc.",
  },
  {
    cik_str: 726854,
    ticker: "CHCO",
    company_name: "CITY HOLDING CO",
  },
  {
    cik_str: 50493,
    ticker: "IMKTA",
    company_name: "INGLES MARKETS INC",
  },
  {
    cik_str: 1809541,
    ticker: "BCAT",
    company_name: "BlackRock Capital Allocation Term Trust",
  },
  {
    cik_str: 1529864,
    ticker: "ENVA",
    company_name: "Enova International, Inc.",
  },
  {
    cik_str: 1759425,
    ticker: "MIRM",
    company_name: "Mirum Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1034957,
    ticker: "CRESY",
    company_name: "CRESUD INC",
  },
  {
    cik_str: 745543,
    ticker: "PBAJ",
    company_name: "PETRO USA, INC.",
  },
  {
    cik_str: 6955,
    ticker: "EPAC",
    company_name: "ENERPAC TOOL GROUP CORP",
  },
  {
    cik_str: 1587523,
    ticker: "KN",
    company_name: "Knowles Corp",
  },
  {
    cik_str: 821002,
    ticker: "GIII",
    company_name: "G III APPAREL GROUP LTD /DE/",
  },
  {
    cik_str: 1157842,
    ticker: "RQI",
    company_name: "COHEN & STEERS QUALITY INCOME REALTY FUND INC",
  },
  {
    cik_str: 75288,
    ticker: "OXM",
    company_name: "OXFORD INDUSTRIES INC",
  },
  {
    cik_str: 920112,
    ticker: "HTLF",
    company_name: "HEARTLAND FINANCIAL USA INC",
  },
  {
    cik_str: 1414932,
    ticker: "OCSL",
    company_name: "Oaktree Specialty Lending Corp",
  },
  {
    cik_str: 883237,
    ticker: "VRTS",
    company_name: "VIRTUS INVESTMENT PARTNERS, INC.",
  },
  {
    cik_str: 1074952,
    ticker: "NAC",
    company_name: "Nuveen California Quality Municipal Income Fund",
  },
  {
    cik_str: 1116942,
    ticker: "TTMI",
    company_name: "TTM TECHNOLOGIES INC",
  },
  {
    cik_str: 1974138,
    ticker: "NATL",
    company_name: "NCR Atleos Corp",
  },
  {
    cik_str: 1674335,
    ticker: "JELD",
    company_name: "JELD-WEN Holding, Inc.",
  },
  {
    cik_str: 876883,
    ticker: "STGW",
    company_name: "Stagwell Inc",
  },
  {
    cik_str: 1395942,
    ticker: "KAR",
    company_name: "OPENLANE, Inc.",
  },
  {
    cik_str: 804116,
    ticker: "RVT",
    company_name: "ROYCE VALUE TRUST, INC.",
  },
  {
    cik_str: 1723128,
    ticker: "AMRX",
    company_name: "Amneal Pharmaceuticals, Inc.",
  },
  {
    cik_str: 354707,
    ticker: "HE",
    company_name: "HAWAIIAN ELECTRIC INDUSTRIES INC",
  },
  {
    cik_str: 1005757,
    ticker: "CSGS",
    company_name: "CSG SYSTEMS INTERNATIONAL INC",
  },
  {
    cik_str: 1471265,
    ticker: "NWBI",
    company_name: "Northwest Bancshares, Inc.",
  },
  {
    cik_str: 1785971,
    ticker: "BMEZ",
    company_name: "BlackRock Health Sciences Term Trust",
  },
  {
    cik_str: 742278,
    ticker: "RES",
    company_name: "RPC INC",
  },
  {
    cik_str: 1309402,
    ticker: "GPRE",
    company_name: "Green Plains Inc.",
  },
  {
    cik_str: 1772253,
    ticker: "FLNG",
    company_name: "Flex LNG Ltd.",
  },
  {
    cik_str: 1856031,
    ticker: "SEAT",
    company_name: "Vivid Seats Inc.",
  },
  {
    cik_str: 794685,
    ticker: "GAB",
    company_name: "GABELLI EQUITY TRUST INC",
  },
  {
    cik_str: 1653242,
    ticker: "NTB",
    company_name: "Bank of N.T. Butterfield & Son Ltd",
  },
  {
    cik_str: 1710155,
    ticker: "EYE",
    company_name: "National Vision Holdings, Inc.",
  },
  {
    cik_str: 1578732,
    ticker: "MMI",
    company_name: "Marcus & Millichap, Inc.",
  },
  {
    cik_str: 1703057,
    ticker: "ABCL",
    company_name: "AbCellera Biologics Inc.",
  },
  {
    cik_str: 1289877,
    ticker: "SFL",
    company_name: "SFL Corp Ltd.",
  },
  {
    cik_str: 1777921,
    ticker: "AVPT",
    company_name: "AvePoint, Inc.",
  },
  {
    cik_str: 1868726,
    ticker: "OLPX",
    company_name: "OLAPLEX HOLDINGS, INC.",
  },
  {
    cik_str: 885740,
    ticker: "SPNS",
    company_name: "SAPIENS INTERNATIONAL CORP N V",
  },
  {
    cik_str: 1063259,
    ticker: "DNN",
    company_name: "DENISON MINES CORP.",
  },
  {
    cik_str: 102037,
    ticker: "UVV",
    company_name: "UNIVERSAL CORP /VA/",
  },
  {
    cik_str: 712537,
    ticker: "FCF",
    company_name: "FIRST COMMONWEALTH FINANCIAL CORP /PA/",
  },
  {
    cik_str: 94344,
    ticker: "STC",
    company_name: "STEWART INFORMATION SERVICES CORP",
  },
  {
    cik_str: 1878057,
    ticker: "SGHC",
    company_name: "Super Group (SGHC) Ltd",
  },
  {
    cik_str: 906338,
    ticker: "TARO",
    company_name: "TARO PHARMACEUTICAL INDUSTRIES LTD",
  },
  {
    cik_str: 811589,
    ticker: "FBNC",
    company_name: "FIRST BANCORP /NC/",
  },
  {
    cik_str: 1052752,
    ticker: "GTY",
    company_name: "GETTY REALTY CORP /MD/",
  },
  {
    cik_str: 1829959,
    ticker: "DCBO",
    company_name: "Docebo Inc.",
  },
  {
    cik_str: 57131,
    ticker: "LZB",
    company_name: "LA-Z-BOY INC",
  },
  {
    cik_str: 908315,
    ticker: "WINA",
    company_name: "WINMARK CORP",
  },
  {
    cik_str: 1375877,
    ticker: "CSIQ",
    company_name: "Canadian Solar Inc.",
  },
  {
    cik_str: 1657788,
    ticker: "KRP",
    company_name: "Kimbell Royalty Partners, LP",
  },
  {
    cik_str: 1345126,
    ticker: "CODI",
    company_name: "Compass Diversified Holdings",
  },
  {
    cik_str: 1825367,
    ticker: "RYZB",
    company_name: "RayzeBio, Inc.",
  },
  {
    cik_str: 1468328,
    ticker: "ADUS",
    company_name: "Addus HomeCare Corp",
  },
  {
    cik_str: 924901,
    ticker: "VRE",
    company_name: "Veris Residential, Inc.",
  },
  {
    cik_str: 1369568,
    ticker: "CPRX",
    company_name: "CATALYST PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1679363,
    ticker: "MORF",
    company_name: "Morphic Holding, Inc.",
  },
  {
    cik_str: 1609804,
    ticker: "OEC",
    company_name: "Orion S.A.",
  },
  {
    cik_str: 99614,
    ticker: "TY",
    company_name: "TRI-CONTINENTAL CORP",
  },
  {
    cik_str: 9984,
    ticker: "B",
    company_name: "BARNES GROUP INC",
  },
  {
    cik_str: 1743759,
    ticker: "CRSR",
    company_name: "Corsair Gaming, Inc.",
  },
  {
    cik_str: 1362468,
    ticker: "ALGT",
    company_name: "Allegiant Travel CO",
  },
  {
    cik_str: 1811764,
    ticker: "PNT",
    company_name: "POINT Biopharma Global Inc.",
  },
  {
    cik_str: 1709682,
    ticker: "CTOS",
    company_name: "Custom Truck One Source, Inc.",
  },
  {
    cik_str: 311094,
    ticker: "WABC",
    company_name: "WESTAMERICA BANCORPORATION",
  },
  {
    cik_str: 1823239,
    ticker: "MRVI",
    company_name: "MARAVAI LIFESCIENCES HOLDINGS, INC.",
  },
  {
    cik_str: 1952073,
    ticker: "MSGE",
    company_name: "Madison Square Garden Entertainment Corp.",
  },
  {
    cik_str: 1832466,
    ticker: "ALHC",
    company_name: "Alignment Healthcare, Inc.",
  },
  {
    cik_str: 1731348,
    ticker: "TLRY",
    company_name: "Tilray Brands, Inc.",
  },
  {
    cik_str: 1482981,
    ticker: "COCO",
    company_name: "Vita Coco Company, Inc.",
  },
  {
    cik_str: 866829,
    ticker: "HLX",
    company_name: "HELIX ENERGY SOLUTIONS GROUP INC",
  },
  {
    cik_str: 1761312,
    ticker: "PLMR",
    company_name: "Palomar Holdings, Inc.",
  },
  {
    cik_str: 1267395,
    ticker: "AHL-PC",
    company_name: "ASPEN INSURANCE HOLDINGS LTD",
  },
  {
    cik_str: 835324,
    ticker: "SYBT",
    company_name: "Stock Yards Bancorp, Inc.",
  },
  {
    cik_str: 1338940,
    ticker: "PERI",
    company_name: "Perion Network Ltd.",
  },
  {
    cik_str: 1024795,
    ticker: "HLIO",
    company_name: "HELIOS TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1756607,
    ticker: "EQX",
    company_name: "Equinox Gold Corp.",
  },
  {
    cik_str: 46250,
    ticker: "HWKN",
    company_name: "HAWKINS INC",
  },
  {
    cik_str: 1866550,
    ticker: "TWKS",
    company_name: "Thoughtworks Holding, Inc.",
  },
  {
    cik_str: 1356576,
    ticker: "SUPN",
    company_name: "SUPERNUS PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1322436,
    ticker: "ETV",
    company_name: "Eaton Vance Tax-Managed Buy-Write Opportunities Fund",
  },
  {
    cik_str: 1866692,
    ticker: "AMPL",
    company_name: "Amplitude, Inc.",
  },
  {
    cik_str: 1473844,
    ticker: "STEL",
    company_name: "Stellar Bancorp, Inc.",
  },
  {
    cik_str: 794619,
    ticker: "AMWD",
    company_name: "AMERICAN WOODMARK CORP",
  },
  {
    cik_str: 1767258,
    ticker: "XPEL",
    company_name: "XPEL, Inc.",
  },
  {
    cik_str: 1022321,
    ticker: "GEL",
    company_name: "GENESIS ENERGY LP",
  },
  {
    cik_str: 1781755,
    ticker: "BRP",
    company_name: "BRP Group, Inc.",
  },
  {
    cik_str: 1528437,
    ticker: "BTT",
    company_name: "BlackRock Municipal 2030 Target Term Trust",
  },
  {
    cik_str: 836157,
    ticker: "LNN",
    company_name: "LINDSAY CORP",
  },
  {
    cik_str: 1946425,
    ticker: "HHRS",
    company_name: "Hammerhead Energy Inc.",
  },
  {
    cik_str: 1332283,
    ticker: "BDJ",
    company_name: "BlackRock Enhanced Equity Dividend Trust",
  },
  {
    cik_str: 1636639,
    ticker: "FIHL",
    company_name: "Fidelis Insurance Holdings Ltd",
  },
  {
    cik_str: 1180262,
    ticker: "HLF",
    company_name: "HERBALIFE LTD.",
  },
  {
    cik_str: 1577670,
    ticker: "LADR",
    company_name: "Ladder Capital Corp",
  },
  {
    cik_str: 1821769,
    ticker: "NVTS",
    company_name: "Navitas Semiconductor Corp",
  },
  {
    cik_str: 88941,
    ticker: "SMTC",
    company_name: "SEMTECH CORP",
  },
  {
    cik_str: 1835591,
    ticker: "VZIO",
    company_name: "Vizio Holding Corp.",
  },
  {
    cik_str: 1654795,
    ticker: "BBU",
    company_name: "Brookfield Business Partners L.P.",
  },
  {
    cik_str: 1767042,
    ticker: "KGS",
    company_name: "Kodiak Gas Services, Inc.",
  },
  {
    cik_str: 1434614,
    ticker: "SAND",
    company_name: "SANDSTORM GOLD LTD",
  },
  {
    cik_str: 1651311,
    ticker: "MRUS",
    company_name: "Merus N.V.",
  },
  {
    cik_str: 1576427,
    ticker: "CRTO",
    company_name: "Criteo S.A.",
  },
  {
    cik_str: 1047335,
    ticker: "NHC",
    company_name: "NATIONAL HEALTHCARE CORP",
  },
  {
    cik_str: 1733998,
    ticker: "NWN",
    company_name: "Northwest Natural Holding Co",
  },
  {
    cik_str: 1293613,
    ticker: "KYN",
    company_name: "Kayne Anderson Energy Infrastructure Fund, Inc.",
  },
  {
    cik_str: 945114,
    ticker: "GIC",
    company_name: "GLOBAL INDUSTRIAL Co",
  },
  {
    cik_str: 1128361,
    ticker: "HOPE",
    company_name: "HOPE BANCORP INC",
  },
  {
    cik_str: 1359841,
    ticker: "HBI",
    company_name: "Hanesbrands Inc.",
  },
  {
    cik_str: 1876183,
    ticker: "IHS",
    company_name: "IHS Holding Ltd",
  },
  {
    cik_str: 1475841,
    ticker: "NBHC",
    company_name: "National Bank Holdings Corp",
  },
  {
    cik_str: 1396814,
    ticker: "PCRX",
    company_name: "Pacira BioSciences, Inc.",
  },
  {
    cik_str: 1645113,
    ticker: "NVCR",
    company_name: "NovoCure Ltd",
  },
  {
    cik_str: 1395937,
    ticker: "SNDX",
    company_name: "Syndax Pharmaceuticals Inc",
  },
  {
    cik_str: 1816736,
    ticker: "IRON",
    company_name: "Disc Medicine, Inc.",
  },
  {
    cik_str: 1712184,
    ticker: "LILA",
    company_name: "Liberty Latin America Ltd.",
  },
  {
    cik_str: 1820144,
    ticker: "GRND",
    company_name: "Grindr Inc.",
  },
  {
    cik_str: 1815442,
    ticker: "KYMR",
    company_name: "Kymera Therapeutics, Inc.",
  },
  {
    cik_str: 1727196,
    ticker: "SRRK",
    company_name: "Scholar Rock Holding Corp",
  },
  {
    cik_str: 1111485,
    ticker: "RXST",
    company_name: "RxSight, Inc.",
  },
  {
    cik_str: 356171,
    ticker: "TCBK",
    company_name: "TRICO BANCSHARES /",
  },
  {
    cik_str: 1275014,
    ticker: "UCTT",
    company_name: "Ultra Clean Holdings, Inc.",
  },
  {
    cik_str: 1616000,
    ticker: "XHR",
    company_name: "Xenia Hotels & Resorts, Inc.",
  },
  {
    cik_str: 1704720,
    ticker: "CNNE",
    company_name: "Cannae Holdings, Inc.",
  },
  {
    cik_str: 1569963,
    ticker: "LTGHY",
    company_name: "Life Healthcare Group Holdings Limited/ADR",
  },
  {
    cik_str: 945394,
    ticker: "SVC",
    company_name: "Service Properties Trust",
  },
  {
    cik_str: 1601548,
    ticker: "VVX",
    company_name: "V2X, Inc.",
  },
  {
    cik_str: 887905,
    ticker: "LTC",
    company_name: "LTC PROPERTIES INC",
  },
  {
    cik_str: 703604,
    ticker: "DSGR",
    company_name: "Distribution Solutions Group, Inc.",
  },
  {
    cik_str: 914156,
    ticker: "UFPT",
    company_name: "UFP TECHNOLOGIES INC",
  },
  {
    cik_str: 1050825,
    ticker: "SCS",
    company_name: "STEELCASE INC",
  },
  {
    cik_str: 1468091,
    ticker: "VEON",
    company_name: "VEON Ltd.",
  },
  {
    cik_str: 1809122,
    ticker: "CVAC",
    company_name: "CureVac N.V.",
  },
  {
    cik_str: 1875444,
    ticker: "ARHS",
    company_name: "Arhaus, Inc.",
  },
  {
    cik_str: 98677,
    ticker: "TR",
    company_name: "TOOTSIE ROLL INDUSTRIES INC",
  },
  {
    cik_str: 1519449,
    ticker: "SKWD",
    company_name: "Skyward Specialty Insurance Group, Inc.",
  },
  {
    cik_str: 1368458,
    ticker: "SBH",
    company_name: "Sally Beauty Holdings, Inc.",
  },
  {
    cik_str: 1369241,
    ticker: "DAC",
    company_name: "Danaos Corp",
  },
  {
    cik_str: 1465740,
    ticker: "TWO",
    company_name: "TWO HARBORS INVESTMENT CORP.",
  },
  {
    cik_str: 1848416,
    ticker: "VRNOF",
    company_name: "Verano Holdings Corp.",
  },
  {
    cik_str: 1610601,
    ticker: "MOMO",
    company_name: "Hello Group Inc.",
  },
  {
    cik_str: 1437402,
    ticker: "ARDX",
    company_name: "ARDELYX, INC.",
  },
  {
    cik_str: 1340122,
    ticker: "CLMT",
    company_name: "Calumet Specialty Products Partners, L.P.",
  },
  {
    cik_str: 1178970,
    ticker: "PFS",
    company_name: "PROVIDENT FINANCIAL SERVICES INC",
  },
  {
    cik_str: 930420,
    ticker: "KFRC",
    company_name: "KFORCE INC",
  },
  {
    cik_str: 1808834,
    ticker: "PRG",
    company_name: "PROG Holdings, Inc.",
  },
  {
    cik_str: 1657312,
    ticker: "VRNA",
    company_name: "Verona Pharma plc",
  },
  {
    cik_str: 1830487,
    ticker: "PHVS",
    company_name: "Pharvaris N.V.",
  },
  {
    cik_str: 850141,
    ticker: "HMN",
    company_name: "HORACE MANN EDUCATORS CORP /DE/",
  },
  {
    cik_str: 1504776,
    ticker: "WRBY",
    company_name: "Warby Parker Inc.",
  },
  {
    cik_str: 314489,
    ticker: "BUSE",
    company_name: "FIRST BUSEY CORP /NV/",
  },
  {
    cik_str: 1298699,
    ticker: "BXMX",
    company_name: "Nuveen S&P 500 BuyWrite Income Fund",
  },
  {
    cik_str: 907471,
    ticker: "CASH",
    company_name: "PATHWARD FINANCIAL, INC.",
  },
  {
    cik_str: 1496099,
    ticker: "NMFC",
    company_name: "New Mountain Finance Corp",
  },
  {
    cik_str: 1798618,
    ticker: "PDO",
    company_name: "PIMCO Dynamic Income Opportunities Fund",
  },
  {
    cik_str: 1706431,
    ticker: "VIR",
    company_name: "Vir Biotechnology, Inc.",
  },
  {
    cik_str: 1600620,
    ticker: "AUPH",
    company_name: "Aurinia Pharmaceuticals Inc.",
  },
  {
    cik_str: 923120,
    ticker: "GBX",
    company_name: "GREENBRIER COMPANIES INC",
  },
  {
    cik_str: 885978,
    ticker: "USPH",
    company_name: "U S PHYSICAL THERAPY INC /NV",
  },
  {
    cik_str: 1617553,
    ticker: "ZIP",
    company_name: "ZIPRECRUITER, INC.",
  },
  {
    cik_str: 1323468,
    ticker: "GLP",
    company_name: "GLOBAL PARTNERS LP",
  },
  {
    cik_str: 215466,
    ticker: "CDE",
    company_name: "Coeur Mining, Inc.",
  },
  {
    cik_str: 1620280,
    ticker: "UNIT",
    company_name: "Uniti Group Inc.",
  },
  {
    cik_str: 102426,
    ticker: "STEW",
    company_name: "SRH Total Return Fund, Inc.",
  },
  {
    cik_str: 1691445,
    ticker: "FINV",
    company_name: "FinVolution Group",
  },
  {
    cik_str: 1724521,
    ticker: "RCUS",
    company_name: "Arcus Biosciences, Inc.",
  },
  {
    cik_str: 110095,
    ticker: "NISUY",
    company_name: "NIPPON SUISAN KAISHA LTD /ADR/",
  },
  {
    cik_str: 8947,
    ticker: "AZZ",
    company_name: "AZZ INC",
  },
  {
    cik_str: 26058,
    ticker: "CTS",
    company_name: "CTS CORP",
  },
  {
    cik_str: 1545654,
    ticker: "ALEX",
    company_name: "Alexander & Baldwin, Inc.",
  },
  {
    cik_str: 1657573,
    ticker: "XMTR",
    company_name: "Xometry, Inc.",
  },
  {
    cik_str: 1371285,
    ticker: "TRUP",
    company_name: "TRUPANION, INC.",
  },
  {
    cik_str: 1622194,
    ticker: "DEA",
    company_name: "Easterly Government Properties, Inc.",
  },
  {
    cik_str: 923796,
    ticker: "GEO",
    company_name: "GEO GROUP INC",
  },
  {
    cik_str: 1464423,
    ticker: "PMT",
    company_name: "PennyMac Mortgage Investment Trust",
  },
  {
    cik_str: 1739614,
    ticker: "INBX",
    company_name: "Inhibrx, Inc.",
  },
  {
    cik_str: 789460,
    ticker: "WKC",
    company_name: "WORLD KINECT CORP",
  },
  {
    cik_str: 1968915,
    ticker: "PHIN",
    company_name: "PHINIA INC.",
  },
  {
    cik_str: 34782,
    ticker: "SRCE",
    company_name: "1ST SOURCE CORP",
  },
  {
    cik_str: 1222401,
    ticker: "HYT",
    company_name: "BLACKROCK CORPORATE HIGH YIELD FUND, INC.",
  },
  {
    cik_str: 1834489,
    ticker: "GENI",
    company_name: "Genius Sports Ltd",
  },
  {
    cik_str: 1841925,
    ticker: "INDI",
    company_name: "indie Semiconductor, Inc.",
  },
  {
    cik_str: 1768666,
    ticker: "BSTZ",
    company_name: "BlackRock Science & Technology Term Trust",
  },
  {
    cik_str: 1758488,
    ticker: "OSW",
    company_name: "ONESPAWORLD HOLDINGS Ltd",
  },
  {
    cik_str: 82020,
    ticker: "USLM",
    company_name: "UNITED STATES LIME & MINERALS INC",
  },
  {
    cik_str: 1270523,
    ticker: "ETG",
    company_name: "EATON VANCE TAX ADVANTAGED GLOBAL DIVIDEND INCOME FUND",
  },
  {
    cik_str: 949039,
    ticker: "DO",
    company_name: "DIAMOND OFFSHORE DRILLING, INC.",
  },
  {
    cik_str: 1537054,
    ticker: "GOGO",
    company_name: "Gogo Inc.",
  },
  {
    cik_str: 1340243,
    ticker: "MOR",
    company_name: "MorphoSys AG",
  },
  {
    cik_str: 1879016,
    ticker: "IE",
    company_name: "Ivanhoe Electric Inc.",
  },
  {
    cik_str: 1881487,
    ticker: "ACDC",
    company_name: "ProFrac Holding Corp.",
  },
  {
    cik_str: 1846510,
    ticker: "SHCO",
    company_name: "Soho House & Co Inc.",
  },
  {
    cik_str: 1654151,
    ticker: "DCPH",
    company_name: "Deciphera Pharmaceuticals, Inc.",
  },
  {
    cik_str: 907242,
    ticker: "MCRI",
    company_name: "MONARCH CASINO & RESORT INC",
  },
  {
    cik_str: 1597553,
    ticker: "SAGE",
    company_name: "Sage Therapeutics, Inc.",
  },
  {
    cik_str: 1439222,
    ticker: "AGIO",
    company_name: "AGIOS PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1326732,
    ticker: "XNCR",
    company_name: "Xencor Inc",
  },
  {
    cik_str: 1854640,
    ticker: "CGAU",
    company_name: "Centerra Gold Inc.",
  },
  {
    cik_str: 1744659,
    ticker: "AKRO",
    company_name: "Akero Therapeutics, Inc.",
  },
  {
    cik_str: 1730430,
    ticker: "KNSA",
    company_name: "Kiniksa Pharmaceuticals, Ltd.",
  },
  {
    cik_str: 1563190,
    ticker: "COMP",
    company_name: "Compass, Inc.",
  },
  {
    cik_str: 907254,
    ticker: "BFS",
    company_name: "SAUL CENTERS, INC.",
  },
  {
    cik_str: 1826600,
    ticker: "MNTK",
    company_name: "Montauk Renewables, Inc.",
  },
  {
    cik_str: 1840199,
    ticker: "WALD",
    company_name: "Waldencast plc",
  },
  {
    cik_str: 1528129,
    ticker: "VTLE",
    company_name: "Vital Energy, Inc.",
  },
  {
    cik_str: 1069530,
    ticker: "SAVA",
    company_name: "CASSAVA SCIENCES INC",
  },
  {
    cik_str: 1819516,
    ticker: "UP",
    company_name: "Wheels Up Experience Inc.",
  },
  {
    cik_str: 69633,
    ticker: "NSSC",
    company_name: "NAPCO SECURITY TECHNOLOGIES, INC",
  },
  {
    cik_str: 1812364,
    ticker: "RLAY",
    company_name: "Relay Therapeutics, Inc.",
  },
  {
    cik_str: 1830081,
    ticker: "RUM",
    company_name: "Rumble Inc.",
  },
  {
    cik_str: 1860543,
    ticker: "CDRE",
    company_name: "Cadre Holdings, Inc.",
  },
  {
    cik_str: 104894,
    ticker: "ELME",
    company_name: "Elme Communities",
  },
  {
    cik_str: 66004,
    ticker: "MSEX",
    company_name: "MIDDLESEX WATER CO",
  },
  {
    cik_str: 1501570,
    ticker: "VBTX",
    company_name: "Veritex Holdings, Inc.",
  },
  {
    cik_str: 1605607,
    ticker: "PGRE",
    company_name: "Paramount Group, Inc.",
  },
  {
    cik_str: 1332174,
    ticker: "GSG",
    company_name: "iShares S&P GSCI Commodity-Indexed Trust",
  },
  {
    cik_str: 1645070,
    ticker: "STER",
    company_name: "Sterling Check Corp.",
  },
  {
    cik_str: 879526,
    ticker: "WNC",
    company_name: "WABASH NATIONAL Corp",
  },
  {
    cik_str: 1793663,
    ticker: "VTEX",
    company_name: "VTEX",
  },
  {
    cik_str: 1423774,
    ticker: "ZUO",
    company_name: "ZUORA INC",
  },
  {
    cik_str: 1595974,
    ticker: "MGNI",
    company_name: "MAGNITE, INC.",
  },
  {
    cik_str: 882796,
    ticker: "BCRX",
    company_name: "BIOCRYST PHARMACEUTICALS INC",
  },
  {
    cik_str: 1690511,
    ticker: "GOOS",
    company_name: "Canada Goose Holdings Inc.",
  },
  {
    cik_str: 1611005,
    ticker: "KEN",
    company_name: "Kenon Holdings Ltd.",
  },
  {
    cik_str: 1683606,
    ticker: "CARS",
    company_name: "Cars.com Inc.",
  },
  {
    cik_str: 912463,
    ticker: "GES",
    company_name: "GUESS INC",
  },
  {
    cik_str: 1012477,
    ticker: "AVDL",
    company_name: "AVADEL PHARMACEUTICALS PLC",
  },
  {
    cik_str: 1829118,
    ticker: "TUYA",
    company_name: "Tuya Inc.",
  },
  {
    cik_str: 1412408,
    ticker: "PHR",
    company_name: "Phreesia, Inc.",
  },
  {
    cik_str: 1566388,
    ticker: "DSL",
    company_name: "DoubleLine Income Solutions Fund",
  },
  {
    cik_str: 851310,
    ticker: "HLIT",
    company_name: "HARMONIC INC",
  },
  {
    cik_str: 1364954,
    ticker: "CHGG",
    company_name: "CHEGG, INC",
  },
  {
    cik_str: 1889109,
    ticker: "BLTE",
    company_name: "BELITE BIO, INC",
  },
  {
    cik_str: 1158895,
    ticker: "LMAT",
    company_name: "LEMAITRE VASCULAR INC",
  },
  {
    cik_str: 719220,
    ticker: "STBA",
    company_name: "S&T BANCORP INC",
  },
  {
    cik_str: 1172358,
    ticker: "DMLP",
    company_name: "DORCHESTER MINERALS, L.P.",
  },
  {
    cik_str: 1669779,
    ticker: "CWH",
    company_name: "Camping World Holdings, Inc.",
  },
  {
    cik_str: 1691421,
    ticker: "LMND",
    company_name: "Lemonade, Inc.",
  },
  {
    cik_str: 1845337,
    ticker: "DAWN",
    company_name: "Day One Biopharmaceuticals, Inc.",
  },
  {
    cik_str: 1705110,
    ticker: "ANGI",
    company_name: "Angi Inc.",
  },
  {
    cik_str: 1482512,
    ticker: "HPP",
    company_name: "Hudson Pacific Properties, Inc.",
  },
  {
    cik_str: 1499505,
    ticker: "AGRO",
    company_name: "Adecoagro S.A.",
  },
  {
    cik_str: 1800347,
    ticker: "ETWO",
    company_name: "E2open Parent Holdings, Inc.",
  },
  {
    cik_str: 1776661,
    ticker: "ADV",
    company_name: "Advantage Solutions Inc.",
  },
  {
    cik_str: 1746618,
    ticker: "RVLV",
    company_name: "Revolve Group, Inc.",
  },
  {
    cik_str: 1739566,
    ticker: "UTZ",
    company_name: "Utz Brands, Inc.",
  },
  {
    cik_str: 1047340,
    ticker: "FDP",
    company_name: "FRESH DEL MONTE PRODUCE INC",
  },
  {
    cik_str: 880117,
    ticker: "JBSS",
    company_name: "SANFILIPPO JOHN B & SON INC",
  },
  {
    cik_str: 1639877,
    ticker: "GSM",
    company_name: "Ferroglobe PLC",
  },
  {
    cik_str: 1341335,
    ticker: "FSM",
    company_name: "FORTUNA SILVER MINES INC",
  },
  {
    cik_str: 1758057,
    ticker: "LAZR",
    company_name: "Luminar Technologies, Inc./DE",
  },
  {
    cik_str: 1484565,
    ticker: "SLNO",
    company_name: "SOLENO THERAPEUTICS INC",
  },
  {
    cik_str: 886744,
    ticker: "GERN",
    company_name: "GERON CORP",
  },
  {
    cik_str: 944809,
    ticker: "OPK",
    company_name: "OPKO HEALTH, INC.",
  },
  {
    cik_str: 1377121,
    ticker: "PTGX",
    company_name: "Protagonist Therapeutics, Inc",
  },
  {
    cik_str: 1385849,
    ticker: "UUUU",
    company_name: "ENERGY FUELS INC",
  },
  {
    cik_str: 1831915,
    ticker: "CTKB",
    company_name: "Cytek Biosciences, Inc.",
  },
  {
    cik_str: 1821806,
    ticker: "LESL",
    company_name: "Leslie's, Inc.",
  },
  {
    cik_str: 1769256,
    ticker: "FLJ",
    company_name: "FLJ Group Ltd",
  },
  {
    cik_str: 1713334,
    ticker: "MSC",
    company_name: "STUDIO CITY INTERNATIONAL HOLDINGS Ltd",
  },
  {
    cik_str: 1055160,
    ticker: "MFA",
    company_name: "MFA FINANCIAL, INC.",
  },
  {
    cik_str: 1676163,
    ticker: "SSII",
    company_name: "SS Innovations International, Inc.",
  },
  {
    cik_str: 1503584,
    ticker: "CMRE",
    company_name: "Costamare Inc.",
  },
  {
    cik_str: 708821,
    ticker: "PAR",
    company_name: "PAR TECHNOLOGY CORP",
  },
  {
    cik_str: 1612720,
    ticker: "NEXT",
    company_name: "NextDecade Corp.",
  },
  {
    cik_str: 1798100,
    ticker: "NTST",
    company_name: "NETSTREIT Corp.",
  },
  {
    cik_str: 1203464,
    ticker: "IAG",
    company_name: "IAMGOLD CORP",
  },
  {
    cik_str: 1803696,
    ticker: "ADEA",
    company_name: "Adeia Inc.",
  },
  {
    cik_str: 1174850,
    ticker: "NIC",
    company_name: "NICOLET BANKSHARES INC",
  },
  {
    cik_str: 1768259,
    ticker: "GOTU",
    company_name: "Gaotu Techedu Inc.",
  },
  {
    cik_str: 1071255,
    ticker: "GDEN",
    company_name: "GOLDEN ENTERTAINMENT, INC.",
  },
  {
    cik_str: 824410,
    ticker: "SASR",
    company_name: "SANDY SPRING BANCORP INC",
  },
  {
    cik_str: 842183,
    ticker: "RPT",
    company_name: "RPT Realty",
  },
  {
    cik_str: 1120914,
    ticker: "PDFS",
    company_name: "PDF SOLUTIONS INC",
  },
  {
    cik_str: 886163,
    ticker: "LGND",
    company_name: "LIGAND PHARMACEUTICALS INC",
  },
  {
    cik_str: 318300,
    ticker: "PEBO",
    company_name: "PEOPLES BANCORP INC",
  },
  {
    cik_str: 1846576,
    ticker: "FIGS",
    company_name: "FIGS, Inc.",
  },
  {
    cik_str: 1562528,
    ticker: "FBRT",
    company_name: "Franklin BSP Realty Trust, Inc.",
  },
  {
    cik_str: 1789940,
    ticker: "FWRG",
    company_name: "First Watch Restaurant Group, Inc.",
  },
  {
    cik_str: 1957146,
    ticker: "EXTO",
    company_name: "Almacenes Exito S.A.",
  },
  {
    cik_str: 1599617,
    ticker: "DNOW",
    company_name: "NOW Inc.",
  },
  {
    cik_str: 1172052,
    ticker: "SAFT",
    company_name: "SAFETY INSURANCE GROUP INC",
  },
  {
    cik_str: 1260563,
    ticker: "NFJ",
    company_name: "Virtus Dividend, Interest & Premium Strategy Fund",
  },
  {
    cik_str: 1616678,
    ticker: "BST",
    company_name: "BlackRock Science & Technology Trust",
  },
  {
    cik_str: 1517175,
    ticker: "CHEF",
    company_name: "Chefs' Warehouse, Inc.",
  },
  {
    cik_str: 1861737,
    ticker: "HSAI",
    company_name: "Hesai Group",
  },
  {
    cik_str: 1515816,
    ticker: "PLYM",
    company_name: "Plymouth Industrial REIT, Inc.",
  },
  {
    cik_str: 1841968,
    ticker: "PX",
    company_name: "P10, Inc.",
  },
  {
    cik_str: 1173420,
    ticker: "NG",
    company_name: "NOVAGOLD RESOURCES INC",
  },
  {
    cik_str: 1568194,
    ticker: "FSCO",
    company_name: "FS Credit Opportunities Corp.",
  },
  {
    cik_str: 1046568,
    ticker: "PRDO",
    company_name: "PERDOCEO EDUCATION Corp",
  },
  {
    cik_str: 6845,
    ticker: "APOG",
    company_name: "APOGEE ENTERPRISES, INC.",
  },
  {
    cik_str: 1654126,
    ticker: "ZIM",
    company_name: "ZIM Integrated Shipping Services Ltd.",
  },
  {
    cik_str: 1409493,
    ticker: "CIM",
    company_name: "CHIMERA INVESTMENT CORP",
  },
  {
    cik_str: 1857475,
    ticker: "DOLE",
    company_name: "Dole plc",
  },
  {
    cik_str: 315858,
    ticker: "BVH",
    company_name: "Bluegreen Vacations Holding Corp",
  },
  {
    cik_str: 1737450,
    ticker: "OPRA",
    company_name: "Opera Ltd",
  },
  {
    cik_str: 1608741,
    ticker: "QQQX",
    company_name: "Nuveen NASDAQ 100 Dynamic Overwrite Fund",
  },
  {
    cik_str: 1795250,
    ticker: "SPHR",
    company_name: "Sphere Entertainment Co.",
  },
  {
    cik_str: 1777393,
    ticker: "CHPT",
    company_name: "ChargePoint Holdings, Inc.",
  },
  {
    cik_str: 1432364,
    ticker: "AZUL",
    company_name: "AZUL SA",
  },
  {
    cik_str: 1477815,
    ticker: "SG",
    company_name: "Sweetgreen, Inc.",
  },
  {
    cik_str: 1084961,
    ticker: "ECPG",
    company_name: "ENCORE CAPITAL GROUP INC",
  },
  {
    cik_str: 1624140,
    ticker: "JMKJ",
    company_name: "Coretag Holdings, Inc.",
  },
  {
    cik_str: 1780312,
    ticker: "ASTS",
    company_name: "AST SpaceMobile, Inc.",
  },
  {
    cik_str: 1222922,
    ticker: "EVV",
    company_name: "EATON VANCE LTD DURATION INCOME FUND",
  },
  {
    cik_str: 1708035,
    ticker: "ECVT",
    company_name: "Ecovyst Inc.",
  },
  {
    cik_str: 1829864,
    ticker: "TASK",
    company_name: "TaskUs, Inc.",
  },
  {
    cik_str: 1845022,
    ticker: "BASE",
    company_name: "Couchbase, Inc.",
  },
  {
    cik_str: 1670076,
    ticker: "ULCC",
    company_name: "Frontier Group Holdings, Inc.",
  },
  {
    cik_str: 1453015,
    ticker: "BLDP",
    company_name: "Ballard Power Systems Inc.",
  },
  {
    cik_str: 1005229,
    ticker: "CMCO",
    company_name: "COLUMBUS MCKINNON CORP",
  },
  {
    cik_str: 1687221,
    ticker: "REVG",
    company_name: "REV Group, Inc.",
  },
  {
    cik_str: 1481582,
    ticker: "RYI",
    company_name: "Ryerson Holding Corp",
  },
  {
    cik_str: 1840574,
    ticker: "VERV",
    company_name: "Verve Therapeutics, Inc.",
  },
  {
    cik_str: 1569187,
    ticker: "AHH",
    company_name: "Armada Hoffler Properties, Inc.",
  },
  {
    cik_str: 1516912,
    ticker: "OBK",
    company_name: "Origin Bancorp, Inc.",
  },
  {
    cik_str: 1692412,
    ticker: "PLYA",
    company_name: "Playa Hotels & Resorts N.V.",
  },
  {
    cik_str: 1266585,
    ticker: "NMZ",
    company_name: "NUVEEN MUNICIPAL HIGH INCOME OPPORTUNITY FUND",
  },
  {
    cik_str: 1382821,
    ticker: "RDFN",
    company_name: "Redfin Corp",
  },
  {
    cik_str: 842633,
    ticker: "TRS",
    company_name: "TRIMAS CORP",
  },
  {
    cik_str: 866729,
    ticker: "SCHL",
    company_name: "SCHOLASTIC CORP",
  },
  {
    cik_str: 80420,
    ticker: "POWL",
    company_name: "POWELL INDUSTRIES INC",
  },
  {
    cik_str: 894081,
    ticker: "ATSG",
    company_name: "Air Transport Services Group, Inc.",
  },
  {
    cik_str: 1840502,
    ticker: "TBLA",
    company_name: "Taboola.com Ltd.",
  },
  {
    cik_str: 1257640,
    ticker: "KRO",
    company_name: "KRONOS WORLDWIDE INC",
  },
  {
    cik_str: 1276533,
    ticker: "JFR",
    company_name: "NUVEEN FLOATING RATE INCOME FUND",
  },
  {
    cik_str: 1626199,
    ticker: "ALPN",
    company_name: "ALPINE IMMUNE SCIENCES, INC.",
  },
  {
    cik_str: 922864,
    ticker: "AIV",
    company_name: "APARTMENT INVESTMENT & MANAGEMENT CO",
  },
  {
    cik_str: 1332349,
    ticker: "BKD",
    company_name: "Brookdale Senior Living Inc.",
  },
  {
    cik_str: 1124804,
    ticker: "MDRX",
    company_name: "Veradigm Inc.",
  },
  {
    cik_str: 1835256,
    ticker: "NAPA",
    company_name: "Duckhorn Portfolio, Inc.",
  },
  {
    cik_str: 799233,
    ticker: "HTLD",
    company_name: "HEARTLAND EXPRESS INC",
  },
  {
    cik_str: 1762301,
    ticker: "FVRR",
    company_name: "Fiverr International Ltd.",
  },
  {
    cik_str: 63296,
    ticker: "MATW",
    company_name: "MATTHEWS INTERNATIONAL CORP",
  },
  {
    cik_str: 1108134,
    ticker: "BHLB",
    company_name: "BERKSHIRE HILLS BANCORP INC",
  },
  {
    cik_str: 1230992,
    ticker: "MAG",
    company_name: "MAG SILVER CORP",
  },
  {
    cik_str: 1966983,
    ticker: "LAC",
    company_name: "LITHIUM AMERICAS CORP.",
  },
  {
    cik_str: 1625278,
    ticker: "NRDS",
    company_name: "NERDWALLET, INC.",
  },
  {
    cik_str: 1725255,
    ticker: "AHCO",
    company_name: "AdaptHealth Corp.",
  },
  {
    cik_str: 811596,
    ticker: "KALU",
    company_name: "KAISER ALUMINUM CORP",
  },
  {
    cik_str: 1974640,
    ticker: "APGE",
    company_name: "Apogee Therapeutics, Inc.",
  },
  {
    cik_str: 1159167,
    ticker: "IRBT",
    company_name: "IROBOT CORP",
  },
  {
    cik_str: 1959348,
    ticker: "KLG",
    company_name: "WK Kellogg Co",
  },
  {
    cik_str: 1489096,
    ticker: "THR",
    company_name: "Thermon Group Holdings, Inc.",
  },
  {
    cik_str: 14707,
    ticker: "CAL",
    company_name: "CALERES INC",
  },
  {
    cik_str: 1227654,
    ticker: "CMP",
    company_name: "COMPASS MINERALS INTERNATIONAL INC",
  },
  {
    cik_str: 28823,
    ticker: "DBD",
    company_name: "DIEBOLD NIXDORF, Inc",
  },
  {
    cik_str: 1023024,
    ticker: "ANIP",
    company_name: "ANI PHARMACEUTICALS INC",
  },
  {
    cik_str: 1725160,
    ticker: "ZNTL",
    company_name: "Zentalis Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1731289,
    ticker: "NKLA",
    company_name: "Nikola Corp",
  },
  {
    cik_str: 867773,
    ticker: "SPWR",
    company_name: "SUNPOWER CORP",
  },
  {
    cik_str: 1680062,
    ticker: "ACMR",
    company_name: "ACM Research, Inc.",
  },
  {
    cik_str: 1759783,
    ticker: "EH",
    company_name: "EHang Holdings Ltd",
  },
  {
    cik_str: 1819133,
    ticker: "TNGX",
    company_name: "Tango Therapeutics, Inc.",
  },
  {
    cik_str: 1138639,
    ticker: "INFN",
    company_name: "Infinera Corp",
  },
  {
    cik_str: 1581804,
    ticker: "NVGS",
    company_name: "Navigator Holdings Ltd.",
  },
  {
    cik_str: 1495222,
    ticker: "OXLC",
    company_name: "Oxford Lane Capital Corp.",
  },
  {
    cik_str: 1777835,
    ticker: "PWP",
    company_name: "Perella Weinberg Partners",
  },
  {
    cik_str: 899460,
    ticker: "MNKD",
    company_name: "MANNKIND CORP",
  },
  {
    cik_str: 1342338,
    ticker: "HIMX",
    company_name: "Himax Technologies, Inc.",
  },
  {
    cik_str: 1520504,
    ticker: "VLRS",
    company_name: "Controladora Vuela Compania de Aviacion, S.A.B. de C.V.",
  },
  {
    cik_str: 18748,
    ticker: "CET",
    company_name: "CENTRAL SECURITIES CORP",
  },
  {
    cik_str: 1421517,
    ticker: "ERII",
    company_name: "Energy Recovery, Inc.",
  },
  {
    cik_str: 1005210,
    ticker: "SPH",
    company_name: "SUBURBAN PROPANE PARTNERS LP",
  },
  {
    cik_str: 1051004,
    ticker: "MUC",
    company_name: "BLACKROCK MUNIHOLDINGS CALIFORNIA QUALITY FUND, INC.",
  },
  {
    cik_str: 1590976,
    ticker: "MBUU",
    company_name: "MALIBU BOATS, INC.",
  },
  {
    cik_str: 1013880,
    ticker: "TTEC",
    company_name: "TTEC Holdings, Inc.",
  },
  {
    cik_str: 1743725,
    ticker: "GDYN",
    company_name: "GRID DYNAMICS HOLDINGS, INC.",
  },
  {
    cik_str: 1376339,
    ticker: "MDXG",
    company_name: "MIMEDX GROUP, INC.",
  },
  {
    cik_str: 1415404,
    ticker: "SATS",
    company_name: "EchoStar CORP",
  },
  {
    cik_str: 1828723,
    ticker: "AMPS",
    company_name: "Altus Power, Inc.",
  },
  {
    cik_str: 354963,
    ticker: "SHEN",
    company_name: "SHENANDOAH TELECOMMUNICATIONS CO/VA/",
  },
  {
    cik_str: 7323,
    ticker: "EAI",
    company_name: "ENTERGY ARKANSAS, LLC",
  },
  {
    cik_str: 1861795,
    ticker: "DH",
    company_name: "Definitive Healthcare Corp.",
  },
  {
    cik_str: 1231346,
    ticker: "SA",
    company_name: "SEABRIDGE GOLD INC",
  },
  {
    cik_str: 876427,
    ticker: "MNRO",
    company_name: "MONRO, INC.",
  },
  {
    cik_str: 1493683,
    ticker: "BBN",
    company_name: "BlackRock Taxable Municipal Bond Trust",
  },
  {
    cik_str: 800166,
    ticker: "NGD",
    company_name: "New Gold Inc. /FI",
  },
  {
    cik_str: 1423221,
    ticker: "NX",
    company_name: "Quanex Building Products CORP",
  },
  {
    cik_str: 1793882,
    ticker: "PTA",
    company_name:
      "Cohen & Steers Tax-Advantaged Preferred Securities & Income Fund",
  },
  {
    cik_str: 1872789,
    ticker: "EMBC",
    company_name: "Embecta Corp.",
  },
  {
    cik_str: 1004702,
    ticker: "OCFC",
    company_name: "OCEANFIRST FINANCIAL CORP",
  },
  {
    cik_str: 1171486,
    ticker: "NRP",
    company_name: "NATURAL RESOURCE PARTNERS LP",
  },
  {
    cik_str: 1655050,
    ticker: "BCSF",
    company_name: "Bain Capital Specialty Finance, Inc.",
  },
  {
    cik_str: 1843724,
    ticker: "LNZA",
    company_name: "LanzaTech Global, Inc.",
  },
  {
    cik_str: 3499,
    ticker: "ALX",
    company_name: "ALEXANDERS INC",
  },
  {
    cik_str: 1702750,
    ticker: "BY",
    company_name: "BYLINE BANCORP, INC.",
  },
  {
    cik_str: 846617,
    ticker: "DCOM",
    company_name: "Dime Community Bancshares, Inc. /NY/",
  },
  {
    cik_str: 921557,
    ticker: "RBCAA",
    company_name: "REPUBLIC BANCORP INC /KY/",
  },
  {
    cik_str: 40417,
    ticker: "GAM",
    company_name: "GENERAL AMERICAN INVESTORS CO INC",
  },
  {
    cik_str: 1080014,
    ticker: "INVA",
    company_name: "Innoviva, Inc.",
  },
  {
    cik_str: 1842279,
    ticker: "OPAL",
    company_name: "OPAL Fuels Inc.",
  },
  {
    cik_str: 1590750,
    ticker: "VRDN",
    company_name: "Viridian Therapeutics, Inc.DE",
  },
  {
    cik_str: 1746473,
    ticker: "PLRX",
    company_name: "PLIANT THERAPEUTICS, INC.",
  },
  {
    cik_str: 1123134,
    ticker: "IMOS",
    company_name: "CHIPMOS TECHNOLOGIES INC",
  },
  {
    cik_str: 1492165,
    ticker: "PFBC",
    company_name: "Preferred Bank",
  },
  {
    cik_str: 1567569,
    ticker: "FPF",
    company_name: "First Trust Intermediate Duration Preferred & Income Fund",
  },
  {
    cik_str: 1706946,
    ticker: "SPCE",
    company_name: "Virgin Galactic Holdings, Inc",
  },
  {
    cik_str: 1059262,
    ticker: "SP",
    company_name: "SP Plus Corp",
  },
  {
    cik_str: 1606498,
    ticker: "AVNS",
    company_name: "AVANOS MEDICAL, INC.",
  },
  {
    cik_str: 1062231,
    ticker: "AXL",
    company_name: "AMERICAN AXLE & MANUFACTURING HOLDINGS INC",
  },
  {
    cik_str: 863436,
    ticker: "BHE",
    company_name: "BENCHMARK ELECTRONICS INC",
  },
  {
    cik_str: 752642,
    ticker: "UMH",
    company_name: "UMH PROPERTIES, INC.",
  },
  {
    cik_str: 1379041,
    ticker: "EIG",
    company_name: "Employers Holdings, Inc.",
  },
  {
    cik_str: 896264,
    ticker: "USNA",
    company_name: "USANA HEALTH SCIENCES INC",
  },
  {
    cik_str: 1484769,
    ticker: "FUBO",
    company_name: "fuboTV Inc. /FL",
  },
  {
    cik_str: 910406,
    ticker: "HAIN",
    company_name: "HAIN CELESTIAL GROUP INC",
  },
  {
    cik_str: 1893325,
    ticker: "SCRM",
    company_name: "Screaming Eagle Acquisition Corp.",
  },
  {
    cik_str: 915840,
    ticker: "BZH",
    company_name: "BEAZER HOMES USA INC",
  },
  {
    cik_str: 1440972,
    ticker: "LAAC",
    company_name: "Lithium Americas (Argentina) Corp.",
  },
  {
    cik_str: 1812477,
    ticker: "BITF",
    company_name: "Bitfarms Ltd",
  },
  {
    cik_str: 1785173,
    ticker: "ETNB",
    company_name: "89bio, Inc.",
  },
  {
    cik_str: 70487,
    ticker: "NRC",
    company_name: "NATIONAL RESEARCH CORP",
  },
  {
    cik_str: 1308335,
    ticker: "EOS",
    company_name: "Eaton Vance Enhanced Equity Income Fund II",
  },
  {
    cik_str: 1793229,
    ticker: "MPLN",
    company_name: "MultiPlan Corp",
  },
  {
    cik_str: 714395,
    ticker: "GABC",
    company_name: "GERMAN AMERICAN BANCORP, INC.",
  },
  {
    cik_str: 1293282,
    ticker: "TTGT",
    company_name: "TechTarget Inc",
  },
  {
    cik_str: 1749704,
    ticker: "AGTI",
    company_name: "AGILITI, INC. \\DE",
  },
  {
    cik_str: 1883085,
    ticker: "PGY",
    company_name: "Pagaya Technologies Ltd.",
  },
  {
    cik_str: 918965,
    ticker: "SCSC",
    company_name: "SCANSOURCE, INC.",
  },
  {
    cik_str: 1379384,
    ticker: "BTZ",
    company_name: "BLACKROCK CREDIT ALLOCATION INCOME TRUST",
  },
  {
    cik_str: 1643615,
    ticker: "MEG",
    company_name: "Montrose Environmental Group, Inc.",
  },
  {
    cik_str: 1021561,
    ticker: "NUS",
    company_name: "NU SKIN ENTERPRISES, INC.",
  },
  {
    cik_str: 1581760,
    ticker: "LIFX",
    company_name: "Life360, Inc.",
  },
  {
    cik_str: 1443669,
    ticker: "PRLB",
    company_name: "Proto Labs Inc",
  },
  {
    cik_str: 1580808,
    ticker: "ATEN",
    company_name: "A10 Networks, Inc.",
  },
  {
    cik_str: 1828248,
    ticker: "CVII",
    company_name: "Churchill Capital Corp VII",
  },
  {
    cik_str: 102752,
    ticker: "VSEC",
    company_name: "VSE CORP",
  },
  {
    cik_str: 906465,
    ticker: "QCRH",
    company_name: "QCR HOLDINGS INC",
  },
  {
    cik_str: 1437352,
    ticker: "EVBG",
    company_name: "EVERBRIDGE, INC.",
  },
  {
    cik_str: 1517399,
    ticker: "SUPV",
    company_name: "Grupo Supervielle S.A.",
  },
  {
    cik_str: 1572957,
    ticker: "BIOGY",
    company_name: "BioGaia AB/ADR",
  },
  {
    cik_str: 1616533,
    ticker: "SGH",
    company_name: "SMART Global Holdings, Inc.",
  },
  {
    cik_str: 1314102,
    ticker: "EYPT",
    company_name: "EyePoint Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1717547,
    ticker: "BRSP",
    company_name: "BrightSpire Capital, Inc.",
  },
  {
    cik_str: 1664710,
    ticker: "KROS",
    company_name: "Keros Therapeutics, Inc.",
  },
  {
    cik_str: 1049782,
    ticker: "BRKL",
    company_name: "BROOKLINE BANCORP INC",
  },
  {
    cik_str: 1118417,
    ticker: "MODN",
    company_name: "MODEL N, INC.",
  },
  {
    cik_str: 1625791,
    ticker: "KRNT",
    company_name: "Kornit Digital Ltd.",
  },
  {
    cik_str: 1754195,
    ticker: "TCNNF",
    company_name: "Trulieve Cannabis Corp.",
  },
  {
    cik_str: 1680056,
    ticker: "ORLA",
    company_name: "Orla Mining Ltd.",
  },
  {
    cik_str: 710752,
    ticker: "SBR",
    company_name: "SABINE ROYALTY TRUST",
  },
  {
    cik_str: 1531978,
    ticker: "FNA",
    company_name: "Paragon 28, Inc.",
  },
  {
    cik_str: 1145986,
    ticker: "ASPN",
    company_name: "ASPEN AEROGELS INC",
  },
  {
    cik_str: 1598428,
    ticker: "TMST",
    company_name: "TimkenSteel Corp",
  },
  {
    cik_str: 1267565,
    ticker: "COLL",
    company_name: "COLLEGIUM PHARMACEUTICAL, INC",
  },
  {
    cik_str: 846901,
    ticker: "LBAI",
    company_name: "LAKELAND BANCORP INC",
  },
  {
    cik_str: 1795589,
    ticker: "KC",
    company_name: "Kingsoft Cloud Holdings Ltd",
  },
  {
    cik_str: 705432,
    ticker: "SBSI",
    company_name: "SOUTHSIDE BANCSHARES INC",
  },
  {
    cik_str: 1712189,
    ticker: "TH",
    company_name: "Target Hospitality Corp.",
  },
  {
    cik_str: 1821349,
    ticker: "NGMS",
    company_name: "NeoGames S.A.",
  },
  {
    cik_str: 1658551,
    ticker: "AMLX",
    company_name: "Amylyx Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1428205,
    ticker: "ARR",
    company_name: "Armour Residential REIT, Inc.",
  },
  {
    cik_str: 1736946,
    ticker: "ARLO",
    company_name: "Arlo Technologies, Inc.",
  },
  {
    cik_str: 880631,
    ticker: "WT",
    company_name: "WisdomTree, Inc.",
  },
  {
    cik_str: 1318568,
    ticker: "EVRI",
    company_name: "Everi Holdings Inc.",
  },
  {
    cik_str: 1315257,
    ticker: "KOP",
    company_name: "Koppers Holdings Inc.",
  },
  {
    cik_str: 1431695,
    ticker: "OLO",
    company_name: "Olo Inc.",
  },
  {
    cik_str: 1503274,
    ticker: "QTRX",
    company_name: "Quanterix Corp",
  },
  {
    cik_str: 1020859,
    ticker: "UNFI",
    company_name: "UNITED NATURAL FOODS INC",
  },
  {
    cik_str: 1794350,
    ticker: "YALA",
    company_name: "Yalla Group Ltd",
  },
  {
    cik_str: 1746109,
    ticker: "BFC",
    company_name: "Bank First Corp",
  },
  {
    cik_str: 1659520,
    ticker: "SILV",
    company_name: "SilverCrest Metals Inc.",
  },
  {
    cik_str: 1799983,
    ticker: "GB",
    company_name: "Global Blue Group Holding AG",
  },
  {
    cik_str: 897429,
    ticker: "CHS",
    company_name: "CHICO'S FAS, INC.",
  },
  {
    cik_str: 1301787,
    ticker: "BXC",
    company_name: "BlueLinx Holdings Inc.",
  },
  {
    cik_str: 1631596,
    ticker: "KREF",
    company_name: "KKR Real Estate Finance Trust Inc.",
  },
  {
    cik_str: 1379785,
    ticker: "BBDC",
    company_name: "Barings BDC, Inc.",
  },
  {
    cik_str: 1173514,
    ticker: "HY",
    company_name: "HYSTER-YALE MATERIALS HANDLING, INC.",
  },
  {
    cik_str: 17313,
    ticker: "CSWC",
    company_name: "CAPITAL SOUTHWEST CORP",
  },
  {
    cik_str: 1823794,
    ticker: "ARKO",
    company_name: "ARKO Corp.",
  },
  {
    cik_str: 1224450,
    ticker: "RNP",
    company_name: "COHEN & STEERS REIT & PREFERRED & INCOME FUND INC",
  },
  {
    cik_str: 1680247,
    ticker: "PUMP",
    company_name: "ProPetro Holding Corp.",
  },
  {
    cik_str: 1702780,
    ticker: "ATUS",
    company_name: "Altice USA, Inc.",
  },
  {
    cik_str: 1821159,
    ticker: "EVGO",
    company_name: "EVgo Inc.",
  },
  {
    cik_str: 1368514,
    ticker: "ADMA",
    company_name: "ADMA BIOLOGICS, INC.",
  },
  {
    cik_str: 1854401,
    ticker: "BRDG",
    company_name: "Bridge Investment Group Holdings Inc.",
  },
  {
    cik_str: 1185348,
    ticker: "PRAA",
    company_name: "PRA GROUP INC",
  },
  {
    cik_str: 1050441,
    ticker: "EGBN",
    company_name: "EAGLE BANCORP INC",
  },
  {
    cik_str: 790816,
    ticker: "BDN",
    company_name: "BRANDYWINE REALTY TRUST",
  },
  {
    cik_str: 1793659,
    ticker: "RSI",
    company_name: "Rush Street Interactive, Inc.",
  },
  {
    cik_str: 899751,
    ticker: "TWI",
    company_name: "TITAN INTERNATIONAL INC",
  },
  {
    cik_str: 854775,
    ticker: "DGII",
    company_name: "DIGI INTERNATIONAL INC",
  },
  {
    cik_str: 1411342,
    ticker: "EFC",
    company_name: "Ellington Financial Inc.",
  },
  {
    cik_str: 1021162,
    ticker: "TGI",
    company_name: "TRIUMPH GROUP INC",
  },
  {
    cik_str: 1195739,
    ticker: "NRK",
    company_name: "NUVEEN NEW YORK AMT-FREE QUALITY MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 1652535,
    ticker: "ICHR",
    company_name: "ICHOR HOLDINGS, LTD.",
  },
  {
    cik_str: 1871509,
    ticker: "PTLO",
    company_name: "Portillo's Inc.",
  },
  {
    cik_str: 930236,
    ticker: "RWT",
    company_name: "REDWOOD TRUST INC",
  },
  {
    cik_str: 1838615,
    ticker: "ALTI",
    company_name: "AlTi Global, Inc.",
  },
  {
    cik_str: 1705682,
    ticker: "VNTRF",
    company_name: "Venator Materials PLC",
  },
  {
    cik_str: 1409970,
    ticker: "LC",
    company_name: "LendingClub Corp",
  },
  {
    cik_str: 1005817,
    ticker: "TMP",
    company_name: "TOMPKINS FINANCIAL CORP",
  },
  {
    cik_str: 1499543,
    ticker: "NOAH",
    company_name: "Noah Holdings Ltd",
  },
  {
    cik_str: 99302,
    ticker: "TRNS",
    company_name: "TRANSCAT INC",
  },
  {
    cik_str: 1860805,
    ticker: "ASTL",
    company_name: "Algoma Steel Group Inc.",
  },
  {
    cik_str: 42682,
    ticker: "GRC",
    company_name: "GORMAN RUPP CO",
  },
  {
    cik_str: 1045986,
    ticker: "FORTY",
    company_name: "FORMULA SYSTEMS (1985) LTD",
  },
  {
    cik_str: 1806201,
    ticker: "LPRO",
    company_name: "Open Lending Corp",
  },
  {
    cik_str: 1439095,
    ticker: "MRC",
    company_name: "MRC GLOBAL INC.",
  },
  {
    cik_str: 1422143,
    ticker: "KURA",
    company_name: "Kura Oncology, Inc.",
  },
  {
    cik_str: 1042776,
    ticker: "PDM",
    company_name: "Piedmont Office Realty Trust, Inc.",
  },
  {
    cik_str: 947559,
    ticker: "FBMS",
    company_name: "FIRST BANCSHARES INC /MS/",
  },
  {
    cik_str: 1018979,
    ticker: "AMSF",
    company_name: "AMERISAFE INC",
  },
  {
    cik_str: 1859285,
    ticker: "HRT",
    company_name: "HireRight Holdings Corp",
  },
  {
    cik_str: 890541,
    ticker: "BLX",
    company_name: "FOREIGN TRADE BANK OF LATIN AMERICA, INC.",
  },
  {
    cik_str: 1072379,
    ticker: "NWBO",
    company_name: "NORTHWEST BIOTHERAPEUTICS INC",
  },
  {
    cik_str: 949157,
    ticker: "CENX",
    company_name: "CENTURY ALUMINUM CO",
  },
  {
    cik_str: 1990550,
    ticker: "AMAM",
    company_name: "Ambrx Biopharma, Inc.",
  },
  {
    cik_str: 712771,
    ticker: "CNOB",
    company_name: "ConnectOne Bancorp, Inc.",
  },
  {
    cik_str: 1945711,
    ticker: "LVRO",
    company_name: "Lavoro Ltd",
  },
  {
    cik_str: 798359,
    ticker: "CSR",
    company_name: "CENTERSPACE",
  },
  {
    cik_str: 1278752,
    ticker: "MFIC",
    company_name: "MidCap Financial Investment Corp",
  },
  {
    cik_str: 1891101,
    ticker: "BRCC",
    company_name: "BRC Inc.",
  },
  {
    cik_str: 1868912,
    ticker: "ENFN",
    company_name: "Enfusion, Inc.",
  },
  {
    cik_str: 1826470,
    ticker: "WOOF",
    company_name: "Petco Health & Wellness Company, Inc.",
  },
  {
    cik_str: 1524741,
    ticker: "SLCA",
    company_name: "U.S. SILICA HOLDINGS, INC.",
  },
  {
    cik_str: 1693256,
    ticker: "WTTR",
    company_name: "Select Water Solutions, Inc.",
  },
  {
    cik_str: 1650664,
    ticker: "EDIT",
    company_name: "Editas Medicine, Inc.",
  },
  {
    cik_str: 1863218,
    ticker: "SFWL",
    company_name: "SHENGFENG DEVELOPMENT Ltd",
  },
  {
    cik_str: 1590877,
    ticker: "RGNX",
    company_name: "REGENXBIO Inc.",
  },
  {
    cik_str: 1517396,
    ticker: "SSYS",
    company_name: "STRATASYS LTD.",
  },
  {
    cik_str: 890196,
    ticker: "MQY",
    company_name: "BLACKROCK MUNIYIELD QUALITY FUND, INC.",
  },
  {
    cik_str: 1422930,
    ticker: "PUBM",
    company_name: "PubMatic, Inc.",
  },
  {
    cik_str: 1743907,
    ticker: "SNCY",
    company_name: "Sun Country Airlines Holdings, Inc.",
  },
  {
    cik_str: 1806347,
    ticker: "WEST",
    company_name: "Westrock Coffee Co",
  },
  {
    cik_str: 1490906,
    ticker: "CFFN",
    company_name: "Capitol Federal Financial, Inc.",
  },
  {
    cik_str: 93389,
    ticker: "SMP",
    company_name: "STANDARD MOTOR PRODUCTS, INC.",
  },
  {
    cik_str: 1730463,
    ticker: "AUTL",
    company_name: "Autolus Therapeutics plc",
  },
  {
    cik_str: 921582,
    ticker: "IMAX",
    company_name: "IMAX CORP",
  },
  {
    cik_str: 910638,
    ticker: "DDD",
    company_name: "3D SYSTEMS CORP",
  },
  {
    cik_str: 1095146,
    ticker: "ABIT",
    company_name: "Athena Bitcoin Global",
  },
  {
    cik_str: 906013,
    ticker: "AWF",
    company_name: "ALLIANCEBERNSTEIN GLOBAL HIGH INCOME FUND INC",
  },
  {
    cik_str: 1759138,
    ticker: "CABA",
    company_name: "Cabaletta Bio, Inc.",
  },
  {
    cik_str: 792987,
    ticker: "ASTE",
    company_name: "ASTEC INDUSTRIES INC",
  },
  {
    cik_str: 1843181,
    ticker: "NBXG",
    company_name: "Neuberger Berman Next Generation Connectivity Fund Inc.",
  },
  {
    cik_str: 1000177,
    ticker: "NAT",
    company_name: "NORDIC AMERICAN TANKERS Ltd",
  },
  {
    cik_str: 1322435,
    ticker: "ETW",
    company_name: "Eaton Vance Tax-Managed Global Buy-Write Opportunities Fund",
  },
  {
    cik_str: 1847584,
    ticker: "WKME",
    company_name: "WalkMe Ltd.",
  },
  {
    cik_str: 1793862,
    ticker: "DADA",
    company_name: "Dada Nexus Ltd",
  },
  {
    cik_str: 1728190,
    ticker: "HUYA",
    company_name: "HUYA Inc.",
  },
  {
    cik_str: 1278027,
    ticker: "BGS",
    company_name: "B&G Foods, Inc.",
  },
  {
    cik_str: 1936258,
    ticker: "NAMS",
    company_name: "NewAmsterdam Pharma Co N.V.",
  },
  {
    cik_str: 27996,
    ticker: "DLX",
    company_name: "DELUXE CORP",
  },
  {
    cik_str: 1681622,
    ticker: "VREX",
    company_name: "Varex Imaging Corp",
  },
  {
    cik_str: 1317945,
    ticker: "OFLX",
    company_name: "Omega Flex, Inc.",
  },
  {
    cik_str: 1232860,
    ticker: "MUI",
    company_name: "BLACKROCK MUNICIPAL INCOME FUND, INC.",
  },
  {
    cik_str: 1222719,
    ticker: "CHY",
    company_name: "CALAMOS CONVERTIBLE & HIGH INCOME FUND",
  },
  {
    cik_str: 1379400,
    ticker: "AOD",
    company_name: "abrdn Total Dynamic Dividend Fund",
  },
  {
    cik_str: 1769484,
    ticker: "BIOX",
    company_name: "Bioceres Crop Solutions Corp.",
  },
  {
    cik_str: 1894562,
    ticker: "PRME",
    company_name: "Prime Medicine, Inc.",
  },
  {
    cik_str: 1698991,
    ticker: "ACEL",
    company_name: "Accel Entertainment, Inc.",
  },
  {
    cik_str: 108385,
    ticker: "WRLD",
    company_name: "WORLD ACCEPTANCE CORP",
  },
  {
    cik_str: 1538849,
    ticker: "CAPL",
    company_name: "CrossAmerica Partners LP",
  },
  {
    cik_str: 1674930,
    ticker: "FLGT",
    company_name: "Fulgent Genetics, Inc.",
  },
  {
    cik_str: 1958086,
    ticker: "CLB",
    company_name: "Core Laboratories Inc. /DE/",
  },
  {
    cik_str: 1400810,
    ticker: "HCI",
    company_name: "HCI Group, Inc.",
  },
  {
    cik_str: 946647,
    ticker: "PFC",
    company_name: "PREMIER FINANCIAL CORP",
  },
  {
    cik_str: 1809196,
    ticker: "IMTX",
    company_name: "Immatics N.V.",
  },
  {
    cik_str: 1158114,
    ticker: "AAOI",
    company_name: "APPLIED OPTOELECTRONICS, INC.",
  },
  {
    cik_str: 1809691,
    ticker: "HKD",
    company_name: "AMTD Digital Inc.",
  },
  {
    cik_str: 1713930,
    ticker: "NEXA",
    company_name: "Nexa Resources S.A.",
  },
  {
    cik_str: 1683825,
    ticker: "TRVG",
    company_name: "trivago N.V.",
  },
  {
    cik_str: 1452857,
    ticker: "SPLP",
    company_name: "STEEL PARTNERS HOLDINGS L.P.",
  },
  {
    cik_str: 1023459,
    ticker: "SLP",
    company_name: "Simulations Plus, Inc.",
  },
  {
    cik_str: 1856236,
    ticker: "EWCZ",
    company_name: "European Wax Center, Inc.",
  },
  {
    cik_str: 310522,
    ticker: "FNMA",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 700565,
    ticker: "FMBH",
    company_name: "FIRST MID BANCSHARES, INC.",
  },
  {
    cik_str: 755001,
    ticker: "UTL",
    company_name: "UNITIL CORP",
  },
  {
    cik_str: 1278895,
    ticker: "CII",
    company_name: "BLACKROCK ENHANCED CAPITAL & INCOME FUND, INC.",
  },
  {
    cik_str: 1415921,
    ticker: "NMM",
    company_name: "Navios Maritime Partners L.P.",
  },
  {
    cik_str: 1418076,
    ticker: "SLRC",
    company_name: "SLR Investment Corp.",
  },
  {
    cik_str: 1830033,
    ticker: "PCT",
    company_name: "PureCycle Technologies, Inc.",
  },
  {
    cik_str: 1514705,
    ticker: "SXC",
    company_name: "SunCoke Energy, Inc.",
  },
  {
    cik_str: 1748824,
    ticker: "BSIG",
    company_name: "BrightSphere Investment Group Inc.",
  },
  {
    cik_str: 1398987,
    ticker: "HOUS",
    company_name: "Anywhere Real Estate Inc.",
  },
  {
    cik_str: 1368265,
    ticker: "CLNE",
    company_name: "Clean Energy Fuels Corp.",
  },
  {
    cik_str: 1928446,
    ticker: "GRNT",
    company_name: "Granite Ridge Resources, Inc.",
  },
  {
    cik_str: 912603,
    ticker: "RDUS",
    company_name: "SCHNITZER STEEL INDUSTRIES, INC.",
  },
  {
    cik_str: 1734342,
    ticker: "AMTB",
    company_name: "Amerant Bancorp Inc.",
  },
  {
    cik_str: 1819394,
    ticker: "MTTR",
    company_name: "Matterport, Inc./DE",
  },
  {
    cik_str: 1512920,
    ticker: "SII",
    company_name: "SPROTT INC.",
  },
  {
    cik_str: 1017480,
    ticker: "HIBB",
    company_name: "HIBBETT INC",
  },
  {
    cik_str: 877422,
    ticker: "SPTN",
    company_name: "SpartanNash Co",
  },
  {
    cik_str: 1005731,
    ticker: "IDT",
    company_name: "IDT CORP",
  },
  {
    cik_str: 1616736,
    ticker: "ALPC",
    company_name: "Alpha Investment Inc.",
  },
  {
    cik_str: 1057060,
    ticker: "HZO",
    company_name: "MARINEMAX INC",
  },
  {
    cik_str: 1834376,
    ticker: "INNV",
    company_name: "InnovAge Holding Corp.",
  },
  {
    cik_str: 1514991,
    ticker: "AMCX",
    company_name: "AMC Networks Inc.",
  },
  {
    cik_str: 1334978,
    ticker: "CCO",
    company_name: "Clear Channel Outdoor Holdings, Inc.",
  },
  {
    cik_str: 43196,
    ticker: "GTN",
    company_name: "GRAY TELEVISION INC",
  },
  {
    cik_str: 1589526,
    ticker: "BLBD",
    company_name: "Blue Bird Corp",
  },
  {
    cik_str: 1040470,
    ticker: "AEHR",
    company_name: "AEHR TEST SYSTEMS",
  },
  {
    cik_str: 1163739,
    ticker: "NBR",
    company_name: "NABORS INDUSTRIES LTD",
  },
  {
    cik_str: 1481646,
    ticker: "ACCD",
    company_name: "Accolade, Inc.",
  },
  {
    cik_str: 1770121,
    ticker: "SANA",
    company_name: "Sana Biotechnology, Inc.",
  },
  {
    cik_str: 1169770,
    ticker: "BANC",
    company_name: "BANC OF CALIFORNIA, INC.",
  },
  {
    cik_str: 1687187,
    ticker: "METC",
    company_name: "Ramaco Resources, Inc.",
  },
  {
    cik_str: 896156,
    ticker: "ETD",
    company_name: "ETHAN ALLEN INTERIORS INC",
  },
  {
    cik_str: 805267,
    ticker: "HQH",
    company_name: "abrdn Healthcare Investors",
  },
  {
    cik_str: 1095565,
    ticker: "HSTM",
    company_name: "HEALTHSTREAM INC",
  },
  {
    cik_str: 1971213,
    ticker: "SBGI",
    company_name: "Sinclair, Inc.",
  },
  {
    cik_str: 895447,
    ticker: "SCVL",
    company_name: "SHOE CARNIVAL INC",
  },
  {
    cik_str: 1065059,
    ticker: "LEU",
    company_name: "CENTRUS ENERGY CORP",
  },
  {
    cik_str: 1687926,
    ticker: "ZUUS",
    company_name: "ZEUUS, INC.",
  },
  {
    cik_str: 65270,
    ticker: "MEI",
    company_name: "METHODE ELECTRONICS INC",
  },
  {
    cik_str: 1786255,
    ticker: "ICVX",
    company_name: "Icosavax, Inc.",
  },
  {
    cik_str: 1823608,
    ticker: "AMAL",
    company_name: "Amalgamated Financial Corp.",
  },
  {
    cik_str: 1673985,
    ticker: "ASIX",
    company_name: "AdvanSix Inc.",
  },
  {
    cik_str: 1821160,
    ticker: "GHLD",
    company_name: "Guild Holdings Co",
  },
  {
    cik_str: 729580,
    ticker: "BELFA",
    company_name: "BEL FUSE INC /NJ",
  },
  {
    cik_str: 1604665,
    ticker: "WLKP",
    company_name: "Westlake Chemical Partners LP",
  },
  {
    cik_str: 95029,
    ticker: "RGR",
    company_name: "STURM RUGER & CO INC",
  },
  {
    cik_str: 1444380,
    ticker: "NVRO",
    company_name: "NEVRO CORP",
  },
  {
    cik_str: 1734713,
    ticker: "BV",
    company_name: "BrightView Holdings, Inc.",
  },
  {
    cik_str: 1823587,
    ticker: "SKYH",
    company_name: "Sky Harbour Group Corp",
  },
  {
    cik_str: 350852,
    ticker: "CTBI",
    company_name: "COMMUNITY TRUST BANCORP INC /KY/",
  },
  {
    cik_str: 1544206,
    ticker: "CGBD",
    company_name: "Carlyle Secured Lending, Inc.",
  },
  {
    cik_str: 1013605,
    ticker: "PDS",
    company_name: "PRECISION DRILLING Corp",
  },
  {
    cik_str: 1936804,
    ticker: "SDA",
    company_name: "SunCar Technology Group Inc.",
  },
  {
    cik_str: 1851112,
    ticker: "RSKD",
    company_name: "Riskified Ltd.",
  },
  {
    cik_str: 1124524,
    ticker: "CYRX",
    company_name: "Cryoport, Inc.",
  },
  {
    cik_str: 1828316,
    ticker: "PHAR",
    company_name: "Pharming Group N.V.",
  },
  {
    cik_str: 1475115,
    ticker: "EB",
    company_name: "Eventbrite, Inc.",
  },
  {
    cik_str: 1273685,
    ticker: "NYMT",
    company_name: "NEW YORK MORTGAGE TRUST INC",
  },
  {
    cik_str: 357294,
    ticker: "HOV",
    company_name: "HOVNANIAN ENTERPRISES INC",
  },
  {
    cik_str: 1828102,
    ticker: "KARO",
    company_name: "Karooooo Ltd.",
  },
  {
    cik_str: 1609151,
    ticker: "WEAV",
    company_name: "Weave Communications, Inc.",
  },
  {
    cik_str: 1819142,
    ticker: "SES",
    company_name: "SES AI Corp",
  },
  {
    cik_str: 893949,
    ticker: "MD",
    company_name: "Pediatrix Medical Group, Inc.",
  },
  {
    cik_str: 49754,
    ticker: "DIN",
    company_name: "Dine Brands Global, Inc.",
  },
  {
    cik_str: 1042893,
    ticker: "DRQ",
    company_name: "DRIL-QUIP INC",
  },
  {
    cik_str: 1506289,
    ticker: "BCX",
    company_name: "BlackRock Resources & Commodities Strategy Trust",
  },
  {
    cik_str: 883412,
    ticker: "MYI",
    company_name: "BLACKROCK MUNIYIELD QUALITY FUND III, INC.",
  },
  {
    cik_str: 744187,
    ticker: "REX",
    company_name: "REX AMERICAN RESOURCES Corp",
  },
  {
    cik_str: 1171471,
    ticker: "CHI",
    company_name: "CALAMOS CONVERTIBLE OPPORTUNITIES & INCOME FUND",
  },
  {
    cik_str: 1085913,
    ticker: "FMCB",
    company_name: "FARMERS & MERCHANTS BANCORP",
  },
  {
    cik_str: 1754170,
    ticker: "ASLE",
    company_name: "AerSale Corp",
  },
  {
    cik_str: 30305,
    ticker: "DCO",
    company_name: "DUCOMMUN INC /DE/",
  },
  {
    cik_str: 910612,
    ticker: "CBL",
    company_name: "CBL & ASSOCIATES PROPERTIES INC",
  },
  {
    cik_str: 1818794,
    ticker: "DYN",
    company_name: "Dyne Therapeutics, Inc.",
  },
  {
    cik_str: 33934,
    ticker: "CRF",
    company_name: "CORNERSTONE TOTAL RETURN FUND INC",
  },
  {
    cik_str: 784199,
    ticker: "AORT",
    company_name: "ARTIVION, INC.",
  },
  {
    cik_str: 1459839,
    ticker: "SIBN",
    company_name: "SI-BONE, Inc.",
  },
  {
    cik_str: 1094032,
    ticker: "QDMI",
    company_name: "QDM International Inc.",
  },
  {
    cik_str: 1013488,
    ticker: "BJRI",
    company_name: "BJs RESTAURANTS INC",
  },
  {
    cik_str: 1720592,
    ticker: "RPAY",
    company_name: "Repay Holdings Corp",
  },
  {
    cik_str: 1046025,
    ticker: "HFWA",
    company_name: "HERITAGE FINANCIAL CORP /WA/",
  },
  {
    cik_str: 1768224,
    ticker: "ARCT",
    company_name: "Arcturus Therapeutics Holdings Inc.",
  },
  {
    cik_str: 902791,
    ticker: "BBSI",
    company_name: "BARRETT BUSINESS SERVICES INC",
  },
  {
    cik_str: 1642122,
    ticker: "AC",
    company_name: "Associated Capital Group, Inc.",
  },
  {
    cik_str: 910329,
    ticker: "MED",
    company_name: "MEDIFAST INC",
  },
  {
    cik_str: 1677703,
    ticker: "CNDT",
    company_name: "CONDUENT Inc",
  },
  {
    cik_str: 1631569,
    ticker: "CHCT",
    company_name: "Community Healthcare Trust Inc",
  },
  {
    cik_str: 1075415,
    ticker: "DHC",
    company_name: "DIVERSIFIED HEALTHCARE TRUST",
  },
  {
    cik_str: 1683695,
    ticker: "IMXI",
    company_name: "International Money Express, Inc.",
  },
  {
    cik_str: 1861974,
    ticker: "ECX",
    company_name: "ECARX Holdings Inc.",
  },
  {
    cik_str: 1000623,
    ticker: "MATV",
    company_name: "Mativ Holdings, Inc.",
  },
  {
    cik_str: 1836564,
    ticker: "VALN",
    company_name: "Valneva SE",
  },
  {
    cik_str: 55135,
    ticker: "KELYA",
    company_name: "KELLY SERVICES INC",
  },
  {
    cik_str: 1843586,
    ticker: "OTLY",
    company_name: "Oatly Group AB",
  },
  {
    cik_str: 1525221,
    ticker: "VTOL",
    company_name: "Bristow Group Inc.",
  },
  {
    cik_str: 1268884,
    ticker: "IGR",
    company_name: "CBRE GLOBAL REAL ESTATE INCOME FUND",
  },
  {
    cik_str: 1604522,
    ticker: "THQ",
    company_name: "abrdn Healthcare Opportunities Fund",
  },
  {
    cik_str: 1141103,
    ticker: "CCRN",
    company_name: "CROSS COUNTRY HEALTHCARE INC",
  },
  {
    cik_str: 110471,
    ticker: "WWW",
    company_name: "WOLVERINE WORLD WIDE INC /DE/",
  },
  {
    cik_str: 1438231,
    ticker: "DMRC",
    company_name: "Digimarc CORP",
  },
  {
    cik_str: 731012,
    ticker: "HCSG",
    company_name: "HEALTHCARE SERVICES GROUP INC",
  },
  {
    cik_str: 1528356,
    ticker: "GNE",
    company_name: "Genie Energy Ltd.",
  },
  {
    cik_str: 351817,
    ticker: "SBOW",
    company_name: "SILVERBOW RESOURCES, INC.",
  },
  {
    cik_str: 319654,
    ticker: "PBT",
    company_name: "PERMIAN BASIN ROYALTY TRUST",
  },
  {
    cik_str: 1650648,
    ticker: "FDMT",
    company_name: "4D Molecular Therapeutics, Inc.",
  },
  {
    cik_str: 78814,
    ticker: "PBI",
    company_name: "PITNEY BOWES INC /DE/",
  },
  {
    cik_str: 1865408,
    ticker: "EXAI",
    company_name: "Exscientia plc",
  },
  {
    cik_str: 1768267,
    ticker: "CRNC",
    company_name: "Cerence Inc.",
  },
  {
    cik_str: 1805385,
    ticker: "EVLV",
    company_name: "Evolv Technologies Holdings, Inc.",
  },
  {
    cik_str: 884219,
    ticker: "VVI",
    company_name: "VIAD CORP",
  },
  {
    cik_str: 1831631,
    ticker: "LDI",
    company_name: "loanDepot, Inc.",
  },
  {
    cik_str: 1868995,
    ticker: "CINT",
    company_name: "CI&T Inc",
  },
  {
    cik_str: 764401,
    ticker: "IIIN",
    company_name: "INSTEEL INDUSTRIES INC",
  },
  {
    cik_str: 1819559,
    ticker: "WDI",
    company_name: "Western Asset Diversified Income Fund",
  },
  {
    cik_str: 1656472,
    ticker: "CRON",
    company_name: "Cronos Group Inc.",
  },
  {
    cik_str: 1847903,
    ticker: "CNTA",
    company_name: "Centessa Pharmaceuticals plc",
  },
  {
    cik_str: 1425450,
    ticker: "KIDS",
    company_name: "ORTHOPEDIATRICS CORP",
  },
  {
    cik_str: 874501,
    ticker: "AMBC",
    company_name: "AMBAC FINANCIAL GROUP INC",
  },
  {
    cik_str: 1314052,
    ticker: "AVXL",
    company_name: "ANAVEX LIFE SCIENCES CORP.",
  },
  {
    cik_str: 69488,
    ticker: "MYE",
    company_name: "MYERS INDUSTRIES INC",
  },
  {
    cik_str: 1958217,
    ticker: "LZM",
    company_name: "Lifezone Metals Ltd",
  },
  {
    cik_str: 1533615,
    ticker: "GMRE",
    company_name: "Global Medical REIT Inc.",
  },
  {
    cik_str: 1172222,
    ticker: "HA",
    company_name: "HAWAIIAN HOLDINGS INC",
  },
  {
    cik_str: 1962918,
    ticker: "SLRN",
    company_name: "ACELYRIN, Inc.",
  },
  {
    cik_str: 826675,
    ticker: "DX",
    company_name: "DYNEX CAPITAL INC",
  },
  {
    cik_str: 1888012,
    ticker: "HLVX",
    company_name: "HilleVax, Inc.",
  },
  {
    cik_str: 1772177,
    ticker: "KRUS",
    company_name: "KURA SUSHI USA, INC.",
  },
  {
    cik_str: 1219360,
    ticker: "PHK",
    company_name: "PIMCO HIGH INCOME FUND",
  },
  {
    cik_str: 1899123,
    ticker: "BTDR",
    company_name: "Bitdeer Technologies Group",
  },
  {
    cik_str: 1788399,
    ticker: "DLY",
    company_name: "DoubleLine Yield Opportunities Fund",
  },
  {
    cik_str: 1497645,
    ticker: "INN",
    company_name: "Summit Hotel Properties, Inc.",
  },
  {
    cik_str: 1227476,
    ticker: "JQC",
    company_name: "Nuveen Credit Strategies Income Fund",
  },
  {
    cik_str: 1655099,
    ticker: "RA",
    company_name: "Brookfield Real Assets Income Fund Inc.",
  },
  {
    cik_str: 357173,
    ticker: "OSBC",
    company_name: "OLD SECOND BANCORP INC",
  },
  {
    cik_str: 1626450,
    ticker: "BIGC",
    company_name: "BigCommerce Holdings, Inc.",
  },
  {
    cik_str: 1216583,
    ticker: "JPC",
    company_name: "Nuveen Preferred & Income Opportunities Fund",
  },
  {
    cik_str: 1176984,
    ticker: "EIM",
    company_name: "EATON VANCE MUNICIPAL BOND FUND",
  },
  {
    cik_str: 1845437,
    ticker: "NPWR",
    company_name: "NET Power Inc.",
  },
  {
    cik_str: 1370755,
    ticker: "TCPC",
    company_name: "BlackRock TCP Capital Corp.",
  },
  {
    cik_str: 1287213,
    ticker: "PLOW",
    company_name: "DOUGLAS DYNAMICS, INC",
  },
  {
    cik_str: 1053706,
    ticker: "CRAI",
    company_name: "CRA INTERNATIONAL, INC.",
  },
  {
    cik_str: 1425292,
    ticker: "UAN",
    company_name: "CVR PARTNERS, LP",
  },
  {
    cik_str: 715787,
    ticker: "TILE",
    company_name: "INTERFACE INC",
  },
  {
    cik_str: 1600626,
    ticker: "PKST",
    company_name: "Peakstone Realty Trust",
  },
  {
    cik_str: 1818383,
    ticker: "MAX",
    company_name: "MediaAlpha, Inc.",
  },
  {
    cik_str: 1308208,
    ticker: "ULH",
    company_name: "UNIVERSAL LOGISTICS HOLDINGS, INC.",
  },
  {
    cik_str: 1094366,
    ticker: "RDWR",
    company_name: "RADWARE LTD",
  },
  {
    cik_str: 814585,
    ticker: "MBI",
    company_name: "MBIA INC",
  },
  {
    cik_str: 1831828,
    ticker: "VERA",
    company_name: "Vera Therapeutics, Inc.",
  },
  {
    cik_str: 1393726,
    ticker: "TIPT",
    company_name: "TIPTREE INC.",
  },
  {
    cik_str: 1479290,
    ticker: "RVNC",
    company_name: "Revance Therapeutics, Inc.",
  },
  {
    cik_str: 1387467,
    ticker: "AOSL",
    company_name: "ALPHA & OMEGA SEMICONDUCTOR Ltd",
  },
  {
    cik_str: 1846069,
    ticker: "KIND",
    company_name: "Nextdoor Holdings, Inc.",
  },
  {
    cik_str: 3197,
    ticker: "CECO",
    company_name: "CECO ENVIRONMENTAL CORP",
  },
  {
    cik_str: 1810182,
    ticker: "ALXO",
    company_name: "ALX ONCOLOGY HOLDINGS INC",
  },
  {
    cik_str: 883618,
    ticker: "NXP",
    company_name: "NUVEEN SELECT TAX FREE INCOME PORTFOLIO",
  },
  {
    cik_str: 1591588,
    ticker: "AMRK",
    company_name: "A-Mark Precious Metals, Inc.",
  },
  {
    cik_str: 1127703,
    ticker: "PRA",
    company_name: "PROASSURANCE CORP",
  },
  {
    cik_str: 1144879,
    ticker: "APLD",
    company_name: "Applied Digital Corp.",
  },
  {
    cik_str: 1833835,
    ticker: "PSFE",
    company_name: "Paysafe Ltd",
  },
  {
    cik_str: 732417,
    ticker: "HBIA",
    company_name: "HILLS BANCORPORATION",
  },
  {
    cik_str: 854560,
    ticker: "GSBC",
    company_name: "GREAT SOUTHERN BANCORP, INC.",
  },
  {
    cik_str: 1117297,
    ticker: "QNST",
    company_name: "QUINSTREET, INC",
  },
  {
    cik_str: 1614178,
    ticker: "YEXT",
    company_name: "Yext, Inc.",
  },
  {
    cik_str: 1894630,
    ticker: "GHIX",
    company_name: "Gores Holdings IX, Inc.",
  },
  {
    cik_str: 1478320,
    ticker: "ADPT",
    company_name: "Adaptive Biotechnologies Corp",
  },
  {
    cik_str: 1653087,
    ticker: "ALEC",
    company_name: "Alector, Inc.",
  },
  {
    cik_str: 790500,
    ticker: "FAX",
    company_name: "ABRDN ASIA-PACIFIC INCOME FUND, INC.",
  },
  {
    cik_str: 1556739,
    ticker: "THRY",
    company_name: "Thryv Holdings, Inc.",
  },
  {
    cik_str: 859070,
    ticker: "FCBC",
    company_name: "FIRST COMMUNITY BANKSHARES INC /VA/",
  },
  {
    cik_str: 45876,
    ticker: "NVRI",
    company_name: "ENVIRI Corp",
  },
  {
    cik_str: 886128,
    ticker: "FCEL",
    company_name: "FUELCELL ENERGY INC",
  },
  {
    cik_str: 60714,
    ticker: "LXU",
    company_name: "LSB INDUSTRIES, INC.",
  },
  {
    cik_str: 1604174,
    ticker: "ECC",
    company_name: "Eagle Point Credit Co Inc.",
  },
  {
    cik_str: 1504619,
    ticker: "PFLT",
    company_name: "PennantPark Floating Rate Capital Ltd.",
  },
  {
    cik_str: 1880319,
    ticker: "PRM",
    company_name: "Perimeter Solutions, SA",
  },
  {
    cik_str: 1171326,
    ticker: "EUBG",
    company_name: "ENTREPRENEUR UNIVERSE BRIGHT GROUP",
  },
  {
    cik_str: 1855066,
    ticker: "MEGI",
    company_name: "MainStay CBRE Global Infrastructure Megatrends Term Fund",
  },
  {
    cik_str: 1430725,
    ticker: "GSL",
    company_name: "Global Ship Lease, Inc.",
  },
  {
    cik_str: 1836833,
    ticker: "PL",
    company_name: "Planet Labs PBC",
  },
  {
    cik_str: 1750284,
    ticker: "OLMA",
    company_name: "Olema Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1747079,
    ticker: "BALY",
    company_name: "Bally's Corp",
  },
  {
    cik_str: 54381,
    ticker: "KAMN",
    company_name: "KAMAN Corp",
  },
  {
    cik_str: 1326200,
    ticker: "GNK",
    company_name: "GENCO SHIPPING & TRADING LTD",
  },
  {
    cik_str: 1673772,
    ticker: "RAPT",
    company_name: "RAPT Therapeutics, Inc.",
  },
  {
    cik_str: 1260041,
    ticker: "HTD",
    company_name: "JOHN HANCOCK TAX-ADVANTAGED DIVIDEND INCOME FUND",
  },
  {
    cik_str: 1802974,
    ticker: "AVO",
    company_name: "Mission Produce, Inc.",
  },
  {
    cik_str: 317788,
    ticker: "APPS",
    company_name: "Digital Turbine, Inc.",
  },
  {
    cik_str: 1174164,
    ticker: "FFC",
    company_name: "Flaherty & Crumrine PREFERRED & INCOME SECURITIES FUND INC",
  },
  {
    cik_str: 775215,
    ticker: "HBT",
    company_name: "HBT Financial, Inc.",
  },
  {
    cik_str: 858655,
    ticker: "HAYN",
    company_name: "HAYNES INTERNATIONAL INC",
  },
  {
    cik_str: 1599901,
    ticker: "RNA",
    company_name: "Avidity Biosciences, Inc.",
  },
  {
    cik_str: 1438533,
    ticker: "TVTX",
    company_name: "Travere Therapeutics, Inc.",
  },
  {
    cik_str: 1937653,
    ticker: "ZYME",
    company_name: "Zymeworks Inc.",
  },
  {
    cik_str: 1655210,
    ticker: "BYND",
    company_name: "BEYOND MEAT, INC.",
  },
  {
    cik_str: 1023512,
    ticker: "DRD",
    company_name: "DRDGOLD LTD",
  },
  {
    cik_str: 1081834,
    ticker: "KUBR",
    company_name: "Kuber Resources Corp",
  },
  {
    cik_str: 1786108,
    ticker: "TRIN",
    company_name: "Trinity Capital Inc.",
  },
  {
    cik_str: 1856430,
    ticker: "SNPO",
    company_name: "Snap One Holdings Corp.",
  },
  {
    cik_str: 1849635,
    ticker: "DWAC",
    company_name: "Digital World Acquisition Corp.",
  },
  {
    cik_str: 834365,
    ticker: "BLFS",
    company_name: "BIOLIFE SOLUTIONS INC",
  },
  {
    cik_str: 1956827,
    ticker: "ABVX",
    company_name: "Abivax S.A.",
  },
  {
    cik_str: 1504461,
    ticker: "NGL",
    company_name: "NGL Energy Partners LP",
  },
  {
    cik_str: 1753373,
    ticker: "MTWO",
    company_name: "M2i Global, Inc.",
  },
  {
    cik_str: 1756699,
    ticker: "TIGR",
    company_name: "UP Fintech Holding Ltd",
  },
  {
    cik_str: 1819989,
    ticker: "CIFR",
    company_name: "Cipher Mining Inc.",
  },
  {
    cik_str: 1606757,
    ticker: "KE",
    company_name: "Kimball Electronics, Inc.",
  },
  {
    cik_str: 1837014,
    ticker: "SMRT",
    company_name: "SmartRent, Inc.",
  },
  {
    cik_str: 1944558,
    ticker: "VTS",
    company_name: "Vitesse Energy, Inc.",
  },
  {
    cik_str: 1300391,
    ticker: "EOI",
    company_name: "Eaton Vance Enhanced Equity Income Fund",
  },
  {
    cik_str: 1124796,
    ticker: "LASR",
    company_name: "NLIGHT, INC.",
  },
  {
    cik_str: 1728688,
    ticker: "IIIV",
    company_name: "i3 Verticals, Inc.",
  },
  {
    cik_str: 917470,
    ticker: "ZEUS",
    company_name: "OLYMPIC STEEL INC",
  },
  {
    cik_str: 1761612,
    ticker: "BCYC",
    company_name: "BICYCLE THERAPEUTICS plc",
  },
  {
    cik_str: 1304492,
    ticker: "ATEX",
    company_name: "Anterix Inc.",
  },
  {
    cik_str: 1853138,
    ticker: "AACT",
    company_name: "Ares Acquisition Corp II",
  },
  {
    cik_str: 1464790,
    ticker: "RILY",
    company_name: "B. Riley Financial, Inc.",
  },
  {
    cik_str: 1688757,
    ticker: "ESTA",
    company_name: "ESTABLISHMENT LABS HOLDINGS INC.",
  },
  {
    cik_str: 701288,
    ticker: "ATRI",
    company_name: "ATRION CORP",
  },
  {
    cik_str: 1840616,
    ticker: "NFGC",
    company_name: "New Found Gold Corp.",
  },
  {
    cik_str: 1000694,
    ticker: "NVAX",
    company_name: "NOVAVAX INC",
  },
  {
    cik_str: 72573,
    ticker: "MOV",
    company_name: "MOVADO GROUP INC",
  },
  {
    cik_str: 1084201,
    ticker: "SVA",
    company_name: "SINOVAC BIOTECH LTD",
  },
  {
    cik_str: 1409171,
    ticker: "TITN",
    company_name: "Titan Machinery Inc.",
  },
  {
    cik_str: 1524931,
    ticker: "CHUY",
    company_name: "CHUY'S HOLDINGS, INC.",
  },
  {
    cik_str: 1846253,
    ticker: "OABI",
    company_name: "OmniAb, Inc.",
  },
  {
    cik_str: 1084869,
    ticker: "FLWS",
    company_name: "1 800 FLOWERS COM INC",
  },
  {
    cik_str: 1633336,
    ticker: "CCAP",
    company_name: "Crescent Capital BDC, Inc.",
  },
  {
    cik_str: 1042729,
    ticker: "MBWM",
    company_name: "MERCANTILE BANK CORP",
  },
  {
    cik_str: 1591670,
    ticker: "FPI",
    company_name: "Farmland Partners Inc.",
  },
  {
    cik_str: 1758766,
    ticker: "STEM",
    company_name: "STEM, INC.",
  },
  {
    cik_str: 884152,
    ticker: "VMO",
    company_name: "Invesco Municipal Opportunity Trust",
  },
  {
    cik_str: 1855756,
    ticker: "LILM",
    company_name: "Lilium N.V.",
  },
  {
    cik_str: 102212,
    ticker: "UVSP",
    company_name: "UNIVEST FINANCIAL Corp",
  },
  {
    cik_str: 1500881,
    ticker: "EU",
    company_name: "enCore Energy Corp.",
  },
  {
    cik_str: 1803112,
    ticker: "TDCX",
    company_name: "TDCX Inc.",
  },
  {
    cik_str: 1630627,
    ticker: "TMCI",
    company_name: "TREACE MEDICAL CONCEPTS, INC.",
  },
  {
    cik_str: 1944057,
    ticker: "CLCO",
    company_name: "Cool Co Ltd.",
  },
  {
    cik_str: 1458412,
    ticker: "CFB",
    company_name: "CROSSFIRST BANKSHARES, INC.",
  },
  {
    cik_str: 1837686,
    ticker: "VMEO",
    company_name: "Vimeo, Inc.",
  },
  {
    cik_str: 798949,
    ticker: "UNTC",
    company_name: "UNIT CORP",
  },
  {
    cik_str: 1895597,
    ticker: "ICG",
    company_name: "Intchains Group Ltd",
  },
  {
    cik_str: 832428,
    ticker: "SSP",
    company_name: "E.W. SCRIPPS Co",
  },
  {
    cik_str: 1886190,
    ticker: "GGR",
    company_name: "Gogoro Inc.",
  },
  {
    cik_str: 911971,
    ticker: "TK",
    company_name: "TEEKAY CORP",
  },
  {
    cik_str: 1034665,
    ticker: "MHD",
    company_name: "BLACKROCK MUNIHOLDINGS FUND, INC.",
  },
  {
    cik_str: 1059386,
    ticker: "VVR",
    company_name: "Invesco Senior Income Trust",
  },
  {
    cik_str: 80035,
    ticker: "PLPC",
    company_name: "PREFORMED LINE PRODUCTS CO",
  },
  {
    cik_str: 1819790,
    ticker: "TARS",
    company_name: "Tarsus Pharmaceuticals, Inc.",
  },
  {
    cik_str: 931148,
    ticker: "EAF",
    company_name: "GRAFTECH INTERNATIONAL LTD",
  },
  {
    cik_str: 1703141,
    ticker: "DESP",
    company_name: "Despegar.com, Corp.",
  },
  {
    cik_str: 1320375,
    ticker: "BOE",
    company_name: "BlackRock Enhanced Global Dividend Trust",
  },
  {
    cik_str: 1166663,
    ticker: "TNP",
    company_name: "TSAKOS ENERGY NAVIGATION LTD",
  },
  {
    cik_str: 1057379,
    ticker: "HCKT",
    company_name: "HACKETT GROUP, INC.",
  },
  {
    cik_str: 798783,
    ticker: "UHT",
    company_name: "UNIVERSAL HEALTH REALTY INCOME TRUST",
  },
  {
    cik_str: 1886878,
    ticker: "PAXS",
    company_name: "PIMCO Access Income Fund",
  },
  {
    cik_str: 1747068,
    ticker: "MCBS",
    company_name: "MetroCity Bankshares, Inc.",
  },
  {
    cik_str: 1325964,
    ticker: "LWLG",
    company_name: "Lightwave Logic, Inc.",
  },
  {
    cik_str: 1901279,
    ticker: "NYAX",
    company_name: "Nayax Ltd.",
  },
  {
    cik_str: 1134982,
    ticker: "PVNC",
    company_name: "Apple iSports Group, Inc.",
  },
  {
    cik_str: 1579733,
    ticker: "VITL",
    company_name: "Vital Farms, Inc.",
  },
  {
    cik_str: 1053988,
    ticker: "MUJ",
    company_name: "BLACKROCK MUNIHOLDINGS NEW JERSEY QUALITY FUND, INC.",
  },
  {
    cik_str: 1160990,
    ticker: "PCN",
    company_name: "PIMCO CORPORATE & INCOME STRATEGY FUND",
  },
  {
    cik_str: 708781,
    ticker: "CASS",
    company_name: "CASS INFORMATION SYSTEMS INC",
  },
  {
    cik_str: 1333274,
    ticker: "MERC",
    company_name: "MERCER INTERNATIONAL INC.",
  },
  {
    cik_str: 1534254,
    ticker: "CION",
    company_name: "CION Investment Corp",
  },
  {
    cik_str: 706129,
    ticker: "HBNC",
    company_name: "HORIZON BANCORP INC /IN/",
  },
  {
    cik_str: 853180,
    ticker: "VSLAX",
    company_name: "Invesco Senior Loan Fund",
  },
  {
    cik_str: 1175535,
    ticker: "WSR",
    company_name: "Whitestone REIT",
  },
  {
    cik_str: 1383082,
    ticker: "DBA",
    company_name: "INVESCO DB AGRICULTURE FUND",
  },
  {
    cik_str: 925683,
    ticker: "BTO",
    company_name: "JOHN HANCOCK FINANCIAL OPPORTUNITIES FUND",
  },
  {
    cik_str: 935419,
    ticker: "RICK",
    company_name: "RCI HOSPITALITY HOLDINGS, INC.",
  },
  {
    cik_str: 1827821,
    ticker: "FRGE",
    company_name: "Forge Global Holdings, Inc.",
  },
  {
    cik_str: 1010000,
    ticker: "RUPRF",
    company_name: "RUPERT RESOURCES LTD",
  },
  {
    cik_str: 1437958,
    ticker: "CCB",
    company_name: "COASTAL FINANCIAL CORP",
  },
  {
    cik_str: 1880438,
    ticker: "ANTX",
    company_name: "AN2 Therapeutics, Inc.",
  },
  {
    cik_str: 1296250,
    ticker: "PFN",
    company_name: "PIMCO Income Strategy Fund II",
  },
  {
    cik_str: 724004,
    ticker: "MLAB",
    company_name: "MESA LABORATORIES INC /CO/",
  },
  {
    cik_str: 1160308,
    ticker: "SVRA",
    company_name: "Savara Inc",
  },
  {
    cik_str: 105319,
    ticker: "WW",
    company_name: "WW INTERNATIONAL, INC.",
  },
  {
    cik_str: 844059,
    ticker: "FRPH",
    company_name: "FRP HOLDINGS, INC.",
  },
  {
    cik_str: 71829,
    ticker: "NR",
    company_name: "NEWPARK RESOURCES INC",
  },
  {
    cik_str: 1778114,
    ticker: "AIO",
    company_name:
      "Virtus Artificial Intelligence & Technology Opportunities Fund",
  },
  {
    cik_str: 1624322,
    ticker: "BFST",
    company_name: "Business First Bancshares, Inc.",
  },
  {
    cik_str: 1092796,
    ticker: "SWBI",
    company_name: "SMITH & WESSON BRANDS, INC.",
  },
  {
    cik_str: 1617242,
    ticker: "KRNY",
    company_name: "Kearny Financial Corp.",
  },
  {
    cik_str: 1793129,
    ticker: "NDMO",
    company_name: "Nuveen Dynamic Municipal Opportunities Fund",
  },
  {
    cik_str: 33002,
    ticker: "EBF",
    company_name: "ENNIS, INC.",
  },
  {
    cik_str: 1436208,
    ticker: "LEGH",
    company_name: "Legacy Housing Corp",
  },
  {
    cik_str: 1441236,
    ticker: "CLW",
    company_name: "Clearwater Paper Corp",
  },
  {
    cik_str: 1053352,
    ticker: "HTBK",
    company_name: "HERITAGE COMMERCE CORP",
  },
  {
    cik_str: 1863127,
    ticker: "TYRA",
    company_name: "Tyra Biosciences, Inc.",
  },
  {
    cik_str: 1625101,
    ticker: "PLSE",
    company_name: "Pulse Biosciences, Inc.",
  },
  {
    cik_str: 1125345,
    ticker: "MGNX",
    company_name: "MACROGENICS INC",
  },
  {
    cik_str: 1160864,
    ticker: "BHK",
    company_name: "BLACKROCK CORE BOND TRUST",
  },
  {
    cik_str: 925528,
    ticker: "HDSN",
    company_name: "HUDSON TECHNOLOGIES INC /NY",
  },
  {
    cik_str: 1109242,
    ticker: "HAFC",
    company_name: "HANMI FINANCIAL CORP",
  },
  {
    cik_str: 1577437,
    ticker: "ASC",
    company_name: "Ardmore Shipping Corp",
  },
  {
    cik_str: 100591,
    ticker: "AGX",
    company_name: "ARGAN INC",
  },
  {
    cik_str: 1647822,
    ticker: "SVMB",
    company_name: "SavMobi Technology Inc.",
  },
  {
    cik_str: 807863,
    ticker: "MITK",
    company_name: "MITEK SYSTEMS INC",
  },
  {
    cik_str: 1479615,
    ticker: "SLN",
    company_name: "Silence Therapeutics plc",
  },
  {
    cik_str: 916907,
    ticker: "SMBC",
    company_name: "SOUTHERN MISSOURI BANCORP, INC.",
  },
  {
    cik_str: 357301,
    ticker: "TRST",
    company_name: "TRUSTCO BANK CORP N Y",
  },
  {
    cik_str: 1529377,
    ticker: "ACRE",
    company_name: "Ares Commercial Real Estate Corp",
  },
  {
    cik_str: 1562818,
    ticker: "BIT",
    company_name: "BlackRock Multi-Sector Income Trust",
  },
  {
    cik_str: 1728205,
    ticker: "PLL",
    company_name: "Piedmont Lithium Inc.",
  },
  {
    cik_str: 351834,
    ticker: "STKL",
    company_name: "SunOpta Inc.",
  },
  {
    cik_str: 844965,
    ticker: "TTI",
    company_name: "TETRA TECHNOLOGIES INC",
  },
  {
    cik_str: 1313510,
    ticker: "GGN",
    company_name: "GAMCO Global Gold, Natural Resources & Income Trust",
  },
  {
    cik_str: 1452936,
    ticker: "PCOK",
    company_name: "Pacific Oak Strategic Opportunity REIT, Inc.",
  },
  {
    cik_str: 1383441,
    ticker: "NIE",
    company_name: "Virtus Equity & Convertible Income Fund",
  },
  {
    cik_str: 1570562,
    ticker: "EOLS",
    company_name: "Evolus, Inc.",
  },
  {
    cik_str: 1795579,
    ticker: "CALT",
    company_name: "Calliditas Therapeutics AB",
  },
  {
    cik_str: 1220754,
    ticker: "MODV",
    company_name: "ModivCare Inc",
  },
  {
    cik_str: 1476034,
    ticker: "MCB",
    company_name: "Metropolitan Bank Holding Corp.",
  },
  {
    cik_str: 852772,
    ticker: "DENN",
    company_name: "DENNY'S Corp",
  },
  {
    cik_str: 1513363,
    ticker: "FDUS",
    company_name: "FIDUS INVESTMENT Corp",
  },
  {
    cik_str: 1904856,
    ticker: "EFXT",
    company_name: "Enerflex Ltd.",
  },
  {
    cik_str: 1066605,
    ticker: "HSII",
    company_name: "HEIDRICK & STRUGGLES INTERNATIONAL INC",
  },
  {
    cik_str: 80172,
    ticker: "NPK",
    company_name: "NATIONAL PRESTO INDUSTRIES INC",
  },
  {
    cik_str: 61986,
    ticker: "MTW",
    company_name: "MANITOWOC CO INC",
  },
  {
    cik_str: 1466026,
    ticker: "MSBI",
    company_name: "Midland States Bancorp, Inc.",
  },
  {
    cik_str: 1710680,
    ticker: "HFRO",
    company_name: "HIGHLAND OPPORTUNITIES & INCOME FUND",
  },
  {
    cik_str: 928340,
    ticker: "CWCO",
    company_name: "Consolidated Water Co. Ltd.",
  },
  {
    cik_str: 926282,
    ticker: "ADTN",
    company_name: "ADTRAN Holdings, Inc.",
  },
  {
    cik_str: 1826286,
    ticker: "VINP",
    company_name: "Vinci Partners Investments Ltd.",
  },
  {
    cik_str: 1700844,
    ticker: "EVOH",
    company_name: "EvoAir Holdings Inc.",
  },
  {
    cik_str: 1835724,
    ticker: "ZH",
    company_name: "Zhihu Inc.",
  },
  {
    cik_str: 1227862,
    ticker: "EMD",
    company_name: "WESTERN ASSET EMERGING MARKETS DEBT FUND INC.",
  },
  {
    cik_str: 879585,
    ticker: "ATNI",
    company_name: "ATN International, Inc.",
  },
  {
    cik_str: 1325618,
    ticker: "IRMD",
    company_name: "IRADIMED CORP",
  },
  {
    cik_str: 108985,
    ticker: "YORW",
    company_name: "YORK WATER CO",
  },
  {
    cik_str: 1173489,
    ticker: "CEVA",
    company_name: "CEVA INC",
  },
  {
    cik_str: 1774342,
    ticker: "NMCO",
    company_name: "Nuveen Municipal Credit Opportunities Fund",
  },
  {
    cik_str: 1692376,
    ticker: "VEL",
    company_name: "Velocity Financial, Inc.",
  },
  {
    cik_str: 885601,
    ticker: "IIM",
    company_name: "Invesco Value Municipal Income Trust",
  },
  {
    cik_str: 1726173,
    ticker: "BH-A",
    company_name: "Biglari Holdings Inc.",
  },
  {
    cik_str: 1559432,
    ticker: "TXO",
    company_name: "TXO Partners, L.P.",
  },
  {
    cik_str: 1235468,
    ticker: "LQDT",
    company_name: "LIQUIDITY SERVICES INC",
  },
  {
    cik_str: 750686,
    ticker: "CAC",
    company_name: "CAMDEN NATIONAL CORP",
  },
  {
    cik_str: 1548717,
    ticker: "LDP",
    company_name: "Cohen & Steers Ltd Duration Preferred & Income Fund, Inc.",
  },
  {
    cik_str: 928658,
    ticker: "CVLG",
    company_name: "COVENANT LOGISTICS GROUP, INC.",
  },
  {
    cik_str: 1583107,
    ticker: "TBPH",
    company_name: "Theravance Biopharma, Inc.",
  },
  {
    cik_str: 711772,
    ticker: "CATC",
    company_name: "CAMBRIDGE BANCORP",
  },
  {
    cik_str: 1170299,
    ticker: "PML",
    company_name: "PIMCO MUNICIPAL INCOME FUND II",
  },
  {
    cik_str: 1769617,
    ticker: "HONE",
    company_name: "HarborOne Bancorp, Inc.",
  },
  {
    cik_str: 1493225,
    ticker: "NFBK",
    company_name: "Northfield Bancorp, Inc.",
  },
  {
    cik_str: 737468,
    ticker: "WASH",
    company_name: "WASHINGTON TRUST BANCORP INC",
  },
  {
    cik_str: 917100,
    ticker: "IFN",
    company_name: "INDIA FUND, INC.",
  },
  {
    cik_str: 1001614,
    ticker: "REPX",
    company_name: "Riley Exploration Permian, Inc.",
  },
  {
    cik_str: 1314966,
    ticker: "BME",
    company_name: "BlackRock Health Sciences Trust",
  },
  {
    cik_str: 25475,
    ticker: "CRD-A",
    company_name: "CRAWFORD & CO",
  },
  {
    cik_str: 1512499,
    ticker: "LIND",
    company_name: "LINDBLAD EXPEDITIONS HOLDINGS, INC.",
  },
  {
    cik_str: 1195738,
    ticker: "NKX",
    company_name: "NUVEEN CALIFORNIA AMT-FREE QUALITY MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 1020710,
    ticker: "DXPE",
    company_name: "DXP ENTERPRISES INC",
  },
  {
    cik_str: 1643303,
    ticker: "NNDM",
    company_name: "Nano Dimension Ltd.",
  },
  {
    cik_str: 1857816,
    ticker: "GCT",
    company_name: "GigaCloud Technology Inc",
  },
  {
    cik_str: 1368519,
    ticker: "NOA",
    company_name: "North American Construction Group Ltd.",
  },
  {
    cik_str: 1234006,
    ticker: "GOOD",
    company_name: "GLADSTONE COMMERCIAL CORP",
  },
  {
    cik_str: 1334388,
    ticker: "OBE",
    company_name: "OBSIDIAN ENERGY LTD.",
  },
  {
    cik_str: 1668673,
    ticker: "PETQ",
    company_name: "PetIQ, Inc.",
  },
  {
    cik_str: 1322439,
    ticker: "EGLE",
    company_name: "Eagle Bulk Shipping Inc.",
  },
  {
    cik_str: 1267902,
    ticker: "WIW",
    company_name: "WESTERN ASSET INFLATION-LINKED OPPORTUNITIES & INCOME FUND",
  },
  {
    cik_str: 1873331,
    ticker: "PGRU",
    company_name: "PROPERTYGURU GROUP LTD",
  },
  {
    cik_str: 1116463,
    ticker: "OSUR",
    company_name: "ORASURE TECHNOLOGIES INC",
  },
  {
    cik_str: 1826492,
    ticker: "GRCL",
    company_name: "Gracell Biotechnologies Inc.",
  },
  {
    cik_str: 886206,
    ticker: "FC",
    company_name: "FRANKLIN COVEY CO",
  },
  {
    cik_str: 1500435,
    ticker: "GPRO",
    company_name: "GoPro, Inc.",
  },
  {
    cik_str: 1447362,
    ticker: "CSTL",
    company_name: "CASTLE BIOSCIENCES INC",
  },
  {
    cik_str: 1855351,
    ticker: "SAGA",
    company_name: "Sagaliam Acquisition Corp",
  },
  {
    cik_str: 216085,
    ticker: "HVT",
    company_name: "HAVERTY FURNITURE COMPANIES INC",
  },
  {
    cik_str: 712034,
    ticker: "ACCO",
    company_name: "ACCO BRANDS Corp",
  },
  {
    cik_str: 1850235,
    ticker: "HEPS",
    company_name: "D-MARKET Electronic Services & Trading",
  },
  {
    cik_str: 1822928,
    ticker: "HLLY",
    company_name: "Holley Inc.",
  },
  {
    cik_str: 8063,
    ticker: "ATRO",
    company_name: "ASTRONICS CORP",
  },
  {
    cik_str: 1948455,
    ticker: "ISPR",
    company_name: "Ispire Technology Inc.",
  },
  {
    cik_str: 1631574,
    ticker: "WVE",
    company_name: "Wave Life Sciences Ltd.",
  },
  {
    cik_str: 1788257,
    ticker: "BWMX",
    company_name: "BETTERWARE DE MEXICO, S.A.P.I. DE C.V",
  },
  {
    cik_str: 880892,
    ticker: "VGM",
    company_name: "Invesco Trust for Investment Grade Municipals",
  },
  {
    cik_str: 1720990,
    ticker: "FSR",
    company_name: "Fisker Inc./DE",
  },
  {
    cik_str: 1840856,
    ticker: "SOUN",
    company_name: "SOUNDHOUND AI, INC.",
  },
  {
    cik_str: 855886,
    ticker: "PDT",
    company_name: "JOHN HANCOCK PREMIUM DIVIDEND FUND",
  },
  {
    cik_str: 1395325,
    ticker: "ETJ",
    company_name: "Eaton Vance Risk-Managed Diversified Equity Income Fund",
  },
  {
    cik_str: 1464343,
    ticker: "ATLC",
    company_name: "Atlanticus Holdings Corp",
  },
  {
    cik_str: 1217234,
    ticker: "CDNA",
    company_name: "CareDx, Inc.",
  },
  {
    cik_str: 1803737,
    ticker: "EHAB",
    company_name: "Enhabit, Inc.",
  },
  {
    cik_str: 1393299,
    ticker: "BGY",
    company_name: "BlackRock Enhanced International Dividend Trust",
  },
  {
    cik_str: 877463,
    ticker: "VKQ",
    company_name: "Invesco Municipal Trust",
  },
  {
    cik_str: 1705873,
    ticker: "BRY",
    company_name: "Berry Corp (bry)",
  },
  {
    cik_str: 1619856,
    ticker: "CRBU",
    company_name: "Caribou Biosciences, Inc.",
  },
  {
    cik_str: 1476045,
    ticker: "CLDT",
    company_name: "Chatham Lodging Trust",
  },
  {
    cik_str: 1337117,
    ticker: "ITRN",
    company_name: "Ituran Location & Control Ltd.",
  },
  {
    cik_str: 896429,
    ticker: "CTLP",
    company_name: "CANTALOUPE, INC.",
  },
  {
    cik_str: 1698514,
    ticker: "NESR",
    company_name: "National Energy Services Reunited Corp.",
  },
  {
    cik_str: 924717,
    ticker: "SRDX",
    company_name: "SURMODICS INC",
  },
  {
    cik_str: 1807846,
    ticker: "ML",
    company_name: "MONEYLION INC.",
  },
  {
    cik_str: 1517228,
    ticker: "COMM",
    company_name: "CommScope Holding Company, Inc.",
  },
  {
    cik_str: 701347,
    ticker: "CPF",
    company_name: "CENTRAL PACIFIC FINANCIAL CORP",
  },
  {
    cik_str: 1495240,
    ticker: "LAND",
    company_name: "GLADSTONE LAND Corp",
  },
  {
    cik_str: 1499849,
    ticker: "LND",
    company_name: "BrasilAgro - Brazilian Agricultural Real Estate Co",
  },
  {
    cik_str: 1468666,
    ticker: "SCWX",
    company_name: "SecureWorks Corp",
  },
  {
    cik_str: 1794338,
    ticker: "IGIC",
    company_name: "International General Insurance Holdings Ltd.",
  },
  {
    cik_str: 1050743,
    ticker: "PGC",
    company_name: "PEAPACK GLADSTONE FINANCIAL CORP",
  },
  {
    cik_str: 709337,
    ticker: "FMNB",
    company_name: "FARMERS NATIONAL BANC CORP /OH/",
  },
  {
    cik_str: 1176194,
    ticker: "BLE",
    company_name: "BLACKROCK MUNICIPAL INCOME TRUST II",
  },
  {
    cik_str: 1814287,
    ticker: "ABL",
    company_name: "Abacus Life, Inc.",
  },
  {
    cik_str: 1602584,
    ticker: "CCD",
    company_name: "Calamos Dynamic Convertible & Income Fund",
  },
  {
    cik_str: 1653384,
    ticker: "RWAY",
    company_name: "Runway Growth Finance Corp.",
  },
  {
    cik_str: 1471420,
    ticker: "STK",
    company_name: "Columbia Seligman Premium Technology Growth Fund, Inc.",
  },
  {
    cik_str: 1342916,
    ticker: "HNOI",
    company_name: "HNO International, Inc.",
  },
  {
    cik_str: 1304421,
    ticker: "CNSL",
    company_name: "Consolidated Communications Holdings, Inc.",
  },
  {
    cik_str: 216851,
    ticker: "PEO",
    company_name: "ADAMS NATURAL RESOURCES FUND, INC.",
  },
  {
    cik_str: 39311,
    ticker: "IBCP",
    company_name: "INDEPENDENT BANK CORP /MI/",
  },
  {
    cik_str: 1866633,
    ticker: "CCSI",
    company_name: "Consensus Cloud Solutions, Inc.",
  },
  {
    cik_str: 1832511,
    ticker: "PIII",
    company_name: "P3 Health Partners Inc.",
  },
  {
    cik_str: 1227500,
    ticker: "EQBK",
    company_name: "EQUITY BANCSHARES INC",
  },
  {
    cik_str: 1822359,
    ticker: "DCGO",
    company_name: "DocGo Inc.",
  },
  {
    cik_str: 1810523,
    ticker: "FTHY",
    company_name: "FIRST TRUST HIGH YIELD OPPORTUNITIES 2027 TERM FUND",
  },
  {
    cik_str: 1608742,
    ticker: "DIAX",
    company_name: "Nuveen Dow 30sm Dynamic Overwrite Fund",
  },
  {
    cik_str: 1349436,
    ticker: "SD",
    company_name: "SANDRIDGE ENERGY INC",
  },
  {
    cik_str: 741516,
    ticker: "AMNB",
    company_name: "AMERICAN NATIONAL BANKSHARES INC.",
  },
  {
    cik_str: 1546429,
    ticker: "BGB",
    company_name: "Blackstone Strategic Credit 2027 Term Fund",
  },
  {
    cik_str: 1796280,
    ticker: "ORIC",
    company_name: "Oric Pharmaceuticals, Inc.",
  },
  {
    cik_str: 726601,
    ticker: "CCBG",
    company_name: "CAPITAL CITY BANK GROUP INC",
  },
  {
    cik_str: 1370053,
    ticker: "ANAB",
    company_name: "ANAPTYSBIO, INC",
  },
  {
    cik_str: 1475348,
    ticker: "LBC",
    company_name: "Luther Burbank Corp",
  },
  {
    cik_str: 1840439,
    ticker: "BMEA",
    company_name: "Biomea Fusion, Inc.",
  },
  {
    cik_str: 101199,
    ticker: "UFCS",
    company_name: "UNITED FIRE GROUP INC",
  },
  {
    cik_str: 1313310,
    ticker: "GRVY",
    company_name: "GRAVITY Co., Ltd.",
  },
  {
    cik_str: 46129,
    ticker: "ALNT",
    company_name: "ALLIENT INC",
  },
  {
    cik_str: 1819404,
    ticker: "NRDY",
    company_name: "Nerdy Inc.",
  },
  {
    cik_str: 1628063,
    ticker: "SRG",
    company_name: "Seritage Growth Properties",
  },
  {
    cik_str: 1671858,
    ticker: "SPRY",
    company_name: "ARS Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1672619,
    ticker: "ELVN",
    company_name: "Enliven Therapeutics, Inc.",
  },
  {
    cik_str: 1636422,
    ticker: "HCAT",
    company_name: "Health Catalyst, Inc.",
  },
  {
    cik_str: 885125,
    ticker: "IQI",
    company_name: "Invesco Quality Municipal Income Trust",
  },
  {
    cik_str: 1774983,
    ticker: "BROG",
    company_name: "Brooge Energy Ltd",
  },
  {
    cik_str: 1413837,
    ticker: "FFWM",
    company_name: "First Foundation Inc.",
  },
  {
    cik_str: 65770,
    ticker: "MVIS",
    company_name: "MICROVISION, INC.",
  },
  {
    cik_str: 1783183,
    ticker: "PHAT",
    company_name: "Phathom Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1023313,
    ticker: "FORR",
    company_name: "FORRESTER RESEARCH, INC.",
  },
  {
    cik_str: 1051003,
    ticker: "DSU",
    company_name: "BLACKROCK DEBT STRATEGIES FUND, INC.",
  },
  {
    cik_str: 1781753,
    ticker: "DAO",
    company_name: "Youdao, Inc.",
  },
  {
    cik_str: 1798749,
    ticker: "AVTE",
    company_name: "Aerovate Therapeutics, Inc.",
  },
  {
    cik_str: 1630472,
    ticker: "TRTX",
    company_name: "TPG RE Finance Trust, Inc.",
  },
  {
    cik_str: 1792781,
    ticker: "CURV",
    company_name: "Torrid Holdings Inc.",
  },
  {
    cik_str: 714562,
    ticker: "THFF",
    company_name: "FIRST FINANCIAL CORP /IN/",
  },
  {
    cik_str: 879361,
    ticker: "MYD",
    company_name: "BLACKROCK MUNIYIELD FUND, INC.",
  },
  {
    cik_str: 1782999,
    ticker: "PRTC",
    company_name: "PureTech Health plc",
  },
  {
    cik_str: 1806952,
    ticker: "LYEL",
    company_name: "Lyell Immunopharma, Inc.",
  },
  {
    cik_str: 1855747,
    ticker: "BLND",
    company_name: "Blend Labs, Inc.",
  },
  {
    cik_str: 1372020,
    ticker: "GLDD",
    company_name: "Great Lakes Dredge & Dock CORP",
  },
  {
    cik_str: 1043337,
    ticker: "SRI",
    company_name: "STONERIDGE INC",
  },
  {
    cik_str: 1950246,
    ticker: "MTAL",
    company_name: "Metals Acquisition Ltd",
  },
  {
    cik_str: 74046,
    ticker: "ODC",
    company_name: "Oil-Dri Corp of America",
  },
  {
    cik_str: 1488775,
    ticker: "CEM",
    company_name: "ClearBridge MLP & Midstream Fund Inc.",
  },
  {
    cik_str: 1820378,
    ticker: "TBLD",
    company_name: "Thornburg Income Builder Opportunities Trust",
  },
  {
    cik_str: 1802156,
    ticker: "XPOF",
    company_name: "Xponential Fitness, Inc.",
  },
  {
    cik_str: 1386278,
    ticker: "GDOT",
    company_name: "GREEN DOT CORP",
  },
  {
    cik_str: 1494582,
    ticker: "BOC",
    company_name: "BOSTON OMAHA Corp",
  },
  {
    cik_str: 1002590,
    ticker: "SGU",
    company_name: "STAR GROUP, L.P.",
  },
  {
    cik_str: 1321741,
    ticker: "GAIN",
    company_name: "GLADSTONE INVESTMENT CORPORATION\\DE",
  },
  {
    cik_str: 1235912,
    ticker: "CVRX",
    company_name: "CVRx, Inc.",
  },
  {
    cik_str: 1464591,
    ticker: "GPRK",
    company_name: "GeoPark Ltd",
  },
  {
    cik_str: 1661181,
    ticker: "ORGO",
    company_name: "Organogenesis Holdings Inc.",
  },
  {
    cik_str: 717538,
    ticker: "AROW",
    company_name: "ARROW FINANCIAL CORP",
  },
  {
    cik_str: 1133470,
    ticker: "CVGW",
    company_name: "CALAVO GROWERS INC",
  },
  {
    cik_str: 1319947,
    ticker: "DBI",
    company_name: "Designer Brands Inc.",
  },
  {
    cik_str: 909108,
    ticker: "DHIL",
    company_name: "DIAMOND HILL INVESTMENT GROUP INC",
  },
  {
    cik_str: 1087786,
    ticker: "NXJ",
    company_name: "NUVEEN NEW JERSEY QUALITY MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 1233681,
    ticker: "BLW",
    company_name: "BLACKROCK Ltd DURATION INCOME TRUST",
  },
  {
    cik_str: 1845840,
    ticker: "TSAT",
    company_name: "Telesat Corp",
  },
  {
    cik_str: 1576942,
    ticker: "SFIX",
    company_name: "Stitch Fix, Inc.",
  },
  {
    cik_str: 1668243,
    ticker: "URGN",
    company_name: "UroGen Pharma Ltd.",
  },
  {
    cik_str: 1163668,
    ticker: "SPFI",
    company_name: "SOUTH PLAINS FINANCIAL, INC.",
  },
  {
    cik_str: 788329,
    ticker: "JOUT",
    company_name: "JOHNSON OUTDOORS INC",
  },
  {
    cik_str: 768899,
    ticker: "TBI",
    company_name: "TrueBlue, Inc.",
  },
  {
    cik_str: 1778129,
    ticker: "TSNDF",
    company_name: "TerrAscend Corp.",
  },
  {
    cik_str: 1340677,
    ticker: "SVM",
    company_name: "SILVERCORP METALS INC",
  },
  {
    cik_str: 1816590,
    ticker: "CMPS",
    company_name: "COMPASS Pathways plc",
  },
  {
    cik_str: 1267813,
    ticker: "MRNS",
    company_name: "MARINUS PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1287098,
    ticker: "MXCT",
    company_name: "MAXCYTE, INC.",
  },
  {
    cik_str: 1084765,
    ticker: "RGP",
    company_name: "RESOURCES CONNECTION, INC.",
  },
  {
    cik_str: 1853962,
    ticker: "IAUX",
    company_name: "i-80 Gold Corp.",
  },
  {
    cik_str: 1819576,
    ticker: "LQDA",
    company_name: "Liquidia Corp",
  },
  {
    cik_str: 1801170,
    ticker: "CLOV",
    company_name: "CLOVER HEALTH INVESTMENTS, CORP. /DE",
  },
  {
    cik_str: 800457,
    ticker: "DGICA",
    company_name: "DONEGAL GROUP INC",
  },
  {
    cik_str: 923139,
    ticker: "FFIC",
    company_name: "FLUSHING FINANCIAL CORP",
  },
  {
    cik_str: 1587264,
    ticker: "NETI",
    company_name: "ENETI INC.",
  },
  {
    cik_str: 876523,
    ticker: "EZPW",
    company_name: "EZCORP INC",
  },
  {
    cik_str: 1528988,
    ticker: "BUI",
    company_name:
      "BlackRock Utilities, Infrastructure & Power Opportunities Trust",
  },
  {
    cik_str: 712770,
    ticker: "OLP",
    company_name: "ONE LIBERTY PROPERTIES INC",
  },
  {
    cik_str: 1554697,
    ticker: "GHY",
    company_name: "PGIM Global High Yield Fund, Inc.",
  },
  {
    cik_str: 1127537,
    ticker: "LUNG",
    company_name: "Pulmonx Corp",
  },
  {
    cik_str: 736772,
    ticker: "CCNE",
    company_name: "CNB FINANCIAL CORP/PA",
  },
  {
    cik_str: 1737953,
    ticker: "REPL",
    company_name: "Replimune Group, Inc.",
  },
  {
    cik_str: 1288403,
    ticker: "WTI",
    company_name: "W&T OFFSHORE INC",
  },
  {
    cik_str: 1864208,
    ticker: "GUG",
    company_name: "Guggenheim Active Allocation Fund",
  },
  {
    cik_str: 876779,
    ticker: "MGIC",
    company_name: "MAGIC SOFTWARE ENTERPRISES LTD",
  },
  {
    cik_str: 1606163,
    ticker: "LMB",
    company_name: "Limbach Holdings, Inc.",
  },
  {
    cik_str: 1818502,
    ticker: "OPFI",
    company_name: "OppFi Inc.",
  },
  {
    cik_str: 1805012,
    ticker: "VTRU",
    company_name: "Vitru Ltd",
  },
  {
    cik_str: 1847590,
    ticker: "BWMN",
    company_name: "Bowman Consulting Group Ltd.",
  },
  {
    cik_str: 891166,
    ticker: "UVE",
    company_name: "UNIVERSAL INSURANCE HOLDINGS, INC.",
  },
  {
    cik_str: 1758021,
    ticker: "KRT",
    company_name: "Karat Packaging Inc.",
  },
  {
    cik_str: 924822,
    ticker: "MLR",
    company_name: "MILLER INDUSTRIES INC /TN/",
  },
  {
    cik_str: 1824814,
    ticker: "CGNT",
    company_name: "Cognyte Software Ltd.",
  },
  {
    cik_str: 894627,
    ticker: "EGY",
    company_name: "VAALCO ENERGY INC /DE/",
  },
  {
    cik_str: 799850,
    ticker: "CRMT",
    company_name: "AMERICAS CARMART INC",
  },
  {
    cik_str: 1817713,
    ticker: "JANX",
    company_name: "Janux Therapeutics, Inc.",
  },
  {
    cik_str: 895531,
    ticker: "VCV",
    company_name: "Invesco California Value Municipal Income Trust",
  },
  {
    cik_str: 1965473,
    ticker: "CCG",
    company_name: "Cheche Group Inc.",
  },
  {
    cik_str: 1478888,
    ticker: "NBB",
    company_name: "Nuveen Taxable Municipal Income Fund",
  },
  {
    cik_str: 1710072,
    ticker: "EWTX",
    company_name: "Edgewise Therapeutics, Inc.",
  },
  {
    cik_str: 1832928,
    ticker: "CRLBF",
    company_name: "Cresco Labs Inc.",
  },
  {
    cik_str: 1538263,
    ticker: "HTBI",
    company_name: "HomeTrust Bancshares, Inc.",
  },
  {
    cik_str: 62234,
    ticker: "MCS",
    company_name: "MARCUS CORP",
  },
  {
    cik_str: 1035092,
    ticker: "SHBI",
    company_name: "SHORE BANCSHARES INC",
  },
  {
    cik_str: 1788999,
    ticker: "XPER",
    company_name: "Xperi Inc.",
  },
  {
    cik_str: 77543,
    ticker: "TPC",
    company_name: "TUTOR PERINI CORP",
  },
  {
    cik_str: 1689375,
    ticker: "TRDA",
    company_name: "Entrada Therapeutics, Inc.",
  },
  {
    cik_str: 1073748,
    ticker: "YUMM",
    company_name: "YUMMIES INC",
  },
  {
    cik_str: 1849056,
    ticker: "ALCC",
    company_name: "AltC Acquisition Corp.",
  },
  {
    cik_str: 1080720,
    ticker: "GUT",
    company_name: "GABELLI UTILITY TRUST",
  },
  {
    cik_str: 1721386,
    ticker: "LSEA",
    company_name: "Landsea Homes Corp",
  },
  {
    cik_str: 1793855,
    ticker: "ASGI",
    company_name: "abrdn Global Infrastructure Income Fund",
  },
  {
    cik_str: 1831283,
    ticker: "LIAN",
    company_name: "LianBio",
  },
  {
    cik_str: 1137393,
    ticker: "BFK",
    company_name: "BLACKROCK MUNICIPAL INCOME TRUST",
  },
  {
    cik_str: 1708055,
    ticker: "RBBN",
    company_name: "Ribbon Communications Inc.",
  },
  {
    cik_str: 96869,
    ticker: "TRC",
    company_name: "TEJON RANCH CO",
  },
  {
    cik_str: 1518557,
    ticker: "MMD",
    company_name: "MainStay MacKay DefinedTerm Municipal Opportunities Fund",
  },
  {
    cik_str: 1635977,
    ticker: "THW",
    company_name: "abrdn World Healthcare Fund",
  },
  {
    cik_str: 1143513,
    ticker: "GLAD",
    company_name: "GLADSTONE CAPITAL CORP",
  },
  {
    cik_str: 1692705,
    ticker: "QD",
    company_name: "Qudian Inc.",
  },
  {
    cik_str: 1517006,
    ticker: "GATO",
    company_name: "Gatos Silver, Inc.",
  },
  {
    cik_str: 1023731,
    ticker: "EGHT",
    company_name: "8X8 INC /DE/",
  },
  {
    cik_str: 1703956,
    ticker: "BBCP",
    company_name: "Concrete Pumping Holdings, Inc.",
  },
  {
    cik_str: 1832332,
    ticker: "AVAH",
    company_name: "Aveanna Healthcare Holdings, Inc.",
  },
  {
    cik_str: 1474627,
    ticker: "NEGG",
    company_name: "Newegg Commerce, Inc.",
  },
  {
    cik_str: 1069899,
    ticker: "PAHC",
    company_name: "PHIBRO ANIMAL HEALTH CORP",
  },
  {
    cik_str: 1896212,
    ticker: "CDT",
    company_name: "CONDUIT PHARMACEUTICALS INC.",
  },
  {
    cik_str: 835948,
    ticker: "MVF",
    company_name: "BLACKROCK MUNIVEST FUND, INC.",
  },
  {
    cik_str: 796505,
    ticker: "CLFD",
    company_name: "Clearfield, Inc.",
  },
  {
    cik_str: 1625641,
    ticker: "LAW",
    company_name: "CS Disco, Inc.",
  },
  {
    cik_str: 879911,
    ticker: "AERG",
    company_name: "APPLIED ENERGETICS, INC.",
  },
  {
    cik_str: 1835654,
    ticker: "INVZ",
    company_name: "Innoviz Technologies Ltd.",
  },
  {
    cik_str: 1623590,
    ticker: "FINR",
    company_name: "Fintech Scion Ltd",
  },
  {
    cik_str: 1865187,
    ticker: "ARIS",
    company_name: "Aris Water Solutions, Inc.",
  },
  {
    cik_str: 1922097,
    ticker: "LANV",
    company_name: "Lanvin Group Holdings Ltd",
  },
  {
    cik_str: 1737287,
    ticker: "ALLO",
    company_name: "Allogene Therapeutics, Inc.",
  },
  {
    cik_str: 783412,
    ticker: "DJCO",
    company_name: "DAILY JOURNAL CORP",
  },
  {
    cik_str: 1865631,
    ticker: "NN",
    company_name: "NEXTNAV INC.",
  },
  {
    cik_str: 1772921,
    ticker: "ONEW",
    company_name: "OneWater Marine Inc.",
  },
  {
    cik_str: 743367,
    ticker: "BHB",
    company_name: "BAR HARBOR BANKSHARES",
  },
  {
    cik_str: 1835856,
    ticker: "BETR",
    company_name: "Better Home & Finance Holding Co",
  },
  {
    cik_str: 1923840,
    ticker: "THRD",
    company_name: "Third Harmonic Bio, Inc.",
  },
  {
    cik_str: 884624,
    ticker: "OFIX",
    company_name: "Orthofix Medical Inc.",
  },
  {
    cik_str: 1437071,
    ticker: "IVR",
    company_name: "Invesco Mortgage Capital Inc.",
  },
  {
    cik_str: 886043,
    ticker: "MMU",
    company_name: "WESTERN ASSET MANAGED MUNICIPALS FUND INC.",
  },
  {
    cik_str: 1644378,
    ticker: "RMR",
    company_name: "RMR GROUP INC.",
  },
  {
    cik_str: 1275168,
    ticker: "FSBC",
    company_name: "FIVE STAR BANCORP",
  },
  {
    cik_str: 1122904,
    ticker: "NTGR",
    company_name: "NETGEAR, INC.",
  },
  {
    cik_str: 863110,
    ticker: "ARTNA",
    company_name: "ARTESIAN RESOURCES CORP",
  },
  {
    cik_str: 1290677,
    ticker: "TPB",
    company_name: "Turning Point Brands, Inc.",
  },
  {
    cik_str: 1259708,
    ticker: "FRA",
    company_name: "BLACKROCK FLOATING RATE INCOME STRATEGIES FUND, INC.",
  },
  {
    cik_str: 1501796,
    ticker: "AURA",
    company_name: "Aura Biosciences, Inc.",
  },
  {
    cik_str: 912147,
    ticker: "RMT",
    company_name: "ROYCE MICRO-CAP TRUST, INC.",
  },
  {
    cik_str: 1737927,
    ticker: "CGC",
    company_name: "Canopy Growth Corp",
  },
  {
    cik_str: 1487428,
    ticker: "HRZN",
    company_name: "Horizon Technology Finance Corp",
  },
  {
    cik_str: 743238,
    ticker: "SHYF",
    company_name: "SHYFT GROUP, INC.",
  },
  {
    cik_str: 1215913,
    ticker: "HPS",
    company_name: "JOHN HANCOCK PREFERRED INCOME FUND III",
  },
  {
    cik_str: 1518621,
    ticker: "ORC",
    company_name: "Orchid Island Capital, Inc.",
  },
  {
    cik_str: 717720,
    ticker: "VALU",
    company_name: "VALUE LINE INC",
  },
  {
    cik_str: 1528985,
    ticker: "INRE",
    company_name: "Inland Real Estate Income Trust, Inc.",
  },
  {
    cik_str: 1828791,
    ticker: "DSP",
    company_name: "Viant Technology Inc.",
  },
  {
    cik_str: 1549595,
    ticker: "NRIX",
    company_name: "Nurix Therapeutics, Inc.",
  },
  {
    cik_str: 1434754,
    ticker: "SB",
    company_name: "SAFE BULKERS, INC.",
  },
  {
    cik_str: 1834974,
    ticker: "LEV",
    company_name: "Lion Electric Co",
  },
  {
    cik_str: 1824403,
    ticker: "RSVR",
    company_name: "Reservoir Media, Inc.",
  },
  {
    cik_str: 1701758,
    ticker: "LOVE",
    company_name: "Lovesac Co",
  },
  {
    cik_str: 1838162,
    ticker: "SLAM",
    company_name: "Slam Corp.",
  },
  {
    cik_str: 1508475,
    ticker: "VNET",
    company_name: "VNET Group, Inc.",
  },
  {
    cik_str: 1070524,
    ticker: "GCBC",
    company_name: "GREENE COUNTY BANCORP INC",
  },
  {
    cik_str: 1823986,
    ticker: "WDH",
    company_name: "Waterdrop Inc.",
  },
  {
    cik_str: 798287,
    ticker: "PTSI",
    company_name: "PAM TRANSPORTATION SERVICES INC",
  },
  {
    cik_str: 1121484,
    ticker: "OIS",
    company_name: "OIL STATES INTERNATIONAL, INC",
  },
  {
    cik_str: 1517518,
    ticker: "EMO",
    company_name: "ClearBridge Energy Midstream Opportunity Fund Inc.",
  },
  {
    cik_str: 1221029,
    ticker: "CPAC",
    company_name: "CEMENTOS PACASMAYO SAA",
  },
  {
    cik_str: 1383414,
    ticker: "PNNT",
    company_name: "PENNANTPARK INVESTMENT CORP",
  },
  {
    cik_str: 1964504,
    ticker: "ARMN",
    company_name: "Aris Mining Corp",
  },
  {
    cik_str: 870780,
    ticker: "NQP",
    company_name: "NUVEEN PENNSYLVANIA QUALITY MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 1383058,
    ticker: "DBO",
    company_name: "Invesco DB Oil Fund",
  },
  {
    cik_str: 903419,
    ticker: "ALRS",
    company_name: "ALERUS FINANCIAL CORP",
  },
  {
    cik_str: 1712178,
    ticker: "NAAS",
    company_name: "NaaS Technology Inc.",
  },
  {
    cik_str: 1899883,
    ticker: "FIP",
    company_name: "FTAI Infrastructure Inc.",
  },
  {
    cik_str: 1044777,
    ticker: "OSPN",
    company_name: "OneSpan Inc.",
  },
  {
    cik_str: 61398,
    ticker: "TELL",
    company_name: "TELLURIAN INC. /DE/",
  },
  {
    cik_str: 809248,
    ticker: "TAST",
    company_name: "CARROLS RESTAURANT GROUP, INC.",
  },
  {
    cik_str: 1026214,
    ticker: "FMCC",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1038773,
    ticker: "SMBK",
    company_name: "SMARTFINANCIAL INC.",
  },
  {
    cik_str: 791963,
    ticker: "OPY",
    company_name: "OPPENHEIMER HOLDINGS INC",
  },
  {
    cik_str: 1953530,
    ticker: "OCS",
    company_name: "Oculis Holding AG",
  },
  {
    cik_str: 1964333,
    ticker: "BHRB",
    company_name: "Burke & Herbert Financial Services Corp.",
  },
  {
    cik_str: 1622229,
    ticker: "COGT",
    company_name: "Cogent Biosciences, Inc.",
  },
  {
    cik_str: 1837412,
    ticker: "SLGC",
    company_name: "SomaLogic, Inc.",
  },
  {
    cik_str: 1487952,
    ticker: "VPG",
    company_name: "Vishay Precision Group, Inc.",
  },
  {
    cik_str: 1377789,
    ticker: "AVNW",
    company_name: "AVIAT NETWORKS, INC.",
  },
  {
    cik_str: 1534880,
    ticker: "ISD",
    company_name: "PGIM High Yield Bond Fund, Inc.",
  },
  {
    cik_str: 1782430,
    ticker: "STRW",
    company_name: "Strawberry Fields REIT, Inc.",
  },
  {
    cik_str: 1547994,
    ticker: "JPI",
    company_name: "Nuveen Preferred & Income Term Fund",
  },
  {
    cik_str: 1083301,
    ticker: "WULF",
    company_name: "TERAWULF INC.",
  },
  {
    cik_str: 1848739,
    ticker: "GDEV",
    company_name: "GDEV Inc.",
  },
  {
    cik_str: 1804591,
    ticker: "ME",
    company_name: "23andMe Holding Co.",
  },
  {
    cik_str: 1109116,
    ticker: "EVC",
    company_name: "ENTRAVISION COMMUNICATIONS CORP",
  },
  {
    cik_str: 1176199,
    ticker: "HPI",
    company_name: "JOHN HANCOCK PREFERRED INCOME FUND",
  },
  {
    cik_str: 1108109,
    ticker: "CYH",
    company_name: "COMMUNITY HEALTH SYSTEMS INC",
  },
  {
    cik_str: 1567924,
    ticker: "MIESY",
    company_name: "Mitsui E&S Holdings Co., Ltd./ADR",
  },
  {
    cik_str: 1277866,
    ticker: "EXK",
    company_name: "ENDEAVOUR SILVER CORP",
  },
  {
    cik_str: 901243,
    ticker: "MUA",
    company_name: "BLACKROCK MUNIASSETS FUND, INC.",
  },
  {
    cik_str: 1766400,
    ticker: "PNTG",
    company_name: "Pennant Group, Inc.",
  },
  {
    cik_str: 1375205,
    ticker: "URG",
    company_name: "UR-ENERGY INC",
  },
  {
    cik_str: 1355096,
    ticker: "QRTEA",
    company_name: "Qurate Retail, Inc.",
  },
  {
    cik_str: 1831363,
    ticker: "TERN",
    company_name: "Terns Pharmaceuticals, Inc.",
  },
  {
    cik_str: 18498,
    ticker: "GCO",
    company_name: "GENESCO INC",
  },
  {
    cik_str: 879635,
    ticker: "MPB",
    company_name: "MID PENN BANCORP INC",
  },
  {
    cik_str: 811808,
    ticker: "SMMF",
    company_name: "SUMMIT FINANCIAL GROUP, INC.",
  },
  {
    cik_str: 1010086,
    ticker: "SIGA",
    company_name: "SIGA TECHNOLOGIES INC",
  },
  {
    cik_str: 1861115,
    ticker: "NMAI",
    company_name: "Nuveen Multi-Asset Income Fund",
  },
  {
    cik_str: 1326190,
    ticker: "ALT",
    company_name: "Altimmune, Inc.",
  },
  {
    cik_str: 882150,
    ticker: "MYN",
    company_name: "BLACKROCK MUNIYIELD NEW YORK QUALITY FUND, INC.",
  },
  {
    cik_str: 1397702,
    ticker: "SILK",
    company_name: "Silk Road Medical Inc",
  },
  {
    cik_str: 1878848,
    ticker: "IREN",
    company_name: "Iris Energy Ltd",
  },
  {
    cik_str: 1574197,
    ticker: "FPH",
    company_name: "Five Point Holdings, LLC",
  },
  {
    cik_str: 1412665,
    ticker: "MOFG",
    company_name: "MidWestOne Financial Group, Inc.",
  },
  {
    cik_str: 763532,
    ticker: "LYTS",
    company_name: "LSI INDUSTRIES INC",
  },
  {
    cik_str: 1590560,
    ticker: "QURE",
    company_name: "uniQure N.V.",
  },
  {
    cik_str: 1865389,
    ticker: "NPFD",
    company_name: "Nuveen Variable Rate Preferred & Income Fund",
  },
  {
    cik_str: 1975218,
    ticker: "NETD",
    company_name: "Nabors Energy Transition Corp. II",
  },
  {
    cik_str: 1799567,
    ticker: "DDI",
    company_name: "DoubleDown Interactive Co., Ltd.",
  },
  {
    cik_str: 1494904,
    ticker: "GBLI",
    company_name: "Global Indemnity Group, LLC",
  },
  {
    cik_str: 1285890,
    ticker: "IGD",
    company_name: "Voya GLOBAL EQUITY DIVIDEND & PREMIUM OPPORTUNITY FUND",
  },
  {
    cik_str: 1377630,
    ticker: "NCMI",
    company_name: "National CineMedia, Inc.",
  },
  {
    cik_str: 1842731,
    ticker: "SMWB",
    company_name: "SIMILARWEB LTD.",
  },
  {
    cik_str: 1531031,
    ticker: "ESQ",
    company_name: "Esquire Financial Holdings, Inc.",
  },
  {
    cik_str: 1808805,
    ticker: "NAUT",
    company_name: "Nautilus Biotechnology, Inc.",
  },
  {
    cik_str: 1808865,
    ticker: "ITOS",
    company_name: "iTeos Therapeutics, Inc.",
  },
  {
    cik_str: 1759824,
    ticker: "ALTG",
    company_name: "ALTA EQUIPMENT GROUP INC.",
  },
  {
    cik_str: 1803901,
    ticker: "TALK",
    company_name: "Talkspace, Inc.",
  },
  {
    cik_str: 1823144,
    ticker: "CMPO",
    company_name: "CompoSecure, Inc.",
  },
  {
    cik_str: 917491,
    ticker: "FARO",
    company_name: "FARO TECHNOLOGIES INC",
  },
  {
    cik_str: 23795,
    ticker: "CTO",
    company_name: "CTO Realty Growth, Inc.",
  },
  {
    cik_str: 1810019,
    ticker: "RXT",
    company_name: "Rackspace Technology, Inc.",
  },
  {
    cik_str: 59255,
    ticker: "VHI",
    company_name: "VALHI INC /DE/",
  },
  {
    cik_str: 1713748,
    ticker: "SKE",
    company_name: "Skeena Resources Ltd",
  },
  {
    cik_str: 934549,
    ticker: "ACTG",
    company_name: "ACACIA RESEARCH CORP",
  },
  {
    cik_str: 1724755,
    ticker: "GHG",
    company_name: "GreenTree Hospitality Group Ltd.",
  },
  {
    cik_str: 1059142,
    ticker: "GHI",
    company_name: "Greystone Housing Impact Investors LP",
  },
  {
    cik_str: 1210123,
    ticker: "EAD",
    company_name: "ALLSPRING INCOME OPPORTUNITIES FUND",
  },
  {
    cik_str: 1556336,
    ticker: "FEI",
    company_name: "FIRST TRUST MLP & ENERGY INCOME FUND",
  },
  {
    cik_str: 1712463,
    ticker: "PACK",
    company_name: "Ranpak Holdings Corp.",
  },
  {
    cik_str: 1759774,
    ticker: "PSTL",
    company_name: "Postal Realty Trust, Inc.",
  },
  {
    cik_str: 1071236,
    ticker: "RRBI",
    company_name: "RED RIVER BANCSHARES INC",
  },
  {
    cik_str: 1842937,
    ticker: "HCVI",
    company_name: "Hennessy Capital Investment Corp. VI",
  },
  {
    cik_str: 1074540,
    ticker: "EVN",
    company_name: "EATON VANCE MUNICIPAL INCOME TRUST",
  },
  {
    cik_str: 878518,
    ticker: "TGB",
    company_name: "TASEKO MINES LTD",
  },
  {
    cik_str: 1870940,
    ticker: "AIRS",
    company_name: "Airsculpt Technologies, Inc.",
  },
  {
    cik_str: 1819253,
    ticker: "BTMD",
    company_name: "biote Corp.",
  },
  {
    cik_str: 1676479,
    ticker: "CSTR",
    company_name: "CapStar Financial Holdings, Inc.",
  },
  {
    cik_str: 1385613,
    ticker: "GLRE",
    company_name: "GREENLIGHT CAPITAL RE, LTD.",
  },
  {
    cik_str: 715579,
    ticker: "ACNB",
    company_name: "ACNB CORP",
  },
  {
    cik_str: 1020214,
    ticker: "CERS",
    company_name: "CERUS CORP",
  },
  {
    cik_str: 1494530,
    ticker: "FSD",
    company_name: "FIRST TRUST HIGH INCOME LONG/SHORT FUND",
  },
  {
    cik_str: 915779,
    ticker: "DAKT",
    company_name: "DAKTRONICS INC /SD/",
  },
  {
    cik_str: 922357,
    ticker: "IOCJY",
    company_name: "IOCHPE-MAXION SA /FI",
  },
  {
    cik_str: 1580345,
    ticker: "TPVG",
    company_name: "TriplePoint Venture Growth BDC Corp.",
  },
  {
    cik_str: 1308927,
    ticker: "ETB",
    company_name: "Eaton Vance Tax-Managed Buy-Write Income Fund",
  },
  {
    cik_str: 1795251,
    ticker: "NNOX",
    company_name: "Nano-X Imaging Ltd.",
  },
  {
    cik_str: 1318008,
    ticker: "ZUMZ",
    company_name: "Zumiez Inc",
  },
  {
    cik_str: 1766600,
    ticker: "SNDL",
    company_name: "SNDL Inc.",
  },
  {
    cik_str: 1819974,
    ticker: "SKYT",
    company_name: "SkyWater Technology, Inc",
  },
  {
    cik_str: 1281926,
    ticker: "ETO",
    company_name:
      "Eaton Vance Tax-Advantaged Global Dividend Opportunities Fund",
  },
  {
    cik_str: 1091223,
    ticker: "MTLS",
    company_name: "MATERIALISE NV",
  },
  {
    cik_str: 1562051,
    ticker: "NML",
    company_name: "Neuberger Berman Energy Infrastructure & Income Fund Inc.",
  },
  {
    cik_str: 1434621,
    ticker: "TREE",
    company_name: "LendingTree, Inc.",
  },
  {
    cik_str: 103595,
    ticker: "VLGEA",
    company_name: "VILLAGE SUPER MARKET INC",
  },
  {
    cik_str: 1495825,
    ticker: "GBAB",
    company_name:
      "Guggenheim Taxable Municipal Bond & Investment Grade Debt Trust",
  },
  {
    cik_str: 1219120,
    ticker: "AVK",
    company_name: "ADVENT CONVERTIBLE & INCOME FUND",
  },
  {
    cik_str: 1819580,
    ticker: "YSG",
    company_name: "Yatsen Holding Ltd",
  },
  {
    cik_str: 1638290,
    ticker: "MCFT",
    company_name: "MasterCraft Boat Holdings, Inc.",
  },
  {
    cik_str: 724910,
    ticker: "NVEC",
    company_name: "NVE CORP /NEW/",
  },
  {
    cik_str: 1854545,
    ticker: "DDL",
    company_name: "Dingdong (Cayman) Ltd",
  },
  {
    cik_str: 1261654,
    ticker: "UTI",
    company_name: "UNIVERSAL TECHNICAL INSTITUTE INC",
  },
  {
    cik_str: 1805890,
    ticker: "FUSN",
    company_name: "Fusion Pharmaceuticals Inc.",
  },
  {
    cik_str: 1413855,
    ticker: "FANH",
    company_name: "FANHUA INC.",
  },
  {
    cik_str: 1760689,
    ticker: "MVST",
    company_name: "Microvast Holdings, Inc.",
  },
  {
    cik_str: 908993,
    ticker: "VKI",
    company_name: "Invesco Advantage Municipal Income Trust II",
  },
  {
    cik_str: 1559991,
    ticker: "DFP",
    company_name: "Flaherty & Crumrine Dynamic Preferred & Income Fund Inc",
  },
  {
    cik_str: 1581091,
    ticker: "RMAX",
    company_name: "RE/MAX Holdings, Inc.",
  },
  {
    cik_str: 827187,
    ticker: "SNBR",
    company_name: "Sleep Number Corp",
  },
  {
    cik_str: 1016281,
    ticker: "CSV",
    company_name: "CARRIAGE SERVICES INC",
  },
  {
    cik_str: 1258623,
    ticker: "EFR",
    company_name: "EATON VANCE SENIOR FLOATING RATE TRUST",
  },
  {
    cik_str: 1818093,
    ticker: "SKIN",
    company_name: "Beauty Health Co",
  },
  {
    cik_str: 704562,
    ticker: "CDMO",
    company_name: "Avid Bioservices, Inc.",
  },
  {
    cik_str: 1129155,
    ticker: "MPX",
    company_name: "MARINE PRODUCTS CORP",
  },
  {
    cik_str: 1086434,
    ticker: "AUDC",
    company_name: "AUDIOCODES LTD",
  },
  {
    cik_str: 1838957,
    ticker: "RERE",
    company_name: "ATRenew Inc.",
  },
  {
    cik_str: 1748907,
    ticker: "ORTX",
    company_name: "Orchard Therapeutics plc",
  },
  {
    cik_str: 1603454,
    ticker: "CELC",
    company_name: "Celcuity Inc.",
  },
  {
    cik_str: 1447028,
    ticker: "ABUS",
    company_name: "Arbutus Biopharma Corp",
  },
  {
    cik_str: 1704711,
    ticker: "FNKO",
    company_name: "Funko, Inc.",
  },
  {
    cik_str: 1812923,
    ticker: "SDHY",
    company_name: "PGIM Short Duration High Yield Opportunities Fund",
  },
  {
    cik_str: 1053584,
    ticker: "MCBC",
    company_name: "MACATAWA BANK CORP",
  },
  {
    cik_str: 1401521,
    ticker: "ACIC",
    company_name: "AMERICAN COASTAL INSURANCE Corp",
  },
  {
    cik_str: 1058867,
    ticker: "GNTY",
    company_name: "GUARANTY BANCSHARES INC /TX/",
  },
  {
    cik_str: 1616543,
    ticker: "SENS",
    company_name: "Senseonics Holdings, Inc.",
  },
  {
    cik_str: 1640428,
    ticker: "EVER",
    company_name: "EverQuote, Inc.",
  },
  {
    cik_str: 1396277,
    ticker: "CHW",
    company_name: "Calamos Global Dynamic Income Fund",
  },
  {
    cik_str: 910068,
    ticker: "HIO",
    company_name: "WESTERN ASSET HIGH INCOME OPPORTUNITY FUND INC.",
  },
  {
    cik_str: 1937441,
    ticker: "AMBI",
    company_name: "Ambipar Emergency Response",
  },
  {
    cik_str: 1018399,
    ticker: "EBTC",
    company_name: "ENTERPRISE BANCORP INC /MA/",
  },
  {
    cik_str: 88948,
    ticker: "SENEA",
    company_name: "Seneca Foods Corp",
  },
  {
    cik_str: 818972,
    ticker: "LEO",
    company_name: "BNY MELLON STRATEGIC MUNICIPALS, INC.",
  },
  {
    cik_str: 1587987,
    ticker: "NEWT",
    company_name: "NewtekOne, Inc.",
  },
  {
    cik_str: 34067,
    ticker: "BOOM",
    company_name: "DMC Global Inc.",
  },
  {
    cik_str: 1490281,
    ticker: "GRPN",
    company_name: "Groupon, Inc.",
  },
  {
    cik_str: 1784440,
    ticker: "NOTR",
    company_name: "Nowtransit Inc",
  },
  {
    cik_str: 1966287,
    ticker: "GFR",
    company_name: "Greenfire Resources Ltd.",
  },
  {
    cik_str: 1547459,
    ticker: "NGVC",
    company_name: "Natural Grocers by Vitamin Cottage, Inc.",
  },
  {
    cik_str: 314203,
    ticker: "MUX",
    company_name: "McEwen Mining Inc.",
  },
  {
    cik_str: 1348911,
    ticker: "KALV",
    company_name: "KalVista Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1789972,
    ticker: "CGEM",
    company_name: "Cullinan Oncology, Inc.",
  },
  {
    cik_str: 1823878,
    ticker: "MYPS",
    company_name: "PLAYSTUDIOS, Inc.",
  },
  {
    cik_str: 1606909,
    ticker: "PANL",
    company_name: "Pangaea Logistics Solutions Ltd.",
  },
  {
    cik_str: 1291334,
    ticker: "FFA",
    company_name: "FIRST TRUST ENHANCED EQUITY INCOME FUND",
  },
  {
    cik_str: 1066719,
    ticker: "TIHE",
    company_name: "Taihe Group, Inc.",
  },
  {
    cik_str: 746838,
    ticker: "UIS",
    company_name: "UNISYS CORP",
  },
  {
    cik_str: 1923780,
    ticker: "NCL",
    company_name: "Northann Corp.",
  },
  {
    cik_str: 1393584,
    ticker: "AMWL",
    company_name: "American Well Corp",
  },
  {
    cik_str: 1944552,
    ticker: "ANL",
    company_name: "Adlai Nortye Ltd.",
  },
  {
    cik_str: 1503290,
    ticker: "ACP",
    company_name: "abrdn Income Credit Strategies Fund",
  },
  {
    cik_str: 1515671,
    ticker: "DPG",
    company_name: "Duff & Phelps Utility & Infrastructure Fund Inc.",
  },
  {
    cik_str: 1889123,
    ticker: "EMLD",
    company_name: "FTAC Emerald Acquisition Corp.",
  },
  {
    cik_str: 1561566,
    ticker: "QIWI",
    company_name: "QIWI",
  },
  {
    cik_str: 1839799,
    ticker: "GAMB",
    company_name: "Gambling.com Group Ltd",
  },
  {
    cik_str: 1137391,
    ticker: "BFZ",
    company_name: "BLACKROCK CALIFORNIA MUNICIPAL INCOME TRUST",
  },
  {
    cik_str: 14846,
    ticker: "BRT",
    company_name: "BRT Apartments Corp.",
  },
  {
    cik_str: 1786248,
    ticker: "NREF",
    company_name: "NexPoint Real Estate Finance, Inc.",
  },
  {
    cik_str: 1798562,
    ticker: "TMC",
    company_name: "TMC the metals Co Inc.",
  },
  {
    cik_str: 1496323,
    ticker: "IGMS",
    company_name: "IGM Biosciences, Inc.",
  },
  {
    cik_str: 1860879,
    ticker: "RRAC",
    company_name: "Rigel Resource Acquisition Corp.",
  },
  {
    cik_str: 1499422,
    ticker: "RBB",
    company_name: "RBB Bancorp",
  },
  {
    cik_str: 884121,
    ticker: "HQL",
    company_name: "abrdn Life Sciences Investors",
  },
  {
    cik_str: 1723648,
    ticker: "LVOX",
    company_name: "LiveVox Holdings, Inc.",
  },
  {
    cik_str: 1293971,
    ticker: "BLUE",
    company_name: "bluebird bio, Inc.",
  },
  {
    cik_str: 1697500,
    ticker: "SOI",
    company_name: "Solaris Oilfield Infrastructure, Inc.",
  },
  {
    cik_str: 900422,
    ticker: "PMO",
    company_name: "PUTNAM MUNICIPAL OPPORTUNITIES TRUST",
  },
  {
    cik_str: 827773,
    ticker: "PPT",
    company_name: "PUTNAM PREMIER INCOME TRUST",
  },
  {
    cik_str: 1579684,
    ticker: "GCI",
    company_name: "Gannett Co., Inc.",
  },
  {
    cik_str: 1403475,
    ticker: "BMRC",
    company_name: "Bank of Marin Bancorp",
  },
  {
    cik_str: 713425,
    ticker: "AMSWA",
    company_name: "AMERICAN SOFTWARE INC",
  },
  {
    cik_str: 1780652,
    ticker: "CAN",
    company_name: "Canaan Inc.",
  },
  {
    cik_str: 1640266,
    ticker: "VYGR",
    company_name: "Voyager Therapeutics, Inc.",
  },
  {
    cik_str: 897322,
    ticker: "GILT",
    company_name: "GILAT SATELLITE NETWORKS LTD",
  },
  {
    cik_str: 1505952,
    ticker: "DOMO",
    company_name: "DOMO, INC.",
  },
  {
    cik_str: 1231457,
    ticker: "GNLX",
    company_name: "GENELUX Corp",
  },
  {
    cik_str: 275694,
    ticker: "MCI",
    company_name: "BARINGS CORPORATE INVESTORS",
  },
  {
    cik_str: 1756708,
    ticker: "JMIA",
    company_name: "Jumia Technologies AG",
  },
  {
    cik_str: 1720420,
    ticker: "IBEX",
    company_name: "IBEX Ltd",
  },
  {
    cik_str: 1620459,
    ticker: "JRVR",
    company_name: "James River Group Holdings, Ltd.",
  },
  {
    cik_str: 1166928,
    ticker: "WTBA",
    company_name: "WEST BANCORPORATION INC",
  },
  {
    cik_str: 1579214,
    ticker: "EEX",
    company_name: "Emerald Holding, Inc.",
  },
  {
    cik_str: 839533,
    ticker: "KTF",
    company_name: "DWS MUNICIPAL INCOME TRUST",
  },
  {
    cik_str: 1816233,
    ticker: "SHCR",
    company_name: "Sharecare, Inc.",
  },
  {
    cik_str: 846475,
    ticker: "ZYXI",
    company_name: "ZYNEX INC",
  },
  {
    cik_str: 1806310,
    ticker: "TSHA",
    company_name: "Taysha Gene Therapies, Inc.",
  },
  {
    cik_str: 1377936,
    ticker: "SAR",
    company_name: "SARATOGA INVESTMENT CORP.",
  },
  {
    cik_str: 1341317,
    ticker: "BWB",
    company_name: "Bridgewater Bancshares Inc",
  },
  {
    cik_str: 1899830,
    ticker: "PERF",
    company_name: "Perfect Corp.",
  },
  {
    cik_str: 1113809,
    ticker: "BBW",
    company_name: "BUILD-A-BEAR WORKSHOP INC",
  },
  {
    cik_str: 1863362,
    ticker: "PROC",
    company_name: "Procaps Group, S.A.",
  },
  {
    cik_str: 65312,
    ticker: "EVI",
    company_name: "EVI INDUSTRIES, INC.",
  },
  {
    cik_str: 1857853,
    ticker: "COOK",
    company_name: "Traeger, Inc.",
  },
  {
    cik_str: 1537137,
    ticker: "SLI",
    company_name: "STANDARD LITHIUM LTD.",
  },
  {
    cik_str: 1792829,
    ticker: "VSTA",
    company_name: "Vasta Platform Ltd",
  },
  {
    cik_str: 1306550,
    ticker: "BGR",
    company_name: "BlackRock Energy & Resources Trust",
  },
  {
    cik_str: 75208,
    ticker: "OSG",
    company_name: "OVERSEAS SHIPHOLDING GROUP INC",
  },
  {
    cik_str: 1866501,
    ticker: "WBX",
    company_name: "Wallbox N.V.",
  },
  {
    cik_str: 1009829,
    ticker: "JAKK",
    company_name: "JAKKS PACIFIC INC",
  },
  {
    cik_str: 1830188,
    ticker: "UHG",
    company_name: "United Homes Group, Inc.",
  },
  {
    cik_str: 1342423,
    ticker: "LMNR",
    company_name: "Limoneira CO",
  },
  {
    cik_str: 1821393,
    ticker: "AAN",
    company_name: "Aaron's Company, Inc.",
  },
  {
    cik_str: 897448,
    ticker: "AMRN",
    company_name: "AMARIN CORP PLC\\UK",
  },
  {
    cik_str: 1849396,
    ticker: "TRMR",
    company_name: "Tremor International Ltd.",
  },
  {
    cik_str: 1666071,
    ticker: "CDLX",
    company_name: "Cardlytics, Inc.",
  },
  {
    cik_str: 1866757,
    ticker: "BRLT",
    company_name: "Brilliant Earth Group, Inc.",
  },
  {
    cik_str: 880807,
    ticker: "AMSC",
    company_name: "AMERICAN SUPERCONDUCTOR CORP /DE/",
  },
  {
    cik_str: 1189740,
    ticker: "HPF",
    company_name: "JOHN HANCOCK PREFERRED INCOME FUND II",
  },
  {
    cik_str: 1360214,
    ticker: "HROW",
    company_name: "HARROW, INC.",
  },
  {
    cik_str: 1436425,
    ticker: "HBCP",
    company_name: "HOME BANCORP, INC.",
  },
  {
    cik_str: 1056943,
    ticker: "PFIS",
    company_name: "PEOPLES FINANCIAL SERVICES CORP.",
  },
  {
    cik_str: 1567529,
    ticker: "KMDA",
    company_name: "KAMADA LTD",
  },
  {
    cik_str: 1400891,
    ticker: "IHRT",
    company_name: "iHeartMedia, Inc.",
  },
  {
    cik_str: 1288992,
    ticker: "EFT",
    company_name: "Eaton Vance Floating-Rate Income Trust",
  },
  {
    cik_str: 890393,
    ticker: "MIY",
    company_name: "BLACKROCK MUNIYIELD MICHIGAN QUALITY FUND, INC.",
  },
  {
    cik_str: 1734107,
    ticker: "SOHU",
    company_name: "Sohu.com Ltd",
  },
  {
    cik_str: 1515940,
    ticker: "KIO",
    company_name: "KKR Income Opportunities Fund",
  },
  {
    cik_str: 788965,
    ticker: "HNRG",
    company_name: "HALLADOR ENERGY CO",
  },
  {
    cik_str: 1318885,
    ticker: "DSX",
    company_name: "DIANA SHIPPING INC.",
  },
  {
    cik_str: 1879248,
    ticker: "ADSE",
    company_name: "Ads-Tec Energy Public Ltd Co",
  },
  {
    cik_str: 1873923,
    ticker: "ONL",
    company_name: "Orion Office REIT Inc.",
  },
  {
    cik_str: 1074769,
    ticker: "NAN",
    company_name: "NUVEEN NEW YORK QUALITY MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 1058239,
    ticker: "HIX",
    company_name: "WESTERN ASSET HIGH INCOME FUND II INC.",
  },
  {
    cik_str: 1390195,
    ticker: "AWP",
    company_name: "abrdn Global Premier Properties Fund",
  },
  {
    cik_str: 1690334,
    ticker: "SMHI",
    company_name: "SEACOR Marine Holdings Inc.",
  },
  {
    cik_str: 1419536,
    ticker: "CBNK",
    company_name: "Capital Bancorp Inc",
  },
  {
    cik_str: 1701051,
    ticker: "WOW",
    company_name: "WideOpenWest, Inc.",
  },
  {
    cik_str: 1027838,
    ticker: "TCMD",
    company_name: "TACTILE SYSTEMS TECHNOLOGY INC",
  },
  {
    cik_str: 91847,
    ticker: "SOR",
    company_name: "SOURCE CAPITAL INC /DE/",
  },
  {
    cik_str: 1843477,
    ticker: "SVII",
    company_name: "Spring Valley Acquisition Corp. II",
  },
  {
    cik_str: 1828536,
    ticker: "NRGV",
    company_name: "Energy Vault Holdings, Inc.",
  },
  {
    cik_str: 826020,
    ticker: "BRW",
    company_name: "Saba Capital Income & Opportunities Fund",
  },
  {
    cik_str: 1874474,
    ticker: "ALLG",
    company_name: "Allego N.V.",
  },
  {
    cik_str: 1098151,
    ticker: "FDBC",
    company_name: "FIDELITY D & D BANCORP INC",
  },
  {
    cik_str: 810958,
    ticker: "CZNC",
    company_name: "CITIZENS & NORTHERN CORP",
  },
  {
    cik_str: 1680581,
    ticker: "FULC",
    company_name: "Fulcrum Therapeutics, Inc.",
  },
  {
    cik_str: 1829576,
    ticker: "CARE",
    company_name: "Carter Bankshares, Inc.",
  },
  {
    cik_str: 1590584,
    ticker: "CVEO",
    company_name: "Civeo Corp",
  },
  {
    cik_str: 1651625,
    ticker: "ACIU",
    company_name: "AC Immune SA",
  },
  {
    cik_str: 898437,
    ticker: "ANIK",
    company_name: "Anika Therapeutics, Inc.",
  },
  {
    cik_str: 932695,
    ticker: "CYD",
    company_name: "CHINA YUCHAI INTERNATIONAL LTD",
  },
  {
    cik_str: 1817159,
    ticker: "RFMZ",
    company_name: "RiverNorth Flexible Municipal Income Fund II, Inc.",
  },
  {
    cik_str: 1018164,
    ticker: "WLFC",
    company_name: "WILLIS LEASE FINANCE CORP",
  },
  {
    cik_str: 1899287,
    ticker: "AMPX",
    company_name: "Amprius Technologies, Inc.",
  },
  {
    cik_str: 1456772,
    ticker: "OPI",
    company_name: "OFFICE PROPERTIES INCOME TRUST",
  },
  {
    cik_str: 76282,
    ticker: "PKOH",
    company_name: "PARK OHIO HOLDINGS CORP",
  },
  {
    cik_str: 1514416,
    ticker: "BAND",
    company_name: "Bandwidth Inc.",
  },
  {
    cik_str: 1833197,
    ticker: "SWIM",
    company_name: "Latham Group, Inc.",
  },
  {
    cik_str: 1038186,
    ticker: "MHN",
    company_name: "BLACKROCK MUNIHOLDINGS NEW YORK QUALITY FUND, INC.",
  },
  {
    cik_str: 1351636,
    ticker: "SSTI",
    company_name: "SOUNDTHINKING, INC.",
  },
  {
    cik_str: 1094324,
    ticker: "SIFY",
    company_name: "SIFY TECHNOLOGIES LTD",
  },
  {
    cik_str: 1393434,
    ticker: "OCUL",
    company_name: "OCULAR THERAPEUTIX, INC",
  },
  {
    cik_str: 1130144,
    ticker: "BSRR",
    company_name: "SIERRA BANCORP",
  },
  {
    cik_str: 714256,
    ticker: "SMTI",
    company_name: "Sanara MedTech Inc.",
  },
  {
    cik_str: 1970622,
    ticker: "IPXX",
    company_name: "Inflection Point Acquisition Corp. II",
  },
  {
    cik_str: 1268533,
    ticker: "TYG",
    company_name: "TORTOISE ENERGY INFRASTRUCTURE CORP",
  },
  {
    cik_str: 1720424,
    ticker: "HIVE",
    company_name: "HIVE Digital Technologies Ltd.",
  },
  {
    cik_str: 1796898,
    ticker: "MAXN",
    company_name: "Maxeon Solar Technologies, Ltd.",
  },
  {
    cik_str: 1848731,
    ticker: "GLASF",
    company_name: "Glass House Brands Inc.",
  },
  {
    cik_str: 1539337,
    ticker: "JRI",
    company_name: "Nuveen Real Asset Income & Growth Fund",
  },
  {
    cik_str: 1933414,
    ticker: "MLYS",
    company_name: "Mineralys Therapeutics, Inc.",
  },
  {
    cik_str: 1653558,
    ticker: "PRTH",
    company_name: "Priority Technology Holdings, Inc.",
  },
  {
    cik_str: 1665988,
    ticker: "BVS",
    company_name: "Bioventus Inc.",
  },
  {
    cik_str: 5981,
    ticker: "AVD",
    company_name: "AMERICAN VANGUARD CORP",
  },
  {
    cik_str: 1700849,
    ticker: "VADP",
    company_name: "Vado Corp.",
  },
  {
    cik_str: 890447,
    ticker: "VTNR",
    company_name: "Vertex Energy Inc.",
  },
  {
    cik_str: 1762303,
    ticker: "RCEL",
    company_name: "AVITA Medical, Inc.",
  },
  {
    cik_str: 1110611,
    ticker: "ONTF",
    company_name: "ON24 INC.",
  },
  {
    cik_str: 1369085,
    ticker: "NEWP",
    company_name: "NEW PACIFIC METALS CORP",
  },
  {
    cik_str: 1244183,
    ticker: "PFL",
    company_name: "PIMCO INCOME STRATEGY FUND",
  },
  {
    cik_str: 1808220,
    ticker: "GOCO",
    company_name: "GoHealth, Inc.",
  },
  {
    cik_str: 826735,
    ticker: "MIN",
    company_name: "MFS INTERMEDIATE INCOME TRUST",
  },
  {
    cik_str: 1870600,
    ticker: "DTC",
    company_name: "Solo Brands, Inc.",
  },
  {
    cik_str: 805928,
    ticker: "AXGN",
    company_name: "Axogen, Inc.",
  },
  {
    cik_str: 1889112,
    ticker: "RENE",
    company_name: "Cartesian Growth Corp II",
  },
  {
    cik_str: 1434728,
    ticker: "GWRS",
    company_name: "Global Water Resources, Inc.",
  },
  {
    cik_str: 1554859,
    ticker: "SMLR",
    company_name: "Semler Scientific, Inc.",
  },
  {
    cik_str: 1388141,
    ticker: "EDD",
    company_name: "Morgan Stanley Emerging Markets Domestic Debt Fund, Inc.",
  },
  {
    cik_str: 1462056,
    ticker: "BLZE",
    company_name: "Backblaze, Inc.",
  },
  {
    cik_str: 792966,
    ticker: "FMAO",
    company_name: "FARMERS & MERCHANTS BANCORP INC",
  },
  {
    cik_str: 275053,
    ticker: "NATR",
    company_name: "NATURES SUNSHINE PRODUCTS INC",
  },
  {
    cik_str: 891290,
    ticker: "RFI",
    company_name: "COHEN & STEERS TOTAL RETURN REALTY FUND INC",
  },
  {
    cik_str: 1814114,
    ticker: "OBIO",
    company_name: "Orchestra BioMed Holdings, Inc.",
  },
  {
    cik_str: 1818382,
    ticker: "HUMA",
    company_name: "Humacyte, Inc.",
  },
  {
    cik_str: 716643,
    ticker: "RGS",
    company_name: "REGIS CORP",
  },
  {
    cik_str: 1356115,
    ticker: "NXDT",
    company_name: "NEXPOINT DIVERSIFIED REAL ESTATE TRUST",
  },
  {
    cik_str: 862831,
    ticker: "FISI",
    company_name: "FINANCIAL INSTITUTIONS INC",
  },
  {
    cik_str: 1841024,
    ticker: "LCAA",
    company_name: "L Catterton Asia Acquisition Corp",
  },
  {
    cik_str: 1855129,
    ticker: "GHRS",
    company_name: "GH Research PLC",
  },
  {
    cik_str: 1795815,
    ticker: "BCAL",
    company_name: "Southern California Bancorp CA",
  },
  {
    cik_str: 1711570,
    ticker: "UROY",
    company_name: "Uranium Royalty Corp.",
  },
  {
    cik_str: 1521951,
    ticker: "FBIZ",
    company_name: "FIRST BUSINESS FINANCIAL SERVICES, INC.",
  },
  {
    cik_str: 1356090,
    ticker: "PGEN",
    company_name: "PRECIGEN, INC.",
  },
  {
    cik_str: 1552800,
    ticker: "TTSH",
    company_name: "TILE SHOP HOLDINGS, INC.",
  },
  {
    cik_str: 76267,
    ticker: "PKE",
    company_name: "PARK AEROSPACE CORP",
  },
  {
    cik_str: 1472012,
    ticker: "IMNM",
    company_name: "Immunome Inc.",
  },
  {
    cik_str: 835333,
    ticker: "OIA",
    company_name: "Invesco Municipal Income Opportunities Trust",
  },
  {
    cik_str: 1754226,
    ticker: "OBT",
    company_name: "Orange County Bancorp, Inc. /DE/",
  },
  {
    cik_str: 1162027,
    ticker: "AFB",
    company_name: "ALLIANCEBERNSTEIN NATIONAL MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 739421,
    ticker: "CZFS",
    company_name: "CITIZENS FINANCIAL SERVICES INC",
  },
  {
    cik_str: 1903870,
    ticker: "AFRI",
    company_name: "Forafric Global PLC",
  },
  {
    cik_str: 1802450,
    ticker: "LIFW",
    company_name: "MSP Recovery, Inc.",
  },
  {
    cik_str: 1062822,
    ticker: "LXRX",
    company_name: "LEXICON PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1551901,
    ticker: "SCM",
    company_name: "Stellus Capital Investment Corp",
  },
  {
    cik_str: 1375340,
    ticker: "FOF",
    company_name: "Cohen & Steers Closed-End Opportunity Fund, Inc.",
  },
  {
    cik_str: 1515324,
    ticker: "ARDC",
    company_name: "Ares Dynamic Credit Allocation Fund, Inc.",
  },
  {
    cik_str: 1178839,
    ticker: "NBH",
    company_name: "NEUBERGER BERMAN MUNICIPAL FUND INC.",
  },
  {
    cik_str: 1635650,
    ticker: "GPP",
    company_name: "Green Plains Partners LP",
  },
  {
    cik_str: 1857410,
    ticker: "IVCB",
    company_name: "Investcorp Europe Acquisition Corp I",
  },
  {
    cik_str: 1913749,
    ticker: "GMM",
    company_name: "Global Mofy Metaverse Ltd",
  },
  {
    cik_str: 1171155,
    ticker: "RLGT",
    company_name: "RADIANT LOGISTICS, INC",
  },
  {
    cik_str: 1392380,
    ticker: "GEVO",
    company_name: "Gevo, Inc.",
  },
  {
    cik_str: 706698,
    ticker: "UTMD",
    company_name: "UTAH MEDICAL PRODUCTS INC",
  },
  {
    cik_str: 948320,
    ticker: "LFMD",
    company_name: "LifeMD, Inc.",
  },
  {
    cik_str: 1041859,
    ticker: "PLCE",
    company_name: "Childrens Place, Inc.",
  },
  {
    cik_str: 1705843,
    ticker: "CBUS",
    company_name: "Cibus, Inc.",
  },
  {
    cik_str: 1680379,
    ticker: "SBT",
    company_name: "Sterling Bancorp, Inc.",
  },
  {
    cik_str: 1970509,
    ticker: "HYAC",
    company_name: "Haymaker Acquisition Corp. 4",
  },
  {
    cik_str: 1836981,
    ticker: "BBAI",
    company_name: "BigBear.ai Holdings, Inc.",
  },
  {
    cik_str: 1327318,
    ticker: "TRUE",
    company_name: "TrueCar, Inc.",
  },
  {
    cik_str: 1831359,
    ticker: "JWSM",
    company_name: "Jaws Mustang Acquisition Corp",
  },
  {
    cik_str: 786035,
    ticker: "ASG",
    company_name: "LIBERTY ALL STAR GROWTH FUND INC.",
  },
  {
    cik_str: 1163370,
    ticker: "NRIM",
    company_name: "NORTHRIM BANCORP INC",
  },
  {
    cik_str: 1320461,
    ticker: "CPS",
    company_name: "Cooper-Standard Holdings Inc.",
  },
  {
    cik_str: 1282631,
    ticker: "NLST",
    company_name: "NETLIST INC",
  },
  {
    cik_str: 1484612,
    ticker: "OM",
    company_name: "Outset Medical, Inc.",
  },
  {
    cik_str: 1717307,
    ticker: "ILPT",
    company_name: "Industrial Logistics Properties Trust",
  },
  {
    cik_str: 1708259,
    ticker: "LX",
    company_name: "LexinFintech Holdings Ltd.",
  },
  {
    cik_str: 1214935,
    ticker: "NCV",
    company_name: "Virtus Convertible & Income Fund",
  },
  {
    cik_str: 69733,
    ticker: "NATH",
    company_name: "NATHANS FAMOUS, INC.",
  },
  {
    cik_str: 31235,
    ticker: "KODK",
    company_name: "EASTMAN KODAK CO",
  },
  {
    cik_str: 1703079,
    ticker: "XFLT",
    company_name: "XAI Octagon Floating Rate & Alternative Income Term Trust",
  },
  {
    cik_str: 1722606,
    ticker: "MTA",
    company_name: "Metalla Royalty & Streaming Ltd.",
  },
  {
    cik_str: 1421461,
    ticker: "IPI",
    company_name: "Intrepid Potash, Inc.",
  },
  {
    cik_str: 1710482,
    ticker: "JMSB",
    company_name: "John Marshall Bancorp, Inc.",
  },
  {
    cik_str: 1995413,
    ticker: "CLBR",
    company_name: "COLOMBIER ACQUISITION CORP. II",
  },
  {
    cik_str: 1275187,
    ticker: "ANGO",
    company_name: "ANGIODYNAMICS INC",
  },
  {
    cik_str: 1434316,
    ticker: "FATE",
    company_name: "FATE THERAPEUTICS INC",
  },
  {
    cik_str: 826154,
    ticker: "ORRF",
    company_name: "ORRSTOWN FINANCIAL SERVICES INC",
  },
  {
    cik_str: 1703644,
    ticker: "GPMT",
    company_name: "Granite Point Mortgage Trust Inc.",
  },
  {
    cik_str: 1552198,
    ticker: "WHF",
    company_name: "WhiteHorse Finance, Inc.",
  },
  {
    cik_str: 1745059,
    ticker: "FINS",
    company_name: "Angel Oak Financial Strategies Income Term Trust",
  },
  {
    cik_str: 1876588,
    ticker: "ZIMV",
    company_name: "ZimVie Inc.",
  },
  {
    cik_str: 1811063,
    ticker: "NUVB",
    company_name: "Nuvation Bio Inc.",
  },
  {
    cik_str: 1661460,
    ticker: "PSTX",
    company_name: "Poseida Therapeutics, Inc.",
  },
  {
    cik_str: 1831907,
    ticker: "MYTE",
    company_name: "MYT Netherlands Parent B.V.",
  },
  {
    cik_str: 844790,
    ticker: "PMM",
    company_name: "PUTNAM MANAGED MUNICIPAL INCOME TRUST",
  },
  {
    cik_str: 1570132,
    ticker: "ANVI",
    company_name: "ANVI GLOBAL HOLDINGS, INC.",
  },
  {
    cik_str: 1593548,
    ticker: "AGS",
    company_name: "PlayAGS, Inc.",
  },
  {
    cik_str: 1854964,
    ticker: "NLCP",
    company_name: "NewLake Capital Partners, Inc.",
  },
  {
    cik_str: 1862461,
    ticker: "REAX",
    company_name: "Real Brokerage Inc",
  },
  {
    cik_str: 63330,
    ticker: "MLP",
    company_name: "MAUI LAND & PINEAPPLE CO INC",
  },
  {
    cik_str: 1230869,
    ticker: "ASA",
    company_name: "ASA Gold & Precious Metals Ltd",
  },
  {
    cik_str: 1506184,
    ticker: "IMMP",
    company_name: "IMMUTEP Ltd",
  },
  {
    cik_str: 720858,
    ticker: "ITIC",
    company_name: "INVESTORS TITLE CO",
  },
  {
    cik_str: 1761918,
    ticker: "ERAS",
    company_name: "Erasca, Inc.",
  },
  {
    cik_str: 1289945,
    ticker: "SPOK",
    company_name: "Spok Holdings, Inc",
  },
  {
    cik_str: 765207,
    ticker: "FNLC",
    company_name: "First Bancorp, Inc /ME/",
  },
  {
    cik_str: 1163609,
    ticker: "SDSYA",
    company_name: "SOUTH DAKOTA SOYBEAN PROCESSORS LLC",
  },
  {
    cik_str: 740663,
    ticker: "FLIC",
    company_name: "FIRST OF LONG ISLAND CORP",
  },
  {
    cik_str: 1735438,
    ticker: "MGTX",
    company_name: "MeiraGTx Holdings plc",
  },
  {
    cik_str: 1720116,
    ticker: "RDVT",
    company_name: "Red Violet, Inc.",
  },
  {
    cik_str: 1001385,
    ticker: "NWPX",
    company_name: "NORTHWEST PIPE CO",
  },
  {
    cik_str: 1181187,
    ticker: "BYM",
    company_name: "BLACKROCK MUNICIPAL INCOME QUALITY TRUST",
  },
  {
    cik_str: 1719714,
    ticker: "MREO",
    company_name: "Mereo Biopharma Group plc",
  },
  {
    cik_str: 818851,
    ticker: "NCA",
    company_name: "NUVEEN CALIFORNIA MUNICIPAL VALUE FUND",
  },
  {
    cik_str: 1729149,
    ticker: "VMD",
    company_name: "VIEMED HEALTHCARE, INC.",
  },
  {
    cik_str: 1384195,
    ticker: "REI",
    company_name: "RING ENERGY, INC.",
  },
  {
    cik_str: 1867949,
    ticker: "REFI",
    company_name: "Chicago Atlantic Real Estate Finance, Inc.",
  },
  {
    cik_str: 106532,
    ticker: "WEYS",
    company_name: "WEYCO GROUP INC",
  },
  {
    cik_str: 1710350,
    ticker: "BTBT",
    company_name: "Bit Digital, Inc",
  },
  {
    cik_str: 1540684,
    ticker: "ATLX",
    company_name: "Atlas Lithium Corp",
  },
  {
    cik_str: 1680873,
    ticker: "HFFG",
    company_name: "HF Foods Group Inc.",
  },
  {
    cik_str: 1717457,
    ticker: "CPZ",
    company_name: "Calamos Long/Short Equity & Dynamic Income Trust",
  },
  {
    cik_str: 1867096,
    ticker: "XERS",
    company_name: "Xeris Biopharma Holdings, Inc.",
  },
  {
    cik_str: 1840706,
    ticker: "SOPH",
    company_name: "SOPHiA GENETICS SA",
  },
  {
    cik_str: 1326003,
    ticker: "BKCC",
    company_name: "BlackRock Capital Investment Corp",
  },
  {
    cik_str: 944745,
    ticker: "CIVB",
    company_name: "CIVISTA BANCSHARES, INC.",
  },
  {
    cik_str: 1722964,
    ticker: "YMAB",
    company_name: "Y-mAbs Therapeutics, Inc.",
  },
  {
    cik_str: 1771226,
    ticker: "RMM",
    company_name: "RiverNorth Managed Duration Municipal Income Fund, Inc.",
  },
  {
    cik_str: 1098972,
    ticker: "AGEN",
    company_name: "AGENUS INC",
  },
  {
    cik_str: 1530249,
    ticker: "FSBW",
    company_name: "FS Bancorp, Inc.",
  },
  {
    cik_str: 1662579,
    ticker: "CCCC",
    company_name: "C4 Therapeutics, Inc.",
  },
  {
    cik_str: 1912461,
    ticker: "SKGR",
    company_name: "SK Growth Opportunities Corp",
  },
  {
    cik_str: 1286613,
    ticker: "LINC",
    company_name: "LINCOLN EDUCATIONAL SERVICES CORP",
  },
  {
    cik_str: 1277902,
    ticker: "MVBF",
    company_name: "MVB FINANCIAL CORP",
  },
  {
    cik_str: 1370450,
    ticker: "WLDN",
    company_name: "Willdan Group, Inc.",
  },
  {
    cik_str: 1743102,
    ticker: "JFIN",
    company_name: "Jiayin Group Inc.",
  },
  {
    cik_str: 1959455,
    ticker: "HSHP",
    company_name: "Himalaya Shipping Ltd.",
  },
  {
    cik_str: 1284940,
    ticker: "FEN",
    company_name: "FIRST TRUST ENERGY INCOME & GROWTH FUND",
  },
  {
    cik_str: 1640251,
    ticker: "WINS",
    company_name: "Wins Finance Holdings Inc.",
  },
  {
    cik_str: 1760854,
    ticker: "NBTX",
    company_name: "Nanobiotix S.A.",
  },
  {
    cik_str: 1615905,
    ticker: "JGH",
    company_name: "Nuveen Global High Income Fund",
  },
  {
    cik_str: 1325670,
    ticker: "FRST",
    company_name: "Primis Financial Corp.",
  },
  {
    cik_str: 733590,
    ticker: "TCI",
    company_name: "TRANSCONTINENTAL REALTY INVESTORS INC",
  },
  {
    cik_str: 1877333,
    ticker: "THCH",
    company_name: "TH International Ltd",
  },
  {
    cik_str: 919893,
    ticker: "TDF",
    company_name: "TEMPLETON DRAGON FUND INC",
  },
  {
    cik_str: 855887,
    ticker: "DSM",
    company_name: "BNY MELLON STRATEGIC MUNICIPAL BOND FUND, INC.",
  },
  {
    cik_str: 1596961,
    ticker: "RMBL",
    company_name: "RumbleOn, Inc.",
  },
  {
    cik_str: 1090009,
    ticker: "SFST",
    company_name: "SOUTHERN FIRST BANCSHARES INC",
  },
  {
    cik_str: 1606366,
    ticker: "LOCO",
    company_name: "El Pollo Loco Holdings, Inc.",
  },
  {
    cik_str: 920427,
    ticker: "UNTY",
    company_name: "UNITY BANCORP INC /NJ/",
  },
  {
    cik_str: 836147,
    ticker: "MBCN",
    company_name: "MIDDLEFIELD BANC CORP",
  },
  {
    cik_str: 1802883,
    ticker: "API",
    company_name: "Agora, Inc.",
  },
  {
    cik_str: 1816581,
    ticker: "OUST",
    company_name: "Ouster, Inc.",
  },
  {
    cik_str: 1783328,
    ticker: "TCRX",
    company_name: "TScan Therapeutics, Inc.",
  },
  {
    cik_str: 1569994,
    ticker: "WSBF",
    company_name: "Waterstone Financial, Inc.",
  },
  {
    cik_str: 916183,
    ticker: "RCS",
    company_name: "PIMCO LOW DURATION OPPORTUNITIES FUND",
  },
  {
    cik_str: 1766368,
    ticker: "MEC",
    company_name: "Mayville Engineering Company, Inc.",
  },
  {
    cik_str: 65433,
    ticker: "MXF",
    company_name: "MEXICO FUND INC",
  },
  {
    cik_str: 866273,
    ticker: "MTRX",
    company_name: "MATRIX SERVICE CO",
  },
  {
    cik_str: 851170,
    ticker: "MCR",
    company_name: "MFS CHARTER INCOME TRUST",
  },
  {
    cik_str: 1392326,
    ticker: "CPLP",
    company_name: "Capital Product Partners L.P.",
  },
  {
    cik_str: 1635282,
    ticker: "RMNI",
    company_name: "Rimini Street, Inc.",
  },
  {
    cik_str: 1195734,
    ticker: "PBPB",
    company_name: "POTBELLY CORP",
  },
  {
    cik_str: 33488,
    ticker: "ESCA",
    company_name: "ESCALADE INC",
  },
  {
    cik_str: 909494,
    ticker: "TCX",
    company_name: "TUCOWS INC /PA/",
  },
  {
    cik_str: 1766478,
    ticker: "AOMR",
    company_name: "Angel Oak Mortgage REIT, Inc.",
  },
  {
    cik_str: 1729997,
    ticker: "GDLC",
    company_name: "Grayscale Digital Large Cap Fund LLC",
  },
  {
    cik_str: 1681206,
    ticker: "NODK",
    company_name: "NI Holdings, Inc.",
  },
  {
    cik_str: 320121,
    ticker: "TLS",
    company_name: "TELOS CORP",
  },
  {
    cik_str: 1808158,
    ticker: "RPTX",
    company_name: "Repare Therapeutics Inc.",
  },
  {
    cik_str: 1847112,
    ticker: "TRTL",
    company_name: "TortoiseEcofin Acquisition Corp. III",
  },
  {
    cik_str: 1769804,
    ticker: "AUGX",
    company_name: "Augmedix, Inc.",
  },
  {
    cik_str: 1287480,
    ticker: "BGT",
    company_name: "BLACKROCK FLOATING RATE INCOME TRUST",
  },
  {
    cik_str: 1740915,
    ticker: "FTCH",
    company_name: "Farfetch Ltd",
  },
  {
    cik_str: 1338561,
    ticker: "SPXX",
    company_name: "Nuveen S&P 500 Dynamic Overwrite Fund",
  },
  {
    cik_str: 1102238,
    ticker: "ARL",
    company_name: "AMERICAN REALTY INVESTORS INC",
  },
  {
    cik_str: 1521404,
    ticker: "BGH",
    company_name: "BARINGS GLOBAL SHORT DURATION HIGH YIELD FUND",
  },
  {
    cik_str: 1839341,
    ticker: "CORZQ",
    company_name: "Core Scientific, Inc./tx",
  },
  {
    cik_str: 813298,
    ticker: "DXLG",
    company_name: "DESTINATION XL GROUP, INC.",
  },
  {
    cik_str: 1325702,
    ticker: "MX",
    company_name: "MAGNACHIP SEMICONDUCTOR Corp",
  },
  {
    cik_str: 1175680,
    ticker: "CYDY",
    company_name: "CytoDyn Inc.",
  },
  {
    cik_str: 1337298,
    ticker: "FF",
    company_name: "FutureFuel Corp.",
  },
  {
    cik_str: 1822966,
    ticker: "SMR",
    company_name: "NUSCALE POWER Corp",
  },
  {
    cik_str: 1564824,
    ticker: "ALLK",
    company_name: "Allakos Inc.",
  },
  {
    cik_str: 1687932,
    ticker: "JILL",
    company_name: "J.Jill, Inc.",
  },
  {
    cik_str: 1680367,
    ticker: "STTK",
    company_name: "Shattuck Labs, Inc.",
  },
  {
    cik_str: 818033,
    ticker: "HRTX",
    company_name: "HERON THERAPEUTICS, INC. /DE/",
  },
  {
    cik_str: 1690639,
    ticker: "VBNK",
    company_name: "VersaBank",
  },
  {
    cik_str: 1856161,
    ticker: "PRLH",
    company_name: "Pearl Holdings Acquisition Corp",
  },
  {
    cik_str: 1102993,
    ticker: "LPSN",
    company_name: "LIVEPERSON INC",
  },
  {
    cik_str: 1368493,
    ticker: "CAF",
    company_name: "Morgan Stanley China A Share Fund, Inc.",
  },
  {
    cik_str: 1497186,
    ticker: "HYI",
    company_name: "Western Asset High Yield Defined Opportunity Fund Inc.",
  },
  {
    cik_str: 1211583,
    ticker: "FENC",
    company_name: "FENNEC PHARMACEUTICALS INC.",
  },
  {
    cik_str: 809173,
    ticker: "MMT",
    company_name: "MFS MULTIMARKET INCOME TRUST",
  },
  {
    cik_str: 1781730,
    ticker: "TCBX",
    company_name: "Third Coast Bancshares, Inc.",
  },
  {
    cik_str: 276720,
    ticker: "PCYO",
    company_name: "PURE CYCLE CORP",
  },
  {
    cik_str: 319655,
    ticker: "SJT",
    company_name: "SAN JUAN BASIN ROYALTY TRUST",
  },
  {
    cik_str: 1825024,
    ticker: "OPAD",
    company_name: "Offerpad Solutions Inc.",
  },
  {
    cik_str: 1077688,
    ticker: "HOFT",
    company_name: "HOOKER FURNISHINGS Corp",
  },
  {
    cik_str: 1633932,
    ticker: "EPIX",
    company_name: "ESSA Pharma Inc.",
  },
  {
    cik_str: 1072725,
    ticker: "GDRZF",
    company_name: "GOLD RESERVE INC",
  },
  {
    cik_str: 1730984,
    ticker: "BCML",
    company_name: "BayCom Corp",
  },
  {
    cik_str: 1074902,
    ticker: "LCNB",
    company_name: "LCNB CORP",
  },
  {
    cik_str: 1786117,
    ticker: "PINE",
    company_name: "Alpine Income Property Trust, Inc.",
  },
  {
    cik_str: 1699880,
    ticker: "AMLI",
    company_name: "American Lithium Corp.",
  },
  {
    cik_str: 1672688,
    ticker: "ABSI",
    company_name: "Absci Corp",
  },
  {
    cik_str: 1227073,
    ticker: "ERC",
    company_name: "ALLSPRING MULTI-SECTOR INCOME FUND",
  },
  {
    cik_str: 1844224,
    ticker: "FREY",
    company_name: "FREYR Battery",
  },
  {
    cik_str: 799288,
    ticker: "LE",
    company_name: "LANDS' END, INC.",
  },
  {
    cik_str: 836412,
    ticker: "ZTR",
    company_name: "Virtus Total Return Fund Inc.",
  },
  {
    cik_str: 65172,
    ticker: "MSB",
    company_name: "MESABI TRUST",
  },
  {
    cik_str: 1631761,
    ticker: "YRD",
    company_name: "Yiren Digital Ltd.",
  },
  {
    cik_str: 1807046,
    ticker: "OZ",
    company_name: "Belpointe PREP, LLC",
  },
  {
    cik_str: 1327688,
    ticker: "OOMA",
    company_name: "OOMA INC",
  },
  {
    cik_str: 1013272,
    ticker: "NWFL",
    company_name: "NORWOOD FINANCIAL CORP",
  },
  {
    cik_str: 1754068,
    ticker: "ALVR",
    company_name: "Allovir, Inc.",
  },
  {
    cik_str: 1454741,
    ticker: "EOT",
    company_name: "Eaton Vance National Municipal Opportunities Trust",
  },
  {
    cik_str: 945983,
    ticker: "CLMB",
    company_name: "Climb Global Solutions, Inc.",
  },
  {
    cik_str: 1637715,
    ticker: "RPHM",
    company_name: "Reneo Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1756701,
    ticker: "LNKB",
    company_name: "LINKBANCORP, Inc.",
  },
  {
    cik_str: 1031316,
    ticker: "FSP",
    company_name: "FRANKLIN STREET PROPERTIES CORP /MA/",
  },
  {
    cik_str: 1046050,
    ticker: "TSBK",
    company_name: "TIMBERLAND BANCORP INC",
  },
  {
    cik_str: 1481792,
    ticker: "QUAD",
    company_name: "Quad/Graphics, Inc.",
  },
  {
    cik_str: 1828852,
    ticker: "MOND",
    company_name: "Mondee Holdings, Inc.",
  },
  {
    cik_str: 1566243,
    ticker: "ARAT",
    company_name: "Arax Holdings Corp",
  },
  {
    cik_str: 804123,
    ticker: "TWN",
    company_name: "TAIWAN FUND INC",
  },
  {
    cik_str: 1282850,
    ticker: "FCT",
    company_name: "FIRST TRUST SENIOR FLOATING RATE INCOME FUND II",
  },
  {
    cik_str: 1138723,
    ticker: "ARAY",
    company_name: "ACCURAY INC",
  },
  {
    cik_str: 832327,
    ticker: "BKT",
    company_name: "BLACKROCK INCOME TRUST, INC.",
  },
  {
    cik_str: 1513789,
    ticker: "FIF",
    company_name: "FIRST TRUST ENERGY INFRASTRUCTURE FUND",
  },
  {
    cik_str: 1657045,
    ticker: "CHMX",
    company_name: "NEXT-ChemX Corporation.",
  },
  {
    cik_str: 1530979,
    ticker: "HNST",
    company_name: "Honest Company, Inc.",
  },
  {
    cik_str: 1593899,
    ticker: "AVIR",
    company_name: "Atea Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1432133,
    ticker: "KLTR",
    company_name: "KALTURA INC",
  },
  {
    cik_str: 72162,
    ticker: "NL",
    company_name: "NL INDUSTRIES INC",
  },
  {
    cik_str: 1941536,
    ticker: "BAER",
    company_name: "Bridger Aerospace Group Holdings, Inc.",
  },
  {
    cik_str: 1137390,
    ticker: "BNY",
    company_name: "BLACKROCK NEW YORK MUNICIPAL INCOME TRUST",
  },
  {
    cik_str: 846676,
    ticker: "AEF",
    company_name: "ABRDN EMERGING MARKETS EQUITY INCOME FUND, INC.",
  },
  {
    cik_str: 1233087,
    ticker: "FTF",
    company_name: "FRANKLIN LTD DURATION INCOME TRUST",
  },
  {
    cik_str: 1555279,
    ticker: "MASS",
    company_name: "908 Devices Inc.",
  },
  {
    cik_str: 922358,
    ticker: "FGPR",
    company_name: "FERRELLGAS PARTNERS L P",
  },
  {
    cik_str: 1049606,
    ticker: "CIX",
    company_name: "COMPX INTERNATIONAL INC",
  },
  {
    cik_str: 1519061,
    ticker: "TSE",
    company_name: "Trinseo PLC",
  },
  {
    cik_str: 1096056,
    ticker: "LXFR",
    company_name: "LUXFER HOLDINGS PLC",
  },
  {
    cik_str: 1512762,
    ticker: "CHRS",
    company_name: "Coherus BioSciences, Inc.",
  },
  {
    cik_str: 789933,
    ticker: "NC",
    company_name: "NACCO INDUSTRIES INC",
  },
  {
    cik_str: 1525201,
    ticker: "DBL",
    company_name: "DoubleLine Opportunistic Credit Fund",
  },
  {
    cik_str: 1822523,
    ticker: "AFCG",
    company_name: "AFC Gamma, Inc.",
  },
  {
    cik_str: 1849737,
    ticker: "PLAO",
    company_name: "Patria Latin American Opportunity Acquisition Corp.",
  },
  {
    cik_str: 1423869,
    ticker: "PCB",
    company_name: "PCB BANCORP",
  },
  {
    cik_str: 1699039,
    ticker: "RNGR",
    company_name: "Ranger Energy Services, Inc.",
  },
  {
    cik_str: 1746129,
    ticker: "BSVN",
    company_name: "Bank7 Corp.",
  },
  {
    cik_str: 1593222,
    ticker: "CIO",
    company_name: "City Office REIT, Inc.",
  },
  {
    cik_str: 1847398,
    ticker: "NECB",
    company_name: "NorthEast Community Bancorp, Inc./MD/",
  },
  {
    cik_str: 807707,
    ticker: "VOXX",
    company_name: "VOXX International Corp",
  },
  {
    cik_str: 1181506,
    ticker: "PMX",
    company_name: "PIMCO MUNICIPAL INCOME FUND III",
  },
  {
    cik_str: 1769663,
    ticker: "PBFS",
    company_name: "Pioneer Bancorp, Inc./MD",
  },
  {
    cik_str: 1527728,
    ticker: "RENB",
    company_name: "RENOVARO BIOSCIENCES INC.",
  },
  {
    cik_str: 1597672,
    ticker: "RYAM",
    company_name: "RAYONIER ADVANCED MATERIALS INC.",
  },
  {
    cik_str: 1693011,
    ticker: "INZY",
    company_name: "Inozyme Pharma, Inc.",
  },
  {
    cik_str: 1762417,
    ticker: "DOYU",
    company_name: "DouYu International Holdings Ltd",
  },
  {
    cik_str: 1826457,
    ticker: "GLUE",
    company_name: "Monte Rosa Therapeutics, Inc.",
  },
  {
    cik_str: 1689731,
    ticker: "SSBK",
    company_name: "Southern States Bancshares, Inc.",
  },
  {
    cik_str: 1484778,
    ticker: "TDUP",
    company_name: "ThredUp Inc.",
  },
  {
    cik_str: 1863006,
    ticker: "VLN",
    company_name: "Valens Semiconductor Ltd.",
  },
  {
    cik_str: 1901637,
    ticker: "USCB",
    company_name: "USCB FINANCIAL HOLDINGS, INC.",
  },
  {
    cik_str: 1519401,
    ticker: "RM",
    company_name: "Regional Management Corp.",
  },
  {
    cik_str: 746514,
    ticker: "NEN",
    company_name: "NEW ENGLAND REALTY ASSOCIATES LIMITED PARTNERSHIP",
  },
  {
    cik_str: 1066194,
    ticker: "EGAN",
    company_name: "EGAIN Corp",
  },
  {
    cik_str: 1846017,
    ticker: "BLFY",
    company_name: "Blue Foundry Bancorp",
  },
  {
    cik_str: 1450445,
    ticker: "NUW",
    company_name: "Nuveen AMT-Free Municipal Value Fund",
  },
  {
    cik_str: 1449488,
    ticker: "CCLP",
    company_name: "CSI Compressco LP",
  },
  {
    cik_str: 909112,
    ticker: "TEI",
    company_name: "TEMPLETON EMERGING MARKETS INCOME FUND",
  },
  {
    cik_str: 1140392,
    ticker: "PMF",
    company_name: "PIMCO MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 1442836,
    ticker: "MRSN",
    company_name: "Mersana Therapeutics, Inc.",
  },
  {
    cik_str: 1127371,
    ticker: "CVCY",
    company_name: "CENTRAL VALLEY COMMUNITY BANCORP",
  },
  {
    cik_str: 1883814,
    ticker: "SLND",
    company_name: "Southland Holdings, Inc.",
  },
  {
    cik_str: 1636651,
    ticker: "OVID",
    company_name: "Ovid Therapeutics Inc.",
  },
  {
    cik_str: 1072627,
    ticker: "KFS",
    company_name: "KINGSWAY FINANCIAL SERVICES INC",
  },
  {
    cik_str: 1728117,
    ticker: "GOSS",
    company_name: "Gossamer Bio, Inc.",
  },
  {
    cik_str: 1845550,
    ticker: "APTM",
    company_name: "Alpha Partners Technology Merger Corp.",
  },
  {
    cik_str: 1382101,
    ticker: "STRO",
    company_name: "SUTRO BIOPHARMA, INC.",
  },
  {
    cik_str: 1826667,
    ticker: "TLSI",
    company_name: "TriSalus Life Sciences, Inc.",
  },
  {
    cik_str: 903651,
    ticker: "INOD",
    company_name: "INNODATA INC",
  },
  {
    cik_str: 1412095,
    ticker: "TROO",
    company_name: "Troops, Inc. /Cayman Islands/",
  },
  {
    cik_str: 766011,
    ticker: "CMCL",
    company_name: "Caledonia Mining Corp Plc",
  },
  {
    cik_str: 1573221,
    ticker: "REAL",
    company_name: "TheRealReal, Inc.",
  },
  {
    cik_str: 829365,
    ticker: "NTPIF",
    company_name: "NAM TAI PROPERTY INC.",
  },
  {
    cik_str: 806279,
    ticker: "CVLY",
    company_name: "CODORUS VALLEY BANCORP INC",
  },
  {
    cik_str: 895528,
    ticker: "VPV",
    company_name: "Invesco Pennsylvania Value Municipal Income Trust",
  },
  {
    cik_str: 1794783,
    ticker: "SLQT",
    company_name: "SelectQuote, Inc.",
  },
  {
    cik_str: 1796073,
    ticker: "VZLA",
    company_name: "Vizsla Silver Corp.",
  },
  {
    cik_str: 1528287,
    ticker: "NPCE",
    company_name: "NeuroPace Inc",
  },
  {
    cik_str: 1501072,
    ticker: "RIV",
    company_name: "RIVERNORTH OPPORTUNITIES FUND, INC.",
  },
  {
    cik_str: 1412100,
    ticker: "MHLD",
    company_name: "Maiden Holdings, Ltd.",
  },
  {
    cik_str: 1168455,
    ticker: "PLBC",
    company_name: "PLUMAS BANCORP",
  },
  {
    cik_str: 1015383,
    ticker: "POWW",
    company_name: "AMMO, INC.",
  },
  {
    cik_str: 1576873,
    ticker: "ABAT",
    company_name: "AMERICAN BATTERY TECHNOLOGY Co",
  },
  {
    cik_str: 1844862,
    ticker: "SLDP",
    company_name: "Solid Power, Inc.",
  },
  {
    cik_str: 1754820,
    ticker: "DM",
    company_name: "Desktop Metal, Inc.",
  },
  {
    cik_str: 1697532,
    ticker: "APLT",
    company_name: "Applied Therapeutics Inc.",
  },
  {
    cik_str: 1784535,
    ticker: "PRCH",
    company_name: "Porch Group, Inc.",
  },
  {
    cik_str: 1660334,
    ticker: "VRCA",
    company_name: "Verrica Pharmaceuticals Inc.",
  },
  {
    cik_str: 763563,
    ticker: "CHMG",
    company_name: "CHEMUNG FINANCIAL CORP",
  },
  {
    cik_str: 1971975,
    ticker: "ABXXF",
    company_name: "Abaxx Technologies Inc.",
  },
  {
    cik_str: 1822462,
    ticker: "FHTX",
    company_name: "Foghorn Therapeutics Inc.",
  },
  {
    cik_str: 1675644,
    ticker: "FVCB",
    company_name: "FVCBankcorp, Inc.",
  },
  {
    cik_str: 1431567,
    ticker: "OVLY",
    company_name: "Oak Valley Bancorp",
  },
  {
    cik_str: 1756390,
    ticker: "AAWH",
    company_name: "Ascend Wellness Holdings, Inc.",
  },
  {
    cik_str: 1863719,
    ticker: "MNTN",
    company_name: "Everest Consolidator Acquisition Corp",
  },
  {
    cik_str: 1327273,
    ticker: "LYRA",
    company_name: "Lyra Therapeutics, Inc.",
  },
  {
    cik_str: 1779128,
    ticker: "BLDE",
    company_name: "Blade Air Mobility, Inc.",
  },
  {
    cik_str: 1362481,
    ticker: "AGD",
    company_name: "abrdn Global Dynamic Dividend Fund",
  },
  {
    cik_str: 1328919,
    ticker: "GASS",
    company_name: "StealthGas Inc.",
  },
  {
    cik_str: 1977303,
    ticker: "ALTM",
    company_name: "Arcadium Lithium plc",
  },
  {
    cik_str: 1114925,
    ticker: "LTRX",
    company_name: "LANTRONIX INC",
  },
  {
    cik_str: 1498612,
    ticker: "PSF",
    company_name: "Cohen & Steers Select Preferred & Income Fund, Inc.",
  },
  {
    cik_str: 1316517,
    ticker: "KNDI",
    company_name: "Kandi Technologies Group, Inc.",
  },
  {
    cik_str: 1816431,
    ticker: "QSI",
    company_name: "Quantum-Si Inc",
  },
  {
    cik_str: 1891856,
    ticker: "GENK",
    company_name: "GEN Restaurant Group, Inc.",
  },
  {
    cik_str: 825202,
    ticker: "FUND",
    company_name: "SPROTT FOCUS TRUST INC.",
  },
  {
    cik_str: 1930021,
    ticker: "PTHR",
    company_name: "Pono Capital Three, Inc.",
  },
  {
    cik_str: 1347178,
    ticker: "VNDA",
    company_name: "Vanda Pharmaceuticals Inc.",
  },
  {
    cik_str: 1333493,
    ticker: "EHTH",
    company_name: "eHealth, Inc.",
  },
  {
    cik_str: 1790340,
    ticker: "IMRX",
    company_name: "Immuneering Corp",
  },
  {
    cik_str: 1547341,
    ticker: "CTR",
    company_name: "ClearBridge MLP & Midstream Total Return Fund Inc.",
  },
  {
    cik_str: 1866874,
    ticker: "RLTY",
    company_name: "Cohen & Steers Real Estate Opportunities & Income Fund",
  },
  {
    cik_str: 1623526,
    ticker: "STOK",
    company_name: "Stoke Therapeutics, Inc.",
  },
  {
    cik_str: 1270131,
    ticker: "SCD",
    company_name: "LMP CAPITAL & INCOME FUND INC.",
  },
  {
    cik_str: 809559,
    ticker: "TSI",
    company_name: "TCW STRATEGIC INCOME FUND INC",
  },
  {
    cik_str: 1290900,
    ticker: "CVGI",
    company_name: "Commercial Vehicle Group, Inc.",
  },
  {
    cik_str: 1594204,
    ticker: "RBTK",
    company_name: "ZHEN DING RESOURCES INC.",
  },
  {
    cik_str: 1371489,
    ticker: "III",
    company_name: "Information Services Group Inc.",
  },
  {
    cik_str: 1837821,
    ticker: "ZJYL",
    company_name: "Jin Medical International Ltd.",
  },
  {
    cik_str: 1364125,
    ticker: "WRN",
    company_name: "Western Copper & Gold Corp",
  },
  {
    cik_str: 1852353,
    ticker: "DC",
    company_name: "Dakota Gold Corp.",
  },
  {
    cik_str: 887394,
    ticker: "MQT",
    company_name: "BLACKROCK MUNIYIELD QUALITY FUND II, INC.",
  },
  {
    cik_str: 1874071,
    ticker: "PDLB",
    company_name: "Ponce Financial Group, Inc.",
  },
  {
    cik_str: 46207,
    ticker: "HAWEL",
    company_name: "HAWAIIAN ELECTRIC CO INC",
  },
  {
    cik_str: 1683541,
    ticker: "ACB",
    company_name: "AURORA CANNABIS INC",
  },
  {
    cik_str: 23197,
    ticker: "CMTL",
    company_name: "COMTECH TELECOMMUNICATIONS CORP /DE/",
  },
  {
    cik_str: 913277,
    ticker: "CLAR",
    company_name: "Clarus Corp",
  },
  {
    cik_str: 913341,
    ticker: "CFFI",
    company_name: "C & F FINANCIAL CORP",
  },
  {
    cik_str: 3545,
    ticker: "ALCO",
    company_name: "ALICO, INC.",
  },
  {
    cik_str: 897269,
    ticker: "MVT",
    company_name: "BLACKROCK MUNIVEST FUND II, INC.",
  },
  {
    cik_str: 1227857,
    ticker: "NCZ",
    company_name: "Virtus Convertible & Income Fund II",
  },
  {
    cik_str: 1851959,
    ticker: "CNDA",
    company_name: "Concord Acquisition Corp II",
  },
  {
    cik_str: 1533924,
    ticker: "AMPY",
    company_name: "Amplify Energy Corp.",
  },
  {
    cik_str: 1711933,
    ticker: "AKYA",
    company_name: "Akoya Biosciences, Inc.",
  },
  {
    cik_str: 1602409,
    ticker: "FNGR",
    company_name: "FingerMotion, Inc.",
  },
  {
    cik_str: 1505732,
    ticker: "BWFG",
    company_name: "Bankwell Financial Group, Inc.",
  },
  {
    cik_str: 1868640,
    ticker: "RDZN",
    company_name: "Roadzen Inc.",
  },
  {
    cik_str: 1315399,
    ticker: "PKBK",
    company_name: "PARKE BANCORP, INC.",
  },
  {
    cik_str: 1524025,
    ticker: "TLYS",
    company_name: "TILLY'S, INC.",
  },
  {
    cik_str: 1787306,
    ticker: "ARQT",
    company_name: "Arcutis Biotherapeutics, Inc.",
  },
  {
    cik_str: 1685428,
    ticker: "LMDX",
    company_name: "LumiraDx Ltd",
  },
  {
    cik_str: 1089907,
    ticker: "SWKH",
    company_name: "SWK Holdings Corp",
  },
  {
    cik_str: 1140102,
    ticker: "HQI",
    company_name: "HireQuest, Inc.",
  },
  {
    cik_str: 1071899,
    ticker: "MUE",
    company_name: "BLACKROCK MUNIHOLDINGS QUALITY FUND II, INC.",
  },
  {
    cik_str: 1337013,
    ticker: "INFU",
    company_name: "InfuSystem Holdings, Inc",
  },
  {
    cik_str: 100378,
    ticker: "TWIN",
    company_name: "TWIN DISC INC",
  },
  {
    cik_str: 1913971,
    ticker: "BPRN",
    company_name: "Princeton Bancorp, Inc.",
  },
  {
    cik_str: 1649096,
    ticker: "CLPR",
    company_name: "Clipper Realty Inc.",
  },
  {
    cik_str: 873860,
    ticker: "OCN",
    company_name: "OCWEN FINANCIAL CORP",
  },
  {
    cik_str: 1177161,
    ticker: "EVM",
    company_name: "EATON VANCE CALIFORNIA MUNICIPAL BOND FUND",
  },
  {
    cik_str: 711669,
    ticker: "CBAN",
    company_name: "COLONY BANKCORP INC",
  },
  {
    cik_str: 1034842,
    ticker: "RIGL",
    company_name: "RIGEL PHARMACEUTICALS INC",
  },
  {
    cik_str: 1823593,
    ticker: "TSP",
    company_name: "TuSimple Holdings Inc.",
  },
  {
    cik_str: 1756594,
    ticker: "IVA",
    company_name: "Inventiva S.A.",
  },
  {
    cik_str: 1627281,
    ticker: "CLLS",
    company_name: "Cellectis S.A.",
  },
  {
    cik_str: 1878897,
    ticker: "DOUG",
    company_name: "Douglas Elliman Inc.",
  },
  {
    cik_str: 1158289,
    ticker: "JRS",
    company_name: "NUVEEN REAL ESTATE INCOME FUND",
  },
  {
    cik_str: 1550695,
    ticker: "PFMT",
    company_name: "Performant Financial Corp",
  },
  {
    cik_str: 803164,
    ticker: "COFS",
    company_name: "CHOICEONE FINANCIAL SERVICES INC",
  },
  {
    cik_str: 1615063,
    ticker: "INSE",
    company_name: "Inspired Entertainment, Inc.",
  },
  {
    cik_str: 1431852,
    ticker: "ODV",
    company_name: "Osisko Development Corp.",
  },
  {
    cik_str: 1716583,
    ticker: "HYZN",
    company_name: "Hyzon Motors Inc.",
  },
  {
    cik_str: 1823000,
    ticker: "CONX",
    company_name: "CONX Corp.",
  },
  {
    cik_str: 1239819,
    ticker: "LUNA",
    company_name: "LUNA INNOVATIONS INC",
  },
  {
    cik_str: 95574,
    ticker: "SGC",
    company_name: "SUPERIOR GROUP OF COMPANIES, INC.",
  },
  {
    cik_str: 1166258,
    ticker: "PHT",
    company_name: "PIONEER HIGH INCOME FUND, INC.",
  },
  {
    cik_str: 1429764,
    ticker: "BLNK",
    company_name: "Blink Charging Co.",
  },
  {
    cik_str: 1667011,
    ticker: "AIP",
    company_name: "Arteris, Inc.",
  },
  {
    cik_str: 1709164,
    ticker: "HBB",
    company_name: "Hamilton Beach Brands Holding Co",
  },
  {
    cik_str: 1880441,
    ticker: "BFAC",
    company_name: "Battery Future Acquisition Corp.",
  },
  {
    cik_str: 1616156,
    ticker: "WEWA",
    company_name: "WEWARDS, INC.",
  },
  {
    cik_str: 1401257,
    ticker: "FET",
    company_name: "FORUM ENERGY TECHNOLOGIES, INC.",
  },
  {
    cik_str: 916618,
    ticker: "IIF",
    company_name: "MORGAN STANLEY INDIA INVESTMENT FUND, INC.",
  },
  {
    cik_str: 1859795,
    ticker: "NVX",
    company_name: "NOVONIX Ltd",
  },
  {
    cik_str: 64472,
    ticker: "GENC",
    company_name: "GENCOR INDUSTRIES INC",
  },
  {
    cik_str: 1000209,
    ticker: "MFIN",
    company_name: "MEDALLION FINANCIAL CORP",
  },
  {
    cik_str: 828803,
    ticker: "GIM",
    company_name: "TEMPLETON GLOBAL INCOME FUND",
  },
  {
    cik_str: 1642453,
    ticker: "DSKE",
    company_name: "Daseke, Inc.",
  },
  {
    cik_str: 1454938,
    ticker: "OB",
    company_name: "Outbrain Inc.",
  },
  {
    cik_str: 859796,
    ticker: "JOF",
    company_name: "JAPAN SMALLER CAPITALIZATION FUND INC",
  },
  {
    cik_str: 1454789,
    ticker: "ATXS",
    company_name: "Astria Therapeutics, Inc.",
  },
  {
    cik_str: 1069533,
    ticker: "RGCO",
    company_name: "RGC RESOURCES INC",
  },
  {
    cik_str: 801961,
    ticker: "MFM",
    company_name: "MFS MUNICIPAL INCOME TRUST",
  },
  {
    cik_str: 1641614,
    ticker: "PMTS",
    company_name: "CPI Card Group Inc.",
  },
  {
    cik_str: 1228454,
    ticker: "BCBP",
    company_name: "BCB BANCORP INC",
  },
  {
    cik_str: 1679268,
    ticker: "TUSK",
    company_name: "MAMMOTH ENERGY SERVICES, INC.",
  },
  {
    cik_str: 1385763,
    ticker: "JCE",
    company_name: "Nuveen Core Equity Alpha Fund",
  },
  {
    cik_str: 1915328,
    ticker: "ISRL",
    company_name: "Israel Acquisitions Corp",
  },
  {
    cik_str: 1123494,
    ticker: "HBIO",
    company_name: "HARVARD BIOSCIENCE INC",
  },
  {
    cik_str: 1859686,
    ticker: "SBXC",
    company_name: "SilverBox Corp III",
  },
  {
    cik_str: 1643154,
    ticker: "ITHUF",
    company_name: "iANTHUS CAPITAL HOLDINGS, INC.",
  },
  {
    cik_str: 778164,
    ticker: "ALTO",
    company_name: "Alto Ingredients, Inc.",
  },
  {
    cik_str: 1503707,
    ticker: "NHHS",
    company_name: "NorthStar Healthcare Income, Inc.",
  },
  {
    cik_str: 1038572,
    ticker: "CBD",
    company_name: "BRAZILIAN DISTRIBUTION CO COMPANHIA BRASILEIRA DE DISTR CBD",
  },
  {
    cik_str: 1835378,
    ticker: "CTV",
    company_name: "Innovid Corp.",
  },
  {
    cik_str: 895456,
    ticker: "RCKY",
    company_name: "ROCKY BRANDS, INC.",
  },
  {
    cik_str: 1434868,
    ticker: "ESPR",
    company_name: "Esperion Therapeutics, Inc.",
  },
  {
    cik_str: 1058811,
    ticker: "IMMR",
    company_name: "IMMERSION CORP",
  },
  {
    cik_str: 1267602,
    ticker: "ALIM",
    company_name: "ALIMERA SCIENCES INC",
  },
  {
    cik_str: 1805833,
    ticker: "SST",
    company_name: "System1, Inc.",
  },
  {
    cik_str: 41091,
    ticker: "GPJA",
    company_name: "GEORGIA POWER CO",
  },
  {
    cik_str: 1678660,
    ticker: "PRLD",
    company_name: "Prelude Therapeutics Inc",
  },
  {
    cik_str: 1098009,
    ticker: "AAGH",
    company_name: "America Great Health",
  },
  {
    cik_str: 700841,
    ticker: "RCMT",
    company_name: "RCM TECHNOLOGIES, INC.",
  },
  {
    cik_str: 352825,
    ticker: "FSTR",
    company_name: "FOSTER L B CO",
  },
  {
    cik_str: 1750153,
    ticker: "GOEV",
    company_name: "Canoo Inc.",
  },
  {
    cik_str: 1628808,
    ticker: "PROF",
    company_name: "Profound Medical Corp.",
  },
  {
    cik_str: 1834026,
    ticker: "GROY",
    company_name: "Gold Royalty Corp.",
  },
  {
    cik_str: 1437283,
    ticker: "RPMT",
    company_name: "REGO PAYMENT ARCHITECTURES, INC.",
  },
  {
    cik_str: 1517022,
    ticker: "AKBA",
    company_name: "Akebia Therapeutics, Inc.",
  },
  {
    cik_str: 727273,
    ticker: "CDZI",
    company_name: "CADIZ INC",
  },
  {
    cik_str: 1495320,
    ticker: "VRA",
    company_name: "Vera Bradley, Inc.",
  },
  {
    cik_str: 1752036,
    ticker: "CALB",
    company_name: "California BanCorp",
  },
  {
    cik_str: 1436126,
    ticker: "MG",
    company_name: "Mistras Group, Inc.",
  },
  {
    cik_str: 1848756,
    ticker: "PHYT",
    company_name: "Pyrophyte Acquisition Corp.",
  },
  {
    cik_str: 1502573,
    ticker: "AFT",
    company_name: "Apollo Senior Floating Rate Fund Inc.",
  },
  {
    cik_str: 1738021,
    ticker: "CMPX",
    company_name: "Compass Therapeutics, Inc.",
  },
  {
    cik_str: 1562463,
    ticker: "INBK",
    company_name: "First Internet Bancorp",
  },
  {
    cik_str: 885508,
    ticker: "STRS",
    company_name: "STRATUS PROPERTIES INC",
  },
  {
    cik_str: 1598599,
    ticker: "IPHA",
    company_name: "Innate Pharma SA",
  },
  {
    cik_str: 1819438,
    ticker: "GWH",
    company_name: "ESS Tech, Inc.",
  },
  {
    cik_str: 1636289,
    ticker: "ACV",
    company_name: "Virtus Diversified Income & Convertible Fund",
  },
  {
    cik_str: 1839519,
    ticker: "CFFS",
    company_name: "CF Acquisition Corp. VII",
  },
  {
    cik_str: 1318484,
    ticker: "CTRN",
    company_name: "Citi Trends Inc",
  },
  {
    cik_str: 1870143,
    ticker: "RCFA",
    company_name: "RCF Acquisition Corp.",
  },
  {
    cik_str: 1871321,
    ticker: "DRTS",
    company_name: "Alpha Tau Medical Ltd.",
  },
  {
    cik_str: 1828105,
    ticker: "HIPO",
    company_name: "Hippo Holdings Inc.",
  },
  {
    cik_str: 894242,
    ticker: "BKN",
    company_name: "BLACKROCK INVESTMENT QUALITY MUNICIPAL TRUST, INC.",
  },
  {
    cik_str: 1837607,
    ticker: "AEON",
    company_name: "AEON Biopharma, Inc.",
  },
  {
    cik_str: 1041514,
    ticker: "LSAK",
    company_name: "LESAKA TECHNOLOGIES INC",
  },
  {
    cik_str: 1328598,
    ticker: "FXE",
    company_name: "Invesco CurrencyShares Euro Trust",
  },
  {
    cik_str: 887396,
    ticker: "EP",
    company_name: "EMPIRE PETROLEUM CORP",
  },
  {
    cik_str: 1572334,
    ticker: "VABK",
    company_name: "Virginia National Bankshares Corp",
  },
  {
    cik_str: 1651958,
    ticker: "EOSS",
    company_name: "EOS INC.",
  },
  {
    cik_str: 1041657,
    ticker: "UONE",
    company_name: "URBAN ONE, INC.",
  },
  {
    cik_str: 1604950,
    ticker: "SCPH",
    company_name: "scPharmaceuticals Inc.",
  },
  {
    cik_str: 1789029,
    ticker: "AEVA",
    company_name: "Aeva Technologies, Inc.",
  },
  {
    cik_str: 1850502,
    ticker: "NFYS",
    company_name: "Enphys Acquisition Corp.",
  },
  {
    cik_str: 1840904,
    ticker: "ATAI",
    company_name: "ATAI Life Sciences N.V.",
  },
  {
    cik_str: 1350869,
    ticker: "GLO",
    company_name: "Clough Global Opportunities Fund",
  },
  {
    cik_str: 1493761,
    ticker: "HEAR",
    company_name: "Turtle Beach Corp",
  },
  {
    cik_str: 1526697,
    ticker: "AIF",
    company_name: "Apollo Tactical Income Fund Inc.",
  },
  {
    cik_str: 796534,
    ticker: "NKSH",
    company_name: "NATIONAL BANKSHARES INC",
  },
  {
    cik_str: 883265,
    ticker: "VTN",
    company_name: "Invesco Trust for Investment Grade New York Municipals",
  },
  {
    cik_str: 1200375,
    ticker: "CDXS",
    company_name: "CODEXIS, INC.",
  },
  {
    cik_str: 1815620,
    ticker: "OPT",
    company_name: "Opthea Ltd",
  },
  {
    cik_str: 1526243,
    ticker: "PPTA",
    company_name: "PERPETUA RESOURCES CORP.",
  },
  {
    cik_str: 1061353,
    ticker: "DHY",
    company_name: "CREDIT SUISSE HIGH YIELD BOND FUND",
  },
  {
    cik_str: 884144,
    ticker: "ASUR",
    company_name: "ASURE SOFTWARE INC",
  },
  {
    cik_str: 768835,
    ticker: "BIG",
    company_name: "BIG LOTS INC",
  },
  {
    cik_str: 1006655,
    ticker: "EPM",
    company_name: "EVOLUTION PETROLEUM CORP",
  },
  {
    cik_str: 1383084,
    ticker: "DBB",
    company_name: "INVESCO DB BASE METALS FUND",
  },
  {
    cik_str: 1889983,
    ticker: "KVAC",
    company_name: "Keen Vision Acquisition Corp.",
  },
  {
    cik_str: 889609,
    ticker: "CPSS",
    company_name: "CONSUMER PORTFOLIO SERVICES, INC.",
  },
  {
    cik_str: 1757064,
    ticker: "GNFT",
    company_name: "Genfit S.A.",
  },
  {
    cik_str: 350868,
    ticker: "ITI",
    company_name: "ITERIS, INC.",
  },
  {
    cik_str: 1986117,
    ticker: "HSAC",
    company_name: "Hainan Sirius Acquisition Corp.",
  },
  {
    cik_str: 1177648,
    ticker: "ENTA",
    company_name: "ENANTA PHARMACEUTICALS INC",
  },
  {
    cik_str: 1574085,
    ticker: "BHR",
    company_name: "Braemar Hotels & Resorts Inc.",
  },
  {
    cik_str: 1593773,
    ticker: "KGNR",
    company_name: "AMJ Global Technology",
  },
  {
    cik_str: 1382230,
    ticker: "ESSA",
    company_name: "ESSA Bancorp, Inc.",
  },
  {
    cik_str: 1327607,
    ticker: "MYFW",
    company_name: "First Western Financial Inc",
  },
  {
    cik_str: 318673,
    ticker: "SNFCA",
    company_name: "SECURITY NATIONAL FINANCIAL CORP",
  },
  {
    cik_str: 66901,
    ticker: "EMP",
    company_name: "ENTERGY MISSISSIPPI, LLC",
  },
  {
    cik_str: 1476840,
    ticker: "EXFY",
    company_name: "Expensify, Inc.",
  },
  {
    cik_str: 1041934,
    ticker: "EDAP",
    company_name: "EDAP TMS SA",
  },
  {
    cik_str: 1278211,
    ticker: "LGI",
    company_name: "LAZARD GLOBAL TOTAL RETURN & INCOME FUND INC",
  },
  {
    cik_str: 1846975,
    ticker: "SEDA",
    company_name: "SDCL EDGE Acquisition Corp",
  },
  {
    cik_str: 1519505,
    ticker: "HIE",
    company_name: "Miller/Howard High Income Equity Fund",
  },
  {
    cik_str: 1487610,
    ticker: "NHS",
    company_name: "Neuberger Berman High Yield Strategies Fund Inc.",
  },
  {
    cik_str: 1697851,
    ticker: "REKR",
    company_name: "Rekor Systems, Inc.",
  },
  {
    cik_str: 56868,
    ticker: "PNRG",
    company_name: "PRIMEENERGY RESOURCES CORP",
  },
  {
    cik_str: 1452477,
    ticker: "SEVN",
    company_name: "Seven Hills Realty Trust",
  },
  {
    cik_str: 738214,
    ticker: "AMTX",
    company_name: "AEMETIS, INC",
  },
  {
    cik_str: 785557,
    ticker: "DLHC",
    company_name: "DLH Holdings Corp.",
  },
  {
    cik_str: 1856995,
    ticker: "MCAA",
    company_name: "Mountain & Co. I Acquisition Corp.",
  },
  {
    cik_str: 1434647,
    ticker: "ZVRA",
    company_name: "ZEVRA THERAPEUTICS, INC.",
  },
  {
    cik_str: 1448431,
    ticker: "OPRX",
    company_name: "OptimizeRx Corp",
  },
  {
    cik_str: 1223026,
    ticker: "MHI",
    company_name: "PIONEER MUNICIPAL HIGH INCOME FUND, INC.",
  },
  {
    cik_str: 897421,
    ticker: "NPV",
    company_name: "NUVEEN VIRGINIA QUALITY MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 1678130,
    ticker: "OPP",
    company_name: "RiverNorth/DoubleLine Strategic Opportunity Fund, Inc.",
  },
  {
    cik_str: 1341170,
    ticker: "ESEA",
    company_name: "EUROSEAS LTD.",
  },
  {
    cik_str: 1851651,
    ticker: "BNIGF",
    company_name: "Beroni Group Ltd",
  },
  {
    cik_str: 1273441,
    ticker: "GTE",
    company_name: "GRAN TIERRA ENERGY INC.",
  },
  {
    cik_str: 1563696,
    ticker: "ETX",
    company_name: "Eaton Vance Municipal Income 2028 Term Trust",
  },
  {
    cik_str: 1935172,
    ticker: "AIXI",
    company_name: "Xiao-I Corp",
  },
  {
    cik_str: 1504678,
    ticker: "LOOP",
    company_name: "Loop Industries, Inc.",
  },
  {
    cik_str: 1254370,
    ticker: "WIA",
    company_name: "WESTERN ASSET INFLATION-LINKED INCOME FUND",
  },
  {
    cik_str: 1378950,
    ticker: "PRTS",
    company_name: "CarParts.com, Inc.",
  },
  {
    cik_str: 1855474,
    ticker: "XPDB",
    company_name: "Power & Digital Infrastructure Acquisition II Corp.",
  },
  {
    cik_str: 1274792,
    ticker: "MACK",
    company_name: "MERRIMACK PHARMACEUTICALS INC",
  },
  {
    cik_str: 1896084,
    ticker: "IONR",
    company_name: "ioneer Ltd",
  },
  {
    cik_str: 1401667,
    ticker: "PBYI",
    company_name: "PUMA BIOTECHNOLOGY, INC.",
  },
  {
    cik_str: 1258943,
    ticker: "MAV",
    company_name: "PIONEER MUNICIPAL HIGH INCOME ADVANTAGE FUND, INC.",
  },
  {
    cik_str: 1564180,
    ticker: "KNOP",
    company_name: "KNOT Offshore Partners LP",
  },
  {
    cik_str: 1565381,
    ticker: "DMB",
    company_name: "BNY Mellon Municipal Bond Infrastructure Fund, Inc.",
  },
  {
    cik_str: 1526119,
    ticker: "VSTM",
    company_name: "Verastem, Inc.",
  },
  {
    cik_str: 814586,
    ticker: "LWAY",
    company_name: "Lifeway Foods, Inc.",
  },
  {
    cik_str: 1132651,
    ticker: "ATLO",
    company_name: "AMES NATIONAL CORP",
  },
  {
    cik_str: 832370,
    ticker: "EAXR",
    company_name: "Ealixir, Inc.",
  },
  {
    cik_str: 882508,
    ticker: "QUIK",
    company_name: "QUICKLOGIC Corp",
  },
  {
    cik_str: 1538847,
    ticker: "GLDG",
    company_name: "GoldMining Inc.",
  },
  {
    cik_str: 1462586,
    ticker: "IGI",
    company_name:
      "Western Asset Investment Grade Defined Opportunity Trust Inc.",
  },
  {
    cik_str: 1953366,
    ticker: "STHO",
    company_name: "Star Holdings",
  },
  {
    cik_str: 1711754,
    ticker: "INMB",
    company_name: "Inmune Bio, Inc.",
  },
  {
    cik_str: 1285786,
    ticker: "EMX",
    company_name: "EMX Royalty Corp",
  },
  {
    cik_str: 924719,
    ticker: "SMID",
    company_name: "SMITH MIDLAND CORP",
  },
  {
    cik_str: 1871638,
    ticker: "BRKH",
    company_name: "BurTech Acquisition Corp.",
  },
  {
    cik_str: 1472341,
    ticker: "GDO",
    company_name:
      "WESTERN ASSET GLOBAL CORPORATE DEFINED OPPORTUNITY FUND INC.",
  },
  {
    cik_str: 1170300,
    ticker: "PCK",
    company_name: "PIMCO CALIFORNIA MUNICIPAL INCOME FUND II",
  },
  {
    cik_str: 946394,
    ticker: "ELLO",
    company_name: "Ellomay Capital Ltd.",
  },
  {
    cik_str: 1725293,
    ticker: "GRIN",
    company_name: "Grindrod Shipping Holdings Ltd.",
  },
  {
    cik_str: 791908,
    ticker: "XOMA",
    company_name: "XOMA Corp",
  },
  {
    cik_str: 1518715,
    ticker: "HMST",
    company_name: "HomeStreet, Inc.",
  },
  {
    cik_str: 1656634,
    ticker: "GRTS",
    company_name: "Gritstone bio, Inc.",
  },
  {
    cik_str: 1855644,
    ticker: "ZURA",
    company_name: "Zura Bio Ltd",
  },
  {
    cik_str: 891482,
    ticker: "FLL",
    company_name: "FULL HOUSE RESORTS INC",
  },
  {
    cik_str: 716314,
    ticker: "GHM",
    company_name: "GRAHAM CORP",
  },
  {
    cik_str: 1540013,
    ticker: "QIPT",
    company_name: "Quipt Home Medical Corp.",
  },
  {
    cik_str: 1850902,
    ticker: "TKNO",
    company_name: "Alpha Teknova, Inc.",
  },
  {
    cik_str: 1860782,
    ticker: "TSVT",
    company_name: "2seventy bio, Inc.",
  },
  {
    cik_str: 1832038,
    ticker: "IVVD",
    company_name: "Invivyd, Inc.",
  },
  {
    cik_str: 1847241,
    ticker: "PEGR",
    company_name: "Project Energy Reimagined Acquisition Corp.",
  },
  {
    cik_str: 1386067,
    ticker: "EOD",
    company_name: "ALLSPRING GLOBAL DIVIDEND OPPORTUNITY FUND",
  },
  {
    cik_str: 1399520,
    ticker: "STKS",
    company_name: "ONE Group Hospitality, Inc.",
  },
  {
    cik_str: 1693577,
    ticker: "MNSB",
    company_name: "MainStreet Bancshares, Inc.",
  },
  {
    cik_str: 1410098,
    ticker: "CRMD",
    company_name: "CorMedix Inc.",
  },
  {
    cik_str: 1622148,
    ticker: "HGLB",
    company_name: "HIGHLAND GLOBAL ALLOCATION FUND",
  },
  {
    cik_str: 1835597,
    ticker: "PEPG",
    company_name: "PepGen Inc.",
  },
  {
    cik_str: 1420520,
    ticker: "ATOM",
    company_name: "Atomera Inc",
  },
  {
    cik_str: 1549922,
    ticker: "SMLP",
    company_name: "Summit Midstream Partners, LP",
  },
  {
    cik_str: 1140411,
    ticker: "PCQ",
    company_name: "PIMCO CALIFORNIA MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 1725033,
    ticker: "XYF",
    company_name: "X Financial",
  },
  {
    cik_str: 1345099,
    ticker: "MESO",
    company_name: "MESOBLAST LTD",
  },
  {
    cik_str: 1819810,
    ticker: "RDW",
    company_name: "Redwire Corp",
  },
  {
    cik_str: 809708,
    ticker: "EMF",
    company_name: "TEMPLETON EMERGING MARKETS FUND",
  },
  {
    cik_str: 1490286,
    ticker: "NTG",
    company_name: "Tortoise Midstream Energy Fund, Inc.",
  },
  {
    cik_str: 1893311,
    ticker: "LUXH",
    company_name: "LUXURBAN HOTELS INC.",
  },
  {
    cik_str: 355948,
    ticker: "RELL",
    company_name: "RICHARDSON ELECTRONICS, LTD.",
  },
  {
    cik_str: 1341235,
    ticker: "ALDX",
    company_name: "Aldeyra Therapeutics, Inc.",
  },
  {
    cik_str: 1157647,
    ticker: "WNEB",
    company_name: "Western New England Bancorp, Inc.",
  },
  {
    cik_str: 71508,
    ticker: "ENJ",
    company_name: "ENTERGY NEW ORLEANS, LLC",
  },
  {
    cik_str: 1598665,
    ticker: "HRTG",
    company_name: "Heritage Insurance Holdings, Inc.",
  },
  {
    cik_str: 1514281,
    ticker: "MITT",
    company_name: "AG Mortgage Investment Trust, Inc.",
  },
  {
    cik_str: 1374690,
    ticker: "LRMR",
    company_name: "Larimar Therapeutics, Inc.",
  },
  {
    cik_str: 1852889,
    ticker: "IVCA",
    company_name: "Investcorp India Acquisition Corp",
  },
  {
    cik_str: 1835512,
    ticker: "LLAP",
    company_name: "Terran Orbital Corp",
  },
  {
    cik_str: 1438423,
    ticker: "MRAM",
    company_name: "EVERSPIN TECHNOLOGIES INC",
  },
  {
    cik_str: 1625414,
    ticker: "BZUN",
    company_name: "Baozun Inc.",
  },
  {
    cik_str: 1760903,
    ticker: "SHOT",
    company_name: "Safety Shot, Inc.",
  },
  {
    cik_str: 1600641,
    ticker: "DIBS",
    company_name: "1stdibs.com, Inc.",
  },
  {
    cik_str: 1285819,
    ticker: "OMER",
    company_name: "OMEROS CORP",
  },
  {
    cik_str: 5094,
    ticker: "VBF",
    company_name: "Invesco Bond Fund",
  },
  {
    cik_str: 1171759,
    ticker: "RRGB",
    company_name: "RED ROBIN GOURMET BURGERS INC",
  },
  {
    cik_str: 1715768,
    ticker: "TGAN",
    company_name: "Transphorm, Inc.",
  },
  {
    cik_str: 1501134,
    ticker: "NVTA",
    company_name: "Invitae Corp",
  },
  {
    cik_str: 1852736,
    ticker: "TRIS",
    company_name: "Tristar Acquisition I Corp.",
  },
  {
    cik_str: 1708493,
    ticker: "HARP",
    company_name: "Harpoon Therapeutics, Inc.",
  },
  {
    cik_str: 1864290,
    ticker: "MIO",
    company_name: "Pioneer Municipal High Income Opportunities Fund, Inc.",
  },
  {
    cik_str: 1031029,
    ticker: "SRT",
    company_name: "Startek, Inc.",
  },
  {
    cik_str: 1850119,
    ticker: "IPSC",
    company_name: "Century Therapeutics, Inc.",
  },
  {
    cik_str: 1753539,
    ticker: "BKSY",
    company_name: "BlackSky Technology Inc.",
  },
  {
    cik_str: 1486298,
    ticker: "BSL",
    company_name: "Blackstone Senior Floating Rate 2027 Term Fund",
  },
  {
    cik_str: 1005286,
    ticker: "LFCR",
    company_name: "LIFECORE BIOMEDICAL, INC. DE",
  },
  {
    cik_str: 1804176,
    ticker: "BFLY",
    company_name: "Butterfly Network, Inc.",
  },
  {
    cik_str: 1898601,
    ticker: "IPX",
    company_name: "IPERIONX Ltd",
  },
  {
    cik_str: 1649744,
    ticker: "DLTH",
    company_name: "DULUTH HOLDINGS INC.",
  },
  {
    cik_str: 1682220,
    ticker: "SACH",
    company_name: "Sachem Capital Corp.",
  },
  {
    cik_str: 1847891,
    ticker: "ACRO",
    company_name: "Acropolis Infrastructure Acquisition Corp.",
  },
  {
    cik_str: 1609988,
    ticker: "FLCX",
    company_name: "flooidCX Corp.",
  },
  {
    cik_str: 1862993,
    ticker: "APCA",
    company_name: "AP Acquisition Corp",
  },
  {
    cik_str: 1502377,
    ticker: "CTGO",
    company_name: "Contango ORE, Inc.",
  },
  {
    cik_str: 1778784,
    ticker: "PVBC",
    company_name: "Provident Bancorp, Inc. /MD/",
  },
  {
    cik_str: 1499832,
    ticker: "TSQ",
    company_name: "Townsquare Media, Inc.",
  },
  {
    cik_str: 1084991,
    ticker: "NGS",
    company_name: "NATURAL GAS SERVICES GROUP INC",
  },
  {
    cik_str: 1842386,
    ticker: "VAQC",
    company_name: "Vector Acquisition Corp II",
  },
  {
    cik_str: 30125,
    ticker: "INSI",
    company_name: "Insight Select Income Fund",
  },
  {
    cik_str: 1820302,
    ticker: "BKKT",
    company_name: "Bakkt Holdings, Inc.",
  },
  {
    cik_str: 1383395,
    ticker: "SQNS",
    company_name: "SEQUANS COMMUNICATIONS",
  },
  {
    cik_str: 1177162,
    ticker: "ENX",
    company_name: "EATON VANCE NEW YORK MUNICIPAL BOND FUND",
  },
  {
    cik_str: 1885461,
    ticker: "SUAC",
    company_name: "ShoulderUP Technology Acquisition Corp.",
  },
  {
    cik_str: 751365,
    ticker: "VIRC",
    company_name: "VIRCO MFG CORPORATION",
  },
  {
    cik_str: 1742518,
    ticker: "MTC",
    company_name: "MMTec, Inc.",
  },
  {
    cik_str: 1957413,
    ticker: "CJET",
    company_name: "Chijet Motor Company, Inc.",
  },
  {
    cik_str: 1867102,
    ticker: "EVTL",
    company_name: "Vertical Aerospace Ltd.",
  },
  {
    cik_str: 1036044,
    ticker: "INVE",
    company_name: "Identiv, Inc.",
  },
  {
    cik_str: 1612940,
    ticker: "PRQR",
    company_name: "ProQR Therapeutics N.V.",
  },
  {
    cik_str: 1119769,
    ticker: "CRNT",
    company_name: "CERAGON NETWORKS LTD",
  },
  {
    cik_str: 1805077,
    ticker: "EOSE",
    company_name: "Eos Energy Enterprises, Inc.",
  },
  {
    cik_str: 1861121,
    ticker: "EVE",
    company_name: "EVe Mobility Acquisition Corp",
  },
  {
    cik_str: 1010134,
    ticker: "ICTSF",
    company_name: "ICTS INTERNATIONAL N V",
  },
  {
    cik_str: 1181504,
    ticker: "PZC",
    company_name: "PIMCO CALIFORNIA MUNICIPAL INCOME FUND III",
  },
  {
    cik_str: 1164771,
    ticker: "NAK",
    company_name: "NORTHERN DYNASTY MINERALS LTD",
  },
  {
    cik_str: 1576885,
    ticker: "ABOS",
    company_name: "Acumen Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1259429,
    ticker: "OXSQ",
    company_name: "Oxford Square Capital Corp.",
  },
  {
    cik_str: 784539,
    ticker: "EACO",
    company_name: "EACO CORP",
  },
  {
    cik_str: 850429,
    ticker: "TG",
    company_name: "TREDEGAR CORP",
  },
  {
    cik_str: 1653909,
    ticker: "BIRD",
    company_name: "Allbirds, Inc.",
  },
  {
    cik_str: 1738827,
    ticker: "KLXE",
    company_name: "KLX Energy Services Holdings, Inc.",
  },
  {
    cik_str: 1531177,
    ticker: "SGHT",
    company_name: "Sight Sciences, Inc.",
  },
  {
    cik_str: 854800,
    ticker: "TIO",
    company_name: "Tingo Group, Inc.",
  },
  {
    cik_str: 1856365,
    ticker: "FINW",
    company_name: "Finwise Bancorp",
  },
  {
    cik_str: 918251,
    ticker: "MPAA",
    company_name: "MOTORCAR PARTS OF AMERICA INC",
  },
  {
    cik_str: 1874315,
    ticker: "SATL",
    company_name: "Satellogic Inc.",
  },
  {
    cik_str: 1057861,
    ticker: "DHF",
    company_name: "BNY MELLON HIGH YIELD STRATEGIES FUND",
  },
  {
    cik_str: 1833141,
    ticker: "CYBN",
    company_name: "CYBIN INC.",
  },
  {
    cik_str: 876343,
    ticker: "LCTX",
    company_name: "Lineage Cell Therapeutics, Inc.",
  },
  {
    cik_str: 1744781,
    ticker: "NIU",
    company_name: "Niu Technologies",
  },
  {
    cik_str: 833040,
    ticker: "FT",
    company_name: "FRANKLIN UNIVERSAL TRUST",
  },
  {
    cik_str: 1467808,
    ticker: "CORBF",
    company_name: "Global Cord Blood Corp",
  },
  {
    cik_str: 1745020,
    ticker: "THRX",
    company_name: "Theseus Pharmaceuticals, Inc.",
  },
  {
    cik_str: 825345,
    ticker: "HYB",
    company_name: "NEW AMERICA HIGH INCOME FUND INC",
  },
  {
    cik_str: 1684144,
    ticker: "ZOM",
    company_name: "Zomedica Corp.",
  },
  {
    cik_str: 1383057,
    ticker: "DBP",
    company_name: "Invesco DB Precious Metals Fund",
  },
  {
    cik_str: 1854458,
    ticker: "NETC",
    company_name: "Nabors Energy Transition Corp.",
  },
  {
    cik_str: 1852061,
    ticker: "GAQ",
    company_name: "Generation Asia I Acquisition Ltd",
  },
  {
    cik_str: 1169445,
    ticker: "CPSI",
    company_name: "COMPUTER PROGRAMS & SYSTEMS INC",
  },
  {
    cik_str: 771266,
    ticker: "KOPN",
    company_name: "KOPIN CORP",
  },
  {
    cik_str: 1575434,
    ticker: "VERY",
    company_name: "Vericity, Inc.",
  },
  {
    cik_str: 1557265,
    ticker: "PIIVX",
    company_name: "Private Shares Fund",
  },
  {
    cik_str: 1558740,
    ticker: "WNLV",
    company_name: "Winvest Group Ltd",
  },
  {
    cik_str: 842518,
    ticker: "EVBN",
    company_name: "EVANS BANCORP INC",
  },
  {
    cik_str: 1847577,
    ticker: "LCW",
    company_name: "Learn CW Investment Corp",
  },
  {
    cik_str: 1964979,
    ticker: "ALUR",
    company_name: "ALLURION TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1613780,
    ticker: "DBVT",
    company_name: "DBV Technologies S.A.",
  },
  {
    cik_str: 1649752,
    ticker: "NMG",
    company_name: "Nouveau Monde Graphite Inc.",
  },
  {
    cik_str: 1372807,
    ticker: "PTMN",
    company_name: "Portman Ridge Finance Corp",
  },
  {
    cik_str: 1228509,
    ticker: "EHI",
    company_name: "WESTERN ASSET GLOBAL HIGH INCOME FUND INC.",
  },
  {
    cik_str: 1162194,
    ticker: "LAB",
    company_name: "STANDARD BIOTOOLS INC.",
  },
  {
    cik_str: 1850453,
    ticker: "MYNA",
    company_name: "Mynaric AG",
  },
  {
    cik_str: 1861841,
    ticker: "ARBE",
    company_name: "Arbe Robotics Ltd.",
  },
  {
    cik_str: 1439264,
    ticker: "MVNC",
    company_name: "Marvion Inc.",
  },
  {
    cik_str: 1732406,
    ticker: "LTCN",
    company_name: "Grayscale Litecoin Trust (LTC)",
  },
  {
    cik_str: 1589420,
    ticker: "FPL",
    company_name: "FIRST TRUST NEW OPPORTUNITIES MLP & ENERGY FUND",
  },
  {
    cik_str: 1704299,
    ticker: "TEAF",
    company_name: "ECOFIN SUSTAINABLE & SOCIAL IMPACT TERM FUND",
  },
  {
    cik_str: 1468748,
    ticker: "KOD",
    company_name: "Kodiak Sciences Inc.",
  },
  {
    cik_str: 932781,
    ticker: "FCCO",
    company_name: "FIRST COMMUNITY CORP /SC/",
  },
  {
    cik_str: 921671,
    ticker: "GGT",
    company_name: "GABELLI MULTIMEDIA TRUST INC.",
  },
  {
    cik_str: 803016,
    ticker: "CFNB",
    company_name: "CALIFORNIA FIRST LEASING CORP",
  },
  {
    cik_str: 1455684,
    ticker: "TPIC",
    company_name: "TPI COMPOSITES, INC",
  },
  {
    cik_str: 1927719,
    ticker: "CRGO",
    company_name: "Freightos Ltd",
  },
  {
    cik_str: 810766,
    ticker: "CIK",
    company_name: "CREDIT SUISSE ASSET MANAGEMENT INCOME FUND INC",
  },
  {
    cik_str: 1472091,
    ticker: "PDSB",
    company_name: "PDS Biotechnology Corp",
  },
  {
    cik_str: 1701809,
    ticker: "CBH",
    company_name: "Virtus Convertible & Income 2024 Target Term Fund",
  },
  {
    cik_str: 1576914,
    ticker: "MIXT",
    company_name: "MiX Telematics Ltd",
  },
  {
    cik_str: 1512931,
    ticker: "MRCC",
    company_name: "MONROE CAPITAL Corp",
  },
  {
    cik_str: 1026655,
    ticker: "CMT",
    company_name: "CORE MOLDING TECHNOLOGIES INC",
  },
  {
    cik_str: 1776738,
    ticker: "CBSTF",
    company_name: "Cannabist Co Holdings Inc.",
  },
  {
    cik_str: 1285550,
    ticker: "CLPT",
    company_name: "ClearPoint Neuro, Inc.",
  },
  {
    cik_str: 1001115,
    ticker: "GEOS",
    company_name: "GEOSPACE TECHNOLOGIES CORP",
  },
  {
    cik_str: 1630805,
    ticker: "BW",
    company_name: "Babcock & Wilcox Enterprises, Inc.",
  },
  {
    cik_str: 1417802,
    ticker: "IDE",
    company_name: "Voya Infrastructure, Industrials & Materials Fund",
  },
  {
    cik_str: 1860871,
    ticker: "LGST",
    company_name: "Semper Paratus Acquisition Corp",
  },
  {
    cik_str: 1282648,
    ticker: "BATL",
    company_name: "BATTALION OIL CORP",
  },
  {
    cik_str: 1487918,
    ticker: "OFS",
    company_name: "OFS Capital Corp",
  },
  {
    cik_str: 886136,
    ticker: "SGA",
    company_name: "SAGA COMMUNICATIONS INC",
  },
  {
    cik_str: 830622,
    ticker: "PIM",
    company_name: "PUTNAM MASTER INTERMEDIATE INCOME TRUST",
  },
  {
    cik_str: 1845368,
    ticker: "HCMA",
    company_name: "HCM Acquisition Corp",
  },
  {
    cik_str: 1132105,
    ticker: "SPWH",
    company_name: "SPORTSMAN'S WAREHOUSE HOLDINGS, INC.",
  },
  {
    cik_str: 818850,
    ticker: "NNY",
    company_name: "NUVEEN NEW YORK MUNICIPAL VALUE FUND",
  },
  {
    cik_str: 356590,
    ticker: "GTII",
    company_name: "GLOBAL TECH INDUSTRIES GROUP, INC.",
  },
  {
    cik_str: 1040130,
    ticker: "PETS",
    company_name: "PETMED EXPRESS INC",
  },
  {
    cik_str: 1302387,
    ticker: "BVFL",
    company_name: "BV Financial, Inc.",
  },
  {
    cik_str: 1453593,
    ticker: "XTNT",
    company_name: "Xtant Medical Holdings, Inc.",
  },
  {
    cik_str: 1722010,
    ticker: "OPBK",
    company_name: "OP Bancorp",
  },
  {
    cik_str: 1901336,
    ticker: "ALCY",
    company_name: "Alchemy Investments Acquisition Corp 1",
  },
  {
    cik_str: 31107,
    ticker: "EML",
    company_name: "EASTERN CO",
  },
  {
    cik_str: 1824185,
    ticker: "HHLA",
    company_name: "HH&L Acquisition Co.",
  },
  {
    cik_str: 1302028,
    ticker: "MNTX",
    company_name: "Manitex International, Inc.",
  },
  {
    cik_str: 816332,
    ticker: "LYBC",
    company_name: "LYONS BANCORP INC",
  },
  {
    cik_str: 1787400,
    ticker: "NKTX",
    company_name: "Nkarta, Inc.",
  },
  {
    cik_str: 1813452,
    ticker: "PLNH",
    company_name: "Planet 13 Holdings Inc.",
  },
  {
    cik_str: 842517,
    ticker: "ISBA",
    company_name: "ISABELLA BANK Corp",
  },
  {
    cik_str: 1907982,
    ticker: "QBTS",
    company_name: "D-Wave Quantum Inc.",
  },
  {
    cik_str: 1036262,
    ticker: "INTT",
    company_name: "INTEST CORP",
  },
  {
    cik_str: 1245648,
    ticker: "FLC",
    company_name: "FLAHERTY & CRUMRINE TOTAL RETURN FUND INC",
  },
  {
    cik_str: 1261166,
    ticker: "NRO",
    company_name: "NEUBERGER BERMAN REAL ESTATE SECURITIES INCOME FUND INC",
  },
  {
    cik_str: 931584,
    ticker: "USAP",
    company_name: "UNIVERSAL STAINLESS & ALLOY PRODUCTS INC",
  },
  {
    cik_str: 1831481,
    ticker: "FLME",
    company_name: "Flame Acquisition Corp.",
  },
  {
    cik_str: 1549966,
    ticker: "SAMG",
    company_name: "Silvercrest Asset Management Group Inc.",
  },
  {
    cik_str: 1598981,
    ticker: "SKYX",
    company_name: "SKYX Platforms Corp.",
  },
  {
    cik_str: 1817229,
    ticker: "VOR",
    company_name: "Vor Biopharma Inc.",
  },
  {
    cik_str: 1289868,
    ticker: "MCN",
    company_name: "Madison Covered Call & Equity Strategy Fund",
  },
  {
    cik_str: 1874944,
    ticker: "VCSA",
    company_name: "Vacasa, Inc.",
  },
  {
    cik_str: 1391437,
    ticker: "GRX",
    company_name: "Gabelli Healthcare & WellnessRx Trust",
  },
  {
    cik_str: 1534969,
    ticker: "SERA",
    company_name: "SERA PROGNOSTICS, INC.",
  },
  {
    cik_str: 893847,
    ticker: "HWBK",
    company_name: "HAWTHORN BANCSHARES, INC.",
  },
  {
    cik_str: 1201792,
    ticker: "APEI",
    company_name: "AMERICAN PUBLIC EDUCATION INC",
  },
  {
    cik_str: 831655,
    ticker: "MPV",
    company_name: "BARINGS PARTICIPATION INVESTORS",
  },
  {
    cik_str: 1093672,
    ticker: "PEBK",
    company_name: "PEOPLES BANCORP OF NORTH CAROLINA INC",
  },
  {
    cik_str: 814549,
    ticker: "EBIX",
    company_name: "EBIX INC",
  },
  {
    cik_str: 1856725,
    ticker: "RANI",
    company_name: "Rani Therapeutics Holdings, Inc.",
  },
  {
    cik_str: 1733868,
    ticker: "CNF",
    company_name: "CNFinance Holdings Ltd.",
  },
  {
    cik_str: 891038,
    ticker: "MPA",
    company_name: "BLACKROCK MUNIYIELD PENNSYLVANIA QUALITY FUND",
  },
  {
    cik_str: 1835817,
    ticker: "NSTC",
    company_name: "Northern Star Investment Corp. III",
  },
  {
    cik_str: 1556727,
    ticker: "FNWB",
    company_name: "First Northwest Bancorp",
  },
  {
    cik_str: 1850838,
    ticker: "OMGA",
    company_name: "Omega Therapeutics, Inc.",
  },
  {
    cik_str: 1520358,
    ticker: "MAMA",
    company_name: "Mama's Creations, Inc.",
  },
  {
    cik_str: 1835814,
    ticker: "NSTD",
    company_name: "Northern Star Investment Corp. IV",
  },
  {
    cik_str: 1918661,
    ticker: "ESHA",
    company_name: "ESH Acquisition Corp.",
  },
  {
    cik_str: 1750735,
    ticker: "MRBK",
    company_name: "Meridian Corp",
  },
  {
    cik_str: 1832950,
    ticker: "KRNL",
    company_name: "Kernel Group Holdings, Inc.",
  },
  {
    cik_str: 1838359,
    ticker: "RGTI",
    company_name: "Rigetti Computing, Inc.",
  },
  {
    cik_str: 1439725,
    ticker: "BDSX",
    company_name: "BIODESIX INC",
  },
  {
    cik_str: 1156388,
    ticker: "BGFV",
    company_name: "BIG 5 SPORTING GOODS Corp",
  },
  {
    cik_str: 1604868,
    ticker: "GRWG",
    company_name: "GrowGeneration Corp.",
  },
  {
    cik_str: 1417892,
    ticker: "SOL",
    company_name: "Emeren Group Ltd",
  },
  {
    cik_str: 1504234,
    ticker: "BGX",
    company_name: "Blackstone Long-Short Credit Income Fund",
  },
  {
    cik_str: 763907,
    ticker: "FUNC",
    company_name: "FIRST UNITED CORP/MD/",
  },
  {
    cik_str: 1862935,
    ticker: "IFIN",
    company_name: "InFinT Acquisition Corp",
  },
  {
    cik_str: 1841610,
    ticker: "ROSS",
    company_name: "Ross Acquisition Corp II",
  },
  {
    cik_str: 1059213,
    ticker: "DNIF",
    company_name: "DIVIDEND & INCOME FUND",
  },
  {
    cik_str: 1847462,
    ticker: "AYRWF",
    company_name: "Ayr Wellness Inc.",
  },
  {
    cik_str: 1459188,
    ticker: "FDOC",
    company_name: "FUEL DOCTOR HOLDINGS, INC.",
  },
  {
    cik_str: 1560241,
    ticker: "GTHX",
    company_name: "G1 Therapeutics, Inc.",
  },
  {
    cik_str: 2098,
    ticker: "ACU",
    company_name: "ACME UNITED CORP",
  },
  {
    cik_str: 1828377,
    ticker: "FTCO",
    company_name: "Fortitude Gold Corp",
  },
  {
    cik_str: 858706,
    ticker: "GF",
    company_name: "NEW GERMANY FUND INC",
  },
  {
    cik_str: 1843714,
    ticker: "WNNR",
    company_name: "Andretti Acquisition Corp.",
  },
  {
    cik_str: 1875558,
    ticker: "NVCT",
    company_name: "Nuvectis Pharma, Inc.",
  },
  {
    cik_str: 1807120,
    ticker: "DSGN",
    company_name: "Design Therapeutics, Inc.",
  },
  {
    cik_str: 1463972,
    ticker: "VUZI",
    company_name: "Vuzix Corp",
  },
  {
    cik_str: 1831874,
    ticker: "IRAA",
    company_name: "Iris Acquisition Corp",
  },
  {
    cik_str: 1388320,
    ticker: "ATNM",
    company_name: "Actinium Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1816017,
    ticker: "SPIR",
    company_name: "Spire Global, Inc.",
  },
  {
    cik_str: 1852749,
    ticker: "XFIN",
    company_name: "ExcelFin Acquisition Corp.",
  },
  {
    cik_str: 1788882,
    ticker: "ROOT",
    company_name: "Root, Inc.",
  },
  {
    cik_str: 1873441,
    ticker: "BCSA",
    company_name: "Blockchain Coinvestors Acquisition Corp. I",
  },
  {
    cik_str: 1832871,
    ticker: "BMN",
    company_name: "BlackRock 2037 Municipal Target Term Trust",
  },
  {
    cik_str: 1588871,
    ticker: "OAKC",
    company_name: "Oakworth Capital, Inc.",
  },
  {
    cik_str: 1814423,
    ticker: "IH",
    company_name: "iHuman Inc.",
  },
  {
    cik_str: 1528115,
    ticker: "ANNX",
    company_name: "Annexon, Inc.",
  },
  {
    cik_str: 1750264,
    ticker: "PUYI",
    company_name: "PUYI, INC.",
  },
  {
    cik_str: 1053369,
    ticker: "ELTP",
    company_name: "ELITE PHARMACEUTICALS INC /NV/",
  },
  {
    cik_str: 716605,
    ticker: "PWOD",
    company_name: "PENNS WOODS BANCORP INC",
  },
  {
    cik_str: 1879814,
    ticker: "TLGY",
    company_name: "TLGY ACQUISITION CORP",
  },
  {
    cik_str: 1738177,
    ticker: "CMBM",
    company_name: "Cambium Networks Corp",
  },
  {
    cik_str: 1873835,
    ticker: "IMMX",
    company_name: "Immix Biopharma, Inc.",
  },
  {
    cik_str: 24090,
    ticker: "CIA",
    company_name: "CITIZENS, INC.",
  },
  {
    cik_str: 1745114,
    ticker: "MOLN",
    company_name: "MOLECULAR PARTNERS AG",
  },
  {
    cik_str: 723646,
    ticker: "FRAF",
    company_name: "FRANKLIN FINANCIAL SERVICES CORP /PA/",
  },
  {
    cik_str: 1443575,
    ticker: "AVBH",
    company_name: "Avidbank Holdings, Inc.",
  },
  {
    cik_str: 1051343,
    ticker: "CWBC",
    company_name: "COMMUNITY WEST BANCSHARES /",
  },
  {
    cik_str: 1448397,
    ticker: "SHIP",
    company_name: "Seanergy Maritime Holdings Corp.",
  },
  {
    cik_str: 918541,
    ticker: "NNBR",
    company_name: "NN INC",
  },
  {
    cik_str: 1834253,
    ticker: "EM",
    company_name: "Smart Share Global Ltd",
  },
  {
    cik_str: 1294133,
    ticker: "INGN",
    company_name: "Inogen Inc",
  },
  {
    cik_str: 1377757,
    ticker: "GAU",
    company_name: "Galiano Gold Inc.",
  },
  {
    cik_str: 1753706,
    ticker: "FREE",
    company_name: "Whole Earth Brands, Inc.",
  },
  {
    cik_str: 1948697,
    ticker: "SPPL",
    company_name: "SIMPPLE LTD.",
  },
  {
    cik_str: 1612630,
    ticker: "JYNT",
    company_name: "JOINT Corp",
  },
  {
    cik_str: 1848948,
    ticker: "VCXB",
    company_name: "10X Capital Venture Acquisition Corp. III",
  },
  {
    cik_str: 1275158,
    ticker: "NDLS",
    company_name: "NOODLES & Co",
  },
  {
    cik_str: 1866782,
    ticker: "CDRO",
    company_name: "Codere Online Luxembourg, S.A.",
  },
  {
    cik_str: 725363,
    ticker: "CVM",
    company_name: "CEL SCI CORP",
  },
  {
    cik_str: 1137547,
    ticker: "UBFO",
    company_name: "UNITED SECURITY BANCSHARES",
  },
  {
    cik_str: 1369290,
    ticker: "MYO",
    company_name: "MYOMO, INC.",
  },
  {
    cik_str: 1758530,
    ticker: "SY",
    company_name: "So-Young International Inc.",
  },
  {
    cik_str: 1844642,
    ticker: "LCA",
    company_name: "Landcadia Holdings IV, Inc.",
  },
  {
    cik_str: 1287498,
    ticker: "EVG",
    company_name: "Eaton Vance Short Duration Diversified Income Fund",
  },
  {
    cik_str: 1442236,
    ticker: "QRHC",
    company_name: "Quest Resource Holding Corp",
  },
  {
    cik_str: 1823466,
    ticker: "NOTE",
    company_name: "FiscalNote Holdings, Inc.",
  },
  {
    cik_str: 1505155,
    ticker: "UPLD",
    company_name: "Upland Software, Inc.",
  },
  {
    cik_str: 1738906,
    ticker: "YI",
    company_name: "111, Inc.",
  },
  {
    cik_str: 1733294,
    ticker: "GBIO",
    company_name: "Generation Bio Co.",
  },
  {
    cik_str: 1166834,
    ticker: "SHLT",
    company_name: "SHL TELEMEDICINE LTD",
  },
  {
    cik_str: 911147,
    ticker: "CNTY",
    company_name: "CENTURY CASINOS INC /CO/",
  },
  {
    cik_str: 830487,
    ticker: "MHF",
    company_name: "WESTERN ASSET MUNICIPAL HIGH INCOME FUND INC.",
  },
  {
    cik_str: 1854275,
    ticker: "IOAC",
    company_name: "Innovative International Acquisition Corp.",
  },
  {
    cik_str: 1858848,
    ticker: "TNYA",
    company_name: "Tenaya Therapeutics, Inc.",
  },
  {
    cik_str: 1402829,
    ticker: "ORN",
    company_name: "Orion Group Holdings Inc",
  },
  {
    cik_str: 1496443,
    ticker: "PAYS",
    company_name: "Paysign, Inc.",
  },
  {
    cik_str: 904112,
    ticker: "MSD",
    company_name: "MORGAN STANLEY EMERGING MARKETS DEBT FUND INC",
  },
  {
    cik_str: 1494650,
    ticker: "OPTN",
    company_name: "OptiNose, Inc.",
  },
  {
    cik_str: 1371782,
    ticker: "MVO",
    company_name: "MV Oil Trust",
  },
  {
    cik_str: 1504545,
    ticker: "BWG",
    company_name: "BrandywineGLOBAL-Global Income Opportunities Fund Inc",
  },
  {
    cik_str: 10329,
    ticker: "BSET",
    company_name: "BASSETT FURNITURE INDUSTRIES INC",
  },
  {
    cik_str: 1819498,
    ticker: "TWLV",
    company_name: "Twelve Seas Investment Co. II",
  },
  {
    cik_str: 1816613,
    ticker: "MKFG",
    company_name: "Markforged Holding Corp",
  },
  {
    cik_str: 1912582,
    ticker: "FLFV",
    company_name: "Feutune Light Acquisition Corp",
  },
  {
    cik_str: 1636051,
    ticker: "FUST",
    company_name: "FUSE GROUP HOLDING INC.",
  },
  {
    cik_str: 1561921,
    ticker: "TELA",
    company_name: "TELA Bio, Inc.",
  },
  {
    cik_str: 1614806,
    ticker: "AJX",
    company_name: "Great Ajax Corp.",
  },
  {
    cik_str: 1398733,
    ticker: "AQST",
    company_name: "Aquestive Therapeutics, Inc.",
  },
  {
    cik_str: 1857190,
    ticker: "NYXH",
    company_name: "Nyxoah SA",
  },
  {
    cik_str: 773717,
    ticker: "ACRG",
    company_name: "American Clean Resources Group, Inc.",
  },
  {
    cik_str: 1865111,
    ticker: "ALSA",
    company_name: "Alpha Star Acquisition Corp",
  },
  {
    cik_str: 1332943,
    ticker: "IGA",
    company_name: "Voya Global Advantage & Premium Opportunity Fund",
  },
  {
    cik_str: 933972,
    ticker: "SCWO",
    company_name: "374Water Inc.",
  },
  {
    cik_str: 1851194,
    ticker: "VTYX",
    company_name: "Ventyx Biosciences, Inc.",
  },
  {
    cik_str: 1799788,
    ticker: "GLSI",
    company_name: "Greenwich LifeSciences, Inc.",
  },
  {
    cik_str: 1602658,
    ticker: "ISTR",
    company_name: "Investar Holding Corp",
  },
  {
    cik_str: 1408534,
    ticker: "FGBI",
    company_name: "First Guaranty Bancshares, Inc.",
  },
  {
    cik_str: 1400438,
    ticker: "LGO",
    company_name: "Largo Inc.",
  },
  {
    cik_str: 1133311,
    ticker: "TZOO",
    company_name: "TRAVELZOO",
  },
  {
    cik_str: 1826000,
    ticker: "LTCH",
    company_name: "Latch, Inc.",
  },
  {
    cik_str: 1343793,
    ticker: "BTA",
    company_name: "BlackRock Long-Term Municipal Advantage Trust",
  },
  {
    cik_str: 1834032,
    ticker: "CSTA",
    company_name: "Constellation Acquisition Corp I",
  },
  {
    cik_str: 839122,
    ticker: "DMF",
    company_name: "BNY MELLON MUNICIPAL INCOME, INC.",
  },
  {
    cik_str: 1774675,
    ticker: "SKIL",
    company_name: "Skillsoft Corp.",
  },
  {
    cik_str: 1289340,
    ticker: "STXS",
    company_name: "Stereotaxis, Inc.",
  },
  {
    cik_str: 1701541,
    ticker: "BDTX",
    company_name: "Black Diamond Therapeutics, Inc.",
  },
  {
    cik_str: 1041368,
    ticker: "RVSB",
    company_name: "RIVERVIEW BANCORP INC",
  },
  {
    cik_str: 1626878,
    ticker: "XBIT",
    company_name: "XBiotech Inc.",
  },
  {
    cik_str: 1879297,
    ticker: "LGVC",
    company_name: "LAMF Global Ventures Corp. I",
  },
  {
    cik_str: 706863,
    ticker: "UNB",
    company_name: "UNION BANKSHARES INC",
  },
  {
    cik_str: 1813814,
    ticker: "MNMD",
    company_name: "Mind Medicine (MindMed) Inc.",
  },
  {
    cik_str: 1133869,
    ticker: "CAPR",
    company_name: "CAPRICOR THERAPEUTICS, INC.",
  },
  {
    cik_str: 1689548,
    ticker: "PRAX",
    company_name: "Praxis Precision Medicines, Inc.",
  },
  {
    cik_str: 836690,
    ticker: "ISSC",
    company_name: "INNOVATIVE SOLUTIONS & SUPPORT INC",
  },
  {
    cik_str: 18255,
    ticker: "CATO",
    company_name: "CATO CORP",
  },
  {
    cik_str: 1383062,
    ticker: "DBE",
    company_name: "Invesco DB Energy Fund",
  },
  {
    cik_str: 1819574,
    ticker: "BARK",
    company_name: "Bark, Inc.",
  },
  {
    cik_str: 1725123,
    ticker: "CANG",
    company_name: "Cango Inc.",
  },
  {
    cik_str: 1353613,
    ticker: "FXY",
    company_name: "Invesco CurrencyShares Japanese Yen Trust",
  },
  {
    cik_str: 1035976,
    ticker: "FNCB",
    company_name: "FNCB Bancorp, Inc.",
  },
  {
    cik_str: 1854795,
    ticker: "IRRX",
    company_name: "INTEGRATED RAIL & RESOURCES ACQUISITION CORP",
  },
  {
    cik_str: 1838108,
    ticker: "RMGC",
    company_name: "RMG Acquisition Corp. III",
  },
  {
    cik_str: 1504379,
    ticker: "CSTE",
    company_name: "Caesarstone Ltd.",
  },
  {
    cik_str: 1815776,
    ticker: "GRPH",
    company_name: "Graphite Bio, Inc.",
  },
  {
    cik_str: 1822250,
    ticker: "WISH",
    company_name: "ContextLogic Inc.",
  },
  {
    cik_str: 1505413,
    ticker: "VOC",
    company_name: "VOC Energy Trust",
  },
  {
    cik_str: 1477081,
    ticker: "KGEI",
    company_name: "Kolibri Global Energy Inc.",
  },
  {
    cik_str: 1851961,
    ticker: "CNDB",
    company_name: "Concord Acquisition Corp III",
  },
  {
    cik_str: 701719,
    ticker: "ELA",
    company_name: "Envela Corp",
  },
  {
    cik_str: 1411685,
    ticker: "VTGN",
    company_name: "Vistagen Therapeutics, Inc.",
  },
  {
    cik_str: 1950429,
    ticker: "NNAG",
    company_name: "99 Acquisition Group Inc.",
  },
  {
    cik_str: 1696195,
    ticker: "KNIT",
    company_name: "KINETIC GROUP INC.",
  },
  {
    cik_str: 1828811,
    ticker: "LICY",
    company_name: "Li-Cycle Holdings Corp.",
  },
  {
    cik_str: 1892747,
    ticker: "VMCA",
    company_name: "Valuence Merger Corp. I",
  },
  {
    cik_str: 1771910,
    ticker: "ADCT",
    company_name: "ADC Therapeutics SA",
  },
  {
    cik_str: 1948294,
    ticker: "NWGL",
    company_name: "Nature Wood Group Ltd",
  },
  {
    cik_str: 1838163,
    ticker: "DHCA",
    company_name: "DHC Acquisition Corp.",
  },
  {
    cik_str: 897802,
    ticker: "SPE",
    company_name: "SPECIAL OPPORTUNITIES FUND, INC.",
  },
  {
    cik_str: 355019,
    ticker: "FONR",
    company_name: "FONAR CORP",
  },
  {
    cik_str: 1114927,
    ticker: "FNRN",
    company_name: "FIRST NORTHERN COMMUNITY BANCORP",
  },
  {
    cik_str: 315374,
    ticker: "HURC",
    company_name: "HURCO COMPANIES INC",
  },
  {
    cik_str: 1882198,
    ticker: "ATEK",
    company_name: "Athena Technology Acquisition Corp. II",
  },
  {
    cik_str: 1820190,
    ticker: "SCLX",
    company_name: "Scilex Holding Co",
  },
  {
    cik_str: 1854139,
    ticker: "ZVIA",
    company_name: "Zevia PBC",
  },
  {
    cik_str: 1609809,
    ticker: "MCRB",
    company_name: "Seres Therapeutics, Inc.",
  },
  {
    cik_str: 1381074,
    ticker: "RTC",
    company_name: "Baijiayun Group Ltd",
  },
  {
    cik_str: 1829667,
    ticker: "RGC",
    company_name: "Regencell Bioscience Holdings Ltd",
  },
  {
    cik_str: 1827087,
    ticker: "VIGL",
    company_name: "Vigil Neuroscience, Inc.",
  },
  {
    cik_str: 1163792,
    ticker: "WEA",
    company_name: "WESTERN ASSET PREMIER BOND FUND",
  },
  {
    cik_str: 1616788,
    ticker: "LGYV",
    company_name: "LEGACY VENTURES INTERNATIONAL INC.",
  },
  {
    cik_str: 1578987,
    ticker: "BANX",
    company_name: "ArrowMark Financial Corp.",
  },
  {
    cik_str: 731122,
    ticker: "CCFN",
    company_name: "MUNCY COLUMBIA FINANCIAL Corp",
  },
  {
    cik_str: 1836274,
    ticker: "ACAH",
    company_name: "Atlantic Coastal Acquisition Corp.",
  },
  {
    cik_str: 1828588,
    ticker: "HNVR",
    company_name: "Hanover Bancorp, Inc. /NY",
  },
  {
    cik_str: 1779474,
    ticker: "MAPS",
    company_name: "WM TECHNOLOGY, INC.",
  },
  {
    cik_str: 1848275,
    ticker: "TOP",
    company_name: "TOP Financial Group Ltd",
  },
  {
    cik_str: 868578,
    ticker: "PFD",
    company_name: "FLAHERTY & CRUMRINE PREFERRED & INCOME FUND INC",
  },
  {
    cik_str: 1853397,
    ticker: "ZLS",
    company_name: "Zalatoris II Acquisition Corp",
  },
  {
    cik_str: 1645460,
    ticker: "CUE",
    company_name: "Cue Biopharma, Inc.",
  },
  {
    cik_str: 1767837,
    ticker: "RMBI",
    company_name: "Richmond Mutual Bancorporation, Inc.",
  },
  {
    cik_str: 874396,
    ticker: "LCUT",
    company_name: "LIFETIME BRANDS, INC",
  },
  {
    cik_str: 1775734,
    ticker: "BENF",
    company_name: "Beneficient",
  },
  {
    cik_str: 1253689,
    ticker: "GLYC",
    company_name: "GLYCOMIMETICS INC",
  },
  {
    cik_str: 1778016,
    ticker: "IMAB",
    company_name: "I-Mab",
  },
  {
    cik_str: 1305168,
    ticker: "ARC",
    company_name: "ARC DOCUMENT SOLUTIONS, INC.",
  },
  {
    cik_str: 36840,
    ticker: "FREVS",
    company_name: "FIRST REAL ESTATE INVESTMENT TRUST OF NEW JERSEY",
  },
  {
    cik_str: 1801661,
    ticker: "SKLZ",
    company_name: "Skillz Inc.",
  },
  {
    cik_str: 1478102,
    ticker: "DMO",
    company_name: "Western Asset Mortgage Opportunity Fund Inc.",
  },
  {
    cik_str: 1870833,
    ticker: "RMMZ",
    company_name: "RiverNorth Managed Duration Municipal Income Fund II, Inc.",
  },
  {
    cik_str: 759866,
    ticker: "JHS",
    company_name: "JOHN HANCOCK INCOME SECURITIES TRUST",
  },
  {
    cik_str: 1006281,
    ticker: "PLX",
    company_name: "Protalix BioTherapeutics, Inc.",
  },
  {
    cik_str: 1831979,
    ticker: "GPAC",
    company_name: "Global Partner Acquisition Corp II",
  },
  {
    cik_str: 1838513,
    ticker: "GATE",
    company_name: "Marblegate Acquisition Corp.",
  },
  {
    cik_str: 1867066,
    ticker: "DERM",
    company_name: "Journey Medical Corp",
  },
  {
    cik_str: 1509397,
    ticker: "LOMLF",
    company_name: "Lion One Metals Ltd.",
  },
  {
    cik_str: 1562151,
    ticker: "CWGL",
    company_name: "Crimson Wine Group, Ltd",
  },
  {
    cik_str: 892992,
    ticker: "NAZ",
    company_name: "NUVEEN ARIZONA QUALITY MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 1946216,
    ticker: "SYT",
    company_name: "SYLA Technologies Co., Ltd.",
  },
  {
    cik_str: 1802457,
    ticker: "ORGN",
    company_name: "Origin Materials, Inc.",
  },
  {
    cik_str: 1030997,
    ticker: "WILC",
    company_name: "G WILLI FOOD INTERNATIONAL LTD",
  },
  {
    cik_str: 719402,
    ticker: "FXNC",
    company_name: "FIRST NATIONAL CORP /VA/",
  },
  {
    cik_str: 808219,
    ticker: "MHGU",
    company_name: "MERITAGE HOSPITALITY GROUP INC",
  },
  {
    cik_str: 1828376,
    ticker: "WMPN",
    company_name: "William Penn Bancorporation",
  },
  {
    cik_str: 1843121,
    ticker: "OPA",
    company_name: "Magnum Opus Acquisition Ltd",
  },
  {
    cik_str: 1759631,
    ticker: "HYLN",
    company_name: "Hyliion Holdings Corp.",
  },
  {
    cik_str: 1854480,
    ticker: "FIAC",
    company_name: "Focus Impact Acquisition Corp.",
  },
  {
    cik_str: 1523836,
    ticker: "LITB",
    company_name: "LightInTheBox Holding Co., Ltd.",
  },
  {
    cik_str: 1199004,
    ticker: "FMN",
    company_name: "Federated Hermes Premier Municipal Income Fund",
  },
  {
    cik_str: 1506251,
    ticker: "CTXR",
    company_name: "Citius Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1847064,
    ticker: "PSQH",
    company_name: "PSQ Holdings, Inc.",
  },
  {
    cik_str: 798081,
    ticker: "LAKE",
    company_name: "LAKELAND INDUSTRIES INC",
  },
  {
    cik_str: 895574,
    ticker: "VFL",
    company_name: "abrdn National Municipal Income Fund",
  },
  {
    cik_str: 1856948,
    ticker: "CHEA",
    company_name: "Chenghe Acquisition Co.",
  },
  {
    cik_str: 1479681,
    ticker: "NUTX",
    company_name: "Nutex Health, Inc.",
  },
  {
    cik_str: 1367644,
    ticker: "EBS",
    company_name: "Emergent BioSolutions Inc.",
  },
  {
    cik_str: 1370416,
    ticker: "WPRT",
    company_name: "WESTPORT FUEL SYSTEMS INC.",
  },
  {
    cik_str: 1871745,
    ticker: "DSAQ",
    company_name: "Direct Selling Acquisition Corp.",
  },
  {
    cik_str: 1752372,
    ticker: "EZOO",
    company_name: "Ezagoo Ltd",
  },
  {
    cik_str: 320340,
    ticker: "CCRD",
    company_name: "CoreCard Corp",
  },
  {
    cik_str: 1303942,
    ticker: "BFIN",
    company_name: "BankFinancial CORP",
  },
  {
    cik_str: 1884164,
    ticker: "KWIK",
    company_name: "KwikClick, Inc.",
  },
  {
    cik_str: 1400118,
    ticker: "SGMT",
    company_name: "Sagimet Biosciences Inc.",
  },
  {
    cik_str: 1837929,
    ticker: "NPAB",
    company_name: "New Providence Acquisition Corp. II",
  },
  {
    cik_str: 1354866,
    ticker: "BYRN",
    company_name: "Byrna Technologies Inc.",
  },
  {
    cik_str: 1865407,
    ticker: "KCGI",
    company_name: "Kensington Capital Acquisition Corp. V",
  },
  {
    cik_str: 1835972,
    ticker: "ARRW",
    company_name: "Arrowroot Acquisition Corp.",
  },
  {
    cik_str: 1840317,
    ticker: "PLMI",
    company_name: "Plum Acquisition Corp. I",
  },
  {
    cik_str: 1627854,
    ticker: "DCF",
    company_name:
      "BNY Mellon Alcentra Global Credit Income 2024 Target Term Fund, Inc.",
  },
  {
    cik_str: 795800,
    ticker: "PNRLF",
    company_name: "Premium Nickel Resources Ltd.",
  },
  {
    cik_str: 1900402,
    ticker: "EVGR",
    company_name: "Evergreen Corp",
  },
  {
    cik_str: 1868573,
    ticker: "APXI",
    company_name: "APx Acquisition Corp. I",
  },
  {
    cik_str: 1852633,
    ticker: "BYN",
    company_name: "Banyan Acquisition Corp",
  },
  {
    cik_str: 1872302,
    ticker: "NA",
    company_name: "Nano Labs Ltd",
  },
  {
    cik_str: 1605301,
    ticker: "CBFV",
    company_name: "CB Financial Services, Inc.",
  },
  {
    cik_str: 1739410,
    ticker: "RLYB",
    company_name: "Rallybio Corp",
  },
  {
    cik_str: 1496749,
    ticker: "HEQ",
    company_name: "John Hancock Hedged Equity & Income Fund",
  },
  {
    cik_str: 928465,
    ticker: "DIT",
    company_name: "AMCON DISTRIBUTING CO",
  },
  {
    cik_str: 1567264,
    ticker: "INTS",
    company_name: "INTENSITY THERAPEUTICS, INC.",
  },
  {
    cik_str: 1894057,
    ticker: "PPYA",
    company_name: "Papaya Growth Opportunity Corp. I",
  },
  {
    cik_str: 1016838,
    ticker: "RDCM",
    company_name: "RADCOM LTD",
  },
  {
    cik_str: 1847409,
    ticker: "HITI",
    company_name: "High Tide Inc.",
  },
  {
    cik_str: 1855447,
    ticker: "TYGO",
    company_name: "TIGO ENERGY, INC.",
  },
  {
    cik_str: 1753673,
    ticker: "SJ",
    company_name: "Scienjoy Holding Corp",
  },
  {
    cik_str: 1401564,
    ticker: "FFNW",
    company_name: "First Financial Northwest, Inc.",
  },
  {
    cik_str: 315131,
    ticker: "PHX",
    company_name: "PHX MINERALS INC.",
  },
  {
    cik_str: 1828161,
    ticker: "FTCI",
    company_name: "FTC Solar, Inc.",
  },
  {
    cik_str: 1838672,
    ticker: "ADTH",
    company_name: "AdTheorent Holding Company, Inc.",
  },
  {
    cik_str: 1834518,
    ticker: "NSTB",
    company_name: "Northern Star Investment Corp. II",
  },
  {
    cik_str: 1501697,
    ticker: "XFOR",
    company_name: "X4 Pharmaceuticals, Inc",
  },
  {
    cik_str: 1367859,
    ticker: "CZWI",
    company_name: "Citizens Community Bancorp Inc.",
  },
  {
    cik_str: 1861541,
    ticker: "PGSS",
    company_name: "Pegasus Digital Mobility Acquisition Corp.",
  },
  {
    cik_str: 1932770,
    ticker: "QSG",
    company_name: "QuantaSing Group Ltd",
  },
  {
    cik_str: 1827899,
    ticker: "CPTK",
    company_name: "Crown PropTech Acquisitions",
  },
  {
    cik_str: 1506929,
    ticker: "VRDR",
    company_name: "VERDE RESOURCES, INC.",
  },
  {
    cik_str: 916793,
    ticker: "SILC",
    company_name: "SILICOM LTD.",
  },
  {
    cik_str: 875657,
    ticker: "ULBI",
    company_name: "ULTRALIFE CORP",
  },
  {
    cik_str: 1856961,
    ticker: "BOCN",
    company_name: "Blue Ocean Acquisition Corp",
  },
  {
    cik_str: 1914605,
    ticker: "ECBK",
    company_name: "ECB Bancorp, Inc. /MD/",
  },
  {
    cik_str: 318306,
    ticker: "ABEO",
    company_name: "ABEONA THERAPEUTICS INC.",
  },
  {
    cik_str: 1699382,
    ticker: "PMVP",
    company_name: "PMV Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1782594,
    ticker: "GTH",
    company_name: "Genetron Holdings Ltd",
  },
  {
    cik_str: 1051627,
    ticker: "AXTI",
    company_name: "AXT INC",
  },
  {
    cik_str: 1854572,
    ticker: "IZM",
    company_name: "ICZOOM Group Inc.",
  },
  {
    cik_str: 1814974,
    ticker: "BBXIA",
    company_name: "BBX Capital, Inc.",
  },
  {
    cik_str: 1867834,
    ticker: "BRAG",
    company_name: "Bragg Gaming Group Inc.",
  },
  {
    cik_str: 1893219,
    ticker: "ACAB",
    company_name: "Atlantic Coastal Acquisition Corp. II",
  },
  {
    cik_str: 1732409,
    ticker: "BCHG",
    company_name: "Grayscale Bitcoin Cash Trust (BCH)",
  },
  {
    cik_str: 1411688,
    ticker: "TCS",
    company_name: "Container Store Group, Inc.",
  },
  {
    cik_str: 1779020,
    ticker: "DNMR",
    company_name: "Danimer Scientific, Inc.",
  },
  {
    cik_str: 1001902,
    ticker: "IVAC",
    company_name: "INTEVAC INC",
  },
  {
    cik_str: 1498403,
    ticker: "BLRX",
    company_name: "BioLineRx Ltd.",
  },
  {
    cik_str: 75398,
    ticker: "PAI",
    company_name: "Western Asset Investment Grade Income Fund Inc.",
  },
  {
    cik_str: 810943,
    ticker: "PCF",
    company_name: "HIGH INCOME SECURITIES FUND",
  },
  {
    cik_str: 1880613,
    ticker: "DRCT",
    company_name: "Direct Digital Holdings, Inc.",
  },
  {
    cik_str: 1621227,
    ticker: "ADAP",
    company_name: "Adaptimmune Therapeutics PLC",
  },
  {
    cik_str: 8146,
    ticker: "ALOT",
    company_name: "AstroNova, Inc.",
  },
  {
    cik_str: 715446,
    ticker: "ANIX",
    company_name: "Anixa Biosciences Inc",
  },
  {
    cik_str: 1522767,
    ticker: "MRMD",
    company_name: "MARIMED INC.",
  },
  {
    cik_str: 1305767,
    ticker: "PHD",
    company_name: "Pioneer Floating Rate Fund, Inc.",
  },
  {
    cik_str: 1726445,
    ticker: "SEER",
    company_name: "Seer, Inc.",
  },
  {
    cik_str: 1852019,
    ticker: "IXAQ",
    company_name: "IX Acquisition Corp.",
  },
  {
    cik_str: 1547546,
    ticker: "LFT",
    company_name: "Lument Finance Trust, Inc.",
  },
  {
    cik_str: 1846750,
    ticker: "TCOA",
    company_name: "Zalatoris Acquisition Corp.",
  },
  {
    cik_str: 894671,
    ticker: "OVBC",
    company_name: "OHIO VALLEY BANC CORP",
  },
  {
    cik_str: 1781174,
    ticker: "ACRV",
    company_name: "Acrivon Therapeutics, Inc.",
  },
  {
    cik_str: 1690585,
    ticker: "DNTH",
    company_name: "Dianthus Therapeutics, Inc. /DE/",
  },
  {
    cik_str: 1710340,
    ticker: "ETON",
    company_name: "Eton Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1478454,
    ticker: "EBMT",
    company_name: "Eagle Bancorp Montana, Inc.",
  },
  {
    cik_str: 891532,
    ticker: "PESI",
    company_name: "PERMA FIX ENVIRONMENTAL SERVICES INC",
  },
  {
    cik_str: 759828,
    ticker: "JHI",
    company_name: "JOHN HANCOCK INVESTORS TRUST",
  },
  {
    cik_str: 1571776,
    ticker: "CHMI",
    company_name: "Cherry Hill Mortgage Investment Corp",
  },
  {
    cik_str: 1374328,
    ticker: "FTLF",
    company_name: "FITLIFE BRANDS, INC.",
  },
  {
    cik_str: 100726,
    ticker: "UFI",
    company_name: "UNIFI INC",
  },
  {
    cik_str: 1801417,
    ticker: "BYNO",
    company_name: "byNordic Acquisition Corp",
  },
  {
    cik_str: 1316463,
    ticker: "GLQ",
    company_name: "Clough Global Equity Fund",
  },
  {
    cik_str: 1832168,
    ticker: "LBPH",
    company_name: "Longboard Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1662244,
    ticker: "CYT",
    company_name: "Cyteir Therapeutics, Inc.",
  },
  {
    cik_str: 793040,
    ticker: "ECF",
    company_name: "ELLSWORTH GROWTH & INCOME FUND LTD",
  },
  {
    cik_str: 845606,
    ticker: "CXE",
    company_name: "MFS HIGH INCOME MUNICIPAL TRUST",
  },
  {
    cik_str: 1645873,
    ticker: "MDV",
    company_name: "Modiv Industrial, Inc.",
  },
  {
    cik_str: 1855555,
    ticker: "ENER",
    company_name: "ACCRETION ACQUISITION CORP.",
  },
  {
    cik_str: 1726126,
    ticker: "EPSN",
    company_name: "Epsilon Energy Ltd.",
  },
  {
    cik_str: 1393883,
    ticker: "DHX",
    company_name: "DHI GROUP, INC.",
  },
  {
    cik_str: 748691,
    ticker: "KF",
    company_name: "KOREA FUND INC",
  },
  {
    cik_str: 1797768,
    ticker: "KNTE",
    company_name: "Kinnate Biopharma Inc.",
  },
  {
    cik_str: 1829953,
    ticker: "COOL",
    company_name: "Corner Growth Acquisition Corp.",
  },
  {
    cik_str: 1825079,
    ticker: "VLD",
    company_name: "Velo3D, Inc.",
  },
  {
    cik_str: 1590715,
    ticker: "AREC",
    company_name: "American Resources Corp",
  },
  {
    cik_str: 1881462,
    ticker: "SHAP",
    company_name: "Spree Acquisition Corp. 1 Ltd",
  },
  {
    cik_str: 1723935,
    ticker: "STG",
    company_name: "Sunlands Technology Group",
  },
  {
    cik_str: 881787,
    ticker: "CRT",
    company_name: "CROSS TIMBERS ROYALTY TRUST",
  },
  {
    cik_str: 1095052,
    ticker: "PLG",
    company_name: "PLATINUM GROUP METALS LTD",
  },
  {
    cik_str: 1826892,
    ticker: "BCAB",
    company_name: "BioAtla, Inc.",
  },
  {
    cik_str: 1865107,
    ticker: "AKA",
    company_name: "A.K.A. BRANDS HOLDING CORP.",
  },
  {
    cik_str: 1851909,
    ticker: "CDAQ",
    company_name: "Compass Digital Acquisition Corp.",
  },
  {
    cik_str: 1702924,
    ticker: "WRAP",
    company_name: "WRAP TECHNOLOGIES, INC.",
  },
  {
    cik_str: 890119,
    ticker: "NIM",
    company_name: "NUVEEN SELECT MATURITIES MUNICIPAL FUND",
  },
  {
    cik_str: 1449794,
    ticker: "EMYB",
    company_name: "Embassy Bancorp, Inc.",
  },
  {
    cik_str: 1843988,
    ticker: "TWOA",
    company_name: "two",
  },
  {
    cik_str: 1173643,
    ticker: "TRX",
    company_name: "TRX GOLD Corp",
  },
  {
    cik_str: 1157762,
    ticker: "CAAS",
    company_name: "CHINA AUTOMOTIVE SYSTEMS INC",
  },
  {
    cik_str: 1055726,
    ticker: "INO",
    company_name: "INOVIO PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1847355,
    ticker: "TGAA",
    company_name: "Target Global Acquisition I Corp.",
  },
  {
    cik_str: 928054,
    ticker: "FTK",
    company_name: "FLOTEK INDUSTRIES INC/CN/",
  },
  {
    cik_str: 1904501,
    ticker: "ZTEK",
    company_name: "Zentek Ltd.",
  },
  {
    cik_str: 1865248,
    ticker: "CMCA",
    company_name: "Capitalworks Emerging Markets Acquisition Corp",
  },
  {
    cik_str: 1435508,
    ticker: "FSFG",
    company_name: "First Savings Financial Group, Inc.",
  },
  {
    cik_str: 1937737,
    ticker: "MLEC",
    company_name: "Moolec Science SA",
  },
  {
    cik_str: 882300,
    ticker: "SBI",
    company_name: "WESTERN ASSET INTERMEDIATE MUNI FUND INC.",
  },
  {
    cik_str: 1485003,
    ticker: "CARM",
    company_name: "Carisma Therapeutics Inc.",
  },
  {
    cik_str: 1937987,
    ticker: "FBYD",
    company_name: "Falcon's Beyond Global, Inc.",
  },
  {
    cik_str: 1313275,
    ticker: "BCOV",
    company_name: "BRIGHTCOVE INC",
  },
  {
    cik_str: 1848437,
    ticker: "CITE",
    company_name: "Cartica Acquisition Corp",
  },
  {
    cik_str: 1753368,
    ticker: "SANG",
    company_name: "Sangoma Technologies Corp",
  },
  {
    cik_str: 1838293,
    ticker: "CHAA",
    company_name: "Catcha Investment Corp",
  },
  {
    cik_str: 47307,
    ticker: "CRAWA",
    company_name: "CRAWFORD UNITED Corp",
  },
  {
    cik_str: 1875496,
    ticker: "YGF",
    company_name: "YanGuFang International Group Co., Ltd",
  },
  {
    cik_str: 1805651,
    ticker: "MKTW",
    company_name: "MARKETWISE, INC.",
  },
  {
    cik_str: 1842566,
    ticker: "BYTS",
    company_name: "BYTE Acquisition Corp.",
  },
  {
    cik_str: 1165002,
    ticker: "WHG",
    company_name: "WESTWOOD HOLDINGS GROUP INC",
  },
  {
    cik_str: 1509470,
    ticker: "SSSS",
    company_name: "SURO CAPITAL CORP.",
  },
  {
    cik_str: 1620737,
    ticker: "OGI",
    company_name: "ORGANIGRAM HOLDINGS INC.",
  },
  {
    cik_str: 1070680,
    ticker: "CFBK",
    company_name: "CF BANKSHARES INC.",
  },
  {
    cik_str: 1742927,
    ticker: "RVPH",
    company_name: "REVIVA PHARMACEUTICALS HOLDINGS, INC.",
  },
  {
    cik_str: 6207,
    ticker: "AXR",
    company_name: "AMREP CORP.",
  },
  {
    cik_str: 779336,
    ticker: "IAF",
    company_name: "ABRDN AUSTRALIA EQUITY FUND, INC.",
  },
  {
    cik_str: 1780531,
    ticker: "OCFT",
    company_name: "ONECONNECT FINANCIAL TECHNOLOGY CO., LTD.",
  },
  {
    cik_str: 880417,
    ticker: "CSBB",
    company_name: "CSB Bancorp, Inc.",
  },
  {
    cik_str: 1845149,
    ticker: "CBRG",
    company_name: "Chain Bridge I",
  },
  {
    cik_str: 1141688,
    ticker: "LARK",
    company_name: "LANDMARK BANCORP INC",
  },
  {
    cik_str: 1538716,
    ticker: "OPRT",
    company_name: "Oportun Financial Corp",
  },
  {
    cik_str: 875582,
    ticker: "NTIC",
    company_name: "NORTHERN TECHNOLOGIES INTERNATIONAL CORP",
  },
  {
    cik_str: 1785530,
    ticker: "HOWL",
    company_name: "Werewolf Therapeutics, Inc.",
  },
  {
    cik_str: 1401040,
    ticker: "DMAC",
    company_name: "DiaMedica Therapeutics Inc.",
  },
  {
    cik_str: 1477845,
    ticker: "ANVS",
    company_name: "Annovis Bio, Inc.",
  },
  {
    cik_str: 1857803,
    ticker: "DPCS",
    company_name: "DP Cap Acquisition Corp I",
  },
  {
    cik_str: 1396033,
    ticker: "LL",
    company_name: "LL Flooring Holdings, Inc.",
  },
  {
    cik_str: 880641,
    ticker: "EFSI",
    company_name: "EAGLE FINANCIAL SERVICES INC",
  },
  {
    cik_str: 1962845,
    ticker: "PXDT",
    company_name: "PIXIE DUST TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1516899,
    ticker: "YTRA",
    company_name: "Yatra Online, Inc.",
  },
  {
    cik_str: 1649989,
    ticker: "OTLK",
    company_name: "Outlook Therapeutics, Inc.",
  },
  {
    cik_str: 1834755,
    ticker: "SLAC",
    company_name: "Social Leverage Acquisition Corp I",
  },
  {
    cik_str: 1865200,
    ticker: "PORT",
    company_name: "Southport Acquisition Corp",
  },
  {
    cik_str: 1831006,
    ticker: "BLUA",
    company_name: "BlueRiver Acquisition Corp.",
  },
  {
    cik_str: 882071,
    ticker: "PFO",
    company_name: "Flaherty & Crumrine PREFERRED & INCOME OPPORTUNITY FUND INC",
  },
  {
    cik_str: 1721741,
    ticker: "LAZY",
    company_name: "Lazydays Holdings, Inc.",
  },
  {
    cik_str: 1841675,
    ticker: "ARBK",
    company_name: "Argo Blockchain Plc",
  },
  {
    cik_str: 1474903,
    ticker: "BGSF",
    company_name: "BGSF, INC.",
  },
  {
    cik_str: 1843973,
    ticker: "EGGF",
    company_name: "EG Acquisition Corp.",
  },
  {
    cik_str: 811922,
    ticker: "MGF",
    company_name: "MFS GOVERNMENT MARKETS INCOME TRUST",
  },
  {
    cik_str: 921183,
    ticker: "HMNF",
    company_name: "HMN FINANCIAL INC",
  },
  {
    cik_str: 1895249,
    ticker: "MCAC",
    company_name: "Monterey Capital Acquisition Corp",
  },
  {
    cik_str: 804563,
    ticker: "BMBN",
    company_name: "BENCHMARK BANKSHARES INC",
  },
  {
    cik_str: 1075736,
    ticker: "CXDO",
    company_name: "Crexendo, Inc.",
  },
  {
    cik_str: 813623,
    ticker: "SWZ",
    company_name: "SWISS HELVETIA FUND, INC.",
  },
  {
    cik_str: 943535,
    ticker: "WHEN",
    company_name: "WORLD HEALTH ENERGY HOLDINGS, INC.",
  },
  {
    cik_str: 1716951,
    ticker: "OCCI",
    company_name: "OFS Credit Company, Inc.",
  },
  {
    cik_str: 1580864,
    ticker: "VRM",
    company_name: "Vroom, Inc.",
  },
  {
    cik_str: 1875493,
    ticker: "CSLM",
    company_name: "CSLM ACQUISITION CORP.",
  },
  {
    cik_str: 1769759,
    ticker: "MGRM",
    company_name: "MONOGRAM ORTHOPAEDICS INC",
  },
  {
    cik_str: 1909747,
    ticker: "JUSHF",
    company_name: "Jushi Holdings Inc.",
  },
  {
    cik_str: 704440,
    ticker: "KRMD",
    company_name: "KORU Medical Systems, Inc.",
  },
  {
    cik_str: 1835022,
    ticker: "COYA",
    company_name: "Coya Therapeutics, Inc.",
  },
  {
    cik_str: 1843993,
    ticker: "THCP",
    company_name: "Thunder Bridge Capital Partners IV, Inc.",
  },
  {
    cik_str: 1386570,
    ticker: "CDXC",
    company_name: "ChromaDex Corp.",
  },
  {
    cik_str: 1787414,
    ticker: "BSBK",
    company_name: "Bogota Financial Corp.",
  },
  {
    cik_str: 1829322,
    ticker: "SZZL",
    company_name: "Sizzle Acquisition Corp.",
  },
  {
    cik_str: 1560672,
    ticker: "EARN",
    company_name: "Ellington Residential Mortgage REIT",
  },
  {
    cik_str: 1512228,
    ticker: "NB",
    company_name: "NIOCORP DEVELOPMENTS LTD",
  },
  {
    cik_str: 101984,
    ticker: "UEIC",
    company_name: "UNIVERSAL ELECTRONICS INC",
  },
  {
    cik_str: 1590418,
    ticker: "FCUV",
    company_name: "FOCUS UNIVERSAL INC.",
  },
  {
    cik_str: 1847440,
    ticker: "MITA",
    company_name: "Coliseum Acquisition Corp.",
  },
  {
    cik_str: 1808665,
    ticker: "ASRT",
    company_name: "Assertio Holdings, Inc.",
  },
  {
    cik_str: 72205,
    ticker: "NOBH",
    company_name: "NOBILITY HOMES INC",
  },
  {
    cik_str: 1510593,
    ticker: "XNET",
    company_name: "Xunlei Ltd",
  },
  {
    cik_str: 1844450,
    ticker: "ELVA",
    company_name: "Electrovaya Inc.",
  },
  {
    cik_str: 767405,
    ticker: "SBFG",
    company_name: "SB FINANCIAL GROUP, INC.",
  },
  {
    cik_str: 1578453,
    ticker: "DLNG",
    company_name: "Dynagas LNG Partners LP",
  },
  {
    cik_str: 1734520,
    ticker: "ALYA",
    company_name: "Alithya Group inc",
  },
  {
    cik_str: 72444,
    ticker: "VXRT",
    company_name: "Vaxart, Inc.",
  },
  {
    cik_str: 1794276,
    ticker: "YCQH",
    company_name: "YCQH Agricultural Technology Co. Ltd",
  },
  {
    cik_str: 845379,
    ticker: "CHN",
    company_name: "CHINA FUND INC",
  },
  {
    cik_str: 1643953,
    ticker: "PRPL",
    company_name: "Purple Innovation, Inc.",
  },
  {
    cik_str: 831378,
    ticker: "LVPA",
    company_name: "LVPAI GROUP Ltd",
  },
  {
    cik_str: 355379,
    ticker: "MDWT",
    company_name: "MIDWEST HOLDING INC.",
  },
  {
    cik_str: 1133416,
    ticker: "GALT",
    company_name: "GALECTIN THERAPEUTICS INC",
  },
  {
    cik_str: 919864,
    ticker: "FNWD",
    company_name: "Finward Bancorp",
  },
  {
    cik_str: 1799191,
    ticker: "TOI",
    company_name: "Oncology Institute, Inc.",
  },
  {
    cik_str: 1857855,
    ticker: "FNVT",
    company_name: "Finnovate Acquisition Corp.",
  },
  {
    cik_str: 1705012,
    ticker: "FAT",
    company_name: "Fat Brands, Inc",
  },
  {
    cik_str: 1785493,
    ticker: "PXPC",
    company_name: "Phoenix Plus Corp.",
  },
  {
    cik_str: 1462418,
    ticker: "ASPS",
    company_name: "ALTISOURCE PORTFOLIO SOLUTIONS S.A.",
  },
  {
    cik_str: 1835579,
    ticker: "IKNA",
    company_name: "Ikena Oncology, Inc.",
  },
  {
    cik_str: 1907909,
    ticker: "VOXR",
    company_name: "VOX ROYALTY CORP.",
  },
  {
    cik_str: 849145,
    ticker: "HGBL",
    company_name: "Heritage Global Inc.",
  },
  {
    cik_str: 1129928,
    ticker: "ONCY",
    company_name: "ONCOLYTICS BIOTECH INC",
  },
  {
    cik_str: 1378701,
    ticker: "GDL",
    company_name: "GDL FUND",
  },
  {
    cik_str: 1134115,
    ticker: "THM",
    company_name: "INTERNATIONAL TOWER HILL MINES LTD",
  },
  {
    cik_str: 1491419,
    ticker: "LVO",
    company_name: "LiveOne, Inc.",
  },
  {
    cik_str: 1872529,
    ticker: "MDXH",
    company_name: "MDxHealth SA",
  },
  {
    cik_str: 1892922,
    ticker: "MARX",
    company_name: "Mars Acquisition Corp.",
  },
  {
    cik_str: 1867443,
    ticker: "CNGL",
    company_name: "Canna-Global Acquisition Corp",
  },
  {
    cik_str: 1593984,
    ticker: "MDWD",
    company_name: "MediWound Ltd.",
  },
  {
    cik_str: 1884516,
    ticker: "DTI",
    company_name: "Drilling Tools International Corp",
  },
  {
    cik_str: 1541119,
    ticker: "SFBC",
    company_name: "Sound Financial Bancorp, Inc.",
  },
  {
    cik_str: 1070732,
    ticker: "EVF",
    company_name: "EATON VANCE SENIOR INCOME TRUST",
  },
  {
    cik_str: 1937891,
    ticker: "ATMV",
    company_name: "AlphaVest Acquisition Corp.",
  },
  {
    cik_str: 1841125,
    ticker: "GAMC",
    company_name: "Golden Arrow Merger Corp.",
  },
  {
    cik_str: 1847345,
    ticker: "PWUP",
    company_name: "PowerUp Acquisition Corp.",
  },
  {
    cik_str: 908187,
    ticker: "PCM",
    company_name: "PCM FUND, INC.",
  },
  {
    cik_str: 1828748,
    ticker: "ASFH",
    company_name: "ASIAFIN HOLDINGS CORP.",
  },
  {
    cik_str: 1808997,
    ticker: "AOUT",
    company_name: "American Outdoor Brands, Inc.",
  },
  {
    cik_str: 897419,
    ticker: "NMT",
    company_name: "NUVEEN MASSACHUSETTS QUALITY MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 1746967,
    ticker: "RMI",
    company_name: "RiverNorth Opportunistic Municipal Income Fund, Inc.",
  },
  {
    cik_str: 1592057,
    ticker: "EVA",
    company_name: "Enviva Inc.",
  },
  {
    cik_str: 1851484,
    ticker: "TENK",
    company_name: "TenX Keane Acquisition",
  },
  {
    cik_str: 1539190,
    ticker: "SPPP",
    company_name: "SPROTT PHYSICAL PLATINUM & PALLADIUM TRUST",
  },
  {
    cik_str: 1868269,
    ticker: "LATG",
    company_name: "Chenghe Acquisition I Co.",
  },
  {
    cik_str: 39092,
    ticker: "FRD",
    company_name: "FRIEDMAN INDUSTRIES INC",
  },
  {
    cik_str: 1006837,
    ticker: "VATE",
    company_name: "INNOVATE Corp.",
  },
  {
    cik_str: 1889106,
    ticker: "ATMC",
    company_name: "ALPHATIME ACQUISITION CORP",
  },
  {
    cik_str: 1585855,
    ticker: "GGZ",
    company_name: "Gabelli Global Small & Mid Cap Value Trust",
  },
  {
    cik_str: 1823406,
    ticker: "AFBI",
    company_name: "Affinity Bancshares, Inc.",
  },
  {
    cik_str: 1425287,
    ticker: "WKHS",
    company_name: "Workhorse Group Inc.",
  },
  {
    cik_str: 750558,
    ticker: "QNBC",
    company_name: "QNB CORP",
  },
  {
    cik_str: 1459417,
    ticker: "TWOU",
    company_name: "2U, Inc.",
  },
  {
    cik_str: 1672909,
    ticker: "CPHC",
    company_name: "Canterbury Park Holding Corp",
  },
  {
    cik_str: 1175151,
    ticker: "CTSO",
    company_name: "Cytosorbents Corp",
  },
  {
    cik_str: 1472215,
    ticker: "JLS",
    company_name: "Nuveen Mortgage & Income Fund/MA/",
  },
  {
    cik_str: 1821606,
    ticker: "PMGM",
    company_name: "Priveterra Acquisition Corp. II",
  },
  {
    cik_str: 846596,
    ticker: "KSM",
    company_name: "DWS STRATEGIC MUNICIPAL INCOME TRUST",
  },
  {
    cik_str: 1372299,
    ticker: "OCGN",
    company_name: "Ocugen, Inc.",
  },
  {
    cik_str: 1021917,
    ticker: "AWCA",
    company_name: "Awaysis Capital, Inc.",
  },
  {
    cik_str: 1445831,
    ticker: "NPFC",
    company_name: "Newpoint Financial Corp",
  },
  {
    cik_str: 1007587,
    ticker: "KVHI",
    company_name: "KVH INDUSTRIES INC DE",
  },
  {
    cik_str: 1641229,
    ticker: "FFMGF",
    company_name: "First Mining Gold Corp.",
  },
  {
    cik_str: 1838716,
    ticker: "GNTA",
    company_name: "Genenta Science S.p.A.",
  },
  {
    cik_str: 1505065,
    ticker: "BWAY",
    company_name: "Brainsway Ltd.",
  },
  {
    cik_str: 39020,
    ticker: "FEIM",
    company_name: "FREQUENCY ELECTRONICS INC",
  },
  {
    cik_str: 1501989,
    ticker: "CTMX",
    company_name: "CytomX Therapeutics, Inc.",
  },
  {
    cik_str: 1846235,
    ticker: "IMAQ",
    company_name: "International Media Acquisition Corp.",
  },
  {
    cik_str: 1741257,
    ticker: "BFGX",
    company_name: "BANGFU TECHNOLOGY GROUP CO., LTD.",
  },
  {
    cik_str: 14177,
    ticker: "BRID",
    company_name: "BRIDGFORD FOODS CORP",
  },
  {
    cik_str: 1849475,
    ticker: "NCAC",
    company_name: "Newcourt Acquisition Corp",
  },
  {
    cik_str: 1176334,
    ticker: "MMLP",
    company_name: "MARTIN MIDSTREAM PARTNERS L.P.",
  },
  {
    cik_str: 1605481,
    ticker: "NGLD",
    company_name: "Nevada Canyon Gold Corp.",
  },
  {
    cik_str: 906709,
    ticker: "NKTR",
    company_name: "NEKTAR THERAPEUTICS",
  },
  {
    cik_str: 1844505,
    ticker: "GIA",
    company_name: "GigCapital5, Inc.",
  },
  {
    cik_str: 1085243,
    ticker: "VTSI",
    company_name: "VirTra, Inc",
  },
  {
    cik_str: 832480,
    ticker: "UTGN",
    company_name: "UTG INC",
  },
  {
    cik_str: 1840425,
    ticker: "BLAC",
    company_name: "Bellevue Life Sciences Acquisition Corp.",
  },
  {
    cik_str: 1849548,
    ticker: "ONYX",
    company_name: "Onyx Acquisition Co. I",
  },
  {
    cik_str: 718413,
    ticker: "CMTV",
    company_name: "COMMUNITY BANCORP /VT",
  },
  {
    cik_str: 921114,
    ticker: "ARMP",
    company_name: "Armata Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1825962,
    ticker: "QDRO",
    company_name: "Quadro Acquisition One Corp.",
  },
  {
    cik_str: 1841408,
    ticker: "DAVE",
    company_name: "Dave Inc./DE",
  },
  {
    cik_str: 1973056,
    ticker: "BOWN",
    company_name: "Bowen Acquisition Corp",
  },
  {
    cik_str: 9521,
    ticker: "BCV",
    company_name: "BANCROFT FUND LTD",
  },
  {
    cik_str: 1907223,
    ticker: "RWOD",
    company_name: "Redwoods Acquisition Corp.",
  },
  {
    cik_str: 1934945,
    ticker: "TBMC",
    company_name: "Trailblazer Merger Corp I",
  },
  {
    cik_str: 1888980,
    ticker: "LRE",
    company_name: "LEAD REAL ESTATE CO., LTD",
  },
  {
    cik_str: 1774170,
    ticker: "PWFL",
    company_name: "PowerFleet, Inc.",
  },
  {
    cik_str: 1707502,
    ticker: "SLDB",
    company_name: "Solid Biosciences Inc.",
  },
  {
    cik_str: 1447051,
    ticker: "TBNK",
    company_name: "Territorial Bancorp Inc.",
  },
  {
    cik_str: 1496292,
    ticker: "IHD",
    company_name: "Voya Emerging Markets High Dividend Equity Fund",
  },
  {
    cik_str: 1838831,
    ticker: "DISA",
    company_name: "Disruptive Acquisition Corp I",
  },
  {
    cik_str: 1865506,
    ticker: "ESAC",
    company_name: "ESGEN Acquisition Corp",
  },
  {
    cik_str: 1895144,
    ticker: "GODN",
    company_name: "Golden Star Acquisition Corp",
  },
  {
    cik_str: 1503802,
    ticker: "KPTI",
    company_name: "Karyopharm Therapeutics Inc.",
  },
  {
    cik_str: 1024672,
    ticker: "ELTK",
    company_name: "ELTEK LTD",
  },
  {
    cik_str: 1951276,
    ticker: "SRBK",
    company_name: "SR Bancorp, Inc.",
  },
  {
    cik_str: 1941131,
    ticker: "TORO",
    company_name: "TORO CORP.",
  },
  {
    cik_str: 1790177,
    ticker: "RFM",
    company_name: "RiverNorth Flexible Municipal Income Fund, Inc.",
  },
  {
    cik_str: 948368,
    ticker: "PSBQ",
    company_name: "PSB HOLDINGS INC /WI/",
  },
  {
    cik_str: 1855693,
    ticker: "FICV",
    company_name: "Frontier Investment Corp",
  },
  {
    cik_str: 1437226,
    ticker: "MHH",
    company_name: "Mastech Digital, Inc.",
  },
  {
    cik_str: 1117171,
    ticker: "CBAT",
    company_name: "CBAK Energy Technology, Inc.",
  },
  {
    cik_str: 1877557,
    ticker: "WEL",
    company_name: "Integrated Wellness Acquisition Corp",
  },
  {
    cik_str: 1391127,
    ticker: "EGIO",
    company_name: "Edgio, Inc.",
  },
  {
    cik_str: 1832136,
    ticker: "OSI",
    company_name: "Osiris Acquisition Corp.",
  },
  {
    cik_str: 1921865,
    ticker: "ASPI",
    company_name: "ASP Isotopes Inc.",
  },
  {
    cik_str: 1597095,
    ticker: "TOUR",
    company_name: "Tuniu Corp",
  },
  {
    cik_str: 1946021,
    ticker: "HSPO",
    company_name: "Horizon Space Acquisition I Corp.",
  },
  {
    cik_str: 1865494,
    ticker: "IOBT",
    company_name: "IO Biotech, Inc.",
  },
  {
    cik_str: 1720893,
    ticker: "BTAI",
    company_name: "BioXcel Therapeutics, Inc.",
  },
  {
    cik_str: 1488039,
    ticker: "ATOS",
    company_name: "ATOSSA THERAPEUTICS, INC.",
  },
  {
    cik_str: 1408443,
    ticker: "MIST",
    company_name: "Milestone Pharmaceuticals Inc.",
  },
  {
    cik_str: 1842939,
    ticker: "CTCX",
    company_name: "Carmell Corp",
  },
  {
    cik_str: 1488917,
    ticker: "ELMD",
    company_name: "Electromed, Inc.",
  },
  {
    cik_str: 1621832,
    ticker: "AQMS",
    company_name: "Aqua Metals, Inc.",
  },
  {
    cik_str: 830271,
    ticker: "NMI",
    company_name: "NUVEEN MUNICIPAL INCOME FUND INC",
  },
  {
    cik_str: 1826135,
    ticker: "MHHC",
    company_name: "MHHC Enterprises Inc.",
  },
  {
    cik_str: 1889450,
    ticker: "FTII",
    company_name: "FutureTech II Acquisition Corp.",
  },
  {
    cik_str: 1930510,
    ticker: "VCIG",
    company_name: "VCI Global Ltd",
  },
  {
    cik_str: 1388126,
    ticker: "HNW",
    company_name: "Pioneer Diversified High Income Fund, Inc.",
  },
  {
    cik_str: 1822366,
    ticker: "ALTU",
    company_name: "Altitude Acquisition Corp.",
  },
  {
    cik_str: 1828937,
    ticker: "FOA",
    company_name: "Finance of America Companies Inc.",
  },
  {
    cik_str: 1847874,
    ticker: "BEEP",
    company_name: "Mobile Infrastructure Corp",
  },
  {
    cik_str: 1008654,
    ticker: "TUP",
    company_name: "TUPPERWARE BRANDS CORP",
  },
  {
    cik_str: 37472,
    ticker: "FLXS",
    company_name: "FLEXSTEEL INDUSTRIES INC",
  },
  {
    cik_str: 1176309,
    ticker: "ORMP",
    company_name: "ORAMED PHARMACEUTICALS INC.",
  },
  {
    cik_str: 1720446,
    ticker: "ZEPP",
    company_name: "Zepp Health Corp",
  },
  {
    cik_str: 1398805,
    ticker: "BEEM",
    company_name: "Beam Global",
  },
  {
    cik_str: 1506488,
    ticker: "NXG",
    company_name: "NXG NextGen Infrastructure Income Fund",
  },
  {
    cik_str: 1532383,
    ticker: "VNJA",
    company_name: "VANJIA CORP",
  },
  {
    cik_str: 1851657,
    ticker: "VAXX",
    company_name: "Vaxxinity, Inc.",
  },
  {
    cik_str: 1831270,
    ticker: "BITE",
    company_name: "Bite Acquisition Corp.",
  },
  {
    cik_str: 1070296,
    ticker: "FCAP",
    company_name: "FIRST CAPITAL INC",
  },
  {
    cik_str: 1843370,
    ticker: "BLEU",
    company_name: "bleuacacia ltd",
  },
  {
    cik_str: 737875,
    ticker: "FKYS",
    company_name: "FIRST KEYSTONE CORP",
  },
  {
    cik_str: 1285650,
    ticker: "CGO",
    company_name: "CALAMOS GLOBAL TOTAL RETURN FUND",
  },
  {
    cik_str: 16859,
    ticker: "SRL",
    company_name: "Scully Royalty Ltd.",
  },
  {
    cik_str: 356037,
    ticker: "CSPI",
    company_name: "CSP INC /MA/",
  },
  {
    cik_str: 1869601,
    ticker: "EMCG",
    company_name: "Embrace Change Acquisition Corp.",
  },
  {
    cik_str: 1888734,
    ticker: "GLLI",
    company_name: "GLOBALINK INVESTMENT INC.",
  },
  {
    cik_str: 1437925,
    ticker: "GMGI",
    company_name: "Golden Matrix Group, Inc.",
  },
  {
    cik_str: 1947244,
    ticker: "USGO",
    company_name: "U.S. GoldMining Inc.",
  },
  {
    cik_str: 1490596,
    ticker: "GVXXF",
    company_name: "GoviEx Uranium Inc.",
  },
  {
    cik_str: 1859690,
    ticker: "ARQQ",
    company_name: "Arqit Quantum Inc.",
  },
  {
    cik_str: 1468639,
    ticker: "VICP",
    company_name: "Vicapsys Life Sciences, Inc.",
  },
  {
    cik_str: 1482554,
    ticker: "HFUS",
    company_name: "Hartford Great Health Corp.",
  },
  {
    cik_str: 1883984,
    ticker: "CLIN",
    company_name: "Clean Earth Acquisitions Corp.",
  },
  {
    cik_str: 933034,
    ticker: "STRT",
    company_name: "STRATTEC SECURITY CORP",
  },
  {
    cik_str: 866643,
    ticker: "JDVB",
    company_name: "JD BANCSHARES INC",
  },
  {
    cik_str: 1279014,
    ticker: "ERH",
    company_name: "ALLSPRING UTILITIES & HIGH INCOME FUND",
  },
  {
    cik_str: 1775898,
    ticker: "UCL",
    company_name: "uCloudlink Group Inc.",
  },
  {
    cik_str: 1855168,
    ticker: "WRAC",
    company_name: "Williams Rowland Acquisition Corp.",
  },
  {
    cik_str: 1556263,
    ticker: "SYRS",
    company_name: "Syros Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1534154,
    ticker: "AUID",
    company_name: "authID Inc.",
  },
  {
    cik_str: 1528811,
    ticker: "VGI",
    company_name: "Virtus Global Multi-Sector Income Fund",
  },
  {
    cik_str: 1438893,
    ticker: "GNT",
    company_name: "GAMCO Natural Resources, Gold & Income Trust",
  },
  {
    cik_str: 1831964,
    ticker: "NRAC",
    company_name: "NORTHERN REVIVAL ACQUISITION Corp",
  },
  {
    cik_str: 1844817,
    ticker: "AACI",
    company_name: "Armada Acquisition Corp. I",
  },
  {
    cik_str: 1117480,
    ticker: "CMRX",
    company_name: "CHIMERIX INC",
  },
  {
    cik_str: 808439,
    ticker: "TATT",
    company_name: "TAT TECHNOLOGIES LTD",
  },
  {
    cik_str: 1408201,
    ticker: "TPZ",
    company_name: "TORTOISE POWER & ENERGY INFRASTRUCTURE FUND INC",
  },
  {
    cik_str: 806172,
    ticker: "SOTK",
    company_name: "SONO TEK CORP",
  },
  {
    cik_str: 95552,
    ticker: "SUP",
    company_name: "SUPERIOR INDUSTRIES INTERNATIONAL INC",
  },
  {
    cik_str: 1838821,
    ticker: "ARYD",
    company_name: "ARYA Sciences Acquisition Corp IV",
  },
  {
    cik_str: 1740279,
    ticker: "INAB",
    company_name: "IN8BIO, INC.",
  },
  {
    cik_str: 1584549,
    ticker: "VFF",
    company_name: "Village Farms International, Inc.",
  },
  {
    cik_str: 1934642,
    ticker: "MDBH",
    company_name: "MDB Capital Holdings, LLC",
  },
  {
    cik_str: 1832765,
    ticker: "EAC",
    company_name: "Edify Acquisition Corp.",
  },
  {
    cik_str: 1099668,
    ticker: "FOTB",
    company_name: "FIRST OTTAWA BANCSHARES, INC",
  },
  {
    cik_str: 1662991,
    ticker: "SEZL",
    company_name: "Sezzle Inc.",
  },
  {
    cik_str: 849146,
    ticker: "LFVN",
    company_name: "Lifevantage Corp",
  },
  {
    cik_str: 54187,
    ticker: "MAYS",
    company_name: "MAYS J W INC",
  },
  {
    cik_str: 1860514,
    ticker: "USCT",
    company_name: "Roth CH Acquisition Co.",
  },
  {
    cik_str: 1879851,
    ticker: "TMTC",
    company_name: "TMT Acquisition Corp.",
  },
  {
    cik_str: 1922331,
    ticker: "GLST",
    company_name: "Global Star Acquisition Inc.",
  },
  {
    cik_str: 1620463,
    ticker: "ATHA",
    company_name: "Athira Pharma, Inc.",
  },
  {
    cik_str: 1501756,
    ticker: "ADVM",
    company_name: "Adverum Biotechnologies, Inc.",
  },
  {
    cik_str: 1500305,
    ticker: "SPGX",
    company_name: "Sustainable Projects Group Inc.",
  },
  {
    cik_str: 740971,
    ticker: "OPOF",
    company_name: "OLD POINT FINANCIAL CORP",
  },
  {
    cik_str: 1823584,
    ticker: "AENT",
    company_name: "ALLIANCE ENTERTAINMENT HOLDING CORP",
  },
  {
    cik_str: 96536,
    ticker: "TAYD",
    company_name: "TAYLOR DEVICES INC",
  },
  {
    cik_str: 1741830,
    ticker: "KRON",
    company_name: "Kronos Bio, Inc.",
  },
  {
    cik_str: 1844981,
    ticker: "APAC",
    company_name: "StoneBridge Acquisition Corp.",
  },
  {
    cik_str: 1800392,
    ticker: "MLGO",
    company_name: "MicroAlgo Inc.",
  },
  {
    cik_str: 1170311,
    ticker: "PNI",
    company_name: "PIMCO NEW YORK MUNICIPAL INCOME FUND II",
  },
  {
    cik_str: 1527762,
    ticker: "MFH",
    company_name: "Mercurity Fintech Holding Inc.",
  },
  {
    cik_str: 1845123,
    ticker: "IVCP",
    company_name: "Swiftmerge Acquisition Corp.",
  },
  {
    cik_str: 1780201,
    ticker: "LVLU",
    company_name: "Lulu's Fashion Lounge Holdings, Inc.",
  },
  {
    cik_str: 1318025,
    ticker: "PGP",
    company_name: "PIMCO Global StocksPLUS & Income Fund",
  },
  {
    cik_str: 1010470,
    ticker: "PROV",
    company_name: "PROVIDENT FINANCIAL HOLDINGS INC",
  },
  {
    cik_str: 908311,
    ticker: "CMCT",
    company_name: "Creative Media & Community Trust Corp",
  },
  {
    cik_str: 1515156,
    ticker: "ADES",
    company_name: "Advanced Emissions Solutions, Inc.",
  },
  {
    cik_str: 1648365,
    ticker: "TMNA",
    company_name: "AGRI-FINTECH HOLDINGS, INC.",
  },
  {
    cik_str: 93676,
    ticker: "SCX",
    company_name: "STARRETT L S CO",
  },
  {
    cik_str: 1845459,
    ticker: "NKGN",
    company_name: "NKGen Biotech, Inc.",
  },
  {
    cik_str: 809844,
    ticker: "CMU",
    company_name: "MFS HIGH YIELD MUNICIPAL TRUST",
  },
  {
    cik_str: 1851612,
    ticker: "BHAC",
    company_name: "Focus Impact BH3 Acquisition Co",
  },
  {
    cik_str: 1230058,
    ticker: "KANP",
    company_name: "KAANAPALI LAND LLC",
  },
  {
    cik_str: 1398972,
    ticker: "ERDCF",
    company_name: "Erdene Resource Development Corp",
  },
  {
    cik_str: 1633438,
    ticker: "AZREF",
    company_name: "Azure Power Global Ltd",
  },
  {
    cik_str: 1001233,
    ticker: "SGMO",
    company_name: "SANGAMO THERAPEUTICS, INC",
  },
  {
    cik_str: 728385,
    ticker: "MEEC",
    company_name: "Midwest Energy Emissions Corp.",
  },
  {
    cik_str: 1437479,
    ticker: "ENBP",
    company_name: "ENB Financial Corp",
  },
  {
    cik_str: 1890671,
    ticker: "DUET",
    company_name: "DUET Acquisition Corp.",
  },
  {
    cik_str: 899394,
    ticker: "HRBR",
    company_name: "HARBOR DIVERSIFIED, INC.",
  },
  {
    cik_str: 1563880,
    ticker: "TRVI",
    company_name: "Trevi Therapeutics, Inc.",
  },
  {
    cik_str: 1386301,
    ticker: "RSSS",
    company_name: "Research Solutions, Inc.",
  },
  {
    cik_str: 1675033,
    ticker: "GECC",
    company_name: "Great Elm Capital Corp.",
  },
  {
    cik_str: 1820175,
    ticker: "OCAX",
    company_name: "OCA Acquisition Corp.",
  },
  {
    cik_str: 1962738,
    ticker: "CASI",
    company_name: "CASI Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1772720,
    ticker: "SPRU",
    company_name: "SPRUCE POWER HOLDING CORP",
  },
  {
    cik_str: 1672886,
    ticker: "ZHYBF",
    company_name: "Zhong Yuan Bio-Technology Holdings Ltd",
  },
  {
    cik_str: 1045742,
    ticker: "LIVE",
    company_name: "LIVE VENTURES Inc",
  },
  {
    cik_str: 1865120,
    ticker: "BRAC",
    company_name: "Broad Capital Acquisition Corp",
  },
  {
    cik_str: 1058623,
    ticker: "CMLS",
    company_name: "CUMULUS MEDIA INC",
  },
  {
    cik_str: 1874218,
    ticker: "RCAC",
    company_name: "Revelstone Capital Acquisition Corp.",
  },
  {
    cik_str: 1851048,
    ticker: "CYRB",
    company_name: "Cyber App Solutions Corp.",
  },
  {
    cik_str: 1043186,
    ticker: "SLNG",
    company_name: "Stabilis Solutions, Inc.",
  },
  {
    cik_str: 720154,
    ticker: "NOTV",
    company_name: "Inotiv, Inc.",
  },
  {
    cik_str: 1282957,
    ticker: "GLU",
    company_name: "GABELLI GLOBAL UTILITY & INCOME TRUST",
  },
  {
    cik_str: 1858007,
    ticker: "GDST",
    company_name: "Goldenstone Acquisition Ltd.",
  },
  {
    cik_str: 720500,
    ticker: "ASYS",
    company_name: "AMTECH SYSTEMS INC",
  },
  {
    cik_str: 1855485,
    ticker: "CLDI",
    company_name: "Calidi Biotherapeutics, Inc.",
  },
  {
    cik_str: 1708688,
    ticker: "IFRX",
    company_name: "InflaRx N.V.",
  },
  {
    cik_str: 885732,
    ticker: "NXC",
    company_name: "NUVEEN CALIFORNIA SELECT TAX FREE INCOME PORTFOLIO",
  },
  {
    cik_str: 1490349,
    ticker: "PFX",
    company_name: "PhenixFIN Corp",
  },
  {
    cik_str: 868278,
    ticker: "PRPH",
    company_name: "ProPhase Labs, Inc.",
  },
  {
    cik_str: 1836100,
    ticker: "PUCK",
    company_name: "Goal Acquisitions Corp.",
  },
  {
    cik_str: 1869673,
    ticker: "BACA",
    company_name: "Berenson Acquisition Corp. I",
  },
  {
    cik_str: 1615165,
    ticker: "VERI",
    company_name: "Veritone, Inc.",
  },
  {
    cik_str: 1296484,
    ticker: "TOPS",
    company_name: "TOP SHIPS INC.",
  },
  {
    cik_str: 876717,
    ticker: "FCO",
    company_name: "ABRDN GLOBAL INCOME FUND, INC.",
  },
  {
    cik_str: 1768446,
    ticker: "ELYM",
    company_name: "Eliem Therapeutics, Inc.",
  },
  {
    cik_str: 1609065,
    ticker: "PBHC",
    company_name: "Pathfinder Bancorp, Inc.",
  },
  {
    cik_str: 1226616,
    ticker: "MNOV",
    company_name: "MEDICINOVA INC",
  },
  {
    cik_str: 924383,
    ticker: "GNSS",
    company_name: "Genasys Inc.",
  },
  {
    cik_str: 1956055,
    ticker: "BUJA",
    company_name: "Bukit Jalil Global Acquisition 1 Ltd.",
  },
  {
    cik_str: 1839133,
    ticker: "IRME",
    company_name: "IR-Med, Inc.",
  },
  {
    cik_str: 1852016,
    ticker: "AEAE",
    company_name: "AltEnergy Acquisition Corp",
  },
  {
    cik_str: 1584547,
    ticker: "GP",
    company_name: "GREENPOWER MOTOR Co INC.",
  },
  {
    cik_str: 1627469,
    ticker: "PTZH",
    company_name: "Photozou Holdings, Inc.",
  },
  {
    cik_str: 1785680,
    ticker: "HYW",
    company_name: "Hywin Holdings Ltd.",
  },
  {
    cik_str: 1539850,
    ticker: "STCB",
    company_name: "Starco Brands, Inc.",
  },
  {
    cik_str: 719135,
    ticker: "APYX",
    company_name: "Apyx Medical Corp",
  },
  {
    cik_str: 1509745,
    ticker: "LPTX",
    company_name: "LEAP THERAPEUTICS, INC.",
  },
  {
    cik_str: 1043000,
    ticker: "SNDA",
    company_name: "SONIDA SENIOR LIVING, INC.",
  },
  {
    cik_str: 1792267,
    ticker: "BNR",
    company_name: "Burning Rock Biotech Ltd",
  },
  {
    cik_str: 1646188,
    ticker: "ONDS",
    company_name: "Ondas Holdings Inc.",
  },
  {
    cik_str: 1936702,
    ticker: "CETU",
    company_name: "Cetus Capital Acquisition Corp.",
  },
  {
    cik_str: 202947,
    ticker: "CPTP",
    company_name: "CAPITAL PROPERTIES INC /RI/",
  },
  {
    cik_str: 828146,
    ticker: "LINK",
    company_name: "INTERLINK ELECTRONICS INC",
  },
  {
    cik_str: 1945422,
    ticker: "OAKU",
    company_name: "Oak Woods Acquisition Corp",
  },
  {
    cik_str: 1876716,
    ticker: "ASCB",
    company_name: "ASPAC II Acquisition Corp.",
  },
  {
    cik_str: 1880151,
    ticker: "LIBY",
    company_name: "Liberty Resources Acquisition Corp.",
  },
  {
    cik_str: 1232582,
    ticker: "AHT",
    company_name: "ASHFORD HOSPITALITY TRUST INC",
  },
  {
    cik_str: 1544227,
    ticker: "TPST",
    company_name: "Tempest Therapeutics, Inc.",
  },
  {
    cik_str: 863894,
    ticker: "VERU",
    company_name: "VERU INC.",
  },
  {
    cik_str: 1782223,
    ticker: "PYXS",
    company_name: "Pyxis Oncology, Inc.",
  },
  {
    cik_str: 1529628,
    ticker: "SND",
    company_name: "Smart Sand, Inc.",
  },
  {
    cik_str: 1833769,
    ticker: "HYPR",
    company_name: "Hyperfine, Inc.",
  },
  {
    cik_str: 1651407,
    ticker: "CKPT",
    company_name: "Checkpoint Therapeutics, Inc.",
  },
  {
    cik_str: 1532286,
    ticker: "NINE",
    company_name: "Nine Energy Service, Inc.",
  },
  {
    cik_str: 1845799,
    ticker: "CULL",
    company_name: "Cullman Bancorp, Inc. /MD/",
  },
  {
    cik_str: 1512717,
    ticker: "THTX",
    company_name: "Theratechnologies Inc.",
  },
  {
    cik_str: 1829280,
    ticker: "FORA",
    company_name: "Forian Inc.",
  },
  {
    cik_str: 1847607,
    ticker: "RFAC",
    company_name: "RF Acquisition Corp.",
  },
  {
    cik_str: 1848821,
    ticker: "GTAC",
    company_name: "Global Technology Acquisition Corp. I",
  },
  {
    cik_str: 1722380,
    ticker: "AIU",
    company_name: "Meta Data Ltd",
  },
  {
    cik_str: 1473086,
    ticker: "OXBC",
    company_name: "Oxford Bank Corp",
  },
  {
    cik_str: 1586454,
    ticker: "PMHG",
    company_name: "Prime Meridian Holding Co",
  },
  {
    cik_str: 1823575,
    ticker: "ZFOX",
    company_name: "ZeroFox Holdings, Inc.",
  },
  {
    cik_str: 894556,
    ticker: "GEVI",
    company_name: "General Enterprise Ventures, Inc.",
  },
  {
    cik_str: 1865697,
    ticker: "GGAAF",
    company_name: "Genesis Growth Tech Acquisition Corp.",
  },
  {
    cik_str: 876378,
    ticker: "ASXC",
    company_name: "ASENSUS SURGICAL, INC.",
  },
  {
    cik_str: 1894951,
    ticker: "GBBK",
    company_name: "Global Blockchain Acquisition Corp.",
  },
  {
    cik_str: 1907730,
    ticker: "YOTA",
    company_name: "Yotta Acquisition Corp",
  },
  {
    cik_str: 879535,
    ticker: "DTF",
    company_name: "DTF TAX-FREE INCOME 2028 TERM FUND INC",
  },
  {
    cik_str: 1682639,
    ticker: "EYEN",
    company_name: "EYENOVIA, INC.",
  },
  {
    cik_str: 866095,
    ticker: "JEQ",
    company_name: "ABRDN JAPAN EQUITY FUND, INC.",
  },
  {
    cik_str: 1440153,
    ticker: "BKUH",
    company_name: "Bakhu Holdings, Corp.",
  },
  {
    cik_str: 1553643,
    ticker: "RLMD",
    company_name: "RELMADA THERAPEUTICS, INC.",
  },
  {
    cik_str: 1823857,
    ticker: "VHAQ",
    company_name: "Viveon Health Acquisition Corp.",
  },
  {
    cik_str: 1936224,
    ticker: "SRFM",
    company_name: "SURF AIR MOBILITY INC.",
  },
  {
    cik_str: 1426506,
    ticker: "SMGI",
    company_name: "SMG Industries Inc.",
  },
  {
    cik_str: 1332551,
    ticker: "ACR",
    company_name: "ACRES Commercial Realty Corp.",
  },
  {
    cik_str: 1626971,
    ticker: "CRVS",
    company_name: "Corvus Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1501103,
    ticker: "EDF",
    company_name: "Virtus Stone Harbor Emerging Markets Income Fund",
  },
  {
    cik_str: 1862463,
    ticker: "INAQ",
    company_name: "Insight Acquisition Corp. /DE",
  },
  {
    cik_str: 1847513,
    ticker: "TRON",
    company_name: "CORNER GROWTH ACQUISITION CORP. 2",
  },
  {
    cik_str: 1852407,
    ticker: "FEXD",
    company_name: "Fintech Ecosystem Development Corp.",
  },
  {
    cik_str: 921299,
    ticker: "FGEN",
    company_name: "FIBROGEN INC",
  },
  {
    cik_str: 1557746,
    ticker: "ACRS",
    company_name: "Aclaris Therapeutics, Inc.",
  },
  {
    cik_str: 728387,
    ticker: "CATX",
    company_name: "Perspective Therapeutics, Inc.",
  },
  {
    cik_str: 1883788,
    ticker: "ATAK",
    company_name: "Aurora Technology Acquisition Corp.",
  },
  {
    cik_str: 95953,
    ticker: "ACNT",
    company_name: "ASCENT INDUSTRIES CO.",
  },
  {
    cik_str: 1400897,
    ticker: "SRV",
    company_name: "NXG Cushing Midstream Energy Fund",
  },
  {
    cik_str: 1799332,
    ticker: "GAN",
    company_name: "GAN Ltd",
  },
  {
    cik_str: 1902314,
    ticker: "MPTI",
    company_name: "M-tron Industries, Inc.",
  },
  {
    cik_str: 1030192,
    ticker: "IDR",
    company_name: "Idaho Strategic Resources, Inc.",
  },
  {
    cik_str: 1360565,
    ticker: "WFCF",
    company_name: "Where Food Comes From, Inc.",
  },
  {
    cik_str: 1392694,
    ticker: "SURG",
    company_name: "SurgePays, Inc.",
  },
  {
    cik_str: 1852973,
    ticker: "OXUS",
    company_name: "Oxus Acquisition Corp.",
  },
  {
    cik_str: 1751783,
    ticker: "RBKB",
    company_name: "Rhinebeck Bancorp, Inc.",
  },
  {
    cik_str: 1849294,
    ticker: "FRLA",
    company_name: "Fortune Rise Acquisition Corp",
  },
  {
    cik_str: 1838000,
    ticker: "SWSS",
    company_name: "Clean Energy Special Situations Corp.",
  },
  {
    cik_str: 811211,
    ticker: "UNIB",
    company_name: "UNIVERSITY BANCORP INC /DE/",
  },
  {
    cik_str: 1339970,
    ticker: "LIFE",
    company_name: "aTYR PHARMA INC",
  },
  {
    cik_str: 1074828,
    ticker: "KNW",
    company_name: "KNOW LABS, INC.",
  },
  {
    cik_str: 1913577,
    ticker: "DECA",
    company_name: "Denali Capital Acquisition Corp.",
  },
  {
    cik_str: 883569,
    ticker: "FOSL",
    company_name: "Fossil Group, Inc.",
  },
  {
    cik_str: 1289636,
    ticker: "PFIE",
    company_name: "PROFIRE ENERGY INC",
  },
  {
    cik_str: 1900679,
    ticker: "TETE",
    company_name: "Technology & Telecommunication Acquisition Corp",
  },
  {
    cik_str: 1878074,
    ticker: "BWAQ",
    company_name: "Blue World Acquisition Corp",
  },
  {
    cik_str: 1481028,
    ticker: "HYSR",
    company_name: "SUNHYDROGEN, INC.",
  },
  {
    cik_str: 1077640,
    ticker: "WMLLF",
    company_name: "Wealth Minerals Ltd.",
  },
  {
    cik_str: 1066684,
    ticker: "TGLO",
    company_name: "THEGLOBE COM INC",
  },
  {
    cik_str: 1658678,
    ticker: "BSEM",
    company_name: "BIOSTEM TECHNOLOGIES",
  },
  {
    cik_str: 1390352,
    ticker: "ORRCF",
    company_name: "OROCO RESOURCE CORP",
  },
  {
    cik_str: 1626745,
    ticker: "FVTI",
    company_name: "Fortune Valley Treasures, Inc.",
  },
  {
    cik_str: 1936255,
    ticker: "FORL",
    company_name: "Four Leaf Acquisition Corp",
  },
  {
    cik_str: 1074692,
    ticker: "CEV",
    company_name: "EATON VANCE CALIFORNIA MUNICIPAL INCOME TRUST",
  },
  {
    cik_str: 1859639,
    ticker: "CZOO",
    company_name: "Cazoo Group Ltd",
  },
  {
    cik_str: 65596,
    ticker: "SIEB",
    company_name: "SIEBERT FINANCIAL CORP",
  },
  {
    cik_str: 1527753,
    ticker: "PSNL",
    company_name: "Personalis, Inc.",
  },
  {
    cik_str: 1179821,
    ticker: "BGI",
    company_name: "BIRKS GROUP INC.",
  },
  {
    cik_str: 1337068,
    ticker: "MGYR",
    company_name: "Magyar Bancorp, Inc.",
  },
  {
    cik_str: 1944885,
    ticker: "APLM",
    company_name: "Apollomics Inc.",
  },
  {
    cik_str: 818677,
    ticker: "SFDL",
    company_name: "SECURITY FEDERAL CORP",
  },
  {
    cik_str: 865400,
    ticker: "GSVRF",
    company_name: "GUANAJUATO SILVER CO LTD",
  },
  {
    cik_str: 1759136,
    ticker: "BHAT",
    company_name: "Blue Hat Interactive Entertainment Technology",
  },
  {
    cik_str: 1514443,
    ticker: "AGSS",
    company_name: "AMERIGUARD SECURITY SERVICES, INC.",
  },
  {
    cik_str: 1683553,
    ticker: "SPRB",
    company_name: "SPRUCE BIOSCIENCES, INC.",
  },
  {
    cik_str: 1141197,
    ticker: "PED",
    company_name: "PEDEVCO CORP",
  },
  {
    cik_str: 1830795,
    ticker: "QFTA",
    company_name: "Quantum FinTech Acquisition Corp",
  },
  {
    cik_str: 1722438,
    ticker: "DOMA",
    company_name: "Doma Holdings, Inc.",
  },
  {
    cik_str: 872912,
    ticker: "DCTH",
    company_name: "DELCATH SYSTEMS, INC.",
  },
  {
    cik_str: 750574,
    ticker: "AUBN",
    company_name: "AUBURN NATIONAL BANCORPORATION, INC",
  },
  {
    cik_str: 1891944,
    ticker: "PMEC",
    company_name: "Primech Holdings Ltd",
  },
  {
    cik_str: 41719,
    ticker: "GLT",
    company_name: "Glatfelter Corp",
  },
  {
    cik_str: 845611,
    ticker: "GCV",
    company_name: "GABELLI CONVERTIBLE & INCOME SECURITIES FUND INC",
  },
  {
    cik_str: 1882464,
    ticker: "MSSA",
    company_name: "Metal Sky Star Acquisition Corp",
  },
  {
    cik_str: 1866547,
    ticker: "GMFI",
    company_name: "Aetherium Acquisition Corp",
  },
  {
    cik_str: 723603,
    ticker: "CULP",
    company_name: "CULP INC",
  },
  {
    cik_str: 1896511,
    ticker: "ZKGCF",
    company_name: "ZKGC New Energy Ltd",
  },
  {
    cik_str: 1844419,
    ticker: "MAQC",
    company_name: "Maquia Capital Acquisition Corp",
  },
  {
    cik_str: 1158172,
    ticker: "SCOR",
    company_name: "COMSCORE, INC.",
  },
  {
    cik_str: 727207,
    ticker: "AXDX",
    company_name: "Accelerate Diagnostics, Inc",
  },
  {
    cik_str: 1720580,
    ticker: "ACET",
    company_name: "Adicet Bio, Inc.",
  },
  {
    cik_str: 1441082,
    ticker: "HLCO",
    company_name: "Healing Co Inc.",
  },
  {
    cik_str: 1783875,
    ticker: "FFNTF",
    company_name: "4Front Ventures Corp.",
  },
  {
    cik_str: 1851182,
    ticker: "FHLT",
    company_name: "Future Health ESG Corp.",
  },
  {
    cik_str: 1701108,
    ticker: "SPRO",
    company_name: "Spero Therapeutics, Inc.",
  },
  {
    cik_str: 927719,
    ticker: "DWNX",
    company_name: "DELHI BANK CORP",
  },
  {
    cik_str: 1842356,
    ticker: "PET",
    company_name: "Wag! Group Co.",
  },
  {
    cik_str: 1496690,
    ticker: "BCRD",
    company_name: "BlueOne Card, Inc.",
  },
  {
    cik_str: 316888,
    ticker: "ASM",
    company_name: "AVINO SILVER & GOLD MINES LTD",
  },
  {
    cik_str: 1017303,
    ticker: "TACT",
    company_name: "TRANSACT TECHNOLOGIES INC",
  },
  {
    cik_str: 1634117,
    ticker: "BNED",
    company_name: "Barnes & Noble Education, Inc.",
  },
  {
    cik_str: 1346830,
    ticker: "CARA",
    company_name: "Cara Therapeutics, Inc.",
  },
  {
    cik_str: 1031623,
    ticker: "GIFI",
    company_name: "GULF ISLAND FABRICATION INC",
  },
  {
    cik_str: 55529,
    ticker: "KEQU",
    company_name: "KEWAUNEE SCIENTIFIC CORP /DE/",
  },
  {
    cik_str: 714712,
    ticker: "JUVF",
    company_name: "JUNIATA VALLEY FINANCIAL CORP",
  },
  {
    cik_str: 1126741,
    ticker: "GSIT",
    company_name: "GSI TECHNOLOGY INC",
  },
  {
    cik_str: 1859807,
    ticker: "NVAC",
    company_name: "NorthView Acquisition Corp",
  },
  {
    cik_str: 1818605,
    ticker: "DIST",
    company_name: "Distoken Acquisition Corp",
  },
  {
    cik_str: 1838987,
    ticker: "CSLR",
    company_name: "Complete Solaria, Inc.",
  },
  {
    cik_str: 1563665,
    ticker: "HRGN",
    company_name: "Harvard Apparatus Regenerative Technology, Inc.",
  },
  {
    cik_str: 1223389,
    ticker: "CONN",
    company_name: "CONNS INC",
  },
  {
    cik_str: 1489874,
    ticker: "GGROU",
    company_name: "Golden Growers Cooperative",
  },
  {
    cik_str: 1870404,
    ticker: "PBAX",
    company_name: "PHOENIX BIOTECH ACQUISITION CORP.",
  },
  {
    cik_str: 949858,
    ticker: "ACHV",
    company_name: "ACHIEVE LIFE SCIENCES, INC.",
  },
  {
    cik_str: 1818838,
    ticker: "ADAG",
    company_name: "Adagene Inc.",
  },
  {
    cik_str: 1040161,
    ticker: "PXLW",
    company_name: "PIXELWORKS, INC",
  },
  {
    cik_str: 316253,
    ticker: "ENZ",
    company_name: "ENZO BIOCHEM INC",
  },
  {
    cik_str: 846671,
    ticker: "VLT",
    company_name: "Invesco High Income Trust II",
  },
  {
    cik_str: 1385632,
    ticker: "IAE",
    company_name: "Voya Asia Pacific High Dividend Equity Income Fund",
  },
  {
    cik_str: 1722387,
    ticker: "ITRG",
    company_name: "Integra Resources Corp.",
  },
  {
    cik_str: 1915380,
    ticker: "DMYY",
    company_name: "dMY Squared Technology Group, Inc.",
  },
  {
    cik_str: 900391,
    ticker: "NTZ",
    company_name: "NATUZZI S P A",
  },
  {
    cik_str: 1089872,
    ticker: "GAIA",
    company_name: "GAIA, INC",
  },
  {
    cik_str: 1543418,
    ticker: "TMQ",
    company_name: "Trilogy Metals Inc.",
  },
  {
    cik_str: 827871,
    ticker: "EGRX",
    company_name: "EAGLE PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1514597,
    ticker: "FURY",
    company_name: "FURY GOLD MINES LTD",
  },
  {
    cik_str: 770460,
    ticker: "PFBX",
    company_name: "PEOPLES FINANCIAL CORP /MS/",
  },
  {
    cik_str: 1276469,
    ticker: "MFD",
    company_name: "MACQUARIE/FIRST TRUST GLOBAL INFRASTR/UTIL DIV & INC FUND",
  },
  {
    cik_str: 731653,
    ticker: "UBCP",
    company_name: "UNITED BANCORP INC /OH/",
  },
  {
    cik_str: 1119774,
    ticker: "CGEN",
    company_name: "COMPUGEN LTD",
  },
  {
    cik_str: 2178,
    ticker: "AE",
    company_name: "ADAMS RESOURCES & ENERGY, INC.",
  },
  {
    cik_str: 850033,
    ticker: "BPT",
    company_name: "BP PRUDHOE BAY ROYALTY TRUST",
  },
  {
    cik_str: 1610820,
    ticker: "BCTX",
    company_name: "BriaCell Therapeutics Corp.",
  },
  {
    cik_str: 1928340,
    ticker: "GDHG",
    company_name: "GOLDEN HEAVEN GROUP HOLDINGS LTD.",
  },
  {
    cik_str: 740806,
    ticker: "FMBM",
    company_name: "F&M BANK CORP",
  },
  {
    cik_str: 1341318,
    ticker: "LSBK",
    company_name: "LAKE SHORE BANCORP, INC.",
  },
  {
    cik_str: 1426332,
    ticker: "NGM",
    company_name: "NGM BIOPHARMACEUTICALS INC",
  },
  {
    cik_str: 1610618,
    ticker: "CDTX",
    company_name: "Cidara Therapeutics, Inc.",
  },
  {
    cik_str: 771856,
    ticker: "CSBR",
    company_name: "CHAMPIONS ONCOLOGY, INC.",
  },
  {
    cik_str: 1288795,
    ticker: "GLV",
    company_name: "Clough Global Dividend & Income Fund",
  },
  {
    cik_str: 1601485,
    ticker: "ELTX",
    company_name: "Elicio Therapeutics, Inc.",
  },
  {
    cik_str: 1108205,
    ticker: "CRIS",
    company_name: "CURIS INC",
  },
  {
    cik_str: 798528,
    ticker: "OMEX",
    company_name: "ODYSSEY MARINE EXPLORATION INC",
  },
  {
    cik_str: 1334325,
    ticker: "CODA",
    company_name: "Coda Octopus Group, Inc.",
  },
  {
    cik_str: 1140410,
    ticker: "PNF",
    company_name: "PIMCO NEW YORK MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 1606268,
    ticker: "VIA",
    company_name: "Via Renewables, Inc.",
  },
  {
    cik_str: 1825473,
    ticker: "PRSR",
    company_name: "Prospector Capital Corp.",
  },
  {
    cik_str: 1604464,
    ticker: "ATRA",
    company_name: "Atara Biotherapeutics, Inc.",
  },
  {
    cik_str: 1455365,
    ticker: "CGTX",
    company_name: "COGNITION THERAPEUTICS INC",
  },
  {
    cik_str: 1888654,
    ticker: "FEAM",
    company_name: "5E Advanced Materials, Inc.",
  },
  {
    cik_str: 1865701,
    ticker: "KYCH",
    company_name: "Keyarch Acquisition Corp",
  },
  {
    cik_str: 1539029,
    ticker: "CLSD",
    company_name: "Clearside Biomedical, Inc.",
  },
  {
    cik_str: 1758009,
    ticker: "QUBT",
    company_name: "Quantum Computing Inc.",
  },
  {
    cik_str: 1841761,
    ticker: "GROV",
    company_name: "Grove Collaborative Holdings, Inc.",
  },
  {
    cik_str: 1018735,
    ticker: "NYMXF",
    company_name: "NYMOX PHARMACEUTICAL CORP",
  },
  {
    cik_str: 1597835,
    ticker: "CMCM",
    company_name: "Cheetah Mobile Inc.",
  },
  {
    cik_str: 1807765,
    ticker: "PMVC",
    company_name: "PMV Consumer Acquisition Corp.",
  },
  {
    cik_str: 912061,
    ticker: "NHTC",
    company_name: "NATURAL HEALTH TRENDS CORP",
  },
  {
    cik_str: 1410738,
    ticker: "VPLM",
    company_name: "Voip-pal.com Inc",
  },
  {
    cik_str: 1803914,
    ticker: "PLBY",
    company_name: "PLBY Group, Inc.",
  },
  {
    cik_str: 1849058,
    ticker: "CLOE",
    company_name: "Clover Leaf Capital Corp.",
  },
  {
    cik_str: 34563,
    ticker: "FARM",
    company_name: "FARMER BROTHERS CO",
  },
  {
    cik_str: 1607997,
    ticker: "NMS",
    company_name: "Nuveen Minnesota Quality Municipal Income Fund",
  },
  {
    cik_str: 1502557,
    ticker: "KPEA",
    company_name: "Kun Peng International Ltd.",
  },
  {
    cik_str: 1911545,
    ticker: "HRYU",
    company_name: "Hanryu Holdings, Inc.",
  },
  {
    cik_str: 1746278,
    ticker: "GOLQ",
    company_name: "GoLogiq, Inc.",
  },
  {
    cik_str: 914122,
    ticker: "PPIH",
    company_name: "Perma-Pipe International Holdings, Inc.",
  },
  {
    cik_str: 1687919,
    ticker: "FGNV",
    company_name: "FORGE INNOVATION DEVELOPMENT CORP.",
  },
  {
    cik_str: 1978133,
    ticker: "YERBF",
    company_name: "YERBAE BRANDS CORP.",
  },
  {
    cik_str: 1645666,
    ticker: "KZR",
    company_name: "Kezar Life Sciences, Inc.",
  },
  {
    cik_str: 1770088,
    ticker: "WIMI",
    company_name: "WiMi Hologram Cloud Inc.",
  },
  {
    cik_str: 1280776,
    ticker: "IMUX",
    company_name: "IMMUNIC, INC.",
  },
  {
    cik_str: 1831978,
    ticker: "NBST",
    company_name: "Newbury Street Acquisition Corp",
  },
  {
    cik_str: 1867287,
    ticker: "LBBB",
    company_name: "Lakeshore Acquisition II Corp.",
  },
  {
    cik_str: 1901886,
    ticker: "AFAR",
    company_name: "Aura Fat Projects Acquisition Corp",
  },
  {
    cik_str: 1657642,
    ticker: "SLBK",
    company_name: "Skyline Bankshares, Inc.",
  },
  {
    cik_str: 1557523,
    ticker: "PGZ",
    company_name: "Principal Real Estate Income Fund",
  },
  {
    cik_str: 1498233,
    ticker: "CPTN",
    company_name: "Cepton, Inc.",
  },
  {
    cik_str: 1302624,
    ticker: "FAM",
    company_name: "FIRST TRUST/ABRDN GLOBAL OPPORTUNITY INCOME FUND",
  },
  {
    cik_str: 1850398,
    ticker: "TCBC",
    company_name: "TC Bancshares, Inc.",
  },
  {
    cik_str: 895464,
    ticker: "YBGJ",
    company_name: "Yubo International Biotech Ltd",
  },
  {
    cik_str: 884269,
    ticker: "APT",
    company_name: "ALPHA PRO TECH LTD",
  },
  {
    cik_str: 1742770,
    ticker: "VIOT",
    company_name: "Viomi Technology Co., Ltd",
  },
  {
    cik_str: 1885998,
    ticker: "ROCL",
    company_name: "Roth CH Acquisition V Co.",
  },
  {
    cik_str: 1178253,
    ticker: "SCYX",
    company_name: "SCYNEXIS INC",
  },
  {
    cik_str: 1753162,
    ticker: "FTHM",
    company_name: "Fathom Holdings Inc.",
  },
  {
    cik_str: 1769768,
    ticker: "EJH",
    company_name: "E-Home Household Service Holdings Ltd",
  },
  {
    cik_str: 1227636,
    ticker: "STIM",
    company_name: "Neuronetics, Inc.",
  },
  {
    cik_str: 84112,
    ticker: "RSKIA",
    company_name: "GEORGE RISK INDUSTRIES, INC.",
  },
  {
    cik_str: 1448815,
    ticker: "RFLFY",
    company_name: "Raffles Education Corp Ltd",
  },
  {
    cik_str: 1746119,
    ticker: "MUGH",
    company_name: "MU GLOBAL HOLDING Ltd",
  },
  {
    cik_str: 847411,
    ticker: "CXH",
    company_name: "MFS INVESTMENT GRADE MUNICIPAL TRUST",
  },
  {
    cik_str: 1849902,
    ticker: "SEPA",
    company_name: "SEP Acquisition Corp.",
  },
  {
    cik_str: 1141240,
    ticker: "LQMT",
    company_name: "LIQUIDMETAL TECHNOLOGIES INC",
  },
  {
    cik_str: 40570,
    ticker: "JOB",
    company_name: "GEE Group Inc.",
  },
  {
    cik_str: 1844452,
    ticker: "LUNR",
    company_name: "Intuitive Machines, Inc.",
  },
  {
    cik_str: 1290476,
    ticker: "VBFC",
    company_name: "Village Bank & Trust Financial Corp.",
  },
  {
    cik_str: 942895,
    ticker: "REDW",
    company_name: "REDWOOD FINANCIAL INC /MN/",
  },
  {
    cik_str: 914712,
    ticker: "STCN",
    company_name: "Steel Connect, Inc.",
  },
  {
    cik_str: 1411690,
    ticker: "BNGO",
    company_name: "Bionano Genomics, Inc.",
  },
  {
    cik_str: 1228627,
    ticker: "OCUP",
    company_name: "Ocuphire Pharma, Inc.",
  },
  {
    cik_str: 793306,
    ticker: "BDCO",
    company_name: "BLUE DOLPHIN ENERGY CO",
  },
  {
    cik_str: 1837344,
    ticker: "MBTC",
    company_name: "Nocturne Acquisition Corp",
  },
  {
    cik_str: 1001171,
    ticker: "BYFC",
    company_name: "BROADWAY FINANCIAL CORP DE",
  },
  {
    cik_str: 1301236,
    ticker: "SOHO",
    company_name: "Sotherly Hotels Inc.",
  },
  {
    cik_str: 1839998,
    ticker: "AONC",
    company_name: "American Oncology Network, Inc.",
  },
  {
    cik_str: 1514490,
    ticker: "RGT",
    company_name: "ROYCE GLOBAL VALUE TRUST, INC.",
  },
  {
    cik_str: 1608390,
    ticker: "AFMD",
    company_name: "Affimed N.V.",
  },
  {
    cik_str: 1698508,
    ticker: "IHTA",
    company_name: "Invesco High Income 2024 Target Term Fund",
  },
  {
    cik_str: 1571329,
    ticker: "LRFC",
    company_name: "Logan Ridge Finance Corp.",
  },
  {
    cik_str: 1914023,
    ticker: "ACAC",
    company_name: "Acri Capital Acquisition Corp",
  },
  {
    cik_str: 1644771,
    ticker: "RSF",
    company_name: "RiverNorth Capital & Income Fund, Inc.",
  },
  {
    cik_str: 1843162,
    ticker: "SSIC",
    company_name: "Silver Spike Investment Corp.",
  },
  {
    cik_str: 842717,
    ticker: "BRBS",
    company_name: "BLUE RIDGE BANKSHARES, INC.",
  },
  {
    cik_str: 791718,
    ticker: "EEA",
    company_name: "EUROPEAN EQUITY FUND, INC / MD",
  },
  {
    cik_str: 1866838,
    ticker: "IGTA",
    company_name: "Inception Growth Acquisition Ltd",
  },
  {
    cik_str: 1096938,
    ticker: "UEEC",
    company_name: "United Health Products, Inc.",
  },
  {
    cik_str: 898171,
    ticker: "UWHR",
    company_name: "UWHARRIE CAPITAL CORP",
  },
  {
    cik_str: 860489,
    ticker: "CEE",
    company_name: "CENTRAL & EASTERN EUROPE FUND, INC.",
  },
  {
    cik_str: 1681087,
    ticker: "AVRO",
    company_name: "AVROBIO, Inc.",
  },
  {
    cik_str: 1930313,
    ticker: "PTWO",
    company_name: "Pono Capital Two, Inc.",
  },
  {
    cik_str: 1376227,
    ticker: "UNG",
    company_name: "United States Natural Gas Fund, LP",
  },
  {
    cik_str: 1868775,
    ticker: "ASCA",
    company_name: "ASPAC I Acquisition Corp.",
  },
  {
    cik_str: 1799011,
    ticker: "LUCD",
    company_name: "Lucid Diagnostics Inc.",
  },
  {
    cik_str: 1213037,
    ticker: "CRDF",
    company_name: "Cardiff Oncology, Inc.",
  },
  {
    cik_str: 1445109,
    ticker: "NSGP",
    company_name: "NewStream Energy Technologies Group Inc",
  },
  {
    cik_str: 1490161,
    ticker: "SOWG",
    company_name: "Sow Good Inc.",
  },
  {
    cik_str: 1606745,
    ticker: "LTRPA",
    company_name: "Liberty TripAdvisor Holdings, Inc.",
  },
  {
    cik_str: 72633,
    ticker: "NRT",
    company_name: "NORTH EUROPEAN OIL ROYALTY TRUST",
  },
  {
    cik_str: 1848861,
    ticker: "HAIA",
    company_name: "Healthcare AI Acquisition Corp.",
  },
  {
    cik_str: 716634,
    ticker: "RDI",
    company_name: "READING INTERNATIONAL INC",
  },
  {
    cik_str: 1163389,
    ticker: "NWPP",
    company_name: "NEW PEOPLES BANKSHARES INC",
  },
  {
    cik_str: 1520048,
    ticker: "PVL",
    company_name: "Permianville Royalty Trust",
  },
  {
    cik_str: 1723069,
    ticker: "TLSA",
    company_name: "Tiziana Life Sciences Ltd",
  },
  {
    cik_str: 1845942,
    ticker: "BNIX",
    company_name: "Bannix Acquisition Corp.",
  },
  {
    cik_str: 1224133,
    ticker: "MCHX",
    company_name: "MARCHEX INC",
  },
  {
    cik_str: 949961,
    ticker: "IOR",
    company_name: "INCOME OPPORTUNITY REALTY INVESTORS INC /TX/",
  },
  {
    cik_str: 843006,
    ticker: "ISDR",
    company_name: "ISSUER DIRECT CORP",
  },
  {
    cik_str: 1815974,
    ticker: "ANEB",
    company_name: "Anebulo Pharmaceuticals, Inc.",
  },
  {
    cik_str: 894871,
    ticker: "AREN",
    company_name: "Arena Group Holdings, Inc.",
  },
  {
    cik_str: 1499961,
    ticker: "MULN",
    company_name: "MULLEN AUTOMOTIVE INC.",
  },
  {
    cik_str: 1114936,
    ticker: "UMEWF",
    company_name: "UMeWorld Ltd",
  },
  {
    cik_str: 1811530,
    ticker: "NXMH",
    company_name: "Next Meats Holdings, Inc.",
  },
  {
    cik_str: 1881551,
    ticker: "NUBI",
    company_name: "Nubia Brand International Corp.",
  },
  {
    cik_str: 1357971,
    ticker: "ESOA",
    company_name: "Energy Services of America CORP",
  },
  {
    cik_str: 1108645,
    ticker: "CIPI",
    company_name: "Correlate Energy Corp.",
  },
  {
    cik_str: 1826889,
    ticker: "BODY",
    company_name: "Beachbody Company, Inc.",
  },
  {
    cik_str: 1831096,
    ticker: "GEG",
    company_name: "Great Elm Group, Inc.",
  },
  {
    cik_str: 1329606,
    ticker: "CETY",
    company_name: "Clean Energy Technologies, Inc.",
  },
  {
    cik_str: 1616741,
    ticker: "PATI",
    company_name: "PATRIOT TRANSPORTATION HOLDING, INC.",
  },
  {
    cik_str: 788920,
    ticker: "PDEX",
    company_name: "PRO DEX INC",
  },
  {
    cik_str: 1584754,
    ticker: "AKTS",
    company_name: "Akoustis Technologies, Inc.",
  },
  {
    cik_str: 1422142,
    ticker: "AADI",
    company_name: "Aadi Bioscience, Inc.",
  },
  {
    cik_str: 1456189,
    ticker: "LEAT",
    company_name: "Leatt Corp",
  },
  {
    cik_str: 717806,
    ticker: "FUSB",
    company_name: "FIRST US BANCSHARES, INC.",
  },
  {
    cik_str: 1631487,
    ticker: "CLGN",
    company_name: "CollPlant Biotechnologies Ltd",
  },
  {
    cik_str: 1849296,
    ticker: "OKYO",
    company_name: "OKYO Pharma Ltd",
  },
  {
    cik_str: 1083743,
    ticker: "FLUX",
    company_name: "Flux Power Holdings, Inc.",
  },
  {
    cik_str: 1748137,
    ticker: "NEOV",
    company_name: "NeoVolta Inc.",
  },
  {
    cik_str: 1702123,
    ticker: "CRDL",
    company_name: "Cardiol Therapeutics Inc.",
  },
  {
    cik_str: 1499780,
    ticker: "GLBS",
    company_name: "GLOBUS MARITIME LTD",
  },
  {
    cik_str: 1393044,
    ticker: "MTMV",
    company_name: "Motomova Inc",
  },
  {
    cik_str: 1822886,
    ticker: "HHGC",
    company_name: "HHG Capital Corp",
  },
  {
    cik_str: 1818331,
    ticker: "WGS",
    company_name: "GeneDx Holdings Corp.",
  },
  {
    cik_str: 1236275,
    ticker: "SSNT",
    company_name: "SilverSun Technologies, Inc.",
  },
  {
    cik_str: 1460329,
    ticker: "FLNT",
    company_name: "Fluent, Inc.",
  },
  {
    cik_str: 1419806,
    ticker: "REEMF",
    company_name: "RARE ELEMENT RESOURCES LTD",
  },
  {
    cik_str: 1523289,
    ticker: "DMA",
    company_name: "Destra Multi-Alternative Fund",
  },
  {
    cik_str: 1120970,
    ticker: "LODE",
    company_name: "Comstock Inc.",
  },
  {
    cik_str: 1162461,
    ticker: "CUTR",
    company_name: "CUTERA INC",
  },
  {
    cik_str: 1835615,
    ticker: "MHUA",
    company_name: "Meihua International Medical Technologies Co., Ltd.",
  },
  {
    cik_str: 1882078,
    ticker: "ARIZ",
    company_name: "Arisz Acquisition Corp.",
  },
  {
    cik_str: 1857030,
    ticker: "INCR",
    company_name: "Intercure Ltd.",
  },
  {
    cik_str: 779544,
    ticker: "ARKR",
    company_name: "ARK RESTAURANTS CORP",
  },
  {
    cik_str: 1822791,
    ticker: "CLNN",
    company_name: "Clene Inc.",
  },
  {
    cik_str: 1865861,
    ticker: "CCTS",
    company_name: "Cactus Acquisition Corp. 1 Ltd",
  },
  {
    cik_str: 1449792,
    ticker: "PPSI",
    company_name: "PIONEER POWER SOLUTIONS, INC.",
  },
  {
    cik_str: 1896049,
    ticker: "STIX",
    company_name: "Semantix, Inc.",
  },
  {
    cik_str: 1526329,
    ticker: "TTP",
    company_name: "TORTOISE PIPELINE & ENERGY FUND, INC.",
  },
  {
    cik_str: 1468327,
    ticker: "RENT",
    company_name: "Rent the Runway, Inc.",
  },
  {
    cik_str: 1873324,
    ticker: "PEPL",
    company_name: "PepperLime Health Acquisition Corp",
  },
  {
    cik_str: 1870778,
    ticker: "OHAA",
    company_name: "Opy Acquisition Corp. I",
  },
  {
    cik_str: 1876581,
    ticker: "IMPP",
    company_name: "Imperial Petroleum Inc./Marshall Islands",
  },
  {
    cik_str: 1788028,
    ticker: "JSPR",
    company_name: "Jasper Therapeutics, Inc.",
  },
  {
    cik_str: 1031233,
    ticker: "PPBN",
    company_name: "PINNACLE BANKSHARES CORP",
  },
  {
    cik_str: 838131,
    ticker: "JMM",
    company_name: "Nuveen Multi-Market Income Fund",
  },
  {
    cik_str: 948708,
    ticker: "SMSI",
    company_name: "SMITH MICRO SOFTWARE, INC.",
  },
  {
    cik_str: 1871149,
    ticker: "RGF",
    company_name: "Real Good Food Company, Inc.",
  },
  {
    cik_str: 1903382,
    ticker: "BHM",
    company_name: "Bluerock Homes Trust, Inc.",
  },
  {
    cik_str: 1718500,
    ticker: "RVIV",
    company_name: "Reviv3 Procare Co",
  },
  {
    cik_str: 1580149,
    ticker: "BIVI",
    company_name: "BIOVIE INC.",
  },
  {
    cik_str: 1836295,
    ticker: "RTGN",
    company_name: "RetinalGenix Technologies Inc.",
  },
  {
    cik_str: 1365767,
    ticker: "ALLT",
    company_name: "Allot Ltd.",
  },
  {
    cik_str: 1847806,
    ticker: "GNS",
    company_name: "Genius Group Ltd",
  },
  {
    cik_str: 1863990,
    ticker: "SMAP",
    company_name: "Sportsmap Tech Acquisition Corp.",
  },
  {
    cik_str: 1080340,
    ticker: "LOAN",
    company_name: "MANHATTAN BRIDGE CAPITAL, INC",
  },
  {
    cik_str: 1661053,
    ticker: "NVNO",
    company_name: "enVVeno Medical Corp",
  },
  {
    cik_str: 1813914,
    ticker: "CMAX",
    company_name: "CareMax, Inc.",
  },
  {
    cik_str: 1860484,
    ticker: "RACY",
    company_name: "Relativity Acquisition Corp",
  },
  {
    cik_str: 1713210,
    ticker: "ATPC",
    company_name: "Agape ATP Corp",
  },
  {
    cik_str: 1286973,
    ticker: "USAS",
    company_name: "Americas Gold & Silver Corp",
  },
  {
    cik_str: 93314,
    ticker: "VNRX",
    company_name: "VOLITIONRX LTD",
  },
  {
    cik_str: 912764,
    ticker: "KSBI",
    company_name: "KS BANCORP INC",
  },
  {
    cik_str: 1275101,
    ticker: "BOTJ",
    company_name: "BANK OF THE JAMES FINANCIAL GROUP INC",
  },
  {
    cik_str: 6176,
    ticker: "AP",
    company_name: "AMPCO PITTSBURGH CORP",
  },
  {
    cik_str: 1760542,
    ticker: "HOOK",
    company_name: "HOOKIPA Pharma Inc.",
  },
  {
    cik_str: 58361,
    ticker: "LEE",
    company_name: "LEE ENTERPRISES, Inc",
  },
  {
    cik_str: 1600983,
    ticker: "KSCP",
    company_name: "Knightscope, Inc.",
  },
  {
    cik_str: 1031235,
    ticker: "SELF",
    company_name: "Global Self Storage, Inc.",
  },
  {
    cik_str: 1719395,
    ticker: "EAR",
    company_name: "Eargo, Inc.",
  },
  {
    cik_str: 1929231,
    ticker: "PLTN",
    company_name: "Plutonian Acquisition Corp.",
  },
  {
    cik_str: 1819493,
    ticker: "XOS",
    company_name: "Xos, Inc.",
  },
  {
    cik_str: 1724009,
    ticker: "PRT",
    company_name: "PermRock Royalty Trust",
  },
  {
    cik_str: 1353538,
    ticker: "APGT",
    company_name: "Appgate, Inc.",
  },
  {
    cik_str: 1731388,
    ticker: "EDRY",
    company_name: "EuroDry Ltd.",
  },
  {
    cik_str: 1137091,
    ticker: "PSIX",
    company_name: "POWER SOLUTIONS INTERNATIONAL, INC.",
  },
  {
    cik_str: 1651944,
    ticker: "DMTK",
    company_name: "DermTech, Inc.",
  },
  {
    cik_str: 1876431,
    ticker: "PRE",
    company_name: "Prenetics Global Ltd",
  },
  {
    cik_str: 1120370,
    ticker: "BWEN",
    company_name: "BROADWIND, INC.",
  },
  {
    cik_str: 1310488,
    ticker: "BFNH",
    company_name: "BIOFORCE NANOSCIENCES HOLDINGS, INC.",
  },
  {
    cik_str: 1879373,
    ticker: "ENCP",
    company_name: "Energem Corp",
  },
  {
    cik_str: 1938186,
    ticker: "JYD",
    company_name: "Jayud Global Logistics Ltd",
  },
  {
    cik_str: 1396502,
    ticker: "HTY",
    company_name: "John Hancock Tax-Advantaged Global Shareholder Yield Fund",
  },
  {
    cik_str: 15847,
    ticker: "BUKS",
    company_name: "BUTLER NATIONAL CORP",
  },
  {
    cik_str: 783324,
    ticker: "VGZ",
    company_name: "VISTA GOLD CORP",
  },
  {
    cik_str: 1849867,
    ticker: "CLST",
    company_name: "Catalyst Bancorp, Inc.",
  },
  {
    cik_str: 25895,
    ticker: "CRWS",
    company_name: "CROWN CRAFTS INC",
  },
  {
    cik_str: 1006830,
    ticker: "CBKM",
    company_name: "CONSUMERS BANCORP INC /OH/",
  },
  {
    cik_str: 1582554,
    ticker: "MTNB",
    company_name: "Matinas BioPharma Holdings, Inc.",
  },
  {
    cik_str: 1568385,
    ticker: "BMTM",
    company_name: "Bright Mountain Media, Inc.",
  },
  {
    cik_str: 1854963,
    ticker: "SHFS",
    company_name: "SHF Holdings, Inc.",
  },
  {
    cik_str: 1426800,
    ticker: "ASMB",
    company_name: "ASSEMBLY BIOSCIENCES, INC.",
  },
  {
    cik_str: 1957489,
    ticker: "ABLV",
    company_name: "Able View Global Inc.",
  },
  {
    cik_str: 71557,
    ticker: "NUVR",
    company_name: "Nuvera Communications, Inc.",
  },
  {
    cik_str: 1903392,
    ticker: "CLRC",
    company_name: "ClimateRock",
  },
  {
    cik_str: 1708341,
    ticker: "AGAE",
    company_name: "Allied Gaming & Entertainment Inc.",
  },
  {
    cik_str: 815577,
    ticker: "MPIR",
    company_name: "Empire Diversified Energy Inc",
  },
  {
    cik_str: 748790,
    ticker: "GCEH",
    company_name: "Global Clean Energy Holdings, Inc.",
  },
  {
    cik_str: 707605,
    ticker: "ASRV",
    company_name: "AMERISERV FINANCIAL INC /PA/",
  },
  {
    cik_str: 1649739,
    ticker: "BAFN",
    company_name: "BayFirst Financial Corp.",
  },
  {
    cik_str: 1621906,
    ticker: "WSTRF",
    company_name: "Western Uranium & Vanadium Corp.",
  },
  {
    cik_str: 1065078,
    ticker: "NTIP",
    company_name: "NETWORK-1 TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1883983,
    ticker: "VSAC",
    company_name: "VISION SENSING ACQUISITION CORP.",
  },
  {
    cik_str: 1000045,
    ticker: "NICK",
    company_name: "NICHOLAS FINANCIAL INC",
  },
  {
    cik_str: 1721484,
    ticker: "LGVN",
    company_name: "Longeveron Inc.",
  },
  {
    cik_str: 1865468,
    ticker: "KACL",
    company_name: "Kairous Acquisition Corp. Ltd",
  },
  {
    cik_str: 1310630,
    ticker: "CFOO",
    company_name: "China Foods Holdings Ltd.",
  },
  {
    cik_str: 1946399,
    ticker: "YS",
    company_name: "YS Biopharma Co., Ltd.",
  },
  {
    cik_str: 889971,
    ticker: "LPTH",
    company_name: "LIGHTPATH TECHNOLOGIES INC",
  },
  {
    cik_str: 1874875,
    ticker: "HOUR",
    company_name: "Hour Loop, Inc",
  },
  {
    cik_str: 45919,
    ticker: "HHS",
    company_name: "HARTE HANKS INC",
  },
  {
    cik_str: 1840877,
    ticker: "COCH",
    company_name: "Envoy Medical, Inc.",
  },
  {
    cik_str: 1377149,
    ticker: "CRVW",
    company_name: "CareView Communications Inc",
  },
  {
    cik_str: 1362190,
    ticker: "AEYE",
    company_name: "AUDIOEYE INC",
  },
  {
    cik_str: 1514743,
    ticker: "IROQ",
    company_name: "IF Bancorp, Inc.",
  },
  {
    cik_str: 1832161,
    ticker: "KEYR",
    company_name: "KeyStar Corp.",
  },
  {
    cik_str: 875729,
    ticker: "BNET",
    company_name: "BION ENVIRONMENTAL TECHNOLOGIES INC",
  },
  {
    cik_str: 1145255,
    ticker: "HNNA",
    company_name: "HENNESSY ADVISORS INC",
  },
  {
    cik_str: 1857086,
    ticker: "DMAQ",
    company_name: "Deep Medicine Acquisition Corp.",
  },
  {
    cik_str: 1392994,
    ticker: "FGB",
    company_name:
      "FIRST TRUST SPECIALTY FINANCE & FINANCIAL OPPORTUNITIES FUND",
  },
  {
    cik_str: 1812173,
    ticker: "RBOT",
    company_name: "Vicarious Surgical Inc.",
  },
  {
    cik_str: 1817868,
    ticker: "JAQC",
    company_name: "Jupiter Acquisition Corp",
  },
  {
    cik_str: 1668340,
    ticker: "BCTF",
    company_name: "Bancorp 34, Inc.",
  },
  {
    cik_str: 1433607,
    ticker: "NSPR",
    company_name: "InspireMD, Inc.",
  },
  {
    cik_str: 1835268,
    ticker: "CNTB",
    company_name: "Connect Biopharma Holdings Ltd",
  },
  {
    cik_str: 1764974,
    ticker: "TSBX",
    company_name: "Turnstone Biologics Corp.",
  },
  {
    cik_str: 1547158,
    ticker: "NDP",
    company_name: "TORTOISE ENERGY INDEPENDENCE FUND, INC.",
  },
  {
    cik_str: 1355848,
    ticker: "TOON",
    company_name: "Kartoon Studios, Inc.",
  },
  {
    cik_str: 1897245,
    ticker: "ACAX",
    company_name: "Alset Capital Acquisition Corp.",
  },
  {
    cik_str: 1319183,
    ticker: "FMY",
    company_name: "FIRST TRUST MORTGAGE INCOME FUND",
  },
  {
    cik_str: 1578348,
    ticker: "ICMB",
    company_name: "Investcorp Credit Management BDC, Inc.",
  },
  {
    cik_str: 1113313,
    ticker: "AVNI",
    company_name: "ARVANA INC",
  },
  {
    cik_str: 862692,
    ticker: "CCEL",
    company_name: "CRYO CELL INTERNATIONAL INC",
  },
  {
    cik_str: 1101396,
    ticker: "DLA",
    company_name: "DELTA APPAREL, INC",
  },
  {
    cik_str: 1643988,
    ticker: "LPTV",
    company_name: "Loop Media, Inc.",
  },
  {
    cik_str: 839087,
    ticker: "VASO",
    company_name: "VASO Corp",
  },
  {
    cik_str: 1682241,
    ticker: "MATH",
    company_name: "Metalpha Technology Holding Ltd",
  },
  {
    cik_str: 1476573,
    ticker: "AIRRF",
    company_name: "Aurion Resources Ltd.",
  },
  {
    cik_str: 1053691,
    ticker: "CRVO",
    company_name: "CervoMed Inc.",
  },
  {
    cik_str: 1519469,
    ticker: "ANLDF",
    company_name: "ANFIELD ENERGY INC.",
  },
  {
    cik_str: 1844417,
    ticker: "ESLA",
    company_name: "Estrella Immunopharma, Inc.",
  },
  {
    cik_str: 863900,
    ticker: "MXE",
    company_name: "MEXICO EQUITY & INCOME FUND INC",
  },
  {
    cik_str: 829323,
    ticker: "INUV",
    company_name: "Inuvo, Inc.",
  },
  {
    cik_str: 1629665,
    ticker: "MULG",
    company_name: "MULIANG VIAGOO TECHNOLOGY, INC.",
  },
  {
    cik_str: 1111741,
    ticker: "DYNR",
    company_name: "DYNARESOURCE INC",
  },
  {
    cik_str: 855787,
    ticker: "TRLM",
    company_name: "TRULEUM, INC.",
  },
  {
    cik_str: 1662774,
    ticker: "QNCX",
    company_name: "Quince Therapeutics, Inc.",
  },
  {
    cik_str: 1641631,
    ticker: "XAIR",
    company_name: "Beyond Air, Inc.",
  },
  {
    cik_str: 1357874,
    ticker: "DTIL",
    company_name: "PRECISION BIOSCIENCES INC",
  },
  {
    cik_str: 1533998,
    ticker: "DRIO",
    company_name: "DarioHealth Corp.",
  },
  {
    cik_str: 1709505,
    ticker: "BEST",
    company_name: "BEST Inc.",
  },
  {
    cik_str: 1681903,
    ticker: "ICCH",
    company_name: "ICC Holdings, Inc.",
  },
  {
    cik_str: 1041024,
    ticker: "RMTI",
    company_name: "ROCKWELL MEDICAL, INC.",
  },
  {
    cik_str: 1463000,
    ticker: "GRUSF",
    company_name: "Grown Rogue International Inc.",
  },
  {
    cik_str: 1861063,
    ticker: "AQU",
    company_name: "Aquaron Acquisition Corp.",
  },
  {
    cik_str: 1619544,
    ticker: "JFU",
    company_name: "9F Inc.",
  },
  {
    cik_str: 1881592,
    ticker: "NSTS",
    company_name: "NSTS Bancorp, Inc.",
  },
  {
    cik_str: 1671284,
    ticker: "BHG",
    company_name: "Bright Health Group Inc.",
  },
  {
    cik_str: 1333835,
    ticker: "CASA",
    company_name: "Casa Systems Inc",
  },
  {
    cik_str: 33533,
    ticker: "ESP",
    company_name: "ESPEY MFG & ELECTRONICS CORP",
  },
  {
    cik_str: 880242,
    ticker: "BLGO",
    company_name: "BIOLARGO, INC.",
  },
  {
    cik_str: 1939696,
    ticker: "ETAO",
    company_name: "ETAO International Co., Ltd.",
  },
  {
    cik_str: 1942808,
    ticker: "EGOX",
    company_name: "Next.e.GO N.V.",
  },
  {
    cik_str: 353184,
    ticker: "AIRT",
    company_name: "AIR T INC",
  },
  {
    cik_str: 1828972,
    ticker: "BZFD",
    company_name: "BuzzFeed, Inc.",
  },
  {
    cik_str: 13156,
    ticker: "GLXZ",
    company_name: "Galaxy Gaming, Inc.",
  },
  {
    cik_str: 1853047,
    ticker: "HUDA",
    company_name: "Hudson Acquisition I Corp.",
  },
  {
    cik_str: 1866226,
    ticker: "WTMA",
    company_name: "Welsbach Technology Metals Acquisition Corp.",
  },
  {
    cik_str: 1637866,
    ticker: "DGWR",
    company_name: "Deep Green Waste & Recycling, Inc.",
  },
  {
    cik_str: 1654672,
    ticker: "PNPL",
    company_name: "PINEAPPLE, INC.",
  },
  {
    cik_str: 1852440,
    ticker: "JZ",
    company_name: "Jianzhi Education Technology Group Co Ltd",
  },
  {
    cik_str: 1434524,
    ticker: "CLIR",
    company_name: "ClearSign Technologies Corp",
  },
  {
    cik_str: 12040,
    ticker: "BDL",
    company_name: "FLANIGANS ENTERPRISES INC",
  },
  {
    cik_str: 1736243,
    ticker: "ACXP",
    company_name: "Acurx Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1131554,
    ticker: "SNCR",
    company_name: "SYNCHRONOSS TECHNOLOGIES INC",
  },
  {
    cik_str: 1036848,
    ticker: "MPU",
    company_name: "Mega Matrix Corp.",
  },
  {
    cik_str: 1507957,
    ticker: "IPWR",
    company_name: "Ideal Power Inc.",
  },
  {
    cik_str: 1598646,
    ticker: "NERV",
    company_name: "Minerva Neurosciences, Inc.",
  },
  {
    cik_str: 1328792,
    ticker: "TPCS",
    company_name: "TECHPRECISION CORP",
  },
  {
    cik_str: 1213809,
    ticker: "DYAI",
    company_name: "DYADIC INTERNATIONAL INC",
  },
  {
    cik_str: 1817640,
    ticker: "BREZ",
    company_name: "Breeze Holdings Acquisition Corp.",
  },
  {
    cik_str: 1876766,
    ticker: "LICN",
    company_name: "Lichen China Ltd",
  },
  {
    cik_str: 1505611,
    ticker: "DPSI",
    company_name: "DecisionPoint Systems, Inc.",
  },
  {
    cik_str: 1965143,
    ticker: "NVNI",
    company_name: "Nvni Group Ltd",
  },
  {
    cik_str: 719733,
    ticker: "KTCC",
    company_name: "KEY TRONIC CORP",
  },
  {
    cik_str: 1472072,
    ticker: "CCM",
    company_name: "Concord Medical Services Holdings Ltd",
  },
  {
    cik_str: 1602842,
    ticker: "MOGO",
    company_name: "Mogo Inc.",
  },
  {
    cik_str: 69422,
    ticker: "INTG",
    company_name: "INTERGROUP CORP",
  },
  {
    cik_str: 1448597,
    ticker: "AUGG",
    company_name: "AUGUSTA GOLD CORP.",
  },
  {
    cik_str: 1881741,
    ticker: "AOGO",
    company_name: "Arogo Capital Acquisition Corp.",
  },
  {
    cik_str: 1337090,
    ticker: "SPAZF",
    company_name: "SPANISH MOUNTAIN GOLD LTD.",
  },
  {
    cik_str: 315545,
    ticker: "PVCT",
    company_name: "PROVECTUS BIOPHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1210708,
    ticker: "HSON",
    company_name: "Hudson Global, Inc.",
  },
  {
    cik_str: 885731,
    ticker: "NXN",
    company_name: "NUVEEN NEW YORK SELECT TAX -FREE INCOME PORTFOLIO",
  },
  {
    cik_str: 1628945,
    ticker: "HLTH",
    company_name: "Cue Health Inc.",
  },
  {
    cik_str: 1872812,
    ticker: "TCBP",
    company_name: "TC BioPharm (Holdings) plc",
  },
  {
    cik_str: 1886799,
    ticker: "BGXX",
    company_name: "Bright Green Corp",
  },
  {
    cik_str: 1707919,
    ticker: "CENN",
    company_name: "CENNTRO ELECTRIC GROUP Ltd",
  },
  {
    cik_str: 1517496,
    ticker: "BTCM",
    company_name: "BIT Mining Ltd",
  },
  {
    cik_str: 1763950,
    ticker: "LTRN",
    company_name: "Lantern Pharma Inc.",
  },
  {
    cik_str: 1429260,
    ticker: "FBIO",
    company_name: "Fortress Biotech, Inc.",
  },
  {
    cik_str: 1266806,
    ticker: "VANI",
    company_name: "Vivani Medical, Inc.",
  },
  {
    cik_str: 748268,
    ticker: "RCAT",
    company_name: "Red Cat Holdings, Inc.",
  },
  {
    cik_str: 1006045,
    ticker: "IRIX",
    company_name: "IRIDEX CORP",
  },
  {
    cik_str: 1854463,
    ticker: "WINV",
    company_name: "WinVest Acquisition Corp.",
  },
  {
    cik_str: 1084554,
    ticker: "LTBR",
    company_name: "LIGHTBRIDGE Corp",
  },
  {
    cik_str: 1974044,
    ticker: "MNY",
    company_name: "MoneyHero Ltd",
  },
  {
    cik_str: 1864531,
    ticker: "DHAC",
    company_name: "DIGITAL HEALTH ACQUISITION CORP.",
  },
  {
    cik_str: 810332,
    ticker: "MESA",
    company_name: "MESA AIR GROUP INC",
  },
  {
    cik_str: 1799448,
    ticker: "ALGS",
    company_name: "Aligos Therapeutics, Inc.",
  },
  {
    cik_str: 855683,
    ticker: "MLSS",
    company_name: "MILESTONE SCIENTIFIC INC.",
  },
  {
    cik_str: 754811,
    ticker: "GROW",
    company_name: "U S GLOBAL INVESTORS INC",
  },
  {
    cik_str: 1799290,
    ticker: "EBON",
    company_name: "Ebang International Holdings Inc.",
  },
  {
    cik_str: 799165,
    ticker: "DWSN",
    company_name: "DAWSON GEOPHYSICAL CO",
  },
  {
    cik_str: 1659494,
    ticker: "COE",
    company_name: "51Talk Online Education Group",
  },
  {
    cik_str: 1855457,
    ticker: "KORE",
    company_name: "KORE Group Holdings, Inc.",
  },
  {
    cik_str: 1101680,
    ticker: "DZSI",
    company_name: "DZS INC.",
  },
  {
    cik_str: 1879103,
    ticker: "CFSB",
    company_name: "CFSB Bancorp, Inc. /MA/",
  },
  {
    cik_str: 1171838,
    ticker: "SUND",
    company_name: "Sundance Strategies, Inc.",
  },
  {
    cik_str: 1692427,
    ticker: "NCSM",
    company_name: "NCS Multistage Holdings, Inc.",
  },
  {
    cik_str: 1886894,
    ticker: "SNAL",
    company_name: "Snail, Inc.",
  },
  {
    cik_str: 1094038,
    ticker: "MRKR",
    company_name: "Marker Therapeutics, Inc.",
  },
  {
    cik_str: 1718405,
    ticker: "HYMC",
    company_name: "HYCROFT MINING HOLDING CORP",
  },
  {
    cik_str: 1708527,
    ticker: "ELUT",
    company_name: "ELUTIA INC.",
  },
  {
    cik_str: 1088034,
    ticker: "USIO",
    company_name: "Usio, Inc.",
  },
  {
    cik_str: 1713863,
    ticker: "RFL",
    company_name: "Rafael Holdings, Inc.",
  },
  {
    cik_str: 1778982,
    ticker: "HUIZ",
    company_name: "Huize Holding Ltd",
  },
  {
    cik_str: 1320854,
    ticker: "RAIL",
    company_name: "FreightCar America, Inc.",
  },
  {
    cik_str: 1850262,
    ticker: "INTE",
    company_name: "Integral Acquisition Corp 1",
  },
  {
    cik_str: 2186,
    ticker: "BKTI",
    company_name: "BK Technologies Corp",
  },
  {
    cik_str: 1584371,
    ticker: "ICCM",
    company_name: "IceCure Medical Ltd.",
  },
  {
    cik_str: 1500375,
    ticker: "HFBL",
    company_name: "Home Federal Bancorp, Inc. of Louisiana",
  },
  {
    cik_str: 1789769,
    ticker: "TIL",
    company_name: "Instil Bio, Inc.",
  },
  {
    cik_str: 864240,
    ticker: "SYPR",
    company_name: "SYPRIS SOLUTIONS INC",
  },
  {
    cik_str: 1637736,
    ticker: "SOLO",
    company_name: "ELECTRAMECCANICA VEHICLES CORP.",
  },
  {
    cik_str: 1816723,
    ticker: "GRFX",
    company_name: "Graphex Group Ltd",
  },
  {
    cik_str: 1856028,
    ticker: "SDIG",
    company_name: "Stronghold Digital Mining, Inc.",
  },
  {
    cik_str: 1276531,
    ticker: "SCGY",
    company_name: "SCIENTIFIC ENERGY, INC",
  },
  {
    cik_str: 1866030,
    ticker: "AZ",
    company_name: "A2Z Smart Technologies Corp",
  },
  {
    cik_str: 1602380,
    ticker: "JROOF",
    company_name: "Jericho Energy Ventures Inc.",
  },
  {
    cik_str: 1380106,
    ticker: "RPID",
    company_name: "RAPID MICRO BIOSYSTEMS, INC.",
  },
  {
    cik_str: 1042187,
    ticker: "YHGJ",
    company_name: "YUNHONG GREEN CTI LTD.",
  },
  {
    cik_str: 1833498,
    ticker: "MDAI",
    company_name: "Spectral AI, Inc.",
  },
  {
    cik_str: 1816708,
    ticker: "OWLT",
    company_name: "Owlet, Inc.",
  },
  {
    cik_str: 1892292,
    ticker: "MSS",
    company_name: "Maison Solutions Inc.",
  },
  {
    cik_str: 1695295,
    ticker: "HYFM",
    company_name: "HYDROFARM HOLDINGS GROUP, INC.",
  },
  {
    cik_str: 1696355,
    ticker: "BEDU",
    company_name: "Bright Scholar Education Holdings Ltd",
  },
  {
    cik_str: 1720161,
    ticker: "CTRM",
    company_name: "Castor Maritime Inc.",
  },
  {
    cik_str: 1828673,
    ticker: "HCWB",
    company_name: "HCW Biologics Inc.",
  },
  {
    cik_str: 917225,
    ticker: "XPL",
    company_name: "SOLITARIO RESOURCES CORP.",
  },
  {
    cik_str: 1823086,
    ticker: "KWAC",
    company_name: "Kingswood Acquisition Corp.",
  },
  {
    cik_str: 1724979,
    ticker: "RAIN",
    company_name: "Rain Oncology Inc.",
  },
  {
    cik_str: 862651,
    ticker: "INVU",
    company_name: "Investview, Inc.",
  },
  {
    cik_str: 939930,
    ticker: "PYYX",
    company_name: "PYXUS INTERNATIONAL, INC.",
  },
  {
    cik_str: 1640043,
    ticker: "PXS",
    company_name: "Pyxis Tankers Inc.",
  },
  {
    cik_str: 1005101,
    ticker: "MGLD",
    company_name: "Marygold Companies, Inc.",
  },
  {
    cik_str: 1882963,
    ticker: "AIB",
    company_name: "AIB Acquisition Corp",
  },
  {
    cik_str: 1131312,
    ticker: "ZNOG",
    company_name: "ZION OIL & GAS INC",
  },
  {
    cik_str: 1262104,
    ticker: "MEIP",
    company_name: "MEI Pharma, Inc.",
  },
  {
    cik_str: 946936,
    ticker: "DSWL",
    company_name: "DESWELL INDUSTRIES INC",
  },
  {
    cik_str: 1835416,
    ticker: "MACA",
    company_name: "Moringa Acquisition Corp",
  },
  {
    cik_str: 1960262,
    ticker: "LUDG",
    company_name: "LUDWIG ENTERPRISES, INC.",
  },
  {
    cik_str: 1940177,
    ticker: "PODC",
    company_name: "PodcastOne, Inc.",
  },
  {
    cik_str: 1734750,
    ticker: "MOVE",
    company_name: "Movano Inc.",
  },
  {
    cik_str: 1263364,
    ticker: "COPR",
    company_name: "Idaho Copper Corp",
  },
  {
    cik_str: 1819411,
    ticker: "GANX",
    company_name: "Gain Therapeutics, Inc.",
  },
  {
    cik_str: 1833214,
    ticker: "SABS",
    company_name: "SAB Biotherapeutics, Inc.",
  },
  {
    cik_str: 1847360,
    ticker: "BCOW",
    company_name: "1895 Bancorp of Wisconsin, Inc. /MD/",
  },
  {
    cik_str: 1824884,
    ticker: "ADOC",
    company_name: "Edoc Acquisition Corp.",
  },
  {
    cik_str: 1085921,
    ticker: "MMTIF",
    company_name: "MICROMEM TECHNOLOGIES INC",
  },
  {
    cik_str: 1431959,
    ticker: "MMAT",
    company_name: "META MATERIALS INC.",
  },
  {
    cik_str: 1445283,
    ticker: "KA",
    company_name: "KINETA, INC./DE",
  },
  {
    cik_str: 1874074,
    ticker: "MMV",
    company_name: "MultiMetaVerse Holdings Ltd",
  },
  {
    cik_str: 1056285,
    ticker: "KIRK",
    company_name: "KIRKLAND'S, INC",
  },
  {
    cik_str: 75340,
    ticker: "PFIN",
    company_name: "P&F INDUSTRIES INC",
  },
  {
    cik_str: 1865191,
    ticker: "TGVC",
    company_name: "TG Venture Acquisition Corp.",
  },
  {
    cik_str: 1979332,
    ticker: "CPBI",
    company_name: "Central Plains Bancshares, Inc.",
  },
  {
    cik_str: 1607962,
    ticker: "RWLK",
    company_name: "ReWalk Robotics Ltd.",
  },
  {
    cik_str: 1849466,
    ticker: "TCBS",
    company_name: "Texas Community Bancshares, Inc.",
  },
  {
    cik_str: 8177,
    ticker: "AAME",
    company_name: "ATLANTIC AMERICAN CORP",
  },
  {
    cik_str: 1394056,
    ticker: "OSS",
    company_name: "ONE STOP SYSTEMS, INC.",
  },
  {
    cik_str: 1959224,
    ticker: "SWIN",
    company_name: "Solowin Holdings, Ltd.",
  },
  {
    cik_str: 1600847,
    ticker: "GMDA",
    company_name: "Gamida Cell Ltd.",
  },
  {
    cik_str: 1853580,
    ticker: "PFTA",
    company_name: "Perception Capital Corp. III",
  },
  {
    cik_str: 1641281,
    ticker: "BOLT",
    company_name: "Bolt Biotherapeutics, Inc.",
  },
  {
    cik_str: 1766526,
    ticker: "TECTP",
    company_name: "Tectonic Financial, Inc.",
  },
  {
    cik_str: 1705402,
    ticker: "AGMH",
    company_name: "AGM GROUP HOLDINGS, INC.",
  },
  {
    cik_str: 1844971,
    ticker: "GREE",
    company_name: "Greenidge Generation Holdings Inc.",
  },
  {
    cik_str: 1703157,
    ticker: "SCTH",
    company_name: "Securetech Innovations, Inc.",
  },
  {
    cik_str: 1858028,
    ticker: "NOVV",
    company_name: "Nova Vision Acquisition Corp",
  },
  {
    cik_str: 1710495,
    ticker: "PNXP",
    company_name: "PINEAPPLE EXPRESS CANNABIS Co",
  },
  {
    cik_str: 1556179,
    ticker: "RMRI",
    company_name: "Rocky Mountain Industrials, Inc.",
  },
  {
    cik_str: 1821866,
    ticker: "BTQQF",
    company_name: "Sonora Gold & Silver Corp.",
  },
  {
    cik_str: 1844389,
    ticker: "ACBA",
    company_name: "Ace Global Business Acquisition Ltd",
  },
  {
    cik_str: 1787297,
    ticker: "PASG",
    company_name: "Passage BIO, Inc.",
  },
  {
    cik_str: 1771706,
    ticker: "GDNSF",
    company_name: "Goodness Growth Holdings, Inc.",
  },
  {
    cik_str: 787253,
    ticker: "NAII",
    company_name: "NATURAL ALTERNATIVES INTERNATIONAL INC",
  },
  {
    cik_str: 1592782,
    ticker: "NUKK",
    company_name: "Nukkleus Inc.",
  },
  {
    cik_str: 1903145,
    ticker: "GRRR",
    company_name: "Gorilla Technology Group Inc.",
  },
  {
    cik_str: 1830029,
    ticker: "ADEX",
    company_name: "Adit EdTech Acquisition Corp.",
  },
  {
    cik_str: 1791725,
    ticker: "HUDI",
    company_name: "Huadi International Group Co., Ltd.",
  },
  {
    cik_str: 1566044,
    ticker: "VYNE",
    company_name: "VYNE Therapeutics Inc.",
  },
  {
    cik_str: 1836934,
    ticker: "ZENV",
    company_name: "Zenvia Inc.",
  },
  {
    cik_str: 1771885,
    ticker: "HUGE",
    company_name: "FSD Pharma Inc.",
  },
  {
    cik_str: 1413119,
    ticker: "KBLB",
    company_name: "Kraig Biocraft Laboratories, Inc",
  },
  {
    cik_str: 1873093,
    ticker: "GDTC",
    company_name: "CytoMed Therapeutics Ltd",
  },
  {
    cik_str: 1622879,
    ticker: "SHWZ",
    company_name: "Medicine Man Technologies, Inc.",
  },
  {
    cik_str: 1800682,
    ticker: "CANO",
    company_name: "Cano Health, Inc.",
  },
  {
    cik_str: 1299969,
    ticker: "CHCI",
    company_name: "Comstock Holding Companies, Inc.",
  },
  {
    cik_str: 1830749,
    ticker: "ACHL",
    company_name: "Achilles Therapeutics plc",
  },
  {
    cik_str: 1840748,
    ticker: "LVTX",
    company_name: "LAVA Therapeutics NV",
  },
  {
    cik_str: 1939801,
    ticker: "SMDRF",
    company_name: "SIERRA MADRE GOLD & SILVER LTD.",
  },
  {
    cik_str: 1340476,
    ticker: "DRTTF",
    company_name: "DIRTT ENVIRONMENTAL SOLUTIONS LTD",
  },
  {
    cik_str: 1494891,
    ticker: "SRTS",
    company_name: "Sensus Healthcare, Inc.",
  },
  {
    cik_str: 1785494,
    ticker: "WBQNL",
    company_name: "Woodbridge Liquidation Trust",
  },
  {
    cik_str: 1309251,
    ticker: "MALG",
    company_name: "MICROALLIANCE GROUP INC.",
  },
  {
    cik_str: 1040896,
    ticker: "IDN",
    company_name: "Intellicheck, Inc.",
  },
  {
    cik_str: 1830210,
    ticker: "BHIL",
    company_name: "Benson Hill, Inc.",
  },
  {
    cik_str: 839470,
    ticker: "WWR",
    company_name: "WESTWATER RESOURCES, INC.",
  },
  {
    cik_str: 1677940,
    ticker: "BYSI",
    company_name: "BeyondSpring Inc.",
  },
  {
    cik_str: 749660,
    ticker: "ICAD",
    company_name: "ICAD INC",
  },
  {
    cik_str: 1516551,
    ticker: "SKYE",
    company_name: "Skye Bioscience, Inc.",
  },
  {
    cik_str: 1421642,
    ticker: "MSCLF",
    company_name: "Satellos Bioscience Inc.",
  },
  {
    cik_str: 1846809,
    ticker: "OTEC",
    company_name: "OceanTech Acquisitions I Corp.",
  },
  {
    cik_str: 1472619,
    ticker: "LONCF",
    company_name: "Loncor Gold Inc.",
  },
  {
    cik_str: 1210618,
    ticker: "SPI",
    company_name: "SPI Energy Co., Ltd.",
  },
  {
    cik_str: 1834975,
    ticker: "VEV",
    company_name: "VICINITY MOTOR CORP",
  },
  {
    cik_str: 1588972,
    ticker: "SCTL",
    company_name: "Societal CDMO, Inc.",
  },
  {
    cik_str: 1119083,
    ticker: "MNDO",
    company_name: "MIND CTI LTD",
  },
  {
    cik_str: 893739,
    ticker: "TURN",
    company_name: "180 DEGREE CAPITAL CORP. /NY/",
  },
  {
    cik_str: 1868419,
    ticker: "WAVS",
    company_name: "Western Acquisition Ventures Corp.",
  },
  {
    cik_str: 1854368,
    ticker: "DGHI",
    company_name: "Digihost Technology Inc.",
  },
  {
    cik_str: 1894210,
    ticker: "QOMO",
    company_name: "Qomolangma Acquisition Corp.",
  },
  {
    cik_str: 1661059,
    ticker: "NXTC",
    company_name: "NextCure, Inc.",
  },
  {
    cik_str: 1309057,
    ticker: "CHHE",
    company_name: "China Health Industries Holdings, Inc.",
  },
  {
    cik_str: 1763660,
    ticker: "SEAV",
    company_name: "SEATech Ventures Corp.",
  },
  {
    cik_str: 1553404,
    ticker: "PGTK",
    company_name: "Pacific Green Technologies Inc.",
  },
  {
    cik_str: 1697818,
    ticker: "ICLK",
    company_name: "iClick Interactive Asia Group Ltd",
  },
  {
    cik_str: 1074871,
    ticker: "MODD",
    company_name: "Modular Medical, Inc.",
  },
  {
    cik_str: 1061164,
    ticker: "PGID",
    company_name: "PEREGRINE INDUSTRIES INC",
  },
  {
    cik_str: 1725872,
    ticker: "BMTX",
    company_name: "BM Technologies, Inc.",
  },
  {
    cik_str: 1822145,
    ticker: "PRST",
    company_name: "Presto Automation Inc.",
  },
  {
    cik_str: 1662684,
    ticker: "KULR",
    company_name: "KULR Technology Group, Inc.",
  },
  {
    cik_str: 1785424,
    ticker: "KPLT",
    company_name: "Katapult Holdings, Inc.",
  },
  {
    cik_str: 1849820,
    ticker: "KITT",
    company_name: "Nauticus Robotics, Inc.",
  },
  {
    cik_str: 1390478,
    ticker: "SLS",
    company_name: "SELLAS Life Sciences Group, Inc.",
  },
  {
    cik_str: 1272842,
    ticker: "AIRG",
    company_name: "AIRGAIN INC",
  },
  {
    cik_str: 1106213,
    ticker: "SFRX",
    company_name: "SEAFARER EXPLORATION CORP",
  },
  {
    cik_str: 27367,
    ticker: "DXR",
    company_name: "DAXOR CORP",
  },
  {
    cik_str: 850027,
    ticker: "GRF",
    company_name: "EAGLE CAPITAL GROWTH FUND, INC.",
  },
  {
    cik_str: 1943802,
    ticker: "FSEA",
    company_name: "First Seacoast Bancorp, Inc.",
  },
  {
    cik_str: 1840229,
    ticker: "INKT",
    company_name: "MiNK Therapeutics, Inc.",
  },
  {
    cik_str: 1397047,
    ticker: "FPAY",
    company_name: "FlexShopper, Inc.",
  },
  {
    cik_str: 1864032,
    ticker: "ADRT",
    company_name: "Ault Disruptive Technologies Corp",
  },
  {
    cik_str: 101295,
    ticker: "UG",
    company_name: "UNITED GUARDIAN INC",
  },
  {
    cik_str: 867840,
    ticker: "POCI",
    company_name: "PRECISION OPTICS CORPORATION, INC.",
  },
  {
    cik_str: 1696558,
    ticker: "JRSH",
    company_name: "Jerash Holdings (US), Inc.",
  },
  {
    cik_str: 1752828,
    ticker: "CELU",
    company_name: "Celularity Inc",
  },
  {
    cik_str: 1843248,
    ticker: "GSD",
    company_name: "Global System Dynamics, Inc.",
  },
  {
    cik_str: 1404281,
    ticker: "ELDN",
    company_name: "Eledon Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1763657,
    ticker: "OWVI",
    company_name: "One World Ventures Inc",
  },
  {
    cik_str: 1870144,
    ticker: "CDIO",
    company_name: "Cardio Diagnostics Holdings, Inc.",
  },
  {
    cik_str: 1841387,
    ticker: "CADL",
    company_name: "Candel Therapeutics, Inc.",
  },
  {
    cik_str: 1336050,
    ticker: "EGF",
    company_name: "BlackRock Enhanced Government Fund, Inc.",
  },
  {
    cik_str: 1914805,
    ticker: "BANL",
    company_name: "CBL International Ltd",
  },
  {
    cik_str: 909724,
    ticker: "TLF",
    company_name: "TANDY LEATHER FACTORY INC",
  },
  {
    cik_str: 1622057,
    ticker: "NBIO",
    company_name: "Nascent Biotech Inc.",
  },
  {
    cik_str: 1500198,
    ticker: "NMTC",
    company_name: "NEUROONE MEDICAL TECHNOLOGIES Corp",
  },
  {
    cik_str: 888981,
    ticker: "NNUP",
    company_name: "NOCOPI TECHNOLOGIES INC/MD/",
  },
  {
    cik_str: 1843588,
    ticker: "REE",
    company_name: "REE Automotive Ltd.",
  },
  {
    cik_str: 911216,
    ticker: "PTN",
    company_name: "PALATIN TECHNOLOGIES INC",
  },
  {
    cik_str: 1509261,
    ticker: "RZLT",
    company_name: "Rezolute, Inc.",
  },
  {
    cik_str: 1735041,
    ticker: "GTEC",
    company_name: "Greenland Technologies Holding Corp.",
  },
  {
    cik_str: 1603652,
    ticker: "ULY",
    company_name: "Urgent.ly Inc.",
  },
  {
    cik_str: 845819,
    ticker: "KTEL",
    company_name: "KonaTel, Inc.",
  },
  {
    cik_str: 814676,
    ticker: "CPSH",
    company_name: "CPS TECHNOLOGIES CORP/DE/",
  },
  {
    cik_str: 1495651,
    ticker: "UURAF",
    company_name: "Ucore Rare Metals Inc.",
  },
  {
    cik_str: 1365388,
    ticker: "HSTI",
    company_name: "High Sierra Technologies, Inc.",
  },
  {
    cik_str: 1495231,
    ticker: "IZEA",
    company_name: "IZEA Worldwide, Inc.",
  },
  {
    cik_str: 1846084,
    ticker: "JETMF",
    company_name: "Global Crossing Airlines Group Inc.",
  },
  {
    cik_str: 811641,
    ticker: "ICCC",
    company_name: "IMMUCELL CORP /DE/",
  },
  {
    cik_str: 81955,
    ticker: "RAND",
    company_name: "RAND CAPITAL CORP",
  },
  {
    cik_str: 1715925,
    ticker: "IPA",
    company_name: "ImmunoPrecise Antibodies Ltd.",
  },
  {
    cik_str: 1482436,
    ticker: "AGXPF",
    company_name: "SILVER X MINING CORP.",
  },
  {
    cik_str: 1760233,
    ticker: "RSTN",
    company_name: "RDE, Inc.",
  },
  {
    cik_str: 766792,
    ticker: "CVV",
    company_name: "CVD EQUIPMENT CORP",
  },
  {
    cik_str: 1527599,
    ticker: "SYBX",
    company_name: "SYNLOGIC, INC.",
  },
  {
    cik_str: 1297341,
    ticker: "KFFB",
    company_name: "Kentucky First Federal Bancorp",
  },
  {
    cik_str: 1692415,
    ticker: "CODX",
    company_name: "Co-Diagnostics, Inc.",
  },
  {
    cik_str: 1892025,
    ticker: "OHCS",
    company_name: "Optimus Healthcare Services, Inc.",
  },
  {
    cik_str: 1850266,
    ticker: "AKLI",
    company_name: "Akili, Inc.",
  },
  {
    cik_str: 1711291,
    ticker: "CURO",
    company_name: "CURO Group Holdings Corp.",
  },
  {
    cik_str: 1574565,
    ticker: "EVGN",
    company_name: "Evogene Ltd.",
  },
  {
    cik_str: 1750155,
    ticker: "CWBHF",
    company_name: "Charlotte's Web Holdings, Inc.",
  },
  {
    cik_str: 1437424,
    ticker: "POET",
    company_name: "POET TECHNOLOGIES INC.",
  },
  {
    cik_str: 1181505,
    ticker: "PYN",
    company_name: "PIMCO NEW YORK MUNICIPAL INCOME FUND III",
  },
  {
    cik_str: 1689448,
    ticker: "PNXLF",
    company_name: "Argentina Lithium & Energy Corp.",
  },
  {
    cik_str: 312257,
    ticker: "IVFH",
    company_name: "INNOVATIVE FOOD HOLDINGS INC",
  },
  {
    cik_str: 722572,
    ticker: "FKWL",
    company_name: "FRANKLIN WIRELESS CORP",
  },
  {
    cik_str: 1809158,
    ticker: "KUKE",
    company_name: "Kuke Music Holding Ltd",
  },
  {
    cik_str: 1844507,
    ticker: "AVHI",
    company_name: "Achari Ventures Holdings Corp. I",
  },
  {
    cik_str: 56701,
    ticker: "KOSS",
    company_name: "KOSS CORP",
  },
  {
    cik_str: 1859035,
    ticker: "MCAG",
    company_name: "Mountain Crest Acquisition Corp. V",
  },
  {
    cik_str: 1894954,
    ticker: "XPON",
    company_name: "Expion360 Inc.",
  },
  {
    cik_str: 1549145,
    ticker: "BIOF",
    company_name: "BLUE BIOFUELS, INC.",
  },
  {
    cik_str: 1537028,
    ticker: "ICD",
    company_name: "Independence Contract Drilling, Inc.",
  },
  {
    cik_str: 883107,
    ticker: "NANX",
    company_name: "NANOPHASE TECHNOLOGIES Corp",
  },
  {
    cik_str: 1279704,
    ticker: "CLRB",
    company_name: "Cellectar Biosciences, Inc.",
  },
  {
    cik_str: 1779372,
    ticker: "BEAT",
    company_name: "HeartBeam, Inc.",
  },
  {
    cik_str: 1757097,
    ticker: "CNTG",
    company_name: "Centogene N.V.",
  },
  {
    cik_str: 946563,
    ticker: "RVP",
    company_name: "RETRACTABLE TECHNOLOGIES INC",
  },
  {
    cik_str: 27093,
    ticker: "USAU",
    company_name: "U.S. GOLD CORP.",
  },
  {
    cik_str: 1862490,
    ticker: "DCFC",
    company_name: "Tritium DCFC Ltd",
  },
  {
    cik_str: 1849670,
    ticker: "PBBK",
    company_name: "PB Bankshares, Inc.",
  },
  {
    cik_str: 1560258,
    ticker: "ECOR",
    company_name: "electroCore, Inc.",
  },
  {
    cik_str: 1729173,
    ticker: "UXIN",
    company_name: "Uxin Ltd",
  },
  {
    cik_str: 1946703,
    ticker: "WBUY",
    company_name: "WEBUY GLOBAL LTD",
  },
  {
    cik_str: 1133062,
    ticker: "JANL",
    company_name: "JANEL CORP",
  },
  {
    cik_str: 718332,
    ticker: "RAVE",
    company_name: "RAVE RESTAURANT GROUP, INC.",
  },
  {
    cik_str: 1288770,
    ticker: "XTGRF",
    company_name: "XTRA-GOLD RESOURCES CORP",
  },
  {
    cik_str: 1667313,
    ticker: "ZDGE",
    company_name: "Zedge, Inc.",
  },
  {
    cik_str: 1196298,
    ticker: "NEPH",
    company_name: "NEPHROS INC",
  },
  {
    cik_str: 1847986,
    ticker: "DFLI",
    company_name: "Dragonfly Energy Holdings Corp.",
  },
  {
    cik_str: 91668,
    ticker: "SODI",
    company_name: "SOLITRON DEVICES INC",
  },
  {
    cik_str: 793524,
    ticker: "REFR",
    company_name: "RESEARCH FRONTIERS INC",
  },
  {
    cik_str: 1804583,
    ticker: "RAASY",
    company_name: "Cloopen Group Holding Ltd",
  },
  {
    cik_str: 1401914,
    ticker: "DARE",
    company_name: "Dare Bioscience, Inc.",
  },
  {
    cik_str: 889348,
    ticker: "CVU",
    company_name: "CPI AEROSTRUCTURES INC",
  },
  {
    cik_str: 1888151,
    ticker: "BCAN",
    company_name: "BYND CANNASOFT ENTERPRISES INC.",
  },
  {
    cik_str: 1391135,
    ticker: "LIFD",
    company_name: "LFTD PARTNERS INC.",
  },
  {
    cik_str: 833021,
    ticker: "CIF",
    company_name: "MFS INTERMEDIATE HIGH INCOME FUND",
  },
  {
    cik_str: 1589361,
    ticker: "WTRV",
    company_name: "White River Energy Corp.",
  },
  {
    cik_str: 1580063,
    ticker: "BIOR",
    company_name: "BIORA THERAPEUTICS, INC.",
  },
  {
    cik_str: 1962911,
    ticker: "INFT",
    company_name: "Infinity Bancorp",
  },
  {
    cik_str: 808326,
    ticker: "EMKR",
    company_name: "EMCORE CORP",
  },
  {
    cik_str: 1015739,
    ticker: "AWRE",
    company_name: "AWARE INC /MA/",
  },
  {
    cik_str: 1126115,
    ticker: "LZGI",
    company_name: "LZG INTERNATIONAL, INC.",
  },
  {
    cik_str: 1836176,
    ticker: "FATH",
    company_name: "Fathom Digital Manufacturing Corp",
  },
  {
    cik_str: 1070050,
    ticker: "APCX",
    company_name: "AppTech Payments Corp.",
  },
  {
    cik_str: 846913,
    ticker: "FTEK",
    company_name: "FUEL TECH, INC.",
  },
  {
    cik_str: 922247,
    ticker: "CYTH",
    company_name: "Cyclo Therapeutics, Inc.",
  },
  {
    cik_str: 1661998,
    ticker: "FIXX",
    company_name: "Homology Medicines, Inc.",
  },
  {
    cik_str: 1030471,
    ticker: "UTSI",
    company_name: "UTSTARCOM HOLDINGS CORP.",
  },
  {
    cik_str: 1944902,
    ticker: "OMH",
    company_name: "Ohmyhome Ltd",
  },
  {
    cik_str: 1687451,
    ticker: "ZKIN",
    company_name: "ZK International Group Co., Ltd.",
  },
  {
    cik_str: 1741220,
    ticker: "CWPE",
    company_name: "CW Petroleum Corp",
  },
  {
    cik_str: 1901799,
    ticker: "BTM",
    company_name: "Bitcoin Depot Inc.",
  },
  {
    cik_str: 1530766,
    ticker: "BSGM",
    company_name: "BioSig Technologies, Inc.",
  },
  {
    cik_str: 1847846,
    ticker: "EUDA",
    company_name: "EUDA Health Holdings Ltd",
  },
  {
    cik_str: 1178697,
    ticker: "SONM",
    company_name: "SONIM TECHNOLOGIES INC",
  },
  {
    cik_str: 1483510,
    ticker: "EXPR",
    company_name: "EXPRESS, INC.",
  },
  {
    cik_str: 1757715,
    ticker: "ATER",
    company_name: "Aterian, Inc.",
  },
  {
    cik_str: 1577445,
    ticker: "SCTC",
    company_name: "Odysight.ai Inc.",
  },
  {
    cik_str: 1828805,
    ticker: "ALMU",
    company_name: "Aeluma, Inc.",
  },
  {
    cik_str: 1861622,
    ticker: "JTAI",
    company_name: "Jet.AI Inc.",
  },
  {
    cik_str: 1834045,
    ticker: "VWE",
    company_name: "Vintage Wine Estates, Inc.",
  },
  {
    cik_str: 1058307,
    ticker: "NXPL",
    company_name: "NextPlat Corp",
  },
  {
    cik_str: 856128,
    ticker: "MFV",
    company_name: "MFS SPECIAL VALUE TRUST",
  },
  {
    cik_str: 1438461,
    ticker: "ELRE",
    company_name: "Yinfu Gold Corp.",
  },
  {
    cik_str: 1627282,
    ticker: "CWD",
    company_name: "CaliberCos Inc.",
  },
  {
    cik_str: 1651932,
    ticker: "XITO",
    company_name: "Xenous Holdings, Inc.",
  },
  {
    cik_str: 1819113,
    ticker: "SNCE",
    company_name: "Science 37 Holdings, Inc.",
  },
  {
    cik_str: 1624422,
    ticker: "PHXM",
    company_name: "PHAXIAM Therapeutics S.A.",
  },
  {
    cik_str: 1022652,
    ticker: "INSG",
    company_name: "INSEEGO CORP.",
  },
  {
    cik_str: 1282224,
    ticker: "DLPN",
    company_name: "Dolphin Entertainment, Inc.",
  },
  {
    cik_str: 1620749,
    ticker: "PHCI",
    company_name: "Panamera Holdings Corp",
  },
  {
    cik_str: 1908984,
    ticker: "ENDI",
    company_name: "ENDI Corp.",
  },
  {
    cik_str: 1850906,
    ticker: "OMIC",
    company_name: "Singular Genomics Systems, Inc.",
  },
  {
    cik_str: 1783432,
    ticker: "TETOF",
    company_name: "Tectonic Metals Inc.",
  },
  {
    cik_str: 1430300,
    ticker: "GWSO",
    company_name: "Global Warming Solutions, Inc.",
  },
  {
    cik_str: 1398172,
    ticker: "NASO",
    company_name: "Naples Soap Company, Inc.",
  },
  {
    cik_str: 1836242,
    ticker: "TKLF",
    company_name: "Yoshitsu Co., Ltd",
  },
  {
    cik_str: 65759,
    ticker: "MPAD",
    company_name: "MICROPAC INDUSTRIES INC",
  },
  {
    cik_str: 1915403,
    ticker: "SATX",
    company_name: "SatixFy Communications Ltd.",
  },
  {
    cik_str: 1624326,
    ticker: "PAVM",
    company_name: "PAVmed Inc.",
  },
  {
    cik_str: 1776909,
    ticker: "CURI",
    company_name: "CuriosityStream Inc.",
  },
  {
    cik_str: 1964021,
    ticker: "NCNC",
    company_name: "noco-noco Inc.",
  },
  {
    cik_str: 1117057,
    ticker: "PLAG",
    company_name: "Planet Green Holdings Corp.",
  },
  {
    cik_str: 1928948,
    ticker: "CACO",
    company_name: "Caravelle International Group",
  },
  {
    cik_str: 1815849,
    ticker: "ATIP",
    company_name: "ATI Physical Therapy, Inc.",
  },
  {
    cik_str: 1719406,
    ticker: "NRXP",
    company_name: "NRX Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1296774,
    ticker: "NCTY",
    company_name: "The9 LTD",
  },
  {
    cik_str: 1603207,
    ticker: "NTBL",
    company_name: "Notable Labs, Ltd.",
  },
  {
    cik_str: 1853774,
    ticker: "MCAF",
    company_name: "Mountain Crest Acquisition Corp. IV",
  },
  {
    cik_str: 89140,
    ticker: "SVT",
    company_name: "SERVOTRONICS INC /DE/",
  },
  {
    cik_str: 1397016,
    ticker: "OPXS",
    company_name: "Optex Systems Holdings Inc",
  },
  {
    cik_str: 1524769,
    ticker: "CHKR",
    company_name: "CHESAPEAKE GRANITE WASH TRUST",
  },
  {
    cik_str: 1855467,
    ticker: "CLAY",
    company_name: "Chavant Capital Acquisition Corp.",
  },
  {
    cik_str: 740664,
    ticker: "RFIL",
    company_name: "R F INDUSTRIES LTD",
  },
  {
    cik_str: 1160791,
    ticker: "GORO",
    company_name: "GOLD RESOURCE CORP",
  },
  {
    cik_str: 926617,
    ticker: "AWH",
    company_name: "Aspira Women's Health Inc.",
  },
  {
    cik_str: 1026980,
    ticker: "APWC",
    company_name: "ASIA PACIFIC WIRE & CABLE CORP LTD",
  },
  {
    cik_str: 1863460,
    ticker: "PPHP",
    company_name: "PHP Ventures Acquisition Corp.",
  },
  {
    cik_str: 1096275,
    ticker: "WKSP",
    company_name: "Worksport Ltd",
  },
  {
    cik_str: 845385,
    ticker: "PIAC",
    company_name: "PRINCETON CAPITAL CORP",
  },
  {
    cik_str: 1684693,
    ticker: "SLGL",
    company_name: "Sol-Gel Technologies Ltd.",
  },
  {
    cik_str: 1724542,
    ticker: "CLPS",
    company_name: "CLPS Inc",
  },
  {
    cik_str: 1409375,
    ticker: "OESX",
    company_name: "ORION ENERGY SYSTEMS, INC.",
  },
  {
    cik_str: 1213660,
    ticker: "BIMI",
    company_name: "BIMI International Medical Inc.",
  },
  {
    cik_str: 318833,
    ticker: "TISI",
    company_name: "TEAM INC",
  },
  {
    cik_str: 896494,
    ticker: "SNT",
    company_name: "SENSTAR TECHNOLOGIES LTD.",
  },
  {
    cik_str: 1879848,
    ticker: "PEV",
    company_name: "PHOENIX MOTOR INC.",
  },
  {
    cik_str: 857949,
    ticker: "CGA",
    company_name: "China Green Agriculture, Inc.",
  },
  {
    cik_str: 1616262,
    ticker: "RMCF",
    company_name: "Rocky Mountain Chocolate Factory, Inc.",
  },
  {
    cik_str: 1463361,
    ticker: "UBX",
    company_name: "Unity Biotechnology, Inc.",
  },
  {
    cik_str: 1810031,
    ticker: "FRLN",
    company_name: "Freeline Therapeutics Holdings plc",
  },
  {
    cik_str: 1713539,
    ticker: "KXIN",
    company_name: "Kaixin Auto Holdings",
  },
  {
    cik_str: 1951667,
    ticker: "CTNT",
    company_name: "CHEETAH NET SUPPLY CHAIN SERVICE INC.",
  },
  {
    cik_str: 709283,
    ticker: "QMCO",
    company_name: "QUANTUM CORP /DE/",
  },
  {
    cik_str: 1401708,
    ticker: "NSTG",
    company_name: "NanoString Technologies Inc",
  },
  {
    cik_str: 1505512,
    ticker: "RGLS",
    company_name: "Regulus Therapeutics Inc.",
  },
  {
    cik_str: 1839608,
    ticker: "GETR",
    company_name: "Getaround, Inc",
  },
  {
    cik_str: 1784168,
    ticker: "ELMSQ",
    company_name: "Electric Last Mile Solutions, Inc.",
  },
  {
    cik_str: 1819395,
    ticker: "SOND",
    company_name: "Sonder Holdings Inc.",
  },
  {
    cik_str: 831609,
    ticker: "CXXIF",
    company_name: "C21 Investments Inc.",
  },
  {
    cik_str: 1407583,
    ticker: "BHLL",
    company_name: "Bunker Hill Mining Corp.",
  },
  {
    cik_str: 1288855,
    ticker: "OPHC",
    company_name: "OptimumBank Holdings, Inc.",
  },
  {
    cik_str: 1813603,
    ticker: "HSTA",
    company_name: "Hestia Insight Inc.",
  },
  {
    cik_str: 1913838,
    ticker: "VWFB",
    company_name: "VWF Bancorp, Inc.",
  },
  {
    cik_str: 1929589,
    ticker: "MRDB",
    company_name: "MariaDB plc",
  },
  {
    cik_str: 1274737,
    ticker: "XGN",
    company_name: "EXAGEN INC.",
  },
  {
    cik_str: 1650287,
    ticker: "QYOUF",
    company_name: "QYOU Media Inc.",
  },
  {
    cik_str: 1852767,
    ticker: "MRT",
    company_name: "Marti Technologies, Inc.",
  },
  {
    cik_str: 825324,
    ticker: "GTIM",
    company_name: "Good Times Restaurants Inc.",
  },
  {
    cik_str: 83350,
    ticker: "RSRV",
    company_name: "RESERVE PETROLEUM CO",
  },
  {
    cik_str: 61004,
    ticker: "LGL",
    company_name: "LGL GROUP INC",
  },
  {
    cik_str: 351998,
    ticker: "DAIO",
    company_name: "DATA I/O CORP",
  },
  {
    cik_str: 90168,
    ticker: "SIF",
    company_name: "SIFCO INDUSTRIES INC",
  },
  {
    cik_str: 33992,
    ticker: "KINS",
    company_name: "KINGSTONE COMPANIES, INC.",
  },
  {
    cik_str: 1083220,
    ticker: "XELB",
    company_name: "XCel Brands, Inc.",
  },
  {
    cik_str: 1391933,
    ticker: "QNTO",
    company_name: "QUAINT OAK BANCORP INC",
  },
  {
    cik_str: 1088413,
    ticker: "GLGI",
    company_name: "GREYSTONE LOGISTICS, INC.",
  },
  {
    cik_str: 1844149,
    ticker: "SPEC",
    company_name: "Spectaire Holdings Inc.",
  },
  {
    cik_str: 1757840,
    ticker: "INDO",
    company_name: "Indonesia Energy Corp Ltd",
  },
  {
    cik_str: 1013706,
    ticker: "WHLM",
    company_name: "Wilhelmina International, Inc.",
  },
  {
    cik_str: 835662,
    ticker: "AIXN",
    company_name: "AiXin Life International, Inc.",
  },
  {
    cik_str: 1956744,
    ticker: "SRM",
    company_name: "SRM Entertainment, Inc.",
  },
  {
    cik_str: 1420529,
    ticker: "AACG",
    company_name: "ATA Creativity Global",
  },
  {
    cik_str: 1872525,
    ticker: "SWAG",
    company_name: "Stran & Company, Inc.",
  },
  {
    cik_str: 1473490,
    ticker: "WSCO",
    company_name: "Global AI, Inc.",
  },
  {
    cik_str: 1546296,
    ticker: "IPDN",
    company_name: "Professional Diversity Network, Inc.",
  },
  {
    cik_str: 1814329,
    ticker: "ASTR",
    company_name: "Astra Space, Inc.",
  },
  {
    cik_str: 1527702,
    ticker: "IQST",
    company_name: "iQSTEL Inc",
  },
  {
    cik_str: 764897,
    ticker: "BRST",
    company_name: "Broad Street Realty, Inc.",
  },
  {
    cik_str: 1095435,
    ticker: "PRTG",
    company_name: "PORTAGE BIOTECH INC.",
  },
  {
    cik_str: 1834585,
    ticker: "JOAN",
    company_name: "JOANN Inc.",
  },
  {
    cik_str: 1447380,
    ticker: "MFON",
    company_name: "MOBIVITY HOLDINGS CORP.",
  },
  {
    cik_str: 895665,
    ticker: "CLRD",
    company_name: "Clearday, Inc.",
  },
  {
    cik_str: 1759186,
    ticker: "COEP",
    company_name: "Coeptis Therapeutics Holdings, Inc.",
  },
  {
    cik_str: 1498148,
    ticker: "AITX",
    company_name: "Artificial Intelligence Technology Solutions Inc.",
  },
  {
    cik_str: 1443611,
    ticker: "SING",
    company_name: "SinglePoint Inc.",
  },
  {
    cik_str: 768216,
    ticker: "LOGQ",
    company_name: "Coyni, Inc.",
  },
  {
    cik_str: 838875,
    ticker: "WVVI",
    company_name: "WILLAMETTE VALLEY VINEYARDS INC",
  },
  {
    cik_str: 1450704,
    ticker: "VIVK",
    company_name: "Vivakor, Inc.",
  },
  {
    cik_str: 1553788,
    ticker: "SBEV",
    company_name: "SPLASH BEVERAGE GROUP, INC.",
  },
  {
    cik_str: 1082324,
    ticker: "VHC",
    company_name: "VirnetX Holding Corp",
  },
  {
    cik_str: 1320350,
    ticker: "LNSR",
    company_name: "LENSAR, Inc.",
  },
  {
    cik_str: 1847075,
    ticker: "SAI",
    company_name: "SAI.TECH Global Corp",
  },
  {
    cik_str: 1865429,
    ticker: "OAKV",
    company_name: "Oak View Bankshares, Inc.",
  },
  {
    cik_str: 1596812,
    ticker: "ENLV",
    company_name: "Enlivex Therapeutics Ltd.",
  },
  {
    cik_str: 87050,
    ticker: "NEON",
    company_name: "Neonode Inc.",
  },
  {
    cik_str: 1725332,
    ticker: "ALAR",
    company_name: "Alarum Technologies Ltd.",
  },
  {
    cik_str: 700764,
    ticker: "VYEY",
    company_name: "VICTORY OILFIELD TECH, INC.",
  },
  {
    cik_str: 101538,
    ticker: "UAMY",
    company_name: "UNITED STATES ANTIMONY CORP",
  },
  {
    cik_str: 1949478,
    ticker: "DTCK",
    company_name: "DAVIS COMMODITIES Ltd",
  },
  {
    cik_str: 1757143,
    ticker: "AIH",
    company_name: "Aesthetic Medical International Holdings Group Ltd",
  },
  {
    cik_str: 907654,
    ticker: "ABIO",
    company_name: "ARCA biopharma, Inc.",
  },
  {
    cik_str: 1780731,
    ticker: "EPOW",
    company_name: "Sunrise New Energy Co., Ltd.",
  },
  {
    cik_str: 1642380,
    ticker: "OCX",
    company_name: "Oncocyte Corp",
  },
  {
    cik_str: 1087294,
    ticker: "CPIX",
    company_name: "CUMBERLAND PHARMACEUTICALS INC",
  },
  {
    cik_str: 313364,
    ticker: "MTR",
    company_name: "MESA ROYALTY TRUST/TX",
  },
  {
    cik_str: 1871983,
    ticker: "ANGH",
    company_name: "Anghami Inc",
  },
  {
    cik_str: 1419041,
    ticker: "FBRX",
    company_name: "Forte Biosciences, Inc.",
  },
  {
    cik_str: 1039280,
    ticker: "NTWK",
    company_name: "NETSOL TECHNOLOGIES INC",
  },
  {
    cik_str: 1596856,
    ticker: "LEJU",
    company_name: "Leju Holdings Ltd",
  },
  {
    cik_str: 315958,
    ticker: "CRMZ",
    company_name: "CREDITRISKMONITOR COM INC",
  },
  {
    cik_str: 1144546,
    ticker: "HWTR",
    company_name: "HFactor, Inc.",
  },
  {
    cik_str: 1854078,
    ticker: "RLFTY",
    company_name: "Relief Therapeutics Holding SA",
  },
  {
    cik_str: 1481241,
    ticker: "PSHG",
    company_name: "Performance Shipping Inc.",
  },
  {
    cik_str: 1635729,
    ticker: "EQTRF",
    company_name: "Altamira Gold Corp.",
  },
  {
    cik_str: 1391426,
    ticker: "CLNV",
    company_name: "Clean Vision Corp",
  },
  {
    cik_str: 1595097,
    ticker: "CRBP",
    company_name: "Corbus Pharmaceuticals Holdings, Inc.",
  },
  {
    cik_str: 1008586,
    ticker: "STRM",
    company_name: "STREAMLINE HEALTH SOLUTIONS INC.",
  },
  {
    cik_str: 1091596,
    ticker: "AURX",
    company_name: "Nuo Therapeutics, Inc.",
  },
  {
    cik_str: 1122020,
    ticker: "PCSV",
    company_name: "PCS Edventures!, Inc.",
  },
  {
    cik_str: 352955,
    ticker: "CKX",
    company_name: "CKX LANDS, INC.",
  },
  {
    cik_str: 1879403,
    ticker: "LRHC",
    company_name: "La Rosa Holdings Corp.",
  },
  {
    cik_str: 946454,
    ticker: "FGH",
    company_name: "FG Group Holdings Inc.",
  },
  {
    cik_str: 1769624,
    ticker: "AGBA",
    company_name: "AGBA Group Holding Ltd.",
  },
  {
    cik_str: 101594,
    ticker: "USEG",
    company_name: "US ENERGY CORP",
  },
  {
    cik_str: 1418489,
    ticker: "GNRV",
    company_name: "GRAND RIVER COMMERCE INC",
  },
  {
    cik_str: 1779476,
    ticker: "KRKR",
    company_name: "36Kr Holdings Inc.",
  },
  {
    cik_str: 1751707,
    ticker: "UNXP",
    company_name: "United Express Inc.",
  },
  {
    cik_str: 25743,
    ticker: "TXMD",
    company_name: "TherapeuticsMD, Inc.",
  },
  {
    cik_str: 722313,
    ticker: "NSYS",
    company_name: "NORTECH SYSTEMS INC",
  },
  {
    cik_str: 946644,
    ticker: "AIM",
    company_name: "AIM ImmunoTech Inc.",
  },
  {
    cik_str: 1553846,
    ticker: "RDHL",
    company_name: "RedHill Biopharma Ltd.",
  },
  {
    cik_str: 1835059,
    ticker: "ARVL",
    company_name: "Arrival",
  },
  {
    cik_str: 1761911,
    ticker: "NOWG",
    company_name: "Nowigence Inc.",
  },
  {
    cik_str: 1309082,
    ticker: "CEI",
    company_name: "CAMBER ENERGY, INC.",
  },
  {
    cik_str: 1905660,
    ticker: "HUBC",
    company_name: "Hub Cyber Security Ltd.",
  },
  {
    cik_str: 868822,
    ticker: "CRCUF",
    company_name: "Canagold Resources Ltd.",
  },
  {
    cik_str: 1297937,
    ticker: "PRKA",
    company_name: "PARKS AMERICA, INC",
  },
  {
    cik_str: 1828522,
    ticker: "EFTR",
    company_name: "eFFECTOR Therapeutics, Inc.",
  },
  {
    cik_str: 1412126,
    ticker: "RMSL",
    company_name: "RemSleep Holdings Inc.",
  },
  {
    cik_str: 1277250,
    ticker: "CRGE",
    company_name: "Charge Enterprises, Inc.",
  },
  {
    cik_str: 1723580,
    ticker: "BFI",
    company_name: "BurgerFi International, Inc.",
  },
  {
    cik_str: 1842138,
    ticker: "WRPT",
    company_name: "WARPSPEED TAXI INC.",
  },
  {
    cik_str: 1546853,
    ticker: "SKKY",
    company_name: "Skkynet Cloud Systems, Inc.",
  },
  {
    cik_str: 1346610,
    ticker: "SOS",
    company_name: "SOS Ltd",
  },
  {
    cik_str: 1098880,
    ticker: "IGXT",
    company_name: "IntelGenx Technologies Corp.",
  },
  {
    cik_str: 1804469,
    ticker: "GFAI",
    company_name: "Guardforce AI Co., Ltd.",
  },
  {
    cik_str: 899782,
    ticker: "NOM",
    company_name: "NUVEEN MISSOURI QUALITY MUNICIPAL INCOME FUND",
  },
  {
    cik_str: 1436229,
    ticker: "BTCS",
    company_name: "BTCS Inc.",
  },
  {
    cik_str: 1781726,
    ticker: "NPLS",
    company_name: "NP Life Sciences Health Industry Group Inc.",
  },
  {
    cik_str: 1452965,
    ticker: "UTRS",
    company_name: "MINERVA SURGICAL INC",
  },
  {
    cik_str: 1260990,
    ticker: "ONCT",
    company_name: "Oncternal Therapeutics, Inc.",
  },
  {
    cik_str: 1038277,
    ticker: "INIS",
    company_name: "INTERNATIONAL ISOTOPES INC",
  },
  {
    cik_str: 850261,
    ticker: "SRNEQ",
    company_name: "Sorrento Therapeutics, Inc.",
  },
  {
    cik_str: 1841425,
    ticker: "VGAS",
    company_name: "Verde Clean Fuels, Inc.",
  },
  {
    cik_str: 1718817,
    ticker: "MSNVF",
    company_name: "MISSION READY SOLUTIONS INC",
  },
  {
    cik_str: 1638298,
    ticker: "UGEIF",
    company_name: "UGE International Ltd.",
  },
  {
    cik_str: 1498067,
    ticker: "CTGL",
    company_name: "CITRINE GLOBAL, CORP.",
  },
  {
    cik_str: 1746466,
    ticker: "EQ",
    company_name: "Equillium, Inc.",
  },
  {
    cik_str: 320017,
    ticker: "LSTA",
    company_name: "LISATA THERAPEUTICS, INC.",
  },
  {
    cik_str: 1570843,
    ticker: "GEBRF",
    company_name: "Greenbriar Sustainable Living Inc.",
  },
  {
    cik_str: 1832487,
    ticker: "GUER",
    company_name: "Guerrilla RF, Inc.",
  },
  {
    cik_str: 1071840,
    ticker: "WNDW",
    company_name: "SolarWindow Technologies, Inc.",
  },
  {
    cik_str: 1659323,
    ticker: "ITRM",
    company_name: "Iterum Therapeutics plc",
  },
  {
    cik_str: 1304161,
    ticker: "PBSV",
    company_name: "Pharma-Bio Serv, Inc.",
  },
  {
    cik_str: 1978811,
    ticker: "GOVB",
    company_name: "Gouverneur Bancorp, Inc./MD/",
  },
  {
    cik_str: 10048,
    ticker: "BRN",
    company_name: "BARNWELL INDUSTRIES INC",
  },
  {
    cik_str: 1158780,
    ticker: "PLUR",
    company_name: "Pluri Inc.",
  },
  {
    cik_str: 1912847,
    ticker: "USEA",
    company_name: "United Maritime Corp",
  },
  {
    cik_str: 1555017,
    ticker: "SKYI",
    company_name: "Sky Century Investment, Inc.",
  },
  {
    cik_str: 1841209,
    ticker: "HOLO",
    company_name: "MicroCloud Hologram Inc.",
  },
  {
    cik_str: 1099160,
    ticker: "BBGI",
    company_name: "BEASLEY BROADCAST GROUP INC",
  },
  {
    cik_str: 1487197,
    ticker: "BRFH",
    company_name: "BARFRESH FOOD GROUP INC.",
  },
  {
    cik_str: 1620179,
    ticker: "XELA",
    company_name: "Exela Technologies, Inc.",
  },
  {
    cik_str: 1356093,
    ticker: "CREX",
    company_name: "CREATIVE REALITIES, INC.",
  },
  {
    cik_str: 1648636,
    ticker: "TRLEF",
    company_name: "Trillion Energy International Inc.",
  },
  {
    cik_str: 1000230,
    ticker: "OCC",
    company_name: "OPTICAL CABLE CORP",
  },
  {
    cik_str: 1869974,
    ticker: "OCEA",
    company_name: "Ocean Biomedical, Inc.",
  },
  {
    cik_str: 1961592,
    ticker: "GSHRF",
    company_name: "GOLDSHORE RESOURCES INC.",
  },
  {
    cik_str: 1477246,
    ticker: "SANW",
    company_name: "S&W Seed Co",
  },
  {
    cik_str: 1817232,
    ticker: "DUNE",
    company_name: "Dune Acquisition Corp",
  },
  {
    cik_str: 1101433,
    ticker: "QMCI",
    company_name: "QUOTEMEDIA INC",
  },
  {
    cik_str: 1419951,
    ticker: "DTST",
    company_name: "Data Storage Corp",
  },
  {
    cik_str: 1831868,
    ticker: "ICU",
    company_name: "SeaStar Medical Holding Corp",
  },
  {
    cik_str: 830616,
    ticker: "SCIA",
    company_name: "SCI Engineered Materials, Inc.",
  },
  {
    cik_str: 1396536,
    ticker: "DUOT",
    company_name: "DUOS TECHNOLOGIES GROUP, INC.",
  },
  {
    cik_str: 1930179,
    ticker: "ARBB",
    company_name: "ARB IOT Group Ltd",
  },
  {
    cik_str: 1126234,
    ticker: "LUMO",
    company_name: "LUMOS PHARMA, INC.",
  },
  {
    cik_str: 1766140,
    ticker: "UNCY",
    company_name: "Unicycive Therapeutics, Inc.",
  },
  {
    cik_str: 1614744,
    ticker: "PPBT",
    company_name: "PURPLE BIOTECH LTD.",
  },
  {
    cik_str: 1904286,
    ticker: "MIRA",
    company_name: "MIRA PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1004989,
    ticker: "SGRP",
    company_name: "SPAR Group, Inc.",
  },
  {
    cik_str: 1765850,
    ticker: "PWM",
    company_name: "Prestige Wealth Inc.",
  },
  {
    cik_str: 1759546,
    ticker: "RIDEQ",
    company_name: "Lordstown Motors Corp.",
  },
  {
    cik_str: 1629210,
    ticker: "PZG",
    company_name: "Paramount Gold Nevada Corp.",
  },
  {
    cik_str: 1413898,
    ticker: "DALN",
    company_name: "DallasNews Corp",
  },
  {
    cik_str: 1643715,
    ticker: "LISMF",
    company_name: "LITHIUM SOUTH DEVELOPMENT Corp",
  },
  {
    cik_str: 1818644,
    ticker: "LIDR",
    company_name: "AEye, Inc.",
  },
  {
    cik_str: 1310527,
    ticker: "QSAM",
    company_name: "QSAM Biosciences, Inc.",
  },
  {
    cik_str: 1600422,
    ticker: "SDPI",
    company_name: "Superior Drilling Products, Inc.",
  },
  {
    cik_str: 1714562,
    ticker: "GAME",
    company_name: "GameSquare Holdings, Inc.",
  },
  {
    cik_str: 1938865,
    ticker: "TCJH",
    company_name: "Top KingWin Ltd",
  },
  {
    cik_str: 1051514,
    ticker: "SSKN",
    company_name: "STRATA Skin Sciences, Inc.",
  },
  {
    cik_str: 1378140,
    ticker: "OPTT",
    company_name: "Ocean Power Technologies, Inc.",
  },
  {
    cik_str: 1776932,
    ticker: "MMNFF",
    company_name: "MedMen Enterprises, Inc.",
  },
  {
    cik_str: 1445815,
    ticker: "BIXT",
    company_name: "BIOXYTRAN, INC",
  },
  {
    cik_str: 1783032,
    ticker: "ELEV",
    company_name: "Elevation Oncology, Inc.",
  },
  {
    cik_str: 1134765,
    ticker: "CHUC",
    company_name: "Charlie's Holdings, Inc.",
  },
  {
    cik_str: 1825349,
    ticker: "CHSN",
    company_name: "Chanson International Holding",
  },
  {
    cik_str: 1854445,
    ticker: "VRAR",
    company_name: "Glimpse Group, Inc.",
  },
  {
    cik_str: 66418,
    ticker: "MXC",
    company_name: "MEXCO ENERGY CORP",
  },
  {
    cik_str: 1537435,
    ticker: "TGEN",
    company_name: "TECOGEN INC.",
  },
  {
    cik_str: 1708176,
    ticker: "HOFV",
    company_name: "Hall of Fame Resort & Entertainment Co",
  },
  {
    cik_str: 1449349,
    ticker: "RDGL",
    company_name: "VIVOS INC",
  },
  {
    cik_str: 1183765,
    ticker: "MTEM",
    company_name: "Molecular Templates, Inc.",
  },
  {
    cik_str: 732026,
    ticker: "TRT",
    company_name: "TRIO-TECH INTERNATIONAL",
  },
  {
    cik_str: 1874252,
    ticker: "MYNZ",
    company_name: "MAINZ BIOMED N.V.",
  },
  {
    cik_str: 1374339,
    ticker: "PMN",
    company_name: "ProMIS Neurosciences Inc.",
  },
  {
    cik_str: 1676047,
    ticker: "NTRB",
    company_name: "NutriBand Inc.",
  },
  {
    cik_str: 1311673,
    ticker: "YTFD",
    company_name: "Yale Transaction Finders, Inc.",
  },
  {
    cik_str: 1907184,
    ticker: "ELBM",
    company_name: "Electra Battery Materials Corp",
  },
  {
    cik_str: 1172631,
    ticker: "SUNW",
    company_name: "Sunworks, Inc.",
  },
  {
    cik_str: 1709819,
    ticker: "FEDU",
    company_name: "Four Seasons Education (Cayman) Inc.",
  },
  {
    cik_str: 725394,
    ticker: "DFCO",
    company_name: "DALRADA FINANCIAL CORP",
  },
  {
    cik_str: 1638287,
    ticker: "NRBO",
    company_name: "NeuroBo Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1652539,
    ticker: "SNRG",
    company_name: "SusGlobal Energy Corp.",
  },
  {
    cik_str: 1701756,
    ticker: "SDOT",
    company_name: "Sadot Group Inc.",
  },
  {
    cik_str: 1083490,
    ticker: "SRRE",
    company_name: "SUNRISE REAL ESTATE GROUP INC",
  },
  {
    cik_str: 1445942,
    ticker: "TMRC",
    company_name: "Texas Mineral Resources Corp.",
  },
  {
    cik_str: 1840780,
    ticker: "LOCL",
    company_name: "Local Bounti Corporation/DE",
  },
  {
    cik_str: 1781397,
    ticker: "EEIQ",
    company_name: "EpicQuest Education Group International Ltd",
  },
  {
    cik_str: 1591956,
    ticker: "ANY",
    company_name: "Sphere 3D Corp.",
  },
  {
    cik_str: 1481443,
    ticker: "TCRI",
    company_name: "TechCom, Inc.",
  },
  {
    cik_str: 862022,
    ticker: "HGTXU",
    company_name: "HUGOTON ROYALTY TRUST",
  },
  {
    cik_str: 1762359,
    ticker: "ACRHF",
    company_name: "Acreage Holdings, Inc.",
  },
  {
    cik_str: 1493130,
    ticker: "MAPPF",
    company_name: "PROSTAR HOLDINGS INC. /BC",
  },
  {
    cik_str: 942126,
    ticker: "TAIT",
    company_name: "TAITRON COMPONENTS INC",
  },
  {
    cik_str: 1444192,
    ticker: "ACST",
    company_name: "Acasti Pharma Inc.",
  },
  {
    cik_str: 1563568,
    ticker: "EVTV",
    company_name: "Envirotech Vehicles, Inc.",
  },
  {
    cik_str: 1820875,
    ticker: "CXAI",
    company_name: "CXApp Inc.",
  },
  {
    cik_str: 867038,
    ticker: "SPND",
    company_name: "SPINDLETOP OIL & GAS CO",
  },
  {
    cik_str: 1069394,
    ticker: "FSI",
    company_name: "FLEXIBLE SOLUTIONS INTERNATIONAL INC",
  },
  {
    cik_str: 1735556,
    ticker: "BTOG",
    company_name: "BIT ORIGIN Ltd",
  },
  {
    cik_str: 1823365,
    ticker: "GBNY",
    company_name: "Generations Bancorp NY, Inc.",
  },
  {
    cik_str: 1218683,
    ticker: "MIGI",
    company_name: "Mawson Infrastructure Group Inc.",
  },
  {
    cik_str: 1138978,
    ticker: "NVOS",
    company_name: "Novo Integrated Sciences, Inc.",
  },
  {
    cik_str: 1744494,
    ticker: "ADN",
    company_name: "ADVENT TECHNOLOGIES HOLDINGS, INC.",
  },
  {
    cik_str: 840715,
    ticker: "CLRO",
    company_name: "CLEARONE INC",
  },
  {
    cik_str: 1157075,
    ticker: "PMCB",
    company_name: "PharmaCyte Biotech, Inc.",
  },
  {
    cik_str: 1015647,
    ticker: "AAU",
    company_name: "ALMADEN MINERALS LTD",
  },
  {
    cik_str: 1638097,
    ticker: "ENTX",
    company_name: "Entera Bio Ltd.",
  },
  {
    cik_str: 1713923,
    ticker: "JT",
    company_name: "Jianpu Technology Inc.",
  },
  {
    cik_str: 1826681,
    ticker: "STRC",
    company_name: "Sarcos Technology & Robotics Corp",
  },
  {
    cik_str: 1928581,
    ticker: "FTEL",
    company_name: "Fitell Corp",
  },
  {
    cik_str: 1359931,
    ticker: "TARA",
    company_name: "Protara Therapeutics, Inc.",
  },
  {
    cik_str: 878932,
    ticker: "EQS",
    company_name: "EQUUS TOTAL RETURN, INC.",
  },
  {
    cik_str: 1840233,
    ticker: "XLO",
    company_name: "Xilio Therapeutics, Inc.",
  },
  {
    cik_str: 1839132,
    ticker: "MVLA",
    company_name: "Movella Holdings Inc.",
  },
  {
    cik_str: 1606698,
    ticker: "ALPP",
    company_name: "ALPINE 4 HOLDINGS, INC.",
  },
  {
    cik_str: 1963439,
    ticker: "TURB",
    company_name: "Turbo Energy, S.A.",
  },
  {
    cik_str: 1412486,
    ticker: "COCP",
    company_name: "Cocrystal Pharma, Inc.",
  },
  {
    cik_str: 1769116,
    ticker: "VIAO",
    company_name: "VIA optronics AG",
  },
  {
    cik_str: 1402945,
    ticker: "RXMD",
    company_name: "Progressive Care Inc.",
  },
  {
    cik_str: 1678848,
    ticker: "BIMT",
    company_name: "CAMBELL INTERNATIONAL HOLDING CORP.",
  },
  {
    cik_str: 719494,
    ticker: "INRD",
    company_name: "Inrad Optics, Inc.",
  },
  {
    cik_str: 837852,
    ticker: "IDEX",
    company_name: "IDEANOMICS, INC.",
  },
  {
    cik_str: 1066764,
    ticker: "BTTC",
    company_name: "Bitech Technologies Corp",
  },
  {
    cik_str: 1698702,
    ticker: "ARGC",
    company_name: "ARION GROUP CORP.",
  },
  {
    cik_str: 1326205,
    ticker: "IGC",
    company_name: "IGC Pharma, Inc.",
  },
  {
    cik_str: 880406,
    ticker: "CUBA",
    company_name: "HERZFELD CARIBBEAN BASIN FUND INC",
  },
  {
    cik_str: 1307579,
    ticker: "LIQT",
    company_name: "LIQTECH INTERNATIONAL INC",
  },
  {
    cik_str: 1339005,
    ticker: "FEMY",
    company_name: "FEMASYS INC",
  },
  {
    cik_str: 1538495,
    ticker: "ETST",
    company_name: "Earth Science Tech, Inc.",
  },
  {
    cik_str: 915358,
    ticker: "SGMA",
    company_name: "SIGMATRON INTERNATIONAL INC",
  },
  {
    cik_str: 314227,
    ticker: "TOMZ",
    company_name: "TOMI Environmental Solutions, Inc.",
  },
  {
    cik_str: 98338,
    ticker: "TSRI",
    company_name: "TSR INC",
  },
  {
    cik_str: 1231339,
    ticker: "ASRE",
    company_name: "Astra Energy, Inc.",
  },
  {
    cik_str: 1163560,
    ticker: "GTMAY",
    company_name: "GRUPO TMM SAB",
  },
  {
    cik_str: 882361,
    ticker: "APTO",
    company_name: "Aptose Biosciences Inc.",
  },
  {
    cik_str: 1549084,
    ticker: "EKSO",
    company_name: "EKSO BIONICS HOLDINGS, INC.",
  },
  {
    cik_str: 1406944,
    ticker: "TRBMF",
    company_name: "TORQ RESOURCES INC.",
  },
  {
    cik_str: 1413891,
    ticker: "HWNI",
    company_name: "HIGH WIRE NETWORKS, INC.",
  },
  {
    cik_str: 1811115,
    ticker: "RNLX",
    company_name: "Renalytix plc",
  },
  {
    cik_str: 1074543,
    ticker: "FBPI",
    company_name: "FIRST BANCORP OF INDIANA INC",
  },
  {
    cik_str: 1828253,
    ticker: "EVAX",
    company_name: "Evaxion Biotech A/S",
  },
  {
    cik_str: 1575858,
    ticker: "PUBC",
    company_name: "PureBase Corp",
  },
  {
    cik_str: 1393781,
    ticker: "QIND",
    company_name: "Quality Industrial Corp.",
  },
  {
    cik_str: 1156041,
    ticker: "HUSA",
    company_name: "HOUSTON AMERICAN ENERGY CORP",
  },
  {
    cik_str: 1008848,
    ticker: "ACOR",
    company_name: "Acorda Therapeutics, Inc.",
  },
  {
    cik_str: 1641489,
    ticker: "VTVT",
    company_name: "vTv Therapeutics Inc.",
  },
  {
    cik_str: 1716338,
    ticker: "PT",
    company_name: "Pintec Technology Holdings Ltd",
  },
  {
    cik_str: 771999,
    ticker: "DSS",
    company_name: "DSS, INC.",
  },
  {
    cik_str: 1081745,
    ticker: "INLX",
    company_name: "INTELLINETICS, INC.",
  },
  {
    cik_str: 1775194,
    ticker: "UPXI",
    company_name: "UPEXI, INC.",
  },
  {
    cik_str: 1909417,
    ticker: "SLNA",
    company_name: "SELINA HOSPITALITY PLC",
  },
  {
    cik_str: 1479419,
    ticker: "KALA",
    company_name: "KALA BIO, Inc.",
  },
  {
    cik_str: 1061027,
    ticker: "VIRX",
    company_name: "Viracta Therapeutics, Inc.",
  },
  {
    cik_str: 1090396,
    ticker: "TBTC",
    company_name: "TABLE TRAC INC",
  },
  {
    cik_str: 1321517,
    ticker: "SRNW",
    company_name: "Stratos Renewables Corp",
  },
  {
    cik_str: 1751876,
    ticker: "PAVS",
    company_name: "Paranovus Entertainment Technology Ltd.",
  },
  {
    cik_str: 1691221,
    ticker: "FRSX",
    company_name: "Foresight Autonomous Holdings Ltd.",
  },
  {
    cik_str: 885307,
    ticker: "JCTCF",
    company_name: "JEWETT CAMERON TRADING CO LTD",
  },
  {
    cik_str: 1935418,
    ticker: "FMST",
    company_name: "Foremost Lithium Resource & Technology Ltd.",
  },
  {
    cik_str: 1138867,
    ticker: "EESH",
    company_name: "EESTech, Inc.",
  },
  {
    cik_str: 1709626,
    ticker: "NCNA",
    company_name: "NuCana plc",
  },
  {
    cik_str: 888721,
    ticker: "TRIB",
    company_name: "TRINITY BIOTECH PLC",
  },
  {
    cik_str: 1595527,
    ticker: "NYC",
    company_name: "American Strategic Investment Co.",
  },
  {
    cik_str: 1285170,
    ticker: "ITMSF",
    company_name: "INTERMAP TECHNOLOGIES CORP",
  },
  {
    cik_str: 1006028,
    ticker: "PURE",
    company_name: "PURE BIOSCIENCE, INC.",
  },
  {
    cik_str: 1821468,
    ticker: "YQ",
    company_name: "17 Education & Technology Group Inc.",
  },
  {
    cik_str: 1903995,
    ticker: "MGIH",
    company_name: "Millennium Group International Holdings Ltd",
  },
  {
    cik_str: 1733413,
    ticker: "TFFP",
    company_name: "TFF Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1534133,
    ticker: "CALC",
    company_name: "CalciMedica, Inc.",
  },
  {
    cik_str: 1355839,
    ticker: "PALT",
    company_name: "PALTALK, INC.",
  },
  {
    cik_str: 1082038,
    ticker: "DRRX",
    company_name: "DURECT CORP",
  },
  {
    cik_str: 1659617,
    ticker: "MBRX",
    company_name: "Moleculin Biotech, Inc.",
  },
  {
    cik_str: 1687277,
    ticker: "RETO",
    company_name: "ReTo Eco-Solutions, Inc.",
  },
  {
    cik_str: 1034760,
    ticker: "WYY",
    company_name: "WIDEPOINT CORP",
  },
  {
    cik_str: 86115,
    ticker: "SFE",
    company_name: "SAFEGUARD SCIENTIFICS INC",
  },
  {
    cik_str: 1777319,
    ticker: "CISO",
    company_name: "CISO Global, Inc.",
  },
  {
    cik_str: 1169034,
    ticker: "BHV",
    company_name: "BLACKROCK VIRGINIA MUNICIPAL BOND TRUST",
  },
  {
    cik_str: 1509223,
    ticker: "MTBL",
    company_name: "Moatable, Inc.",
  },
  {
    cik_str: 1741534,
    ticker: "MDJH",
    company_name: "MDJM LTD",
  },
  {
    cik_str: 1819794,
    ticker: "HTOO",
    company_name: "Fusion Fuel Green PLC",
  },
  {
    cik_str: 1583771,
    ticker: "HEPA",
    company_name: "Hepion Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1518461,
    ticker: "AMPG",
    company_name: "AmpliTech Group, Inc.",
  },
  {
    cik_str: 908259,
    ticker: "OTLC",
    company_name: "Oncotelic Therapeutics, Inc.",
  },
  {
    cik_str: 806517,
    ticker: "PMD",
    company_name: "PSYCHEMEDICS CORP",
  },
  {
    cik_str: 1854270,
    ticker: "SNTI",
    company_name: "Senti Biosciences, Inc.",
  },
  {
    cik_str: 73290,
    ticker: "BMRA",
    company_name: "BIOMERICA INC",
  },
  {
    cik_str: 1881472,
    ticker: "MEGL",
    company_name: "Magic Empire Global Ltd",
  },
  {
    cik_str: 1310291,
    ticker: "BWVI",
    company_name: "PSYCHECEUTICAL BIOSCIENCE, INC.",
  },
  {
    cik_str: 1819704,
    ticker: "MRM",
    company_name: "Medirom Healthcare Technologies Inc.",
  },
  {
    cik_str: 1878313,
    ticker: "MAIA",
    company_name: "MAIA Biotechnology, Inc.",
  },
  {
    cik_str: 1684888,
    ticker: "GFGSF",
    company_name: "GFG Resources Inc.",
  },
  {
    cik_str: 1742341,
    ticker: "HKIT",
    company_name: "HiTek Global Inc.",
  },
  {
    cik_str: 1419275,
    ticker: "RVYL",
    company_name: "RYVYL Inc.",
  },
  {
    cik_str: 87802,
    ticker: "SCND",
    company_name: "SCIENTIFIC INDUSTRIES INC",
  },
  {
    cik_str: 1080657,
    ticker: "SQFT",
    company_name: "Presidio Property Trust, Inc.",
  },
  {
    cik_str: 1869467,
    ticker: "OP",
    company_name: "OceanPal Inc.",
  },
  {
    cik_str: 1677897,
    ticker: "UPYY",
    company_name: "UPAY",
  },
  {
    cik_str: 19871,
    ticker: "CVR",
    company_name: "CHICAGO RIVET & MACHINE CO",
  },
  {
    cik_str: 1829247,
    ticker: "BFRG",
    company_name: "BullFrog AI Holdings, Inc.",
  },
  {
    cik_str: 707388,
    ticker: "STRR",
    company_name: "STAR EQUITY HOLDINGS, INC.",
  },
  {
    cik_str: 1842952,
    ticker: "CNTX",
    company_name: "Context Therapeutics Inc.",
  },
  {
    cik_str: 1759614,
    ticker: "YJ",
    company_name: "Yunji Inc.",
  },
  {
    cik_str: 1634293,
    ticker: "EXDW",
    company_name: "Exceed World, Inc.",
  },
  {
    cik_str: 1533743,
    ticker: "PCSA",
    company_name: "Processa Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1857044,
    ticker: "INDP",
    company_name: "Indaptus Therapeutics, Inc.",
  },
  {
    cik_str: 1792554,
    ticker: "EQMEF",
    company_name: "Equity Metals Corp",
  },
  {
    cik_str: 1743971,
    ticker: "MOGU",
    company_name: "MOGU Inc.",
  },
  {
    cik_str: 1784254,
    ticker: "MDIA",
    company_name: "Mediaco Holding Inc.",
  },
  {
    cik_str: 1098146,
    ticker: "PNBK",
    company_name: "PATRIOT NATIONAL BANCORP INC",
  },
  {
    cik_str: 34285,
    ticker: "RLBY",
    company_name: "RELIABILITY INC",
  },
  {
    cik_str: 1672572,
    ticker: "LNBY",
    company_name: "Landbay Inc",
  },
  {
    cik_str: 1811856,
    ticker: "VIEW",
    company_name: "View, Inc.",
  },
  {
    cik_str: 1686000,
    ticker: "JGLDF",
    company_name: "Japan Gold Corp.",
  },
  {
    cik_str: 797465,
    ticker: "STLY",
    company_name: "HG Holdings, Inc.",
  },
  {
    cik_str: 1783036,
    ticker: "NLSP",
    company_name: "NLS Pharmaceutics Ltd.",
  },
  {
    cik_str: 1130598,
    ticker: "ONTX",
    company_name: "Onconova Therapeutics, Inc.",
  },
  {
    cik_str: 1541157,
    ticker: "AKTX",
    company_name: "Akari Therapeutics Plc",
  },
  {
    cik_str: 1800315,
    ticker: "GLTO",
    company_name: "Galecto, Inc.",
  },
  {
    cik_str: 1829802,
    ticker: "SNSE",
    company_name: "Sensei Biotherapeutics, Inc.",
  },
  {
    cik_str: 1583648,
    ticker: "PIRS",
    company_name: "PIERIS PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 880984,
    ticker: "ACFN",
    company_name: "ACORN ENERGY, INC.",
  },
  {
    cik_str: 1824893,
    ticker: "SRZN",
    company_name: "Surrozen, Inc./DE",
  },
  {
    cik_str: 1042418,
    ticker: "INTI",
    company_name: "Inhibitor Therapeutics, Inc.",
  },
  {
    cik_str: 1460602,
    ticker: "ORGS",
    company_name: "Orgenesis Inc.",
  },
  {
    cik_str: 1589061,
    ticker: "GYRO",
    company_name: "Gyrodyne, LLC",
  },
  {
    cik_str: 1527541,
    ticker: "WHLR",
    company_name: "Wheeler Real Estate Investment Trust, Inc.",
  },
  {
    cik_str: 1171008,
    ticker: "ADMG",
    company_name: "ADAMANT DRI PROCESSING & MINERALS GROUP",
  },
  {
    cik_str: 1698022,
    ticker: "FMFG",
    company_name: "Farmers & Merchants Bancshares, Inc.",
  },
  {
    cik_str: 890066,
    ticker: "GLBZ",
    company_name: "GLEN BURNIE BANCORP",
  },
  {
    cik_str: 1509646,
    ticker: "FENG",
    company_name: "Phoenix New Media Ltd",
  },
  {
    cik_str: 1385818,
    ticker: "AYTU",
    company_name: "AYTU BIOPHARMA, INC",
  },
  {
    cik_str: 1807893,
    ticker: "SPFX",
    company_name: "STANDARD PREMIUM FINANCE HOLDINGS, INC.",
  },
  {
    cik_str: 1420565,
    ticker: "ALRN",
    company_name: "AILERON THERAPEUTICS INC",
  },
  {
    cik_str: 1805521,
    ticker: "FFIE",
    company_name: "FARADAY FUTURE INTELLIGENT ELECTRIC INC.",
  },
  {
    cik_str: 1103795,
    ticker: "QSEP",
    company_name: "QS Energy, Inc.",
  },
  {
    cik_str: 1558924,
    ticker: "PKKFF",
    company_name: "Tenet Fintech Group Inc.",
  },
  {
    cik_str: 1627554,
    ticker: "PDRO",
    company_name: "Pedro's List, Inc.",
  },
  {
    cik_str: 1590695,
    ticker: "TLCC",
    company_name: "TWINLAB CONSOLIDATED HOLDINGS, INC.",
  },
  {
    cik_str: 1339688,
    ticker: "LCGMF",
    company_name: "LION COPPER & GOLD CORP.",
  },
  {
    cik_str: 1855509,
    ticker: "VEEE",
    company_name: "Twin Vee PowerCats, Co.",
  },
  {
    cik_str: 1105101,
    ticker: "GIGM",
    company_name: "GIGAMEDIA Ltd",
  },
  {
    cik_str: 1813783,
    ticker: "VMAR",
    company_name: "Vision Marine Technologies Inc.",
  },
  {
    cik_str: 1056358,
    ticker: "MTEX",
    company_name: "MANNATECH INC",
  },
  {
    cik_str: 764195,
    ticker: "VBIV",
    company_name: "VBI Vaccines Inc/BC",
  },
  {
    cik_str: 876235,
    ticker: "EGYF",
    company_name: "ENERGY FINDERS INC",
  },
  {
    cik_str: 1465470,
    ticker: "SHMP",
    company_name: "NaturalShrimp Inc",
  },
  {
    cik_str: 1563298,
    ticker: "EAWD",
    company_name: "Energy & Water Development Corp",
  },
  {
    cik_str: 1967656,
    ticker: "PFSB",
    company_name: "PFS Bancorp, Inc.",
  },
  {
    cik_str: 1738699,
    ticker: "WKEY",
    company_name: "Wisekey International Holding S.A.",
  },
  {
    cik_str: 1883835,
    ticker: "PMIN",
    company_name: "ESG Inc.",
  },
  {
    cik_str: 1899005,
    ticker: "BMR",
    company_name: "Beamr Imaging Ltd.",
  },
  {
    cik_str: 1540159,
    ticker: "EDSA",
    company_name: "Edesa Biotech, Inc.",
  },
  {
    cik_str: 1579157,
    ticker: "VNCE",
    company_name: "VINCE HOLDING CORP.",
  },
  {
    cik_str: 1779578,
    ticker: "QLI",
    company_name: "Qilian International Holding Group Ltd",
  },
  {
    cik_str: 1701478,
    ticker: "AZTR",
    company_name: "Azitra Inc",
  },
  {
    cik_str: 1830072,
    ticker: "IPW",
    company_name: "iPower Inc.",
  },
  {
    cik_str: 1752474,
    ticker: "KLDI",
    company_name: "KLDiscovery Inc.",
  },
  {
    cik_str: 1610590,
    ticker: "CHEK",
    company_name: "Check-Cap Ltd",
  },
  {
    cik_str: 883975,
    ticker: "MBOT",
    company_name: "Microbot Medical Inc.",
  },
  {
    cik_str: 1787518,
    ticker: "BRLI",
    company_name: "Brilliant Acquisition Corp",
  },
  {
    cik_str: 1914818,
    ticker: "STBX",
    company_name: "Starbox Group Holdings Ltd.",
  },
  {
    cik_str: 1537561,
    ticker: "ARTH",
    company_name: "Arch Therapeutics, Inc.",
  },
  {
    cik_str: 744825,
    ticker: "AMS",
    company_name: "AMERICAN SHARED HOSPITAL SERVICES",
  },
  {
    cik_str: 1005516,
    ticker: "BOSC",
    company_name: "BOS BETTER ONLINE SOLUTIONS LTD",
  },
  {
    cik_str: 1815436,
    ticker: "AHI",
    company_name: "Advanced Health Intelligence Ltd",
  },
  {
    cik_str: 826253,
    ticker: "AUSI",
    company_name: "AURA SYSTEMS INC",
  },
  {
    cik_str: 1828098,
    ticker: "STKH",
    company_name: "Steakholder Foods Ltd.",
  },
  {
    cik_str: 1425355,
    ticker: "MCVT",
    company_name: "Mill City Ventures III, Ltd",
  },
  {
    cik_str: 1939780,
    ticker: "UCAR",
    company_name: "U Power Ltd",
  },
  {
    cik_str: 1604738,
    ticker: "AINC",
    company_name: "Ashford Inc.",
  },
  {
    cik_str: 1930419,
    ticker: "ALRTF",
    company_name: "ALR Technologies SG Ltd.",
  },
  {
    cik_str: 747540,
    ticker: "SPRS",
    company_name: "SURGE COMPONENTS INC",
  },
  {
    cik_str: 1492674,
    ticker: "TTOO",
    company_name: "T2 Biosystems, Inc.",
  },
  {
    cik_str: 1781983,
    ticker: "APRE",
    company_name: "Aprea Therapeutics, Inc.",
  },
  {
    cik_str: 1398453,
    ticker: "XIN",
    company_name: "Xinyuan Real Estate Co., Ltd.",
  },
  {
    cik_str: 1502292,
    ticker: "CNFR",
    company_name: "Conifer Holdings, Inc.",
  },
  {
    cik_str: 1782309,
    ticker: "EDTK",
    company_name: "Skillful Craftsman Education Technology Ltd",
  },
  {
    cik_str: 1827871,
    ticker: "ELIQ",
    company_name: "Electriq Power Holdings, Inc.",
  },
  {
    cik_str: 1173204,
    ticker: "CNVS",
    company_name: "Cineverse Corp.",
  },
  {
    cik_str: 1050606,
    ticker: "SALM",
    company_name: "SALEM MEDIA GROUP, INC. /DE/",
  },
  {
    cik_str: 1805526,
    ticker: "JNVR",
    company_name: "Janover Inc.",
  },
  {
    cik_str: 1539680,
    ticker: "HMMR",
    company_name: "HAMMER FIBER OPTICS HOLDINGS CORP",
  },
  {
    cik_str: 1400271,
    ticker: "CUBT",
    company_name: "Curative Biotechnology Inc",
  },
  {
    cik_str: 1584751,
    ticker: "TLIS",
    company_name: "Talis Biomedical Corp",
  },
  {
    cik_str: 1652561,
    ticker: "DQWS",
    company_name: "DSwiss Inc",
  },
  {
    cik_str: 1318482,
    ticker: "KDOZF",
    company_name: "KIDOZ INC.",
  },
  {
    cik_str: 1864943,
    ticker: "FGI",
    company_name: "FGI Industries Ltd.",
  },
  {
    cik_str: 1839360,
    ticker: "FAZE",
    company_name: "FaZe Holdings Inc.",
  },
  {
    cik_str: 1166272,
    ticker: "GENE",
    company_name: "GENETIC TECHNOLOGIES LTD",
  },
  {
    cik_str: 1555074,
    ticker: "AAMC",
    company_name: "Altisource Asset Management Corp",
  },
  {
    cik_str: 1665300,
    ticker: "PHUN",
    company_name: "Phunware, Inc.",
  },
  {
    cik_str: 1844392,
    ticker: "MRAI",
    company_name: "Marpai, Inc.",
  },
  {
    cik_str: 1906133,
    ticker: "ICCT",
    company_name: "iCoreConnect Inc.",
  },
  {
    cik_str: 1174891,
    ticker: "BUUZ",
    company_name: "CalEthos, Inc.",
  },
  {
    cik_str: 1348362,
    ticker: "LEXX",
    company_name: "Lexaria Bioscience Corp.",
  },
  {
    cik_str: 1418149,
    ticker: "HLRTF",
    company_name: "Hillcrest Energy Technologies Ltd.",
  },
  {
    cik_str: 1696025,
    ticker: "KCRD",
    company_name: "Kindcard, Inc.",
  },
  {
    cik_str: 1544400,
    ticker: "NFTN",
    company_name: "NFiniTi inc.",
  },
  {
    cik_str: 1680139,
    ticker: "HLYK",
    company_name: "HealthLynked Corp",
  },
  {
    cik_str: 1001907,
    ticker: "ASTC",
    company_name: "ASTROTECH Corp",
  },
  {
    cik_str: 1175596,
    ticker: "AXREF",
    company_name: "AMARC RESOURCES LTD",
  },
  {
    cik_str: 1591890,
    ticker: "FGF",
    company_name: "FG Financial Group, Inc.",
  },
  {
    cik_str: 1702318,
    ticker: "AHG",
    company_name: "Akso Health Group",
  },
  {
    cik_str: 1083522,
    ticker: "JSDA",
    company_name: "JONES SODA CO",
  },
  {
    cik_str: 1891791,
    ticker: "TGGI",
    company_name: "TRANS GLOBAL GROUP, INC.",
  },
  {
    cik_str: 1474167,
    ticker: "COSM",
    company_name: "Cosmos Health Inc.",
  },
  {
    cik_str: 1518561,
    ticker: "EWGFF",
    company_name: "Eat Well Investment Group Inc.",
  },
  {
    cik_str: 1123267,
    ticker: "HANNF",
    company_name: "Hannan Metals Ltd.",
  },
  {
    cik_str: 1116548,
    ticker: "MXROF",
    company_name: "MAX RESOURCE CORP.",
  },
  {
    cik_str: 1427925,
    ticker: "ACRX",
    company_name: "ACELRX PHARMACEUTICALS INC",
  },
  {
    cik_str: 1712762,
    ticker: "BIAF",
    company_name: "bioAffinity Technologies, Inc.",
  },
  {
    cik_str: 925741,
    ticker: "BCDA",
    company_name: "BioCardia, Inc.",
  },
  {
    cik_str: 793628,
    ticker: "CHNR",
    company_name: "CHINA NATURAL RESOURCES INC",
  },
  {
    cik_str: 1706524,
    ticker: "UGRO",
    company_name: "urban-gro, Inc.",
  },
  {
    cik_str: 1174940,
    ticker: "OGEN",
    company_name: "ORAGENICS INC",
  },
  {
    cik_str: 1376231,
    ticker: "VPRB",
    company_name: "VPR Brands, LP.",
  },
  {
    cik_str: 920990,
    ticker: "WOWI",
    company_name: "METRO ONE TELECOMMUNICATIONS INC",
  },
  {
    cik_str: 1535955,
    ticker: "LPCN",
    company_name: "Lipocine Inc.",
  },
  {
    cik_str: 1869137,
    ticker: "MHUBF",
    company_name: "MineHub Technologies Inc.",
  },
  {
    cik_str: 1739174,
    ticker: "PHGE",
    company_name: "BiomX Inc.",
  },
  {
    cik_str: 1066923,
    ticker: "FTFT",
    company_name: "Future FinTech Group Inc.",
  },
  {
    cik_str: 1414382,
    ticker: "CLEV",
    company_name: "Concrete Leveling Systems Inc",
  },
  {
    cik_str: 1814067,
    ticker: "LXEH",
    company_name: "Lixiang Education Holding Co. Ltd.",
  },
  {
    cik_str: 1437517,
    ticker: "CLOQ",
    company_name: "CYBERLOQ TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1603993,
    ticker: "NISN",
    company_name: "Nisun International Enterprise Development Group Co., Ltd",
  },
  {
    cik_str: 1814963,
    ticker: "ILAG",
    company_name: "Intelligent Living Application Group Inc.",
  },
  {
    cik_str: 1419793,
    ticker: "OCLN",
    company_name: "ORIGINCLEAR, INC.",
  },
  {
    cik_str: 1026662,
    ticker: "CLWT",
    company_name: "EURO TECH HOLDINGS CO LTD",
  },
  {
    cik_str: 1708599,
    ticker: "AGE",
    company_name: "AgeX Therapeutics, Inc.",
  },
  {
    cik_str: 1756180,
    ticker: "NCRA",
    company_name: "NOCERA, INC.",
  },
  {
    cik_str: 1784851,
    ticker: "SHPW",
    company_name: "Shapeways Holdings, Inc.",
  },
  {
    cik_str: 1820566,
    ticker: "ISPO",
    company_name: "Inspirato Inc",
  },
  {
    cik_str: 1716166,
    ticker: "VVOS",
    company_name: "Vivos Therapeutics, Inc.",
  },
  {
    cik_str: 1430306,
    ticker: "TNXP",
    company_name: "Tonix Pharmaceuticals Holding Corp.",
  },
  {
    cik_str: 1680048,
    ticker: "MBIO",
    company_name: "MUSTANG BIO, INC.",
  },
  {
    cik_str: 1172178,
    ticker: "LBSR",
    company_name: "LIBERTY STAR URANIUM & METALS CORP.",
  },
  {
    cik_str: 1785345,
    ticker: "LABP",
    company_name: "Landos Biopharma, Inc.",
  },
  {
    cik_str: 1796129,
    ticker: "VINC",
    company_name: "Vincerx Pharma, Inc.",
  },
  {
    cik_str: 1314196,
    ticker: "OLB",
    company_name: "OLB GROUP, INC.",
  },
  {
    cik_str: 8504,
    ticker: "UAVS",
    company_name: "AgEagle Aerial Systems Inc.",
  },
  {
    cik_str: 1367408,
    ticker: "OILY",
    company_name: "Sino American Oil Co",
  },
  {
    cik_str: 1107421,
    ticker: "TCRT",
    company_name: "Alaunos Therapeutics, Inc.",
  },
  {
    cik_str: 1379006,
    ticker: "NNVC",
    company_name: "NANOVIRICIDES, INC.",
  },
  {
    cik_str: 351789,
    ticker: "ELSE",
    company_name: "ELECTRO SENSORS INC",
  },
  {
    cik_str: 1722731,
    ticker: "FDCT",
    company_name: "FDCTECH, INC.",
  },
  {
    cik_str: 1417663,
    ticker: "SNWV",
    company_name: "SANUWAVE Health, Inc.",
  },
  {
    cik_str: 1955104,
    ticker: "ZAPP",
    company_name: "Zapp Electric Vehicles Group Ltd",
  },
  {
    cik_str: 1641398,
    ticker: "GDC",
    company_name: "GD Culture Group Ltd",
  },
  {
    cik_str: 79661,
    ticker: "PRSI",
    company_name: "PORTSMOUTH SQUARE INC",
  },
  {
    cik_str: 1818844,
    ticker: "VIRI",
    company_name: "Virios Therapeutics, Inc.",
  },
  {
    cik_str: 914139,
    ticker: "PRKR",
    company_name: "PARKERVISION INC",
  },
  {
    cik_str: 1660046,
    ticker: "IMRN",
    company_name: "Immuron Ltd",
  },
  {
    cik_str: 1715611,
    ticker: "BMMJ",
    company_name: "BODY & MIND INC.",
  },
  {
    cik_str: 1015155,
    ticker: "CTHR",
    company_name: "CHARLES & COLVARD LTD",
  },
  {
    cik_str: 1783407,
    ticker: "LIZI",
    company_name: "LIZHI INC.",
  },
  {
    cik_str: 1388295,
    ticker: "ONEI",
    company_name: "OneMeta Inc.",
  },
  {
    cik_str: 1756499,
    ticker: "MCLDF",
    company_name: "mCloud Technologies Corp.",
  },
  {
    cik_str: 1496383,
    ticker: "ILUS",
    company_name: "Ilustrato Pictures International Inc.",
  },
  {
    cik_str: 1781162,
    ticker: "MNTS",
    company_name: "Momentus Inc.",
  },
  {
    cik_str: 1832415,
    ticker: "BTTX",
    company_name: "Better Therapeutics, Inc.",
  },
  {
    cik_str: 704172,
    ticker: "PHIL",
    company_name: "PHI GROUP INC",
  },
  {
    cik_str: 1446159,
    ticker: "POAI",
    company_name: "Predictive Oncology Inc.",
  },
  {
    cik_str: 1901215,
    ticker: "BNRG",
    company_name: "Brenmiller Energy Ltd.",
  },
  {
    cik_str: 885462,
    ticker: "GURE",
    company_name: "GULF RESOURCES, INC.",
  },
  {
    cik_str: 1855743,
    ticker: "ARRKF",
    company_name: "ARRAS MINERALS CORP.",
  },
  {
    cik_str: 82473,
    ticker: "IHT",
    company_name: "INNSUITES HOSPITALITY TRUST",
  },
  {
    cik_str: 1785056,
    ticker: "TRNR",
    company_name: "Interactive Strength, Inc.",
  },
  {
    cik_str: 1331612,
    ticker: "IMTH",
    company_name: "INNOVATIVE MEDTECH, INC.",
  },
  {
    cik_str: 1299865,
    ticker: "GXSFF",
    company_name: "Goldsource Mines Inc.",
  },
  {
    cik_str: 1837493,
    ticker: "IINN",
    company_name: "Inspira Technologies OXY B.H.N. Ltd",
  },
  {
    cik_str: 1463978,
    ticker: "BKUCF",
    company_name: "BLUE SKY URANIUM CORP.",
  },
  {
    cik_str: 99106,
    ticker: "TNLX",
    company_name: "TRANS LUX Corp",
  },
  {
    cik_str: 1893448,
    ticker: "SGE",
    company_name: "Strong Global Entertainment, Inc.",
  },
  {
    cik_str: 1468929,
    ticker: "NXGL",
    company_name: "NEXGEL, INC.",
  },
  {
    cik_str: 1948884,
    ticker: "GPAK",
    company_name: "Gamer Pakistan Inc",
  },
  {
    cik_str: 29332,
    ticker: "DXYN",
    company_name: "DIXIE GROUP INC",
  },
  {
    cik_str: 1383088,
    ticker: "CYCA",
    company_name: "CYTTA CORP.",
  },
  {
    cik_str: 1850079,
    ticker: "TBIO",
    company_name: "Telesis Bio Inc.",
  },
  {
    cik_str: 1785592,
    ticker: "LFLY",
    company_name: "Leafly Holdings, Inc. /DE",
  },
  {
    cik_str: 1595248,
    ticker: "GNPX",
    company_name: "Genprex, Inc.",
  },
  {
    cik_str: 1681682,
    ticker: "NDRA",
    company_name: "ENDRA Life Sciences Inc.",
  },
  {
    cik_str: 1017655,
    ticker: "PAYD",
    company_name: "PAID INC",
  },
  {
    cik_str: 1014763,
    ticker: "AIMD",
    company_name: "Ainos, Inc.",
  },
  {
    cik_str: 1487091,
    ticker: "QWTR",
    company_name: "Quest Water Global, Inc.",
  },
  {
    cik_str: 1557376,
    ticker: "OCEL",
    company_name: "Organicell Regenerative Medicine, Inc.",
  },
  {
    cik_str: 1858994,
    ticker: "RSMXF",
    company_name: "Regency Silver Corp.",
  },
  {
    cik_str: 1536196,
    ticker: "CANF",
    company_name: "Can-Fite BioPharma Ltd.",
  },
  {
    cik_str: 1352952,
    ticker: "CNFN",
    company_name: "CFN Enterprises Inc.",
  },
  {
    cik_str: 1321834,
    ticker: "MYMD",
    company_name: "MyMD Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1839285,
    ticker: "HCTI",
    company_name: "Healthcare Triangle, Inc.",
  },
  {
    cik_str: 1270436,
    ticker: "COHN",
    company_name: "Cohen & Co Inc.",
  },
  {
    cik_str: 1813191,
    ticker: "AUCUF",
    company_name: "Inflection Resources Ltd.",
  },
  {
    cik_str: 1735948,
    ticker: "GBNH",
    company_name: "Greenbrook TMS Inc.",
  },
  {
    cik_str: 1971544,
    ticker: "AIRO",
    company_name: "AIRO Group, Inc.",
  },
  {
    cik_str: 1803407,
    ticker: "OST",
    company_name: "Ostin Technology Group Co., Ltd.",
  },
  {
    cik_str: 1017491,
    ticker: "SEEL",
    company_name: "SEELOS THERAPEUTICS, INC.",
  },
  {
    cik_str: 1131343,
    ticker: "ATHE",
    company_name: "ALTERITY THERAPEUTICS LTD",
  },
  {
    cik_str: 1442620,
    ticker: "RCON",
    company_name: "Recon Technology, Ltd",
  },
  {
    cik_str: 1880343,
    ticker: "VINE",
    company_name: "Fresh Vine Wine, Inc.",
  },
  {
    cik_str: 1786511,
    ticker: "FRES",
    company_name: "Fresh2 Group Ltd",
  },
  {
    cik_str: 919567,
    ticker: "RCG",
    company_name: "RENN Fund, Inc.",
  },
  {
    cik_str: 1397183,
    ticker: "IVDA",
    company_name: "Iveda Solutions, Inc.",
  },
  {
    cik_str: 1582982,
    ticker: "CCLD",
    company_name: "CareCloud, Inc.",
  },
  {
    cik_str: 1855557,
    ticker: "HLP",
    company_name: "Hongli Group Inc.",
  },
  {
    cik_str: 1502758,
    ticker: "NULGF",
    company_name: "NuLegacy Gold Corp",
  },
  {
    cik_str: 1512922,
    ticker: "PETV",
    company_name: "PetVivo Holdings, Inc.",
  },
  {
    cik_str: 1840292,
    ticker: "HLGN",
    company_name: "Heliogen, Inc.",
  },
  {
    cik_str: 1654595,
    ticker: "MDRR",
    company_name: "Medalist Diversified REIT, Inc.",
  },
  {
    cik_str: 1075880,
    ticker: "KZIA",
    company_name: "KAZIA THERAPEUTICS LTD",
  },
  {
    cik_str: 1737523,
    ticker: "BGLC",
    company_name: "BioNexus Gene Lab Corp",
  },
  {
    cik_str: 1321851,
    ticker: "SEED",
    company_name: "Origin Agritech LTD",
  },
  {
    cik_str: 1933567,
    ticker: "NRXS",
    company_name: "Neuraxis, INC",
  },
  {
    cik_str: 1362705,
    ticker: "SNMP",
    company_name: "Evolve Transition Infrastructure LP",
  },
  {
    cik_str: 32621,
    ticker: "MSN",
    company_name: "EMERSON RADIO CORP",
  },
  {
    cik_str: 1014052,
    ticker: "DTGI",
    company_name: "Digerati Technologies, Inc.",
  },
  {
    cik_str: 1414953,
    ticker: "MOJO",
    company_name: "EQUATOR Beverage Co",
  },
  {
    cik_str: 1718224,
    ticker: "BTBD",
    company_name: "BT Brands, Inc.",
  },
  {
    cik_str: 1487718,
    ticker: "BLTH",
    company_name: "AMERICAN BATTERY MATERIALS, INC.",
  },
  {
    cik_str: 1009922,
    ticker: "NSFDF",
    company_name: "NXT Energy Solutions Inc.",
  },
  {
    cik_str: 1769697,
    ticker: "LITM",
    company_name: "Snow Lake Resources Ltd.",
  },
  {
    cik_str: 1136174,
    ticker: "OTRK",
    company_name: "Ontrak, Inc.",
  },
  {
    cik_str: 1529113,
    ticker: "INPX",
    company_name: "INPIXON",
  },
  {
    cik_str: 1807887,
    ticker: "LASE",
    company_name: "Laser Photonics Corp",
  },
  {
    cik_str: 1485029,
    ticker: "NAHD",
    company_name: "New Asia Holdings, Inc.",
  },
  {
    cik_str: 1785566,
    ticker: "ZCMD",
    company_name: "Zhongchao Inc.",
  },
  {
    cik_str: 1784058,
    ticker: "PNYG",
    company_name: "Pony Group Inc.",
  },
  {
    cik_str: 1737339,
    ticker: "JG",
    company_name: "Aurora Mobile Ltd",
  },
  {
    cik_str: 1104038,
    ticker: "VRME",
    company_name: "VerifyMe, Inc.",
  },
  {
    cik_str: 1355736,
    ticker: "AVCRF",
    company_name: "Avricore Health Inc.",
  },
  {
    cik_str: 1729427,
    ticker: "CNSP",
    company_name: "CNS Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1762239,
    ticker: "KAVL",
    company_name: "Kaival Brands Innovations Group, Inc.",
  },
  {
    cik_str: 1951294,
    ticker: "VSME",
    company_name: "VS MEDIA Holdings Ltd",
  },
  {
    cik_str: 1471727,
    ticker: "BTTR",
    company_name: "Better Choice Co Inc.",
  },
  {
    cik_str: 1582581,
    ticker: "VJET",
    company_name: "voxeljet AG",
  },
  {
    cik_str: 1658521,
    ticker: "MTPP",
    company_name: "MOUNTAIN TOP PROPERTIES, INC.",
  },
  {
    cik_str: 1305253,
    ticker: "EIGR",
    company_name: "Eiger BioPharmaceuticals, Inc.",
  },
  {
    cik_str: 1575295,
    ticker: "ALID",
    company_name: "Allied Corp.",
  },
  {
    cik_str: 1892322,
    ticker: "HTCR",
    company_name: "HeartCore Enterprises, Inc.",
  },
  {
    cik_str: 1477009,
    ticker: "CANN",
    company_name: "TREES Corp (Colorado)",
  },
  {
    cik_str: 1873722,
    ticker: "BBLR",
    company_name: "Bubblr Inc.",
  },
  {
    cik_str: 1790169,
    ticker: "FLGC",
    company_name: "Flora Growth Corp.",
  },
  {
    cik_str: 1875091,
    ticker: "NRSN",
    company_name: "NeuroSense Therapeutics Ltd.",
  },
  {
    cik_str: 1782037,
    ticker: "YGMZ",
    company_name: "MingZhu Logistics Holdings Ltd",
  },
  {
    cik_str: 1133519,
    ticker: "MCUJF",
    company_name: "MEDICURE INC",
  },
  {
    cik_str: 1898766,
    ticker: "TPET",
    company_name: "Trio Petroleum Corp.",
  },
  {
    cik_str: 1265521,
    ticker: "TRFE",
    company_name: "Trustfeed Corp.",
  },
  {
    cik_str: 1534120,
    ticker: "AVTX",
    company_name: "Avalo Therapeutics, Inc.",
  },
  {
    cik_str: 1137883,
    ticker: "BCLI",
    company_name: "BRAINSTORM CELL THERAPEUTICS INC.",
  },
  {
    cik_str: 1884072,
    ticker: "JEWL",
    company_name: "Adamas One Corp.",
  },
  {
    cik_str: 1109486,
    ticker: "EDXC",
    company_name: "Endexx Corp",
  },
  {
    cik_str: 12239,
    ticker: "DOMH",
    company_name: "Dominari Holdings Inc.",
  },
  {
    cik_str: 7623,
    ticker: "ARTW",
    company_name: "ARTS WAY MANUFACTURING CO INC",
  },
  {
    cik_str: 1877939,
    ticker: "CTM",
    company_name: "Castellum, Inc.",
  },
  {
    cik_str: 1826376,
    ticker: "GSUN",
    company_name: "Golden Sun Education Group Ltd",
  },
  {
    cik_str: 1572386,
    ticker: "GWTI",
    company_name: "GREENWAY TECHNOLOGIES INC",
  },
  {
    cik_str: 1630176,
    ticker: "HYEX",
    company_name: "HEALTHY EXTRACTS INC.",
  },
  {
    cik_str: 1703073,
    ticker: "VIVC",
    company_name: "VIVIC CORP.",
  },
  {
    cik_str: 1575793,
    ticker: "WATT",
    company_name: "Energous Corp",
  },
  {
    cik_str: 1934245,
    ticker: "SPGC",
    company_name: "Sacks Parente Golf, Inc.",
  },
  {
    cik_str: 1387473,
    ticker: "TIGCF",
    company_name: "Triumph Gold Corp.",
  },
  {
    cik_str: 1099369,
    ticker: "DSNY",
    company_name: "DESTINY MEDIA TECHNOLOGIES INC",
  },
  {
    cik_str: 1277998,
    ticker: "MHPC",
    company_name: "MANUFACTURED HOUSING PROPERTIES INC.",
  },
  {
    cik_str: 1718939,
    ticker: "IDAI",
    company_name: "T Stamp Inc",
  },
  {
    cik_str: 1513818,
    ticker: "ARAV",
    company_name: "Aravive, Inc.",
  },
  {
    cik_str: 1679817,
    ticker: "OZSC",
    company_name: "OZOP ENERGY SOLUTIONS, INC.",
  },
  {
    cik_str: 1634447,
    ticker: "ISUN",
    company_name: "ISUN, INC.",
  },
  {
    cik_str: 924515,
    ticker: "GTHP",
    company_name: "GUIDED THERAPEUTICS INC",
  },
  {
    cik_str: 1734005,
    ticker: "APM",
    company_name: "Aptorum Group Ltd",
  },
  {
    cik_str: 1565228,
    ticker: "VISL",
    company_name: "Vislink Technologies, Inc.",
  },
  {
    cik_str: 1368365,
    ticker: "MARK",
    company_name: "REMARK HOLDINGS, INC.",
  },
  {
    cik_str: 730255,
    ticker: "CAMP",
    company_name: "CalAmp Corp.",
  },
  {
    cik_str: 1487839,
    ticker: "LKCO",
    company_name: "Luokung Technology Corp.",
  },
  {
    cik_str: 1532346,
    ticker: "BCEL",
    company_name: "Atreca, Inc.",
  },
  {
    cik_str: 1624512,
    ticker: "BOXL",
    company_name: "Boxlight Corp",
  },
  {
    cik_str: 1113423,
    ticker: "AEZS",
    company_name: "Aeterna Zentaris Inc.",
  },
  {
    cik_str: 1651721,
    ticker: "GIPR",
    company_name: "GENERATION INCOME PROPERTIES, INC.",
  },
  {
    cik_str: 1934064,
    ticker: "OSA",
    company_name: "ProSomnus, Inc.",
  },
  {
    cik_str: 1684425,
    ticker: "PETZ",
    company_name: "TDH Holdings, Inc.",
  },
  {
    cik_str: 109657,
    ticker: "GTBP",
    company_name: "GT Biopharma, Inc.",
  },
  {
    cik_str: 1887603,
    ticker: "HCNWF",
    company_name: "Hypercharge Networks Corp.",
  },
  {
    cik_str: 1342219,
    ticker: "NLSC",
    company_name: "Namliong SkyCosmos, Inc.",
  },
  {
    cik_str: 1892480,
    ticker: "HPCO",
    company_name: "Hempacco Co., Inc.",
  },
  {
    cik_str: 1497253,
    ticker: "ONVO",
    company_name: "ORGANOVO HOLDINGS, INC.",
  },
  {
    cik_str: 1132979,
    ticker: "FRCB",
    company_name: "FIRST REPUBLIC BANK",
  },
  {
    cik_str: 1009891,
    ticker: "AIRI",
    company_name: "AIR INDUSTRIES GROUP",
  },
  {
    cik_str: 1875547,
    ticker: "LCFY",
    company_name: "Locafy Ltd",
  },
  {
    cik_str: 1370292,
    ticker: "VSMR",
    company_name: "VERIFY SMART CORP.",
  },
  {
    cik_str: 1275477,
    ticker: "BMNM",
    company_name: "BIMINI CAPITAL MANAGEMENT, INC.",
  },
  {
    cik_str: 1549631,
    ticker: "QURT",
    company_name: "Quarta-Rad, Inc.",
  },
  {
    cik_str: 1650696,
    ticker: "LSF",
    company_name: "Laird Superfood, Inc.",
  },
  {
    cik_str: 55234,
    ticker: "KENS",
    company_name: "KENILWORTH SYSTEMS CORP",
  },
  {
    cik_str: 894501,
    ticker: "GRHI",
    company_name: "GOLD ROCK HOLDINGS, INC.",
  },
  {
    cik_str: 866439,
    ticker: "DPLS",
    company_name: "DarkPulse, Inc.",
  },
  {
    cik_str: 1770236,
    ticker: "MITQ",
    company_name: "MOVING iMAGE TECHNOLOGIES INC.",
  },
  {
    cik_str: 721693,
    ticker: "CREG",
    company_name: "Smart Powerr Corp.",
  },
  {
    cik_str: 1723047,
    ticker: "VAUCF",
    company_name: "Viva Gold Corp.",
  },
  {
    cik_str: 1069680,
    ticker: "HHSE",
    company_name: "Hannover House, Inc.",
  },
  {
    cik_str: 1901305,
    ticker: "FRZA",
    company_name: "Forza X1, Inc.",
  },
  {
    cik_str: 66496,
    ticker: "MMTRS",
    company_name: "MILLS MUSIC TRUST",
  },
  {
    cik_str: 1722926,
    ticker: "ASLN",
    company_name: "ASLAN Pharmaceuticals Ltd",
  },
  {
    cik_str: 1955083,
    ticker: "GESI",
    company_name: "General European Strategic Investments, Inc.",
  },
  {
    cik_str: 1533030,
    ticker: "CRYM",
    company_name: "Cryomass Technologies, Inc.",
  },
  {
    cik_str: 1425627,
    ticker: "SOBR",
    company_name: "SOBR Safe, Inc.",
  },
  {
    cik_str: 1086745,
    ticker: "AYRO",
    company_name: "AYRO, Inc.",
  },
  {
    cik_str: 1191070,
    ticker: "BNOX",
    company_name: "BIONOMICS LIMITED/FI",
  },
  {
    cik_str: 1593549,
    ticker: "NUGN",
    company_name: "Livento Group, Inc.",
  },
  {
    cik_str: 1497649,
    ticker: "GSTX",
    company_name: "Graphene & Solar Technologies Ltd",
  },
  {
    cik_str: 894158,
    ticker: "TOVX",
    company_name: "Theriva Biologics, Inc.",
  },
  {
    cik_str: 1784970,
    ticker: "WETG",
    company_name: "WeTrade Group Inc.",
  },
  {
    cik_str: 1508786,
    ticker: "SLTN",
    company_name: "SILVERTON ENERGY, INC.",
  },
  {
    cik_str: 748592,
    ticker: "ERNA",
    company_name: "Eterna Therapeutics Inc.",
  },
  {
    cik_str: 1951222,
    ticker: "LAES",
    company_name: "SEALSQ Corp",
  },
  {
    cik_str: 84129,
    ticker: "RADCQ",
    company_name: "RITE AID CORP",
  },
  {
    cik_str: 1842556,
    ticker: "HNRA",
    company_name: "HNR Acquisition Corp.",
  },
  {
    cik_str: 1393772,
    ticker: "BUDZ",
    company_name: "WEED, INC.",
  },
  {
    cik_str: 1707910,
    ticker: "REBN",
    company_name: "Reborn Coffee, Inc.",
  },
  {
    cik_str: 1444839,
    ticker: "BRVO",
    company_name: "Bravo Multinational Inc.",
  },
  {
    cik_str: 1476963,
    ticker: "NHWK",
    company_name: "NightHawk Biosciences, Inc.",
  },
  {
    cik_str: 1043961,
    ticker: "PRPO",
    company_name: "Precipio, Inc.",
  },
  {
    cik_str: 744452,
    ticker: "APDN",
    company_name: "APPLIED DNA SCIENCES INC",
  },
  {
    cik_str: 1084133,
    ticker: "RLBD",
    company_name: "Real Brands, Inc.",
  },
  {
    cik_str: 1119190,
    ticker: "HMBL",
    company_name: "HUMBL, INC.",
  },
  {
    cik_str: 1574094,
    ticker: "RNXT",
    company_name: "RenovoRx, Inc.",
  },
  {
    cik_str: 1173313,
    ticker: "ABVC",
    company_name: "ABVC BIOPHARMA, INC.",
  },
  {
    cik_str: 1755058,
    ticker: "ATIF",
    company_name: "ATIF Holdings Ltd",
  },
  {
    cik_str: 1168981,
    ticker: "LVRLF",
    company_name: "CordovaCann Corp.",
  },
  {
    cik_str: 1138476,
    ticker: "PFHO",
    company_name: "PACIFIC HEALTH CARE ORGANIZATION INC",
  },
  {
    cik_str: 1817511,
    ticker: "SOPA",
    company_name: "SOCIETY PASS INCORPORATED.",
  },
  {
    cik_str: 875355,
    ticker: "LDWY",
    company_name: "LENDWAY, INC.",
  },
  {
    cik_str: 1095981,
    ticker: "PSTV",
    company_name: "PLUS THERAPEUTICS, INC.",
  },
  {
    cik_str: 1589149,
    ticker: "GWAV",
    company_name: "Greenwave Technology Solutions, Inc.",
  },
  {
    cik_str: 1429560,
    ticker: "TRVN",
    company_name: "TREVENA INC",
  },
  {
    cik_str: 1567900,
    ticker: "BLBX",
    company_name: "BLACKBOXSTOCKS INC.",
  },
  {
    cik_str: 1483646,
    ticker: "BEGI",
    company_name: "BLACKSTAR ENTERPRISE GROUP, INC.",
  },
  {
    cik_str: 1062128,
    ticker: "MNKA",
    company_name: "Manuka, Inc.",
  },
  {
    cik_str: 1288750,
    ticker: "TLRS",
    company_name: "Timberline Resources Corp",
  },
  {
    cik_str: 1815566,
    ticker: "IFBD",
    company_name: "Infobird Co., Ltd",
  },
  {
    cik_str: 891417,
    ticker: "NMGX",
    company_name: "Nano Magic Inc.",
  },
  {
    cik_str: 1026785,
    ticker: "HIHO",
    company_name: "HIGHWAY HOLDINGS LTD",
  },
  {
    cik_str: 1817004,
    ticker: "EZFL",
    company_name: "EzFill Holdings Inc",
  },
  {
    cik_str: 1505497,
    ticker: "BRTX",
    company_name: "BioRestorative Therapies, Inc.",
  },
  {
    cik_str: 1680689,
    ticker: "NRHI",
    company_name: "Natural Resource Holdings, Inc.",
  },
  {
    cik_str: 1775085,
    ticker: "CLEU",
    company_name: "China Liberal Education Holdings Ltd",
  },
  {
    cik_str: 1468492,
    ticker: "HSCS",
    company_name: "Heart Test Laboratories, Inc.",
  },
  {
    cik_str: 1347858,
    ticker: "XXII",
    company_name: "22nd Century Group, Inc.",
  },
  {
    cik_str: 1282980,
    ticker: "DROR",
    company_name: "Dror Ortho-Design, Inc.",
  },
  {
    cik_str: 1518353,
    ticker: "EVGDF",
    company_name: "ELEVATION GOLD MINING Corp",
  },
  {
    cik_str: 1520118,
    ticker: "INTV",
    company_name: "INTEGRATED VENTURES, INC.",
  },
  {
    cik_str: 1626644,
    ticker: "ODYY",
    company_name: "Odyssey Health, Inc.",
  },
  {
    cik_str: 1481504,
    ticker: "XERI",
    company_name: "XERIANT, INC.",
  },
  {
    cik_str: 944480,
    ticker: "GVP",
    company_name: "GSE SYSTEMS INC",
  },
  {
    cik_str: 933738,
    ticker: "ENG",
    company_name: "ENGLOBAL CORP",
  },
  {
    cik_str: 1333822,
    ticker: "LEDS",
    company_name: "SemiLEDs Corp",
  },
  {
    cik_str: 62362,
    ticker: "MARPS",
    company_name: "MARINE PETROLEUM TRUST",
  },
  {
    cik_str: 1422892,
    ticker: "SGLY",
    company_name: "Singularity Future Technology Ltd.",
  },
  {
    cik_str: 723533,
    ticker: "LWLW",
    company_name: "Longwen Group Corp.",
  },
  {
    cik_str: 1892274,
    ticker: "GV",
    company_name: "Visionary Education Technology Holdings Group Inc.",
  },
  {
    cik_str: 832489,
    ticker: "GOVX",
    company_name: "GeoVax Labs, Inc.",
  },
  {
    cik_str: 1768946,
    ticker: "BPTS",
    company_name: "Biophytis SA",
  },
  {
    cik_str: 1467761,
    ticker: "MINM",
    company_name: "MINIM, INC.",
  },
  {
    cik_str: 1817740,
    ticker: "AUST",
    company_name: "Austin Gold Corp.",
  },
  {
    cik_str: 1592560,
    ticker: "TEDU",
    company_name: "Tarena International, Inc.",
  },
  {
    cik_str: 1898643,
    ticker: "MOB",
    company_name: "Mobilicom Ltd",
  },
  {
    cik_str: 1630113,
    ticker: "BTCY",
    company_name: "BIOTRICITY INC.",
  },
  {
    cik_str: 1716770,
    ticker: "WAFU",
    company_name: "Wah Fu Education Group Ltd",
  },
  {
    cik_str: 944075,
    ticker: "SCKT",
    company_name: "SOCKET MOBILE, INC.",
  },
  {
    cik_str: 1585608,
    ticker: "JAGX",
    company_name: "Jaguar Health, Inc.",
  },
  {
    cik_str: 1872964,
    ticker: "MTEK",
    company_name: "Maris Tech Ltd.",
  },
  {
    cik_str: 1801777,
    ticker: "AMTI",
    company_name: "Applied Molecular Transport Inc.",
  },
  {
    cik_str: 1679063,
    ticker: "CSSE",
    company_name: "Chicken Soup for the Soul Entertainment, Inc.",
  },
  {
    cik_str: 1362703,
    ticker: "THER",
    company_name: "THERALINK TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1881767,
    ticker: "SSCC",
    company_name: "Spirits Capital Corp",
  },
  {
    cik_str: 1603978,
    ticker: "AQB",
    company_name: "AquaBounty Technologies, Inc.",
  },
  {
    cik_str: 1841330,
    ticker: "KTTA",
    company_name: "Pasithea Therapeutics Corp.",
  },
  {
    cik_str: 1546383,
    ticker: "JXJT",
    company_name: "JX Luxventure Ltd",
  },
  {
    cik_str: 1016178,
    ticker: "CARV",
    company_name: "CARVER BANCORP INC",
  },
  {
    cik_str: 1410428,
    ticker: "XWEL",
    company_name: "XWELL, Inc.",
  },
  {
    cik_str: 1023994,
    ticker: "SGBX",
    company_name: "SAFE & GREEN HOLDINGS CORP.",
  },
  {
    cik_str: 926423,
    ticker: "MIND",
    company_name: "MIND TECHNOLOGY, INC",
  },
  {
    cik_str: 1514056,
    ticker: "TRIQ",
    company_name: "TRAQIQ, INC.",
  },
  {
    cik_str: 1621672,
    ticker: "SLE",
    company_name: "Super League Enterprise, Inc.",
  },
  {
    cik_str: 1372183,
    ticker: "NXTP",
    company_name: "NextPlay Technologies Inc.",
  },
  {
    cik_str: 1411057,
    ticker: "CBIH",
    company_name: "Cannabis Bioscience International Holdings, Inc.",
  },
  {
    cik_str: 1843165,
    ticker: "LQR",
    company_name: "LQR House Inc.",
  },
  {
    cik_str: 1566469,
    ticker: "NHIQ",
    company_name: "NantHealth, Inc.",
  },
  {
    cik_str: 1730869,
    ticker: "EBZT",
    company_name: "Everything Blockchain, Inc.",
  },
  {
    cik_str: 1874097,
    ticker: "CYN",
    company_name: "Cyngn Inc.",
  },
  {
    cik_str: 1378590,
    ticker: "BLIN",
    company_name: "Bridgeline Digital, Inc.",
  },
  {
    cik_str: 1061069,
    ticker: "AWX",
    company_name: "AVALON HOLDINGS CORP",
  },
  {
    cik_str: 1747661,
    ticker: "ADD",
    company_name: "Color Star Technology Co., Ltd.",
  },
  {
    cik_str: 749647,
    ticker: "IMNN",
    company_name: "Imunon, Inc.",
  },
  {
    cik_str: 1190370,
    ticker: "IVDN",
    company_name: "INNOVATIVE DESIGNS INC",
  },
  {
    cik_str: 1161814,
    ticker: "KIQ",
    company_name: "KELSO TECHNOLOGIES INC",
  },
  {
    cik_str: 844887,
    ticker: "DHCC",
    company_name: "DIAMONDHEAD CASINO CORP",
  },
  {
    cik_str: 1443863,
    ticker: "BICX",
    company_name: "BioCorRx Inc.",
  },
  {
    cik_str: 1808898,
    ticker: "BNTC",
    company_name: "Benitec Biopharma Inc.",
  },
  {
    cik_str: 1128281,
    ticker: "SKAS",
    company_name: "Saker Aviation Services, Inc.",
  },
  {
    cik_str: 727510,
    ticker: "ENZN",
    company_name: "ENZON PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1622345,
    ticker: "POLA",
    company_name: "Polar Power, Inc.",
  },
  {
    cik_str: 1642159,
    ticker: "SIGY",
    company_name: "Sigyn Therapeutics, Inc.",
  },
  {
    cik_str: 924396,
    ticker: "OLKR",
    company_name: "OpenLocker Holdings, Inc.",
  },
  {
    cik_str: 830656,
    ticker: "PBIO",
    company_name: "PRESSURE BIOSCIENCES INC",
  },
  {
    cik_str: 736012,
    ticker: "INTZ",
    company_name: "INTRUSION INC",
  },
  {
    cik_str: 1551693,
    ticker: "SIEN",
    company_name: "Sientra, Inc.",
  },
  {
    cik_str: 1899658,
    ticker: "WLGS",
    company_name: "WANG & LEE GROUP, Inc.",
  },
  {
    cik_str: 1561880,
    ticker: "LEAI",
    company_name: "Legacy Education Alliance, Inc.",
  },
  {
    cik_str: 1445499,
    ticker: "IMPL",
    company_name: "IMPEL PHARMACEUTICALS INC",
  },
  {
    cik_str: 923601,
    ticker: "MICS",
    company_name: "SINGING MACHINE CO INC",
  },
  {
    cik_str: 1781193,
    ticker: "QH",
    company_name: "QUHUO Ltd",
  },
  {
    cik_str: 1855631,
    ticker: "AWIN",
    company_name: "AERWINS Technologies Inc.",
  },
  {
    cik_str: 1580490,
    ticker: "IONI",
    company_name: "I-ON Digital Corp.",
  },
  {
    cik_str: 1806904,
    ticker: "EZGO",
    company_name: "EZGO Technologies Ltd.",
  },
  {
    cik_str: 1451448,
    ticker: "GMBL",
    company_name: "ESPORTS ENTERTAINMENT GROUP, INC.",
  },
  {
    cik_str: 1295514,
    ticker: "MDWK",
    company_name: "MDWerks, Inc.",
  },
  {
    cik_str: 1787803,
    ticker: "WNW",
    company_name: "Meiwu Technology Co Ltd",
  },
  {
    cik_str: 1757499,
    ticker: "SHPH",
    company_name: "Shuttle Pharmaceuticals Holdings, Inc.",
  },
  {
    cik_str: 1389002,
    ticker: "MRIN",
    company_name: "MARIN SOFTWARE INC",
  },
  {
    cik_str: 1750149,
    ticker: "IKT",
    company_name: "Inhibikase Therapeutics, Inc.",
  },
  {
    cik_str: 1922335,
    ticker: "SYRA",
    company_name: "Syra Health Corp",
  },
  {
    cik_str: 1319150,
    ticker: "PBMLF",
    company_name: "Pacific Booker Minerals Inc.",
  },
  {
    cik_str: 1362516,
    ticker: "CLRI",
    company_name: "Cleartronic, Inc.",
  },
  {
    cik_str: 1737995,
    ticker: "STSS",
    company_name: "Sharps Technology Inc.",
  },
  {
    cik_str: 1016504,
    ticker: "INBP",
    company_name: "INTEGRATED BIOPHARMA INC",
  },
  {
    cik_str: 1386044,
    ticker: "FHLD",
    company_name: "Freedom Holdings, Inc.",
  },
  {
    cik_str: 1545224,
    ticker: "SILEF",
    company_name: "Silver Elephant Mining Corp.",
  },
  {
    cik_str: 319458,
    ticker: "ENSV",
    company_name: "Enservco Corp",
  },
  {
    cik_str: 1916241,
    ticker: "PRZO",
    company_name: "ParaZero Technologies Ltd.",
  },
  {
    cik_str: 1750106,
    ticker: "AEI",
    company_name: "Alset Inc.",
  },
  {
    cik_str: 1823882,
    ticker: "MIMO",
    company_name: "Airspan Networks Holdings Inc.",
  },
  {
    cik_str: 1642375,
    ticker: "GHSI",
    company_name: "Guardion Health Sciences, Inc.",
  },
  {
    cik_str: 1825875,
    ticker: "RAYA",
    company_name: "Erayak Power Solution Group Inc.",
  },
  {
    cik_str: 31667,
    ticker: "EDUC",
    company_name: "EDUCATIONAL DEVELOPMENT CORP",
  },
  {
    cik_str: 1346346,
    ticker: "CMOT",
    company_name: "Curtiss Motorcycle Company, Inc.",
  },
  {
    cik_str: 1374567,
    ticker: "LUVU",
    company_name: "Luvu Brands, Inc.",
  },
  {
    cik_str: 1563577,
    ticker: "GRTX",
    company_name: "Galera Therapeutics, Inc.",
  },
  {
    cik_str: 1205922,
    ticker: "VCNX",
    company_name: "VACCINEX, INC.",
  },
  {
    cik_str: 20639,
    ticker: "ABCP",
    company_name: "AmBase Corp",
  },
  {
    cik_str: 1066130,
    ticker: "FEMFF",
    company_name: "FE Battery Metals Corp.",
  },
  {
    cik_str: 1631282,
    ticker: "DTSS",
    company_name: "DATASEA INC.",
  },
  {
    cik_str: 1408146,
    ticker: "SCYYF",
    company_name: "SCANDIUM INTERNATIONAL MINING CORP.",
  },
  {
    cik_str: 1816815,
    ticker: "BON",
    company_name: "Bon Natural Life Ltd",
  },
  {
    cik_str: 38264,
    ticker: "FORD",
    company_name: "Forward Industries, Inc.",
  },
  {
    cik_str: 1282847,
    ticker: "TDCB",
    company_name: "THIRD CENTURY BANCORP",
  },
  {
    cik_str: 1836875,
    ticker: "NVVE",
    company_name: "Nuvve Holding Corp.",
  },
  {
    cik_str: 1382574,
    ticker: "MEDS",
    company_name: "TRxADE HEALTH, INC",
  },
  {
    cik_str: 1944399,
    ticker: "ELWS",
    company_name: "Earlyworks Co., Ltd.",
  },
  {
    cik_str: 1941500,
    ticker: "MWG",
    company_name: "Multi Ways Holdings Ltd",
  },
  {
    cik_str: 1011509,
    ticker: "AUMN",
    company_name: "Golden Minerals Co",
  },
  {
    cik_str: 1358633,
    ticker: "SNBH",
    company_name: "SENTIENT BRANDS HOLDINGS INC.",
  },
  {
    cik_str: 1128189,
    ticker: "PKTX",
    company_name: "ProtoKinetix, Inc.",
  },
  {
    cik_str: 1394108,
    ticker: "SUIC",
    company_name: "SUIC Worldwide Holdings Ltd.",
  },
  {
    cik_str: 1701963,
    ticker: "VS",
    company_name: "Versus Systems Inc.",
  },
  {
    cik_str: 1597846,
    ticker: "GRNQ",
    company_name: "Greenpro Capital Corp.",
  },
  {
    cik_str: 1025771,
    ticker: "WHLT",
    company_name: "CHASE PACKAGING CORP",
  },
  {
    cik_str: 1846715,
    ticker: "WAVE",
    company_name: "Eco Wave Power Global AB (publ)",
  },
  {
    cik_str: 1861449,
    ticker: "BRDS",
    company_name: "Bird Global, Inc.",
  },
  {
    cik_str: 1011060,
    ticker: "NORD",
    company_name: "Nordicus Partners Corp",
  },
  {
    cik_str: 1424864,
    ticker: "RYES",
    company_name: "Rise Gold Corp.",
  },
  {
    cik_str: 1574235,
    ticker: "PULM",
    company_name: "Pulmatrix, Inc.",
  },
  {
    cik_str: 1937993,
    ticker: "CVKD",
    company_name: "Cadrenal Therapeutics, Inc.",
  },
  {
    cik_str: 1856084,
    ticker: "CJJD",
    company_name: "China Jo-Jo Drugstores, Inc.",
  },
  {
    cik_str: 1811999,
    ticker: "FMHS",
    company_name: "FARMHOUSE, INC. /NV",
  },
  {
    cik_str: 1755237,
    ticker: "CYCN",
    company_name: "Cyclerion Therapeutics, Inc.",
  },
  {
    cik_str: 1691936,
    ticker: "SNAX",
    company_name: "STRYVE FOODS, INC.",
  },
  {
    cik_str: 1427570,
    ticker: "RSLS",
    company_name: "ReShape Lifesciences Inc.",
  },
  {
    cik_str: 1140215,
    ticker: "REED",
    company_name: "REED'S, INC.",
  },
  {
    cik_str: 1376321,
    ticker: "CNET",
    company_name: "ZW Data Action Technologies Inc.",
  },
  {
    cik_str: 1673475,
    ticker: "GPOX",
    company_name: "GPO Plus, Inc.",
  },
  {
    cik_str: 1761510,
    ticker: "TLLTF",
    company_name: "TILT Holdings Inc.",
  },
  {
    cik_str: 1375195,
    ticker: "CRTG",
    company_name: "CORETEC GROUP INC.",
  },
  {
    cik_str: 1061612,
    ticker: "JPOTF",
    company_name: "Jackpot Digital Inc.",
  },
  {
    cik_str: 1451512,
    ticker: "UNRV",
    company_name: "Unrivaled Brands, Inc.",
  },
  {
    cik_str: 278165,
    ticker: "OMQS",
    company_name: "OMNIQ Corp.",
  },
  {
    cik_str: 1811216,
    ticker: "BAOS",
    company_name: "Baosheng Media Group Holdings Ltd",
  },
  {
    cik_str: 1584831,
    ticker: "OXBR",
    company_name: "OXBRIDGE RE HOLDINGS Ltd",
  },
  {
    cik_str: 1900564,
    ticker: "WRNT",
    company_name: "WARRANTEE INC.",
  },
  {
    cik_str: 1701261,
    ticker: "FAMI",
    company_name: "Farmmi, Inc.",
  },
  {
    cik_str: 1887673,
    ticker: "WLDS",
    company_name: "Wearable Devices Ltd.",
  },
  {
    cik_str: 1708331,
    ticker: "VRPX",
    company_name: "Virpax Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1110607,
    ticker: "KLNG",
    company_name: "Koil Energy Solutions, Inc.",
  },
  {
    cik_str: 1619096,
    ticker: "SNTW",
    company_name: "Summit Networks Inc.",
  },
  {
    cik_str: 1939965,
    ticker: "BREA",
    company_name: "Brera Holdings PLC",
  },
  {
    cik_str: 1643301,
    ticker: "AVRW",
    company_name: "Avenir Wellness Solutions, Inc.",
  },
  {
    cik_str: 1611842,
    ticker: "PYPD",
    company_name: "PolyPid Ltd.",
  },
  {
    cik_str: 810509,
    ticker: "NAVB",
    company_name: "NAVIDEA BIOPHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1141964,
    ticker: "PCMC",
    company_name: "PUBLIC CO MANAGEMENT CORP",
  },
  {
    cik_str: 1068897,
    ticker: "FXBY",
    company_name: "FOXBY CORP.",
  },
  {
    cik_str: 1083922,
    ticker: "ARAO",
    company_name: "AuraSource, Inc.",
  },
  {
    cik_str: 861972,
    ticker: "SRLZF",
    company_name: "Salazar Resources Ltd",
  },
  {
    cik_str: 1677077,
    ticker: "ALZN",
    company_name: "Alzamend Neuro, Inc.",
  },
  {
    cik_str: 709005,
    ticker: "NROM",
    company_name: "NOBLE ROMANS INC",
  },
  {
    cik_str: 1554818,
    ticker: "AUUD",
    company_name: "AUDDIA INC.",
  },
  {
    cik_str: 823546,
    ticker: "RKFL",
    company_name: "ROCKETFUEL BLOCKCHAIN, INC.",
  },
  {
    cik_str: 1320760,
    ticker: "TSSI",
    company_name: "TSS, Inc.",
  },
  {
    cik_str: 924168,
    ticker: "EFOI",
    company_name: "ENERGY FOCUS, INC/DE",
  },
  {
    cik_str: 1957538,
    ticker: "ESGL",
    company_name: "ESGL Holdings Ltd",
  },
  {
    cik_str: 849401,
    ticker: "ADMT",
    company_name: "ADM TRONICS UNLIMITED, INC.",
  },
  {
    cik_str: 96885,
    ticker: "TIKK",
    company_name: "TEL INSTRUMENT ELECTRONICS CORP",
  },
  {
    cik_str: 22701,
    ticker: "PEGY",
    company_name: "Pineapple Energy Inc.",
  },
  {
    cik_str: 1487798,
    ticker: "ECTM",
    company_name: "ECA Marcellus Trust I",
  },
  {
    cik_str: 1528188,
    ticker: "WNFT",
    company_name: "Worldwide NFT Inc.",
  },
  {
    cik_str: 1187953,
    ticker: "CELZ",
    company_name: "CREATIVE MEDICAL TECHNOLOGY HOLDINGS, INC.",
  },
  {
    cik_str: 1668438,
    ticker: "IMTE",
    company_name: "Integrated Media Technology Ltd",
  },
  {
    cik_str: 1902794,
    ticker: "MGOL",
    company_name: "MGO Global Inc.",
  },
  {
    cik_str: 1886362,
    ticker: "MGAM",
    company_name: "Mobile Global Esports, Inc.",
  },
  {
    cik_str: 1103090,
    ticker: "RSCF",
    company_name: "REFLECT SCIENTIFIC, INC.",
  },
  {
    cik_str: 1622996,
    ticker: "ACBM",
    company_name: "ACRO BIOMEDICAL CO., LTD.",
  },
  {
    cik_str: 1402328,
    ticker: "SBFM",
    company_name: "Sunshine Biopharma, Inc",
  },
  {
    cik_str: 1413745,
    ticker: "ANTE",
    company_name: "AIRNET TECHNOLOGY INC.",
  },
  {
    cik_str: 887247,
    ticker: "DMK",
    company_name: "DMK PHARMACEUTICALS Corp",
  },
  {
    cik_str: 1403870,
    ticker: "GARWF",
    company_name: "Golden Arrow Resources Corp",
  },
  {
    cik_str: 34956,
    ticker: "TENX",
    company_name: "TENAX THERAPEUTICS, INC.",
  },
  {
    cik_str: 1821175,
    ticker: "MSGM",
    company_name: "Motorsport Games Inc.",
  },
  {
    cik_str: 96793,
    ticker: "SSY",
    company_name: "SUNLINK HEALTH SYSTEMS INC",
  },
  {
    cik_str: 1815632,
    ticker: "TGCB",
    company_name: "Tego Cyber, Inc.",
  },
  {
    cik_str: 1253176,
    ticker: "VAPO",
    company_name: "VAPOTHERM INC",
  },
  {
    cik_str: 1522860,
    ticker: "AFIB",
    company_name: "Acutus Medical, Inc.",
  },
  {
    cik_str: 1605057,
    ticker: "VMNT",
    company_name: "Vemanti Group, Inc.",
  },
  {
    cik_str: 1875609,
    ticker: "SWVL",
    company_name: "Swvl Holdings Corp",
  },
  {
    cik_str: 1415332,
    ticker: "LTUM",
    company_name: "Lithium Corp",
  },
  {
    cik_str: 1584693,
    ticker: "HITC",
    company_name: "Healthcare Integrated Technologies Inc.",
  },
  {
    cik_str: 1547660,
    ticker: "VSOLF",
    company_name: "THREE SIXTY SOLAR LTD.",
  },
  {
    cik_str: 1618500,
    ticker: "MDGS",
    company_name: "Medigus Ltd.",
  },
  {
    cik_str: 1585380,
    ticker: "INKW",
    company_name: "Greene Concepts, Inc",
  },
  {
    cik_str: 1571934,
    ticker: "SNPX",
    company_name: "Synaptogenix, Inc.",
  },
  {
    cik_str: 1796514,
    ticker: "BTCT",
    company_name: "BTC Digital Ltd.",
  },
  {
    cik_str: 1840102,
    ticker: "SPTY",
    company_name: "SPECIFICITY, INC.",
  },
  {
    cik_str: 812796,
    ticker: "SNGX",
    company_name: "SOLIGENIX, INC.",
  },
  {
    cik_str: 1409269,
    ticker: "VERO",
    company_name: "Venus Concept Inc.",
  },
  {
    cik_str: 1574232,
    ticker: "ADXN",
    company_name: "Addex Therapeutics Ltd.",
  },
  {
    cik_str: 1601936,
    ticker: "CYTO",
    company_name: "Altamira Therapeutics Ltd.",
  },
  {
    cik_str: 1084551,
    ticker: "CRDV",
    company_name: "Community Redevelopment Inc.",
  },
  {
    cik_str: 724742,
    ticker: "TPHS",
    company_name: "Trinity Place Holdings Inc.",
  },
  {
    cik_str: 1707303,
    ticker: "DOGZ",
    company_name: "Dogness (International) Corp",
  },
  {
    cik_str: 1413754,
    ticker: "MRZM",
    company_name: "MARIZYME, INC.",
  },
  {
    cik_str: 896493,
    ticker: "AULT",
    company_name: "Ault Alliance, Inc.",
  },
  {
    cik_str: 1558583,
    ticker: "FUV",
    company_name: "Arcimoto Inc",
  },
  {
    cik_str: 1808377,
    ticker: "LUCY",
    company_name: "Innovative Eyewear Inc",
  },
  {
    cik_str: 1559356,
    ticker: "BTAX",
    company_name: "Biostax Corp.",
  },
  {
    cik_str: 1582249,
    ticker: "RASP",
    company_name: "ACTAVIA LIFE SCIENCES, INC.",
  },
  {
    cik_str: 1898604,
    ticker: "YOSH",
    company_name: "Yoshiharu Global Co.",
  },
  {
    cik_str: 822370,
    ticker: "EMMA",
    company_name: "Emmaus Life Sciences, Inc.",
  },
  {
    cik_str: 1938046,
    ticker: "MGRX",
    company_name: "MANGOCEUTICALS, INC.",
  },
  {
    cik_str: 1435064,
    ticker: "CETX",
    company_name: "CEMTREX INC",
  },
  {
    cik_str: 1394319,
    ticker: "TCON",
    company_name: "Tracon Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1827401,
    ticker: "DRUG",
    company_name: "BRIGHT MINDS BIOSCIENCES INC.",
  },
  {
    cik_str: 1133818,
    ticker: "BPTH",
    company_name: "BIO-PATH HOLDINGS INC",
  },
  {
    cik_str: 1805594,
    ticker: "JWEL",
    company_name: "Jowell Global Ltd.",
  },
  {
    cik_str: 1371128,
    ticker: "NEWH",
    company_name: "NewHydrogen, Inc.",
  },
  {
    cik_str: 1668370,
    ticker: "TBLT",
    company_name: "Toughbuilt Industries, Inc",
  },
  {
    cik_str: 1645469,
    ticker: "MNPR",
    company_name: "Monopar Therapeutics",
  },
  {
    cik_str: 1801602,
    ticker: "SBIG",
    company_name: "SpringBig Holdings, Inc.",
  },
  {
    cik_str: 768408,
    ticker: "CYAN",
    company_name: "CYANOTECH CORP",
  },
  {
    cik_str: 1920406,
    ticker: "ASST",
    company_name: "Asset Entities Inc.",
  },
  {
    cik_str: 758743,
    ticker: "VIDE",
    company_name: "VIDEO DISPLAY CORP",
  },
  {
    cik_str: 1958713,
    ticker: "MI",
    company_name: "NFT Ltd",
  },
  {
    cik_str: 1347242,
    ticker: "LIPO",
    company_name: "LIPELLA PHARMACEUTICALS INC.",
  },
  {
    cik_str: 1630212,
    ticker: "ALBT",
    company_name: "Avalon GloboCare Corp.",
  },
  {
    cik_str: 1279620,
    ticker: "ZDPY",
    company_name: "Zoned Properties, Inc.",
  },
  {
    cik_str: 1500620,
    ticker: "BGAVF",
    company_name: "Bravada Gold Corp",
  },
  {
    cik_str: 1610853,
    ticker: "HSDT",
    company_name: "HELIUS MEDICAL TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1962481,
    ticker: "BOF",
    company_name: "BranchOut Food Inc.",
  },
  {
    cik_str: 1534248,
    ticker: "CMMB",
    company_name: "Chemomab Therapeutics Ltd.",
  },
  {
    cik_str: 743758,
    ticker: "AIAD",
    company_name: "AiAdvertising, Inc.",
  },
  {
    cik_str: 1534525,
    ticker: "XBIO",
    company_name: "Xenetic Biosciences, Inc.",
  },
  {
    cik_str: 1415744,
    ticker: "NMEX",
    company_name: "NORTHERN MINERALS & EXPLORATION LTD.",
  },
  {
    cik_str: 1281845,
    ticker: "UNQL",
    company_name: "Unique Logistics International, Inc.",
  },
  {
    cik_str: 1593184,
    ticker: "FDIT",
    company_name: "FINDIT, INC.",
  },
  {
    cik_str: 1357459,
    ticker: "PALI",
    company_name: "PALISADE BIO, INC.",
  },
  {
    cik_str: 724445,
    ticker: "BZYR",
    company_name: "BURZYNSKI RESEARCH INSTITUTE INC",
  },
  {
    cik_str: 1733257,
    ticker: "FNCH",
    company_name: "Finch Therapeutics Group, Inc.",
  },
  {
    cik_str: 1543652,
    ticker: "FFLO",
    company_name: "Free Flow, Inc.",
  },
  {
    cik_str: 1650101,
    ticker: "ATXG",
    company_name: "ADDENTAX GROUP CORP.",
  },
  {
    cik_str: 1711786,
    ticker: "HOTH",
    company_name: "Hoth Therapeutics, Inc.",
  },
  {
    cik_str: 1754323,
    ticker: "PBTS",
    company_name: "Powerbridge Technologies Co., Ltd.",
  },
  {
    cik_str: 1493137,
    ticker: "LCTC",
    company_name: "Lifeloc Technologies, Inc",
  },
  {
    cik_str: 1022505,
    ticker: "SDCH",
    company_name: "SideChannel, Inc.",
  },
  {
    cik_str: 1814215,
    ticker: "BURU",
    company_name: "Nuburu, Inc.",
  },
  {
    cik_str: 890394,
    ticker: "PRSO",
    company_name: "Peraso Inc.",
  },
  {
    cik_str: 1080319,
    ticker: "ELYS",
    company_name: "Elys Game Technology, Corp.",
  },
  {
    cik_str: 1128252,
    ticker: "SIPN",
    company_name: "SIPP International Industries, Inc.",
  },
  {
    cik_str: 1304077,
    ticker: "FMNJ",
    company_name: "Franklin Mining, Inc.",
  },
  {
    cik_str: 1261249,
    ticker: "AGRX",
    company_name: "AGILE THERAPEUTICS INC",
  },
  {
    cik_str: 1780785,
    ticker: "CNEY",
    company_name: "CN ENERGY GROUP. INC.",
  },
  {
    cik_str: 1464165,
    ticker: "BETRF",
    company_name: "BetterLife Pharma Inc.",
  },
  {
    cik_str: 1809616,
    ticker: "UPC",
    company_name: "Universe Pharmaceuticals INC",
  },
  {
    cik_str: 1652452,
    ticker: "CXXMF",
    company_name: "CMX GOLD & SILVER CORP.",
  },
  {
    cik_str: 1342958,
    ticker: "DGLY",
    company_name: "DIGITAL ALLY, INC.",
  },
  {
    cik_str: 1510964,
    ticker: "CVSI",
    company_name: "CV Sciences, Inc.",
  },
  {
    cik_str: 1657214,
    ticker: "ILAL",
    company_name: "International Land Alliance Inc.",
  },
  {
    cik_str: 1415758,
    ticker: "NVSGF",
    company_name: "Nevada Sunrise Metals Corp.",
  },
  {
    cik_str: 64463,
    ticker: "SLNH",
    company_name: "Soluna Holdings, Inc",
  },
  {
    cik_str: 1597892,
    ticker: "JRSS",
    company_name: "JRSIS HEALTH CARE Corp",
  },
  {
    cik_str: 1123596,
    ticker: "BABB",
    company_name: "BAB, INC.",
  },
  {
    cik_str: 1442492,
    ticker: "LRDC",
    company_name: "Laredo Oil, Inc.",
  },
  {
    cik_str: 1905956,
    ticker: "TGL",
    company_name: "TREASURE GLOBAL INC",
  },
  {
    cik_str: 1588084,
    ticker: "TANH",
    company_name: "TANTECH HOLDINGS LTD",
  },
  {
    cik_str: 88000,
    ticker: "SLGD",
    company_name: "Scott's Liquid Gold - Inc.",
  },
  {
    cik_str: 1160798,
    ticker: "OOGI",
    company_name: "C2E ENERGY, INC.",
  },
  {
    cik_str: 1865127,
    ticker: "LSDI",
    company_name: "Lucy Scientific Discovery, Inc.",
  },
  {
    cik_str: 1729214,
    ticker: "XRTX",
    company_name: "XORTX Therapeutics Inc.",
  },
  {
    cik_str: 1603793,
    ticker: "NRIS",
    company_name: "Norris Industries, Inc.",
  },
  {
    cik_str: 1023549,
    ticker: "XTLB",
    company_name: "XTL BIOPHARMACEUTICALS LTD",
  },
  {
    cik_str: 1778651,
    ticker: "JUVAF",
    company_name: "JUVA LIFE INC./Canada",
  },
  {
    cik_str: 1304409,
    ticker: "AHNR",
    company_name: "ATHENA GOLD CORP",
  },
  {
    cik_str: 1031093,
    ticker: "SVBL",
    company_name: "SILVER BULL RESOURCES, INC.",
  },
  {
    cik_str: 1452583,
    ticker: "CBMJ",
    company_name: "CONSERVATIVE BROADCAST MEDIA & PUBLISHING, INC.",
  },
  {
    cik_str: 1480313,
    ticker: "SMREF",
    company_name: "SUN SUMMIT MINERALS CORP.",
  },
  {
    cik_str: 1300734,
    ticker: "SISI",
    company_name: "SHINECO, INC.",
  },
  {
    cik_str: 882291,
    ticker: "AEMD",
    company_name: "AETHLON MEDICAL INC",
  },
  {
    cik_str: 1632121,
    ticker: "BLNC",
    company_name: "Balance Labs, Inc.",
  },
  {
    cik_str: 819050,
    ticker: "FRTX",
    company_name: "Fresh Tracks Therapeutics, Inc.",
  },
  {
    cik_str: 1470683,
    ticker: "AEHL",
    company_name: "Antelope Enterprise Holdings Ltd",
  },
  {
    cik_str: 105744,
    ticker: "GBR",
    company_name: "New Concept Energy, Inc.",
  },
  {
    cik_str: 1709542,
    ticker: "XESP",
    company_name: "Electronic Servitor Publication Network, Inc.",
  },
  {
    cik_str: 1698530,
    ticker: "XCUR",
    company_name: "EXICURE, INC.",
  },
  {
    cik_str: 1743340,
    ticker: "TC",
    company_name: "TuanChe Ltd",
  },
  {
    cik_str: 1776067,
    ticker: "OCG",
    company_name: "Oriental Culture Holding LTD",
  },
  {
    cik_str: 1669400,
    ticker: "VFRM",
    company_name: "Veritas Farms, Inc.",
  },
  {
    cik_str: 1558569,
    ticker: "ISPC",
    company_name: "iSpecimen Inc.",
  },
  {
    cik_str: 1816319,
    ticker: "LYT",
    company_name: "Lytus Technologies Holdings PTV. Ltd.",
  },
  {
    cik_str: 1741489,
    ticker: "ELVG",
    company_name: "Elvictor Group, Inc.",
  },
  {
    cik_str: 1442999,
    ticker: "ABTI",
    company_name: "ALTEROLA BIOTECH INC.",
  },
  {
    cik_str: 1407973,
    ticker: "SONX",
    company_name: "Sonendo, Inc.",
  },
  {
    cik_str: 1885408,
    ticker: "JFBR",
    company_name: "Jeffs' Brands Ltd",
  },
  {
    cik_str: 764630,
    ticker: "SPEV",
    company_name: "SHOREPOWER TECHNOLOGIES INC.",
  },
  {
    cik_str: 1681348,
    ticker: "VVPR",
    company_name: "VivoPower International PLC",
  },
  {
    cik_str: 1092570,
    ticker: "FULO",
    company_name: "FULLNET COMMUNICATIONS INC",
  },
  {
    cik_str: 811522,
    ticker: "QZMRF",
    company_name: "QUARTZ MOUNTAIN RESOURCES LTD",
  },
  {
    cik_str: 1510518,
    ticker: "GFOO",
    company_name: "Genufood Energy Enzymes Corp.",
  },
  {
    cik_str: 1506983,
    ticker: "GCTK",
    company_name: "GlucoTrack, Inc.",
  },
  {
    cik_str: 1602078,
    ticker: "NMRD",
    company_name: "Nemaura Medical Inc.",
  },
  {
    cik_str: 1568969,
    ticker: "APYP",
    company_name: "APPYEA, INC",
  },
  {
    cik_str: 1609258,
    ticker: "PTCO",
    company_name: "PetroGas Co",
  },
  {
    cik_str: 1205059,
    ticker: "REPCF",
    company_name: "REPLICEL LIFE SCIENCES INC.",
  },
  {
    cik_str: 1450894,
    ticker: "IAALF",
    company_name: "IBC Advanced Alloys Corp.",
  },
  {
    cik_str: 1677522,
    ticker: "BKTPF",
    company_name: "CRUZ BATTERY METALS CORP.",
  },
  {
    cik_str: 1670869,
    ticker: "RMHB",
    company_name: "Rocky Mountain High Brands, Inc.",
  },
  {
    cik_str: 1889823,
    ticker: "KWE",
    company_name: "KWESST Micro Systems Inc.",
  },
  {
    cik_str: 1614556,
    ticker: "STAL",
    company_name: "Star Alliance International Corp.",
  },
  {
    cik_str: 1514946,
    ticker: "AXIM",
    company_name: "AXIM BIOTECHNOLOGIES, INC.",
  },
  {
    cik_str: 1684688,
    ticker: "JUPGF",
    company_name: "Jupiter Gold Corp",
  },
  {
    cik_str: 1335105,
    ticker: "LIXT",
    company_name: "LIXTE BIOTECHNOLOGY HOLDINGS, INC.",
  },
  {
    cik_str: 1892500,
    ticker: "CMND",
    company_name: "Clearmind Medicine Inc.",
  },
  {
    cik_str: 59860,
    ticker: "GRMC",
    company_name: "GOLDRICH MINING CO",
  },
  {
    cik_str: 1613979,
    ticker: "ZPHYF",
    company_name: "ZEPHYR MINERALS LTD.",
  },
  {
    cik_str: 1349706,
    ticker: "IMHC",
    company_name: "IMPERALIS HOLDING CORP.",
  },
  {
    cik_str: 1121795,
    ticker: "GHST",
    company_name: "GHST World Inc.",
  },
  {
    cik_str: 1054102,
    ticker: "IDXG",
    company_name: "INTERPACE BIOSCIENCES, INC.",
  },
  {
    cik_str: 1810467,
    ticker: "SNTG",
    company_name: "Sentage Holdings Inc.",
  },
  {
    cik_str: 1605331,
    ticker: "ABQQ",
    company_name: "AB INTERNATIONAL GROUP CORP.",
  },
  {
    cik_str: 1858685,
    ticker: "BFRI",
    company_name: "Biofrontera Inc.",
  },
  {
    cik_str: 1792030,
    ticker: "IMCC",
    company_name: "IM Cannabis Corp.",
  },
  {
    cik_str: 1342936,
    ticker: "AVOI",
    company_name: "Advanced Voice Recognition Systems, Inc",
  },
  {
    cik_str: 1514183,
    ticker: "SILO",
    company_name: "Silo Pharma, Inc.",
  },
  {
    cik_str: 1687542,
    ticker: "FRGT",
    company_name: "Freight Technologies, Inc.",
  },
  {
    cik_str: 1640384,
    ticker: "LMFA",
    company_name: "LM FUNDING AMERICA, INC.",
  },
  {
    cik_str: 1807166,
    ticker: "AMST",
    company_name: "Amesite Inc.",
  },
  {
    cik_str: 1166708,
    ticker: "BWMG",
    company_name: "Brownie's Marine Group, Inc",
  },
  {
    cik_str: 930775,
    ticker: "ECIA",
    company_name: "ENCISION INC",
  },
  {
    cik_str: 1007019,
    ticker: "JVA",
    company_name: "COFFEE HOLDING CO INC",
  },
  {
    cik_str: 1782107,
    ticker: "BWV",
    company_name: "Blue Water Biotech, Inc.",
  },
  {
    cik_str: 1158420,
    ticker: "GGE",
    company_name: "Green Giant Inc.",
  },
  {
    cik_str: 1806524,
    ticker: "LGHL",
    company_name: "Lion Group Holding Ltd",
  },
  {
    cik_str: 1182731,
    ticker: "CNNN",
    company_name: "ConneXionONE Corp.",
  },
  {
    cik_str: 797542,
    ticker: "VBIX",
    company_name: "Viewbix Inc.",
  },
  {
    cik_str: 1608092,
    ticker: "KITL",
    company_name: "Kisses From Italy Inc.",
  },
  {
    cik_str: 1011662,
    ticker: "GDSI",
    company_name: "GLOBAL DIGITAL SOLUTIONS INC",
  },
  {
    cik_str: 1080448,
    ticker: "PGOL",
    company_name: "PATRIOT GOLD CORP",
  },
  {
    cik_str: 910267,
    ticker: "TTNP",
    company_name: "TITAN PHARMACEUTICALS INC",
  },
  {
    cik_str: 1879726,
    ticker: "SIDU",
    company_name: "Sidus Space Inc.",
  },
  {
    cik_str: 1638911,
    ticker: "USDR",
    company_name: "UAS Drone Corp.",
  },
  {
    cik_str: 841533,
    ticker: "SRMX",
    company_name: "SADDLE RANCH MEDIA, INC.",
  },
  {
    cik_str: 1829635,
    ticker: "RNAZ",
    company_name: "Transcode Therapeutics, Inc.",
  },
  {
    cik_str: 1559157,
    ticker: "SSOK",
    company_name: "Sunstock, Inc.",
  },
  {
    cik_str: 1673481,
    ticker: "LTRY",
    company_name: "Lottery.com Inc.",
  },
  {
    cik_str: 1089815,
    ticker: "USNU",
    company_name: "U.S. NeuroSurgical Holdings, Inc.",
  },
  {
    cik_str: 1621221,
    ticker: "ARTL",
    company_name: "ARTELO BIOSCIENCES, INC.",
  },
  {
    cik_str: 1335112,
    ticker: "LGIQ",
    company_name: "LOGIQ, INC.",
  },
  {
    cik_str: 1403708,
    ticker: "EVOK",
    company_name: "Evoke Pharma Inc",
  },
  {
    cik_str: 1777765,
    ticker: "VQSSF",
    company_name: "VIQ Solutions Inc.",
  },
  {
    cik_str: 811240,
    ticker: "BIOL",
    company_name: "BIOLASE, INC",
  },
  {
    cik_str: 1674365,
    ticker: "APTX",
    company_name: "Aptinyx Inc.",
  },
  {
    cik_str: 1819615,
    ticker: "CLVR",
    company_name: "Clever Leaves Holdings Inc.",
  },
  {
    cik_str: 1156784,
    ticker: "COWI",
    company_name: "CarbonMeta Technologies, Inc.",
  },
  {
    cik_str: 1088638,
    ticker: "MMND",
    company_name: "MASTERMIND, INC.",
  },
  {
    cik_str: 1861522,
    ticker: "PIK",
    company_name: "KIDPIK CORP.",
  },
  {
    cik_str: 1494558,
    ticker: "AMBO",
    company_name: "Ambow Education Holding Ltd.",
  },
  {
    cik_str: 1976923,
    ticker: "YQAI",
    company_name: "YOUNEEQAI TECHNICAL SERVICES, INC.",
  },
  {
    cik_str: 1648960,
    ticker: "DATS",
    company_name: "DatChat, Inc.",
  },
  {
    cik_str: 1547521,
    ticker: "BBUZ",
    company_name: "Engage Mobility, Inc.",
  },
  {
    cik_str: 1372514,
    ticker: "KPRX",
    company_name: "KIORA PHARMACEUTICALS INC",
  },
  {
    cik_str: 730349,
    ticker: "TOFB",
    company_name: "TOFUTTI BRANDS INC",
  },
  {
    cik_str: 1622244,
    ticker: "OWPC",
    company_name: "One World Products, Inc.",
  },
  {
    cik_str: 1698113,
    ticker: "ID",
    company_name: "PARTS iD, Inc.",
  },
  {
    cik_str: 1004724,
    ticker: "RHE",
    company_name: "REGIONAL HEALTH PROPERTIES, INC",
  },
  {
    cik_str: 1629205,
    ticker: "IVBT",
    company_name: "Innovation1 Biotech Inc.",
  },
  {
    cik_str: 1895618,
    ticker: "NFTG",
    company_name: "NFT Gaming Co Inc.",
  },
  {
    cik_str: 1454263,
    ticker: "SZLSF",
    company_name: "STAGEZERO LIFE SCIENCES LTD.",
  },
  {
    cik_str: 1122993,
    ticker: "BMXI",
    company_name: "BROOKMOUNT EXPLORATIONS INC",
  },
  {
    cik_str: 1482541,
    ticker: "CEAD",
    company_name: "CEA Industries Inc.",
  },
  {
    cik_str: 931059,
    ticker: "RNVA",
    company_name: "Rennova Health, Inc.",
  },
  {
    cik_str: 1671502,
    ticker: "QNRX",
    company_name: "Quoin Pharmaceuticals, Ltd.",
  },
  {
    cik_str: 1801834,
    ticker: "PRFX",
    company_name: "PAINREFORM LTD.",
  },
  {
    cik_str: 1532390,
    ticker: "WTER",
    company_name: "ALKALINE WATER Co INC",
  },
  {
    cik_str: 1409036,
    ticker: "TARSF",
    company_name: "Silver North Resources Ltd.",
  },
  {
    cik_str: 1643721,
    ticker: "LBUY",
    company_name: "LEAFBUYER TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1419051,
    ticker: "TSOI",
    company_name: "THERAPEUTIC SOLUTIONS INTERNATIONAL, INC.",
  },
  {
    cik_str: 1557798,
    ticker: "CIIT",
    company_name: "Tianci International, Inc.",
  },
  {
    cik_str: 1045942,
    ticker: "TRCK",
    company_name: "Track Group, Inc.",
  },
  {
    cik_str: 1448705,
    ticker: "BASA",
    company_name: "BASANITE, INC.",
  },
  {
    cik_str: 1820630,
    ticker: "PTRAQ",
    company_name: "Proterra Inc",
  },
  {
    cik_str: 1293818,
    ticker: "OPGN",
    company_name: "OPGEN INC",
  },
  {
    cik_str: 1787123,
    ticker: "LQLY",
    company_name: "QLY Biotech Group Corp.",
  },
  {
    cik_str: 1289850,
    ticker: "NURO",
    company_name: "NeuroMetrix, Inc.",
  },
  {
    cik_str: 1506928,
    ticker: "AVGR",
    company_name: "Avinger Inc",
  },
  {
    cik_str: 1604191,
    ticker: "FWBI",
    company_name: "First Wave BioPharma, Inc.",
  },
  {
    cik_str: 1905511,
    ticker: "JCSE",
    company_name: "JE Cleantech Holdings Ltd",
  },
  {
    cik_str: 1755101,
    ticker: "ALDS",
    company_name: "APPlife Digital Solutions Inc",
  },
  {
    cik_str: 1946563,
    ticker: "SXTP",
    company_name: "60 DEGREES PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1668010,
    ticker: "DBGI",
    company_name: "Digital Brands Group, Inc.",
  },
  {
    cik_str: 1022899,
    ticker: "PTIX",
    company_name: "Protagenic Therapeutics, Inc.new",
  },
  {
    cik_str: 890725,
    ticker: "GSAC",
    company_name: "GELSTAT CORP",
  },
  {
    cik_str: 1511820,
    ticker: "STEK",
    company_name: "Stemtech Corp",
  },
  {
    cik_str: 1704287,
    ticker: "BJDX",
    company_name: "Bluejay Diagnostics, Inc.",
  },
  {
    cik_str: 1410187,
    ticker: "CNNC",
    company_name: "Cannonau Corp.",
  },
  {
    cik_str: 1913210,
    ticker: "BRSH",
    company_name: "Bruush Oral Care Inc.",
  },
  {
    cik_str: 1711012,
    ticker: "AIHS",
    company_name: "Senmiao Technology Ltd",
  },
  {
    cik_str: 1940674,
    ticker: "SMX",
    company_name: "SMX (Security Matters) Public Ltd Co",
  },
  {
    cik_str: 946486,
    ticker: "WINT",
    company_name: "WINDTREE THERAPEUTICS INC /DE/",
  },
  {
    cik_str: 1402479,
    ticker: "MDVL",
    company_name: "MedAvail Holdings, Inc.",
  },
  {
    cik_str: 1716947,
    ticker: "ENSC",
    company_name: "Ensysce Biosciences, Inc.",
  },
  {
    cik_str: 1589150,
    ticker: "RGBP",
    company_name: "Regen BioPharma Inc",
  },
  {
    cik_str: 1543637,
    ticker: "NUMD",
    company_name: "Nu-Med Plus, Inc.",
  },
  {
    cik_str: 836564,
    ticker: "CPMV",
    company_name: "Mosaic ImmunoEngineering Inc.",
  },
  {
    cik_str: 1281984,
    ticker: "WDLF",
    company_name: "Decentral Life, Inc.",
  },
  {
    cik_str: 1675634,
    ticker: "PIXY",
    company_name: "ShiftPixy, Inc.",
  },
  {
    cik_str: 1867589,
    ticker: "RWGI",
    company_name: "Rodedawg International Industries, Inc.",
  },
  {
    cik_str: 1810560,
    ticker: "REVB",
    company_name: "REVELATION BIOSCIENCES, INC.",
  },
  {
    cik_str: 1492617,
    ticker: "FWFW",
    company_name: "FLYWHEEL ADVANCED TECHNOLOGY, INC.",
  },
  {
    cik_str: 1106644,
    ticker: "CPHI",
    company_name: "CHINA PHARMA HOLDINGS, INC.",
  },
  {
    cik_str: 1025561,
    ticker: "SBET",
    company_name: "SharpLink Gaming Ltd.",
  },
  {
    cik_str: 1894693,
    ticker: "SVRE",
    company_name: "SaverOne 2014 Ltd.",
  },
  {
    cik_str: 1766267,
    ticker: "SHMY",
    company_name: "Synergy Empire Ltd",
  },
  {
    cik_str: 1689382,
    ticker: "TLLYF",
    company_name: "Trilogy International Partners Inc.",
  },
  {
    cik_str: 1817760,
    ticker: "SMTK",
    company_name: "SmartKem, Inc.",
  },
  {
    cik_str: 1533040,
    ticker: "PHIO",
    company_name: "Phio Pharmaceuticals Corp.",
  },
  {
    cik_str: 1499717,
    ticker: "STAF",
    company_name: "Staffing 360 Solutions, Inc.",
  },
  {
    cik_str: 930245,
    ticker: "AASP",
    company_name: "GLOBAL ACQUISITIONS Corp",
  },
  {
    cik_str: 1838128,
    ticker: "LOWLF",
    company_name: "Lowell Farms Inc.",
  },
  {
    cik_str: 912544,
    ticker: "NSTM",
    company_name: "NovelStem International Corp.",
  },
  {
    cik_str: 1743905,
    ticker: "RVSN",
    company_name: "Rail Vision Ltd.",
  },
  {
    cik_str: 1809750,
    ticker: "EDBL",
    company_name: "Edible Garden AG Inc",
  },
  {
    cik_str: 1141284,
    ticker: "ASNS",
    company_name: "ACTELIS NETWORKS INC",
  },
  {
    cik_str: 1811623,
    ticker: "PXMD",
    company_name: "PaxMedica, Inc.",
  },
  {
    cik_str: 1759352,
    ticker: "CGOLF",
    company_name: "Contact Gold Corp.",
  },
  {
    cik_str: 1699709,
    ticker: "YJGJ",
    company_name: "YIJIA GROUP CORP.",
  },
  {
    cik_str: 1376793,
    ticker: "CVAT",
    company_name: "Cavitation Technologies, Inc.",
  },
  {
    cik_str: 102109,
    ticker: "UUU",
    company_name: "UNIVERSAL SECURITY INSTRUMENTS INC",
  },
  {
    cik_str: 874292,
    ticker: "AEY",
    company_name: "ADDVANTAGE TECHNOLOGIES GROUP INC",
  },
  {
    cik_str: 1474558,
    ticker: "KATX",
    company_name: "KAT EXPLORATION, INC.",
  },
  {
    cik_str: 1100397,
    ticker: "ADXS",
    company_name: "Ayala Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1522222,
    ticker: "CLSH",
    company_name: "CLS Holdings USA, Inc.",
  },
  {
    cik_str: 1611746,
    ticker: "SPRC",
    company_name: "SciSparc Ltd.",
  },
  {
    cik_str: 1591913,
    ticker: "IPSI",
    company_name: "Innovative Payment Solutions, Inc.",
  },
  {
    cik_str: 1593204,
    ticker: "ADAD",
    company_name: "Huaizhong Health Group, Inc.",
  },
  {
    cik_str: 1089297,
    ticker: "NVGT",
    company_name: "NOVAGANT CORP",
  },
  {
    cik_str: 1755953,
    ticker: "KERN",
    company_name: "Akerna Corp.",
  },
  {
    cik_str: 1939365,
    ticker: "IVP",
    company_name: "INSPIRE VETERINARY PARTNERS, INC.",
  },
  {
    cik_str: 1424657,
    ticker: "CUEN",
    company_name: "Cuentas Inc.",
  },
  {
    cik_str: 1611747,
    ticker: "SCNI",
    company_name: "Scinai Immunotherapeutics Ltd.",
  },
  {
    cik_str: 1633441,
    ticker: "SECO",
    company_name: "Secoo Holding Ltd",
  },
  {
    cik_str: 890821,
    ticker: "ENVB",
    company_name: "Enveric Biosciences, Inc.",
  },
  {
    cik_str: 1463208,
    ticker: "TLSS",
    company_name: "Transportation & Logistics Systems, Inc.",
  },
  {
    cik_str: 1347652,
    ticker: "CORR",
    company_name: "CorEnergy Infrastructure Trust, Inc.",
  },
  {
    cik_str: 1414767,
    ticker: "NCPL",
    company_name: "Netcapital Inc.",
  },
  {
    cik_str: 1087329,
    ticker: "RSHN",
    company_name: "RushNet, Inc.",
  },
  {
    cik_str: 1384939,
    ticker: "BNCM",
    company_name: "BOUNCE MOBILE SYSTEMS, INC.",
  },
  {
    cik_str: 1830503,
    ticker: "BZWR",
    company_name: "Business Warrior Corp",
  },
  {
    cik_str: 1001601,
    ticker: "MGTI",
    company_name: "MGT CAPITAL INVESTMENTS, INC.",
  },
  {
    cik_str: 1279715,
    ticker: "IWSH",
    company_name: "Wright Investors Service Holdings, Inc.",
  },
  {
    cik_str: 1468978,
    ticker: "SITS",
    company_name: "SOUTHERN ITS INTERNATIONAL, INC.",
  },
  {
    cik_str: 1789192,
    ticker: "SVFD",
    company_name: "Save Foods, Inc.",
  },
  {
    cik_str: 1651166,
    ticker: "GSBX",
    company_name: "Golden State Bancorp",
  },
  {
    cik_str: 1789299,
    ticker: "WTO",
    company_name: "UTime Ltd",
  },
  {
    cik_str: 1469443,
    ticker: "RKDA",
    company_name: "Arcadia Biosciences, Inc.",
  },
  {
    cik_str: 1857910,
    ticker: "DRFS",
    company_name: "Dr. Foods, Inc.",
  },
  {
    cik_str: 803578,
    ticker: "WAVD",
    company_name: "WAVEDANCER, INC.",
  },
  {
    cik_str: 1191832,
    ticker: "KNGRF",
    company_name: "Kingsmen Resources Ltd.",
  },
  {
    cik_str: 1460702,
    ticker: "QLGN",
    company_name: "Qualigen Therapeutics, Inc.",
  },
  {
    cik_str: 1130166,
    ticker: "CYCC",
    company_name: "Cyclacel Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1951067,
    ticker: "CISS",
    company_name: "C3is Inc.",
  },
  {
    cik_str: 1826671,
    ticker: "NIR",
    company_name: "Near Intelligence, Inc.",
  },
  {
    cik_str: 1614067,
    ticker: "ARDS",
    company_name: "Aridis Pharmaceuticals, Inc.",
  },
  {
    cik_str: 862861,
    ticker: "JAN",
    company_name: "JanOne Inc.",
  },
  {
    cik_str: 1346022,
    ticker: "ENRT",
    company_name: "Enertopia Corp.",
  },
  {
    cik_str: 1576197,
    ticker: "SENR",
    company_name: "Strategic Environmental & Energy Resources, Inc.",
  },
  {
    cik_str: 1671584,
    ticker: "APVO",
    company_name: "Aptevo Therapeutics Inc.",
  },
  {
    cik_str: 1543623,
    ticker: "UCLE",
    company_name: "US NUCLEAR CORP.",
  },
  {
    cik_str: 1572565,
    ticker: "INQD",
    company_name: "Indoor Harvest Corp",
  },
  {
    cik_str: 1107280,
    ticker: "OVTZ",
    company_name: "OCULUS VISIONTECH INC.",
  },
  {
    cik_str: 1759424,
    ticker: "EVVL",
    company_name: "Evil Empire Designs, Inc.",
  },
  {
    cik_str: 1815903,
    ticker: "PTPI",
    company_name: "Petros Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1706509,
    ticker: "COSG",
    company_name: "Cosmos Group Holdings Inc.",
  },
  {
    cik_str: 1417664,
    ticker: "VEII",
    company_name: "Value Exchange International, Inc.",
  },
  {
    cik_str: 1883898,
    ticker: "BATXF",
    company_name: "Straightup Resources Inc",
  },
  {
    cik_str: 1907685,
    ticker: "CMRA",
    company_name: "Comera Life Sciences Holdings, Inc.",
  },
  {
    cik_str: 1350102,
    ticker: "ASTI",
    company_name: "Ascent Solar Technologies, Inc.",
  },
  {
    cik_str: 1682149,
    ticker: "WISA",
    company_name: "WISA TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1819074,
    ticker: "PTNYF",
    company_name: "ParcelPal Logistics Inc.",
  },
  {
    cik_str: 1389518,
    ticker: "CMGR",
    company_name: "Clubhouse Media Group, Inc.",
  },
  {
    cik_str: 1165320,
    ticker: "GBLX",
    company_name: "GB SCIENCES INC",
  },
  {
    cik_str: 1421636,
    ticker: "CBNT",
    company_name: "C-Bond Systems, Inc",
  },
  {
    cik_str: 1807389,
    ticker: "CPOP",
    company_name: "Pop Culture Group Co., Ltd",
  },
  {
    cik_str: 1358190,
    ticker: "ITP",
    company_name: "IT TECH PACKAGING, INC.",
  },
  {
    cik_str: 1716621,
    ticker: "VTAK",
    company_name: "Catheter Precision, Inc.",
  },
  {
    cik_str: 1560293,
    ticker: "TNON",
    company_name: "Tenon Medical, Inc.",
  },
  {
    cik_str: 1566610,
    ticker: "VERB",
    company_name: "Verb Technology Company, Inc.",
  },
  {
    cik_str: 77281,
    ticker: "PRET",
    company_name: "PENNSYLVANIA REAL ESTATE INVESTMENT TRUST",
  },
  {
    cik_str: 1527352,
    ticker: "NXL",
    company_name: "Nexalin Technology, Inc.",
  },
  {
    cik_str: 1473334,
    ticker: "NVFY",
    company_name: "Nova Lifestyle, Inc.",
  },
  {
    cik_str: 1437750,
    ticker: "TRXA",
    company_name: "T-REX Acquisition Corp.",
  },
  {
    cik_str: 1689084,
    ticker: "QRON",
    company_name: "Qrons Inc.",
  },
  {
    cik_str: 1417926,
    ticker: "INVO",
    company_name: "INVO Bioscience, Inc.",
  },
  {
    cik_str: 1284237,
    ticker: "ABCFF",
    company_name: "ABACUS MINING & EXPLORATION CORP",
  },
  {
    cik_str: 1528172,
    ticker: "ENDV",
    company_name: "ENDONOVO THERAPEUTICS, INC.",
  },
  {
    cik_str: 1133192,
    ticker: "VPER",
    company_name: "VIPER NETWORKS INC",
  },
  {
    cik_str: 1737193,
    ticker: "LDSN",
    company_name: "Luduson G Inc.",
  },
  {
    cik_str: 834285,
    ticker: "FRBK",
    company_name: "REPUBLIC FIRST BANCORP INC",
  },
  {
    cik_str: 1798270,
    ticker: "IONM",
    company_name: "Assure Holdings Corp.",
  },
  {
    cik_str: 746210,
    ticker: "OBLG",
    company_name: "Oblong, Inc.",
  },
  {
    cik_str: 1508348,
    ticker: "ACAN",
    company_name: "AmeriCann, Inc.",
  },
  {
    cik_str: 1825452,
    ticker: "ONFO",
    company_name: "Onfolio Holdings, Inc",
  },
  {
    cik_str: 1860657,
    ticker: "ALLR",
    company_name: "Allarity Therapeutics, Inc.",
  },
  {
    cik_str: 1538210,
    ticker: "NEXI",
    company_name: "NexImmune, Inc.",
  },
  {
    cik_str: 1474835,
    ticker: "IPCIF",
    company_name: "Intellipharmaceutics International Inc.",
  },
  {
    cik_str: 1885827,
    ticker: "VRAX",
    company_name: "Virax Biolabs Group Ltd",
  },
  {
    cik_str: 1081188,
    ticker: "GEGP",
    company_name: "GOLD ENTERTAINMENT GROUP INC",
  },
  {
    cik_str: 1173281,
    ticker: "NBSE",
    company_name: "NeuBase Therapeutics, Inc.",
  },
  {
    cik_str: 1443089,
    ticker: "WHSI",
    company_name: "WEARABLE HEALTH SOLUTIONS, INC.",
  },
  {
    cik_str: 1527613,
    ticker: "NUZE",
    company_name: "NuZee, Inc.",
  },
  {
    cik_str: 1062506,
    ticker: "ALDA",
    company_name: "ATLANTICA INC",
  },
  {
    cik_str: 1355250,
    ticker: "IPIX",
    company_name: "Innovation Pharmaceuticals Inc.",
  },
  {
    cik_str: 1178727,
    ticker: "COMS",
    company_name: "COMSovereign Holding Corp.",
  },
  {
    cik_str: 1127475,
    ticker: "DBMM",
    company_name: "Digital Brand Media & Marketing Group, Inc.",
  },
  {
    cik_str: 1536089,
    ticker: "VRVR",
    company_name: "VIRTUAL INTERACTIVE TECHNOLOGIES CORP.",
  },
  {
    cik_str: 1420720,
    ticker: "IBIO",
    company_name: "iBio, Inc.",
  },
  {
    cik_str: 1625285,
    ticker: "ARMV",
    company_name: "Arma Services Inc",
  },
  {
    cik_str: 1552670,
    ticker: "TAOP",
    company_name: "Taoping Inc.",
  },
  {
    cik_str: 819913,
    ticker: "HALL",
    company_name: "HALLMARK FINANCIAL SERVICES INC",
  },
  {
    cik_str: 1892492,
    ticker: "OCTO",
    company_name: "Eightco Holdings Inc.",
  },
  {
    cik_str: 1106838,
    ticker: "SONN",
    company_name: "Sonnet BioTherapeutics Holdings, Inc.",
  },
  {
    cik_str: 1726711,
    ticker: "ADTX",
    company_name: "Aditxt, Inc.",
  },
  {
    cik_str: 1787740,
    ticker: "TIVC",
    company_name: "Tivic Health Systems, Inc.",
  },
  {
    cik_str: 1581220,
    ticker: "XALL",
    company_name: "Xalles Holdings Inc.",
  },
  {
    cik_str: 912607,
    ticker: "MACE",
    company_name: "MACE SECURITY INTERNATIONAL INC",
  },
  {
    cik_str: 1103310,
    ticker: "ICCO",
    company_name: "INTERCARE DX INC",
  },
  {
    cik_str: 945617,
    ticker: "AMMJ",
    company_name: "American Cannabis Company, Inc.",
  },
  {
    cik_str: 1810140,
    ticker: "POL",
    company_name: "Polished.com Inc.",
  },
  {
    cik_str: 1615219,
    ticker: "SLRX",
    company_name: "Salarius Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1043150,
    ticker: "EEGI",
    company_name: "Eline Entertainment Group, Inc.",
  },
  {
    cik_str: 1871181,
    ticker: "QLIS",
    company_name: "Qualis Innovations, Inc.",
  },
  {
    cik_str: 811212,
    ticker: "THMO",
    company_name: "ThermoGenesis Holdings, Inc.",
  },
  {
    cik_str: 788611,
    ticker: "SASI",
    company_name: "SIGMA ADDITIVE SOLUTIONS, INC.",
  },
  {
    cik_str: 318299,
    ticker: "SRCO",
    company_name: "SPARTA COMMERCIAL SERVICES, INC.",
  },
  {
    cik_str: 1725430,
    ticker: "INBS",
    company_name: "INTELLIGENT BIO SOLUTIONS INC.",
  },
  {
    cik_str: 1101026,
    ticker: "ZIVO",
    company_name: "Zivo Bioscience, Inc.",
  },
  {
    cik_str: 1692068,
    ticker: "TPPM",
    company_name: "Yotta Global, Inc.",
  },
  {
    cik_str: 1300781,
    ticker: "ENMI",
    company_name: "DH ENCHANTMENT, INC.",
  },
  {
    cik_str: 1816172,
    ticker: "JZXN",
    company_name: "Jiuzi Holdings, Inc.",
  },
  {
    cik_str: 1291855,
    ticker: "SPCB",
    company_name: "SuperCom Ltd",
  },
  {
    cik_str: 1324736,
    ticker: "HENC",
    company_name: "Hero Technologies Inc.",
  },
  {
    cik_str: 774415,
    ticker: "KRFG",
    company_name: "KING RESOURCES, INC.",
  },
  {
    cik_str: 711034,
    ticker: "THMG",
    company_name: "THUNDER MOUNTAIN GOLD INC",
  },
  {
    cik_str: 897078,
    ticker: "KOAN",
    company_name: "Resonate Blends, Inc.",
  },
  {
    cik_str: 1406434,
    ticker: "PCST",
    company_name: "PURE CAPITAL SOLUTIONS, INC.",
  },
  {
    cik_str: 1424404,
    ticker: "WOLV",
    company_name: "Wolverine Resources Corp.",
  },
  {
    cik_str: 1319643,
    ticker: "LSMG",
    company_name: "Lode-Star Mining Inc.",
  },
  {
    cik_str: 1633070,
    ticker: "AXLA",
    company_name: "Axcella Health Inc.",
  },
  {
    cik_str: 1853816,
    ticker: "DRMA",
    company_name: "Dermata Therapeutics, Inc.",
  },
  {
    cik_str: 1945619,
    ticker: "ECGR",
    company_name: "Bellatora, Inc.",
  },
  {
    cik_str: 1029125,
    ticker: "PBLA",
    company_name: "Panbela Therapeutics, Inc.",
  },
  {
    cik_str: 1121702,
    ticker: "YTEN",
    company_name: "YIELD10 BIOSCIENCE, INC.",
  },
  {
    cik_str: 1416090,
    ticker: "IMII",
    company_name: "INCEPTION MINING INC.",
  },
  {
    cik_str: 1019034,
    ticker: "BKYI",
    company_name: "BIO KEY INTERNATIONAL INC",
  },
  {
    cik_str: 1639142,
    ticker: "AETHF",
    company_name: "Aether Global Innovations Corp.",
  },
  {
    cik_str: 797564,
    ticker: "HSTC",
    company_name: "HST Global, Inc.",
  },
  {
    cik_str: 1730773,
    ticker: "BSFC",
    company_name: "Blue Star Foods Corp.",
  },
  {
    cik_str: 1728328,
    ticker: "INM",
    company_name: "InMed Pharmaceuticals Inc.",
  },
  {
    cik_str: 1346917,
    ticker: "GNTOF",
    company_name: "GENTOR RESOURCES INC.",
  },
  {
    cik_str: 925779,
    ticker: "HIRU",
    company_name: "HIRU Corp",
  },
  {
    cik_str: 1593001,
    ticker: "NGTF",
    company_name: "NightFood Holdings, Inc.",
  },
  {
    cik_str: 1292519,
    ticker: "NVIV",
    company_name: "INVIVO THERAPEUTICS HOLDINGS CORP.",
  },
  {
    cik_str: 720875,
    ticker: "DYNT",
    company_name: "DYNATRONICS CORP",
  },
  {
    cik_str: 1815021,
    ticker: "BQ",
    company_name: "Boqii Holding Ltd",
  },
  {
    cik_str: 1131903,
    ticker: "FCCN",
    company_name: "SPECTRAL CAPITAL Corp",
  },
  {
    cik_str: 1990446,
    ticker: "GRPS",
    company_name: "Trans American Aquaculture, Inc",
  },
  {
    cik_str: 1565146,
    ticker: "GULTU",
    company_name: "Gulf Coast Ultra Deep Royalty Trust",
  },
  {
    cik_str: 1911467,
    ticker: "CRCE",
    company_name: "Circle Energy, Inc./NV",
  },
  {
    cik_str: 1782941,
    ticker: "TIRX",
    company_name: "TIAN RUIXIANG HOLDINGS LTD",
  },
  {
    cik_str: 1522602,
    ticker: "CWBR",
    company_name: "CohBar, Inc.",
  },
  {
    cik_str: 1424768,
    ticker: "VYCO",
    company_name: "VYCOR MEDICAL INC",
  },
  {
    cik_str: 1686850,
    ticker: "MOTS",
    company_name: "Motus GI Holdings, Inc.",
  },
  {
    cik_str: 1651992,
    ticker: "ASFT",
    company_name: "Appsoft Technologies, Inc.",
  },
  {
    cik_str: 1367083,
    ticker: "SNOA",
    company_name: "Sonoma Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1552189,
    ticker: "PLSH",
    company_name: "PANACEA LIFE SCIENCES HOLDINGS, INC.",
  },
  {
    cik_str: 932021,
    ticker: "GTLL",
    company_name: "GLOBAL TECHNOLOGIES LTD",
  },
  {
    cik_str: 1513525,
    ticker: "ADIL",
    company_name: "ADIAL PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1376804,
    ticker: "VNUE",
    company_name: "VNUE, Inc.",
  },
  {
    cik_str: 775057,
    ticker: "ALTX",
    company_name: "ALTEX INDUSTRIES INC",
  },
  {
    cik_str: 1482753,
    ticker: "PMCOF",
    company_name: "Prospector Metals Corp.",
  },
  {
    cik_str: 1485074,
    ticker: "FRZT",
    company_name: "Freeze Tag, Inc.",
  },
  {
    cik_str: 1803977,
    ticker: "VYBE",
    company_name: "Limitless X Holdings Inc.",
  },
  {
    cik_str: 1515139,
    ticker: "MWRK",
    company_name: "METAWORKS PLATFORMS, INC.",
  },
  {
    cik_str: 1613685,
    ticker: "TMIN",
    company_name: "TRENDMAKER INC. LTD.",
  },
  {
    cik_str: 1625288,
    ticker: "NXEN",
    company_name: "NEXIEN BIOPHARMA, INC.",
  },
  {
    cik_str: 1343465,
    ticker: "SNPW",
    company_name: "Sun Pacific Holding Corp.",
  },
  {
    cik_str: 1462223,
    ticker: "RCRT",
    company_name: "Recruiter.com Group, Inc.",
  },
  {
    cik_str: 1635077,
    ticker: "ACON",
    company_name: "Aclarion, Inc.",
  },
  {
    cik_str: 1674227,
    ticker: "WORX",
    company_name: "SCWorx Corp.",
  },
  {
    cik_str: 1063537,
    ticker: "RIBT",
    company_name: "RiceBran Technologies",
  },
  {
    cik_str: 1772028,
    ticker: "SCPS",
    company_name: "Scopus BioPharma Inc.",
  },
  {
    cik_str: 1419559,
    ticker: "CAMG",
    company_name: "CAM GROUP, INC.",
  },
  {
    cik_str: 847942,
    ticker: "STQN",
    company_name: "STRATEGIC ACQUISITIONS INC /NV/",
  },
  {
    cik_str: 1211805,
    ticker: "MYSZ",
    company_name: "My Size, Inc.",
  },
  {
    cik_str: 1401395,
    ticker: "NEPT",
    company_name: "Neptune Wellness Solutions Inc.",
  },
  {
    cik_str: 1409446,
    ticker: "NHMD",
    company_name: "NATE'S FOOD CO.",
  },
  {
    cik_str: 1802749,
    ticker: "ZEVY",
    company_name: "Lightning eMotors, Inc.",
  },
  {
    cik_str: 1750593,
    ticker: "DUO",
    company_name: "Fangdd Network Group Ltd.",
  },
  {
    cik_str: 1559998,
    ticker: "VINO",
    company_name: "Gaucho Group Holdings, Inc.",
  },
  {
    cik_str: 1725911,
    ticker: "NBND",
    company_name: "NetBrands Corp.",
  },
  {
    cik_str: 1786182,
    ticker: "FHSEY",
    company_name: "First High-School Education Group Co., Ltd.",
  },
  {
    cik_str: 1035354,
    ticker: "ELOX",
    company_name: "Eloxx Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1722969,
    ticker: "NXU",
    company_name: "Nxu, Inc.",
  },
  {
    cik_str: 1644963,
    ticker: "ATXI",
    company_name: "AVENUE THERAPEUTICS, INC.",
  },
  {
    cik_str: 1643918,
    ticker: "BDRX",
    company_name: "Biodexa Pharmaceuticals Plc",
  },
  {
    cik_str: 1014111,
    ticker: "GLAE",
    company_name: "GlassBridge Enterprises, Inc.",
  },
  {
    cik_str: 1649009,
    ticker: "SYTA",
    company_name: "Siyata Mobile Inc.",
  },
  {
    cik_str: 1644903,
    ticker: "YCBD",
    company_name: "cbdMD, Inc.",
  },
  {
    cik_str: 1326706,
    ticker: "NAOV",
    company_name: "NanoVibronix, Inc.",
  },
  {
    cik_str: 1862150,
    ticker: "CING",
    company_name: "Cingulate Inc.",
  },
  {
    cik_str: 867028,
    ticker: "FOMC",
    company_name: "FOMO WORLDWIDE, INC.",
  },
  {
    cik_str: 1824293,
    ticker: "GRI",
    company_name: "GRI BIO, Inc.",
  },
  {
    cik_str: 1812360,
    ticker: "FOXO",
    company_name: "FOXO TECHNOLOGIES INC.",
  },
  {
    cik_str: 1029744,
    ticker: "SOFO",
    company_name: "SONIC FOUNDRY INC",
  },
  {
    cik_str: 1800637,
    ticker: "AGFY",
    company_name: "Agrify Corp",
  },
  {
    cik_str: 1401835,
    ticker: "SRGZ",
    company_name: "Star Gold Corp.",
  },
  {
    cik_str: 719739,
    ticker: "SIVBQ",
    company_name: "SVB FINANCIAL GROUP",
  },
  {
    cik_str: 1199392,
    ticker: "EGMCF",
    company_name: "EMERGENT METALS CORP.",
  },
  {
    cik_str: 1543268,
    ticker: "BETS",
    company_name: "Bit Brother Ltd",
  },
  {
    cik_str: 1566826,
    ticker: "LGMK",
    company_name: "LogicMark, Inc.",
  },
  {
    cik_str: 1935435,
    ticker: "SSOF",
    company_name: "Sixty Six Oilfield Services, Inc.",
  },
  {
    cik_str: 1398713,
    ticker: "NVDEF",
    company_name: "NEVADA EXPLORATION INC",
  },
  {
    cik_str: 1652958,
    ticker: "EDGM",
    company_name: "Edgemode, Inc.",
  },
  {
    cik_str: 1749849,
    ticker: "OGAA",
    company_name: "Organic Agricultural Co Ltd",
  },
  {
    cik_str: 1389545,
    ticker: "NBY",
    company_name: "NovaBay Pharmaceuticals, Inc.",
  },
  {
    cik_str: 827099,
    ticker: "CPWR",
    company_name: "Ocean Thermal Energy Corp",
  },
  {
    cik_str: 1357671,
    ticker: "VOCL",
    company_name: "Creatd, Inc.",
  },
  {
    cik_str: 1532619,
    ticker: "PW",
    company_name: "Power REIT",
  },
  {
    cik_str: 1788841,
    ticker: "MCOM",
    company_name: "micromobility.com Inc.",
  },
  {
    cik_str: 1694617,
    ticker: "ROYL",
    company_name: "Royale Energy, Inc.",
  },
  {
    cik_str: 1502966,
    ticker: "DIGP",
    company_name: "Digipath, Inc.",
  },
  {
    cik_str: 1666657,
    ticker: "EBYH",
    company_name: "Strainsforpains, Inc.",
  },
  {
    cik_str: 1671132,
    ticker: "SONG",
    company_name: "Music Licensing Inc.",
  },
  {
    cik_str: 1028357,
    ticker: "BITTF",
    company_name: "BITTERROOT RESOURCES LTD",
  },
  {
    cik_str: 1524872,
    ticker: "TNRG",
    company_name: "Thunder Energies Corp",
  },
  {
    cik_str: 1662574,
    ticker: "GROM",
    company_name: "Grom Social Enterprises, Inc.",
  },
  {
    cik_str: 1834645,
    ticker: "PKBO",
    company_name: "Peak Bio, Inc.",
  },
  {
    cik_str: 1883083,
    ticker: "GPLL",
    company_name: "GPL Holdings, Inc.",
  },
  {
    cik_str: 1888014,
    ticker: "AKAN",
    company_name: "AKANDA CORP.",
  },
  {
    cik_str: 1922639,
    ticker: "OILCF",
    company_name: "Permex Petroleum Corp",
  },
  {
    cik_str: 1821424,
    ticker: "UK",
    company_name: "Ucommune International Ltd",
  },
  {
    cik_str: 1555214,
    ticker: "WLYW",
    company_name: "Wally World Media, Inc",
  },
  {
    cik_str: 792935,
    ticker: "GRST",
    company_name: "ETHEMA HEALTH Corp",
  },
  {
    cik_str: 720762,
    ticker: "NIMU",
    company_name: "NON INVASIVE MONITORING SYSTEMS INC /FL/",
  },
  {
    cik_str: 1269026,
    ticker: "SINT",
    company_name: "Sintx Technologies, Inc.",
  },
  {
    cik_str: 1399352,
    ticker: "WARM",
    company_name: "COOL TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1761696,
    ticker: "CRKN",
    company_name: "Crown Electrokinetics Corp.",
  },
  {
    cik_str: 1877788,
    ticker: "CSTF",
    company_name: "CuraScientific Corp.",
  },
  {
    cik_str: 1411906,
    ticker: "AMPE",
    company_name: "Ampio Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1515317,
    ticker: "MAGE",
    company_name: "MAGELLAN GOLD Corp",
  },
  {
    cik_str: 1525306,
    ticker: "FSTJ",
    company_name: "First America Resources Corp",
  },
  {
    cik_str: 1506492,
    ticker: "NUWE",
    company_name: "Nuwellis, Inc.",
  },
  {
    cik_str: 1358403,
    ticker: "BLCM",
    company_name: "BELLICUM PHARMACEUTICALS, INC",
  },
  {
    cik_str: 1534708,
    ticker: "EAST",
    company_name: "Eastside Distilling, Inc.",
  },
  {
    cik_str: 1419554,
    ticker: "BBLG",
    company_name: "Bone Biologics Corp",
  },
  {
    cik_str: 1762546,
    ticker: "GTRL",
    company_name: "Get Real USA, Inc.",
  },
  {
    cik_str: 1599407,
    ticker: "EFSH",
    company_name: "1847 Holdings LLC",
  },
  {
    cik_str: 1856416,
    ticker: "ECGI",
    company_name: "ECGI Holdings, Inc.",
  },
  {
    cik_str: 1946335,
    ticker: "INUMF",
    company_name: "Infinitum Copper Corp.",
  },
  {
    cik_str: 1729944,
    ticker: "BACK",
    company_name: "IMAC Holdings, Inc.",
  },
  {
    cik_str: 1490054,
    ticker: "VBHI",
    company_name: "VERDE BIO HOLDINGS, INC.",
  },
  {
    cik_str: 1285543,
    ticker: "ZRFY",
    company_name: "Zerify, Inc.",
  },
  {
    cik_str: 1064722,
    ticker: "GMPW",
    company_name: "GIVEMEPOWER CORP",
  },
  {
    cik_str: 1099814,
    ticker: "SVSN",
    company_name: "STEREO VISION ENTERTAINMENT INC",
  },
  {
    cik_str: 1084475,
    ticker: "NIHK",
    company_name: "Video River Networks, Inc.",
  },
  {
    cik_str: 873612,
    ticker: "ABNAF",
    company_name: "Aben Resources Ltd.",
  },
  {
    cik_str: 752294,
    ticker: "ELST",
    company_name: "ELECTRONIC SYSTEMS TECHNOLOGY INC",
  },
  {
    cik_str: 1639068,
    ticker: "HBUV",
    company_name: "Hubilu Venture Corp",
  },
  {
    cik_str: 1368148,
    ticker: "ATHX",
    company_name: "ATHERSYS, INC / NEW",
  },
  {
    cik_str: 1413909,
    ticker: "DSGT",
    company_name: "DSG Global Inc.",
  },
  {
    cik_str: 1743745,
    ticker: "GNLN",
    company_name: "Greenlane Holdings, Inc.",
  },
  {
    cik_str: 1812727,
    ticker: "RELI",
    company_name: "Reliance Global Group, Inc.",
  },
  {
    cik_str: 1648087,
    ticker: "AREB",
    company_name: "AMERICAN REBEL HOLDINGS INC",
  },
  {
    cik_str: 1375793,
    ticker: "MLRT",
    company_name: "Metalert, Inc.",
  },
  {
    cik_str: 1301991,
    ticker: "SMME",
    company_name: "SmartMetric, Inc.",
  },
  {
    cik_str: 1093636,
    ticker: "ATYG",
    company_name: "Saxon Capital Group, Inc./DE",
  },
  {
    cik_str: 1877461,
    ticker: "CBDW",
    company_name: "1606 CORP.",
  },
  {
    cik_str: 1595353,
    ticker: "GLMD",
    company_name: "Galmed Pharmaceuticals Ltd.",
  },
  {
    cik_str: 1586554,
    ticker: "CBDY",
    company_name: "Target Group Inc.",
  },
  {
    cik_str: 849997,
    ticker: "FECOF",
    company_name: "FEC Resources Inc.",
  },
  {
    cik_str: 1539778,
    ticker: "RAYT",
    company_name: "RAYONT INC.",
  },
  {
    cik_str: 1406588,
    ticker: "MNGG",
    company_name: "Mining Global, Inc.",
  },
  {
    cik_str: 860543,
    ticker: "JKSM",
    company_name: "Jacksam Corp",
  },
  {
    cik_str: 1841800,
    ticker: "NOGN",
    company_name: "Nogin, Inc.",
  },
  {
    cik_str: 1008653,
    ticker: "EMAX",
    company_name: "Ecomax, Inc",
  },
  {
    cik_str: 812306,
    ticker: "PCYN",
    company_name: "PROCYON CORP",
  },
  {
    cik_str: 918573,
    ticker: "GRVE",
    company_name: "GROOVE BOTANICALS INC.",
  },
  {
    cik_str: 1690080,
    ticker: "ATNF",
    company_name: "180 Life Sciences Corp.",
  },
  {
    cik_str: 1445467,
    ticker: "AVPMF",
    company_name: "AVRUPA MINERALS LTD.",
  },
  {
    cik_str: 1099132,
    ticker: "MHTX",
    company_name: "MANHATTAN SCIENTIFICS INC",
  },
  {
    cik_str: 1599117,
    ticker: "MNTR",
    company_name: "Mentor Capital, Inc.",
  },
  {
    cik_str: 1454742,
    ticker: "GMER",
    company_name: "GOOD GAMING, INC.",
  },
  {
    cik_str: 1510832,
    ticker: "BOPO",
    company_name: "Biopower Operations Corp",
  },
  {
    cik_str: 1616291,
    ticker: "JPPYY",
    company_name: "Jupai Holdings Ltd",
  },
  {
    cik_str: 1859007,
    ticker: "ZVSA",
    company_name: "ZyVersa Therapeutics, Inc.",
  },
  {
    cik_str: 1736865,
    ticker: "DVLP",
    company_name: "Golden Developing Solutions, Inc.",
  },
  {
    cik_str: 862668,
    ticker: "ESMC",
    company_name: "ESCALON MEDICAL CORP",
  },
  {
    cik_str: 773318,
    ticker: "VRTC",
    company_name: "VERITEC INC",
  },
  {
    cik_str: 1471781,
    ticker: "GTCH",
    company_name: "GBT Technologies Inc.",
  },
  {
    cik_str: 1509957,
    ticker: "CANB",
    company_name: "Can B Corp",
  },
  {
    cik_str: 90391,
    ticker: "SILS",
    company_name: "SILVER SCOTT MINES INC",
  },
  {
    cik_str: 1499494,
    ticker: "DXF",
    company_name: "Dunxin Financial Holdings Ltd",
  },
  {
    cik_str: 1624517,
    ticker: "YCRM",
    company_name: "Yuenglings Ice Cream Corp",
  },
  {
    cik_str: 1653247,
    ticker: "ASAP",
    company_name: "Waitr Holdings Inc.",
  },
  {
    cik_str: 1861657,
    ticker: "THAR",
    company_name: "Tharimmune, Inc.",
  },
  {
    cik_str: 1734262,
    ticker: "CTKYY",
    company_name: "CooTek(Cayman)Inc.",
  },
  {
    cik_str: 1603345,
    ticker: "AGTX",
    company_name: "Agentix Corp.",
  },
  {
    cik_str: 1067837,
    ticker: "AUDA",
    company_name: "AUDACY, INC.",
  },
  {
    cik_str: 1068689,
    ticker: "ATDS",
    company_name: "Data443 Risk Mitigation, Inc.",
  },
  {
    cik_str: 1088005,
    ticker: "NXMR",
    company_name: "NextMart Inc.",
  },
  {
    cik_str: 825171,
    ticker: "HHHEF",
    company_name: "37 CAPITAL INC",
  },
  {
    cik_str: 1502152,
    ticker: "GSTC",
    company_name: "GlobeStar Therapeutics Corp",
  },
  {
    cik_str: 1341726,
    ticker: "GSPE",
    company_name: "GULFSLOPE ENERGY, INC.",
  },
  {
    cik_str: 1609436,
    ticker: "MEXGF",
    company_name: "Mexican Gold Mining Corp.",
  },
  {
    cik_str: 1300867,
    ticker: "ONCI",
    company_name: "ON4 COMMUNICATIONS INC.",
  },
  {
    cik_str: 1594968,
    ticker: "VEST",
    company_name: "Vestiage, Inc.",
  },
  {
    cik_str: 1512886,
    ticker: "NTRR",
    company_name: "NEUTRA CORP.",
  },
  {
    cik_str: 1434737,
    ticker: "SRSG",
    company_name: "SPIRITS TIME INTERNATIONAL, INC.",
  },
  {
    cik_str: 1604477,
    ticker: "SQZB",
    company_name: "SQZ Biotechnologies Co",
  },
  {
    cik_str: 1536394,
    ticker: "USLG",
    company_name: "U.S. Lighting Group, Inc.",
  },
  {
    cik_str: 1784567,
    ticker: "HCDI",
    company_name: "Harbor Custom Development, Inc.",
  },
  {
    cik_str: 1697834,
    ticker: "STMH",
    company_name: "Stem Holdings, Inc.",
  },
  {
    cik_str: 1530185,
    ticker: "ATVK",
    company_name: "Ameritek Ventures, Inc.",
  },
  {
    cik_str: 1350156,
    ticker: "PAXH",
    company_name: "PREAXIA HEALTH CARE PAYMENT SYSTEMS INC.",
  },
  {
    cik_str: 1829794,
    ticker: "VLCN",
    company_name: "Volcon, Inc.",
  },
  {
    cik_str: 1117228,
    ticker: "MMMW",
    company_name: "MASS MEGAWATTS WIND POWER INC",
  },
  {
    cik_str: 1723980,
    ticker: "SXTC",
    company_name: "China SXT Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1518336,
    ticker: "DREM",
    company_name: "Dream Homes & Development Corp.",
  },
  {
    cik_str: 730669,
    ticker: "FCIC",
    company_name: "FCCC INC",
  },
  {
    cik_str: 1780097,
    ticker: "BXRX",
    company_name: "Baudax Bio, Inc.",
  },
  {
    cik_str: 1680132,
    ticker: "CSUI",
    company_name: "CANNABIS SUISSE CORP.",
  },
  {
    cik_str: 1530746,
    ticker: "KAYS",
    company_name: "Kaya Holdings, Inc.",
  },
  {
    cik_str: 1775625,
    ticker: "SDCCQ",
    company_name: "SmileDirectClub, Inc.",
  },
  {
    cik_str: 799698,
    ticker: "LADX",
    company_name: "LadRx Corp",
  },
  {
    cik_str: 1811109,
    ticker: "AUVI",
    company_name: "Applied UV, Inc.",
  },
  {
    cik_str: 1509786,
    ticker: "GKIN",
    company_name: "Guskin Gold Corp.",
  },
  {
    cik_str: 824416,
    ticker: "QPRC",
    company_name: "QUEST PATENT RESEARCH CORP",
  },
  {
    cik_str: 1619227,
    ticker: "CLOW",
    company_name: "Cloudweb, Inc.",
  },
  {
    cik_str: 1531477,
    ticker: "HADV",
    company_name: "HEALTH ADVANCE INC.",
  },
  {
    cik_str: 1437476,
    ticker: "GSFI",
    company_name: "Green Stream Holdings Inc.",
  },
  {
    cik_str: 1644488,
    ticker: "SHRG",
    company_name: "SHARING SERVICES GLOBAL Corp",
  },
  {
    cik_str: 1696411,
    ticker: "CCCP",
    company_name: "Crona Corp.",
  },
  {
    cik_str: 1355790,
    ticker: "ISCO",
    company_name: "International Stem Cell CORP",
  },
  {
    cik_str: 1125699,
    ticker: "DLYT",
    company_name: "DAIS Corp",
  },
  {
    cik_str: 1043894,
    ticker: "WOEN",
    company_name: "WOLF ENERGY SERVICES INC.",
  },
  {
    cik_str: 1082733,
    ticker: "VISM",
    company_name: "VISIUM TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1365916,
    ticker: "AMRSQ",
    company_name: "AMYRIS, INC.",
  },
  {
    cik_str: 1829966,
    ticker: "EBET",
    company_name: "EBET, Inc.",
  },
  {
    cik_str: 1399306,
    ticker: "BRBL",
    company_name: "BrewBilt Brewing Co",
  },
  {
    cik_str: 1574553,
    ticker: "TRMNF",
    company_name: "NEW WAVE HOLDINGS CORP.",
  },
  {
    cik_str: 1627480,
    ticker: "PVNNF",
    company_name: "PV Nano Cell, Ltd.",
  },
  {
    cik_str: 1750777,
    ticker: "HWKE",
    company_name: "Hawkeye Systems, Inc.",
  },
  {
    cik_str: 1878835,
    ticker: "VGFCQ",
    company_name: "Very Good Food Co Inc.",
  },
  {
    cik_str: 934796,
    ticker: "NWCN",
    company_name: "NETWORK CN INC",
  },
  {
    cik_str: 1102942,
    ticker: "INQR",
    company_name: "InnovaQor, Inc.",
  },
  {
    cik_str: 1874138,
    ticker: "SHGI",
    company_name: "Sparx Holdings Group, Inc.",
  },
  {
    cik_str: 1308027,
    ticker: "VYST",
    company_name: "Vystar Corp",
  },
  {
    cik_str: 1826397,
    ticker: "AGRI",
    company_name: "AGRIFORCE GROWING SYSTEMS LTD.",
  },
  {
    cik_str: 1584480,
    ticker: "LAAB",
    company_name: "Startech Labs, Inc.",
  },
  {
    cik_str: 1440799,
    ticker: "MMEX",
    company_name: "MMEX Resources Corp",
  },
  {
    cik_str: 1103833,
    ticker: "CRWE",
    company_name: "Crown Equity Holdings, Inc.",
  },
  {
    cik_str: 1694665,
    ticker: "EVLO",
    company_name: "Evelo Biosciences, Inc.",
  },
  {
    cik_str: 1456857,
    ticker: "MJNE",
    company_name: "MJ Holdings, Inc.",
  },
  {
    cik_str: 1409197,
    ticker: "BSPK",
    company_name: "Bespoke Extracts, Inc.",
  },
  {
    cik_str: 1648903,
    ticker: "FIFG",
    company_name: "First Foods Group, Inc.",
  },
  {
    cik_str: 1393540,
    ticker: "IGEN",
    company_name: "IGEN NETWORKS CORP",
  },
  {
    cik_str: 1975222,
    ticker: "SSHT",
    company_name: "SSHT S&T Group Ltd.",
  },
  {
    cik_str: 1426567,
    ticker: "LBWR",
    company_name: "Labwire Inc",
  },
  {
    cik_str: 1338929,
    ticker: "AHRO",
    company_name: "Authentic Holdings, Inc.",
  },
  {
    cik_str: 1346655,
    ticker: "CMGO",
    company_name: "CMG HOLDINGS GROUP, INC.",
  },
  {
    cik_str: 1688126,
    ticker: "CRCW",
    company_name: "Crypto Co",
  },
  {
    cik_str: 1465311,
    ticker: "ZICX",
    company_name: "Zicix Corp",
  },
  {
    cik_str: 1561686,
    ticker: "SSET",
    company_name: "STARSTREAM ENTERTAINMENT, INC.",
  },
  {
    cik_str: 812152,
    ticker: "RDGA",
    company_name: "RIDGEFIELD ACQUISITION CORP",
  },
  {
    cik_str: 1973160,
    ticker: "GMZP",
    company_name: "GEMZ Corp. NV",
  },
  {
    cik_str: 1656501,
    ticker: "BWMY",
    company_name: "BorrowMoney.com, Inc.",
  },
  {
    cik_str: 1407704,
    ticker: "BOTY",
    company_name: "LINGERIE FIGHTING CHAMPIONSHIPS, INC.",
  },
  {
    cik_str: 1587476,
    ticker: "PSWW",
    company_name: "Principal Solar, Inc.",
  },
  {
    cik_str: 1098462,
    ticker: "MTLK",
    company_name: "METALINK LTD",
  },
  {
    cik_str: 1416697,
    ticker: "BLPG",
    company_name: "Blue Line Protection Group, Inc.",
  },
  {
    cik_str: 1872292,
    ticker: "RAKR",
    company_name: "Rainmaker Worldwide Inc.",
  },
  {
    cik_str: 1661600,
    ticker: "SATT",
    company_name: "SATIVUS TECH CORP.",
  },
  {
    cik_str: 1624985,
    ticker: "XNDA",
    company_name: "Tribal Rides International Corp.",
  },
  {
    cik_str: 1618835,
    ticker: "EVFM",
    company_name: "Evofem Biosciences, Inc.",
  },
  {
    cik_str: 1674440,
    ticker: "CNXA",
    company_name: "Connexa Sports Technologies Inc.",
  },
  {
    cik_str: 1627041,
    ticker: "VCOR",
    company_name: "VISIBER57 CORP.",
  },
  {
    cik_str: 822746,
    ticker: "AMNI",
    company_name: "AMERICAN NOBLE GAS, INC.",
  },
  {
    cik_str: 1760764,
    ticker: "GMVDF",
    company_name: "G Medical Innovations Holdings Ltd.",
  },
  {
    cik_str: 1570937,
    ticker: "ATAO",
    company_name: "ALTAIR INTERNATIONAL CORP.",
  },
  {
    cik_str: 1498382,
    ticker: "KTRA",
    company_name: "Kintara Therapeutics, Inc.",
  },
  {
    cik_str: 1096768,
    ticker: "NUGL",
    company_name: "NUGL, INC.",
  },
  {
    cik_str: 1039466,
    ticker: "XSNX",
    company_name: "NovAccess Global Inc.",
  },
  {
    cik_str: 1409253,
    ticker: "NAFS",
    company_name: "North America Frac Sand, Inc.",
  },
  {
    cik_str: 1781405,
    ticker: "ODII",
    company_name: "Odyssey Semiconductor Technologies, Inc.",
  },
  {
    cik_str: 727634,
    ticker: "ISGN",
    company_name: "iSign Solutions Inc.",
  },
  {
    cik_str: 1676580,
    ticker: "VENG",
    company_name: "VISION ENERGY Corp",
  },
  {
    cik_str: 1851860,
    ticker: "SMFL",
    company_name: "SMART FOR LIFE, INC.",
  },
  {
    cik_str: 1261002,
    ticker: "GNOLF",
    company_name: "GENOIL INC",
  },
  {
    cik_str: 1495648,
    ticker: "PARG",
    company_name: "Power Americas Resource Group Ltd.",
  },
  {
    cik_str: 820608,
    ticker: "QTXB",
    company_name: "QUANTRX BIOMEDICAL CORP",
  },
  {
    cik_str: 1695473,
    ticker: "GCAN",
    company_name: "Greater Cannabis Company, Inc.",
  },
  {
    cik_str: 1683131,
    ticker: "FORZ",
    company_name: "Forza Innovations Inc",
  },
  {
    cik_str: 1104280,
    ticker: "SGBI",
    company_name: "SANGUI BIOTECH INTERNATIONAL INC",
  },
  {
    cik_str: 719274,
    ticker: "GIGA",
    company_name: "GIGA TRONICS INC",
  },
  {
    cik_str: 1324759,
    ticker: "HGYN",
    company_name: "HONG YUAN HOLDING GROUP",
  },
  {
    cik_str: 1681556,
    ticker: "GXXM",
    company_name: "GEX MANAGEMENT, INC.",
  },
  {
    cik_str: 1335288,
    ticker: "REOS",
    company_name: "ReoStar Energy CORP",
  },
  {
    cik_str: 29952,
    ticker: "CHJI",
    company_name: "CHINA CHANGJIANG MINING & NEW ENERGY COMPANY, LTD.",
  },
  {
    cik_str: 1407878,
    ticker: "DLOC",
    company_name: "Digital Locations, Inc.",
  },
  {
    cik_str: 1138586,
    ticker: "XCRT",
    company_name: "Xcelerate, Inc.",
  },
  {
    cik_str: 1284454,
    ticker: "YBCN",
    company_name: "Yong Bai Chao New Retail Corp",
  },
  {
    cik_str: 1733298,
    ticker: "QTTOY",
    company_name: "Qutoutiao Inc.",
  },
  {
    cik_str: 925660,
    ticker: "FLXT",
    company_name: "FLEXPOINT SENSOR SYSTEMS INC",
  },
  {
    cik_str: 1515251,
    ticker: "SIXWF",
    company_name: "SIXTH WAVE INNOVATIONS INC.",
  },
  {
    cik_str: 1394220,
    ticker: "RINO",
    company_name: "JOIN Entertainment Holdings, Inc.",
  },
  {
    cik_str: 1331421,
    ticker: "HLLK",
    company_name: "HALLMARK VENTURE GROUP, INC.",
  },
  {
    cik_str: 1128353,
    ticker: "ETCK",
    company_name: "ENERTECK CORP",
  },
  {
    cik_str: 1517681,
    ticker: "PPCB",
    company_name: "Propanc Biopharma, Inc.",
  },
  {
    cik_str: 1124197,
    ticker: "AMLH",
    company_name: "AMERICAN LEISURE HOLDINGS, INC.",
  },
  {
    cik_str: 1162283,
    ticker: "MGHL",
    company_name: "MORGAN GROUP HOLDING CO",
  },
  {
    cik_str: 1530425,
    ticker: "ARRT",
    company_name: "Artisan Consumer Goods, Inc.",
  },
  {
    cik_str: 1084267,
    ticker: "MOBQ",
    company_name: "Mobiquity Technologies, Inc.",
  },
  {
    cik_str: 915661,
    ticker: "GRLF",
    company_name: "GREEN LEAF INNOVATIONS INC",
  },
  {
    cik_str: 1172069,
    ticker: "PTOS",
    company_name: "P2 Solar, Inc.",
  },
  {
    cik_str: 1158702,
    ticker: "TAMG",
    company_name: "Transnational Group, Inc.",
  },
  {
    cik_str: 1745078,
    ticker: "VYND",
    company_name: "Vynleads, Inc.",
  },
  {
    cik_str: 1321828,
    ticker: "DCLT",
    company_name: "Data Call Technologies",
  },
  {
    cik_str: 352991,
    ticker: "AOXY",
    company_name: "ADVANCED OXYGEN TECHNOLOGIES INC",
  },
  {
    cik_str: 1633273,
    ticker: "TLIF",
    company_name: "TOCCA LIFE HOLDINGS, INC.",
  },
  {
    cik_str: 1611852,
    ticker: "RAHGF",
    company_name: "Roan Holdings Group Co., Ltd.",
  },
  {
    cik_str: 1076682,
    ticker: "RGTPQ",
    company_name: "POLARITYTE, INC.",
  },
  {
    cik_str: 795212,
    ticker: "KSPN",
    company_name: "Kaspien Holdings Inc.",
  },
  {
    cik_str: 1318268,
    ticker: "MDEX",
    company_name: "Madison Technologies Inc.",
  },
  {
    cik_str: 1464865,
    ticker: "ASII",
    company_name: "Accredited Solutions, Inc.",
  },
  {
    cik_str: 844856,
    ticker: "HCMC",
    company_name: "Healthier Choices Management Corp.",
  },
  {
    cik_str: 1575142,
    ticker: "BDPT",
    company_name: "BIOADAPTIVES, INC.",
  },
  {
    cik_str: 1286768,
    ticker: "UVSS",
    company_name: "UNIVERSAL SYSTEMS INC",
  },
  {
    cik_str: 1852707,
    ticker: "BFYW",
    company_name: "Better For You Wellness, Inc.",
  },
  {
    cik_str: 1635136,
    ticker: "DUUO",
    company_name: "DUO WORLD INC",
  },
  {
    cik_str: 1840416,
    ticker: "SEVCQ",
    company_name: "Sono Group N.V.",
  },
  {
    cik_str: 1680378,
    ticker: "SNES",
    company_name: "SenesTech, Inc.",
  },
  {
    cik_str: 1703625,
    ticker: "BLIS",
    company_name: "Treasure & Shipwreck Recovery, Inc.",
  },
  {
    cik_str: 1961,
    ticker: "WDDD",
    company_name: "WORLDS INC",
  },
  {
    cik_str: 820771,
    ticker: "GFMH",
    company_name: "Goliath Film & Media Holdings",
  },
  {
    cik_str: 1725134,
    ticker: "DMSL",
    company_name: "Digital Media Solutions, Inc.",
  },
  {
    cik_str: 1600132,
    ticker: "BLPH",
    company_name: "Bellerophon Therapeutics, Inc.",
  },
  {
    cik_str: 1092802,
    ticker: "AURI",
    company_name: "AURI INC",
  },
  {
    cik_str: 1641751,
    ticker: "BBRW",
    company_name: "BrewBilt Manufacturing Inc.",
  },
  {
    cik_str: 1343009,
    ticker: "CNBX",
    company_name: "CNBX Pharmaceuticals Inc.",
  },
  {
    cik_str: 1853718,
    ticker: "TEVNF",
    company_name: "Tevano Systems Holdings Inc.",
  },
  {
    cik_str: 1763329,
    ticker: "TPIA",
    company_name: "Mycotopia Therapies, Inc.",
  },
  {
    cik_str: 1358654,
    ticker: "RMESF",
    company_name: "RED METAL RESOURCES, LTD.",
  },
  {
    cik_str: 1517389,
    ticker: "JFIL",
    company_name: "Jubilant Flame International, Ltd",
  },
  {
    cik_str: 1607004,
    ticker: "MRNJ",
    company_name: "METATRON APPS, INC.",
  },
  {
    cik_str: 1230524,
    ticker: "CYAP",
    company_name: "Cyber Apps World",
  },
  {
    cik_str: 1290658,
    ticker: "ITOX",
    company_name: "IIOT-OXYS, Inc.",
  },
  {
    cik_str: 1693687,
    ticker: "MSYN",
    company_name: "MS YOUNG ADVENTURE ENTERPRISE, INC.",
  },
  {
    cik_str: 1661039,
    ticker: "TPTW",
    company_name: "TPT GLOBAL TECH, INC.",
  },
  {
    cik_str: 814926,
    ticker: "CAPC",
    company_name: "CAPSTONE COMPANIES, INC.",
  },
  {
    cik_str: 1360442,
    ticker: "CBDS",
    company_name: "Cannabis Sativa, Inc.",
  },
  {
    cik_str: 1801762,
    ticker: "MLYF",
    company_name: "Western Magnesium Corp.",
  },
  {
    cik_str: 1762322,
    ticker: "SFTGQ",
    company_name: "SHIFT TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1404804,
    ticker: "OMTK",
    company_name: "Omnitek Engineering Corp",
  },
  {
    cik_str: 1715819,
    ticker: "EMED",
    company_name: "Electromedical Technologies, Inc",
  },
  {
    cik_str: 1792581,
    ticker: "KRBP",
    company_name: "Kiromic Biopharma, Inc.",
  },
  {
    cik_str: 1580262,
    ticker: "RTON",
    company_name: "Right On Brands, Inc.",
  },
  {
    cik_str: 1342792,
    ticker: "WWSG",
    company_name: "WORLDWIDE STRATEGIES INC",
  },
  {
    cik_str: 1049011,
    ticker: "KDCE",
    company_name: "KID CASTLE EDUCATIONAL CORP",
  },
  {
    cik_str: 1556801,
    ticker: "MYCB",
    company_name: "My City Builders, Inc.",
  },
  {
    cik_str: 1410708,
    ticker: "NUVI",
    company_name: "Emo Capital Corp.",
  },
  {
    cik_str: 1946585,
    ticker: "BCNN",
    company_name: "Balincan USA, Inc",
  },
  {
    cik_str: 1989464,
    ticker: "NXGB",
    company_name: "NxGen Brands, Inc.",
  },
  {
    cik_str: 1085277,
    ticker: "SKVI",
    company_name: "SKINVISIBLE, INC.",
  },
  {
    cik_str: 1510524,
    ticker: "GYST",
    company_name: "GRAYSTONE COMPANY, INC.",
  },
  {
    cik_str: 927761,
    ticker: "MYMX",
    company_name: "MYMETICS CORP",
  },
  {
    cik_str: 1295961,
    ticker: "QREE",
    company_name: "QUANTUM ENERGY INC.",
  },
  {
    cik_str: 772263,
    ticker: "NICH",
    company_name: "NITCHES INC",
  },
  {
    cik_str: 1872356,
    ticker: "MKULQ",
    company_name: "Molekule Group, Inc.",
  },
  {
    cik_str: 1590875,
    ticker: "NSPDF",
    company_name: "NATURALLY SPLENDID ENTERPRISES LTD.",
  },
  {
    cik_str: 856984,
    ticker: "USAQ",
    company_name: "QHSLab, Inc.",
  },
  {
    cik_str: 1434601,
    ticker: "TMGI",
    company_name: "Marquie Group, Inc.",
  },
  {
    cik_str: 1538217,
    ticker: "SRAX",
    company_name: "SRAX, Inc.",
  },
  {
    cik_str: 1450307,
    ticker: "COUV",
    company_name: "CORPORATE UNIVERSE INC",
  },
  {
    cik_str: 811222,
    ticker: "CDIX",
    company_name: "Cardiff Lexington Corp",
  },
  {
    cik_str: 1169138,
    ticker: "GBUX",
    company_name: "GIVBUX, INC.",
  },
  {
    cik_str: 849636,
    ticker: "RSPI",
    company_name: "RespireRx Pharmaceuticals Inc.",
  },
  {
    cik_str: 1467913,
    ticker: "RNWR",
    company_name: "808 RENEWABLE ENERGY CORP",
  },
  {
    cik_str: 802257,
    ticker: "MITI",
    company_name: "Mitesco, Inc.",
  },
  {
    cik_str: 895287,
    ticker: "VMHG",
    company_name: "VICTORY MARINE HOLDINGS CORP",
  },
  {
    cik_str: 1500123,
    ticker: "INLB",
    company_name: "Item 9 Labs Corp.",
  },
  {
    cik_str: 1535079,
    ticker: "MCCX",
    company_name: "MCX Technologies Corp",
  },
  {
    cik_str: 1302913,
    ticker: "GEGI",
    company_name: "Genesis Electronics Group, Inc.",
  },
  {
    cik_str: 894560,
    ticker: "BOTH",
    company_name: "BIOETHICS LTD",
  },
  {
    cik_str: 1486452,
    ticker: "MASN",
    company_name: "Maison Luxe, Inc.",
  },
  {
    cik_str: 1916879,
    ticker: "VHLD",
    company_name: "VECTOR 21 HOLDINGS, INC.",
  },
  {
    cik_str: 1789330,
    ticker: "MJHI",
    company_name: "MJ Harvest, Inc.",
  },
  {
    cik_str: 1706907,
    ticker: "SNMN",
    company_name: "SNM Global Holdings",
  },
  {
    cik_str: 1697935,
    ticker: "MAPT",
    company_name: "MAPTELLIGENT, INC.",
  },
  {
    cik_str: 1138608,
    ticker: "BLMS",
    company_name: "BLOOMIOS, INC.",
  },
  {
    cik_str: 1138724,
    ticker: "GAHC",
    company_name: "Global Arena Holding, Inc.",
  },
  {
    cik_str: 1132509,
    ticker: "NNAX",
    company_name: "New Momentum Corp.",
  },
  {
    cik_str: 884650,
    ticker: "IMCI",
    company_name: "INFINITE GROUP INC",
  },
  {
    cik_str: 790273,
    ticker: "CONC",
    company_name: "CONECTISYS CORP",
  },
  {
    cik_str: 1433309,
    ticker: "PLTYF",
    company_name: "Plastec Technologies, Ltd.",
  },
  {
    cik_str: 1409624,
    ticker: "HMLA",
    company_name: "HIMALAYA TECHNOLOGIES, INC",
  },
  {
    cik_str: 1506814,
    ticker: "JPEX",
    company_name: "JPX Global Inc.",
  },
  {
    cik_str: 1113148,
    ticker: "INFIQ",
    company_name: "INFINITY PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 882800,
    ticker: "PACV",
    company_name: "Pacific Ventures Group, Inc.",
  },
  {
    cik_str: 1409999,
    ticker: "BBBT",
    company_name: "Black Bird Biotech, Inc.",
  },
  {
    cik_str: 737207,
    ticker: "ATRX",
    company_name: "Adhera Therapeutics, Inc.",
  },
  {
    cik_str: 1533357,
    ticker: "DTII",
    company_name: "DEFENSE TECHNOLOGIES INTERNATIONAL CORP.",
  },
  {
    cik_str: 1431074,
    ticker: "BRGO",
    company_name: "Bergio International, Inc.",
  },
  {
    cik_str: 1308569,
    ticker: "MLFB",
    company_name: "MAJOR LEAGUE FOOTBALL INC",
  },
  {
    cik_str: 1729750,
    ticker: "KBNT",
    company_name: "Kubient, Inc.",
  },
  {
    cik_str: 1421204,
    ticker: "RBSH",
    company_name: "Rebus Holdings, Inc.",
  },
  {
    cik_str: 918545,
    ticker: "BISA",
    company_name: "BALTIC INTERNATIONAL USA INC",
  },
  {
    cik_str: 1530163,
    ticker: "SAML",
    company_name: "Samsara Luggage, Inc.",
  },
  {
    cik_str: 1765826,
    ticker: "BZRD",
    company_name: "Blubuzzard, Inc.",
  },
  {
    cik_str: 1716324,
    ticker: "RGMP",
    company_name: "Regnum Corp.",
  },
  {
    cik_str: 731245,
    ticker: "PDNLA",
    company_name: "PRESIDENTIAL REALTY CORP/DE/",
  },
  {
    cik_str: 1355677,
    ticker: "MXSG",
    company_name: "Mexus Gold US",
  },
  {
    cik_str: 813716,
    ticker: "CIRX",
    company_name: "CIRTRAN CORP",
  },
  {
    cik_str: 1145898,
    ticker: "CWNOF",
    company_name: "CHINESEWORLDNET COM INC",
  },
  {
    cik_str: 1803096,
    ticker: "STRG",
    company_name: "STARGUIDE GROUP, INC.",
  },
  {
    cik_str: 1277575,
    ticker: "SCGX",
    company_name: "SAXON CAPITAL GROUP INC",
  },
  {
    cik_str: 1916741,
    ticker: "LFEV",
    company_name: "Life Electric Vehicles Holdings, Inc.",
  },
  {
    cik_str: 1760026,
    ticker: "MSSV",
    company_name: "MESO NUMISMATICS, INC.",
  },
  {
    cik_str: 1083468,
    ticker: "EARI",
    company_name: "ENTERTAINMENT ARTS RESEARCH, INC.",
  },
  {
    cik_str: 1497230,
    ticker: "SMCE",
    company_name: "SMC Entertainment, Inc.",
  },
  {
    cik_str: 1141788,
    ticker: "HDVY",
    company_name: "HEALTH DISCOVERY CORP",
  },
  {
    cik_str: 1438901,
    ticker: "FLES",
    company_name: "Auto Parts 4Less Group, Inc.",
  },
  {
    cik_str: 1717556,
    ticker: "BBIG",
    company_name: "Vinco Ventures, Inc.",
  },
  {
    cik_str: 1704795,
    ticker: "BANT",
    company_name: "Bantec, Inc.",
  },
  {
    cik_str: 1456453,
    ticker: "WTKN",
    company_name: "CLStv Corp.",
  },
  {
    cik_str: 1591165,
    ticker: "IVRN",
    company_name: "Innoveren Scientific, Inc.",
  },
  {
    cik_str: 894552,
    ticker: "EMDF",
    company_name: "E Med Future, Inc.",
  },
  {
    cik_str: 1737372,
    ticker: "SYSX",
    company_name: "Sysorex, Inc.",
  },
  {
    cik_str: 1293310,
    ticker: "HGEN",
    company_name: "HUMANIGEN, INC",
  },
  {
    cik_str: 1659352,
    ticker: "CDAKQ",
    company_name: "Codiak BioSciences, Inc.",
  },
  {
    cik_str: 1451433,
    ticker: "NNRX",
    company_name: "NUTRANOMICS, INC.",
  },
  {
    cik_str: 1681941,
    ticker: "IFMK",
    company_name: "iFresh Inc",
  },
  {
    cik_str: 1096759,
    ticker: "SNWR",
    company_name: "Sanwire Corp",
  },
  {
    cik_str: 1227282,
    ticker: "SPOWF",
    company_name: "Strata Power Corp",
  },
  {
    cik_str: 1373467,
    ticker: "VTXB",
    company_name: "Vortex Brands Co.",
  },
  {
    cik_str: 100716,
    ticker: "UNAM",
    company_name: "UNICO AMERICAN CORP",
  },
  {
    cik_str: 1708410,
    ticker: "WINR",
    company_name: "SIMPLICITY ESPORTS & GAMING Co",
  },
  {
    cik_str: 831489,
    ticker: "SCRH",
    company_name: "SCORES HOLDING CO INC",
  },
  {
    cik_str: 1555972,
    ticker: "STCC",
    company_name: "STERLING CONSOLIDATED Corp",
  },
  {
    cik_str: 1127993,
    ticker: "GAXY",
    company_name: "GALAXY NEXT GENERATION, INC.",
  },
  {
    cik_str: 786947,
    ticker: "ACUR",
    company_name: "ACURA PHARMACEUTICALS, INC",
  },
  {
    cik_str: 1596062,
    ticker: "QBIO",
    company_name: "Q BioMed Inc.",
  },
  {
    cik_str: 8328,
    ticker: "AMNL",
    company_name: "Applied Minerals, Inc.",
  },
  {
    cik_str: 1484703,
    ticker: "SFIO",
    company_name: "Starfleet Innotech, Inc.",
  },
  {
    cik_str: 1164256,
    ticker: "DBRM",
    company_name: "DAYBREAK OIL & GAS, INC.",
  },
  {
    cik_str: 1575659,
    ticker: "RTSL",
    company_name: "Rapid Therapeutic Science Laboratories, Inc.",
  },
  {
    cik_str: 1318641,
    ticker: "STAB",
    company_name: "Statera Biopharma, Inc.",
  },
  {
    cik_str: 1384365,
    ticker: "RDAR",
    company_name: "RAADR, INC.",
  },
  {
    cik_str: 1741231,
    ticker: "TTCFQ",
    company_name: "Tattooed Chef, Inc.",
  },
  {
    cik_str: 896747,
    ticker: "ABMC",
    company_name: "AMERICAN BIO MEDICA CORP",
  },
  {
    cik_str: 1161582,
    ticker: "PHOT",
    company_name: "GROWLIFE, INC.",
  },
  {
    cik_str: 1427644,
    ticker: "SLDC",
    company_name: "Telco Cuba, Inc.",
  },
  {
    cik_str: 66600,
    ticker: "MMMM",
    company_name: "Quad M Solutions, Inc.",
  },
  {
    cik_str: 1794905,
    ticker: "CYXTQ",
    company_name: "Cyxtera Technologies, Inc.",
  },
  {
    cik_str: 1776073,
    ticker: "CBDL",
    company_name: "CBD Life Sciences Inc.",
  },
  {
    cik_str: 1929281,
    ticker: "BLFE",
    company_name: "BioLIfe Sciences Inc",
  },
  {
    cik_str: 1528308,
    ticker: "IINX",
    company_name: "IONIX TECHNOLOGY, INC.",
  },
  {
    cik_str: 1758736,
    ticker: "MKDTY",
    company_name: "Molecular Data Inc.",
  },
  {
    cik_str: 1612851,
    ticker: "PLYN",
    company_name: "Palayan Resources, Inc.",
  },
  {
    cik_str: 1622408,
    ticker: "FRFR",
    company_name: "Fritzy Tech Inc.",
  },
  {
    cik_str: 1492091,
    ticker: "ASCK",
    company_name: "AUSCRETE Corp",
  },
  {
    cik_str: 725929,
    ticker: "BTDG",
    company_name: "B2Digital, Inc.",
  },
  {
    cik_str: 1613895,
    ticker: "BMXC",
    company_name: "Bemax, Inc.",
  },
  {
    cik_str: 1691077,
    ticker: "YAYO",
    company_name: "EVmo, Inc.",
  },
  {
    cik_str: 1539894,
    ticker: "AFHIF",
    company_name: "Atlas Financial Holdings, Inc.",
  },
  {
    cik_str: 1389067,
    ticker: "TTCM",
    company_name: "TAUTACHROME INC.",
  },
  {
    cik_str: 1499275,
    ticker: "SANP",
    company_name: "SANTO MINING CORP.",
  },
  {
    cik_str: 1725516,
    ticker: "REII",
    company_name: "RENEWABLE INNOVATIONS, INC.",
  },
  {
    cik_str: 870826,
    ticker: "IMBIQ",
    company_name: "Legacy IMBDS, Inc.",
  },
  {
    cik_str: 1370816,
    ticker: "FBCD",
    company_name: "FBC Holding, Inc.",
  },
  {
    cik_str: 1136294,
    ticker: "WLMSQ",
    company_name: "Williams Industrial Services Group Inc.",
  },
  {
    cik_str: 1790515,
    ticker: "EQOSQ",
    company_name: "EQONEX Ltd",
  },
  {
    cik_str: 1404356,
    ticker: "CBIA",
    company_name: "Blue Heaven Coffee, Inc.",
  },
  {
    cik_str: 1494413,
    ticker: "TWOH",
    company_name: "Two Hands Corp",
  },
  {
    cik_str: 1880419,
    ticker: "FERN",
    company_name: "Fernhill Corp",
  },
  {
    cik_str: 1421907,
    ticker: "TDNT",
    company_name: "Trident Brands Inc",
  },
  {
    cik_str: 1552358,
    ticker: "CGSI",
    company_name: "CGS INTERNATIONAL, INC.",
  },
  {
    cik_str: 892832,
    ticker: "SDON",
    company_name: "SANDSTON CORP",
  },
  {
    cik_str: 1169987,
    ticker: "HTGMQ",
    company_name: "HTG MOLECULAR DIAGNOSTICS, INC",
  },
  {
    cik_str: 1467154,
    ticker: "NOVNQ",
    company_name: "NVN Liquidation, Inc.",
  },
  {
    cik_str: 884380,
    ticker: "KEGS",
    company_name: "1812 Brewing Company, Inc.",
  },
  {
    cik_str: 1444403,
    ticker: "CGAC",
    company_name: "CODE GREEN APPAREL CORP",
  },
  {
    cik_str: 1655075,
    ticker: "AFIIQ",
    company_name: "Armstrong Flooring, Inc.",
  },
  {
    cik_str: 1301838,
    ticker: "PMPG",
    company_name: "Premier Product Group, Inc.",
  },
  {
    cik_str: 1499855,
    ticker: "GTOR",
    company_name: "GGTOOR, INC.",
  },
  {
    cik_str: 1444307,
    ticker: "ONCSQ",
    company_name: "ONCOSEC MEDICAL Inc",
  },
  {
    cik_str: 1510247,
    ticker: "LFAP",
    company_name: "LGBTQ Loyalty Holdings, Inc.",
  },
  {
    cik_str: 1388319,
    ticker: "USRM",
    company_name: "U.S. Stem Cell, Inc.",
  },
  {
    cik_str: 723733,
    ticker: "MUSS",
    company_name: "MULTI SOLUTIONS II, INC",
  },
  {
    cik_str: 1393548,
    ticker: "CLIS",
    company_name: "ClickStream Corp",
  },
  {
    cik_str: 1559172,
    ticker: "DPWW",
    company_name: "DIEGO PELLICER WORLDWIDE, INC",
  },
  {
    cik_str: 1504239,
    ticker: "PCNT",
    company_name: "Point of Care Nano-Technology, Inc.",
  },
  {
    cik_str: 836937,
    ticker: "UPDC",
    company_name: "UPD HOLDING CORP.",
  },
  {
    cik_str: 1597313,
    ticker: "VRAYQ",
    company_name: "ViewRay, Inc.",
  },
  {
    cik_str: 1909152,
    ticker: "KALRQ",
    company_name: "Kalera Public Ltd Co",
  },
  {
    cik_str: 1512544,
    ticker: "ITTOY",
    company_name: "ITOCHU Techno-Solutions Corporation/ADR",
  },
  {
    cik_str: 1286459,
    ticker: "AFOM",
    company_name: "ALL FOR ONE MEDIA CORP.",
  },
  {
    cik_str: 1835567,
    ticker: "PEARQ",
    company_name: "Pear Therapeutics, Inc.",
  },
  {
    cik_str: 1368275,
    ticker: "WESC",
    company_name: "W&E Source Corp.",
  },
  {
    cik_str: 1777946,
    ticker: "IRNTQ",
    company_name: "IronNet, Inc.",
  },
  {
    cik_str: 1350073,
    ticker: "ICNB",
    company_name: "Iconic Brands, Inc.",
  },
  {
    cik_str: 1829949,
    ticker: "OGBLY",
    company_name: "Onion Global Ltd",
  },
  {
    cik_str: 1379043,
    ticker: "XFCI",
    company_name: "XTREME FIGHTING CHAMPIONSHIPS, INC.",
  },
  {
    cik_str: 1551887,
    ticker: "DUSYF",
    company_name: "DUESENBERG TECHNOLOGIES INC.",
  },
  {
    cik_str: 1169245,
    ticker: "PHASQ",
    company_name: "PhaseBio Pharmaceuticals Inc",
  },
  {
    cik_str: 1300050,
    ticker: "GPLDF",
    company_name: "GREAT PANTHER MINING Ltd",
  },
  {
    cik_str: 1886958,
    ticker: "YUKA",
    company_name: "Yuka Group Inc",
  },
  {
    cik_str: 1866390,
    ticker: "BBLNF",
    company_name: "Babylon Holdings Ltd",
  },
  {
    cik_str: 1790665,
    ticker: "GNRS",
    company_name: "Greenrose Holding Co Inc.",
  },
  {
    cik_str: 1833908,
    ticker: "ALFIQ",
    company_name: "Alfi, Inc.",
  },
  {
    cik_str: 1551986,
    ticker: "NMTRQ",
    company_name: "9 METERS BIOPHARMA, INC.",
  },
  {
    cik_str: 878726,
    ticker: "TUEMQ",
    company_name: "TUESDAY MORNING CORP/DE",
  },
  {
    cik_str: 884247,
    ticker: "YVRLF",
    company_name: "Liquid Media Group Ltd.",
  },
  {
    cik_str: 1916331,
    ticker: "NCI",
    company_name: "Neo-Concept International Group Holdings Ltd",
  },
  {
    cik_str: 1919847,
    ticker: "SFWJ",
    company_name: "Software Effective Solutions, Corp.",
  },
  {
    cik_str: 1920092,
    ticker: "GELS",
    company_name: "Gelteq Ltd",
  },
  {
    cik_str: 1923171,
    ticker: "CKHL",
    company_name: "Chi Ko Holdings Ltd",
  },
  {
    cik_str: 1923183,
    ticker: "GDD",
    company_name: "Healthy Green Group Holding Ltd",
  },
  {
    cik_str: 1926792,
    ticker: "SFHG",
    company_name: "SAMFINE CREATION HOLDINGS GROUP Ltd",
  },
  {
    cik_str: 1896677,
    ticker: "GSOL",
    company_name: "Grayscale Solana Trust (SOL)",
  },
  {
    cik_str: 1880431,
    ticker: "VOCO",
    company_name: "Vocodia Holdings Corp",
  },
  {
    cik_str: 1882781,
    ticker: "CBLO",
    company_name: "C2 Blockchain,Inc.",
  },
  {
    cik_str: 1884434,
    ticker: "PGRM",
    company_name: "Panagram Capital, LLC",
  },
  {
    cik_str: 1874907,
    ticker: "DEFG",
    company_name: "Grayscale Decentralized Finance (DeFi) Fund LLC",
  },
  {
    cik_str: 1912884,
    ticker: "RPGL",
    company_name: "Republic Power Group Ltd",
  },
  {
    cik_str: 1919246,
    ticker: "CHRO",
    company_name: "Chromocell Therapeutics Corp",
  },
  {
    cik_str: 1957001,
    ticker: "FEBO",
    company_name: "Fenbo Holdings Ltd",
  },
  {
    cik_str: 1964603,
    ticker: "YZH",
    company_name: "YUEZHONGHUI INTERNATIONAL HOLDINGS GROUP LTD",
  },
  {
    cik_str: 1964630,
    ticker: "VSTE",
    company_name: "Vast Renewables Ltd",
  },
  {
    cik_str: 1964657,
    ticker: "LBIO",
    company_name: "Denali SPAC Holdco, Inc.",
  },
  {
    cik_str: 1964664,
    ticker: "ORIS",
    company_name: "ORIENTAL RISE HOLDINGS Ltd",
  },
  {
    cik_str: 1968043,
    ticker: "NCEW",
    company_name: "New Century Logistics (BVI) Ltd",
  },
  {
    cik_str: 1971115,
    ticker: "RYDE",
    company_name: "Ryde Group Ltd",
  },
  {
    cik_str: 1936574,
    ticker: "IMSV",
    company_name: "IMMRSIV Inc.",
  },
  {
    cik_str: 1922446,
    ticker: "DEC",
    company_name: "Diversified Energy Co PLC",
  },
  {
    cik_str: 1971260,
    ticker: "WEBVF",
    company_name: "Web3 Ventures Inc.",
  },
  {
    cik_str: 1971387,
    ticker: "LIMN",
    company_name: "Iris Parent Holding Corp.",
  },
  {
    cik_str: 1971532,
    ticker: "TELO",
    company_name: "Telomir Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1971542,
    ticker: "QMMM",
    company_name: "QMMM Holdings Ltd",
  },
  {
    cik_str: 1971543,
    ticker: "MURA",
    company_name: "Mural Oncology plc",
  },
  {
    cik_str: 1976443,
    ticker: "SYNX",
    company_name: "Silynxcom Ltd.",
  },
  {
    cik_str: 1843875,
    ticker: "TRCC",
    company_name: "TRACCOM INC.",
  },
  {
    cik_str: 1848898,
    ticker: "AAGR",
    company_name: "African Agriculture Holdings Inc.",
  },
  {
    cik_str: 1843974,
    ticker: "DXYZ",
    company_name: "Destiny Tech100 Inc.",
  },
  {
    cik_str: 1898722,
    ticker: "MDRN",
    company_name: "Modern Mining Technology Corp.",
  },
  {
    cik_str: 1888525,
    ticker: "UBXG",
    company_name: "U-BX Technology Ltd.",
  },
  {
    cik_str: 1951089,
    ticker: "CRML",
    company_name: "Critical Metals Corp.",
  },
  {
    cik_str: 1958777,
    ticker: "FBLG",
    company_name: "FibroBiologics Inc.",
  },
  {
    cik_str: 1958839,
    ticker: "HBER",
    company_name: "HUBEIER GROUP LTD.",
  },
  {
    cik_str: 1959023,
    ticker: "SGD",
    company_name: "Safe & Green Development Corp",
  },
  {
    cik_str: 1933762,
    ticker: "AMDI",
    company_name: "Amphitrite Digital Inc",
  },
  {
    cik_str: 1933951,
    ticker: "SAG",
    company_name: "SAG Holdings Ltd",
  },
  {
    cik_str: 1936817,
    ticker: "HXHX",
    company_name: "Haoxin Holdings Ltd",
  },
  {
    cik_str: 1924064,
    ticker: "RLND",
    company_name: "RoyaLand Co Ltd.",
  },
  {
    cik_str: 1879717,
    ticker: "KMCM",
    company_name: "Key Mining Corp.",
  },
  {
    cik_str: 1865833,
    ticker: "ELEP",
    company_name: "Elephant Oil Corp.",
  },
  {
    cik_str: 1849380,
    ticker: "ONMD",
    company_name: "OneMedNet Corp",
  },
  {
    cik_str: 1840563,
    ticker: "ELAB",
    company_name: "Elevai Labs Inc.",
  },
  {
    cik_str: 1843573,
    ticker: "UMAV",
    company_name: "UAV Corp",
  },
  {
    cik_str: 1838406,
    ticker: "BKV",
    company_name: "BKV Corp",
  },
  {
    cik_str: 1839530,
    ticker: "XBP",
    company_name: "XBP Europe Holdings, Inc.",
  },
  {
    cik_str: 1858258,
    ticker: "FGDL",
    company_name: "Franklin Templeton Holdings Trust",
  },
  {
    cik_str: 1853070,
    ticker: "SOAR",
    company_name: "Volato Group, Inc.",
  },
  {
    cik_str: 1853044,
    ticker: "AERT",
    company_name: "Aeries Technology, Inc.",
  },
  {
    cik_str: 1873723,
    ticker: "HARD",
    company_name: "Harden Technologies Inc.",
  },
  {
    cik_str: 1866816,
    ticker: "OPTX",
    company_name: "SYNTEC OPTICS HOLDINGS, INC.",
  },
  {
    cik_str: 1864776,
    ticker: "FLYF",
    company_name: "Flewber Global Inc.",
  },
  {
    cik_str: 1867506,
    ticker: "DDCIU",
    company_name: "Diffuse Digital 30, LP",
  },
  {
    cik_str: 1880249,
    ticker: "PSGI",
    company_name: "WeCapital Holdings, Inc.",
  },
  {
    cik_str: 1902930,
    ticker: "PDPG",
    company_name: "Performance Drink Group, Inc.",
  },
  {
    cik_str: 1905920,
    ticker: "GLXG",
    company_name: "Galaxy Payroll Group Ltd",
  },
  {
    cik_str: 1905951,
    ticker: "BSME",
    company_name: "MED EIBY Holding Co., Ltd",
  },
  {
    cik_str: 1888780,
    ticker: "LEWY",
    company_name: "LEEWAY SERVICES, INC.",
  },
  {
    cik_str: 1898474,
    ticker: "SGN",
    company_name: "Signing Day Sports, Inc.",
  },
  {
    cik_str: 1900035,
    ticker: "FP",
    company_name: "First Person Ltd.",
  },
  {
    cik_str: 1883934,
    ticker: "ETZ",
    company_name: "Earntz Healthcare Products, Inc.",
  },
  {
    cik_str: 1884046,
    ticker: "SPKL",
    company_name: "Spark I Acquisition Corp",
  },
  {
    cik_str: 1959304,
    ticker: "BZFL",
    company_name: "BOZHI FANGLUE INTERNATIONAL INVESTMENT GROUP CO LTD",
  },
  {
    cik_str: 1966750,
    ticker: "ZBAO",
    company_name: "Zhibao Technology Inc.",
  },
  {
    cik_str: 1970743,
    ticker: "RMIC",
    company_name: "Reticulate Micro, Inc.",
  },
  {
    cik_str: 1980034,
    ticker: "BELR",
    company_name: "Bell Rose Capital, Inc.",
  },
  {
    cik_str: 1980088,
    ticker: "MNR",
    company_name: "MACH NATURAL RESOURCES LP",
  },
  {
    cik_str: 1980262,
    ticker: "HWEP",
    company_name: "HW Electro Co., Ltd.",
  },
  {
    cik_str: 1985337,
    ticker: "YYGH",
    company_name: "YY Group Holding Ltd.",
  },
  {
    cik_str: 1850059,
    ticker: "FSHP",
    company_name: "Flag Ship Acquisition Corp",
  },
  {
    cik_str: 1962833,
    ticker: "ZRSP",
    company_name: "ZEROSPO",
  },
  {
    cik_str: 1970544,
    ticker: "PTHL",
    company_name: "Pheton Holdings Ltd",
  },
  {
    cik_str: 1963088,
    ticker: "ATCH",
    company_name: "Calculator New Pubco, Inc.",
  },
  {
    cik_str: 1966494,
    ticker: "CRGX",
    company_name: "CARGO Therapeutics, Inc.",
  },
  {
    cik_str: 1966522,
    ticker: "SUBL",
    company_name: "BioLingus (Cayman) Ltd",
  },
  {
    cik_str: 1966734,
    ticker: "AITR",
    company_name: "AI Transportation Acquisition Corp",
  },
  {
    cik_str: 1854149,
    ticker: "ANSC",
    company_name: "Agriculture & Natural Solutions Acquisition Corp",
  },
  {
    cik_str: 1854233,
    ticker: "EGLXF",
    company_name: "Enthusiast Gaming Holdings Inc. / Canada",
  },
  {
    cik_str: 1897971,
    ticker: "GLAC",
    company_name: "Global Lights Acquisition Corp",
  },
  {
    cik_str: 1879293,
    ticker: "MMCP",
    company_name: "Mag Mile Capital, Inc.",
  },
  {
    cik_str: 1885493,
    ticker: "ELGP",
    company_name: "Elate Group, Inc.",
  },
  {
    cik_str: 1893124,
    ticker: "ZAAG",
    company_name: "ZA Group, Inc.",
  },
  {
    cik_str: 1887799,
    ticker: "LIAI",
    company_name: "LEMENG HOLDINGS LTD",
  },
  {
    cik_str: 1887944,
    ticker: "SHIM",
    company_name: "Shimmick Corp",
  },
  {
    cik_str: 1908233,
    ticker: "MNX",
    company_name: "MN8 Energy, Inc.",
  },
  {
    cik_str: 1902700,
    ticker: "PGFF",
    company_name: "Pioneer Green Farms, Inc.",
  },
  {
    cik_str: 1955728,
    ticker: "ACSB",
    company_name: "ACESIS HOLDINGS CORP.",
  },
  {
    cik_str: 1945240,
    ticker: "ROMA",
    company_name: "Roma Green Finance Ltd",
  },
  {
    cik_str: 1948436,
    ticker: "JL",
    company_name: "J-Long Group Ltd",
  },
  {
    cik_str: 1948443,
    ticker: "RAY",
    company_name: "Raytech Holding Ltd",
  },
  {
    cik_str: 1916416,
    ticker: "INTJ",
    company_name: "Intelligent Group Ltd",
  },
  {
    cik_str: 1935092,
    ticker: "CETI",
    company_name: "Cyber Enviro-Tech, Inc.",
  },
  {
    cik_str: 1932072,
    ticker: "LOBO",
    company_name: "LOBO EV TECHNOLOGIES LTD",
  },
  {
    cik_str: 1932244,
    ticker: "LVER",
    company_name: "Lever Global Corp",
  },
  {
    cik_str: 1914513,
    ticker: "RISE",
    company_name: "Rise Oil & Gas, Inc.",
  },
  {
    cik_str: 1908705,
    ticker: "GLE",
    company_name: "Global Engine Group Holding Ltd",
  },
  {
    cik_str: 1924482,
    ticker: "IBG",
    company_name: "Innovation Beverage Group Ltd",
  },
  {
    cik_str: 1931717,
    ticker: "CCTG",
    company_name: "CCSC Technology International Holdings Ltd",
  },
  {
    cik_str: 1948099,
    ticker: "MTEN",
    company_name: "Mingteng International Corp Inc.",
  },
  {
    cik_str: 1948292,
    ticker: "DLOG",
    company_name: "DELTA CORP. HOLDINGS Ltd",
  },
  {
    cik_str: 1941029,
    ticker: "ADVB",
    company_name: "Advanced Biomed Inc.",
  },
  {
    cik_str: 1934836,
    ticker: "MVRK",
    company_name: "Maverick Lifestyle Inc.",
  },
  {
    cik_str: 1937692,
    ticker: "GFCX",
    company_name: "GoodFaith Technology Inc.",
  },
  {
    cik_str: 1852040,
    ticker: "GBAT",
    company_name: "Grayscale Basic Attention Token Trust (BAT)",
  },
  {
    cik_str: 1874137,
    ticker: "FDAN",
    company_name: "FD TECHNOLOGY INC.",
  },
  {
    cik_str: 1858939,
    ticker: "GOSC",
    company_name: "Giant Oak Acquisition Corp",
  },
  {
    cik_str: 1864448,
    ticker: "WEJOF",
    company_name: "Wejo Group Ltd",
  },
  {
    cik_str: 1879754,
    ticker: "EHGO",
    company_name: "EShallGo Inc.",
  },
  {
    cik_str: 1946412,
    ticker: "ECLP",
    company_name: "Eclipse Bancorp, Inc.",
  },
  {
    cik_str: 1946573,
    ticker: "KDLY",
    company_name: "Kindly MD, Inc.",
  },
  {
    cik_str: 1943444,
    ticker: "TRSG",
    company_name: "Tungray Technologies Inc",
  },
  {
    cik_str: 1943705,
    ticker: "GEAR",
    company_name: "Revelyst, Inc.",
  },
  {
    cik_str: 1876945,
    ticker: "GRAM",
    company_name: "Gold Flora Corp.",
  },
  {
    cik_str: 1897532,
    ticker: "MJID",
    company_name: "Majestic Ideal Holdings Ltd",
  },
  {
    cik_str: 1906425,
    ticker: "INAI",
    company_name: "Invea Therapeutics, Inc",
  },
  {
    cik_str: 1954594,
    ticker: "HAO",
    company_name: "Haoxi Health Technology Ltd",
  },
  {
    cik_str: 1954694,
    ticker: "LGCL",
    company_name: "Lucas GC Ltd",
  },
  {
    cik_str: 1929783,
    ticker: "WOK",
    company_name: "WORK Medical Technology Group LTD",
  },
  {
    cik_str: 1962554,
    ticker: "TKE",
    company_name: "OUI Global",
  },
  {
    cik_str: 1875016,
    ticker: "YMAT",
    company_name: "J-Star Holding Co., Ltd.",
  },
  {
    cik_str: 1901203,
    ticker: "IROH",
    company_name: "Iron Horse Acquisitions Corp.",
  },
  {
    cik_str: 1990354,
    ticker: "WAY",
    company_name: "Waystar Holding Corp.",
  },
  {
    cik_str: 1990472,
    ticker: "TYGJ",
    company_name: "AMERICAN TUOYUAN INTERNATIONAL SECURITIES GROUP INC",
  },
  {
    cik_str: 1990950,
    ticker: "SELX",
    company_name: "Semilux International Ltd.",
  },
  {
    cik_str: 1997711,
    ticker: "LLP",
    company_name: "Logistic Properties of the Americas",
  },
  {
    cik_str: 1997903,
    ticker: "LFKG",
    company_name: "Lianfeng Holding Acquisition",
  },
  {
    cik_str: 1960208,
    ticker: "CREV",
    company_name: "Carbon Revolution Public Ltd Co",
  },
  {
    cik_str: 1960348,
    ticker: "VITT",
    company_name: "Vittoria Ltd",
  },
  {
    cik_str: 1956955,
    ticker: "UMAC",
    company_name: "Unusual Machines, Inc.",
  },
  {
    cik_str: 1960074,
    ticker: "DVGR",
    company_name: "Digital Virgo Group S.A.",
  },
  {
    cik_str: 1960081,
    ticker: "XJET",
    company_name: "XJet Ltd.",
  },
  {
    cik_str: 1961346,
    ticker: "VAPA",
    company_name: "Valens Pay Global Ltd",
  },
  {
    cik_str: 1973368,
    ticker: "SVMH",
    company_name: "SRIVARU Holding Ltd",
  },
  {
    cik_str: 1973553,
    ticker: "EVMO",
    company_name: "EV Mobility, Inc.",
  },
  {
    cik_str: 1983281,
    ticker: "EIL",
    company_name: "E I L Holdings Ltd",
  },
  {
    cik_str: 1983324,
    ticker: "RMSG",
    company_name: "Real Messenger Corp",
  },
  {
    cik_str: 1983550,
    ticker: "TDTH",
    company_name: "Trident Digital Tech Holdings Ltd.",
  },
  {
    cik_str: 1983736,
    ticker: "GOAI",
    company_name: "Eva Live Inc",
  },
  {
    cik_str: 1988979,
    ticker: "ZXTY",
    company_name: "ZHONGXING HOLDING GROUP LTD",
  },
  {
    cik_str: 1989397,
    ticker: "KSD",
    company_name: "Capstone Dental Pubco, Inc.",
  },
  {
    cik_str: 1978867,
    ticker: "CDLR",
    company_name: "Cadeler A/S",
  },
  {
    cik_str: 1979005,
    ticker: "AFJK",
    company_name: "Aimei Health Technology Co., Ltd.",
  },
  {
    cik_str: 1965044,
    ticker: "FLXG",
    company_name: "Flexi Group Holdings Ltd",
  },
  {
    cik_str: 1968487,
    ticker: "WS",
    company_name: "Worthington Steel, Inc.",
  },
  {
    cik_str: 1964801,
    ticker: "RUSA",
    company_name: "IWAC HOLDINGS INC.",
  },
  {
    cik_str: 1964946,
    ticker: "YAAS",
    company_name: "Youxin Technology Ltd",
  },
  {
    cik_str: 1964954,
    ticker: "ECO",
    company_name: "Okeanis Eco Tankers Corp.",
  },
  {
    cik_str: 1979484,
    ticker: "ABVE",
    company_name: "Above Food Ingredients Inc.",
  },
  {
    cik_str: 1979610,
    ticker: "WXM",
    company_name: "WF International Ltd.",
  },
  {
    cik_str: 1984014,
    ticker: "BLMZ",
    company_name: "BloomZ Inc.",
  },
  {
    cik_str: 1962746,
    ticker: "LOT",
    company_name: "Lotus Technology Inc.",
  },
  {
    cik_str: 1998973,
    ticker: "HYHL",
    company_name: "Houyi Digital Internet Industry Technology Co., Ltd.",
  },
  {
    cik_str: 1999161,
    ticker: "FONG",
    company_name: "Aibafang Group CO., Ltd.",
  },
  {
    cik_str: 1969863,
    ticker: "SUGP",
    company_name: "SU Group Holdings Ltd",
  },
  {
    cik_str: 1969981,
    ticker: "MISN",
    company_name: "Mission Control Acquisition Corp.",
  },
  {
    cik_str: 1970371,
    ticker: "OMG",
    company_name: "Broad Capital Acquisition Pty Ltd",
  },
  {
    cik_str: 1974791,
    ticker: "OPSC",
    company_name: "OpSec Holdings",
  },
  {
    cik_str: 1974952,
    ticker: "AMGS",
    company_name: "Prospect Energy Holdings Corp.",
  },
  {
    cik_str: 1979330,
    ticker: "NBBK",
    company_name: "NB Bancorp, Inc.",
  },
  {
    cik_str: 1984076,
    ticker: "MTRS",
    company_name: "Metros Development Co., Ltd.",
  },
  {
    cik_str: 1991946,
    ticker: "CGBS",
    company_name: "Crown LNG Holdings Ltd",
  },
  {
    cik_str: 2001185,
    ticker: "WDQY",
    company_name: "WANGDIQIYUAN INTERNATIONAL HOLDINGS LTD",
  },
  {
    cik_str: 2002038,
    ticker: "LEGT",
    company_name: "Legato Merger Corp. III",
  },
  {
    cik_str: 1912498,
    ticker: "SCRP",
    company_name: "Scripps Safe, Inc.",
  },
  {
    cik_str: 1922858,
    ticker: "ECDA",
    company_name: "ECD Automotive Design, Inc.",
  },
  {
    cik_str: 1930207,
    ticker: "QTM",
    company_name: "CH AUTO Inc.",
  },
  {
    cik_str: 1954269,
    ticker: "GSIW",
    company_name: "Garden Stage Ltd",
  },
  {
    cik_str: 1954488,
    ticker: "JYB",
    company_name: "Jyong Biotech Ltd.",
  },
  {
    cik_str: 1936037,
    ticker: "ILLR",
    company_name: "Triller Corp.",
  },
  {
    cik_str: 2000218,
    ticker: "WMBT",
    company_name: "Sichuan Wanma Benteng Technology Co., LTD",
  },
  {
    cik_str: 1972074,
    ticker: "LNKS",
    company_name: "Linkers Industries Ltd",
  },
  {
    cik_str: 1975992,
    ticker: "PFAB",
    company_name: "PreTam Holdings Inc.",
  },
  {
    cik_str: 1980845,
    ticker: "ENGN",
    company_name: "enGene Holdings Inc.",
  },
  {
    cik_str: 1963685,
    ticker: "RR",
    company_name: "RICHTECH ROBOTICS INC.",
  },
  {
    cik_str: 1967078,
    ticker: "DAZS",
    company_name: "DA AI ZHI SHUI INTERNATIONAL HOLDING GROUP LTD",
  },
  {
    cik_str: 1967306,
    ticker: "MSBB",
    company_name: "Mercer Bancorp, Inc.",
  },
  {
    cik_str: 1967621,
    ticker: "ATGL",
    company_name: "Alpha Technology Group Ltd",
  },
  {
    cik_str: 2002157,
    ticker: "HHGJ",
    company_name: "Concord Health Ltd",
  },
  {
    cik_str: 1907108,
    ticker: "LXEO",
    company_name: "Lexeo Therapeutics, Inc.",
  },
  {
    cik_str: 1900720,
    ticker: "EPWK",
    company_name: "EPWK Holdings Ltd.",
  },
  {
    cik_str: 1903464,
    ticker: "AIMA",
    company_name: "Aimfinity Investment Corp. I",
  },
  {
    cik_str: 1994347,
    ticker: "MDLX",
    company_name: "MODULEX MODULAR BUILDINGS PLC",
  },
  {
    cik_str: 1981462,
    ticker: "LDTC",
    company_name: "LeddarTech Holdings Inc.",
  },
  {
    cik_str: 1981519,
    ticker: "ALGG",
    company_name: "ALTA GLOBAL GROUP LTD",
  },
  {
    cik_str: 1997309,
    ticker: "JFY",
    company_name: "JIUFUYUAN BIOTECHNOLOGY CO., LTD",
  },
  {
    cik_str: 1997403,
    ticker: "ZENA",
    company_name: "ZenaTech, Inc.",
  },
  {
    cik_str: 1978294,
    ticker: "JPL",
    company_name: "JEPLAN Holdings, Inc.",
  },
  {
    cik_str: 1978527,
    ticker: "GVH",
    company_name: "Globavend Holdings Ltd",
  },
  {
    cik_str: 1978528,
    ticker: "QETA",
    company_name: "Quetta Acquisition Corp",
  },
  {
    cik_str: 1982518,
    ticker: "SDHC",
    company_name: "Smith Douglas Homes Corp.",
  },
  {
    cik_str: 1982661,
    ticker: "COC",
    company_name: "COR3&Co. (Holdings) Ltd",
  },
  {
    cik_str: 1990145,
    ticker: "NUVO",
    company_name: "Holdco Nuvo Group D.G Ltd.",
  },
  {
    cik_str: 1990204,
    ticker: "HXSZ",
    company_name: "HONGXU SHANGZENG GLOBAL HOLDING LTD",
  },
  {
    cik_str: 1961847,
    ticker: "INHD",
    company_name: "INNO HOLDINGS INC.",
  },
  {
    cik_str: 1962011,
    ticker: "KAPA",
    company_name: "Kairos Pharma, LTD.",
  },
  {
    cik_str: 1962144,
    ticker: "KHIW",
    company_name: "Brilliance Group",
  },
  {
    cik_str: 1953984,
    ticker: "BCG",
    company_name: "Binah Capital Group, Inc.",
  },
  {
    cik_str: 1958489,
    ticker: "CRGT",
    company_name: "Cortigent, Inc.",
  },
  {
    cik_str: 1965671,
    ticker: "UNFL",
    company_name: "Unifoil Holdings, Inc.",
  },
  {
    cik_str: 1969401,
    ticker: "LGCB",
    company_name: "Linkage Global Inc",
  },
  {
    cik_str: 1969475,
    ticker: "BAYA",
    company_name: "Bayview Acquisition Corp",
  },
  {
    cik_str: 1938109,
    ticker: "PAPL",
    company_name: "Pineapple Financial Inc.",
  },
  {
    cik_str: 1948864,
    ticker: "HCWC",
    company_name: "HEALTHY CHOICE WELLNESS CORP.",
  },
  {
    cik_str: 1944712,
    ticker: "BIYA",
    company_name: "Baiya International Group Inc.",
  },
  {
    cik_str: 1952976,
    ticker: "NLOP",
    company_name: "Net Lease Office Properties",
  },
  {
    cik_str: 1956410,
    ticker: "JPO",
    company_name: "JP Outfitters, Inc.",
  },
  {
    cik_str: 1959726,
    ticker: "AZI",
    company_name: "Autozi Internet Technology (Global) Ltd.",
  },
  {
    cik_str: 1959994,
    ticker: "COOT",
    company_name: "Australian Oilseeds Holdings Ltd",
  },
  {
    cik_str: 1967478,
    ticker: "CAPT",
    company_name: "Captivision Inc.",
  },
  {
    cik_str: 1982012,
    ticker: "TLIH",
    company_name: "Ten-League International Holdings Ltd",
  },
  {
    cik_str: 1982444,
    ticker: "BDMD",
    company_name: "Baird Medical Investment Holdings Ltd",
  },
  {
    cik_str: 1987867,
    ticker: "CPGR",
    company_name: "CorpAcq Group Plc",
  },
  {
    cik_str: 1988363,
    ticker: "FHFH",
    company_name: "1427702 B.C. Ltd",
  },
  {
    cik_str: 1988678,
    ticker: "TKBD",
    company_name: "TechyBird Acquisition Corp.",
  },
  {
    cik_str: 1995321,
    ticker: "IBLU",
    company_name: "BLUE ROOM ACQUISITION CORP.",
  },
  {
    cik_str: 1967822,
    ticker: "CGTH",
    company_name: "Creative Global Technology Holdings Ltd",
  },
  {
    cik_str: 1972529,
    ticker: "BTOC",
    company_name: "Armlogi Holding Corp.",
  },
  {
    cik_str: 1978057,
    ticker: "TWG",
    company_name: "Top Wealth Group Holding Ltd",
  },
  {
    cik_str: 1978124,
    ticker: "UFND",
    company_name: "Unifund Financial Technologies, Inc.",
  },
  {
    cik_str: 1124105,
    ticker: "GYRE",
    company_name: "GYRE THERAPEUTICS, INC.",
  },
  {
    cik_str: 1044378,
    ticker: "BIOCQ",
    company_name: "BIOCEPT INC",
  },
  {
    cik_str: 1104023,
    ticker: "GEMZ",
    company_name: "Gemxx Corp.",
  },
  {
    cik_str: 1130889,
    ticker: "CNCL",
    company_name: "CANCER CAPITAL CORP",
  },
  {
    cik_str: 1086303,
    ticker: "HCIL",
    company_name: "Hongchang International Co., Ltd",
  },
  {
    cik_str: 1086313,
    ticker: "SFLM",
    company_name: "SFLMaven Corp.",
  },
  {
    cik_str: 1130713,
    ticker: "BYON",
    company_name: "BEYOND, INC.",
  },
  {
    cik_str: 1021096,
    ticker: "TRKAQ",
    company_name: "Troika Media Group, Inc.",
  },
  {
    cik_str: 1447100,
    ticker: "YAMHY",
    company_name: "Yamaha Motor Co., Ltd.",
  },
  {
    cik_str: 1356284,
    ticker: "GJS",
    company_name:
      "STRATS(SM) Trust for Goldman Sachs Group Securities, Series 2006-2",
  },
  {
    cik_str: 1373853,
    ticker: "THBD",
    company_name: "NEW AMERICA ENERGY CORP.",
  },
  {
    cik_str: 1284143,
    ticker: "JBK",
    company_name: "LEHMAN ABS CORP GOLDMAN SACHS CAP 1 SEC BACKED SER 2004-6",
  },
  {
    cik_str: 1381871,
    ticker: "BOMO",
    company_name: "bowmo, Inc.",
  },
  {
    cik_str: 1383149,
    ticker: "UDN",
    company_name: "INVESCO DB US DOLLAR INDEX BEARISH FUND",
  },
  {
    cik_str: 1383151,
    ticker: "UUP",
    company_name: "Invesco DB US Dollar Index Bullish Fund",
  },
  {
    cik_str: 1162896,
    ticker: "PROP",
    company_name: "Prairie Operating Co.",
  },
  {
    cik_str: 1294808,
    ticker: "PYT",
    company_name: "PPLUS Trust Series GSC-2",
  },
  {
    cik_str: 1404644,
    ticker: "NGNE",
    company_name: "Neoleukin Therapeutics, Inc.",
  },
  {
    cik_str: 1348952,
    ticker: "ELC",
    company_name: "ENTERGY LOUISIANA, LLC",
  },
  {
    cik_str: 1343491,
    ticker: "GJP",
    company_name:
      "STRATS(SM) TRUST FOR DOMINION RESOURCES, INC. SECURITIES, SERIES 2005-6",
  },
  {
    cik_str: 1450922,
    ticker: "SIVR",
    company_name: "abrdn Silver ETF Trust",
  },
  {
    cik_str: 1353226,
    ticker: "GJR",
    company_name:
      "STRATS(SM) Trust for Procter & Gamble Securities, Series 2006-1",
  },
  {
    cik_str: 1267332,
    ticker: "IPB",
    company_name: "MERRILL LYNCH DEPOSITOR INC INDEXPLUS TRUST SERIES 2003-1",
  },
  {
    cik_str: 1460235,
    ticker: "PPLT",
    company_name: "abrdn Platinum ETF Trust",
  },
  {
    cik_str: 1254699,
    ticker: "QVCD",
    company_name: "QVC INC",
  },
  {
    cik_str: 1131227,
    ticker: "HOS",
    company_name: "HORNBECK OFFSHORE SERVICES INC /LA",
  },
  {
    cik_str: 1427437,
    ticker: "ETI-P",
    company_name: "ENTERGY TEXAS, INC.",
  },
  {
    cik_str: 1254348,
    ticker: "EMTX",
    company_name: "EMULATE THERAPEUTICS, INC.",
  },
  {
    cik_str: 1405528,
    ticker: "USL",
    company_name: "United States 12 Month Oil Fund, LP",
  },
  {
    cik_str: 1403528,
    ticker: "OAK-PA",
    company_name: "Oaktree Capital Group, LLC",
  },
  {
    cik_str: 1396878,
    ticker: "UGA",
    company_name: "United States Gasoline Fund, LP",
  },
  {
    cik_str: 1392449,
    ticker: "GPLB",
    company_name: "Green Planet Bio Engineering Co. Ltd.",
  },
  {
    cik_str: 1283789,
    ticker: "RYNL",
    company_name: "Reynaldo's Mexican Food Company, Inc.",
  },
  {
    cik_str: 1340909,
    ticker: "GJO",
    company_name:
      "STRATS SM TRUST FOR WAL-MART STORES, INC. SECURITIES, SERIES 2005-4",
  },
  {
    cik_str: 50471,
    ticker: "TRAK",
    company_name: "PARK CITY GROUP INC",
  },
  {
    cik_str: 823277,
    ticker: "CHSCP",
    company_name: "CHS INC",
  },
  {
    cik_str: 793171,
    ticker: "VTRO",
    company_name: "Vitro Biopharma, Inc.",
  },
  {
    cik_str: 70502,
    ticker: "NRUC",
    company_name: "NATIONAL RURAL UTILITIES COOPERATIVE FINANCE CORP /DC/",
  },
  {
    cik_str: 350403,
    ticker: "ROTR",
    company_name: "PHI Group, Inc./DE",
  },
  {
    cik_str: 1078207,
    ticker: "BFX",
    company_name: "BOWFLEX INC.",
  },
  {
    cik_str: 1062750,
    ticker: "SAAYY",
    company_name: "SAIPEM S P A /FI",
  },
  {
    cik_str: 1124959,
    ticker: "XSIAX",
    company_name: "VOYA CREDIT INCOME FUND",
  },
  {
    cik_str: 912595,
    ticker: "MAAI",
    company_name: "MID AMERICA APARTMENT COMMUNITIES INC.",
  },
  {
    cik_str: 934612,
    ticker: "BNI",
    company_name: "BURLINGTON NORTHERN SANTA FE, LLC",
  },
  {
    cik_str: 68622,
    ticker: "CTBB",
    company_name: "QWEST CORP",
  },
  {
    cik_str: 1546652,
    ticker: "OUNZ",
    company_name: "VanEck Merk Gold Trust",
  },
  {
    cik_str: 1517767,
    ticker: "CCIF",
    company_name: "Carlyle Credit Income Fund",
  },
  {
    cik_str: 1556266,
    ticker: "BYU",
    company_name: "BAIYU Holdings, Inc.",
  },
  {
    cik_str: 1592651,
    ticker: "LNZNY",
    company_name: "Lenzing AG/ADR",
  },
  {
    cik_str: 1572616,
    ticker: "GUTS",
    company_name: "Fractyl Health, Inc.",
  },
  {
    cik_str: 1573901,
    ticker: "OLSI",
    company_name: "Origin Life Sciences, Inc.",
  },
  {
    cik_str: 1568905,
    ticker: "PRDEX",
    company_name: "PREDEX",
  },
  {
    cik_str: 1515001,
    ticker: "VCMIX",
    company_name: "Versus Capital Multi-Manager Real Estate Income Fund LLC",
  },
  {
    cik_str: 1605888,
    ticker: "SEQL",
    company_name: "SeqLL, Inc.",
  },
  {
    cik_str: 1467631,
    ticker: "XCAPX",
    company_name: "ACAP Strategic Fund",
  },
  {
    cik_str: 1453687,
    ticker: "RNAC",
    company_name: "Cartesian Therapeutics, Inc.",
  },
  {
    cik_str: 1504167,
    ticker: "TMBRQ",
    company_name: "Timber Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1617669,
    ticker: "UFABQ",
    company_name: "Unique Fabricating, Inc.",
  },
  {
    cik_str: 1628040,
    ticker: "RCIAX",
    company_name: "Alternative Credit Income Fund",
  },
  {
    cik_str: 1357660,
    ticker: "GJT",
    company_name:
      "STRATS(SM) Trust for Allstate Corp Securities, Series 2006-3",
  },
  {
    cik_str: 1375348,
    ticker: "GLNS",
    company_name: "Golden Star Resource Corp.",
  },
  {
    cik_str: 1437491,
    ticker: "ROI",
    company_name: "RiskOn International, Inc.",
  },
  {
    cik_str: 1438943,
    ticker: "RNGE",
    company_name: "RANGE IMPACT, INC.",
  },
  {
    cik_str: 1405513,
    ticker: "UNL",
    company_name: "United States 12 Month Natural Gas Fund, LP",
  },
  {
    cik_str: 1286405,
    ticker: "GJH",
    company_name: "STRATS SM TRUST FOR U S CELL CORP SEC SERIES 2004 6",
  },
  {
    cik_str: 1283337,
    ticker: "KTN",
    company_name:
      "STRUCTURED PRODUCTS CORP CRED ENHANCE CORTS TR FOR AON CAP A",
  },
  {
    cik_str: 1478069,
    ticker: "CFRXQ",
    company_name: "CONTRAFECT Corp",
  },
  {
    cik_str: 1489300,
    ticker: "ZLME",
    company_name: "Zhanling International Ltd",
  },
  {
    cik_str: 1353611,
    ticker: "FXB",
    company_name: "Invesco CurrencyShares British Pound Sterling Trust",
  },
  {
    cik_str: 1353612,
    ticker: "FXC",
    company_name: "Invesco CurrencyShares Canadian Dollar Trust",
  },
  {
    cik_str: 1353614,
    ticker: "FXA",
    company_name: "Invesco CurrencyShares Australian Dollar Trust",
  },
  {
    cik_str: 1353615,
    ticker: "FXF",
    company_name: "Invesco CurrencyShares Swiss Franc Trust",
  },
  {
    cik_str: 1283464,
    ticker: "KTH",
    company_name:
      "STRUCTURED PRODUCTS CORP CORTS TR FOR PECO ENERGY CAP TR III",
  },
  {
    cik_str: 1481585,
    ticker: "GXXY",
    company_name: "Galexxy Holdings, Inc.",
  },
  {
    cik_str: 1469038,
    ticker: "XMTI",
    company_name: "X Metaverse Inc.",
  },
  {
    cik_str: 1459862,
    ticker: "PALL",
    company_name: "abrdn Palladium ETF Trust",
  },
  {
    cik_str: 1616037,
    ticker: "XILSX",
    company_name: "Pioneer ILS Interval Fund",
  },
  {
    cik_str: 1472494,
    ticker: "BNO",
    company_name: "United States Brent Oil Fund, LP",
  },
  {
    cik_str: 1503658,
    ticker: "LVDW",
    company_name: "LiquidValue Development Inc.",
  },
  {
    cik_str: 1450923,
    ticker: "SGOL",
    company_name: "abrdn Gold ETF Trust",
  },
  {
    cik_str: 1535665,
    ticker: "RBNK",
    company_name: "RiverBank Holding Co",
  },
  {
    cik_str: 1519472,
    ticker: "SMXT",
    company_name: "SolarMax Technology, Inc.",
  },
  {
    cik_str: 1555746,
    ticker: "MNRLD",
    company_name: "MINERAL MOUNTAIN RESOURCES LTD.",
  },
  {
    cik_str: 1577351,
    ticker: "XYLB",
    company_name: "XY Labs, Inc.",
  },
  {
    cik_str: 1483386,
    ticker: "GLTR",
    company_name: "abrdn Precious Metals Basket ETF Trust",
  },
  {
    cik_str: 1534043,
    ticker: "FUPEY",
    company_name: "Fuchs Petrolub SE/ADR",
  },
  {
    cik_str: 1551047,
    ticker: "TIPLX",
    company_name: "Bluerock Total Income (plus) Real Estate Fund",
  },
  {
    cik_str: 1552164,
    ticker: "NREG",
    company_name: "Springs Rejuvenation, Inc.",
  },
  {
    cik_str: 1610718,
    ticker: "ODRS",
    company_name: "Outdoor Specialty Products, Inc.",
  },
  {
    cik_str: 1561032,
    ticker: "HTIA",
    company_name: "Healthcare Trust, Inc.",
  },
  {
    cik_str: 1577134,
    ticker: "TFSA",
    company_name: "Terra Income Fund 6, LLC",
  },
  {
    cik_str: 1633369,
    ticker: "CAST",
    company_name: "FreeCast, Inc.",
  },
  {
    cik_str: 1636282,
    ticker: "SYRE",
    company_name: "Spyre Therapeutics, Inc.",
  },
  {
    cik_str: 1644515,
    ticker: "DOCO",
    company_name: "Docola, Inc.",
  },
  {
    cik_str: 1661166,
    ticker: "LGCP",
    company_name: "Legion Capital Corp",
  },
  {
    cik_str: 1670196,
    ticker: "UGCC",
    company_name: "Universal Gaming Corp",
  },
  {
    cik_str: 1650575,
    ticker: "BRQSF",
    company_name: "Borqs Technologies, Inc.",
  },
  {
    cik_str: 1618181,
    ticker: "GLDM",
    company_name: "World Gold Trust",
  },
  {
    cik_str: 1620704,
    ticker: "MXRX",
    company_name: "MED-X, INC.",
  },
  {
    cik_str: 1514587,
    ticker: "TURO",
    company_name: "Turo Inc.",
  },
  {
    cik_str: 1581005,
    ticker: "SRRIX",
    company_name: "Stone Ridge Trust II",
  },
  {
    cik_str: 1737936,
    ticker: "CNROX",
    company_name: "City National Rochdale Strategic Credit Fund",
  },
  {
    cik_str: 1763415,
    ticker: "BITB",
    company_name: "Bitwise Bitcoin ETF",
  },
  {
    cik_str: 1759124,
    ticker: "IAUM",
    company_name: "iShares Gold Trust Micro",
  },
  {
    cik_str: 1690012,
    ticker: "ICR-PA",
    company_name: "InPoint Commercial Real Estate Income, Inc.",
  },
  {
    cik_str: 1691570,
    ticker: "USQIX",
    company_name: "USQ Core Real Estate Fund",
  },
  {
    cik_str: 1658645,
    ticker: "LENDX",
    company_name: "Stone Ridge Trust V",
  },
  {
    cik_str: 1679379,
    ticker: "NYX",
    company_name: "NYIAX, INC.",
  },
  {
    cik_str: 1673362,
    ticker: "CMCZ",
    company_name: "Curtis Mathes Corp",
  },
  {
    cik_str: 1677615,
    ticker: "XPTFX",
    company_name: "Federated Hermes Project & Trade Finance Tender Fund",
  },
  {
    cik_str: 1690842,
    ticker: "PLTM",
    company_name: "GraniteShares Platinum Trust",
  },
  {
    cik_str: 1608016,
    ticker: "PSOIX",
    company_name: "Palmer Square Opportunistic Income Fund",
  },
  {
    cik_str: 1791929,
    ticker: "DPUI",
    company_name: "DISCOUNT PRINT USA, INC.",
  },
  {
    cik_str: 1835068,
    ticker: "NPCT",
    company_name: "Nuveen Core Plus Impact Fund",
  },
  {
    cik_str: 1851682,
    ticker: "MFLTY",
    company_name: "Missfresh Ltd",
  },
  {
    cik_str: 1807689,
    ticker: "FCCI",
    company_name: "FAST CASUAL CONCEPTS, INC.",
  },
  {
    cik_str: 1813658,
    ticker: "TMPOQ",
    company_name: "Tempo Automation Holdings, Inc.",
  },
  {
    cik_str: 1828185,
    ticker: "BRNS",
    company_name: "Barinthus Biotherapeutics plc.",
  },
  {
    cik_str: 1826202,
    ticker: "KPN",
    company_name: "Kepuni Holdings Inc.",
  },
  {
    cik_str: 1831523,
    ticker: "SFCO",
    company_name: "Southern Financial Corp",
  },
  {
    cik_str: 1826660,
    ticker: "WETH",
    company_name: "Wetouch Technology Inc.",
  },
  {
    cik_str: 1859199,
    ticker: "AIRE",
    company_name: "reAlpha Tech Corp.",
  },
  {
    cik_str: 1862044,
    ticker: "ZKH",
    company_name: "ZKH Group Ltd",
  },
  {
    cik_str: 1868395,
    ticker: "YIBO",
    company_name: "Planet Image International Ltd",
  },
  {
    cik_str: 1864055,
    ticker: "ABTS",
    company_name: "Abits Group Inc",
  },
  {
    cik_str: 1854583,
    ticker: "CAUD",
    company_name: "Collective Audience, Inc.",
  },
  {
    cik_str: 1843656,
    ticker: "RMCO",
    company_name: "Royalty Management Holding Corp",
  },
  {
    cik_str: 1852023,
    ticker: "MANA",
    company_name: "Grayscale Decentraland Trust (MANA)",
  },
  {
    cik_str: 1852024,
    ticker: "GLIV",
    company_name: "Grayscale Livepeer Trust (LPT)",
  },
  {
    cik_str: 1852025,
    ticker: "GLNK",
    company_name: "Grayscale Chainlink Trust (LINK)",
  },
  {
    cik_str: 1790625,
    ticker: "AGILQ",
    company_name: "AgileThought, Inc.",
  },
  {
    cik_str: 1792799,
    ticker: "QHI",
    company_name: "QINHONG INTERNATIONAL GROUP",
  },
  {
    cik_str: 1786286,
    ticker: "DRPO",
    company_name: "Draganfly Inc.",
  },
  {
    cik_str: 1770141,
    ticker: "UPHL",
    company_name: "UpHealth, Inc.",
  },
  {
    cik_str: 1748945,
    ticker: "HZEN",
    company_name: "Grayscale Horizen Trust (ZEN)",
  },
  {
    cik_str: 1827506,
    ticker: "TRML",
    company_name: "Tourmaline Bio, Inc.",
  },
  {
    cik_str: 1805087,
    ticker: "GLSHQ",
    company_name: "GELESIS HOLDINGS, INC.",
  },
  {
    cik_str: 1794942,
    ticker: "SKFG",
    company_name: "Stark Focus Group, Inc.",
  },
  {
    cik_str: 1798458,
    ticker: "CRGH",
    company_name: "Carriage House Event Center, Inc.",
  },
  {
    cik_str: 1827620,
    ticker: "SLDX",
    company_name: "Stella Diagnostics, Inc.",
  },
  {
    cik_str: 1826474,
    ticker: "WDHI",
    company_name: "Worldwide Diversified Holdings, Inc",
  },
  {
    cik_str: 1829311,
    ticker: "BMNR",
    company_name: "BITMINE IMMERSION TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1767057,
    ticker: "OBTC",
    company_name: "Osprey Bitcoin Trust",
  },
  {
    cik_str: 1776197,
    ticker: "AKUMQ",
    company_name: "AKUMIN INC.",
  },
  {
    cik_str: 1850767,
    ticker: "ACUT",
    company_name: "Accustem Sciences Inc.",
  },
  {
    cik_str: 1852317,
    ticker: "FBTC",
    company_name: "Fidelity Wise Origin Bitcoin Fund",
  },
  {
    cik_str: 1841612,
    ticker: "TFG",
    company_name: "Fortegra Group, Inc",
  },
  {
    cik_str: 1849221,
    ticker: "PMNT",
    company_name: "Perfect Moment Ltd.",
  },
  {
    cik_str: 1821534,
    ticker: "EXOD",
    company_name: "Exodus Movement, Inc.",
  },
  {
    cik_str: 1771951,
    ticker: "WEIX",
    company_name: "Dynamic Shares Trust",
  },
  {
    cik_str: 1771995,
    ticker: "APHP",
    company_name: "American Picture House Corp",
  },
  {
    cik_str: 1765048,
    ticker: "GCGJ",
    company_name: "GUOCHUN INTERNATIONAL INC.",
  },
  {
    cik_str: 1705181,
    ticker: "ETCG",
    company_name: "Grayscale Ethereum Classic Trust (ETC)",
  },
  {
    cik_str: 1687898,
    ticker: "VCRRX",
    company_name: "Versus Capital Real Assets Fund LLC",
  },
  {
    cik_str: 1716885,
    ticker: "ASCIX",
    company_name: "Angel Oak Strategic Credit Fund",
  },
  {
    cik_str: 1726822,
    ticker: "ADOB",
    company_name: "Adorbs Inc",
  },
  {
    cik_str: 1729678,
    ticker: "XALCX",
    company_name: "BNY Mellon Alcentra Global Multi-Strategy Credit Fund, Inc.",
  },
  {
    cik_str: 1762562,
    ticker: "CPRDX",
    company_name: "Clarion Partners Real Estate Income Fund Inc.",
  },
  {
    cik_str: 1754927,
    ticker: "AAIDX",
    company_name: "Axonic Alternative Income Fund",
  },
  {
    cik_str: 1807616,
    ticker: "HIGR",
    company_name: "Hi-Great Group Holding Co",
  },
  {
    cik_str: 1802255,
    ticker: "GRDN",
    company_name: "Guardian Pharmacy Services, Inc.",
  },
  {
    cik_str: 1796160,
    ticker: "QMIX",
    company_name: "QMIS TBS Capital Group Corp.",
  },
  {
    cik_str: 1791942,
    ticker: "JBS",
    company_name: "JBS B.V.",
  },
  {
    cik_str: 1793895,
    ticker: "CDTG",
    company_name: "CDT Environmental Technology Investment Holdings Ltd",
  },
  {
    cik_str: 1813744,
    ticker: "WDSP",
    company_name: "World Scan Project, Inc.",
  },
  {
    cik_str: 1813756,
    ticker: "WEWKQ",
    company_name: "WeWork Inc.",
  },
  {
    cik_str: 1826011,
    ticker: "BNZI",
    company_name: "Banzai International, Inc.",
  },
  {
    cik_str: 1821075,
    ticker: "SFRT",
    company_name: "Appreciate Holdings, Inc.",
  },
  {
    cik_str: 1688897,
    ticker: "FCREX",
    company_name: "FS Credit Income Fund",
  },
  {
    cik_str: 1650789,
    ticker: "SQVI",
    company_name: "Sequoia Vaccines, Inc.",
  },
  {
    cik_str: 1708441,
    ticker: "MYND",
    company_name: "Mynd.ai, Inc.",
  },
  {
    cik_str: 1725295,
    ticker: "TSIFX",
    company_name: "Ecofin Tax-Exempt Private Credit Fund, Inc.",
  },
  {
    cik_str: 1743344,
    ticker: "PYRGF",
    company_name: "PyroGenesis Canada Inc.",
  },
  {
    cik_str: 1753712,
    ticker: "LARAX",
    company_name: "Lord Abbett Credit Opportunities Fund",
  },
  {
    cik_str: 1756908,
    ticker: "PDX",
    company_name: "PIMCO Dynamic Income Strategy Fund",
  },
  {
    cik_str: 1761325,
    ticker: "GXLM",
    company_name: "Grayscale Stellar Lumens Trust (XLM)",
  },
  {
    cik_str: 1771755,
    ticker: "SKUR",
    company_name: "Sekur Private Data Ltd.",
  },
  {
    cik_str: 1631256,
    ticker: "KBSG",
    company_name: "KBS Growth & Income REIT, Inc.",
  },
  {
    cik_str: 1659207,
    ticker: "FLLZ",
    company_name: "Fellazo Corp",
  },
  {
    cik_str: 1710523,
    ticker: "BGFDX",
    company_name: "Blackstone Floating Rate Enhanced Income Fund",
  },
  {
    cik_str: 1736510,
    ticker: "NICHX",
    company_name: "Variant Alternative Income Fund",
  },
  {
    cik_str: 1740797,
    ticker: "AVAI",
    company_name: "AVANT TECHNOLOGIES INC.",
  },
  {
    cik_str: 1751156,
    ticker: "EIOAX",
    company_name: "ELLINGTON INCOME OPPORTUNITIES FUND",
  },
  {
    cik_str: 1753945,
    ticker: "OPHV",
    company_name: "Opti-Harvest, Inc.",
  },
  {
    cik_str: 1754836,
    ticker: "EIC",
    company_name: "Eagle Point Income Co Inc.",
  },
  {
    cik_str: 1663712,
    ticker: "NRSAX",
    company_name: "NEXPOINT REAL ESTATE STRATEGIES FUND",
  },
  {
    cik_str: 1753391,
    ticker: "QSJC",
    company_name: "TANCHENG GROUP CO., LTD.",
  },
  {
    cik_str: 1756404,
    ticker: "PDSRX",
    company_name: "Principal Real Asset Fund",
  },
  {
    cik_str: 1723701,
    ticker: "PMFAX",
    company_name: "PIMCO Flexible Municipal Income Fund",
  },
  {
    cik_str: 1723788,
    ticker: "BITW",
    company_name: "Bitwise 10 Crypto Index Fund",
  },
  {
    cik_str: 1733861,
    ticker: "RTEZ",
    company_name: "REST EZ Inc.",
  },
  {
    cik_str: 1735964,
    ticker: "CCLFX",
    company_name: "Cliffwater Corporate Lending Fund",
  },
  {
    cik_str: 1739426,
    ticker: "RVLPQ",
    company_name: "RVL Pharmaceuticals plc",
  },
  {
    cik_str: 1702015,
    ticker: "AIDG",
    company_name: "AIS Holdings Group, Inc.",
  },
  {
    cik_str: 1703647,
    ticker: "KRRO",
    company_name: "Korro Bio, Inc.",
  },
  {
    cik_str: 1688554,
    ticker: "PFFLX",
    company_name: "PIMCO Flexible Credit Income Fund",
  },
  {
    cik_str: 1674356,
    ticker: "TPTA",
    company_name: "Terra Property Trust, Inc.",
  },
  {
    cik_str: 1682056,
    ticker: "SVRSF",
    company_name: "GOLDEN TAG RESOURCES LTD.",
  },
  {
    cik_str: 1708646,
    ticker: "AAAU",
    company_name: "Goldman Sachs Physical Gold ETF",
  },
  {
    cik_str: 1790320,
    ticker: "MSTH",
    company_name: "Mystic Holdings Inc./NV",
  },
  {
    cik_str: 1593275,
    ticker: "HG",
    company_name: "Hamilton Insurance Group, Ltd.",
  },
  {
    cik_str: 1728162,
    ticker: "IAMR",
    company_name: "Medical Industries of the Americas",
  },
  {
    cik_str: 1732078,
    ticker: "FROPX",
    company_name: "Flat Rock Opportunity Fund",
  },
  {
    cik_str: 1738758,
    ticker: "CHR",
    company_name: "Cheer Holding, Inc.",
  },
  {
    cik_str: 1720265,
    ticker: "ZCSH",
    company_name: "Grayscale Zcash Trust (ZEC)",
  },
  {
    cik_str: 1807983,
    ticker: "MDNAF",
    company_name: "Medicenna Therapeutics Corp.",
  },
  {
    cik_str: 1808110,
    ticker: "DDC",
    company_name: "DDC Enterprise Ltd",
  },
  {
    cik_str: 1690437,
    ticker: "BAR",
    company_name: "GraniteShares Gold Trust",
  },
  {
    cik_str: 1690996,
    ticker: "CNRLX",
    company_name: "City National Rochdale Select Strategies Fund",
  },
  {
    cik_str: 1678124,
    ticker: "CADCX",
    company_name: "CION Ares Diversified Credit Fund",
  },
  {
    cik_str: 1681717,
    ticker: "VFLEX",
    company_name: "FIRST TRUST ALTERNATIVE OPPORTUNITIES FUND",
  },
  {
    cik_str: 1672571,
    ticker: "AAQL",
    company_name: "Antiaging Quantum Living Inc.",
  },
  {
    cik_str: 1714919,
    ticker: "SAVU",
    company_name: "BioLife4D Corp",
  },
  {
    cik_str: 1725210,
    ticker: "ETHE",
    company_name: "Grayscale Ethereum Trust (ETH)",
  },
  {
    cik_str: 1722837,
    ticker: "CEDAX",
    company_name: "BlueBay Destra International Event-Driven Credit Fund",
  },
  {
    cik_str: 14272,
    ticker: "BMYMP",
    company_name: "BRISTOL MYERS SQUIBB CO",
  },
  {
    cik_str: 1652044,
    ticker: "GOOG",
    company_name: "Alphabet Inc.",
  },
  {
    cik_str: 36104,
    ticker: "USB-PA",
    company_name: "US BANCORP \\DE\\",
  },
  {
    cik_str: 1067983,
    ticker: "BRK-A",
    company_name: "BERKSHIRE HATHAWAY INC",
  },
  {
    cik_str: 353278,
    ticker: "NONOF",
    company_name: "NOVO NORDISK A S",
  },
  {
    cik_str: 824046,
    ticker: "LVMHF",
    company_name: "LVMH MOET HENNESSY LOUIS VUITTON",
  },
  {
    cik_str: 19617,
    ticker: "JPM-PC",
    company_name: "JPMORGAN CHASE & CO",
  },
  {
    cik_str: 19617,
    ticker: "JPM-PD",
    company_name: "JPMORGAN CHASE & CO",
  },
  {
    cik_str: 937966,
    ticker: "ASMLF",
    company_name: "ASML HOLDING NV",
  },
  {
    cik_str: 70858,
    ticker: "BML-PH",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "BML-PG",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "BAC-PE",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "BML-PL",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "BAC-PB",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "BML-PJ",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "BAC-PK",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 1306965,
    ticker: "RYDAF",
    company_name: "Shell plc",
  },
  {
    cik_str: 1114448,
    ticker: "NVSEF",
    company_name: "NOVARTIS AG",
  },
  {
    cik_str: 901832,
    ticker: "AZNCF",
    company_name: "ASTRAZENECA PLC",
  },
  {
    cik_str: 72971,
    ticker: "WFC-PY",
    company_name: "WELLS FARGO & COMPANY/MN",
  },
  {
    cik_str: 1094517,
    ticker: "TOYOF",
    company_name: "TOYOTA MOTOR CORP/",
  },
  {
    cik_str: 1577552,
    ticker: "BABAF",
    company_name: "Alibaba Group Holding Ltd",
  },
  {
    cik_str: 72971,
    ticker: "WFC-PR",
    company_name: "WELLS FARGO & COMPANY/MN",
  },
  {
    cik_str: 72971,
    ticker: "WFC-PL",
    company_name: "WELLS FARGO & COMPANY/MN",
  },
  {
    cik_str: 1000184,
    ticker: "SAPGF",
    company_name: "SAP SE",
  },
  {
    cik_str: 811809,
    ticker: "BHPLF",
    company_name: "BHP Group Ltd",
  },
  {
    cik_str: 1108329,
    ticker: "PCCYF",
    company_name: "PETROCHINA CO LTD",
  },
  {
    cik_str: 879764,
    ticker: "TTFNF",
    company_name: "TotalEnergies SE",
  },
  {
    cik_str: 1089113,
    ticker: "HBCYF",
    company_name: "HSBC HOLDINGS PLC",
  },
  {
    cik_str: 732717,
    ticker: "TBB",
    company_name: "AT&T INC.",
  },
  {
    cik_str: 831001,
    ticker: "C-PJ",
    company_name: "CITIGROUP INC",
  },
  {
    cik_str: 217410,
    ticker: "UNLYF",
    company_name: "UNILEVER PLC",
  },
  {
    cik_str: 1668717,
    ticker: "BUDFF",
    company_name: "Anheuser-Busch InBev SA/NV",
  },
  {
    cik_str: 72971,
    ticker: "WFC-PC",
    company_name: "WELLS FARGO & COMPANY/MN",
  },
  {
    cik_str: 1378580,
    ticker: "EADSF",
    company_name: "Airbus SE/ADR",
  },
  {
    cik_str: 1121404,
    ticker: "SNYNF",
    company_name: "Sanofi",
  },
  {
    cik_str: 313807,
    ticker: "BPAQF",
    company_name: "BP PLC",
  },
  {
    cik_str: 313838,
    ticker: "SNEJF",
    company_name: "Sony Group Corp",
  },
  {
    cik_str: 863064,
    ticker: "RTPPF",
    company_name: "RIO TINTO PLC",
  },
  {
    cik_str: 70866,
    ticker: "NCRRP",
    company_name: "NCR VOYIX Corp",
  },
  {
    cik_str: 769594,
    ticker: "NTTYY",
    company_name: "NIPPON TELEGRAPH & TELEPHONE CORP",
  },
  {
    cik_str: 1268896,
    ticker: "CILJF",
    company_name: "CHINA LIFE INSURANCE CO LTD",
  },
  {
    cik_str: 1274152,
    ticker: "CMXHF",
    company_name: "CSL LTD",
  },
  {
    cik_str: 948401,
    ticker: "CFRHF",
    company_name: "COMPAGNIE FINANCIERE RICHEMONT AG /FI",
  },
  {
    cik_str: 1140625,
    ticker: "STOHF",
    company_name: "EQUINOR ASA",
  },
  {
    cik_str: 1123658,
    ticker: "SNPMF",
    company_name: "CHINA PETROLEUM & CHEMICAL CORP",
  },
  {
    cik_str: 67088,
    ticker: "MBFJF",
    company_name: "MITSUBISHI UFJ FINANCIAL GROUP INC",
  },
  {
    cik_str: 835403,
    ticker: "DGEAF",
    company_name: "DIAGEO PLC",
  },
  {
    cik_str: 886982,
    ticker: "GS-PA",
    company_name: "GOLDMAN SACHS GROUP INC",
  },
  {
    cik_str: 36104,
    ticker: "USB-PH",
    company_name: "US BANCORP \\DE\\",
  },
  {
    cik_str: 1443276,
    ticker: "TOELF",
    company_name: "Tokyo Electron LTD",
  },
  {
    cik_str: 1091587,
    ticker: "ABLZF",
    company_name: "ABB LTD",
  },
  {
    cik_str: 895728,
    ticker: "EBBNF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 310732,
    ticker: "BNPQF",
    company_name: "BNP PARIBAS",
  },
  {
    cik_str: 30554,
    ticker: "CTA-PB",
    company_name: "EIDP, Inc.",
  },
  {
    cik_str: 36104,
    ticker: "USB-PP",
    company_name: "US BANCORP \\DE\\",
  },
  {
    cik_str: 886982,
    ticker: "GS-PD",
    company_name: "GOLDMAN SACHS GROUP INC",
  },
  {
    cik_str: 895421,
    ticker: "MS-PA",
    company_name: "MORGAN STANLEY",
  },
  {
    cik_str: 748954,
    ticker: "ATLCY",
    company_name: "ATLAS COPCO AB",
  },
  {
    cik_str: 1067318,
    ticker: "MBGAF",
    company_name: "DAIMLER AG",
  },
  {
    cik_str: 1096200,
    ticker: "ESOCF",
    company_name: "ENEL SOCIETA PER AZIONI",
  },
  {
    cik_str: 1131399,
    ticker: "GLAXF",
    company_name: "GSK plc",
  },
  {
    cik_str: 1549802,
    ticker: "JDCMF",
    company_name: "JD.com, Inc.",
  },
  {
    cik_str: 1129137,
    ticker: "AMXOF",
    company_name: "AMERICA MOVIL SAB DE CV/",
  },
  {
    cik_str: 1524684,
    ticker: "GLCNF",
    company_name: "Glencore plc/ADR",
  },
  {
    cik_str: 895421,
    ticker: "MS-PK",
    company_name: "MORGAN STANLEY",
  },
  {
    cik_str: 895421,
    ticker: "MS-PI",
    company_name: "MORGAN STANLEY",
  },
  {
    cik_str: 1119639,
    ticker: "PBR-A",
    company_name: "PETROBRAS - PETROLEO BRASILEIRO SA",
  },
  {
    cik_str: 891478,
    ticker: "BCDRF",
    company_name: "Banco Santander, S.A.",
  },
  {
    cik_str: 895421,
    ticker: "MS-PF",
    company_name: "MORGAN STANLEY",
  },
  {
    cik_str: 886982,
    ticker: "GS-PK",
    company_name: "GOLDMAN SACHS GROUP INC",
  },
  {
    cik_str: 1303523,
    ticker: "BTAFF",
    company_name: "British American Tobacco p.l.c.",
  },
  {
    cik_str: 895421,
    ticker: "MS-PE",
    company_name: "MORGAN STANLEY",
  },
  {
    cik_str: 929869,
    ticker: "RLXXF",
    company_name: "RELX PLC",
  },
  {
    cik_str: 1326160,
    ticker: "DUK-PA",
    company_name: "Duke Energy CORP",
  },
  {
    cik_str: 1021020,
    ticker: "OEZVF",
    company_name: "OSTERREICHISCHE ELEKTRIZITATSWIRTSCHAFTS /FI",
  },
  {
    cik_str: 1022837,
    ticker: "SMFNF",
    company_name: "SUMITOMO MITSUI FINANCIAL GROUP, INC.",
  },
  {
    cik_str: 1166691,
    ticker: "CCZ",
    company_name: "COMCAST CORP",
  },
  {
    cik_str: 748954,
    ticker: "ATLPF",
    company_name: "ATLAS COPCO AB",
  },
  {
    cik_str: 1395064,
    ticker: "TKPHF",
    company_name: "TAKEDA PHARMACEUTICAL CO LTD",
  },
  {
    cik_str: 1329099,
    ticker: "BAIDF",
    company_name: "Baidu, Inc.",
  },
  {
    cik_str: 719245,
    ticker: "WEBNF",
    company_name: "WESTPAC BANKING CORP",
  },
  {
    cik_str: 316709,
    ticker: "SCHW-PD",
    company_name: "SCHWAB CHARLES CORP",
  },
  {
    cik_str: 75594,
    ticker: "PPWLM",
    company_name: "PACIFICORP /OR/",
  },
  {
    cik_str: 1004315,
    ticker: "NGGTF",
    company_name: "NATIONAL GRID PLC",
  },
  {
    cik_str: 1446519,
    ticker: "DKILF",
    company_name: "Daikin Industries Ltd",
  },
  {
    cik_str: 718940,
    ticker: "BECEF",
    company_name: "BCE INC",
  },
  {
    cik_str: 1063761,
    ticker: "SPG-PJ",
    company_name: "SIMON PROPERTY GROUP INC /DE/",
  },
  {
    cik_str: 1232384,
    ticker: "TNCAF",
    company_name: "TC ENERGY CORP",
  },
  {
    cik_str: 1039765,
    ticker: "INGVF",
    company_name: "ING GROEP NV",
  },
  {
    cik_str: 1099219,
    ticker: "MET-PA",
    company_name: "METLIFE INC",
  },
  {
    cik_str: 932787,
    ticker: "STMEF",
    company_name: "STMicroelectronics N.V.",
  },
  {
    cik_str: 5272,
    ticker: "AIG-PA",
    company_name: "AMERICAN INTERNATIONAL GROUP, INC.",
  },
  {
    cik_str: 1099219,
    ticker: "MET-PE",
    company_name: "METLIFE INC",
  },
  {
    cik_str: 715153,
    ticker: "HNDAF",
    company_name: "HONDA MOTOR CO LTD",
  },
  {
    cik_str: 1002242,
    ticker: "EIPAF",
    company_name: "ENI SPA",
  },
  {
    cik_str: 1060736,
    ticker: "SGEN",
    company_name: "Seagen Inc.",
  },
  {
    cik_str: 1160106,
    ticker: "LLDTF",
    company_name: "Lloyds Banking Group plc",
  },
  {
    cik_str: 1045609,
    ticker: "PLDGP",
    company_name: "Prologis, Inc.",
  },
  {
    cik_str: 844551,
    ticker: "WOPEF",
    company_name: "WOODSIDE ENERGY GROUP LTD",
  },
  {
    cik_str: 842180,
    ticker: "BBVXF",
    company_name: "BANCO BILBAO VIZCAYA ARGENTARIA, S.A.",
  },
  {
    cik_str: 1900304,
    ticker: "HLNCF",
    company_name: "Haleon plc",
  },
  {
    cik_str: 1446598,
    ticker: "DNZOF",
    company_name: "Denso Corp",
  },
  {
    cik_str: 1232384,
    ticker: "TCANF",
    company_name: "TC ENERGY CORP",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PH",
    company_name: "Public Storage",
  },
  {
    cik_str: 895564,
    ticker: "BAESF",
    company_name: "BAE SYSTEMS PLC /FI/",
  },
  {
    cik_str: 75594,
    ticker: "PPWLO",
    company_name: "PACIFICORP /OR/",
  },
  {
    cik_str: 1116578,
    ticker: "PUKPF",
    company_name: "PRUDENTIAL PLC",
  },
  {
    cik_str: 1001085,
    ticker: "BAMGF",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 1450468,
    ticker: "MRAAF",
    company_name: "Murata Manufacturing Co., Ltd./ADR",
  },
  {
    cik_str: 1335730,
    ticker: "MZHOF",
    company_name: "MIZUHO FINANCIAL GROUP INC",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PK",
    company_name: "Public Storage",
  },
  {
    cik_str: 886986,
    ticker: "TCKRF",
    company_name: "TECK RESOURCES LTD",
  },
  {
    cik_str: 899051,
    ticker: "ALL-PH",
    company_name: "ALLSTATE CORP",
  },
  {
    cik_str: 1279967,
    ticker: "CRARF",
    company_name: "CREDIT AGRICOLE S A",
  },
  {
    cik_str: 844150,
    ticker: "RBSPF",
    company_name: "NatWest Group plc",
  },
  {
    cik_str: 899051,
    ticker: "ALL-PB",
    company_name: "ALLSTATE CORP",
  },
  {
    cik_str: 1038143,
    ticker: "FNCTF",
    company_name: "ORANGE",
  },
  {
    cik_str: 943819,
    ticker: "RSMDF",
    company_name: "RESMED INC",
  },
  {
    cik_str: 14693,
    ticker: "BF-A",
    company_name: "BROWN FORMAN CORP",
  },
  {
    cik_str: 920760,
    ticker: "LEN-B",
    company_name: "LENNAR CORP /NEW/",
  },
  {
    cik_str: 312069,
    ticker: "BCLYF",
    company_name: "BARCLAYS PLC",
  },
  {
    cik_str: 1012037,
    ticker: "CODGF",
    company_name: "COMPAGNIE DE SAINT GOBAIN",
  },
  {
    cik_str: 1160330,
    ticker: "BBDO",
    company_name: "BANK BRADESCO",
  },
  {
    cik_str: 1434265,
    ticker: "GNMSF",
    company_name: "GENMAB A/S",
  },
  {
    cik_str: 1297996,
    ticker: "DLR-PK",
    company_name: "DIGITAL REALTY TRUST, INC.",
  },
  {
    cik_str: 733099,
    ticker: "RCIAF",
    company_name: "ROGERS COMMUNICATIONS INC",
  },
  {
    cik_str: 1297996,
    ticker: "DLR-PJ",
    company_name: "DIGITAL REALTY TRUST, INC.",
  },
  {
    cik_str: 92122,
    ticker: "SOJC",
    company_name: "SOUTHERN CO",
  },
  {
    cik_str: 1334687,
    ticker: "CJPRF",
    company_name: "CENTRAL JAPAN RAILWAY CO",
  },
  {
    cik_str: 1451279,
    ticker: "SAUHF",
    company_name: "Straumann Holding AG / ADR",
  },
  {
    cik_str: 1243429,
    ticker: "AMSYF",
    company_name: "ArcelorMittal",
  },
  {
    cik_str: 63754,
    ticker: "MKC-V",
    company_name: "MCCORMICK & CO INC",
  },
  {
    cik_str: 1618755,
    ticker: "RSTRF",
    company_name: "Restaurant Brands International Limited Partnership",
  },
  {
    cik_str: 16988,
    ticker: "CAJFF",
    company_name: "CANON INC",
  },
  {
    cik_str: 46619,
    ticker: "HEI-A",
    company_name: "HEICO CORP",
  },
  {
    cik_str: 1070304,
    ticker: "ORXCF",
    company_name: "ORIX CORP",
  },
  {
    cik_str: 814052,
    ticker: "TEFOF",
    company_name: "TELEFONICA S A",
  },
  {
    cik_str: 1446437,
    ticker: "YAHOF",
    company_name: "Yahoo! Japan Corp",
  },
  {
    cik_str: 839923,
    ticker: "VODPF",
    company_name: "VODAFONE GROUP PUBLIC LTD CO",
  },
  {
    cik_str: 1269238,
    ticker: "TRPCF",
    company_name: "Trip.com Group Ltd",
  },
  {
    cik_str: 63271,
    ticker: "PCRFF",
    company_name: "PANASONIC Corp",
  },
  {
    cik_str: 798941,
    ticker: "FCNCB",
    company_name: "FIRST CITIZENS BANCSHARES INC /DE/",
  },
  {
    cik_str: 1439124,
    ticker: "EBR-B",
    company_name: "BRAZILIAN ELECTRIC POWER CO",
  },
  {
    cik_str: 93751,
    ticker: "STT-PG",
    company_name: "STATE STREET CORP",
  },
  {
    cik_str: 1447629,
    ticker: "LNNGF",
    company_name: "Li Ning Co. Ltd.",
  },
  {
    cik_str: 717826,
    ticker: "ERIXF",
    company_name: "ERICSSON LM TELEPHONE CO",
  },
  {
    cik_str: 1050952,
    ticker: "PGPEF",
    company_name: "PUBLICIS GROUPE SA",
  },
  {
    cik_str: 874766,
    ticker: "HIG-PG",
    company_name: "HARTFORD FINANCIAL SERVICES GROUP, INC.",
  },
  {
    cik_str: 1736541,
    ticker: "NIOIF",
    company_name: "NIO Inc.",
  },
  {
    cik_str: 1560385,
    ticker: "FWONB",
    company_name: "Liberty Media Corp",
  },
  {
    cik_str: 93751,
    ticker: "STT-PD",
    company_name: "STATE STREET CORP",
  },
  {
    cik_str: 924613,
    ticker: "NOKBF",
    company_name: "NOKIA CORP",
  },
  {
    cik_str: 35527,
    ticker: "FITBI",
    company_name: "FIFTH THIRD BANCORP",
  },
  {
    cik_str: 930157,
    ticker: "RKLIF",
    company_name: "RENTOKIL INITIAL PLC /FI",
  },
  {
    cik_str: 1712356,
    ticker: "HRNNF",
    company_name: "Hydro One Ltd",
  },
  {
    cik_str: 882602,
    ticker: "OMVJF",
    company_name: "OMV AKTIENGESELLSCHAFT /FI",
  },
  {
    cik_str: 811250,
    ticker: "HLDVF",
    company_name: "HENDERSON LAND DEVELOPMENT COMPANY LTD /FI",
  },
  {
    cik_str: 1069347,
    ticker: "SGSOF",
    company_name: "SGS SOCIETE GENERALE DE SURVEILLANCE HOLDING SA /FI",
  },
  {
    cik_str: 1461748,
    ticker: "PPERF",
    company_name: "PT Bank Mandiri (Persero) Tbk / ADR",
  },
  {
    cik_str: 1190723,
    ticker: "TNRSF",
    company_name: "TENARIS SA",
  },
  {
    cik_str: 910631,
    ticker: "COCSF",
    company_name: "COCA COLA FEMSA SAB DE CV",
  },
  {
    cik_str: 313216,
    ticker: "RYLPF",
    company_name: "KONINKLIJKE PHILIPS NV",
  },
  {
    cik_str: 1748790,
    ticker: "AMCCF",
    company_name: "Amcor plc",
  },
  {
    cik_str: 915191,
    ticker: "FAXXF",
    company_name: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    cik_str: 12208,
    ticker: "BIO-B",
    company_name: "BIO-RAD LABORATORIES, INC.",
  },
  {
    cik_str: 912595,
    ticker: "MAA",
    company_name: "MID AMERICA APARTMENT COMMUNITIES INC.",
  },
  {
    cik_str: 1030475,
    ticker: "CHEAF",
    company_name: "CHINA EASTERN AIRLINES CORP LTD",
  },
  {
    cik_str: 1041668,
    ticker: "CHKIF",
    company_name: "CHINA SOUTHERN AIRLINES CO LTD",
  },
  {
    cik_str: 1158838,
    ticker: "ADTTF",
    company_name: "ADVANTEST CORP",
  },
  {
    cik_str: 1400691,
    ticker: "HLBZF",
    company_name: "HeidelbergCement AG",
  },
  {
    cik_str: 91576,
    ticker: "KEY-PK",
    company_name: "KEYCORP /NEW/",
  },
  {
    cik_str: 915191,
    ticker: "FXFLF",
    company_name: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    cik_str: 1004315,
    ticker: "NMK-PC",
    company_name: "NATIONAL GRID PLC",
  },
  {
    cik_str: 1001474,
    ticker: "KKPNF",
    company_name: "KONINKLIJKE KPN N V",
  },
  {
    cik_str: 1038683,
    ticker: "RYAOF",
    company_name: "RYANAIR HOLDINGS PLC",
  },
  {
    cik_str: 1560385,
    ticker: "FWONK",
    company_name: "Liberty Media Corp",
  },
  {
    cik_str: 1560385,
    ticker: "FWONA",
    company_name: "Liberty Media Corp",
  },
  {
    cik_str: 759944,
    ticker: "CFG-PD",
    company_name: "CITIZENS FINANCIAL GROUP INC/RI",
  },
  {
    cik_str: 813828,
    ticker: "PARAA",
    company_name: "Paramount Global",
  },
  {
    cik_str: 1172724,
    ticker: "GFIOF",
    company_name: "GOLD FIELDS LTD",
  },
  {
    cik_str: 929058,
    ticker: "HUNGF",
    company_name: "HUANENG POWER INTERNATIONAL INC",
  },
  {
    cik_str: 915191,
    ticker: "FRFGF",
    company_name: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    cik_str: 1004315,
    ticker: "NMK-PB",
    company_name: "NATIONAL GRID PLC",
  },
  {
    cik_str: 1281721,
    ticker: "SGIOF",
    company_name: "SHIONOGI & CO LTD",
  },
  {
    cik_str: 1754301,
    ticker: "FOX",
    company_name: "Fox Corp",
  },
  {
    cik_str: 1669414,
    ticker: "NHOLF",
    company_name: "Sompo Japan Nipponkoa Holdings, Inc./ADR",
  },
  {
    cik_str: 915191,
    ticker: "FRFFF",
    company_name: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    cik_str: 1445475,
    ticker: "BOUYF",
    company_name: "Bouygues SA",
  },
  {
    cik_str: 91576,
    ticker: "KEY-PJ",
    company_name: "KEYCORP /NEW/",
  },
  {
    cik_str: 1043219,
    ticker: "NLY-PG",
    company_name: "ANNALY CAPITAL MANAGEMENT INC",
  },
  {
    cik_str: 947484,
    ticker: "ACGLO",
    company_name: "ARCH CAPITAL GROUP LTD.",
  },
  {
    cik_str: 1547873,
    ticker: "PTPIF",
    company_name: "PT Chandra Asri Petrochemical Tbk/ADR",
  },
  {
    cik_str: 871464,
    ticker: "HKHGF",
    company_name: "HONGKONG LAND HOLDINGS LTD /FI",
  },
  {
    cik_str: 1858681,
    ticker: "APO-PA",
    company_name: "Apollo Global Management, Inc.",
  },
  {
    cik_str: 1564708,
    ticker: "NWS",
    company_name: "NEWS CORP",
  },
  {
    cik_str: 1043219,
    ticker: "NLY-PF",
    company_name: "ANNALY CAPITAL MANAGEMENT INC",
  },
  {
    cik_str: 91576,
    ticker: "KEY-PI",
    company_name: "KEYCORP /NEW/",
  },
  {
    cik_str: 927971,
    ticker: "FNGD",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 1438077,
    ticker: "JRONF",
    company_name: "Jeronimo Martins SGPS SA",
  },
  {
    cik_str: 806968,
    ticker: "WPPGF",
    company_name: "WPP plc",
  },
  {
    cik_str: 915191,
    ticker: "FRFXF",
    company_name: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    cik_str: 1003935,
    ticker: "NCSYF",
    company_name: "NICE Ltd.",
  },
  {
    cik_str: 930826,
    ticker: "SVYSF",
    company_name: "SOLVAY S A /ADR/",
  },
  {
    cik_str: 105016,
    ticker: "WSO-B",
    company_name: "WATSCO INC",
  },
  {
    cik_str: 1333141,
    ticker: "FMCQF",
    company_name: "Fresenius Medical Care AG",
  },
  {
    cik_str: 912595,
    ticker: "MAA-PI",
    company_name: "MID AMERICA APARTMENT COMMUNITIES INC.",
  },
  {
    cik_str: 1611983,
    ticker: "LBRDB",
    company_name: "Liberty Broadband Corp",
  },
  {
    cik_str: 1281761,
    ticker: "RF-PC",
    company_name: "REGIONS FINANCIAL CORP",
  },
  {
    cik_str: 1281761,
    ticker: "RF-PB",
    company_name: "REGIONS FINANCIAL CORP",
  },
  {
    cik_str: 845982,
    ticker: "SNNUF",
    company_name: "SMITH & NEPHEW PLC",
  },
  {
    cik_str: 1442651,
    ticker: "SHECF",
    company_name: "Shin-Etsu Chemical Co., Ltd.",
  },
  {
    cik_str: 1617640,
    ticker: "Z",
    company_name: "ZILLOW GROUP, INC.",
  },
  {
    cik_str: 1611983,
    ticker: "LBRDK",
    company_name: "Liberty Broadband Corp",
  },
  {
    cik_str: 1161611,
    ticker: "ALMMF",
    company_name: "ALUMINUM CORP OF CHINA LTD",
  },
  {
    cik_str: 1127248,
    ticker: "ERRAF",
    company_name: "EMERA INC",
  },
  {
    cik_str: 800954,
    ticker: "OMRNF",
    company_name: "OMRON CORP /FI",
  },
  {
    cik_str: 1163653,
    ticker: "NRSCF",
    company_name: "NOMURA HOLDINGS INC",
  },
  {
    cik_str: 1545460,
    ticker: "OLCLF",
    company_name: "Oriental Land Co., Ltd./ADR",
  },
  {
    cik_str: 4457,
    ticker: "UHAL-B",
    company_name: "U-Haul Holding Co /NV/",
  },
  {
    cik_str: 1127055,
    ticker: "VIVEF",
    company_name: "VIVENDI",
  },
  {
    cik_str: 24545,
    ticker: "TAP-A",
    company_name: "MOLSON COORS BEVERAGE CO",
  },
  {
    cik_str: 1026214,
    ticker: "FMCCT",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1076378,
    ticker: "CXMSF",
    company_name: "CEMEX SAB DE CV",
  },
  {
    cik_str: 72127,
    ticker: "NIPNF",
    company_name: "NEC CORP",
  },
  {
    cik_str: 1504122,
    ticker: "PBNNF",
    company_name: "PT Bank Negara Indonesia (Persero) Tbk/ADR",
  },
  {
    cik_str: 1062066,
    ticker: "AOMFF",
    company_name: "ALSTOM",
  },
  {
    cik_str: 1111711,
    ticker: "NI-PB",
    company_name: "NISOURCE INC.",
  },
  {
    cik_str: 769218,
    ticker: "AEGOF",
    company_name: "AEGON LTD.",
  },
  {
    cik_str: 1125259,
    ticker: "CUKPF",
    company_name: "CARNIVAL PLC",
  },
  {
    cik_str: 1026214,
    ticker: "FREJO",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1723690,
    ticker: "BLBLF",
    company_name: "Bilibili Inc.",
  },
  {
    cik_str: 1159152,
    ticker: "JHIUF",
    company_name: "James Hardie Industries plc",
  },
  {
    cik_str: 818686,
    ticker: "TEVJF",
    company_name: "TEVA PHARMACEUTICAL INDUSTRIES LTD",
  },
  {
    cik_str: 1438569,
    ticker: "GIKLY",
    company_name: "Grifols SA",
  },
  {
    cik_str: 1438654,
    ticker: "RDEIF",
    company_name: "Red Electrica Corporacion SA/ADR",
  },
  {
    cik_str: 1347557,
    ticker: "GPAEF",
    company_name: "Pacific Airport Group",
  },
  {
    cik_str: 1570585,
    ticker: "LBTYB",
    company_name: "Liberty Global Ltd.",
  },
  {
    cik_str: 34903,
    ticker: "FRT-PC",
    company_name: "FEDERAL REALTY INVESTMENT TRUST",
  },
  {
    cik_str: 100826,
    ticker: "UEPCN",
    company_name: "UNION ELECTRIC CO",
  },
  {
    cik_str: 1810997,
    ticker: "XPNGF",
    company_name: "XPENG INC.",
  },
  {
    cik_str: 1560385,
    ticker: "LSXMK",
    company_name: "Liberty Media Corp",
  },
  {
    cik_str: 1436786,
    ticker: "OUKPF",
    company_name: "Outotec OYJ",
  },
  {
    cik_str: 898174,
    ticker: "RZB",
    company_name: "REINSURANCE GROUP OF AMERICA INC",
  },
  {
    cik_str: 1447100,
    ticker: "YAMHF",
    company_name: "Yamaha Motor Co., Ltd.",
  },
  {
    cik_str: 1423689,
    ticker: "AGNCN",
    company_name: "AGNC Investment Corp.",
  },
  {
    cik_str: 1560385,
    ticker: "LSXMB",
    company_name: "Liberty Media Corp",
  },
  {
    cik_str: 886982,
    ticker: "GS-PC",
    company_name: "GOLDMAN SACHS GROUP INC",
  },
  {
    cik_str: 100826,
    ticker: "UEPEO",
    company_name: "UNION ELECTRIC CO",
  },
  {
    cik_str: 100826,
    ticker: "UEPEP",
    company_name: "UNION ELECTRIC CO",
  },
  {
    cik_str: 1423689,
    ticker: "AGNCM",
    company_name: "AGNC Investment Corp.",
  },
  {
    cik_str: 1562401,
    ticker: "AMH-PH",
    company_name: "American Homes 4 Rent",
  },
  {
    cik_str: 1884082,
    ticker: "PSNYW",
    company_name: "Polestar Automotive Holding UK PLC",
  },
  {
    cik_str: 1446418,
    ticker: "MTLHF",
    company_name: "Mitsubishi Chemical Holdings Corp",
  },
  {
    cik_str: 314590,
    ticker: "SASOF",
    company_name: "SASOL LTD",
  },
  {
    cik_str: 1123452,
    ticker: "ASRMF",
    company_name: "SOUTHEAST AIRPORT GROUP",
  },
  {
    cik_str: 1385535,
    ticker: "GLPEF",
    company_name: "Galp Energia, SGPS, S.A.",
  },
  {
    cik_str: 1442653,
    ticker: "ROHCF",
    company_name: "ROHM Co., Ltd.",
  },
  {
    cik_str: 1449003,
    ticker: "ASXFF",
    company_name: "ASX Ltd.",
  },
  {
    cik_str: 1786909,
    ticker: "SBYSF",
    company_name: "Sibanye Stillwater Ltd",
  },
  {
    cik_str: 1562401,
    ticker: "AMH-PG",
    company_name: "American Homes 4 Rent",
  },
  {
    cik_str: 899689,
    ticker: "VNO-PL",
    company_name: "VORNADO REALTY TRUST",
  },
  {
    cik_str: 100826,
    ticker: "UEPCP",
    company_name: "UNION ELECTRIC CO",
  },
  {
    cik_str: 879101,
    ticker: "KIM-PM",
    company_name: "KIMCO REALTY CORP",
  },
  {
    cik_str: 899689,
    ticker: "VNO-PM",
    company_name: "VORNADO REALTY TRUST",
  },
  {
    cik_str: 879101,
    ticker: "KIM-PL",
    company_name: "KIMCO REALTY CORP",
  },
  {
    cik_str: 1294591,
    ticker: "RKUNF",
    company_name: "Rakuten Group, Inc.",
  },
  {
    cik_str: 1527469,
    ticker: "ATH-PA",
    company_name: "Athene Holding Ltd",
  },
  {
    cik_str: 913144,
    ticker: "RNR-PF",
    company_name: "RENAISSANCERE HOLDINGS LTD",
  },
  {
    cik_str: 100826,
    ticker: "UEPEM",
    company_name: "UNION ELECTRIC CO",
  },
  {
    cik_str: 100826,
    ticker: "UEPEN",
    company_name: "UNION ELECTRIC CO",
  },
  {
    cik_str: 1535929,
    ticker: "VOYA-PB",
    company_name: "Voya Financial, Inc.",
  },
  {
    cik_str: 1438569,
    ticker: "GIFLF",
    company_name: "Grifols SA",
  },
  {
    cik_str: 1489079,
    ticker: "PADEF",
    company_name: "Adaro Energy PT/ADR/",
  },
  {
    cik_str: 1438569,
    ticker: "GIFOF",
    company_name: "Grifols SA",
  },
  {
    cik_str: 1710864,
    ticker: "MSUXF",
    company_name: "Misumi Group Inc./ADR",
  },
  {
    cik_str: 938323,
    ticker: "PSORF",
    company_name: "PEARSON PLC",
  },
  {
    cik_str: 1481045,
    ticker: "DSECF",
    company_name: "Daiwa Securities Group Inc.",
  },
  {
    cik_str: 811156,
    ticker: "CMSA",
    company_name: "CMS ENERGY CORP",
  },
  {
    cik_str: 1558812,
    ticker: "MEJHF",
    company_name: "MEIJI Holdings Co Ltd/ADR",
  },
  {
    cik_str: 1157557,
    ticker: "CIG-C",
    company_name: "ENERGY CO OF MINAS GERAIS",
  },
  {
    cik_str: 1446596,
    ticker: "FANUF",
    company_name: "Fanuc Ltd",
  },
  {
    cik_str: 1570585,
    ticker: "LBTYK",
    company_name: "Liberty Global Ltd.",
  },
  {
    cik_str: 1619954,
    ticker: "INOV",
    company_name: "Inovalon Holdings, Inc.",
  },
  {
    cik_str: 1455955,
    ticker: "PUTKF",
    company_name: "PT United Tractors Tbk / ADR",
  },
  {
    cik_str: 1040971,
    ticker: "SLG-PI",
    company_name: "SL GREEN REALTY CORP",
  },
  {
    cik_str: 1534043,
    ticker: "FUPEF",
    company_name: "Fuchs Petrolub SE/ADR",
  },
  {
    cik_str: 1534043,
    ticker: "FUPBY",
    company_name: "Fuchs Petrolub SE/ADR",
  },
  {
    cik_str: 1455626,
    ticker: "EENEF",
    company_name: "Electrocomponents plc / ADR",
  },
  {
    cik_str: 78150,
    ticker: "PHTCF",
    company_name: "PLDT Inc.",
  },
  {
    cik_str: 1156831,
    ticker: "QBCRF",
    company_name: "QUEBECOR MEDIA INC",
  },
  {
    cik_str: 5513,
    ticker: "UNMA",
    company_name: "Unum Group",
  },
  {
    cik_str: 1156831,
    ticker: "QBCAF",
    company_name: "QUEBECOR MEDIA INC",
  },
  {
    cik_str: 1403528,
    ticker: "OAK-PB",
    company_name: "Oaktree Capital Group, LLC",
  },
  {
    cik_str: 896076,
    ticker: "MGDDF",
    company_name: "MICHELIN COMPAGNIE GENERALE DES ETABLISSEMENTS MICHELIN /FI",
  },
  {
    cik_str: 1593538,
    ticker: "JSM",
    company_name: "NAVIENT CORP",
  },
  {
    cik_str: 1004980,
    ticker: "PCG-PA",
    company_name: "PG&E Corp",
  },
  {
    cik_str: 1449005,
    ticker: "JSCPF",
    company_name: "JSR Corp.",
  },
  {
    cik_str: 1447137,
    ticker: "BKGFF",
    company_name: "Berkeley Group Holdings plc",
  },
  {
    cik_str: 18349,
    ticker: "SNV-PD",
    company_name: "SYNOVUS FINANCIAL CORP",
  },
  {
    cik_str: 1567683,
    ticker: "CWEN-A",
    company_name: "Clearway Energy, Inc.",
  },
  {
    cik_str: 1437178,
    ticker: "EGFEF",
    company_name: "EFG Eurobank Ergasias S.A./ADR",
  },
  {
    cik_str: 1045450,
    ticker: "EPR-PG",
    company_name: "EPR PROPERTIES",
  },
  {
    cik_str: 1004980,
    ticker: "PCG-PB",
    company_name: "PG&E Corp",
  },
  {
    cik_str: 794685,
    ticker: "GAB-PG",
    company_name: "GABELLI EQUITY TRUST INC",
  },
  {
    cik_str: 1695519,
    ticker: "ATGFF",
    company_name: "AltaGas Ltd.",
  },
  {
    cik_str: 899689,
    ticker: "VNORP",
    company_name: "VORNADO REALTY TRUST",
  },
  {
    cik_str: 1685040,
    ticker: "BHFAL",
    company_name: "Brighthouse Financial, Inc.",
  },
  {
    cik_str: 1004980,
    ticker: "PCG-PD",
    company_name: "PG&E Corp",
  },
  {
    cik_str: 1004980,
    ticker: "PCG-PC",
    company_name: "PG&E Corp",
  },
  {
    cik_str: 763901,
    ticker: "BPOPO",
    company_name: "POPULAR, INC.",
  },
  {
    cik_str: 1110452,
    ticker: "AFRAF",
    company_name: "AIR FRANCE-KLM /FI",
  },
  {
    cik_str: 1004980,
    ticker: "PCG-PH",
    company_name: "PG&E Corp",
  },
  {
    cik_str: 1437774,
    ticker: "BZZUF",
    company_name: "BUZZI UNICEM S.p.A.",
  },
  {
    cik_str: 1792627,
    ticker: "TKAYF",
    company_name: "Just Eat Takeaway.com N.V.",
  },
  {
    cik_str: 1004980,
    ticker: "PCG-PE",
    company_name: "PG&E Corp",
  },
  {
    cik_str: 1090633,
    ticker: "IIJIF",
    company_name: "INTERNET INITIATIVE JAPAN INC",
  },
  {
    cik_str: 1004980,
    ticker: "PCG-PG",
    company_name: "PG&E Corp",
  },
  {
    cik_str: 1412558,
    ticker: "EVOTF",
    company_name: "Evotec SE",
  },
  {
    cik_str: 1214816,
    ticker: "AXS-PE",
    company_name: "AXIS CAPITAL HOLDINGS LTD",
  },
  {
    cik_str: 936340,
    ticker: "DTW",
    company_name: "DTE ENERGY CO",
  },
  {
    cik_str: 871459,
    ticker: "DFILF",
    company_name: "DAIRY FARM INTERNATIONAL HOLDINGS LTD /FI",
  },
  {
    cik_str: 1126956,
    ticker: "SR-PA",
    company_name: "SPIRE INC",
  },
  {
    cik_str: 1546354,
    ticker: "DFRYF",
    company_name: "Dufry AG/ADR",
  },
  {
    cik_str: 1004980,
    ticker: "PCG-PI",
    company_name: "PG&E Corp",
  },
  {
    cik_str: 910073,
    ticker: "NYCB-PA",
    company_name: "NEW YORK COMMUNITY BANCORP INC",
  },
  {
    cik_str: 1172494,
    ticker: "AUOTY",
    company_name: "AU OPTRONICS CORP",
  },
  {
    cik_str: 1671750,
    ticker: "DISPF",
    company_name: "Disco Corporation/ADR",
  },
  {
    cik_str: 1032033,
    ticker: "SLMBP",
    company_name: "SLM Corp",
  },
  {
    cik_str: 1792045,
    ticker: "THNPY",
    company_name: "Technip Energies N.V.",
  },
  {
    cik_str: 1571283,
    ticker: "REXR-PB",
    company_name: "Rexford Industrial Realty, Inc.",
  },
  {
    cik_str: 803649,
    ticker: "EQC-PD",
    company_name: "Equity Commonwealth",
  },
  {
    cik_str: 1792045,
    ticker: "THNPF",
    company_name: "Technip Energies N.V.",
  },
  {
    cik_str: 720672,
    ticker: "SF-PB",
    company_name: "STIFEL FINANCIAL CORP",
  },
  {
    cik_str: 1378239,
    ticker: "GAERF",
    company_name: "Central North Airport Group",
  },
  {
    cik_str: 1447945,
    ticker: "ASMVF",
    company_name: "ASM Pacific Technology Ltd.",
  },
  {
    cik_str: 1308606,
    ticker: "SRC-PA",
    company_name: "SPIRIT REALTY CAPITAL, INC.",
  },
  {
    cik_str: 1336917,
    ticker: "UA",
    company_name: "Under Armour, Inc.",
  },
  {
    cik_str: 1487712,
    ticker: "AL-PA",
    company_name: "AIR LEASE CORP",
  },
  {
    cik_str: 1492074,
    ticker: "ABCZF",
    company_name: "Abcam plc",
  },
  {
    cik_str: 1685040,
    ticker: "BHFAP",
    company_name: "Brighthouse Financial, Inc.",
  },
  {
    cik_str: 1792627,
    ticker: "JTKWY",
    company_name: "Just Eat Takeaway.com N.V.",
  },
  {
    cik_str: 1363829,
    ticker: "ESGRO",
    company_name: "Enstar Group LTD",
  },
  {
    cik_str: 1110805,
    ticker: "NS-PB",
    company_name: "NuStar Energy L.P.",
  },
  {
    cik_str: 1409493,
    ticker: "CIM-PB",
    company_name: "CHIMERA INVESTMENT CORP",
  },
  {
    cik_str: 1012019,
    ticker: "RUSHB",
    company_name: "RUSH ENTERPRISES INC \\TX\\",
  },
  {
    cik_str: 1062750,
    ticker: "SAPMF",
    company_name: "SAIPEM S P A /FI",
  },
  {
    cik_str: 1409493,
    ticker: "CIM-PD",
    company_name: "CHIMERA INVESTMENT CORP",
  },
  {
    cik_str: 1110805,
    ticker: "NS-PA",
    company_name: "NuStar Energy L.P.",
  },
  {
    cik_str: 1015328,
    ticker: "WTFCM",
    company_name: "WINTRUST FINANCIAL CORP",
  },
  {
    cik_str: 1465740,
    ticker: "TWO-PC",
    company_name: "TWO HARBORS INVESTMENT CORP.",
  },
  {
    cik_str: 67887,
    ticker: "MOG-B",
    company_name: "MOOG INC.",
  },
  {
    cik_str: 1363829,
    ticker: "ESGRP",
    company_name: "Enstar Group LTD",
  },
  {
    cik_str: 37808,
    ticker: "FNB-PE",
    company_name: "FNB CORP/PA/",
  },
  {
    cik_str: 1446694,
    ticker: "SHWDF",
    company_name: "Showa Denko K.K./ADR",
  },
  {
    cik_str: 78814,
    ticker: "PBI-PB",
    company_name: "PITNEY BOWES INC /DE/",
  },
  {
    cik_str: 310522,
    ticker: "FNMAS",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 908732,
    ticker: "SPTJF",
    company_name: "SINOPEC SHANGHAI PETROCHEMICAL CO LTD",
  },
  {
    cik_str: 310522,
    ticker: "FNMFN",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 43920,
    ticker: "GEF-B",
    company_name: "GREIF, INC",
  },
  {
    cik_str: 310522,
    ticker: "FNMAH",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 11544,
    ticker: "WRB-PE",
    company_name: "BERKLEY W R CORP",
  },
  {
    cik_str: 1465740,
    ticker: "TWO-PB",
    company_name: "TWO HARBORS INVESTMENT CORP.",
  },
  {
    cik_str: 1062750,
    ticker: "SAPMY",
    company_name: "SAIPEM S P A /FI",
  },
  {
    cik_str: 801337,
    ticker: "WBS-PF",
    company_name: "WEBSTER FINANCIAL CORP",
  },
  {
    cik_str: 1465740,
    ticker: "TWO-PA",
    company_name: "TWO HARBORS INVESTMENT CORP.",
  },
  {
    cik_str: 714310,
    ticker: "VLYPO",
    company_name: "VALLEY NATIONAL BANCORP",
  },
  {
    cik_str: 1511337,
    ticker: "RLJ-PA",
    company_name: "RLJ Lodging Trust",
  },
  {
    cik_str: 1474098,
    ticker: "PEB-PF",
    company_name: "Pebblebrook Hotel Trust",
  },
  {
    cik_str: 932470,
    ticker: "TCMFF",
    company_name: "TELECOM ARGENTINA SA",
  },
  {
    cik_str: 1474098,
    ticker: "PEB-PE",
    company_name: "Pebblebrook Hotel Trust",
  },
  {
    cik_str: 98677,
    ticker: "TROLB",
    company_name: "TOOTSIE ROLL INDUSTRIES INC",
  },
  {
    cik_str: 1409493,
    ticker: "CIM-PC",
    company_name: "CHIMERA INVESTMENT CORP",
  },
  {
    cik_str: 1409493,
    ticker: "CIM-PA",
    company_name: "CHIMERA INVESTMENT CORP",
  },
  {
    cik_str: 310522,
    ticker: "FNMAJ",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 1592438,
    ticker: "ROYMF",
    company_name: "Royal Mail plc/ADR",
  },
  {
    cik_str: 357294,
    ticker: "HOVNP",
    company_name: "HOVNANIAN ENTERPRISES INC",
  },
  {
    cik_str: 1380366,
    ticker: "GGNDF",
    company_name: "GN STORE NORD A/S",
  },
  {
    cik_str: 1055160,
    ticker: "MFA-PB",
    company_name: "MFA FINANCIAL, INC.",
  },
  {
    cik_str: 1023514,
    ticker: "HGMCF",
    company_name: "HARMONY GOLD MINING CO LTD",
  },
  {
    cik_str: 99614,
    ticker: "TY-P",
    company_name: "TRI-CONTINENTAL CORP",
  },
  {
    cik_str: 1012139,
    ticker: "GNGYF",
    company_name: "GUANGSHEN RAILWAY CO LTD",
  },
  {
    cik_str: 7789,
    ticker: "ASB-PE",
    company_name: "ASSOCIATED BANC-CORP",
  },
  {
    cik_str: 1144800,
    ticker: "TNSSF",
    company_name: "TRANSALTA CORP",
  },
  {
    cik_str: 1648257,
    ticker: "HMDCF",
    company_name: "HUTCHMED (China) Ltd",
  },
  {
    cik_str: 1712184,
    ticker: "LILAB",
    company_name: "Liberty Latin America Ltd.",
  },
  {
    cik_str: 714310,
    ticker: "VLYPP",
    company_name: "VALLEY NATIONAL BANCORP",
  },
  {
    cik_str: 1421876,
    ticker: "GLPGF",
    company_name: "GALAPAGOS NV",
  },
  {
    cik_str: 912892,
    ticker: "GRPFF",
    company_name: "GRUPO TELEVISA, S.A.B.",
  },
  {
    cik_str: 310522,
    ticker: "FNMAM",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 92108,
    ticker: "SOCGP",
    company_name: "SOUTHERN CALIFORNIA GAS CO",
  },
  {
    cik_str: 18654,
    ticker: "AILLI",
    company_name: "Ameren Illinois Co",
  },
  {
    cik_str: 1958140,
    ticker: "BATRK",
    company_name: "Atlanta Braves Holdings, Inc.",
  },
  {
    cik_str: 1110805,
    ticker: "NS-PC",
    company_name: "NuStar Energy L.P.",
  },
  {
    cik_str: 925261,
    ticker: "AKO-B",
    company_name: "ANDINA BOTTLING CO INC",
  },
  {
    cik_str: 1618563,
    ticker: "NSA-PA",
    company_name: "National Storage Affiliates Trust",
  },
  {
    cik_str: 1958140,
    ticker: "BATRB",
    company_name: "Atlanta Braves Holdings, Inc.",
  },
  {
    cik_str: 107815,
    ticker: "WELPP",
    company_name: "WISCONSIN ELECTRIC POWER CO",
  },
  {
    cik_str: 1592651,
    ticker: "LNZNF",
    company_name: "Lenzing AG/ADR",
  },
  {
    cik_str: 18654,
    ticker: "AILLM",
    company_name: "Ameren Illinois Co",
  },
  {
    cik_str: 18654,
    ticker: "AILLN",
    company_name: "Ameren Illinois Co",
  },
  {
    cik_str: 1628063,
    ticker: "SRG-PA",
    company_name: "Seritage Growth Properties",
  },
  {
    cik_str: 929351,
    ticker: "LGF-B",
    company_name: "LIONS GATE ENTERTAINMENT CORP /CN/",
  },
  {
    cik_str: 887733,
    ticker: "CENTA",
    company_name: "CENTRAL GARDEN & PET CO",
  },
  {
    cik_str: 1660734,
    ticker: "TRTN-PA",
    company_name: "Triton International Ltd",
  },
  {
    cik_str: 894315,
    ticker: "SITC-PA",
    company_name: "SITE Centers Corp.",
  },
  {
    cik_str: 310522,
    ticker: "FNMAN",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 18654,
    ticker: "AILIM",
    company_name: "Ameren Illinois Co",
  },
  {
    cik_str: 310522,
    ticker: "FNMAI",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 1543726,
    ticker: "NHNKF",
    company_name: "Nihon Kohden Corporation/ADR",
  },
  {
    cik_str: 1770561,
    ticker: "CODQL",
    company_name: "Coronado Global Resources Inc.",
  },
  {
    cik_str: 18654,
    ticker: "AILLO",
    company_name: "Ameren Illinois Co",
  },
  {
    cik_str: 910108,
    ticker: "LXP-PC",
    company_name: "LXP Industrial Trust",
  },
  {
    cik_str: 1683252,
    ticker: "TKCM",
    company_name: "TOKEN COMMUNITIES LTD.",
  },
  {
    cik_str: 310522,
    ticker: "FNMAT",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 18654,
    ticker: "AILIN",
    company_name: "Ameren Illinois Co",
  },
  {
    cik_str: 310522,
    ticker: "FNMAK",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 1110805,
    ticker: "NSS",
    company_name: "NuStar Energy L.P.",
  },
  {
    cik_str: 1504461,
    ticker: "NGL-PB",
    company_name: "NGL Energy Partners LP",
  },
  {
    cik_str: 310522,
    ticker: "FNMAL",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 845877,
    ticker: "AGM-A",
    company_name: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    cik_str: 310522,
    ticker: "FNMFM",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 18654,
    ticker: "AILLP",
    company_name: "Ameren Illinois Co",
  },
  {
    cik_str: 107140,
    ticker: "WLYB",
    company_name: "JOHN WILEY & SONS, INC.",
  },
  {
    cik_str: 310522,
    ticker: "FNMAO",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 310522,
    ticker: "FNMAG",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 310522,
    ticker: "FNMFO",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 1829948,
    ticker: "CIXXF",
    company_name: "CI Financial Corp.",
  },
  {
    cik_str: 1642365,
    ticker: "ALTB",
    company_name: "Alpine Auto Brokers Inc.",
  },
  {
    cik_str: 1446626,
    ticker: "UBEOF",
    company_name: "Ube Industries Ltd",
  },
  {
    cik_str: 1437071,
    ticker: "IVR-PC",
    company_name: "Invesco Mortgage Capital Inc.",
  },
  {
    cik_str: 1260729,
    ticker: "GDV-PH",
    company_name: "GABELLI DIVIDEND & INCOME TRUST",
  },
  {
    cik_str: 1553079,
    ticker: "FISK",
    company_name: "Empire State Realty OP, L.P.",
  },
  {
    cik_str: 1437071,
    ticker: "IVR-PB",
    company_name: "Invesco Mortgage Capital Inc.",
  },
  {
    cik_str: 1504461,
    ticker: "NGL-PC",
    company_name: "NGL Energy Partners LP",
  },
  {
    cik_str: 907254,
    ticker: "BFS-PD",
    company_name: "SAUL CENTERS, INC.",
  },
  {
    cik_str: 1026214,
    ticker: "FMCCL",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1553079,
    ticker: "OGCP",
    company_name: "Empire State Realty OP, L.P.",
  },
  {
    cik_str: 1412100,
    ticker: "MHLA",
    company_name: "Maiden Holdings, Ltd.",
  },
  {
    cik_str: 1026214,
    ticker: "FMCKL",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1569963,
    ticker: "LTGHF",
    company_name: "Life Healthcare Group Holdings Limited/ADR",
  },
  {
    cik_str: 1464423,
    ticker: "PMT-PA",
    company_name: "PennyMac Mortgage Investment Trust",
  },
  {
    cik_str: 1026214,
    ticker: "FMCCG",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1026214,
    ticker: "FMCCJ",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1464423,
    ticker: "PMT-PB",
    company_name: "PennyMac Mortgage Investment Trust",
  },
  {
    cik_str: 1026214,
    ticker: "FMCKI",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1712184,
    ticker: "LILAK",
    company_name: "Liberty Latin America Ltd.",
  },
  {
    cik_str: 1534126,
    ticker: "GLOG-PA",
    company_name: "GasLog Ltd.",
  },
  {
    cik_str: 794685,
    ticker: "GAB-PH",
    company_name: "GABELLI EQUITY TRUST INC",
  },
  {
    cik_str: 1026214,
    ticker: "FMCCI",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1585389,
    ticker: "STSFF",
    company_name: "SmartStop Self Storage REIT, Inc.",
  },
  {
    cik_str: 1526113,
    ticker: "GNL-PA",
    company_name: "Global Net Lease, Inc.",
  },
  {
    cik_str: 1280784,
    ticker: "HCXY",
    company_name: "Hercules Capital, Inc.",
  },
  {
    cik_str: 1026214,
    ticker: "FMCCS",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1259429,
    ticker: "OXSQL",
    company_name: "Oxford Square Capital Corp.",
  },
  {
    cik_str: 1490927,
    ticker: "BDVC",
    company_name: "Franklin BSP Lending Corp",
  },
  {
    cik_str: 1026214,
    ticker: "FMCCO",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1267395,
    ticker: "AHL-PD",
    company_name: "ASPEN INSURANCE HOLDINGS LTD",
  },
  {
    cik_str: 1816901,
    ticker: "SWGHF",
    company_name: "SAWAI GROUP HOLDINGS Co., Ltd.",
  },
  {
    cik_str: 1345126,
    ticker: "CODI-PB",
    company_name: "Compass Diversified Holdings",
  },
  {
    cik_str: 1026214,
    ticker: "FMCKN",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1273685,
    ticker: "NYMTN",
    company_name: "NEW YORK MORTGAGE TRUST INC",
  },
  {
    cik_str: 1026214,
    ticker: "FREJN",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1026214,
    ticker: "FMCCN",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1026214,
    ticker: "FMCKO",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1345126,
    ticker: "CODI-PA",
    company_name: "Compass Diversified Holdings",
  },
  {
    cik_str: 1026214,
    ticker: "FMCKJ",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1569187,
    ticker: "AHH-PA",
    company_name: "Armada Hoffler Properties, Inc.",
  },
  {
    cik_str: 1026214,
    ticker: "FMCKM",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1026214,
    ticker: "FREGP",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1598655,
    ticker: "GLOP-PA",
    company_name: "GasLog Partners LP",
  },
  {
    cik_str: 1026214,
    ticker: "FMCCH",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1598655,
    ticker: "GLOP-PB",
    company_name: "GasLog Partners LP",
  },
  {
    cik_str: 1026214,
    ticker: "FMCCK",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1400891,
    ticker: "IHRTB",
    company_name: "iHeartMedia, Inc.",
  },
  {
    cik_str: 719413,
    ticker: "HL-PB",
    company_name: "HECLA MINING CO/DE/",
  },
  {
    cik_str: 1026214,
    ticker: "FMCCP",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1026214,
    ticker: "FMCCM",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1026214,
    ticker: "FMCKP",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1598655,
    ticker: "GLOP-PC",
    company_name: "GasLog Partners LP",
  },
  {
    cik_str: 1728205,
    ticker: "PLLTL",
    company_name: "Piedmont Lithium Inc.",
  },
  {
    cik_str: 1677576,
    ticker: "IIPR-PA",
    company_name: "INNOVATIVE INDUSTRIAL PROPERTIES INC",
  },
  {
    cik_str: 1497645,
    ticker: "INN-PE",
    company_name: "Summit Hotel Properties, Inc.",
  },
  {
    cik_str: 1482430,
    ticker: "KBSR",
    company_name: "KBS Real Estate Investment Trust III, Inc.",
  },
  {
    cik_str: 909531,
    ticker: "CRNZF",
    company_name: "CAIRN ENERGY PLC",
  },
  {
    cik_str: 40417,
    ticker: "GAM-PB",
    company_name: "GENERAL AMERICAN INVESTORS CO INC",
  },
  {
    cik_str: 1499785,
    ticker: "TJBH",
    company_name: "Tengjun Biotechnology Corp.",
  },
  {
    cik_str: 1709442,
    ticker: "FSUN",
    company_name: "FIRSTSUN CAPITAL BANCORP",
  },
  {
    cik_str: 729580,
    ticker: "BELFB",
    company_name: "BEL FUSE INC /NJ",
  },
  {
    cik_str: 43196,
    ticker: "GTN-A",
    company_name: "GRAY TELEVISION INC",
  },
  {
    cik_str: 1782999,
    ticker: "PTCHF",
    company_name: "PureTech Health plc",
  },
  {
    cik_str: 1448978,
    ticker: "SMBMF",
    company_name: "SembCorp Marine Ltd.",
  },
  {
    cik_str: 845877,
    ticker: "AGM-PC",
    company_name: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    cik_str: 845877,
    ticker: "AGM-PD",
    company_name: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    cik_str: 1345099,
    ticker: "MEOBF",
    company_name: "MESOBLAST LTD",
  },
  {
    cik_str: 55135,
    ticker: "KELYB",
    company_name: "KELLY SERVICES INC",
  },
  {
    cik_str: 1023512,
    ticker: "DRDGF",
    company_name: "DRDGOLD LTD",
  },
  {
    cik_str: 1340243,
    ticker: "MPSYF",
    company_name: "MorphoSys AG",
  },
  {
    cik_str: 315858,
    ticker: "BVHBB",
    company_name: "Bluegreen Vacations Holding Corp",
  },
  {
    cik_str: 1503584,
    ticker: "CMRE-PB",
    company_name: "Costamare Inc.",
  },
  {
    cik_str: 1209028,
    ticker: "AIC",
    company_name: "Arlington Asset Investment Corp.",
  },
  {
    cik_str: 1503584,
    ticker: "CMRE-PC",
    company_name: "Costamare Inc.",
  },
  {
    cik_str: 1323468,
    ticker: "GLP-PA",
    company_name: "GLOBAL PARTNERS LP",
  },
  {
    cik_str: 1503584,
    ticker: "CMRE-PD",
    company_name: "Costamare Inc.",
  },
  {
    cik_str: 1385145,
    ticker: "CELJF",
    company_name: "Cellcom Israel Ltd.",
  },
  {
    cik_str: 1561032,
    ticker: "HLTC",
    company_name: "Healthcare Trust, Inc.",
  },
  {
    cik_str: 1503584,
    ticker: "CMRE-PE",
    company_name: "Costamare Inc.",
  },
  {
    cik_str: 216085,
    ticker: "HVT-A",
    company_name: "HAVERTY FURNITURE COMPANIES INC",
  },
  {
    cik_str: 921671,
    ticker: "GGT-PE",
    company_name: "GABELLI MULTIMEDIA TRUST INC.",
  },
  {
    cik_str: 1313510,
    ticker: "GGN-PB",
    company_name: "GAMCO Global Gold, Natural Resources & Income Trust",
  },
  {
    cik_str: 1726173,
    ticker: "BH",
    company_name: "Biglari Holdings Inc.",
  },
  {
    cik_str: 863110,
    ticker: "ARTNB",
    company_name: "ARTESIAN RESOURCES CORP",
  },
  {
    cik_str: 800457,
    ticker: "DGICB",
    company_name: "DONEGAL GROUP INC",
  },
  {
    cik_str: 1060349,
    ticker: "GAMI",
    company_name: "GAMCO INVESTORS, INC. ET AL",
  },
  {
    cik_str: 752642,
    ticker: "UMH-PD",
    company_name: "UMH PROPERTIES, INC.",
  },
  {
    cik_str: 1495222,
    ticker: "OXLCM",
    company_name: "Oxford Lane Capital Corp.",
  },
  {
    cik_str: 1234006,
    ticker: "GOODO",
    company_name: "GLADSTONE COMMERCIAL CORP",
  },
  {
    cik_str: 1488813,
    ticker: "CUBI-PE",
    company_name: "Customers Bancorp, Inc.",
  },
  {
    cik_str: 1355096,
    ticker: "QRTEB",
    company_name: "Qurate Retail, Inc.",
  },
  {
    cik_str: 1488813,
    ticker: "CUBI-PF",
    company_name: "Customers Bancorp, Inc.",
  },
  {
    cik_str: 1604174,
    ticker: "ECCX",
    company_name: "Eagle Point Credit Co Inc.",
  },
  {
    cik_str: 8063,
    ticker: "ATROB",
    company_name: "ASTRONICS CORP",
  },
  {
    cik_str: 1629019,
    ticker: "MBINP",
    company_name: "Merchants Bancorp",
  },
  {
    cik_str: 1214935,
    ticker: "NCV-PA",
    company_name: "Virtus Convertible & Income Fund",
  },
  {
    cik_str: 1587987,
    ticker: "NEWTI",
    company_name: "NewtekOne, Inc.",
  },
  {
    cik_str: 25475,
    ticker: "CRD-B",
    company_name: "CRAWFORD & CO",
  },
  {
    cik_str: 357294,
    ticker: "HOVVB",
    company_name: "HOVNANIAN ENTERPRISES INC",
  },
  {
    cik_str: 1499849,
    ticker: "BRCPF",
    company_name: "BrasilAgro - Brazilian Agricultural Real Estate Co",
  },
  {
    cik_str: 1533615,
    ticker: "GMRE-PA",
    company_name: "Global Medical REIT Inc.",
  },
  {
    cik_str: 885275,
    ticker: "WBHC",
    company_name: "WILSON BANK HOLDING CO",
  },
  {
    cik_str: 1495222,
    ticker: "OXLCO",
    company_name: "Oxford Lane Capital Corp.",
  },
  {
    cik_str: 1495240,
    ticker: "LANDM",
    company_name: "GLADSTONE LAND Corp",
  },
  {
    cik_str: 353184,
    ticker: "AIRTP",
    company_name: "AIR T INC",
  },
  {
    cik_str: 1514281,
    ticker: "MITT-PA",
    company_name: "AG Mortgage Investment Trust, Inc.",
  },
  {
    cik_str: 88948,
    ticker: "SENEB",
    company_name: "Seneca Foods Corp",
  },
  {
    cik_str: 1514281,
    ticker: "MITT-PB",
    company_name: "AG Mortgage Investment Trust, Inc.",
  },
  {
    cik_str: 1452857,
    ticker: "SPLP-PA",
    company_name: "STEEL PARTNERS HOLDINGS L.P.",
  },
  {
    cik_str: 1556898,
    ticker: "THPTF",
    company_name: "Techpoint, Inc.",
  },
  {
    cik_str: 1321741,
    ticker: "GAINL",
    company_name: "GLADSTONE INVESTMENT CORPORATION\\DE",
  },
  {
    cik_str: 1762303,
    ticker: "AVHHL",
    company_name: "AVITA Medical, Inc.",
  },
  {
    cik_str: 1762506,
    ticker: "VSOGF",
    company_name: "Vista Energy, S.A.B. de C.V.",
  },
  {
    cik_str: 1593222,
    ticker: "CIO-PA",
    company_name: "City Office REIT, Inc.",
  },
  {
    cik_str: 1080720,
    ticker: "GUT-PC",
    company_name: "GABELLI UTILITY TRUST",
  },
  {
    cik_str: 1815620,
    ticker: "CKDXF",
    company_name: "Opthea Ltd",
  },
  {
    cik_str: 1849475,
    ticker: "NCACU",
    company_name: "Newcourt Acquisition Corp",
  },
  {
    cik_str: 23426,
    ticker: "CNTHP",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 1465872,
    ticker: "VTDRF",
    company_name: "VANTAGE DRILLING INTERNATIONAL",
  },
  {
    cik_str: 23426,
    ticker: "CNLPL",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 1166663,
    ticker: "TNP-PE",
    company_name: "TSAKOS ENERGY NAVIGATION LTD",
  },
  {
    cik_str: 1227857,
    ticker: "NCZ-PA",
    company_name: "Virtus Convertible & Income Fund II",
  },
  {
    cik_str: 1318885,
    ticker: "DSX-PB",
    company_name: "DIANA SHIPPING INC.",
  },
  {
    cik_str: 23426,
    ticker: "CNTHO",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 1571776,
    ticker: "CHMI-PB",
    company_name: "Cherry Hill Mortgage Investment Corp",
  },
  {
    cik_str: 1166663,
    ticker: "TNP-PF",
    company_name: "TSAKOS ENERGY NAVIGATION LTD",
  },
  {
    cik_str: 1160846,
    ticker: "OIBRQ",
    company_name: "OI S.A. - In Judicial Reorganization",
  },
  {
    cik_str: 46207,
    ticker: "HAWLN",
    company_name: "HAWAIIAN ELECTRIC CO INC",
  },
  {
    cik_str: 23426,
    ticker: "CNTHN",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 1459762,
    ticker: "EXROF",
    company_name: "EXRO TECHNOLOGIES INC.",
  },
  {
    cik_str: 1479615,
    ticker: "SLNCF",
    company_name: "Silence Therapeutics plc",
  },
  {
    cik_str: 46207,
    ticker: "HAWEN",
    company_name: "HAWAIIAN ELECTRIC CO INC",
  },
  {
    cik_str: 1574085,
    ticker: "BHR-PD",
    company_name: "Braemar Hotels & Resorts Inc.",
  },
  {
    cik_str: 23426,
    ticker: "CNLHO",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 1232582,
    ticker: "AHT-PG",
    company_name: "ASHFORD HOSPITALITY TRUST INC",
  },
  {
    cik_str: 1944885,
    ticker: "APLMW",
    company_name: "Apollomics Inc.",
  },
  {
    cik_str: 23426,
    ticker: "CNLHP",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 1243429,
    ticker: "ARCXF",
    company_name: "ArcelorMittal",
  },
  {
    cik_str: 23426,
    ticker: "CNLTP",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 1574085,
    ticker: "BHR-PB",
    company_name: "Braemar Hotels & Resorts Inc.",
  },
  {
    cik_str: 1567924,
    ticker: "MIESF",
    company_name: "Mitsui E&S Holdings Co., Ltd./ADR",
  },
  {
    cik_str: 922358,
    ticker: "FGPRB",
    company_name: "FERRELLGAS PARTNERS L P",
  },
  {
    cik_str: 23426,
    ticker: "CNLTL",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 23426,
    ticker: "CNPWM",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 1653558,
    ticker: "PRTHU",
    company_name: "Priority Technology Holdings, Inc.",
  },
  {
    cik_str: 1571776,
    ticker: "CHMI-PA",
    company_name: "Cherry Hill Mortgage Investment Corp",
  },
  {
    cik_str: 23426,
    ticker: "CNPWP",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 1495240,
    ticker: "LANDP",
    company_name: "GLADSTONE LAND Corp",
  },
  {
    cik_str: 23426,
    ticker: "CNLPM",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 1641601,
    ticker: "RVRF",
    company_name: "River Financial Corp",
  },
  {
    cik_str: 23426,
    ticker: "CNLTN",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 1756594,
    ticker: "IVEVF",
    company_name: "Inventiva S.A.",
  },
  {
    cik_str: 1598599,
    ticker: "IPHYF",
    company_name: "Innate Pharma SA",
  },
  {
    cik_str: 1685766,
    ticker: "MVXM",
    company_name: "MOVEIX INC.",
  },
  {
    cik_str: 1232582,
    ticker: "AHT-PF",
    company_name: "ASHFORD HOSPITALITY TRUST INC",
  },
  {
    cik_str: 1232582,
    ticker: "AHT-PI",
    company_name: "ASHFORD HOSPITALITY TRUST INC",
  },
  {
    cik_str: 1232582,
    ticker: "AHT-PH",
    company_name: "ASHFORD HOSPITALITY TRUST INC",
  },
  {
    cik_str: 1859795,
    ticker: "NVNXF",
    company_name: "NOVONIX Ltd",
  },
  {
    cik_str: 1041657,
    ticker: "UONEK",
    company_name: "URBAN ONE, INC.",
  },
  {
    cik_str: 1551949,
    ticker: "GGM",
    company_name: "Guggenheim Credit Allocation Fund",
  },
  {
    cik_str: 71508,
    ticker: "ENO",
    company_name: "ENTERGY NEW ORLEANS, LLC",
  },
  {
    cik_str: 1874218,
    ticker: "RCACU",
    company_name: "Revelstone Capital Acquisition Corp.",
  },
  {
    cik_str: 716006,
    ticker: "YELLQ",
    company_name: "Yellow Corp",
  },
  {
    cik_str: 1232582,
    ticker: "AHT-PD",
    company_name: "ASHFORD HOSPITALITY TRUST INC",
  },
  {
    cik_str: 23426,
    ticker: "CNLHN",
    company_name: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    cik_str: 1896084,
    ticker: "GSCCF",
    company_name: "ioneer Ltd",
  },
  {
    cik_str: 1271554,
    ticker: "ERLFF",
    company_name: "Entree Resources Ltd.",
  },
  {
    cik_str: 1434754,
    ticker: "SB-PC",
    company_name: "SAFE BULKERS, INC.",
  },
  {
    cik_str: 1434754,
    ticker: "SB-PD",
    company_name: "SAFE BULKERS, INC.",
  },
  {
    cik_str: 23111,
    ticker: "CTG",
    company_name: "COMPUTER TASK GROUP INC",
  },
  {
    cik_str: 1850453,
    ticker: "MOYFF",
    company_name: "Mynaric AG",
  },
  {
    cik_str: 1839175,
    ticker: "MBAC",
    company_name: "M3-Brigade Acquisition II Corp.",
  },
  {
    cik_str: 1578453,
    ticker: "DLNG-PA",
    company_name: "Dynagas LNG Partners LP",
  },
  {
    cik_str: 1606745,
    ticker: "LTRPB",
    company_name: "Liberty TripAdvisor Holdings, Inc.",
  },
  {
    cik_str: 1333172,
    ticker: "NM-PH",
    company_name: "Navios Maritime Holdings Inc.",
  },
  {
    cik_str: 1333172,
    ticker: "NM-PG",
    company_name: "Navios Maritime Holdings Inc.",
  },
  {
    cik_str: 1847351,
    ticker: "BRD",
    company_name: "Beard Energy Transition Acquisition Corp.",
  },
  {
    cik_str: 1840161,
    ticker: "FRXB",
    company_name: "Forest Road Acquisition Corp. II",
  },
  {
    cik_str: 1209028,
    ticker: "AAIC",
    company_name: "Arlington Asset Investment Corp.",
  },
  {
    cik_str: 1057083,
    ticker: "PCTI",
    company_name: "PC TEL INC",
  },
  {
    cik_str: 1302084,
    ticker: "NSRCF",
    company_name: "NextSource Materials Inc.",
  },
  {
    cik_str: 1814974,
    ticker: "BBXIB",
    company_name: "BBX Capital, Inc.",
  },
  {
    cik_str: 761648,
    ticker: "CDR-PC",
    company_name: "CEDAR REALTY TRUST, INC.",
  },
  {
    cik_str: 909531,
    ticker: "CRNCY",
    company_name: "CAIRN ENERGY PLC",
  },
  {
    cik_str: 761648,
    ticker: "CDR-PB",
    company_name: "CEDAR REALTY TRUST, INC.",
  },
  {
    cik_str: 1811115,
    ticker: "RTNXF",
    company_name: "Renalytix plc",
  },
  {
    cik_str: 1662991,
    ticker: "SEZNL",
    company_name: "Sezzle Inc.",
  },
  {
    cik_str: 1882839,
    ticker: "WONDF",
    company_name: "WonderFi Technologies Inc.",
  },
  {
    cik_str: 1815753,
    ticker: "TBCP",
    company_name: "Thunder Bridge Capital Partners III Inc.",
  },
  {
    cik_str: 793040,
    ticker: "ECF-PA",
    company_name: "ELLSWORTH GROWTH & INCOME FUND LTD",
  },
  {
    cik_str: 716634,
    ticker: "RDIB",
    company_name: "READING INTERNATIONAL INC",
  },
  {
    cik_str: 1705012,
    ticker: "FATBB",
    company_name: "Fat Brands, Inc",
  },
  {
    cik_str: 1301236,
    ticker: "SOHOO",
    company_name: "Sotherly Hotels Inc.",
  },
  {
    cik_str: 1888274,
    ticker: "DEFTF",
    company_name: "Defi Technologies, Inc.",
  },
  {
    cik_str: 9521,
    ticker: "BCV-PA",
    company_name: "BANCROFT FUND LTD",
  },
  {
    cik_str: 1841675,
    ticker: "ARBKF",
    company_name: "Argo Blockchain Plc",
  },
  {
    cik_str: 93676,
    ticker: "SCXLB",
    company_name: "STARRETT L S CO",
  },
  {
    cik_str: 1826011,
    ticker: "VII",
    company_name: "Banzai International, Inc.",
  },
  {
    cik_str: 1589150,
    ticker: "RGBPP",
    company_name: "Regen BioPharma Inc",
  },
  {
    cik_str: 1282957,
    ticker: "GLU-PB",
    company_name: "GABELLI GLOBAL UTILITY & INCOME TRUST",
  },
  {
    cik_str: 1527096,
    ticker: "MIRO",
    company_name: "Miromatrix Medical Inc.",
  },
  {
    cik_str: 1166272,
    ticker: "GNTLF",
    company_name: "GENETIC TECHNOLOGIES LTD",
  },
  {
    cik_str: 1301236,
    ticker: "SOHOB",
    company_name: "Sotherly Hotels Inc.",
  },
  {
    cik_str: 896494,
    ticker: "MAGS",
    company_name: "SENSTAR TECHNOLOGIES LTD.",
  },
  {
    cik_str: 1854078,
    ticker: "RLFTF",
    company_name: "Relief Therapeutics Holding SA",
  },
  {
    cik_str: 1301236,
    ticker: "SOHON",
    company_name: "Sotherly Hotels Inc.",
  },
  {
    cik_str: 1823575,
    ticker: "ZFOXW",
    company_name: "ZeroFox Holdings, Inc.",
  },
  {
    cik_str: 1839610,
    ticker: "IPVF",
    company_name: "InterPrivate III Financial Partners Inc.",
  },
  {
    cik_str: 1712641,
    ticker: "BFFTF",
    company_name: "Biofrontera AG",
  },
  {
    cik_str: 1875931,
    ticker: "OFSTF",
    company_name: "Carbon Streaming Corp",
  },
  {
    cik_str: 1430725,
    ticker: "GSL-PB",
    company_name: "Global Ship Lease, Inc.",
  },
  {
    cik_str: 1007273,
    ticker: "BKSC",
    company_name: "BANK OF SOUTH CAROLINA CORP",
  },
  {
    cik_str: 1578453,
    ticker: "DLNG-PB",
    company_name: "Dynagas LNG Partners LP",
  },
  {
    cik_str: 1004530,
    ticker: "MPVDF",
    company_name: "Mountain Province Diamonds Inc.",
  },
  {
    cik_str: 1841873,
    ticker: "KVSA",
    company_name: "Khosla Ventures Acquisition Co.",
  },
  {
    cik_str: 1632970,
    ticker: "AHTR",
    company_name: "American Healthcare REIT, Inc.",
  },
  {
    cik_str: 1717452,
    ticker: "ODTC",
    company_name: "Odonate Therapeutics, Inc.",
  },
  {
    cik_str: 1429260,
    ticker: "FBIOP",
    company_name: "Fortress Biotech, Inc.",
  },
  {
    cik_str: 1862068,
    ticker: "RBT",
    company_name: "Rubicon Technologies, Inc.",
  },
  {
    cik_str: 1853825,
    ticker: "TZUP",
    company_name: "THUMZUP MEDIA Corp",
  },
  {
    cik_str: 1515114,
    ticker: "GWIN",
    company_name: "GLORYWIN ENTERTAINMENT GROUP, INC.",
  },
  {
    cik_str: 1861233,
    ticker: "ILLMF",
    company_name: "illumin Holdings Inc.",
  },
  {
    cik_str: 1501078,
    ticker: "OFED",
    company_name: "Oconee Federal Financial Corp.",
  },
  {
    cik_str: 1087456,
    ticker: "UBOH",
    company_name: "UNITED BANCSHARES INC/OH",
  },
  {
    cik_str: 1448815,
    ticker: "RFLFF",
    company_name: "Raffles Education Corp Ltd",
  },
  {
    cik_str: 1787384,
    ticker: "FFBW",
    company_name: "FFBW, Inc. /MD/",
  },
  {
    cik_str: 1650739,
    ticker: "AJIA",
    company_name: "Ajia Innogroup Holdings, Ltd.",
  },
  {
    cik_str: 1389207,
    ticker: "GFASY",
    company_name: "Gafisa S.A.",
  },
  {
    cik_str: 1075706,
    ticker: "CIZN",
    company_name: "CITIZENS HOLDING CO /MS/",
  },
  {
    cik_str: 1816723,
    ticker: "GRFXF",
    company_name: "Graphex Group Ltd",
  },
  {
    cik_str: 1679063,
    ticker: "CSSEP",
    company_name: "Chicken Soup for the Soul Entertainment, Inc.",
  },
  {
    cik_str: 1333172,
    ticker: "NM",
    company_name: "Navios Maritime Holdings Inc.",
  },
  {
    cik_str: 1715433,
    ticker: "LCHD",
    company_name: "Leader Capital Holdings Corp.",
  },
  {
    cik_str: 1705259,
    ticker: "SMTSF",
    company_name: "Sierra Metals Inc.",
  },
  {
    cik_str: 1551040,
    ticker: "EDI",
    company_name: "Virtus Stone Harbor Emerging Markets Total Income Fund",
  },
  {
    cik_str: 1496454,
    ticker: "CHTH",
    company_name: "CNL Healthcare Properties, Inc.",
  },
  {
    cik_str: 1858912,
    ticker: "GDNR",
    company_name: "Gardiner Healthcare Acquisitions Corp.",
  },
  {
    cik_str: 1362898,
    ticker: "AVLNF",
    company_name: "Avalon Advanced Materials Inc.",
  },
  {
    cik_str: 1678105,
    ticker: "CAHO",
    company_name: "Caro Holdings Inc.",
  },
  {
    cik_str: 1463833,
    ticker: "IDWM",
    company_name: "IDW MEDIA HOLDINGS, INC.",
  },
  {
    cik_str: 942149,
    ticker: "OCGSF",
    company_name: "Outcrop Silver & Gold Corp",
  },
  {
    cik_str: 1738699,
    ticker: "WSKEF",
    company_name: "Wisekey International Holding S.A.",
  },
  {
    cik_str: 943034,
    ticker: "AATC",
    company_name: "AUTOSCOPE TECHNOLOGIES CORP",
  },
  {
    cik_str: 1708441,
    ticker: "GEHI",
    company_name: "Mynd.ai, Inc.",
  },
  {
    cik_str: 838875,
    ticker: "WVVIP",
    company_name: "WILLAMETTE VALLEY VINEYARDS INC",
  },
  {
    cik_str: 350403,
    ticker: "PHIG",
    company_name: "PHI Group, Inc./DE",
  },
  {
    cik_str: 1898601,
    ticker: "TAOFF",
    company_name: "IPERIONX Ltd",
  },
  {
    cik_str: 1792597,
    ticker: "CMHF",
    company_name: "Community Heritage Financial, Inc.",
  },
  {
    cik_str: 1723059,
    ticker: "BIOE",
    company_name: "Bio Essence Corp",
  },
  {
    cik_str: 1404644,
    ticker: "NLTX",
    company_name: "Neoleukin Therapeutics, Inc.",
  },
  {
    cik_str: 1175483,
    ticker: "DSHK",
    company_name: "Drive Shack Inc.",
  },
  {
    cik_str: 1505065,
    ticker: "BRSYF",
    company_name: "Brainsway Ltd.",
  },
  {
    cik_str: 1598323,
    ticker: "ACMB",
    company_name: "AGRO CAPITAL MANAGEMENT CORP.",
  },
  {
    cik_str: 1800373,
    ticker: "GWLL",
    company_name: "GOLDENWELL BIOTECH, INC.",
  },
  {
    cik_str: 1734875,
    ticker: "MSVB",
    company_name: "Mid-Southern Bancorp, Inc.",
  },
  {
    cik_str: 1636050,
    ticker: "SIOX",
    company_name: "Sio Gene Therapies Inc.",
  },
  {
    cik_str: 1444874,
    ticker: "TETAA",
    company_name: "Teton Advisors, Inc.",
  },
  {
    cik_str: 1895251,
    ticker: "SGTM",
    company_name: "Sustainable Green Team, Ltd.",
  },
  {
    cik_str: 1415397,
    ticker: "RAPH",
    company_name: "Raphael Pharmaceutical Inc.",
  },
  {
    cik_str: 1786286,
    ticker: "DPRO",
    company_name: "Draganfly Inc.",
  },
  {
    cik_str: 1076691,
    ticker: "OSBK",
    company_name: "OCONEE FINANCIAL CORP",
  },
  {
    cik_str: 1891512,
    ticker: "XTXXF",
    company_name: "Adastra Holdings Ltd.",
  },
  {
    cik_str: 1634394,
    ticker: "RSCI",
    company_name: "Redwood Scientific Technologies, Inc.",
  },
  {
    cik_str: 1130166,
    ticker: "CYCCP",
    company_name: "Cyclacel Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1835385,
    ticker: "MBBC",
    company_name: "Marathon Bancorp, Inc. /MD/",
  },
  {
    cik_str: 1068618,
    ticker: "GVSI",
    company_name: "Good Vibrations Shoes, Inc.",
  },
  {
    cik_str: 1791325,
    ticker: "FIGI",
    company_name: "Freedom Internet Group Inc.",
  },
  {
    cik_str: 1568628,
    ticker: "BQST",
    company_name: "Bioquest Corp",
  },
  {
    cik_str: 1737270,
    ticker: "NEXCF",
    company_name: "Nextech3D.AI Corp.",
  },
  {
    cik_str: 1042046,
    ticker: "AFGC",
    company_name: "AMERICAN FINANCIAL GROUP INC",
  },
  {
    cik_str: 1751700,
    ticker: "TBBA",
    company_name: "TEB Bancorp, Inc.",
  },
  {
    cik_str: 1002135,
    ticker: "WSTL",
    company_name: "WESTELL TECHNOLOGIES INC",
  },
  {
    cik_str: 1762359,
    ticker: "ACRDF",
    company_name: "Acreage Holdings, Inc.",
  },
  {
    cik_str: 1922858,
    ticker: "EFHT",
    company_name: "ECD Automotive Design, Inc.",
  },
  {
    cik_str: 910679,
    ticker: "WVFC",
    company_name: "WVS FINANCIAL CORP",
  },
  {
    cik_str: 733337,
    ticker: "PWCO",
    company_name: "PwrCor, Inc.",
  },
  {
    cik_str: 1444874,
    ticker: "TETAB",
    company_name: "Teton Advisors, Inc.",
  },
  {
    cik_str: 1897971,
    ticker: "GLACU",
    company_name: "Global Lights Acquisition Corp",
  },
  {
    cik_str: 1882607,
    ticker: "ALPSQ",
    company_name: "ALPINE SUMMIT ENERGY PARTNERS, INC.",
  },
  {
    cik_str: 1158399,
    ticker: "BRCNF",
    company_name: "Burcon NutraScience Corp",
  },
  {
    cik_str: 50292,
    ticker: "IEHC",
    company_name: "IEH Corp",
  },
  {
    cik_str: 1438943,
    ticker: "MLCT",
    company_name: "RANGE IMPACT, INC.",
  },
  {
    cik_str: 1931691,
    ticker: "MOBV",
    company_name: "Mobiv Acquisition Corp",
  },
  {
    cik_str: 1531266,
    ticker: "ELIO",
    company_name: "Elio Motors, Inc.",
  },
  {
    cik_str: 926423,
    ticker: "MINDP",
    company_name: "MIND TECHNOLOGY, INC",
  },
  {
    cik_str: 1470129,
    ticker: "CATG",
    company_name: "Capstone Technologies Group Inc.",
  },
  {
    cik_str: 1731727,
    ticker: "LMPX",
    company_name: "LMP Automotive Holdings, Inc.",
  },
  {
    cik_str: 727346,
    ticker: "GBCS",
    company_name: "SELECTIS HEALTH, INC.",
  },
  {
    cik_str: 1131343,
    ticker: "PRNAF",
    company_name: "ALTERITY THERAPEUTICS LTD",
  },
  {
    cik_str: 1439237,
    ticker: "QOEG",
    company_name: "Quality Online Education Group Inc.",
  },
  {
    cik_str: 1645155,
    ticker: "WBSR",
    company_name: "Webstar Technology Group Inc.",
  },
  {
    cik_str: 1527541,
    ticker: "WHLRD",
    company_name: "Wheeler Real Estate Investment Trust, Inc.",
  },
  {
    cik_str: 1178660,
    ticker: "CSSI",
    company_name: "COSTAS INC",
  },
  {
    cik_str: 319016,
    ticker: "FZMD",
    company_name: "Fuse Medical, Inc.",
  },
  {
    cik_str: 1019671,
    ticker: "SEAC",
    company_name: "SEACHANGE INTERNATIONAL INC",
  },
  {
    cik_str: 1769725,
    ticker: "ERKH",
    company_name: "Eureka Homestead Bancorp, Inc.",
  },
  {
    cik_str: 1827855,
    ticker: "MCLE",
    company_name: "Medicale Corp.",
  },
  {
    cik_str: 846546,
    ticker: "BNSOF",
    company_name: "BONSO ELECTRONICS INTERNATIONAL INC",
  },
  {
    cik_str: 1376986,
    ticker: "TVC",
    company_name: "Tennessee Valley Authority",
  },
  {
    cik_str: 1376986,
    ticker: "TVE",
    company_name: "Tennessee Valley Authority",
  },
  {
    cik_str: 1617765,
    ticker: "LNDZF",
    company_name: "Salona Global Medical Device Corp",
  },
  {
    cik_str: 1550453,
    ticker: "TRLI",
    company_name: "TriLinc Global Impact Fund LLC",
  },
  {
    cik_str: 1096950,
    ticker: "ACTX",
    company_name: "ADVANCED CONTAINER TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1949766,
    ticker: "ODDAF",
    company_name: "Odd Burger Corp",
  },
  {
    cik_str: 1734768,
    ticker: "IMVIQ",
    company_name: "IMV Inc.",
  },
  {
    cik_str: 1415813,
    ticker: "ARMC",
    company_name: "Un Monde International Ltd.",
  },
  {
    cik_str: 1312109,
    ticker: "SICP",
    company_name: "Silvergate Capital Corp",
  },
  {
    cik_str: 1816554,
    ticker: "EVTK",
    company_name: "EVENTIKO INC.",
  },
  {
    cik_str: 1807387,
    ticker: "BCCEF",
    company_name: "BacTech Environmental Corp",
  },
  {
    cik_str: 1377167,
    ticker: "FGCO",
    company_name: "Financial Gravity Companies, Inc.",
  },
  {
    cik_str: 1052054,
    ticker: "EVOL",
    company_name: "Symbolic Logic, Inc.",
  },
  {
    cik_str: 1763925,
    ticker: "CJAX",
    company_name: "CoJax Oil & Gas Corp",
  },
  {
    cik_str: 1561180,
    ticker: "PQEFF",
    company_name: "PETROTEQ ENERGY INC.",
  },
  {
    cik_str: 946112,
    ticker: "CDSG",
    company_name: "China Dongsheng International, Inc.",
  },
  {
    cik_str: 1435812,
    ticker: "ARPC",
    company_name: "Arem Pacific Corp",
  },
  {
    cik_str: 1301713,
    ticker: "SHVLF",
    company_name: "STARCORE INTERNATIONAL MINES LTD.",
  },
  {
    cik_str: 1318482,
    ticker: "SGLDF",
    company_name: "KIDOZ INC.",
  },
  {
    cik_str: 1446371,
    ticker: "SGIC",
    company_name: "Strategic Realty Trust, Inc.",
  },
  {
    cik_str: 840551,
    ticker: "TMDIF",
    company_name: "TITAN MEDICAL INC",
  },
  {
    cik_str: 1551206,
    ticker: "HGLD",
    company_name: "Patagonia Gold Corp.",
  },
  {
    cik_str: 926844,
    ticker: "FBDS",
    company_name: "Fuss Brands Corp.",
  },
  {
    cik_str: 922521,
    ticker: "FALC",
    company_name: "FALCONSTOR SOFTWARE INC",
  },
  {
    cik_str: 1609139,
    ticker: "INND",
    company_name: "INNERSCOPE HEARING TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1771755,
    ticker: "SWISF",
    company_name: "Sekur Private Data Ltd.",
  },
  {
    cik_str: 1723517,
    ticker: "UCASU",
    company_name: "UC Asset LP",
  },
  {
    cik_str: 924095,
    ticker: "MVCO",
    company_name: "Metavesco, Inc.",
  },
  {
    cik_str: 1021435,
    ticker: "HPTO",
    company_name: "hopTo Inc.",
  },
  {
    cik_str: 1072772,
    ticker: "TMBXF",
    company_name: "TOMBSTONE EXPLORATION CORP",
  },
  {
    cik_str: 1294404,
    ticker: "SFUNY",
    company_name: "Fang Holdings Ltd",
  },
  {
    cik_str: 1637890,
    ticker: "CLYYF",
    company_name: "Celyad Oncology SA",
  },
  {
    cik_str: 1588014,
    ticker: "ADMQ",
    company_name: "ADM ENDEAVORS, INC.",
  },
  {
    cik_str: 1591565,
    ticker: "BLYQ",
    company_name: "BALLY, CORP.",
  },
  {
    cik_str: 1788717,
    ticker: "FXLV",
    company_name: "F45 Training Holdings Inc.",
  },
  {
    cik_str: 1770141,
    ticker: "UPH",
    company_name: "UpHealth, Inc.",
  },
  {
    cik_str: 1067873,
    ticker: "IPTK",
    company_name: "AS-IP TECH INC",
  },
  {
    cik_str: 1868079,
    ticker: "PMEDF",
    company_name: "Predictmedix Inc.",
  },
  {
    cik_str: 1358099,
    ticker: "UCIX",
    company_name: "Umbra Companies, Inc.",
  },
  {
    cik_str: 1610682,
    ticker: "USDP",
    company_name: "USD Partners LP",
  },
  {
    cik_str: 1487198,
    ticker: "ASPU",
    company_name: "ASPEN GROUP, INC.",
  },
  {
    cik_str: 1804469,
    ticker: "GRDAF",
    company_name: "Guardforce AI Co., Ltd.",
  },
  {
    cik_str: 1442853,
    ticker: "IGEX",
    company_name: "Indo Global Exchange(s) Pte, Ltd.",
  },
  {
    cik_str: 1395445,
    ticker: "PRPI",
    company_name: "PERPETUAL INDUSTRIES INC.",
  },
  {
    cik_str: 1435064,
    ticker: "CETXP",
    company_name: "CEMTREX INC",
  },
  {
    cik_str: 1263011,
    ticker: "EXNRF",
    company_name: "EXCELLON RESOURCES INC",
  },
  {
    cik_str: 1607679,
    ticker: "CANQF",
    company_name: "CanaQuest Medical Corp.",
  },
  {
    cik_str: 1410172,
    ticker: "RBCN",
    company_name: "Rubicon Technology, Inc.",
  },
  {
    cik_str: 1631463,
    ticker: "BRLL",
    company_name: "Barrel Energy Inc.",
  },
  {
    cik_str: 1385799,
    ticker: "ABMT",
    company_name: "Advanced Biomedical Technologies Inc.",
  },
  {
    cik_str: 1078037,
    ticker: "REMI",
    company_name: "REMEDENT, INC.",
  },
  {
    cik_str: 945828,
    ticker: "AMTY",
    company_name: "AMERITYRE CORP",
  },
  {
    cik_str: 1828098,
    ticker: "MTTCF",
    company_name: "Steakholder Foods Ltd.",
  },
  {
    cik_str: 1776048,
    ticker: "AMMX",
    company_name: "Ameramex International Inc",
  },
  {
    cik_str: 1458631,
    ticker: "HALB",
    company_name: "Halberd Corp",
  },
  {
    cik_str: 42050,
    ticker: "WSRC",
    company_name: "WESTERN SIERRA RESOURCE Corp",
  },
  {
    cik_str: 1532981,
    ticker: "EMWPF",
    company_name: "Eros Media World PLC",
  },
  {
    cik_str: 1475430,
    ticker: "JSHG",
    company_name: "JOSHUA GOLD RESOURCES INC",
  },
  {
    cik_str: 1021096,
    ticker: "TRKA",
    company_name: "Troika Media Group, Inc.",
  },
  {
    cik_str: 1177167,
    ticker: "LMDCF",
    company_name: "LINGO MEDIA CORP",
  },
  {
    cik_str: 1109504,
    ticker: "EPWCF",
    company_name: "Empower Clinics Inc.",
  },
  {
    cik_str: 1078799,
    ticker: "MCOA",
    company_name: "Marijuana Co of America, Inc.",
  },
  {
    cik_str: 919175,
    ticker: "SGMD",
    company_name: "Sugarmade, Inc.",
  },
  {
    cik_str: 1593034,
    ticker: "ENDPQ",
    company_name: "Endo International plc",
  },
  {
    cik_str: 1041633,
    ticker: "FTRS",
    company_name: "Futuris Co",
  },
  {
    cik_str: 1076262,
    ticker: "GSPT",
    company_name: "Golden Star Enterprises Ltd.",
  },
  {
    cik_str: 1509228,
    ticker: "SDTTU",
    company_name: "SandRidge Mississippian Trust I",
  },
  {
    cik_str: 1495584,
    ticker: "SVVC",
    company_name: "Firsthand Technology Value Fund, Inc.",
  },
  {
    cik_str: 1623360,
    ticker: "MRGE",
    company_name: "Mirage Energy Corp",
  },
  {
    cik_str: 803097,
    ticker: "SPQS",
    company_name: "SportsQuest, Inc.",
  },
  {
    cik_str: 1709401,
    ticker: "RUBY",
    company_name: "Rubius Therapeutics, Inc.",
  },
  {
    cik_str: 1402371,
    ticker: "ELRA",
    company_name: "ELRAY RESOURCES, INC.",
  },
  {
    cik_str: 1205181,
    ticker: "GPFT",
    company_name: "Grapefruit USA, Inc",
  },
  {
    cik_str: 1420108,
    ticker: "GLUC",
    company_name: "Glucose Health, Inc.",
  },
  {
    cik_str: 1435617,
    ticker: "PWDY",
    company_name: "POWERDYNE INTERNATIONAL, INC.",
  },
  {
    cik_str: 1386049,
    ticker: "BYOC",
    company_name: "Beyond Commerce, Inc.",
  },
  {
    cik_str: 1779303,
    ticker: "DCSX",
    company_name: "Direct Communication Solutions, Inc.",
  },
  {
    cik_str: 1550222,
    ticker: "MIKP",
    company_name: "Mike the Pike Productions, Inc.",
  },
  {
    cik_str: 1383701,
    ticker: "HSTO",
    company_name: "Histogen Inc.",
  },
  {
    cik_str: 822411,
    ticker: "IMUC",
    company_name: "EOM Pharmaceutical Holdings, Inc.",
  },
  {
    cik_str: 1492448,
    ticker: "GRNF",
    company_name: "GRN Holding Corp",
  },
  {
    cik_str: 1002771,
    ticker: "IGPK",
    company_name: "Integrated Cannabis Solutions, Inc.",
  },
  {
    cik_str: 1527541,
    ticker: "WHLRP",
    company_name: "Wheeler Real Estate Investment Trust, Inc.",
  },
  {
    cik_str: 1682265,
    ticker: "RELT",
    company_name: "Reliant Holdings, Inc.",
  },
  {
    cik_str: 1000298,
    ticker: "IMPM",
    company_name: "IMPAC MORTGAGE HOLDINGS INC",
  },
  {
    cik_str: 1000683,
    ticker: "BDRL",
    company_name: "BLONDER TONGUE LABORATORIES INC",
  },
  {
    cik_str: 1685237,
    ticker: "TMRR",
    company_name: "TEMIR CORP.",
  },
  {
    cik_str: 1313938,
    ticker: "SNNC",
    company_name: "Sibannac, Inc.",
  },
  {
    cik_str: 1119897,
    ticker: "PCTL",
    company_name: "PCT LTD",
  },
  {
    cik_str: 1351051,
    ticker: "GENN",
    company_name: "Genesis Healthcare, Inc.",
  },
  {
    cik_str: 1413659,
    ticker: "MSCH",
    company_name: "MainStreetChamber Holdings, Inc.",
  },
  {
    cik_str: 1349929,
    ticker: "VYNT",
    company_name: "Vyant Bio, Inc.",
  },
  {
    cik_str: 1640251,
    ticker: "WINSF",
    company_name: "Wins Finance Holdings Inc.",
  },
  {
    cik_str: 1094084,
    ticker: "TKOI",
    company_name: "TELKONET INC",
  },
  {
    cik_str: 1898643,
    ticker: "MOBBW",
    company_name: "Mobilicom Ltd",
  },
  {
    cik_str: 1645260,
    ticker: "TOMDF",
    company_name: "TODOS MEDICAL LTD.",
  },
  {
    cik_str: 1642178,
    ticker: "AGNPF",
    company_name: "Algernon Pharmaceuticals Inc.",
  },
  {
    cik_str: 1591615,
    ticker: "VXIT",
    company_name: "VirExit Technologies, Inc.",
  },
  {
    cik_str: 1802546,
    ticker: "KGKG",
    company_name: "KONA GOLD BEVERAGE, INC.",
  },
  {
    cik_str: 6494,
    ticker: "ANDR",
    company_name: "ANDREA ELECTRONICS CORP",
  },
  {
    cik_str: 1004724,
    ticker: "RHE-PA",
    company_name: "REGIONAL HEALTH PROPERTIES, INC",
  },
  {
    cik_str: 1756704,
    ticker: "SIRC",
    company_name: "SOLAR INTEGRATED ROOFING CORP.",
  },
  {
    cik_str: 822655,
    ticker: "LEAS",
    company_name: "Strategic Asset Leasing, Inc.",
  },
  {
    cik_str: 1516887,
    ticker: "WCUI",
    company_name: "Wellness Center USA, Inc.",
  },
  {
    cik_str: 829325,
    ticker: "SPYR",
    company_name: "SPYR, Inc.",
  },
  {
    cik_str: 842722,
    ticker: "DROP",
    company_name: "Fuse Science, Inc.",
  },
  {
    cik_str: 1370496,
    ticker: "MLLOF",
    company_name: "Medallion Resources Ltd",
  },
  {
    cik_str: 1697587,
    ticker: "INSD",
    company_name: "IDP Holdings (USA) Corp.",
  },
  {
    cik_str: 96699,
    ticker: "TCCO",
    company_name: "TECHNICAL COMMUNICATIONS CORP",
  },
  {
    cik_str: 1653606,
    ticker: "EHVVF",
    company_name: "Ehave, Inc.",
  },
  {
    cik_str: 1671818,
    ticker: "ONCR",
    company_name: "Oncorus, Inc.",
  },
  {
    cik_str: 879682,
    ticker: "VIVE",
    company_name: "VIVEVE MEDICAL, INC.",
  },
  {
    cik_str: 1498372,
    ticker: "IWAL",
    company_name: "iWallet Corp",
  },
  {
    cik_str: 1471302,
    ticker: "KMGH",
    company_name: "Kemiao Garment Holding Group",
  },
  {
    cik_str: 1429859,
    ticker: "CBTC",
    company_name: "XTRA Bitcoin Inc.",
  },
  {
    cik_str: 1379245,
    ticker: "EBWK",
    company_name: "ENIGMA-BULWARK, LTD",
  },
  {
    cik_str: 1540615,
    ticker: "PUGE",
    company_name: "PUGET TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1794311,
    ticker: "BLEG",
    company_name: "Branded Legacy, Inc.",
  },
  {
    cik_str: 1458023,
    ticker: "FKST",
    company_name: "Flowerkist Skin Care & Cosmetics, Inc.",
  },
  {
    cik_str: 1488501,
    ticker: "MSPC",
    company_name: "METROSPACES, INC.",
  },
  {
    cik_str: 1435181,
    ticker: "PHBI",
    company_name: "Pharmagreen Biotech Inc.",
  },
  {
    cik_str: 1568875,
    ticker: "ZNRG",
    company_name: "Znergy, Inc.",
  },
  {
    cik_str: 225211,
    ticker: "TGHI",
    company_name: "Touchpoint Group Holdings Inc.",
  },
  {
    cik_str: 1413488,
    ticker: "CBGL",
    company_name: "CANNABIS GLOBAL, INC.",
  },
  {
    cik_str: 1325950,
    ticker: "MOCI",
    company_name: "Energy Holdings, Inc.",
  },
  {
    cik_str: 1983389,
    ticker: "GYGC",
    company_name: "Guyana Gold Corp",
  },
  {
    cik_str: 1839730,
    ticker: "SLHGF",
    company_name: "Skylight Health Group Inc.",
  },
  {
    cik_str: 731245,
    ticker: "PDNLB",
    company_name: "PRESIDENTIAL REALTY CORP/DE/",
  },
  {
    cik_str: 1108248,
    ticker: "KNOS",
    company_name: "KRONOS ADVANCED TECHNOLOGIES INC",
  },
  {
    cik_str: 1503458,
    ticker: "FTXP",
    company_name: "FOOTHILLS EXPLORATION, INC.",
  },
  {
    cik_str: 1498291,
    ticker: "DCAC",
    company_name: "Daniels Corporate Advisory Company, Inc.",
  },
  {
    cik_str: 1300938,
    ticker: "ABCE",
    company_name: "ABCO Energy, Inc.",
  },
  {
    cik_str: 1496671,
    ticker: "CALA",
    company_name: "Calithera Biosciences, Inc.",
  },
  {
    cik_str: 1041588,
    ticker: "ACCR",
    company_name: "Access-Power & Co., Inc.",
  },
  {
    cik_str: 1317880,
    ticker: "PLPL",
    company_name: "Plandai Biotechnology, Inc.",
  },
  {
    cik_str: 1300524,
    ticker: "AMIH",
    company_name: "AMERICAN INTERNATIONAL HOLDINGS CORP.",
  },
  {
    cik_str: 1584831,
    ticker: "OXBRW",
    company_name: "OXBRIDGE RE HOLDINGS Ltd",
  },
  {
    cik_str: 1433551,
    ticker: "SGLA",
    company_name: "Sino Green Land Corp.",
  },
  {
    cik_str: 1787412,
    ticker: "WBBA",
    company_name: "WB Burgers Asia, Inc.",
  },
  {
    cik_str: 1604930,
    ticker: "LCLP",
    company_name: "Life Clips, Inc.",
  },
  {
    cik_str: 1415306,
    ticker: "PSRU",
    company_name: "Valiant Eagle, Inc.",
  },
  {
    cik_str: 1525852,
    ticker: "BTZI",
    company_name: "BOTS, Inc./PR",
  },
  {
    cik_str: 1407591,
    ticker: "MSTO",
    company_name: "Masterbeat Corp",
  },
  {
    cik_str: 1621221,
    ticker: "ARTLW",
    company_name: "ARTELO BIOSCIENCES, INC.",
  },
  {
    cik_str: 1653821,
    ticker: "CENBF",
    company_name: "CEN BIOTECH INC",
  },
  {
    cik_str: 1626556,
    ticker: "AMCT",
    company_name: "AMERICAN EDUCATION CENTER, INC.",
  },
  {
    cik_str: 715788,
    ticker: "EVIO",
    company_name: "EVIO, INC.",
  },
  {
    cik_str: 1863116,
    ticker: "AERS",
    company_name: "Aerius International Inc.",
  },
  {
    cik_str: 1553264,
    ticker: "APSI",
    company_name: "AQUA POWER SYSTEMS INC.",
  },
  {
    cik_str: 1305323,
    ticker: "ZVOI",
    company_name: "Zovio Inc",
  },
  {
    cik_str: 1144169,
    ticker: "ECOX",
    company_name: "ECO INNOVATION GROUP, INC.",
  },
  {
    cik_str: 1569340,
    ticker: "CLCS",
    company_name: "Cell Source, Inc.",
  },
  {
    cik_str: 1715032,
    ticker: "WTII",
    company_name: "Water Technologies International,Inc.",
  },
  {
    cik_str: 1286648,
    ticker: "GZIC",
    company_name: "GZ6G Technologies Corp.",
  },
  {
    cik_str: 1523486,
    ticker: "MJDS",
    company_name: "MOJO DATA SOLUTIONS, INC.",
  },
  {
    cik_str: 1351573,
    ticker: "PHCG",
    company_name: "Pure Harvest Corporate Group, Inc.",
  },
  {
    cik_str: 1368637,
    ticker: "BBLS",
    company_name: "Petrolia Energy Corp",
  },
  {
    cik_str: 1795851,
    ticker: "FAVO",
    company_name: "Favo Capital, Inc.",
  },
  {
    cik_str: 941685,
    ticker: "IWSY",
    company_name: "IMAGEWARE SYSTEMS INC",
  },
  {
    cik_str: 1837774,
    ticker: "GIPL",
    company_name: "Global Innovative Platforms Inc.",
  },
  {
    cik_str: 1566610,
    ticker: "VERBW",
    company_name: "Verb Technology Company, Inc.",
  },
  {
    cik_str: 1304741,
    ticker: "CNGT",
    company_name: "Cannagistics Inc.",
  },
  {
    cik_str: 1472847,
    ticker: "HVCW",
    company_name: "HARRISON VICKERS & WATERMAN INC",
  },
  {
    cik_str: 1563463,
    ticker: "NLBS",
    company_name: "NUTRALIFE BIOSCIENCES, INC",
  },
  {
    cik_str: 1778805,
    ticker: "TRNFQ",
    company_name: "Taronis Fuels, Inc.",
  },
  {
    cik_str: 922612,
    ticker: "SMIT",
    company_name: "SCHMITT INDUSTRIES INC",
  },
  {
    cik_str: 1468679,
    ticker: "CRYO",
    company_name: "American CryoStem Corp",
  },
  {
    cik_str: 1114898,
    ticker: "WNBD",
    company_name: "Winning Brands Corp",
  },
  {
    cik_str: 1652842,
    ticker: "URYL",
    company_name: "TrueNorth Quantum Inc.",
  },
  {
    cik_str: 1527102,
    ticker: "EGSE",
    company_name: "Evergreen Sustainable Enterprises, Inc.",
  },
  {
    cik_str: 1420368,
    ticker: "DLTI",
    company_name: "DLT Resolution Inc.",
  },
  {
    cik_str: 1635748,
    ticker: "ZPAS",
    company_name: "Zoompass Holdings, Inc.",
  },
  {
    cik_str: 819926,
    ticker: "SEII",
    company_name: "SHARING ECONOMY INTERNATIONAL INC.",
  },
  {
    cik_str: 1394638,
    ticker: "DWAY",
    company_name: "Driveitaway Holdings, Inc.",
  },
  {
    cik_str: 825322,
    ticker: "XDSL",
    company_name: "MPHASE TECHNOLOGIES, INC.",
  },
  {
    cik_str: 889353,
    ticker: "JMTM",
    company_name: "James Maritime Holdings Inc.",
  },
  {
    cik_str: 1558465,
    ticker: "PGAS",
    company_name: "PETROGRESS, INC",
  },
  {
    cik_str: 1590383,
    ticker: "RENO",
    company_name: "RENOVARE ENVIRONMENTAL, INC.",
  },
  {
    cik_str: 1819876,
    ticker: "TRIRF",
    company_name: "Triterras, Inc.",
  },
  {
    cik_str: 1384135,
    ticker: "LBTI",
    company_name: "Lithium & Boron Technology, Inc.",
  },
  {
    cik_str: 1383637,
    ticker: "NBCO",
    company_name: "Neon Bloom, Inc.",
  },
  {
    cik_str: 1463459,
    ticker: "EMGE",
    company_name: "Emergent Health Corp.",
  },
  {
    cik_str: 707511,
    ticker: "RGRX",
    company_name: "REGENERX BIOPHARMACEUTICALS INC",
  },
  {
    cik_str: 1274032,
    ticker: "SIMPQ",
    company_name: "Simply, Inc.",
  },
  {
    cik_str: 1443388,
    ticker: "GRYN",
    company_name: "GREEN HYGIENICS HOLDINGS INC.",
  },
  {
    cik_str: 1863976,
    ticker: "AQUI",
    company_name: "Aquarius I Acquisition Corp.",
  },
  {
    cik_str: 1106861,
    ticker: "FZRO",
    company_name: "FLASHZERO CORP.",
  },
  {
    cik_str: 1550020,
    ticker: "EWLL",
    company_name: "eWELLNESS HEALTHCARE Corp",
  },
  {
    cik_str: 869531,
    ticker: "ADGO",
    company_name: "Advantego Corp",
  },
  {
    cik_str: 1108630,
    ticker: "LIVC",
    company_name: "Live Current Media Inc.",
  },
  {
    cik_str: 1338672,
    ticker: "SPBV",
    company_name: "Glink Arts Global Group, Inc.",
  },
  {
    cik_str: 1284450,
    ticker: "CHGI",
    company_name: "China Carbon Graphite Group, Inc.",
  },
  {
    cik_str: 1622231,
    ticker: "BTIM",
    company_name: "BOATIM INC.",
  },
  {
    cik_str: 1456802,
    ticker: "CCOB",
    company_name: "Century Cobalt Corp.",
  },
  {
    cik_str: 1659183,
    ticker: "NDVNQ",
    company_name: "nDivision Inc.",
  },
  {
    cik_str: 1813658,
    ticker: "TMPO",
    company_name: "Tempo Automation Holdings, Inc.",
  },
  {
    cik_str: 1142801,
    ticker: "AMSU",
    company_name: "AMANASU ENVIRONMENT CORP",
  },
  {
    cik_str: 1751299,
    ticker: "KLDO",
    company_name: "Kaleido Biosciences, Inc.",
  },
  {
    cik_str: 1532595,
    ticker: "SINC",
    company_name: "Sincerity Applied Materials Holdings Corp.",
  },
  {
    cik_str: 1353499,
    ticker: "MAXD",
    company_name: "Max Sound Corp",
  },
  {
    cik_str: 1119643,
    ticker: "NPHC",
    company_name: "NUTRA PHARMA CORP",
  },
  {
    cik_str: 1267919,
    ticker: "SDVI",
    company_name: "SIGNATURE DEVICES INC",
  },
  {
    cik_str: 1805024,
    ticker: "AMHG",
    company_name: "Amergent Hospitality Group Inc.",
  },
  {
    cik_str: 1108046,
    ticker: "AFPW",
    company_name: "AlumiFuel Power Corp",
  },
  {
    cik_str: 1084577,
    ticker: "CYRNQ",
    company_name: "CYREN Ltd.",
  },
  {
    cik_str: 1414043,
    ticker: "FDBL",
    company_name: "Friendable, Inc.",
  },
  {
    cik_str: 1358656,
    ticker: "MILC",
    company_name: "Millennium Sustainable Ventures Corp.",
  },
  {
    cik_str: 1606457,
    ticker: "ATTOF",
    company_name: "Atento S.A.",
  },
  {
    cik_str: 1734902,
    ticker: "WEIDY",
    company_name: "Weidai Ltd.",
  },
  {
    cik_str: 1345865,
    ticker: "BABL",
    company_name: "Buildablock Corp.",
  },
  {
    cik_str: 1430523,
    ticker: "VRUS",
    company_name: "VERUS INTERNATIONAL, INC.",
  },
  {
    cik_str: 1165006,
    ticker: "SLNX",
    company_name: "Solanbridge Group, Inc.",
  },
  {
    cik_str: 1652866,
    ticker: "ABILF",
    company_name: "Ability Inc.",
  },
  {
    cik_str: 1280396,
    ticker: "VTNA",
    company_name: "VetaNova Inc.",
  },
  {
    cik_str: 1368620,
    ticker: "CNNA",
    company_name: "Cann American Corp.",
  },
  {
    cik_str: 1142790,
    ticker: "TAUG",
    company_name: "TAURIGA SCIENCES, INC.",
  },
  {
    cik_str: 1081938,
    ticker: "CPMD",
    company_name: "CANNAPHARMARX, INC.",
  },
  {
    cik_str: 1554906,
    ticker: "CBCA",
    company_name: "Crown Baus Capital Corp.",
  },
  {
    cik_str: 1598308,
    ticker: "GWHP",
    company_name: "Global Wholehealth Partners Corp",
  },
  {
    cik_str: 1624658,
    ticker: "ALNAQ",
    company_name: "Allena Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1493712,
    ticker: "CMXC",
    company_name: "Cell MedX Corp.",
  },
  {
    cik_str: 1713832,
    ticker: "HYREQ",
    company_name: "HC LIQUIDATING, INC.",
  },
  {
    cik_str: 1641640,
    ticker: "NBRVF",
    company_name: "Nabriva Therapeutics plc",
  },
  {
    cik_str: 842183,
    ticker: "RPT-PD",
    company_name: "RPT Realty",
  },
  {
    cik_str: 70858,
    ticker: "BAC-PL",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "BAC-PM",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "BAC-PN",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "BAC-PO",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "BAC-PP",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "MER-PK",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 92122,
    ticker: "SOJD",
    company_name: "SOUTHERN CO",
  },
  {
    cik_str: 92122,
    ticker: "SOJE",
    company_name: "SOUTHERN CO",
  },
  {
    cik_str: 92108,
    ticker: "SOCGM",
    company_name: "SOUTHERN CALIFORNIA GAS CO",
  },
  {
    cik_str: 203596,
    ticker: "WSBCP",
    company_name: "WESBANCO INC",
  },
  {
    cik_str: 107815,
    ticker: "WELPM",
    company_name: "WISCONSIN ELECTRIC POWER CO",
  },
  {
    cik_str: 707179,
    ticker: "ONBPO",
    company_name: "OLD NATIONAL BANCORP /IN/",
  },
  {
    cik_str: 707179,
    ticker: "ONBPP",
    company_name: "OLD NATIONAL BANCORP /IN/",
  },
  {
    cik_str: 316709,
    ticker: "SCHW-PJ",
    company_name: "SCHWAB CHARLES CORP",
  },
  {
    cik_str: 46195,
    ticker: "BOH-PA",
    company_name: "BANK OF HAWAII CORP",
  },
  {
    cik_str: 36104,
    ticker: "USB-PS",
    company_name: "US BANCORP \\DE\\",
  },
  {
    cik_str: 36966,
    ticker: "FHN-PB",
    company_name: "FIRST HORIZON CORP",
  },
  {
    cik_str: 36966,
    ticker: "FHN-PC",
    company_name: "FIRST HORIZON CORP",
  },
  {
    cik_str: 36104,
    ticker: "USB-PQ",
    company_name: "US BANCORP \\DE\\",
  },
  {
    cik_str: 36104,
    ticker: "USB-PR",
    company_name: "US BANCORP \\DE\\",
  },
  {
    cik_str: 36966,
    ticker: "FHN-PD",
    company_name: "FIRST HORIZON CORP",
  },
  {
    cik_str: 36966,
    ticker: "FHN-PE",
    company_name: "FIRST HORIZON CORP",
  },
  {
    cik_str: 36966,
    ticker: "FHN-PF",
    company_name: "FIRST HORIZON CORP",
  },
  {
    cik_str: 70858,
    ticker: "BAC-PQ",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "BAC-PS",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 70858,
    ticker: "BACRP",
    company_name: "BANK OF AMERICA CORP /DE/",
  },
  {
    cik_str: 13372,
    ticker: "NSARO",
    company_name: "NSTAR ELECTRIC CO",
  },
  {
    cik_str: 13372,
    ticker: "NSARP",
    company_name: "NSTAR ELECTRIC CO",
  },
  {
    cik_str: 28917,
    ticker: "DDT",
    company_name: "DILLARD'S, INC.",
  },
  {
    cik_str: 861967,
    ticker: "WOLTF",
    company_name: "WOLTERS KLUWER N V /FI",
  },
  {
    cik_str: 862651,
    ticker: "INVUP",
    company_name: "Investview, Inc.",
  },
  {
    cik_str: 798359,
    ticker: "CSR-PC",
    company_name: "CENTERSPACE",
  },
  {
    cik_str: 719739,
    ticker: "SIVPQ",
    company_name: "SVB FINANCIAL GROUP",
  },
  {
    cik_str: 720672,
    ticker: "SFB",
    company_name: "STIFEL FINANCIAL CORP",
  },
  {
    cik_str: 720672,
    ticker: "SF-PC",
    company_name: "STIFEL FINANCIAL CORP",
  },
  {
    cik_str: 720672,
    ticker: "SF-PD",
    company_name: "STIFEL FINANCIAL CORP",
  },
  {
    cik_str: 732717,
    ticker: "TBC",
    company_name: "AT&T INC.",
  },
  {
    cik_str: 732717,
    ticker: "T-PA",
    company_name: "AT&T INC.",
  },
  {
    cik_str: 732717,
    ticker: "T-PC",
    company_name: "AT&T INC.",
  },
  {
    cik_str: 771992,
    ticker: "PAASF",
    company_name: "PAN AMERICAN SILVER CORP",
  },
  {
    cik_str: 46207,
    ticker: "HAWLI",
    company_name: "HAWAIIAN ELECTRIC CO INC",
  },
  {
    cik_str: 46207,
    ticker: "HAWLL",
    company_name: "HAWAIIAN ELECTRIC CO INC",
  },
  {
    cik_str: 46207,
    ticker: "HAWLM",
    company_name: "HAWAIIAN ELECTRIC CO INC",
  },
  {
    cik_str: 46207,
    ticker: "HAWEM",
    company_name: "HAWAIIAN ELECTRIC CO INC",
  },
  {
    cik_str: 72573,
    ticker: "MOVAA",
    company_name: "MOVADO GROUP INC",
  },
  {
    cik_str: 66570,
    ticker: "MNESP",
    company_name: "MSA Safety Inc",
  },
  {
    cik_str: 58411,
    ticker: "RONN",
    company_name: "Lee Pharmaceuticals, Inc.",
  },
  {
    cik_str: 51434,
    ticker: "INPAP",
    company_name: "INTERNATIONAL PAPER CO /NEW/",
  },
  {
    cik_str: 811156,
    ticker: "CMSC",
    company_name: "CMS ENERGY CORP",
  },
  {
    cik_str: 811156,
    ticker: "CMSD",
    company_name: "CMS ENERGY CORP",
  },
  {
    cik_str: 811156,
    ticker: "CMS-PC",
    company_name: "CMS ENERGY CORP",
  },
  {
    cik_str: 832489,
    ticker: "GOVXW",
    company_name: "GeoVax Labs, Inc.",
  },
  {
    cik_str: 59558,
    ticker: "LNC-PD",
    company_name: "LINCOLN NATIONAL CORP",
  },
  {
    cik_str: 61398,
    ticker: "TELZ",
    company_name: "TELLURIAN INC. /DE/",
  },
  {
    cik_str: 86759,
    ticker: "SFEF",
    company_name: "SANTA FE FINANCIAL CORP",
  },
  {
    cik_str: 18654,
    ticker: "AILIO",
    company_name: "Ameren Illinois Co",
  },
  {
    cik_str: 18654,
    ticker: "AILIP",
    company_name: "Ameren Illinois Co",
  },
  {
    cik_str: 14272,
    ticker: "CELG-RI",
    company_name: "BRISTOL MYERS SQUIBB CO",
  },
  {
    cik_str: 17313,
    ticker: "CSWCZ",
    company_name: "CAPITAL SOUTHWEST CORP",
  },
  {
    cik_str: 823277,
    ticker: "CHSCL",
    company_name: "CHS INC",
  },
  {
    cik_str: 823277,
    ticker: "CHSCM",
    company_name: "CHS INC",
  },
  {
    cik_str: 823277,
    ticker: "CHSCN",
    company_name: "CHS INC",
  },
  {
    cik_str: 823277,
    ticker: "CHSCO",
    company_name: "CHS INC",
  },
  {
    cik_str: 769218,
    ticker: "AEFC",
    company_name: "AEGON LTD.",
  },
  {
    cik_str: 750577,
    ticker: "HWCPZ",
    company_name: "HANCOCK WHITNEY CORP",
  },
  {
    cik_str: 753308,
    ticker: "NEE-PN",
    company_name: "NEXTERA ENERGY INC",
  },
  {
    cik_str: 753308,
    ticker: "NEE-PR",
    company_name: "NEXTERA ENERGY INC",
  },
  {
    cik_str: 100826,
    ticker: "UEPCO",
    company_name: "UNION ELECTRIC CO",
  },
  {
    cik_str: 98222,
    ticker: "TDW-WT",
    company_name: "TIDEWATER INC",
  },
  {
    cik_str: 98222,
    ticker: "TDDWW",
    company_name: "TIDEWATER INC",
  },
  {
    cik_str: 98222,
    ticker: "TDGMW",
    company_name: "TIDEWATER INC",
  },
  {
    cik_str: 92103,
    ticker: "SCE-PM",
    company_name: "SOUTHERN CALIFORNIA EDISON Co",
  },
  {
    cik_str: 92103,
    ticker: "SCE-PH",
    company_name: "SOUTHERN CALIFORNIA EDISON Co",
  },
  {
    cik_str: 92103,
    ticker: "SCE-PJ",
    company_name: "SOUTHERN CALIFORNIA EDISON Co",
  },
  {
    cik_str: 92103,
    ticker: "SCE-PK",
    company_name: "SOUTHERN CALIFORNIA EDISON Co",
  },
  {
    cik_str: 92103,
    ticker: "SCE-PL",
    company_name: "SOUTHERN CALIFORNIA EDISON Co",
  },
  {
    cik_str: 92103,
    ticker: "SCE-PG",
    company_name: "SOUTHERN CALIFORNIA EDISON Co",
  },
  {
    cik_str: 314203,
    ticker: "MQMNW",
    company_name: "McEwen Mining Inc.",
  },
  {
    cik_str: 736772,
    ticker: "CCNEP",
    company_name: "CNB FINANCIAL CORP/PA",
  },
  {
    cik_str: 748954,
    ticker: "ATLFF",
    company_name: "ATLAS COPCO AB",
  },
  {
    cik_str: 798941,
    ticker: "FCNCO",
    company_name: "FIRST CITIZENS BANCSHARES INC /DE/",
  },
  {
    cik_str: 798941,
    ticker: "FCNCP",
    company_name: "FIRST CITIZENS BANCSHARES INC /DE/",
  },
  {
    cik_str: 798949,
    ticker: "UNTCW",
    company_name: "UNIT CORP",
  },
  {
    cik_str: 831609,
    ticker: "CWLXF",
    company_name: "C21 Investments Inc.",
  },
  {
    cik_str: 845877,
    ticker: "AGM-PE",
    company_name: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    cik_str: 845877,
    ticker: "AGM-PF",
    company_name: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    cik_str: 845877,
    ticker: "AGM-PG",
    company_name: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    cik_str: 846617,
    ticker: "DCOMP",
    company_name: "Dime Community Bancshares, Inc. /NY/",
  },
  {
    cik_str: 4281,
    ticker: "HWM-P",
    company_name: "Howmet Aerospace Inc.",
  },
  {
    cik_str: 7789,
    ticker: "ASBA",
    company_name: "ASSOCIATED BANC-CORP",
  },
  {
    cik_str: 727273,
    ticker: "CDZIP",
    company_name: "CADIZ INC",
  },
  {
    cik_str: 88948,
    ticker: "SENEM",
    company_name: "Seneca Foods Corp",
  },
  {
    cik_str: 81023,
    ticker: "PNMXO",
    company_name: "PUBLIC SERVICE CO OF NEW MEXICO",
  },
  {
    cik_str: 88948,
    ticker: "SENEL",
    company_name: "Seneca Foods Corp",
  },
  {
    cik_str: 712771,
    ticker: "CNOBP",
    company_name: "ConnectOne Bancorp, Inc.",
  },
  {
    cik_str: 7789,
    ticker: "ASB-PF",
    company_name: "ASSOCIATED BANC-CORP",
  },
  {
    cik_str: 11544,
    ticker: "WRB-PF",
    company_name: "BERKLEY W R CORP",
  },
  {
    cik_str: 11544,
    ticker: "WRB-PG",
    company_name: "BERKLEY W R CORP",
  },
  {
    cik_str: 11544,
    ticker: "WRB-PH",
    company_name: "BERKLEY W R CORP",
  },
  {
    cik_str: 14930,
    ticker: "BC-PA",
    company_name: "BRUNSWICK CORP",
  },
  {
    cik_str: 14930,
    ticker: "BC-PB",
    company_name: "BRUNSWICK CORP",
  },
  {
    cik_str: 14930,
    ticker: "BC-PC",
    company_name: "BRUNSWICK CORP",
  },
  {
    cik_str: 35527,
    ticker: "FITBO",
    company_name: "FIFTH THIRD BANCORP",
  },
  {
    cik_str: 35527,
    ticker: "FITBP",
    company_name: "FIFTH THIRD BANCORP",
  },
  {
    cik_str: 64463,
    ticker: "SLNHP",
    company_name: "Soluna Holdings, Inc",
  },
  {
    cik_str: 61004,
    ticker: "LGL-WT",
    company_name: "LGL GROUP INC",
  },
  {
    cik_str: 72971,
    ticker: "WFC-PD",
    company_name: "WELLS FARGO & COMPANY/MN",
  },
  {
    cik_str: 72971,
    ticker: "WFC-PZ",
    company_name: "WELLS FARGO & COMPANY/MN",
  },
  {
    cik_str: 72971,
    ticker: "WFCNP",
    company_name: "WELLS FARGO & COMPANY/MN",
  },
  {
    cik_str: 72971,
    ticker: "WFC-PA",
    company_name: "WELLS FARGO & COMPANY/MN",
  },
  {
    cik_str: 797468,
    ticker: "OXY-WT",
    company_name: "OCCIDENTAL PETROLEUM CORP /DE/",
  },
  {
    cik_str: 821130,
    ticker: "UZD",
    company_name: "UNITED STATES CELLULAR CORP",
  },
  {
    cik_str: 821130,
    ticker: "UZE",
    company_name: "UNITED STATES CELLULAR CORP",
  },
  {
    cik_str: 821130,
    ticker: "UZF",
    company_name: "UNITED STATES CELLULAR CORP",
  },
  {
    cik_str: 860748,
    ticker: "KMPB",
    company_name: "KEMPER Corp",
  },
  {
    cik_str: 879911,
    ticker: "AERGP",
    company_name: "APPLIED ENERGETICS, INC.",
  },
  {
    cik_str: 794685,
    ticker: "GAB-PK",
    company_name: "GABELLI EQUITY TRUST INC",
  },
  {
    cik_str: 791908,
    ticker: "XOMAO",
    company_name: "XOMA Corp",
  },
  {
    cik_str: 791908,
    ticker: "XOMAP",
    company_name: "XOMA Corp",
  },
  {
    cik_str: 759944,
    ticker: "CFG-PE",
    company_name: "CITIZENS FINANCIAL GROUP INC/RI",
  },
  {
    cik_str: 744452,
    ticker: "APPDW",
    company_name: "APPLIED DNA SCIENCES INC",
  },
  {
    cik_str: 354518,
    ticker: "EBCOF",
    company_name: "EBARA CORP /ADR/",
  },
  {
    cik_str: 718940,
    ticker: "BCEFF",
    company_name: "BCE INC",
  },
  {
    cik_str: 718940,
    ticker: "BCEPF",
    company_name: "BCE INC",
  },
  {
    cik_str: 718940,
    ticker: "BCEIF",
    company_name: "BCE INC",
  },
  {
    cik_str: 718940,
    ticker: "BCEXF",
    company_name: "BCE INC",
  },
  {
    cik_str: 718940,
    ticker: "BCPPF",
    company_name: "BCE INC",
  },
  {
    cik_str: 712534,
    ticker: "FRMEP",
    company_name: "FIRST MERCHANTS CORP",
  },
  {
    cik_str: 109380,
    ticker: "ZIONL",
    company_name: "ZIONS BANCORPORATION, NATIONAL ASSOCIATION /UT/",
  },
  {
    cik_str: 109380,
    ticker: "ZIONO",
    company_name: "ZIONS BANCORPORATION, NATIONAL ASSOCIATION /UT/",
  },
  {
    cik_str: 109380,
    ticker: "ZIONP",
    company_name: "ZIONS BANCORPORATION, NATIONAL ASSOCIATION /UT/",
  },
  {
    cik_str: 19617,
    ticker: "JPM-PJ",
    company_name: "JPMORGAN CHASE & CO",
  },
  {
    cik_str: 19617,
    ticker: "JPM-PK",
    company_name: "JPMORGAN CHASE & CO",
  },
  {
    cik_str: 19617,
    ticker: "JPM-PL",
    company_name: "JPMORGAN CHASE & CO",
  },
  {
    cik_str: 19617,
    ticker: "JPM-PM",
    company_name: "JPMORGAN CHASE & CO",
  },
  {
    cik_str: 19617,
    ticker: "AMJ",
    company_name: "JPMORGAN CHASE & CO",
  },
  {
    cik_str: 39263,
    ticker: "CFR-PB",
    company_name: "CULLEN/FROST BANKERS, INC.",
  },
  {
    cik_str: 36270,
    ticker: "MTB-PH",
    company_name: "M&T BANK CORP",
  },
  {
    cik_str: 1131312,
    ticker: "ZNOGW",
    company_name: "ZION OIL & GAS INC",
  },
  {
    cik_str: 1131554,
    ticker: "SNCRL",
    company_name: "SYNCHRONOSS TECHNOLOGIES INC",
  },
  {
    cik_str: 876378,
    ticker: "TRXDW",
    company_name: "ASENSUS SURGICAL, INC.",
  },
  {
    cik_str: 874761,
    ticker: "AESC",
    company_name: "AES CORP",
  },
  {
    cik_str: 884614,
    ticker: "UGIC",
    company_name: "UGI CORP /PA/",
  },
  {
    cik_str: 886128,
    ticker: "FCELB",
    company_name: "FUELCELL ENERGY INC",
  },
  {
    cik_str: 883569,
    ticker: "FOSLL",
    company_name: "Fossil Group, Inc.",
  },
  {
    cik_str: 883948,
    ticker: "AUB-PA",
    company_name: "Atlantic Union Bankshares Corp",
  },
  {
    cik_str: 1080657,
    ticker: "SQFTW",
    company_name: "Presidio Property Trust, Inc.",
  },
  {
    cik_str: 1080657,
    ticker: "SQFTP",
    company_name: "Presidio Property Trust, Inc.",
  },
  {
    cik_str: 1087711,
    ticker: "STNDF",
    company_name: "Santander UK plc",
  },
  {
    cik_str: 1087711,
    ticker: "SNTUF",
    company_name: "Santander UK plc",
  },
  {
    cik_str: 1089907,
    ticker: "SWKHL",
    company_name: "SWK Holdings Corp",
  },
  {
    cik_str: 1126956,
    ticker: "SRCU",
    company_name: "SPIRE INC",
  },
  {
    cik_str: 1114700,
    ticker: "GRFGF",
    company_name: "GRUPO FINANCIERO GALICIA SA",
  },
  {
    cik_str: 1096275,
    ticker: "WKSPW",
    company_name: "Worksport Ltd",
  },
  {
    cik_str: 927971,
    ticker: "FNGO",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "FNGS",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "BULZ",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "DULL",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "BERZ",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 936528,
    ticker: "WAFDP",
    company_name: "WAFD INC",
  },
  {
    cik_str: 1039828,
    ticker: "AEL-PA",
    company_name: "AMERICAN EQUITY INVESTMENT LIFE HOLDING CO",
  },
  {
    cik_str: 1039828,
    ticker: "AEL-PB",
    company_name: "AMERICAN EQUITY INVESTMENT LIFE HOLDING CO",
  },
  {
    cik_str: 1042046,
    ticker: "AFGD",
    company_name: "AMERICAN FINANCIAL GROUP INC",
  },
  {
    cik_str: 1042046,
    ticker: "AFGE",
    company_name: "AMERICAN FINANCIAL GROUP INC",
  },
  {
    cik_str: 1042046,
    ticker: "AFGB",
    company_name: "AMERICAN FINANCIAL GROUP INC",
  },
  {
    cik_str: 1045450,
    ticker: "EPR-PC",
    company_name: "EPR PROPERTIES",
  },
  {
    cik_str: 1045450,
    ticker: "EPR-PE",
    company_name: "EPR PROPERTIES",
  },
  {
    cik_str: 910606,
    ticker: "REGCO",
    company_name: "REGENCY CENTERS CORP",
  },
  {
    cik_str: 910606,
    ticker: "REGCP",
    company_name: "REGENCY CENTERS CORP",
  },
  {
    cik_str: 895728,
    ticker: "EBGEF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 895728,
    ticker: "EBRGF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 895728,
    ticker: "EBRZF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 895728,
    ticker: "ENBFF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 895728,
    ticker: "EBBGF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 895728,
    ticker: "ENBOF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 895728,
    ticker: "ENBNF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 895728,
    ticker: "ENBHF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 895728,
    ticker: "ENBMF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 895728,
    ticker: "ENBGF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 895728,
    ticker: "ENBRF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 895728,
    ticker: "ENNPF",
    company_name: "ENBRIDGE INC",
  },
  {
    cik_str: 913144,
    ticker: "RNR-PG",
    company_name: "RENAISSANCERE HOLDINGS LTD",
  },
  {
    cik_str: 917251,
    ticker: "ADC-PA",
    company_name: "AGREE REALTY CORP",
  },
  {
    cik_str: 920990,
    ticker: "WOWID",
    company_name: "METRO ONE TELECOMMUNICATIONS INC",
  },
  {
    cik_str: 920822,
    ticker: "OUTFF",
    company_name: "OUTOKUMPU OY /FI",
  },
  {
    cik_str: 921638,
    ticker: "SSRGF",
    company_name: "SSR MINING INC.",
  },
  {
    cik_str: 927971,
    ticker: "BNKD",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "BNKU",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "CARU",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "WTID",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "WTIU",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "XXXX",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "JETU",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "JETD",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "CARD",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "SHNY",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "NRGD",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "NRGU",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "OILD",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "OILU",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "FNGU",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "GDXD",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "GDXU",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "FLYD",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 927971,
    ticker: "FLYU",
    company_name: "BANK OF MONTREAL /CAN/",
  },
  {
    cik_str: 907254,
    ticker: "BFS-PE",
    company_name: "SAUL CENTERS, INC.",
  },
  {
    cik_str: 1004724,
    ticker: "RHEPB",
    company_name: "REGIONAL HEALTH PROPERTIES, INC",
  },
  {
    cik_str: 1001085,
    ticker: "BNH",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 947263,
    ticker: "TDBKF",
    company_name: "TORONTO DOMINION BANK",
  },
  {
    cik_str: 947263,
    ticker: "TNTTF",
    company_name: "TORONTO DOMINION BANK",
  },
  {
    cik_str: 946486,
    ticker: "WINTW",
    company_name: "WINDTREE THERAPEUTICS INC /DE/",
  },
  {
    cik_str: 947263,
    ticker: "TDBCP",
    company_name: "TORONTO DOMINION BANK",
  },
  {
    cik_str: 1001085,
    ticker: "BKFOF",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 1001085,
    ticker: "BRCFF",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 1001085,
    ticker: "BKFDF",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 1001085,
    ticker: "BRFPF",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 1001085,
    ticker: "BNJ",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 1001085,
    ticker: "BROXF",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 1001085,
    ticker: "BXDIF",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 1001085,
    ticker: "BAMKF",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 1001085,
    ticker: "BKAMF",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 1001085,
    ticker: "BKFAF",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 1001085,
    ticker: "BKFPF",
    company_name: "BROOKFIELD Corp /ON/",
  },
  {
    cik_str: 911421,
    ticker: "PRE-PJ",
    company_name: "PARTNERRE LTD",
  },
  {
    cik_str: 930236,
    ticker: "RWT-PA",
    company_name: "REDWOOD TRUST INC",
  },
  {
    cik_str: 949039,
    ticker: "DODRW",
    company_name: "DIAMOND OFFSHORE DRILLING, INC.",
  },
  {
    cik_str: 927628,
    ticker: "COF-PI",
    company_name: "CAPITAL ONE FINANCIAL CORP",
  },
  {
    cik_str: 927628,
    ticker: "COF-PJ",
    company_name: "CAPITAL ONE FINANCIAL CORP",
  },
  {
    cik_str: 927628,
    ticker: "COF-PK",
    company_name: "CAPITAL ONE FINANCIAL CORP",
  },
  {
    cik_str: 927628,
    ticker: "COF-PL",
    company_name: "CAPITAL ONE FINANCIAL CORP",
  },
  {
    cik_str: 927628,
    ticker: "COF-PN",
    company_name: "CAPITAL ONE FINANCIAL CORP",
  },
  {
    cik_str: 910073,
    ticker: "NYCB-PU",
    company_name: "NEW YORK COMMUNITY BANCORP INC",
  },
  {
    cik_str: 898174,
    ticker: "RZC",
    company_name: "REINSURANCE GROUP OF AMERICA INC",
  },
  {
    cik_str: 896493,
    ticker: "AULT-PD",
    company_name: "Ault Alliance, Inc.",
  },
  {
    cik_str: 895421,
    ticker: "MSTLW",
    company_name: "MORGAN STANLEY",
  },
  {
    cik_str: 895421,
    ticker: "MS-PP",
    company_name: "MORGAN STANLEY",
  },
  {
    cik_str: 895421,
    ticker: "MS-PL",
    company_name: "MORGAN STANLEY",
  },
  {
    cik_str: 895421,
    ticker: "MS-PO",
    company_name: "MORGAN STANLEY",
  },
  {
    cik_str: 1046179,
    ticker: "TSMWF",
    company_name: "TAIWAN SEMICONDUCTOR MANUFACTURING CO LTD",
  },
  {
    cik_str: 1009829,
    ticker: "JAKP",
    company_name: "JAKKS PACIFIC INC",
  },
  {
    cik_str: 1014763,
    ticker: "AIMDW",
    company_name: "Ainos, Inc.",
  },
  {
    cik_str: 874710,
    ticker: "AHPIQ",
    company_name: "ALLIED HEALTHCARE PRODUCTS INC",
  },
  {
    cik_str: 813828,
    ticker: "PARAP",
    company_name: "Paramount Global",
  },
  {
    cik_str: 826675,
    ticker: "DX-PC",
    company_name: "DYNEX CAPITAL INC",
  },
  {
    cik_str: 801337,
    ticker: "WBS-PG",
    company_name: "WEBSTER FINANCIAL CORP",
  },
  {
    cik_str: 769594,
    ticker: "NPPXF",
    company_name: "NIPPON TELEGRAPH & TELEPHONE CORP",
  },
  {
    cik_str: 310732,
    ticker: "BNPZY",
    company_name: "BNP PARIBAS",
  },
  {
    cik_str: 320335,
    ticker: "GL-PD",
    company_name: "GLOBE LIFE INC.",
  },
  {
    cik_str: 91576,
    ticker: "KEY-PL",
    company_name: "KEYCORP /NEW/",
  },
  {
    cik_str: 92230,
    ticker: "TFC-PI",
    company_name: "TRUIST FINANCIAL CORP",
  },
  {
    cik_str: 92230,
    ticker: "TFC-PO",
    company_name: "TRUIST FINANCIAL CORP",
  },
  {
    cik_str: 92230,
    ticker: "TFC-PR",
    company_name: "TRUIST FINANCIAL CORP",
  },
  {
    cik_str: 312070,
    ticker: "ATMP",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "AYTEF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "BALTF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "BWVTF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "COWTF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "VXX",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "VXZ",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "PGMFF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "SGGFF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "JJTFF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "JJUFF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "PGDDF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "JJGTF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "JJMTF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "JJNTF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "JJOFF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "JJPFF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "JJSSF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "ICITF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "JEMTF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "JJATF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "JJCTF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "JJETF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "DJP",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "GBBEF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "GRN",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 312070,
    ticker: "GRNTF",
    company_name: "BARCLAYS BANK PLC",
  },
  {
    cik_str: 886982,
    ticker: "GSCE",
    company_name: "GOLDMAN SACHS GROUP INC",
  },
  {
    cik_str: 77281,
    ticker: "PRETL",
    company_name: "PENNSYLVANIA REAL ESTATE INVESTMENT TRUST",
  },
  {
    cik_str: 77281,
    ticker: "PRETM",
    company_name: "PENNSYLVANIA REAL ESTATE INVESTMENT TRUST",
  },
  {
    cik_str: 77281,
    ticker: "PRETN",
    company_name: "PENNSYLVANIA REAL ESTATE INVESTMENT TRUST",
  },
  {
    cik_str: 66004,
    ticker: "MSEXP",
    company_name: "MIDDLESEX WATER CO",
  },
  {
    cik_str: 49196,
    ticker: "HBANL",
    company_name: "HUNTINGTON BANCSHARES INC /MD/",
  },
  {
    cik_str: 49196,
    ticker: "HBANM",
    company_name: "HUNTINGTON BANCSHARES INC /MD/",
  },
  {
    cik_str: 49196,
    ticker: "HBANP",
    company_name: "HUNTINGTON BANCSHARES INC /MD/",
  },
  {
    cik_str: 37996,
    ticker: "F-PB",
    company_name: "FORD MOTOR CO",
  },
  {
    cik_str: 37996,
    ticker: "F-PC",
    company_name: "FORD MOTOR CO",
  },
  {
    cik_str: 37996,
    ticker: "F-PD",
    company_name: "FORD MOTOR CO",
  },
  {
    cik_str: 18349,
    ticker: "SNV-PE",
    company_name: "SYNOVUS FINANCIAL CORP",
  },
  {
    cik_str: 6176,
    ticker: "AP-WT",
    company_name: "AMPCO PITTSBURGH CORP",
  },
  {
    cik_str: 720005,
    ticker: "RJF-PB",
    company_name: "RAYMOND JAMES FINANCIAL INC",
  },
  {
    cik_str: 760498,
    ticker: "BANFP",
    company_name: "BANCFIRST CORP /OK/",
  },
  {
    cik_str: 68622,
    ticker: "CTDD",
    company_name: "QWEST CORP",
  },
  {
    cik_str: 75208,
    ticker: "OGSRW",
    company_name: "OVERSEAS SHIPHOLDING GROUP INC",
  },
  {
    cik_str: 73124,
    ticker: "NTRSO",
    company_name: "NORTHERN TRUST CORP",
  },
  {
    cik_str: 23795,
    ticker: "CTO-PA",
    company_name: "CTO Realty Growth, Inc.",
  },
  {
    cik_str: 866368,
    ticker: "PSBXP",
    company_name: "PS BUSINESS PARKS, INC./MD",
  },
  {
    cik_str: 866368,
    ticker: "PSBYP",
    company_name: "PS BUSINESS PARKS, INC./MD",
  },
  {
    cik_str: 866368,
    ticker: "PSBZP",
    company_name: "PS BUSINESS PARKS, INC./MD",
  },
  {
    cik_str: 862831,
    ticker: "FIISP",
    company_name: "FINANCIAL INSTITUTIONS INC",
  },
  {
    cik_str: 862831,
    ticker: "FIISO",
    company_name: "FINANCIAL INSTITUTIONS INC",
  },
  {
    cik_str: 831001,
    ticker: "C-PN",
    company_name: "CITIGROUP INC",
  },
  {
    cik_str: 857855,
    ticker: "UCBIO",
    company_name: "UNITED COMMUNITY BANKS INC",
  },
  {
    cik_str: 763901,
    ticker: "BPOPM",
    company_name: "POPULAR, INC.",
  },
  {
    cik_str: 808219,
    ticker: "MHGUP",
    company_name: "MERITAGE HOSPITALITY GROUP INC",
  },
  {
    cik_str: 314808,
    ticker: "VAL-WT",
    company_name: "Valaris Ltd",
  },
  {
    cik_str: 310522,
    ticker: "FNMAP",
    company_name: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    cik_str: 707388,
    ticker: "STRRP",
    company_name: "STAR EQUITY HOLDINGS, INC.",
  },
  {
    cik_str: 700564,
    ticker: "FULTP",
    company_name: "FULTON FINANCIAL CORP",
  },
  {
    cik_str: 230557,
    ticker: "SIGIP",
    company_name: "SELECTIVE INSURANCE GROUP INC",
  },
  {
    cik_str: 1070050,
    ticker: "APCXW",
    company_name: "AppTech Payments Corp.",
  },
  {
    cik_str: 1070423,
    ticker: "PAAPU",
    company_name: "PLAINS ALL AMERICAN PIPELINE LP",
  },
  {
    cik_str: 1097362,
    ticker: "SLFIF",
    company_name: "SUN LIFE FINANCIAL INC",
  },
  {
    cik_str: 1097362,
    ticker: "SUNFF",
    company_name: "SUN LIFE FINANCIAL INC",
  },
  {
    cik_str: 1097362,
    ticker: "SNLFF",
    company_name: "SUN LIFE FINANCIAL INC",
  },
  {
    cik_str: 1086888,
    ticker: "MNQFF",
    company_name: "MANULIFE FINANCIAL CORP",
  },
  {
    cik_str: 1086888,
    ticker: "MNUFF",
    company_name: "MANULIFE FINANCIAL CORP",
  },
  {
    cik_str: 1086888,
    ticker: "MNLCF",
    company_name: "MANULIFE FINANCIAL CORP",
  },
  {
    cik_str: 1137774,
    ticker: "PFH",
    company_name: "PRUDENTIAL FINANCIAL INC",
  },
  {
    cik_str: 1137774,
    ticker: "PRH",
    company_name: "PRUDENTIAL FINANCIAL INC",
  },
  {
    cik_str: 1137774,
    ticker: "PRS",
    company_name: "PRUDENTIAL FINANCIAL INC",
  },
  {
    cik_str: 1143513,
    ticker: "GLADZ",
    company_name: "GLADSTONE CAPITAL CORP",
  },
  {
    cik_str: 886163,
    ticker: "LGNDZ",
    company_name: "LIGAND PHARMACEUTICALS INC",
  },
  {
    cik_str: 886163,
    ticker: "LGNXZ",
    company_name: "LIGAND PHARMACEUTICALS INC",
  },
  {
    cik_str: 886163,
    ticker: "LGNYZ",
    company_name: "LIGAND PHARMACEUTICALS INC",
  },
  {
    cik_str: 886163,
    ticker: "LGNZZ",
    company_name: "LIGAND PHARMACEUTICALS INC",
  },
  {
    cik_str: 922247,
    ticker: "CYTHW",
    company_name: "Cyclo Therapeutics, Inc.",
  },
  {
    cik_str: 915191,
    ticker: "FRFZF",
    company_name: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    cik_str: 936340,
    ticker: "DTB",
    company_name: "DTE ENERGY CO",
  },
  {
    cik_str: 936340,
    ticker: "DTG",
    company_name: "DTE ENERGY CO",
  },
  {
    cik_str: 899051,
    ticker: "ALL-PI",
    company_name: "ALLSTATE CORP",
  },
  {
    cik_str: 899051,
    ticker: "ALL-PJ",
    company_name: "ALLSTATE CORP",
  },
  {
    cik_str: 915191,
    ticker: "FFHPF",
    company_name: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    cik_str: 915191,
    ticker: "FXFHF",
    company_name: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    cik_str: 915191,
    ticker: "FAXRF",
    company_name: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    cik_str: 1032208,
    ticker: "SREA",
    company_name: "SEMPRA",
  },
  {
    cik_str: 1026214,
    ticker: "FREJP",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1026214,
    ticker: "FMCKK",
    company_name: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    cik_str: 1022899,
    ticker: "PTIXW",
    company_name: "Protagenic Therapeutics, Inc.new",
  },
  {
    cik_str: 1004315,
    ticker: "NMPWP",
    company_name: "NATIONAL GRID PLC",
  },
  {
    cik_str: 1004315,
    ticker: "NEWEN",
    company_name: "NATIONAL GRID PLC",
  },
  {
    cik_str: 1104038,
    ticker: "VRMEW",
    company_name: "VerifyMe, Inc.",
  },
  {
    cik_str: 1101026,
    ticker: "ZIVOW",
    company_name: "Zivo Bioscience, Inc.",
  },
  {
    cik_str: 1055160,
    ticker: "MFA-PC",
    company_name: "MFA FINANCIAL, INC.",
  },
  {
    cik_str: 1058307,
    ticker: "NXPLW",
    company_name: "NextPlat Corp",
  },
  {
    cik_str: 1043219,
    ticker: "NLY-PI",
    company_name: "ANNALY CAPITAL MANAGEMENT INC",
  },
  {
    cik_str: 1253986,
    ticker: "ABR-PD",
    company_name: "ARBOR REALTY TRUST INC",
  },
  {
    cik_str: 1253986,
    ticker: "ABR-PE",
    company_name: "ARBOR REALTY TRUST INC",
  },
  {
    cik_str: 1253986,
    ticker: "ABR-PF",
    company_name: "ARBOR REALTY TRUST INC",
  },
  {
    cik_str: 1178727,
    ticker: "COMSP",
    company_name: "COMSovereign Holding Corp.",
  },
  {
    cik_str: 1178727,
    ticker: "COMSW",
    company_name: "COMSovereign Holding Corp.",
  },
  {
    cik_str: 1174169,
    ticker: "AGQPF",
    company_name: "ALGONQUIN POWER & UTILITIES CORP.",
  },
  {
    cik_str: 1174169,
    ticker: "AQNB",
    company_name: "ALGONQUIN POWER & UTILITIES CORP.",
  },
  {
    cik_str: 1174169,
    ticker: "AQNU",
    company_name: "ALGONQUIN POWER & UTILITIES CORP.",
  },
  {
    cik_str: 1160106,
    ticker: "LLOBF",
    company_name: "Lloyds Banking Group plc",
  },
  {
    cik_str: 947484,
    ticker: "ACGLN",
    company_name: "ARCH CAPITAL GROUP LTD.",
  },
  {
    cik_str: 920112,
    ticker: "HTLFP",
    company_name: "HEARTLAND FINANCIAL USA INC",
  },
  {
    cik_str: 1004434,
    ticker: "MGR",
    company_name: "AFFILIATED MANAGERS GROUP, INC.",
  },
  {
    cik_str: 1004434,
    ticker: "MGRB",
    company_name: "AFFILIATED MANAGERS GROUP, INC.",
  },
  {
    cik_str: 1004434,
    ticker: "MGRD",
    company_name: "AFFILIATED MANAGERS GROUP, INC.",
  },
  {
    cik_str: 1025835,
    ticker: "EFSCP",
    company_name: "ENTERPRISE FINANCIAL SERVICES CORP",
  },
  {
    cik_str: 1091748,
    ticker: "ARGD",
    company_name: "Argo Group International Holdings, Inc.",
  },
  {
    cik_str: 1091748,
    ticker: "ARGO-PA",
    company_name: "Argo Group International Holdings, Inc.",
  },
  {
    cik_str: 899689,
    ticker: "VNO-PN",
    company_name: "VORNADO REALTY TRUST",
  },
  {
    cik_str: 899689,
    ticker: "VNO-PO",
    company_name: "VORNADO REALTY TRUST",
  },
  {
    cik_str: 1115055,
    ticker: "PNFPP",
    company_name: "PINNACLE FINANCIAL PARTNERS INC",
  },
  {
    cik_str: 1145255,
    ticker: "HNNAZ",
    company_name: "HENNESSY ADVISORS INC",
  },
  {
    cik_str: 1110646,
    ticker: "NETTF",
    company_name: "NetEase, Inc.",
  },
  {
    cik_str: 1122491,
    ticker: "BRFFF",
    company_name: "BRF S.A.",
  },
  {
    cik_str: 886744,
    ticker: "GERNW",
    company_name: "GERON CORP",
  },
  {
    cik_str: 892553,
    ticker: "GTLS-PB",
    company_name: "CHART INDUSTRIES INC",
  },
  {
    cik_str: 896429,
    ticker: "CTLPP",
    company_name: "CANTALOUPE, INC.",
  },
  {
    cik_str: 910267,
    ticker: "TTNPW",
    company_name: "TITAN PHARMACEUTICALS INC",
  },
  {
    cik_str: 1099219,
    ticker: "MET-PF",
    company_name: "METLIFE INC",
  },
  {
    cik_str: 1114446,
    ticker: "AMNA",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "AMND",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "AMTR",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "AMUB",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "WUCT",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "UCIB",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "USML",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "PFFL",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "QULL",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "SCDL",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "SMHB",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "MLPR",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "MTUL",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "MVRL",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "IWML",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "MLPB",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "HDLB",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "IFED",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "IWDL",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "IWFL",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "ESUS",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "FBGX",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "FEDL",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "BDCX",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "BDCZ",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "CEFD",
    company_name: "UBS AG",
  },
  {
    cik_str: 1114446,
    ticker: "DJCB",
    company_name: "UBS AG",
  },
  {
    cik_str: 1084267,
    ticker: "MOBQW",
    company_name: "Mobiquity Technologies, Inc.",
  },
  {
    cik_str: 1075415,
    ticker: "DHCNI",
    company_name: "DIVERSIFIED HEALTHCARE TRUST",
  },
  {
    cik_str: 1075415,
    ticker: "DHCNL",
    company_name: "DIVERSIFIED HEALTHCARE TRUST",
  },
  {
    cik_str: 1077428,
    ticker: "TCBIO",
    company_name: "TEXAS CAPITAL BANCSHARES INC/TX",
  },
  {
    cik_str: 1096691,
    ticker: "PTNRF",
    company_name: "PARTNER COMMUNICATIONS CO LTD",
  },
  {
    cik_str: 1059262,
    ticker: "CRLKP",
    company_name: "SP Plus Corp",
  },
  {
    cik_str: 1030475,
    ticker: "CHNEY",
    company_name: "CHINA EASTERN AIRLINES CORP LTD",
  },
  {
    cik_str: 1015328,
    ticker: "WTFCP",
    company_name: "WINTRUST FINANCIAL CORP",
  },
  {
    cik_str: 1021096,
    ticker: "TRKAW",
    company_name: "Troika Media Group, Inc.",
  },
  {
    cik_str: 1053092,
    ticker: "GLDI",
    company_name: "CREDIT SUISSE AG",
  },
  {
    cik_str: 1053092,
    ticker: "SLVO",
    company_name: "CREDIT SUISSE AG",
  },
  {
    cik_str: 1053092,
    ticker: "USOI",
    company_name: "CREDIT SUISSE AG",
  },
  {
    cik_str: 1034670,
    ticker: "ALIV",
    company_name: "AUTOLIV INC",
  },
  {
    cik_str: 1004702,
    ticker: "OCFCP",
    company_name: "OCEANFIRST FINANCIAL CORP",
  },
  {
    cik_str: 925741,
    ticker: "BCDAW",
    company_name: "BioCardia, Inc.",
  },
  {
    cik_str: 1136174,
    ticker: "OTRKP",
    company_name: "Ontrak, Inc.",
  },
  {
    cik_str: 1144800,
    ticker: "TSLTF",
    company_name: "TRANSALTA CORP",
  },
  {
    cik_str: 1000275,
    ticker: "RYBPF",
    company_name: "ROYAL BANK OF CANADA",
  },
  {
    cik_str: 948320,
    ticker: "LFMDP",
    company_name: "LifeMD, Inc.",
  },
  {
    cik_str: 1000275,
    ticker: "RYLBF",
    company_name: "ROYAL BANK OF CANADA",
  },
  {
    cik_str: 933267,
    ticker: "IRS-WT",
    company_name: "IRSA INVESTMENTS & REPRESENTATIONS INC",
  },
  {
    cik_str: 1000209,
    ticker: "MBNKP",
    company_name: "MEDALLION FINANCIAL CORP",
  },
  {
    cik_str: 1015383,
    ticker: "POWWP",
    company_name: "AMMO, INC.",
  },
  {
    cik_str: 1034957,
    ticker: "CRESW",
    company_name: "CRESUD INC",
  },
  {
    cik_str: 1051512,
    ticker: "TDS-PU",
    company_name: "TELEPHONE & DATA SYSTEMS INC /DE/",
  },
  {
    cik_str: 1051512,
    ticker: "TDS-PV",
    company_name: "TELEPHONE & DATA SYSTEMS INC /DE/",
  },
  {
    cik_str: 1080319,
    ticker: "NWGIW",
    company_name: "Elys Game Technology, Corp.",
  },
  {
    cik_str: 897802,
    ticker: "SPE-PC",
    company_name: "SPECIAL OPPORTUNITIES FUND, INC.",
  },
  {
    cik_str: 895126,
    ticker: "CHKEZ",
    company_name: "CHESAPEAKE ENERGY CORP",
  },
  {
    cik_str: 895126,
    ticker: "CHKEL",
    company_name: "CHESAPEAKE ENERGY CORP",
  },
  {
    cik_str: 895126,
    ticker: "CHKEW",
    company_name: "CHESAPEAKE ENERGY CORP",
  },
  {
    cik_str: 921671,
    ticker: "GGT-PG",
    company_name: "GABELLI MULTIMEDIA TRUST INC.",
  },
  {
    cik_str: 929008,
    ticker: "WCC-PA",
    company_name: "WESCO INTERNATIONAL INC",
  },
  {
    cik_str: 1287032,
    ticker: "PSEC-PA",
    company_name: "PROSPECT CAPITAL CORP",
  },
  {
    cik_str: 1282957,
    ticker: "GLU-PA",
    company_name: "GABELLI GLOBAL UTILITY & INCOME TRUST",
  },
  {
    cik_str: 1318885,
    ticker: "DSX-WT",
    company_name: "DIANA SHIPPING INC.",
  },
  {
    cik_str: 1308106,
    ticker: "SEAL-PA",
    company_name: "Seapeak LLC",
  },
  {
    cik_str: 1308106,
    ticker: "SEAL-PB",
    company_name: "Seapeak LLC",
  },
  {
    cik_str: 1428205,
    ticker: "ARR-PC",
    company_name: "Armour Residential REIT, Inc.",
  },
  {
    cik_str: 1209028,
    ticker: "AAIC-PB",
    company_name: "Arlington Asset Investment Corp.",
  },
  {
    cik_str: 1209028,
    ticker: "AAIC-PC",
    company_name: "Arlington Asset Investment Corp.",
  },
  {
    cik_str: 1209028,
    ticker: "AAIN",
    company_name: "Arlington Asset Investment Corp.",
  },
  {
    cik_str: 1413159,
    ticker: "TGH-PA",
    company_name: "TEXTAINER GROUP HOLDINGS LTD",
  },
  {
    cik_str: 1413159,
    ticker: "TGH-PB",
    company_name: "TEXTAINER GROUP HOLDINGS LTD",
  },
  {
    cik_str: 1411342,
    ticker: "EFC-PE",
    company_name: "Ellington Financial Inc.",
  },
  {
    cik_str: 1411342,
    ticker: "EFC-PD",
    company_name: "Ellington Financial Inc.",
  },
  {
    cik_str: 1411342,
    ticker: "EFC-PA",
    company_name: "Ellington Financial Inc.",
  },
  {
    cik_str: 1411342,
    ticker: "EFC-PB",
    company_name: "Ellington Financial Inc.",
  },
  {
    cik_str: 1411342,
    ticker: "EFC-PC",
    company_name: "Ellington Financial Inc.",
  },
  {
    cik_str: 1402328,
    ticker: "SBFMW",
    company_name: "Sunshine Biopharma, Inc",
  },
  {
    cik_str: 1295810,
    ticker: "SHO-PH",
    company_name: "Sunstone Hotel Investors, Inc.",
  },
  {
    cik_str: 1295810,
    ticker: "SHO-PI",
    company_name: "Sunstone Hotel Investors, Inc.",
  },
  {
    cik_str: 1281761,
    ticker: "RF-PE",
    company_name: "REGIONS FINANCIAL CORP",
  },
  {
    cik_str: 1299939,
    ticker: "CADE-PA",
    company_name: "Cadence Bank",
  },
  {
    cik_str: 1324948,
    ticker: "RBCP",
    company_name: "RBC Bearings INC",
  },
  {
    cik_str: 1341317,
    ticker: "BWBBP",
    company_name: "Bridgewater Bancshares Inc",
  },
  {
    cik_str: 1332551,
    ticker: "ACR-PC",
    company_name: "ACRES Commercial Realty Corp.",
  },
  {
    cik_str: 1332551,
    ticker: "ACR-PD",
    company_name: "ACRES Commercial Realty Corp.",
  },
  {
    cik_str: 1419554,
    ticker: "BBLGW",
    company_name: "Bone Biologics Corp",
  },
  {
    cik_str: 1412100,
    ticker: "MHNC",
    company_name: "Maiden Holdings, Ltd.",
  },
  {
    cik_str: 1414767,
    ticker: "NCPLW",
    company_name: "Netcapital Inc.",
  },
  {
    cik_str: 1446705,
    ticker: "NTTDF",
    company_name: "NTT Data Corp",
  },
  {
    cik_str: 1437153,
    ticker: "CUYTF",
    company_name: "Colruyt SA",
  },
  {
    cik_str: 1455626,
    ticker: "RSGPY",
    company_name: "Electrocomponents plc / ADR",
  },
  {
    cik_str: 1276671,
    ticker: "ITCLY",
    company_name: "BANCO ITAU CHILE",
  },
  {
    cik_str: 1254699,
    ticker: "QVCC",
    company_name: "QVC INC",
  },
  {
    cik_str: 1267238,
    ticker: "AIZN",
    company_name: "ASSURANT, INC.",
  },
  {
    cik_str: 1159508,
    ticker: "DGP",
    company_name: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
  },
  {
    cik_str: 1159508,
    ticker: "DGZ",
    company_name: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
  },
  {
    cik_str: 1159508,
    ticker: "DZZ",
    company_name: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
  },
  {
    cik_str: 1159508,
    ticker: "AGATF",
    company_name: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
  },
  {
    cik_str: 1159508,
    ticker: "DEENF",
    company_name: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
  },
  {
    cik_str: 1159508,
    ticker: "ADZCF",
    company_name: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
  },
  {
    cik_str: 1159508,
    ticker: "OLOXF",
    company_name: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
  },
  {
    cik_str: 1297996,
    ticker: "DLR-PL",
    company_name: "DIGITAL REALTY TRUST, INC.",
  },
  {
    cik_str: 1400810,
    ticker: "HCIIP",
    company_name: "HCI Group, Inc.",
  },
  {
    cik_str: 1400891,
    ticker: "IHETW",
    company_name: "iHeartMedia, Inc.",
  },
  {
    cik_str: 1372514,
    ticker: "KPHMW",
    company_name: "KIORA PHARMACEUTICALS INC",
  },
  {
    cik_str: 1360214,
    ticker: "HROWL",
    company_name: "HARROW, INC.",
  },
  {
    cik_str: 1360214,
    ticker: "HROWM",
    company_name: "HARROW, INC.",
  },
  {
    cik_str: 1373670,
    ticker: "GRBK-PA",
    company_name: "Green Brick Partners, Inc.",
  },
  {
    cik_str: 1267395,
    ticker: "AHL-PE",
    company_name: "ASPEN INSURANCE HOLDINGS LTD",
  },
  {
    cik_str: 1169770,
    ticker: "BANC-PF",
    company_name: "BANC OF CALIFORNIA, INC.",
  },
  {
    cik_str: 1357671,
    ticker: "CRTDW",
    company_name: "Creatd, Inc.",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PL",
    company_name: "Public Storage",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PM",
    company_name: "Public Storage",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PN",
    company_name: "Public Storage",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PO",
    company_name: "Public Storage",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PI",
    company_name: "Public Storage",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PF",
    company_name: "Public Storage",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PG",
    company_name: "Public Storage",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PP",
    company_name: "Public Storage",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PQ",
    company_name: "Public Storage",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PR",
    company_name: "Public Storage",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PS",
    company_name: "Public Storage",
  },
  {
    cik_str: 1393311,
    ticker: "PSA-PJ",
    company_name: "Public Storage",
  },
  {
    cik_str: 1335105,
    ticker: "LIXTW",
    company_name: "LIXTE BIOTECHNOLOGY HOLDINGS, INC.",
  },
  {
    cik_str: 1336364,
    ticker: "GIGGF",
    company_name: "Giga Metals Corp",
  },
  {
    cik_str: 1333986,
    ticker: "EQH-PA",
    company_name: "Equitable Holdings, Inc.",
  },
  {
    cik_str: 1333986,
    ticker: "EQH-PC",
    company_name: "Equitable Holdings, Inc.",
  },
  {
    cik_str: 1332349,
    ticker: "BKDT",
    company_name: "Brookdale Senior Living Inc.",
  },
  {
    cik_str: 1438893,
    ticker: "GNT-PA",
    company_name: "GAMCO Natural Resources, Gold & Income Trust",
  },
  {
    cik_str: 1454480,
    ticker: "SHZNF",
    company_name: "Shenzhen Expressway Co. / ADR",
  },
  {
    cik_str: 1456772,
    ticker: "OPINL",
    company_name: "OFFICE PROPERTIES INCOME TRUST",
  },
  {
    cik_str: 1298946,
    ticker: "DRH-PA",
    company_name: "DiamondRock Hospitality Co",
  },
  {
    cik_str: 1323468,
    ticker: "GLP-PB",
    company_name: "GLOBAL PARTNERS LP",
  },
  {
    cik_str: 1224608,
    ticker: "CNO-PA",
    company_name: "CNO Financial Group, Inc.",
  },
  {
    cik_str: 1260729,
    ticker: "GDV-PK",
    company_name: "GABELLI DIVIDEND & INCOME TRUST",
  },
  {
    cik_str: 1281895,
    ticker: "RCKTW",
    company_name: "ROCKET PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1276187,
    ticker: "ET-PI",
    company_name: "Energy Transfer LP",
  },
  {
    cik_str: 1274173,
    ticker: "JUHDF",
    company_name: "JANUS HENDERSON GROUP PLC",
  },
  {
    cik_str: 1276187,
    ticker: "ET-PC",
    company_name: "Energy Transfer LP",
  },
  {
    cik_str: 1276187,
    ticker: "ET-PD",
    company_name: "Energy Transfer LP",
  },
  {
    cik_str: 1276187,
    ticker: "ET-PE",
    company_name: "Energy Transfer LP",
  },
  {
    cik_str: 1408057,
    ticker: "ICNP",
    company_name: "iCoreConnect Inc.",
  },
  {
    cik_str: 1408057,
    ticker: "ICCRW",
    company_name: "iCoreConnect Inc.",
  },
  {
    cik_str: 1398805,
    ticker: "BEEMW",
    company_name: "Beam Global",
  },
  {
    cik_str: 1406234,
    ticker: "BIPI",
    company_name: "Brookfield Infrastructure Partners L.P.",
  },
  {
    cik_str: 1406234,
    ticker: "BRIPF",
    company_name: "Brookfield Infrastructure Partners L.P.",
  },
  {
    cik_str: 1406234,
    ticker: "BIP-PA",
    company_name: "Brookfield Infrastructure Partners L.P.",
  },
  {
    cik_str: 1406234,
    ticker: "BIP-PB",
    company_name: "Brookfield Infrastructure Partners L.P.",
  },
  {
    cik_str: 1378701,
    ticker: "GDL-PC",
    company_name: "GDL FUND",
  },
  {
    cik_str: 1357878,
    ticker: "RGPX",
    company_name: "REGENEREX PHARMA, INC.",
  },
  {
    cik_str: 1356115,
    ticker: "NXDT-PA",
    company_name: "NEXPOINT DIVERSIFIED REAL ESTATE TRUST",
  },
  {
    cik_str: 1355096,
    ticker: "QRTEP",
    company_name: "Qurate Retail, Inc.",
  },
  {
    cik_str: 1347652,
    ticker: "CORRL",
    company_name: "CorEnergy Infrastructure Trust, Inc.",
  },
  {
    cik_str: 1419951,
    ticker: "DTSTW",
    company_name: "Data Storage Corp",
  },
  {
    cik_str: 1452804,
    ticker: "RMHI",
    company_name: "Retrieve Medical Holdings, Inc.",
  },
  {
    cik_str: 1464343,
    ticker: "ATLCL",
    company_name: "Atlanticus Holdings Corp",
  },
  {
    cik_str: 1464343,
    ticker: "ATLCP",
    company_name: "Atlanticus Holdings Corp",
  },
  {
    cik_str: 1468091,
    ticker: "VNLTF",
    company_name: "VEON Ltd.",
  },
  {
    cik_str: 1468929,
    ticker: "NXGLW",
    company_name: "NEXGEL, INC.",
  },
  {
    cik_str: 1482512,
    ticker: "HPP-PC",
    company_name: "Hudson Pacific Properties, Inc.",
  },
  {
    cik_str: 1389207,
    ticker: "GFSAY",
    company_name: "Gafisa S.A.",
  },
  {
    cik_str: 1372920,
    ticker: "NWOEF",
    company_name: "New Oriental Education & Technology Group Inc.",
  },
  {
    cik_str: 1345126,
    ticker: "CODI-PC",
    company_name: "Compass Diversified Holdings",
  },
  {
    cik_str: 1234006,
    ticker: "GOODN",
    company_name: "GLADSTONE COMMERCIAL CORP",
  },
  {
    cik_str: 1259429,
    ticker: "OXSQG",
    company_name: "Oxford Square Capital Corp.",
  },
  {
    cik_str: 1259429,
    ticker: "OXSQZ",
    company_name: "Oxford Square Capital Corp.",
  },
  {
    cik_str: 1648087,
    ticker: "AREBW",
    company_name: "AMERICAN REBEL HOLDINGS INC",
  },
  {
    cik_str: 1627606,
    ticker: "DTEAF",
    company_name: "DAVIDsTEA Inc.",
  },
  {
    cik_str: 1618563,
    ticker: "NSA-PB",
    company_name: "National Storage Affiliates Trust",
  },
  {
    cik_str: 1571283,
    ticker: "REXR-PC",
    company_name: "Rexford Industrial Realty, Inc.",
  },
  {
    cik_str: 1527590,
    ticker: "RCB",
    company_name: "Ready Capital Corp",
  },
  {
    cik_str: 1527590,
    ticker: "RCC",
    company_name: "Ready Capital Corp",
  },
  {
    cik_str: 1527590,
    ticker: "RC-PC",
    company_name: "Ready Capital Corp",
  },
  {
    cik_str: 1527590,
    ticker: "RC-PE",
    company_name: "Ready Capital Corp",
  },
  {
    cik_str: 1526125,
    ticker: "GDHLF",
    company_name: "GDS Holdings Ltd",
  },
  {
    cik_str: 1561032,
    ticker: "HTIBP",
    company_name: "Healthcare Trust, Inc.",
  },
  {
    cik_str: 1557376,
    ticker: "OCELD",
    company_name: "Organicell Regenerative Medicine, Inc.",
  },
  {
    cik_str: 1550913,
    ticker: "AENPP",
    company_name: "MacKenzie Realty Capital, Inc.",
  },
  {
    cik_str: 1550913,
    ticker: "MKZR",
    company_name: "MacKenzie Realty Capital, Inc.",
  },
  {
    cik_str: 1554625,
    ticker: "PRIF-PH",
    company_name: "Priority Income Fund, Inc.",
  },
  {
    cik_str: 1554625,
    ticker: "PRIF-PI",
    company_name: "Priority Income Fund, Inc.",
  },
  {
    cik_str: 1554625,
    ticker: "PRIF-PJ",
    company_name: "Priority Income Fund, Inc.",
  },
  {
    cik_str: 1554625,
    ticker: "PRIF-PK",
    company_name: "Priority Income Fund, Inc.",
  },
  {
    cik_str: 1554625,
    ticker: "PRIF-PL",
    company_name: "Priority Income Fund, Inc.",
  },
  {
    cik_str: 1554625,
    ticker: "PRIF-PD",
    company_name: "Priority Income Fund, Inc.",
  },
  {
    cik_str: 1554625,
    ticker: "PRIF-PF",
    company_name: "Priority Income Fund, Inc.",
  },
  {
    cik_str: 1554625,
    ticker: "PRIF-PG",
    company_name: "Priority Income Fund, Inc.",
  },
  {
    cik_str: 1552198,
    ticker: "WHFCL",
    company_name: "WhiteHorse Finance, Inc.",
  },
  {
    cik_str: 1532619,
    ticker: "PW-PA",
    company_name: "Power REIT",
  },
  {
    cik_str: 1534043,
    ticker: "FUPPF",
    company_name: "Fuchs Petrolub SE/ADR",
  },
  {
    cik_str: 1518461,
    ticker: "AMPGW",
    company_name: "AmpliTech Group, Inc.",
  },
  {
    cik_str: 1520504,
    ticker: "CTTRF",
    company_name: "Controladora Vuela Compania de Aviacion, S.A.B. de C.V.",
  },
  {
    cik_str: 1527166,
    ticker: "CGABL",
    company_name: "Carlyle Group Inc.",
  },
  {
    cik_str: 1533232,
    ticker: "BEPH",
    company_name: "Brookfield Renewable Partners L.P.",
  },
  {
    cik_str: 1533232,
    ticker: "BEPI",
    company_name: "Brookfield Renewable Partners L.P.",
  },
  {
    cik_str: 1533232,
    ticker: "BEP-PA",
    company_name: "Brookfield Renewable Partners L.P.",
  },
  {
    cik_str: 1533232,
    ticker: "BRENF",
    company_name: "Brookfield Renewable Partners L.P.",
  },
  {
    cik_str: 1486159,
    ticker: "OASPW",
    company_name: "Chord Energy Corp",
  },
  {
    cik_str: 1579214,
    ticker: "EEXAP",
    company_name: "Emerald Holding, Inc.",
  },
  {
    cik_str: 1576018,
    ticker: "SPNT-PB",
    company_name: "SiriusPoint Ltd",
  },
  {
    cik_str: 1576018,
    ticker: "SSPFF",
    company_name: "SiriusPoint Ltd",
  },
  {
    cik_str: 1512922,
    ticker: "PETVW",
    company_name: "PetVivo Holdings, Inc.",
  },
  {
    cik_str: 1506307,
    ticker: "EP-PC",
    company_name: "KINDER MORGAN, INC.",
  },
  {
    cik_str: 1512228,
    ticker: "NIOBW",
    company_name: "NIOCORP DEVELOPMENTS LTD",
  },
  {
    cik_str: 1583771,
    ticker: "CTRVP",
    company_name: "Hepion Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1610853,
    ticker: "HSDTW",
    company_name: "HELIUS MEDICAL TECHNOLOGIES, INC.",
  },
  {
    cik_str: 1610820,
    ticker: "BCTXW",
    company_name: "BriaCell Therapeutics Corp.",
  },
  {
    cik_str: 1614806,
    ticker: "AJXA",
    company_name: "Great Ajax Corp.",
  },
  {
    cik_str: 1624326,
    ticker: "PAVMZ",
    company_name: "PAVmed Inc.",
  },
  {
    cik_str: 1451448,
    ticker: "GMBLP",
    company_name: "ESPORTS ENTERTAINMENT GROUP, INC.",
  },
  {
    cik_str: 1451448,
    ticker: "GMBLW",
    company_name: "ESPORTS ENTERTAINMENT GROUP, INC.",
  },
  {
    cik_str: 1451448,
    ticker: "GMBLZ",
    company_name: "ESPORTS ENTERTAINMENT GROUP, INC.",
  },
  {
    cik_str: 1513525,
    ticker: "ADIWW",
    company_name: "ADIAL PHARMACEUTICALS, INC.",
  },
  {
    cik_str: 1534525,
    ticker: "XBIOW",
    company_name: "Xenetic Biosciences, Inc.",
  },
  {
    cik_str: 1535778,
    ticker: "MSCF",
    company_name: "MSC INCOME FUND, INC.",
  },
  {
    cik_str: 1527352,
    ticker: "NXLIW",
    company_name: "Nexalin Technology, Inc.",
  },
  {
    cik_str: 1469395,
    ticker: "PPENF",
    company_name: "Pampa Energy Inc.",
  },
  {
    cik_str: 1490349,
    ticker: "PFXNZ",
    company_name: "PhenixFIN Corp",
  },
  {
    cik_str: 1503290,
    ticker: "ACP-PA",
    company_name: "abrdn Income Credit Strategies Fund",
  },
  {
    cik_str: 1555812,
    ticker: "SMKUF",
    company_name: "Siam Makro Public Co Limited/ADR",
  },
  {
    cik_str: 1575311,
    ticker: "DTLAP",
    company_name: "Brookfield DTLA Fund Office Trust Investor Inc.",
  },
  {
    cik_str: 1567526,
    ticker: "IHICF",
    company_name: "IHI Corporation/ADR",
  },
  {
    cik_str: 1538495,
    ticker: "UNOV",
    company_name: "Earth Science Tech, Inc.",
  },
  {
    cik_str: 1527469,
    ticker: "ATH-PB",
    company_name: "Athene Holding Ltd",
  },
  {
    cik_str: 1527469,
    ticker: "ATH-PC",
    company_name: "Athene Holding Ltd",
  },
  {
    cik_str: 1527469,
    ticker: "ATH-PD",
    company_name: "Athene Holding Ltd",
  },
  {
    cik_str: 1527469,
    ticker: "ATH-PE",
    company_name: "Athene Holding Ltd",
  },
  {
    cik_str: 1483934,
    ticker: "SBBA",
    company_name: "Scorpio Tankers Inc.",
  },
  {
    cik_str: 1464423,
    ticker: "PMTU",
    company_name: "PennyMac Mortgage Investment Trust",
  },
  {
    cik_str: 1464423,
    ticker: "PMT-PC",
    company_name: "PennyMac Mortgage Investment Trust",
  },
  {
    cik_str: 1468608,
    ticker: "VODAF",
    company_name: "Vodacom Group Ltd / ADR",
  },
  {
    cik_str: 1471824,
    ticker: "CANE",
    company_name: "Teucrium Commodity Trust",
  },
  {
    cik_str: 1471824,
    ticker: "TAGS",
    company_name: "Teucrium Commodity Trust",
  },
  {
    cik_str: 1471824,
    ticker: "WEAT",
    company_name: "Teucrium Commodity Trust",
  },
  {
    cik_str: 1471824,
    ticker: "SOYB",
    company_name: "Teucrium Commodity Trust",
  },
  {
    cik_str: 1471824,
    ticker: "CORN",
    company_name: "Teucrium Commodity Trust",
  },
  {
    cik_str: 1471824,
    ticker: "DEFI",
    company_name: "Teucrium Commodity Trust",
  },
  {
    cik_str: 1648960,
    ticker: "DATSW",
    company_name: "DatChat, Inc.",
  },
  {
    cik_str: 1649009,
    ticker: "SYTAW",
    company_name: "Siyata Mobile Inc.",
  },
  {
    cik_str: 1612188,
    ticker: "TEOF",
    company_name: "TEO FOODS INC",
  },
  {
    cik_str: 1606268,
    ticker: "VIASP",
    company_name: "Via Renewables, Inc.",
  },
  {
    cik_str: 1631596,
    ticker: "KREF-PA",
    company_name: "KKR Real Estate Finance Trust Inc.",
  },
  {
    cik_str: 1654595,
    ticker: "MDRRP",
    company_name: "Medalist Diversified REIT, Inc.",
  },
  {
    cik_str: 1645873,
    ticker: "MDV-PA",
    company_name: "Modiv Industrial, Inc.",
  },
  {
    cik_str: 1644903,
    ticker: "YCBD-PA",
    company_name: "cbdMD, Inc.",
  },
  {
    cik_str: 1590715,
    ticker: "ARECW",
    company_name: "American Resources Corp",
  },
  {
    cik_str: 1552000,
    ticker: "MPLXP",
    company_name: "MPLX LP",
  },
  {
    cik_str: 1541309,
    ticker: "CRSLF",
    company_name: "carsales.com Limited/ADR",
  },
  {
    cik_str: 1539638,
    ticker: "TFINP",
    company_name: "Triumph Financial, Inc.",
  },
  {
    cik_str: 1556593,
    ticker: "RITM-PA",
    company_name: "Rithm Capital Corp.",
  },
  {
    cik_str: 1556593,
    ticker: "RITM-PB",
    company_name: "Rithm Capital Corp.",
  },
  {
    cik_str: 1556593,
    ticker: "RITM-PC",
    company_name: "Rithm Capital Corp.",
  },
  {
    cik_str: 1556593,
    ticker: "RITM-PD",
    company_name: "Rithm Capital Corp.",
  },
  {
    cik_str: 1591890,
    ticker: "FGFPP",
    company_name: "FG Financial Group, Inc.",
  },
  {
    cik_str: 1588272,
    ticker: "NXPT",
    company_name: "NexPoint Capital, Inc.",
  },
  {
    cik_str: 1587603,
    ticker: "WNRS",
    company_name: "WINNERS, INC.",
  },
  {
    cik_str: 1527541,
    ticker: "WHLRL",
    company_name: "Wheeler Real Estate Investment Trust, Inc.",
  },
  {
    cik_str: 1512673,
    ticker: "BSQKZ",
    company_name: "Block, Inc.",
  },
  {
    cik_str: 1509589,
    ticker: "CIVII",
    company_name: "CIVITAS RESOURCES, INC.",
  },
  {
    cik_str: 1509589,
    ticker: "CIVIW",
    company_name: "CIVITAS RESOURCES, INC.",
  },
  {
    cik_str: 1505611,
    ticker: "DPSIP",
    company_name: "DecisionPoint Systems, Inc.",
  },
  {
    cik_str: 1501072,
    ticker: "RIV-PA",
    company_name: "RIVERNORTH OPPORTUNITIES FUND, INC.",
  },
  {
    cik_str: 1609253,
    ticker: "CRCQW",
    company_name: "California Resources Corp",
  },
  {
    cik_str: 1611983,
    ticker: "LBRDP",
    company_name: "Liberty Broadband Corp",
  },
  {
    cik_str: 1620179,
    ticker: "XELAP",
    company_name: "Exela Technologies, Inc.",
  },
  {
    cik_str: 1619312,
    ticker: "LTSV",
    company_name: "Lightstone Value Plus REIT IV, Inc.",
  },
  {
    cik_str: 1783036,
    ticker: "NLSPW",
    company_name: "NLS Pharmaceutics Ltd.",
  },
  {
    cik_str: 1640043,
    ticker: "PXSAP",
    company_name: "Pyxis Tankers Inc.",
  },
  {
    cik_str: 1640043,
    ticker: "PXSAW",
    company_name: "Pyxis Tankers Inc.",
  },
  {
    cik_str: 1632970,
    ticker: "AHRT",
    company_name: "American Healthcare REIT, Inc.",
  },
  {
    cik_str: 1629019,
    ticker: "MBINM",
    company_name: "Merchants Bancorp",
  },
  {
    cik_str: 1629019,
    ticker: "MBINN",
    company_name: "Merchants Bancorp",
  },
  {
    cik_str: 1629019,
    ticker: "MBINO",
    company_name: "Merchants Bancorp",
  },
  {
    cik_str: 1628171,
    ticker: "RVMDW",
    company_name: "Revolution Medicines, Inc.",
  },
  {
    cik_str: 1691936,
    ticker: "SNAXW",
    company_name: "STRYVE FOODS, INC.",
  },
  {
    cik_str: 1693577,
    ticker: "MNSBP",
    company_name: "MainStreet Bancshares, Inc.",
  },
  {
    cik_str: 1699880,
    ticker: "AMRLF",
    company_name: "American Lithium Corp.",
  },
  {
    cik_str: 1713539,
    ticker: "KXINW",
    company_name: "Kaixin Auto Holdings",
  },
  {
    cik_str: 1716583,
    ticker: "HYZNW",
    company_name: "Hyzon Motors Inc.",
  },
  {
    cik_str: 1710680,
    ticker: "HFRO-PA",
    company_name: "HIGHLAND OPPORTUNITIES & INCOME FUND",
  },
  {
    cik_str: 1682220,
    ticker: "SCCF",
    company_name: "Sachem Capital Corp.",
  },
  {
    cik_str: 1682220,
    ticker: "SCCG",
    company_name: "Sachem Capital Corp.",
  },
  {
    cik_str: 1682220,
    ticker: "SACH-PA",
    company_name: "Sachem Capital Corp.",
  },
  {
    cik_str: 1682220,
    ticker: "SCCB",
    company_name: "Sachem Capital Corp.",
  },
  {
    cik_str: 1682220,
    ticker: "SCCC",
    company_name: "Sachem Capital Corp.",
  },
  {
    cik_str: 1682220,
    ticker: "SCCD",
    company_name: "Sachem Capital Corp.",
  },
  {
    cik_str: 1682220,
    ticker: "SCCE",
    company_name: "Sachem Capital Corp.",
  },
  {
    cik_str: 1682220,
    ticker: "SACC",
    company_name: "Sachem Capital Corp.",
  },
  {
    cik_str: 1662972,
    ticker: "BSTT",
    company_name: "Blackstone Real Estate Income Trust, Inc.",
  },
  {
    cik_str: 1657853,
    ticker: "HTZWW",
    company_name: "HERTZ GLOBAL HOLDINGS, INC",
  },
  {
    cik_str: 1665300,
    ticker: "PHUNW",
    company_name: "Phunware, Inc.",
  },
  {
    cik_str: 1752474,
    ticker: "KLDIW",
    company_name: "KLDiscovery Inc.",
  },
  {
    cik_str: 1753673,
    ticker: "SJOYW",
    company_name: "Scienjoy Holding Corp",
  },
  {
    cik_str: 1776909,
    ticker: "CURIW",
    company_name: "CuriosityStream Inc.",
  },
  {
    cik_str: 1774675,
    ticker: "SKILW",
    company_name: "Skillsoft Corp.",
  },
  {
    cik_str: 1759186,
    ticker: "COEPW",
    company_name: "Coeptis Therapeutics Holdings, Inc.",
  },
  {
    cik_str: 1725872,
    ticker: "BMTX-WT",
    company_name: "BM Technologies, Inc.",
  },
  {
    cik_str: 1718224,
    ticker: "BTBDW",
    company_name: "BT Brands, Inc.",
  },
  {
    cik_str: 1739174,
    ticker: "PHGE-UN",
    company_name: "BiomX Inc.",
  },
  {
    cik_str: 1739174,
    ticker: "PHGEW",
    company_name: "BiomX Inc.",
  },
  {
    cik_str: 1742927,
    ticker: "RVPHW",
    company_name: "REVIVA PHARMACEUTICALS HOLDINGS, INC.",
  },
  {
    cik_str: 1690012,
    ticker: "ICRL",
    company_name: "InPoint Commercial Real Estate Income, Inc.",
  },
  {
    cik_str: 1690012,
    ticker: "ICRP",
    company_name: "InPoint Commercial Real Estate Income, Inc.",
  },
  {
    cik_str: 1698538,
    ticker: "STSR",
    company_name: "Strategic Student & Senior Housing Trust, Inc.",
  },
  {
    cik_str: 1651308,
    ticker: "BEIGF",
    company_name: "BeiGene, Ltd.",
  },
  {
    cik_str: 1661053,
    ticker: "NVNBW",
    company_name: "enVVeno Medical Corp",
  },
  {
    cik_str: 1676047,
    ticker: "NTRBW",
    company_name: "NutriBand Inc.",
  },
  {
    cik_str: 1495240,
    ticker: "LANDO",
    company_name: "GLADSTONE LAND Corp",
  },
  {
    cik_str: 1496099,
    ticker: "NMFCZ",
    company_name: "New Mountain Finance Corp",
  },
  {
    cik_str: 1501697,
    ticker: "XFOWW",
    company_name: "X4 Pharmaceuticals, Inc",
  },
  {
    cik_str: 1501697,
    ticker: "XFORW",
    company_name: "X4 Pharmaceuticals, Inc",
  },
  {
    cik_str: 1501729,
    ticker: "FSEN",
    company_name: "FS Specialty Lending Fund",
  },
  {
    cik_str: 1502292,
    ticker: "CNFRZ",
    company_name: "Conifer Holdings, Inc.",
  },
  {
    cik_str: 1520118,
    ticker: "EMSF",
    company_name: "INTEGRATED VENTURES, INC.",
  },
  {
    cik_str: 1526113,
    ticker: "GNL-PB",
    company_name: "Global Net Lease, Inc.",
  },
  {
    cik_str: 1526113,
    ticker: "GNL-PE",
    company_name: "Global Net Lease, Inc.",
  },
  {
    cik_str: 1526113,
    ticker: "GNL-PD",
    company_name: "Global Net Lease, Inc.",
  },
  {
    cik_str: 1466026,
    ticker: "MSBIP",
    company_name: "Midland States Bancorp, Inc.",
  },
  {
    cik_str: 1467505,
    ticker: "RECX",
    company_name: "Planet Resource Recovery, Inc.",
  },
  {
    cik_str: 1479247,
    ticker: "CPER",
    company_name: "United States Commodity Index Funds Trust",
  },
  {
    cik_str: 1479247,
    ticker: "USCI",
    company_name: "United States Commodity Index Funds Trust",
  },
  {
    cik_str: 1462223,
    ticker: "RCRTW",
    company_name: "Recruiter.com Group, Inc.",
  },
  {
    cik_str: 1464790,
    ticker: "RILYP",
    company_name: "B. Riley Financial, Inc.",
  },
  {
    cik_str: 1464790,
    ticker: "RILYT",
    company_name: "B. Riley Financial, Inc.",
  },
  {
    cik_str: 1464790,
    ticker: "RILYZ",
    company_name: "B. Riley Financial, Inc.",
  },
  {
    cik_str: 1464790,
    ticker: "RILYG",
    company_name: "B. Riley Financial, Inc.",
  },
  {
    cik_str: 1464790,
    ticker: "RILYK",
    company_name: "B. Riley Financial, Inc.",
  },
  {
    cik_str: 1464790,
    ticker: "RILYL",
    company_name: "B. Riley Financial, Inc.",
  },
  {
    cik_str: 1464790,
    ticker: "RILYM",
    company_name: "B. Riley Financial, Inc.",
  },
  {
    cik_str: 1464790,
    ticker: "RILYN",
    company_name: "B. Riley Financial, Inc.",
  },
  {
    cik_str: 1464790,
    ticker: "RILYO",
    company_name: "B. Riley Financial, Inc.",
  },
  {
    cik_str: 1495222,
    ticker: "OXLCP",
    company_name: "Oxford Lane Capital Corp.",
  },
  {
    cik_str: 1495222,
    ticker: "OXLCZ",
    company_name: "Oxford Lane Capital Corp.",
  },
  {
    cik_str: 1488813,
    ticker: "CUBB",
    company_name: "Customers Bancorp, Inc.",
  },
  {
    cik_str: 1487428,
    ticker: "HTFB",
    company_name: "Horizon Technology Finance Corp",
  },
  {
    cik_str: 1487428,
    ticker: "HTFC",
    company_name: "Horizon Technology Finance Corp",
  },
  {
    cik_str: 1495222,
    ticker: "OXLCN",
    company_name: "Oxford Lane Capital Corp.",
  },
  {
    cik_str: 1497645,
    ticker: "INN-PF",
    company_name: "Summit Hotel Properties, Inc.",
  },
  {
    cik_str: 1495222,
    ticker: "OXLCL",
    company_name: "Oxford Lane Capital Corp.",
  },
  {
    cik_str: 1487918,
    ticker: "OFSSH",
    company_name: "OFS Capital Corp",
  },
  {
    cik_str: 1321741,
    ticker: "GAINN",
    company_name: "GLADSTONE INVESTMENT CORPORATION\\DE",
  },
  {
    cik_str: 1321741,
    ticker: "GAINZ",
    company_name: "GLADSTONE INVESTMENT CORPORATION\\DE",
  },
  {
    cik_str: 1332174,
    ticker: "IFXAF",
    company_name: "iShares S&P GSCI Commodity-Indexed Trust",
  },
  {
    cik_str: 1332174,
    ticker: "ISMCF",
    company_name: "iShares S&P GSCI Commodity-Indexed Trust",
  },
  {
    cik_str: 1348362,
    ticker: "LEXXW",
    company_name: "Lexaria Bioscience Corp.",
  },
  {
    cik_str: 1431852,
    ticker: "ODVWZ",
    company_name: "Osisko Development Corp.",
  },
  {
    cik_str: 1424657,
    ticker: "CUENW",
    company_name: "Cuentas Inc.",
  },
  {
    cik_str: 1377936,
    ticker: "SAT",
    company_name: "SARATOGA INVESTMENT CORP.",
  },
  {
    cik_str: 1377936,
    ticker: "SAY",
    company_name: "SARATOGA INVESTMENT CORP.",
  },
  {
    cik_str: 1377936,
    ticker: "SAZ",
    company_name: "SARATOGA INVESTMENT CORP.",
  },
  {
    cik_str: 1377936,
    ticker: "SAJ",
    company_name: "SARATOGA INVESTMENT CORP.",
  },
  {
    cik_str: 1397183,
    ticker: "IVDAW",
    company_name: "Iveda Solutions, Inc.",
  },
  {
    cik_str: 1392694,
    ticker: "SURGW",
    company_name: "SurgePays, Inc.",
  },
  {
    cik_str: 1326160,
    ticker: "DUKB",
    company_name: "Duke Energy CORP",
  },
  {
    cik_str: 1408534,
    ticker: "FGBIP",
    company_name: "First Guaranty Bancshares, Inc.",
  },
  {
    cik_str: 1407573,
    ticker: "ACRU",
    company_name: "AmeriCrew Inc.",
  },
  {
    cik_str: 1404912,
    ticker: "KKRS",
    company_name: "KKR & Co. Inc.",
  },
  {
    cik_str: 1423689,
    ticker: "AGNCO",
    company_name: "AGNC Investment Corp.",
  },
  {
    cik_str: 1423689,
    ticker: "AGNCP",
    company_name: "AGNC Investment Corp.",
  },
  {
    cik_str: 1423689,
    ticker: "AGNCL",
    company_name: "AGNC Investment Corp.",
  },
  {
    cik_str: 1232384,
    ticker: "TCNCF",
    company_name: "TC ENERGY CORP",
  },
  {
    cik_str: 1232384,
    ticker: "TRPRF",
    company_name: "TC ENERGY CORP",
  },
  {
    cik_str: 1232384,
    ticker: "TRPPF",
    company_name: "TC ENERGY CORP",
  },
  {
    cik_str: 1232384,
    ticker: "TRPEF",
    company_name: "TC ENERGY CORP",
  },
  {
    cik_str: 1415311,
    ticker: "AGQ",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "BOIL",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "EUO",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "GLL",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "UVXY",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "VIXM",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "VIXY",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "YCL",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "YCS",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "ZSL",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "SCO",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "SVXY",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "UCO",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "UGL",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "ULE",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1415311,
    ticker: "KOLD",
    company_name: "ProShares Trust II",
  },
  {
    cik_str: 1442655,
    ticker: "NGKSF",
    company_name: "NGK Spark Plug Co., Ltd.",
  },
  {
    cik_str: 1446457,
    ticker: "BLIDF",
    company_name: "Boliden AB",
  },
  {
    cik_str: 1163739,
    ticker: "NBRWF",
    company_name: "NABORS INDUSTRIES LTD",
  },
  {
    cik_str: 1273685,
    ticker: "NYMTZ",
    company_name: "NEW YORK MORTGAGE TRUST INC",
  },
  {
    cik_str: 1266806,
    ticker: "VANIW",
    company_name: "Vivani Medical, Inc.",
  },
  {
    cik_str: 1273685,
    ticker: "NYMTL",
    company_name: "NEW YORK MORTGAGE TRUST INC",
  },
  {
    cik_str: 1273685,
    ticker: "NYMTM",
    company_name: "NEW YORK MORTGAGE TRUST INC",
  },
  {
    cik_str: 1175483,
    ticker: "DSHKN",
    company_name: "Drive Shack Inc.",
  },
  {
    cik_str: 1175483,
    ticker: "DSHKO",
    company_name: "Drive Shack Inc.",
  },
  {
    cik_str: 1175483,
    ticker: "DSHKP",
    company_name: "Drive Shack Inc.",
  },
  {
    cik_str: 1212545,
    ticker: "WAL-PA",
    company_name: "WESTERN ALLIANCE BANCORPORATION",
  },
  {
    cik_str: 1261249,
    ticker: "AGXRW",
    company_name: "AGILE THERAPEUTICS INC",
  },
  {
    cik_str: 1255474,
    ticker: "WLLAW",
    company_name: "Whiting Holdings LLC",
  },
  {
    cik_str: 1255474,
    ticker: "WLLBW",
    company_name: "Whiting Holdings LLC",
  },
  {
    cik_str: 1496254,
    ticker: "LTAFX",
    company_name: "Alternative Strategies Income Fund",
  },
  {
    cik_str: 1496254,
    ticker: "LTCFX",
    company_name: "Alternative Strategies Income Fund",
  },
  {
    cik_str: 1487718,
    ticker: "BLTHD",
    company_name: "AMERICAN BATTERY MATERIALS, INC.",
  },
  {
    cik_str: 1633336,
    ticker: "FCRX",
    company_name: "Crescent Capital BDC, Inc.",
  },
  {
    cik_str: 1630805,
    ticker: "BWNB",
    company_name: "Babcock & Wilcox Enterprises, Inc.",
  },
  {
    cik_str: 1630805,
    ticker: "BW-PA",
    company_name: "Babcock & Wilcox Enterprises, Inc.",
  },
  {
    cik_str: 1630805,
    ticker: "BWSN",
    company_name: "Babcock & Wilcox Enterprises, Inc.",
  },
  {
    cik_str: 1603016,
    ticker: "HMLPF",
    company_name: "Hoegh LNG Partners LP",
  },
  {
    cik_str: 1624422,
    ticker: "ERYFF",
    company_name: "PHAXIAM Therapeutics S.A.",
  },
  {
    cik_str: 1603923,
    ticker: "WFTUF",
    company_name: "Weatherford International plc",
  },
  {
    cik_str: 1572957,
    ticker: "BGLAF",
    company_name: "BioGaia AB/ADR",
  },
  {
    cik_str: 1560385,
    ticker: "LLYVK",
    company_name: "Liberty Media Corp",
  },
  {
    cik_str: 1560385,
    ticker: "LLYVA",
    company_name: "Liberty Media Corp",
  },
  {
    cik_str: 1560385,
    ticker: "LLYVB",
    company_name: "Liberty Media Corp",
  },
  {
    cik_str: 1534281,
    ticker: "MBUMF",
    company_name: "Mabuchi Motor Co., Ltd./ADR",
  },
  {
    cik_str: 1546066,
    ticker: "PPLOF",
    company_name: "PEMBINA PIPELINE CORP",
  },
  {
    cik_str: 1546066,
    ticker: "PPLAF",
    company_name: "PEMBINA PIPELINE CORP",
  },
  {
    cik_str: 1546066,
    ticker: "PBNAF",
    company_name: "PEMBINA PIPELINE CORP",
  },
  {
    cik_str: 1546066,
    ticker: "PMBPF",
    company_name: "PEMBINA PIPELINE CORP",
  },
  {
    cik_str: 1546066,
    ticker: "PMMBF",
    company_name: "PEMBINA PIPELINE CORP",
  },
  {
    cik_str: 1506492,
    ticker: "NUWEW",
    company_name: "Nuwellis, Inc.",
  },
  {
    cik_str: 1498382,
    ticker: "DMPWW",
    company_name: "Kintara Therapeutics, Inc.",
  },
  {
    cik_str: 1514281,
    ticker: "MITT-PC",
    company_name: "AG Mortgage Investment Trust, Inc.",
  },
  {
    cik_str: 1482541,
    ticker: "CEADW",
    company_name: "CEA Industries Inc.",
  },
  {
    cik_str: 1475260,
    ticker: "CVE-WT",
    company_name: "CENOVUS ENERGY INC.",
  },
  {
    cik_str: 1475260,
    ticker: "CNVEF",
    company_name: "CENOVUS ENERGY INC.",
  },
  {
    cik_str: 1476045,
    ticker: "CLDT-PA",
    company_name: "Chatham Lodging Trust",
  },
  {
    cik_str: 1474098,
    ticker: "PEB-PG",
    company_name: "Pebblebrook Hotel Trust",
  },
  {
    cik_str: 1474098,
    ticker: "PEB-PH",
    company_name: "Pebblebrook Hotel Trust",
  },
  {
    cik_str: 1468492,
    ticker: "HSCSW",
    company_name: "Heart Test Laboratories, Inc.",
  },
  {
    cik_str: 1469115,
    ticker: "RDGH",
    company_name: "Ridgedale Holdings Inc.",
  },
  {
    cik_str: 1467845,
    ticker: "KUSA",
    company_name: "Kashin, Inc.",
  },
  {
    cik_str: 1605888,
    ticker: "SQLLW",
    company_name: "SeqLL, Inc.",
  },
  {
    cik_str: 1587987,
    ticker: "NEWTL",
    company_name: "NewtekOne, Inc.",
  },
  {
    cik_str: 1587987,
    ticker: "NEWTZ",
    company_name: "NewtekOne, Inc.",
  },
  {
    cik_str: 1585389,
    ticker: "SSST",
    company_name: "SmartStop Self Storage REIT, Inc.",
  },
  {
    cik_str: 1582982,
    ticker: "CCLDO",
    company_name: "CareCloud, Inc.",
  },
  {
    cik_str: 1582982,
    ticker: "CCLDP",
    company_name: "CareCloud, Inc.",
  },
  {
    cik_str: 1601712,
    ticker: "SYF-PA",
    company_name: "Synchrony Financial",
  },
  {
    cik_str: 1604174,
    ticker: "ECCC",
    company_name: "Eagle Point Credit Co Inc.",
  },
  {
    cik_str: 1604174,
    ticker: "ECC-PD",
    company_name: "Eagle Point Credit Co Inc.",
  },
  {
    cik_str: 1604174,
    ticker: "ECCV",
    company_name: "Eagle Point Credit Co Inc.",
  },
  {
    cik_str: 1604174,
    ticker: "ECCW",
    company_name: "Eagle Point Credit Co Inc.",
  },
  {
    cik_str: 1547546,
    ticker: "LFT-PA",
    company_name: "Lument Finance Trust, Inc.",
  },
  {
    cik_str: 1554818,
    ticker: "AUUDW",
    company_name: "AUDDIA INC.",
  },
  {
    cik_str: 1562463,
    ticker: "INBKZ",
    company_name: "First Internet Bancorp",
  },
  {
    cik_str: 1569650,
    ticker: "OZKAP",
    company_name: "Bank OZK",
  },
  {
    cik_str: 1635077,
    ticker: "ACONW",
    company_name: "Aclarion, Inc.",
  },
  {
    cik_str: 1621221,
    ticker: "ATLEW",
    company_name: "ARTELO BIOSCIENCES, INC.",
  },
  {
    cik_str: 1498233,
    ticker: "CPTNW",
    company_name: "Cepton, Inc.",
  },
  {
    cik_str: 1509470,
    ticker: "SSSSL",
    company_name: "SURO CAPITAL CORP.",
  },
  {
    cik_str: 1544206,
    ticker: "CGBDL",
    company_name: "Carlyle Secured Lending, Inc.",
  },
  {
    cik_str: 1545772,
    ticker: "BPYPM",
    company_name: "Brookfield Property Partners L.P.",
  },
  {
    cik_str: 1545772,
    ticker: "BPYPN",
    company_name: "Brookfield Property Partners L.P.",
  },
  {
    cik_str: 1545772,
    ticker: "BPYPO",
    company_name: "Brookfield Property Partners L.P.",
  },
  {
    cik_str: 1550453,
    ticker: "TRIC",
    company_name: "TriLinc Global Impact Fund LLC",
  },
  {
    cik_str: 1550453,
    ticker: "TRLC",
    company_name: "TriLinc Global Impact Fund LLC",
  },
  {
    cik_str: 1517767,
    ticker: "CCIA",
    company_name: "Carlyle Credit Income Fund",
  },
  {
    cik_str: 1562528,
    ticker: "FBRT-PE",
    company_name: "Franklin BSP Realty Trust, Inc.",
  },
  {
    cik_str: 1553788,
    ticker: "SBEV-WT",
    company_name: "SPLASH BEVERAGE GROUP, INC.",
  },
  {
    cik_str: 1560293,
    ticker: "TNONW",
    company_name: "Tenon Medical, Inc.",
  },
  {
    cik_str: 1593773,
    ticker: "AMJT",
    company_name: "AMJ Global Technology",
  },
  {
    cik_str: 1590364,
    ticker: "FTAIM",
    company_name: "FTAI Aviation Ltd.",
  },
  {
    cik_str: 1590364,
    ticker: "FTAIN",
    company_name: "FTAI Aviation Ltd.",
  },
  {
    cik_str: 1590364,
    ticker: "FTAIO",
    company_name: "FTAI Aviation Ltd.",
  },
  {
    cik_str: 1590364,
    ticker: "FTAIP",
    company_name: "FTAI Aviation Ltd.",
  },
  {
    cik_str: 1716951,
    ticker: "OCCIN",
    company_name: "OFS Credit Company, Inc.",
  },
  {
    cik_str: 1716951,
    ticker: "OCCIO",
    company_name: "OFS Credit Company, Inc.",
  },
  {
    cik_str: 1712189,
    ticker: "THWWW",
    company_name: "Target Hospitality Corp.",
  },
  {
    cik_str: 1725134,
    ticker: "DMSIW",
    company_name: "Digital Media Solutions, Inc.",
  },
  {
    cik_str: 1730346,
    ticker: "CHRB",
    company_name: "Charah Solutions, Inc.",
  },
  {
    cik_str: 1685040,
    ticker: "BHFAM",
    company_name: "Brighthouse Financial, Inc.",
  },
  {
    cik_str: 1685040,
    ticker: "BHFAN",
    company_name: "Brighthouse Financial, Inc.",
  },
  {
    cik_str: 1685040,
    ticker: "BHFAO",
    company_name: "Brighthouse Financial, Inc.",
  },
  {
    cik_str: 1671584,
    ticker: "APVTW",
    company_name: "Aptevo Therapeutics Inc.",
  },
  {
    cik_str: 1756404,
    ticker: "PDSKX",
    company_name: "Principal Real Asset Fund",
  },
  {
    cik_str: 1662574,
    ticker: "GROMW",
    company_name: "Grom Social Enterprises, Inc.",
  },
  {
    cik_str: 1651721,
    ticker: "GIPRW",
    company_name: "GENERATION INCOME PROPERTIES, INC.",
  },
  {
    cik_str: 1733861,
    ticker: "RTEZD",
    company_name: "REST EZ Inc.",
  },
  {
    cik_str: 1727255,
    ticker: "COBA",
    company_name: "Chilean Cobalt Corp.",
  },
  {
    cik_str: 1630472,
    ticker: "TRTX-PC",
    company_name: "TPG RE Finance Trust, Inc.",
  },
  {
    cik_str: 1610940,
    ticker: "BDRY",
    company_name: "ETF Managers Group Commodity Trust I",
  },
  {
    cik_str: 1610940,
    ticker: "BWET",
    company_name: "ETF Managers Group Commodity Trust I",
  },
  {
    cik_str: 1760764,
    ticker: "GMVWF",
    company_name: "G Medical Innovations Holdings Ltd.",
  },
  {
    cik_str: 1744494,
    ticker: "ADNWW",
    company_name: "ADVENT TECHNOLOGIES HOLDINGS, INC.",
  },
  {
    cik_str: 1791706,
    ticker: "LAAOF",
    company_name: "Li Auto Inc.",
  },
  {
    cik_str: 1784567,
    ticker: "HCDIP",
    company_name: "Harbor Custom Development, Inc.",
  },
  {
    cik_str: 1784567,
    ticker: "HCDIW",
    company_name: "Harbor Custom Development, Inc.",
  },
  {
    cik_str: 1784567,
    ticker: "HCDIZ",
    company_name: "Harbor Custom Development, Inc.",
  },
  {
    cik_str: 1785424,
    ticker: "KPLTW",
    company_name: "Katapult Holdings, Inc.",
  },
  {
    cik_str: 1783398,
    ticker: "UWMC-WT",
    company_name: "UWM Holdings Corp",
  },
  {
    cik_str: 1666175,
    ticker: "FORFF",
    company_name: "Fortis Inc.",
  },
  {
    cik_str: 1666175,
    ticker: "FTRSF",
    company_name: "Fortis Inc.",
  },
  {
    cik_str: 1653384,
    ticker: "RWAYL",
    company_name: "Runway Growth Finance Corp.",
  },
  {
    cik_str: 1653384,
    ticker: "RWAYZ",
    company_name: "Runway Growth Finance Corp.",
  },
  {
    cik_str: 1651944,
    ticker: "DMTKW",
    company_name: "DermTech, Inc.",
  },
  {
    cik_str: 1668010,
    ticker: "DBGIW",
    company_name: "Digital Brands Group, Inc.",
  },
  {
    cik_str: 1673481,
    ticker: "LTRYW",
    company_name: "Lottery.com Inc.",
  },
  {
    cik_str: 1675033,
    ticker: "GECCM",
    company_name: "Great Elm Capital Corp.",
  },
  {
    cik_str: 1675033,
    ticker: "GECCO",
    company_name: "Great Elm Capital Corp.",
  },
  {
    cik_str: 1675033,
    ticker: "GECCZ",
    company_name: "Great Elm Capital Corp.",
  },
  {
    cik_str: 1679063,
    ticker: "CSSEZ",
    company_name: "Chicken Soup for the Soul Entertainment, Inc.",
  },
  {
    cik_str: 1679063,
    ticker: "CSSEL",
    company_name: "Chicken Soup for the Soul Entertainment, Inc.",
  },
  {
    cik_str: 1679063,
    ticker: "CSSEN",
    company_name: "Chicken Soup for the Soul Entertainment, Inc.",
  },
  {
    cik_str: 1687187,
    ticker: "METCL",
    company_name: "Ramaco Resources, Inc.",
  },
  {
    cik_str: 1687187,
    ticker: "METCB",
    company_name: "Ramaco Resources, Inc.",
  },
  {
    cik_str: 1692819,
    ticker: "VST-WTA",
    company_name: "Vistra Corp.",
  },
  {
    cik_str: 1660734,
    ticker: "TRTN-PB",
    company_name: "Triton International Ltd",
  },
  {
    cik_str: 1660734,
    ticker: "TRTN-PC",
    company_name: "Triton International Ltd",
  },
  {
    cik_str: 1660734,
    ticker: "TRTN-PD",
    company_name: "Triton International Ltd",
  },
  {
    cik_str: 1660734,
    ticker: "TRTN-PE",
    company_name: "Triton International Ltd",
  },
  {
    cik_str: 1678130,
    ticker: "OPP-PA",
    company_name: "RiverNorth/DoubleLine Strategic Opportunity Fund, Inc.",
  },
  {
    cik_str: 1678130,
    ticker: "OPP-PB",
    company_name: "RiverNorth/DoubleLine Strategic Opportunity Fund, Inc.",
  },
  {
    cik_str: 1680935,
    ticker: "HHEGF",
    company_name: "Huahui Education Group Ltd",
  },
  {
    cik_str: 1723580,
    ticker: "BFIIW",
    company_name: "BurgerFi International, Inc.",
  },
  {
    cik_str: 1721386,
    ticker: "LSEAW",
    company_name: "Landsea Homes Corp",
  },
  {
    cik_str: 1729944,
    ticker: "IMACW",
    company_name: "IMAC Holdings, Inc.",
  },
  {
    cik_str: 1726079,
    ticker: "TMEF",
    company_name: "Tipmefast, Inc.",
  },
  {
    cik_str: 1703079,
    ticker: "XFLT-PA",
    company_name: "XAI Octagon Floating Rate & Alternative Income Term Trust",
  },
  {
    cik_str: 1781629,
    ticker: "ANKM",
    company_name: "Ankam, Inc.",
  },
  {
    cik_str: 1788756,
    ticker: "PFTY",
    company_name: "Parallel Flight Technologies, Inc.",
  },
  {
    cik_str: 1760903,
    ticker: "SHOTW",
    company_name: "Safety Shot, Inc.",
  },
  {
    cik_str: 1775734,
    ticker: "BENFW",
    company_name: "Beneficient",
  },
  {
    cik_str: 1776661,
    ticker: "ADVWW",
    company_name: "Advantage Solutions Inc.",
  },
  {
    cik_str: 1796514,
    ticker: "BTCTW",
    company_name: "BTC Digital Ltd.",
  },
  {
    cik_str: 1801417,
    ticker: "BYNOU",
    company_name: "byNordic Acquisition Corp",
  },
  {
    cik_str: 1801417,
    ticker: "BYNOW",
    company_name: "byNordic Acquisition Corp",
  },
  {
    cik_str: 1705012,
    ticker: "FATBP",
    company_name: "Fat Brands, Inc",
  },
  {
    cik_str: 1705012,
    ticker: "FATBW",
    company_name: "Fat Brands, Inc",
  },
  {
    cik_str: 1708176,
    ticker: "HOFVW",
    company_name: "Hall of Fame Resort & Entertainment Co",
  },
  {
    cik_str: 1718405,
    ticker: "HYMCL",
    company_name: "HYCROFT MINING HOLDING CORP",
  },
  {
    cik_str: 1718405,
    ticker: "HYMCW",
    company_name: "HYCROFT MINING HOLDING CORP",
  },
  {
    cik_str: 1735041,
    ticker: "GTECW",
    company_name: "Greenland Technologies Holding Corp.",
  },
  {
    cik_str: 1738758,
    ticker: "GSMGW",
    company_name: "Cheer Holding, Inc.",
  },
  {
    cik_str: 1747009,
    ticker: "EQTNP",
    company_name: "Equitrans Midstream Corp",
  },
  {
    cik_str: 1759824,
    ticker: "ALTG-PA",
    company_name: "ALTA EQUIPMENT GROUP INC.",
  },
  {
    cik_str: 1758699,
    ticker: "TRSO",
    company_name: "TRANSUITE.ORG INC.",
  },
  {
    cik_str: 1753539,
    ticker: "BKSY-WT",
    company_name: "BlackSky Technology Inc.",
  },
  {
    cik_str: 1748680,
    ticker: "OWSCX",
    company_name: "1WS Credit Income Fund",
  },
  {
    cik_str: 1716947,
    ticker: "ENSCW",
    company_name: "Ensysce Biosciences, Inc.",
  },
  {
    cik_str: 1722438,
    ticker: "DOMAW",
    company_name: "Doma Holdings, Inc.",
  },
  {
    cik_str: 1779372,
    ticker: "BEATW",
    company_name: "HeartBeam, Inc.",
  },
  {
    cik_str: 1769624,
    ticker: "AGBAW",
    company_name: "AGBA Group Holding Ltd.",
  },
  {
    cik_str: 1755953,
    ticker: "KERNW",
    company_name: "Akerna Corp.",
  },
  {
    cik_str: 1765651,
    ticker: "PSPX",
    company_name: "Pacific Sports Exchange Inc.",
  },
  {
    cik_str: 1760689,
    ticker: "MVSTW",
    company_name: "Microvast Holdings, Inc.",
  },
  {
    cik_str: 1777921,
    ticker: "AVPTW",
    company_name: "AvePoint, Inc.",
  },
  {
    cik_str: 1784851,
    ticker: "SHPWW",
    company_name: "Shapeways Holdings, Inc.",
  },
  {
    cik_str: 1786108,
    ticker: "TRINL",
    company_name: "Trinity Capital Inc.",
  },
  {
    cik_str: 1695519,
    ticker: "ATGAF",
    company_name: "AltaGas Ltd.",
  },
  {
    cik_str: 1695519,
    ticker: "ATGPF",
    company_name: "AltaGas Ltd.",
  },
  {
    cik_str: 1701963,
    ticker: "VSSYW",
    company_name: "Versus Systems Inc.",
  },
  {
    cik_str: 1690080,
    ticker: "ATNFW",
    company_name: "180 Life Sciences Corp.",
  },
  {
    cik_str: 1703644,
    ticker: "GPMT-PA",
    company_name: "Granite Point Mortgage Trust Inc.",
  },
  {
    cik_str: 1708341,
    ticker: "AGAEW",
    company_name: "Allied Gaming & Entertainment Inc.",
  },
  {
    cik_str: 1711570,
    ticker: "URCWF",
    company_name: "Uranium Royalty Corp.",
  },
  {
    cik_str: 1838513,
    ticker: "GATEU",
    company_name: "Marblegate Acquisition Corp.",
  },
  {
    cik_str: 1838513,
    ticker: "GATEW",
    company_name: "Marblegate Acquisition Corp.",
  },
  {
    cik_str: 1837493,
    ticker: "IINNW",
    company_name: "Inspira Technologies OXY B.H.N. Ltd",
  },
  {
    cik_str: 1830033,
    ticker: "PCTTU",
    company_name: "PureCycle Technologies, Inc.",
  },
  {
    cik_str: 1830033,
    ticker: "PCTTW",
    company_name: "PureCycle Technologies, Inc.",
  },
  {
    cik_str: 1835512,
    ticker: "LLAP-WT",
    company_name: "Terran Orbital Corp",
  },
  {
    cik_str: 1828248,
    ticker: "CVII-UN",
    company_name: "Churchill Capital Corp VII",
  },
  {
    cik_str: 1828248,
    ticker: "CVII-WT",
    company_name: "Churchill Capital Corp VII",
  },
  {
    cik_str: 1830029,
    ticker: "ADEX-UN",
    company_name: "Adit EdTech Acquisition Corp.",
  },
  {
    cik_str: 1830029,
    ticker: "ADEX-WT",
    company_name: "Adit EdTech Acquisition Corp.",
  },
  {
    cik_str: 1828972,
    ticker: "BZFDW",
    company_name: "BuzzFeed, Inc.",
  },
  {
    cik_str: 1831006,
    ticker: "BLUA-UN",
    company_name: "BlueRiver Acquisition Corp.",
  },
  {
    cik_str: 1831006,
    ticker: "BLUA-WT",
    company_name: "BlueRiver Acquisition Corp.",
  },
  {
    cik_str: 1832136,
    ticker: "OSI-UN",
    company_name: "Osiris Acquisition Corp.",
  },
  {
    cik_str: 1832136,
    ticker: "OSI-WT",
    company_name: "Osiris Acquisition Corp.",
  },
  {
    cik_str: 1826011,
    ticker: "VIIAU",
    company_name: "Banzai International, Inc.",
  },
  {
    cik_str: 1826011,
    ticker: "VIIAW",
    company_name: "Banzai International, Inc.",
  },
  {
    cik_str: 1826011,
    ticker: "BNZIW",
    company_name: "Banzai International, Inc.",
  },
  {
    cik_str: 1824185,
    ticker: "HHLA-UN",
    company_name: "HH&L Acquisition Co.",
  },
  {
    cik_str: 1824185,
    ticker: "HHLA-WT",
    company_name: "HH&L Acquisition Co.",
  },
  {
    cik_str: 1824204,
    ticker: "PVOZ",
    company_name: "Park View OZ REIT Inc",
  },
  {
    cik_str: 1824920,
    ticker: "IONQ-WT",
    company_name: "IonQ, Inc.",
  },
  {
    cik_str: 1820175,
    ticker: "OCAXU",
    company_name: "OCA Acquisition Corp.",
  },
  {
    cik_str: 1820190,
    ticker: "SCLXW",
    company_name: "Scilex Holding Co",
  },
  {
    cik_str: 1821159,
    ticker: "EVGOW",
    company_name: "EVgo Inc.",
  },
  {
    cik_str: 1821850,
    ticker: "SUNLQ",
    company_name: "Sunlight Financial Holdings Inc.",
  },
  {
    cik_str: 1821850,
    ticker: "SULWQ",
    company_name: "Sunlight Financial Holdings Inc.",
  },
  {
    cik_str: 1819615,
    ticker: "CLVRW",
    company_name: "Clever Leaves Holdings Inc.",
  },
  {
    cik_str: 1820175,
    ticker: "OCAXW",
    company_name: "OCA Acquisition Corp.",
  },
  {
    cik_str: 1817868,
    ticker: "JAQCU",
    company_name: "Jupiter Acquisition Corp",
  },
  {
    cik_str: 1817868,
    ticker: "JAQCW",
    company_name: "Jupiter Acquisition Corp",
  },
  {
    cik_str: 1808377,
    ticker: "LUCYW",
    company_name: "Innovative Eyewear Inc",
  },
  {
    cik_str: 1804176,
    ticker: "BFLY-WT",
    company_name: "Butterfly Network, Inc.",
  },
  {
    cik_str: 1788348,
    ticker: "BIPH",
    company_name: "Brookfield Infrastructure Corp",
  },
  {
    cik_str: 1805385,
    ticker: "EVLVW",
    company_name: "Evolv Technologies Holdings, Inc.",
  },
  {
    cik_str: 1806347,
    ticker: "WESTW",
    company_name: "Westrock Coffee Co",
  },
  {
    cik_str: 1795938,
    ticker: "CEAI",
    company_name: "Creations Inc",
  },
  {
    cik_str: 1799983,
    ticker: "GB-WT",
    company_name: "Global Blue Group Holding AG",
  },
  {
    cik_str: 1812727,
    ticker: "RELIW",
    company_name: "Reliance Global Group, Inc.",
  },
  {
    cik_str: 1809750,
    ticker: "EDBLW",
    company_name: "Edible Garden AG Inc",
  },
  {
    cik_str: 1813814,
    ticker: "MMDCF",
    company_name: "Mind Medicine (MindMed) Inc.",
  },
  {
    cik_str: 1794846,
    ticker: "ATCOL",
    company_name: "Atlas Corp.",
  },
  {
    cik_str: 1794846,
    ticker: "ATCO-PD",
    company_name: "Atlas Corp.",
  },
  {
    cik_str: 1794846,
    ticker: "ATCO-PH",
    company_name: "Atlas Corp.",
  },
  {
    cik_str: 1792941,
    ticker: "GNVR",
    company_name: "Genvor Inc",
  },
  {
    cik_str: 1818674,
    ticker: "SYBE",
    company_name: "SYBLEU Inc",
  },
  {
    cik_str: 1754836,
    ticker: "EICB",
    company_name: "Eagle Point Income Co Inc.",
  },
  {
    cik_str: 1754836,
    ticker: "EICA",
    company_name: "Eagle Point Income Co Inc.",
  },
  {
    cik_str: 1761534,
    ticker: "GRDV",
    company_name: "Golden Royal Development Inc.",
  },
  {
    cik_str: 1758488,
    ticker: "OSWWF",
    company_name: "ONESPAWORLD HOLDINGS Ltd",
  },
  {
    cik_str: 1748137,
    ticker: "NEOVW",
    company_name: "NeoVolta Inc.",
  },
  {
    cik_str: 1712762,
    ticker: "BIAFW",
    company_name: "bioAffinity Technologies, Inc.",
  },
  {
    cik_str: 1709682,
    ticker: "CTOS-WT",
    company_name: "Custom Truck One Source, Inc.",
  },
  {
    cik_str: 1691421,
    ticker: "LMND-WT",
    company_name: "Lemonade, Inc.",
  },
  {
    cik_str: 1685428,
    ticker: "LMDXW",
    company_name: "LumiraDx Ltd",
  },
  {
    cik_str: 1644771,
    ticker: "RMPL-P",
    company_name: "RiverNorth Capital & Income Fund, Inc.",
  },
  {
    cik_str: 1785592,
    ticker: "LFLYW",
    company_name: "Leafly Holdings, Inc. /DE",
  },
  {
    cik_str: 1661779,
    ticker: "STGC",
    company_name: "STARTENGINE CROWDFUNDING, INC.",
  },
  {
    cik_str: 1679688,
    ticker: "DBRG-PH",
    company_name: "DigitalBridge Group, Inc.",
  },
  {
    cik_str: 1679688,
    ticker: "DBRG-PI",
    company_name: "DigitalBridge Group, Inc.",
  },
  {
    cik_str: 1679688,
    ticker: "DBRG-PJ",
    company_name: "DigitalBridge Group, Inc.",
  },
  {
    cik_str: 1705338,
    ticker: "LOVLQ",
    company_name: "Spark Networks SE",
  },
  {
    cik_str: 1719406,
    ticker: "NRXPW",
    company_name: "NRX Pharmaceuticals, Inc.",
  },
  {
    cik_str: 1721056,
    ticker: "HSCT",
    company_name: "HOOPS SCOUTING USA",
  },
  {
    cik_str: 1779474,
    ticker: "MAPSW",
    company_name: "WM TECHNOLOGY, INC.",
  },
  {
    cik_str: 1774983,
    ticker: "BROGW",
    company_name: "Brooge Energy Ltd",
  },
  {
    cik_str: 1753706,
    ticker: "FREEW",
    company_name: "Whole Earth Brands, Inc.",
  },
  {
    cik_str: 1752828,
    ticker: "CELUW",
    company_name: "Celularity Inc",
  },
  {
    cik_str: 1737995,
    ticker: "STSSW",
    company_name: "Sharps Technology Inc.",
  },
  {
    cik_str: 1743905,
    ticker: "RVSNW",
    company_name: "Rail Vision Ltd.",
  },
  {
    cik_str: 1723648,
    ticker: "LVOXU",
    company_name: "LiveVox Holdings, Inc.",
  },
  {
    cik_str: 1723648,
    ticker: "LVOXW",
    company_name: "LiveVox Holdings, Inc.",
  },
  {
    cik_str: 1729637,
    ticker: "KARX",
    company_name: "Karbon-X Corp.",
  },
  {
    cik_str: 1800682,
    ticker: "CANOW",
    company_name: "Cano Health, Inc.",
  },
  {
    cik_str: 1805077,
    ticker: "EOSEW",
    company_name: "Eos Energy Enterprises, Inc.",
  },
  {
    cik_str: 1798562,
    ticker: "TMCWW",
    company_name: "TMC the metals Co Inc.",
  },
  {
    cik_str: 1839998,
    ticker: "AONCW",
    company_name: "American Oncology Network, Inc.",
  },
  {
    cik_str: 1838831,
    ticker: "DISAU",
    company_name: "Disruptive Acquisition Corp I",
  },
  {
    cik_str: 1838831,
    ticker: "DISAW",
    company_name: "Disruptive Acquisition Corp I",
  },
  {
    cik_str: 1838876,
    ticker: "GSLR",
    company_name: "GeoSolar Technologies, Inc.",
  },
  {
    cik_str: 1836833,
    ticker: "PL-WT",
    company_name: "Planet Labs PBC",
  },
  {
    cik_str: 1834518,
    ticker: "NSTB-UN",
    company_name: "Northern Star Investment Corp. II",
  },
  {
    cik_str: 1834518,
    ticker: "NSTB-WT",
    company_name: "Northern Star Investment Corp. II",
  },
  {
    cik_str: 1828522,
    ticker: "EFTRW",
    company_name: "eFFECTOR Therapeutics, Inc.",
  },
  {
    cik_str: 1829322,
    ticker: "SZZLU",
    company_name: "Sizzle Acquisition Corp.",
  },
  {
    cik_str: 1829322,
    ticker: "SZZLW",
    company_name: "Sizzle Acquisition Corp.",
  },
  {
    cik_str: 1825452,
    ticker: "ONFOW",
    company_name: "Onfolio Holdings, Inc",
  },
  {
    cik_str: 1824502,
    ticker: "ACHR-WT",
    company_name: "Archer Aviation Inc.",
  },
  {
    cik_str: 1833214,
    ticker: "SABSW",
    company_name: "SAB Biotherapeutics, Inc.",
  },
  {
    cik_str: 1831979,
    ticker: "GPACU",
    company_name: "Global Partner Acquisition Corp II",
  },
  {
    cik_str: 1831979,
    ticker: "GPACW",
    company_name: "Global Partner Acquisition Corp II",
  },
  {
    cik_str: 1831096,
    ticker: "GEGGL",
    company_name: "Great Elm Group, Inc.",
  },
  {
    cik_str: 1830081,
    ticker: "RUMBW",
    company_name: "Rumble Inc.",
  },
  {
    cik_str: 1831978,
    ticker: "NBSTU",
    company_name: "Newbury Street Acquisition Corp",
  },
  {
    cik_str: 1831978,
    ticker: "NBSTW",
    company_name: "Newbury Street Acquisition Corp",
  },
  {
    cik_str: 1810560,
    ticker: "REVBW",
    company_name: "REVELATION BIOSCIENCES, INC.",
  },
  {
    cik_str: 1813914,
    ticker: "CMAXW",
    company_name: "CareMax, Inc.",
  },
  {
    cik_str: 1819498,
    ticker: "TWLVU",
    company_name: "Twelve Seas Investment Co. II",
  },
  {
    cik_str: 1819498,
    ticker: "TWLVW",
    company_name: "Twelve Seas Investment Co. II",
  },
  {
    cik_str: 1819516,
    ticker: "WSUPW",
    company_name: "Wheels Up Experience Inc.",
  },
  {
    cik_str: 1819574,
    ticker: "BARK-WT",
    company_name: "Bark, Inc.",
  },
  {
    cik_str: 1820144,
    ticker: "GRND-WT",
    company_name: "Grindr Inc.",
  },
  {
    cik_str: 1823466,
    ticker: "NOTE-WT",
    company_name: "FiscalNote Holdings, Inc.",
  },
  {
    cik_str: 1822791,
    ticker: "CLNNW",
    company_name: "Clene Inc.",
  },
  {
    cik_str: 1830210,
    ticker: "BHIL-WT",
    company_name: "Benson Hill, Inc.",
  },
  {
    cik_str: 1826889,
    ticker: "BODYW",
    company_name: "Beachbody Company, Inc.",
  },
  {
    cik_str: 1830214,
    ticker: "DNA-WT",
    company_name: "Ginkgo Bioworks Holdings, Inc.",
  },
  {
    cik_str: 1831359,
    ticker: "JWSM-UN",
    company_name: "Jaws Mustang Acquisition Corp",
  },
  {
    cik_str: 1831359,
    ticker: "JWSM-WT",
    company_name: "Jaws Mustang Acquisition Corp",
  },
  {
    cik_str: 1835817,
    ticker: "NSTTW",
    company_name: "Northern Star Investment Corp. III",
  },
  {
    cik_str: 1836981,
    ticker: "BBAI-WT",
    company_name: "BigBear.ai Holdings, Inc.",
  },
  {
    cik_str: 1835856,
    ticker: "BETRW",
    company_name: "Better Home & Finance Holding Co",
  },
  {
    cik_str: 1834974,
    ticker: "LEV-WT",
    company_name: "Lion Electric Co",
  },
  {
    cik_str: 1834974,
    ticker: "LEV-WTA",
    company_name: "Lion Electric Co",
  },
  {
    cik_str: 1835814,
    ticker: "NSTDW",
    company_name: "Northern Star Investment Corp. IV",
  },
  {
    cik_str: 1835814,
    ticker: "NSTDU",
    company_name: "Northern Star Investment Corp. IV",
  },
  {
    cik_str: 1835817,
    ticker: "NSTCU",
    company_name: "Northern Star Investment Corp. III",
  },
  {
    cik_str: 1780312,
    ticker: "ASTSW",
    company_name: "AST SpaceMobile, Inc.",
  },
  {
    cik_str: 1788028,
    ticker: "JSPRW",
    company_name: "Jasper Therapeutics, Inc.",
  },
  {
    cik_str: 1841675,
    ticker: "ARBKL",
    company_name: "Argo Blockchain Plc",
  },
  {
    cik_str: 1840776,
    ticker: "HGTPW",
    company_name: "Hagerty, Inc.",
  },
  {
    cik_str: 1840776,
    ticker: "HGTY-WT",
    company_name: "Hagerty, Inc.",
  },
  {
    cik_str: 1840780,
    ticker: "LOCLW",
    company_name: "Local Bounti Corporation/DE",
  },
  {
    cik_str: 1842556,
    ticker: "HNRA-WT",
    company_name: "HNR Acquisition Corp.",
  },
  {
    cik_str: 1842566,
    ticker: "BYTSU",
    company_name: "BYTE Acquisition Corp.",
  },
  {
    cik_str: 1842566,
    ticker: "BYTSW",
    company_name: "BYTE Acquisition Corp.",
  },
  {
    cik_str: 1843724,
    ticker: "LNZAW",
    company_name: "LanzaTech Global, Inc.",
  },
  {
    cik_str: 1847112,
    ticker: "TRTL-UN",
    company_name: "TortoiseEcofin Acquisition Corp. III",
  },
  {
    cik_str: 1847112,
    ticker: "TRTL-WT",
    company_name: "TortoiseEcofin Acquisition Corp. III",
  },
  {
    cik_str: 1849294,
    ticker: "FRLAU",
    company_name: "Fortune Rise Acquisition Corp",
  },
  {
    cik_str: 1849294,
    ticker: "FRLAW",
    company_name: "Fortune Rise Acquisition Corp",
  },
  {
    cik_str: 1844817,
    ticker: "AACIU",
    company_name: "Armada Acquisition Corp. I",
  },
  {
    cik_str: 1844817,
    ticker: "AACIW",
    company_name: "Armada Acquisition Corp. I",
  },
  {
    cik_str: 1844862,
    ticker: "SLDPW",
    company_name: "Solid Power, Inc.",
  },
  {
    cik_str: 1847075,
    ticker: "SAITW",
    company_name: "SAI.TECH Global Corp",
  },
  {
    cik_str: 1845815,
    ticker: "PAYOW",
    company_name: "Payoneer Global Inc.",
  },
  {
    cik_str: 1816581,
    ticker: "OUST-WTA",
    company_name: "Ouster, Inc.",
  },
  {
    cik_str: 1812173,
    ticker: "RBOT-WT",
    company_name: "Vicarious Surgical Inc.",
  },
  {
    cik_str: 1811063,
    ticker: "NUVB-WT",
    company_name: "Nuvation Bio Inc.",
  },
  {
    cik_str: 1802749,
    ticker: "ZEVYW",
    company_name: "Lightning eMotors, Inc.",
  },
  {
    cik_str: 1801602,
    ticker: "SBIGW",
    company_name: "SpringBig Holdings, Inc.",
  },
  {
    cik_str: 1795589,
    ticker: "KCLHF",
    company_name: "Kingsoft Cloud Holdings Ltd",
  },
  {
    cik_str: 1793229,
    ticker: "MPLN-WT",
    company_name: "MultiPlan Corp",
  },
  {
    cik_str: 1821424,
    ticker: "UKOMW",
    company_name: "Ucommune International Ltd",
  },
  {
    cik_str: 1819810,
    ticker: "RDW-WT",
    company_name: "Redwire Corp",
  },
  {
    cik_str: 1819796,
    ticker: "GCMGW",
    company_name: "GCM Grosvenor Inc.",
  },
  {
    cik_str: 1823144,
    ticker: "CMPOW",
    company_name: "CompoSecure, Inc.",
  },
  {
    cik_str: 1823878,
    ticker: "MYPSW",
    company_name: "PLAYSTUDIOS, Inc.",
  },
  {
    cik_str: 1823882,
    ticker: "MIMWW",
    company_name: "Airspan Networks Holdings Inc.",
  },
  {
    cik_str: 1818382,
    ticker: "HUMAW",
    company_name: "Humacyte, Inc.",
  },
  {
    cik_str: 1819794,
    ticker: "HTOOW",
    company_name: "Fusion Fuel Green PLC",
  },
  {
    cik_str: 1819395,
    ticker: "SONDW",
    company_name: "Sonder Holdings Inc.",
  },
  {
    cik_str: 1817640,
    ticker: "BREZR",
    company_name: "Breeze Holdings Acquisition Corp.",
  },
  {
    cik_str: 1817640,
    ticker: "BREZW",
    company_name: "Breeze Holdings Acquisition Corp.",
  },
  {
    cik_str: 1816581,
    ticker: "OUST-WT",
    company_name: "Ouster, Inc.",
  },
  {
    cik_str: 1814287,
    ticker: "ABLLW",
    company_name: "Abacus Life, Inc.",
  },
  {
    cik_str: 1814287,
    ticker: "ABLLL",
    company_name: "Abacus Life, Inc.",
  },
  {
    cik_str: 1820566,
    ticker: "ISPOW",
    company_name: "Inspirato Inc",
  },
  {
    cik_str: 1822966,
    ticker: "SMR-WT",
    company_name: "NUSCALE POWER Corp",
  },
  {
    cik_str: 1818605,
    ticker: "DISTR",
    company_name: "Distoken Acquisition Corp",
  },
  {
    cik_str: 1818605,
    ticker: "DISTW",
    company_name: "Distoken Acquisition Corp",
  },
  {
    cik_str: 1818644,
    ticker: "LIDRW",
    company_name: "AEye, Inc.",
  },
  {
    cik_str: 1819848,
    ticker: "JOBY-WT",
    company_name: "Joby Aviation, Inc.",
  },
  {
    cik_str: 1828937,
    ticker: "FOA-WT",
    company_name: "Finance of America Companies Inc.",
  },
  {
    cik_str: 1828108,
    ticker: "AUROW",
    company_name: "Aurora Innovation, Inc.",
  },
  {
    cik_str: 1825079,
    ticker: "VLD-WT",
    company_name: "Velo3D, Inc.",
  },
  {
    cik_str: 1825024,
    ticker: "OPADW",
    company_name: "Offerpad Solutions Inc.",
  },
  {
    cik_str: 1823652,
    ticker: "EVEX-WT",
    company_name: "Eve Holding, Inc.",
  },
  {
    cik_str: 1824403,
    ticker: "RSVRW",
    company_name: "Reservoir Media, Inc.",
  },
  {
    cik_str: 1811109,
    ticker: "AUVIP",
    company_name: "Applied UV, Inc.",
  },
  {
    cik_str: 1815753,
    ticker: "TBCPU",
    company_name: "Thunder Bridge Capital Partners III Inc.",
  },
  {
    cik_str: 1816431,
    ticker: "QSIAW",
    company_name: "Quantum-Si Inc",
  },
  {
    cik_str: 1815753,
    ticker: "TBCPW",
    company_name: "Thunder Bridge Capital Partners III Inc.",
  },
  {
    cik_str: 1831964,
    ticker: "NRACU",
    company_name: "NORTHERN REVIVAL ACQUISITION Corp",
  },
  {
    cik_str: 1831964,
    ticker: "NRACW",
    company_name: "NORTHERN REVIVAL ACQUISITION Corp",
  },
  {
    cik_str: 1831270,
    ticker: "BITE-UN",
    company_name: "Bite Acquisition Corp.",
  },
  {
    cik_str: 1831270,
    ticker: "BITE-WT",
    company_name: "Bite Acquisition Corp.",
  },
  {
    cik_str: 1830188,
    ticker: "UHGWW",
    company_name: "United Homes Group, Inc.",
  },
  {
    cik_str: 1835378,
    ticker: "CTV-WT",
    company_name: "Innovid Corp.",
  },
  {
    cik_str: 1832950,
    ticker: "KRNLU",
    company_name: "Kernel Group Holdings, Inc.",
  },
  {
    cik_str: 1832950,
    ticker: "KRNLW",
    company_name: "Kernel Group Holdings, Inc.",
  },
  {
    cik_str: 1802457,
    ticker: "ORGNW",
    company_name: "Origin Materials, Inc.",
  },
  {
    cik_str: 1805521,
    ticker: "FFIEW",
    company_name: "FARADAY FUTURE INTELLIGENT ELECTRIC INC.",
  },
  {
    cik_str: 1804469,
    ticker: "GFAIW",
    company_name: "Guardforce AI Co., Ltd.",
  },
  {
    cik_str: 1800347,
    ticker: "ETWO-WT",
    company_name: "E2open Parent Holdings, Inc.",
  },
  {
    cik_str: 1792849,
    ticker: "HPKEW",
    company_name: "HighPeak Energy, Inc.",
  },
  {
    cik_str: 1815436,
    ticker: "MYZQF",
    company_name: "Advanced Health Intelligence Ltd",
  },
  {
    cik_str: 1814215,
    ticker: "BURU-WT",
    company_name: "Nuburu, Inc.",
  },
  {
    cik_str: 1807846,
    ticker: "ML-WT",
    company_name: "MONEYLION INC.",
  },
  {
    cik_str: 1810140,
    ticker: "POLSW",
    company_name: "Polished.com Inc.",
  },
  {
    cik_str: 1811856,
    ticker: "VIEWW",
    company_name: "View, Inc.",
  },
  {
    cik_str: 1823584,
    ticker: "AENTW",
    company_name: "ALLIANCE ENTERTAINMENT HOLDING CORP",
  },
  {
    cik_str: 1826397,
    ticker: "AGRIW",
    company_name: "AGRIFORCE GROWING SYSTEMS LTD.",
  },
  {
    cik_str: 1823587,
    ticker: "SKYH-WT",
    company_name: "Sky Harbour Group Corp",
  },
  {
    cik_str: 1829247,
    ticker: "BFRGW",
    company_name: "BullFrog AI Holdings, Inc.",
  },
  {
    cik_str: 1822928,
    ticker: "HLLY-WT",
    company_name: "Holley Inc.",
  },
  {
    cik_str: 1822886,
    ticker: "HHGCR",
    company_name: "HHG Capital Corp",
  },
  {
    cik_str: 1822886,
    ticker: "HHGCU",
    company_name: "HHG Capital Corp",
  },
  {
    cik_str: 1822886,
    ticker: "HHGCW",
    company_name: "HHG Capital Corp",
  },
  {
    cik_str: 1817232,
    ticker: "DUNEU",
    company_name: "Dune Acquisition Corp",
  },
  {
    cik_str: 1817232,
    ticker: "DUNEW",
    company_name: "Dune Acquisition Corp",
  },
  {
    cik_str: 1818331,
    ticker: "WGSWW",
    company_name: "GeneDx Holdings Corp.",
  },
  {
    cik_str: 1819142,
    ticker: "SES-WT",
    company_name: "SES AI Corp",
  },
  {
    cik_str: 1781162,
    ticker: "MNTSW",
    company_name: "Momentus Inc.",
  },
  {
    cik_str: 1779128,
    ticker: "BLDEW",
    company_name: "Blade Air Mobility, Inc.",
  },
  {
    cik_str: 1786248,
    ticker: "NREF-PA",
    company_name: "NexPoint Real Estate Finance, Inc.",
  },
  {
    cik_str: 1790625,
    ticker: "AGLWQ",
    company_name: "AgileThought, Inc.",
  },
  {
    cik_str: 1770141,
    ticker: "UPHLW",
    company_name: "UpHealth, Inc.",
  },
  {
    cik_str: 1764046,
    ticker: "CLVT-PA",
    company_name: "CLARIVATE Plc",
  },
  {
    cik_str: 1750153,
    ticker: "GOEVW",
    company_name: "Canoo Inc.",
  },
  {
    cik_str: 1840199,
    ticker: "WALDW",
    company_name: "Waldencast plc",
  },
  {
    cik_str: 1840225,
    ticker: "FSNBW",
    company_name: "Fusion Acquisition Corp. II",
  },
  {
    cik_str: 1841125,
    ticker: "GAMCU",
    company_name: "Golden Arrow Merger Corp.",
  },
  {
    cik_str: 1841125,
    ticker: "GAMCW",
    company_name: "Golden Arrow Merger Corp.",
  },
  {
    cik_str: 1841024,
    ticker: "LCAAU",
    company_name: "L Catterton Asia Acquisition Corp",
  },
  {
    cik_str: 1841024,
    ticker: "LCAAW",
    company_name: "L Catterton Asia Acquisition Corp",
  },
  {
    cik_str: 1838987,
    ticker: "CSLRW",
    company_name: "Complete Solaria, Inc.",
  },
  {
    cik_str: 1838000,
    ticker: "SWSSU",
    company_name: "Clean Energy Special Situations Corp.",
  },
  {
    cik_str: 1838000,
    ticker: "SWSSW",
    company_name: "Clean Energy Special Situations Corp.",
  },
  {
    cik_str: 1837929,
    ticker: "NPABU",
    company_name: "New Providence Acquisition Corp. II",
  },
  {
    cik_str: 1837929,
    ticker: "NPABW",
    company_name: "New Providence Acquisition Corp. II",
  },
  {
    cik_str: 1844149,
    ticker: "SPECW",
    company_name: "Spectaire Holdings Inc.",
  },
  {
    cik_str: 1843121,
    ticker: "OPA-UN",
    company_name: "Magnum Opus Acquisition Ltd",
  },
  {
    cik_str: 1843121,
    ticker: "OPA-WT",
    company_name: "Magnum Opus Acquisition Ltd",
  },
  {
    cik_str: 1845149,
    ticker: "CBRGU",
    company_name: "Chain Bridge I",
  },
  {
    cik_str: 1845149,
    ticker: "CBRGF",
    company_name: "Chain Bridge I",
  },
  {
    cik_str: 1846235,
    ticker: "IMAQU",
    company_name: "International Media Acquisition Corp.",
  },
  {
    cik_str: 1846235,
    ticker: "IMAQW",
    company_name: "International Media Acquisition Corp.",
  },
  {
    cik_str: 1844224,
    ticker: "FREY-WT",
    company_name: "FREYR Battery",
  },
  {
    cik_str: 1845097,
    ticker: "AMBP-WT",
    company_name: "Ardagh Metal Packaging S.A.",
  },
  {
    cik_str: 1847355,
    ticker: "TGAAU",
    company_name: "Target Global Acquisition I Corp.",
  },
  {
    cik_str: 1847355,
    ticker: "TGAAW",
    company_name: "Target Global Acquisition I Corp.",
  },
  {
    cik_str: 1848672,
    ticker: "GDLG",
    company_name: "Glidelogic Corp.",
  },
  {
    cik_str: 1848731,
    ticker: "GHBWF",
    company_name: "Glass House Brands Inc.",
  },
  {
    cik_str: 1845123,
    ticker: "IVCPU",
    company_name: "Swiftmerge Acquisition Corp.",
  },
  {
    cik_str: 1845123,
    ticker: "IVCPW",
    company_name: "Swiftmerge Acquisition Corp.",
  },
  {
    cik_str: 1846235,
    ticker: "IMAQR",
    company_name: "International Media Acquisition Corp.",
  },
  {
    cik_str: 1847345,
    ticker: "PWUPU",
    company_name: "PowerUp Acquisition Corp.",
  },
  {
    cik_str: 1847345,
    ticker: "PWUPW",
    company_name: "PowerUp Acquisition Corp.",
  },
  {
    cik_str: 1846253,
    ticker: "OABIW",
    company_name: "OmniAb, Inc.",
  },
  {
    cik_str: 1849820,
    ticker: "KITTW",
    company_name: "Nauticus Robotics, Inc.",
  },
  {
    cik_str: 1848756,
    ticker: "PHYT-UN",
    company_name: "Pyrophyte Acquisition Corp.",
  },
  {
    cik_str: 1848756,
    ticker: "PHYT-WT",
    company_name: "Pyrophyte Acquisition Corp.",
  },
  {
    cik_str: 1848739,
    ticker: "GDEVW",
    company_name: "GDEV Inc.",
  },
  {
    cik_str: 1809196,
    ticker: "IMTXW",
    company_name: "Immatics N.V.",
  },
  {
    cik_str: 1805833,
    ticker: "SST-WT",
    company_name: "System1, Inc.",
  },
  {
    cik_str: 1815849,
    ticker: "ATIPW",
    company_name: "ATI Physical Therapy, Inc.",
  },
  {
    cik_str: 1816613,
    ticker: "MKFG-WT",
    company_name: "Markforged Holding Corp",
  },
  {
    cik_str: 1818502,
    ticker: "OPFI-WT",
    company_name: "OppFi Inc.",
  },
  {
    cik_str: 1818550,
    ticker: "ICDX",
    company_name: "Incordex Corp.",
  },
  {
    cik_str: 1816708,
    ticker: "OWLTW",
    company_name: "Owlet, Inc.",
  },
  {
    cik_str: 1821606,
    ticker: "PMGMU",
    company_name: "Priveterra Acquisition Corp. II",
  },
  {
    cik_str: 1821606,
    ticker: "PMGMW",
    company_name: "Priveterra Acquisition Corp. II",
  },
  {
    cik_str: 1796949,
    ticker: "HCBR",
    company_name: "Healthcare Business Resources, Inc.",
  },
  {
    cik_str: 1793497,
    ticker: "SVIX",
    company_name: "VS Trust",
  },
  {
    cik_str: 1793497,
    ticker: "UVIX",
    company_name: "VS Trust",
  },
  {
    cik_str: 1803901,
    ticker: "TALKW",
    company_name: "Talkspace, Inc.",
  },
  {
    cik_str: 1788841,
    ticker: "MCOMW",
    company_name: "micromobility.com Inc.",
  },
  {
    cik_str: 1849902,
    ticker: "SEPAU",
    company_name: "SEP Acquisition Corp.",
  },
  {
    cik_str: 1848763,
    ticker: "RNWWW",
    company_name: "ReNew Energy Global plc",
  },
  {
    cik_str: 1847513,
    ticker: "TRONU",
    company_name: "CORNER GROWTH ACQUISITION CORP. 2",
  },
  {
    cik_str: 1847513,
    ticker: "TRONW",
    company_name: "CORNER GROWTH ACQUISITION CORP. 2",
  },
  {
    cik_str: 1848821,
    ticker: "GTACU",
    company_name: "Global Technology Acquisition Corp. I",
  },
  {
    cik_str: 1848821,
    ticker: "GTACW",
    company_name: "Global Technology Acquisition Corp. I",
  },
  {
    cik_str: 1849902,
    ticker: "SEPAW",
    company_name: "SEP Acquisition Corp.",
  },
  {
    cik_str: 1840292,
    ticker: "HLGNW",
    company_name: "Heliogen, Inc.",
  },
  {
    cik_str: 1839132,
    ticker: "MVLAW",
    company_name: "Movella Holdings Inc.",
  },
  {
    cik_str: 1838108,
    ticker: "RMGCU",
    company_name: "RMG Acquisition Corp. III",
  },
  {
    cik_str: 1838108,
    ticker: "RMGCW",
    company_name: "RMG Acquisition Corp. III",
  },
  {
    cik_str: 1834755,
    ticker: "SLACU",
    company_name: "Social Leverage Acquisition Corp I",
  },
  {
    cik_str: 1834755,
    ticker: "SLACW",
    company_name: "Social Leverage Acquisition Corp I",
  },
  {
    cik_str: 1836875,
    ticker: "NVVEW",
    company_name: "Nuvve Holding Corp.",
  },
  {
    cik_str: 1841209,
    ticker: "HOLOW",
    company_name: "MicroCloud Hologram Inc.",
  },
  {
    cik_str: 1841330,
    ticker: "KTTAW",
    company_name: "Pasithea Therapeutics Corp.",
  },
  {
    cik_str: 1843248,
    ticker: "GSDWU",
    company_name: "Global System Dynamics, Inc.",
  },
  {
    cik_str: 1843248,
    ticker: "GSDWW",
    company_name: "Global System Dynamics, Inc.",
  },
  {
    cik_str: 1842356,
    ticker: "PETWW",
    company_name: "Wag! Group Co.",
  },
  {
    cik_str: 1844389,
    ticker: "ACBAU",
    company_name: "Ace Global Business Acquisition Ltd",
  },
  {
    cik_str: 1844389,
    ticker: "ACBAW",
    company_name: "Ace Global Business Acquisition Ltd",
  },
  {
    cik_str: 1847440,
    ticker: "MITAU",
    company_name: "Coliseum Acquisition Corp.",
  },
  {
    cik_str: 1847440,
    ticker: "MITAW",
    company_name: "Coliseum Acquisition Corp.",
  },
  {
    cik_str: 1823000,
    ticker: "CONXU",
    company_name: "CONX Corp.",
  },
  {
    cik_str: 1823000,
    ticker: "CONXW",
    company_name: "CONX Corp.",
  },
  {
    cik_str: 1834045,
    ticker: "VWEWW",
    company_name: "Vintage Wine Estates, Inc.",
  },
  {
    cik_str: 1822145,
    ticker: "PRSTW",
    company_name: "Presto Automation Inc.",
  },
  {
    cik_str: 1822993,
    ticker: "JXN-PA",
    company_name: "Jackson Financial Inc.",
  },
  {
    cik_str: 1816233,
    ticker: "SHCRW",
    company_name: "Sharecare, Inc.",
  },
  {
    cik_str: 1820302,
    ticker: "BKKT-WT",
    company_name: "Bakkt Holdings, Inc.",
  },
  {
    cik_str: 1849548,
    ticker: "ONYXU",
    company_name: "Onyx Acquisition Co. I",
  },
  {
    cik_str: 1849548,
    ticker: "ONYXW",
    company_name: "Onyx Acquisition Co. I",
  },
  {
    cik_str: 1849635,
    ticker: "DWACU",
    company_name: "Digital World Acquisition Corp.",
  },
  {
    cik_str: 1849635,
    ticker: "DWACW",
    company_name: "Digital World Acquisition Corp.",
  },
  {
    cik_str: 1849475,
    ticker: "NCACW",
    company_name: "Newcourt Acquisition Corp",
  },
  {
    cik_str: 1848334,
    ticker: "OKMN",
    company_name: "OKMIN RESOURCES, INC.",
  },
  {
    cik_str: 1847241,
    ticker: "PEGRU",
    company_name: "Project Energy Reimagined Acquisition Corp.",
  },
  {
    cik_str: 1847241,
    ticker: "PEGRW",
    company_name: "Project Energy Reimagined Acquisition Corp.",
  },
  {
    cik_str: 1854963,
    ticker: "SHFSW",
    company_name: "SHF Holdings, Inc.",
  },
  {
    cik_str: 1853580,
    ticker: "PFTAU",
    company_name: "Perception Capital Corp. III",
  },
  {
    cik_str: 1853580,
    ticker: "PFTAW",
    company_name: "Perception Capital Corp. III",
  },
  {
    cik_str: 1855756,
    ticker: "LILMW",
    company_name: "Lilium N.V.",
  },
  {
    cik_str: 1855693,
    ticker: "FICVU",
    company_name: "Frontier Investment Corp",
  },
  {
    cik_str: 1855693,
    ticker: "FICVW",
    company_name: "Frontier Investment Corp",
  },
  {
    cik_str: 1807765,
    ticker: "PMVCW",
    company_name: "PMV Consumer Acquisition Corp.",
  },
  {
    cik_str: 1806524,
    ticker: "LGHLW",
    company_name: "Lion Group Holding Ltd",
  },
  {
    cik_str: 1809987,
    ticker: "MIR-WT",
    company_name: "Mirion Technologies, Inc.",
  },
  {
    cik_str: 1799191,
    ticker: "TOIIW",
    company_name: "Oncology Institute, Inc.",
  },
  {
    cik_str: 1802450,
    ticker: "LIFWW",
    company_name: "MSP Recovery, Inc.",
  },
  {
    cik_str: 1802450,
    ticker: "LIFWZ",
    company_name: "MSP Recovery, Inc.",
  },
  {
    cik_str: 1787518,
    ticker: "BRLIR",
    company_name: "Brilliant Acquisition Corp",
  },
  {
    cik_str: 1787518,
    ticker: "BRLIU",
    company_name: "Brilliant Acquisition Corp",
  },
  {
    cik_str: 1787518,
    ticker: "BRLIW",
    company_name: "Brilliant Acquisition Corp",
  },
  {
    cik_str: 1856948,
    ticker: "CHEAU",
    company_name: "Chenghe Acquisition Co.",
  },
  {
    cik_str: 1789029,
    ticker: "AEVA-WT",
    company_name: "Aeva Technologies, Inc.",
  },
  {
    cik_str: 1829953,
    ticker: "COOLU",
    company_name: "Corner Growth Acquisition Corp.",
  },
  {
    cik_str: 1829953,
    ticker: "COOLW",
    company_name: "Corner Growth Acquisition Corp.",
  },
  {
    cik_str: 1830795,
    ticker: "QFTAW",
    company_name: "Quantum FinTech Acquisition Corp",
  },
  {
    cik_str: 1831868,
    ticker: "ICUCW",
    company_name: "SeaStar Medical Holding Corp",
  },
  {
    cik_str: 1831874,
    ticker: "IRAAW",
    company_name: "Iris Acquisition Corp",
  },
  {
    cik_str: 1831874,
    ticker: "IRAAU",
    company_name: "Iris Acquisition Corp",
  },
  {
    cik_str: 1832765,
    ticker: "EACPW",
    company_name: "Edify Acquisition Corp.",
  },
  {
    cik_str: 1832765,
    ticker: "EACPU",
    company_name: "Edify Acquisition Corp.",
  },
  {
    cik_str: 1833835,
    ticker: "PSFE-WT",
    company_name: "Paysafe Ltd",
  },
  {
    cik_str: 1835972,
    ticker: "ARRWU",
    company_name: "Arrowroot Acquisition Corp.",
  },
  {
    cik_str: 1835972,
    ticker: "ARRWW",
    company_name: "Arrowroot Acquisition Corp.",
  },
  {
    cik_str: 1838162,
    ticker: "SLAMU",
    company_name: "Slam Corp.",
  },
  {
    cik_str: 1838162,
    ticker: "SLAMW",
    company_name: "Slam Corp.",
  },
  {
    cik_str: 1840425,
    ticker: "BLACR",
    company_name: "Bellevue Life Sciences Acquisition Corp.",
  },
  {
    cik_str: 1840425,
    ticker: "BLACU",
    company_name: "Bellevue Life Sciences Acquisition Corp.",
  },
  {
    cik_str: 1840425,
    ticker: "BLACW",
    company_name: "Bellevue Life Sciences Acquisition Corp.",
  },
  {
    cik_str: 1839360,
    ticker: "FAZEW",
    company_name: "FaZe Holdings Inc.",
  },
  {
    cik_str: 1840317,
    ticker: "PLMIU",
    company_name: "Plum Acquisition Corp. I",
  },
  {
    cik_str: 1840317,
    ticker: "PLMIW",
    company_name: "Plum Acquisition Corp. I",
  },
  {
    cik_str: 1838163,
    ticker: "DHCAU",
    company_name: "DHC Acquisition Corp.",
  },
  {
    cik_str: 1838163,
    ticker: "DHCAW",
    company_name: "DHC Acquisition Corp.",
  },
  {
    cik_str: 1839341,
    ticker: "CRZWQ",
    company_name: "Core Scientific, Inc./tx",
  },
  {
    cik_str: 1844971,
    ticker: "GREEL",
    company_name: "Greenidge Generation Holdings Inc.",
  },
  {
    cik_str: 1844981,
    ticker: "APACU",
    company_name: "StoneBridge Acquisition Corp.",
  },
  {
    cik_str: 1844981,
    ticker: "APACW",
    company_name: "StoneBridge Acquisition Corp.",
  },
  {
    cik_str: 1845942,
    ticker: "BNIXR",
    company_name: "Bannix Acquisition Corp.",
  },
  {
    cik_str: 1845942,
    ticker: "BNIXW",
    company_name: "Bannix Acquisition Corp.",
  },
  {
    cik_str: 1843370,
    ticker: "BLEUR",
    company_name: "bleuacacia ltd",
  },
  {
    cik_str: 1843370,
    ticker: "BLEUU",
    company_name: "bleuacacia ltd",
  },
  {
    cik_str: 1843370,
    ticker: "BLEUW",
    company_name: "bleuacacia ltd",
  },
  {
    cik_str: 1843477,
    ticker: "SVIIR",
    company_name: "Spring Valley Acquisition Corp. II",
  },
  {
    cik_str: 1843477,
    ticker: "SVIIU",
    company_name: "Spring Valley Acquisition Corp. II",
  },
  {
    cik_str: 1843477,
    ticker: "SVIIW",
    company_name: "Spring Valley Acquisition Corp. II",
  },
  {
    cik_str: 1832511,
    ticker: "PIIIW",
    company_name: "P3 Health Partners Inc.",
  },
  {
    cik_str: 1834032,
    ticker: "CSTA-UN",
    company_name: "Constellation Acquisition Corp I",
  },
  {
    cik_str: 1834032,
    ticker: "CSTA-WT",
    company_name: "Constellation Acquisition Corp I",
  },
  {
    cik_str: 1834026,
    ticker: "GROY-WT",
    company_name: "Gold Royalty Corp.",
  },
  {
    cik_str: 1826671,
    ticker: "NIRWW",
    company_name: "Near Intelligence, Inc.",
  },
  {
    cik_str: 1826681,
    ticker: "STRCW",
    company_name: "Sarcos Technology & Robotics Corp",
  },
  {
    cik_str: 1828105,
    ticker: "HIPO-WT",
    company_name: "Hippo Holdings Inc.",
  },
  {
    cik_str: 1828739,
    ticker: "AZRS",
    company_name: "Azzurro Solutions Corp.",
  },
  {
    cik_str: 1825962,
    ticker: "QDROU",
    company_name: "Quadro Acquisition One Corp.",
  },
  {
    cik_str: 1825962,
    ticker: "QDROW",
    company_name: "Quadro Acquisition One Corp.",
  },
  {
    cik_str: 1824893,
    ticker: "SRZNW",
    company_name: "Surrozen, Inc./DE",
  },
  {
    cik_str: 1820875,
    ticker: "CXAIW",
    company_name: "CXApp Inc.",
  },
  {
    cik_str: 1819493,
    ticker: "XOSWW",
    company_name: "Xos, Inc.",
  },
  {
    cik_str: 1819989,
    ticker: "CIFRW",
    company_name: "Cipher Mining Inc.",
  },
  {
    cik_str: 1824884,
    ticker: "ADOCR",
    company_name: "Edoc Acquisition Corp.",
  },
  {
    cik_str: 1824884,
    ticker: "ADOCW",
    company_name: "Edoc Acquisition Corp.",
  },
  {
    cik_str: 1849737,
    ticker: "PLAOU",
    company_name: "Patria Latin American Opportunity Acquisition Corp.",
  },
  {
    cik_str: 1849737,
    ticker: "PLAOW",
    company_name: "Patria Latin American Opportunity Acquisition Corp.",
  },
  {
    cik_str: 1819438,
    ticker: "GWH-WT",
    company_name: "ESS Tech, Inc.",
  },
  {
    cik_str: 1846084,
    ticker: "JETBF",
    company_name: "Global Crossing Airlines Group Inc.",
  },
  {
    cik_str: 1848437,
    ticker: "CITEU",
    company_name: "Cartica Acquisition Corp",
  },
  {
    cik_str: 1848437,
    ticker: "CITEW",
    company_name: "Cartica Acquisition Corp",
  },
  {
    cik_str: 1827899,
    ticker: "CPTK-UN",
    company_name: "Crown PropTech Acquisitions",
  },
  {
    cik_str: 1826667,
    ticker: "TLSIW",
    company_name: "TriSalus Life Sciences, Inc.",
  },
  {
    cik_str: 1833498,
    ticker: "MDAIW",
    company_name: "Spectral AI, Inc.",
  },
  {
    cik_str: 1831481,
    ticker: "FLME-WT",
    company_name: "Flame Acquisition Corp.",
  },
  {
    cik_str: 1831481,
    ticker: "FLME-UN",
    company_name: "Flame Acquisition Corp.",
  },
  {
    cik_str: 1823086,
    ticker: "KWACU",
    company_name: "Kingswood Acquisition Corp.",
  },
  {
    cik_str: 1823086,
    ticker: "KWACW",
    company_name: "Kingswood Acquisition Corp.",
  },
  {
    cik_str: 1822366,
    ticker: "ALTUU",
    company_name: "Altitude Acquisition Corp.",
  },
  {
    cik_str: 1822366,
    ticker: "ALTUW",
    company_name: "Altitude Acquisition Corp.",
  },
  {
    cik_str: 1822372,
    ticker: "SSRT",
    company_name: "Streetex Corp.",
  },
  {
    cik_str: 1825473,
    ticker: "PRSRU",
    company_name: "Prospector Capital Corp.",
  },
  {
    cik_str: 1825473,
    ticker: "PRSRW",
    company_name: "Prospector Capital Corp.",
  },
  {
    cik_str: 1823857,
    ticker: "VHAQ-RT",
    company_name: "Viveon Health Acquisition Corp.",
  },
  {
    cik_str: 1823857,
    ticker: "VHAQ-UN",
    company_name: "Viveon Health Acquisition Corp.",
  },
  {
    cik_str: 1823794,
    ticker: "ARKOW",
    company_name: "ARKO Corp.",
  },
  {
    cik_str: 1843993,
    ticker: "THCPU",
    company_name: "Thunder Bridge Capital Partners IV, Inc.",
  },
  {
    cik_str: 1843993,
    ticker: "THCPW",
    company_name: "Thunder Bridge Capital Partners IV, Inc.",
  },
  {
    cik_str: 1842937,
    ticker: "HCVIU",
    company_name: "Hennessy Capital Investment Corp. VI",
  },
  {
    cik_str: 1842937,
    ticker: "HCVIW",
    company_name: "Hennessy Capital Investment Corp. VI",
  },
  {
    cik_str: 1842939,
    ticker: "CTCXW",
    company_name: "Carmell Corp",
  },
  {
    cik_str: 1837607,
    ticker: "AEON-WT",
    company_name: "AEON Biopharma, Inc.",
  },
  {
    cik_str: 1837671,
    ticker: "CPPTL",
    company_name: "Copper Property CTL Pass Through Trust",
  },
  {
    cik_str: 1838672,
    ticker: "ADTHW",
    company_name: "AdTheorent Holding Company, Inc.",
  },
  {
    cik_str: 1835654,
    ticker: "INVZW",
    company_name: "Innoviz Technologies Ltd.",
  },
  {
    cik_str: 1840856,
    ticker: "SOUNW",
    company_name: "SOUNDHOUND AI, INC.",
  },
  {
    cik_str: 1840877,
    ticker: "COCHW",
    company_name: "Envoy Medical, Inc.",
  },
  {
    cik_str: 1862068,
    ticker: "RBTCW",
    company_name: "Rubicon Technologies, Inc.",
  },
  {
    cik_str: 1864032,
    ticker: "ADRT-UN",
    company_name: "Ault Disruptive Technologies Corp",
  },
  {
    cik_str: 1864032,
    ticker: "ADRTW",
    company_name: "Ault Disruptive Technologies Corp",
  },
  {
    cik_str: 1855168,
    ticker: "WRAC-UN",
    company_name: "Williams Rowland Acquisition Corp.",
  },
  {
    cik_str: 1855168,
    ticker: "WRACW",
    company_name: "Williams Rowland Acquisition Corp.",
  },
  {
    cik_str: 1857803,
    ticker: "DPCSU",
    company_name: "DP Cap Acquisition Corp I",
  },
  {
    cik_str: 1857803,
    ticker: "DPCSW",
    company_name: "DP Cap Acquisition Corp I",
  },
  {
    cik_str: 1865631,
    ticker: "NNAVW",
    company_name: "NEXTNAV INC.",
  },
  {
    cik_str: 1865506,
    ticker: "ESACU",
    company_name: "ESGEN Acquisition Corp",
  },
  {
    cik_str: 1865506,
    ticker: "ESACW",
    company_name: "ESGEN Acquisition Corp",
  },
  {
    cik_str: 1865631,
    ticker: "NXNVW",
    company_name: "NEXTNAV INC.",
  },
  {
    cik_str: 1866782,
    ticker: "CDROW",
    company_name: "Codere Online Luxembourg, S.A.",
  },
  {
    cik_str: 1868419,
    ticker: "WAVSU",
    company_name: "Western Acquisition Ventures Corp.",
  },
  {
    cik_str: 1868419,
    ticker: "WAVSW",
    company_name: "Western Acquisition Ventures Corp.",
  },
  {
    cik_str: 1869858,
    ticker: "SSUNF",
    company_name: "SIGNA Sports United N.V.",
  },
  {
    cik_str: 1869858,
    ticker: "SSUTF",
    company_name: "SIGNA Sports United N.V.",
  },
  {
    cik_str: 1858681,
    ticker: "APOS",
    company_name: "Apollo Global Management, Inc.",
  },
  {
    cik_str: 1856031,
    ticker: "SEATW",
    company_name: "Vivid Seats Inc.",
  },
  {
    cik_str: 1854587,
    ticker: "CLBTW",
    company_name: "Cellebrite DI Ltd.",
  },
  {
    cik_str: 1858685,
    ticker: "BFRIW",
    company_name: "Biofrontera Inc.",
  },
  {
    cik_str: 1861841,
    ticker: "ARBEW",
    company_name: "Arbe Robotics Ltd.",
  },
  {
    cik_str: 1861974,
    ticker: "ECXWW",
    company_name: "ECARX Holdings Inc.",
  },
  {
    cik_str: 1863460,
    ticker: "PPHPR",
    company_name: "PHP Ventures Acquisition Corp.",
  },
  {
    cik_str: 1863460,
    ticker: "PPHPU",
    company_name: "PHP Ventures Acquisition Corp.",
  },
  {
    cik_str: 1863460,
    ticker: "PPHPW",
    company_name: "PHP Ventures Acquisition Corp.",
  },
  {
    cik_str: 1865200,
    ticker: "PORT-UN",
    company_name: "Southport Acquisition Corp",
  },
  {
    cik_str: 1865200,
    ticker: "PORT-WT",
    company_name: "Southport Acquisition Corp",
  },
  {
    cik_str: 1865191,
    ticker: "TGVCU",
    company_name: "TG Venture Acquisition Corp.",
  },
  {
    cik_str: 1865191,
    ticker: "TGVCW",
    company_name: "TG Venture Acquisition Corp.",
  },
  {
    cik_str: 1866547,
    ticker: "GMFIU",
    company_name: "Aetherium Acquisition Corp",
  },
  {
    cik_str: 1866547,
    ticker: "GMFIW",
    company_name: "Aetherium Acquisition Corp",
  },
  {
    cik_str: 1852353,
    ticker: "DC-WT",
    company_name: "Dakota Gold Corp.",
  },
  {
    cik_str: 1865248,
    ticker: "CMCAU",
    company_name: "Capitalworks Emerging Markets Acquisition Corp",
  },
  {
    cik_str: 1865248,
    ticker: "CMCAW",
    company_name: "Capitalworks Emerging Markets Acquisition Corp",
  },
  {
    cik_str: 1866501,
    ticker: "WBX-WT",
    company_name: "Wallbox N.V.",
  },
  {
    cik_str: 1853397,
    ticker: "ZLSWU",
    company_name: "Zalatoris II Acquisition Corp",
  },
  {
    cik_str: 1853397,
    ticker: "ZLSWW",
    company_name: "Zalatoris II Acquisition Corp",
  },
  {
    cik_str: 1854795,
    ticker: "IRRX-UN",
    company_name: "INTEGRATED RAIL & RESOURCES ACQUISITION CORP",
  },
  {
    cik_str: 1854795,
    ticker: "IRRX-WT",
    company_name: "INTEGRATED RAIL & RESOURCES ACQUISITION CORP",
  },
  {
    cik_str: 1852016,
    ticker: "AEAEU",
    company_name: "AltEnergy Acquisition Corp",
  },
  {
    cik_str: 1852016,
    ticker: "AEAEW",
    company_name: "AltEnergy Acquisition Corp",
  },
  {
    cik_str: 1852019,
    ticker: "IXAQU",
    company_name: "IX Acquisition Corp.",
  },
  {
    cik_str: 1852019,
    ticker: "IXAQW",
    company_name: "IX Acquisition Corp.",
  },
  {
    cik_str: 1851961,
    ticker: "CNDB-UN",
    company_name: "Concord Acquisition Corp III",
  },
  {
    cik_str: 1851961,
    ticker: "CNDB-WT",
    company_name: "Concord Acquisition Corp III",
  },
  {
    cik_str: 1851959,
    ticker: "CNDA-UN",
    company_name: "Concord Acquisition Corp II",
  },
  {
    cik_str: 1851959,
    ticker: "CNDA-WT",
    company_name: "Concord Acquisition Corp II",
  },
  {
    cik_str: 1847986,
    ticker: "DFLIW",
    company_name: "Dragonfly Energy Holdings Corp.",
  },
  {
    cik_str: 1846809,
    ticker: "OTECU",
    company_name: "OceanTech Acquisitions I Corp.",
  },
  {
    cik_str: 1847891,
    ticker: "ACRO-UN",
    company_name: "Acropolis Infrastructure Acquisition Corp.",
  },
  {
    cik_str: 1847891,
    ticker: "ACRO-WT",
    company_name: "Acropolis Infrastructure Acquisition Corp.",
  },
  {
    cik_str: 1849058,
    ticker: "CLOER",
    company_name: "Clover Leaf Capital Corp.",
  },
  {
    cik_str: 1849058,
    ticker: "CLOEU",
    company_name: "Clover Leaf Capital Corp.",
  },
  {
    cik_str: 1851909,
    ticker: "CDAQU",
    company_name: "Compass Digital Acquisition Corp.",
  },
  {
    cik_str: 1851909,
    ticker: "CDAQW",
    company_name: "Compass Digital Acquisition Corp.",
  },
  {
    cik_str: 1850502,
    ticker: "NFYS-UN",
    company_name: "Enphys Acquisition Corp.",
  },
  {
    cik_str: 1850502,
    ticker: "NFYS-WT",
    company_name: "Enphys Acquisition Corp.",
  },
  {
    cik_str: 1844505,
    ticker: "GIAFU",
    company_name: "GigCapital5, Inc.",
  },
  {
    cik_str: 1843714,
    ticker: "WNNR-UN",
    company_name: "Andretti Acquisition Corp.",
  },
  {
    cik_str: 1843714,
    ticker: "WNNR-WT",
    company_name: "Andretti Acquisition Corp.",
  },
  {
    cik_str: 1844505,
    ticker: "GIAFW",
    company_name: "GigCapital5, Inc.",
  },
  {
    cik_str: 1844507,
    ticker: "AVHIU",
    company_name: "Achari Ventures Holdings Corp. I",
  },
  {
    cik_str: 1844507,
    ticker: "AVHIW",
    company_name: "Achari Ventures Holdings Corp. I",
  },
  {
    cik_str: 1845550,
    ticker: "APTMU",
    company_name: "Alpha Partners Technology Merger Corp.",
  },
  {
    cik_str: 1845550,
    ticker: "APTMW",
    company_name: "Alpha Partners Technology Merger Corp.",
  },
  {
    cik_str: 1846750,
    ticker: "TCOA-UN",
    company_name: "Zalatoris Acquisition Corp.",
  },
  {
    cik_str: 1846750,
    ticker: "TCOA-WT",
    company_name: "Zalatoris Acquisition Corp.",
  },
  {
    cik_str: 1846809,
    ticker: "OTECW",
    company_name: "OceanTech Acquisitions I Corp.",
  },
  {
    cik_str: 1836176,
    ticker: "FATHW",
    company_name: "Fathom Digital Manufacturing Corp",
  },
  {
    cik_str: 1838293,
    ticker: "CHAAW",
    company_name: "Catcha Investment Corp",
  },
  {
    cik_str: 1836100,
    ticker: "PUCKU",
    company_name: "Goal Acquisitions Corp.",
  },
  {
    cik_str: 1836100,
    ticker: "PUCKW",
    company_name: "Goal Acquisitions Corp.",
  },
  {
    cik_str: 1841610,
    ticker: "ROSS-UN",
    company_name: "Ross Acquisition Corp II",
  },
  {
    cik_str: 1841610,
    ticker: "ROSS-WT",
    company_name: "Ross Acquisition Corp II",
  },
  {
    cik_str: 1838359,
    ticker: "RGTIW",
    company_name: "Rigetti Computing, Inc.",
  },
  {
    cik_str: 1843656,
    ticker: "RMCOW",
    company_name: "Royalty Management Holding Corp",
  },
  {
    cik_str: 1863719,
    ticker: "MNTN-UN",
    company_name: "Everest Consolidator Acquisition Corp",
  },
  {
    cik_str: 1863719,
    ticker: "MNTN-WT",
    company_name: "Everest Consolidator Acquisition Corp",
  },
  {
    cik_str: 1865407,
    ticker: "KCGI-UN",
    company_name: "Kensington Capital Acquisition Corp. V",
  },
  {
    cik_str: 1865407,
    ticker: "KCGI-WT",
    company_name: "Kensington Capital Acquisition Corp. V",
  },
  {
    cik_str: 1862150,
    ticker: "CINGW",
    company_name: "Cingulate Inc.",
  },
  {
    cik_str: 1860871,
    ticker: "LGSTU",
    company_name: "Semper Paratus Acquisition Corp",
  },
  {
    cik_str: 1860871,
    ticker: "LGSTW",
    company_name: "Semper Paratus Acquisition Corp",
  },
  {
    cik_str: 1860805,
    ticker: "ASTLW",
    company_name: "Algoma Steel Group Inc.",
  },
  {
    cik_str: 1868269,
    ticker: "LATGU",
    company_name: "Chenghe Acquisition I Co.",
  },
  {
    cik_str: 1867956,
    ticker: "LKRY",
    company_name: "Linktory Inc.",
  },
  {
    cik_str: 1869601,
    ticker: "EMCGR",
    company_name: "Embrace Change Acquisition Corp.",
  },
  {
    cik_str: 1869601,
    ticker: "EMCGU",
    company_name: "Embrace Change Acquisition Corp.",
  },
  {
    cik_str: 1869601,
    ticker: "EMCGW",
    company_name: "Embrace Change Acquisition Corp.",
  },
  {
    cik_str: 1865468,
    ticker: "KACLW",
    company_name: "Kairous Acquisition Corp. Ltd",
  },
  {
    cik_str: 1863990,
    ticker: "SMAPU",
    company_name: "Sportsmap Tech Acquisition Corp.",
  },
  {
    cik_str: 1863990,
    ticker: "SMAPW",
    company_name: "Sportsmap Tech Acquisition Corp.",
  },
  {
    cik_str: 1865468,
    ticker: "KACLR",
    company_name: "Kairous Acquisition Corp. Ltd",
  },
  {
    cik_str: 1865468,
    ticker: "KACLU",
    company_name: "Kairous Acquisition Corp. Ltd",
  },
  {
    cik_str: 1872964,
    ticker: "MTEKW",
    company_name: "Maris Tech Ltd.",
  },
  {
    cik_str: 1876716,
    ticker: "ASCBR",
    company_name: "ASPAC II Acquisition Corp.",
  },
  {
    cik_str: 1876716,
    ticker: "ASCBU",
    company_name: "ASPAC II Acquisition Corp.",
  },
  {
    cik_str: 1876716,
    ticker: "ASCBW",
    company_name: "ASPAC II Acquisition Corp.",
  },
  {
    cik_str: 1869673,
    ticker: "BACAW",
    company_name: "Berenson Acquisition Corp. I",
  },
  {
    cik_str: 1872812,
    ticker: "TCBPW",
    company_name: "TC BioPharm (Holdings) plc",
  },
  {
    cik_str: 1871321,
    ticker: "DRTSW",
    company_name: "Alpha Tau Medical Ltd.",
  },
  {
    cik_str: 1889106,
    ticker: "ATMCR",
    company_name: "ALPHATIME ACQUISITION CORP",
  },
  {
    cik_str: 1889106,
    ticker: "ATMCU",
    company_name: "ALPHATIME ACQUISITION CORP",
  },
  {
    cik_str: 1889106,
    ticker: "ATMCW",
    company_name: "ALPHATIME ACQUISITION CORP",
  },
  {
    cik_str: 1880441,
    ticker: "BFAC-UN",
    company_name: "Battery Future Acquisition Corp.",
  },
  {
    cik_str: 1880441,
    ticker: "BFAC-WT",
    company_name: "Battery Future Acquisition Corp.",
  },
  {
    cik_str: 1889123,
    ticker: "EMLDU",
    company_name: "FTAC Emerald Acquisition Corp.",
  },
  {
    cik_str: 1889123,
    ticker: "EMLDW",
    company_name: "FTAC Emerald Acquisition Corp.",
  },
  {
    cik_str: 1889112,
    ticker: "RENEU",
    company_name: "Cartesian Growth Corp II",
  },
  {
    cik_str: 1889112,
    ticker: "RENEW",
    company_name: "Cartesian Growth Corp II",
  },
  {
    cik_str: 1899287,
    ticker: "AMPX-WT",
    company_name: "Amprius Technologies, Inc.",
  },
  {
    cik_str: 1894057,
    ticker: "PPYAU",
    company_name: "Papaya Growth Opportunity Corp. I",
  },
  {
    cik_str: 1894057,
    ticker: "PPYAW",
    company_name: "Papaya Growth Opportunity Corp. I",
  },
  {
    cik_str: 1929231,
    ticker: "PLTNU",
    company_name: "Plutonian Acquisition Corp.",
  },
  {
    cik_str: 1929231,
    ticker: "PLTNW",
    company_name: "Plutonian Acquisition Corp.",
  },
  {
    cik_str: 1907685,
    ticker: "CMRAW",
    company_name: "Comera Life Sciences Holdings, Inc.",
  },
  {
    cik_str: 1907730,
    ticker: "YOTAW",
    company_name: "Yotta Acquisition Corp",
  },
  {
    cik_str: 1901799,
    ticker: "BTMWW",
    company_name: "Bitcoin Depot Inc.",
  },
  {
    cik_str: 1901886,
    ticker: "AFARU",
    company_name: "Aura Fat Projects Acquisition Corp",
  },
  {
    cik_str: 1901886,
    ticker: "AFARW",
    company_name: "Aura Fat Projects Acquisition Corp",
  },
  {
    cik_str: 1852536,
    ticker: "ITOR",
    company_name: "Intorio, Corp.",
  },
  {
    cik_str: 1852407,
    ticker: "FEXDR",
    company_name: "Fintech Ecosystem Development Corp.",
  },
  {
    cik_str: 1852407,
    ticker: "FEXDU",
    company_name: "Fintech Ecosystem Development Corp.",
  },
  {
    cik_str: 1852407,
    ticker: "FEXDW",
    company_name: "Fintech Ecosystem Development Corp.",
  },
  {
    cik_str: 1913210,
    ticker: "BRSHW",
    company_name: "Bruush Oral Care Inc.",
  },
  {
    cik_str: 1929231,
    ticker: "PLTNR",
    company_name: "Plutonian Acquisition Corp.",
  },
  {
    cik_str: 1907730,
    ticker: "YOTAR",
    company_name: "Yotta Acquisition Corp",
  },
  {
    cik_str: 1907730,
    ticker: "YOTAU",
    company_name: "Yotta Acquisition Corp",
  },
  {
    cik_str: 1855474,
    ticker: "XPDBU",
    company_name: "Power & Digital Infrastructure Acquisition II Corp.",
  },
  {
    cik_str: 1855474,
    ticker: "XPDBW",
    company_name: "Power & Digital Infrastructure Acquisition II Corp.",
  },
  {
    cik_str: 1855467,
    ticker: "CLAYU",
    company_name: "Chavant Capital Acquisition Corp.",
  },
  {
    cik_str: 1855467,
    ticker: "CLAYW",
    company_name: "Chavant Capital Acquisition Corp.",
  },
  {
    cik_str: 1855485,
    ticker: "CLDI-WT",
    company_name: "Calidi Biotherapeutics, Inc.",
  },
  {
    cik_str: 1855555,
    ticker: "ENERR",
    company_name: "ACCRETION ACQUISITION CORP.",
  },
  {
    cik_str: 1855555,
    ticker: "ENERU",
    company_name: "ACCRETION ACQUISITION CORP.",
  },
  {
    cik_str: 1855555,
    ticker: "ENERW",
    company_name: "ACCRETION ACQUISITION CORP.",
  },
  {
    cik_str: 1946021,
    ticker: "HSPOR",
    company_name: "Horizon Space Acquisition I Corp.",
  },
  {
    cik_str: 1946021,
    ticker: "HSPOU",
    company_name: "Horizon Space Acquisition I Corp.",
  },
  {
    cik_str: 1946021,
    ticker: "HSPOW",
    company_name: "Horizon Space Acquisition I Corp.",
  },
  {
    cik_str: 1964504,
    ticker: "TPRXF",
    company_name: "Aris Mining Corp",
  },
  {
    cik_str: 1964504,
    ticker: "CLGDF",
    company_name: "Aris Mining Corp",
  },
  {
    cik_str: 1922446,
    ticker: "DECPD",
    company_name: "Diversified Energy Co PLC",
  },
  {
    cik_str: 1922097,
    ticker: "LANV-WT",
    company_name: "Lanvin Group Holdings Ltd",
  },
  {
    cik_str: 1933644,
    ticker: "MDLVY",
    company_name: "Medlive Technology Co., Ltd./ADR",
  },
  {
    cik_str: 1936702,
    ticker: "CETUR",
    company_name: "Cetus Capital Acquisition Corp.",
  },
  {
    cik_str: 1936702,
    ticker: "CETUU",
    company_name: "Cetus Capital Acquisition Corp.",
  },
  {
    cik_str: 1936702,
    ticker: "CETUW",
    company_name: "Cetus Capital Acquisition Corp.",
  },
  {
    cik_str: 1894210,
    ticker: "QOMOW",
    company_name: "Qomolangma Acquisition Corp.",
  },
  {
    cik_str: 1894210,
    ticker: "QOMOR",
    company_name: "Qomolangma Acquisition Corp.",
  },
  {
    cik_str: 1894210,
    ticker: "QOMOU",
    company_name: "Qomolangma Acquisition Corp.",
  },
  {
    cik_str: 1907223,
    ticker: "RWODR",
    company_name: "Redwoods Acquisition Corp.",
  },
  {
    cik_str: 1907223,
    ticker: "RWODU",
    company_name: "Redwoods Acquisition Corp.",
  },
  {
    cik_str: 1907223,
    ticker: "RWODW",
    company_name: "Redwoods Acquisition Corp.",
  },
  {
    cik_str: 1922331,
    ticker: "GLSTR",
    company_name: "Global Star Acquisition Inc.",
  },
  {
    cik_str: 1922331,
    ticker: "GLSTU",
    company_name: "Global Star Acquisition Inc.",
  },
  {
    cik_str: 1922331,
    ticker: "GLSTW",
    company_name: "Global Star Acquisition Inc.",
  },
  {
    cik_str: 1879221,
    ticker: "UTAWF",
    company_name: "UTA Acquisition Corp",
  },
  {
    cik_str: 1889450,
    ticker: "FTIIU",
    company_name: "FutureTech II Acquisition Corp.",
  },
  {
    cik_str: 1889450,
    ticker: "FTIIW",
    company_name: "FutureTech II Acquisition Corp.",
  },
  {
    cik_str: 1873324,
    ticker: "PEPLU",
    company_name: "PepperLime Health Acquisition Corp",
  },
  {
    cik_str: 1873324,
    ticker: "PEPLW",
    company_name: "PepperLime Health Acquisition Corp",
  },
  {
    cik_str: 1873441,
    ticker: "BCSAU",
    company_name: "Blockchain Coinvestors Acquisition Corp. I",
  },
  {
    cik_str: 1873441,
    ticker: "BCSAW",
    company_name: "Blockchain Coinvestors Acquisition Corp. I",
  },
  {
    cik_str: 1847577,
    ticker: "LCW-UN",
    company_name: "Learn CW Investment Corp",
  },
  {
    cik_str: 1847577,
    ticker: "LCW-WT",
    company_name: "Learn CW Investment Corp",
  },
  {
    cik_str: 1846975,
    ticker: "SEDA-UN",
    company_name: "SDCL EDGE Acquisition Corp",
  },
  {
    cik_str: 1846975,
    ticker: "SEDA-WT",
    company_name: "SDCL EDGE Acquisition Corp",
  },
  {
    cik_str: 1847064,
    ticker: "PSQH-WT",
    company_name: "PSQ Holdings, Inc.",
  },
  {
    cik_str: 1848898,
    ticker: "AAGRW",
    company_name: "African Agriculture Holdings Inc.",
  },
  {
    cik_str: 1848861,
    ticker: "HAIAU",
    company_name: "Healthcare AI Acquisition Corp.",
  },
  {
    cik_str: 1847607,
    ticker: "RFACR",
    company_name: "RF Acquisition Corp.",
  },
  {
    cik_str: 1847607,
    ticker: "RFACU",
    company_name: "RF Acquisition Corp.",
  },
  {
    cik_str: 1847607,
    ticker: "RFACW",
    company_name: "RF Acquisition Corp.",
  },
  {
    cik_str: 1848861,
    ticker: "HAIAW",
    company_name: "Healthcare AI Acquisition Corp.",
  },
  {
    cik_str: 1843973,
    ticker: "EGGF-UN",
    company_name: "EG Acquisition Corp.",
  },
  {
    cik_str: 1843973,
    ticker: "EGGF-WT",
    company_name: "EG Acquisition Corp.",
  },
  {
    cik_str: 1844642,
    ticker: "LCAHU",
    company_name: "Landcadia Holdings IV, Inc.",
  },
  {
    cik_str: 1844642,
    ticker: "LCAHW",
    company_name: "Landcadia Holdings IV, Inc.",
  },
  {
    cik_str: 1841800,
    ticker: "NOGNW",
    company_name: "Nogin, Inc.",
  },
  {
    cik_str: 1841761,
    ticker: "GROVW",
    company_name: "Grove Collaborative Holdings, Inc.",
  },
  {
    cik_str: 1853774,
    ticker: "MCAFR",
    company_name: "Mountain Crest Acquisition Corp. IV",
  },
  {
    cik_str: 1853774,
    ticker: "MCAFU",
    company_name: "Mountain Crest Acquisition Corp. IV",
  },
  {
    cik_str: 1852889,
    ticker: "IVCAU",
    company_name: "Investcorp India Acquisition Corp",
  },
  {
    cik_str: 1852889,
    ticker: "IVCAW",
    company_name: "Investcorp India Acquisition Corp",
  },
  {
    cik_str: 1853630,
    ticker: "HMELF",
    company_name: "Hold Me Ltd",
  },
  {
    cik_str: 1851182,
    ticker: "FHLTU",
    company_name: "Future Health ESG Corp.",
  },
  {
    cik_str: 1851182,
    ticker: "FHLTW",
    company_name: "Future Health ESG Corp.",
  },
  {
    cik_str: 1852767,
    ticker: "MRT-WT",
    company_name: "Marti Technologies, Inc.",
  },
  {
    cik_str: 1848948,
    ticker: "VCXB-UN",
    company_name: "10X Capital Venture Acquisition Corp. III",
  },
  {
    cik_str: 1848948,
    ticker: "VCXB-WT",
    company_name: "10X Capital Venture Acquisition Corp. III",
  },
  {
    cik_str: 1857855,
    ticker: "FNVTU",
    company_name: "Finnovate Acquisition Corp.",
  },
  {
    cik_str: 1857855,
    ticker: "FNVTW",
    company_name: "Finnovate Acquisition Corp.",
  },
  {
    cik_str: 1853816,
    ticker: "DRMAW",
    company_name: "Dermata Therapeutics, Inc.",
  },
  {
    cik_str: 1855351,
    ticker: "SAGAU",
    company_name: "Sagaliam Acquisition Corp",
  },
  {
    cik_str: 1855457,
    ticker: "KORGW",
    company_name: "KORE Group Holdings, Inc.",
  },
  {
    cik_str: 1855351,
    ticker: "SAGAR",
    company_name: "Sagaliam Acquisition Corp",
  },
  {
    cik_str: 1861121,
    ticker: "EVE-UN",
    company_name: "EVe Mobility Acquisition Corp",
  },
  {
    cik_str: 1861121,
    ticker: "EVE-WT",
    company_name: "EVe Mobility Acquisition Corp",
  },
  {
    cik_str: 1866226,
    ticker: "WTMAR",
    company_name: "Welsbach Technology Metals Acquisition Corp.",
  },
  {
    cik_str: 1866226,
    ticker: "WTMAU",
    company_name: "Welsbach Technology Metals Acquisition Corp.",
  },
  {
    cik_str: 1866816,
    ticker: "OPTXW",
    company_name: "SYNTEC OPTICS HOLDINGS, INC.",
  },
  {
    cik_str: 1866838,
    ticker: "IGTAR",
    company_name: "Inception Growth Acquisition Ltd",
  },
  {
    cik_str: 1866838,
    ticker: "IGTAU",
    company_name: "Inception Growth Acquisition Ltd",
  },
  {
    cik_str: 1866838,
    ticker: "IGTAW",
    company_name: "Inception Growth Acquisition Ltd",
  },
  {
    cik_str: 1868573,
    ticker: "APXIU",
    company_name: "APx Acquisition Corp. I",
  },
  {
    cik_str: 1868573,
    ticker: "APXIW",
    company_name: "APx Acquisition Corp. I",
  },
  {
    cik_str: 1868640,
    ticker: "RDZNW",
    company_name: "Roadzen Inc.",
  },
  {
    cik_str: 1869974,
    ticker: "OCEAW",
    company_name: "Ocean Biomedical, Inc.",
  },
  {
    cik_str: 1871638,
    ticker: "BRKHU",
    company_name: "BurTech Acquisition Corp.",
  },
  {
    cik_str: 1871638,
    ticker: "BRKHW",
    company_name: "BurTech Acquisition Corp.",
  },
  {
    cik_str: 1871745,
    ticker: "DSAQ-UN",
    company_name: "Direct Selling Acquisition Corp.",
  },
  {
    cik_str: 1871745,
    ticker: "DSAQW",
    company_name: "Direct Selling Acquisition Corp.",
  },
  {
    cik_str: 1875493,
    ticker: "CSLMR",
    company_name: "CSLM ACQUISITION CORP.",
  },
  {
    cik_str: 1875493,
    ticker: "CSLMU",
    company_name: "CSLM ACQUISITION CORP.",
  },
  {
    cik_str: 1875493,
    ticker: "CSLMW",
    company_name: "CSLM ACQUISITION CORP.",
  },
  {
    cik_str: 1853044,
    ticker: "AERTW",
    company_name: "Aeries Technology, Inc.",
  },
  {
    cik_str: 1853047,
    ticker: "HUDAU",
    company_name: "Hudson Acquisition I Corp.",
  },
  {
    cik_str: 1853047,
    ticker: "HUDAR",
    company_name: "Hudson Acquisition I Corp.",
  },
  {
    cik_str: 1853070,
    ticker: "SOAR-WT",
    company_name: "Volato Group, Inc.",
  },
  {
    cik_str: 1852973,
    ticker: "OXUSU",
    company_name: "Oxus Acquisition Corp.",
  },
  {
    cik_str: 1852973,
    ticker: "OXUSW",
    company_name: "Oxus Acquisition Corp.",
  },
  {
    cik_str: 1854275,
    ticker: "IOACU",
    company_name: "Innovative International Acquisition Corp.",
  },
  {
    cik_str: 1854275,
    ticker: "IOACW",
    company_name: "Innovative International Acquisition Corp.",
  },
  {
    cik_str: 1855612,
    ticker: "GRABW",
    company_name: "Grab Holdings Ltd",
  },
  {
    cik_str: 1859686,
    ticker: "SBXC-WT",
    company_name: "SilverBox Corp III",
  },
  {
    cik_str: 1855631,
    ticker: "AWINW",
    company_name: "AERWINS Technologies Inc.",
  },
  {
    cik_str: 1855644,
    ticker: "ZURAW",
    company_name: "Zura Bio Ltd",
  },
  {
    cik_str: 1859807,
    ticker: "NVACR",
    company_name: "NorthView Acquisition Corp",
  },
  {
    cik_str: 1859807,
    ticker: "NVACW",
    company_name: "NorthView Acquisition Corp",
  },
  {
    cik_str: 1859690,
    ticker: "ARQQW",
    company_name: "Arqit Quantum Inc.",
  },
  {
    cik_str: 1859686,
    ticker: "SBXC-UN",
    company_name: "SilverBox Corp III",
  },
  {
    cik_str: 1839530,
    ticker: "XBPEW",
    company_name: "XBP Europe Holdings, Inc.",
  },
  {
    cik_str: 1839586,
    ticker: "DMXCF",
    company_name: "District Metals Corp.",
  },
  {
    cik_str: 1840502,
    ticker: "TBLAW",
    company_name: "Taboola.com Ltd.",
  },
  {
    cik_str: 1841425,
    ticker: "VGASW",
    company_name: "Verde Clean Fuels, Inc.",
  },
  {
    cik_str: 1841408,
    ticker: "DAVEW",
    company_name: "Dave Inc./DE",
  },
  {
    cik_str: 1837429,
    ticker: "BNRE-A",
    company_name: "Brookfield Reinsurance Ltd.",
  },
  {
    cik_str: 1839519,
    ticker: "CFFSU",
    company_name: "CF Acquisition Corp. VII",
  },
  {
    cik_str: 1839519,
    ticker: "CFFSW",
    company_name: "CF Acquisition Corp. VII",
  },
  {
    cik_str: 1835416,
    ticker: "MACAU",
    company_name: "Moringa Acquisition Corp",
  },
  {
    cik_str: 1835416,
    ticker: "MACAW",
    company_name: "Moringa Acquisition Corp",
  },
  {
    cik_str: 1836274,
    ticker: "ACAHU",
    company_name: "Atlantic Coastal Acquisition Corp.",
  },
  {
    cik_str: 1836274,
    ticker: "ACAHW",
    company_name: "Atlantic Coastal Acquisition Corp.",
  },
  {
    cik_str: 1837344,
    ticker: "MBTCR",
    company_name: "Nocturne Acquisition Corp",
  },
  {
    cik_str: 1837344,
    ticker: "MBTCU",
    company_name: "Nocturne Acquisition Corp",
  },
  {
    cik_str: 1837412,
    ticker: "SLGCW",
    company_name: "SomaLogic, Inc.",
  },
  {
    cik_str: 1844452,
    ticker: "LUNRW",
    company_name: "Intuitive Machines, Inc.",
  },
  {
    cik_str: 1844417,
    ticker: "ESLAW",
    company_name: "Estrella Immunopharma, Inc.",
  },
  {
    cik_str: 1844419,
    ticker: "MAQCW",
    company_name: "Maquia Capital Acquisition Corp",
  },
  {
    cik_str: 1844419,
    ticker: "MAQCU",
    company_name: "Maquia Capital Acquisition Corp",
  },
  {
    cik_str: 1846702,
    ticker: "FIGP",
    company_name: "Forge Group, Inc.",
  },
  {
    cik_str: 1845459,
    ticker: "NKGNW",
    company_name: "NKGen Biotech, Inc.",
  },
  {
    cik_str: 1845368,
    ticker: "HCMAU",
    company_name: "HCM Acquisition Corp",
  },
  {
    cik_str: 1845368,
    ticker: "HCMAW",
    company_name: "HCM Acquisition Corp",
  },
  {
    cik_str: 1845437,
    ticker: "NPWR-WT",
    company_name: "NET Power Inc.",
  },
  {
    cik_str: 1851612,
    ticker: "BHACU",
    company_name: "Focus Impact BH3 Acquisition Co",
  },
  {
    cik_str: 1851612,
    ticker: "BHACW",
    company_name: "Focus Impact BH3 Acquisition Co",
  },
  {
    cik_str: 1847846,
    ticker: "EUDAW",
    company_name: "EUDA Health Holdings Ltd",
  },
  {
    cik_str: 1849380,
    ticker: "ONMDW",
    company_name: "OneMedNet Corp",
  },
  {
    cik_str: 1850262,
    ticker: "INTEU",
    company_name: "Integral Acquisition Corp 1",
  },
  {
    cik_str: 1850262,
    ticker: "INTEW",
    company_name: "Integral Acquisition Corp 1",
  },
  {
    cik_str: 1893657,
    ticker: "RLEA",
    company_name: "Rubber Leaf Inc",
  },
  {
    cik_str: 1896212,
    ticker: "CDTTW",
    company_name: "CONDUIT PHARMACEUTICALS INC.",
  },
  {
    cik_str: 1909417,
    ticker: "SLNAW",
    company_name: "SELINA HOSPITALITY PLC",
  },
  {
    cik_str: 1903870,
    ticker: "AFRIW",
    company_name: "Forafric Global PLC",
  },
  {
    cik_str: 1898795,
    ticker: "LVWR-WT",
    company_name: "LiveWire Group, Inc.",
  },
  {
    cik_str: 1888654,
    ticker: "FEAV",
    company_name: "5E Advanced Materials, Inc.",
  },
  {
    cik_str: 1888734,
    ticker: "GLLIR",
    company_name: "GLOBALINK INVESTMENT INC.",
  },
  {
    cik_str: 1888734,
    ticker: "GLLIU",
    company_name: "GLOBALINK INVESTMENT INC.",
  },
  {
    cik_str: 1888734,
    ticker: "GLLIW",
    company_name: "GLOBALINK INVESTMENT INC.",
  },
  {
    cik_str: 1885849,
    ticker: "TFLM",
    company_name: "Tofla Megaline Inc.",
  },
  {
    cik_str: 1885680,
    ticker: "RAJAF",
    company_name: "Cordyceps Sunshine Biotech Holdings Co., Ltd.",
  },
  {
    cik_str: 1918694,
    ticker: "MEDE",
    company_name: "Medies",
  },
  {
    cik_str: 1918661,
    ticker: "ESHAR",
    company_name: "ESH Acquisition Corp.",
  },
  {
    cik_str: 1936804,
    ticker: "SDAWW",
    company_name: "SunCar Technology Group Inc.",
  },
  {
    cik_str: 1934064,
    ticker: "OSAAW",
    company_name: "ProSomnus, Inc.",
  },
  {
    cik_str: 1951378,
    ticker: "QLUNF",
    company_name: "Qilun Group Inc.",
  },
  {
    cik_str: 1955104,
    ticker: "ZAPPW",
    company_name: "Zapp Electric Vehicles Group Ltd",
  },
  {
    cik_str: 1947559,
    ticker: "ANZGF",
    company_name: "ANZ GROUP HOLDINGS LIMITED/ADR",
  },
  {
    cik_str: 1871983,
    ticker: "ANGHW",
    company_name: "Anghami Inc",
  },
  {
    cik_str: 1870144,
    ticker: "CDIOW",
    company_name: "Cardio Diagnostics Holdings, Inc.",
  },
  {
    cik_str: 1871890,
    ticker: "GLEI",
    company_name: "Galaxy Enterprises Inc. /WY/",
  },
  {
    cik_str: 1865861,
    ticker: "CCTSU",
    company_name: "Cactus Acquisition Corp. 1 Ltd",
  },
  {
    cik_str: 1865861,
    ticker: "CCTSW",
    company_name: "Cactus Acquisition Corp. 1 Ltd",
  },
  {
    cik_str: 1868775,
    ticker: "ASCAR",
    company_name: "ASPAC I Acquisition Corp.",
  },
  {
    cik_str: 1868775,
    ticker: "ASCAU",
    company_name: "ASPAC I Acquisition Corp.",
  },
  {
    cik_str: 1868775,
    ticker: "ASCAW",
    company_name: "ASPAC I Acquisition Corp.",
  },
  {
    cik_str: 1870143,
    ticker: "RCFA-UN",
    company_name: "RCF Acquisition Corp.",
  },
  {
    cik_str: 1870143,
    ticker: "RCFA-WT",
    company_name: "RCF Acquisition Corp.",
  },
  {
    cik_str: 1875609,
    ticker: "SWVLW",
    company_name: "Swvl Holdings Corp",
  },
  {
    cik_str: 1881551,
    ticker: "NUBIU",
    company_name: "Nubia Brand International Corp.",
  },
  {
    cik_str: 1881551,
    ticker: "NUBIW",
    company_name: "Nubia Brand International Corp.",
  },
  {
    cik_str: 1883788,
    ticker: "ATAKR",
    company_name: "Aurora Technology Acquisition Corp.",
  },
  {
    cik_str: 1883788,
    ticker: "ATAKU",
    company_name: "Aurora Technology Acquisition Corp.",
  },
  {
    cik_str: 1883788,
    ticker: "ATAKW",
    company_name: "Aurora Technology Acquisition Corp.",
  },
  {
    cik_str: 1883814,
    ticker: "SLND-WT",
    company_name: "Southland Holdings, Inc.",
  },
  {
    cik_str: 1862490,
    ticker: "DCFCW",
    company_name: "Tritium DCFC Ltd",
  },
  {
    cik_str: 1861063,
    ticker: "AQUNR",
    company_name: "Aquaron Acquisition Corp.",
  },
  {
    cik_str: 1861063,
    ticker: "AQUNU",
    company_name: "Aquaron Acquisition Corp.",
  },
  {
    cik_str: 1865697,
    ticker: "GGAWF",
    company_name: "Genesis Growth Tech Acquisition Corp.",
  },
  {
    cik_str: 1865697,
    ticker: "GGAUF",
    company_name: "Genesis Growth Tech Acquisition Corp.",
  },
  {
    cik_str: 1867287,
    ticker: "LBBBR",
    company_name: "Lakeshore Acquisition II Corp.",
  },
  {
    cik_str: 1867287,
    ticker: "LBBBU",
    company_name: "Lakeshore Acquisition II Corp.",
  },
  {
    cik_str: 1867287,
    ticker: "LBBBW",
    company_name: "Lakeshore Acquisition II Corp.",
  },
  {
    cik_str: 1865701,
    ticker: "KYCHR",
    company_name: "Keyarch Acquisition Corp",
  },
  {
    cik_str: 1865701,
    ticker: "KYCHU",
    company_name: "Keyarch Acquisition Corp",
  },
  {
    cik_str: 1865701,
    ticker: "KYCHW",
    company_name: "Keyarch Acquisition Corp",
  },
  {
    cik_str: 1858028,
    ticker: "NOVVR",
    company_name: "Nova Vision Acquisition Corp",
  },
  {
    cik_str: 1858028,
    ticker: "NOVVU",
    company_name: "Nova Vision Acquisition Corp",
  },
  {
    cik_str: 1858028,
    ticker: "NOVVW",
    company_name: "Nova Vision Acquisition Corp",
  },
  {
    cik_str: 1858007,
    ticker: "GDSTR",
    company_name: "Goldenstone Acquisition Ltd.",
  },
  {
    cik_str: 1858007,
    ticker: "GDSTU",
    company_name: "Goldenstone Acquisition Ltd.",
  },
  {
    cik_str: 1858007,
    ticker: "GDSTW",
    company_name: "Goldenstone Acquisition Ltd.",
  },
  {
    cik_str: 1859639,
    ticker: "CZOWF",
    company_name: "Cazoo Group Ltd",
  },
  {
    cik_str: 1860879,
    ticker: "RRAC-UN",
    company_name: "Rigel Resource Acquisition Corp.",
  },
  {
    cik_str: 1860879,
    ticker: "RRAC-WT",
    company_name: "Rigel Resource Acquisition Corp.",
  },
  {
    cik_str: 1862463,
    ticker: "INAQU",
    company_name: "Insight Acquisition Corp. /DE",
  },
  {
    cik_str: 1862463,
    ticker: "INAQW",
    company_name: "Insight Acquisition Corp. /DE",
  },
  {
    cik_str: 1864943,
    ticker: "FGIWW",
    company_name: "FGI Industries Ltd.",
  },
  {
    cik_str: 1867443,
    ticker: "CNGLU",
    company_name: "Canna-Global Acquisition Corp",
  },
  {
    cik_str: 1867443,
    ticker: "CNGLW",
    company_name: "Canna-Global Acquisition Corp",
  },
  {
    cik_str: 1874218,
    ticker: "RCACW",
    company_name: "Revelstone Capital Acquisition Corp.",
  },
  {
    cik_str: 1897971,
    ticker: "GLACR",
    company_name: "Global Lights Acquisition Corp",
  },
  {
    cik_str: 1895262,
    ticker: "NE-WTA",
    company_name: "Noble Corp plc",
  },
  {
    cik_str: 1895262,
    ticker: "NE-WT",
    company_name: "Noble Corp plc",
  },
  {
    cik_str: 1895262,
    ticker: "NBLWF",
    company_name: "Noble Corp plc",
  },
  {
    cik_str: 1861541,
    ticker: "PGSS-UN",
    company_name: "Pegasus Digital Mobility Acquisition Corp.",
  },
  {
    cik_str: 1861541,
    ticker: "PGSS-WT",
    company_name: "Pegasus Digital Mobility Acquisition Corp.",
  },
  {
    cik_str: 1861622,
    ticker: "JTAIW",
    company_name: "Jet.AI Inc.",
  },
  {
    cik_str: 1861622,
    ticker: "JTAIZ",
    company_name: "Jet.AI Inc.",
  },
  {
    cik_str: 1856961,
    ticker: "BOCNU",
    company_name: "Blue Ocean Acquisition Corp",
  },
  {
    cik_str: 1856961,
    ticker: "BOCNW",
    company_name: "Blue Ocean Acquisition Corp",
  },
  {
    cik_str: 1887673,
    ticker: "WLDSW",
    company_name: "Wearable Devices Ltd.",
  },
  {
    cik_str: 1889983,
    ticker: "KVACU",
    company_name: "Keen Vision Acquisition Corp.",
  },
  {
    cik_str: 1889983,
    ticker: "KVACW",
    company_name: "Keen Vision Acquisition Corp.",
  },
  {
    cik_str: 1892747,
    ticker: "VMCAU",
    company_name: "Valuence Merger Corp. I",
  },
  {
    cik_str: 1892747,
    ticker: "VMCAW",
    company_name: "Valuence Merger Corp. I",
  },
  {
    cik_str: 1895144,
    ticker: "GODNU",
    company_name: "Golden Star Acquisition Corp",
  },
  {
    cik_str: 1895144,
    ticker: "GODNR",
    company_name: "Golden Star Acquisition Corp",
  },
  {
    cik_str: 1895249,
    ticker: "MCACR",
    company_name: "Monterey Capital Acquisition Corp",
  },
  {
    cik_str: 1895249,
    ticker: "MCACU",
    company_name: "Monterey Capital Acquisition Corp",
  },