import html2canvas from "html2canvas";
import axios from "axios";

const screenshotTarget = document.body;

function showErrorPopup(url, err) {
  const popup = document.querySelector('.error')
  const popupUrl = document.querySelector('.url')
  const popupMessage = document.querySelector('.message')

  popup.addEventListener('click', sendMessage)

  popupUrl.innerHTML = `${url}`
  popupMessage.innerHTML = `${err}`
  popup.classList.add('show')
}

setTimeout(() => {
  try {
    throw new Error('Some error!');
  } catch (e) {
    showErrorPopup(window.location.href, e.name + ' ' + e.message)
  }
}, 1000)

function createImage() {
  html2canvas(screenshotTarget).then((canvas) => {
    return canvas.toDataURL("image/jpeg");
  }).then((res) => {
    axios({
      method: 'post',
      url: '/v1/send',
      data: {
        base64image: res
      }
    })
  })
}

function sendMessage() {
  const popup = document.querySelector('.error')
  createImage()
  popup.classList.remove('show')
}

