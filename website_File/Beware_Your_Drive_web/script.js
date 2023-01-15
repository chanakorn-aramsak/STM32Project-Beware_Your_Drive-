// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase, ref, onValue, update, get } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXfZKSKuIgU55yHTvQZb2NWvb-IUNHBcU",
    authDomain: "esp8266-44a09.firebaseapp.com",
    databaseURL: "https://esp8266-44a09-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "esp8266-44a09",
    storageBucket: "esp8266-44a09.appspot.com",
    messagingSenderId: "956044526738",
    appId: "1:956044526738:web:8a2e68481243734696524b",
    measurementId: "G-2QJ1QS5MYT"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//-------------------------------------RealtimeUpdate------------------------------------

const red = "#e94b3cff"
const green = "#00ab66";
let count = 0;

async function update(val) {
    let count_tag = document.getElementById("count_num");
    let raw = document.getElementById("raw-content");
    if (val < 0) {
        count++;
        count_tag.innerText = count;
        raw.setAttribute("style", `background-color: ${red};`);
    } else {
        raw.setAttribute("style", `background-color: ${green};`);
    }
}

//-------------------------------------StartWebsite------------------------------------

async function startWebsite() {
    var dataref = await ref(db);
    // updateval();
    await onValue(dataref, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        update(data.number);
    });
}

startWebsite();