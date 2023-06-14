const express = require("express");
const Router = express.Router();
const { headlineValidationRules, validate } = require('../validator.js');


const authenticated = (req,res,next) => {
    try{
        if (req.session.token){
            next()
        }else{
            throw new Error("Please Login to Continue........")
        }
    }catch(err){
        res.status(400).json({message:err.message})
    }
}



const headlinesController = require("../controllers/headlines");

Router.get("/", headlinesController.getAll);

Router.get("/:id", headlinesController.getSingle);


Router.delete("/:id", authenticated, headlinesController.deleteHeadline);

Router.put('/:id', authenticated, headlineValidationRules(), validate, headlinesController.updateHeadlines);


Router.post("/", authenticated, headlineValidationRules(), validate, headlinesController.createHeadline);
 

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