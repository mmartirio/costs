import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../Project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState({})


    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type='text'
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange} 
                value={service.name || ''} // Adicionando o value ao input
            />
            <Input 
                type='number'
                text="Custo do Serviço"
                name="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleChange} 
                value={service.cost } // Adicionando o value ao input
            />
            <Input type='text'
                text="Descrição do Serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
                value={service.description || ''} // Adicionando o value ao input 
            />
            <SubmitButton text={btnText} />
        </form> 
    )
}

export default ServiceForm