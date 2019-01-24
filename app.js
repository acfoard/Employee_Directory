//Function to render Employee List
const renderList = function() {
    $('.empList').empty();
    for (let i=0; i<employeeList.length; i++){
        $('.empList').append(`<div class="card border border-secondary"><p class="card-body">${employeeList[i].name}<br>${employeeList[i].officeNum}<br>${employeeList[i].phoneNum}</p></div>`);
    }
};

//Function to show Employee List
const showView = function(event) {
    event.preventDefault();
    $('section').addClass('hidden');
    $('#viewPage').removeClass('hidden');
    renderList();
};

//Function to show Add Employee Page
const showAdd = function (event) {
    event.preventDefault();
    $('section').addClass('hidden');
    $('#addPage').removeClass('hidden');
    $('.empList').empty();
};

//Get input values, create object, place in array and render new list

const addEmployee = function(event) {
    event.preventDefault();
    newestName = $('#newEmpName').val();
    newestOffice = $('#newOffice').val();
    newestPhone = $('#newPhone').val(); 
    nameObj = { 
        name: newestName,
        officeNum: newestOffice,
        phoneNum: newestPhone,
    };
    $("#newEmpName").val("");
    $("#newOffice").val("");
    $("#newPhone").val("");
    employeeList.push(nameObj);
    renderList();
};

//Function to show Verify Employee Page
const showVerify = function(event){
    event.preventDefault();
    $('section').addClass('hidden');
    $('#verifyPage').removeClass('hidden');
}

//Function to verify name
const verify = function(event) {
    event.preventDefault();
    $(".result").empty();
    const verName = $("#verifyName").val();
    let result = "No";
    for (i=0; i < employeeList.length; i++){
        if (employeeList[i].name === verName) {
            result = "Yes";
            break;
        }
    };
    $(".result").text(result)  ;  
}

//Function to show Update Employee Page
const showUpdate = function(event){
    event.preventDefault();
    $('section').addClass('hidden');
    $('#updatePage').removeClass('hidden');
    $('.empList').empty();
}

//Function to Update Employee
const update = function(event) {
    event.preventDefault();
    const updateName = $("#updateName").val();
    for (i=0; i < employeeList.length; i++){
        if (employeeList[i].name === updateName) {
            newOffice = $("#updateOffice").val();
            employeeList[i].officeNum = newOffice;
            newPhone = $('#updatePhone').val();
            employeeList[i].phoneNum = newPhone;
            $('#updateName').val("");
            $('#updateOffice').val("");
            $('#updatePhone').val("");
        }
    };
    renderList();  
}

//Function to show Delete Employee Page
const showDelete = function(event){
    event.preventDefault();
    $('section').addClass('hidden');
    $('#deletePage').removeClass('hidden');
    $('.empList').empty();
}

//Function to Delete Employee
const deleteEmp = function(event) {
    event.preventDefault();
    const deleteName = $("#deleteName").val();
    for (i=0; i < employeeList.length; i++){
        if (employeeList[i].name === deleteName) {
            employeeList.splice (i, 1);
            $('#deleteName').val("");
        } 
    };
    renderList();
}

//Initial Load - all pages hidden
$('section').addClass('hidden');

//Navigation to each individual page
$('#showView').on('click', showView);
$('#showAdd').on('click', showAdd);
$('#showVerify').on('click', showVerify);
$('#showUpdate').on('click', showUpdate);
$('#showDelete').on('click', showDelete);

//Trigger Adding Employee
$("#addEmp").on('click',addEmployee);

//Trigger Verificaiton
$('#checkName').on('click', verify);

//Trigger Update
$('#updateEmp').on('click', update);

//Trigger Delete
$('#deleteEmp').on("click", deleteEmp);