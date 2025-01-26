let menustatus = false;                         // Menünün durumu (açık ya da kapalı)
const menu = document.getElementById("menu");   // Stili değiştirilecek menü elementi

function handleMenu(){                          // Menü Fonksiyonu
    if(menustatus){menu.style.width = 0;}       // Menü açıksa, genişliğini 0 yap
    else{menu.style.width = "100vw";}           // Menü kapalıysa, genişliğini 100vw yap
    menustatus = !menustatus;                   // Menü durumunu güncelle
}