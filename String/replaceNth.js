function replaceNth(strs, n, repl) {
    return strs.map(str => 
      str.substring(0, n) + repl + str.substring(n + 1)
    );
  }

  // Example usage:
  const strings = ["hello", "world", "foo", "bar"];
  const result = replaceNth(strings, 2, "xyz");
  console.log(result); // Output: ["helxyzo", "worxyzd", "foxyz", "bar"]