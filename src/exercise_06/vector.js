export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

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
