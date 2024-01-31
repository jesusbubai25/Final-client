import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import PageURL from "../constants/PageURL";
import './Dropdown.css'

export default function DropDown(props) {

  const navigate = useNavigate();

  const [checkedData, setCheckedData] = React.useState({
    projectDetail: false,
    Diagonistic: false,
    Inverter: false,
    Inverter1: false,
    Inverter2: false,
    Inverter3: false,
    Inverter4: false,
    checkedData: false

  })
  const onclickHandler = (name) => {
    let checked = { ...checkedData };
    for (let key in checked) {
      if (key === name) {
        checked[key] = !checked[key];
      } else {
        checked[key] = false
      }
    }
    setCheckedData(checked)
  }
  const selectValue = () => {
  }

  return (
    <div >
      <FormControl sx={{ m: 1, minWidth: 120 }}  >
        <InputLabel
          htmlFor="grouped-select"
          style={{ color: "black", fontWeight: "bolder" }}
        >
          {props?.label ? props.label : "Country"}
        </InputLabel>
        <Select
          defaultValue=""
          id="grouped-select"
          label="Grouping"
          onChange={selectValue}
          style={{ backgroundColor: "#ed7d31" }}
        >

          <ListSubheader
            style={{ fontWeight: "bolder", color: "#ed7d31", fontSize: "20px" }}
          >
            India
          </ListSubheader>

          <ListSubheader className="SubHeader"

          >
            <span
              // onClick={() => setProjectDetail(!projectDetail)}
              onClick={() => onclickHandler("projectDetail")}
            >Details<i class={`fa-solid fa-angle-${checkedData.projectDetail ? "up" : "down"}`}></i></span>

          </ListSubheader>
          {
            checkedData.projectDetail &&
            <>
              <MenuItem
                value={1}
                onClick={() => {
                  navigate(PageURL.INDIA_PROJ_OVERVIEW);
                }}
              >
                Project OverView
              </MenuItem>
              <MenuItem
                value={2}
                onClick={() => {
                  navigate(PageURL.INDIA_GEN_SUMMARY);
                }}
              >
                Generation Summary
              </MenuItem>
              <MenuItem
                value={3}
                onClick={() => {
                  navigate(PageURL.INDIA_PRES_MODEL);
                }}
              >
                Prescriptive Model
              </MenuItem>
            </>
          }
          <ListSubheader className="SubHeader"><span
            // onClick={() => setDiagonistic(!Diagonistic)}
            onClick={() => onclickHandler('Diagonistic')}
          >Diagonistic Model <i class={`fa-solid fa-angle-${checkedData.Diagonistic ? "up" : "down"}`}></i></span> </ListSubheader>
          {/* {
            Diagonistic &&

            <MenuItem

              value={5}
              onClick={() => {
                navigate(PageURL.INDIA_DIAGONISTIC_DETAILED);
              }}
            >
              Detailed Summary
            </MenuItem>
          }
          {
            Diagonistic && <MenuItem
              value={6}
              onClick={() => {
                navigate(PageURL.INDIA_LOSS_FLOW);
              }}
            >
              Loss Flow Diagram
            </MenuItem>
          } */}

          {
            checkedData.Diagonistic &&
            <>
              <MenuItem
                value={5}
                onClick={() => {
                  navigate(PageURL.INDIA_DIAGONISTIC_DETAILED);
                }}
              >
                Detailed Summary
              </MenuItem>

              <MenuItem
                value={6}
                onClick={() => {
                  navigate(PageURL.INDIA_LOSS_FLOW);
                }}
              >
                Loss Flow Diagram
              </MenuItem>
            </>

          }



          <ListSubheader className="SubHeader"><span onClick={() =>
            onclickHandler('Inverter')
            //  setInverter(!Inverter)
          } >Inverters <i class={`fa-solid fa-angle-${checkedData.Inverter ? "up" : "down"}`}></i></span>  </ListSubheader>

          {
            checkedData.Inverter &&

            <MenuItem
              value={7}
              onClick={() => {
                navigate(PageURL.INDIA_INVERTER_EFFICIENCY);
              }}
            >
              Inverter Efficiency
            </MenuItem>

          }

          <ListSubheader className="SubHeader"> <span
            onClick={() =>
              onclickHandler('Inverter1')
              // setInverter1(!Inverter1)
            } >Inverter1 <i class={`fa-solid fa-angle-${checkedData.Inverter1 ? "up" : "down"}`}></i></span></ListSubheader>
          {checkedData.Inverter1 &&
            <>
              <MenuItem
                value={8}
                onClick={() => {
                  navigate(PageURL.INDIA_INVERTER1_SCB_SMB1);
                }}
              >
                SCB/SMB1
              </MenuItem>
              <MenuItem
                value={9}
                onClick={() => {
                  navigate(PageURL.INDIA_INVERTER1_SCB_SMB2);
                }}
              >
                SCB/SMB2
              </MenuItem>
              <MenuItem
                value={10}
                onClick={() => {
                  navigate(PageURL.INDIA_INVERTER1_SCB_SMB2);
                }}
              >
                SCB/SMB3
              </MenuItem>
              <MenuItem value={11}>SCB/SMB4</MenuItem>
              <MenuItem value={12}>SCB/SMB5</MenuItem>
              <MenuItem value={13}>SCB/SMB6</MenuItem>
              <MenuItem value={14}>SCB/SMB7</MenuItem>
              <MenuItem value={15}>SCB/SMB8</MenuItem>
              <MenuItem value={16}>SCB/SMB9</MenuItem>
              <MenuItem value={17}>SCB/SMB10</MenuItem>
              <MenuItem value={18}>SCB/SMB11</MenuItem>
              <MenuItem value={19}>String Loss Diagram</MenuItem>
            </>
          }
          <ListSubheader className="SubHeader"> <span

            onClick={() => onclickHandler('Inverter2')}
          //  onClick={() => setInverter2(!Inverter2)} 
          >Inverter2 <i class={`fa-solid fa-angle-${checkedData.Inverter2 ? "up" : "down"}`}></i></span></ListSubheader>
          {
            checkedData.Inverter2 &&
            <>

              <MenuItem value={20}>SCB/SMB1</MenuItem>
              <MenuItem value={21}>SCB/SMB2</MenuItem>
              <MenuItem value={22}>SCB/SMB3</MenuItem>
              <MenuItem value={23}>SCB/SMB4</MenuItem>
              <MenuItem value={24}>SCB/SMB5</MenuItem>
              <MenuItem value={25}>SCB/SMB6</MenuItem>
              <MenuItem value={26}>SCB/SMB7</MenuItem>
              <MenuItem value={27}>SCB/SMB8</MenuItem>
              <MenuItem value={28}>SCB/SMB9</MenuItem>
              <MenuItem value={29}>SCB/SMB10</MenuItem>
              <MenuItem value={30}>String Loss Diagram</MenuItem>
            </>
          }
          <ListSubheader className="SubHeader"><span
            onClick={() => onclickHandler('Inverter3')}
          //  onClick={() => setInverter3(!Inverter3)}
          >Inverter3 <i class={`fa-solid fa-angle-${checkedData.Inverter3 ? "up" : "down"}`}></i></span> </ListSubheader>
          {
            checkedData.Inverter3 &&
            <>

              <MenuItem value={31}>SCB/SMB1</MenuItem>
              <MenuItem value={32}>SCB/SMB2</MenuItem>
              <MenuItem value={33}>SCB/SMB3</MenuItem>
              <MenuItem value={34}>SCB/SMB4</MenuItem>
              <MenuItem value={35}>SCB/SMB5</MenuItem>
              <MenuItem value={36}>SCB/SMB6</MenuItem>
              <MenuItem value={37}>SCB/SMB7</MenuItem>
              <MenuItem value={38}>SCB/SMB8</MenuItem>
              <MenuItem value={39}>SCB/SMB9</MenuItem>
              <MenuItem value={40}>SCB/SMB10</MenuItem>
              <MenuItem value={41}>SCB/SMB11</MenuItem>
              <MenuItem value={42}>String Loss Diagram</MenuItem>
            </>
          }
          <ListSubheader className="SubHeader last_item"> <span
            onClick={() => onclickHandler('Inverter4')}
          //  onClick={() => setInverter4(!Inverter4)}
          >Inverter3 <i class={`fa-solid fa-angle-${checkedData.Inverter4 ? "up" : "down"}`}></i></span></ListSubheader>
          {
            checkedData.Inverter4 &&
            <>

              <MenuItem value={43}>SCB/SMB1</MenuItem>
              <MenuItem value={44}>SCB/SMB2</MenuItem>
              <MenuItem value={45}>SCB/SMB3</MenuItem>
              <MenuItem value={46}>SCB/SMB4</MenuItem>
              <MenuItem value={47}>SCB/SMB5</MenuItem>
              <MenuItem value={48}>SCB/SMB6</MenuItem>
              <MenuItem value={49}>SCB/SMB7</MenuItem>
              <MenuItem value={50}>SCB/SMB8</MenuItem>
              <MenuItem value={51}>SCB/SMB9</MenuItem>
              <MenuItem value={52}>SCB/SMB10</MenuItem>
              <MenuItem value={53}>SCB/SMB11</MenuItem>
              <MenuItem value={54}>String Loss Diagram</MenuItem>
            </>
          }
        </Select>
      </FormControl>
    </div>
  );
}
