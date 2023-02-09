console.log($("h1"));


$('h1').css('backgroundolor','pink')

let h1Style = {
    color : 'lightgreen',
    backgroundColor : 'blue'
}
$('h1').first().css(h1Style);



$('#psf').text('this is new para')

// let p = document.getElementById('psf');
// p.innerHTML = "this is new by vanila css para"
// console.log($('input').first().attr('type','color'))




// console.log($('input').last().val());


// $('ul li').first().text("Parth");
// or

$('h1').addClass('temp')
$('h1').last().toggleClass('temp')

