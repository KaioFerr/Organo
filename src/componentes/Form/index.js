import './Form.css'
import TextField from '../TextFieldForm';
const Form = () => {
    return (
        <section className='Form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                
            </form>
        </section>
    )
}

export default Form