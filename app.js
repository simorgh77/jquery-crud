let studends = [];
function Student(name, lastName, email, idnumber) {
  this.name = name;
  this.lastName = lastName;
  this.email = email;
  this.idnumber = idnumber;
  return this;
}
function addStudent(name, lastName, email, phone) {
  const student = new Student(name, lastName, email, phone);
  studends.push(student);
//   render();
//   document.querySelector('#form').reset()
  
}
function editStudent(index, name, lastName, email, phone) {
  const student = new Student(name, lastName, email, phone);
  studends = studends.map((item, i) => (i === index ? student : item));
  render();
}
function removeStudent(index) {
  studends = studends.filter((item, i) => i !== index);
  render();
}

$("#form").submit(function (e) { 
    e.preventDefault();
    const name=$("#firstname").val();
    const lastname=$("#lastname").val();
    const email=$("#email").val();
    const idnumber=$("#idnumber").val();

    e.preventDefault();
    const student= addStudent(name,lastname,email,idnumber)
    render()
});

    function render() {
        $("#table").html('')
        studends.map((item,index)=>{
     $("#table").append(`<tr id="row${index}"> <td> ${item.name} </td> <td> ${item.lastName} </td>
     <td> ${item.email} </td> 
    <td> ${item.idnumber} </td>
    <td><button class="btn btn-info" onclick="preedit(${index})">Edit</button>
    <button class="btn btn-danger" onclick="removeStudent(${index})">Remove</button></td> </tr>`  );
  
    })
}

function preedit(index){
    
    studends.filter((item,i)=>{
        if(i==index){

            $(`#row${index}`).html(`<td><input type="text" id="myname${index}" value="${item.name}"></td> 
            <td > <input type="text" id="mylastname${index}" value="${item.lastName}"></td>   
             <td ><input type="text" id="myemail${index}" value="${item.email}"> </td>
             <td> <input type="text" id="idnumber${index}" value="${item.idnumber}"> </td>
              <td> <td class='buttons'><button onclick=save(${index}) class="btn btn-success save">SAVE
             </button></td>`);

        }
    })
}

function save(index){
    const myname=$(`#myname${index}`).val();
    const mylastname=$(`#mylastname${index}`).val();
    const myemail=$(`#myemail${index}`).val();
    const idnumber=$(`#idnumber${index}`).val();


    editStudent(index,myname,mylastname,myemail,idnumber)

}


    
