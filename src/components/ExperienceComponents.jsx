// images

import ded from "../assets/Images/clients/Engineering/ded.png";
import harbourenergy from "../assets/Images/clients/Engineering/harbourenergy.png";

import astrafinancial from "../assets/Images/clients/Engineering/astrafinancial.png";
import itb from "../assets/Images/clients/Engineering/itb.png";
import kemenhan from "../assets/Images/clients/Engineering/kemenhan.png";
import kementriankeuangan from "../assets/Images/clients/Engineering/kementriankeuangan.png";
import kementrianperhubungan from "../assets/Images/clients/Engineering/kementrianperhubungan.png";
import korosi from "../assets/Images/clients/Engineering/korosi.png";
import pertamina from "../assets/Images/clients/Engineering/pertamina.png";
import pertaminapi from "../assets/Images/clients/Engineering/pertaminapi.png";
import pertrocina from "../assets/Images/clients/Engineering/petrocina.png";
import petronas from "../assets/Images/clients/Engineering/petronas.png";
import pgn from "../assets/Images/clients/Engineering/pgn.png";
import pjb from "../assets/Images/clients/Engineering/pjb.png";
import pln from "../assets/Images/clients/Engineering/pln.png";
import spie from "../assets/Images/clients/Engineering/spie.png";
import starenergy from "../assets/Images/clients/Engineering/starenergy.png";
import { useEffect, useState } from "react";

