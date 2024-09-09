<script>
import Points from '$lib/components/Points.svelte';
    import Tile from '$lib/components/Tile.svelte';
    import Title from '$lib/components/Title.svelte';
    import { page } from '$app/stores';
	import { onMount } from 'svelte';
    import { getSheet } from '$lib/common/data';
    import Loader from '$lib/components/Loader.svelte';
	import { getUser } from "$lib/common/functions";

    let game = $page.params.game;
    let isLoading = true;
    /**
     * @type {spreadsheet}
     */
    let sheet;
    /**
     * @type {Array.<userScore>} scores
     */
    let scores = [];
    let totalMatches = 0;
    let winRatio = 0;
    const user = getUser();
    onMount(async () => {
        sheet = await getSheet(game);
        isLoading = false;
        for (let [index, data] of sheet.sheets[0].data[0].rowData.entries()) {
            data.values.forEach((value, i) => {
                if (index == 0) {
                    const player = {
                        email: value.formattedValue,
                        isMainPlayer: value.formattedValue.split('|')[1].toLowerCase() == user.email,
                        score: 0
                    }
                    scores.push(player);
                }
                else {
                    totalMatches += parseInt(value.formattedValue);
                    scores[i].score += parseInt(value.formattedValue);
                }
            })
        }
        winRatio = Math.round(((scores.find(user => user.isMainPlayer)?.score || 0) / totalMatches) * 100);
    });
</script>

<main>
    <section>
        <Title>{game}</Title>
    </section>
    <section id="results">
        {#if isLoading}
            <Loader />
        {:else }
            <Points {scores} picture={user.picture} />
        {/if}
    </section>
    {#if !isLoading}
        <section id="statistics">
            <div>
                <Tile>
                    <div class="progress-fill" style={`width:${winRatio}%;`}>
                        <div class="animated-fill"></div>
                    </div>
                    <div class="win-ratio">
                        <h1>{winRatio}%</h1>
                    </div>
                </Tile>
                <Tile>
                    <div class="match-counter">
                        <h1 class="stroked-text">{totalMatches}</h1>
                        <p>Matches played</p>
                    </div>
                </Tile>
            </div>
        </section>
    {/if }
</main>

<style>
    #statistics {
        margin-top: var(--size-sm);
    }
    #statistics > div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: var(--size-sm);
    }
    .match-counter {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1;
    }
    :is(.match-counter, .win-ratio) :is(h1, p) {
        margin: 0;
    }
    :is(.match-counter, .win-ratio) h1 {
        font-size: var(--size-xl);
        font-weight: 800;
    }
    .match-counter p {
        font-weight: 500;
    }
    .win-ratio {
        text-align: center;
    }
    .progress-fill {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
    .animated-fill {
        height: 100%;
        background-color: rgba(252 251 0 / 30%);
        animation: fill 0.5s cubic-bezier(0.65, 0.28, 0.5, 0.9);
    }
    @keyframes fill {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }
</style>