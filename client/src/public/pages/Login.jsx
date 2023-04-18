import { Link } from 'react-router-dom'

const Login = () => {
    return <div className='container'>
        <div className="row">
            <div className="col-sm-5 offset-sm-3">
                <img src="" alt="" />
                <div className="card">
                    <div className="card-body">
                        <p>Sign In</p>
                        <div>
                            <label htmlFor="">Your Email <span className='text-danger'>*</span> </label>
                            <input type="text" className='form-control' placeholder='Email' />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="">Password <span className='text-danger'>*</span> </label>
                            <input type="password" className='form-control' placeholder='Password' />
                        </div>
                        <br />
                        <div className='d-flex justify-content-between'>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="id" />
                                <label class="form-check-label" for="id">
                                    Remember Password
                                </label>
                            </div>
                            <Link to="/" >Forget Password</Link>

                        </div>
                        <br />
                        <button type="button" class="btn btn-primary w-100">Sign In</button>
                        <p className='text-center my-3'>OR</p>
                        <button type="button" class="btn btn-outline-primary w-100 btn-lg">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login