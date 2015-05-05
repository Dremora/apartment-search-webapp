import Ember from 'ember';

export default Ember.Component.extend({
  values: [],

  expanded: false,

  allEnabled: function () {
    return this.get('disabledCount') === 0;
  }.property('disabledCount'),

  enabledCount: function () {
    return this.get('total') - this.get('disabledCount');
  }.property('disabledCount', 'total'),

  total: function () {
    return this.get('values').length;
  }.property('values.length'),

  disabledCount: function () {
    return this.get('filtered').length;
  }.property('filtered.length'),

  checkedValues: function () {
    var filtered = this.get('filtered');
    return this.get('values').map((value) => {
      return {
        value: value,
        checked: !filtered.contains(value)
      };
    }).sortBy('value');
  }.property('values', 'filtered.@each'),

  actions: {
    checked(object, value) {
      this.sendAction('action', this.get('param'), object.value, value);
    },

    toggle() {
      this.set('expanded', !this.get('expanded'));
    },

    clear() {
      this.get('filtered').forEach((val) => {
        this.sendAction('action', this.get('param'), val, true);
      });
    }
  }
});
