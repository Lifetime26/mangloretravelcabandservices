import { withStopPhotos } from "@/lib/stop-photos";
import { extraPackages, extraAbout } from "@/lib/packages-extra";
import dTannirbhavi from "@/assets/dest-beach.jpg";
import dKadri from "@/assets/kadri.jpg";
import dUdupi from "@/assets/udupi.jpg";
import dKollur from "@/assets/kollur.jpg";
import dMurudeshwara from "@/assets/murudeshwara.jpg";
import dCoorg from "@/assets/coorg-tour.jpg";
import sMurudeshwara from "@/assets/murudeshwara.jpg";
import sUdupi from "@/assets/udupi.jpg";
import sKollur from "@/assets/kollur.jpg";
import sCoorg from "@/assets/coorg-tour.jpg";
import sDharmasthala from "@/assets/darmasthala-tour.jpg";
import sBeach from "@/assets/dest-beach.jpg";
import hKadri from "@/assets/kadri.jpg";
import hKadri2 from "@/assets/kadri2.jpg";
import hMangaladevi from "@/assets/mangaladevi.jpg";
import sChik from "@/assets/chikamagaluru-tour.jpg";
import sKukke from "@/assets/kukke-subramanya-tour.jpg";
import { stopDetails } from "@/lib/stop-details";

/* ------------------------------------------------------------------ */
/*  EDIT TEXT HERE – every destination and package page reads this.   */
/*  Please double-check distances and timings before publishing.      */
/* ------------------------------------------------------------------ */

export type Destination = {
  slug: string;
  title: string;
  loc: string;
  img: string;
  short: string;
  about: string[];
  highlights: string[];
  distance: string;
  bestTime: string;
  duration: string;
  timings?: string;
};

