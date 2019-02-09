'use strict';
const takePhoto = document.getElementById('take-photo')
const container = document.querySelector('.container')
const app = document.querySelector('.app')
const controls = document.querySelector('.controls')
const list = document.querySelector('.list')
const listMaterial = list.getElementsByClassName('material-icons')
const video = document.createElement('video')
const err = document.getElementById('error-message')
const audio = document.createElement('audio')
app.appendChild(audio)
app.appendChild(video)
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const image = document.createElement('img');
const arrImg = [];

document.addEventListener("DOMContentLoaded", ready);

function ready(event) {
    window.navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = ()=> video.play();
        controls.style.display = 'block';
        takePhoto.style.position = 'absolute'
        takePhoto.style.left =`${controls.clientWidth / 2 - takePhoto.offsetWidth / 2}px`;
        takePhoto.style.top =`${controls.clientHeight / 0.8 - takePhoto.offsetHeight / 2}px`;

        takePhoto.addEventListener('click', () => stream.getVideoTracks().map(track => {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          ctx.drawImage(video, 0, 0);
          const photoElement = renderImg(canvas.toDataURL());
          list.insertBefore(photoElement, list.firstChild);
          audio.src='https://raw.githubusercontent.com/netology-code/hj-homeworks/master/media/photo-booth/audio/click.mp3';
          audio.play()

          //listMaterial[0].addEventListener('click', downloadPhoto)
          listMaterial[1].addEventListener('click', sendPhoto)
          listMaterial[2].addEventListener('click', deletePhoto)
        }))
    }).catch(() => {
        console.error('oh noes');
    })
  }

  function renderImg(url) {
    return el('figure', {}, [
        el('img', {src: url}, ''),
        el('figcaption', {}, [
          el('a', {href: url, download: 'snapshot.png'}, [
            el('i', {class: 'material-icons'}, 'file_download')
          ]),
          el('a', {}, [
            el('i', {class: 'material-icons'}, 'file_upload')
          ]),
          el('a', {}, [
            el('i', {class: 'material-icons'}, 'delete')
          ])
        ])
      ])
};

function el(tagName, attributes, children) {
  const element = document.createElement(tagName);
  if (typeof attributes === 'object') {
    Object.keys(attributes).forEach(i => element.setAttribute(i, attributes[i]));
  }
  if (typeof children === 'string') {
    element.textContent = children;
  } else if (children instanceof Array) {
    children.forEach(child => element.appendChild(child));
  }
  return element;
};

function deletePhoto(event) {
  event.target.closest('figure').remove();
  console.log(event.target.closest('figure'));
};

function sendPhoto(event) {
  let parent = event.target.closest('figure');
  let photo = parent.querySelector('img');
  console.log(photo.src);
  let req = new XMLHttpRequest();
  let formData = new FormData();

  formData.append('image', photo.src);
  req.open("POST", 'https://neto-api.herokuapp.com/photo-booth');
  req.setRequestHeader('Content-Type', 'multipart/form-data');
  req.send(formData);
}; 
