function mostrarVideo(url) {
    const main = document.getElementById("contenidoPrincipal");
    main.innerHTML = `
      <h2>Reproduciendo Video</h2>
      <iframe src="${url}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
  }