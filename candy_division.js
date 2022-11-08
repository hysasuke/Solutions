function candy_division(numOfCandies) {
  let output = [];
  for (let i = 1; i <= numOfCandies; i++) {
    if (numOfCandies % i === 0) {
      output.push(i - 1);
    }
  }
  return output;
}
