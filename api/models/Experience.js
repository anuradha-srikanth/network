/**
 * Experience.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    exp_id : {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type : 'string'
    },
    description : {
        type : 'longtext'
    }, 
    start_date : {
        type : 'date'
    },
    end_date : {
        type : 'date'
    },
    designation : {
        type : 'string'
    },


    // A reference to profile
    profile : {
        model : 'profile'
    }

  }
};

