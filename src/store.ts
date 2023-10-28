import { writable } from "svelte/store";
import type { Pokemon } from "./types/pokemon.type";

export const pokemonStore = writable<Pokemon>();
