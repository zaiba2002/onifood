let globalOrderData = [];
orderContents = document.getElementById("orderContentsrow");

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
    // orderContents = document.getElementById("orderContentsrow");

    globalOrderData.push(newOrderDetails);
    saveToLocalStorage();
}

// const generateOrderDetails = ({id,number,name,address,howmuch,location}) => {
//     `<div class="order" id=${id} key=${id}>
//       <h3 class="subheading">Order Now</h3>
//       <h1 class="heading">Free and Fast</h1>

//       <form action="">
//         <div class="inputBox">
//           <div class="input">${name}
//             <span>Your name</span>
//             <input type="text" placeholder="Enter your name">
//           </div>
//           <div class="input">${number}
//             <span>Your number</span>
//             <input type="number" placeholder="Enter your number">
//           </div>
//           <div class="input">${address}
//             <span>Your address</span>
//             <input type="text" placeholder="Enter your address">
//           </div>
//           <div class="input">${howmuch}
//             <span>how much</span>
//             <input type="number" placeholder="how many orders">
//           </div>
//           <div class="input">${location}
//             <span>Your location</span>
//             <input type="text" placeholder="Enter your location">
//           </div>
//         </div>
//         <button class="btn btn-outline-primary float-end">Order Now</button>
//       </form>
//     </div>`
// }

const generateOrderDetails = ({id, number, name, address, howmuch,location}) => {
    return (`<div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
        <div class="order">
            <div class="order-header">
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-outline-info" name=${id} onclick="editTask(this)">
                        <i class="fas fa-pencil-alt" name=${id} onclick="editTask(this)"></i>
                    </button>
                    <button type="button" class="btn btn-outline-danger" name=${id} onclick="deleteTask(this)">
                        <i class="far fa-trash-alt" name=${id} onclick="deleteTask(this)"></i>
                    </button>
                </div>
            </div>
            
            <div class="card-body">
                <h5 class="order-name">${name}</h5>
                <p class="order-number">${number}</p>
                <p class="order-howmuch">${howmuch}</p>
                <p class="order-location">${location}</p>
                <span class="badge bg-primary">${address}</span>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline-primary float-end">OPEN ORDER</button>
            </div>
        </div>
    </div>`)
}

const saveToLocalStorage = () => {
     localStorage.setItem("zaibaorders",JSON.stringify({zaiba: globalOrderData}));
}