const biodata = {
  name: "Muhammad Ashari",
  age: 27,
  hobbies: ["traveling", "sport", "coding"],
  isMarried: false,
  schoolList: [
    {
      name: "SDN 2 Serongga",
      yearIn: "2004",
      yearOut: "2010",
      major: null,
    },
    {
      name: "MTs Sabiilal Muttaqin",
      yearIn: "2010",
      yearOut: "2013",
      major: null,
    },
    {
      name: "paket C",
      yearIn: "2017",
      yearOut: "2018",
      major: null,
    },
  ],
  skills: [
    {
      skillName: "HTML",
      level: "beginner",
    },
    {
      skillName: "CSS",
      level: "beginner",
    },
  ],
  interestInCoding: true,
};

// akses nama
console.log(biodata.name);

//akses nama sekolah
console.log(biodata.schoolList[1].name);
