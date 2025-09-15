class Computer {
  constructor(brand, specs) {
    this.brand = brand;
    this.specs = specs; // nested object
  }

  clone() {
    // Deep clone using structuredClone (modern) or JSON
    return new Computer(this.brand, structuredClone(this.specs));
  }
}

const basePC = new Computer("Dell", {
  cpu: "Intel i7",
  ram: "16GB",
  storage: {
    type: "SSD",
    size: "512GB"
  }
});

const pc1 = basePC.clone();
pc1.specs.cpu = "Intel i9";
pc1.specs.storage.size = "1TB";

console.log(basePC);
// Original is unchanged

console.log(pc1);
// Fully cloned with modified nested values
