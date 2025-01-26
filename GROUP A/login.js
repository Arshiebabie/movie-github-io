import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbkv6wpDyDJdyU8tlTZag-5QilIm824fc",
    authDomain: "movie-rec-70e02.firebaseapp.com",
    projectId: "movie-rec-70e02",
    storageBucket: "movie-rec-70e02.appspot.com",
    messagingSenderId: "461579117158",
    appId: "1:461579117158:web:cf0ee87ee91a3fce7c43a7",
    measurementId: "G-W3LW11LH2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Email and Password Login
const submitSignIn = document.getElementById("submitSignIn");
submitSignIn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // Sign in using email and password
        await signInWithEmailAndPassword(auth, email, password);
        alert("Successfully signed in!");
        window.location.href = "flickway.html"; // Redirect to the main page
    } catch (error) {
        console.error("Error signing in with email and password:", error.message);
        alert(`Error: ${error.message}`);
    }
});
