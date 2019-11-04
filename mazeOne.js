const mazeSearch = (maze, posX, posY, path = []) => {
  let exitY = maze[0].length - 1;
  let exitX = maze.length - 1;
  if (posX === exitX && posY === exitY) {
    return path;
  }
  if (posY < exitY && path[path.length -1] !== 'L') {
    if (maze[posX][posY + 1] === ' ' || maze[posX][posY + 1] === 'e') {
      path.push('R');
      return mazeSearch(maze, posX, posY + 1, path)
    }
  }
  if (posX < exitX && path[path.length -1] !== 'U') {
    if (maze[posX + 1][posY] === ' ' || maze[posX + 1][posY] === 'e') {
      path.push('D');
      return mazeSearch(maze, posX + 1, posY, path)
    }
  }
  if (posY > 0 && path[path.length -1] !== 'R') {
    if (maze[posX][posY - 1] === ' ' || maze[posX][posY - 1] === 'e') {
      path.push('L');
      return mazeSearch(maze, posX, posY - 1, path)
    }
  }
  if (posX > 0 && path[path.length -1] !== 'D') {
    if (maze[posX - 1][posY] === ' ' || maze[posX - 1][posY] === 'e') {
      path.push('U');

      return mazeSearch(maze, posX - 1, posY, path)
    }
  }
}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let biggerMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  [' ', '*', ' ', '*', ' ', ' ', ' '],
  [' ', '*', ' ', '*', ' ', ' ', ' '],
  [' ', '*', ' ', ' ', ' ', ' ', 'e']
];

console.log(mazeSearch(biggerMaze, 0, 0))