document.addEventListener("DOMContentLoaded", () => {
  const animTime = 300; // Tiempo de la animación en milisegundos
  let clickPolice = false; // Bandera para evitar clicks múltiples durante la animación

  // Seleccionamos el contenedor principal para escuchar los clicks
  const contenedor = document.querySelector(".informacion-general");

  if (contenedor) {
    contenedor.addEventListener("click", (event) => {
      // Usamos .closest() para asegurarnos de que el click fue en un '.bloque-info' o en un hijo de este
      const bloqueClicado = event.target.closest(".bloque-info");

      // Si no se hizo clic en un bloque de información o la animación está en curso, no hacemos nada
      if (!bloqueClicado || clickPolice) {
        return;
      }

      clickPolice = true; // Bloqueamos nuevos clicks

      // 1. Obtenemos todos los bloques de información y los de contenido
      const todosLosBloques = Array.from(
        contenedor.querySelectorAll(".bloque-info")
      );
      const todosLosContenidos =
        contenedor.querySelectorAll(".contenido-bloque");

      // 2. Encontramos el índice del bloque que fue clicado
      const currIndex = todosLosBloques.indexOf(bloqueClicado);

      // 3. Obtenemos la altura del contenido que queremos mostrar
      // .scrollHeight nos da la altura total del contenido interno, incluso si está oculto
      const targetHeight =
        todosLosContenidos[currIndex].querySelector(".info").scrollHeight;

      // 4. Gestionamos las clases para el estilo del título
      // Quitamos la clase 'seleccionado' de todos los títulos
      contenedor.querySelectorAll(".bloque-info h1").forEach((h1) => {
        h1.classList.remove("seleccionado");
      });
      // Añadimos la clase 'seleccionado' solo al título del bloque clicado
      bloqueClicado.querySelector("h1").classList.add("seleccionado");

      // 5. Animamos los paneles (usando CSS transitions)
      // Primero, cerramos todos los paneles animando su altura a 0
      todosLosContenidos.forEach((contenido) => {
        contenido.style.height = "0px";
        contenido.classList.remove("abierto");
      });
      // Luego, abrimos el panel correcto animando su altura a la que calculamos
      todosLosContenidos[currIndex].style.height = targetHeight + "px";
      todosLosContenidos[currIndex].classList.add("abierto");

      // 6. Liberamos el bloqueo de clicks después de que termine la animación
      setTimeout(() => {
        clickPolice = false;
      }, animTime);
    });
  }

  // Bonus: Asegurarse que el panel 'abierto' por defecto tenga la altura correcta al cargar la página
  const panelAbiertoInicial = document.querySelector(
    ".contenido-bloque.abierto"
  );
  if (panelAbiertoInicial) {
    panelAbiertoInicial.style.height =
      panelAbiertoInicial.querySelector(".info").scrollHeight + "px";
  }
});
