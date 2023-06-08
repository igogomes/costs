import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ContactForm.module.css'

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

    function handleSubject(e) {
        setSubjects({ ...subjects, 
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        });
    }

    return (
        <form className={styles.form}>
            <Input type="text" text="Digite seu nome" name="name" placeholder="Digite seu nome" />
            <Input type="email" text="Digite seu e-mail" name="email" placeholder="Digite seu e-mail" />
            <Select name="subject" text="Selecione o assunto" options={subjects} handleOnChange={handleSubject}/>
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ContactForm