// script.js
const filterType = document.getElementById("filter-type");
const dayInput = document.getElementById("filter-day");
const monthInput = document.getElementById("filter-month");
const yearInput = document.getElementById("filter-year");

filterType.addEventListener("change", () => {
  const type = filterType.value;
  dayInput.style.display = type === "day" ? "inline-block" : "none";
  monthInput.style.display = type === "month" ? "inline-block" : "none";
  yearInput.style.display = type !== "day" && type !== "all" ? "inline-block" : "none";
  updateStats();
});

dayInput.addEventListener("change", updateStats);
monthInput.addEventListener("change", updateStats);
yearInput.addEventListener("input", updateStats);

function updateStats() {
  const type = filterType.value;
  const filterDate = getFilterDate(type);
  const result = calculateStats(type, filterDate);

  document.getElementById("total-revenue").textContent = result.totalRevenue.toLocaleString("vi-VN") + " VND";
  document.getElementById("products-sold").textContent = result.totalSold;
  document.getElementById("total-orders").textContent = result.totalOrders;
}

function getFilterDate(type) {
  if (type === "day") {
    return dayInput.value.split("-").reverse().join("/");
  } else if (type === "month") {
    return `${String(monthInput.value).padStart(2, "0")}/${yearInput.value}`;
  } else if (type === "year") {
    return `${yearInput.value}`;
  } else {
    return null; // for "all"
  }
}

function calculateStats(type, filterDate) {
  const orders = [
    {
      _id: "683dbabcbcc841123dcb2758",
      userid: "683db2cfbcc841123dcb274c",
      status: "1",
      items: [
        ["683db4b9bcc841123dcb2750", 1],
        ["683db9bebcc841123dcb2756", 1]
      ],
      date: "20/06/2025"
    },
    {
      _id: "683dbcc3bcc841123dcb2759",
      userid: "683db2cfbcc841123dcb274d",
      status: "2",
      items: [
        ["683db4b9bcc841123dcb2750", 3]
      ],
      date: "20/06/2025"
    }
  ];

  const products = [
    {
      _id: "683db9bebcc841123dcb2756",
      name: "Logitech MX Master 3S Wireless Mouse",
      price: 2390000,
      date: "20/06/2025"
    },
    {
      _id: "683dba75bcc841123dcb2757",
      name: "Akko 5075B Plus Black & Gold",
      price: 1890000,
      date: "21/06/2025"
    },
    {
      _id: "683db4b9bcc841123dcb2750",
      name: "MacBook Air M2",
      price: 28990000,
      date: "22/06/2025"
    }
  ];

  let totalRevenue = 0;
  let totalSold = 0;
  let totalOrders = 0;

  orders.forEach(order => {
    let match = false;
    if (type === "day" && order.date === filterDate) match = true;
    if (type === "month" && order.date.endsWith(filterDate)) match = true;
    if (type === "year" && order.date.endsWith(`/${filterDate}`)) match = true;
    if (type === "all") match = true;

    if (match) {
      totalOrders++;
      order.items.forEach(([productId, quantity]) => {
        const product = products.find(p => p._id === productId);
        if (product) {
          totalSold += quantity;
          totalRevenue += product.price * quantity;
        }
      });
    }
  });

  return { totalRevenue, totalSold, totalOrders };
}

// Khởi tạo lần đầu khi trang load
document.addEventListener("DOMContentLoaded", updateStats);
