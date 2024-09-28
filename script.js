function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avata-light.png")
    img.setAttribute("alt", "Não carrega agora")
  } else {
    img.setAttribute("scr", "./assets/avata.png")
    img.setAttribute("alt", "Não carrega")
  }
}
