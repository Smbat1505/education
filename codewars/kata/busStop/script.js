function number(busStops) {
  let passengers = 0;
  for (const element of busStops) {
    passengers += element[0];
    passengers -= element[1];
  }
  return passengers;
  // console.log(passengers);
}

!TODO Example

/* number([
  [10, 0],
  [3, 5],
  [5, 8],
]); */
