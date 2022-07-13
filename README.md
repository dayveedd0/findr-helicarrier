# Findr - helicarrier

A global phone directory. You can search for anyone's phone number so long it has been added to the database.

###### Features that can be added to Findr

- Users can create and add phone numbers from their contact list onto the application either for global or private viewing.
- Users can select and export phone contacts to their contact list.
- Users can select **claim** and select visibility status of their contact

### Solution to Filtering data by input or filters

To add the feature of search and filtering content to be displayed, I used the **array.filter** method and applied the **.includes(query)**. Optimizing this code to apply to every column I created an array for keys which i filled with the name of each of each column to be search excluding the phoneNumber and id column **const keys =["fullName", "status", "Country"]** then used the array method **.some** on the keys array while looping through the initial array (**array[key]**) .

_code snippet_

```markdown
    array.filter(
          (value) =>
            keys.some((key) => value[key].toLowerCase().includes(query)) ||
            //searched for the phoneNumber seperately as .toLowerCase() does not apply to numbers
            value.phoneNumber.includes(query)
        )
```

_Code Can be found in client/src/components/Filter.jsx Ln 23-27_

### Solution to grouping by key

To solve the issue of grouping data by a certain key, I created a reusable function that takes in the array that needs to be grouped and returns a new array containing the keys (group) and their properties (children).

_code snippet_

```markdown
export const groupBy = (value) => {
let data = value.reduce((acc, val) => {
// get date of current element
let group = val.createdAt;
// if the property does not exist in the accumulator we create it
if (!acc[group]) acc[group] = { group, children: [val] };
// if it does push the current element to children array
else acc[group].children.push(val);
// return accumulator
return acc;
}, {});

//To get an array of values
// we use Object.values on the new array
return Object.values(data);
};
```

_Code Can be found in client/src/helpers/index.js Ln 3-18_

#### Tech Stack

**Client:** React, TailwindCSS, Apollo-Client, graphql

**Server:** Node, Express, graphql, express-graphql

# Run Locally

Clone the project

Go to the project directory

cd into client and install dependencies

```bash
  cd client
  npm install
```

cd into server and install dependencies

```bash
  cd ../server
  npm install
```

Start the project by running the following command while in the server directory

```bash
  npm run dev
```
