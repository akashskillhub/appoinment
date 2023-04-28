import React, { useEffect, useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import useSerialize from './hooks/useSerialize'
import useDebounce from './hooks/useDebounce'

const CustomHooks = () => {
    const x = useLocalStorage("info")
    const s = useSerialize(x)
    const [inp, setInp] = useState("")
    const result = useDebounce(inp, 2000)
    useEffect(() => {
        console.log(result)
    }, [result])

    return <>
        {s}
        {inp}
        <h1>hooks</h1>
        <input
            type="text"
            value={inp}
            onChange={e => setInp(e.target.value)} />
    </>
}

export default CustomHooks