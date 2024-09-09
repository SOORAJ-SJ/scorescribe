<script>
    export let url;
    export let alt = 'Game Image';
    export let title;
</script>

<div class="game-card">
    <div class="game-title">
        <h1 class="stroked-text">{title}</h1>
    </div>
</div>

<style>
    .game-card {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--secondary-color);
        border-radius: 1rem;
        height: 5rem;
        overflow: hidden;
    }
    .game-card .game-title {
        width: 40%;
        text-align: center;
    }
    .game-card .game-title h1 {
        font-size: var(--size-xl);
        font-weight: 800;
        margin: 0;
    }
</style>