/* AUTHORED CONTENT — Sky Stay Travel.
 *
 * Every fare, flight number, fare basis, hold window, rate code, price, name and
 * date below is invented demonstration material, written at production fidelity
 * so the page can be judged as a page. It is true of nothing. See the colophon.
 */
import type { FareRow, Decided, Routing } from "./types";

export const considered = 406;

export const fares: FareRow[] = [
  {
    "pair": "AMS CPH",
    "flt": "KL 1123",
    "dep": "0710",
    "arr": "0835",
    "eq": "32Q",
    "days": "1234567",
    "fare": "YFFNL",
    "rate": "BAR-FLX"
  },
  {
    "pair": "AMS DXB",
    "flt": "EK 149",
    "dep": "1440",
    "arr": "2310",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "AMS DXB",
    "flt": "KL 427",
    "dep": "1015",
    "arr": "1845",
    "eq": "789",
    "days": "1.3.567",
    "fare": "DNN2NL",
    "rate": "COR-8D"
  },
  {
    "pair": "AMS FCO",
    "flt": "KL 1601",
    "dep": "0700",
    "arr": "0925",
    "eq": "32Q",
    "days": "12345.7",
    "fare": "BNC14NL",
    "rate": "ADV-21"
  },
  {
    "pair": "AMS JFK",
    "flt": "KL 641",
    "dep": "1320",
    "arr": "1540",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "AMS JFK",
    "flt": "KL 643",
    "dep": "1000",
    "arr": "1220",
    "eq": "789",
    "days": "1.34567",
    "fare": "DLXRT7",
    "rate": "PRF-7C"
  },
  {
    "pair": "AMS JFK",
    "flt": "DL 45",
    "dep": "1450",
    "arr": "1710",
    "eq": "359",
    "days": "1234567",
    "fare": "INC7US",
    "rate": "BAR-NRF"
  },
  {
    "pair": "AMS SIN",
    "flt": "KL 835",
    "dep": "2115",
    "arr": "1545+1",
    "eq": "789",
    "days": "1.3.5.7",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "AUH JFK",
    "flt": "EY 101",
    "dep": "0900",
    "arr": "1505",
    "eq": "789",
    "days": "1234567",
    "fare": "JRT14AE",
    "rate": "FHR-9"
  },
  {
    "pair": "AUH SIN",
    "flt": "EY 474",
    "dep": "0210",
    "arr": "1325",
    "eq": "789",
    "days": "1.3.567",
    "fare": "INC7AE",
    "rate": "BAR-FLX"
  },
  {
    "pair": "AUH SIN",
    "flt": "EY 476",
    "dep": "2140",
    "arr": "0900+1",
    "eq": "359",
    "days": "12345.7",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "BOM DXB",
    "flt": "EK 501",
    "dep": "0420",
    "arr": "0610",
    "eq": "77W",
    "days": "1234567",
    "fare": "YFFIN",
    "rate": "ADV-21"
  },
  {
    "pair": "BOM LHR",
    "flt": "BA 138",
    "dep": "0225",
    "arr": "0745",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "CDG DXB",
    "flt": "EK 73",
    "dep": "1500",
    "arr": "2335",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "CDG DXB",
    "flt": "AF 654",
    "dep": "1025",
    "arr": "1900",
    "eq": "77W",
    "days": "1.3.5.7",
    "fare": "DLXRT7",
    "rate": "COR-8D"
  },
  {
    "pair": "CDG FCO",
    "flt": "AF 1204",
    "dep": "0715",
    "arr": "0920",
    "eq": "32Q",
    "days": "1234567",
    "fare": "YNCRT1",
    "rate": "PKG-BB2"
  },
  {
    "pair": "CDG GRU",
    "flt": "AF 459",
    "dep": "2320",
    "arr": "0605+1",
    "eq": "77W",
    "days": "1.34.67",
    "fare": "JRT14FR",
    "rate": "PRF-7C"
  },
  {
    "pair": "CDG HKG",
    "flt": "CX 260",
    "dep": "2325",
    "arr": "1705+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "CDG HND",
    "flt": "AF 274",
    "dep": "1355",
    "arr": "0855+1",
    "eq": "359",
    "days": "1234567",
    "fare": "INC7FR",
    "rate": "FHR-9"
  },
  {
    "pair": "CDG HND",
    "flt": "JL 46",
    "dep": "1935",
    "arr": "1440+1",
    "eq": "789",
    "days": "1.3.567",
    "fare": "ZLX21",
    "rate": "NEG-3C"
  },
  {
    "pair": "CDG JFK",
    "flt": "AF 006",
    "dep": "1340",
    "arr": "1600",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "CDG JFK",
    "flt": "AA 45",
    "dep": "0945",
    "arr": "1205",
    "eq": "789",
    "days": "1234567",
    "fare": "INC7US",
    "rate": "ADV-21"
  },
  {
    "pair": "CDG SIN",
    "flt": "SQ 334",
    "dep": "1200",
    "arr": "0625+1",
    "eq": "359",
    "days": "1234567",
    "fare": "DNN2SG",
    "rate": "CVG-12"
  },
  {
    "pair": "CDG SIN",
    "flt": "SQ 336",
    "dep": "2145",
    "arr": "1600+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "JRT14SG",
    "rate": "PRF-7C"
  },
  {
    "pair": "DEL FRA",
    "flt": "LH 760",
    "dep": "0140",
    "arr": "0700",
    "eq": "359",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "COR-8D"
  },
  {
    "pair": "DEL LHR",
    "flt": "BA 142",
    "dep": "0350",
    "arr": "0820",
    "eq": "789",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "DEL SIN",
    "flt": "SQ 402",
    "dep": "2320",
    "arr": "0725+1",
    "eq": "789",
    "days": "1234567",
    "fare": "INC7SG",
    "rate": "BAR-FLX"
  },
  {
    "pair": "DOH HKG",
    "flt": "QR 814",
    "dep": "0125",
    "arr": "1425",
    "eq": "351",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "DOH HND",
    "flt": "QR 812",
    "dep": "0140",
    "arr": "1755",
    "eq": "351",
    "days": "1234567",
    "fare": "ZLX21",
    "rate": "FHR-9"
  },
  {
    "pair": "DOH JFK",
    "flt": "QR 701",
    "dep": "0810",
    "arr": "1530",
    "eq": "77W",
    "days": "1234567",
    "fare": "JRT14QA",
    "rate": "VIR-2A"
  },
  {
    "pair": "DOH JFK",
    "flt": "QR 703",
    "dep": "0130",
    "arr": "0850",
    "eq": "388",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "BAR-FLX"
  },
  {
    "pair": "DOH LAX",
    "flt": "QR 739",
    "dep": "0730",
    "arr": "1430",
    "eq": "77W",
    "days": "1.3.5.7",
    "fare": "INC7QA",
    "rate": "CVG-12"
  },
  {
    "pair": "DOH LHR",
    "flt": "QR 1",
    "dep": "0810",
    "arr": "1335",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "DOH LHR",
    "flt": "QR 3",
    "dep": "0135",
    "arr": "0700",
    "eq": "351",
    "days": "1234567",
    "fare": "ZNCOW7",
    "rate": "PRF-7C"
  },
  {
    "pair": "DOH SIN",
    "flt": "QR 942",
    "dep": "0205",
    "arr": "1455",
    "eq": "359",
    "days": "1234567",
    "fare": "DNN2QA",
    "rate": "COR-8D"
  },
  {
    "pair": "DOH SIN",
    "flt": "QR 944",
    "dep": "0805",
    "arr": "2110",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "DOH SIN",
    "flt": "QR 946",
    "dep": "1935",
    "arr": "0840+1",
    "eq": "351",
    "days": "1.34.67",
    "fare": "ILGRT3",
    "rate": "BAR-NRF"
  },
  {
    "pair": "DXB HKG",
    "flt": "EK 380",
    "dep": "0315",
    "arr": "1505",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "DXB HKG",
    "flt": "EK 384",
    "dep": "1005",
    "arr": "2155",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2AE",
    "rate": "CVG-12"
  },
  {
    "pair": "DXB HND",
    "flt": "EK 318",
    "dep": "0300",
    "arr": "1720",
    "eq": "77W",
    "days": "1234567",
    "fare": "ZLX21",
    "rate": "FHR-9"
  },
  {
    "pair": "DXB JFK",
    "flt": "EK 201",
    "dep": "0830",
    "arr": "1430",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "DXB JNB",
    "flt": "EK 763",
    "dep": "0945",
    "arr": "1555",
    "eq": "77W",
    "days": "1234567",
    "fare": "INC7AE",
    "rate": "NEG-3C"
  },
  {
    "pair": "DXB LHR",
    "flt": "EK 2",
    "dep": "0735",
    "arr": "1215",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "DXB LHR",
    "flt": "EK 30",
    "dep": "0215",
    "arr": "0655",
    "eq": "77W",
    "days": "1234567",
    "fare": "ZNCOW7",
    "rate": "COR-8D"
  },
  {
    "pair": "DXB SIN",
    "flt": "EK 352",
    "dep": "0230",
    "arr": "1345",
    "eq": "388",
    "days": "1234567",
    "fare": "JRT14AE",
    "rate": "PRF-7C"
  },
  {
    "pair": "DXB SIN",
    "flt": "EK 354",
    "dep": "1025",
    "arr": "2140",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2AE",
    "rate": "CVG-12"
  },
  {
    "pair": "DXB SIN",
    "flt": "EK 404",
    "dep": "2140",
    "arr": "0900+1",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "FRA DEL",
    "flt": "LH 761",
    "dep": "1340",
    "arr": "0055+1",
    "eq": "359",
    "days": "1.3.567",
    "fare": "DLXRT7",
    "rate": "COR-8D"
  },
  {
    "pair": "FRA DOH",
    "flt": "QR 68",
    "dep": "1450",
    "arr": "2140",
    "eq": "359",
    "days": "1234567",
    "fare": "DNN2QA",
    "rate": "CVG-12"
  },
  {
    "pair": "FRA DXB",
    "flt": "EK 45",
    "dep": "1520",
    "arr": "2330",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "FRA DXB",
    "flt": "LH 630",
    "dep": "1015",
    "arr": "1825",
    "eq": "359",
    "days": "1234567",
    "fare": "JRT14DE",
    "rate": "PRF-7C"
  },
  {
    "pair": "FRA HKG",
    "flt": "CX 288",
    "dep": "1230",
    "arr": "0605+1",
    "eq": "77W",
    "days": "1.3.5.7",
    "fare": "DNN2HK",
    "rate": "NEG-3C"
  },
  {
    "pair": "FRA HKG",
    "flt": "LH 796",
    "dep": "2200",
    "arr": "1505+1",
    "eq": "359",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "FRA HND",
    "flt": "LH 716",
    "dep": "1355",
    "arr": "0825+1",
    "eq": "359",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "FRA HND",
    "flt": "NH 204",
    "dep": "1200",
    "arr": "0740+1",
    "eq": "789",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "CVG-12"
  },
  {
    "pair": "FRA JFK",
    "flt": "LH 400",
    "dep": "1000",
    "arr": "1245",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "FRA JFK",
    "flt": "LH 404",
    "dep": "1330",
    "arr": "1615",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2DE",
    "rate": "VIR-2A"
  },
  {
    "pair": "FRA JFK",
    "flt": "UA 961",
    "dep": "1120",
    "arr": "1405",
    "eq": "789",
    "days": "1234567",
    "fare": "ZNCOW7",
    "rate": "BAR-NRF"
  },
  {
    "pair": "FRA SFO",
    "flt": "LH 455",
    "dep": "1305",
    "arr": "1535",
    "eq": "359",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "PRF-7C"
  },
  {
    "pair": "FRA SIN",
    "flt": "LH 778",
    "dep": "2210",
    "arr": "1600+1",
    "eq": "359",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "FRA SIN",
    "flt": "LH 790",
    "dep": "1310",
    "arr": "0655+1",
    "eq": "77W",
    "days": "1.3.5.7",
    "fare": "DNN2DE",
    "rate": "CVG-12"
  },
  {
    "pair": "FRA SIN",
    "flt": "SQ 26",
    "dep": "2140",
    "arr": "1545+1",
    "eq": "359",
    "days": "1234567",
    "fare": "JRT14SG",
    "rate": "VIR-2A"
  },
  {
    "pair": "GRU CDG",
    "flt": "AF 457",
    "dep": "1930",
    "arr": "1150+1",
    "eq": "77W",
    "days": "1.34.67",
    "fare": "DLXRT7",
    "rate": "COR-8D"
  },
  {
    "pair": "GRU LHR",
    "flt": "BA 248",
    "dep": "2020",
    "arr": "1240+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "GRU MAD",
    "flt": "IB 6824",
    "dep": "2145",
    "arr": "1255+1",
    "eq": "359",
    "days": "1234567",
    "fare": "DNN2ES",
    "rate": "CVG-12"
  },
  {
    "pair": "HEL HKG",
    "flt": "AY 99",
    "dep": "1740",
    "arr": "1025+1",
    "eq": "359",
    "days": "1.3.567",
    "fare": "DNN2FI",
    "rate": "NEG-3C"
  },
  {
    "pair": "HEL JFK",
    "flt": "AY 5",
    "dep": "1450",
    "arr": "1705",
    "eq": "359",
    "days": "1.34.67",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "HEL LHR",
    "flt": "AY 1331",
    "dep": "0820",
    "arr": "0935",
    "eq": "32Q",
    "days": "1234567",
    "fare": "BNC14FI",
    "rate": "ADV-21"
  },
  {
    "pair": "HEL NRT",
    "flt": "AY 73",
    "dep": "1620",
    "arr": "1140+1",
    "eq": "359",
    "days": "1.3.5.7",
    "fare": "ZLX21",
    "rate": "FHR-9"
  },
  {
    "pair": "HKG FRA",
    "flt": "LH 797",
    "dep": "2345",
    "arr": "0620+1",
    "eq": "359",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "CVG-12"
  },
  {
    "pair": "HKG HND",
    "flt": "CX 542",
    "dep": "0855",
    "arr": "1355",
    "eq": "359",
    "days": "1234567",
    "fare": "DNN2HK",
    "rate": "NEG-3C"
  },
  {
    "pair": "HKG HND",
    "flt": "NH 810",
    "dep": "0840",
    "arr": "1340",
    "eq": "789",
    "days": "1234567",
    "fare": "INC7JP",
    "rate": "COR-8D"
  },
  {
    "pair": "HKG JFK",
    "flt": "CX 840",
    "dep": "0035",
    "arr": "0430",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "HKG JFK",
    "flt": "CX 846",
    "dep": "1230",
    "arr": "1620",
    "eq": "351",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "HKG JFK",
    "flt": "CX 888",
    "dep": "1955",
    "arr": "2345",
    "eq": "77W",
    "days": "1.3.567",
    "fare": "JRT14HK",
    "rate": "PRF-7C"
  },
  {
    "pair": "HKG LAX",
    "flt": "CX 880",
    "dep": "1620",
    "arr": "1400",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2HK",
    "rate": "CVG-12"
  },
  {
    "pair": "HKG LHR",
    "flt": "BA 28",
    "dep": "2350",
    "arr": "0535+1",
    "eq": "351",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "HKG LHR",
    "flt": "CX 251",
    "dep": "2355",
    "arr": "0540+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2HK",
    "rate": "VIR-2A"
  },
  {
    "pair": "HKG SFO",
    "flt": "CX 872",
    "dep": "1330",
    "arr": "1035",
    "eq": "77W",
    "days": "1234567",
    "fare": "JRT14HK",
    "rate": "PRF-7C"
  },
  {
    "pair": "HKG SIN",
    "flt": "CX 715",
    "dep": "0800",
    "arr": "1155",
    "eq": "359",
    "days": "1234567",
    "fare": "BNC14HK",
    "rate": "PKG-BB2"
  },
  {
    "pair": "HND FRA",
    "flt": "LH 717",
    "dep": "1145",
    "arr": "1715",
    "eq": "359",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "CVG-12"
  },
  {
    "pair": "HND JFK",
    "flt": "AA 168",
    "dep": "1720",
    "arr": "1650",
    "eq": "789",
    "days": "1234567",
    "fare": "JRT14US",
    "rate": "VIR-2A"
  },
  {
    "pair": "HND JFK",
    "flt": "JL 6",
    "dep": "1035",
    "arr": "1010",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "HND JFK",
    "flt": "NH 110",
    "dep": "1100",
    "arr": "1035",
    "eq": "77W",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "PRF-7C"
  },
  {
    "pair": "HND LAX",
    "flt": "NH 106",
    "dep": "1700",
    "arr": "1045",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2JP",
    "rate": "CVG-12"
  },
  {
    "pair": "HND LHR",
    "flt": "BA 6",
    "dep": "1105",
    "arr": "1530",
    "eq": "789",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "HND LHR",
    "flt": "JL 43",
    "dep": "1140",
    "arr": "1805",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2JP",
    "rate": "VIR-2A"
  },
  {
    "pair": "HND SFO",
    "flt": "UA 876",
    "dep": "1725",
    "arr": "1045",
    "eq": "789",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "BAR-NRF"
  },
  {
    "pair": "HND SIN",
    "flt": "NH 801",
    "dep": "1110",
    "arr": "1740",
    "eq": "789",
    "days": "1234567",
    "fare": "INC7JP",
    "rate": "COR-8D"
  },
  {
    "pair": "HND SIN",
    "flt": "SQ 633",
    "dep": "1015",
    "arr": "1640",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "IST DXB",
    "flt": "TK 762",
    "dep": "0135",
    "arr": "0655",
    "eq": "32Q",
    "days": "1234567",
    "fare": "YFFTR",
    "rate": "ADV-21"
  },
  {
    "pair": "IST FCO",
    "flt": "TK 1863",
    "dep": "0745",
    "arr": "0940",
    "eq": "32Q",
    "days": "1234567",
    "fare": "BNC14TR",
    "rate": "BAR-NRF"
  },
  {
    "pair": "IST HND",
    "flt": "TK 52",
    "dep": "0210",
    "arr": "1920",
    "eq": "359",
    "days": "1.3.567",
    "fare": "DNN2TR",
    "rate": "NEG-3C"
  },
  {
    "pair": "IST HND",
    "flt": "TK 198",
    "dep": "1930",
    "arr": "1250+1",
    "eq": "789",
    "days": "1.34.67",
    "fare": "ZLX21",
    "rate": "FHR-9"
  },
  {
    "pair": "IST JFK",
    "flt": "TK 1",
    "dep": "1355",
    "arr": "1800",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "IST JFK",
    "flt": "TK 11",
    "dep": "0225",
    "arr": "0630",
    "eq": "359",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "CVG-12"
  },
  {
    "pair": "IST SIN",
    "flt": "TK 54",
    "dep": "0200",
    "arr": "1720",
    "eq": "789",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "IST SIN",
    "flt": "TK 208",
    "dep": "1900",
    "arr": "1010+1",
    "eq": "359",
    "days": "1.3.5.7",
    "fare": "INC7TR",
    "rate": "BAR-FLX"
  },
  {
    "pair": "JFK AMS",
    "flt": "KL 642",
    "dep": "1745",
    "arr": "0650+1",
    "eq": "789",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "JFK CDG",
    "flt": "AF 007",
    "dep": "1930",
    "arr": "0835+1",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "JFK CDG",
    "flt": "AA 44",
    "dep": "2110",
    "arr": "1015+1",
    "eq": "789",
    "days": "1234567",
    "fare": "INC7US",
    "rate": "BAR-NRF"
  },
  {
    "pair": "JFK CDG",
    "flt": "DL 264",
    "dep": "1830",
    "arr": "0735+1",
    "eq": "359",
    "days": "1234567",
    "fare": "ZNCOW7",
    "rate": "ADV-21"
  },
  {
    "pair": "JFK DOH",
    "flt": "QR 702",
    "dep": "2210",
    "arr": "1740+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "JRT14QA",
    "rate": "PRF-7C"
  },
  {
    "pair": "JFK DXB",
    "flt": "EK 202",
    "dep": "2310",
    "arr": "1940+1",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "JFK FRA",
    "flt": "LH 401",
    "dep": "1755",
    "arr": "0715+1",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "JFK FRA",
    "flt": "UA 960",
    "dep": "1830",
    "arr": "0750+1",
    "eq": "789",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "CVG-12"
  },
  {
    "pair": "JFK GRU",
    "flt": "DL 105",
    "dep": "2145",
    "arr": "0830+1",
    "eq": "359",
    "days": "1234567",
    "fare": "DNN2US",
    "rate": "COR-8D"
  },
  {
    "pair": "JFK HKG",
    "flt": "CX 841",
    "dep": "1615",
    "arr": "2015+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "JFK HND",
    "flt": "AA 167",
    "dep": "1355",
    "arr": "1710+1",
    "eq": "789",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "CVG-12"
  },
  {
    "pair": "JFK IST",
    "flt": "TK 2",
    "dep": "2355",
    "arr": "1745+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2TR",
    "rate": "NEG-3C"
  },
  {
    "pair": "JFK LAX",
    "flt": "AA 1",
    "dep": "0800",
    "arr": "1120",
    "eq": "32Q",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "JFK LAX",
    "flt": "DL 415",
    "dep": "0900",
    "arr": "1220",
    "eq": "763",
    "days": "1234567",
    "fare": "INC7US",
    "rate": "ADV-21"
  },
  {
    "pair": "JFK LHR",
    "flt": "BA 112",
    "dep": "1830",
    "arr": "0620+1",
    "eq": "351",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "JFK LHR",
    "flt": "BA 178",
    "dep": "2225",
    "arr": "1015+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2GB",
    "rate": "CVG-12"
  },
  {
    "pair": "JFK LHR",
    "flt": "AA 100",
    "dep": "2200",
    "arr": "0950+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "JRT14US",
    "rate": "PRF-7C"
  },
  {
    "pair": "JFK LHR",
    "flt": "DL 1",
    "dep": "2020",
    "arr": "0815+1",
    "eq": "359",
    "days": "1234567",
    "fare": "INC7US",
    "rate": "BAR-NRF"
  },
  {
    "pair": "JFK MAD",
    "flt": "IB 6252",
    "dep": "1935",
    "arr": "0845+1",
    "eq": "359",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "JFK NRT",
    "flt": "JL 5",
    "dep": "1330",
    "arr": "1640+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "JNB DXB",
    "flt": "EK 762",
    "dep": "1450",
    "arr": "0050+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2ZA",
    "rate": "CVG-12"
  },
  {
    "pair": "JNB FRA",
    "flt": "LH 573",
    "dep": "2035",
    "arr": "0715+1",
    "eq": "359",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "COR-8D"
  },
  {
    "pair": "JNB LHR",
    "flt": "BA 56",
    "dep": "1920",
    "arr": "0535+1",
    "eq": "351",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "LAX HND",
    "flt": "JL 15",
    "dep": "1230",
    "arr": "1610+1",
    "eq": "789",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "LAX HND",
    "flt": "NH 105",
    "dep": "1305",
    "arr": "1650+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "FHR-9"
  },
  {
    "pair": "LAX HND",
    "flt": "DL 167",
    "dep": "1215",
    "arr": "1600+1",
    "eq": "359",
    "days": "1234567",
    "fare": "INC7US",
    "rate": "CVG-12"
  },
  {
    "pair": "LAX JFK",
    "flt": "AA 2",
    "dep": "0900",
    "arr": "1705",
    "eq": "32Q",
    "days": "1234567",
    "fare": "JRT14US",
    "rate": "BAR-FLX"
  },
  {
    "pair": "LAX LHR",
    "flt": "BA 268",
    "dep": "1900",
    "arr": "1305+1",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "LAX LHR",
    "flt": "UA 934",
    "dep": "1655",
    "arr": "1100+1",
    "eq": "789",
    "days": "1234567",
    "fare": "INC7US",
    "rate": "NEG-3C"
  },
  {
    "pair": "LHR AMS",
    "flt": "KL 1008",
    "dep": "0640",
    "arr": "0900",
    "eq": "32Q",
    "days": "1234567",
    "fare": "YFFGB",
    "rate": "PKG-BB2"
  },
  {
    "pair": "LHR AUH",
    "flt": "EY 11",
    "dep": "0910",
    "arr": "1910",
    "eq": "789",
    "days": "1234567",
    "fare": "DNN2AE",
    "rate": "CVG-12"
  },
  {
    "pair": "LHR AUH",
    "flt": "EY 17",
    "dep": "2145",
    "arr": "0745+1",
    "eq": "789",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "LHR BOM",
    "flt": "BA 137",
    "dep": "1300",
    "arr": "0220+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "JRT14GB",
    "rate": "PRF-7C"
  },
  {
    "pair": "LHR CDG",
    "flt": "AF 1081",
    "dep": "0655",
    "arr": "0910",
    "eq": "32Q",
    "days": "1234567",
    "fare": "YNCRT1",
    "rate": "ADV-21"
  },
  {
    "pair": "LHR CDG",
    "flt": "AF 1581",
    "dep": "1810",
    "arr": "2025",
    "eq": "32Q",
    "days": "12345.7",
    "fare": "BNC14GB",
    "rate": "BAR-FLX"
  },
  {
    "pair": "LHR DEL",
    "flt": "BA 143",
    "dep": "1320",
    "arr": "0210+1",
    "eq": "789",
    "days": "1234567",
    "fare": "DNN2GB",
    "rate": "NEG-3C"
  },
  {
    "pair": "LHR DOH",
    "flt": "QR 2",
    "dep": "1400",
    "arr": "2245",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "LHR DOH",
    "flt": "QR 4",
    "dep": "0900",
    "arr": "1745",
    "eq": "351",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "LHR DOH",
    "flt": "QR 8",
    "dep": "2110",
    "arr": "0555+1",
    "eq": "351",
    "days": "1234567",
    "fare": "INC7QA",
    "rate": "COR-8D"
  },
  {
    "pair": "LHR DXB",
    "flt": "EK 1",
    "dep": "1345",
    "arr": "2345",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "LHR DXB",
    "flt": "EK 3",
    "dep": "0955",
    "arr": "1955",
    "eq": "388",
    "days": "1234567",
    "fare": "DNN2AE",
    "rate": "CVG-12"
  },
  {
    "pair": "LHR DXB",
    "flt": "EK 5",
    "dep": "2015",
    "arr": "0640+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "ZLX21",
    "rate": "FHR-9"
  },
  {
    "pair": "LHR DXB",
    "flt": "BA 105",
    "dep": "2035",
    "arr": "0700+1",
    "eq": "789",
    "days": "1234567",
    "fare": "JRT14GB",
    "rate": "BAR-FLX"
  },
  {
    "pair": "LHR FRA",
    "flt": "LH 901",
    "dep": "0645",
    "arr": "0910",
    "eq": "32Q",
    "days": "12345..",
    "fare": "YFFGB",
    "rate": "PKG-BB2"
  },
  {
    "pair": "LHR FRA",
    "flt": "LH 903",
    "dep": "0930",
    "arr": "1155",
    "eq": "32Q",
    "days": "1234567",
    "fare": "BNC14GB",
    "rate": "BAR-NRF"
  },
  {
    "pair": "LHR FRA",
    "flt": "LH 905",
    "dep": "1215",
    "arr": "1440",
    "eq": "32Q",
    "days": "1234567",
    "fare": "YNCRT1",
    "rate": "ADV-21"
  },
  {
    "pair": "LHR FRA",
    "flt": "LH 907",
    "dep": "1530",
    "arr": "1755",
    "eq": "32Q",
    "days": "1234567",
    "fare": "DNN2DE",
    "rate": "COR-8D"
  },
  {
    "pair": "LHR FRA",
    "flt": "LH 919",
    "dep": "1855",
    "arr": "2120",
    "eq": "32Q",
    "days": "12345.7",
    "fare": "BNC14GB",
    "rate": "BAR-FLX"
  },
  {
    "pair": "LHR GRU",
    "flt": "BA 249",
    "dep": "2200",
    "arr": "0540+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "LHR HEL",
    "flt": "AY 1332",
    "dep": "0740",
    "arr": "1235",
    "eq": "32Q",
    "days": "1234567",
    "fare": "YFFFI",
    "rate": "PKG-BB2"
  },
  {
    "pair": "LHR HKG",
    "flt": "BA 27",
    "dep": "1245",
    "arr": "0810+1",
    "eq": "351",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "LHR HKG",
    "flt": "BA 31",
    "dep": "2050",
    "arr": "1605+1",
    "eq": "77W",
    "days": "1.34.67",
    "fare": "DNN2GB",
    "rate": "NEG-3C"
  },
  {
    "pair": "LHR HKG",
    "flt": "CX 238",
    "dep": "2130",
    "arr": "1650+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "ZLX21",
    "rate": "CVG-12"
  },
  {
    "pair": "LHR HKG",
    "flt": "CX 250",
    "dep": "1235",
    "arr": "0720+1",
    "eq": "351",
    "days": "1234567",
    "fare": "JRT14HK",
    "rate": "PRF-7C"
  },
  {
    "pair": "LHR HND",
    "flt": "BA 5",
    "dep": "1350",
    "arr": "0940+1",
    "eq": "789",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "LHR HND",
    "flt": "JL 42",
    "dep": "1105",
    "arr": "0655+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "FHR-9"
  },
  {
    "pair": "LHR HND",
    "flt": "NH 212",
    "dep": "1220",
    "arr": "0810+1",
    "eq": "789",
    "days": "1234567",
    "fare": "INC7JP",
    "rate": "COR-8D"
  },
  {
    "pair": "LHR IST",
    "flt": "TK 1980",
    "dep": "0655",
    "arr": "1245",
    "eq": "32Q",
    "days": "1234567",
    "fare": "YFFTR",
    "rate": "ADV-21"
  },
  {
    "pair": "LHR JFK",
    "flt": "BA 117",
    "dep": "0825",
    "arr": "1130",
    "eq": "351",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "LHR JFK",
    "flt": "BA 175",
    "dep": "1105",
    "arr": "1400",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2GB",
    "rate": "VIR-2A"
  },
  {
    "pair": "LHR JFK",
    "flt": "AA 104",
    "dep": "1520",
    "arr": "1815",
    "eq": "77W",
    "days": "1234567",
    "fare": "INC7US",
    "rate": "COR-8D"
  },
  {
    "pair": "LHR JFK",
    "flt": "DL 2",
    "dep": "0900",
    "arr": "1205",
    "eq": "359",
    "days": "1234567",
    "fare": "ZLX21",
    "rate": "BAR-FLX"
  },
  {
    "pair": "LHR JNB",
    "flt": "BA 55",
    "dep": "1900",
    "arr": "0700+1",
    "eq": "351",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "LHR LAX",
    "flt": "BA 269",
    "dep": "1120",
    "arr": "1440",
    "eq": "388",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "LHR LAX",
    "flt": "AA 135",
    "dep": "1630",
    "arr": "1955",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2US",
    "rate": "NEG-3C"
  },
  {
    "pair": "LHR MAD",
    "flt": "IB 3171",
    "dep": "0710",
    "arr": "1030",
    "eq": "32Q",
    "days": "1234567",
    "fare": "YNCRT1",
    "rate": "PKG-BB2"
  },
  {
    "pair": "LHR ORD",
    "flt": "AA 87",
    "dep": "1030",
    "arr": "1320",
    "eq": "789",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "CVG-12"
  },
  {
    "pair": "LHR SFO",
    "flt": "BA 287",
    "dep": "1550",
    "arr": "1900",
    "eq": "351",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "LHR SIN",
    "flt": "BA 11",
    "dep": "2115",
    "arr": "1710+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2GB",
    "rate": "CVG-12"
  },
  {
    "pair": "LHR SIN",
    "flt": "BA 15",
    "dep": "1235",
    "arr": "0840+1",
    "eq": "351",
    "days": "1234567",
    "fare": "JRT14GB",
    "rate": "PRF-7C"
  },
  {
    "pair": "LHR SIN",
    "flt": "SQ 305",
    "dep": "2145",
    "arr": "1745+1",
    "eq": "388",
    "days": "1234567",
    "fare": "INC7SG",
    "rate": "LRW-4B"
  },
  {
    "pair": "LHR SIN",
    "flt": "SQ 317",
    "dep": "1105",
    "arr": "0705+1",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "LHR SIN",
    "flt": "SQ 319",
    "dep": "1855",
    "arr": "1455+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2SG",
    "rate": "LRW-4B"
  },
  {
    "pair": "LHR ZRH",
    "flt": "LX 339",
    "dep": "1710",
    "arr": "1945",
    "eq": "32Q",
    "days": "1234567",
    "fare": "BNC14CH",
    "rate": "BAR-FLX"
  },
  {
    "pair": "MAD BCN",
    "flt": "IB 3801",
    "dep": "0700",
    "arr": "0820",
    "eq": "32Q",
    "days": "1234567",
    "fare": "YFFES",
    "rate": "BAR-NRF"
  },
  {
    "pair": "MAD FCO",
    "flt": "IB 3236",
    "dep": "0725",
    "arr": "0945",
    "eq": "32Q",
    "days": "12345.7",
    "fare": "BNC14ES",
    "rate": "ADV-21"
  },
  {
    "pair": "MAD JFK",
    "flt": "IB 6251",
    "dep": "1200",
    "arr": "1445",
    "eq": "359",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "MAD JFK",
    "flt": "AA 95",
    "dep": "1240",
    "arr": "1525",
    "eq": "789",
    "days": "1234567",
    "fare": "DNN2ES",
    "rate": "CVG-12"
  },
  {
    "pair": "MAD LHR",
    "flt": "IB 3170",
    "dep": "0715",
    "arr": "0830",
    "eq": "32Q",
    "days": "1234567",
    "fare": "YNCRT1",
    "rate": "PKG-BB2"
  },
  {
    "pair": "MUC JFK",
    "flt": "LH 410",
    "dep": "1055",
    "arr": "1400",
    "eq": "359",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "MUC JFK",
    "flt": "UA 121",
    "dep": "1355",
    "arr": "1700",
    "eq": "789",
    "days": "1234567",
    "fare": "INC7US",
    "rate": "BAR-FLX"
  },
  {
    "pair": "MUC SIN",
    "flt": "LH 792",
    "dep": "2205",
    "arr": "1555+1",
    "eq": "359",
    "days": "1.3.567",
    "fare": "DNN2DE",
    "rate": "CVG-12"
  },
  {
    "pair": "MUC SIN",
    "flt": "SQ 328",
    "dep": "2140",
    "arr": "1530+1",
    "eq": "359",
    "days": "1234567",
    "fare": "JRT14SG",
    "rate": "PRF-7C"
  },
  {
    "pair": "ORD FRA",
    "flt": "LH 430",
    "dep": "1540",
    "arr": "0650+1",
    "eq": "789",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "COR-8D"
  },
  {
    "pair": "ORD HND",
    "flt": "UA 881",
    "dep": "1200",
    "arr": "1500+1",
    "eq": "789",
    "days": "1234567",
    "fare": "INC7US",
    "rate": "CVG-12"
  },
  {
    "pair": "ORD LHR",
    "flt": "AA 90",
    "dep": "1830",
    "arr": "0750+1",
    "eq": "789",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "ORD LHR",
    "flt": "BA 294",
    "dep": "2015",
    "arr": "0935+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2GB",
    "rate": "LRW-4B"
  },
  {
    "pair": "PVG FRA",
    "flt": "LH 729",
    "dep": "1110",
    "arr": "1730",
    "eq": "77W",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "CVG-12"
  },
  {
    "pair": "PVG JFK",
    "flt": "DL 583",
    "dep": "1720",
    "arr": "2010",
    "eq": "359",
    "days": "1.3.567",
    "fare": "INC7US",
    "rate": "COR-8D"
  },
  {
    "pair": "PVG JFK",
    "flt": "UA 87",
    "dep": "1545",
    "arr": "1835",
    "eq": "789",
    "days": "1234567",
    "fare": "ZNCOW7",
    "rate": "BAR-NRF"
  },
  {
    "pair": "SFO FRA",
    "flt": "LH 454",
    "dep": "1545",
    "arr": "1130+1",
    "eq": "359",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "SFO HKG",
    "flt": "CX 873",
    "dep": "0035",
    "arr": "0635+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "JRT14HK",
    "rate": "PRF-7C"
  },
  {
    "pair": "SFO HKG",
    "flt": "UA 869",
    "dep": "1355",
    "arr": "2000+1",
    "eq": "789",
    "days": "1234567",
    "fare": "INC7US",
    "rate": "CVG-12"
  },
  {
    "pair": "SFO JFK",
    "flt": "UA 92",
    "dep": "0700",
    "arr": "1520",
    "eq": "763",
    "days": "1234567",
    "fare": "BNC14US",
    "rate": "ADV-21"
  },
  {
    "pair": "SFO LHR",
    "flt": "BA 284",
    "dep": "1900",
    "arr": "1315+1",
    "eq": "351",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "SFO SIN",
    "flt": "SQ 31",
    "dep": "0910",
    "arr": "1800+1",
    "eq": "359",
    "days": "1234567",
    "fare": "DNN2SG",
    "rate": "VIR-2A"
  },
  {
    "pair": "SFO SIN",
    "flt": "UA 1",
    "dep": "1030",
    "arr": "1930+1",
    "eq": "789",
    "days": "1234567",
    "fare": "INC7SG",
    "rate": "COR-8D"
  },
  {
    "pair": "SIN BOM",
    "flt": "SQ 422",
    "dep": "2115",
    "arr": "0020+1",
    "eq": "789",
    "days": "1234567",
    "fare": "YFFSG",
    "rate": "ADV-21"
  },
  {
    "pair": "SIN FRA",
    "flt": "LH 779",
    "dep": "2340",
    "arr": "0650+1",
    "eq": "359",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "CVG-12"
  },
  {
    "pair": "SIN FRA",
    "flt": "SQ 25",
    "dep": "0100",
    "arr": "0755",
    "eq": "359",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "SIN HKG",
    "flt": "CX 734",
    "dep": "0930",
    "arr": "1320",
    "eq": "359",
    "days": "1234567",
    "fare": "BNC14HK",
    "rate": "PKG-BB2"
  },
  {
    "pair": "SIN HKG",
    "flt": "SQ 862",
    "dep": "0810",
    "arr": "1200",
    "eq": "359",
    "days": "1234567",
    "fare": "YNCRT1",
    "rate": "BAR-NRF"
  },
  {
    "pair": "SIN HND",
    "flt": "NH 802",
    "dep": "0955",
    "arr": "1755",
    "eq": "789",
    "days": "1234567",
    "fare": "INC7JP",
    "rate": "COR-8D"
  },
  {
    "pair": "SIN HND",
    "flt": "SQ 634",
    "dep": "0850",
    "arr": "1650",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2SG",
    "rate": "CVG-12"
  },
  {
    "pair": "SIN LAX",
    "flt": "SQ 38",
    "dep": "0920",
    "arr": "1020",
    "eq": "359",
    "days": "1234567",
    "fare": "JRT14SG",
    "rate": "FHR-9"
  },
  {
    "pair": "SIN LHR",
    "flt": "BA 12",
    "dep": "2350",
    "arr": "0640+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "DNN2GB",
    "rate": "VIR-2A"
  },
  {
    "pair": "SIN LHR",
    "flt": "SQ 306",
    "dep": "2350",
    "arr": "0655+1",
    "eq": "388",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "SIN LHR",
    "flt": "SQ 318",
    "dep": "0910",
    "arr": "1520",
    "eq": "388",
    "days": "1234567",
    "fare": "DLXRT7",
    "rate": "PRF-7C"
  },
  {
    "pair": "SIN LHR",
    "flt": "SQ 322",
    "dep": "2340",
    "arr": "0645+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "INC7SG",
    "rate": "BAR-FLX"
  },
  {
    "pair": "SIN SFO",
    "flt": "SQ 32",
    "dep": "0925",
    "arr": "0940",
    "eq": "359",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "VIR-2A"
  },
  {
    "pair": "SIN SYD",
    "flt": "SQ 221",
    "dep": "0800",
    "arr": "1750",
    "eq": "388",
    "days": "1234567",
    "fare": "DNN2SG",
    "rate": "SIG-5"
  },
  {
    "pair": "SIN SYD",
    "flt": "SQ 231",
    "dep": "0110",
    "arr": "1100",
    "eq": "359",
    "days": "1234567",
    "fare": "ILGRT3",
    "rate": "NEG-3C"
  },
  {
    "pair": "SYD DOH",
    "flt": "QR 907",
    "dep": "2125",
    "arr": "0505+1",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "SYD DXB",
    "flt": "EK 412",
    "dep": "2110",
    "arr": "0530+1",
    "eq": "388",
    "days": "1234567",
    "fare": "DNN2AU",
    "rate": "CVG-12"
  },
  {
    "pair": "SYD SIN",
    "flt": "SQ 232",
    "dep": "1150",
    "arr": "1810",
    "eq": "388",
    "days": "1234567",
    "fare": "JRT14SG",
    "rate": "SIG-5"
  },
  {
    "pair": "ZRH CPH",
    "flt": "LX 1266",
    "dep": "0935",
    "arr": "1130",
    "eq": "32Q",
    "days": "12345.7",
    "fare": "YFFCH",
    "rate": "BAR-NRF"
  },
  {
    "pair": "ZRH JFK",
    "flt": "LX 16",
    "dep": "1300",
    "arr": "1540",
    "eq": "77W",
    "days": "1234567",
    "fare": "JNCRT7",
    "rate": "LRW-4B"
  },
  {
    "pair": "ZRH JFK",
    "flt": "LX 18",
    "dep": "0955",
    "arr": "1235",
    "eq": "359",
    "days": "1234567",
    "fare": "DNN2CH",
    "rate": "VIR-2A"
  },
  {
    "pair": "ZRH JFK",
    "flt": "DL 419",
    "dep": "1050",
    "arr": "1330",
    "eq": "359",
    "days": "1.34.67",
    "fare": "INC7US",
    "rate": "ADV-21"
  },
  {
    "pair": "ZRH LHR",
    "flt": "LX 316",
    "dep": "0650",
    "arr": "0735",
    "eq": "32Q",
    "days": "1234567",
    "fare": "YNCRT1",
    "rate": "PKG-BB2"
  },
  {
    "pair": "ZRH SIN",
    "flt": "LX 178",
    "dep": "2230",
    "arr": "1640+1",
    "eq": "77W",
    "days": "1.3.567",
    "fare": "JRT14CH",
    "rate": "PRF-7C"
  },
  {
    "pair": "ZRH SIN",
    "flt": "SQ 346",
    "dep": "1145",
    "arr": "0605+1",
    "eq": "359",
    "days": "1234567",
    "fare": "DNN2SG",
    "rate": "CVG-12"
  }
];

