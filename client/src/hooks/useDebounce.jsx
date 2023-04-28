import React, { useEffect, useState } from 'react'

const useDebounce = (serachTerm, delay) => {
    const [term, setTerm] = useState(serachTerm)
    useEffect(() => {
        const timer = setTimeout(() => setTerm(serachTerm), delay)
        return () => clearTimeout(timer)
    }, [serachTerm, delay])
    return term
}

export default useDebounce