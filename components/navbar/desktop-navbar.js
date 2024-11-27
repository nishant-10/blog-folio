import styles from "./desktop-navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.main}>
      <span className={`${styles.logo} ${styles.nav_element}`}>0xNIKHIL</span>
      <span className={styles.nav_element}>Cybersecurity</span>
      <span className={styles.nav_element}>IT</span>
      <span className={styles.nav_element}>Coffee</span>
      <span className={styles.nav_element}>Free Resources</span>
      <span className={styles.nav_element}>Topics</span>
      <span className={styles.nav_element}>Notes</span>
      <span className={styles.nav_element}>Have I Helped You?</span>
      <span className={styles.nav_element}>/</span>
      <span className={styles.nav_element}>Subscribe</span>
    </div>
  );
}
