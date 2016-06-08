function swapColors() {
    var oldColor = this.style.color,
        oldBGCol = this.style.backgroundColor;

    this.style.color = oldBGCol;
    this.style.backgroundColor = oldColor;
};

module.exports = {
    assignEvents: function () {
        
    }

};