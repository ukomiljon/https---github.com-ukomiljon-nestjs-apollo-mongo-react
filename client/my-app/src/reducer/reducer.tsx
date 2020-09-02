import { ActionType } from './actionType'

interface reactBI {
    datasources: any[],
    reports: any[],
    editFormState: false,
    controllerNameState: string,
    editSchemaById: string
}

const initReactBI: reactBI = {
    datasources: [],
    reports: [],
    editFormState: false,
    controllerNameState: "",
    editSchemaById: "",
}

export default function reducer(state = initReactBI, action: any) {

    if (action.type === ActionType.EDIT_FORM_STATE)
        state.editFormState = action.data

    if (action.type === ActionType.CONTROL_NAME_STATE)
        state.controllerNameState = action.data

    if (action.type === ActionType.UPDATE_EDIT_SCHEMA_BY_ID)
        state.editSchemaById = action.data

    if (action.type == ActionType.CLEAN_DATASOURCE) {
        state.datasources = []
    }

    if (action.type == ActionType.CLEAN_REPORT) {
        state.reports = []
    }

    if (action.type == ActionType.ADD_DATASOURCE) {

        return {
            ...state,
            datasources: [...state.datasources, action.datasource],
        }
    }

    if (action.type == ActionType.ADD_REPORT) {

        return {
            ...state,
            reports: [...state.reports, action.report],
        }
    }

    return state
}