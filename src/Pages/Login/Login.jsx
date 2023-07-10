import login from '../Login/loginPage.module.scss'
// import dope from '../../assets/img/HeaderImg/dope.jpg'

const Login = () => {
    return (
        <div>
            <div className={login.login}>
                {/* cool background img */}
                <div className={login.backgroundImg}>

                    <div className={login.backgroundImgText}>
                        <h1>Create Your Free Account</h1>
                        <p>Share Your Products and Ideas With Us</p>
                    </div>
                </div>
                {/* form */}
                <div className={login.loginForm}>
                    <div className={login.signUp}>
                        {/* signUp */}
                        <h1>Sign Up</h1>
                        {/* signIn */}
                        <div className={login.signIn}>
                            <p>Already Have an account ? <a href="">Sign In</a></p>
                        </div>

                        {/* inputs */}
                        <div className={login.inputs}>
                            {/* email */}
                            <div className={login.inputContainer}>
                                <h2>Email</h2>
                                <input type="text" placeholder='Email' />
                            </div>

                            <div className={login.inputContainer}>
                                <h2>Password</h2>
                                <input type="number" placeholder='Password' />
                            </div>

                            <div className={login.inputContainer}>
                                <h2>Selected Skills</h2>
                                <input type="text" placeholder='Type To Search' />
                                  <div className={login.skills}>
                                     <div className={login.branding}>Product Design</div>
                                     <div className={login.branding}>Artiste</div>
                                  </div>
                            </div>
                            

                            {/* create account */}

                            <div className={login.createAccount}>
                                  <h3>Create an Account</h3>
                            </div>

                        </div>

                    </div>
                </div>

            </div>




        </div>
    )
}

export default Login