import solution from "./binary_gap";

test("solution(9) = 2", () => { 
  expect(solution(9)).toBe(2); 
});

test("solution(529) = 4", () => { 
  expect(solution(529)).toBe(4); 
});

test("solution(20) = 1", () => { 
  expect(solution(20)).toBe(1); 
});

test("solution(15) = 0", () => { 
  expect(solution(15)).toBe(0); 
});

test("solution(32) = 0", () => { 
  expect(solution(32)).toBe(0); 
});

test("solution(1041) = 5", () => { 
  expect(solution(1041)).toBe(5); 
});

test("solution(-2) = null", () => { 
  expect(() => {
    solution(-2);
  }).toThrow();  
});

test("solution(2147483648) = null", () => { 
  expect(() => {
    solution(2147483648);
  }).toThrow();  
});


test("solution(6) = 0", () => { 
  expect(solution(6)).toBe(0); 
});

test("solution(328) = 2", () => { 
  expect(solution(328)).toBe(2); 
});

test("solution(1162) = 3", () => { 
  expect(solution(1162)).toBe(3); 
});

test("solution(6291457) = 20", () => { 
  expect(solution(6291457)).toBe(20); 
});

/*

n=6=110_2 and n=328=101001000_2 got 1 expected 2
n=1162=10010001010_2 and n=5=101_2 got 2 expected 3
n=51712=110010100000000_2 and n=20=10100_2 got 0 expected 2
n=66561=10000010000000001_2 got 5 expected 9
n=6291457=11000000000000000000001_2 got 0 expected 20
n=74901729=100011101101110100011100001 got 3 expected 4
n=805306373=110000000000000000000000000101_2 got 0 expected 25
n=1376796946=1010010000100000100000100010010 got 1 expected 5
n=1610612737=1100000000000000000000000000001 got 0 expected 28

*/

// test("solution(6) = 0", () => { expect(solution(6)).toBe(0); });
// test("solution(328) = 2", () => { expect(solution(328)).toBe(2); });
// test("solution(51712) = 2", () => { expect(solution(51712)).toBe(2); });

