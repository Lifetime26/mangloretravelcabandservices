import bCity from "@/assets/mangaluru-city.jpg";
import bKadri from "@/assets/kadri.jpg";
import bCoorg from "@/assets/coorg-tour.jpg";
import bAirport from "@/assets/airport.jpg";
import bChik from "@/assets/chikamagaluru-tour.jpg";
import bGoa from "@/assets/goa-tour.jpg";

/* ------------------------------------------------------------------ */
/*  EDIT BLOG POSTS HERE – the Blog pages read this file.             */
/*  To add a post, copy one block below and change the slug and text. */
/* ------------------------------------------------------------------ */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  img: string;
  date: string;
  readTime: string;
  tag: string;
  sections: { heading?: string; body: string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "best-places-to-visit-in-mangalore",
    title: "10 Best Places to Visit in Mangalore",
    excerpt: "Temples, beaches, churches and food: the places every first time visitor to Mangaluru should not miss.",
    img: bCity,
    date: "2026-11-10",
    readTime: "6 min read",
    tag: "Mangaluru",
    sections: [
      { body: ["Mangaluru is a port city on the Arabian Sea where old temples, Portuguese era churches and long sandy beaches sit within a short drive of each other. Here are the ten places we suggest most often to guests who are visiting for the first time."] },
      { heading: "Temples", body: ["Kadri Manjunatha Temple, one of the oldest in the city, is known for its ancient bronze statues and hillside ponds.", "Mangaladevi Temple gave the city its name and has calm Kerala style courtyards.", "Kudroli Gokarnanatheshwara Temple is famous for its golden gopura and the grand Mangaluru Dasara celebrations."] },
      { heading: "Churches", body: ["St. Aloysius Chapel has walls and ceilings covered in 19th century paintings by Antonio Moscheni.", "Rosario Cathedral and Milagres Church are two of the oldest churches on the coast."] },
      { heading: "Beaches", body: ["Panambur Beach is lively with water sports and food stalls, Tannirbhavi is cleaner and quieter, and Someshwara Beach has dramatic rocks at the river mouth.", "Sultan Battery, a small watchtower built by Tipu Sultan, is close to Tannirbhavi and makes an easy add-on."] },
      { heading: "Planning tip", body: ["All of these can be covered in one full day with a cab and a local driver. Start with temples in the morning, churches around midday and finish on the beach at sunset."] },
    ],
  },
  {
    slug: "famous-temples-around-mangalore",
    title: "Famous Temples in and Around Mangalore",
    excerpt: "From Dharmasthala and Kukke Subramanya to Udupi and Kollur, the temple circuit of coastal Karnataka.",
    img: bKadri,
    date: "2026-11-05",
    readTime: "7 min read",
    tag: "Temple Yatra",
    sections: [
      { body: ["Coastal Karnataka has some of the most visited temples in South India, and most of them are a comfortable day trip from Mangaluru by cab."] },
      { heading: "Within a day trip", body: ["Udupi Sri Krishna Matha (about 60 km): darshan through the Navagraha Kindi window and the famous Udupi meals.", "Dharmasthala Sri Manjunatha Temple (about 75 km): free annadana meals served to every visitor.", "Kukke Subramanya (about 105 km): known for Sarpa Samskara and Ashlesha Bali poojas.", "Kateel Durgaparameshwari (about 30 km): a temple on an island in the Nandini river."] },
      { heading: "Longer trips", body: ["Kollur Mookambika (about 135 km) at the foot of Kodachadri, Murudeshwara (about 165 km) with its giant Shiva statue, and Gokarna Mahabaleshwara (about 240 km) are best done with an early start or an overnight stay."] },
      { heading: "Dress code and timings", body: ["Most temples ask for traditional clothes. In some inner halls men must remove their shirts. Temples usually close for a few hours in the afternoon, so we plan your route around the darshan timings."] },
    ],
  },
  {
    slug: "mangalore-airport-taxi-guide",
    title: "Mangalore Airport Taxi Guide: Pickup, Drop and Fares",
    excerpt: "How far the airport is, how long it takes and what to expect when you book a cab to or from IXE.",
    img: bAirport,
    date: "2026-10-28",
    readTime: "4 min read",
    tag: "Travel Tips",
    sections: [
      { body: ["Mangaluru International Airport (IXE) is at Bajpe, about 15 km from the city centre. The drive takes around 30 to 45 minutes depending on traffic."] },
      { heading: "Booking a pickup", body: ["Share your flight number when you book. Our driver tracks the arrival time and waits at the arrivals area with a name board, so a delayed flight does not leave you stranded."] },
      { heading: "Popular airport routes", body: ["Airport to Mangaluru city, Udupi and Manipal, Dharmasthala, Kukke Subramanya, Madikeri (Coorg) and Kasaragod are the trips we run most often. One-way and return transfers are both available."] },
      { heading: "Fares", body: ["Airport transfers are charged at a fixed price based on the vehicle, with toll and parking extra. See our Taxi Tariffs page for the starting price of each vehicle."] },
    ],
  },
  {
    slug: "coorg-trip-from-mangalore",
    title: "Planning a Coorg Trip from Mangalore",
    excerpt: "The best route, how many days you need and the sights to cover in Karnataka's coffee country.",
    img: bCoorg,
    date: "2026-10-20",
    readTime: "5 min read",
    tag: "Hill Stations",
    sections: [
      { body: ["Coorg (Kodagu) is about 140 km from Mangaluru, and the drive via Sullia and Sampaje Ghat takes around four hours. The road climbs through forest, so an experienced hill driver makes the trip far more relaxed."] },
      { heading: "How many days", body: ["Two days and one night is the most comfortable plan. Three days lets you add Dubare elephant camp, the Golden Temple at Bylakuppe and a day at a coffee estate stay."] },
      { heading: "Top sights", body: ["Abbey Falls, Raja's Seat, Madikeri Fort, Mandalpatti viewpoint, Talacauvery, Bhagamandala, Dubare elephant camp and the Namdroling Monastery at Bylakuppe."] },
      { heading: "Best time to visit", body: ["October to March has cool, pleasant weather. The monsoon from June to September is lush and the waterfalls are at their best, but some roads and viewpoints can be slippery."] },
    ],
  },
  {
    slug: "tourist-places-in-chikmagalur",
    title: "12 Tourist Places in Chikmagalur",
    excerpt: "Peaks, waterfalls and coffee estates in one of Karnataka's most scenic hill districts.",
    img: bChik,
    date: "2026-10-12",
    readTime: "6 min read",
    tag: "Hill Stations",
    sections: [
      { body: ["Chikkamagaluru is the birthplace of coffee in India and is about 150 km from Mangaluru via Charmadi Ghat. It is a favourite weekend escape for families and trekkers alike."] },
      { heading: "Peaks and viewpoints", body: ["Mullayanagiri, the highest peak in Karnataka, Baba Budangiri, Kyathanamakki, Z Point and Kudremukh."] },
      { heading: "Waterfalls", body: ["Jhari (Buttermilk) Falls, Hebbe Falls, Kalhatti Falls and Manikyadhara Falls are best from the monsoon until January."] },
      { heading: "Temples and towns", body: ["Sringeri Sharadamba Temple, Horanadu Annapoorneshwari Temple, Kalasa and Belur, which is about an hour away, all fit easily into a two or three day itinerary."] },
    ],
  },
  {
    slug: "honeymoon-places-in-south-india",
    title: "Best Honeymoon Places in South India by Road",
    excerpt: "Romantic hill stations, beaches and backwaters that are an easy drive from Mangaluru.",
    img: bGoa,
    date: "2026-10-01",
    readTime: "5 min read",
    tag: "Travel Ideas",
    sections: [
      { body: ["A private cab gives couples the freedom to stop wherever they like and travel at their own pace. These are the honeymoon trips we plan most often from Mangaluru."] },
      { heading: "Hill stations", body: ["Coorg, Chikkamagaluru, Ooty, Kodaikanal, Munnar and Wayanad offer cool weather, misty views and cosy homestays."] },
      { heading: "Beaches", body: ["Goa, Gokarna and the quiet beaches of Udupi and Kundapura are ideal for couples who love the sea."] },
      { heading: "Backwaters", body: ["Alleppey and Kumarakom in Kerala are known for houseboat stays on the backwaters, about 9 to 10 hours by road from Mangaluru."] },
      { heading: "Tip", body: ["Combine two places for a five to seven day trip, for example Coorg and Mysuru, or Munnar and Alleppey. Ask us on WhatsApp and we will suggest a route."] },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