const dataCategory1 = [
  {
    id: 1,
    tittle:
      "SOFTWARE: ASSET INTEGRITY & RELIABILITY MANAGEMENT SYSTEM PHASE 1: Asset Register, Spare Part Management, Bill of Material, ",
    detail: "SPIE OIL & GAS THAILAND (NORTH OIL COMPANY - QATAR) (2023)",
    image: spie,
  },
  {
    id: 2,
    tittle:
      "DETAIL ENGINEERING DESIGN (DED) OF LTRO-1 COMPRESSOR: Engineering Drawings, Basis of Design, Site Specific Procedure, Commissioning Startup Function Test Procedures, Technical ",
    image: ded,
  },
  {
    id: 3,
    tittle: "ENGINEERING STUDY & REVIEW",
    detail: "PERTAMINA HULU SANGA-SANGA (2023)",
    image: pertamina,
  },
  {
    id: 4,
    tittle: "SOFTWARE: REGISTRATION & CUSTOMER TRACK, ",
    detail: "IKATAN ALUMNI METALURGI ITB (2022)",
    image: itb,
  },
  {
    id: 5,
    tittle: "FLOWMETER RECALIBRATION AT FSO SHIP 112,",
    detail: "PETROCHINA INTERNATIONAL JABUNG (2023)",
    image: pertrocina,
  },
  {
    id: 6,
    tittle: "PENYUSUNAN MATERI DIKLAT RELIABILITY EXCELLENCE,",
    detail: "ASTRA FINANCIAL GROUP (2022)",
    image: astrafinancial,
  },
  {
    id: 7,
    tittle: "SOFTWARE: COSTUMER JOURNEY MICRO-SITE GIIAS 2023,",
    detail: "ASTRA FINANCIAL GROUP (2023",
    image: astrafinancial,
  },
  {
    id: 8,
    tittle:
      "Perbaikan Komponen Power Supply Radar Master T Satrad Master T: PS1, Data Processing, GSR/RSR,",
    detail: "MABES TNI AU (2022)",
    image: kemenhan,
  },
  {
    id: 9,
    tittle:
      "PROVISION OF RELIABILITY ENGINEERING: Asset Register, Failure Code Development, Bad Actor Management, SECE Assurance & Non-Assurance Job Plan Development, Reliability Availability",
    image: harbourenergy,
  },
  {
    id: 10,
    tittle: "PENYUSUNAN MATERI DIKLAT RELIABILITY EXCELLENCE",
    detail: "PERUSAHAAN LISTRIK NEGARA (2021)",
    image: pln,
  },
  {
    id: 11,
    tittle:
      "Jasa Konsultansi Pengembangan Aplikasi Daily Activity Monitoring System - Next Generation (DAMS-NG) Tahap Ill, ",
    detail: "PUSINTEK KEMENTERIAN KEUANGAN RI (2021)",
    image: kementriankeuangan,
  },
  {
    id: 12,
    tittle: "PROVISION OF ALARM MANAGEMENT SYSTEM, ",
    detail: "PETRONAS CARIGALI KETAPANG II LTD (2020)",
    image: petronas,
  },
  {
    id: 13,
    tittle: "RAM Analysis for Salak & Darajat Facility",
    detail: "STAR ENERGY GEOTHERMAL (2021)",
    image: starenergy,
  },
  {
    id: 14,
    tittle:
      "PROVISION OF RELIABILITY & ASSET INTEGRITY, CORROSION MANAGEMENT PLAN, OPERATIONS READINESS STRATEGIC ASSURANCE, PROCESS SAFETY MANAGEMENT FOR EPCI AND",
    image: petronas,
  },
  {
    id: 15,
    tittle:
      "SIL Certification Supervision of TUV-SUD Product Certification of Transmitter KS-XX1000 Series,, PROCESS SAFETY MANAGEMENT FOR EPCI AND",
    detail: "KOROSI SPECINDO (2021)",
    image: korosi,
  },
  {
    id: 16,
    tittle:
      "Perbaikan Komponen Power Supply Radar Master T Satrad Master T: PS1, Data Processing, GSR/RSR,",
    detail: "MABES TNI AU 2022",
    image: kemenhan,
  },
  {
    id: 17,
    tittle:
      "ASSET INTEGRITY AND PLANT RELIABILITY INTEGRATED SERVICES AND SOFTWARE DEVELOPMENT,",
    detail: "PETRONAS CARIGALI KETAPANG II LTD. (2021)",
    image: petronas,
  },
  {
    id: 18,
    tittle: "PROVISION OF PROCESS SAFETY ASSESSMENT CCGT POWER PLANT 1760MW,",
    detail: "PERTAMINA POWER INDONESIA (2020)",
    image: pertaminapi,
  },
  {
    id: 19,
    tittle:
      "HAZID & HAZOP ANALYSIS FOR NATURAL GAS INSTALLATION FOR ACEH: KOTA LANGSA, KAB ACEH TAMIANG & KAB DELI SERDANG,",
    detail: "PERUSAHAAN GAS NEGARA (2020)",
    image: pgn,
  },
  {
    id: 20,
    tittle:
      "PLAN INFORMATION SYSTEM CORE SIGHT ENHANCEMENT AT PETRONAS BUKIT TUA GRESIK STATION,",
    detail: " PETRONAS CARIGALI KETAPANG II LTD (2020)",
    image: petronas,
  },
  {
    id: 21,
    tittle:
      "PROVISION FOR SERVICES OF ECA, ITPM AND SCE FOR BUKIT TUA ORF (CONDENSATE)",
    detail: "PETRONAS CARIGALI KETAPANG II LTD. (2020)",
    image: petronas,
  },
  {
    id: 22,
    tittle: "PIPELINE UNCERTAINTY & RELIABILITY ANALYSIS",
    detail: "PETRONAS CARIGALI KETAPANG II LTD (2019)",
    image: petronas,
  },
  {
    id: 23,
    tittle: "PROVISION OF BUKIT TUA ORF GAS METERING SERVICES, ",
    detail: "PETRONAS CARIGALI KETAPANG II LTD. (2019)",
    image: petronas,
  },
  {
    id: 23,
    tittle: "TECHNICAL SERVICE ASSISTANCE FOR RELIABILITY ENGINEER",
    detail: "PETRONAS CARIGALI KETAPANG II LTD (2019)",
    image: petronas,
  },
  {
    id: 24,
    tittle:
      "TEST & COMMISSIONING FOR LRT JABODEBEK PHASE 1 POWER SUPPLY SYSTEM, ",
    detail: " KEMENTERIAN PERHUBUNGAN RI (2019)",
    image: kementrianperhubungan,
  },
  {
    id: 25,
    tittle:
      "QUANTITATIVE RELIABILITY ASSESSMENT WITH DETAIL RCM AIMING EXTENSION, ",
    detail: "PETRONAS CARIGALI KETAPANG II LTD (2019)",
    image: petronas,
  },
  {
    id: 25,
    tittle:
      "SAFETY ENGINEERING ANALYSIS FOR LRT JABODEBEK PHASE 1 POWER SUPPLY SYSTEM, ",
    detail: "KEMENTERIAN PERHUBUNGAN RI. (2019)",
    image: kementrianperhubungan,
  },
  {
    id: 26,
    tittle:
      "SPARE PART CALCULATION (INTEGRATED LOGISTIC SUPPORT) FOR LRT JABODEBEK PHASE 1 POWER SUPPLY SYSTEM,",
    detail: "MINISTRY OF TRANSPORTATION (2019)",
    image: kementrianperhubungan,
  },
  {
    id: 27,
    tittle: "TECHNICAL SERVICE ASSISTANCE FOR OPERATION PHILOSOPHY,",
    detail: "PETRONAS CARIGALI KETAPANG II LTD. (2019)",
    image: petronas,
  },
  {
    id: 28,
    tittle:
      "ASSET MANAGEMENT & RELIABILITY CENTERED MAINTENANCE (RCM) FOR PLTS CIRATA 1MW,",
    detail: "PT PEMBANGKITAN JAWA BALI (PJB) (2018)",
    image: pjb,
  },
  {
    id: 29,
    tittle:
      "RELIABILITY AVAILABILITY MAINTAINABILITY (RAM) ANALYSIS FOR LRT JABODEBEK PHASE 1 POWER SUPPLY SYSTEM",
    detail: "MINISTRY OF TRANSPORTATION (2017)",
    image: kementrianperhubungan,
  },
  {
    id: 30,
    tittle:
      "PENYUSUNAN SRCM BPP 1 DI BAGIAN PLANT RELIABILITY PT PERTAMINA RU-V BALIKPAPAN, ",
    detail: "PERTAMINA RU V BALIKPAPAN (2015)",
    image: pertamina,
  },
  {
    id: 31,
    tittle: "JASA PEMBUATAN DASHBOARD REAL TIME DISPLAY CORESIGHT, ",
    detail: "PERTAMINA (PERSERO) 2016",
    image: pertamina,
  },
  {
    id: 32,
    tittle:
      "PENGEMBANGAN DAN PENAMBAHAN MODUL UNTUK EQUIPMENT DAN PLANT RELIABILITY MONITORING MANAGEMENT SYSTEM KILANG, ",
    detail: "MINISTRY OF TRANSPORTATION (2017)",
    image: pertamina,
  },
  {
    id: 33,
    tittle: "RELIABILITY CENTERED MAINTENANCE SERVICES,",
    detail: "JOB PERTAMINA MEDCO TOMORI (2016)",
    image: pertamina,
  },
];

