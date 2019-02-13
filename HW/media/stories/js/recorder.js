'use strict';

if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = function (constraints) {
    var getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }
    return new Promise((resolve, reject) => {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  }
}

function createThumbnail(video) {
  return new Promise((done, fail) => {
    const preview = document.createElement('video');
    preview.src = URL.createObjectURL(video);
    preview.addEventListener('loadeddata', () => preview.currentTime = 2);
    preview.addEventListener('seeked', () => {
      const snapshot = document.createElement('canvas');
      const context = snapshot.getContext('2d');
      snapshot.width = preview.videoWidth;
      snapshot.height = preview.videoHeight;
      context.drawImage(preview, 0, 0);
      snapshot.toBlob(done);
    });
  });
}

const video = document.querySelector('.stories__action__video');

function record(app) {
  return new Promise((done, fail) => {
    app.mode = 'preparing';

    setTimeout(() => {
      fail('Не удалось записать видео');
    }, app.limit);
  })

  .then(
    window.navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    }))
  .then((stream) => {
    video.srcObject = stream;
    video.style.display = 'block';
    console.log(stream);
    video.onloadedmetadata = ()=> video.play();
    /*let recorder = new MediaRecorder(stream);
    let chunks = [];
    recorder.addEventListener('dataavailable', e => {
      chunks.push(e.data);
    });
    recorder.addEventListener('stop', (e) => {
    let recorded = new Blob(chunks);
  })*/
  })

}

let arg = {mode: 'config', limit: 3000}
record(arg)































//record()
