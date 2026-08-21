# mission-progress

Live progress board for the Gideon build programme at Manfred Legal.

**View the board:** https://manfred-legal-pty-ltd.github.io/mission-progress/

The board tracks the programme end to end: milestone gates and the evidence behind them, the phase schedule, mission validation counts, decisions waiting on a call, remarks, and a day-by-day log of what actually happened.

## How it works

- `index.html` renders the board. Plain HTML and JavaScript, no build step.
- `data.js` holds all the content. Updating the board means editing this file and pushing; GitHub Pages serves the result.

The board is updated at the end of each working day.
