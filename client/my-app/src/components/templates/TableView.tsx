import React, { useEffect } from 'react'
import { Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, fetchData } from '../../api/api'
import ReduxStorage, { updateControllerNameState, updateEditFormState } from '../../reducer/dispatch'
import saveToRedux from '../../reducer/dispatch'

export default function TableView(props: any) {

    const { controllerName, fieldNames, data } = props
    const dispatch = useDispatch()

    useEffect(() => {
        fetchData(controllerName).then(dataFromServer => saveToRedux(dataFromServer, dispatch, controllerName))
    }, [])


    const deleteRow = (id: any) => {
        
        deleteData(controllerName, id)
            .then(() => fetchData(controllerName))
            .then(data => saveToRedux(data, dispatch, controllerName))
    }

    const editHandler=(id:any)=>{
        updateEditFormState(true,dispatch)
        updateControllerNameState(controllerName, dispatch) 
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>

                        {
                            fieldNames?.map((fieldName: string[]) => <th>{fieldName}</th>)
                        }

                        { <td></td>}

                    </tr>
                </thead>
                <tbody>

                    {
                        data?.map((schema: any, index: number) =>
                            <tr key={schema._id}>
                                <td>{index + 1}</td>

                                {
                                    fieldNames?.map((fieldName: any) =>
                                        <td>{schema[fieldName]}</td> 
                                    )
                                   
                                }

                                {  
                                    <td>
                                     <button className="btn btn-secondary btn-sm"   onClick={(id: any) => editHandler(schema._id)} >  Change </button> &nbsp;
                                     <button className="btn btn-danger btn-sm" type="submit"  onClick={(id: any) => deleteRow(schema._id)}>  Delete </button>
                                    </td>
                                }

                            </tr>

                        )
                    }


                </tbody>
            </Table>
        </div>
    )
}
