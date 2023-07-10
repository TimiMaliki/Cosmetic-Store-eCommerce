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
        
        </div>

        </div>



     
    </div>
  )
}

export default Login