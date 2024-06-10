

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

/// self code////

// var nameList= document.getElementById("nameList")

// var urlList= document.getElementById("urlList")

// var bookmarkList = [];
// var visitList = [];

// if(localStorage.getItem("bookmarkList")!= null){

//     bookmarkList=JSON.parse(localStorage.getItem("bookmarkList"))
//     displaySite(bookmarkList)
// }




// function addSite(){


//     var userInput={
//         Name:nameList.value,
//         url: urlList.value,
//     }

//     bookmarkList.push(userInput)
//     localStorage.setItem("bookmarkList",JSON.stringify(bookmarkList))
//     clearData()
//     displaySite(bookmarkList)
// }



// function visitList(){


//     var userInput={
//         Name:nameList.value,
//         url: urlList.value,
//     }

//     bookmarkList.push(visitList)
//     localStorage.setItem("bookmarkList",JSON.stringify(visitList))
//     clearData()
    
// }



// function displaySite(list){

//     var cartona=``

//     for(var i=0 ; i<bookmarkList.length ;i++){


//         cartona+=`<tr >
//         <th scope="col">${[i+1]}</th>
//         <th scope="col">${list[i].Name}</th>
//         <th scope="col" onclick=" addSite${list[i].url} " > <button class="btn-info btn"><i class="fa-solid fa-eye pe-2"></i>Visit</button> </th>
        
//         <th scope="col" onclick="deleteSite(${i})" class="btn btn-danger  w-50 d-flex text-center justify-content-center p-1 mt-2">
//         <i class="fa-solid fa-trash-can p-1"></i> Delete
//       </th>
      
//       </tr>`

//     }

//     document.getElementById("data").innerHTML=cartona
// }


// function deleteSite(index){

//     bookmarkList.splice(index,1)
//     localStorage.setItem("bookmarkList",JSON.stringify(bookmarkList))
//     displaySite(bookmarkList)

// }

// function clearData(){
//     nameList.value=null
//     urlList.value=null  
// }




// function validateUrl() {
//     var regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/
//     var urlValue = urlList.value;
//     if (regex.test(urlValue)) {
//         console.log("match")
//         urlList.classList.remove("is-invalid");
//     urlList.classList.add("is-valid");
//     } else {
//         console.log("not match")
//         urlList.classList.remove("is-valid");
//         urlList.classList.add("is-invalid");
//     }
// }

// function validateName() {
//     var regex = /^\w{3,}(\s+\w+)*$/;
//     var nameValue = nameList.value;
//     if (regex.test(nameValue)) {
//         console.log("match")
//         nameList.classList.remove("is-invalid");
//     nameList.classList.add("is-valid");
//     } else {
//         console.log("not match")
//         nameList.classList.remove("is-valid");
//         nameList.classList.add("is-invalid");
//     }
// }

/////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>///



//// usingchatgpt for the visit function only /////




var nameList = document.getElementById("nameList");
var urlList = document.getElementById("urlList");
var bookmarkList = [];

if (localStorage.getItem("bookmarkList") !== null) {
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
    displaySite(bookmarkList);
}

function addSite() {
    var userInput = {
        Name: nameList.value,
        url: urlList.value,
    };

    bookmarkList.push(userInput);
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
    clearData();
    displaySite(bookmarkList);
}

function visitSite(url) {
    window.open(url);
}

function displaySite(list) {
    var cartona = "";

    for (var i = 0; i < list.length; i++) {
        cartona += `<tr>
            <th scope="col">${i + 1}</th>
            <th scope="col">${list[i].Name}</th>
            <th scope="col">
                <button class="btn-dark btn " onclick="visitSite('${list[i].url}')">
                    <i class="fa-solid fa-eye pe-2"></i>Visit
                </button>
            </th>
            <th scope="col"
            <button button class=" btn-danger btn  " onclick="deleteSite(${i})">
            <i class="fa-solid fa-trash-can p-2"></i> Delete 
            </button>
             
            </th>
        </tr>`;
    }

    document.getElementById("data").innerHTML = cartona;
}

function deleteSite(index) {
    bookmarkList.splice(index, 1);
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
    displaySite(bookmarkList);
}

function clearData() {
    nameList.value = null;
    urlList.value = null;
}

function validateUrl() {
    var regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
    var urlValue = urlList.value;
    if (regex.test(urlValue)) {
        console.log("match");
        urlList.classList.remove("is-invalid");
        urlList.classList.add("is-valid");
    } else {
        console.log("not match");
        urlList.classList.remove("is-valid");
        urlList.classList.add("is-invalid");
    }
}

function validateName() {
    var regex = /^\w{3,}(\s+\w+)*$/;
    var nameValue = nameList.value;
    if (regex.test(nameValue)) {
        console.log("match");
        nameList.classList.remove("is-invalid");
        nameList.classList.add("is-valid");
    } else {
        console.log("not match");
        nameList.classList.remove("is-valid");
        nameList.classList.add("is-invalid");
        
    }
}