export const destinations: Destination[] = [
  {
    slug: "kadri-manjunath-temple",
    title: "Kadri Manjunath Temple",
    loc: "Mangalore",
    img: dKadri,
    short: "An ancient temple of Lord Manjunatha, one of Mangaluru's most respected shrines.",
    about: [
      "Kadri Manjunath Temple stands on a small hill inside the city and is dedicated to Lord Manjunatha, a form of Lord Shiva. It is believed to date back about a thousand years and is known for its old bronze statues and sacred water ponds.",
      "It is a peaceful place for darshan, and the hill around it has a park where you can take a short walk afterwards. Early mornings are the calmest time to visit.",
    ],
    highlights: [
      "Darshan of Lord Manjunatha",
      "Ancient bronze statues and sacred ponds",
      "Close to the city centre",
      "Pairs well with Mangaladevi Temple",
    ],
    distance: "About 5 km from Mangaluru city centre",
    bestTime: "Year-round, early morning is calmest",
    duration: "1 to 2 hours",
    timings: "Opens about 6:00 AM, closes about 1:00 PM; reopens about 4:00 PM, closes about 8:00 PM",
  },
  {
    slug: "udupi-krishna-temple",
    title: "Udupi Krishna Temple",
    loc: "Udupi",
    img: dUdupi,
    short: "The famous Krishna Matha, where the deity is worshipped through a silver-plated window.",
    about: [
      "Sri Krishna Matha in Udupi is one of the best-known Krishna temples in South India. It was established by the saint Madhvacharya about 800 years ago. Devotees traditionally see the deity through a small window called the Navagraha Kindi.",
      "Udupi is also known for its simple and tasty temple-style meals, and Malpe Beach is a short drive away. Most families visit as a day trip from Mangaluru.",
    ],
    highlights: [
      "Darshan of Lord Krishna through the Navagraha Kindi",
      "Famous Udupi meals",
      "Malpe Beach nearby",
      "An easy day trip from Mangaluru",
    ],
    distance: "About 60 km from Mangaluru, around 1.5 hours",
    bestTime: "October to February",
    duration: "Full day (8 to 10 hours with Malpe)",
    timings: "Opens about 5:30 AM, closes about 9:30 PM (short breaks during pooja)",
  },
  {
    slug: "kollur-mookambika",
    title: "Kollur Mookambika",
    loc: "Kollur",
    img: dKollur,
    short: "A powerful Devi temple at the foot of the Western Ghats, beside the Souparnika river.",
    about: [
      "Mookambika Temple in Kollur is dedicated to Goddess Mookambika and is one of the most visited pilgrim sites in Karnataka. It sits at the foot of the Kodachadri hills, on the bank of the Souparnika river.",
      "Pilgrims from Mangaluru usually leave early in the morning, take darshan and return the same day. Kodachadri viewpoints and Maravanthe Beach can be added for a longer trip.",
    ],
    highlights: [
      "Darshan of Goddess Mookambika",
      "Setting beside the Souparnika river and Kodachadri hills",
      "Maravanthe Beach on the way",
      "Can be combined with Murudeshwara",
    ],
    distance: "About 135 km from Mangaluru, 3.5 to 4 hours",
    bestTime: "October to February (Navaratri is festive but crowded)",
    duration: "Full day, or overnight for a relaxed trip",
    timings: "Opens about 5:00 AM, closes about 1:30 PM; reopens about 3:00 PM, closes about 9:00 PM",
  },
  {
    slug: "murudeshwara",
    title: "Murudeshwara",
    loc: "Bhatkal",
    img: dMurudeshwara,
    short: "A giant Shiva statue and a tall temple tower by the Arabian Sea.",
    about: [
      "Murudeshwara is a seaside temple town known for its huge statue of Lord Shiva, which stands on a hill with the sea on three sides. The temple's Raja Gopura is one of the tallest temple towers in the world, and a lift takes visitors up for views.",
      "It is a scenic place to visit around sunrise or sunset, and it combines well with Kollur Mookambika on the same coastal route.",
    ],
    highlights: [
      "Giant Shiva statue beside the sea",
      "Raja Gopura tower with a lift to the top",
      "Beach and sea views",
      "Pairs well with Kollur Mookambika",
    ],
    distance: "About 165 km from Mangaluru, around 4 hours",
    bestTime: "October to March",
    duration: "Full day, overnight is more comfortable",
    timings: "Opens about 6:00 AM, closes about 1:00 PM; reopens about 3:00 PM, closes about 8:00 PM",
  },
  {
    slug: "coorg",
    title: "Coorg",
    loc: "Kodagu",
    img: dCoorg,
    short: "Misty hills, coffee estates and waterfalls, a cool escape from the coast.",
    about: [
      "Coorg (Kodagu) is a hill district of green forests, coffee and spice plantations and misty viewpoints. Popular stops include Abbey Falls, Raja's Seat in Madikeri, the Dubare elephant camp and the Golden Temple at Bylakuppe.",
      "The drive from Mangaluru climbs through ghat roads, so an experienced local driver makes the trip safer and more relaxed. Two days with one night in Coorg is the most comfortable plan.",
    ],
    highlights: [
      "Abbey Falls and Raja's Seat",
      "Dubare elephant camp",
      "Golden Temple at Bylakuppe",
      "Coffee estates and cool weather",
    ],
    distance: "About 140 km from Mangaluru to Madikeri, around 4 hours",
    bestTime: "October to March (monsoon for waterfalls)",
    duration: "2 days, 1 night recommended",
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);

/* ------------------------------------------------------------------ */

export type Cat = "temple" | "coastal" | "outstation" | "hills" | "heritage";

export const catLabel: Record<Cat, string> = {
  temple: "Temple Yatra",
  coastal: "Coastal & Beach",
  outstation: "Beaches & Adventure",
  hills: "Hill Stations",
  heritage: "Heritage & Palaces",
};

export type TourPackage = {
  slug: string;
  cat: Cat;
  title: string;
  img: string;
  imgs?: string[];
  extraImgs?: string[];
  places: string;
  summary: string;
  about?: string[];
  route: string;
  distance: string;
  stops: { name: string; note: string; detail?: string; img?: string }[];
  vehicle: string;
  plan: string[];
  featured?: boolean;
};

const basePackages: TourPackage[] = [
  {
    slug: "kollur-mookambika-darshan",
    cat: "temple",
    title: "Kollur Mookambika Darshan",
    img: sKollur,
    extraImgs: ["maravanthe-beach", "kodachadri-peak"],
    places: "Kollur Mookambika Temple, Kodachadri view, Maravanthe Beach",
    summary: "A pilgrimage to the Mookambika Temple with scenic stops on the way.",
    route: "Mangaluru, Maravanthe, Kollur, Mangaluru",
    distance: "About 270 km round trip",
    stops: [
      { name: "Maravanthe Beach", note: "A highway squeezed between the sea and the Souparnika river. Good for breakfast and photos." },
      { name: "Kollur Mookambika Temple", note: "The main darshan, at the foot of the Kodachadri hills." },
      { name: "Kodachadri viewpoint", note: "Optional. Needs extra time and works best in clear weather." },
    ],
    vehicle: "Sedan, SUV or Tempo Traveller",
    plan: [
      "Early morning pickup from your hotel or home in Mangaluru",
      "Drive up the coast to Maravanthe Beach for a short stop",
      "Darshan at Kollur Mookambika Temple",
      "Optional drive towards Kodachadri for viewpoints (needs extra time)",
      "Return to Mangaluru by evening",
    ],
    featured: true,
  },
  {
    slug: "murudeshwara-shiva-yatra",
    cat: "temple",
    title: "Murudeshwara Shiva Yatra",
    img: sMurudeshwara,
    extraImgs: ["idagunji-ganapati"],
    places: "Murudeshwara Temple & Statue, Idagunji Ganapati, Bhatkal",
    summary: "See the giant Shiva statue at Murudeshwara and nearby coastal temples.",
    route: "Mangaluru, Udupi, Murudeshwara, Bhatkal, Mangaluru",
    distance: "About 330 km round trip",
    stops: [
      { name: "Murudeshwara Temple", note: "A sea-facing temple with a tall Raja Gopura and the giant Shiva statue on the hill beside it. A lift takes you up." },
      { name: "Bhatkal", note: "A coastal town for a tea or lunch break." },
      { name: "Idagunji Ganapati", note: "A Ganesha temple inland. Best added with a night's stay." },
    ],
    vehicle: "Sedan, SUV or Tempo Traveller",
    plan: [
      "Early morning pickup in Mangaluru",
      "Breakfast stop on the coastal highway",
      "Darshan at Murudeshwara Temple and a walk to the Shiva statue",
      "Visit Bhatkal. Idagunji Ganapati is a longer inland drive and works best with a night's stay",
      "Return to Mangaluru",
    ],
    featured: true,
  },
  {
    slug: "dharmasthala-manjunatha-temple",
    cat: "temple",
    title: "Dharmasthala Manjunatha Temple",
    img: sDharmasthala,
    extraImgs: ["bahubali-statue", "sowthadka-ganapati"],
    places: "Sri Manjunatha Temple, Bahubali Statue, Sowthadka Ganapati",
    summary: "Darshan at Sri Manjunatha Temple in Dharmasthala, with the temple annaprasada and the Bahubali statue.",
    route: "Mangaluru, Dharmasthala, Mangaluru",
    distance: "About 150 km round trip",
    stops: [
      { name: "Dharmasthala", note: "Darshan at Sri Manjunatha Temple. The temple serves free annaprasada to every visitor." },
      { name: "Bahubali Statue", note: "A short walk up the hill behind the temple, with views over the town and the Nethravathi river." },
      { name: "Sowthadka Ganapati", note: "Optional short stop on the way." },
    ],
    vehicle: "Sedan, SUV or Tempo Traveller",
    plan: [
      "Early morning pickup in Mangaluru",
      "Darshan at Sri Manjunatha Temple, Dharmasthala",
      "Annaprasada lunch at the temple",
      "Optional stop at Sowthadka Ganapati Temple or the Bahubali statue",
      "Return to Mangaluru in the evening",
    ],
    featured: true,
  },
  {
    slug: "kukke-subramanya-tour",
    cat: "temple",
    title: "Kukke Subramanya Tour Package",
    img: sKukke,
    places: "Kukke Subramanya Temple, Bisle Ghat View Point",
    summary: "Darshan at Kukke Subramanya Temple with a drive up to the Bisle Ghat View Point.",
    route: "Mangaluru, Kukke Subramanya, Bisle Ghat, Mangaluru",
    distance: "About 260 km round trip",
    stops: [
      { name: "Kukke Subramanya Temple", note: "A famous temple of Lord Subramanya in the Western Ghats foothills, known for Sarpa Samskara and Ashlesha Bali poojas. Queue times vary, so an early start is best." },
      { name: "Bisle Ghat View Point", note: "A viewpoint in the forests near Subramanya with wide views over the Western Ghats, including the Kumara Parvatha, Pushpagiri and Dodda Betta ranges. Clearest after the monsoon." },
    ],
    vehicle: "Sedan, SUV or Tempo Traveller",
    plan: [
      "Early morning pickup in Mangaluru",
      "Darshan at Kukke Subramanya Temple",
      "Lunch in Subramanya",
      "Drive to Bisle Ghat View Point",
      "Return to Mangaluru in the evening",
    ],
  },
  {
    slug: "udupi-krishna-temple-tour",
    cat: "temple",
    title: "Udupi Krishna Temple Tour",
    img: sUdupi,
    extraImgs: ["udupi-krishna-matha", "udupi-krishna-matha-2"],
    places: "Udupi Sri Krishna Matha, Manipal, St. Mary's Island, Malpe Beach",
    summary: "Darshan at Sri Krishna Matha, a boat ride to St. Mary's Island and sunset at Malpe Beach.",
    route: "Mangaluru, Udupi, Manipal, Malpe, St. Mary's Island, Mangaluru",
    distance: "About 130 km round trip",
    stops: [
      { name: "Udupi Krishna Matha", note: "Darshan through the Navagraha Kindi window, then lunch in Udupi." },
      { name: "Manipal", note: "A short, green drive through the university town." },
      { name: "St. Mary's Island", note: "A small island off Malpe, reached by a short boat ride, known for its rare hexagonal basalt rock columns. Boats usually do not run during the monsoon (about June to September)." },
      { name: "Malpe Beach", note: "Sunset and a sea breeze to end the day." },
    ],
    vehicle: "Sedan or SUV",
    plan: [
      "Morning pickup in Mangaluru",
      "Darshan at Udupi Sri Krishna Matha and lunch in Udupi",
      "Drive through Manipal",
      "Boat ride from Malpe to St. Mary's Island (outside the monsoon)",
      "Evening at Malpe Beach for the sunset",
      "Return to Mangaluru",
    ],
    featured: true,
  },
  {
    slug: "mangaluru-city-beaches",
    cat: "coastal",
    title: "Mangaluru City & Beaches",
    img: sBeach,
    places: "Panambur Beach, Tannirbhavi Beach, Sultan Battery",
    summary: "A relaxed half-day tour of Mangaluru's best beaches and its old watchtower.",
    route: "Sultan Battery, Tannirbhavi, Panambur",
    distance: "About 40 km in the city",
    stops: [
      { name: "Sultan Battery", note: "An old watchtower by the river." },
      { name: "Tannirbhavi Beach", note: "A calm, clean beach close to the city." },
      { name: "Panambur Beach", note: "Wide sands and a good sunset spot." },
    ],
    vehicle: "Sedan or SUV",
    plan: [
      "Pickup from your hotel or home",
      "Sultan Battery, an old watchtower by the river",
      "Tannirbhavi Beach",
      "Panambur Beach and sunset",
      "Drop-off at your hotel",
    ],
  },
  {
    slug: "heritage-temples-mangaluru",
    cat: "coastal",
    title: "Heritage & Temples of Mangaluru",
    img: hKadri,
    imgs: [hKadri, hKadri2, hMangaladevi],
    places: "St. Aloysius Chapel, Mangaladevi Temple, Kadri Manjunatha",
    summary: "Visit the city's painted chapel and two of its oldest temples.",
    route: "St. Aloysius Chapel, Mangaladevi Temple, Kadri Manjunatha Temple",
    distance: "About 20 km in the city",
    stops: [
      { name: "St. Aloysius Chapel", note: "Painted walls and ceiling from the late 1800s." },
      { name: "Mangaladevi Temple", img: hMangaladevi, note: "The temple that gave Mangaluru its name, with Kerala style tiled roofs and a history going back about a thousand years.", detail: "Mangaladevi Temple in the Bolar area is the shrine from which Mangaluru takes its name. Local tradition says it was built around the 10th century by the Alupa king Kundavarma, after the princess Mangala, who came from Malabar, became a devotee of Goddess Shakti and settled here. The temple is dedicated to Goddess Mangaladevi, worshipped as a form of Parvati, and it follows the Kerala style of architecture with sloping tiled roofs over a quiet stone courtyard. Navaratri is the biggest festival here, when the whole temple is lit and the goddess is taken out in procession. Early morning and evening pooja are the calmest times to visit, the temple sits close to the Netravathi river, and a darshan usually takes about 30 to 40 minutes." },
      { name: "Kadri Manjunatha Temple", note: "A hilltop temple with ancient bronze statues." },
    ],
    vehicle: "Sedan or SUV",
    plan: [
      "Pickup from your hotel or home",
      "St. Aloysius Chapel and its painted ceiling",
      "Darshan at Mangaladevi Temple",
      "Darshan at Kadri Manjunatha Temple",
      "Drop-off at your hotel",
    ],
  },
  {
    slug: "coorg-hill-station-getaway",
    cat: "hills",
    title: "Coorg Hill Station Getaway",
    img: sCoorg,
    extraImgs: ["abbey-falls", "raja-seat"],
    places: "Abbey Falls, Raja's Seat, Dubare, Golden Temple Bylakuppe",
    summary: "Waterfalls, viewpoints and coffee country in the hills of Kodagu.",
    route: "Mangaluru, Madikeri, Dubare, Bylakuppe, Mangaluru",
    distance: "About 330 km round trip",
    stops: [
      { name: "Madikeri", note: "Raja's Seat for sunset views over the hills." },
      { name: "Abbey Falls", note: "A waterfall inside a coffee estate. Fullest in the monsoon." },
      { name: "Dubare", note: "Elephant camp on the Kaveri river." },
      { name: "Bylakuppe", img: sCoorg, note: "Golden Temple and a Tibetan settlement." },
    ],
    vehicle: "SUV or Tempo Traveller",
    plan: [
      "Morning pickup and a drive up the ghat road to Madikeri",
      "Raja's Seat and Abbey Falls, then overnight stay in Coorg",
      "Dubare elephant camp",
      "Golden Temple at Bylakuppe, then return to Mangaluru",
      "Hotel stay is booked by you. Ask us for suggestions",
    ],
    featured: true,
  },
  {
    slug: "chikmagalur-coffee-trails",
    cat: "hills",
    title: "Chikmagalur Coffee Trails",
    img: sChik,
    extraImgs: ["mullayanagiri", "hebbe-falls"],
    places: "Mullayanagiri, Baba Budangiri, Hebbe Falls, coffee estates",
    summary: "Climb Karnataka's highest peaks and wander through coffee estates.",
    route: "Mangaluru, Chikmagalur, Baba Budangiri, Mangaluru",
    distance: "About 400 km round trip",
    stops: [
      { name: "Coffee estate", note: "Walk through plantations and see how coffee is grown." },
      { name: "Mullayanagiri", note: "Karnataka's highest peak, with a short climb at the top." },
      { name: "Baba Budangiri", note: "Hills, viewpoints and a famous shrine." },
      { name: "Hebbe Falls", note: "A waterfall reached by a jeep ride (extra cost)." },
    ],
    vehicle: "SUV or Tempo Traveller",
    plan: [
      "Morning pickup and a scenic drive up the ghat road to Chikmagalur",
      "Coffee estate visit and Mullayanagiri viewpoint",
      "Baba Budangiri and Hebbe Falls",
      "Return drive to Mangaluru",
      "Hotel or homestay is booked by you. Ask us for suggestions",
    ],
    featured: true,
  },
  {
    slug: "bekal-fort-kerala-coast",
    cat: "outstation",
    title: "Bekal Fort & Kerala Coast",
    img: dTannirbhavi,
    places: "Bekal Fort, Kappil Beach, Ananthapura Lake Temple",
    summary: "A day trip across the border to a sea fort, a quiet beach and a lake temple.",
    route: "Mangaluru, Ananthapura, Bekal, Kappil, Mangaluru",
    distance: "About 150 km round trip",
    stops: [
      { name: "Ananthapura Lake Temple", note: "A temple set in the middle of a quiet lake." },
      { name: "Bekal Fort", note: "A large sea fort with ocean views." },
      { name: "Kappil Beach", note: "A quiet beach where the backwaters meet the sea." },
    ],
    vehicle: "Sedan or SUV",
    plan: [
      "Morning pickup in Mangaluru",
      "Ananthapura Lake Temple",
      "Bekal Fort and its sea view",
      "Kappil Beach",
      "Return to Mangaluru in the evening",
    ],
  },
];

const withDetails = (p: TourPackage): TourPackage => {
  const list = stopDetails[p.slug];
  if (!list) return p;
  return { ...p, stops: p.stops.map((s, i) => {
    const text = list[i];
    return text && !s.detail ? { ...s, detail: text } : s;
  }) };
};

export const packages: TourPackage[] = [...basePackages.map((b) => (extraAbout[b.slug] ? { ...b, about: extraAbout[b.slug]! } : b)), ...extraPackages].map(withStopPhotos).map(withDetails);

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);

