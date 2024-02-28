


<script>
  import Card from './Card.svelte';
  import "../../../src/app.css"
  export let data;
  console.log(data)
  //  conts  deals = data.dealership_email;
</script>
<h1>Dealerships </h1>

{#each data.postcodes as dealership}
  <!-- Loop through the data and render a Card component for each item -->
  <Card {dealership}/>
{/each}


