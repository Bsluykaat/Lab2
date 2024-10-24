let expect;
const Matrix = require('../src/matrix');

const matrix1 = new Matrix(2, 2, [[1, 2], [3, 4]]);
const matrix2 = new Matrix(2, 2, [[5, 6], [7, 8]]);

describe('Matrix Operations', () => {
    before(async () => {
        expect = (await (import('chai'))).expect;
    });

    it('should create a matrix with given dimensions', () => {
        const matrix = new Matrix(2, 2);
        expect(matrix.rows).to.equal(2);
        expect(matrix.cols).to.equal(2);
        expect(matrix.data).to.deep.equal([[0, 0], [0, 0]]);
    });

    it('should perform matrix addition', () => {
        const result = matrix1.add(matrix2);
        expect(result.data).to.deep.equal([[6, 8], [10, 12]]);
    });

    it('should perform matrix multiplication', () => {
        const result = matrix1.multiply(matrix2);
        expect(result.data).to.deep.equal([[19, 22], [43, 50]]);
    });
});