export const decided: Decided = {
  "pair": "LHR SIN",
  "flt": "SQ 319",
  "dep": "1855",
  "arr": "1455+1",
  "eq": "77W",
  "fare": "DNN2SG",
  "rate": "LRW-4B",
  "hotel": "Gemmill House, Telok Ayer",
  "room": "Shophouse king, floor 3, rear courtyard",
  "days": "1.3.567",
  "note": "Room held against a late arrival; free to 1800 on the day"
};

/** The long-form argument for the decided line — the craft made visible. */
export const decidedReasoning = "The obvious booking is SQ 317. It leaves in daylight, lands 0705, and looks like it hands back a morning. It does not. Gemmill House releases rooms at 1500, so an 0705 arrival buys either eight hours in a lobby or the previous night paid in full to hold the bed. SQ 319 leaves at 1855, sleeps the back half, and is wheels down at 1455 — through Changi and in the room by 1620, dinner on Amoy Street, asleep on Singapore time. Thursday 0900 on Cross Street is eight minutes on foot, and it is the first thing of that day rather than the third. SQ 319 is also the 77W with the 2023 business cabin and a door; SQ 305 on the same pair is the 388, and the upper-deck window pairs there were declined once already. DNN2SG instead of the flexible J bucket saves GBP 1,140 on a change permission the board date makes pointless, and LRW-4B holds the room against a late arrival and cancels free to 1800 on the day.";

