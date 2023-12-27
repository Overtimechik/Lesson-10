/*console.log("Starting...");
setTimeout(() => {
  console.log("Starting...");
}, 2000);
console.log("Starting...");
setInterval(() => {
  console.log("test");
}, 2000);
*/
/*type TUser = {
  name: string;
  age: number;
};
const getResult = (status: boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user: TUser = {
        name: "test",
        age: 60,
      };
      if (status) {
        resolve(user);
      } else {
        reject("ERROR");
      }
    }, 1000);
  });
};
const getInfoUser = async () => {
  let user = (await getResult(true)) as TUser;
  console.log("Инфо о пользователе: ", user.name);
};
getInfoUser().catch((error) => {
  console.log(error);
});*/

// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   .then((data) => {
//     return data.json();
//   })
//   .then((newData) => {
//     console.log(newData);
//   });

type TUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
};
const getData = () => {
  return fetch("https://run.mocky.io/v3/20474e19-d951-427f-a1f4-51bb51495a79");
};

const formatData = async () => {
  let data = (await (await getData()).json()) as TUser[];
  let female = data.filter((item) => item.gender.toLowerCase() === "female");
  let male = data.filter((item) => item.gender.toLowerCase() === "male");
  return [female, male];
};
formatData()
  .then((data) => {
    console.log(data[0]);
  })
  .catch((err) => {
    console.log(err);
  });
