import { BOARD_SIZE, NUMBER_LIST } from "./constants";
let id = 0;
export const getRow = (i) => parseInt(i / BOARD_SIZE);
export const getColumn = (i) => i % BOARD_SIZE;

export const getRowAndCol = (index) => {
  return { row: getRow(index), col: getColumn(index) };
};

export const getTileObject = ({ row, col }, prev, current) => {
  return {
    id: id++,
    prevRow: prev.row,
    prevCol: prev.col,
    prevNumber: prev.number,
    row,
    col,
    number: current.number,
  };
};

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const compareAWithBNumber = (a, b) => {
  return a.number === b.number;
};

const getLoopCondition = (direction) => {
  const directionValue = direction > 0 ? 1 : -1;
  return {
    directionValue,
    start: directionValue > 0 ? 0 : BOARD_SIZE - 1,
    end: directionValue > 0 ? BOARD_SIZE : -1,
  };
};

const getRemovedTile = (tile, destinationTile) => {
  const { row, col, number } = tile;
  tile = {
    prevRow: row,
    prevCol: col,
    row: destinationTile.row,
    col: destinationTile.col,
    number,
  };
  return tile;
};

const pushToEnd = (line, targetIndex, direction) => {
  const array = [...line];
  array.splice(targetIndex, 1);
  direction > 0 ? array.push(0) : array.unshift(0);
  return array;
};

const combineAToB = (a, b) => {
  const addedValue = b.number * 2;
  b.prevNumber = b.number;
  b.number = addedValue;
  b.isCombined = true;
  const removedTile = getRemovedTile(a, b);
  return { combinedTile: b, removedTile, addedValue };
};

export const checkTileChanged = ({
  prevRow,
  row,
  prevCol,
  col,
  prevNumber,
  number,
}) => {
  return prevRow !== row || prevCol !== col || prevNumber !== number;
};

export const isChanged = (arr) => {
  let changed = arr.some(checkTileChanged);
  return changed;
};

export const getEmptyPosition = (arr, isInit) => {
  return arr.reduce(
    (accumulator, number, index) =>
      !number && isInit !== index
        ? (accumulator.push(index), accumulator)
        : accumulator,
    []
  );
};

export const combineTile = ({
  line,
  isUpDown,
  resultArray,
  direction,
  rootIndex,
}) => {
  let combinedRowArray = [];
  let interimScore = 0;
  const { directionValue, start, end } = getLoopCondition(direction);
  for (var i = start; i !== end; i = i + directionValue) {
    const position = {
      row: isUpDown ? i : rootIndex,
      col: isUpDown ? rootIndex : i,
    };
    const realIndex = position.row * BOARD_SIZE + position.col;
    const nextIndex = i + directionValue;
    let current = line[i];
    const next = line[nextIndex];
    if (current) {
      current = getTileObject(position, current, current);
      if (next) {
        if (compareAWithBNumber(current, next)) {
          const { combinedTile, removedTile, addedValue } = combineAToB(
            next,
            current
          );
          interimScore += addedValue;
          resultArray[realIndex] = combinedTile;
          combinedRowArray.push(removedTile);
          line = pushToEnd(line, nextIndex, direction);
          continue;
        }
      }
      resultArray[realIndex] = current;
    }
  }
  return { movedArray: resultArray, combinedRowArray, interimScore };
};

export const checkAllValueIsTrue = (array) => {
  return !array.some((tile) => !tile);
};

export const getNewTile = (arr, isInit = null) => {
  let emptyPosition = getEmptyPosition(arr, isInit);
  if (emptyPosition) {
    const index = emptyPosition[getRandomNumber(0, emptyPosition.length - 1)];
    const number = NUMBER_LIST[isInit !== null ? 0 : getRandomNumber(0, 1)];
    const { row, col } = getRowAndCol(index);
    return {
      id: id++,
      index,
      number,
      prevNumber: number,
      row,
      col,
      prevRow: row,
      prevCol: col,
      isNew: true,
    };
  } else return false;
};

export const checkIsCombinable = (numbers) => {
  return numbers.some((tile, i) => {
    const checkRow =
      i % BOARD_SIZE !== BOARD_SIZE - 1 &&
      numbers[i + 1] &&
      numbers[i + 1].number === tile.number;
    const checkColumn =
      numbers[i + BOARD_SIZE] && numbers[i + BOARD_SIZE].number === tile.number;
    return checkRow || checkColumn;
  });
};
