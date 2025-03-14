document.addEventListener('DOMContentLoaded', function () {
    // stars rating
    const stars = document.querySelectorAll('.star-rating .star');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const value = parseInt(this.getAttribute('data-value'));
            ratingInput.value = value;

            stars.forEach((s, index) => {
                if (index < value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });

    // input image
    const fileInput = document.getElementById('photo');
    const fileNameDisplay = document.querySelector('.custom-file-input .file-name');

    fileInput.addEventListener('change', function () {
        if (fileInput.files.length > 0) {
            fileNameDisplay.textContent = fileInput.files[0].name;
        } else {
            fileNameDisplay.textContent = 'No file chosen';
        }
    });

    // Load reviews from Local Storage when the page loads
    loadReviews();

    // review form
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;
        const photo = fileInput.files[0];

        if (rating < 1) {
            alert('Please select at least 1 star to submit your review.');
            return;
        }

        const date = new Date().toLocaleDateString();

        // post a review
        const reviewObject = {
            id: Date.now(), // Unique ID for each review
            name: name,
            rating: rating,
            review: review,
            date: date,
            photo: photo ? URL.createObjectURL(photo) : null // Convert photo to a URL
        };

        // Save the review to Local Storage
        saveReview(reviewObject);

        // Display the review on the page
        displayReview(reviewObject);

        // clear form
        reviewForm.reset();
        stars.forEach(star => star.classList.remove('active'));
        ratingInput.value = 0;
        fileNameDisplay.textContent = 'No file chosen';
    });

    // save review
    function saveReview(review) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || []; // Get existing reviews
        reviews.push(review); // Add the new review
        localStorage.setItem('reviews', JSON.stringify(reviews)); // Save back to Local Storage
    }

    // load review
    function loadReviews() {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || []; // Get existing reviews
        reviews.forEach(review => displayReview(review)); // Display each review
    }

    // display review
    function displayReview(review) {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.setAttribute('data-id', review.id); // Add a unique ID to the review element

        reviewElement.innerHTML = `
            <div class="review-header">
                <h3>${review.name}</h3>
                <div class="date">${review.date}</div>
                <button class="btn delete-btn">
                    <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
                        <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                    </svg>
                </button>
            </div>
            <div class="rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <p>${review.review}</p>
        `;

        if (review.photo) {
            const img = document.createElement('img');
            img.src = review.photo;
            reviewElement.appendChild(img);
        }

        // listener delete button
        const deleteBtn = reviewElement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
            deleteReview(review.id); // Delete the review by its ID
            reviewElement.remove(); // Remove the review from the DOM
        });

        document.getElementById('reviewsContainer').appendChild(reviewElement);
    }

    // Function to delete a review from Local Storage
    function deleteReview(reviewId) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || []; // Get existing reviews
        reviews = reviews.filter(review => review.id !== reviewId); // Filter out the deleted review
        localStorage.setItem('reviews', JSON.stringify(reviews)); // Save back to Local Storage
    }
});