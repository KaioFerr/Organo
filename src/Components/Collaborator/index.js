import './Collaborator.css'

const Collaborator = ({collaboratorName, image, responsibility}) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={image} alt={collaboratorName}/>
            </div>

            <div className='rodape'>
                <h4>{collaboratorName}</h4>
                <h5>{responsibility}</h5>
            </div>
        </div>
    )
}

export default Collaborator