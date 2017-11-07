/**
 * Link.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    link_id : {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type : 'string'
    },
    url : {
        type : 'string'
    }

    // A reference to profile
    profile : {
        model : 'profile'
    }
  }
};

