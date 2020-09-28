// Set variables to traverse the DOM and select by ID and Class
var dateLocation = $("#currentDay")
var currentTimeBlock = $(".hour")
var now = moment();
var hour = 
var date = "Tuesday"

moment().format();
// a way to iterate through the timeblocks and determine if it is that time
//jquery grab elements that have times in the blocks
function checkHour(){

    if (".hour" === now){
        textarea.attr("class", ".present");
        textarea.removeAttr("class", ".future");
        textarea.removeAttr("class", ".past");
    } else if (".hour" !== now || ".hour" < now){
        textarea.attr("class", ".past");
        textarea.removeAttr("class", ".present");
        textarea.removeAttr("class", ".future");
    } else{
        textarea.attr("class", ".future");
        textarea.removeAttr("class", ".present");
        textarea.removeAttr("class", ".past");
    };
};

//a way to parse out the hour only to match the current hour?



// add date only to top of calendar app
function checkDate(){
    $("#currentDay").text(date);
};  

// event listener and if statement to recognize if an activity is in the past, present or future, 
//adding and removing classes to respond by changing block colors to indicate time to user
// (no need for event listener here) $(now).on("", function () {});
  


// on click event to save input activities to local storage
$(".save").on("click", function() { 

});

// -- stores in local storage updates the dom to store keys and values

checkHour();

//Office hour questions:
// why are there gaps between bars?
// how do I get rid of border outline on time block?
// how do I get an input box to remain color when typing in it?
// Is my pseudo code headed in the right direction?
