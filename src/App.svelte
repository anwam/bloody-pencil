<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { pokemonStore } from "./store";
  import type { Pokemon } from "./types/pokemon.type";
  import Artwork from "./lib/Artwork.svelte";
  import Ability from "./lib/Ability.svelte";
  import Moves from "./lib/Moves.svelte";
  import Detail from "./lib/Detail.svelte";
  import { setLoading } from "./stores/loading.store";

  async function loadData(): Promise<void> {
    const id = Math.floor(Math.random() * 905);
    setLoading("loading");
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = (await data.json()) as Pokemon;
    pokemonStore.set(pokemon);
    setLoading("idle");
  }

  onMount(() => loadData());
</script>

<main
  class="container mx-auto bg-orange-100 shadow-lg rounded-3xl shadow-orange-600 p-8 m-8 lg:max-w-5xl"
>
  <h1 class="text-4xl font-extrabold mb-5 text-orange-600">Pokemon Svelte</h1>
  <div class="grid grid-cols-3 grid-flow-row gap-8 rounded-xl">
    <button
      class="p-2 bg-sky-100 text-sky-900 font-bold text-xl rounded-lg border border-sky-600 shadow shadow-sky-600 transition-transform hover:scale-105"
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
