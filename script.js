var Keyboard = Keyboard || {};

Keyboard.Keymap = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
};

Keyboard.ControllerEvents = function(){
    var self = this;
    this.pressKey = null;
    this.keymap = Keyboard.Keymap;

    document.onkeydown = function(event) {
        self.pressKey = event.which;
    };

    this.getKey = function() {
        return this.keymap[this.pressKey];
    };
};