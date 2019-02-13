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

function record(app, config = app.config, limit = app.limit) {
  return new Promise((done, fail) => {
    app.mode = 'preparing';

    window.navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      })
      .then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = ()=> video.play();
        video.style.display = 'block';

        setTimeout(() => {
          app.mode = 'recording';
          app.preview.srcObject = stream;
          let recorder = new MediaRecorder(stream);
          let chunks = [];
          recorder.start();

          recorder.addEventListener('dataavailable', event => chunks.push(event.data));

          recorder.addEventListener('stop', event => {
            recorded = new Blob(chunks, {
              'type': recorder.mimeType
            });
          })
        })
      })

      .then(() => {
        setTimeout(() => {
          app.mode = 'sending';
          app.preview.srcObject = null;
          recorder.stop();
          stream.getVideoTracks().map(track => track.stop());
        }, limit);
      })

      .catch(err => fail(err));
  });
}

record(createThumbnail)
