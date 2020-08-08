import { useDispatch } from "react-redux"

import React, { useState } from 'react'
import { ControllerNames } from "../controllerNames/ControllerNames"

export default function ReduxStorage(data: any, dispatch: any, controllerName: ControllerNames) {

  switch (controllerName) {
    case ControllerNames.Datasource:
      data.map((datasource: any) =>
        dispatch({ type: 'ADD_DATASOURCE', datasource: { ...datasource } })
      )
      break;
    case ControllerNames.Report:
      data.map((report: any) =>
        dispatch({ type: 'ADD_REPORT', report: { ...report } })
      )

      // console.log(data)
      break;

    default:
      break;
  }




}

