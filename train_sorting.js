function train_sort(n, trains) {
  const sort = (trains) => {
    let sortedTrains = [];
    for (let weight of trains) {
      if (sortedTrains.length === 0) {
        sortedTrains.push(weight);
      } else if (weight > sortedTrains[0]) {
        sortedTrains.unshift(weight);
      } else if (weight <= sortedTrains[sortedTrains.length - 1]) {
        sortedTrains.push(weight);
      }
    }
    return sortedTrains.length;
  };
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    const length = sort(trains.slice(i));
    if (length > maxLength) {
      maxLength = length;
    }
  }

  return maxLength;
}

console.log(train_sort(5, [1, 2, 3]));
