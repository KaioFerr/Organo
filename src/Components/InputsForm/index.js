import './InputsForm.css'
const InputsForm = (props) => {

    const placeholder = `${props.placeholder}...`

    const typed = (event) => {
        props.onChanged(event.target.value)
    }

    return (
        <div className="InputsForm">
            <label>{props.label}</label>
            <input value={props.value} onChange={typed} required={props.obrigatorio} placeholder={placeholder}></input>
        </div>
    )
}

export default InputsForm