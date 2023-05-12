// const set = new Set();

// console.log(set);

// const person = {
//   name: "kimsh",
//   familyName: "kim",
//   giveName: "sh",
// };

// const company = {
//   name: "naver",
//   address: "seoul",
// };

// const kimseonghyeon = { ...person, ...company };
// console.log(kimseonghyeon);

// const nameA = 0 || "a";
// console.log(nameA);

// const a = { name: "a" };
// const b = { address: "seoul" };
// const c = { ...a, ...b };
// console.log(c);

// const person = {
//   name: "Kim Seong-Hyeon",
//   familyName: "Kim",
//   givenName: "Seong-Hyeon",
//   company: "Naver",
//   address: "Seoul",
// };

// const { familyName, givenName } = person;
// console.log(givenName);

// const name = "Lee Sun-Hyoup";
// const company = "Cobalt";
// const person = {
//   name,
//   company,
// };
// console.log(person);

// const makeCompany = ({ name, address, serviceName }) => {
//   return {
//     name,
//     address,
//     serviceName,
//   };
// };
// const cobalt = makeCompany({ name: 'Cobalt. Inc.', address: 'Seoul', serviceName: 'Present'});

// function check(variable) {
//   if (!!variable) {
//     console.log(variable);
//   } else {
//     console.log("잘못된 값");
//   }
// }
// check(null);
// check(3.14);
// check(undefined);
// check(0);
// check("Good");
// check("");
// check(NaN);
// check(5);
