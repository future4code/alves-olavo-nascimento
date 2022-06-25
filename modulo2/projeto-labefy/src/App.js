import React from 'react';
import AddPlaylist from './Componentes/AddPlaylist/AddPlaylist';
import TodasPlaylists from './Componentes/TodasPlaylists/TodasPlaylists';
import AddMusica from './Componentes/AddMusica/AddMusica';
import DetalhePlaylists from './Componentes/DetalhePlaylists/DetalhePlaylists';

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <h3>Pai</h3>
        <AddMusica/>
        {/* <AddPlaylist/> */}
        {/* <TodasPlaylists/> */}
        <DetalhePlaylists/>
      </div >
    )
  }
}


