<script>
  import "../../../src/app.css";
  import Cars from "./Cars.svelte";
  export let data;
  console.log(data);
  
</script>


{#if data && data.cars && data.cars.length > 0}
  {#each data.cars as dealership}
    <!-- Loop through the data and render a Cars component for each item -->
    <Cars {dealership} />
  {/each}
{:else}
  <p>No car data available</p>
{/if}
