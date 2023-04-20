import React from 'react'

const Register = () => {
    return <div className="container mt-5">
        <div className="row">
            <div className=' mt-5 text-center'>
                <img src="https://shreethemes.in/doctris/layouts/assets/images/logo-dark.png" alt="" srcset="" />
            </div>
            <div className="col-sm-5 offset-4 ">

                <div class="card shadow mt-4">

                    <div class="card-body">
                        <p className='text-center fw-bold fs-4'>Sing up</p>
                        <div className='d-flex gap-4'>

                            <div>
                                <label htmlFor="">First Name<span className='text-danger'>*</span></label>
                                <input type="text" className='form-control mt-2' placeholder='First' />

                            </div>
                            <div>
                                <label htmlFor="">Last Name <span className='text-danger'>*</span></label>
                                <input type="text" className='form-control mt-2' placeholder='Last' />

                            </div>
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="" className='fw-bold'>Your Email <span className='text-danger'>*</span></label>
                            <input type="text" className='form-control mt-2' placeholder='Email' />

                        </div>
                        <div className='mt-3'>
                            <label htmlFor="" className='fw-bold'>Your Password <span className='text-danger'>*</span></label>
                            <input type="password" className='form-control  mt-2' placeholder='Email' />

                        </div>
                        <div className='d-flex justify-content-between mt-3'>
                            <div>

                                <input type='checkbox' className='form-check-input' value="" id='' />

                                <label htmlFor="" className='ms-2 fw-bold'>I Accept Terms And Condition </label>
                            </div>
                        </div>

                        <button type="button" class="btn btn-primary w-100 mt-3">Register</button>
                        <p className='text-center mt-3'>OR</p>
                        <button type="button" class="btn btn-outline-primary w-100">Continue with Google</button>



                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default Register