import test from "ava";

import recurrent from "../recurrent.js";

test("fibonacci", async (t) => {
  const generator = recurrent(([a, b]) => [b, a + b], [0, 1]);
  const iter = generator[Symbol.asyncIterator]();

  t.deepEqual(await iter.next(), { value: [0, 1], done: false });
  t.deepEqual(await iter.next(), { value: [1, 1], done: false });
  t.deepEqual(await iter.next(), { value: [1, 2], done: false });
  t.deepEqual(await iter.next(), { value: [2, 3], done: false });
  t.deepEqual(await iter.next(), { value: [3, 5], done: false });
  t.deepEqual(await iter.next(), { value: [5, 8], done: false });
  t.deepEqual(await iter.next(), { value: [8, 13], done: false });
});
