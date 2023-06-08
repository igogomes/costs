import styles from './ContactForm.module.css'

import Input from '../form/Input'
import TextArea from '../form/TextArea';
import SubmitButton from '../form/SubmitButton'

function ContactForm({ btnText }) {

    return (
        <form className={styles.form}>
            <Input type="text" text="Digite seu nome" name="name" placeholder="Digite seu nome" />
            <Input type="email" text="Digite seu e-mail" name="email" placeholder="Digite seu e-mail" />
            <TextArea text="Digite sua mensagem" name="message" placeholder="Digite sua mensagem" />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ContactForm