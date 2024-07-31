console.log("Hello World Juan Alberto");
/* global phaser*/
const config = {
    type: Phaser.AUTO, //webgl, canvas
    width: 256,       /*pixeles reales del juego 256 X 240 */
    height: 244,
    backgroundColor: '#fff',
    parent: 'game',      /* renderizar el juego */
    scene: {
        preload, // se ejecuta para precargar recursos
        create,  // se ejecuta cuando el juego comienza
        update // se ejecuta en cada frame
    }

}

//inicializar juego
//new Phaser.Game(config)

function preload () {
   //1
}
function create () {
  //2
}
function update () {
    //3 continuamente console.log('update')
}

