<script>
    import Header from "$lib/components/Header.svelte";
    import { isAuthenticated } from "$lib/stores/auth.store";
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
	import { Toaster } from "svelte-french-toast";
    import { initializeApp } from "firebase/app";

    const firebaseConfig = {
        apiKey: "AIzaSyAxx3vtvz1kBuRHhKgVXbJq-OotlMHNqOc",
        authDomain: "scorescribe-7f80b.firebaseapp.com",
        projectId: "scorescribe-7f80b",
        storageBucket: "scorescribe-7f80b.appspot.com",
        messagingSenderId: "111101903772",
        appId: "1:111101903772:web:7173e6d276b48616abfe59",
        measurementId: "G-K31M7H85QF"
    };

    const app = initializeApp(firebaseConfig);
    console.log(app);

    $: if (browser && $page.url.pathname == '/' && $isAuthenticated)
        goto('/games')

    $: if (browser && $page.url.pathname != '/' && !$isAuthenticated)
        goto('/')

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
  