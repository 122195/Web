/*
 * @作者: kerwin
 */
import JSONBigInt from 'json-bigint'

// let JSONBigIntStr  = JSONBigInt({ storeAsString: true });
let JSONBigIntNative  = JSONBigInt({ useNativeBigInt: true });
let jsonstr = `
            {
                "id":9007199254740993,
                "list":[]
            }
        `

// console.log(BigInt(JSONBigIntStr.parse(jsonstr).id))

//又提供了一种方案， 转为 BinInt

console.log(JSONBigIntNative.parse(jsonstr))