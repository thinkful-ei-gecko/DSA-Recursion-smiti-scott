const nthTriNum = (num) => {
  if (num === 1) {
    return 1;
  }
  return num + nthTriNum(num - 1);
}

console.log(nthTriNum(8))