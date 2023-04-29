const messageElements = document.querySelectorAll('.message');
const gifs = document.querySelectorAll('.gif')
// add click event listener to each message element
messageElements.forEach(messageElement => {
  const iframeElement = messageElement.querySelector('iframe');
  messageElement.addEventListener('click', () => {
    iframeElement.classList.toggle('hidden')
  })
})
