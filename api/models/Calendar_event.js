/**
 * Calendar_event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cevent_id : {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
    }

    account : {
        model : 'account'
    },

    event : {
        model : 'event'
    }





  }
};

