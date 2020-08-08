import React, { useEffect } from 'react'
import { Form, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fatchData } from '../../api/api'
import ReduxStorage from '../../reducer/dispatch'

export default function TableView(props: any) {

    const { controllerName, fieldNames, data } = props
    const dispatch = useDispatch()

    useEffect(() => { 
        fatchData(controllerName).then(data => ReduxStorage(data, dispatch, controllerName))
    }, [])
 

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>

                        {
                            fieldNames?.map((fieldName: string[]) => <th>{fieldName}</th>)
                        } 

                    </tr>
                </thead>
                <tbody>

                    {
                        data?.map((schema: any, index: number) =>
                            <tr key={schema._id}>
                                <td>{index + 1}</td>

                                {
                                    fieldNames?.map((fieldName: any) => <td>{schema[fieldName]}</td>)
                                } 

                            </tr>

                        )
                    }


                </tbody>
            </Table>
        </div>
    )
}
