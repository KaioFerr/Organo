import './DropDown.css'

const DropDown = (props) => {
    
    return (
        <div className='DropDown'>
            <label>{props.label}</label>
            <select onChange={evento => props.onChanged(evento.target.value)} riquired={props.riquired} value={props.value}>
                {props.itens.map (item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown