import { AUTO, Scale, Game } from 'phaser3';

const config = {
    type: AUTO,

    width: 800,
    height: 600,
    scaleMode: Scale.ScaleModes.FIT,
    autoCenter: Scale.Center.CENTER_BOTH,

    autoFocus: false,
    scene: { preload, create, update },
    backgroundColor: "#eee"
};

new Game(config);

function preload() {}

function create() {}

function update() {}
//# sourceMappingURL=index.js.map
