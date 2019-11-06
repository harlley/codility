function solution(N) {
  
  if (N < 0 || N > 2147483647) { throw new Error("Number is out from range [1..2,147,483,647]") };

  let bin = Number(N).toString(2);
  
  // it is needed at leat 2 digits 1 to create a gap, 
  // So returns zero if there is just one digit 1 on the string, 
  if (bin.split("").filter(v => v === "1").length === 1) {
    return 0;
  }

  let regex = new RegExp(/1?0+1/g);

  if (regex.test(bin)) {
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
        endGap = true;
        gaps.push(sizeCurrentEventualGap);
      }
      if (bit === '0' && startGap && !endGap) { // counting
        sizeCurrentEventualGap = sizeCurrentEventualGap + 1;
      }
    }
    return Math.max.apply(null, gaps);
  }
  else {
    return 0;
  }

}

export default solution;

    //console.log(bin.split("1"));
    // const gapsLen = bin.split("1").map(val => val.length);
    // return Math.max.apply(null, gapsLen);
    //console.log(...bin);

// console.log("solution() =  ~>", solution(1041));
// console.log("solution() =  ~>", solution(32));
// console.log("solution() =  ~>", solution(9));
// console.log("solution() =  ~>", solution(20));
// console.log("solution() =  ~>", solution(15));
// console.log("solution() =  ~>", solution(6));
// console.log("solution() =  ~>", solution(328));
// console.log("solution() = 2 ~>", solution(51712));
