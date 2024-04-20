//      // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyBzrJLQasUlsldMrz_yWCxj0rEctYXFXtk",
//     authDomain: "hshacksdb.firebaseapp.com",
//     databaseURL: "https://hshacksdb-default-rtdb.firebaseio.com",
//     projectId: "hshacksdb",
//     storageBucket: "hshacksdb.appspot.com",
//     messagingSenderId: "982420069087",
//     appId: "1:982420069087:web:8ccf40c0e3fe2b1fe3276a",
//     measurementId: "G-MTLH0BV1MG"
//     };

//     // Initialize Firebase

//     const app = initializeApp(firebaseConfig);
//     const database = getDataBase(app)
//     // const db = firebase.firestore();


// db.collection("Job").get().then((snapshot)=>{
//     snapshot.docs.array.forEach(doc => {
//         console.log(doc.data())
//     });
// })

class Job{
    constructor(name,price,contact){
        this.name = name;
        this.price = price;
        this.contact = contact;
    }
}

jobs = [];

function addJob(name, price, contact){
    price = parseInt(price);
    let x = new Job(name, price, contact)
    jobs += x;
}

function getJob(name){
    for (let i in jobs){
        if (name === jobs.name){
            return i;
        }
    }
}

function addj() {
    price = document.getElementById("priceval").value;
    job = document.getElementById("taskdesc").value;
    contact = document.getElementById("email").value;
    addJob(job, price, contact);

    console.log(price, job, contact)
}


function oninit(){
    for (let i =0; i++; i=10){
        addJob(Painter, int(math.random*10)+30, "abc@gmail.com")
    }
    
    for (let i =0; i++; i=10){
        addJob(Writer, int(math.random*10)+30, "abc@gmail.com")
    }
    
    for (let i =0; i++; i=10){
        addJob(Volunteer, int(math.random*10)+30, "abc@gmail.com")
    }
    
}