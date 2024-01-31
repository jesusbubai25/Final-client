import {
    GHI_GTI_data_fail,
    GHI_GTI_data_request,
    GHI_GTI_data_sucess,
    all_inverter_efficiency_fail, all_inverter_efficiency_request,
    all_inverter_efficiency_sucess, clear_errors, energy_monthly_fail,
    energy_monthly_request, energy_monthly_sucess, heatmap_data_fail, heatmap_data_request, heatmap_data_sucess, inverter_efficiency_fail, inverter_efficiency_request,
    inverter_efficiency_sucess,
    inverter_smb_monthly_loss_fail,
    inverter_smb_monthly_loss_request,
    inverter_smb_monthly_loss_sucess,
    inverter_smb_yearly_loss_fail,
    inverter_smb_yearly_loss_request,
    inverter_smb_yearly_loss_sucess,
    powerplant_details_fail,
    powerplant_details_request,
    powerplant_details_sucess,

} from "../constants/dataConstants";


export const efficiency = (state = { efficiencies: null }, action) => {

    switch (action.type) {
        case inverter_efficiency_request:
            return {
                ...state,
                loading: true
            };
        case inverter_efficiency_sucess:
            return {
                ...state,
                loading: false,
                efficiencies: action.payload
            };
        case inverter_efficiency_fail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
            case clear_errors:
                return{
                    ...state,
                    loading:false,
                    error:null
                } 
        default:
            return state;
    }

}



export const monthly_inverter_efficiency = (state = { monthly_inverter_efficiency: null }, action) => {

    switch (action.type) {
        case all_inverter_efficiency_request:
            return {
                ...state,
                loading2: true
            };
        case all_inverter_efficiency_sucess:
            return {
                ...state,
                loading2: false,
                monthly_inverter_efficiency: action.payload
            };
        case all_inverter_efficiency_fail:
            return {
                ...state,
                loading2: false,
                error: action.payload
            };
            case clear_errors:
            return{
                ...state,
                loading:false,
                error:null
            } 
        default:
            return state;
    }

}



export const normalizedEnergyDetails = (state = { energy: null }, action) => {

    switch (action.type) {
        case energy_monthly_request:
            return {
                ...state,
                loading: true
            };
        case energy_monthly_sucess:
            return {
                ...state,
                loading: false,
                energy: action.payload
            };
        case energy_monthly_fail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
            case clear_errors:
            return{
                ...state,
                loading:false,
                error:null
            } 
        default:
            return state;
    }

}

export const GHI_GTI_data = (state = { GHI_GTI_data: null }, action) => {

    switch (action.type) {
        case GHI_GTI_data_request:
            return {
                ...state,
                loading: true
            };
        case GHI_GTI_data_sucess:
            return {
                ...state,
                loading: false,
                GHI_GTI_data: action.payload
            };
        case GHI_GTI_data_fail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
            case clear_errors:
            return{
                ...state,
                loading:false,
                error:null
            } 
        default:
            return state;
    }
}
export const plantDetail = (state = { plantDetail: null }, action) => {

    switch (action.type) {
        case powerplant_details_request:
            return {
                ...state,
                loading: true
            };
        case powerplant_details_sucess:
            return {
                ...state,
                loading: false,
                plantDetail: action.payload
            };
        case powerplant_details_fail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
            case clear_errors:
            return{
                ...state,
                loading:false,
                error:null
            } 
        default:
            return state;
    }
}

export const inverterSmbYearlyLoss = (state = { inverterSmbYearlyLoss: null }, action) => {

    switch (action.type) {
        case inverter_smb_yearly_loss_request:
            return {
                ...state,
                loading: true
            };
        case inverter_smb_yearly_loss_sucess:
            return {
                ...state,
                loading: false,
                inverterSmbYearlyLoss: action.payload
            };
        case inverter_smb_yearly_loss_fail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
            case clear_errors:
            return{
                ...state,
                loading:false,
                error:null
            } 
        default:
            return state;
    }
}

export const inverterSmbMonthlyLoss = (state = { inverterSmbMonthlyLoss: null }, action) => {

    switch (action.type) {
        case inverter_smb_monthly_loss_request:
            return {
                ...state,
                loading2: true
            };
        case inverter_smb_monthly_loss_sucess:
            return {
                ...state,
                loading2: false,
                inverterSmbMonthlyLoss: action.payload
            };
        case inverter_smb_monthly_loss_fail:
            return {
                ...state,
                loading2: false,
                error2: action.payload
            };
            case clear_errors:
            return{
                ...state,
                loading2:false,
                error2:null
            } 
        default:
            return state;
    }
}


export const heatmapData = (state = { heatmapData: null }, action) => {

    switch (action.type) {
        case heatmap_data_request:
            return {
                ...state,
                loading: true
            };
        case heatmap_data_sucess:
            return {
                ...state,
                loading: false,
                heatmapData: action.payload
            };
        case heatmap_data_fail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
            case clear_errors:
            return{
                ...state,
                loading:false,
                error:null
            } 
        default:
            return state;
    }
}

