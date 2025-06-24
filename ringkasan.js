const data = JSON.parse(sessionStorage.getItem("dataPelanggan"));
const ringkasanDiv = document.getElementById("ringkasan");
const totalSpan = document.getElementById("total-harga");

if (!data) {
  ringkasanDiv.innerHTML = "<p>Data tidak ditemukan. <a href='mobil.html'>Kembali ke awal</a></p>";
} else {
  let total = 0;
  ringkasanDiv.innerHTML = `<p><strong>Nama Pelanggan:</strong> ${data.nama}</p>`;

  data.mobil.forEach(m => {
    total += m.subtotal;
    ringkasanDiv.innerHTML += `
      <p>
        <strong>${m.nama}</strong><br>
        Tanggal Mulai: ${m.tanggal}<br>
        Durasi: ${m.durasi} hari<br>
        Subtotal: Rp ${m.subtotal.toLocaleString()}
      </p>`;
  });

  totalSpan.textContent = `Rp ${total.toLocaleString()}`;
  data.total = total;
}

function simpan() {
  if (!data) return alert("Data tidak ditemukan.");
  data.timestamp = new Date().toLocaleString();

  const riwayat = JSON.parse(localStorage.getItem("riwayatPemesanan") || "[]");
  riwayat.push(data);
  localStorage.setItem("riwayatPemesanan", JSON.stringify(riwayat));

  alert("Pemesanan disimpan!");
  window.location.href = "riwayat.html";
}
