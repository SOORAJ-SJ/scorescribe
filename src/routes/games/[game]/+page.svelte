<script>
  import Points from '$lib/components/Points.svelte';
  import Tile from '$lib/components/Tile.svelte';
import Title from '$lib/components/Title.svelte';
</script>

<main>
    <section>
        <Title>Scoreboard</Title>
    </section>
    <section id="results">
        <Points />
    </section>
    <section id="statistics">
        <div>
            <Tile>
                <div class="progress-fill"></div>
                <div class="win-ratio">
                    <h1>50%</h1>
                </div>
            </Tile>
            <Tile>
                <div class="match-counter">
                    <h1 class="stroked-text">20</h1>
                    <p>Matches played</p>
                </div>
            </Tile>
        </div>
    </section>
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
        width: 50%;
        background-color: rgba(252 251 0 / 30%);
        z-index: -1;
    }
</style>