<script>
  import Avatar from "./Avatar.svelte";
  import Point from "./Point.svelte";

</script>

<div class="points-card">
    <div class="player">
        <div class="points">
            <Avatar name="John" />
            <Point stroked={true}>20</Point>
        </div>
    </div>
    <div class="versus">
        <img src="/images/versus.png" alt="versus logo" width="40">
    </div>
    <div class="opponent">
        <div class="points">
            <Point>20</Point>
            <Avatar name="Player" />
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