// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//var on = "/images/pic_bulbon.gif";
//var off = "/images/pic_bulboff.gif";


//function myFunction() {
//    document.getElementById("demo").innerHTML = "Paragraph changed.";
//}

//function backFunction() {
//    document.getElementById("demo").innerHTML = "A Paragraph.";
//}

//document.getElementById('indexTime').innerHTML = Date();










































console.clear();

// event - onload(), onerror()
// property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()


const makeRequest = (method, url, data) => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            let data = xhr.response;
            console.log(JSON.parse(data))
        }

        xhr.onerror = () => {
            console.log('error is here');
        }

        xhr.send(JSON.stringify(data));
    });
}


// const getData = () => {
// makeRequest('GET', 'https://img-api.azurewebsites.net/api/Person')
// .then((res) => console.log(res))
// }
// getData();



const getData = () => {
    makeRequest('GET', 'https://img-api.azurewebsites.net/api/Man')
        .then((res) => console.log(res))
}
getData();


// const sendData = () => {
    // makeRequest('POST', 'https://img-api.azurewebsites.net/api/Man', {
        // Name: 'Bossco Khan',
        // Age: 29,
        // City: 'Tangail',
        // Country: 'Bangladesh',
    // });
// }
// sendData();


 // const updateData = () => {
     // makeRequest('PATCH', 'https://img-api.azurewebsites.net/api/Man/3', {
         // Name: 'Rukan Khan Again',
         // Age: 29,
         // City: 'Tangail',
         // Country: 'Bangladesh',
     // });
// }
// updateData();

// const updateSingleData = () => {
    // makeRequest('PATCH', 'https://img-api.azurewebsites.net/api/Man/3', {

        // Name: 'This is changed',

    // });
// }
// updateSingleData();



// const deleteData = () => {
    // makeRequest('DELETE', 'https://img-api.azurewebsites.net/api/Man/3');
// }
// deleteData();















// const getData = () => {

	// const xhr = new XMLHttpRequest();
	// xhr.open('GET', 'https://img-api.azurewebsites.net/api/Man');
	// xhr.onload = () => {
		// let data = xhr.response;
		// console.log(data);
	// }
	// xhr.send();

// }

// getData();