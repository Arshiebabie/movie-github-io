import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCbkv6wpDyDJdyU8tlTZag-5QilIm824fc",
    authDomain: "movie-rec-70e02.firebaseapp.com",
    projectId: "movie-rec-70e02",
    storageBucket: "movie-rec-70e02.firebasestorage.app",
    messagingSenderId: "461579117158",
    appId: "1:461579117158:web:cf0ee87ee91a3fce7c43a7",
    measurementId: "G-W3LW11LH2R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign Up Functionality
const signUpButton = document.getElementById("submitSignUp");
signUpButton.addEventListener("click", (event) => {
    event.preventDefault();
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const email = document.getElementById("rEmail").value;
    const password = document.getElementById("rPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Store user data in Firestore
            setDoc(doc(db, "users", user.uid), {
                firstName,
                lastName,
                email
            })
                .then(() => {
                    window.location.href = "flickway.html"; // Redirect to dashboard
                })
                .catch((error) => console.error("Firestore Error:", error));
        })
        .catch((error) => {
            const messageDiv = document.getElementById("signUpMessage");
            messageDiv.textContent = "Sign-up failed. " + error.message;
            messageDiv.style.display = "block";
        });
});
