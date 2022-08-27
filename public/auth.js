// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC24QHdWpVA4_-0E5anec5h5lanrl2_YFk",
  authDomain: "to-do-app-firebase-aebeb.firebaseapp.com",
  projectId: "to-do-app-firebase-aebeb",
  storageBucket: "to-do-app-firebase-aebeb.appspot.com",
  messagingSenderId: "750062340872",
  appId: "1:750062340872:web:7f44d10af975bc5417babd",
  measurementId: "G-4P677WH2RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const databs = getDatabase();
const auth = getAuth();

window.logIn = function(){
    window.location.href = "signin.html"
}

window.signUp = function(){
    window.location.href = "signup.html"
}
window.signupNow = function(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var obj = {
        name : name.value,
        email : email.value,
        password : password.value,
    }
    // console.log(obj);

    createUserWithEmailAndPassword(auth, obj.email , obj.password)
    .then((userCredential) => {
      // Signed in 
      window.location.href = "signin.html"
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });



}


window.signIn = function(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var obj = {
        // name : name.value,
        email : email.value,
        password : password.value,
    }

signInWithEmailAndPassword(auth, obj.email, obj.password)
  .then((userCredential) => {
    // Signed in 
    window.location.href = "index.html"
    const user = userCredential.user;

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });


}

window.signOut = function (){

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  window.location.href= "home.html"
}).catch((error) => {
  // An error happened.
});
}

