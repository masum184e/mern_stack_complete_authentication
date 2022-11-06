import Navbar from './Navbar/Navbar'
import styles from './About.module.css'

export default function About() {
  return (
    <>
    <Navbar />
    <div className={styles.about}>
      <h1>This React JS complete mes management authentication</h1>
      <div className={styles.block_container}>
        <div className={styles.block}>
          <h2>Features</h2>
          <ol>
            <li>Home Page</li>
            <li>About Page</li>
            <li>Not Found Page</li>
            <li>Profile Page</li>
          </ol>
        </div>
        <div className={styles.block}>
          <h2>Features</h2>
          <ol>
            <li>User Registration</li>
            <li>User Log In</li>
            <li>Change Password</li>
            <li>Reset Password (link send through email)</li>
          </ol>
        </div>
        <div className={styles.block}>
          <h2>Dependencies</h2>
          <ol>
            <li>React Router V6</li>
            <li>Font Awesome</li>
          </ol>
        </div>
      </div>
    </div>
    </>
  )
}
