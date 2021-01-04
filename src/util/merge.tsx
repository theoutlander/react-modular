import _ from "lodash";
import deepmerge from "deepmerge";

class Merge {
  public both(...items: object[]) {
    // // let keys1 = items[0];
    // let keys2 = items[1];

    // let result = {};
    // // _.assignIn(result, items[0], items[1]);

    // result = { ...items[0] };

    // for (let key in keys2) {
    //   console.log(key);
    // }

    // return result;

    return deepmerge.all(items);
  }
}
export default new Merge();
