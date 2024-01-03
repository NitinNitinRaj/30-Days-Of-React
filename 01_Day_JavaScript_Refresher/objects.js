const dog = {};

console.log(dog);

dog.name = "tiger";
dog.leg = 4;
dog.color = "white";
dog.bark = "woof woof";

console.log(dog);

dog.breed = "border coli";
dog.getDogInfo = () => {
  console.log(dog);
};

dog.getDogInfo();

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let max = 0;
let mostSkilledUser;
let totalLoggedInUser = 0;
let pointsGreaterThan50 = 0;
let peopleWhoAreMernStackDev = [];
for (const user in users) {
  const userSkills = users[user].skills;
  const noOfSkills = userSkills.length;
  if (noOfSkills > max) {
    max = noOfSkills;
    mostSkilledUser = user;
  }
  if (users[user].isLoggedIn) totalLoggedInUser++;
  if (users[user].points >= 50) pointsGreaterThan50++;

  if (
    userSkills.includes("MongoDB") &&
    userSkills.includes("Express") &&
    userSkills.includes("React") &&
    userSkills.includes("Node")
  ) {
    peopleWhoAreMernStackDev.push(user);
  }
}

console.log("Most Skilled user: " + mostSkilledUser);
console.log("No of logged in users: " + totalLoggedInUser);
console.log(
  "users having greater than equal to 50 points: " + pointsGreaterThan50
);
console.log("people who are MERN stack developer: " + peopleWhoAreMernStackDev);

const newUsersObject = {
  ...users,
  Nitin: {
    email: "nitin@nitin.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: true,
    points: 50,
  },
};

console.log(newUsersObject["Nitin"]);

console.log(Object.keys(users));
console.log(Object.values(users));

const personAccount = {
  firstName: "Nitin",
  lastName: "Raj",
  incomes: [
    { income: 100000, description: "Monthly Salary" },
    { income: 250000, description: "Income Form yields from Fields" },
  ],
  expenses: [
    { expense: 1000, description: "Car insurance" },
    { expense: 500, description: "Groceries" },
  ],
  totalIncome: function () {
    let total = 0;
    for (const income of this.incomes) {
      total += income.income;
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense.expense;
    }
    return total;
  },
  accountInfo: function () {
    return `Account Holder : ${this.firstName}, Total Income:${this.totalIncome}`;
  },

  addIncome: function () {
    this.incomes.push({ income, description });
  },

  addExpense: function () {
    this.expense.push({ expense, description });
  },

  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(personAccount.accountBalance());
