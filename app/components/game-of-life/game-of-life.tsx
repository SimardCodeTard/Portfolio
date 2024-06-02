'use client';;
import { useEffect, useRef, useCallback, useState } from 'react';
import { getMatrixForLetter } from './letter-matrixes';
import { roundUpper } from '@/lib/math-utils';
import { getWordMatrixArray, getWordMatrixesLines } from '@/lib/matrix-utils';

// Constants for cell states
const ALIVE = 1;
const DEAD = 0;

// Configuration constants
const CELL_SIZE = 10; // Size of each cell in pixels
const UPDATE_INTERVAL = 1000 / 60; // Animation speed (frames per second)

export default function GameOfLife() {
    let doRun = false;

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cellsGridRef = useRef<number[][]>([]);
    const cellsToAddRef = useRef<{x: number, y: number, newValue: number}[]>([]);
    const [windowInnerDimensions, setWindowInnerDimensions] = useState<{width: number, height: number}>({width: 0, height: 0});

    const initCanvas = useCallback((context: CanvasRenderingContext2D) => {
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }, []);

    // Function to draw a single cell
    const drawCell = useCallback((x: number, y: number, cell: number, context: CanvasRenderingContext2D) => {
        context.fillStyle = cell === ALIVE ? 'white' : 'black';
        // Adjust position and size based on CELL_SIZE
        context.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

        context.fillStyle = 'black';
        context.strokeRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }, []);

    // Function to count alive neighbours of a cell
    const getNeighbourCount = useCallback((grid: number[][], x: number, y: number) => {
        let count = 0;
        const width = grid.length;
        const height = grid[0].length;
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0) continue; // Skip the cell itself
                // Wrap around the grid edges
                const newX = (x + dx + width) % width;
                const newY = (y + dy + height) % height;
                count += grid[newX][newY];
            }
        }
        return count;
    }, []);

    const initCellsText = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        console.log(windowInnerDimensions)

        const width = Math.floor(windowInnerDimensions.width / CELL_SIZE);
        const height = Math.floor(windowInnerDimensions.height / CELL_SIZE);

        const text = 'Simon Menard - My Portfolio';
        const letterMatrixes: number[][][] = text.split('').map((letter) => getMatrixForLetter(letter)).filter(line => line !== undefined && line.length > 0);

        // Make an array of words
        const wordMatrixArray = getWordMatrixArray(letterMatrixes);        

        // Create a wordLines array with each element having length <= width
        const wordLines = getWordMatrixesLines(wordMatrixArray, width);
        
        // Merge the wordLines array into a lines array

        
        const lines: number[][] = [];

        // for(let i = 0; i < textMatrixes[0].length; i++) {
        //     for(let j = 0; j < textMatrixes.length; j++) {
        //         if(!lines[i] && textMatrixes[j][i]) {
        //             lines[i] = textMatrixes[j][i];
        //         } else if (textMatrixes[j][i]) {
        //             lines[i] = lines[i].concat(textMatrixes[j][i])
        //         }
        //     }
        // }

        const newGrid: number[][] = [];
        // const lines = matrix.lines;

        for(let x = 0; x < width; x++) {
            for(let y = 0; y < height; y++) {
                if(newGrid[x] === undefined) {
                    newGrid[x] = [];
                } if (y < lines.length && x < lines[y].length) {
                    newGrid[x][y] = lines[y][x];
                } else {
                    newGrid[x][y] = DEAD;
                } 
            } 
        }

        cellsGridRef.current = newGrid;
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;

        console.log(newGrid.filter(line => line.filter(cell => cell === ALIVE)))

        newGrid.forEach((row, x) => {
            row.forEach((cell, y) => {
                drawCell(x, y, cell, context);
            });
        });

    }

    // Function to initialize the grid with random cells
    const initCellsGrid = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Calculate grid size based on canvas size and CELL_SIZEn
        const width = Math.floor(canvas.width / CELL_SIZE);
        const height = Math.floor(canvas.height / CELL_SIZE);

        // Create a new grid with random alive and dead cells
        const newGrid = Array.from({ length: width }, () =>
            Array.from({ length: height }, () => Math.random() > 0.9 ? ALIVE : DEAD)
        );

        cellsGridRef.current = newGrid;
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;
        // Draw the initial grid
        newGrid.forEach((row, x) => {
            row.forEach((cell, y) => {
                drawCell(x, y, cell, context);
            });
        });
    }, [drawCell]);

    // Function to run the Game of Life rules
    const run = () => {
        if(!doRun) {
            return;
        }

        const canvas = canvasRef.current as HTMLCanvasElement;
        const context = canvas && canvas.getContext('2d') as CanvasRenderingContext2D;
        const cellsToEdit: {x: number, y: number, newValue: number}[] = cellsToAddRef.current; // Array to keep track of cells to update

        // Calculate the next state for each cell
        const newGrid = cellsGridRef.current.map((row, x) =>
            row.map((cell, y) => {
                const neighbors = getNeighbourCount(cellsGridRef.current, x, y);
                if (cell === ALIVE && (neighbors < 2 || neighbors > 3)) {
                    cellsToEdit.push({ x, y, newValue: DEAD });
                } else if (cell === DEAD && neighbors === 3) {
                    cellsToEdit.push({ x, y, newValue: ALIVE });
                }
                return cell;
            })
        );

        // Update the cells that changed
        cellsToEdit.forEach(({ x, y, newValue }) => {
            context && drawCell(x, y, newValue, context);
            newGrid[x][y] = newValue;
        });

        cellsGridRef.current = newGrid;
        cellsToAddRef.current = [];
    }

    const placeRandomCells = (radius: number, prob: number, x:number, y: number) => {
        for(let dx = -radius; dx <= radius; dx++) {
            for(let dy = -radius; dy <= radius; dy++) {
                const cellX = Math.round((x + dx) / CELL_SIZE);
                const cellY = Math.round((y + dy) / CELL_SIZE);
                if(cellsGridRef.current[cellX] === undefined || cellsGridRef.current[cellX][cellY] === undefined) {
                    continue;
                }
                const cellIsDead = cellsGridRef.current[cellX][cellY] === DEAD;
                const randomRollSuccess =  Math.random() < prob;
                if (cellIsDead && randomRollSuccess) {
                    cellsToAddRef.current.push({x: cellX, y: cellY, newValue: ALIVE});
                }
            }
        }
    }

    // Create cells on mouse move
    const onMouseMove = (event: MouseEvent) => {
        // doRun = true;
        placeRandomCells(3, 0.5, event.clientX, event.clientY);
    }

    // Create cells on mouse click
    const onMouseClick = (event: MouseEvent) => {
        placeRandomCells(5, 0.8, event.pageX, event.pageY);
    }

    const onTouchMove = (event: TouchEvent) => {
        const touch = event.touches[0];
        placeRandomCells(3, 0.5, touch.clientX, touch.clientY);
    }

    // Effect to initialize and run the game
    useEffect(() => {
        initCanvas(canvasRef.current?.getContext('2d') as CanvasRenderingContext2D);
        initCellsText();
        // initCellsGrid();
        const runAnimation = () => {
            run();
            setTimeout(() => requestAnimationFrame(runAnimation), UPDATE_INTERVAL);
        };
        const animationFrameId = requestAnimationFrame(runAnimation);
        return () => cancelAnimationFrame(animationFrameId);
    }, [initCellsGrid, run, windowInnerDimensions]);

    // Effect to handle window resize
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                setWindowInnerDimensions({width: window.innerWidth, height: window.innerHeight});
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                // initCellsText();
                // initCellsGrid(); // Re-initialize the grid on resize
            }
        };
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('touchmove', onTouchMove)
        window.addEventListener('click', onMouseClick);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('click', onMouseClick);
        }
    }, [initCellsGrid, onMouseMove, onMouseClick, onTouchMove]);
// 
    // Effect to init window dimensions
    useEffect(() => {
        setWindowInnerDimensions({width: window.innerWidth, height: window.innerHeight});
    }, [setWindowInnerDimensions]);

    return <canvas ref={canvasRef} width={windowInnerDimensions.width} height={windowInnerDimensions.height} />;
}
