import { useState,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styles from './authentication.module.css'
import axios from 'axios'
import { setToken,getToken } from '../../store/cookie'
import { myContext } from '../../store/context'

export default function Registration() {
  const navigate=useNavigate()
  const setUser=useContext(myContext)
  const [data,setData]=useState({})
  const [err,setError]=useState({
    status:false,
    color:'',
    message:'' 
  })
  const input_handle=async(e)=>{
    setData(values => ({...values, [e.target.name]: e.target.value}))
  }
  const form_handle=async(e)=>{
    e.preventDefault()
    if(data.email && data.fname && data.lname && data.pwd){
      const res=await axios.post("http://localhost:4000/registration",data);
      if(res.data.status===true){
        setToken(res.data.token)
        setUser(getToken())
        setData({})
        navigate('/profile')
      }
      if(res.data.status===false){
        setError({"status":true,color:"red",message:res.data.message});
      }
    }else{
      setError({status:true,color:'red',message:'All Fields Are Required'})
    }
  }
  return (
    <>
    <div className={styles.registration}>
    <form onSubmit={form_handle} action="" method="post">
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" name="fname" value={data.fname || ""}  onChange={input_handle}  />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" name="lname" value={data.lname || ""}  onChange={input_handle}  />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" value={data.email || ""}  onChange={input_handle}  />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="pwd" value={data.pwd || ""}  onChange={input_handle}  />
        </div>
        <input type="submit" value="Register" />
        <p>Alread Have An Account <Link to='/login'>Log In</Link></p>
        {(err.status)?<p style={{color:err.color}}>{err.message}</p>:''}
      </form>
    </div>
    </>
  )
}
