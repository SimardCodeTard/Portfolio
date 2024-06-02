export const getWordMatrixArray = (letterMatrixes: number[][][]): number[][][] => {
    const wordArray: number[][][] = [];
    let currentWord: number[][] = [];
    let currentLetter = letterMatrixes[0];

    let i = 0;

    while(letterMatrixes[i] !== undefined){
        while(!wordMatrixIsSpace(currentLetter)) {
            currentWord = currentWord.concat(currentLetter);
            i++;
            currentLetter = letterMatrixes[i]
        }
        wordArray.push(currentWord);
        i++;
    }

    return wordArray;
}

export const wordMatrixIsSpace = (wordMatrix: number[][]): boolean => {
    for(let line of wordMatrix) {
        for(let cell of line) {
            if(cell === 1) {
                return false;
            }
        }
    }
    return true;
} 

export const getWordMatrixesLines = (wordMatrixes: number[][][], lineLength: number): number[][][][] => {
    const lines: number[][][][] = [];

    let currentLine: number[][][] = [];
    let currentWord: number[][] = wordMatrixes[0];

    for(let word of wordMatrixes) {
        if(get3DMatrixWidth(currentLine) + word.length <= lineLength) {
            currentLine.push(currentWord);
        } else {
            lines.push(currentLine);
            currentLine = [];
            currentWord = word;
        }
    }

    return lines;
}

const get3DMatrixWidth = (matrix: number[][][]): number => {
    let total = 0;

    for(let line of matrix) {
        total += line[0].length;
    }

    return total;
}

export const mergeWordMatrixLines = (wordMatrixLine: number[][][] []): number[][][] => {
    const mergedLines: number[][][] = [];

    for(let line of wordMatrixLine) {
        mergedLines.concat(line);
    }

    return mergedLines;
}