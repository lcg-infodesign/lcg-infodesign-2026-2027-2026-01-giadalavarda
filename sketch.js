let angoloLuna = 0; 

function setup() {
  createCanvas(400, 600);
  noStroke();
}

function draw() {
  background(60, 80, 110);

  // Fissa le posizioni casuali (se cambio numero cambia la disposizione) di palazzi, stelle e luci fisse
  randomSeed(77); 

  // Stelle
  fill(255);
  for (let i = 0; i < 40; i++) {
    let xStella = random(width);
    let yStella = random(height / 2);
    circle(xStella, yStella, 3); // Posizione e diamentro
  }

  // Luna
  fill(240, 240, 230);
  // Curva 
  let xLuna = width / 2 + cos(angoloLuna) * 250;
  let yLuna = height - sin(angoloLuna) * 450; 
  circle(xLuna, yLuna, 80);

  angoloLuna += 0.005; // Velocità della luna
  
  // Arrivati a mezza circonferenza (PI), la luna e le luci ricominciano
  if (angoloLuna > PI) { 
    angoloLuna = 0;
  }

  // Palazzi
  let idFinestra = 0; 
  
  for (let x = 0; x < width; x += 80) {
    
    // Sceglie a caso le righe di finestre e l'altezza del palazzo 
    let numeroRighe = int(random(4, 11)); // 11 escluso
    let altezza = 40 + (numeroRighe * 30); 
    let y = height - altezza; // Partenza dei palazzi a terra

    // Disegno del palazzo
    fill(20, 25, 30); 
    rect(x, y, 80, altezza);

    // Disegno colonne finestre
    for (let colonna = 0; colonna < 2; colonna++) {
      let fx = x + 15 + (colonna * 30); // Posizione orizzontale

      for (let riga = 0; riga < numeroRighe; riga++) {
        let fy = y + 20 + (riga * 30); // Posizione verticale
        
        let probabilita = random(100); 
        fill(40, 45, 50);
        
        // Luci
        if (idFinestra == 7) {
          // Si spegne quando la luna è a 0.5
          if (angoloLuna < 0.5) fill(255, 240, 150); 
        } 
        else if (idFinestra == 18) {
          // Si accende quando la luna supera 1.5
          if (angoloLuna > 1.5) fill(255, 240, 150); 
        }
        else if (idFinestra == 32) {
          // Si accende quando la luna supera 2.5
          if (angoloLuna > 2.5) fill(255, 240, 150); 
        }
        else {
          // Tutte le altre finestre sono decise dal caso (15% di probabilità)
          if (probabilita > 85) {
            fill(255, 240, 150); 
          }
        }
        
        // Disegno delle finestre
        rect(fx, fy, 20, 20); 
        idFinestra++; 
      }
    }
  }
}