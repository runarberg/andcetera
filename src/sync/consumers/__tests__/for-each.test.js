import test from "ava";

import { pipe } from "../../../index.js";
import { of } from "../../index.js";
import forEach from "../for-each.js";

test("forEach", (t) => {
  /** @type string[][] */
  const calls = [];

  pipe(
    of("a", "b", "c"),
    forEach((...args) => calls.push(args)),
  );

  t.deepEqual(calls, [["a"], ["b"], ["c"]]);
});
