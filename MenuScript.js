// Define menu items data
const menuItems = {
    // Coffee items
    coffee0: {
        name: "Americano",
        description: "Start your day with a bold and smooth Americano. Made with rich 100% Arabica beans, this classic black coffee is available hot or iced for a refreshing caffeine boost. Enjoy it with no added sugar or cream for a pure coffee experience.",
        hotPrice: "₱65",
        coldPrice: "₱85",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/Americano.png"
    },
    coffee1: {
        name: "Cafe Latte",
        description: " Indulge in the creamy goodness of a Cafe Latte, made with expertly brewed espresso and steamed milk, topped with a light layer of foam. Enjoy it hot for a comforting sip or iced for a refreshing treat.",
        hotPrice: "₱75",
        coldPrice: "₱95",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/Cafe latte.png"
    },
    coffee2: {
        name: "Salted Caramel Latte",
        description: "A delightful balance of sweet and salty, the Salted Caramel Latte blends smooth espresso with velvety milk and a rich caramel twist. Topped with a hint of sea salt, it’s the perfect pick-me-up.",
        hotPrice: "₱95",
        coldPrice: "₱120",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/Salted Caramel.png"
    },
    coffee3: {
        name: "Spanish Hazelnut Latte",
        description: "A sweet, nutty twist on a classic favorite! The Spanish Hazelnut Latte combines robust espresso, creamy milk, and a touch of hazelnut flavor for a comforting and aromatic experience.",
        hotPrice: "₱105",
        coldPrice: "₱120",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/Spanish Hazelnut.png"
    },
    coffee4: {
        name: "White Mocha Latte",
        description: "Indulge in the luxurious taste of the White Mocha Latte, featuring bold espresso, steamed milk, and a velvety white chocolate infusion. A rich, creamy delight in every sip.",
        hotPrice: "₱115",
        coldPrice: "₱125",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/White mocha.png"
    },
    coffee5: {
        name: "Caramel Macchiato",
        description: "Layered to perfection, the Caramel Macchiato features a smooth espresso shot, steamed milk, and a delicious drizzle of caramel for a sweet and satisfying finish.",
        hotPrice: "₱115",
        coldPrice: "₱125",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/Caramel macchiato.png"
    },
    coffee6: {
        name: "Biscoffee",
        description: "A special coffee experience like no other, the Biscoffee blends bold espresso with a unique biscuit-infused flavor, creating a rich and indulgent treat perfect for coffee lovers.",
        coldPrice: "₱165",
        coldSize: "(16 oz)",
        image: "Menu/Biscoff.png",
        hotAvailable: false  
    },
    coffee7: {
        name: "Brown Sugar Cinnamon",
        description: "Warm, cozy, and full of flavor, the Brown Sugar Cinnamon Latte combines bold espresso with smooth steamed milk and a touch of spiced cinnamon sweetness.",
        hotPrice: "₱95",
        coldPrice: "₱120",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/Brown sugar cinnamon.png"
    },
    coffee8: {
        name: "Caramel Brulee",
        description: "A decadent twist on caramel, the Caramel Brulee Latte features deep, rich caramelized sugar flavors blended with smooth espresso and steamed milk for a sweet and creamy indulgence.",
        hotPrice: "₱95",
        coldPrice: "₱120",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/Caramel brulee.png"
    },
    coffee9: {
        name: "Choco Chip Latte",
        description: "Perfect for chocolate lovers! The Choco Chip Latte blends creamy milk with rich espresso and chocolate chip flavors, creating a smooth and sweet coffee experience.",
        hotPrice: "₱115",
        coldPrice: "₱125",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/choco chip.png"
    },
    coffee10: {
        name: "Spanish Latte",
        description: "A classic Spanish-style coffee with a touch of sweetness. The Spanish Latte features espresso and steamed milk, balanced with just the right amount of sugar for a rich, full-bodied taste.",
        hotPrice: "₱90",
        coldPrice: "₱110",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/Spanish latte.png"
    },
    coffee11: {
        name: "Salted Toffee Nut Latte",
        description: "A delightful blend of espresso, steamed milk, and the rich flavors of toffee and nuts, finished with a hint of sea salt for a perfect balance of sweet and savory.",
        hotPrice: "₱95",
        coldPrice: "₱120",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/toffee nut.png"
    },
    coffee12: {
        name: "Cafe Mocha",
        description: "A classic fusion of rich espresso, steamed milk, and premium chocolate syrup, topped with a creamy finish. The Cafe Mocha is the perfect balance of coffee and cocoa.",
        hotPrice: "₱115",
        coldPrice: "₱125",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/Cofe mocha.png"
    },

     // Non-Coffee items
     noncoffee0: {
        name: "Matcha Latte",
        description: "Experience the earthy richness of Matcha Latte, made with high-quality green tea and creamy milk for a smooth and slightly sweet taste. Enjoy it hot for a cozy sip or cold for a refreshing boost of energy.",
        hotPrice: "₱95",
        coldPrice: "₱125",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/matcha.png"
    },
    noncoffee1: {
        name: "Strawberry Latte",
        description: "Indulge in the fruity delight of our Strawberry Latte, blending real strawberry flavors with creamy milk for a refreshing and slightly tangy treat. Served cold, it's the perfect drink to brighten your day.",
        coldPrice: "₱125",
        coldSize: "(16 oz)",
        image: "Menu/strawberry.png",
        hotAvailable: false
    },
    noncoffee2: {
        name: "Dark Choco Latte",
        description: "For chocolate lovers, our Dark Choco Latte delivers a rich and intense cocoa experience with the perfect balance of sweetness and creaminess. Enjoy it hot for a warm, comforting sip or cold for a smooth, chilled treat.",
        hotPrice: "₱95",
        coldPrice: "₱125",
        hotSize: "(12 oz)",
        coldSize: "(16 oz)",
        image: "Menu/dark choco.png"
    },
    noncoffee3: {
        name: "Menu/Strawberry-Matcha",
        description: "A unique fusion of two favorites, Strawberry-Matcha combines the earthy tones of matcha with the fruity sweetness of strawberries. This refreshing iced drink is a perfect balance of flavors, ideal for those looking for something bold and new.",
        coldPrice: "₱125",
        coldSize: "(16 oz)",
        image: "Menu/matcha strawberry.png",
        hotAvailable: false
    },
    noncoffee4: {
        name: "Choco-Berry",
        description: "Experience the best of both worlds with Choco-Berry, a delightful mix of rich chocolate and sweet berries, creating a creamy and indulgent drink. Served cold, it's a deliciously refreshing treat for any occasion.",
        coldPrice: "₱125",
        coldSize: "(16 oz)",
        image: "Menu/Choco berry.png",
        hotAvailable: false
    },

    // Soda Drinks items
    soda0: {
        name: "Rose-Berry",
        description: "A floral and fruity delight, the Rose-Berry Soda combines the delicate essence of rose with the sweet and tangy taste of mixed berries, creating a refreshing and lightly sparkling beverage.",
        coldPrice: "₱85",
        coldSize: "(16 oz)",
        image: "Menu/rose berry.png",
        hotAvailable: false
    },
    soda1: {
        name: "Peach Citrus",
        description: "Enjoy the perfect blend of juicy peach and zesty citrus flavors in this Peach Citrus Soda, a bright and refreshing drink with just the right amount of fizz to awaken your senses.",
        coldPrice: "₱85",
        coldSize: "(16 oz)",
        image: "Menu/peach citrus.png",
        hotAvailable: false
    },
    soda2: {
        name: "Passion Bloom",
        description: "A tropical escape in a glass, Passion Bloom Soda brings together the exotic flavors of passion fruit with floral notes, making it a unique and vibrant refreshment.",
        coldPrice: "₱85",
        coldSize: "(16 oz)",
        image: "Menu/passion bloom.png",
        hotAvailable: false
    },
    soda3: {
        name: "Hibiscus Lemon",
        description: "A bold and tangy fusion of hibiscus and lemon, this soda delivers a refreshing balance of floral and citrusy flavors, making it an invigorating drink with a slightly tart finish.",
        coldPrice: "₱85",
        coldSize: "(16 oz)",
        image: "Menu/hibiscus lemon.png",
        hotAvailable: false
    },
    soda4: {
        name: "Lemon Ginger Tea Soda",
        description: "A revitalizing and soothing blend, Lemon Ginger Tea Soda combines the citrusy kick of lemon with the warm, spicy notes of ginger, creating a sparkling drink with a refreshing zing.",
        coldPrice: "₱85",
        coldSize: "(16 oz)",
        image: "Menu/lemon gigner tea.png",
        hotAvailable: false
    },
    soda5: {
        name: "Passion-Calamansi",
        description: "This tropical-inspired soda blends the sweet and tart taste of passion fruit with the sharp citrus burst of calamansi, making for a bright and tangy refreshment.",
        coldPrice: "₱85",
        coldSize: "(16 oz)",
        image: "Menu/passion calamansi.png",
        hotAvailable: false
    },
    soda6: {
        name: "Mixed Berry Soda",
        description: "A bubbly medley of strawberries, blueberries, and raspberries, Mixed Berry Soda is a fruity and refreshing drink, bursting with natural sweetness and vibrant flavors.",
        coldPrice: "₱85",
        coldSize: "(16 oz)",
        image: "Menu/mixed berries.png",
        hotAvailable: false
    },

     // Pizza items
     pizza0: {
        name: "Ham and Cheese",
        description: "A timeless classic! Sliced ham layered with gooey, melted cheese on a crispy crust.",
        sizes: {
            "10-inch": "₱299",
            "12-inch": "₱335"
        },
        image: "Menu/ham and cheese.png"
    },
    pizza1: {
        name: "Pepperoni",
        description: "A must-try for meat lovers! Generously topped with pepperoni slices and rich mozzarella cheese.",
        sizes: {
            "10-inch": "₱299",
            "12-inch": "₱335"
        },
        image: "Menu/pepperoni.png"
    },
    pizza2: {
        name: "Hawaiian",
        description: "The perfect blend of sweet and savory! Juicy pineapple chunks and ham over a bed of melted cheese.",
        sizes: {
            "10-inch": "₱299",
            "12-inch": "₱335"
        },
        image: "Menu/hawaiian.png"
    },
    pizza3: {
        name: "Cheesy Bacon",
        description: "Crispy bacon bits smothered in layers of creamy cheese—every bite is indulgent!",
        sizes: {
            "10-inch": "₱335",
            "12-inch": "₱385"
        },
        image: "Menu/cheesy bacon.png"
    },
    pizza4: {
        name: "All Cheese",
        description: "A cheese lover's dream! A rich combination of mozzarella, cheddar, and parmesan for that extra cheesy goodness.",
        sizes: {
            "10-inch": "₱335",
            "12-inch": "₱385"
        },
        image: "Menu/all cheese.png"
    },
    pizza5: {
        name: "Beef Aloha",
        description: "A beefy take on Hawaiian pizza! Juicy beef chunks paired with sweet pineapple and melted cheese.",
        sizes: {
            "10-inch": "₱345",
            "12-inch": "₱395"
        },
        image: "Menu/beefy aloha.png"
    },
    pizza6: {
        name: "Beefy Mushroom",
        description: "A delicious combination of beef, mushrooms, olives, onions, and bell peppers, all topped with melted cheese.",
        sizes: {
            "10-inch": "₱350",
            "12-inch": "₱405"
        },
        image: "Menu/beefy mushroom.png"
    },
    pizza7: {
        name: "Cheese Aloha",
        description: "If you love cheese and pineapple, this one’s for you! A tropical twist with an extra cheesy kick.",
        sizes: {
            "10-inch": "₱360",
            "12-inch": "₱415"
        },
        image: "Menu/cheesy aloha.png"
    },
    pizza8: {
        name: "Supreme",
        description: "A loaded pizza with beef, pepperoni, bell peppers, onions, mushrooms, and black olives, topped with gooey cheese.",
        sizes: {
            "10-inch": "₱370",
            "12-inch": "₱425"
        },
        image: "Menu/supreme.png"
    },
    pizza9: {
        name: "Farmhouse",
        description: "Fresh and flavorful! A mix of tomato, mushrooms, bell peppers, onions, olives, and parmesan cheese.",
        sizes: {
            "10-inch": "₱365",
            "12-inch": "₱410"
        },
        image: "Menu/farmhouse.png"
    },
    pizza10: {
        name: "Kaskada Pizza",
        description: "The meatiest pizza on the menu! Beef, sausage, ham, pepperoni, bacon, mushrooms, pineapple, onions, bell peppers, olives, and cheese—all in one pizza!",
        sizes: {
            "10-inch": "₱385",
            "12-inch": "₱420"
        },
        image: "Menu/kaskada pizza.png"
    },
    pizza11: {
        name: "Creamy Spinach",
        description: "A creamy and savory delight! White sauce blended with spinach and layers of cheese for a luxurious taste.",
        sizes: {
            "10-inch": "₱385",
            "12-inch": "₱435"
        },
        image: "Menu/creamy spinach.png"
    },

    // Pastry items
    pastry0: {
        name: "Milky Cheese Roll",
        description: "Soft, fluffy bread filled with a rich, creamy cheese filling, balancing sweetness and savoriness.",
        unitPrice: 35,
        image: "milky cheese roll.png"
    },
    pastry1: {
        name: "Ube Ensaymada",
        description: "A sweet and buttery twist on classic ensaymada, topped with creamy ube, grated cheese, and sugar.",
        unitPrice: 45,
        image: "ube ensaymada.png"
    },
    pastry2: {
        name: "Classic Ensaymada",
        description: "Soft, fluffy, and buttery, topped with generous cheese and sugar, a timeless favorite.",
        unitPrice: 35,
        image: "classic ensaymada.png"
    },
    pastry3: {
        name: "Cinnamon Bun",
        description: "Swirled with rich cinnamon and topped with a sweet glaze for a warm, comforting flavor.",
        unitPrice: 50,
        image: "cinnamon bun.png"
    },
    pastry4: {
        name: "Ham and Cheese Bun",
        description: "A combination of savory ham and melted cheese wrapped in soft, fluffy bread, great for a quick bite.",
        unitPrice: 35,
        image: "ham n cheese.png"
    },
    pastry5: {
        name: "Chicken Floss Bun",
        description: "Enjoy the savory delight of our Chicken Floss Bun, with soft bread topped with flavorful, slightly sweet, and savory shredded chicken floss for an irresistible bite.",
        unitPrice: 35,
        image: "chicken floss bun.png"
    },
    pastry6: {
        name: "Chicken Floss Roll",
        description: "A delicious twist on our Chicken Floss Bun, featuring the same soft, fluffy bread but in a rolled form, packed with even more savory chicken floss goodness in every bite.",
        unitPrice: 45,
        image: "chicken floss roll.png"
    },

};