export const survivors: Routing[] = [
  {
    "label": "SQ 319 · Gemmill House",
    "detail": "LHR 1855 / SIN 1455+1 · 77W · DNN2SG · LRW-4B · shophouse king, floor 3",
    "reason": "The only LHR nonstop that lands with the room already released and still leaves an evening. Eight minutes on foot to Thursday's meeting, eleven to Friday's."
  },
  {
    "label": "BA 11 · Cecil Street House",
    "detail": "LHR 2115 / SIN 1710+1 · 77W · DNN2GB · CVG-12 · corner king",
    "reason": "Held as the fallback until ticketing. Same arrival logic, the Club Suite has a door, and BA returns the seat to inventory at 24 hours if the board date slips."
  },
  {
    "label": "SQ 305 · Gemmill House",
    "detail": "LHR 2145 / SIN 1745+1 · 388 · INC7SG · LRW-4B",
    "reason": "GBP 310 cheaper and still inside check-in. Lost at the last cut on cabin: 388 upper deck, window pairs angled to the aisle, which the member has asked not to be booked into again."
  }
];

export const rejected: Routing[] = [
  {
    "label": "SQ 317 · Gemmill House",
    "detail": "LHR 1105 / SIN 0705+1 · 388 · JNCRT7 · LRW-4B",
    "reason": "Lands 0705. Gemmill House releases rooms at 1500 and will not guarantee earlier on LRW-4B. Holding a bed from 0705 means buying the previous night in full — S$420, and a morning already spent."
  },
  {
    "label": "Gemmill House, guaranteed 0700 check-in",
    "detail": "LRW-4B plus prior-night charge · S$420",
    "reason": "The property sells the guarantee as the whole previous night, not as a fee. Added to SQ 317 it costs more than SQ 319 outright, and still puts the member into a working day they have spent in the air."
  },
  {
    "label": "BA 15 · Cecil Street House",
    "detail": "LHR 1235 / SIN 0840+1 · 351 · JRT14GB · CVG-12",
    "reason": "Same 0840 problem, and BA 15 continues to Sydney, so Singapore sits mid-rotation. Four of the last ten pushed back late out of Heathrow, and a late arrival here lands into a room nobody is holding."
  },
  {
    "label": "LX 339 + LX 178 · Gemmill House",
    "detail": "LHR 1710 / ZRH 1945, ZRH 2230 / SIN 1640+1 · 32Q then 77W · DNN2CH",
    "reason": "Legal on paper — 2h45 against Zurich's 40-minute minimum. But the connecting-baggage cut at ZRH closes 45 minutes ahead of the long-haul and LX 339 is a T2 departure. One late pushback at Heathrow and the member arrives in Singapore while the bag arrives the next day."
  },
  {
    "label": "CX 250 + CX 715 · Gemmill House",
    "detail": "LHR 1235 / HKG 0720+1, HKG 0800 / SIN 1155 · 351 then 359 · DNN2HK",
    "reason": "Forty minutes at Hong Kong against a published fifty-minute minimum for a north satellite arrival, which means a bus and a second screening. CX 250 landed after 0745 on four of the last ten days, and a through fare protects the ticket, not the meeting."
  },
  {
    "label": "EK 5 + EK 404 · Marina Reach",
    "detail": "LHR 2015 / DXB 0640+1, DXB 2140 / SIN 0900+2 · 77W then 388 · ZNCOW7",
    "reason": "Fifteen hours on the ground at Dubai and an 0900 arrival on the far side, which is back inside the check-in problem two days out from London. It prices low because it is the rotation nobody takes."
  },
  {
    "label": "SQ 319 on KrisFlyer Saver, 92,000 miles",
    "detail": "Award inventory, Business, LHR-SIN",
    "reason": "Saver business on SQ metal out of London opens at 355 days and clears within the week. What is live now is Advantage at 155,500 miles plus GBP 285 in carrier charges. Spending 63,500 extra miles for the seat the cash fare already buys is not a saving."
  },
  {
    "label": "Round trip in ZLX21",
    "detail": "LHR-SIN-LHR · ZLX21 · GBP 3,980",
    "reason": "ZLX21 carries a 21-day advance purchase. The request is eleven days out, so it will not price in either direction. What does price at eleven days is DNN2SG outbound and INC7SG back, which is what is held."
  },
  {
    "label": "SQ 319 in JNCRT7",
    "detail": "Same flight, same cabin, fully flexible J",
    "reason": "JNCRT7 costs GBP 1,140 more for unlimited changes. The outbound is fixed by a board date that cannot move. DNN2SG is the same seat, the same lounge and the same 100 percent tier credit, with a GBP 250 change fee that will not be used."
  },
  {
    "label": "Havelock Reach, river king",
    "detail": "CVG-12 · S$465 · 2.4 km from Telok Ayer",
    "reason": "Thursday is on Cross Street and Friday is at Marina One. From Havelock Reach both are a car. From Gemmill House they are eight and eleven minutes on foot, for S$30 more a night."
  }
];

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const media = {
  sky: `${BP}/plates/sky.jpg`,
  stay: `${BP}/plates/stay.jpg`,
  desk: `${BP}/plates/desk.jpg`,
  skyCredit: "Photograph William Bayreuther · Unsplash · printed in two inks",
  stayCredit: "Photograph Linus Mimietz · Unsplash · printed in two inks",
  deskCredit: "Photograph Vitaly Gariev · Unsplash · printed in two inks",
};

