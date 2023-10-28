<script lang="ts">
  import { ImagePlaceholder, Skeleton } from "flowbite-svelte";
  import { pokemonStore } from "../store";
  import loadingStore from "../stores/loading.store";
</script>

<div class="artwork-card">
  {#if $loadingStore === "idle"}
    <img
      class="object-contain"
      src={$pokemonStore?.sprites?.other["official-artwork"]?.front_default}
      alt={$pokemonStore?.name}
      loading="lazy"
    />
    <p class="capitalize">
      {$pokemonStore?.name?.replace("-", " ")}
    </p>
  {:else if $loadingStore === "loading"}
    <ImagePlaceholder />
  {:else}
    <!-- error -->
    <p>failed to fetch</p>
  {/if}
</div>

<style>
  .artwork-card {
    @apply col-span-3 flex flex-col justify-center items-center bg-orange-50 py-4 rounded-xl mb-4 border border-orange-600 shadow shadow-orange-600;
    min-height: 509px;
  }
</style>
