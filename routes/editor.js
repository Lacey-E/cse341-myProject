const express = require("express");
const Router = express.Router();
const { headlineValidationRules, validate, editorValidationRules } = require('../validator.js');




const editorController = require("../controllers/editor.js");

Router.get("/", editorController.getAll);

Router.get("/:id", editorController.getSingle);


Router.delete("/:id", editorController.deleteEditor);

Router.put('/:id', editorValidationRules(), validate, editorController.updateEditor);


Router.post("/", editorValidationRules(), validate, editorController.createEditor);
 

module.exports = Router;
// const graphql, {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString} = require('graphql');
// const {graphqlHTTP} = require('express-graphql');

// const headlineType  = new QraphQlObjectType({
//     name: "User",
//     fields: () => ({
//         id: {type: GraphQLInt}
//     })

// })

// const RootQuery =  new GraphQLObjectType({
// name: "RootQueryType",
// fields: {

// }

// })
// const Mutation = "mutation"

// const schema = new GraphQLSchema({query: RootQuery, mutation: Mutation})

// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphql: true
// }))