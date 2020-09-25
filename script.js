// Set variables to traverse the DOM and select by ID and Class
var dateLocation = $("#currentDay")
var currentTimeBlock = $(".hour")
var now = moment();

moment().format();

// Pseudo-code
// add date to top of calendar app
$("#currentDay").text(now);
// event listener and if statement to recognize if an activity is in the past, present or future, 
//adding and removing classes to respond by changing block colors to indicate time to user
$(now).on("", function () {
    if (".hour" === now){
        textarea.attr("class", ".present");
        textarea.removeAttr("class", ".future");
        textarea.removeAttr("class", ".past");
    } else if (".hour" !== now || ".hour" < now){
        textarea.attr("class", ".past");
        textarea.removeAttr("class", ".present");
        textarea.removeAttr("class", ".future");
    } else{}
        textarea.attr("class", ".future");
        textarea.removeAttr("class", ".present");
        textarea.removeAttr("class", ".past");
    }
})

// on click event to save activities to local storage
$(".save").on("click", function() { 
};
// -- stores in local storage updates the dom to store keys and values
// input capability in activity boxes


//Office hour questions:
// why are there gaps between bars?
// how do I get rid of border outline on time block?
// how do I get an input box to remain color when typing in it?