// Function to add item to cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function toggleCartSidebar() {
    document.getElementById('cart-sidebar').classList.toggle('active');
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.querySelector('.cart-items-list');
    const cartTotal = document.querySelector('.cart-total');
    let total = 0;
    
    cartItemsList.innerHTML = '';
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-details">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    ${item.options ? `<div class="cart-item-size">${item.options}</div>` : ''}
                    <div class="cart-item-price">₱${item.price} x ${item.quantity}</div>
                </div>
            </div>
            <div class="cart-item-remove">
                <button onclick="removeCartItem(${index})">Remove</button>
            </div>
        `;
        cartItemsList.appendChild(cartItem);
    });
    
    cartTotal.textContent = `Total: ₱${total}`;
    document.querySelector('.cart-indicator').textContent = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeCartItem(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function proceedToCheckout() {
    window.location.href = 'Checkout.html';
}

// Modified addToCart function
function addToCart() {
    const modal = document.getElementById('menuModal');
    const item = menuItems[modal.dataset.itemId];
    const options = [];
    
    if (modal.dataset.size) {
        options.push(`${modal.dataset.size} ${modal.dataset.sizeValue || ''}`.trim());
    }
    
    let price = 0;
    if (modal.dataset.itemType === 'pastry') {
        const quantity = parseInt(document.getElementById('quantity').value);
        price = item.unitPrice;
    } else if (modal.dataset.price) {
        price = parseInt(modal.dataset.price.replace('₱', ''));
    }
    
    const cartItem = {
        id: modal.dataset.itemId,
        name: item.name,
        price: price,
        image: item.image,
        quantity: modal.dataset.itemType === 'pastry' ? 
            parseInt(document.getElementById('quantity').value) : 1,
        options: options.join(', ')
    };
    
    const existingItem = cart.find(i => i.id === cartItem.id && i.options === cartItem.options);
    if (existingItem) {
        existingItem.quantity += cartItem.quantity;
    } else {
        cart.push(cartItem);
    }
    
    updateCartDisplay();
    closeModal();
}
// Function to open modal
function openModal(itemId) {
    const modal = document.getElementById("menuModal");
    const item = menuItems[itemId];

    // Reset modal data attributes
    modal.dataset.itemType = "";
    modal.dataset.size = "";
    modal.dataset.price = "";
    modal.dataset.sizeValue = "";
    modal.dataset.itemId = itemId; // Store the item ID

    // Set item type based on the itemId prefix
    if (itemId.startsWith("coffee") || itemId.startsWith("noncoffee")) {
        modal.dataset.itemType = "drink";
    } else if (itemId.startsWith("pizza")) {
        modal.dataset.itemType = "pizza";
    } else if (itemId.startsWith("pastry")) {
        modal.dataset.itemType = "pastry";
    } else if (itemId.startsWith("soda")) {
        modal.dataset.itemType = "soda";
    }
    

    document.getElementById("modalTitle").textContent = item.name;
    document.getElementById("modalDescription").textContent = item.description;
    document.getElementById("modalImage").src = item.image;

    const priceOptions = document.getElementById("priceOptions");
    priceOptions.innerHTML = ""; // Clear previous options
    
    // Show or hide the "Select Option" text based on item type
    const selectOptionText = document.querySelector(".menu-item-price p");

    if (item.hotPrice || item.coldPrice) {
        // For drinks with hot/cold options
        selectOptionText.style.display = "block";
        
        if (item.hotPrice) {
            priceOptions.innerHTML += `
                <div class='price-option' onclick='selectSize("Hot", "${item.hotPrice}", "${item.hotSize}")'>
                    <div class='option-name'>Hot ${item.hotSize}</div>
                    <div class='option-price'>${item.hotPrice}</div>
                </div>
            `;
        }
        if (item.coldPrice) {
            priceOptions.innerHTML += `
                <div class='price-option' onclick='selectSize("Cold", "${item.coldPrice}", "${item.coldSize}")'>
                    <div class='option-name'>Cold ${item.coldSize}</div>
                    <div class='option-price'>${item.coldPrice}</div>
                </div>
            `;
        }
    } else if (item.sizes) {
        // For pizza with size options
        selectOptionText.style.display = "block";
        
        Object.entries(item.sizes).forEach(([size, price]) => {
            priceOptions.innerHTML += `
                <div class='price-option' onclick='selectSize("${size}", "${price}")'>
                    <div class='option-name'>${size}</div>
                    <div class='option-price'>${price}</div>
                </div>
            `;
        });
    } else if (item.unitPrice) {
        // For pastries with single price
        selectOptionText.style.display = "none";
        
        priceOptions.innerHTML = `
            <div class='price-quantity-row'>
                <div class='price-section'>
                    <div class='for-only-label'>For only:</div>
                    <div class='unit-price'>₱${item.unitPrice}</div>
                </div>
                <div class='quantity-section'>
                    <div class='quantity-label'>Quantity:</div>
                    <div class='quantity-control'>
                        <button class='quantity-btn' onclick='decrementQuantity()'>-</button>
                        <input type='number' id='quantity' value='1' min='1' onchange='validateQuantity()'>
                        <button class='quantity-btn' onclick='incrementQuantity()'>+</button>
                    </div>
                </div>
            </div>
        `;
    }

    modal.style.display = "block";
}

// Function to close modal
function closeModal() {
    document.getElementById("menuModal").style.display = "none";
}

// Function to select size for drinks and pizzas
function selectSize(size, price, sizeValue = "") {
    const modal = document.getElementById("menuModal");
    modal.dataset.size = size;
    modal.dataset.price = price;
    modal.dataset.sizeValue = sizeValue;
    
    // Update UI to show selection
    const options = document.querySelectorAll('.price-option');
    options.forEach(option => {
        option.classList.remove('selected');
    });
    
    event.currentTarget.classList.add('selected');
}

// Functions for quantity control
function incrementQuantity() {
    const quantityInput = document.getElementById("quantity");
    quantityInput.value = parseInt(quantityInput.value) + 1;
    validateQuantity();
}

function decrementQuantity() {
    const quantityInput = document.getElementById("quantity");
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
    validateQuantity();
}

function validateQuantity() {
    const quantityInput = document.getElementById("quantity");
    let value = parseInt(quantityInput.value);
    if (isNaN(value) || value < 1) {
        quantityInput.value = 1;
    }
}

// Function to filter menu items by category
function filterMenu(category) {
    // Get all menu sections
    const sections = document.querySelectorAll('.col-lg-9 > div');
    
    // If category is 'all' or not specified, show all sections
    if (!category || category === 'all') {
        sections.forEach(section => {
            section.style.display = 'block';
        });
        return;
    }
    
    // Hide all sections first
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show only the selected category
    const selectedSection = document.getElementById(category);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Function to handle sidebar link clicks
function setupSidebarLinks() {
    const sidebarLinks = document.querySelectorAll('.list-group-item');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove 'active' class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Add 'active' class to clicked link
            this.classList.add('active');
            
            // Get category from href attribute (remove the # symbol)
            const category = this.getAttribute('href').substring(1);
            
            // Filter menu by category
            filterMenu(category);
        });
    });
    
    // Add "View All" link to the top of sidebar
    const listGroup = document.querySelector('.list-group');
    const viewAllLink = document.createElement('a');
    viewAllLink.href = '#';
    viewAllLink.className = 'list-group-item list-group-item-action active';
    viewAllLink.textContent = 'Our Menu';
    viewAllLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove 'active' class from all links
        sidebarLinks.forEach(l => l.classList.remove('active'));
        
        // Add 'active' class to this link
        this.classList.add('active');
        
        // Show all menu items
        filterMenu('all');
    });
    
    // Insert as first child
    listGroup.insertBefore(viewAllLink, listGroup.firstChild);
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupSidebarLinks();
    filterMenu('all');
    updateCartDisplay(); // Initialize cart display
});

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

