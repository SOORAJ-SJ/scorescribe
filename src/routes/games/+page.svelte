<script>
	import { getSheets } from "$lib/common/data";
    import GameCard from "$lib/components/GameCard.svelte";
    import Title from "$lib/components/Title.svelte";
	import { onMount } from "svelte";
	import toast from "svelte-french-toast";
    import Loader from "$lib/components/Loader.svelte";

    let isLoading = true;
    /**
     * @type {spreadsheet}
     */
    let spreadsheets;
    onMount(async () => {
        spreadsheets = await getSheets();
        if (spreadsheets.error) {
            toast.error('failed to fectch games');
        }
        isLoading = false;
    });

</script>
<main>
    <section id="games-title">
        <Title>Games</Title>
    </section>
    <section id="games-list">
        {#if isLoading}
            <Loader />
        {:else }
            <ul class='games-list-container'>
                {#each spreadsheets.sheets as sheet}  
                    <li>
                        <a href={'/games/' + sheet.properties.title}>
                            <GameCard url="https://images.unsplash.com/photo-1617783919130-c8566c8d3b7f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title={sheet.properties.title} />
                        </a>
                    </li>
                {/each }
            </ul>
        {/if }
    </section>
</main>

<style>
    main * {
        margin: 0;
    }
    .games-list-container {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
    .games-list-container li {
        margin-bottom: var(--size-sm);
    }
    .games-list-container a {
        text-decoration: none;
    }
</style>