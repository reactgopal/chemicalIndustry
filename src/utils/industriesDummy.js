import {
  Droplet,
  Sprout,
  Hammer,
  Activity, 
  Settings,
  Factory,
  Pill,
  Flame,
  Palette,
  Atom,
  Sparkles,
  UtensilsCrossed,
  Pickaxe,
} from "lucide-react";

const industries = [
  {
    name: "Paper, Plastic & Rubber Additives",
    image:
      "https://images.unsplash.com/photo-1713900105420-67ae6dbf3595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJ5fGVufDF8fHx8MTc3MDcwMzExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Essential additives for enhancing performance and durability in paper, plastic, and rubber manufacturing.",
    chemicals: [
      {
        name: "Plasticizers",
        items: [
          "Chlorinated Paraffin Wax 52%",
          "Chlorinated Paraffin Wax 45%",
          "DOP",
          "DOTP",
          "Trichloroacetone 65%",
          "Dioctyl Maleate (DOM)",
        ],
      },
      {
        name: "Plastic",
        items: ["Calcium Carbonate"],
      },
      {
        name: "Paper",
        items: ["Thiourea Dioxide 99%", "Sodium Hydro Sulphite"],
      },
    ],
    applications:
      "PVC pipes, cables, films, rubber compounding, and paper bleaching processes.",
    icon: <Settings className="w-8 h-8 text-amber-600" />,
  },
  {
    name: "Water Treatment",
    image:
      "https://images.unsplash.com/photo-1533163238111-4a7ced54f2e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50fGVufDF8fHx8MTc3MDc3MjI1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Comprehensive range of chemicals for municipal and industrial water purification and treatment.",
    chemicals: [
      {
        name: "Core Chemicals",
        items: [
          "Sulphuric Acid 98%",
          "Poly Aluminium Chloride",
          "Epichlorohydrin",
          "Sodium Hypochlorite",
          "Industrial Salt",
          "Chlorine Tablet 200gm / 20gm",
          "TCCA 90% Granular / Tablets",
          "Disinfecting Tablets",
          "Super Absorbent Polymer",
        ],
      },
    ],
    applications:
      "Drinking water treatment, wastewater treatment, swimming pools, and industrial effluent treatment.",
    icon: <Droplet className="w-8 h-8 text-cyan-600" />,
  },
  {
    name: "Mining & Metal Processing",
    image:
      "https://images.unsplash.com/photo-1524391697575-8ea102803604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBkcmlsbGluZyUyMG9wZXJhdGlvbnxlbnwxfHx8fDE3NzA3OTAxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "High-purity chemicals for efficient mineral extraction and metal processing operations.",
    chemicals: [
      {
        name: "Processing Agents",
        items: ["Caustic Soda Flakes 99.5%", "Hydrochloric Acid 31–33%"],
      },
    ],
    applications:
      "Ore processing, pH regulation, mineral flotation, and metal refining.",
    icon: <Hammer className="w-8 h-8 text-orange-600" />,
  },
  {
    name: "Chemical Synthesis & Intermediates",
    image:
      "https://images.unsplash.com/photo-1768564206500-5cddb1fea679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXRyb2NoZW1pY2FsJTIwcmVmaW5lcnklMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MDc5MDE2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Key intermediates for the synthesis of various industrial and specialty chemicals.",
    chemicals: [
      {
        name: "Chloro Benzene Derivatives",
        items: [
          "Mono Chloro Benzene",
          "Ortho Dichloro Benzene",
          "Para Dichloro Benzene",
          "Naphthalene Powder",
          "Naphthalene Balls",
        ],
      },
      {
        name: "Chloro Toluene Derivatives",
        items: ["Benzyl Chloride", "Benzyl Alcohol"],
      },
      {
        name: "Other Chemical Intermediates",
        items: ["Dimethyl Sulphate"],
      },
    ],
    applications:
      "Synthesis of agrochemicals, pharmaceuticals, dyes, and organic compounds.",
    icon: <Atom className="w-8 h-8 text-indigo-600" />,
  },
  {
    name: "Flavour & Fragrances",
    image:
      "https://oemind.com/wp-content/uploads/2023/02/Flavours-fragrance2.jpg",
    description:
      "Fine chemicals and aroma ingredients for the flavor and fragrance industry.",
    chemicals: [
      {
        name: "Naturals",
        items: ["Pine Oil"],
      },
      {
        name: "Synthetics",
        items: ["Benzyl Alcohol"],
      },
      {
        name: "Catalyst",
        items: ["Aluminium Chloride"],
      },
    ],
    applications:
      "Perfumes, soaps, detergents, food flavorings, and aromatherapy products.",
    icon: <Sparkles className="w-8 h-8 text-pink-500" />,
  },
  {
    name: "Cosmetics",
    image:
      "https://images.unsplash.com/photo-1658387576640-f118bda7543f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBsYWJvcmF0b3J5JTIwc2NpZW5jZXxlbnwxfHx8fDE3NzA3OTAxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Premium ingredients for skincare, haircare, and personal care formulations.",
    chemicals: [
      {
        name: "Emulsifier",
        items: ["Zinc Oxide", "Glycerine"],
      },
      {
        name: "UV Filter",
        items: ["Benzophenone 3", "Benzophenone 4"],
      },
      {
        name: "Raw Materials",
        items: ["Zinc Oxide", "White Oil"],
      },
    ],
    applications:
      "Suncreams, lotions, shampoos, moisturizing creams, and cosmetic bases.",
    icon: <Activity className="w-8 h-8 text-rose-500" />,
  },
  {
    name: "Soap & Detergents",
    image:
      "https://images.unsplash.com/photo-1628102491629-778571d893a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwZGV0ZXJnZW50JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzEwOTUzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Core ingredients and additives for the production of soaps, detergents, and cleaning agents.",
    chemicals: [
      {
        name: "Home Care",
        items: [
          "Caustic Soda Flakes 99.5%",
          "Caustic Soda Prills / Pearls",
          "LABSA",
          "Sodium Silicate",
          "Soda Ash Light",
          "Soda Ash Dense",
          "Sodium Percarbonate",
          "SLES",
          "Sodium Lauryl Sulphate",
        ],
      },
      {
        name: "Additives",
        items: ["Bleaching Powder", "Sodium Sulphate", "Lauroyl Chloride"],
      },
    ],
    applications:
      "Household detergents, industrial cleaners, dishwashing liquids, and bar soaps.",
    icon: <Droplet className="w-8 h-8 text-blue-400" />,
  },
  {
    name: "Drilling & Mining",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/074/241/325/small/heavyduty-drilling-rig-operates-in-a-granite-quarry-excavating-rock-with-a-large-drill-bit-photo.jpg",
    description:
      "Specialized chemicals for oil field drilling and mineral extraction processes.",
    chemicals: [
      {
        name: "Drilling",
        items: ["Calcium Chloride 94–97%", "Calcium Chloride Powder"],
      },
      {
        name: "Mining",
        items: ["Sodium Cyanide"],
      },
    ],
    applications:
      "Drilling fluids, gold extraction, dust control, and de-icing.",
    icon: <Pickaxe className="w-8 h-8 text-slate-600" />,
  },
  {
    name: "Dyestuff Intermediate",
    image:
      "https://images.unsplash.com/photo-1504198458649-3128b932f49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcnZnZnVsJTIwZHllcyUyMHBvd2RlcnxlbnwxfHx8fDE3NzEwOTU1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Key intermediates used in the synthesis of reactive dyes and pigments.",
    chemicals: [
      {
        name: "Intermediates",
        items: [
          "2,4 DNCB",
          "H Acid",
          "3,4 DCA",
          "Vinyl Sulphone",
          "ONCB",
          "Ortho Anisidine",
          "Zinc Chloride",
          "1,4 Dinitrosobenzene",
        ],
      },
    ],
    applications:
      "Textile dyes, pigments, food coloring, and printing inks.",
    icon: <Palette className="w-8 h-8 text-purple-600" />,
  },
  {
    name: "Pharmaceutical Intermediates",
    image:
      "https://images.unsplash.com/photo-1732690233982-1d4567384ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzcwNzkwMTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "High-purity solvents and intermediates for pharmaceutical synthesis.",
    chemicals: [
      {
        name: "Solvents & Intermediates",
        items: [
          "PNCB",
          "Acetonitrile",
          "Iso Propyl Alcohol",
          "Acetone",
          "Ethylene Dichloride",
          "Iso Butanol",
          "Cyclohexane",
          "Methanol",
          "Methylene Dichloride",
          "Mix Xylene",
          "Toluene",
          "Dimethyl Formamide",
          "NN Diethyl Ethylenediamine",
          "Dodecyl Sulphate Salt",
          "Para Nitro Phenol",
          "Ortho Nitro Phenol",
          "2-Dimethyl Amino",
          "Methyl Cyclohexanone Hydrochloride",
        ],
      },
    ],
    applications:
      "API manufacturing, drug formulation, and laboratory synthesis.",
    icon: <Pill className="w-8 h-8 text-blue-500" />,
  },
  {
    name: "Petrochemicals",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZpbmVyeSUyMGF0JTIwbslnaHR8ZW58MXx8fHwxNzcxMDk1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Petroleum-derived chemicals for fuel and industrial applications.",
    chemicals: [
      {
        name: "Products",
        items: [
          "2-Ethylhexyl Nitrate",
          "Bio Diesel",
          "Cyclohexane",
          "NMA",
        ],
      },
    ],
    applications:
      "Fuel additives, industrial solvents, and chemical feedstocks.",
    icon: <Flame className="w-8 h-8 text-amber-500" />,
  },
  {
    name: "Paint, Ink & Coating",
    image:
      "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvYXRpbmclMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3MDc5MDE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Solvents, primers, and additives for high-quality paints and coatings.",
    chemicals: [
      {
        name: "Solvents",
        items: [
          "Chloroform",
          "Ethanol",
          "Ethyl Acetate",
          "Benzyl Alcohol",
          "Cryslic Acid",
        ],
      },
      {
        name: "Primers",
        items: [
          "Epoxy Primer",
          "Red Oxide",
          "Mineral Turpentine Oil",
          "Xylene",
        ],
      },
    ],
    applications:
      "Automotive paints, industrial coatings, printing inks, and wood finishes.",
    icon: <Palette className="w-8 h-8 text-indigo-500" />,
  },
  {
    name: "Food & Beverage Industries",
    image:
      "https://images.unsplash.com/photo-1762329924239-e204f101fca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGluZHVzdHJ5fGVufDF8fHx8MTc3MDc5MDE2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Food-grade additives for preservation, flavor enhancement, and texture control.",
    chemicals: [
      {
        name: "Acidulants",
        items: ["Citric Acid"],
      },
      {
        name: "Food Industry",
        items: ["Liquid Caramel"],
      },
      {
        name: "Preservatives & Antioxidants",
        items: [
          "TBHQ",
          "Maize Starch",
          "BHT",
          "Boric Acid",
          "Sodium Nitrite",
          "Guar Gum",
          "Guar Gum Splits",
          "Guar Meal",
          "Cassia",
          "Water Soluble Carmine Acid 10%",
          "Liquid Carmine Acid 10%",
        ],
      },
    ],
    applications:
      "Food preservation, beverages, bakery products, and confectionery.",
    icon: <UtensilsCrossed className="w-8 h-8 text-green-600" />,
  },
  {
    name: "Agrochemical Intermediate",
    image:
      "https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBmaWVsZHxlbnwxfHx8fDE3NzA3NDM5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Essential intermediates for the production of fertilizers, herbicides, and pesticides.",
    chemicals: [
      {
        name: "Intermediates",
        items: [
          "Dimethylamine (DMA)",
          "Magnesium Sulphate Anhydrous",
          "Ulexite 10% B Granular",
          "Dimethyl Phosphite",
          "Sulphur Bentonite 90% Pastille",
          "NBPT",
          "Magnesium Sulphate Mono",
          "3,4 DCA",
          "DAP",
          "ONCB",
          "ONT",
        ],
      },
    ],
    applications:
      "Crop protection, soil enrichment, and plant growth regulators.",
    icon: <Sprout className="w-8 h-8 text-green-500" />,
  },
  {
    name: "Rubber & Polymer Industries",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFiF37OTUXkWfNm-UvbOHWSMSPOkutnAadSg&s",
    description:
      "Chemicals and additives for rubber processing and polymer modification.",
    chemicals: [
      {
        name: "Processing Aids",
        items: [
          "Rubber Process Oil",
          "Epichlorohydrin",
          "Xylene",
          "Propylene Oxide",
          "Antimony Trisulphide",
          "Terephthaloyl Chloride",
          "Isophthaloyl Chloride",
          "Zinc Stearate Powder",
        ],
      },
    ],
    applications:
      "Tire manufacturing, rubber goods, seals, gaskets, and polymer compounds.",
    icon: <Factory className="w-8 h-8 text-slate-500" />,
  },
];
export default industries;

