import {
    GHI_GTI_data_fail, GHI_GTI_data_request, GHI_GTI_data_sucess,
    all_inverter_efficiency_fail, all_inverter_efficiency_request,
    all_inverter_efficiency_sucess,
    energy_monthly_fail, energy_monthly_request, energy_monthly_sucess, heatmap_data_fail, heatmap_data_request, heatmap_data_sucess, inverter_efficiency_fail,
    inverter_efficiency_request, inverter_efficiency_sucess, inverter_smb_monthly_loss_fail, inverter_smb_monthly_loss_request, inverter_smb_monthly_loss_sucess, inverter_smb_yearly_loss_fail, inverter_smb_yearly_loss_request, inverter_smb_yearly_loss_sucess, powerplant_details_fail, powerplant_details_request, powerplant_details_sucess
} from "../constants/dataConstants"
import axios from "axios"

// axios.create({
//     baseURL: "http://localhost:8000",
//     withCredentials: true
// })

// axios.create({
//     baseURL: "http://195.35.21.41:8000",
//     withCredentials: true
// })


export const Inverter_Efficiency = () => async (dispatch) => {
    try {
        dispatch({ type: inverter_efficiency_request })

        // const { data } = await axios.get("/inverter-efficiency");
        const { data } = await axios.get("http://195.35.21.41:8000/inverter-efficiency");
        dispatch({ type: inverter_efficiency_sucess, payload: data.newdata })


    } catch (error) {
        dispatch({ type: inverter_efficiency_fail, payload: error?.response?.data?.error || error?.message })
    }
}


export const All_Inverter_Efficiency_Monthly = () => async (dispatch) => {
    try {
        dispatch({ type: all_inverter_efficiency_request })

        // const { data } = await axios.get("/inverter-efficiency-monthly");
        const { data } = await axios.get("http://195.35.21.41:8000/inverter-efficiency-monthly");

        dispatch({ type: all_inverter_efficiency_sucess, payload: data.newresult })


    } catch (error) {
        dispatch({ type: all_inverter_efficiency_fail, payload: error?.response?.data?.error || error?.message })
    }
}


export const normalizedEnergyDetails = () => async (dispatch) => {
    try {
        dispatch({ type: energy_monthly_request })

        // const { data } = await axios.get("/normalizedEnergyDetails");
        const { data } = await axios.get("http://195.35.21.41:8000/normalizedEnergyDetails");
        dispatch({ type: energy_monthly_sucess, payload: data })


    } catch (error) {
        dispatch({ type: energy_monthly_fail, payload: error?.response?.data?.error || error?.message })
    }
}

export const GHI_GTI_data_action = () => async (dispatch) => {
    try {
        dispatch({ type: GHI_GTI_data_request })

        // const { data } = await axios.get("/GHI-GTI-data");
        const { data } = await axios.get("http://195.35.21.41:8000/GHI-GTI-data");
        dispatch({ type: GHI_GTI_data_sucess, payload: data })

    } catch (error) {
        dispatch({ type: GHI_GTI_data_fail, payload: error?.response?.data?.error || error?.message })
    }
}

export const powerPlantDetail = () => async (dispatch) => {
    try {
        dispatch({ type: powerplant_details_request })

        // const { data } = await axios.get("/powerPlantDetails");
        const { data } = await axios.get("http://195.35.21.41:8000/powerPlantDetails");
        dispatch({ type: powerplant_details_sucess, payload: { data1: data.result, data2: data.result2, inverter_details: data.result3 } })

    } catch (error) {
        dispatch({ type: powerplant_details_fail, payload: error?.response?.data?.error || error?.message })
    }
}

