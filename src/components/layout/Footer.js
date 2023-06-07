import styles from './Footer.module.css'

import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import moment from 'moment'

function Footer() {
    var getMoment = moment();
    var currentYear = getMoment.format('YYYY');

    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p className={styles.copyright}><span>Costs</span> &copy; {currentYear}</p>
        </footer>
    );
}

export default Footer