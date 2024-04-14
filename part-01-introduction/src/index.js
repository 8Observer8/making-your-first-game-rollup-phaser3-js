import { AUTO, Game, Scale } from "phaser3";

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

const game = new Game(config);

function preload() {}

function create() {}

function update() {}
