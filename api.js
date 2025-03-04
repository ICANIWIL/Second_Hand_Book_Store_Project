const BASE_URL = 'https://api.yoursecondhandbookstore.com'; // Replace with your backend URL

// Utility function for making API requests
async function apiFetch(endpoint, method = 'GET', body = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `HTTP error: ${response.status}`);
  }
  return await response.json();
}

// Book APIs
export async function getBooks(query = '') {
  return await apiFetch(`/books?q=${query}`); // Get all books or search by query
}

export async function getBookById(id) {
  return await apiFetch(`/books/${id}`); // Get a specific book by ID
}

export async function addBook(bookData) {
  return await apiFetch('/books', 'POST', bookData); // Add a new book
}

export async function updateBook(id, updatedData) {
  return await apiFetch(`/books/${id}`, 'PUT', updatedData); // Update book details
}

export async function deleteBook(id) {
  return await apiFetch(`/books/${id}`, 'DELETE'); // Delete a book
}

// User APIs
export async function loginUser(credentials) {
  return await apiFetch('/auth/login', 'POST', credentials); // Login user
}

export async function registerUser(userData) {
  return await apiFetch('/auth/register', 'POST', userData); // Register a new user
}

export async function getUserProfile() {
  return await apiFetch('/users/profile'); // Get logged-in user profile
}

// Order APIs
export async function createOrder(orderData) {
  return await apiFetch('/orders', 'POST', orderData); // Place an order
}

export async function getUserOrders() {
  return await apiFetch('/orders/my-orders'); // Get all orders for the logged-in user
}

export async function cancelOrder(orderId) {
  return await apiFetch(`/orders/${orderId}`, 'DELETE'); // Cancel an order
}

// Payment APIs
export async function createPayment(paymentData) {
  return await apiFetch('/payments', 'POST', paymentData); // Create a payment session
}

export async function getPaymentStatus(paymentId) {
  return await apiFetch(`/payments/${paymentId}`); // Get payment status
}

// Notification APIs
export async function getNotifications() {
  return await apiFetch('/notifications'); // Get user notifications
}

export async function markNotificationAsRead(notificationId) {
  return await apiFetch(`/notifications/${notificationId}`, 'PUT', { read: true }); // Mark notification as read
}
