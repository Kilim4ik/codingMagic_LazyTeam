"use strict";

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];
const scientistsContainer = document.querySelector(
  ".scientists-card-container"
);
let scientistsCode = "";
const scientistsNewCodes = (arr) => {
  scientistsCode = "";
  arr.forEach(({ name: scientistsName, surname, born, dead }) => {
    scientistsCode += `<div class="scientist"><p> ${scientistsName} ${surname} , ${born}-${dead} </p></div>`;
  });
};

scientistsNewCodes(scientists);
scientistsContainer.innerHTML = scientistsCode;

const scientistsVariant = document.querySelectorAll(".scientists-variant");
scientistsVariant.forEach((button) => {
  button.addEventListener("click", (e) => {
    scientistsVariant.forEach((button) => {
      button.classList.remove("active");
    });
    e.target.classList.add("active");
    const text = button.dataset.action;
    let arr = [];

    switch (text) {
      case "What scientists were born in the 19th century.":
        arr = scientists.filter(({ born }) => born > 1800 && born < 1900);
        break;
      case "Sort scientists alphabetically":
        arr = scientists.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Sort scientists by the number of years lived":
        arr = scientists.sort((a, b) => {
          const liveA = a.dead - a.born;
          const liveB = b.dead - b.born;
          return liveB - liveA;
        });
        break;
      case "Find the latest born scientist":
        arr = scientists.reduce((acc, scientist) => {
          if (!acc || scientist.born > acc.born) {
            return scientist;
          }
          return acc;
        }, null);

      case "Find the birth year of Albert Einstein":
        arr = scientists.filter(
          ({ name, surname }) => name == "Albert" && surname == "Einstein"
        );
        break;
      case "Find scientists whose surnames begin with the letter 'C'":
        arr = scientists.filter(({ surname }) => surname.startsWith("C"));
        break;
      case "Remove all scientists whose name starts with 'A'":
        arr = scientists.filter(({ name }) => !name.startsWith("A"));
        break;
      case "Find the scientist who lived the longest and the scientist who lived least":
        const arrMoreAlive = scientists.sort((a, b) => {
          const liveA = a.dead - a.born;
          const liveB = b.dead - b.born;
          return liveB - liveA;
        });
        arr.push(arrMoreAlive[0], arrMoreAlive[arrMoreAlive.length - 1]);
        break;
      case "Find scientists whose first and last names match":
        arr = scientists.filter(({ name, surname }) => name[0] == surname[0]);

        break;
      default:
        return;
    }

    scientistsNewCodes(arr);
    scientistsContainer.innerHTML = scientistsCode;
  });
});

// const buttonObj = {
//   "What scientists were born in the 19th century.": () =>
//     (arr = scientists.filter(({ born }) => born > 1800 && born < 1900)),
//   "Sort scientists alphabetically": (arr = scientists.sort((a, b) =>
//     a.name.localeCompare(b.name)
//   )),
//   "Sort scientists by the number of years lived": () =>
//     (arr = scientists.sort((a, b) => {
//       const liveA = a.dead - a.born;
//       const liveB = b.dead - b.born;
//       return liveB - liveA;
//     })),
//   "Find the latest born scientist": () =>
//     (arr = scientists.reduce((acc, scientist) => {
//       if (!acc || scientist.born > acc.born) {
//         return scientist;
//       }
//       return acc;
//     }, null)),
//   "Find the birth year of Albert Einstein": () =>
//     (arr = scientists.filter(
//       ({ name, surname }) => name == "Albert" && surname == "Einstein"
//     )),
//   "Find scientists whose surnames begin with the letter 'C'": () =>
//     (arr = scientists.filter(({ surname }) => surname.startsWith("C"))),
//   "Remove all scientists whose name starts with 'A'": () =>
//     (arr = scientists.filter(({ name }) => !name.startsWith("A"))),
//   "Find the scientist who lived the longest and the scientist who lived least":
//     () => {
//       const arrMoreAlive = scientists.sort((a, b) => {
//         const liveA = a.dead - a.born;
//         const liveB = b.dead - b.born;
//         return liveB - liveA;
//       });
//       arr.push(arrMoreAlive[0], arrMoreAlive[arrMoreAlive.length - 1]);
//     },
//   "Find scientists whose first and last names match": () =>
//     (arr = scientists.filter(({ name, surname }) => name[0] == surname[0])),
// };
