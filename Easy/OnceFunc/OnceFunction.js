
// once() (idempotent, return first result)
function once(fun) {
    let called = false;
    let result = null;
    return (...args) => {
        if (!called)  { result= fun.apply(this, args) ; called=true }
        return result
    }
}
