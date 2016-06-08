function swapColors() {
    var oldColor = this.style.color,
        oldBGCol = this.style.backgroundColor;

    this.style.color = oldBGCol;
    this.style.backgroundColor = oldColor;
};

module.exports = {
    assignEvents: function () {
        $("#clickable-span").on('click', swapColors);

        $("#hoverable-span")
            .mouseover(function (e) {
                $(this).css('color', 'white').css('background-color', 'blue');
            })
            .mouseout(function (e) {
                $(this).css('color', 'black').css('background-color', 'white');
            });

        $(".hover-event-box")
            .mouseover(function (e) {
                $(this).css('background-color', 'green');
            })
            .mouseout(function (e) {
                $(this).css('background-color', 'white');
            });
    }

};