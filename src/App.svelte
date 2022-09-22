<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import type { Pokemon } from "./types/pokemon.type";

  const data = fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(
    (res) => {
      return res.json() as Promise<Pokemon>;
    }
  );
</script>

<main class="container mx-auto bg-orange-100 p-6 lg:max-w-7xl">
  <h1 class="text-4xl font-extrabold mb-5 text-orange-600">Pokemon Svelte</h1>
  {#await data}
    <p>loading</p>
  {:then value}
    <div
      class="max-w-4xl mx-auto grid grid-cols-3 grid-flow-row border-amber-600 bg-sky-50 border-2 rounded-3xl shadow shadow-amber-600 p-4"
    >
      {#if value.sprites}
        <div
          class="col-span-3 flex justify-evenly bg-sky-50 py-4 rounded-xl mb-4 border border-sky-900 shadow-md shadow-sky-300"
        >
          {#each Object.keys(value.sprites.versions["generation-ii"]) as imgUrl}
            <img
              class="object-contain"
              src={value.sprites.versions["generation-ii"][imgUrl]
                .front_default}
              alt={value.sprites.other["official-artwork"].front_default}
            />
          {/each}
        </div>
      {/if}
      {#if value.abilities}
        <p class="col-span-1">Ability</p>
        <div class="col-span-2 capitalize">
          {#each value.abilities as ability (ability.slot)}
            <p>{ability.ability.name.replace("-", " ")}</p>
          {/each}
        </div>
      {/if}
      {#if value.forms}
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
        <p class="col-span-1">Moves</p>
        <div class="col-span-2 grid grid-cols-2 grid-flow-row">
          {#each value.moves as move (move.move.name)}
            <p class="text-sky-700 underline font-bold capitalize">
              <a href={move.move.url}>
                {move.move.name.replace("-", " ")}
              </a>
            </p>
          {/each}
        </div>
      {/if}
    </div>
  {/await}
</main>

<style>
</style>
