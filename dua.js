function solution(N, users) {
  let answer = [];

  if (N < 1) {
    console.log("Stages can not 0");
    return;
  } else if (N > 500) {
    console.log("Stages can not more than 500");
    return;
  }

  if (users.length < 1) {
    console.log("There is no users");
    return;
  } else if (users.length > 200 * 1000) {
    console.log("Users can not more than 200.000");
    return;
  }

  const sortedUsers = users.slice(0).sort((a, b) => a - b);
  const stagesPlayed = Array.from(Array(N), (obj, index) => index + 1);
  let totalUsers = users.length;
  let failureRate = [];

  stagesPlayed.map(item => {
    const usersPlayedThisStage = sortedUsers.filter(obj => obj === item).length;
    failureRate = [
      ...failureRate,
      {
        stages: item,
        rate: usersPlayedThisStage / totalUsers
      }
    ];
    totalUsers -= usersPlayedThisStage;
  });

  answer = failureRate.sort((a, b) => b.rate - a.rate).map(obj => obj.stages);

  console.log("N: ", N);
  console.log("users: ", users);
  console.log("answer: ", answer);

  return answer;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
solution(4, [4, 4, 4, 4, 4]);
