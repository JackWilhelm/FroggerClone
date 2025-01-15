class Frogger extends Phaser.Scene {
    constructor() {
        super("froggerScene");
        this.my = {sprite: {}};
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
        if (this.downKey.isDown) {
            this.my.sprite.frog.y += 5;
        }
        if (this.upKey.isDown) {
            this.my.sprite.frog.y -= 5;
        }
        if (this.leftKey.isDown) {
            this.my.sprite.frog.x -= 5;
        }
        if (this.rightKey.isDown) {
            this.my.sprite.frog.x += 5;
        }
    }
}