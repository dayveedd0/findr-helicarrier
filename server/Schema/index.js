const {
  GraphQLList,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require("graphql");

//import UserType for use in Schema
const UserType = require("./TypeDefs/UserType");

// Called in the mock database data to be used
const userData = require("../MOCK_DATA.json");

//Create the RootQuery to Draw all Data from the Database
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

//Created Mutation to add new User to the Database
const Mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        fullName: { type: GraphQLString },
        phoneNumber: { type: GraphQLString },
        status: { type: GraphQLString },
        country: { type: GraphQLString },
        createdAt: { type: GraphQLString },
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          fullName: args.fullName,
          phoneNumber: args.phoneNumber,
          status: args.status,
          country: args.country,
          createdAt: args.createdAt,
        });
        return args;
      },
    },
  },
});

//export the schema from Queries and Mutations
module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
