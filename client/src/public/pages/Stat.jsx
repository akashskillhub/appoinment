import React from 'react'
import History from '../components/History'
import Products from '../components/Products'
import Orders from '../components/Orders'
import { ErrorBoundary } from "react-error-boundary"

const Stat = () => {
    const fallBack = ({ error, resetErrorBoundary }) => {
        // console.log(err)
        return <h1>something went wrong  {error.message}</h1>
    }
    const handleError = (err, info) => {
        // backend error log
        console.log(err)
        console.log(info)
    }
    return <>
        <ErrorBoundary
            fallbackRender={fallBack}
            onError={handleError}
        >
            <History />
        </ErrorBoundary>
        <hr />
        <ErrorBoundary fallbackRender={fallBack}>
            <Products />
        </ErrorBoundary>
        <hr />
        <Orders />
    </>
}

export default Stat