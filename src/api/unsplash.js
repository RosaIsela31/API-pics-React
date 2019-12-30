import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID e37d0c46a386cca5decd2ec5f62f75228a7f27bdba17dadd875a1e8501f8e567'
  }

})