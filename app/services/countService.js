class CountService {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  value() {
    return this.count;
  }
}

module.exports = new CountService();
