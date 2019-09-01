function solution(relation) {
  let answer = 0;

  let collection = {};
  relation.map((item, index, array) => {
    item.map((childItems, childIndex) => {
      for (let x = 0; x < item.length - 2; x++) {
        collection = {
          ...collection,
          [`${childIndex},${x}`]: array.map((S, I) => {
            if (collection[`${childIndex},${x - 1}`] !== undefined) {
              if (collection[`${childIndex},${x - 1}`][I] !== S[x]) {
                if (collection[`${childIndex},${x - 1}`][I] === S[0]) {
                  return `${S[x]}`;
                } else
                  return `${collection[`${childIndex},${x - 1}`][I]} ${S[x]}`;
              } else {
                return `${S[x]}`;
              }
            } else {
              return `${S[childIndex]}`;
            }
          })
        };
      }
    });
  });

  const findDuplicates = arr => {
    if (arr.filter((item, index) => arr.indexOf(item) !== index).length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const uniqueArray = arr => {
    return arr.filter((item, index) => {
      return arr.indexOf(item) >= index;
    });
  };

  const uniqueCollection = uniqueArray(
    Object.values(collection).map(S => JSON.stringify(S))
  ).map(S => JSON.parse(S));

  uniqueCollection.map(item => {
    if (findDuplicates(item)) {
      console.log("NOT UNIQUE", item);
    } else {
      console.log("UNIQUE", item);
      answer++;
    }
  });

  return answer;
}

const relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"]
];

console.log("Answer", solution(relation));