const dataCategory2 = [
  {
    id: 1,
    tittle:
      "ABID ASSET INTEGRITY & RELIABILITY MANAGEMENT SYSTEM PHASE 1: Asset Register, Spare Part Management, Bill of Material, ",
    detail: "SPIE OIL & GAS THAILAND (NORTH OIL COMPANY - QATAR) (2023)",
    image: spie,
  },
  {
    id: 2,
    tittle:
      "DETAIL ENGINEERING DESIGN (DED) OF LTRO-1 COMPRESSOR: Engineering Drawings, Basis of Design, Site Specific Procedure, Commissioning Startup Function Test Procedures, Technical ",
    image: ded,
  },
  {
    id: 3,
    tittle: "ENGINEERING STUDY & REVIEW",
    detail: "PERTAMINA HULU SANGA-SANGA (2023)",
    image: pertamina,
  },
  {
    id: 4,
    tittle: "SOFTWARE: REGISTRATION & CUSTOMER TRACK, ",
    detail: "IKATAN ALUMNI METALURGI ITB (2022)",
    image: itb,
  },
  {
    id: 5,
    tittle: "FLOWMETER RECALIBRATION AT FSO SHIP 112,",
    detail: "PETROCHINA INTERNATIONAL JABUNG (2023)",
    image: pertrocina,
  },
  {
    id: 6,
    tittle: "PENYUSUNAN MATERI DIKLAT RELIABILITY EXCELLENCE,",
    detail: "ASTRA FINANCIAL GROUP (2022)",
    image: astrafinancial,
  },
  {
    id: 7,
    tittle: "SOFTWARE: COSTUMER JOURNEY MICRO-SITE GIIAS 2023,",
    detail: "ASTRA FINANCIAL GROUP (2023",
    image: astrafinancial,
  },
  {
    id: 8,
    tittle:
      "Perbaikan Komponen Power Supply Radar Master T Satrad Master T: PS1, Data Processing, GSR/RSR,",
    detail: "MABES TNI AU (2022)",
    image: kemenhan,
  },
  {
    id: 9,
    tittle:
      "PROVISION OF RELIABILITY ENGINEERING: Asset Register, Failure Code Development, Bad Actor Management, SECE Assurance & Non-Assurance Job Plan Development, Reliability Availability",
    image: harbourenergy,
  },
  {
    id: 10,
    tittle: "PENYUSUNAN MATERI DIKLAT RELIABILITY EXCELLENCE",
    detail: "PERUSAHAAN LISTRIK NEGARA (2021)",
    image: pln,
  },
  {
    id: 11,
    tittle:
      "Jasa Konsultansi Pengembangan Aplikasi Daily Activity Monitoring System - Next Generation (DAMS-NG) Tahap Ill, ",
    detail: "PUSINTEK KEMENTERIAN KEUANGAN RI (2021)",
    image: kementriankeuangan,
  },
  {
    id: 12,
    tittle: "PROVISION OF ALARM MANAGEMENT SYSTEM, ",
    detail: "PETRONAS CARIGALI KETAPANG II LTD (2020)",
    image: petronas,
  },
  {
    id: 13,
    tittle: "RAM Analysis for Salak & Darajat Facility",
    detail: "STAR ENERGY GEOTHERMAL (2021)",
    image: starenergy,
  },
  {
    id: 14,
    tittle:
      "PROVISION OF RELIABILITY & ASSET INTEGRITY, CORROSION MANAGEMENT PLAN, OPERATIONS READINESS STRATEGIC ASSURANCE, PROCESS SAFETY MANAGEMENT FOR EPCI AND",
    image: petronas,
  },
  {
    id: 15,
    tittle:
      "SIL Certification Supervision of TUV-SUD Product Certification of Transmitter KS-XX1000 Series,, PROCESS SAFETY MANAGEMENT FOR EPCI AND",
    detail: "KOROSI SPECINDO (2021)",
    image: korosi,
  },
  {
    id: 16,
    tittle:
      "Perbaikan Komponen Power Supply Radar Master T Satrad Master T: PS1, Data Processing, GSR/RSR,",
    detail: "MABES TNI AU 2022",
    image: kemenhan,
  },
  {
    id: 17,
    tittle:
      "ASSET INTEGRITY AND PLANT RELIABILITY INTEGRATED SERVICES AND SOFTWARE DEVELOPMENT,",
    detail: "PETRONAS CARIGALI KETAPANG II LTD. (2021)",
    image: petronas,
  },
  {
    id: 18,
    tittle: "PROVISION OF PROCESS SAFETY ASSESSMENT CCGT POWER PLANT 1760MW,",
    detail: "PERTAMINA POWER INDONESIA (2020)",
    image: pertaminapi,
  },
  {
    id: 19,
    tittle:
      "HAZID & HAZOP ANALYSIS FOR NATURAL GAS INSTALLATION FOR ACEH: KOTA LANGSA, KAB ACEH TAMIANG & KAB DELI SERDANG,",
    detail: "PERUSAHAAN GAS NEGARA (2020)",
    image: pgn,
  },
  {
    id: 20,
    tittle:
      "PLAN INFORMATION SYSTEM CORE SIGHT ENHANCEMENT AT PETRONAS BUKIT TUA GRESIK STATION,",
    detail: " PETRONAS CARIGALI KETAPANG II LTD (2020)",
    image: petronas,
  },
  {
    id: 21,
    tittle:
      "PROVISION FOR SERVICES OF ECA, ITPM AND SCE FOR BUKIT TUA ORF (CONDENSATE)",
    detail: "PETRONAS CARIGALI KETAPANG II LTD. (2020)",
    image: petronas,
  },
  {
    id: 22,
    tittle: "PIPELINE UNCERTAINTY & RELIABILITY ANALYSIS",
    detail: "PETRONAS CARIGALI KETAPANG II LTD (2019)",
    image: petronas,
  },
  {
    id: 23,
    tittle: "PROVISION OF BUKIT TUA ORF GAS METERING SERVICES, ",
    detail: "PETRONAS CARIGALI KETAPANG II LTD. (2019)",
    image: petronas,
  },
  {
    id: 23,
    tittle: "TECHNICAL SERVICE ASSISTANCE FOR RELIABILITY ENGINEER",
    detail: "PETRONAS CARIGALI KETAPANG II LTD (2019)",
    image: petronas,
  },
  {
    id: 24,
    tittle:
      "TEST & COMMISSIONING FOR LRT JABODEBEK PHASE 1 POWER SUPPLY SYSTEM, ",
    detail: " KEMENTERIAN PERHUBUNGAN RI (2019)",
    image: kementrianperhubungan,
  },
  {
    id: 25,
    tittle:
      "QUANTITATIVE RELIABILITY ASSESSMENT WITH DETAIL RCM AIMING EXTENSION, ",
    detail: "PETRONAS CARIGALI KETAPANG II LTD (2019)",
    image: petronas,
  },
  {
    id: 25,
    tittle:
      "SAFETY ENGINEERING ANALYSIS FOR LRT JABODEBEK PHASE 1 POWER SUPPLY SYSTEM, ",
    detail: "KEMENTERIAN PERHUBUNGAN RI. (2019)",
    image: kementrianperhubungan,
  },
  {
    id: 26,
    tittle:
      "SPARE PART CALCULATION (INTEGRATED LOGISTIC SUPPORT) FOR LRT JABODEBEK PHASE 1 POWER SUPPLY SYSTEM,",
    detail: "MINISTRY OF TRANSPORTATION (2019)",
    image: kementrianperhubungan,
  },
  {
    id: 27,
    tittle: "TECHNICAL SERVICE ASSISTANCE FOR OPERATION PHILOSOPHY,",
    detail: "PETRONAS CARIGALI KETAPANG II LTD. (2019)",
    image: petronas,
  },
  {
    id: 28,
    tittle:
      "ASSET MANAGEMENT & RELIABILITY CENTERED MAINTENANCE (RCM) FOR PLTS CIRATA 1MW,",
    detail: "PT PEMBANGKITAN JAWA BALI (PJB) (2018)",
    image: pjb,
  },
  {
    id: 29,
    tittle:
      "RELIABILITY AVAILABILITY MAINTAINABILITY (RAM) ANALYSIS FOR LRT JABODEBEK PHASE 1 POWER SUPPLY SYSTEM",
    detail: "MINISTRY OF TRANSPORTATION (2017)",
    image: kementrianperhubungan,
  },
  {
    id: 30,
    tittle:
      "PENYUSUNAN SRCM BPP 1 DI BAGIAN PLANT RELIABILITY PT PERTAMINA RU-V BALIKPAPAN, ",
    detail: "PERTAMINA RU V BALIKPAPAN (2015)",
    image: pertamina,
  },
  {
    id: 31,
    tittle: "JASA PEMBUATAN DASHBOARD REAL TIME DISPLAY CORESIGHT, ",
    detail: "PERTAMINA (PERSERO) 2016",
    image: pertamina,
  },
  {
    id: 32,
    tittle:
      "PENGEMBANGAN DAN PENAMBAHAN MODUL UNTUK EQUIPMENT DAN PLANT RELIABILITY MONITORING MANAGEMENT SYSTEM KILANG, ",
    detail: "MINISTRY OF TRANSPORTATION (2017)",
    image: pertamina,
  },
  {
    id: 33,
    tittle: "RELIABILITY CENTERED MAINTENANCE SERVICES,",
    detail: "JOB PERTAMINA MEDCO TOMORI (2016)",
    image: pertamina,
  },
];
const dataCategory3 = [
  {
    id: 1,
    tittle:
      "SOFTWARE: ASSET INTEGRITY & RELIABILITY MANAGEMENT SYSTEM PHASE 1: Asset Register, Spare Part Management, Bill of Material, ",
    detail: "SPIE OIL & GAS THAILAND (NORTH OIL COMPANY - QATAR) (2023)",
    image: spie,
  },
  {
    id: 2,
    tittle:
      "DETAIL ENGINEERING DESIGN (DED) OF LTRO-1 COMPRESSOR: Engineering Drawings, Basis of Design, Site Specific Procedure, Commissioning Startup Function Test Procedures, Technical ",
    image: ded,
  },
  {
    id: 3,
    tittle: "ENGINEERING STUDY & REVIEW",
    detail: "PERTAMINA HULU SANGA-SANGA (2023)",
    image: pertamina,
  },
  {
    id: 4,
    tittle: "SOFTWARE: REGISTRATION & CUSTOMER TRACK, ",
    detail: "IKATAN ALUMNI METALURGI ITB (2022)",
    image: itb,
  },
  {
    id: 5,
    tittle: "FLOWMETER RECALIBRATION AT FSO SHIP 112,",
    detail: "PETROCHINA INTERNATIONAL JABUNG (2023)",
    image: pertrocina,
  },
  {
    id: 6,
    tittle: "PENYUSUNAN MATERI DIKLAT RELIABILITY EXCELLENCE,",
    detail: "ASTRA FINANCIAL GROUP (2022)",
    image: astrafinancial,
  },
  {
    id: 7,
    tittle: "SOFTWARE: COSTUMER JOURNEY MICRO-SITE GIIAS 2023,",
    detail: "ASTRA FINANCIAL GROUP (2023",
    image: astrafinancial,
  },
  {
    id: 8,
    tittle:
      "Perbaikan Komponen Power Supply Radar Master T Satrad Master T: PS1, Data Processing, GSR/RSR,",
    detail: "MABES TNI AU (2022)",
    image: kemenhan,
  },
  {
    id: 9,
    tittle:
      "PROVISION OF RELIABILITY ENGINEERING: Asset Register, Failure Code Development, Bad Actor Management, SECE Assurance & Non-Assurance Job Plan Development, Reliability Availability",
    image: harbourenergy,
  },
  {
    id: 10,
    tittle: "PENYUSUNAN MATERI DIKLAT RELIABILITY EXCELLENCE",
    detail: "PERUSAHAAN LISTRIK NEGARA (2021)",
    image: pln,
  },
  {
    id: 11,
    tittle:
      "Jasa Konsultansi Pengembangan Aplikasi Daily Activity Monitoring System - Next Generation (DAMS-NG) Tahap Ill, ",
    detail: "PUSINTEK KEMENTERIAN KEUANGAN RI (2021)",
    image: kementriankeuangan,
  },
  {
    id: 12,
    tittle: "PROVISION OF ALARM MANAGEMENT SYSTEM, ",
    detail: "PETRONAS CARIGALI KETAPANG II LTD (2020)",
    image: petronas,
  },
  {
    id: 13,
    tittle: "RAM Analysis for Salak & Darajat Facility",
    detail: "STAR ENERGY GEOTHERMAL (2021)",
    image: starenergy,
  },
  {
    id: 14,
    tittle:
      "PROVISION OF RELIABILITY & ASSET INTEGRITY, CORROSION MANAGEMENT PLAN, OPERATIONS READINESS STRATEGIC ASSURANCE, PROCESS SAFETY MANAGEMENT FOR EPCI AND",
    image: petronas,
  },
  {
    id: 15,
    tittle:
      "SIL Certification Supervision of TUV-SUD Product Certification of Transmitter KS-XX1000 Series,, PROCESS SAFETY MANAGEMENT FOR EPCI AND",
    detail: "KOROSI SPECINDO (2021)",
    image: korosi,
  },
  {
    id: 16,
    tittle:
      "Perbaikan Komponen Power Supply Radar Master T Satrad Master T: PS1, Data Processing, GSR/RSR,",
    detail: "MABES TNI AU 2022",
    image: kemenhan,
  },
  {
    id: 17,
    tittle:
      "ASSET INTEGRITY AND PLANT RELIABILITY INTEGRATED SERVICES AND SOFTWARE DEVELOPMENT,",
    detail: "PETRONAS CARIGALI KETAPANG II LTD. (2021)",
    image: petronas,
  },
  {
    id: 18,
    tittle: "PROVISION OF PROCESS SAFETY ASSESSMENT CCGT POWER PLANT 1760MW,",
    detail: "PERTAMINA POWER INDONESIA (2020)",
    image: pertaminapi,
  },
  {
    id: 19,
    tittle:
      "HAZID & HAZOP ANALYSIS FOR NATURAL GAS INSTALLATION FOR ACEH: KOTA LANGSA, KAB ACEH TAMIANG & KAB DELI SERDANG,",
    detail: "PERUSAHAAN GAS NEGARA (2020)",
    image: pgn,
  },
  {
    id: 20,
    tittle:
      "PLAN INFORMATION SYSTEM CORE SIGHT ENHANCEMENT AT PETRONAS BUKIT TUA GRESIK STATION,",
    detail: " PETRONAS CARIGALI KETAPANG II LTD (2020)",
    image: petronas,
  },
  {
    id: 21,
    tittle:
      "PROVISION FOR SERVICES OF ECA, ITPM AND SCE FOR BUKIT TUA ORF (CONDENSATE)",
    detail: "PETRONAS CARIGALI KETAPANG II LTD. (2020)",
    image: petronas,
  },
  {
    id: 22,
    tittle: "PIPELINE UNCERTAINTY & RELIABILITY ANALYSIS",
    detail: "PETRONAS CARIGALI KETAPANG II LTD (2019)",
    image: petronas,
  },
  {
    id: 23,
    tittle: "PROVISION OF BUKIT TUA ORF GAS METERING SERVICES, ",
    detail: "PETRONAS CARIGALI KETAPANG II LTD. (2019)",
    image: petronas,
  },
  {
    id: 23,
    tittle: "TECHNICAL SERVICE ASSISTANCE FOR RELIABILITY ENGINEER",
    detail: "PETRONAS CARIGALI KETAPANG II LTD (2019)",
    image: petronas,
  },
  {
    id: 24,
    tittle:
      "TEST & COMMISSIONING FOR LRT JABODEBEK PHASE 1 POWER SUPPLY SYSTEM, ",
    detail: " KEMENTERIAN PERHUBUNGAN RI (2019)",
    image: kementrianperhubungan,
  },
  {
    id: 25,
    tittle:
      "QUANTITATIVE RELIABILITY ASSESSMENT WITH DETAIL RCM AIMING EXTENSION, ",
    detail: "PETRONAS CARIGALI KETAPANG II LTD (2019)",
    image: petronas,
  },
  {
    id: 25,
    tittle:
      "SAFETY ENGINEERING ANALYSIS FOR LRT JABODEBEK PHASE 1 POWER SUPPLY SYSTEM, ",
    detail: "KEMENTERIAN PERHUBUNGAN RI. (2019)",
    image: kementrianperhubungan,
  },
  {
    id: 26,
    tittle:
      "SPARE PART CALCULATION (INTEGRATED LOGISTIC SUPPORT) FOR LRT JABODEBEK PHASE 1 POWER SUPPLY SYSTEM,",
    detail: "MINISTRY OF TRANSPORTATION (2019)",
    image: kementrianperhubungan,
  },
  {
    id: 27,
    tittle: "TECHNICAL SERVICE ASSISTANCE FOR OPERATION PHILOSOPHY,",
    detail: "PETRONAS CARIGALI KETAPANG II LTD. (2019)",
    image: petronas,
  },
  {
    id: 28,
    tittle:
      "ASSET MANAGEMENT & RELIABILITY CENTERED MAINTENANCE (RCM) FOR PLTS CIRATA 1MW,",
    detail: "PT PEMBANGKITAN JAWA BALI (PJB) (2018)",
    image: pjb,
  },
  {
    id: 29,
    tittle:
      "RELIABILITY AVAILABILITY MAINTAINABILITY (RAM) ANALYSIS FOR LRT JABODEBEK PHASE 1 POWER SUPPLY SYSTEM",
    detail: "MINISTRY OF TRANSPORTATION (2017)",
    image: kementrianperhubungan,
  },
  {
    id: 30,
    tittle:
      "PENYUSUNAN SRCM BPP 1 DI BAGIAN PLANT RELIABILITY PT PERTAMINA RU-V BALIKPAPAN, ",
    detail: "PERTAMINA RU V BALIKPAPAN (2015)",
    image: pertamina,
  },
  {
    id: 31,
    tittle: "JASA PEMBUATAN DASHBOARD REAL TIME DISPLAY CORESIGHT, ",
    detail: "PERTAMINA (PERSERO) 2016",
    image: pertamina,
  },
  {
    id: 32,
    tittle:
      "PENGEMBANGAN DAN PENAMBAHAN MODUL UNTUK EQUIPMENT DAN PLANT RELIABILITY MONITORING MANAGEMENT SYSTEM KILANG, ",
    detail: "MINISTRY OF TRANSPORTATION (2017)",
    image: pertamina,
  },
  {
    id: 33,
    tittle: "RELIABILITY CENTERED MAINTENANCE SERVICES,",
    detail: "JOB PERTAMINA MEDCO TOMORI (2016)",
    image: pertamina,
  },
];

