"use strict"

let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    width: 1000,
    height: 800,
    scene: [Frogger],
    fps: { forceSetTimeOut: true, target: 30 }
}

var my = {sprite: {}};

const game = new Phaser.Game(config);