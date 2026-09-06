// 1. DOM Elemanlarının Seçilmesi
const vkiForm = document.getElementById("vki-form");
const kiloInput = document.getElementById("kilo");
const boyInput = document.getElementById("boy");
const sonucKutusu = document.getElementById("sonuc-kutusu");
const vkiDegeriEl = document.getElementById("vki-degeri");
const vkiDurumuEl = document.getElementById("vki-durumu");

// 2. Form Gönderilme (Submit) Dinleyicisi
vkiForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const kilo = parseFloat(kiloInput.value);
  const boyCm = parseFloat(boyInput.value);

  if (!kilo || !boyCm || kilo <= 0 || boyCm <= 0) {
    alert("Lütfen geçerli kilo ve boy değerleri giriniz.");
    return;
  }

  const boyMetre = boyCm / 100;

  const vki = kilo / (boyMetre * boyMetre);

  let durum = "";
  let colorClass = "";


  if (vki < 18.5) {
    durum = "Zayıf";
    colorClass = "status--weak";
  } else if (vki >= 18.5 && vki <= 24.9) {
    durum = "Sağlıklı";
    colorClass = "status--healty";
  } else if (vki >= 25 && vki <= 29.9) {
    durum = "Şişman";
    colorClass = "status--fat";
  } else if (vki >= 30 && vki <= 39.9) {
    durum = "Obez";
     colorClass = "status--obese";
  } else {
    durum = "Aşırı Obez";
    colorClass = "status--extremely-obese";
  }

  // 3. Sonuçları HTML Ekrana Yazdırma
  vkiDegeriEl.textContent = vki.toFixed(1);
  vkiDurumuEl.textContent = durum;

  vkiDurumuEl.className = "result-card__status " + colorClass;

  // 4. Sonuç Kartını Görünür Yapma
  sonucKutusu.classList.remove("result-card--hidden");
});
