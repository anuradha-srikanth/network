/**
 * Account.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
  attributes: {
    account_id : {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
    }
    username : {
        type : 'string',
        required: true,
        unique : true
    },
    password : {
        type : 'string'
    },

    // One-to-many
    // Account has one profile (singular, implemented on profile side)
    profile : {
        collection: 'profile',
        via: 'account'
    },
    // Account has a set of groups
    groups : {
        collection: 'group',
        via : 'account'
    },
    // Account has a set of events
    calendar_events : {
        collection: 'calendar_event',
        via: 'account'
    }


}
};

