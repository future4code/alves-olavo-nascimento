import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    // Lista de pessoas colocada no estado
    posts: [
      // O objeto abaixo representa uma pessoa. Ele possui
      // duas propridades: nome e email.
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "pedro",
        fotoUsuario: "https://picsum.photos/60/60",
        fotoPost: "https://picsum.photos/200/160"
      },
      {
        nomeUsuario: "patrick",
        fotoUsuario: "https://picsum.photos/70/70",
        fotoPost: "https://picsum.photos/200/170"
      }
    ]
  }
  render() {
    const listasDosPosts = this.state.posts.map((post) => {
          return(
            <p>
              {post.nomeUsuario} - {post.fotoUsuario} - {post.fotoPost}

            </p>
          )
         
      return (
        <MainContainer>
          <Post
            {post.nomeUsuario}
          />
          <Post
            {post.fotoUsuario}
          />
          <Post
            {post.fotoPost}
          />
        </MainContainer>
        
      );
    })
    {listasDosPosts}
  }
}
export default App;
