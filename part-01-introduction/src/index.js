import { WEBGL, Game, Scale } from "phaser3";

const config = {
    type: WEBGL,

    width: 800,
    height: 600,
    scaleMode: Scale.ScaleModes.FIT,
    autoCenter: Scale.Center.CENTER_BOTH,

    autoFocus: true,
    scene: { preload, create, update },
    backgroundColor: "#eee"
};

const game = new Game(config);

function preload() {}

function create() {}

function update() {}
