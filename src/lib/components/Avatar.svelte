<script>
    export let url = undefined;
    export let alt = 'Avatar Image';
    export let name;
</script>

<div class="avatar">
    {#if url}
        <img src={url} alt={alt} />
    {:else}
        <div class="avatar-placeholder">{name[0]}</div>
    {/if}
    <p>{name}</p>
</div>

<style>
    .avatar {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .avatar img, .avatar-placeholder {
        height: var(--size-xl);
        width: var(--size-xl);
        border-radius: 50%;
    }
    .avatar-placeholder {
        background-color: var(--primary-color);
        outline: 1px solid var(--secondary-color);
        display: grid;
        place-content: center;
        font-size: var(--size-lg);
        font-weight: 800;
    }
    .avatar p {
        margin: 0;
        margin-top: calc(var(--size-xxs) / 4);
    }
</style>