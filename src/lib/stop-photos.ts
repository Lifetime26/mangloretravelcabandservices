import type { TourPackage } from "@/lib/places";

const files = import.meta.glob("/src/assets/*.jpg", { eager: true, import: "default" }) as Record<string, string>;

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const index = new Map<string, string>();
for (const [path, url] of Object.entries(files)) {
  const base = path.split("/").pop()?.replace(/\.jpg$/i, "");
  if (base) index.set(norm(base), url);
}

/* Names a photo may be saved under, so a file dropped in with its original
   file name still matches the name used in the data. */
const alias: Record<string, string[]> = {
  "bahubali-statue": ["bahubali"],
  "idagunji-ganapati": ["idgunji", "idagunji"],
  "kodachadri-peak": ["kodachadri"],
  "maravanthe-beach": ["marvanthe", "maravanthe"],
  "sowthadka-ganapati": ["southadka", "sowthadka"],
  "udupi-krishna-matha": ["udupi-temple"],
  "udupi-krishna-matha-2": ["udupi-temple-2"],
  "raja-seat": ["rajas-seat"],
};

/* Photos that are not in src/assets yet can be pointed at a URL instead. */
const remote: Record<string, string> = {};

/** The photo for a file name, or undefined when it has not been added yet. */
export const photo = (name: string): string | undefined => {
  const key = norm(name);
  const alt = (alias[key] ?? []).map((n) => index.get(n)).find((x): x is string => Boolean(x));
  return index.get(key) ?? alt ?? remote[key];
};

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
  ["maravanthe", "maravanthe-beach"], ["kodachadri", "kodachadri-peak"], ["idagunji", "idagunji-ganapati"],
  ["bahubali", "bahubali-statue"], ["sowthadka", "sowthadka-ganapati"], ["udupi krishna", "udupi-krishna-matha"],
  ["abbey falls", "abbey-falls"], ["raja", "raja-seat"], ["hebbe", "hebbe-falls"], ["mullayanagiri", "mullayanagiri"],
];

const find = (name: string) => {
  const n = name.toLowerCase();
  const r = rules.find(([k]) => (k.startsWith("^") ? n.startsWith(k.slice(1)) : n.includes(k)));
  return r ? photo(r[1]) : undefined;
};

export function withStopPhotos(p: TourPackage): TourPackage {
  const stops = p.stops.map((s) => { const img = s.img ?? find(s.name); return img ? { ...s, img } : s; });
  const extra = (p.extraImgs ?? []).map(photo).filter((x): x is string => Boolean(x));
  const all = [...(p.imgs ?? [p.img]), ...stops.flatMap((s) => (s.img ? [s.img] : [])), ...extra];
  const imgs = [...new Set(all)].slice(0, 8);
  return { ...p, stops, imgs };
}
