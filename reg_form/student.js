// converting form data to json string

var form = document.getElementById('stud_form')  
form.addEventListener('submit', (e) => {  
  e.preventDefault()  
  const formData = new FormData(e.target)  
  const json = JSON.stringify(Object.fromEntries(formData));  
  console.log(json)  


  //  sending post request to the server

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://1o24sestji.execute-api.ap-south-1.amazonaws.com/test/student/add" );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(json);
  

 


})