import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // 
import { useDispatch, useSelector } from 'react-redux'
import { getDoctorAppoinments } from '../../redux/employee/employeeActions'
const Account = () => {
    const dispatch = useDispatch()
    const { bookings } = useSelector(state => state.employee)
    useEffect(() => {
        dispatch(getDoctorAppoinments())
    }, [])
    return <div className='container py-3'>
        <div className="row">
            <div className="col-sm-4">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <span>Todays Bookings</span>
                        <span>3</span>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">An item</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={bookings && bookings.events}
                />
            </div>
        </div>

    </div>
}

export default Account