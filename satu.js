function findOnArrayById(array, id) {
  return array.find(obj => obj.id === id);
}

function findIndexById(array, id) {
  return array.findIndex(obj => obj.id === id);
}

function solution(record) {
  let answer = [];
  let user = [];

  // Creating or Updating user
  record.map(item => {
    if (item.length < 1) {
      console.log("there is no record");
      return;
    } else if (item.length > 100 * 1000) {
      console.log("too much character");
      return;
    }

    const [action, id, name] = item.split(" ");
    // console.log({ action, id, name });

    if (user.length === 0) {
      user = [...user, { id, name }];
    } else if (findOnArrayById(user, id) === undefined) {
      user = [...user, { id, name }];
    } else {
      // same user
    }

    if (action === "Enter" || action === "Change") {
      user[findIndexById(user, id)] = { id, name };
    }
  });

  record.map(item => {
    const [action, id] = item.split(" ");
    switch (action) {
      case "Enter":
        answer = [...answer, `${findOnArrayById(user, id).name} came in`];
        break;
      case "Leave":
        answer = [...answer, `${findOnArrayById(user, id).name} has left`];
        break;
      case "Change":
        break;
      default:
        console.warn("action is not defined", item);
    }
  });

  // console.log("user: ", user);
  console.log("record: ", record);
  console.log("answer: ", answer);

  return answer;
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan"
];
solution(record);
