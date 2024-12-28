function findUnion(arr1, arr2) {
  let union = arr1.filter((ele) => {
    return !arr2.includes(ele);
  });

  union = union.concat(
    arr2.filter((ele) => {
      return !arr1.includes(ele);
    })
  );

  return [...new Set(union)];
}

console.log(findUnion([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])); // [4, 5]
