//. Recreate Function.prototype.call().
// - How would you bind the correct this context?
//  - How do you handle arguments dynamically?

//. Recreate Function.prototype.apply().
// - How is it different from call()?
// - How do you spread array arguments safely?

//. Recreate Function.prototype.bind().
// - How do you ensure the returned function remembers context?
// - How would you handle partial application of arguments?


Function.prototype.myCall = function (context,...args) {
    context = context ?? this;
    const funKey = Symbol("call");
    context[funKey] = this;
    context[funKey](...args)
}
Function.prototype.myApply = function (context, ...args) {
    context = context ?? this;
    const funKey = Symbol("apply");
    context[funKey] = this;
    Array.isArray(args)? context[funKey](...args):context[funKey]()
}

Function.prototype.myBind = function (context, boundArgs) {
    const targetFunc = this;
    return function boundFunc(...callArgs){
        const isNew=this instanceof boundFunc // new Boundfunc
        return targetFunc.apply(isNew?this:context,[...boundArgs,...callArgs]) // correct this
    }
      // preserve prototype for 'new'
    boundFunc.prototype = Object.create(targetFunc.prototype);
    return boundFunc
}


// Promise.all polyfill
function allPolyfill(iterable) {
  return new Promise((resolve, reject) => {
    const arr = Array.from(iterable);
    if (arr.length === 0) return resolve([]);
    const results = new Array(arr.length);
    let remaining = arr.length;

    arr.forEach((p, i) => {
      Promise.resolve(p).then(
        val => {
          results[i] = val;
          if (--remaining === 0) resolve(results);
        },
        err => reject(err) // first rejection
      );
    });
  });
}
//9) Promise.race polyfill
function racePolyfill(iterable) {
  return new Promise((resolve, reject) => {
    for (const p of iterable) Promise.resolve(p).then(resolve, reject);
  });
}
//10) Promise.any polyfill
function anyPolyfill(iterable) {   
  return new Promise((resolve, reject) => {
    const errors = [];
    let remaining = 0;
      let resolved = false;
    for (const p of iterable) {
          remaining++;  
          Promise.resolve(p).then(
              val => {
                  if (!resolved) {
                      resolved = true;
                      resolve(val);
                  }
              },
              err => {
                  errors.push(err);
                  if (--remaining === 0 && !resolved) {
                      reject(new AggregateError(errors, 'All promises were rejected'));
                  }
              }
          );
      }
      if (remaining === 0) {
          reject(new AggregateError([], 'All promises were rejected'));
      }
  });
}
//11) Promise.allSettled polyfill
