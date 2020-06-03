/*
  Constant for API_URL, course and subject names,
  handling odd data
*/
export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://schedge.torchnyu.com"
    : "http://localhost:8001";

export const weirdCourseNames: { [s: string]: string } = {
  "Intro to Computer SCI": "Intro to Computer Science",
  "Computer Systems Org": "Computer Systems Organization",
  "Topics of General Interest:":
    "Topics of General Interest: Drawing on the Web",
  "Spec Tpcs in Prog Lang:": "Special Topics in Programming Languages",
  "Quantitative Reasoning: Prob,Stats & Decisn-Mkng":
    "Quantitative Reasoning: Probability, Statistics & Decision-Making",
  "Expressive Culture: Tpcs": "Expressive Culture: Topics",
  "Expressive Cult: Images": "Expressive Culture: Images",
  "Honors Analy of Algo": "Honors Analysis of Algorithms",
  "Sp Tpcs Modern Art:": "Special Topics Modern Art:",
  "Hist of City Planning, 19th & 20th Centuries":
    "History of City Planning: 19th & 20th Centuries",
  "Topics in AS:": "Topics in Animal Studies",
  "Dutch &Flemish Painting, 1600-1700": "Dutch & Flemish Painting, 1600-1700",
  "East Asian Art II:China, Korea, Japan, 1000Ce-Pr":
    "East Asian Art II: China, Korea, Japan, 1000Ce-Pr",
  "From Huck Finn to Columbine:Understanding Disruptive Behaviors in Chldrn & Adolscnt":
    "From Huck Finn to Columbine: Understanding Disruptive Behaviors in Children & Adolescents",
  TrendingMentalHealth: "Trending Mental Health",
  "Adv Sem: Autism Spectrum Disorders":
    "Advanced Seminar: Autism Spectrum Disorders",
  "Elemen French Level I": "Elementary French Level I",
  "Elem French Level II": "Elementary French Level II",
  "Spec Top Computer SCI:": "Special Topics",
  "Honors Programming Lang": "Honors Programming Languages",
  "Master'S Thesis Research": "Master's Thesis Research",
  "Risk & Portfolio Mngmnt With Econometrics":
    "Risk & Portfolio Management With Econometrics",
  "Prob & Meth in Mideast Studies":
    "Problems & Methods in Middle Eastern Studies",
  "Prob & Meth in Hebrew & Judaic Studies":
    "Problems & Methods in Hebrew & Judaic Studies"
};

export const weirdSubjectNames: { [s: string]: string } = {
  "Child/Adoles Mental Hlth Stds": "Child/Adolescent Mental Health Studies",
  "European and Mediterranean Stu": "European and Mediterranean Studies",
  "Latin Amer-Caribbean Studies": "Latin American-Caribbean Studies",
  "Ctr for Art, Society & Pub Pol": "Center for Art, Society & Public Policy",
  "Ctr for Experiment Humanities": "Center for Experimental Humanities"
};

export const statusMap: { [s: string]: string } = {
  WaitList: "Wait List"
};

export const internationalSubjects: { [s: string]: string } = {
  ICINE: "Cinema Studies (International)",
  IFMTV: "Film & TV (International)",
  IPHTI: "Photography and Imaging (International)",
  ITHEA: "Drama (International)",
  ISPEC: "TSOA Special Programs (International)"
};

export const STOPS_COUNT = 6;
