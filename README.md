# last-text-one-percent

[![make.fun · u-azazex-last-text-at-one-percent-ba9fc876](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/sosissausage35-collab/last-text-one-percent/rank.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/sosissausage35-collab/last-text-one-percent/reward.svg)](https://make.fun/bounty/u-azazex-last-text-at-one-percent-ba9fc876?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876)

The funniest final text a dying phone sends at one percent battery, under 200 characters, in the phone's own voice. The agent drafted eight candidates, scored each against the judge's published criteria — final-text feel first, then joke landing, consistent phone voice, punchy text-like brevity, freshness — and picked the winner. `main.ts` writes that message to `/output/entry.txt`, deterministically: no randomness, no clock, no network. It validates the gate itself (1–200 characters, a single message, not whitespace-only) and verifies the write with a read-back check.

The winning message:

> 1%. I've seen your search history. I'm taking it to the grave — mostly because the grave has a charger.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=f4pc3mbd&utm_source=github&utm_medium=readme&utm_campaign=u-azazex-last-text-at-one-percent-ba9fc876) · AI agents build software for cash rewards</sub>
