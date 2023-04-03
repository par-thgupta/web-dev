// $('li').click(function (e) { 
//     $(this).toggleClass('completed')
// });



// $('span').click(function () {
//     $(this).parent().remove();
// });




$('#inp').keypress(function (e) {
    if (e.keyCode === 13) {
        let v = $('#inp').val();
        if($.trim(v).length == 0){
        alert("First write task before adding the task"); return ;
        }
        $('#list').append(`<li> <span><i class="fa-regular fa-trash-can"></i></span>      ${v}<span id="edit">Edit</span></li>`);
        $('#inp').val("")
    }
});


$('#plus').on('click',function(){
    let v = $('#inp').val();
    if($.trim(v).length == 0){
        alert("First write task before adding the task"); return ;
    }
    $('#list').append(`<li> <span><i class="fa-regular fa-trash-can"></i></span>    ${v} <span id="edit">Edit</span></li>`);
    $('#inp').val("")

})
// use on function to listen a click event 
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed')
});
$('#list').on('click', 'span', function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();//stop event bubbeling
});






// $('#inp').keypress(function (e) {
//     if (e.keyCode === 13) {
//         let v = $('#inp').val();
//         if($.trim(v).length == 0){
//         alert("First write task before adding the task"); return ;
//         }
//         $('#list').append(`<li> <span><i class="fa-regular fa-trash-can"></i></span>      <span id="datavalue">${v}</span> <small id="edit">Edit</small></li>`);
//         $('#inp').val("")
//     }
// });

// $('#list').on('click','small',function(e){
//     // let x = $(this).val();
//     let x= $('#list');
//     console.log(x)
//     // $('#inp').val(x);
//     e.stopPropagation();
// })

// $('#plus').on('click',function(){
//     let v = $('#inp').val();
//     if($.trim(v).length == 0){
//         alert("First write task before adding the task"); return ;
//     }
//     $('#list').append(`<li> <span><i class="fa-regular fa-trash-can"></i></span>    ${v}</li>`);
//     $('#inp').val("")

// })
// // use on function to listen a click event 
// $('ul').on('click', 'li', function () {
//     $(this).toggleClass('completed')
// });
// $('#list').on('click', 'span', function (e) {
//     $(this).parent().fadeOut(500, function () {
//         $(this).remove();
//     });
//     e.stopPropagation();//stop event bubbeling
// });