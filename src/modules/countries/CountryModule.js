import React, { useEffect } from "react";
import CountryGuard from "./guard/CountryGuard";
import CountryDefault from "./components/CountryDefault";
import { useLocation } from "react-router-dom";
import PageURL from "../../constants/PageURL";
import DiagonisticGuard from "./guard/DiagonisticGuard";
import Diagonistic from "./components/diagonistic/Diagonistic";

const CountryModule = () => {

  const location = useLocation();

  useEffect(() => {

  }, [])

  switch (location.pathname) {
    case PageURL.COUNTRYDEFAULT:
      return (
        <CountryGuard>
          <CountryDefault />
        </CountryGuard>
      );
    case PageURL.INDIA_PROJ_OVERVIEW:
    case PageURL.INDIA_GEN_SUMMARY:
    case PageURL.PROJECT_DETAILS:

    case PageURL.INDIA_PRES_MODEL_Loss_Flow:
    case PageURL.INDIA_PRES_MODEL_Fault_Tree:
    case PageURL.INDIA_DIAGONISTIC_DETAILED:
    case PageURL.INDIA_LOSS_FLOW:
    case PageURL.INDIA_INVERTER_EFFICIENCY:

    case PageURL.INDIA_INVERTER1_SCB_SMB1:
    case PageURL.INDIA_INVERTER1_SCB_SMB2:
    case PageURL.INDIA_INVERTER1_SCB_SMB3:
    case PageURL.INDIA_INVERTER1_SCB_SMB4:
    case PageURL.INDIA_INVERTER1_SCB_SMB5:
    case PageURL.INDIA_INVERTER1_SCB_SMB6:
    case PageURL.INDIA_INVERTER1_SCB_SMB7:
    case PageURL.INDIA_INVERTER1_SCB_SMB8:
    case PageURL.INDIA_INVERTER1_SCB_SMB9:
    case PageURL.INDIA_INVERTER1_SCB_SMB10:
    case PageURL.INDIA_INVERTER1_SCB_SMB11:

    case PageURL.INDIA_INVERTER2_SCB_SMB1:
    case PageURL.INDIA_INVERTER2_SCB_SMB2:
    case PageURL.INDIA_INVERTER2_SCB_SMB3:
    case PageURL.INDIA_INVERTER2_SCB_SMB4:
    case PageURL.INDIA_INVERTER2_SCB_SMB5:
    case PageURL.INDIA_INVERTER2_SCB_SMB6:
    case PageURL.INDIA_INVERTER2_SCB_SMB7:
    case PageURL.INDIA_INVERTER2_SCB_SMB8:
    case PageURL.INDIA_INVERTER2_SCB_SMB9:
    case PageURL.INDIA_INVERTER2_SCB_SMB10:
    case PageURL.INDIA_INVERTER2_SCB_SMB11:
    case PageURL.INDIA_INVERTER2_SCB_SMB12:

    case PageURL.INDIA_INVERTER3_SCB_SMB1:
    case PageURL.INDIA_INVERTER3_SCB_SMB2:
    case PageURL.INDIA_INVERTER3_SCB_SMB3:
    case PageURL.INDIA_INVERTER3_SCB_SMB4:
    case PageURL.INDIA_INVERTER3_SCB_SMB5:
    case PageURL.INDIA_INVERTER3_SCB_SMB6:
    case PageURL.INDIA_INVERTER3_SCB_SMB7:
    case PageURL.INDIA_INVERTER3_SCB_SMB8:
    case PageURL.INDIA_INVERTER3_SCB_SMB9:
    case PageURL.INDIA_INVERTER3_SCB_SMB10:
    case PageURL.INDIA_INVERTER3_SCB_SMB11:
    case PageURL.INDIA_INVERTER3_SCB_SMB12:

    case PageURL.INDIA_INVERTER4_SCB_SMB1:
    case PageURL.INDIA_INVERTER4_SCB_SMB2:
    case PageURL.INDIA_INVERTER4_SCB_SMB3:
    case PageURL.INDIA_INVERTER4_SCB_SMB4:
    case PageURL.INDIA_INVERTER4_SCB_SMB5:
    case PageURL.INDIA_INVERTER4_SCB_SMB6:
    case PageURL.INDIA_INVERTER4_SCB_SMB7:
    case PageURL.INDIA_INVERTER4_SCB_SMB8:
    case PageURL.INDIA_INVERTER4_SCB_SMB9:
    case PageURL.INDIA_INVERTER4_SCB_SMB10:
    case PageURL.INDIA_INVERTER4_SCB_SMB11:
    case PageURL.INDIA_INVERTER4_SCB_SMB12:
    case PageURL.INDIA_INVERTER1_HEATMAP_DIAGRAM:
    case PageURL.INDIA_INVERTER2_HEATMAP_DIAGRAM:
    case PageURL.INDIA_INVERTER3_HEATMAP_DIAGRAM:
    case PageURL.INDIA_INVERTER4_HEATMAP_DIAGRAM:

      return (
        <DiagonisticGuard>
          <Diagonistic />
        </DiagonisticGuard>

      );
  }

};

export default CountryModule;
