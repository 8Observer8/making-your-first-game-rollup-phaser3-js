import { WEBGL, Game, Scale } from "phaser3";

const config = {
    type: WEBGL,

    width: 800,
    height: 600,
    scaleMode: Scale.ScaleModes.FIT,
    autoCenter: Scale.Center.CENTER_BOTH,

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },

    autoFocus: true,
    scene: { preload, create, update },
    backgroundColor: "#eee"
};

const game = new Game(config);
let platforms, player;

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
    
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, "ground").setScale(2).refreshBody();
    platforms.create(600, 400, "ground");
    platforms.create(50, 250, "ground");
    platforms.create(750, 220, "ground");

    player = this.physics.add.sprite(100, 450, "dude");
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: "turn",
        frames: [ { key: "dude", frame: 4 } ]
    });

    this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
}

function update() {}
