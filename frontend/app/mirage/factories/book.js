import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    title: function() {
        return faker.company.catchPhraseAdjective() + " " + faker.company.catchPhraseNoun();
    },
});
