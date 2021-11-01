const sıra = [0, 1, 2];

const kopekFoto = 'img/Kopek.jpg';
const kediFoto = 'img/Kedi.jpg';
const arkaKapakFoto = 'img/ArkaKapak.png';

let baslangic = null;
let bitiş = true;
let kediSıra = 0;

function kedi(inx) {
  const foto = document.getElementById('img' + inx);
  foto.src = kediFoto;
  foto.style.cursor = 'default';
}

function uyarıGoster() {
  kartlarıGizle();
  document.getElementById('alanId').style.display = 'block';
}

function kopek(inx) {
  const foto = document.getElementById('img' + inx);
  foto.src = kopekFoto;
  foto.style.cursor = 'default';
}

function oyunuBitir(kazandi) {
  bitiş = true;
  for (let i = 0; i < sıra.length; i++) {
    if (i === kediSıra) {
      kedi(i);
    } else {
      kopek(i);
    }
  }
  if (kazandi) {
    kazandin();
  } else {
    yenildin();
  }
}

function sec(inx) {
  if (bitiş || inx === baslangic) {
    return;
  }
  if (kediSıra === inx) {
    kedi(inx);
    oyunuBitir(true);
  } else {
    if (!baslangic) {
      baslangic = inx;
      kopek(inx);
    } else {
      oyunuBitir(false);
    }
  }
}

function kazandin() {
  kartlarıGizle();
  document.getElementById('kazandiId').style.display = 'block';
}

function yenildin() {
  kartlarıGizle();
  document.getElementById('yenildiId').style.display = 'block';
}

function kartlarıGizle() {
  document.getElementById('alanId').style.display = 'none';
  document.getElementById('kazandiId').style.display = 'none';
  document.getElementById('yenildiId').style.display = 'none';
}

function arkaKapak(inx) {
  const foto = document.getElementById('img' + inx);
  foto.src = arkaKapakFoto;
  foto.style.cursor = 'pointer';
}

function yeniden() {
  baslangic = null;
  bitiş = false;
  kediSıra = Math.floor(Math.random() * 3);
  uyarıGoster();
  arkaKapak(0);
  arkaKapak(1);
  arkaKapak(2);
}
