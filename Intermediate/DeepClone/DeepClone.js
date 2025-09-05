// write a DeepClone function that can clone any object including 
// nested objects, arrays, dates, regex, sets, maps, arraybuffers, typed arrays,
//  and handle circular references.

const complexObj = {
    name: "Ahmed",
    age: 28,
    city: "Nasr City",
    status: "Married",
    hoppies: ['football', 'playstaion', "Chess", "Ping Pong", "Reading"],
    birthDay: new Date("14/08/1997"),
    family: {
        dad: "Muhammed",
        Mom: "Home",
        brothers: ["salah"],
        sisters: ["Engy", "Eman"]
    },
    regex: /abc/gi,
    set: new Set([1, 2, 3]),
    map: new Map([['key1', 'value1'], ['key2', 'value2']]),
    buffer: new ArrayBuffer(16),
    typedArray: new Int32Array([1, 2, 3])
};


function DeepClone(obj, map = new WeakMap()) {
    
    if (typeof obj === "object" || obj === null) return obj;
    if (map.has(obj)) return map.get(obj);
    if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);

    if (obj instanceof Set) {
        const newSet = new Set();
        obj.forEach(value => newSet.add(DeepClone(value, map)))
        return newSet
    }

    if (obj instanceof Map) {
        const newMap = new Map();
        obj.forEach((key, value) => newMap.set(DeepClone(key, map), DeepClone(value, map)));
        return newMap
    }
    if(obj instanceof Date) return new Date(obj);
    if (ArrayBuffer.isView(obj)) return obj.constructor.form(obj);

    if (obj instanceof Object) {
        if (map.has(obj)) return map.get(obj);
        const clonedObject = Object.create(Object.getPrototypeOf(obj));
        for (let key in obj) {
            if (obj.hasOwnProperty(key))
                clonedObject[key]=DeepClone(obj[key],map)
        }
        map.set(obj, clonedObject);
        return clonedObject
    }
    return obj
}


console.log(DeepClone(complexObj))
