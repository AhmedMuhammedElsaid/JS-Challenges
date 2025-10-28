//Throttle (timestamp / leading)
 function Throttle(func, delay) {
    let last = 0;
    return (...args) => {
        const now = Date.now();
        if (now - last <= delay) {
            last = now;
            func.apply(this,args)
        }
    }
}

//Throttle (timer / trailing)
function throttleTrailing(fn, wait = 300) {
  let timeout = null;
  return function(...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        fn.apply(this, args);
      }, wait);
    }
  };
}

// Throttle (leading/trailing)
function throttle(fn, wait = 300, {leading = true, trailing = true} = {}) {
  let t = null, lastCall = 0, lastArgs, lastThis;

  const invoke = () => {
    lastCall = Date.now();
    t = null;
    fn.apply(lastThis, lastArgs);
    lastArgs = lastThis = null;
  };

  return function(...args) {
    const now = Date.now();
    if (!lastCall && !leading) lastCall = now;
    const remaining = wait - (now - lastCall);
    lastArgs = args; lastThis = this;

    if (remaining <= 0 || remaining > wait) {
      if (t) { clearTimeout(t); t = null; }
      invoke();
    } else if (trailing && !t) {
      t = setTimeout(invoke, remaining);
    }
  };
}
