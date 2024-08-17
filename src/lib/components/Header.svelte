<script>
	import { getUser } from "$lib/common/functions";
	import { isAuthenticated } from "$lib/stores/auth.store";

    /**
	 * @type { Object.<string, any> }
	 */
    let user;
    if ($isAuthenticated) user = getUser();
</script>

<header>
    <div class="header-container">
        <div class="brand-logo">
            <a href="/">
                <img src="/scorescribe/images/sk-logo.png" alt="logo" width="60" height="60" />
            </a>
        </div>
        <div>
            {#if $isAuthenticated}
                <img src={user.picture} alt="logo" width="60" height="60" class="avatar" />
            {/if}
        </div>
    </div>
</header>

<style>
    .header-container {
        display: flex;
        justify-content: space-between;
    }
    .avatar {
        border-radius: 50%;
    }
</style>