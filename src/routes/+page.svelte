<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  onMount(() => {
    setTimeout(() => {
      goto('/cardeals');
    }, 3000);
  });
</script>

<img src="https://scontent.fdel8-2.fna.fbcdn.net/v/t39.30808-1/301397396_431996515660738_163883372282664446_n.png?stp=dst-png_p120x120&_nc_cat=104&ccb=1-7&_nc_sid=4da83f&_nc_ohc=13QbgOO8dy0AX-8RXNv&_nc_ht=scontent.fdel8-2.fna&oh=00_AfC7SPSgiPFhFtURsRscXPwrjHJJS6LzSocaDKJY58aycQ&oe=65E4DAD3" alt="">

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
