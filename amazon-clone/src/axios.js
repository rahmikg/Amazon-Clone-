import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-challenge-e53bd.cloudfunctions.net/api'
  
  //'http://localhost:5001/challenge-e53bd/us-central1/api'
    
});

export default instance;

//https://us-central1-challenge-e53bd.cloudfunctions.net/api