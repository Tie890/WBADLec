const riwayatDiv = document.getElementById("riwayat");
let data = JSON.parse(localStorage.getItem("riwayatPemesanan") || "[]");

function tampilkanRiwayat() {
  riwayatDiv.innerHTML = "";

  if (data.length === 0) {
    riwayatDiv.innerHTML = "<p>Tidak ada pemesanan yang tersimpan.</p>";
    return;
  }

  data.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "pemesanan";

    let mobilList = item.mobil.map(m => `
      <li>${m.nama} - ${m.durasi} hari (Rp ${m.subtotal.toLocaleString()})<br>
      Tanggal Mulai: ${m.tanggal}</li>`).join("");

    div.innerHTML = `
      <p><strong>Nama:</strong> ${item.nama}</p>
      <p><strong>Mobil Disewa:</strong></p>
      <ul>${mobilList}</ul>
      <p><strong>Total:</strong> Rp ${item.total.toLocaleString()}</p>
      <p><strong>Waktu Pemesanan:</strong> ${item.timestamp}</p>
      <button onclick="hapusPemesanan(${index})">Hapus</button>
    `;

    riwayatDiv.appendChild(div);
  });
}

function hapusPemesanan(index) {
  if (confirm("Yakin ingin menghapus pemesanan ini?")) {
    data.splice(index, 1);
    localStorage.setItem("riwayatPemesanan", JSON.stringify(data));
    tampilkanRiwayat();
  }
}

tampilkanRiwayat();
