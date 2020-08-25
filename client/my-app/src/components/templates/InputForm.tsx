import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { postData, fetchData } from '../../api/api' 
import { useDispatch } from 'react-redux'
import saveToRedux, { updateEditFormState } from '../../reducer/dispatch'

export default function InputForm(props: any) {

    const { controllerName, fieldNames } = props

    const [data, setData] = useState({})

    const dispatch = useDispatch()


    const submitData = (e: any) => {
        e.preventDefault()
        
        postData(controllerName, data)

        fetchData(controllerName)
            .then(dataFromServer => saveToRedux(dataFromServer, dispatch, controllerName))

            updateEditFormState(false,dispatch) 
    }

    const onChangeInput = (e: any) => {

        setData(
            {
                ...data, // const json = {name:'abc', age:12}, {...json} == {name:'abc', age:12}
                [e.target.id]: e.target.value // {...json, age:12} == {name:'abc', age:20}
            })

        // console.log(data)
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
                                <Form.Control type={inputType} placeholder={"Enter " + fieldName} onChange={onChangeInput} id={fieldName} />
                            </Col>
                        </Form.Group>
                    })

                }

                <Button variant="primary" type="submit" onClick={submitData}> Submit  </Button>
            </Form>
        </div>
    )
}
