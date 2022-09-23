<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { pokemonStore, loadingStore } from "./store";
  import type { Pokemon } from "./types/pokemon.type";
  import Artwork from "./lib/Artwork.svelte";
  import Ability from "./lib/Ability.svelte";
  import Moves from "./lib/Moves.svelte";
  import Detail from "./lib/Detail.svelte";

  async function loadData(): Promise<void> {
    const id = Math.floor(Math.random() * 905);
    loadingStore.update((isLoading) => true);
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = (await data.json()) as Pokemon;
    pokemonStore.set(pokemon);
    loadingStore.update((isLoading) => false);
  }

  onMount(() => loadData());
</script>

<main class="container mx-auto bg-orange-100 p-6 lg:max-w-7xl">
  <h1 class="text-4xl font-extrabold mb-5 text-orange-600">Pokemon Svelte</h1>
  <div
    class="max-w-4xl mx-auto grid grid-cols-3 grid-flow-row border-amber-600 bg-sky-50 border-2 rounded-3xl shadow shadow-amber-600 p-4"
  >
    <button
      class="p-2 bg-sky-200 text-sky-800 font-bold text-xl rounded-xl border-2 mb-5 border-sky-600 transition-transform hover:scale-105"
      on:click={loadData}
    >
      Roll!
    </button>
    <Artwork />
    <Ability />
    <Detail />
    <Moves />
    <!--   {#if value.forms}
        <p class="col-span-1">Forms</p>
        <div class="col-span-2">
          {#each value.forms as form, i (i)}
            <p class="capitalize">
              <a class="text-sky-700 underline font-bold" href={form.url}>
                {form.name}
              </a>
            </p>
          {/each}
        </div>
      {/if}
      {#if value.moves}
      {/if}-->
  </div>
</main>

<style>
</style>
