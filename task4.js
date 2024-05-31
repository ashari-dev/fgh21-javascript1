const data = {
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

const tambahData = {
  name: "Muhammad Ashari",
  email: "boykid923@gmail.com",
  hobby: ["traveling", "sport", "coding"],
};

const dataBaru = { ...data, ...tambahData };

console.log(dataBaru);
console.log(
  `street : ${dataBaru["address"]["street"]}, city : ${dataBaru["address"]["city"]}`
);
