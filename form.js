function lanjutRingkasan() {
  const nama = document.getElementById("nama").value.trim();
  const mobil = JSON.parse(sessionStorage.getItem("selectedCars") || "[]");

  if (!nama) {
    alert("Nama pelanggan wajib diisi.");
    return;
  }

  if (nama.length < 8) {
    alert("Nama pelanggan harus minimal 8 karakter.");
    return;
  }

  if (mobil.length === 0) {
    alert("Tidak ada data mobil. Silakan pilih ulang.");
    window.location.href = "mobil.html";
    return;
  }

  sessionStorage.setItem("dataPelanggan", JSON.stringify({ nama, mobil }));
  window.location.href = "../ringkasan/ringkasan.html";
}