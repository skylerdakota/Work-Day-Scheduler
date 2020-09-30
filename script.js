$(document).ready(function(){
    // adds date to top of calendar app using the moment.js library tool and connecting to the id in the HTML
    var date = moment().format('dddd Do, YYYY');
    $("#currentDay").text(date);
    
// uses onclick event to store saved textarea inputs in local storage    
$(".saveBtn").on("click", function(){
    var activity = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, activity);
    console.log(localStorage);
})

// gets textarea input values by class and id to store in local storage 
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))

// a way to iterate through the timeblocks and determine if it is that time
// jquery grabs elements that have times in the blocks
function checkHour(){
    // sets a variable to the current time function
    var currentHour =  moment().hours();
    console.log(currentHour);
    // uses a for each loop to iterate over all timeblocks and split the id in order to create a comparison with the current hour
    $(".row").each(function(){
        var ourHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(ourHour);
        // checks a series of conditions using an if/else statement to then add or remove classes to render color on the timeblocks 
        if (ourHour < currentHour){
            $(this).addClass("past");
        }else if (ourHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        }else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    })
};
// Calls checkHour function immediately to determine how to render page to user
checkHour();

})