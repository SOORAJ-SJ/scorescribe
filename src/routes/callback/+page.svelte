<script>
    import Loader from "$lib/components/Loader.svelte";
    import { parseJWT } from "$lib/common/functions";
    import { changeAuthState } from "$lib/stores/auth.store";

    const urlSearchParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = urlSearchParams.get('access_token');
    const idToken = urlSearchParams.get('id_token');
    const idTokenClaims = parseJWT(idToken || '');
    if (!(idTokenClaims.nonce == decodeURIComponent(window.sessionStorage.getItem('nonce') || '')))
        window.location.href = '/';
    if (!accessToken || !idToken)
        window.location.href = '/';
    else {
        sessionStorage.setItem('access_token', accessToken);
        sessionStorage.setItem('id_token', idToken);
        sessionStorage.setItem('user', JSON.stringify(idTokenClaims));
        changeAuthState(true);
        window.location.href = '/games'
    }
</script>

<div class="flex">
    <p class="login-info">Please wait, you are being redirected.</p>
    <Loader />
</div>

<style>
    .login-info {
        text-align: center;
        font-size: var(--size-sm);
    }
</style>