import { Block } from "./Block";

export class Apple {
  constructor() {
    this.position = new Block(10, 10);
  }

  draw(ctx, blockSize) {
    this.position.drawCircle(ctx, blockSize, "LimeGreen");
  }

  move(widthInBlocks, heightInBlocks) {
    var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
  }
}
