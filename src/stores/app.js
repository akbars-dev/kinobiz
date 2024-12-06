import { create } from "zustand";
import { fetchSliders, fetchMovies, fetchCartoons } from "../api";

const useAppStore = create((set) => ({
    movies: [],
    slides: [],
    cartoons: [],


    init: async () => {
        const slides = await fetchSliders();
        const movies = await fetchMovies();
        const cartoons = await fetchCartoons();

        set({ slides, movies, cartoons });
    }
}))

export default useAppStore