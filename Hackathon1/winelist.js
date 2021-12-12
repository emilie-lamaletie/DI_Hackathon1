
function displayRedList(){
  var x = document.getElementById("wineCategory");
  if (x.style.visibility === "hidden") {
    x.style.display = "block";
  }
  else {
    x.style.visibility = "hidden";
  }

  var y = document.getElementById("redList")
  y.style.visibility="visible" ;
}


//
// function moreinfo(){
//   var x = document.getElementById("redwine_1_details");
//   x.style.data-="visible" ;
  // if (x.style.visibility === "hidden") {
  //   x.style.display = "block";
  // }
  // else {
  //   x.style.visibility = "hidden";
  // }

  // var y = document.getElementById("redList")
  // y.style.visibility="visible" ;
}
}


//
// function displayredwine_1_details(){
//   // console.log(wine_List);
//   // console.log(document.getElementById("redList"));
//   var xx = document.getElementById("redwine_1");
//   // console.log(xx);
//   if (xx.style.visibility === "hidden") {
//     xx.style.display = "block";
//   }
//   else {
//     xx.style.visibility = "hidden";
//   }
//
//   var yy = document.getElementById("redwine_1_details");
//   yy.style.visibility="visible" ;
//
// }
//
// $(".wine_details_hover").click(function () {
//
//     $wine_details_hover = $(this);
//     //getting the next element
//     $content = $wine_details_hover.next();
//     //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
//     $content.slideToggle(500, function () {
//         //execute this after slideToggle is done
//         //change text of header based on visibility of content div
//         $wine_details_hover.text(function () {
//             //change text based on condition
//             return $wine_details_hover.is(":visible") ? "Collapse" : "Expand";
//         });
//     });
//
// });


// $('.collapse').collapse()

// $(function() {
// var b = $("#expand_red_1");
// var w = $("#redwine_1_details");
// <!-- var l = $("#list"); -->
// b.click(function() {
// w.toggleClass('open'); /* <-- toggle the application of the open class on click */
// });
// });
