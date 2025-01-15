"use strict"

let config = {
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    width: 1000,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:300},
            debug: false
        }
    },
    scene: [Frogger],
    fps: { forceSetTimeOut: true, target: 30 }
}

const game = new Phaser.Game(config);