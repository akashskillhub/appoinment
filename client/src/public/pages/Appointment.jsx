import React from 'react'

const Appointment = () => {
    return <div className="container mt-2">
        <div className="row">
            <div className="col-sm-6 offset-3">
                <div class="card ">


                    <button type="button" class="btn btn-primary">Online Appointment</button>
                    <div class="card-body">
                        <div className=''>
                            <label className='fw-bold' htmlFor="">Patient Name <span className='text-danger'>*</span></label>
                            <input type="text" className='form-control mt-2' placeholder='Patient Name :' />
                        </div>

                        <div className="d-flex   gap-3">
                            <div className='mt-3 w-100'>
                                <label className='fw-bold' htmlFor="">Departments</label>
                                <select class="form-select mt-2">
                                    <option value="1">Eye Care</option>
                                    <option value="2">Psychotheapy</option>
                                    <option value="3">Dental </option>
                                    <option value="4">orthopedic</option>
                                    <option value="5">Eyecardiology </option>
                                    <option value="6">gynecology </option>
                                    <option value="7">Neurology</option>
                                </select>
                            </div>
                            <div className='mt-3 w-100'>
                                <label className='fw-bold' htmlFor="">Doctor</label>
                                <select class="form-select mt-2">
                                    <option value="1">Calvin Carlo  </option>
                                    <option value="2">ristino Murphy</option>
                                    <option value="3">Jennifer Ballance </option>
                                    <option value="4">Toni Kovar</option>
                                    <option value="5">Alia Reddy </option>
                                    <option value="6">Tara Arrington </option>
                                    <option value="7">Neurology</option>
                                </select>
                            </div>
                        </div>

                        <div className='d-flex gap-3 mt-3  '>
                            <div className='w-100'>
                                <label className='fw-bold' htmlFor="">Your Email <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control mt-2' placeholder='Your Email' />

                            </div>
                            <div className='w-100'>
                                <label className='fw-bold' htmlFor="">Your Phone <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control mt-2' placeholder='Your phone' />

                            </div>
                        </div>
                        <label htmlFor="" className='mt-3 fw-bold'>Comments <span className='text-danger'>*</span></label>
                        <textarea className='w-100 rounded-2 mt-2' placeholder='Your Message:' rows="4"></textarea>
                        <button type="button" class="btn btn-primary w-100 mt-2">Book An Appointment</button>

                    </div>

                </div>
            </div>
        </div>

    </div>
}

export default Appointment