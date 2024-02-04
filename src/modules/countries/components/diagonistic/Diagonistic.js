import React from "react";
import { useLocation } from "react-router-dom";
import "../CountryHeader.css";
import PageURL from "../../../../constants/PageURL";
import InverterEfficiency from "./InverterEfficiency";
import SCBSMB from "./SCBSMB";

import CountryHeader2 from "../ProjectDetails/CountryHeader2";
import ProjectDetailBody from "../ProjectDetails/ProjectDetailBody";
import ProjOverView from "../projectOverView/ProjOverView";
import PresCripModel from "../prescriptiveModel/PresCripModel";
import LossFlow2 from "./LossFlow2";
import FaultTree from "./FaultTree";
import GenOverView2 from "../generationOverView/GenOverView2";
import Detailed3 from "./Detailed3";
import HeatmapInverter1 from "./HeatmapInverter1";

const Diagonistic = () => {
  const location = useLocation();

  return (
    <div style={{ height: "100%" }} >
      <div className="country-header">
        {/* <ProjectDetails /> */}
        {/* <CountryHeader/> */}
        {/* <ProjectDetailsHeader/> */}
        <CountryHeader2 />
      </div>
      {location?.pathname === PageURL.INDIA_DIAGONISTIC_DETAILED && <Detailed3
     />}
      {/* {location?.pathname === PageURL.INDIA_LOSS_FLOW && <LossFlow />} */}
      {location?.pathname === PageURL.INDIA_LOSS_FLOW && <LossFlow2 />}
      {location?.pathname === PageURL.INDIA_INVERTER_EFFICIENCY && <InverterEfficiency />
      
      }
      {location?.pathname === PageURL.PROJECT_DETAILS && <ProjectDetailBody />}
      {location?.pathname === PageURL.INDIA_GEN_SUMMARY && <GenOverView2 />}
      {location?.pathname === PageURL.INDIA_PROJ_OVERVIEW && <ProjOverView />}
      {location?.pathname === PageURL.INDIA_PRES_MODEL_Loss_Flow && <PresCripModel />}
      {location?.pathname === PageURL.INDIA_PRES_MODEL_Fault_Tree && <FaultTree />}
      {location?.pathname === PageURL.INDIA_INVERTER1_HEATMAP_DIAGRAM && <HeatmapInverter1 />}
      {location?.pathname === PageURL.INDIA_INVERTER2_HEATMAP_DIAGRAM && <HeatmapInverter1 />}
      {location?.pathname === PageURL.INDIA_INVERTER3_HEATMAP_DIAGRAM && <HeatmapInverter1 />}
      {location?.pathname === PageURL.INDIA_INVERTER4_HEATMAP_DIAGRAM && <HeatmapInverter1/>}


      {
        (
          location?.pathname === PageURL.INDIA_INVERTER1_SCB_SMB1 ||
          location?.pathname === PageURL.INDIA_INVERTER1_SCB_SMB2 ||
          location?.pathname === PageURL.INDIA_INVERTER1_SCB_SMB3 ||
          location?.pathname === PageURL.INDIA_INVERTER1_SCB_SMB4 ||
          location?.pathname === PageURL.INDIA_INVERTER1_SCB_SMB5 ||
          location?.pathname === PageURL.INDIA_INVERTER1_SCB_SMB6 ||
          location?.pathname === PageURL.INDIA_INVERTER1_SCB_SMB7 ||
          location?.pathname === PageURL.INDIA_INVERTER1_SCB_SMB8 ||
          location?.pathname === PageURL.INDIA_INVERTER1_SCB_SMB9 ||
          location?.pathname === PageURL.INDIA_INVERTER1_SCB_SMB10 ||
          location?.pathname === PageURL.INDIA_INVERTER1_SCB_SMB11 ||

          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB1 ||
          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB2 ||
          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB3 ||
          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB4 ||
          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB5 ||
          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB6 ||
          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB7 ||
          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB8 ||
          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB9 ||
          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB10 ||
          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB11  ||
          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB11 ||
          location?.pathname === PageURL.INDIA_INVERTER2_SCB_SMB12 ||

          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB1 ||
          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB2 ||
          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB3 ||
          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB4 ||
          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB5 ||
          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB6 ||
          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB7 ||
          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB8 ||
          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB9 ||
          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB10 ||
          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB11  ||
          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB11 ||
          location?.pathname === PageURL.INDIA_INVERTER3_SCB_SMB12 || 

          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB1 ||
          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB2 ||
          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB3 ||
          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB4 ||
          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB5 ||
          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB6 ||
          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB7 ||
          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB8 ||
          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB9 ||
          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB10 ||
          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB11  ||
          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB11 ||
          location?.pathname === PageURL.INDIA_INVERTER4_SCB_SMB12 



        )

        && <SCBSMB />}


    </div>
  );
};

export default Diagonistic;
