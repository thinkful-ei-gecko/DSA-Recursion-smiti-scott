const fib = (num, fibSeq = [], start = 0) => {
  if (num === start) {
    return fibSeq;
  }
  if (start < 2) {
    fibSeq.push(1);
    return fib(num, fibSeq, start + 1)
  }
  fibSeq.push(fibSeq[fibSeq.length - 2] + fibSeq[fibSeq.length - 1])
  return fib(num, fibSeq, start + 1)
}

console.log(fib(20));

const stringSplit = (str, splitter, res = []) => {
  const indexOfSplit = str.indexOf(splitter);
  if (indexOfSplit === -1) {
    res.push(str)
    return res;
  }
  res.push(str.slice(0, indexOfSplit));
  return stringSplit(str.slice(indexOfSplit + 1), splitter, res)
}

console.log(stringSplit('I am a separated string', ' '))