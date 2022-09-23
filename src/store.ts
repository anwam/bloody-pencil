import { writable } from "svelte/store";
import type { Pokemon } from "./types/pokemon.type";

export const pokemonStore = writable<Pokemon>(null);
export const loadingStore = writable<boolean>(false);
