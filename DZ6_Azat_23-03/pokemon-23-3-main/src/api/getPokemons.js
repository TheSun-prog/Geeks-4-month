import {requester} from "../requester";


export const fetchPokemons = async (params) => {
    try {
        const {data} = await requester('pokemon', {params})
        return data;
    } catch (error) {
        console.log(error);
    }
}


export const fetchPokemonData = async(name) => {
    try {
        const {data} = await requester.get('pokemon/' + name)
        return data
    } catch (error) {
        console.log(error);
    }
}
