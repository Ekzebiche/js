class Matrix {
    constructor(mat1, mat2) {
        this.mat1 = mat1;
        this.mat2 = mat2;
    };

    matrixSort(mat) {
        mat.forEach(element => {
            for (let i = 0; i < element.length - 1; i++) {
                if (element[i] > element[i + 1]) {
                    const temp = element[i];
                    element[i] = element[i + 1];
                    element[i + 1] = temp;
                }
            }
            console.log(element);
        });
    }

    matrixMultiplication() {
        const rowMat1 = mat1.length;
        const colMat1 = mat1[0].length;
        const rowMat2 = mat2.length;
        const colMat2 = mat2[0].length;
        const multiplyResult = [];

        if (colMat1 !== rowMat2) {
            return "The Matrix has you...";
        } else {
            for (let rm1 = 0; rm1 < rowMat1; rm1++) {
                multiplyResult[rm1] = [];
            }

            for (let cm2 = 0; cm2 < colMat2; cm2++) {

                for (let rm1 = 0; rm1 < rowMat1; rm1++) {

                    let intermediateResult = 0;

                    for (let rm2 = 0; rm2 < rowMat2; rm2++) {
                        intermediateResult += mat1[rm1][rm2] * mat2[rm2][cm2];
                        multiplyResult[rm1][cm2] = intermediateResult;
                    }
                }
            }
            return multiplyResult;
        }
    };
}

const mat1 = [[4, 2, 6], [1, 7, 2], [5, 2, 3]];
const mat2 = [[2, 2, 3], [1, 8, 3], [6, 2, 3]];

const newMat = new Matrix(mat1, mat2);

console.log(newMat);
console.log(newMat.matrixMultiplication());
console.log(newMat.matrixSort(mat1))
