function startProgress() {
    const overlay = document.getElementById("overlay");
    const progressBar = document.getElementById("progress-bar");
    const content = document.querySelector(".content");
  
    // Ativa a sobreposição e o desfoque
    overlay.classList.add("active");
    content.classList.add("blur");
  
    let width = 0;
  
    // Função que incrementa a barra de progresso
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval); // Para o intervalo quando atinge 100%
        // Remove a sobreposição e o desfoque
        overlay.classList.remove("active");
        content.classList.remove("blur");
        progressBar.style.width = "0"; // Reseta a barra para zero
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }, 50); // Tempo em milissegundos entre cada incremento
  }
  