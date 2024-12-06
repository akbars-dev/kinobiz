import axios from 'axios'

const $api = axios.create({
    baseURL: import.meta.env.VITE_APP_URL
})

export const fetchSliders = async () => {
    const response = await $api.get('/slider/getSliders')
    return response.data.data
}

export const fetchMovies = async (page=1) => {
    const response = await $api.get(`/films/category/660487cbb4a4c67c354d0ec8?page=${page}`);
    return response.data.data
}

export const fetchCartoons = async (page=1) => {
    const response = await $api.get(`/films/category/660487dfb4a4c67c354d0ed0?page=${page}`);
    return response.data.data
} 

export const fetchFilm = async (id) => {
    const response = await $api.get(`/films/${id}`)
    return response.data.data
}