/**
 * Company.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    company_id : {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type : 'string',
        required: true   
    },
    location : {
        type : 'string'
    },
    phone : {
        type : 'string'
    },
    email : {
        type : 'email'
    },

    // One-to-many
    // Company has a set of events
    events : {
        collection : 'event',
        via : 'company'
    }
  }
};

