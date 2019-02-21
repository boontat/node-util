import _ from 'lodash';

class Utility {
    static printSummary(text, symbol) {
		let textLength = text.length + 1;

        console.log(Array(textLength).join(symbol));
        console.log(text);
        console.log(Array(textLength).join(symbol));
    }

    static generateRandomString(possible, strLength) {
        let text = "";

        for (let i=0; i < strLength; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    static generateEmailAlias(name) {
        let shortTerm = {
            boontat: "boontat.puah@gmail.com"
        }

        let selected = shortTerm[name] || false;

        return (selected) ?
            `${selected.split("@")[0]}${_.uniqueId('+')}@${selected.split("@")[1]}`:
            selected;
    }
}

export default Utility;