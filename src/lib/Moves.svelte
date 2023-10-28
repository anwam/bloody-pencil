<script lang="ts">
  import { Skeleton } from "flowbite-svelte";
  import { pokemonStore } from "../store";
  import loadingStore from "../stores/loading.store";
</script>

<p class="col-span-1 text-xl font-bold">Moves</p>
<div class="col-span-2 grid grid-cols-2 grid-flow-row">
  {#if $loadingStore === "idle"}
    {#if $pokemonStore?.moves?.length}
      {#each $pokemonStore.moves as move (move.move.name)}
        <p class="text-sky-700 underline font-bold capitalize">
          <a href={move.move.url}>
            {move.move.name.replace("-", " ")}
          </a>
        </p>
      {/each}
    {/if}
  {:else}
    <Skeleton />
  {/if}
</div>
