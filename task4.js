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

let editData = { name: "Muhammad Ashari", email: "boykid923@gmail.com" };
let tambahData = { hobby: ["traveling", "sport", "coding"] };

let dataBaru = { ...data, ...editData, ...tambahData };

console.log(dataBaru);
console.log(
  `street : ${dataBaru["address"]["street"]}, city : ${dataBaru["address"]["suite"]}`
);
