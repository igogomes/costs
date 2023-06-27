import styles from './ContactForm.module.css' 

import { useEffect, useState } from 'react'

import Input from '../form/Input'
import TextArea from '../form/TextArea'
import SelectSubject from '../form/SelectSubject'
import SubmitButton from '../form/SubmitButton'

function ContactForm({ btnText }) {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/subjects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setSubjects(data)
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <form className={styles.form}>
            <Input type="text" text="Digite seu nome" name="name" placeholder="Digite seu nome" />
            <Input type="email" text="Digite seu e-mail" name="email" placeholder="Digite seu e-mail" />
            <SelectSubject name="subject" text="Selecione um assunto" options={subjects}/>
            <TextArea text="Digite sua mensagem" name="message" placeholder="Digite sua mensagem" />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ContactForm