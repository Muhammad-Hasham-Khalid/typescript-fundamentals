export type Dict<T> = { 
  [k:string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(dict: Dict<T>, fn: (arg: T, idx: number) => S): Dict<S> {
  const out:Dict<S> = {};
  Object.keys(dict).forEach((dkey, idx) => {
    const thisItem = dict[dkey];
    if (typeof thisItem !== 'undefined') out[dkey] = fn(thisItem, idx);
  });
  return out;
}

mapDict({
  a: 'a',
  b: 'b'
}, (str) => ({ val: str }))

// Array.prototype.reduce, but for Dict
export function reduceDict<T, S>(dict: Dict<T>, reducer: (val: S, item: T, idx: number) => S, initialValue: S) {
  let val: S = initialValue;
  Object.keys(dict).forEach((dkey, idx) => {
    const thisItem = dict[dkey];
    if(typeof thisItem !== 'undefined') {
      val = reducer(val, thisItem, idx);
    }
  });
  return val;
}
