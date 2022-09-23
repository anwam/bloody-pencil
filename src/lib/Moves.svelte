<script lang="ts">
  import { Skeleton } from "flowbite-svelte";
  import { pokemonStore, loadingStore } from "../store";
</script>

<p class="col-span-1 text-xl font-bold">Moves</p>
<div class="col-span-2 grid grid-cols-2 grid-flow-row">
  {#if $pokemonStore?.moves?.length}
    {#if $loadingStore === false}
      {#each $pokemonStore.moves as move (move.move.name)}
        <p class="text-sky-700 underline font-bold capitalize">
          <a href={move.move.url}>
            {move.move.name.replace("-", " ")}
          </a>
        </p>
      {/each}
    {:else}
      <Skeleton />
      <Skeleton />
    {/if}
  {/if}
</div>
