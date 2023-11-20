//Problem 1
let arr = [
  {
    name: "student1",
    subjects: [
      { Maths: 60 },
      { History: 30 },
      { English: "50" },
      { Biology: "40" },
    ],
    total: "",
  },
  {
    name: "student2",
    subjects: [
      { Maths: "35" },
      { History: "66" },
      { English: "20" },
      { Biology: "30" },
    ],
    total: "",
  },
];

function findTotal(arr) {
  return arr.map(student => {
    let total = student.subjects.reduce((acc, subject) => {
      const value = Object.values(subject)[0];
      const numericValue = isNaN(value) ? 0 : Number(value);
      return acc + numericValue;
    }, 0);

    return { ...student, total };
  });
}

// //Example invocation
// console.log(findTotal(arr));
// [
//   {
//     name: 'student1',
//     subjects: [ [Object], [Object], [Object], [Object] ],
//     total: 180
//   },
//   {
//     name: 'student2',
//     subjects: [ [Object], [Object], [Object], [Object] ],
//     total: 151
//   }
// ]

//Problem 2 - Array destructuring and spread operator

const user = {
  name: "john",
  password: "john@11",
  id: "7468uwe",
  city: "New York",
};

function removeKeyValuePair(user, keyToRemove) {
  const updateUser = { ...user};
  const { [keyToRemove]: removedKey, ...rest } = updatedUser;
  return rest;
}

//Example usage
//  console.log(removeKeyValuePair(user, "city"));//{ name: 'john', password: 'john@11', id: '7468uwe' }

// Problem 3

let categoriesDirectory = {
  1: "ASUS",
  2: "HP",
  3: "Dell",
};
let MadeInArea = [
  { id: 1, name: "India" },
  { id: 2, name: "USA" },
];

let MadeInAreaDirectory = MadeInArea.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

let exampleInputArray = [
  {
    idProduct: "8TH GEN CORE I7",
    strProduct: "ASUS ZENBOOK FLIP 13 UX362FA LAPTOP",
    Category: 1,
    Area: 2,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "8th Gen",
    strDetail3: "8 MB",
    strDetail4: "Quad Core",
    strDetail5: "8565U",
    strDetail6: "Intel",
    strDetail7: "Core i7",
    strDetail8: "1.8 GHz",
    strDetail9: "4.6 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },

  {
    idProduct: "8TH GEN CORE I5",
    strProduct: "HP ELITEBook X360 (4SU65UT) LAPTOP",
    Category: 2,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "8th Gen",
    strDetail3: "6 MB",
    strDetail4: "Quad Core",
    strDetail5: "8250U",
    strDetail6: "Intel",
    strDetail7: "Core i5",
    strDetail8: "1.6 GHz",
    strDetail9: "3.4 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
  {
    idProduct: "7TH GEN PENTIUM GOLD",
    strProduct: "DELL INSPIRON 15 3583 LAPTOP",
    Category: 3,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "7th Gen",
    strDetail3: "2 MB",
    strDetail4: "Dual Core",
    strDetail5: "5405U",
    strDetail6: "Intel",
    strDetail7: "Pentium Gold",
    strDetail8: "1.6 GHz",
    strDetail9: "2.3 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
];
let exampleInputArray2 = [
  {
    idProduct: "9TH GEN CORE I7",
    strProduct: "ASUS ROG STRIX SCAR III G531GU-ES016T GAMING LAPTOP",
    Category: 1,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "Cache",
    strSpecification4: "Core",
    strSpecification5: "Model",
    strSpecification6: "",
    strSpecification7: "",
    strSpecification8: "",
    strSpecification9: "",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel",
    strDetail2: "9th Gen",
    strDetail3: "12 MB",
    strDetail4: "Hexa Core",
    strDetail5: "9750H",
    strDetail6: "",
    strDetail7: "",
    strDetail8: "",
    strDetail9: "",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
  {
    idProduct: "10TH GEN CORE I3",
    strProduct: "HP PAVILION X360 14-DH1008TU LAPTOP",
    Category: 2,
    Area: 2,
    strSpecification1: "",
    strSpecification2: "",
    strSpecification3: "",
    strSpecification4: "",
    strSpecification5: "",
    strSpecification6: "",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Cache",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "",
    strDetail2: "",
    strDetail3: "",
    strDetail4: "",
    strDetail5: "",
    strDetail6: "",
    strDetail7: "Core i3",
    strDetail8: "2.1 GHz",
    strDetail9: "4 MB",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
  {
    idProduct: "9TH GEN CORE I5",
    strProduct: "DELL INSPIRON G3 3590 GAMING LAPTOP",
    Category: 3,
    Area: 1,
    strSpecification1: "Processor",
    strSpecification2: "Generation",
    strSpecification3: "",
    strSpecification4: "",
    strSpecification5: "",
    strSpecification6: "Brand",
    strSpecification7: "Series",
    strSpecification8: "Speed",
    strSpecification9: "Boost upto",
    strSpecification10: "",
    strSpecification11: "",
    strSpecification12: "",
    strSpecification13: "",
    strSpecification14: "",
    strSpecification15: "",
    strSpecification16: null,
    strSpecification17: null,
    strSpecification18: null,
    strSpecification19: null,
    strSpecification20: null,
    strDetail1: "Intel Core i5",
    strDetail2: "9th Gen",
    strDetail3: "",
    strDetail4: "",
    strDetail5: "",
    strDetail6: "NVIDIA",
    strDetail7: "Core i5",
    strDetail8: "2.4 GHz",
    strDetail9: "4.1 GHz",
    strDetail10: "",
    strDetail11: "",
    strDetail12: "",
    strDetail13: "",
    strDetail14: "",
    strDetail15: "",
    strDetail16: null,
    strDetail17: null,
    strDetail18: null,
    strDetail19: null,
    strDetail20: null,
  },
];

//Example Invocation
let obj2 = massageArray(exampleInputArray);
console.log(JSON.stringify(obj2));

function massageArray(inputArray) {
  return inputArray.map(item => {
    const category = categoriesDirectory[item.Category];
    const area = MadeInAreaDirectory[item.Area];

    return {
      idProduct: item.idProduct,
      strProduct: item.strProduct,
      Category: category, 
      Area: area, 
      Specifications: [
        item.strSpecification1,
        item.strSpecification2,
        item.strSpecification3,
        item.strSpecification4,
        item.strSpecification5,
        item.strSpecification6,
        item.strSpecification7,
        item.strSpecification8,
        item.strSpecification9,
        item.strSpecification10,
        item.strSpecification11,
        item.strSpecification12,
        item.strSpecification13,
        item.strSpecification14,
        item.strSpecification15,
        item.strSpecification16,
        item.strSpecification17,
        item.strSpecification18,
        item.strSpecification19,
        item.strSpecification20,
      ],
      Details: [
        item.strDetail1,
        item.strDetail2,
        item.strDetail3,
        item.strDetail4,
        item.strDetail5,
        item.strDetail6,
        item.strDetail7,
        item.strDetail8,
        item.strDetail9,
        item.strDetail10,
        item.strDetail11,
        item.strDetail12,
        item.strDetail13,
        item.strDetail14,
        item.strDetail15,
        item.strDetail16,
        item.strDetail17,
        item.strDetail18,
        item.strDetail19,
        item.strDetail20,
      ],
    };
  });
}

//don't remove below export statement part
export { findTotal, removeKeyValuePair, exampleInputArray, massageArray };
