<script>
    import Header from "$lib/components/Header.svelte";
    import { isAuthenticated } from "$lib/stores/auth.store";
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
	import { Toaster } from "svelte-french-toast";

    $: if (browser && $page.url.pathname == '/scorescribe' && $isAuthenticated)
        goto('/scorescribe/games')

    $: if (browser && $page.url.pathname != '/scorescribe' && !$isAuthenticated)
        goto('/scorescribe')

</script>

<div class="container">
    <Header />
    <slot></slot>
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
</div>

<style>
    @import '../app.css';

    .container {
        padding: var(--size-sm);
    }
</style>
  