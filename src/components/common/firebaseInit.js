import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-TO1I6_c813xuXbnrqf8LNOl3tyAiKMg",
    authDomain: "firstfire-1348f.firebaseapp.com",
    projectId: "firstfire-1348f",
    storageBucket: "firstfire-1348f.appspot.com",
    messagingSenderId: "957025253356",
    appId: "1:957025253356:web:33c06cfeb5c66421bcf2c9"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

export default storage;