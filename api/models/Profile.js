/**
 * Profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 module.exports = {
  attributes: {

    // Primitive Attributes
    profile_id : {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
    }
    firstName : {
        type : 'string',
        required: true   
    },
    lastName : {
        type : 'string',
        required: true   
    },
    phone : {
        type : 'string',
    },
    website : {
        type : 'string',
        // required: true   
    },
    email : {
        type : 'email',   
    },
    // Associations (relational attributes)
    // One-to-one
    // Profile belongs to account
    account : {
        model: 'account',
        unique: true
    },

    // One-to-many
    // Profile has a collection of skill set
    skills: {
        collection: 'skill',
        via: 'profile'
    },
    // Profile has a collection of experience set
    experiences: {
        collection: 'experience',
        via: 'profile'
    },
    // Profile has a collection of projects
    projects: {
        collection: 'project',
        via: 'profile'
    },
    // Profile has a collection of calendar events
    events: {
        collection: 'calendar_events',
        via: 'profile'
    },
    // Profile has a collection of links
    links: {
        collection: 'links',
        via: 'profile'
    },

    // Functions
    getFullName: function (){
      return this.firstName + ' ' + this.lastName;
    },


}
};

