const express = require("express");
const app = express();
const PORT = 6969;
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema");

app.use(cors());
app.use(express.json());
//Implemented the graphql api using the schema
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

//started the Express server
app.listen(PORT, () => {
  console.log(`Welcome to Findr I am running on https://localhost:${PORT}`);
});
