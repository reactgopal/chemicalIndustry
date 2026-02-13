import {
  Droplet,
  Sprout,
  Hammer,
  Activity,
  Truck,
  Settings,
} from "lucide-react";
const industries = [
  {
    name: "Plastic Manufacturing",
    image:
      "https://images.unsplash.com/photo-1713900105420-67ae6dbf3595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwbWFudWZhY3R1cmluZyUyMGluZHVzdHJ5fGVufDF8fHx8MTc3MDcwMzExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "We supply essential plasticizers, stabilizers, and additives for PVC and polymer production.",
    chemicals: [
      "Chlorinated Paraffin Wax (CPW)",
      "DOP & DOTP Plasticizers",
      "Calcium Carbonate",
      "Dioctyl Maleate",
      "Zinc Oxide",
      "Titanium Dioxide",
    ],
    applications:
      "PVC pipes, cables, films, sheets, profiles, automotive parts, packaging materials, and flexible tubing.",
    icon: <Settings className="w-8 h-8 text-amber-600" />,
  },
  {
    name: "Water Treatment",
    image:
      "https://images.unsplash.com/photo-1533163238111-4a7ced54f2e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50fGVufDF8fHx8MTc3MDc3MjI1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Comprehensive water treatment chemicals for municipal and industrial water purification.",
    chemicals: [
      "Poly Aluminium Chloride (PAC)",
      "Sodium Hypochlorite",
      "TCCA 90%",
      "Caustic Soda Flakes",
      "Sulphuric Acid",
      "Hydrochloric Acid",
      "Chlorine Tablets",
    ],
    applications:
      "Drinking water treatment, wastewater treatment, industrial effluent treatment, swimming pools, and cooling towers.",
    icon: <Droplet className="w-8 h-8 text-cyan-600" />,
  },
  {
    name: "Mining & Drilling",
    image:
      "https://images.unsplash.com/photo-1524391697575-8ea102803604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBkcmlsbGluZyUyMG9wZXJhdGlvbnxlbnwxfHx8fDE3NzA3OTAxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Specialized chemicals for mining operations, mineral processing, and drilling fluids.",
    chemicals: [
      "Caustic Soda",
      "Sulphuric Acid",
      "Hydrochloric Acid",
      "Sodium Silicate",
      "PAC",
      "Industrial Salt",
    ],
    applications:
      "Ore processing, mineral flotation, drilling mud additives, pH control, and metal extraction.",
    icon: <Hammer className="w-8 h-8 text-orange-600" />,
  },
  {
    name: "Pharmaceuticals",
    image:
      "https://images.unsplash.com/photo-1732690233982-1d4567384ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzcwNzkwMTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Pharmaceutical-grade chemicals and intermediates for drug manufacturing.",
    chemicals: [
      "Ortho Anisidine",
      "Dimethyl Formamide",
      "Glycerine USP",
      "Zinc Chloride",
      "Boric Acid",
      "White Oil (Pharma Grade)",
    ],
    applications:
      "API synthesis, drug formulation, excipients, antiseptics, and pharmaceutical processing.",
    icon: <Activity className="w-8 h-8 text-blue-600" />,
  },
  {
    name: "Agriculture & Agrochemicals",
    image:
      "https://images.unsplash.com/photo-1688320243376-69b68a8f656f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBmaWVsZHxlbnwxfHx8fDE3NzA3NDM5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Fertilizers, soil conditioners, and agrochemical intermediates for modern agriculture.",
    chemicals: [
      "DAP (Diammonium Phosphate)",
      "Magnesium Sulfate",
      "Sulphur Bentonite",
      "NBPT",
      "Dimethylamine",
      "3,4 DCA",
    ],
    applications:
      "Crop nutrition, soil amendment, herbicide production, fungicide manufacturing, and pesticide intermediates.",
    icon: <Sprout className="w-8 h-8 text-green-600" />,
  },
  {
    name: "Petrochemicals",
    image:
      "https://images.unsplash.com/photo-1768564206500-5cddb1fea679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXRyb2NoZW1pY2FsJTIwcmVmaW5lcnklMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MDc5MDE2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Solvents and petrochemical products for refining and chemical processing industries.",
    chemicals: [
      "Acetone",
      "Methanol",
      "Xylene",
      "Toluene",
      "Cyclohexane",
      "Ethylene Dichloride",
      "DMF",
    ],
    applications:
      "Fuel additives, solvent extraction, chemical synthesis, paint thinners, and industrial cleaning.",
    icon: <Settings className="w-8 h-8 text-slate-600" />,
  },
  {
    name: "Food & Beverage",
    image:
      "https://images.unsplash.com/photo-1762329924239-e204f101fca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGluZHVzdHJ5fGVufDF8fHx8MTc3MDc5MDE2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Food-grade chemicals for processing, preservation, and quality enhancement.",
    chemicals: [
      "Citric Acid",
      "Liquid Caramel",
      "TBHQ",
      "BHT",
      "Guar Gum",
      "Sodium Nitrite",
      "Boric Acid",
    ],
    applications:
      "Food preservation, flavor enhancement, coloring, thickening agents, antioxidants, and pH control.",
    icon: <Truck className="w-8 h-8 text-yellow-600" />,
  },
  {
    name: "Paint & Coating",
    image:
      "https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludCUyMGNvYXRpbmclMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3MDc5MDE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Solvents, pigments, and additives for paint and coating formulations.",
    chemicals: [
      "Xylene",
      "Toluene",
      "Acetone",
      "Titanium Dioxide",
      "Zinc Oxide",
      "Calcium Carbonate",
      "Chlorinated Paraffin",
    ],
    applications:
      "Architectural paints, industrial coatings, automotive finishes, wood coatings, and marine paints.",
    icon: <Settings className="w-8 h-8 text-indigo-600" />,
  },
  {
    name: "Cosmetics & Personal Care",
    image:
      "https://images.unsplash.com/photo-1658387576640-f118bda7543f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBsYWJvcmF0b3J5JTIwc2NpZW5jZXxlbnwxfHx8fDE3NzA3OTAxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Cosmetic-grade ingredients for personal care and beauty products.",
    chemicals: [
      "Glycerine",
      "White Oil",
      "SLES",
      "LABSA",
      "Zinc Oxide",
      "Boric Acid",
    ],
    applications:
      "Skin care products, shampoos, soaps, lotions, sunscreens, and toiletries.",
    icon: <Activity className="w-8 h-8 text-pink-600" />,
  },
  {
    name: "Paper Industry",
    image:
      "https://images.unsplash.com/photo-1768128834301-7811be9d3a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMG1hbnVmYWN0dXJpbmclMjBpbmR1c3RyaWFsJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzA3OTAxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Chemicals for paper manufacturing, bleaching, and finishing processes.",
    chemicals: [
      "Caustic Soda",
      "Sulphuric Acid",
      "Sodium Hypochlorite",
      "Calcium Carbonate",
      "Sodium Silicate",
    ],
    applications:
      "Pulp processing, paper bleaching, sizing, coating, and finishing.",
    icon: <Settings className="w-8 h-8 text-slate-400" />,
  },
];
export default industries;
