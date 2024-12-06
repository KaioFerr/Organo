import { useState } from 'react';
import Banner from './Components/Banner';
import Form from './Components/Form'
import Team from './Components/Team';
import Footer from './Components/Footer';
function App() {

  const teams = [
    {
      name: 'Programação',
      priColor: '#57C278',
      secColor: '#D9F7E9',
    },
    {
      name: 'Front-end',
      priColor: '#82CFFA',
      secColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      priColor: '#A6D157',
      secColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      priColor: '#E06B69',
      secColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      priColor: '#DB6EBF',
      secColor: '#FAE9F5',
    },
    {
      name: 'Mobile',
      priColor: '#FFBA05',
      secColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      priColor: '#FF8A29',
      secColor: '#FFEEDF',
    }
  ]



  const [collaborators, setCollaborators] = useState([])

  const onNewCollaboratorAdded = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form team={teams.map(team => team.name)} onCollaboratorAdded = {collaborator => onNewCollaboratorAdded(collaborator)}/>
      
      {teams.map(team => <Team
        key={team.name}
        teamName={team.name}
        cardColor={team.priColor}
        backgroundColor={team.secColor}
        borderColor={team.priColor}
        collaborators={collaborators.filter(collaborator => collaborator.teams === team.name)}
      />)}
      <Footer />
      </div>
  );
}

export default App;
