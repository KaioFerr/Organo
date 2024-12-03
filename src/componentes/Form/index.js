import './Form.css'
import TextField from '../TextFieldForm';
import DropDown from '../DropDown';
import Button from '../Button';
import { useState } from 'react';
const Form = (props) => {

    const times = [
        'Programação',
        'Front-end',
        'Data Sciencie',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('Programação')


    const onSaved = (evento) => {
        evento.preventDefault()
        props.onCollaboratorAdded({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='Form'>
            <form onSubmit={onSaved}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChanged={value => setNome(value)}
                />
                <TextField
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    value={cargo}
                    onChanged={value => setCargo(value)}
                />
                <TextField 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    onChanged={value => setImagem(value)}
                />
                <DropDown 
                    obrigatorio={true} 
                    label="Time"
                    itens={times} 
                    value={time}
                    onChanged={value => setTime(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form