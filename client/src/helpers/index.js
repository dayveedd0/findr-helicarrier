// Create Reusable Grouping function using array.reduce this function returns
// an object with each of the equivalent grouped data as keys(group,children)
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
  // we use Object.values method
  return Object.values(data);
};
