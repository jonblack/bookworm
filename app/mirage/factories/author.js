import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    name: function() {
        return faker.name.firstName() + " " + faker.name.lastName();
    }
});
