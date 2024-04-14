My port of the [Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game) tutorial examples to Rollup

[Topic on the Phaser forum](https://phaser.discourse.group/t/please-help-me-to-update-the-mdn-2d-breakout-tutorial-to-phaser-3-80-1/14203)

Playground:

- [Part 01: Introduction](https://plnkr.co/edit/0bfan50fyy6nPbJh?preview)
- [Part 02. Loading assets](https://plnkr.co/edit/oVMw7XAGWCg5tNQU?preview)
- [Part 03. World Building](https://plnkr.co/edit/TX3O3csfPCPMBClE?preview)
- [Part 04. The Platforms (explanation)](https://plnkr.co/edit/cqcY5p7e5hY9ntcT?preview)
- [Part 05. Ready Player One](https://plnkr.co/edit/aqdvxQLnXdXE5SWl?preview)
- [Part 06. Body velocity](https://plnkr.co/edit/Bn4l8iQd45Kcp59U?preview)
- [Part 07. Controlling the player with the keyboard](https://plnkr.co/edit/l6vMdQK4nqhO6D8f?preview)
- [Part 08. Stardust](https://plnkr.co/edit/R56rIkhXcl03ZpN1?preview)
- [Part 09. A score to settle](https://plnkr.co/edit/9jqMKsTcA22y67Dc?preview)
- [Part 10. Bouncing Bombs](https://plnkr.co/edit/Xp05cENREbp91yuH?preview)

Instructions for building and running the project in debug and release:

- Download and unzip this repository

- Open the command line terminal and go to the lesson folder

- Install the next packages globally with the command:

> npm i -g http-server rollup uglify-js

- Add the Rollup bin folder to the Path. Type this command to know where npm was installed `npm config get prefix`. This command will show you the npm location. You will find the "node_modules" folder there. Go to the "rollup/bin" folder and copy this path, for example for me: `C:\Users\8Observer8\AppData\Roaming\npm\node_modules\rollup\dist\bin`. Add this folder to the path variable.

- Run http-server in the project directory:

> http-server -c-1

Note. The `-c-1` key allows you to disable caching.

- Start development mode with the following command:

> npm run dev

Note. Rollup will automatically keep track of saving changes to files and build a new index.js file ready for debugging. You can debug your project step by step in the browser by setting breakpoints.

- Go to the browser and type the address: localhost:8080/index.html

- Create a compressed file ready for publishing. Stop development mode, for example, with this command Ctrl + C in CMD, if it was launched before and enter the command:

> npm run release

Note. After this command, Rollup will create a compressed index.js file. Compression is done using the uglify-js package.
