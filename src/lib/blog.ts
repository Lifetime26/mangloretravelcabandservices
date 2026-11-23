import bCity from "@/assets/mangaluru-city.jpg";
import bKadri from "@/assets/kadri.jpg";
import bCoorg from "@/assets/coorg-tour.jpg";
import bAirport from "@/assets/airport.jpg";
import bChik from "@/assets/chikamagaluru-tour.jpg";
import bGoa from "@/assets/goa-tour.jpg";
import bGoaBeach from "@/assets/Palolem and Colva.jpg";
import bBengaluru from "@/assets/Bryant Park.jpg";
import bGokarna from "@/assets/gokarna-tour.jpg";
import bKudremukh from "@/assets/Charmadi Ghat.jpg";
import bHoranadu from "@/assets/horanadu-tour.jpg";

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
    slug: "top-tourist-attractions-in-goa",
    title: "Top 10 Tourist Attractions in Goa",
    excerpt: "Beaches, forts, churches and a waterfall: the ten places to cover on a Goa trip from Mangalore.",
    img: bGoaBeach,
    date: "2026-11-21",
    readTime: "6 min read",
    tag: "Goa",
    sections: [
      { body: ["Goa is about 350 km from Mangaluru, a drive of seven to eight hours along the coast via Udupi, Kundapura and Karwar. Most of our guests go for two or three nights and cover the north and south of the state on separate days. These are the ten attractions we suggest first."] },
      { heading: "North Goa beaches", body: ["Calangute, known as the queen of Goa's beaches, is the busiest and has the widest choice of shacks and water sports.", "Baga sits next to Calangute and is the place for beach parties, nightlife and seafood.", "Anjuna is the old hippie beach, quieter through the day and liveliest on Wednesdays, when the flea market runs in season (roughly November to April)."] },
      { heading: "Forts and churches", body: ["Aguada Fort, about 18 km from Panjim, is a Portuguese fort on the headland with a lighthouse and views over the Arabian Sea.", "Basilica of Bom Jesus in Old Goa, a UNESCO world heritage site, holds the relics of St. Francis Xavier and is known for its baroque facade.", "The Church of Our Lady of the Immaculate Conception in Panjim is the whitewashed landmark on the hill above the capital.", "Mangeshi Temple, one of the oldest and largest shrines in Goa, is dedicated to Lord Mangesh, a form of Shiva."] },
      { heading: "Waterfalls and wildlife", body: ["Dudhsagar Falls, on the Goa-Karnataka border, is a four-tiered waterfall inside Bhagwan Mahavir sanctuary. Private cars are not allowed beyond Kulem, so the last stretch is by forest department jeep, and the jeep safari usually does not run during the monsoon.", "Bondla Wildlife Sanctuary in Ponda taluka is the smallest of Goa's three sanctuaries, green and the easiest one to visit with children. It is closed on Thursdays."] },
      { heading: "Planning tip", body: ["Base yourself in north Goa for beaches and Old Goa, and keep one day for the south. Booking a cab for the whole trip works out cheaper than a new taxi for every sight, and you do not lose time waiting at each stop."] },
    ],
  },
  {
    slug: "best-places-to-visit-in-bengaluru",
    title: "10 Best Places to Visit in Bengaluru",
    excerpt: "Gardens, palaces, temples and a hilltop sunrise: what to see in Bangalore on a trip from Mangalore.",
    img: bBengaluru,
    date: "2026-11-19",
    readTime: "6 min read",
    tag: "City Guide",
    sections: [
      { body: ["Bengaluru is roughly 350 km from Mangaluru, seven to eight hours by road on NH 75 over the Shiradi Ghat. It is an easy overnight trip, and these ten places cover the city's gardens, history and food in two days."] },
      { heading: "Parks and gardens", body: ["Lalbagh Botanical Garden was laid out by Hyder Ali in the 1760s and expanded by Tipu Sultan. It has a glass house modelled on London's Crystal Palace and a rocky outcrop with an old watchtower.", "Cubbon Park, in the middle of the city, is a large expanse of old trees, walkways and the red Gothic State Library. Roads through it are closed to traffic early in the morning and on Sundays.", "Bannerghatta National Park, on the southern edge, has a zoo, a butterfly park and a safari."] },
      { heading: "Palaces and buildings", body: ["Bangalore Palace, built in Tudor revival style on the lines of Windsor Castle, is the most photographed building in the city.", "Tipu Sultan's Summer Palace near Kalasipalyam in old Bengaluru is a small Indo-Islamic wooden structure completed in 1791, now a museum.", "Vidhana Soudha, the state legislature, is worth a stop for the architecture. Inside visits are limited to guided tours on selected days."] },
      { heading: "Temples and markets", body: ["ISKCON Temple on Hare Krishna Hill is the city's best known temple and stays busy through the day.", "Bull Temple in Basavanagudi has a monolithic Nandi carved in the 16th century.", "Commercial Street and Chickpet are the places to shop for silk, spices and street food."] },
      { heading: "Nandi Hills day trip", body: ["Nandi Hills, about 60 km north of the city, is the classic sunrise drive. The gate opens at 6 am, so leave the city around 4 am to be there before the queue builds, and come back through Devanahalli for breakfast."] },
    ],
  },
  {
    slug: "gokarna-and-murudeshwar-trip",
    title: "Gokarna and Murudeshwar: A Coastal Trip from Mangalore",
    excerpt: "Two temple towns, a handful of quiet beaches and the giant Shiva statue, all on one coastal drive.",
    img: bGokarna,
    date: "2026-11-17",
    readTime: "5 min read",
    tag: "Beaches",
    sections: [
      { body: ["The stretch of coast north of Mangaluru has two of the most visited temple towns in Karnataka: Murudeshwar, about 160 km away, and Gokarna, about 240 km away. Both can be seen on a two day trip with a night's stay, and the drive itself runs along the sea for most of the way."] },
      { heading: "Murudeshwar", body: ["The town is built around the Murudeshwar Temple, whose 123 feet Shiva statue stands on a hill with the sea on three sides.", "The 20 storey Raja Gopura beside it has a lift that takes visitors up for a view over the statue and the sea.", "Netrani Island, a short boat ride from the shore, is a well known spot for scuba diving and snorkelling."] },
      { heading: "Gokarna", body: ["Mahabaleshwar Temple is the reason Gokarna is a pilgrimage town, and the Atmalinga here is one of the most important Shiva shrines on the coast.", "Om Beach is shaped like the Om symbol: two crescents joined together form a semi-enclosed pool that stays calm enough to swim in. Kudle, the largest of the town beaches and about a ten minute walk south of the town, is lined with cafes and guesthouses.", "Mirjan Fort, a little south of Gokarna towards Kumta, is a laterite fort in the middle of paddy fields and makes a good stop on the way back."] },
      { heading: "When to go", body: ["October to March is the best window: the sea is calm and the temple towns are not crowded. Avoid the monsoon for the boat rides and beach time."] },
      { heading: "Planning tip", body: ["Both towns are temple towns, so dress modestly for darshan. Plan Murudeshwar for the first day and Gokarna for the second, staying overnight in Gokarna where there are more places to eat and stay."] },
    ],
  },
  {
    slug: "kudremukh-national-park-guide",
    title: "Kudremukh National Park: Trekking and Waterfalls",
    excerpt: "The horse-face peak, the Western Ghats grasslands and the waterfalls on the way, from Mangalore.",
    img: bKudremukh,
    date: "2026-11-15",
    readTime: "5 min read",
    tag: "Hill Stations",
    sections: [
      { body: ["Kudremukh, in Chikkamagaluru district, is about 105 km from Mangaluru, roughly two and a half to three hours by road, usually via Karkala and Kalasa. The name means horse face, after the shape of the main peak, and the national park around it is one of the greenest parts of the Western Ghats."] },
      { heading: "The Kudremukh peak trek", body: ["The trek is roughly 20 to 22 km round trip from Mullodi village, a day hike of seven to nine hours. A forest permit and a guide are compulsory, only a limited number of trekkers are allowed up each day, and permits are booked online through the Karnataka forest department's Aranya Vihaara portal. Camping is not allowed, so everyone has to be back before sunset.", "The trail climbs through shola forest and grassland, with the last stretch along an open ridge. Start early, carry water and rain protection, and expect leeches during the monsoon."] },
      { heading: "On the way", body: ["Hanuman Gundi Falls, inside the park, drops about 22 metres and is reached by a stairway down from the road.", "The Karkala and Kalasa road up to the park is hill road most of the way, with viewpoints and small waterfalls in the rains.", "Kalasa, on the Bhadra river, is close by if you are continuing towards Horanadu."] },
      { heading: "Best time to visit", body: ["October to February is best for the trek. The monsoon from June to September is spectacular for the falls and greenery but the trail is slippery and leeches are common."] },
      { heading: "Planning tip", body: ["The trail starts at Mullodi, up a rough jeep track from the main road. A cab from Mangaluru for the day, or a night's stay with a homestay near Kalasa or Kudremukh, is the practical way to do this trip."] },
    ],
  },
  {
    slug: "horanadu-and-sringeri-temple-trip",
    title: "Horanadu and Sringeri Temple Trip from Mangalore",
    excerpt: "Two of the coast's most loved temple towns, the Tunga river and a route through the ghats.",
    img: bHoranadu,
    date: "2026-11-13",
    readTime: "5 min read",
    tag: "Temple Yatra",
    sections: [
      { body: ["Horanadu and Sringeri sit in the hills of Chikkamagaluru district and are both doable from Mangaluru. Sringeri is about 110 km away and Horanadu about 125 km. Covering both makes a long day, so many guests leave early and stay a night at Sringeri."] },
      { heading: "Sringeri Sharadamba Temple", body: ["Sringeri is one of the four peethas established by Adi Shankaracharya, on the banks of the Tunga.", "The Sharadamba Temple, the Vidyashankara Temple with its twelve zodiac pillars, and the river ghat all sit within a short walk of each other.", "Meals are served free at fixed times, and the town is small enough to cover in under two hours."] },
      { heading: "Horanadu Annapoorneshwari Temple", body: ["The Annapoorneshwari Temple at Horanadu sits in thick forest in the Western Ghats and is known for the annadana meals served to every visitor.", "The drive from Sringeri to Horanadu is about 75 km through Kalasa, mostly hill road, so allow extra time in the rains."] },
      { heading: "What to wear and carry", body: ["Traditional clothes are expected for darshan, and in many Karnataka temples men are asked to remove their shirts in the inner sanctum.", "Most temples here close for a couple of hours in the afternoon, so plan darshan for the morning or evening."] },
      { heading: "Planning tip", body: ["If you want a relaxed trip, stay overnight at Sringeri and add Kalasa and the Kudremukh side the next morning. Ask us on WhatsApp and we will work out the order around the darshan timings."] },
    ],
  },
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
