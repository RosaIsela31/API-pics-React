import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{

  onSearchSubmit(term){
    // Es necesarios dos argumentos, el primero es la url de la que queremos hacer la petición
    // El segundo, es un objeto con opciones para personalizar la petición 
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID e37d0c46a386cca5decd2ec5f62f75228a7f27bdba17dadd875a1e8501f8e567'
      }
    })
  }

  render(){
    return(
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App;