let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #blue ;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #blue;">Enseño programación web y hago contenido de diversos temas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();