// Create Reusable Grouping function using array.reduce this function returns
// an object with each of the equivalent grouped data as keys.
export const groupBy = (key, arr) =>
  arr.reduce((cache, product) => {
    const property = product[key];
    if (property in cache) {
      return { ...cache, [property]: cache[property].concat(product) };
    }
    return { ...cache, [property]: [product] };
  }, {});

//Reusable object to array converting function which returns an array of the objects properties and keys
//function returns the new array in a variable called content

export const toArray = (obj) => {
  const content = Object.entries(obj).map((entry) => entry[1]);
  return content;
};