function ExperienceComponents() {
  const [selectedCategory, setSelectedCategory] = useState("category1");
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    if (selectedCategory === "category1") {
      setSelectedData(dataCategory1);
    } else if (selectedCategory === "category2") {
      setSelectedData(dataCategory2);
    } else {
      setSelectedData(dataCategory3);
    }
  }, [selectedCategory]);

  return (
    <div>
      <div className=" my-10 py-6 grid justify-center  bg-[rgba(240,240,240,0.82)] h-[100vh]">
        <div className="">
          {/* title */}
          <div className="grid grid-rows-2 max-md: py-8">
            <h1 className="text-left text-6xl font-semibold max-md:text-3xl max-md:px-3">
              Experience
            </h1>
            <p className="text-left max-md:px-3 py-3">
              Comprehensive Asset Integrity Services
            </p>
            <div className="flex justify-start ">
              <div className="button ">
                <button
                  className={`${
                    selectedCategory === "category1"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } mx-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-indigo-400 duration-300 w-[138px] h-[48.05px] max-md:w-[128px] max-md:h=[44px]  p-2.5 rounded-[20px] border border-black justify-center items-center gap-2 inline-flex `}
                  onClick={() => setSelectedCategory("category1")}
                >
                  <div className="text-lg max-md:text-sm font-normal font-['Poppins']   ">
                    Engineering
                  </div>
                </button>
                <button
                  className={`${
                    selectedCategory === "category2"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } mx-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-indigo-400 duration-300 w-[138px] h-[48.05px] p-2.5 rounded-[20px] border border-black justify-center items-center gap-2 inline-flex `}
                  onClick={() => setSelectedCategory("category2")}
                >
                  <div className=" hover:text-white text-lg font-normal font-['Poppins']">
                    Procurrement
                  </div>
                </button>
                <button
                  className={`${
                    selectedCategory === "category3"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } mx-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-indigo-400 duration-300 w-[138px] h-[48.05px] p-2.5 rounded-[20px] border border-black justify-center items-center gap-2 inline-flex `}
                  onClick={() => setSelectedCategory("category3")}
                >
                  <div className="text-lg font-normal font-['Poppins']">
                    Training
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className=" bg-[#F5F5F5] shadow-xl hover:shadow-2xl transition ease-in-out delay-150 hover:translate-y-1  backdrop-red overflow-y-scroll h-[600px] max-md:h-[350px] p-16">
            {/* container content */}
            <div className="grid grid-cols-2 gap-y-5 max-md:grid-cols-1 max-md:px-5 ">
              {/* content item? */}
              {selectedData !== null
                ? selectedData.map((experience, index) => (
                    <div className="grid grid-cols-4 max-w-lg h-full justify-center  ">
                      <div className="col-span-1 drop-shadow-xl rounded-2xl">
                        <img className="" src={experience.image} alt="" />
                      </div>
                      <div className="px-4 justify-start col-span-3">
                        <p className="text-start text-sm py-2">
                          <b>{experience.tittle} </b>
                        </p>
                        <p className="text-start text-sm">
                          {experience.detail}
                        </p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponents;
