import Navbar from './Navbar/Navbar'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
    <Navbar />
    <div className={styles.not_found}>
      <h1>404 NOT FOUND</h1>
    </div>
    </>
  )
}
