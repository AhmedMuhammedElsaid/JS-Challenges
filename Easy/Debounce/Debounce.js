
function Debounce(fun, delay) {
    let debouncedFunc;
    return (...args) => {
        clearTimeout(debouncedFunc);
        debouncedFunc = setTimeout(() => fun.apply(this, args), delay)
        return debouncedFunc
    }
}

function debounceWithNow(fn, wait = 300, immediate = false) {
  let timeout = null;
  const debounced = function(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) fn.apply(this, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) fn.apply(this, args);
    };
    
  debounced.cancel = () => { clearTimeout(timeout); timeout = null; };
  return debounced;
}

// Debounce (with cancel)
function debounce(fn, wait = 300, {leading = false, trailing = true} = {}) {
  let t = null, lastArgs, lastThis, invoked = false;

  const invoke = () => {
    t = null;
    if (trailing && (!leading || invoked)) fn.apply(lastThis, lastArgs);
    invoked = false;
  };

    function debounced(...args) {
      
    lastArgs = args; lastThis = this;
    const callNow = leading && !t;
    clearTimeout(t);
    t = setTimeout(invoke, wait);
    if (callNow) { invoked = true; return fn.apply(lastThis, lastArgs); }
  }

  debounced.cancel = () => { clearTimeout(t); t = null; invoked = false; };
  return debounced;
}
