import { writable } from "svelte/store";

export type LoadingState = "idle" | "loading" | "error";

const loadingStore = writable<LoadingState>("idle");

export const setLoading = (state: LoadingState) => loadingStore.set(state);

export default loadingStore;
