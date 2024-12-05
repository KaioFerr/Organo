import Collaborator from '../Collaborator'
import './Team.css'


const Team = (props) => {

    const cssBackground = { backgroundColor: props.backgroundColor }
    const cssBorder = { borderColor: props.borderColor }
    //const cssCard = { backgroundColor: props.cardColor }


    return (
        <section className='team' style={cssBackground}>
            <h3 style={cssBorder}>{props.teamName}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Collaborator key={collaborator.name} collaboratorName={collaborator.name} responsibility={collaborator.responsibility} image={collaborator.image} />)}
            </div>
        </section>
    )
}

export default Team