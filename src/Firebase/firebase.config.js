console.log(process.env);
const firebaseConfig = {
        // apiKey: "AIzaSyBPiI6fxaII67Qqupf_OO_fKnMm2WrLr4c",
        // authDomain: "ema-jhon-2.firebaseapp.com",
        // projectId: "ema-jhon-2",
        // storageBucket: "ema-jhon-2.appspot.com",
        // messagingSenderId: "659027862726",
        // appId: "1:659027862726:web:267e91b5d1181bb01163c7"
    
    
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,

    
};

export default firebaseConfig;