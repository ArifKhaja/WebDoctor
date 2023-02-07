fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let product of products) {
      out += `
      <div class="card-body">
        <img src="${product.image}" class="card-img-top">
        <h2 class="card-title">${product.name}</h2>
        <p class="card-text">${product.details}</p>
        <h4>${product.specialization}</h4>
        <h2>${product.fees}</h2>
        <h5>Time: ${product.timing}</h5>
        <div>
          <button class="book"><a href="bookform.html">Book Appointment</a></button>
          <button class="online"><a href="onlineform.html">Online Consult</a></button>
        </div>  
      </div>
      `;
    }

    placeholder.innerHTML = out;
  });
