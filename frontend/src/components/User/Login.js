import { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import styles from './authentication.module.css'
import axios from 'axios'
import { getToken, setToken } from '../../store/cookie'
import { myContext } from '../../store/context'

export default function Login() {
  const navigate=useNavigate()
  const setUser=useContext(myContext)
  const [data,setData]=useState({})
  const [err,setError]=useState({
    status:false,
    color:'',
    message:'' 
  })
  const input_handle=e=>{
    setData(values => ({...values, [e.target.name]: e.target.value}))
  }
  const form_handle=async(e)=>{
    e.preventDefault()
    if(data.email && data.pwd){
      const res=await axios.post("http://localhost:4000/login",data);
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
    <div className={styles.login}>
      <form onSubmit={form_handle} action="" method="post">
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email"  value={data.email || ""}  onChange={input_handle}  />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="pwd"  value={data.pwd || ""}  onChange={input_handle}  />
        </div>
        <input type="submit" value="Log In" />
        <Link to='/reset_pwd_email'>Forgotten Password?</Link>
        {(err.status)?<p style={{color:err.color}}>{err.message}</p>:''}
      </form>
    </div>
    </>
  )
}