export const InverterSmbYearlyLoss = (inverter, smb) => async (dispatch) => {
    try {
        dispatch({ type: inverter_smb_yearly_loss_request })

        // const { data } = await axios.get("/inverter-smb-yearly-loss");
        const { data } = await axios.get("http://195.35.21.41:8000/inverter-smb-yearly-loss");
        const newdata = [];
        const keys = Object.keys(data?.result?.[inverter - 1]) || [];
        const values = Object.values(data?.result?.[inverter - 1]) || [];
        let minValue = Infinity, maxValue = -Infinity
        for (let i = smb * 12 - 12 + 1; i <= smb * 12; i++) {
            let obj = {};
            let name2 = keys[i]?.substring(0, 4) + `${inverter}` + keys[i]?.substring(5, keys[i].length);
            obj.name = name2;
            obj.loss = values[i] || 0
            if (values[i] > maxValue) maxValue = values[i];
            if (values[i] < minValue) minValue = values[i];
            newdata.push(obj)
        }
        dispatch({ type: inverter_smb_yearly_loss_sucess, payload: { data: newdata, minValue, maxValue } })
    } catch (error) {
        dispatch({ type: inverter_smb_yearly_loss_fail, payload: error?.response?.data?.error || error?.message })
    }
}

export const InverterSmbMonthlyLoss = (inverter, smb) => async (dispatch) => {
    try {
        dispatch({ type: inverter_smb_monthly_loss_request })

        // const { data } = await axios.get(`/inverter-smb-monthly-loss/${inverter}`);
        const { data } = await axios.get(`http://195.35.21.41:8000/inverter-smb-monthly-loss/${inverter}`);
        const cpyData = data?.result || [];
        const finalResult = [];
        let minValue = Infinity, maxValue = -Infinity
        for (let i = 0; i < cpyData?.length; i++) {
            const keys = Object.keys(cpyData[i]) || [];
            const values = Object.values(cpyData[i]) || [];
            let obj = {};
            obj.name = values[0];
            for (let i = smb * 12 - 12 + 4; i < smb * 12 + 4; i++) {
                obj[keys[i]] = values[i] || 0;
                if (values[i] > maxValue) maxValue = values[i];
                if (values[i] < minValue) minValue = values[i];
            }
            finalResult.push(obj);
        }
        console.log(finalResult)

        dispatch({ type: inverter_smb_monthly_loss_sucess, payload: { data: finalResult, minValue, maxValue } })
    } catch (error) {
        dispatch({ type: inverter_smb_monthly_loss_fail, payload: error?.response?.data?.error || error?.message })
    }
}



export const HeatMapData = (inverter) => async (dispatch) => {
    try {
        dispatch({ type: heatmap_data_request })

        // const { data } = await axios.get(`/inverter-smb-monthly-loss/${inverter}`);
        const { data } = await axios.get(`http://195.35.21.41:8000/inverter-smb-monthly-loss/${inverter}`);
        const cpyData = data?.result || [];
        const finalResult = [];

        let mn = Infinity, mx = -Infinity;

        for (let i = 7; i < cpyData?.length + 7; i++) {
            let obj = {};
            let arr = [];

            if (i < 12) {
                const keys = Object.keys(cpyData[i]) || [];
                const values = Object.values(cpyData[i]) || [];
                obj.name = values[0];
                for (let i = 4; i < keys.length; i += 12) {
                    if (values[i] < mn) mn = values[i];
                    if (values[i] > mx) mx = values[i]

                    arr.push({
                        x: convertToUppercase(keys[i]),
                        y: values[i]
                    });

                }
                obj.data = arr;


            }
            else if (i >= 12) {
                const keys = Object.keys(cpyData[i - 12]) || [];
                const values = Object.values(cpyData[i - 12]) || [];
                obj.name = values[0];
                for (let i = 4; i < keys.length; i += 12) {
                    if (values[i] < mn) mn = values[i];
                    if (values[i] > mx) mx = values[i]
                    arr.push({
                        x: convertToUppercase(keys[i]),
                        y: values[i]
                    });
                }
                obj.data = arr;
            }
            finalResult.push(obj)
        }
        dispatch({ type: heatmap_data_sucess, payload: { data: finalResult, minValue: mn, maxValue: mx } })
    } catch (error) {
        dispatch({ type: heatmap_data_fail, payload: error?.response?.data?.error || error?.message })
    }
}


const convertToUppercase = (str) => {

    let newStr = "";
    for (let i = 0; i < str?.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') newStr += str[i].toUpperCase()
        else newStr += str[i];
    }
    return newStr;

}




