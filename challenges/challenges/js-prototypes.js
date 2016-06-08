module.exports = {
    prototyping: function () {
        var answers = {};

        try {

            answers['pke-addr'] = addr.getAddress();

            answers['wau-addr'] = addr.getAddress();

            answers['zip-code'] = addr.zipCode;

            answers['wauna-addr'] = addr2.getAddress();

            answers['city-state-1'] = addr.getCityState();

            answers['city-state-2'] = addr2.getCityState();
        } catch(e) {
            //This can be left alone for now.
        }

        return answers;
    }
};