<script>
    export let stroked = false;
</script>

<div class="point" class:stroked-text={stroked}>
    <slot></slot>pt
</div>

<style>
    .point {
        margin-inline: var(--size-xxs);
        font-size: var(--size-lg);
        font-weight: 800;
    }
</style>