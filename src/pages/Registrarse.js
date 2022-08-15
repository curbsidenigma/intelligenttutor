import React from 'react'
import { Link } from 'react-router-dom'

const Registrarse = () => {
    return (
        <div className='content'>
            <div className='title-box'>
                <div>
                    <img className='title-logo' src='https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_del_ITESM.svg' alt='Logo ITESM'></img>
                    <h2 className='title'>Regístrate</h2>
                    <p className='description'>
                        O&nbsp;
                        <Link to='/intelligenttutor/ingresar/' className='register-link'>ingresa con tu cuenta</Link>
                        &nbsp;si ya tienes una
                    </p>
                </div>
                <form>
                    <input type='hidden' name='remember' value='true'></input>

                    <div className='login-box shadow-sm -space-y-px'>
                        <div>
                            <label for='name' className='sr-only'>Nombre</label>
                            <input required type='text' name='name' placeholder='Nombre' className='top-input'/>
                        </div>
                        <div>
                            <label for='email' className='sr-only'>Email</label>
                            <input required type='text' name='email' placeholder='Email' className='middle-input'/>
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

export default Registrarse