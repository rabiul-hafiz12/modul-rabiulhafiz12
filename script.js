// Nama: Rabiul Hafiz | NIM: 2502026
// Modul 13 – Git dan GitHub untuk Kontrol Versi

// Praktik 3: Commit awal - tombol ubah deskripsi
const deskripsi = document.getElementById("deskripsi");
const btnUbah   = document.getElementById("btnUbah");
const pesanArea = document.getElementById("pesanArea");

btnUbah.addEventListener("click", function () {
  // Praktik 11: Commit lanjutan – ubah teks deskripsi
  deskripsi.textContent = "Deskripsi berhasil diubah. Proyek ini dikembangkan menggunakan Git dan GitHub sebagai kontrol versi untuk persiapan mini project.";

  // Tampilkan pesan konfirmasi
  pesanArea.style.display = "block";
  pesanArea.textContent   = "✅ Deskripsi berhasil diubah! Perubahan ini akan dicommit ke repository Git.";

  btnUbah.textContent    = "Sudah Diubah";
  btnUbah.style.backgroundColor = "#27ae60";
  btnUbah.disabled       = true;
});
