 
import {ActionType} from './actionType'


import React, { useState } from 'react'
import { ControllerNames } from "../controllerNames/ControllerNames"

export function cleanDatasources(dispatch: any) {
  dispatch({ type: ActionType.CLEAN_DATASOURCE })
}

export function cleanReports(dispatch: any) {
  dispatch({ type: ActionType.CLEAN_REPORT})
}


export function updateEditFormState(data: any, dispatch: any){

  dispatch({ type: ActionType.EDIT_FORM_STATE,  data })
}

export function  updateControllerNameState(data: any, dispatch: any){
  dispatch({ type: ActionType.CONTROL_NAME_STATE,  data }) 
}

export function updateEditSchemaById(data:any, dispatch:any){
  dispatch({type:ActionType.UPDATE_EDIT_SCHEMA_BY_ID, data}) 
}

export default function saveToRedux(data: any, dispatch: any, controllerName: ControllerNames) {

  switch (controllerName) {
    case ControllerNames.Datasource: 
      cleanDatasources(dispatch)
      data.map((datasource: any) =>
        dispatch({ type: ActionType.ADD_DATASOURCE, datasource: { ...datasource } })
      )
      break;
    case ControllerNames.Report:
      cleanReports(dispatch)
      data.map((report: any) =>
        dispatch({ type: ActionType.ADD_REPORT, report: { ...report } })
      )

      // console.log(data)
      break;

    default:
      break;
  }

}
