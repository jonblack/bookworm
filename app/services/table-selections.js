import Ember from 'ember';

export default Ember.Service.extend({
    selections: null,
    init() {
        this._super(...arguments);
        this.set('selections', Ember.Map.create());
    },
    add(tableId, rowId) {
        console.log("add selection");
        var selections = this.get('selections');
        if (selections.get(tableId) === undefined) {
            selections.set(tableId, Ember.A([]));
        }
        selections.get(tableId).pushObject(rowId);
        console.log(selections.get(tableId));
    },
    remove(tableId, rowId) {
        console.log("remove selection");
        var selections = this.get('selections');
        if (selections.get(tableId) === undefined) {
            return;
        }
        selections.get(tableId).removeObject(rowId);
        console.log(selections.get(tableId));
    },
    isSelected(tableId, rowId) {
        console.log("isSelected");
        var selections = this.get('selections');
        if (selections.get(tableId) === undefined) {
            return;
        }
        var index = selections.get(tableId).indexOf(rowId);
        if (index === -1) {
            return false;
        } else {
            return true;
        }
    },
});
