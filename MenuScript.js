// MenuScript.js (Complete with Cart Sidebar Logic)

let cartCount = 0;
let selectedSize = 'hot';
let currentItemKey = null;
let cartItems = [];  // Array to store cart items


const menuItems = {
    // Coffee items (same as before)
      coffee0: {
        name: "Americano",
        description: "A classic espresso diluted with hot water for a smooth, rich coffee experience.",
        hotPrice: "₱95",
        coldPrice: "₱110",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "/api/placeholder/400/400"  //  placeholder.  Replace with your actual image paths.
    },
    coffee1: {
        name: "Cafe Latte",
        description: "Espresso mixed with steamed milk for a creamy, balanced coffee experience.",
        hotPrice: "₱100",
        coldPrice: "₱115",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "/api/placeholder/400/400"
    },
    coffee2: {
        name: "Salted Caramel Latte",
        description: "Espresso and steamed milk infused with salted caramel for a sweet and savory treat.",
        hotPrice: "₱115",
        coldPrice: "₱130",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "/api/placeholder/400/400"
    },
    coffee3: {
        name: "Spanish Hazelnut Latte",
        description: "A sweet, nutty twist on a classic favorite! The Spanish Hazelnut Latte combines robust espresso, creamy milk, and a touch of hazelnut flavor for a comforting and aromatic experience.",
        hotPrice: "₱105",
        coldPrice: "₱120",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "/api/placeholder/400/400"
    },
    coffee10: { // Added for best-selling section
        name: "Spanish Latte",
        description: "A delightful blend of espresso and sweetened condensed milk, creating a rich and creamy coffee.",
        hotPrice: "₱110",
        coldPrice: "₱125",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "/api/placeholder/400/400"
    },
    coffee11: { // Added for best-selling section
        name: "Salted Toffee Nut Latte",
        description: "Espresso, steamed milk, toffee nut syrup, and a sprinkle of sea salt for a delightful balance of sweet and salty.",
        hotPrice: "₱120",
        coldPrice: "₱135",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "/api/placeholder/400/400"
    }
};

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const menu = document.querySelector('.hidden-nav-list'); // Get the menu element
const clicked = document.querySelector('.hide-on-desktop'); // Get the mobile menu icon

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});

function showMenu() {
    menu.classList.add('active');
    menu.style.display = 'flex';
    clicked.onclick = hideMenu;
}

function hideMenu() {
    menu.classList.remove('active');
    menu.style.display = 'none';
    clicked.onclick = showMenu;
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-nobootstrap');
    const navList = document.querySelector('.nav-list');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        navList.style.display = 'none';
        if(menu.classList.contains('active')){ // if the menu is active while scrolling, hide it
            hideMenu();
        }
    } else {
        header.classList.remove('scrolled');
        navList.style.display = '';
    }
});


function openModal(itemKey) {
    currentItemKey = itemKey;
    const item = menuItems[itemKey];
    if (!item) {
        console.error("Item not found:", itemKey);
        return;
    }

    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('hotPrice').textContent = item.hotPrice;
    document.getElementById('coldPrice').textContent = item.coldPrice;
    document.getElementById('hotSize').textContent = item.hotSize;
    document.getElementById('coldSize').textContent = item.coldSize;
    document.getElementById('modalImage').src = item.image;

    selectSize('hot');

    document.getElementById('menuModal').style.display = 'block';
}


function closeModal() {
    document.getElementById('menuModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('menuModal');
    if (event.target == modal) {
        closeModal();
    }
}


function selectSize(size) {
    selectedSize = size;
    const hotOption = document.querySelector('.price-option:nth-child(1)');
    const coldOption = document.querySelector('.price-option:nth-child(2)');

    if (size === 'hot') {
        hotOption.classList.add('selected');
        coldOption.classList.remove('selected');
    } else {
        coldOption.classList.add('selected');
        hotOption.classList.remove('selected');
    }
}


function addToCart() {
    if (currentItemKey === null) {
        console.error("No item selected to add to cart.");
        return;
    }

    const item = menuItems[currentItemKey];
    const price = selectedSize === 'hot' ? item.hotPrice : item.coldPrice;
    const size = selectedSize === 'hot' ? item.hotSize : item.coldSize;

    // Check if the item is already in the cart
    const existingCartItem = cartItems.find(cartItem => cartItem.key === currentItemKey && cartItem.size === size);

    if (existingCartItem) {
        existingCartItem.quantity++;
    } else {
        cartItems.push({
            key: currentItemKey,
            name: item.name,
            price: price,
            size: size,
            quantity: 1,
            image: item.image,
        });
    }

    cartCount++; // Increment even if quantity increases
    updateCartIndicator();
    updateCartSidebar(); // Update the sidebar content
    closeModal();
    // alert(`${item.name} (${selectedSize}) added to cart!`); //Consider removing the alert
    currentItemKey = null;
    selectedSize = 'hot';

    // Show cart sidebar automatically after adding an item.
     document.getElementById('cart-sidebar').classList.add('active');
}

function updateCartIndicator() {
    const cartIndicator = document.querySelector('.cart-indicator');
    cartIndicator.textContent = cartCount;
}

function toggleCartSidebar() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('active');
}

function updateCartSidebar() {
    const cartList = document.querySelector('.cart-items-list');
    cartList.innerHTML = ''; // Clear previous content

    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <div class="cart-item-details">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price}</div>
                    <div class="cart-item-size">${item.size}</div>
                    <div class="cart-item-quantity">
                        <button onclick="decreaseQuantity('${item.key}', '${item.size}')">-</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button onclick="increaseQuantity('${item.key}', '${item.size}')">+</button>
                    </div>
                </div>
            </div>

            <div class="cart-item-remove">
                <button onclick="removeFromCart('${item.key}', '${item.size}')">Remove</button>
            </div>
        `;
        cartList.appendChild(cartItemElement);
    });
}

function increaseQuantity(itemKey, size) {
    const item = cartItems.find(item => item.key === itemKey && item.size === size);
    if (item) {
        item.quantity++;
        cartCount++;  //Increment the total cart count.
        updateCartSidebar();
        updateCartIndicator(); // Update the cart indicator
    }
}

function decreaseQuantity(itemKey, size) {
    const item = cartItems.find(item => item.key === itemKey && item.size === size);
    if (item) {
        if (item.quantity > 1) {
            item.quantity--;
            cartCount--; // Decrement the total cart count
        } else {
            // Remove the item if quantity is 1
             removeFromCart(itemKey,size); // Call remove function
             return; // Important:  Exit to avoid double-updating
        }
        updateCartSidebar();
        updateCartIndicator(); // Update the cart indicator
    }
}

function removeFromCart(itemKey, size) {
     // Find the index of the item to remove
    const itemIndex = cartItems.findIndex(item => item.key === itemKey && item.size === size);

    if (itemIndex > -1) {
        // Subtract the item's quantity from cartCount *before* removing
        cartCount -= cartItems[itemIndex].quantity;
        cartItems.splice(itemIndex, 1); // Remove the item from the array
        updateCartSidebar();
        updateCartIndicator();
    }
}

function checkout() {
    // Store the cart data in localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartCount', cartCount.toString()); // Store cartCount too

    // Redirect to the checkout page
    window.location.href = 'checkout.html';
}