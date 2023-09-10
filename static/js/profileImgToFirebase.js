import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAY0DWLKM7e0M4bjdF58i4gfiG3c8IhTCA",
    authDomain: "projectdiseasepredictor.firebaseapp.com",
    databaseURL: "https://projectdiseasepredictor-default-rtdb.firebaseio.com",
    projectId: "projectdiseasepredictor",
    storageBucket: "projectdiseasepredictor.appspot.com",
    messagingSenderId: "947196362135",
    appId: "1:947196362135:web:0b373104638bf8ec0118d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Importing storage
import {
    getStorage,
    ref as sRef,
    uploadBytesResumable,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// Imporing Realtime database
import {
    getDatabase,
    ref,
    set,
    child,
    get,
    update,
    remove,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

var files = [];
var reader = new FileReader();

var namebox = document.getElementById("namebox");
var myimg = document.getElementById("myimg");
var upprogress = document.getElementById("upprogress");
var imgbtn = document.getElementById("imgbtn");

imgbtn.onchange = (e) => {
    files = e.target.files;

    var extention = getFileExt(files[0]);
    var name = getFileName(files[0]);

    namebox.value = name;

    reader.readAsDataURL(files[0]);
    uploadProcess();
};

reader.onload = function () {
    document.getElementById("myimg").src = reader.result;
};

function getFileExt(file) {
    var temp = file.name.split(".");
    var ext = temp.slice(temp.length - 1, temp.length);
    return "." + ext[0];
}

function getFileName(file) {
    var temp = file.name.split(".");
    var fname = temp.slice(0, -1).join(".");
    return fname;
}

// Uploading Image in Storage of Firebase
async function uploadProcess() {
    var imgToUpload = files[0];
    var imgName = namebox.value + getFileExt(imgToUpload);

    const metaData = {
        contentType: imgToUpload.type,
    };

    const storage = getStorage();
    const storageRef = sRef(storage, "Image/" + imgName);
    const uploadTask = uploadBytesResumable(storageRef, imgToUpload, metaData);

    uploadTask.on(
        "state-changed",
        (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            upprogress.innerHTML = "Upload " + progress + "%";
        },
        (error) => {
            alert("Image not uploaded");
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL);
                saveURLToDB(downloadURL);
            });
        }
    );
}

// Uploading in Realtime Database of Firebase
const realdb = getDatabase();

function saveURLToDB(URL) {
    var userId = firebase.auth().currentUser.uid;

    set(ref(realdb, "ImagesLinks/" + userId), {
        imageName: namebox.value,
        imageURL: URL,
    });
}