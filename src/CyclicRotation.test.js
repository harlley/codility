import solution from "./CyclicRotation";

test("[3, 8, 9, 7, 6] x3 equal [9, 7, 6, 3, 8]", () => {
  let A = [3, 8, 9, 7, 6];
  let K = 3; 
  expect(solution(A, K)).toEqual([9, 7, 6, 3, 8]);
});

test("[0, 0, 0] x1 equal [0, 0, 0]", () => {
  let A = [0, 0, 0];
  let K = 1; 
  expect(solution(A, K)).toEqual([0, 0, 0]);
});

test("[1, 2, 3, 4] x4 equal [1, 2, 3, 4]", () => {
  let A = [1, 2, 3, 4];
  let K = 4; 
  expect(solution(A, K)).toEqual([1, 2, 3, 4]);
});

test("[] x4 equal []", () => {
  let A = [];
  let K = 4; 
  expect(solution(A, K)).toEqual([]);
});
