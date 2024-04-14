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

function preload() {
    this.load.image("sky", "assets/sky.png");
    this.load.image("ground", "assets/platform.png");
    this.load.image("star", "assets/star.png");
    this.load.image("bomb", "assets/bomb.png");
    this.load.spritesheet("dude", "assets/dude.png", {
        frameWidth: 32,
        frameHeight: 48
    });
}

function create() {
    this.add.image(400, 300, "sky");
    this.add.image(400, 300, "star");
}

function update() {}
//# sourceMappingURL=index.js.map
