import type { TourPackage } from "@/lib/places";
import iCity from "@/assets/mangaluru-city.jpg";
import iKadri from "@/assets/kadri.jpg";
import iMangaladevi from "@/assets/mangaladevi.jpg";
import iBeach from "@/assets/dest-beach.jpg";
import iMysore from "@/assets/mysore-tour.jpg";
import iOoty from "@/assets/ooty-tour.jpg";
import iWayanad from "@/assets/wayanad-tour.jpg";
import iKodai from "@/assets/kodaikanal-tour.jpg";
import iMunnar from "@/assets/munnar-tour.jpg";
import iGoa from "@/assets/goa-tour.jpg";
import iGokarna from "@/assets/gokarna-tour.jpg";
import iSringeri from "@/assets/sringeri-tour.jpg";
import iHoranadu from "@/assets/horanadu-tour.jpg";
import iForest from "@/assets/bandipur.jpg";
import iFalls from "@/assets/jog-falls.jpg";
import iHeritage from "@/assets/dest-heritage.jpg";
import iHampi from "@/assets/hampi.jpg";

/* Distances and timings are approximate. Confirm exact details when booking. */
export const extraPackages: TourPackage[] = [
  /* ------------------------- Mangaluru local ------------------------- */
  {
    slug: "mangaluru-full-local-sightseeing",
    cat: "coastal",
    title: "Mangaluru Full Local Sightseeing",
    img: iCity,
    imgs: [iCity, iKadri, iMangaladevi, iBeach],
    places: "Mangaladevi, Sharavu Mahaganapathi, Venkataramana, Kudroli Gokarnanatheshwara, Kadri Manjunatha, Milagres, Rosario, St. Aloysius, Tannirbhavi and Panambur",
    summary: "One full day through Mangaluru's old temples, historic churches and two of its best beaches.",
    about: [
      "Mangaluru is a port city where Tulu temples, Konkani shrines and old Catholic churches sit within a few kilometres of each other. This tour joins them into one easy day, starting with the temples in the morning, moving to the churches around midday and ending on the beach at sunset.",
      "Your driver keeps the order flexible, so you can spend longer at the places that matter most to you and skip anything you have already seen.",
    ],
    duration: "Full day (8 to 10 hours)",
    route: "Mangaladevi, Sharavu, Car Street, churches, Kudroli, Kadri, Tannirbhavi, Panambur",
    distance: "About 60 km within the city",
    stops: [
      { name: "Mangaladevi Temple", note: "The temple that gave Mangaluru its name, dedicated to Goddess Mangaladevi and linked to the 10th century Alupa kings. Its Kerala style tiled roofs and quiet courtyard make it a calm first stop.", detail: "Mangaladevi Temple stands in the Bolar area and is the shrine from which Mangaluru takes its name. According to local tradition, a princess named Mangala who came from Malabar and later became a devotee of Goddess Shakti is remembered here, and the temple is believed to date back to the 10th century during the Alupa dynasty. The building follows the Kerala style of architecture, with sloping tiled roofs and a calm inner courtyard. Visitors often come early in the morning when the temple is quiet, and the goddess is especially celebrated during Navaratri. A visit takes about 30 to 40 minutes." },
      { name: "Sharavu Mahaganapathi Temple", note: "A popular Ganesha temple near the city centre, known for its large idol and the ritual of offering a coconut for blessings before starting new ventures.", detail: "Sharavu Mahaganapathi Temple is one of the city's best known Ganesha shrines and sits close to the centre of Mangaluru. The temple is known for its large, beautifully decorated idol, and many families stop here before starting a new business, a journey or an important event. The temple also has a Shiva shrine and an old tradition of the Ganesh Chaturthi festival, which draws large crowds each year. Plan for around 30 minutes, and a little longer on Tuesdays and festival days." },
      { name: "Venkataramana Temple", note: "An 18th century temple on Car Street built by the Gowda Saraswat Brahmin community, famous for its carved stone pillars and the grand annual chariot festival.", detail: "The Venkataramana Temple on Car Street was built in the 18th century by the Gowda Saraswat Brahmin community and is one of the oldest and most revered temples in the old port quarter. The temple is admired for its carved stone pillars, a tall lamp tower and its large temple tank. Every year the annual chariot festival, or rathotsava, brings the street to life as the decorated wooden chariot is pulled by devotees. The lanes around it are also a good place to buy flowers, sweets and traditional brass items." },
      { name: "Milagres Church", note: "One of the oldest Catholic churches in the city, built in the 18th century in a Gothic style and dedicated to Our Lady of Miracles.", detail: "Milagres Church was built in 1680 and rebuilt in the following centuries, and is among the oldest Catholic churches in Mangaluru. It is dedicated to Our Lady of Miracles and was originally established by Portuguese missionaries. The church has a simple, graceful Gothic design with white walls and a peaceful interior, and it remains an active parish. It is a restful stop, usually visited for about 20 minutes, and visitors are asked to dress modestly and keep quiet inside." },
      { name: "Rosario Cathedral", note: "A Romanesque church from the late 19th century, modelled on St. Peter's in Rome, with a large dome and carefully kept interior.", detail: "Rosario Cathedral was built in 1568 and rebuilt in the late 19th century in a Romanesque style that was inspired by St. Peter's Basilica in Rome. Its large dome, high ceiling and well kept interior make it one of the landmark buildings of Mangaluru. The church is dedicated to Our Lady of the Rosary and is the seat of a major local Catholic congregation. Its pale façade is especially photogenic in the late afternoon light." },
      { name: "St. Aloysius Chapel", note: "A chapel inside the St. Aloysius campus, famous for its walls and ceiling covered with 19th century paintings by the Italian Jesuit Antonio Moscheni.", detail: "The chapel inside St. Aloysius College was completed in 1899 and is famous for the paintings that cover nearly every wall and the ceiling. They were created by the Italian Jesuit artist Antonio Moscheni, who spent several years working on scenes from the life of St. Aloysius Gonzaga and from the Bible. The effect is that of a small Italian chapel in the middle of a busy Indian city. The chapel has fixed visiting hours and a small entry formality, so we plan the stop around it." },
      { name: "Kudroli Gokarnanatheshwara Temple", note: "A Shiva temple built in the early 20th century with a richly decorated gold and white gopura. It is best known for its colourful Navaratri and Dasara celebrations.", detail: "Kudroli Gokarnanatheshwara Temple was founded in 1912 by Sri Narayana Guru, the social reformer, who consecrated Lord Shiva here and opened the temple to everyone regardless of caste. It has a richly decorated gopura and shrines to many deities, and it is best known for its spectacular Mangaluru Dasara celebrations with lights, tableaux and a grand procession. Even outside the festival season the temple is bright, clean and welcoming, and a visit takes around 30 minutes." },
      { name: "Kadri Manjunatha Temple", note: "A hillside temple dating back to around the 10th century, noted for its ancient bronze images, temple ponds and Nath tradition. Kadri Park is close by.", detail: "Kadri Manjunatha Temple stands on a hillside and is believed to date from the 10th or 11th century. It holds a famous bronze image of Lord Manjunatha, said to be among the oldest and finest metal statues in India, and it is an important centre of the Nath tradition. The complex includes cave shrines, a series of temple ponds and a gentle hilltop setting, with Kadri Park nearby for a short walk afterwards. Allow 45 minutes to an hour." },
      { name: "Tannirbhavi Beach", note: "A clean and quiet beach on the Gurupura river mouth, reached by a short road through palm trees. A good place for a slow walk and photos.", detail: "Tannirbhavi Beach lies on a narrow stretch where the Netravathi river meets the Arabian Sea, and it is one of the cleaner and calmer beaches near the city. The setting is a long strip of sand framed by coconut palms and a wooded headland, and it is much quieter than the more crowded beaches. It is a good place to walk, take photographs and watch the light change as the sun goes down. As with all beaches, swimming is not advised in the monsoon months." },
      { name: "Panambur Beach", note: "A wide beach popular with families, with sand, lifeguards, water sports and a lively evening crowd. A fitting end to the day at sunset.", detail: "Panambur Beach is the most popular beach of Mangaluru, with a wide stretch of clean sand, a lifeguard presence and a lively evening crowd. Water sports such as jet skiing and boat rides are available, along with food stalls that serve snacks and fresh coconut. The beach is especially busy at sunset and on weekends, so it works well as the closing stop of your day when the colours of the sea are at their best." },
    ],
    vehicle: "Sedan, SUV or tempo traveller",
    plan: [
      "Pickup from your hotel or home around 8 am",
      "Temples first: Mangaladevi, Sharavu Mahaganapathi and Venkataramana",
      "Lunch break, then the churches: Milagres, Rosario and St. Aloysius",
      "Kudroli and Kadri temples in the afternoon",
      "Tannirbhavi and Panambur beaches for the sunset",
      "Drop-off at your hotel or home",
    ],
  },

  /* ------------------------------ Temples ----------------------------- */
  {
    slug: "gokarna-mahabaleshwara-temple",
    cat: "temple",
    title: "Gokarna Mahabaleshwara Temple",
    img: iGokarna,
    places: "Gokarna Mahabaleshwara Temple, Om Beach, Kudle Beach, Maha Ganapati Temple",
    summary: "A two day pilgrimage to the Atmalinga at Gokarna, with beach time on the Arabian Sea.",
    about: [
      "Gokarna is one of Karnataka's seven Mukti Sthalas, and the Mahabaleshwara Temple holds the Atmalinga said to have been brought by Ravana from Mount Kailash. Pilgrims come here for Shiva darshan and for rituals performed for ancestors.",
      "The town is also known for its quiet beaches, so the trip balances a morning of darshan with an afternoon by the sea.",
    ],
    duration: "2 days, 1 night",
    route: "Mangaluru, Murudeshwara, Gokarna, Mangaluru",
    distance: "About 480 km round trip",
    stops: [
      { name: "Murudeshwara", note: "A convenient breakfast stop on the way, with the giant Shiva statue and a beachfront temple." },
      { name: "Mahabaleshwara Temple", note: "The main darshan. A stone temple in the Dravidian style on the Gokarna beachfront, where the Atmalinga is worshipped. Dress modestly and expect queues on holidays." },
      { name: "Maha Ganapati Temple", note: "A small shrine near the main temple dedicated to Ganesha, traditionally visited before Mahabaleshwara." },
      { name: "Kudle Beach", note: "A long curved beach with cafes and a relaxed mood, good for an evening walk." },
      { name: "Om Beach", note: "Named for its shape that resembles the Om symbol. Quieter early in the morning." },
    ],
    vehicle: "Ertiga, Innova or tempo traveller",
    plan: [
      "Early pickup and drive up the coast via Udupi and Murudeshwara",
      "Reach Gokarna, check in and visit the temples",
      "Evening at Kudle Beach",
      "Next morning: Om Beach, then a final darshan if you wish",
      "Return drive to Mangaluru",
    ],
  },
  {
    slug: "sringeri-sharadamba-temple",
    cat: "temple",
    title: "Sringeri Sharadamba Temple",
    img: iSringeri,
    places: "Sringeri Sharadamba Temple, Vidyashankara Temple, Tunga river ghat",
    summary: "A one day yatra to the seat of Adi Shankaracharya's southern peetham.",
    about: [
      "Sringeri is where Adi Shankaracharya founded the first of his four mathas in the 8th century, and the Sharadamba Temple is dedicated to Sharada, the goddess of learning. Many families visit before a child begins school or an important exam.",
      "The temple sits on the banks of the Tunga river in the Western Ghats, and the drive there is as pleasant as the visit itself.",
    ],
    duration: "1 day (early start)",
    route: "Mangaluru, Karkala, Sringeri, Mangaluru",
    distance: "About 230 km round trip",
    stops: [
      { name: "Sharadamba Temple", note: "The main shrine to the goddess of learning. The sanctum is covered in sandalwood and the temple has a quiet, scholarly atmosphere." },
      { name: "Vidyashankara Temple", note: "A 14th century stone temple built in the Hoysala and Vijayanagara styles, famous for its twelve zodiac pillars that are said to catch the sun's rays in a set sequence." },
      { name: "Tunga river ghat", note: "Steps down to the river where devotees bathe and feed the large fish. A calm place to sit after darshan." },
    ],
    vehicle: "Sedan, Ertiga or Innova",
    plan: [
      "Pickup early morning and drive through Karkala",
      "Breakfast on the road",
      "Darshan at Sharadamba and Vidyashankara temples",
      "Lunch (prasada is served at the temple) and time at the river",
      "Return to Mangaluru by evening",
    ],
  },
  {
    slug: "horanadu-annapoorneshwari-temple",
    cat: "temple",
    title: "Horanadu Annapoorneshwari Temple",
    img: iHoranadu,
    places: "Horanadu Annapoorneshwari Temple, Kalasa, Sringeri (optional)",
    summary: "A forest temple pilgrimage to the goddess of food, often joined with Sringeri.",
    about: [
      "Horanadu is a small village in the Western Ghats, home to the Adi Shakti Annapoorneshwari Temple. The goddess is worshipped as the giver of food, and the temple serves free meals to every visitor, a tradition that has continued for generations.",
      "Hills, coffee estates and winding ghat roads make the journey scenic, and the temple can be paired with Sringeri since the two are close.",
    ],
    duration: "1 day, or 2 days with Sringeri",
    route: "Mangaluru, Karkala, Kalasa, Horanadu, Mangaluru",
    distance: "About 300 km round trip",
    stops: [
      { name: "Kalasa", note: "A small hill town on the way, known as a gateway to the Bhadra forests and its Kalaseshwara temple." },
      { name: "Annapoorneshwari Temple", note: "The main temple, rebuilt in the 1970s, with a golden idol of the goddess. Devotees are offered a free meal after darshan." },
      { name: "Sringeri (optional)", note: "About an hour from Horanadu. Adding it makes a complete two temple yatra." },
    ],
    vehicle: "Ertiga, Innova or tempo traveller",
    plan: [
      "Early pickup and drive through the ghat roads",
      "Breakfast near Karkala or Kalasa",
      "Darshan and free meal at Horanadu",
      "Optional drive to Sringeri for the Sharadamba Temple",
      "Return to Mangaluru in the evening",
    ],
  },

  /* ------------------------------ Hill stations ----------------------- */
  {
    slug: "ooty-nilgiri-tour",
    cat: "hills",
    title: "Ooty Tour Package",
    img: iOoty,
    places: "Ooty Botanical Garden, Ooty Lake, Doddabetta Peak, Coonoor, tea estates",
    summary: "Three days in the Nilgiri hills with tea gardens, lakes and cool mountain air.",
    about: [
      "Ooty, officially Udhagamandalam, is the best known hill station of the Nilgiris. At around 2,240 metres, it stays cool through the year and is surrounded by tea estates, eucalyptus forests and old colonial buildings.",
      "This tour covers the main sights in and around the town and includes Coonoor, which is quieter and has some of the best tea views.",
    ],
    duration: "3 days, 2 nights",
    route: "Mangaluru, Mysuru, Bandipur, Ooty, Coonoor, Mangaluru",
    distance: "About 900 km round trip",
    stops: [
      { name: "Bandipur forest road", note: "The route runs through the Bandipur tiger reserve. Deer, elephants and other wildlife are often seen from the road." },
      { name: "Government Botanical Garden", note: "A terraced garden laid out in 1848, with thousands of plants and a seasonal flower show." },
      { name: "Ooty Lake", note: "A boating lake created in the 19th century, at its liveliest on weekends." },
      { name: "Doddabetta Peak", note: "The highest point in the Nilgiris, with long views across the hills on a clear day." },
      { name: "Coonoor and Sim's Park", note: "A smaller hill town with Dolphin's Nose and Lamb's Rock viewpoints and tea factories to visit." },
    ],
    vehicle: "Innova, Ertiga or tempo traveller",
    plan: [
      "Day 1: Drive to Ooty via Mysuru and Bandipur, check in and rest",
      "Day 2: Botanical Garden, Ooty Lake, Doddabetta and local shopping",
      "Day 3: Coonoor sightseeing, then begin the return drive",
    ],
  },
  {
    slug: "wayanad-nature-getaway",
    cat: "hills",
    title: "Wayanad Tour Package",
    img: iWayanad,
    places: "Edakkal Caves, Banasura Sagar Dam, Soochipara Falls, Pookode Lake, spice plantations",
    summary: "A green two to three day escape through Kerala's forest and waterfall district.",
    about: [
      "Wayanad is a hill district in northern Kerala, covered in forest, tea, coffee and spice plantations. It has waterfalls, ancient caves with prehistoric carvings and one of the largest earth dams in India.",
      "The pace here is relaxed. Most visitors come for views, forest walks and fresh air, so the tour is built around short drives with plenty of time at each stop.",
    ],
    duration: "2 to 3 days",
    route: "Mangaluru, Mananthavady, Kalpetta, Sulthan Bathery, Mangaluru",
    distance: "About 550 km round trip",
    stops: [
      { name: "Pookode Lake", note: "A natural freshwater lake surrounded by forest, with boating and a short walk around the shore." },
      { name: "Soochipara Falls", note: "A three tier waterfall reached by a short forest trail. Best in and just after the monsoon." },
      { name: "Edakkal Caves", note: "Two natural rock shelters high on Ambukuthi hills, holding carvings that date back thousands of years. The climb takes about 30 minutes." },
      { name: "Banasura Sagar Dam", note: "India's largest earth dam, set against the Banasura hills with a boating area and views at sunset." },
      { name: "Spice plantation", note: "Walk through pepper, cardamom and coffee, and buy spices straight from the growers." },
    ],
    vehicle: "Ertiga, Innova or tempo traveller",
    plan: [
      "Day 1: Drive to Wayanad, reach by afternoon, visit Pookode Lake",
      "Day 2: Soochipara Falls, Edakkal Caves and a plantation visit",
      "Day 3: Banasura Sagar Dam, then return to Mangaluru",
    ],
  },
  {
    slug: "kodaikanal-hill-tour",
    cat: "hills",
    title: "Kodaikanal Tour Package",
    img: iKodai,
    places: "Kodaikanal Lake, Coaker's Walk, Pillar Rocks, Guna Caves, Bryant Park",
    summary: "A four day trip to the 'Princess of Hill Stations' in the Palani hills.",
    about: [
      "Kodaikanal sits at about 2,100 metres in Tamil Nadu's Palani hills. A star shaped lake sits at the centre of the town, and the surrounding cliffs and pine forests give it a calm, misty character.",
      "The distance from Mangaluru is long, so the tour is planned over four days with comfortable overnight stops and time to enjoy the town.",
    ],
    duration: "4 days, 3 nights",
    route: "Mangaluru, Coimbatore, Palani, Kodaikanal, Mangaluru",
    distance: "About 1,400 km round trip",
    stops: [
      { name: "Kodaikanal Lake", note: "A man-made lake from 1863 shaped like a star, with boating and a cycle track around its edge." },
      { name: "Coaker's Walk", note: "A paved cliffside path with wide views of the plains below, best in the early morning." },
      { name: "Pillar Rocks", note: "Three granite rocks standing 122 metres high, often wrapped in cloud." },
      { name: "Guna Caves", note: "Deep crevices between rock pillars, made well known by a film shot here." },
      { name: "Bryant Park", note: "A botanical garden with a large collection of flowers, especially lovely in May." },
    ],
    vehicle: "Innova, Ertiga or tempo traveller",
    plan: [
      "Day 1: Long drive via Coimbatore towards Palani, overnight stop",
      "Day 2: Reach Kodaikanal, lake and Bryant Park",
      "Day 3: Coaker's Walk, Pillar Rocks and Guna Caves",
      "Day 4: Return drive towards Mangaluru",
    ],
  },
  {
    slug: "munnar-tea-hills-tour",
    cat: "hills",
    title: "Munnar Tour Package",
    img: iMunnar,
    places: "Tea gardens, Mattupetty Dam, Echo Point, Eravikulam National Park, Top Station",
    summary: "A three to four day journey among Munnar's rolling tea estates and mountain viewpoints.",
    about: [
      "Munnar is a hill station in Kerala's Idukki district, famous for its endless tea plantations and cool, misty weather. Mountain roads wind between dams, waterfalls and viewpoints.",
      "The tour mixes easy sightseeing with time in the tea gardens and a visit to Eravikulam, home to the endangered Nilgiri tahr.",
    ],
    duration: "3 to 4 days",
    route: "Mangaluru, Thrissur, Munnar, Mangaluru",
    distance: "About 1,100 km round trip",
    stops: [
      { name: "Tea gardens and factory", note: "Walk through the estates and see how tea is picked, rolled and dried." },
      { name: "Mattupetty Dam", note: "A scenic dam and lake known for boating and for a nearby dairy farm." },
      { name: "Echo Point", note: "A viewpoint over a lake where your voice bounces back from the surrounding hills." },
      { name: "Eravikulam National Park", note: "A high altitude park and the best place to see the Nilgiri tahr, a wild mountain goat." },
      { name: "Top Station", note: "The highest point on the Munnar to Kodaikanal road, with views across the border into Tamil Nadu." },
    ],
    vehicle: "Innova, Ertiga or tempo traveller",
    plan: [
      "Day 1: Drive to Munnar via Thrissur, overnight in Munnar",
      "Day 2: Tea gardens, Mattupetty Dam and Echo Point",
      "Day 3: Eravikulam National Park and Top Station",
      "Day 4: Return drive to Mangaluru",
    ],
  },

  /* ------------------------------ Heritage ---------------------------- */
  {
    slug: "mysuru-palace-city-tour",
    cat: "heritage",
    title: "Mysuru Tour Package",
    img: iMysore,
    places: "Mysore Palace, Chamundi Hills, Brindavan Gardens, St. Philomena's Church, Srirangapatna",
    summary: "A two day tour of Karnataka's royal city and its palaces, gardens and temples.",
    about: [
      "Mysuru was the capital of the Wodeyar kings, and the city is still full of palaces, temples and wide, clean boulevards. The Mysore Palace is one of the most visited monuments in India and glows with thousands of lights on Sundays and festival evenings.",
      "The tour also takes in the Chamundi Hills temple, the gardens at Krishnarajasagara and the island fort town of Srirangapatna.",
    ],
    duration: "2 days, 1 night",
    route: "Mangaluru, Madikeri, Mysuru, Srirangapatna, Mangaluru",
    distance: "About 600 km round trip",
    stops: [
      { name: "Mysore Palace", note: "A palace completed in 1912 in the Indo-Saracenic style, with ornate halls, stained glass and a golden throne." },
      { name: "Chamundi Hills", note: "A hilltop temple dedicated to Goddess Chamundeshwari, with a giant Nandi statue on the way down." },
      { name: "St. Philomena's Church", note: "One of the largest churches in India, with twin Gothic spires that are visible across the city." },
      { name: "Brindavan Gardens", note: "A terraced garden below the Krishnarajasagara dam, famous for its evening musical fountain." },
      { name: "Srirangapatna", note: "An island town with Tipu Sultan's summer palace, his tomb and the Ranganathaswamy temple." },
    ],
    vehicle: "Ertiga, Innova or tempo traveller",
    plan: [
      "Day 1: Drive via Madikeri, reach Mysuru, visit the palace and Chamundi Hills",
      "Evening at Brindavan Gardens",
      "Day 2: St. Philomena's Church and Srirangapatna",
      "Return drive to Mangaluru",
    ],
  },
  {
    slug: "belur-halebidu-tour",
    cat: "heritage",
    title: "Belur & Halebidu Tour Package",
    img: iHeritage,
    places: "Chennakeshava Temple (Belur), Hoysaleswara Temple (Halebidu), Shravanabelagola (optional)",
    summary: "A heritage trip to the finest Hoysala temples, known for their detailed stone carving.",
    about: [
      "Belur and Halebidu were the royal capitals of the Hoysala dynasty between the 11th and 14th centuries. Their temples are covered from base to roof in sculpture, with gods, dancers, musicians, animals and scenes from epics carved in soapstone.",
      "The two towns are only 16 km apart, so both can be seen comfortably in one visit. The trip is a good fit for history lovers and photographers.",
    ],
    duration: "2 days, 1 night",
    route: "Mangaluru, Charmadi Ghat, Belur, Halebidu, Mangaluru",
    distance: "About 400 km round trip",
    stops: [
      { name: "Chennakeshava Temple, Belur", note: "Built in 1117 CE and still in worship. Its famous bracket figures, the madanikas, show women in graceful poses, and the pillars are each carved differently." },
      { name: "Hoysaleswara Temple, Halebidu", note: "A twin Shiva temple begun in the 12th century and left unfinished. Its outer walls carry thousands of carved panels, many of them tiny." },
      { name: "Halebidu Jain basadis", note: "A group of Jain temples near the main temple, with polished black stone pillars." },
      { name: "Charmadi Ghat", note: "A winding mountain road with forested valleys and, in the rains, many waterfalls." },
    ],
    vehicle: "Ertiga, Innova or tempo traveller",
    plan: [
      "Day 1: Drive through Charmadi Ghat and reach Belur by afternoon, visit Chennakeshava Temple",
      "Overnight at Belur or Halebidu",
      "Day 2: Hoysaleswara Temple and the Jain basadis",
      "Return drive to Mangaluru",
    ],
  },
  {
    slug: "badami-aihole-pattadakal-tour",
    cat: "heritage",
    title: "Badami Tour Package",
    img: iHampi,
    places: "Badami cave temples, Agastya Lake, Aihole, Pattadakal",
    summary: "A three day journey to the Chalukyan rock caves and temples of north Karnataka.",
    about: [
      "Badami was the capital of the early Chalukya dynasty in the 6th century. Four caves are cut into a red sandstone cliff above Agastya Lake, with carvings of Vishnu, Shiva and Jain Tirthankaras.",
      "Aihole and Pattadakal, nearby, hold some of the oldest Hindu temples in India and are a UNESCO World Heritage Site, so the trip combines all three.",
    ],
    duration: "3 days, 2 nights",
    route: "Mangaluru, Hubballi, Badami, Aihole, Pattadakal, Mangaluru",
    distance: "About 1,100 km round trip",
    stops: [
      { name: "Badami cave temples", note: "Four caves reached by rock cut steps, each with detailed carvings. Cave 3 has a famous figure of Vishnu." },
      { name: "Agastya Lake", note: "A green lake at the foot of the caves, ringed by old stone steps and small shrines." },
      { name: "Aihole", note: "Often called the cradle of Indian temple architecture, with more than a hundred temples built in different early styles." },
      { name: "Pattadakal", note: "A UNESCO site with temples in both northern and southern styles, built by the Chalukya kings." },
    ],
    vehicle: "Innova, Ertiga or tempo traveller",
    plan: [
      "Day 1: Long drive to Badami via Hubballi, overnight in Badami",
      "Day 2: Cave temples, Agastya Lake and Aihole",
      "Day 3: Pattadakal and begin the return drive",
    ],
  },

  /* --------------------------- Beaches & adventure -------------------- */
  {
    slug: "goa-beach-tour",
    cat: "outstation",
    title: "Goa Tour Package",
    img: iGoa,
    places: "Calangute and Baga beaches, Basilica of Bom Jesus, Fort Aguada, Old Goa, Dudhsagar (optional)",
    summary: "A three to four day trip to Goa's beaches, old churches and sea forts.",
    about: [
      "Goa is India's smallest state and one of its best loved holiday places. It has long sandy beaches, Portuguese era churches and forts, spice farms and a famously relaxed way of life.",
      "The tour mixes beach time with sightseeing in Old Goa and the forts, and leaves free evenings for markets, food and sunsets.",
    ],
    duration: "3 to 4 days",
    route: "Mangaluru, Karwar, Panaji, North and South Goa, Mangaluru",
    distance: "About 750 km round trip",
    stops: [
      { name: "Basilica of Bom Jesus", note: "A UNESCO World Heritage church from 1605, holding the remains of St. Francis Xavier." },
      { name: "Fort Aguada", note: "A 17th century Portuguese fort on a headland, with a lighthouse and sea views." },
      { name: "Calangute and Baga beaches", note: "The most lively beaches in North Goa, with shacks, water sports and evening music." },
      { name: "Palolem and Colva", note: "Calmer beaches in South Goa, better for quiet walks and swimming." },
      { name: "Dudhsagar Falls (optional)", note: "A four tier waterfall on the Goa and Karnataka border, reached by jeep from Kulem." },
    ],
    vehicle: "Innova, Ertiga or tempo traveller",
    plan: [
      "Day 1: Drive up the coast via Karwar, reach Goa by evening",
      "Day 2: North Goa beaches and Fort Aguada",
      "Day 3: Old Goa churches, markets and South Goa beaches",
      "Day 4: Return drive to Mangaluru",
    ],
  },
  {
    slug: "dandeli-adventure-tour",
    cat: "outstation",
    title: "Dandeli Tour Package",
    img: iForest,
    places: "Kali river rafting, Supa Dam, Syntheri Rocks, Kavala Caves, Dandeli wildlife sanctuary",
    summary: "A two to three day forest getaway with river rafting, jungle safaris and caves.",
    about: [
      "Dandeli sits on the Kali river in Uttara Kannada, inside the Western Ghats forests. It is popular for white water rafting in the monsoon and post monsoon months, as well as bird watching, boating and jungle safaris.",
      "The area is rich in wildlife, including hornbills, deer and the occasional black panther, and it makes an easy getaway for friends and families who want some adventure.",
    ],
    duration: "2 to 3 days",
    route: "Mangaluru, Kumta, Yellapur, Dandeli, Mangaluru",
    distance: "About 800 km round trip",
    stops: [
      { name: "Kali river rafting", note: "A thrilling ride through grade 2 and 3 rapids, organised with trained guides and safety gear. Availability depends on the season." },
      { name: "Syntheri Rocks", note: "A 300 foot rock formation rising from a gorge, with a waterfall and a small temple at its base." },
      { name: "Kavala Caves", note: "Natural limestone caves containing a Shivalinga, reached by a long flight of steps." },
      { name: "Dandeli Wildlife Sanctuary", note: "A jungle safari to look for deer, bison, hornbills and other forest life." },
    ],
    vehicle: "Innova, Ertiga or tempo traveller",
    plan: [
      "Day 1: Drive to Dandeli through the Kumta and Yellapur ghats",
      "Day 2: River rafting, Syntheri Rocks and a jungle safari",
      "Day 3: Kavala Caves and return drive",
    ],
  },
  {
    slug: "yana-caves-tour",
    cat: "outstation",
    title: "Yana Caves Tour Package",
    img: iFalls,
    places: "Yana Caves, Bhairaveshwara and Mohini Shikharas, Vibhooti Falls, Gokarna",
    summary: "A two day trip to the unusual black rock formations of Yana in the Sahyadri forest.",
    about: [
      "Yana is a small village in Uttara Kannada, known for two enormous black crystalline limestone rocks that rise out of the forest. The Bhairaveshwara rock reaches about 120 metres, and a cave beneath it holds a Shiva temple with a spring that runs year round.",
      "Reaching Yana involves a walk of about a kilometre through forest, and the trip works well when combined with Gokarna and the nearby Vibhooti Falls.",
    ],
    duration: "2 days, 1 night",
    route: "Mangaluru, Kumta, Yana, Gokarna, Mangaluru",
    distance: "About 560 km round trip",
    stops: [
      { name: "Bhairaveshwara and Mohini Shikharas", note: "Two towering limestone peaks. The base cave is the main attraction, and the forest walk to reach them is part of the experience." },
      { name: "Vibhooti Falls", note: "A hidden waterfall inside the forest, best between July and January. It involves a short trek." },
      { name: "Gokarna", note: "Stay overnight in Gokarna to visit its temple and beaches." },
    ],
    vehicle: "Ertiga or Innova",
    plan: [
      "Day 1: Early start and drive to Yana via Kumta, walk to the caves",
      "Evening at Gokarna temple and beach",
      "Day 2: Vibhooti Falls, then return drive",
    ],
  },
];

