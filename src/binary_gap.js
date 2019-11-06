function solution(N) {
  
  if (N < 0 || N > 2147483647) { throw new Error("Number is out from range [1..2,147,483,647]") };

  let bin = Number(N).toString(2);
  
  // it is needed at leat 2 digits 1 to create a gap, 
  // So returns zero if there is just one digit 1 on the string, 
  if (bin.split("").filter(v => v === "1").length === 1) {
    return 0;
  }

  let gaps = [];
  let startGap = false;
  let endGap = false;
  let sizeCurrentEventualGap = 0;
    
  for (let bit of bin) {
    if (bit === '1' && !startGap && !endGap) { // start counting
      startGap = true;
      continue;
    }
    if (bit === '1' && startGap) { // finish couting
      gaps.push(sizeCurrentEventualGap);
      sizeCurrentEventualGap = 0;
    }
    if (bit === '0' && startGap && !endGap) { // counting
      sizeCurrentEventualGap = sizeCurrentEventualGap + 1;
    }
  }

  return Math.max.apply(null, gaps);

}

export default solution;
