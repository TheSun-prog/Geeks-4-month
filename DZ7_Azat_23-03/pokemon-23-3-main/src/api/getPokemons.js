import { requester } from "../requester";

// ?_limit=10&_offset=1; - query params;
// /pokemons/list - endpoints

export const fetchPokemons = async(params) => {
    try {
        const { data } = await requester.get('pokemon', {
            params
        })
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonByName = async(name) => {
    try {
        const { data } = await requester.get('/pokemon/' + name);
        return data
    } catch (error) {
        console.log(error)
    }
}