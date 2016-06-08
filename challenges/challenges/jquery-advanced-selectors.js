module.exports = {
    getInnerLinkText: function(){
        return $(".inner-a").find('a').text();
    },
    getSecondDivText: function(){
        return $(".class-div").last().text();
    },
    getTextFromFirstSpan: function(){
        return $(".multiple-spans").find('span').first().text();
    },
    getTextFromThirdSpan: function(){
        return $(".multiple-spans").find("span:eq(2)").text();
    },
    getEmbeddedLinkText: function(){
        return $(".embedded").find('a').text();
    },
    getFourLevelsDownText: function(){
        return $(".embedded").find('span').last().text();
    }
};