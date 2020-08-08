import React from 'react'
import { useSelector } from 'react-redux'
import InputForm from './templates/InputForm'
import TableView from './templates/TableView'

export default function Reports() {

    const fieldNames = [
        "title", 
        "type" 
    ]

    const reports = useSelector((state: any) => state.reports) 

    return (
        <div>
            <InputForm controlName={"reports"} fieldNames={fieldNames}  data={reports} />
            <TableView />
        </div>
    )
}
