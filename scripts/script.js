// $("h3").css({border: "3px solid blue"})
// $("header nav li:first").css({display: "none"})


// //DOM
// //el siguiente elemento
// $("#contact-methods").next().css({border: "3px solid"});
// //el anterior elemento
// $("#contact-methods").prev().css({border: "3px solid"});
// //el elemento de afuera (si se pone parents coge todos los de afuera)
// $(".banner-title").parent().css({border: "5px solid pink"});
// //los elementos de adentro
// $("#social-nav").children().css({border: "2px solid yellow"});
// //el elemento que se busca
// $("#contact").find(".twitter").css({border: "5px solid green"});


// //ADD CONTENT
// var tweet = "<p> holiiiiii </p>";
// //lo coloca al final
// $("#tweets").append(tweet);
// //lo coloca principio
// $("#tweets div").prepend(tweet);
// //lo coloca antes
// $("#tweets").before(tweet);
// //lo coloca despuess
// $("#tweets").after(tweet);
// //cambia el código dentro
// $("#tweets").html(tweet);
// //cambia el contenido dentro
// $("#tweets").text(tweet);

// //WRAP AND UNWRAP
// //coge todos los section y cada un lo pone dentro de un div
// $("section".)wrap("<div>");
// //a section le elimina el primer parent
// $("section".)unwrap();
// //coge todos los section como si fuera uno solo y los deja dentro de un solo  div
// $("section".)wrapAll("<div>");

// //cuando se clickea el botón unwrap se elimina la clase wrap para que todo ocupe full pantalla CON VANILA JS
// var wrapper = "<div class='wrapper'>";
// var button = $(".button");
// var wrapped = true;
//
// button[0].onclick = function(){
//   if(wrapped){
//     $("section").unwrap();
//     wrapped = false;
//     button.text("Wrap").css({background: "green"});
//   } else {
//     $("section").wrapAll(wrapper);
//     wrapped = true;
//     button.text("Unwrap").css({background: "orange"});
//   }
// };

// //EMPTY AND REMOVE
// // vacía el contenido (HTML) dentro del elemento
// $(".button").empty();
// //elimina todo el elemento
// $(".button").remove();

// //MODIFICAR ATRIBUTOS
// //elimina un atributo
// $("#contact img").removeAttr("alt");
// //cambia el contenido de un atributo (en este caso cambia lo que esta dentro del alt=""). si se deja el attr solo con un valor sirve para leer qué tiene adentro (en este caso qué tiene alt)
// $("#contact img").attr("alt","location");

// //CLASES
// //elimina la clase del elementos
// $("header .wrapper").removeClass("wrapper");
// //añade la clase al div que está directamente "debajo/dentro" del header
// $("header > div").addClass("wrapper");
// //añade o quita la clase dependiendo si la tiene o no
// $("#points-of-sale").toggleClass("open");

// //EVENTOS
// //cambia el background cuando se le da click al elemento
// var = myLis = $("#points-of-sale li");
// myLis.on("click", function(){
//   $(this).css({"background": "pink"});
// //cuando se le da click ya no vuelve a funcionar, "descativa"  lo del click con el off()
//   myLis.off("click");
// });

// //ANIMATION
// //sólo se animan lo que tenga valor numérico
// $(document).ready(function(){
//   function complete(){
//     alert("listos");
//   }
//   $("section > h2").on("click", function(){
//     //primero va lo que se quiere animar, luego el tiempo, luego si se quiere linear o ease u otros, luego va callback function(función que se haga cuando acabe la animación)
//     $(this).animate({"width": "500px", "height":"100px"},600, complete);
//   });
// });

// //  FADING reemplaza el cambio en css a opacity
// $(document).ready(function(){
  // $("section > h2").on("click", function(){
  //   //fadeOut -> opacity 0 __ fadeIN -> opacity 1; adentro del () va el tiempo
  //   $(this).fadeOut();
  //   //hace que se desaparezca y aparezca
  //   $(this).fadeOut(2000).fadeIn(500);
  //   //fadeTo primer parámetro es el tiempo y segundo es la cantidad de opacity que se quiere
  //   $(this).fadeTo(1000,0.2);
  // })
// });

// //SLIDE adentro va el tiempo
// $(document).ready(function(){
//   $("#contact > img").on("click", function(){
//     //hace que se desaparezca deslizándose hacia arriba
//     $("#contact-methods").slideUp(100);
//     //hace que aparezca deslizándose hacia abajo
//     $("#contact-methods").slideDown();
//     //hace que apareza o desaparezca dependiendo de su estado
//     $("#contact-methods").slideToggle();
//   })
// });
