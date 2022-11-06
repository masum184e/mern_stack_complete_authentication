import styles from './Menu.module.css'
import { useNavigate } from 'react-router-dom'
import ChangePassword from './ChangePassword'
import { getToken, removeToken } from '../../store/cookie'
import { myContext } from '../../store/context'
import { useContext } from 'react'

export default function Menu(props){
  const navigate=useNavigate()
  const setUser=useContext(myContext)
  const change_color=e=>{
    e.target.parentElement.childNodes.forEach((i)=>{i.style.color="";})
    e.target.style.color="white"
  }
  const change_component=(e)=>{
    if(e.target.id==='changepwd'){
      props.setView(<ChangePassword />)
    }
  }
  const logout=()=>{
    removeToken();
    setUser(getToken());
    navigate('/login')
  }
  return (
    <>
    <ul className={styles.menu}>
        <li onClick={(e)=>{change_color(e);change_component(e);}} id="changepwd">Change Password</li>
        <li onClick={(e)=>{change_color(e);logout();}} id="logout">Log Out</li>
      </ul>
    </>

  )
}
