const sum = (a: number, b: number) => {
  return a + b;
};

test("sumTest", () => {
  expect(sum(3, 5)).toBe(8);
});
