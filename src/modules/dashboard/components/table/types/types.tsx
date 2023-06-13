export interface Airline {
  flight_date: string;
  flight_status: string;
  departure: {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: null;
    gate: null;
    delay: null;
    scheduled: string;
    estimated: string;
    actual: null;
    estimated_runway: null;
    actual_runway: null;
  };
  arrival: {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: null;
    gate: null;
    baggage: null;
    delay: null;
    scheduled: string;
    estimated: string;
    actual: null;
    estimated_runway: null;
    actual_runway: null;
  };
  airline: {
    name: string;
    iata: string;
    icao: string;
  };
  flight: {
    number: string;
    iata: string;
    icao: string;
    codeshared: null;
  };
}
