let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (const entry of expenseEntries) {
  totalExpensesValue += entry[1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  const currentBalance = calculateBalance();

  if (currentBalance < 0) {
    balanceColor = "red";
  } else if (currentBalance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (const entry of expenseEntries) {
    if (entry[0] === category) {
      categoryTotal += entry[1];
    }
  }

  return categoryTotal;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  const categoriesData = [];

  for (const category of categories) {
    const total = calculateCategoryExpenses(category);
    categoriesData.push([category, total]);
  }

  let maxExpense = -1;
  let largestCategoryName = "";

  for (const data of categoriesData) {
    const currentCategory = data[0];
    const currentTotal = data[1];

    if (currentTotal > maxExpense) {
      maxExpense = currentTotal;
      largestCategoryName = currentCategory;
    }
  }

  return largestCategoryName;
}

function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue += values[1];
}
