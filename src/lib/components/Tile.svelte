<div class="tile">
    <slot></slot>
</div>

<style>
    .tile {
        border: 1px solid var(--secondary-color);
        border-radius: var(--size-sm);
        min-height: calc(6 * var(--size-sm));
        display: grid;
        place-content: center;
        grid-template-columns: 1fr;
        overflow: hidden;
        position: relative;
    }
</style>