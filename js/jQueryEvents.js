$('#btn').click((e)=>{
    // console.log(e)
    console.log('button clicked')
});

$('h1').on('click',function(){
    $(this).css('color','yellow'); 
})



$('.box').on('mouseover',function(){
    $(this).hide()
})


