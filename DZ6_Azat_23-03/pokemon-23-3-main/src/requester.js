import axios from "axios";


export const requester = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})