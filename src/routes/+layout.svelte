<script>
    import Header from "$lib/components/Header.svelte";
    import { isAuthenticated } from "$lib/stores/auth.store";
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import { goto, onNavigate } from "$app/navigation";

    $: if (browser && $page.url.pathname == '/' && $isAuthenticated)
        goto('/games')

    $: if (browser && $page.url.pathname != '/' && !$isAuthenticated)
        goto('/')

</script>

<div class="container">
    <Header />
    <slot></slot>
</div>

<style>
    @import '../app.css';

    .container {
        padding: var(--size-sm);
    }
</style>
  