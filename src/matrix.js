class Matrix {
    constructor(rows, cols, data = []) {
      this.rows = rows;
      this.cols = cols;
      this.data = data.length ? data : Array.from({ length: rows }, () => Array(cols).fill(0));
    }
  
    add(matrix) {
      const result = new Matrix(this.rows, this.cols);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          result.data[i][j] = this.data[i][j] + matrix.data[i][j];
        }
      }
      return result;
    }
  
    multiply(matrix) {
      const result = new Matrix(this.rows, matrix.cols);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < matrix.cols; j++) {
          for (let k = 0; k < this.cols; k++) {
            result.data[i][j] += this.data[i][k] * matrix.data[k][j];
          }
        }
      }
      return result;
    }
  }
  
  module.exports = Matrix;