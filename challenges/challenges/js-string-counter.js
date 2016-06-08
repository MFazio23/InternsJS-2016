var vowels = ['a', 'e', 'i', 'o', 'u'];

module.exports = {
    getVowelCount: function (input) {
        var count = 0,
            lcInput = input ? input.toLowerCase() : '';

        for (var i in input) {
            if (input.hasOwnProperty(i)) {
                if (vowels.includes(lcInput[i])) {
                    count++;
                }
            }
        }

        return count;
    }
};