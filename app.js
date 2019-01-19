const showAdd = function (event) {
    event.preventDefault();
    $('#allPage').addClass('hidden');
    $('#addPage').removeClass('hidden');
};

const renderList = function() {
    event.preventDefault();
    $('#addPage').addClass('hidden');
    $('#allPage').removeClass('hidden');
    $('.empList').empty();
    for (let i=0; i<employeeList.length; i++){
        $('.empList').append(`<p>${employeeList[i].name}<br>${employeeList[i].officeNum}<br>${employeeList[i].phoneNum}</p>`);
    }
};

$('section').addClass('hidden');

$('#showAll').on('click', renderList);
$('#showAdd').on('click', showAdd);



