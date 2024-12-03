import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form'
function App() {

  const [collaborators, setCollaborators] = useState([])

  const onNewCollaboratorAdded = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form onCollaboratorAdded = {collaborator => onNewCollaboratorAdded(collaborator)}/>
      </div>
  );
}

export default App;