/* ------------------------------------------------------------------ */
/*  Travel guide shown on package pages. Edit freely.                 */
/* ------------------------------------------------------------------ */

export type GuideSection = { title: string; items: string[] };

export const travelGuide: Record<Cat, GuideSection[]> = {
  temple: [
    {
      title: "What to wear",
      items: [
        "Men: dhoti (mundu) or formal trousers. Some inner halls, including Udupi and Kukke Subrahmanya, ask men to remove shirts.",
        "Women: saree or a modest salwar with a dupatta.",
        "Avoid shorts, sleeveless tops and ripped jeans inside temples.",
      ],
    },
    {
      title: "Plan around darshan",
      items: [
        "Leave early. Most temples are calmest in the morning.",
        "Many temples close for a rest in the afternoon, so we plan stops around that break.",
        "Timings and queues change on festival days. We confirm before your trip.",
      ],
    },
    {
      title: "At the temple",
      items: [
        "Leave footwear in the car or at the temple stand.",
        "Phones and cameras are often not allowed inside the sanctum.",
        "Temple lunch (annadana) is served at several temples. Keep some time for it.",
      ],
    },
    {
      title: "Travelling with elders",
      items: [
        "Slow pacing with rest stops on long drives.",
        "We drop elders at the nearest permitted gate before parking.",
        "Tell us about wheelchairs, medicines or diet so we can plan ahead.",
      ],
    },
  ],
  coastal: [
    {
      title: "What to carry",
      items: ["Light cotton clothes, sunglasses and sunscreen.", "Drinking water and a small towel.", "A change of clothes if you plan to walk in the surf."],
    },
    {
      title: "Sea safety",
      items: ["Swim only where lifeguards or locals say it is safe.", "Avoid the water in monsoon (June to September) when the sea is rough.", "Keep children close to the shore."],
    },
    {
      title: "Best timing",
      items: ["Late afternoon is best for sunsets.", "October to March has the most comfortable weather.", "Heritage buildings such as churches may have fixed visiting hours."],
    },
  ],
  hills: [] as GuideSection[],
  heritage: [] as GuideSection[],
  outstation: [
    {
      title: "On the road",
      items: ["Ghat roads are winding. Tell us if anyone gets motion sick.", "We recommend an early start for daylight driving.", "Fog and rain can slow the drive in monsoon."],
    },
    {
      title: "Stay and food",
      items: ["Hotels and homestays are booked by you. Ask us for suggestions.", "Carry cash for small shops and entry tickets.", "Carry a light jacket for the hills."],
    },
    {
      title: "Plan with us",
      items: ["Tell us the number of people and luggage so we can pick the right vehicle.", "You can add or skip stops. We adjust the plan.", "Quote is shared on WhatsApp after your dates are confirmed."],
    },
  ],
};

travelGuide.hills = travelGuide.outstation;
travelGuide.heritage = travelGuide.outstation;

export const yatraFaqs: { q: string; a: string }[] = [
  { q: "Can we visit two temples in one day?", a: "Yes. Dharmasthala and Kukke Subrahmanya work well in a single day with an early morning start. Queue times vary, so expect a late-evening return." },
  { q: "Do temples close in the afternoon?", a: "Many do, for a few hours after midday. Exact timings change, so we confirm with you before the trip and plan the route around them." },
  { q: "Is a yatra suitable for elderly parents?", a: "Yes. We keep the pace slow, add rest stops and drop elders at the nearest permitted gate. Let us know about any health needs." },
  { q: "Do you arrange hotels for multi-day trips?", a: "You book the hotel or homestay. We are happy to suggest places on the route and pick you up from there next morning." },
  { q: "How is the price decided?", a: "It depends on your dates, group size and vehicle. Message us on WhatsApp and we share a clear quote with no hidden charges." },
];
