import './TextFieldForm.css'
const TextField = (props) => {

    const placeholder = `${props.placeholder}...`

    const typed = (event) => {
        props.handleChange(event.target.value)
    }

    return (
        <div className="TextField">
            <label>{props.label}</label>
            <input value={props.value} onChange={typed} required={props.obrigatorio} placeholder={placeholder}></input>
        </div>
    )
}

export default TextField