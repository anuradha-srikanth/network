/**
 * Skill.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id : {
        type : 'integer'
    }

    name : {
        type : 'string',
        required: true   
    },
    proficiency : {
        type : 'integer'
    },

    // A reference to profile
    profile : {
        model : 'profile'
    }

  }
};

