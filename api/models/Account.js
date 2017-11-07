/**
 * Account.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
  attributes: {
    id : {
        type: 'integer',
        primaryKey: true
    }
    username : {
        type : 'string',
        required: true,
        unique : true
    },
    password : {
        type : 'string'
    },
    
    profile : {
        collection: 'profile',
        via: 'account'
    }
}
};
