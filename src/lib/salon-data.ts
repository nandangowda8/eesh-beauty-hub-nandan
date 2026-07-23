export const PHONE = "+91 93805 65699";
export const PHONE_TEL = "+919380565699";
export const WHATSAPP = "919380565699";

export const serviceCategories = [
  {
    title: "Hair Services",
    description: "Cuts, styling, spa & advanced treatments for every hair type.",
    items: [
      "Men's Haircut", "Women's Haircut", "Kids Haircut", "Hair Wash", "Hair Styling",
      "Hair Spa", "Hair Smoothening", "Hair Straightening", "Hair Rebonding",
      "Hair Botox", "Keratin Treatment", "Hair Coloring", "Global Hair Color",
      "Hair Highlights", "Root Touch-Up", "Hair Repair Treatment",
    ],
  },
  {
    title: "Men's Grooming",
    description: "Sharp cuts, beard styling and grooming rituals for men.",
    items: [
      "Haircut", "Beard Trim", "Beard Styling", "Clean Shave", "Hair Color",
      "Hair Spa", "Head Massage", "Facial", "Face Cleanup", "Detan",
    ],
  },
  {
    title: "Women's Beauty",
    description: "From threading to bridal — complete beauty care.",
    items: [
      "Haircut", "Hair Styling", "Hair Coloring", "Hair Spa", "Threading",
      "Waxing", "Bleach", "Cleanup", "Facial", "Bridal Makeup",
      "Party Makeup", "Saree Draping",
    ],
  },
  {
    title: "Skin Care",
    description: "Glow-boosting facials and treatments tailored to your skin.",
    items: [
      "Fruit Facial", "Gold Facial", "Diamond Facial", "Cleanup",
      "Anti-Tan Treatment", "Detan Treatment", "Skin Brightening Treatment",
    ],
  },
  {
    title: "Nail Care",
    description: "Salon-perfect hands and feet, every visit.",
    items: ["Manicure", "Pedicure", "Nail Grooming"],
  },
];

export const priceGroups = [
  {
    title: "Hair Services",
    rows: [
      ["Men's Haircut", "₹150 – ₹350"],
      ["Women's Haircut", "₹300 – ₹800"],
      ["Kids Haircut", "₹150 – ₹300"],
      ["Hair Wash", "₹150 – ₹350"],
      ["Hair Spa", "₹600 – ₹2,000"],
      ["Hair Coloring", "₹800 onwards"],
      ["Global Hair Color", "₹2,000 onwards"],
      ["Hair Highlights", "₹1,500 onwards"],
      ["Hair Smoothening", "₹3,000 onwards"],
      ["Hair Straightening", "₹3,000 onwards"],
      ["Hair Rebonding", "₹3,500 onwards"],
      ["Keratin Treatment", "₹3,500 onwards"],
      ["Hair Botox", "₹4,000 onwards"],
      ["Hair Repair Treatment", "₹1,500 onwards"],
    ] as const,
  },
  {
    title: "Beauty Services",
    rows: [
      ["Threading", "₹30 onwards"],
      ["Upper Lip", "₹30 onwards"],
      ["Face Cleanup", "₹400 onwards"],
      ["Fruit Facial", "₹600 onwards"],
      ["Gold Facial", "₹1,000 onwards"],
      ["Diamond Facial", "₹1,500 onwards"],
      ["Detan Treatment", "₹500 onwards"],
      ["Waxing", "₹200 onwards"],
      ["Bleach", "₹300 onwards"],
      ["Manicure", "₹400 onwards"],
      ["Pedicure", "₹500 onwards"],
      ["Bridal Makeup", "On Consultation"],
      ["Party Makeup", "On Consultation"],
    ] as const,
  },
];

export const hours = [
  ["Monday", "8:00 AM – 9:00 PM"],
  ["Tuesday", "10:00 AM – 9:00 PM"],
  ["Wednesday", "8:00 AM – 9:00 PM"],
  ["Thursday", "8:00 AM – 9:00 PM"],
  ["Friday", "8:00 AM – 9:00 PM"],
  ["Saturday", "8:00 AM – 9:00 PM"],
  ["Sunday", "8:00 AM – 9:00 PM"],
] as const;
