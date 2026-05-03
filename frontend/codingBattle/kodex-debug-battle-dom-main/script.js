// Helper Selector
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// DOM Elements
const balance = $("#total-balance");
const income = $("#total-income");
const expense = $("#total-expense");
const list = $("#transaction-list");
const form = $("#transaction-form");
const text = $("#text");
const amount = $("#amount");
const modal = $("#modalOverlay");
const openModalBtn = $("#openModal");
const closeModalBtn = $("#close-btn");
const searchInput = $("#search-input");
const filterBtns = $$(".filter-btn");

const categoryIcons = {
  salary: "💰",
  food: "🍔",
  entertainment: "🎬",
  shopping: "🛍️",
  utilities: "⚡",
  other: "📦",
};

// Initial State
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
let currentFilter = "all";

function addTransaction(e) {
  e.preventDefault();

  const type = $('input[name="transaction-type"]:checked').value;

  const category = $("#category").value;

  const transaction = {
    id: Math.floor(Math.random() * 100000000),
    text: text.value,
    amount: parseFloat(amount.value),
    type: type,
    category: category,
    date: new Date().toLocaleDateString(),
  };

  transactions.push(transaction);

  updateLocalStorage();
  init();

  form.reset();
  modal.classList.remove("active");
}

function removeTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);

  updateLocalStorage();
  init();
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Calculate Totals
function updateValues() {
  let total = 0;
  let inc = 0;
  let exp = 0;

  transactions.forEach((t) => {
    const amt = parseFloat(t.amount);

    if (t.type === "income") {
      inc += amt;
      total += amt;
    } else {
      exp += amt;
      total -= amt;
    }
  });

  balance.innerText = `$${total.toFixed(2)}`;
  income.innerText = `$${inc.toFixed(2)}`;
  expense.innerText = `$${exp.toFixed(2)}`;
}

// Render Transactions
function renderTransactions() {
  list.innerHTML = "";

  let filtered = [...transactions];

  // Filter Search
  const query = searchInput.value;
  if (query) {
    filtered = filtered.filter((t) =>
      t.text.toLowerCase().includes(query.toLowerCase()),
    );
  }

  if (currentFilter !== "all") {
    filtered = filtered.filter((t) => t.type === currentFilter);
  }

  filtered.forEach((transaction) => {
    const sign = transaction.type === "expense" ? "-" : "+";
    const itemClass =
      transaction.type === "expense" ? "amount-expense" : "amount-income";
    const li = document.createElement("li");

    li.classList.add("transaction-item");
    li.innerHTML = `
   <div class="item-icon">
     ${categoryIcons[transaction.category] || "📦"}
   </div>
   <div class="item-details">
     <p>${transaction.text}</p>
     <span>${transaction.date}</span>
   </div>
   <div class="item-amount ${itemClass}">
     ${sign}$${Math.abs(transaction.amount)}
   </div>
   <button class="delete-btn"
   onclick="removeTransaction(${transaction.id})">
   🗑️
   </button>
   `;

    list.appendChild(li);
  });
}

function init() {
  renderTransactions();
  updateValues();
}

form.addEventListener("submit", addTransaction);
openModalBtn.addEventListener("click", () => modal.classList.add("active"));
closeModalBtn.addEventListener("click", () => modal.classList.remove("active"));

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});

searchInput.addEventListener("input", renderTransactions);

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTransactions();
  });
});

init();
