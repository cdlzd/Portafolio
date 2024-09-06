let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 55,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Estudio programacion y me especializo en redes para internet de las cosas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
