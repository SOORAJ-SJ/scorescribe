<script>
    export let width = 32;
    export let height = 32;
</script>

<div class="spinner-wrapper">
    <div class="spinner" style:width={`${width}px`} style:height={`${height}px`}></div>
</div>

<style>
    .spinner-wrapper {
        display: flex;
        justify-content: center;
    }
    .spinner {
        border: calc(var(--size-sm) / 4) solid var(--secondary-color);
        border-top: calc(var(--size-sm) / 4) solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>