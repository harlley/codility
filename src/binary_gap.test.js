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

