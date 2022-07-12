const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

//Create the UserType According to the strucure of data to be stored in the Database
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    fullName: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    status: { type: GraphQLString },
    country: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  }),
});

//Export the UserType
module.exports = UserType;
