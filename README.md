# Rock Paper Scissors

Rock Paper Scissors against the computer. First to 3 points wins.

**[Play it →](https://denizsev.github.io/rock_paper_scissors/)**

## Features

- Score board, round result and a coloured flash for win, loss and draw
- Game ends at 3 points; the buttons lock until you restart
- Keyboard and screen-reader friendly buttons (`aria-label`, visible focus)
- Responsive layout for phones

## How it works

`getWinner(player, computer)` compares the two moves; the computer picks with `Math.random()`. The buttons share one handler that reads the move from `data-choice`.

## Run locally

Open `index.html` in a browser.

Built as part of [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors).

## License

[MIT](LICENSE)
