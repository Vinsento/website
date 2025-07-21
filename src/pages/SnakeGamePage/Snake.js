import { Block } from "./Block";

export class Snake {
  constructor() {
    this.segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];
    this.direction = "right";
    this.nextDirection = "right";
  }

  draw(ctx, blockSize) {
    for (var i = 0; i < this.segments.length; i++) {
      if (i == 0) {
        this.segments[i].drawCircle(ctx, blockSize, "Tomato");
      } else {
        this.segments[i].drawSquare(ctx, blockSize, "Blue");
      }
    }
  }

  checkCollision(head, widthInBlocks, heightInBlocks) {
    var leftCollision = head.col === 0;
    var topCollision = head.row === 0;
    var rightCollision = head.col === widthInBlocks - 1;
    var bottomCollision = head.row === heightInBlocks - 1;

    var wallCollision =
      leftCollision || topCollision || rightCollision || bottomCollision;

    var selfCollision = false;

    for (var i = 0; i < this.segments.length; i++) {
      if (head.equal(this.segments[i])) {
        selfCollision = true;
      }
    }

    return wallCollision || selfCollision;
  }

  setDirection(newDirection) {
    if (this.direction === "up" && newDirection === "down") {
      return;
    } else if (this.direction === "right" && newDirection === "left") {
      return;
    } else if (this.direction === "down" && newDirection === "up") {
      return;
    } else if (this.direction === "left" && newDirection === "right") {
      return;
    }

    this.nextDirection = newDirection;
  }

  move(gameOver, updateScore, apple, widthInBlocks, heightInBlocks) {
    this.direction = this.nextDirection;

    var head = this.segments[0],
      newHead;

    if (this.direction === "right") {
      newHead = new Block(head.col + 1, head.row);
    } else if (this.direction === "down") {
      newHead = new Block(head.col, head.row + 1);
    } else if (this.direction === "left") {
      newHead = new Block(head.col - 1, head.row);
    } else if (this.direction === "up") {
      newHead = new Block(head.col, head.row - 1);
    }

    if (this.checkCollision(newHead, widthInBlocks, heightInBlocks)) {
      gameOver();
      return;
    }

    this.segments.unshift(newHead);

    if (newHead.equal(apple.position)) {
      updateScore();
      apple.move(widthInBlocks, heightInBlocks);
    } else {
      this.segments.pop();
    }
  }
}
