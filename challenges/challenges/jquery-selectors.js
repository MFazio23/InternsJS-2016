var selectors = {
    getIDDivValue: function() {
        return $("#id-div").text();
    },
    getClassDivValue: function() {
        return $(".class-div").text();
    },
    getTwoClassDivValue: function() {
        return $(".second-class").text();
    },
    getIDClassDivValue: function() {
        return $("#class-id-div").text();
    }
};

 module.exports = selectors;