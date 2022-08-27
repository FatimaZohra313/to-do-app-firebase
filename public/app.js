// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
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


var obj = {};
var inp = document.getElementById("inp");
var parent = document.getElementById("parent");

window.add = function(){
    obj ={
        text : inp.value,
        date : new Date().getHours() + ":" + new Date().getMinutes(),
    }
    console.log(obj);




    var refrence = ref(databs, "routine/")
    var newRefrence = push(refrence);
    obj.id = newRefrence.key;
    set(newRefrence,obj )
}


var objData;

function gettingData(){
    var refrence = ref(databs, "routine/")

    onValue(refrence,function(data){
        
        console.log(data.val())
        objData = Object.values(data.val())
        console.log(objData);
        renderList()
    })




}

gettingData();

function renderList(){
    var parent = document.getElementById("parent");
    parent.innerHTML = "";

    for (var i = 0 ; i < objData.length; i++){
        parent.innerHTML+=
        `<div class=" bg-secondary rounded text-center mt-3">
        <p class="fw-bold">${objData[i].text}</p>
        <span class="ms-3 fw-bold">${objData[i].date}</span>
        
     
        
        
        </div>`
    }
}
window.removeall = function(){
   set(ref(databs,"routine/"),{value:null})
   var parent = document.getElementById("parent")
   parent.innerHTML = "";
}

