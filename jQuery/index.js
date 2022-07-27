$("h1").css("color", "red");

            //If jQuery CDN and index.js are placed in title region; use the below code to capture the functions expected:

                // $(document).ready(function() {
                //     $("h1").css("color", "read");
                // });

//$("button").text("Don't click me");
$("button").html("<em>Bye</em>");

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})