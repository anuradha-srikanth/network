/**
 * Skill.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    skill_id : {
        type : 'integer',
        primaryKey: true,
        autoIncrement: true
    },
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

