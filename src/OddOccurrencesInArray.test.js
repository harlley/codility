import solution from "./OddOccurrencesInArray";

/*
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:
*/
test("...", () => { 
  const arr = [9, 3, 9, 3, 9, 7, 9];
  expect(solution(arr)).toBe(7); 
});
