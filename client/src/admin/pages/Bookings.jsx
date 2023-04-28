import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAppoinments, getSerchAppoinments } from '../../redux/admin/adminActions'

const Bookings = () => {
    const dispatch = useDispatch()
    const [term, setTerm] = useState("")
    const { loading, error, bookings } = useSelector(state => state.admin)
    useEffect(() => {
        dispatch(getAllAppoinments())
    }, [])
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(getSerchAppoinments(term))
        }, 500)
        return () => clearTimeout(timer)

    }, [term])

    const bookingTable = bookings && <div className='table-responsive'>
        <table className="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Doctor</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    bookings.map((item, index) => <tr
                        className={item.isActive ? "table-success" : "table-danger"}
                        key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.mobile}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.status}</td>
                        <td>{item.doctor}</td>
                        <td>
                            <button type="button" className="btn btn-warning btn-sm">Edit</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
    if (loading) return <div class="spinner-border text-primary"></div>
    return <div className='container my-3'>
        <div className='input-group my-2'>
            <select class="form-select">
                <option selected>Choose  </option>
                <option value="1">Name</option>
                <option value="2">Mobile</option>
                <option value="3">Status</option>
            </select>
            <input value={term} type="text" onChange={e => setTerm(e.target.value)} className='form-control' />

        </div>
        {bookingTable}
    </div>
}

export default Bookings