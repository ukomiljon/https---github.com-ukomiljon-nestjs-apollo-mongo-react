import { useDispatch } from "react-redux"

import React, { useState } from 'react'
import { ControllerNames } from "../controllerNames/ControllerNames"

export function cleanDatasources(dispatch: any) {
  dispatch({ type: 'CLEAN_DATASOURCE' })
}

export function cleanReports(dispatch: any) {
  dispatch({ type: 'CLEAN_REPORT' })
}


export function updateEditFormState(data: any, dispatch: any){

  dispatch({ type: 'EDIT_FORM_STATE',  data })
}

export function  updateControllerNameState(data: any, dispatch: any){
  dispatch({ type: 'CONTROL_NAME_STATE',  data }) 
}

export default function saveToRedux(data: any, dispatch: any, controllerName: ControllerNames) {

  switch (controllerName) {
    case ControllerNames.Datasource: 
      cleanDatasources(dispatch)
      data.map((datasource: any) =>
        dispatch({ type: 'ADD_DATASOURCE', datasource: { ...datasource } })
      )
      break;
    case ControllerNames.Report:
      cleanReports(dispatch)
      data.map((report: any) =>
        dispatch({ type: 'ADD_REPORT', report: { ...report } })
      )

      // console.log(data)
      break;

    default:
      break;
  }




}

