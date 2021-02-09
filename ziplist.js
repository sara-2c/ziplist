const testList = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];
function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

console.log(zipList(testList, testList2));

function zipListTheSimpleWay(list1, list2) {
  const result = _.zip(list1, list2);
  return _.flatten(result);
}

console.log(zipListTheSimpleWay(testList, testList2));
