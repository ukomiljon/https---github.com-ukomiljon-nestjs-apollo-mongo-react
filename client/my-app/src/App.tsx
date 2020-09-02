import React from 'react';
import Datasources from './components/Datasources';
import './App.css';

import { createStore } from 'redux'
import reducer from './reducer/reducer';
import { Provider, useSelector } from 'react-redux';
import Reports from './components/Reports';
import InputForm from './components/templates/InputForm';
import { ControllerNames } from './controllerNames/ControllerNames';



function App() {

  let datasourcesFieldNames = [
    "name",
    "connection",
    "port",
    "user",
    "password",
    "databaseName"
  ]

  let reportFieldNames = [
    "title",
    "type"
]


  const editFormState = useSelector((state: any) => state.editFormState)
  const controllerNameState =  useSelector((state: any) => state.controllerNameState)
  const editSchemaId=useSelector((state: any) => state.editSchemaById)

  let fieldNames;
  switch(controllerNameState){
    case ControllerNames.Datasource:
      fieldNames=datasourcesFieldNames
      break;
      case ControllerNames.Report:
        fieldNames=reportFieldNames
      break;
  }

  let view = <div>  <InputForm controllerName={controllerNameState} fieldNames={fieldNames} editSchemaId={editSchemaId} /></div>

  if (!editFormState) {
    view = <div>
      <Datasources />
      <Reports />
    </div>
  }

  return (
    
      <div className="App">
        {
          view
        }
      </div>
     
  );
}

export default App;
