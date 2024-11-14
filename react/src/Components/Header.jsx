import React, { useEffect, useState } from 'react'
import logolight from '../assets/logo-light.svg'
import logodark from '../assets/logo-dark.svg'
const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const storedThemeMode = localStorage.getItem('themeMode')

        if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true)
            document.documentElement.classList.add('dark')
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const handleThemeToggle = () => {
        if (isDarkMode) {
            setIsDarkMode(false)
            localStorage.setItem('themeMode', 'light')
            document.documentElement.classList.remove('dark')
        } else {
            setIsDarkMode(true)
            localStorage.setItem('themeMode', 'dark')
            document.documentElement.classList.add('dark')
        }

    }


  return (
    <header>
        <div className="container">

            <a id="logo" href="index.html">
                <img src={logolight} alt="Silicon Logotype Light" className="logo-light"/>
                <img src={logodark} alt="Silicon Logotype Dark" className="logo-dark"/>
            </a>

            <nav id="main-menu" className="navbar">
                <a className="nav-link" href="#">Features</a>
            </nav>

            <div className="theme-switch">
                <label className="toggle-switch" htmlFor="darkmode-switch" aria-label="darkmode switch">
                    <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={handleThemeToggle}/>
                    <span className="slider"></span>
                </label>
                <label className="switch-label" htmlFor="darkmode-switch">Dark mode</label>
            </div>

            <a id="auth-signin" href="#" className="btn-primary">
                <i className="fa-regular fa-user"></i>
                <span>Sign in/ up</span> 
            </a>

            <button className="btn-mobile">
                <i className="fa-solid fa-bars"></i>
            </button>

        </div>
    </header>
  )
}

export default Header