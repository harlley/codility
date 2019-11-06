/*
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
*/

function solution(N) {
  
  if (N < 0 || N > 2147483647) { 
    throw new Error("Number is out from range [1..2,147,483,647]") 
  };

  // convert number to binary  
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
