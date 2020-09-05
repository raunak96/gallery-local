import * as firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: "image-gallery-fbcc3.firebaseapp.com",
	databaseURL: "https://image-gallery-fbcc3.firebaseio.com",
	projectId: "image-gallery-fbcc3",
	storageBucket: "image-gallery-fbcc3.appspot.com",
	messagingSenderId: "560360239069",
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage= firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFireStore,projectStorage,timestamp};
