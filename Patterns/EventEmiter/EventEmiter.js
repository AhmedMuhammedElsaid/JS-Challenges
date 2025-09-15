class EventEmitter {
  constructor() { this.map = new Map(); }

  on(evt, handler) {
    const list = this.map.get(evt) || [];
    list.push(handler); this.map.set(evt, list);
    return () => this.off(evt, handler); // unsubscribe helper
  }
  off(evt, handler) {
    const list = this.map.get(evt) || [];
    this.map.set(evt, list.filter(h => h !== handler));
  }
  once(evt, handler) {
    const wrap = (...args) => { this.off(evt, wrap); handler(...args); };
    this.on(evt, wrap);
  }
  emit(evt, ...args) {
    const list = this.map.get(evt) || [];
    for (const h of [...list]) {
      try { h(...args); }
      catch (err) { this.emit('error', err, evt); } // propagate errors
    }
  }
}
