<script lang="ts">
  import { ImagePlaceholder, Skeleton } from "flowbite-svelte";
  import { pokemonStore, loadingStore } from "../store";
</script>

<div class="artwork-card">
  {#if $loadingStore === false}
    <img
      class="object-contain"
      src={$pokemonStore?.sprites?.other["official-artwork"]?.front_default}
      alt={$pokemonStore?.name}
    />
    <p class="capitalize">
      {$pokemonStore?.name?.replace("-", " ")}
    </p>
  {:else}
    <ImagePlaceholder />
  {/if}
</div>

<style>
  .artwork-card {
    @apply col-span-3 flex flex-col justify-center items-center bg-sky-50 py-4 rounded-xl mb-4 border border-sky-900 shadow-md shadow-sky-300;
    min-height: 509px;
  }
</style>
