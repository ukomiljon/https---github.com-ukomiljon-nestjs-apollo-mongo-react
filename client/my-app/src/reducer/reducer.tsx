

interface reactBI {
    datasources: any[],
    reports:any[]
}

const initReactBI: reactBI = {
    datasources: [],
    reports:[]
}

export default function reducer(state = initReactBI, action: any) {

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