/*HAKKIMDA KISMI DAHA FAZLA GÖR*/ 
function toggleDetails() {
    const details = document.getElementById("detaylar");
    const button = document.getElementById("GecisButonu");

    
    if (details.style.display === "none") { // Eğer detaylar gizli ise (none)
        details.style.display = "block";
        button.textContent = "Daha Az Göster"; 
    } else {
        details.style.display = "none"; 
        button.textContent = "Daha Fazla Göster"; 
    }
}