import './Form.css'
import InputsForm from '../InputsForm';
import DropDown from '../DropDown';
import Button from '../Button';
import { useState } from 'react';
const Form = (props) => {

    const [name, setName] = useState('')
    const [responsibility, setResponsibility] = useState('')
    const [image, setImage] = useState('')
    const [teams, setTeams] = useState('Programação')


    const onSaved = (evento) => {
        evento.preventDefault()
        props.onCollaboratorAdded({
            name,
            responsibility,
            image,
            teams
        })
    }

    return (
        <section className='Form'>
            <form onSubmit={onSaved}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputsForm
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChanged={value => setName(value)}
                />
                <InputsForm
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    value={responsibility}
                    onChanged={value => setResponsibility(value)}
                />
                <InputsForm 
                    required={false}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <DropDown 
                    required={true}
                    label="Time"
                    itens={props.team} 
                    value={teams}
                    onChanged={value => setTeams(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form