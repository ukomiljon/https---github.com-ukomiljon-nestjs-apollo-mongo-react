

interface reactBI {
    datasources: any[],
    reports: any[],
    editFormState:false,
    controllerNameState:string
   
}

const initReactBI: reactBI = {
    datasources: [],
    reports: [],
    editFormState:false,
    controllerNameState:""
}

export default function reducer(state = initReactBI, action: any) {

    if(action.type ==="EDIT_FORM_STATE")
    state.editFormState = action.data

    if(action.type ==="CONTROL_NAME_STATE")
    state.controllerNameState = action.data

    if (action.type == 'CLEAN_DATASOURCE') {
        state.datasources = []
    }


    if (action.type == 'CLEAN_REPORT') {
        state.reports = []
    }

    if (action.type == 'ADD_DATASOURCE') {

        return {
            ...state,
            datasources: [...state.datasources, action.datasource],
        }
    }

    if (action.type == 'ADD_REPORT') {

        return {
            ...state,
            reports: [...state.reports, action.report],
        }
    }

    return state
}