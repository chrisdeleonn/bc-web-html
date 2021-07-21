function handleSubmit(event) {
  event.preventDefault()
  console.log('submitted form')
  const form = document.querySelector('form')
  const newCustomer = {
    fName: form.elements.firstName.value,
    lName: form.elements.lastName.value,
    email: form.elements.email.value,
  }
  console.log(newCustomer)
  fetch('https://cd-pet-boutique.web.app/customers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCustomer),
  })
    .then(() => {
      form.innerHTML = `<h3>Thanks</h3>`
      getCustomers()
    })
    .catch((err) => {
      form.innerHTML = '<h3>Error sending customer</h3>'
    })
}
function handleNameChange() {
  console.log('name changed', event.target.value)
}

function getCustomers() {
  fetch('https://cd-pet-boutique.web.app/customers')
    .then((response) => response.json())
    .then((data) => {
      const custDiv = document.getElementById('customers')
      const custArray = data.map((customer) => {
        return `<article>
      <h3>${customer.fName} ${customer.lName}</h3>
      <p>${customer.email}</p>
      </article>`
      })
      custDiv.innerHTML = custArray.join('')
      console.log(custArray)
    })
    .catch((err) => console.error(err))
}

getCustomers()
