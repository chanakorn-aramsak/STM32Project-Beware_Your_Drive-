import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js'

import {
  getDatabase,
  ref,
  set,
  onValue,
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js'

// Place your firebase config here
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
    

    const app = initializeApp(firebaseConfig)
    const db = getDatabase(
    app,
    'https://esp8266-44a09-default-rtdb.asia-southeast1.firebasedatabase.app/'
    )
    console.log(app);
    console.log(db);

//-------------------------------------RealtimeUpdate------------------------------------

let count = 0;

//-------------------------------------StartWebsite------------------------------------

function updateDataNoi() {
  onValue(ref(db, 'number'), (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    let display = document.getElementById("data");
    let count_tag = document.getElementById("count_num");
    if (data < 0) {
        count++;
        count_tag.innerText = count;
        display.innerHTML = "DANGEROUS";
        display.setAttribute("color", "red");
    } else {
        display.innerHTML = "OK";
        display.setAttribute("color", "green");
    }
  })
}

updateDataNoi()