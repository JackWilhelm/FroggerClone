class Frogger extends Phaser.Scene {
    constructor() {
        super("froggerScene");
        this.my = {sprite: {}};
        this.jumpReady = true;
        this.jumpCooldown = 500; //ms
        this.jumpDistance = 50;
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
            this.my.sprite.frog.y += this.jumpDistance;
            this.jumpUsed();
        }
        if (this.upKey.isDown && this.jumpReady) {
            this.my.sprite.frog.y -= this.jumpDistance;
            this.jumpUsed();
        }
        if (this.leftKey.isDown && this.jumpReady) {
            this.my.sprite.frog.x -= this.jumpDistance;
            this.jumpUsed();
        }
        if (this.rightKey.isDown && this.jumpReady) {
            this.my.sprite.frog.x += this.jumpDistance;
            this.jumpUsed();
        }
    }

    jumpRefreshed() {
        this.jumpReady = true;
        return;
    }

    jumpUsed() {
        this.jumpReady = false;
        this.time.delayedCall(this.jumpCooldown, this.jumpRefreshed, null, this);
    }
}

