let products = [];

function addItem() {
  const name = document.getElementById("productName").value;
  const price = parseFloat(document.getElementById("productPrice").value);
  if (!name || isNaN(price)) return;

  products.push({ name, price });

  const list = document.getElementById("productList");
  const li = document.createElement("li");
  li.textContent = `${name} - ${price.toFixed(2)} zł`;
  list.appendChild(li);

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
}

function generateReceipt() {
  const store = document.getElementById("storeName").value || "Firma";
  const address = document.getElementById("storeAddress").value || "Adres";
  const nip = document.getElementById("nip").value || "NIP";

  let total = 0;
  let text = `          ${store}\n`;
  text += `      ${address}\n`;
  text += `          NIP: ${nip}\n`;
  text += `-------------------------------\n`;

  products.forEach(item => {
    text += `${item.name.padEnd(20)} ${item.price.toFixed(2)} zł\n`;
    total += item.price;
  });

  text += `-------------------------------\n`;
  text += `SUMA:                  ${total.toFixed(2)} zł\n`;
  text += `-------------------------------\n`;
  text += `Dziękujemy za zakupy!\n`;

  document.getElementById("receipt").textContent = text;
}
