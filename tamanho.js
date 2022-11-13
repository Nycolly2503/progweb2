let title
let tam = 2

for (let i = 1; i < 7; i++) {
  title = document.querySelector(`h${i}`)
  if (title != null) {
    botao()
    break
  }
}


function botao() {
  const botaoMais = document.createElement(null)
  botaoMais.innerHTML = `<button type='button' onclick="clicou('mais')" id='botao'>+</button>`

  const botaoMenos = document.createElement(null)
  botaoMenos.textContent = "-"
  botaoMenos.innerHTML = `<button type='button' onclick="clicou('menos')" id='botao'>-</button>`

  const br = document.createElement("br")

  title.parentNode.insertBefore(br, title.nextSibling)
  title.parentNode.insertBefore(botaoMenos, title.nextSibling)
  title.parentNode.insertBefore(botaoMais, title.nextSibling)
  
  const botao = document.querySelectorAll('#botao')
  for(let i = 0; i < 2; i++){
    botao[i].style.borderRadius = '20px'
    botao[i].style.width = '45px'
    botao[1].style.marginLeft = '50px'
  }
}


function clicou(btn) {
  if (btn == "mais" && tam < 6) {
    tam += 0.5
  } else if(btn == 'menos' && tam > 1) {
    tam -= 0.5
  }
  title.style.fontSize = `${tam}em`
}
