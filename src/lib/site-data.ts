export const company = {
  name: "Maa Jagdamba Solution Pvt. Ltd.",
  shortDescription:
    "Financial, accounting, taxation, compliance, and business advisory services in Ranchi, Jharkhand.",
  type: "Pvt. Ltd. Company",
  incorporationDate: "03 February 2026",
  location: "Ranchi, Jharkhand",
  roc: "ROC Ranchi",
  cin: "U69200JH2026PTC026968",
  gstin: "20AAUCM4659A1Z",
  authorizedShareCapital: "Rs. 10,00,000",
  paidUpShareCapital: "Rs. 1,00,000",
  justdial:
    "https://www.justdial.com/Ranchi/Maa-Jagdamba-Solution-Private-Limited-Near-Srikrishna-Motors-Birsa-Chowk/0651PX651-X651-231018073553-P2L4_BZDET",
  addressLines: [
    "HAWAI NAGAR",
    "Near Srikrishna Motors",
    "Hawai Nagar",
    "Road Number 11",
    "Birsa Chowk",
    "Ranchi - 834003",
    "Jharkhand",
  ],
  phonePlaceholder: "9955038749",
  emailPlaceholder: "maajagdambasolution@gmail.com",
  whatsappPlaceholder: "9955038749",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export type PricingCategory =
  | "Registration"
  | "Taxation"
  | "Compliance"
  | "Certification"
  | "Accounting";

export type PricingService = {
  name: string;
  price: string;
  category: PricingCategory;
  description: string;
  featured?: boolean;
};

export const pricingFilters = [
  { label: "All Services", value: "All" },
  { label: "Registration Services", value: "Registration" },
  { label: "Taxation Services", value: "Taxation" },
  { label: "Compliance Services", value: "Compliance" },
  { label: "Certification Services", value: "Certification" },
  { label: "Accounting Services", value: "Accounting" },
] as const;

export const pricingServices: PricingService[] = [
  {
    name: "Pvt. Ltd. Company Registration",
    price: "₹9,999",
    category: "Registration",
    description: "Complete incorporation support for a Pvt. Ltd. company.",
    featured: true,
  },
  {
    name: "Limited Liability Partnership (LLP) Registration",
    price: "₹8,999",
    category: "Registration",
    description: "Registration and filing assistance for LLP formation.",
  },
  {
    name: "GST Registration",
    price: "Free",
    category: "Registration",
    description: "GST application filing and registration assistance.",
    featured: true,
  },
  {
    name: "GST Return Filing",
    price: "₹499 - ₹999",
    category: "Taxation",
    description: "Monthly or quarterly GST return filing support.",
  },
  {
    name: "TDS/TCS Return Filing (Quarterly)",
    price: "₹1,999",
    category: "Taxation",
    description: "Quarterly TDS and TCS return preparation and filing.",
  },
  {
    name: "Income Tax Return Filing",
    price: "₹999",
    category: "Taxation",
    description: "Income tax return filing for individuals and businesses.",
    featured: true,
  },
  {
    name: "Partnership Firm Registration",
    price: "₹2,599",
    category: "Registration",
    description: "Documentation and filing support for partnership firms.",
  },
  {
    name: "MSME Registration",
    price: "₹499",
    category: "Registration",
    description: "Udyam registration assistance for MSME benefits.",
  },
  {
    name: "Digital Signature Certificate (DSC)",
    price: "₹1,599",
    category: "Certification",
    description: "DSC procurement and application support.",
  },
  {
    name: "Project Report for Bank Loan",
    price: "₹2,999",
    category: "Certification",
    description: "Prepared project report for loan applications.",
  },
  {
    name: "E-Stamp (Jharkhand)",
    price: "₹30",
    category: "Certification",
    description: "E-stamp assistance for documentation requirements.",
  },
  {
    name: "Tax Audit",
    price: "₹4,999",
    category: "Taxation",
    description: "Tax audit support and filing assistance.",
  },
  {
    name: "Certification of Balance Sheet",
    price: "₹1,999",
    category: "Certification",
    description: "Certified balance sheet support for business needs.",
  },
  {
    name: "Net Worth Certificate",
    price: "₹1,999",
    category: "Certification",
    description: "Net worth certification for financial documentation.",
  },
  {
    name: "PAN Card Application",
    price: "₹299",
    category: "Registration",
    description: "PAN application support and document handling.",
  },
  {
    name: "Bookkeeping & Accounting (Sales, Purchase & Bank Entries)",
    price: "₹4,999",
    category: "Accounting",
    description: "Monthly bookkeeping with sales, purchase, and bank entries.",
  },
  {
    name: "ROC Compliance",
    price: "₹6,999",
    category: "Compliance",
    description: "ROC filing and compliance assistance for companies.",
    featured: true,
  },
  {
    name: "Rent Agreement with Notary",
    price: "₹499",
    category: "Certification",
    description: "Rent agreement drafting with notary support.",
  },
];

export const keyServices = [
  "GST Filing & Return",
  "Accounting & Bookkeeping",
  "Company Registration",
  "Income Tax & TDS",
  "ROC Filing",
  "Internal Audit",
  "Business Advisory",
  "Unclaimed Share Recovery",
];

export const whyChooseUs = [
  "Professional financial and compliance services",
  "End-to-end support for business and tax requirements",
  "Timely filing and documentation support",
  "Local presence in Ranchi, Jharkhand",
  "Services for individuals, startups, and businesses",
];

export const serviceGroups = [
  {
    title: "Business & Registration Services",
    items: [
      "Company Registration",
      "Business Incorporation and Formation Advising",
      "PAN Card",
      "Rent Agreement",
    ],
  },
  {
    title: "Taxation Services",
    items: ["Income Tax Notices", "TDS Preparation", "TDS Return", "Sales Tax"],
  },
  {
    title: "GST Services",
    items: [
      "GST Filing",
      "GST Return",
      "GST Notices",
      "GST Planning",
      "GST Accounting and Compliances",
    ],
  },
  {
    title: "Accounting Services",
    items: [
      "Accounting",
      "Accounting & Bookkeeping",
      "Financial Consultation",
      "Asset Stock Auditing",
    ],
  },
  {
    title: "Compliance & ROC Services",
    items: ["ROC Filing", "DIR - KYC Filing", "Corporate Compliance Support"],
  },
  {
    title: "Audit Services",
    items: ["Internal Audit", "Asset Stock Audit"],
  },
  {
    title: "Financial & Business Advisory Services",
    items: [
      "Bank Loan Project Feasibility Reports",
      "Business Advisory Services",
      "Financial Consultation",
    ],
  },
  {
    title: "Other Services",
    items: ["Unclaimed Share Recovery"],
  },
];