export const extraAbout: Record<string, string[]> = {
 "kollur-mookambika-darshan": [
  "Kollur Mookambika Temple lies at the foot of the Kodachadri hills inside the Western Ghats forest, about 135 km from Mangaluru. The goddess here is worshipped as Mookambika, a combined form of Shakti, Saraswati and Lakshmi, and the Swayambhu Jyotirlinga in the sanctum is said to carry a golden line that divides it into two halves, representing Shiva and Shakti. Many families come here to begin a child's education with the Aksharabhyasa ceremony, especially during Navaratri and Vijayadashami.",
  "The temple is a lively place with a long tradition of daily rituals, and the Souparnika river that flows nearby is held sacred by devotees, who often bathe before darshan. A visit to Kodachadri, the green peak above the temple, is a rewarding add-on for those who enjoy mountain views and have time for a jeep ride. On the way back, a stop at Maravanthe Beach, where the highway runs between the sea and the river, makes a relaxed end to the day.",
  "An early start from Mangaluru, around 5.30 am, gives you a comfortable darshan before the midday rush and leaves time for the annadana meal served at the temple. Dress modestly, and we will confirm the day's timings before you travel."
 ],
 "murudeshwara-shiva-yatra": [
  "Murudeshwara is a beachside temple town on the Uttara Kannada coast, about 165 km from Mangaluru. The temple sits on a small hill called Kanduka Giri and is surrounded by the Arabian Sea on three sides. The 123 feet tall Shiva statue beside it is among the tallest in the world, and the 20 storey Raja Gopura, with a lift to the top, gives sweeping views of the coast.",
  "Murudeshwara is also known for the story of the Atmalinga, whose covering is said to have fallen here after it was thrown from Gokarna. Devotees visit for darshan of Lord Shiva in the temple sanctum and for the sea breeze at the shore. Further north, the Idagunji Ganapati temple is a quieter shrine reached through green countryside, and many travellers enjoy the contrast.",
  "The route is a comfortable day trip if you leave early, though staying a night near the beach is easier for families and older travellers. Evenings at the beachfront are particularly pleasant, and we can adjust timings to suit darshan and meals."
 ],
 "dharmasthala-kukke-subrahmanya": [
  "Most families travelling from Mangaluru combine Kukke Subrahmanya and Dharmasthala in one trip. The two temple towns lie roughly 65 km apart along the base of the Western Ghats, with the road passing through forest, rubber plantations and small villages. At Kukke, devotees offer prayers to Lord Subrahmanya, often bathing in the Kumaradhara river first, and the temple is also known for the Ashlesha Bali and Sarpa Samskara poojas performed for serpent worship.",
  "Dharmasthala is known for the Manjunatha Swamy temple and for its unusual tradition, in which the temple is managed by a Jain family while the rituals are led by Vaishnava priests. Pilgrims take darshan and then sit for the free Annaprasada at the large dining hall, which serves thousands of people every day. A visit to the Bahubali statue on the nearby hill is a good addition if there is time.",
  "Covering both places in a day needs an early start. Leaving Mangaluru by 5.30 am avoids city traffic and brings you to Kukke ahead of the morning darshan queues, leaving enough time to reach Dharmasthala for the afternoon prasada."
 ],
 "udupi-krishna-temple-tour": [
  "Udupi is a temple town about 60 km north of Mangaluru and is known across India for the Sri Krishna Matha, founded by the philosopher Madhvacharya in the 13th century. The idol of Lord Krishna is worshipped through a silver covered window called the Navagraha Kitiki, and the temple's eight monastic orders take turns to run its worship in a rotation called the Paryaya. The temple kitchen also gave rise to the famous Udupi style of vegetarian cooking.",
  "Close to Udupi, Malpe Beach has a long stretch of sand, a small fishing harbour and boats that go out to St. Mary's Island, whose strange columns of basalt are a popular sight. Manipal, a short distance inland, is a university town with a quiet lake and viewpoints over the surrounding hills, and it makes a pleasant final stop.",
  "The trip works well as a single day. Temple timings include a break in the afternoon, so we usually plan darshan in the morning and the beach in the late afternoon, and can arrange an Udupi lunch along the way."
 ],
 "mangaluru-city-beaches": [
  "Mangaluru has several beaches within easy reach of the city centre, and this half day tour covers three of the best. Panambur Beach is a wide, lively beach with lifeguards, stalls, boat rides and water sports, and it is busiest around sunset. Tannirbhavi Beach is a calmer stretch of sand near the river mouth, set among coconut palms and a wooded headland.",
  "Sultan Battery is a watchtower built by Tipu Sultan in the 18th century to guard the Gurupura river against enemy ships, and its black stone walls look over the water from a small hilltop. The ferry crossing nearby is a pleasant short ride, and the spot has good views of the estuary.",
  "Because the tour is short, it fits easily into an afternoon and ends in the evening light. Avoid swimming in the monsoon months, and ask us if you would like to add a seafood dinner afterwards."
 ],
 "heritage-temples-mangaluru": [
  "This short tour brings together three of the most important heritage sites in Mangaluru. Mangaladevi Temple is the temple that gave the city its name, with Kerala style tiled roofs and a history that goes back about a thousand years. Kadri Manjunatha Temple sits on a hillside and holds an ancient bronze statue of Lord Manjunatha, with temple ponds and cave shrines around it.",
  "St. Aloysius Chapel, inside the college campus, was completed in 1899 and is covered with paintings by the Italian Jesuit Antonio Moscheni. Together, the three places show how Hindu and Christian traditions have shared the same city for centuries.",
  "A visit takes between four and five hours, which suits a half day. The chapel and temples have fixed visiting hours, so we plan the order to fit them, and dress modestly for the temples."
 ],
 "coorg-hill-station-getaway": [
  "Coorg, also called Kodagu, is a hill district of coffee estates, orange groves and misty forest, about 140 km from Mangaluru by road through the Sampaje ghat. Madikeri, its main town, is the usual base, and Raja's Seat, a garden viewpoint built for the old Kodava kings, is the classic spot to watch the sun go down over the valley.",
  "Abbey Falls plunges through a private coffee estate and is at its best after the monsoon. Dubare is an elephant camp on the Kaveri river where visitors can help bathe the elephants, and the Golden Temple at Bylakuppe, a Tibetan Buddhist monastery with huge golden statues, is a colourful stop that feels far from the rest of Karnataka.",
  "We suggest two days so you are not rushing the ghat roads. Evenings are cool, so carry a light jacket, and ask us if you would like a coffee estate walk added."
 ],
 "chikmagalur-coffee-trails": [
  "Chikmagalur is the birthplace of coffee in India, and the hills around it are covered in coffee estates, pepper vines and shola forest. Mullayanagiri, the highest peak in Karnataka at about 1,930 metres, is reached by a short climb of steps and gives sweeping views over the Western Ghats, especially at sunrise.",
  "Baba Budangiri is a hill shrine sacred to both Hindus and Muslims, tied to the legend of the saint Baba Budan who is said to have brought the first coffee beans to India. Hebbe Falls is a two stage waterfall inside a private estate, reached by a jeep ride through coffee plantations, and is lovely in and just after the monsoon.",
  "Two days give you enough time for the viewpoints and a stay in an estate homestay. Roads are winding, and we suggest travelling in daylight."
 ],
 "bekal-fort-kerala-coast": [
  "Bekal Fort is the largest and best preserved fort in Kerala, built in the 17th century on a headland jutting into the Arabian Sea. Its walls, watchtowers and a viewing platform over the surf are a favourite for photographers, and the beach below has a long stretch of quiet sand.",
  "Kappil Beach is a small beach where a backwater meets the sea, and Ananthapura Lake Temple is the only lake temple in Kerala, said to be the original seat of Lord Padmanabha of Thiruvananthapuram. A famous vegetarian crocodile called Babiya is believed to guard the temple lake.",
  "The route is about 70 km from Mangaluru and easily done in a day, leaving early to reach the fort in the cooler hours."
 ]
};
