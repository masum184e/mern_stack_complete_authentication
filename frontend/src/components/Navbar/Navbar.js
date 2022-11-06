import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { getToken } from './../../store/cookie'

export default function Navbar() {
  const menu_handle=()=>{
    const menu=document.getElementById('menu');
    if(menu.classList.contains('Navbar_d_block__LUzln')){
      menu.classList.remove('Navbar_d_block__LUzln')
      menu.classList.add('Navbar_d_none__qBROW')
    }else{
      menu.classList.remove('Navbar_d_none__qBROW')
      menu.classList.add('Navbar_d_block__LUzln')
    }
  }
  return (
    <>
    <nav>
      <Link to='/'>Mes Management</Link>
      <button className={styles.nav_btn} onClick={menu_handle} ><i className="fa-solid fa-bars"></i></button>
      <div className={styles.nav_links} id='menu' >
        <ul>
          {(!getToken())?<li><Link to='/login'>Log In</Link></li>:''}
          {(!getToken())?<li><Link to='/registration'>Registration</Link></li>:''}
          {(getToken())?<li><Link to='/profile'>Profile</Link></li>:''}
          <li><Link to='/about'>About</Link></li>  
        </ul>
      </div>
    </nav>
    </>
  )
}
