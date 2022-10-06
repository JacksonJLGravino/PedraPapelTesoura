var elementos = document.querySelectorAll('.player-options div > img')
var playerOpt = ''
var inimigoOpt = ''

function resetOpacityPlayer() {
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.opacity = 0.3
  }
}

function resetInimigo(enemyOptions) {
  for (let i = 0; i < enemyOptions.length; i++) {
    enemyOptions[i].style.opacity = 0.3
  }
}

function validarVitoria() {
  let vencedor = document.querySelector('.vencedor')
  if (playerOpt == 'pedra') {
    if (inimigoOpt == 'pedra') {
      vencedor.innerHTML = 'O jogo foi empatado'
    } else if (inimigoOpt == 'papel') {
      vencedor.innerHTML = 'O inimigo ganhou'
    } else if (inimigoOpt == 'tesoura') {
      vencedor.innerHTML = 'O player ganhou'
    }
  } else if (playerOpt == 'papel') {
    if (inimigoOpt == 'pedra') {
      vencedor.innerHTML = 'O player ganhou'
    } else if (inimigoOpt == 'papel') {
      vencedor.innerHTML = 'O jogo foi empatado'
    } else if (inimigoOpt == 'tesoura') {
      vencedor.innerHTML = 'O inimigo ganhou'
    }
  } else if (playerOpt == 'tesoura') {
    if (inimigoOpt == 'pedra') {
      vencedor.innerHTML = 'O inimigo ganhou'
    } else if (inimigoOpt == 'papel') {
      vencedor.innerHTML = 'O player ganhou'
    } else if (inimigoOpt == 'tesoura') {
      vencedor.innerHTML = 'O jogo foi empatado'
    }
  }
}

function inimigoJogar() {
  let rand = Math.floor(Math.random() * 3)
  const enemyOptions = document.querySelectorAll('.enemy-options div > img')
  resetInimigo(enemyOptions)

  for (let i = 0; i < enemyOptions.length; i++) {
    if (i == rand) {
      enemyOptions[i].style.opacity = 1
      inimigoOpt = enemyOptions[i].getAttribute('opt')
    }
  }

  validarVitoria()
}

for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener('click', function (t) {
    resetOpacityPlayer()

    t.target.style.opacity = 1
    playerOpt = t.target.getAttribute('opt')

    inimigoJogar()
  })
}
