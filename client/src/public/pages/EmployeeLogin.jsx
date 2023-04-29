import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginEmployee } from '../../redux/public/publicActions'
import { useNavigate } from 'react-router-dom'

const EmployeeLogin = () => {
    const dispatch = useDispatch()
    const handelLogin = () => {
        dispatch(loginEmployee({
            email: "doctor1@gmail.com",
            password: "123"
        }))
    }
    const navigate = useNavigate()
    const { info } = useSelector(state => state.public)
    useEffect(() => {
        if (info && info.role === "doctor") {
            navigate("/employee")
        }
    }, [info])
    return <>
        <button
            onClick={handelLogin}
            type="button"
            className="btn btn-primary">Login</button>
    </>
}

export default EmployeeLogin