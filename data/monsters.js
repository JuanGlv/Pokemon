const monsters = {
  Galaviz: {
    position: {
      x: 280,
      y: 350
    },
    image: {
      src: './img/embySprite.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    name: 'Galaviz',
    attacks: [attacks.Tacleada, attacks.Llamarada, attacks.Trueno, attacks.Hidrobomba]
  },
  JuanChuc: {
    position: {
      x: 800,
      y: 70
    },
    image: {
      src: './img/draggleSprite.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'JuanChuc',
    attacks: [attacks.Tacleada, attacks.Llamarada, attacks.Trueno, attacks.Hidrobomba]
  }
}
