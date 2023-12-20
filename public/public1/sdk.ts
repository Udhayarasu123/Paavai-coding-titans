<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCBTQlcwZktGJR6HXiWTfN3SJd0x12HOrw",
    authDomain: "automated-irrigation-sys-5416a.firebaseapp.com",
    projectId: "automated-irrigation-sys-5416a",
    storageBucket: "automated-irrigation-sys-5416a.appspot.com",
    messagingSenderId: "862897317315",
    appId: "1:862897317315:web:bc7698c5fd1e91f66d8976",
    measurementId: "G-Z791YFX2RL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>