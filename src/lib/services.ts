import { Car, Map, Plane, Route as RouteIcon, type LucideIcon } from "lucide-react";
import sAirport from "@/assets/airport-taxi.jpg";
import sCoorg from "@/assets/tour-collage.jpg";
import sCity from "@/assets/mangaluru-city.jpg";
import sOutstation from "@/assets/outstation.jpg";

import gCoorg from "@/assets/coorg-tour.jpg";
import gGokarna from "@/assets/gokarna-tour.jpg";
import gMurud from "@/assets/murudeshwara.jpg";
import gHampi from "@/assets/hampi.jpg";
import gJog from "@/assets/jog-falls.jpg";
import gUdupi from "@/assets/udupi.jpg";
import gKollur from "@/assets/kollur.jpg";
import gChik from "@/assets/chikamagaluru-tour.jpg";
import gMysore from "@/assets/mysore-tour.jpg";
import gDharm from "@/assets/darmasthala-tour.jpg";
import gBandi from "@/assets/bandipur.jpg";

export type Service = {
  slug: string;
  icon: LucideIcon;
  img: string;
  tag: string;
  pos?: string;
  gallery?: string[];
  title: string;
  short: string;
  pts: string[];
  intro: string[];
  included: string[];
  steps: { t: string; d: string }[];
  bestFor: string[];
  vehicles: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "local-city-rides",
    icon: Car,
    img: sCity,
    tag: "Within Mangaluru",
    title: "Local City Rides",
    short: "Quick & comfortable rides within Mangalore city.",
    pts: ["Point-to-point & hourly rentals", "Hotels, railway station, bus stand, malls", "Clean AC sedans & SUVs"],
    intro: [
      "Need to get around Mangaluru for meetings, shopping, hospital visits or sightseeing? Book a private AC cab with a local driver who knows the shortcuts, the traffic and the parking spots.",
      "Choose a simple point-to-point ride, or keep the cab with you for a few hours and make as many stops as you like.",
    ],
    included: ["Pickup from your home, hotel or office", "Point-to-point or hourly rental", "Clean, air-conditioned vehicle", "Local driver who knows the city", "Waiting time for short stops (confirm when booking)"],
    steps: [
      { t: "Message us", d: "Share pickup point, drop and time on WhatsApp or call." },
      { t: "Get a clear quote", d: "We reply with the vehicle and fare before you confirm." },
      { t: "Ride comfortably", d: "Your driver arrives on time and takes you door to door." },
    ],
    bestFor: ["Business visits", "Shopping & dining", "Hospital & railway trips", "Hotel to beach hops"],
    vehicles: ["Sedan (4 seater)", "Ertiga / SUV (6-7 seater)", "Innova Crysta / Hycross"],
    faqs: [
      { q: "Can I book a cab by the hour?", a: "Yes. Tell us how many hours you need and the places you want to visit, and we will quote an hourly package." },
      { q: "Do you cover places around Mangaluru too?", a: "Yes, nearby spots like Panambur, Surathkal, Ullal and Kateel can be added to your ride." },
    ],
  },
  {
    slug: "airport-transfers",
    icon: Plane,
    img: sAirport,
    pos: "object-[50%_50%]",
    tag: "24/7 · IXE Airport",
    title: "Airport Transfers",
    short: "Timely pickup & drop to Mangaluru International Airport (IXE).",
    pts: ["Pickup timed to your flight", "Driver waiting at arrivals", "Day or night, any day"],
    intro: [
      "Start and end your trip without stress. We run pickups and drops to Mangaluru International Airport (IXE) around the clock, including early-morning and late-night flights.",
      "Share your flight time and we plan the pickup so you are never rushing or left waiting.",
    ],
    included: ["Pickup or drop at IXE", "Timing planned around your flight", "Driver waiting at the arrival area", "Help with luggage", "Drop to Mangaluru, Udupi, Manipal and nearby towns"],
    steps: [
      { t: "Share flight details", d: "Send your flight time, pickup or drop address and group size." },
      { t: "Confirm your cab", d: "We confirm the vehicle and fare on WhatsApp." },
      { t: "Meet your driver", d: "Your driver is ready at arrivals, or at your door for a drop." },
    ],
    bestFor: ["Early & late flights", "Families with luggage", "Business travellers", "Onward trips to Udupi, Manipal, Dharmasthala"],
    vehicles: ["Sedan (4 seater)", "Ertiga / SUV (6-7 seater)", "Tempo Traveller for groups"],
    faqs: [
      { q: "Do you operate at night?", a: "Yes. We are available 24/7, so late-night and early-morning flights are covered." },
      { q: "What if my flight is delayed?", a: "Let us know the new timing on WhatsApp and we will adjust the pickup." },
    ],
  },
  {
    slug: "outstation-trips",
    icon: RouteIcon,
    img: sOutstation,
    pos: "object-[72%_55%]",
    tag: "One-way & round trip",
    title: "Outstation Trips",
    short: "Explore nearby and far destinations with ease.",
    pts: ["Udupi, Coorg, Gokarna, Mysuru & more", "Experienced highway drivers", "Clear quote shared upfront"],
    intro: [
      "Heading beyond Mangaluru? Travel to Udupi, Coorg, Chikkamagaluru, Gokarna, Mysuru, Bengaluru and more in a comfortable private cab with an experienced highway driver.",
      "Pick a one-way drop or a round trip with stays and stops planned your way. Your fare is shared upfront so there are no surprises on the road.",
    ],
    included: ["One-way drops or round trips", "Experienced driver for ghat and highway roads", "Flexible stops for food and photos", "Fare shared before you confirm", "Vehicles for small families to large groups"],
    steps: [
      { t: "Tell us your route", d: "Share destination, dates and number of travellers." },
      { t: "Choose your vehicle", d: "We suggest the best-fit vehicle and send a clear quote." },
      { t: "Travel stress-free", d: "Sit back while your driver handles the road." },
    ],
    bestFor: ["Weekend getaways", "Family trips", "Pilgrimage routes", "Drops to Bengaluru, Mysuru, Kochi"],
    vehicles: ["Ertiga / SUV (6-7 seater)", "Innova Crysta / Hycross", "Tempo Traveller (12-17 seater)"],
    faqs: [
      { q: "Can I plan a multi-day trip?", a: "Yes. Share your dates and places and we will plan the route and quote for the whole trip." },
      { q: "Are tolls and parking included?", a: "This depends on the trip. We state clearly what is included in your quote before you confirm." },
    ],
  },
  {
    slug: "custom-tour-packages",
    icon: Map,
    img: sCoorg,
    gallery: [gCoorg, gGokarna, gMurud, gHampi, gJog, gUdupi, gKollur, gChik, gMysore, gDharm, gBandi],
    tag: "Curated itineraries",
    title: "Custom Tour Packages",
    short: "Discover the best of Karnataka with our curated tours.",
    pts: ["Temple yatras & beach circuits", "Stops planned around your group", "Cars to 50-seater buses"],
    intro: [
      "From temple yatras to hill stations and beach circuits, our tour packages cover the best of coastal and inland Karnataka with the route already planned.",
      "Prefer something different? Tell us your interests, dates and group size and we will shape a custom itinerary around you.",
    ],
    included: ["Planned route with sightseeing stops", "Private vehicle and driver throughout", "Options from cars to 50-seater buses", "Itinerary adjusted to your group", "Quote shared on WhatsApp"],
    steps: [
      { t: "Pick a package or share ideas", d: "Browse our packages or describe the trip you want." },
      { t: "Customise", d: "We adjust stops, days and vehicle for your group." },
      { t: "Enjoy the journey", d: "Travel with a driver who knows the route and the places." },
    ],
    bestFor: ["Temple yatras", "Family holidays", "Group & college tours", "Corporate outings"],
    vehicles: ["Ertiga / SUV", "Tempo Traveller", "Mini bus & 50 seater bus"],
    faqs: [
      { q: "Can I change a package?", a: "Yes. Every package can be adjusted for dates, stops and group size." },
      { q: "Do you arrange large groups?", a: "Yes. We have vehicles ranging from cars up to 50-seater buses." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
