class Frogger extends Phaser.Scene {
    constructor() {
        super("froggerScene");
        this.my = {sprite: {}};
        this.jumpReady = true;
        this.jumpCooldown = 500; //ms
        this.jumpDistance = 50;
        this.jumpDuration = 200; //ms
    }

    preload() {
        
    }

    create() {  
        this.my.sprite.frog = this.add.ellipse(config.width/2, config.height/2, 50, 50, 0x8000);
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }
    
    update() {
        if (this.downKey.isDown && this.jumpReady) {
            this.jump("down");
        }
        if (this.upKey.isDown && this.jumpReady) {
            this.jump("up");

        }
        if (this.leftKey.isDown && this.jumpReady) {
            this.jump("left");
        }
        if (this.rightKey.isDown && this.jumpReady) {
            this.jump("right");
        }
    }

    jumpRefreshed() {
        this.jumpReady = true;
    }

    jump(direction) {
        if (direction == "down") {
            this.tweens.add({
                targets: this.my.sprite.frog,
                y: this.my.sprite.frog.y + this.jumpDistance,
                duration: this.jumpDuration
            });
        } else if (direction == "up") {
            this.tweens.add({
                targets: this.my.sprite.frog,
                y: this.my.sprite.frog.y - this.jumpDistance,
                duration: this.jumpDuration
            });
        } else if (direction == "right") {
            this.tweens.add({
                targets: this.my.sprite.frog,
                x: this.my.sprite.frog.x + this.jumpDistance,
                duration: this.jumpDuration
            });
        } else if (direction == "left") {
            this.tweens.add({
                targets: this.my.sprite.frog,
                x: this.my.sprite.frog.x - this.jumpDistance,
                duration: this.jumpDuration
            });
        }
        this.jumpReady = false;
        this.time.delayedCall(this.jumpCooldown, this.jumpRefreshed, null, this);
    }
}