export const copy = {
  "angle": "THE READING. The page is written from inside the work rather than around it. Every section leads with the material the concierge actually handles — fare bases, reissue penalties, married-segment pricing, saver award space, carrier hold windows, consortia rate codes, last-room-availability — on the argument that a senior operator will only believe a human decision is worth paying for once they can see how much reading sits underneath it. The member is buying hours of somebody else's attention against a field they will never look at. So the field is shown, the reading is described in the order it happens, and the single decided line is the only thing that resolves. The commission structure is presented as arithmetic, not virtue: we are checkable because we have no other income. The honest limits section is load-bearing — no private inventory, no overnight desk, no replacement for a corporate programme — because for this audience a stated limit is worth more than any claim. No photograph, no superlative, no urgency. Restraint is the argument.",
  "wordmarkTail": "Travel",
  "effectiveBanner": "EFFECTIVE 12 SEPT 2026 THROUGH 31 MAR 2027 · ALL TIMES LOCAL · ALL FARES SPECIMEN · EDITION 41",
  "headline": "We read the whole timetable. You read one line.",
  "subhead": "A named concierge works your dates against fare rules, award inventory, hold windows and hotel rate codes, then sends one flight and one hotel, decided together. Your membership pays for that reading; no airline or hotel does.",
  "primaryCta": "Request your concierge",
  "secondaryCta": "See a reading in full",
  "resolveSection": {
    "kicker": "Plate I · The narrowing",
    "heading": "The reading, and what survives it.",
    "body": "A request for Singapore, second week of November, back before the 20th. That window holds 406 sellable routings across eleven carriers, and 31 properties within reach of the two addresses on your calendar. Ines reads all of it. Which fares permit a date change and which reissue at 350 dollars plus the fare difference. Which routing prices as married segments and collapses the moment a leg is dropped. Where saver award space sits on the 12th and is gone by the 13th. Which of the 31 will hold a room from 07:00 instead of 15:00, and what that costs. What comes back is one flight, one hotel, and a short column on the ones that nearly won. The reading took her a working afternoon. It takes you ninety seconds.",
    "beforeLabel": "Read — 406 routings · 31 properties · 11 carriers",
    "afterLabel": "Sent — one flight, one hotel, and the reasons"
  },
  "documentSection": {
    "heading": "One page. Sky above, Stay below.",
    "body": "The reading comes back as a single document, because it was a single decision. SQ 319 is wheels down at Changi at 1455. Gemmill House releases rooms at 1500, so an 0705 arrival buys either eight hours in a lobby or the previous night paid in full. Either the property holds the room early or the flight is the evening one and you land when the bed is ready. That trade is the entire job. Nobody makes it when the flight is bought on one site and the hotel on another, three days apart, by a tired person at 2300. Above the rule: the carrier, the number, the fare basis, what the fare permits and what it costs to move. Below it: the property, the rate code, what the rate actually includes, and when the room is genuinely ready. Two halves, one page, one person's name at the bottom of it.",
    "skyLabel": "Sky · flight, fare basis, hold",
    "stayLabel": "Stay · property, rate code, room ready"
  },
  "trustSection": {
    "heading": "Paid by you. By nobody else.",
    "body": "A travel company is paid either by the traveller or by the people it books. We took one and closed the other. No airline pays us commission. No hotel pays us an override. No consortium pays us on volume, no booking system pays us per segment, no card issuer pays us for a referral. The whole income is the subscription column. So when Ines sends you a property that pays nothing to anyone, she is not being principled about it. She has no other option, and that is the point of the structure — not to make us better people, but to make the recommendation checkable. You can read the reasons she gives and judge them on their merits, because there is no second set of reasons underneath.",
    "pullQuote": "If a hotel paid us, you would never know why it was on the page.",
    "ledgerIn": "IN — annual member subscriptions. That is the whole column. There is no second line in it.",
    "ledgerOut": "NOT TAKEN — airline commission, hotel commission, consortium overrides, segment incentives, placement fees, card-issuer referrals, supplier rebates of any kind."
  },
  "workSection": {
    "heading": "What happens between your message and your ticket.",
    "body": "Your request arrives in plain language. Where, roughly when, anything fixed. No form, no From and To boxes, no dates dropdown to fight with on a phone.\n\nThen the reading. Published fares first, then award inventory, then the rules underneath both: minimum stay, permitted stopovers, the reissue penalty, whether the cheap fare is cheap because it can never be moved. Where a hold exists it goes on immediately — 24 hours on fares filed for sale in the United States, whatever the carrier allows on an award seat, sometimes nothing at all. The hold is the reason you can read the document after dinner rather than during a meeting.\n\nThe hotel runs alongside, not afterwards. Rate codes and what each one covers. Whether the rate is last-room-availability or the first thing to vanish in a congress week. Which floor, which side of the building, and the plain question of when the room is ready against when you land.\n\nYou get one flight and one hotel, with the near misses and the reason each one lost. You answer yes, or you name the single thing that was wrong. We book it. Then the file stays open. If the schedule moves, if the aircraft changes, if the flight cancels on a Sunday afternoon, the same person handles it and you generally hear about it once it is already fixed."
  },
  "personSection": {
    "heading": "The same desk, every time.",
    "body": "One person reads your requests. Not the first agent free — the same one in November and again in March. That matters because your second trip costs her less time than your first, and your ninth costs less again. By then the file knows you will not connect at Charles de Gaulle, that you take the aisle on the left, that you would rather land at 06:00 into a held room than land at 16:00 rested, that the December booking carries your partner's name. None of it is asked twice. A queue cannot accumulate any of that, because there is nobody in a queue for it to accumulate in.",
    "concierge": "Ines Halvorsen",
    "conciergeRole": "Concierge, Desk 4",
    "conciergeBio": "Eleven years on airline ticketing and reissue desks, four of them writing and auditing fare rules for a consolidator in Copenhagen. Two more loading rates for a hotel group, which is where she learned what a negotiated rate hides and what it does not. She reads timetables in three alphabets. She holds thirty-four members and will not hold more than forty."
  },
  "membership": {
    "heading": "Membership, in full.",
    "price": "$3,400 a year",
    "priceQualifier": "One member, and anyone travelling on the same booking. Billed once, annually. No per-trip fee, no booking fee, and no markup on any fare or rate we put in front of you.",
    "includes": [
      "One named concierge for the year — the same person on your first request and your nineteenth.",
      "Trip requests in plain language, as many as the year holds, sent however you already write.",
      "Flight and hotel read together and returned on one document, with the rejected routings and the stated reason each was rejected.",
      "A hold placed wherever the carrier permits one, so the decision can wait until you have eaten.",
      "Every fare and rate charged at what it costs. We add nothing to it, and you see the fare basis.",
      "A file that carries seat, floor, airports you refuse and everything else you would otherwise re-explain, from trip to trip.",
      "Schedule changes, cancellations and reissues handled by the same person, usually before you have noticed them."
    ],
    "excludes": [
      "No private inventory. Everything we book, you could have bought yourself — given the hours and the reading. You are paying for the hours and the reading.",
      "No overnight desk. Requests are read 08:00 to 20:00 CET, Monday to Saturday. If a flight cancels at 03:00, the carrier's own app will be faster than we are, and you should use it.",
      "We do not replace a corporate travel programme. If your employer mandates its own agency for work flights, we take the rest of the calendar — and the fee is yours, not theirs."
    ],
    "closeLine": "Six places are open at her desk. After those, you would be reading with a different concierge, and we would tell you whose desk before you paid rather than after."
  },
  "footnotes": [
    "† Fare basis shown is the lowest published in the booking class named. The member pays the fare as filed; we add no service charge to it.",
    "◆ Award seat. Availability sits with the carrier and can disappear between the reading and the hold. Where a hold is offered, we take it the same minute.",
    "‡ Hold window as offered by the carrier at the time of reading. Twenty-four hours on fares filed for sale in the United States; shorter elsewhere; on some carriers none at all.",
    "§ Hotel rate is negotiated or consortia, last-room-availability only where the letter of the rate says so. It is not always the lowest number on the page; what it includes is printed beside it.",
    "¶ All times local. Connecting times are the carrier's legal minimum plus our own margin, which is longer at Heathrow, Frankfurt and Charles de Gaulle than the minimum permits.",
    "◇ Routing read and rejected. The reason is printed in the right-hand column rather than left to be guessed at."
  ],
  "colophon": "Set in Libre Caslon Display, Libre Caslon Text and Archivo. Two inks, warm stock. Sky Stay Travel is a fictional company and this page is a specimen. Every fare, flight number, fare basis, hold window, hotel rate code, price, member count, date and name on it — Ines Halvorsen included — is invented demonstration material, written at production fidelity so the page can be judged as a page, and true of nothing. No fare shown here is for sale, no desk is open, and no membership can be bought. First edition, September 2026."
};
