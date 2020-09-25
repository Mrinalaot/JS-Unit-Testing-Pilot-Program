module.exports = class Results {
  constructor() {
    this.data = [
      { id: 1, score: 8 },
      { id: 2, score: 10 },
    ];
  }
  setData(data) {
    this.data = data;
  }
  getTopScore() {
    if (
      !Array.isArray(this.data) ||
      !this.data.length
    ) {
      throw "data not set";
    }
    this.data.sort((a, b) => b.score - a.score); // order changed, asc
    return this.data[0].score;
  }
  getLeastScore() {
    if (
      !Array.isArray(this.data) ||
      !this.data.length
    ) {
      throw "data not set";
    }
    this.data.sort((a, b) => a.score - b.score); // order changed, desc
    return this.data[0].score;
  }
}
