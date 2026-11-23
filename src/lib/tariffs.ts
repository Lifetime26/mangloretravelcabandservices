/* ------------------------------------------------------------------ */
/*  EDIT PRICES HERE – the Tariffs page reads this file.              */
/*  These are indicative starting prices in INR. Please update them   */
/*  to your real rates before publishing.                             */
/* ------------------------------------------------------------------ */

export type Tariff = {
  vehicle: string;
  seats: string;
  local8h80km: number;
  extraKm: number;
  extraHour: number;
  outstationPerKm: number;
  driverBata: number;
  airportDrop: number;
  /* Day rates from our printed rate card. Only some vehicles are quoted per day. */
  fullDayLocal?: number;
  fullDayBata?: number;
  outstationPerDay?: number;
  outstationBata?: number;
};

export const tariffs: Tariff[] = [
  {
    vehicle: "Swift Dzire / Toyota Etios",
    seats: "4 Seater",
    local8h80km: 3000,
    extraKm: 13,
    extraHour: 150,
    outstationPerKm: 13,
    driverBata: 400,
    airportDrop: 800,
    fullDayLocal: 3300,
    fullDayBata: 300,
    outstationPerDay: 3900,
    outstationBata: 300,
  },
  {
    vehicle: "Maruti Suzuki Ertiga",
    seats: "6 - 7 Seater",
    local8h80km: 3400,
    extraKm: 16,
    extraHour: 200,
    outstationPerKm: 16,
    driverBata: 400,
    airportDrop: 1100,
    fullDayLocal: 4500,
    fullDayBata: 300,
  },
  {
    vehicle: "Kia Carens",
    seats: "6 - 7 Seater",
    local8h80km: 3500,
    extraKm: 17,
    extraHour: 200,
    outstationPerKm: 17,
    driverBata: 400,
    airportDrop: 1200,
    fullDayLocal: 5000,
    fullDayBata: 300,
  },
  {
    vehicle: "Toyota Innova Crysta",
    seats: "6 - 7 Seater",
    local8h80km: 4800,
    extraKm: 20,
    extraHour: 250,
    outstationPerKm: 20,
    driverBata: 500,
    airportDrop: 1500,
    fullDayLocal: 5500,
    fullDayBata: 300,
    outstationPerDay: 6500,
    outstationBata: 300,
  },
  {
    vehicle: "Toyota Innova Hycross",
    seats: "6 - 7 Seater",
    local8h80km: 6500,
    extraKm: 22,
    extraHour: 300,
    outstationPerKm: 22,
    driverBata: 500,
    airportDrop: 1700,
    fullDayLocal: 7000,
    fullDayBata: 400,
  },
  {
    vehicle: "Tempo Traveller",
    seats: "12 - 17 Seater",
    local8h80km: 6800,
    extraKm: 25,
    extraHour: 350,
    outstationPerKm: 25,
    driverBata: 600,
    airportDrop: 2500,
    fullDayLocal: 6500,
    fullDayBata: 400,
    outstationPerDay: 8000,
    outstationBata: 500,
  },
  {
    vehicle: "Force Urbania",
    seats: "13 - 17 Seater",
    local8h80km: 9000,
    extraKm: 35,
    extraHour: 450,
    outstationPerKm: 35,
    driverBata: 700,
    airportDrop: 3500,
    fullDayLocal: 11000,
    fullDayBata: 500,
  },
  {
    vehicle: "21 Seater Mini Bus",
    seats: "21 Seater",
    local8h80km: 10000,
    extraKm: 40,
    extraHour: 500,
    outstationPerKm: 40,
    driverBata: 800,
    airportDrop: 4000,
    fullDayLocal: 13000,
    fullDayBata: 500,
  },
  {
    vehicle: "50 Seater Bus",
    seats: "50 Seater",
    local8h80km: 18000,
    extraKm: 65,
    extraHour: 800,
    outstationPerKm: 65,
    driverBata: 1000,
    airportDrop: 7000,
    fullDayLocal: 25000,
    fullDayBata: 1000,
  },
];

export const outstationMinKmPerDay = 300;

export const dayRateNote = "Driver Bata is charged extra for trips starting after 9:00 PM.";

export const tariffNotes = [
  "Local package: 8 hours or 80 km, whichever comes first. Extra km and extra hours are charged as shown.",
  `Outstation trips are charged per km with a minimum of ${outstationMinKmPerDay} km per day, counted from our garage and back.`,
  "Driver bata (allowance) is charged per day on outstation trips and for night driving after 9 pm.",
  "Toll, parking, state permit and interstate taxes are extra and paid as actuals.",
  "Airport drop prices are from Mangaluru city to Mangaluru International Airport (IXE). Pickup is priced the same.",
  "Prices are indicative and may change with fuel prices and peak season. Confirm the final quote on WhatsApp before booking.",
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
