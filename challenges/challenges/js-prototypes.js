module.exports = {
    prototyping: function () {
        var answers = {};

        try {
            function Address(street, city, state) {
                this.street = street;
                this.city = city;
                this.state = state;

                this.getAddress = function() {
                    return this.street + ", " + this.city + ", " + this.state;
                };

                this.getCityState = function() {
                    return this.city + ", " + this.state;
                };
            }

            var addr = new Address('N16W23217 Stone Ridge Drive', 'Pewaukee', 'WI');
            answers['pke-addr'] = addr.getAddress();

            addr.city = 'Waukesha';
            answers['wau-addr'] = addr.getAddress();

            addr.zipCode = 53188;
            answers['zip-code'] = addr.zipCode;

            var addr2 = new Address('901 Pasadena Parkway', 'Waunakee', 'WI');
            answers['wauna-addr'] = addr2.getAddress();

            answers['city-state-1'] = addr.getCityState();

            answers['city-state-2'] = addr2.getCityState();
        } catch(e) {
            //This can be left alone for now.
        }

        return answers;
    }
};