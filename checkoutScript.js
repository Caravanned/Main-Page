document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // AND THIS
    // const cartCount = parseInt(localStorage.getItem('cartCount'), 10) || 0; // Optional

    const checkoutItemsContainer = document.querySelector('.checkout-items');
    const totalAmountSpan = document.getElementById('checkout-total-amount');
    let totalPrice = 0;

    if (cartItems.length === 0) {
        checkoutItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalAmountSpan.textContent = '₱0.00';
        return;
    }

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('checkout-item');

        // Calculate item total (price * quantity).  Crucially, parse the price.
        const itemPrice = parseFloat(item.price.replace('₱', '')); // Remove currency symbol
        const itemTotal = itemPrice * item.quantity;
        totalPrice += itemTotal;

        itemElement.innerHTML = `
            <div class="checkout-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="checkout-item-details">
                <div class="checkout-item-title">${item.name}</div>
                <div class="checkout-item-size">Size: ${item.size}</div>
                <div class="checkout-item-price">Price: ₱${itemPrice.toFixed(2)}</div>
                <div class="checkout-item-quantity">Quantity: ${item.quantity}</div>
            </div>
        `;
        checkoutItemsContainer.appendChild(itemElement);
    });

    totalAmountSpan.textContent = `₱${totalPrice.toFixed(2)}`;
});

function completePurchase() {
     // 1. (Optional) Send order data to a server (using fetch or similar).
    //    This is where you'd interact with a backend API to process the order.
    // 2. Clear the cart data from localStorage.
    localStorage.removeItem('cartItems');
    localStorage.removeItem('cartCount');

    // 3. Display a thank you message or redirect to a confirmation page.
    alert('Thank you for your purchase!'); // Basic example
    window.location.href = 'MainPage.html'; // Redirect back to the main page
}