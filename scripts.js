function handleSubmit(event) {
  event.preventDefault()
  console.log('submitted form')
}
function handleNameChange() {
  console.log('name changed')
}
const hero = document.getElementById('hero')
hero.innerText = 'this is my new Hero title'
const links = document.getElementsByClassName('menu-link')
links[1].style.color = 'white'
const footer = document.querySelector('footer')
footer.style.backgroundColor = 'grey'
