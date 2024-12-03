import './TextFieldForm.css'
const TextField = (props) => {

    const placeholder = `${props.placeholder}...`

    const type = (evento) => {
        props.changed(evento.target.value)
    }

    return (
        <div className="TextField">
            <label>{props.label}</label>
            <input value={props.value} onChange={type} required={props.obrigatorio} placeholder={placeholder}></input>
        </div>
    )
}

export default TextField