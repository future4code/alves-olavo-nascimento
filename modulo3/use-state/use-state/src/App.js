import Post from './components/Post'
import styled from 'styled-components' 

export const Div = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: papyrus;
  font-size: 20px;
  height: 100vh;
`

function App() {
  return (
    <Div>
      <h1><i>Post</i></h1>
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
    </Div>
  );
}

export default App;