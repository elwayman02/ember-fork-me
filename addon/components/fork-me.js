import Ember from 'ember';
import layout from '../templates/components/fork-me';

export default Ember.Component.extend({
    layout,

    classNames: ['fork-me'],

    url: '',

    text: 'Fork me on Github'
});
