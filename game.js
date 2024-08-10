console.log("Hello World Juan Alberto");
/* global phaser*/
const config = {
    type: Phaser.AUTO, //webgl, canvas
    width: 256,       /*pixeles reales del juego 256 X 240 */
    height: 244,
    backgroundColor: '#049cd8',
    parent: 'game',      /* renderizar el juego */
    scene: {
        preload, // se ejecuta para precargar recursos
        create,  // se ejecuta cuando el juego comienza
        update // se ejecuta en cada frame constantemente 
    }

}

//inicializar juego
new Phaser.Game(config)
//split-sheet conjunto de imagenes del mario con todos sus posibles movimientos y posicion del mario


//this --> game --> el juego que estamos construyendo

function preload () {
    //cargar los recursos
    this.load.image(
        'cloud1', 
        'assets/scenery/overworld/cloud1.png'
    )
    //suelo
    this.load.image(
        'floorbricks', 
        'assets/scenery/overworld/floorbricks.png'
    )

   //Mario mas deuna posicion
   this.load.spritesheet(
    'mario',  //id
    'assets/entities/mario.png',   
       { frameWidth: 18, frameHeight: 16}   //division de los marios
   )   
}
function create () {
    //image(x,y, id-del-asset)
    this.add.image(100,50, 'cloud1')  //assets
    //set origin donde comeiza coordenadas origen
    .setOrigin(0, 0)
    //escalar
    .setScale(0.15)

    //crear textura que se va a expandir
    this.add.tileSprite(0, config.height - 32, config.width, 32, 'floorbricks')
        .setOrigin(0, 0)

  //mario sprite de posicion
   this.add.sprite(50, 210, 'mario')
   .setOrigin(0, 1)
}
function update () {
    //3 continuamente console.log('update')
}

