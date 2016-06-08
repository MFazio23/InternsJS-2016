function invertColors(item) {
    var colorsBefore = {
        color: item.style.color,
        bg: item.style.backgroundColor
    };

    item.click();

    var colorsAfter = {
        color: item.style.color,
        bg: item.style.backgroundColor
    };

    return colorsBefore.color === colorsAfter.bg &&
        colorsBefore.bg === colorsAfter.color;
}

module.exports = {
    verifyClickableSpan: function(){
        var cSpan = document.getElementById('clickable-span');

        var colorsA = invertColors(cSpan);
        var colorsB = invertColors(cSpan);

        return colorsA && colorsB;
    },
    getElementColor: function(a, b, c) {
        console.log("Element color", a, b, c);
    }
};