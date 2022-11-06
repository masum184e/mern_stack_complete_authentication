import Navbar from './../Navbar/Navbar'
import styles from './Profile.module.css'
import Menu from './Menu'
import { useEffect, useState } from 'react'
import Welcome from './Welcome'
import axios from 'axios'
import { getToken } from '../../store/cookie'

export default function Profile() {
  const [view,setView]=useState(<Welcome />)
  const [data,setData]=useState({})
  useEffect(()=>{
    const get_data=async()=>{
      const res= await axios.get("http://localhost:4000/logged_user_data",{"headers":{'authorization': `Bearer ${getToken()}`}});
      setData(res.data)
    }
    get_data();
  },[])
  return (
    <>
    <Navbar />
    <div className={styles.profile}>
      <h2><span>Software Mistry</span><span>{data.fname} {data.lname}</span></h2>
      <div className={styles.container}>
        <div className={styles.menu} ><Menu setView={setView} /></div>
        <div className={styles.details}>{view}</div>
      </div>
    </div>
    </>
  )
}
