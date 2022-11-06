import Navbar from './Navbar/Navbar'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
    <Navbar />
    <div className={styles.home}>
      <div className={styles.text_box}>
        <h1>Manage Your Mes Properly</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, asperiores?</p>
        <div className={styles.btn_container}>
          <Link to="/registration" className={styles.register}>Registration</Link>
          <Link to="/login" className={styles.login}>Log In</Link>
        </div>
      </div>
    </div>
    </>
  )
}
