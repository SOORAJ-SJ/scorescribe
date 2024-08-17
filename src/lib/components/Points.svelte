<script>
    import Avatar from "./Avatar.svelte";
    import Point from "./Point.svelte";

    /**
     * @type {Array.<userScore>} scores
     */
    export let scores;
    export let picture;

    const mainPlayer = scores.find(player => player.isMainPlayer);
    const otherPlayer = scores.find(player => !player.isMainPlayer)

    /**
     * 
     * @param {string} nameString
     * @returns {string}
     */
    const getName = (nameString) => {
        return nameString.split('|')[0];
    }
</script>

<div class="points-card">
    <div class="player">
        <div class="points">
            <Avatar name={getName(mainPlayer?.email || 'Player 1')} url={picture} />
            <Point stroked={true}>{mainPlayer?.score}</Point>
        </div>
    </div>
    <div class="versus">
        <img src="/images/versus.png" alt="versus logo" width="40">
    </div>
    <div class="opponent">
        <div class="points">
            <Point>{otherPlayer?.score}</Point>
            <Avatar name={getName(otherPlayer?.email || 'Player 2')} />
        </div>
    </div>
</div>

<style>
    .points-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid var(--secondary-color);
        padding: var(--size-xxs);
        border-radius: 1rem;
        height: 5rem;
        overflow: hidden;
    }
    .points {
        display: flex;
        align-items: center;
    }
</style>