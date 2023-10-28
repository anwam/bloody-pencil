<script lang="ts">
  import loadingStore from "../stores/loading.store";
  import { pokemonStore } from "../store";
</script>

<div
  class="col-span-3 grid grid-cols-3 grid-flow-row mb-4 capitalize font-semibold"
>
  {#if $loadingStore === "idle"}
    {#if $pokemonStore}
      <p class="font-bold text-xl col-span-3">Types</p>
      {#each $pokemonStore?.types as type}
        <p>{type.type?.name}</p>
      {/each}
      <p class="font-bold text-xl col-span-3">Stats</p>
      {#each $pokemonStore?.stats as stat}
        <div>
          <span>{stat.stat.name}:</span>
          <span>{stat.base_stat}</span>
        </div>
      {/each}
    {/if}
  {/if}
</div>
