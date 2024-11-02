import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styles from './style.module.scss';
const Navbar = () => {
  const [openNavbar, setOpenNavbar] = React.useState(false)
  return (
    <div className={styles.navbar}>
      <h3>JP</h3>
      <div>
        <button><a href='https://drive.google.com/file/d/1KtveqXfhTGXvjgMAhXovKj4x08J6v9VP/view' download style={{ textDecoration: 'none', color: 'black' }}>Resume</a> </button>
        <button onClick={() => setOpenNavbar(!openNavbar)}>MENU</button>
      </div>
      {
        openNavbar && <NavbarOpen />
      }
    </div>
  )
}

const NavbarOpen = () => {
  return (
    <div className={styles.navbarOpen}>
      <ul>
        <li><Link smooth={true} to='scrollToHome' >Introduction</Link></li>
        <li><Link smooth={true} to='scrollToEducation' >Education</Link></li>
        <li><Link smooth={true} to='scrollTOExperience' >Experience</Link></li>
        <li><Link smooth={true} to='scrollTOPRojects'>Projects</Link></li>
      </ul>
    </div>
  )
}

export default Navbar 
