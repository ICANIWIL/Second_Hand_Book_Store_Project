
  

const images = [
  "https://images.pexels.com/photos/1098601/pexels-photo-1098601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/220326/pexels-photo-220326.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/10957572/pexels-photo-10957572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/23996616/pexels-photo-23996616/free-photo-of-woman-in-a-bookstore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
];

let currentIndex = 0;
const homeImage = document.getElementById('homeImage');

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
  homeImage.src = images[currentIndex]; // Change the image source
}

setInterval(changeImage, 2000);



import { getBooks, loginUser, createOrder } from './api.js';

async function loadBooks() {
  try {
    const books = await getBooks('fiction');
    console.log('Books:', books);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
}

async function login() {
  try {
    const user = await loginUser({ email: 'test@example.com', password: '123456' });
    console.log('Logged in user:', user);
  } catch (error) {
    console.error('Error logging in:', error);
  }
}

loadBooks();
login();

