const prop = ( data, name ) => data.map( item => item[ name ] ),
  summ = data => data.reduce(( total, value ) => total + value, 0 );

class SpriteGenerator {
  constructor( container ) {
    this.uploadButton = container.querySelector( '.sprite-generator__upload' );
    this.submitButton = container.querySelector( '.sprite-generator__generate' );
    this.imagesCountContainer = container.querySelector( '.images__added-count-value' );
    this.codeContainer = container.querySelector( '.sprite-generator__code' );
    this.imageElement = container.querySelector( '.sprite-generator__result-image' );
    this.images = [];
    this.imagesCount = 0;
    this.registerEvents();
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.imagesAdded = document.querySelector( '.sprite-generator__preview' );
    this.imagesAdded.appendChild(this.canvas);
    //this.addCode();
  }
  registerEvents() {
    this.uploadButton.addEventListener('change', this.loadImage.bind(this));
    this.submitButton.addEventListener('click', this.generateSprite.bind(this));
    this.submitButton.addEventListener('click', this.addCode.bind(this));
  }

  loadImage(event) {
    const files = Array.from(event.target.files);
    console.log(files);
    for(var file of files) {
      if(file.type.includes('image')) {
        this.images.push(file);
        this.imagesCount++;
        this.imagesCountContainer.textContent = Number(this.imagesCount);
      }
    }
  }

  generateSprite(event) {
    this.imagesAdded.querySelector('canvas').remove();
    const canvas = document.createElement('canvas');
    this.imagesAdded = document.querySelector( '.sprite-generator__preview' );
    this.imagesAdded.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width, canvas.height);

    let dups = [];
    const images = Array.from(this.images);
    for(var file of images) {
      var dupNode = this.imageElement.cloneNode(true);
      dupNode.src = window.URL.createObjectURL(file);
      dups.push(dupNode);
    }

      dups[0].addEventListener('load', draw);

      function draw() {
        ctx.drawImage(dups[0], 0, 0, 50, 50);
        var k=0;
        for(var n = 1; n < dups.length; n++) {
          k+=50;
          addDrow(dups[n], k);
        }

        function addDrow(i, k) {
          ctx.drawImage(i, k, 0, 50, 50);
        }

        window.URL.revokeObjectURL(event.target.src);
      }

    }

    addCode() {
      this.codeContainer.textContent +=
      `
      .icon {
        display: inline-block;
        background-image: url(https://image.png);
        }

      .icon_like {
        background-position: 0 0;
        width: 20px;
        height: 20px;;
      }`
    }




















  }

new SpriteGenerator( document.getElementById( 'generator' ));
