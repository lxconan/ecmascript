export default class Vector {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  get x() { return this._x; }

  get y() { return this._y; }

  static minus(left, right) {
    return new Vector(left.x - right.x, left.y - right.y);
  }

  static plus(left, right) {
    return new Vector(left.x + right.x, left.y + right.y);
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
