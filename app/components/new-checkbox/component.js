import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['type', 'value', 'checked'],
  tagName: 'input',
  type: 'checkbox',
  checked: false,

  _updateElementValue: function() {
    this.set('checked', this.$().prop('checked'));
  }.on('didInsertElement'),

  change: function () {
    this._updateElementValue();

    this.sendAction('action', this.get('value'), this.get('checked'));
  }
});
