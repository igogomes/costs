import styles from './Contact.module.css'

import ContactForm from '../contact/ContactForm';

function Contact() {
    return (
        <div className={styles.contact_container}>
            <div className={styles.title_container}>
                <h1>Fale Conosco</h1>
            </div>
            <div className={styles.content_container}>
                <div className={styles.main_content_container}>
                    <ContactForm btnText="Enviar" />
                </div>
                <div className={styles.image_content_container}>
                    <img src="https://picsum.photos/id/898/600/600" alt="Company"/>
                </div>
            </div>
        </div>
    );
}

export default Contact