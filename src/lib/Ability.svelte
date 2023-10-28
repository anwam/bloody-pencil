<script lang="ts">
  import { fade } from "svelte/transition";
  import { Skeleton, TextPlaceholder } from "flowbite-svelte";
  import { pokemonStore } from "../store";
  import loadingStore from "../stores/loading.store";
  const bgColors = [
    "bg-red-300",
    "bg-orange-300",
    "bg-amber-300",
    "bg-yellow-300",
    "bg-lime-300",
    "bg-green-300",
    "bg-emerald-300",
    "bg-teal-300",
    "bg-cyan-300",
    "bg-sky-300",
    "bg-blue-300",
    "bg-indigo-300",
    "bg-violet-300",
    "bg-purple-300",
    "bg-fuchsia-300",
    "bg-pink-300",
    "bg-rose-300",
  ];
  function getBgColors(): string {
    const r = Math.random() * bgColors.length;
    const m = Math.ceil(r) % bgColors.length;
    return bgColors[m];
  }
</script>

<div
  class="col-span-3 flex flex-row flex-grow items-center justify-start space-x-4 mb-4"
>
  <p class="text-xl font-bold">Ability</p>
  <div class="space-x-2">
    {#if $loadingStore === "idle"}
      {#if $pokemonStore?.abilities?.length}
        {#each $pokemonStore?.abilities as ability (ability.slot)}
          <span
            class={`px-2 py-1 capitalize rounded-full text-xs ${getBgColors()}`}
          >
            {ability?.ability?.name?.replace("-", " ")}
          </span>
        {/each}
      {/if}
    {:else if $loadingStore === "loading"}
      <div class="flex items-center animate-pulse space-x-2 w-full px-2 py-1">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-12" />
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-14" />
      </div>
    {:else}
      <p>failed to fetched</p>
    {/if}
  </div>
</div>
