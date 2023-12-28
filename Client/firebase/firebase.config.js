import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
// thong tin cua du an firebase
const firebaseConfig = {
    apiKey: "AIzaSyAmgLQgR5nJkaFCKIgMMyy-9Qb_HBOb4Cs",
    authDomain: "upload-image-6a605.firebaseapp.com",
    projectId: "upload-image-6a605",
    storageBucket: "upload-image-6a605.appspot.com",
    messagingSenderId: "287702687221",
    appId: "1:287702687221:web:4d6ab46f0033f8d7f8d4bc"
  };
  // tao bien toan cuc cho phep su dung firebase
const app = initializeApp(firebaseConfig);
// tao kho luu tru chung
const storage = getStorage(app);
async function uploadFile(file)
{
    const fileObj = file.files[0];
    let fileUrl = "";
    if(fileObj)
    {
        const storageRef = ref(storage, `uploads/${fileObj.name}`);
        // tien hanh xu li qua trinh upload
        try {
            // tien hanh upload anh
            const snapshort = await uploadBytes(storageRef, fileObj);
            // lay link hinh anh tu firebase
            const downloadURL = await getDownloadURL(snapshort.ref);
            // gan lai gia tri cua link hinh anh vao bien fileUrl
            fileUrl = downloadURL;
        } catch (error) {
            console.log("da co loi xay ra");
        }
    }
    else
    {
        console.log("khong duoc de trong hinh anh");
    }
    return fileUrl;
}
export default uploadFile;