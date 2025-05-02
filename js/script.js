document.getElementById('menu-toggle')?.addEventListener('click', () => {
  document.getElementById('navbar')?.classList.toggle('active');
});

const frases = [
  "Dios está con nosotros en cada paso de nuestro camino, incluso cuando no lo podemos ver. (Isaías 41:10)",
"La oración es el lenguaje del alma que conecta nuestro corazón con el cielo. (Filipenses 4:6)",
"El amor de Dios nunca falla, siempre permanece fiel aún cuando nosotros no lo somos. (1 Corintios 13:8)",
"Vienen bendiciones que sobrepasarán tu entendimiento; Dios ya está obrando a tu favor. (Efesios 3:20)",
"Donde dos o tres se reúnen con fe en Su nombre, Su presencia es real y poderosa. (Mateo 18:20)",
"Jesús es el único camino, la verdad que libera y la vida que renueva. (Juan 14:6)",
"La fe verdadera es capaz de mover montañas, abrir caminos y cambiar destinos. (Mateo 17:20)",
"Confía en el Señor con todo tu ser, aun cuando no entiendas lo que estás viviendo. (Proverbios 3:5)",
"Tu propósito en esta vida es más grande de lo que imaginas, y Dios lo cumplirá en su tiempo. (Jeremías 29:11)",
"La gracia de Dios es suficiente para cada día, cada lucha, y cada caída. (2 Corintios 12:9)",
"Nunca estás solo, Dios camina a tu lado en el valle y en la cima. (Salmos 23:4)",
"Con Dios no hay imposibles; lo que parece cerrado, Él lo puede abrir. (Lucas 1:37)",
"Él sana los corazones rotos y les da un nuevo motivo para seguir adelante. (Salmos 147:3)",
"Aunque no entiendas lo que pasa, Dios tiene el control absoluto de todo. (Romanos 8:28)",
"La paz de Dios no depende de las circunstancias, sino de Su presencia en ti. (Filipenses 4:7)",
"Eres una creación maravillosa, diseñada con propósito y amor por el Creador. (Salmos 139:14)",
"El gozo del Señor es la fuerza que te sostiene en medio de las pruebas. (Nehemías 8:10)",
"Dios escucha cada oración, aun las que no puedes poner en palabras. (1 Juan 5:14)",
"Dios tiene planes hermosos y de bien para tu futuro, confía en Su tiempo. (Jeremías 29:11)",
"Vive por fe, no por lo que ves; Dios va delante de ti abriendo camino. (2 Corintios 5:7)",
"En el desierto, Dios provee; en la tormenta, Él calma el mar. (Isaías 43:19)",
"No importa cuán lejos hayas ido, Dios siempre te recibe con brazos abiertos. (Lucas 15:20)",
"Espera con paciencia, porque lo que Dios promete, Él lo cumple. (Hebreos 10:23)",
"Dios pelea por ti aun cuando no lo ves; confía en su protección. (Éxodo 14:14)",
"Nada puede separarte del amor de Dios, ni lo alto ni lo profundo. (Romanos 8:39)",
"Cada nuevo amanecer es una muestra de la fidelidad de Dios. (Lamentaciones 3:22-23)",
"Dios transforma lo roto en algo hermoso; confía en su obra en ti. (Isaías 61:3)",
"En medio de la prueba, Dios te está fortaleciendo para lo que viene. (1 Pedro 5:10)",
"El Espíritu Santo te guía cuando te faltan las fuerzas o la dirección. (Juan 14:26)",
"Dios nunca llega tarde; Él siempre actúa en el momento perfecto. (Eclesiastés 3:11)"
];
const fraseContainer = document.getElementById("frase");
if (fraseContainer) {
  fraseContainer.innerText = frases[Math.floor(Math.random() * frases.length)];
}

const comunidadImgs = [
  "img/img_comunidad_1.jpeg",
  "img/img_comunidad_2.jpeg",
  "img/img_comunidad_3.jpeg",
  "img/img_comunidad_4.jpeg",
  "img/img_comunidad_5.jpeg",
  "img/img_comunidad_6.jpeg",
  "img/img_comunidad_7.jpeg",
  "img/img_comunidad_8.jpeg",
  "img/img_comunidad_9.jpeg",
  "img/img_comunidad_10.jpeg",
  "img/img_comunidad_11.jpeg",
  "img/img_comunidad_12.jpeg",
  "img/img_comunidad_13.jpeg",
  "img/img_comunidad_14.jpeg",
];
function renderCarousel(images, containerId) {
  const container = document.querySelector(containerId);
  if (container) {
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = "Imagen";
      img.onclick = () => window.open(src, "_blank");
      container.appendChild(img);
    });
  }
}
renderCarousel(comunidadImgs, "#comunidad-carousel");

const toggleBtn = document.getElementById('toggle-mode');
toggleBtn?.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('modoOscuro', isDark ? 'true' : 'false');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
});
if (localStorage.getItem('modoOscuro') === 'true') {
  document.body.classList.add('dark-mode');
  if (toggleBtn) toggleBtn.textContent = '☀️';
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});