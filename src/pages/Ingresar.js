import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ingresar-registrarse.css'

const Ingresar = () => {
    return (
        <div className='content'>
            <div className='title-box'>
                <div>
                    <img className='title-logo' src='https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_del_ITESM.svg' alt='Logo ITESM'></img>
                    <h2 className='login-title'>Ingresa</h2>
                    <p className='description'>
                        O&nbsp;
                        <Link to='/intelligenttutor/registrarse/' className='register-link'>crea tu cuenta</Link>
                        &nbsp;si no tienes una
                    </p>
                </div>
                <form>
                    <input type='hidden' name='remember' value='true'></input>
                    <div className='login-box'>
                        <div>
                            <label for='email' className='sr-only'>Email</label>
                            <input id='email' name='email' type='email' required className='top-input' placeholder='Email'/>
                        </div>
                        <div>
                            <label for='password' className='sr-only'>Contraseña</label>
                            <input required type='password' name='password' placeholder='Contraseña' className='bottom-input'/>
                        </div>
                    </div>
                    <div className='password-box'>
                        <div className='remember-box'>
                            <input type='checkbox'/>
                            <label for='remember-me'>Recordarme</label>
                        </div>
                        <div className='text-sm'>
                            <Link to='/intelligenttutor/404/' className='forget-text'>
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button type='submit' className='login-button group'>
                            <span className='button-svg'>
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true' className='group-hover:text-true-blue'>
                                    <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clip-rule='evenodd'/>
                                </svg>
                            </span>
                            Ingresar
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Ingresar