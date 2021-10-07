// slider
const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 625,
  transition: 500,
  interval: 2000,
});

// modal bootstrap
var myModal = new bootstrap.Modal(document.getElementById("myModal"), {});
myModal.toggle();

// countdown-timer
// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("October 8, 2021 08:00:00").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function () {
  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();

  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;

  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Keluarkan hasil dalam elemen dengan id = "hari,jam,menit,detik"
  document.getElementById("hari").innerHTML = days + "";
  document.getElementById("jam").innerHTML = hours + "";
  document.getElementById("menit").innerHTML = minutes + "";
  document.getElementById("detik").innerHTML = seconds + "";

  // Jika hitungan mundur selesai, tulis beberapa teks
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hari").innerHTML = "00";
    document.getElementById("jam").innerHTML = "00";
    document.getElementById("menit").innerHTML = "00";
    document.getElementById("detik").innerHTML = "00";
  }
}, 1000);
