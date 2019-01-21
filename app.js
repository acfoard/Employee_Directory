//Function to show Add Employee Page
const showAdd = function (event) {
    event.preventDefault();
    $('section').addClass('hidden');
    $('#addPage').removeClass('hidden');
    $('.empList').empty();
    for (let i=0; i<employeeList.length; i++){
        $('.empList').append(`<div class="card"><p class="card-body">${employeeList[i].name}<br>${employeeList[i].officeNum}<br>${employeeList[i].phoneNum}</p></div>`);
    }
};

//Function to show Employee List
const showAll = function() {
    event.preventDefault();
    $('section').addClass('hidden');
    $('#allPage').removeClass('hidden');
    $('.empList').empty();
    for (let i=0; i<employeeList.length; i++){
        $('.empList').append(`<div class="card"><p class="card-body">${employeeList[i].name}<br>${employeeList[i].officeNum}<br>${employeeList[i].phoneNum}</p></div>`);
    }
};

//Get input values, create object, place in array and render new list

const addEmployee = function() {
    event.preventDefault();
    newestName = $('#newEmpName').val();
    newestOffice = $('#newOffice').val();
    newestPhone = $('#newPhone').val(); 
    nameObj = { 
        name: newestName,
        officeNum: newestOffice,
        phoneNum: newestPhone,
    };
    employeeList.push(nameObj);
    $('.empList').empty();
    for (let i=0; i<employeeList.length; i++){
        $('.empList').append(`<div class="card"><p class="card-body">${employeeList[i].name}<br>${employeeList[i].officeNum}<br>${employeeList[i].phoneNum}</p></div>`);
    }
};

//Function to show Verify Employee Page
const showVerify = function(){
    event.preventDefault();
    $('section').addClass('hidden');
    $('#verifyPage').removeClass('hidden');
}

//Function to verify name
const verify = function() {
    $(".result").empty();
    const verName = $("#verifyName").val();
    for (i=0; i < employeeList.length; i++){
        if (employeeList[i].name.includes(verName)) {
            $('.result').html("yes");
            break;
        } else {
            $(".result").empty();
            $(".result").html("No");
        }
    };    
}

//Initial Load - all pages hidden
$('section').addClass('hidden');

//Navigation to each individual page
$('#showAll').on('click', showAll);
$('#showAdd').on('click', showAdd);
$('#showVerify').on('click', showVerify);

//Trigger Adding Employee
$("#addEmp").on('click',addEmployee);

//Trigger Verificaiton
$('#checkName').on('click', verify);



