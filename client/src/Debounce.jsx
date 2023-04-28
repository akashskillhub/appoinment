import React, { useEffect, useState } from 'react'
import api from './redux/api'

const Debounce = () => {
    const [inp, setInp] = useState("")
    const [result, setResult] = useState()
    const handleChange = e => setInp(e.target.value)
    const getSearch = async e => {
        try {
            const { data } = await api.post("/user/search", { term: inp })
            setResult(data.result)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            // console.log("API CALL")
            getSearch()
        }, 1000)
        return () => clearTimeout(timer)
    }, [inp])

    return <>
        {JSON.stringify(result)}
        <input type="text" onChange={handleChange} />
    </>
}

export default Debounce