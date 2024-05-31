let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

data["name"] = "Muhammad Ashari";
data["email"] = "boykid923@gmail.com";
data["hobby"] = ["traveling", "sport", "coding"];

// console.log(data);

console.log(
  `street : ${data["address"]["street"]}, city : ${data["address"]["city"]}`
);
