import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForAttribute(key) {
    return Ember.String.underscore(key);
  },

  keyForRelationship(key) {
    return Ember.String.underscore(key);
  }
});
