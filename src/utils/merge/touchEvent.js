import { BOARD_SIZE } from "./constants";
export const getPosition = (event) => {
  return event._reactName === "onTouchStart"
    ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
    : event._reactName === "onTouchMove" || event._reactName === "onTouchEnd"
    ? { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY }
    : { x: event.clientX, y: event.clientY };
};

export const getDirection = (e, prevPosition) => {
  const currentPosition = getPosition(e);
  const xDiff = currentPosition.x - prevPosition.x;
  const yDiff = currentPosition.y - prevPosition.y;
  const xyDiff = Math.abs(xDiff) - Math.abs(yDiff);
  let direction = null;
  if (xyDiff > 0) {
    if (xDiff + 20 < 0) {
      //left
      direction = 1;
    } else if (xDiff - 20 > 0) {
      //right
      direction = -1;
    }
  } else if (xyDiff < 0) {
    if (yDiff + 20 < 0) {
      //up
      direction = BOARD_SIZE;
    } else if (yDiff - 20 > 0) {
      //down
      direction = -BOARD_SIZE;
    }
  }
  return direction;
};
