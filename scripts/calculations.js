// 2. Crear variables iniciales y de estado
let budgetValue = 0; // Almacena el importe total del presupuesto
let totalExpensesValue = 0; // Realiza un seguimiento de la suma de todos los gastos
let balanceColor = "green"; // Almacena el color que representa el estado del saldo

// 3. Crear el array de gastos iniciales (Estructura de matriz/tabla anidada)
const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

// 4. Calcular los gastos totales de la lista inicial
for (const entry of expenseEntries) {
  totalExpensesValue += entry[1];
}

// 5. Calcular el gasto medio
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

// 6. Calcular el saldo restante
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

// 7. Cambiar dinámicamente el color del saldo según los fondos remanentes
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

// 8. Calcular las estadísticas acumuladas por cada categoría individual
function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (const entry of expenseEntries) {
    if (entry[0] === category) {
      categoryTotal += entry[1];
    }
  }

  return categoryTotal;
}

// 9. Calcular cuál es la categoría con el gasto acumulado más alto
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

// 10. Añadir nuevos gastos desde la ventana emergente de la interfaz
function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue += values[1];
}
