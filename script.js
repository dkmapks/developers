const companies = [
  { name: "Biedronka", nip: "7791011327", address: "ul. Żniwna 5, 62-025 Kostrzyn" },
  { name: "Lidl", nip: "7811759895", address: "ul. Poznańska 48, 62-080 Tarnowo Podgórne" },
  { name: "Żabka", nip: "7811607072", address: "ul. Stanisława Matyi 8, 61-586 Poznań" },
  { name: "Auchan", nip: "5260307773", address: "ul. Puławska 46, 05-500 Piaseczno" }
];

let selectedCompany = null;
let products = [];

function searchCompany() {
  const query = document.getElementById("search").value.toLowerCase();
  const results = companies.filter(c => c.name.toLowerCase().includes(query));
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";

  results.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.name} (${c.nip})`;
    li.onclick = () => selectCompany(c);
    suggestions.appendChild(li);
  });
}

function selectCompany(company) {
  selectedCompany = company;
  document.getElementById("search").value = company.name;
  document.getElementById("suggestions").innerHTML = "";
}

function addItem() {
  const name = document.getElementById("productName").value;
  const price = parseFloat(document.getElementById("productPrice").value);

  if (!name || isNaN(price)) return;

  products.push({ name, price });

  const li = document.createElement("li");
  li.textContent = `${name} - ${price.toFixed(2)} zł`;
  document.getElementById("productList").appendChild(li);

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
}

function generateReceipt() {
  if (!selectedCompany || products.length === 0) {
    alert("Wybierz firmę i dodaj produkty!");
    return;
  }

  let total = 0;
  let receipt = `*** PARAGON FISKALNY ***\n`;
  receipt += `${selectedCompany.name}\n`;
  receipt += `NIP: ${selectedCompany.nip}\n`;
  receipt += `${selectedCompany.address}\n\n`;

  products.forEach(item => {
    receipt += `${item.name.padEnd(15)} ${item.price.toFixed(2)} zł\n`;
    total += item.price;
  });

  receipt += `\nSUMA: ${total.toFixed(2)} zł\n`;
  receipt += `Dziękujemy za zakupy!`;

  document.getElementById("receipt").textContent = receipt;
}
