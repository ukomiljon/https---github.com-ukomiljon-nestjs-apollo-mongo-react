import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { createData, fetchData, updateData, fetchDataById } from '../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import saveToRedux, { updateEditFormState } from '../../reducer/dispatch'

export default function InputForm(props: any) {
    const editFormState = useSelector((state: any) => state.editFormState)
    
    const { controllerName, fieldNames, editSchemaId } = props

    const [data, setData] = useState({})

    const dispatch = useDispatch()

    useEffect(() => {

        if (editFormState) {
            fetchDataById(controllerName, editSchemaId).then(dataFromServer => {
                setData(dataFromServer)
                console.log(editSchemaId, dataFromServer)
            })
        }

    }, [])

    const submitData = (e: any) => {
        e.preventDefault()

        if (!editFormState)
            createData(controllerName, data)
        else
            updateData(controllerName, data, editSchemaId)

        fetchData(controllerName)
            .then(dataFromServer => saveToRedux(dataFromServer, dispatch, controllerName))

        updateEditFormState(false, dispatch)
    }

    const onChangeInput = (e: any) => {

        setData(
            {
                ...data, // const json = {name:'abc', age:12}, {...json} == {name:'abc', age:12}
                [e.target.id]: e.target.value // {...json, age:12} == {name:'abc', age:20}
            })
    }

    const readFiledsByKey = (key: any, data: any) => {
        return data[key]
    }


    return (
        <div>

            <Form>

                {

                    fieldNames.map((fieldName: any) => {

                        let inputType = "text"
                        if (fieldName == "password") inputType = "password"

                        return <Form.Group as={Row}  >
                            <Form.Label column sm="2">
                                {fieldName}:
                        </Form.Label>
                            <Col sm="10">
                                <Form.Control type={inputType} placeholder={"Enter " + fieldName}
                                    onChange={onChangeInput}
                                    id={fieldName}
                                    value={data ? readFiledsByKey(fieldName, data) : ""}
                                // if(A) A1 else A2
                                // A?A1:A2
                                />
                            </Col>
                        </Form.Group>
                    })



                }

                <Button variant="primary" type="submit" onClick={submitData}> Submit  </Button>
            </Form>
        </div>
    )
}
