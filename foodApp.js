const addOrder = () => {
    const newOrderDetails = {
        id: `${Date.now()}`,
        number: document.getElementById("number").value,
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        howmuch: document.getElementById("howmuch").value,
        location: document.getElementById("location").value,
    };
    orderContents.insertAdjacentHTML('beforeend',generateOrderDetails(newOrderDetails));
    orderContents = document.getElementById("orderContentsrow");
}

const generateOrderDetails = ({id,number,name,address,howmuch,location}) => {
    `<div class="order" id=${id} key=${id}>
      <h3 class="subheading">Order Now</h3>
      <h1 class="heading">Free and Fast</h1>

      <form action="">
        <div class="inputBox">
          <div class="input">${name}
            <span>Your name</span>
            <input type="text" placeholder="Enter your name">
          </div>
          <div class="input">${number}
            <span>Your number</span>
            <input type="number" placeholder="Enter your number">
          </div>
          <div class="input">${address}
            <span>Your address</span>
            <input type="text" placeholder="Enter your address">
          </div>
          <div class="input">${howmuch}
            <span>how much</span>
            <input type="number" placeholder="how many orders">
          </div>
          <div class="input">${location}
            <span>Your location</span>
            <input type="text" placeholder="Enter your location">
          </div>
        </div>
        <button class="btn btn-outline-primary float-end">Order Now</button>
      </form>
    </div>`
}