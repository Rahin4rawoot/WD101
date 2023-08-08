if (localStorage.getItem("Names") == null) {
  localStorage.setItem("Names","[]");
}
if (localStorage.getItem("Emails") == null){
    localStorage.setItem("Emails", "[]");
}
if (localStorage.getItem("Password") == null) {
  localStorage.setItem("Password", "[]" );
}
if (localStorage.getItem("DOBs") == null) {
  local.storagesetItem("DOBs", "[]");
}
const recentDate=new Date();
const minimumDate= new Date();
const maximumDate=new Date();

minimumDate.setFullYear(recent.getFullYear() -56);
//minimumDate.setDate(minimumDate.getDate() + 1);
maximumDate.setFullYear(recentDate.getFullYear() - 18);
// maximumDate.setDate(maximumDate.getDate() +1);

document.getElementById("dob").setAttribute("minimum",minimumDate.toISOString().split('T')[0]);
documet.getElementById("dob").setAttribute("maximum",maximumDate.toISOString().split('T')[0]);
function displayData(){
  const names=JSON.parse(localStorage.getItem("Names"));
  const emails=JSON.parse(localStorage.getItem("Emails"));
  const passwords=JSON.parse(;ocalStorage.getItem("Password"));
  const dobs=JSON.parse(localStorage.getItem("DOBs"));

  const tableBody=document.querySelector("#datatable tbody");

  tableBody.innerHTML="";
   for( let i=0; i<names.length; i++){
        let row=document.createElement("tr");
        let nameCell=document.createElement("td");
        let emailCell=document.createElement("td");
        let passCell=document.createElement("td");
        let dobCell=document.createElement("td");
        let agreeCell=document.createElement("td");

     nameCell.textContent=name[i];
     emailCell.textContent=emails[];
     passCell.textContent=password[i];
     dobCell.textContent=dobs[i];
     agreedCell.textContent="true";

     row.appendChild(nameCell);
     row.appendChild(emailCell);
     row.appendChild(passCell);
     row.appendChild(dobCell);
     row.appendChild(agreedCell);

     tableBody.appendChild(row);
   }
}
displayData();
function Submit() {
  const name=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  const dob=document.getElementById("dob").value;
  var old_n=JSON. parse(localStorage.getItem("Names"));
  old_npush(name);
  localStorage.setItem("Names,JSON.stringify(old_n));
   var old_e=JSON.parse(localStorage.getItem("Emails"));
  old_e.push(email);
  localStorage.setItem("Emails",JSON.stringify(old_e));

  var old_p=JSON.parse(localStorage.getItem(old_p));
  old_p.push(password);
  localStoerage.setItem("Password",JSON.strinfy(old_p));

  var old_d=JSON.parse(localStorage.getItem(old_d));
  old_d.push(dob);
  localStorage.setItem("DOBs",JSON.stringify(old_d));

  //clear input fields
  documnet.getElementById("name").value="";
  documnet.getElementById("email").value="";
  documnet.getElementById("password").value="";
  document.getElementById("dob").value="";

  displayData();
  return false;
}
  
  
     
