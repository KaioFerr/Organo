import './TextFieldForm.css'
const TextField = (props) => {

    const placeholder = `${props.placeholder}...`

    return (
        <div className="TextField">
            <label>{props.label}</label>
            <input placeholder={placeholder}></input>
        </div>
    )
}

export default TextField