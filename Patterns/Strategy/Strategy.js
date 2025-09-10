// Strategy Pattern
// 👉 Concept: Encapsulate different algorithms and swap them easily.
// 👉 Analogy: Payment gateways — PayPal, Stripe, ApplePay.

class SSR {
  render() { console.log("Server-side render"); }
}
class CSR {
  render() { console.log("Client-side render"); }
}
class ISR {
  render() { console.log("Incremental static render"); }
}

class Renderer {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  renderPage() {
    this.strategy.render();
  }
}

// Usage
const renderer = new Renderer();
renderer.setStrategy(new SSR());
renderer.renderPage(); // SSR
renderer.setStrategy(new CSR());
renderer.renderPage(); // CSR
