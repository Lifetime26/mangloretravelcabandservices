import type { TourPackage } from "@/lib/places";

const files = import.meta.glob("/src/assets/*.jpg", { eager: true, import: "default" }) as Record<string, string>;
const pic = (name: string) => files[`/src/assets/${name}.jpg`];

/* [text to find in the stop name, image file name in src/assets] */
const rules: [string, string][] = [
  ["sharavu", "sharavu"], ["venkataramana", "venkataramana-temple"], ["milagres", "milagress-church"],
  ["rosario", "Rosario Cathedral"], ["aloysius", "St. Aloysius Chapel"], ["kudroli", "Kudroli Gokarnanatheshwara Temple"],
  ["panambur", "Panambur"], ["tannirbhavi", "Tannirbhavi"], ["kadri", "kadri"],
  ["mahabaleshwara", "Mahabaleshwara"], ["maha ganapati", "Maha Ganapati Temple"], ["kudle", "Kudle Beach"],
  ["vidyashankara", "Vidyashankara Temple"], ["tunga river", "Tunga river ghat"], ["^kalasa", "Kalasa"],
  ["coonoor", "Coonoor and Sim's Park"], ["pookode", "Pookode"], ["soochipara", "Soochipara"], ["edakkal", "Edakkal"],
  ["banasura", "Banasura Sagar Dam"], ["guna caves", "Guna Caves"], ["bryant", "Bryant Park"], ["echo point", "Echo Point"],
  ["chamundi", "Chamundi Hills"], ["philomena", "St. Philomena's Church"], ["hoysaleswara", "Hoysaleswara Temple"],
  ["charmadi", "Charmadi Ghat"], ["badami cave", "Badami cave temples"], ["^aihole", "Aihole"], ["pattadakal", "Pattadakal"],
  ["palolem", "Palolem and Colva"], ["kali river", "Kali river rafting"], ["kavala", "Kavala Caves"],
  ["bhairaveshwara", "Bhairaveshwara and Mohini Shikharas"], ["vibhooti", "Vibhooti Falls"], ["bekal fort", "bekal-fort"],
];

const find = (name: string) => {
  const n = name.toLowerCase();
  const r = rules.find(([k]) => (k.startsWith("^") ? n.startsWith(k.slice(1)) : n.includes(k)));
  return r ? pic(r[1]) : undefined;
};

export function withStopPhotos(p: TourPackage): TourPackage {
  const stops = p.stops.map((s) => { const img = s.img ?? find(s.name); return img ? { ...s, img } : s; });
  const all = [...(p.imgs ?? [p.img]), ...stops.flatMap((s) => (s.img ? [s.img] : []))];
  const imgs = [...new Set(all)].slice(0, 8);
  return { ...p, stops, imgs };
}
