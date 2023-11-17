import styles from './Footer.module.css'

const Footer = () =>{
    return(
        <div className={styles.footer}>
        <p>Copyright &copy; 2023 <span className={styles.title}>ElectraSwap</span>, All rights reserved.</p>
        </div>
    )
}

export default Footer;