<script>
	import { getSheets } from "$lib/common/data";
    import GameCard from "$lib/components/GameCard.svelte";
    import Title from "$lib/components/Title.svelte";
	import { onMount } from "svelte";

    onMount(async () => {
        const sheets = await getSheets();
    });

</script>
<main>
    <section id="games-title">
        <Title>Games</Title>
    </section>
    <section id="games-list">
        <GameCard url="https://images.unsplash.com/photo-1617783919130-c8566c8d3b7f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="UNO" />
    </section>
</main>

<style>
    main * {
        margin: 0;
    }
</style>