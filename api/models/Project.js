/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    project_id : {
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
    // A reference to profile
    profile : {
        model : 'profile'
    }
  }
};

