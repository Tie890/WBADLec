function lanjutFormulir() {
  const checkboxes = document.querySelectorAll('.pilih');
  const data = [];

  for (let cb of checkboxes) {
    if (cb.checked) {
      const card = cb.closest('.mobil-card');
      const tanggal = card.querySelector('.tanggal').value;
      const durasi = parseInt(card.querySelector('.durasi').value);
      const harga = parseInt(cb.dataset.harga);

      if (!tanggal || isNaN(durasi) || durasi < 1) {
        alert(`Lengkapi tanggal dan durasi (≥ 1 hari) untuk ${cb.value}`);
        return;
      }

      data.push({
        nama: cb.value,
        harga,
        tanggal,
        durasi,
        subtotal: harga * durasi
      });
    }
  }

  if (data.length === 0) {
    alert("Pilih minimal satu mobil dan isi datanya.");
    return;
  }

  sessionStorage.setItem("selectedCars", JSON.stringify(data));
  window.location.href = "../form/form.html";
}