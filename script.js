//Need to add date to currentDay p element
console.log(moment().format("LLLL"))
$(".btn").sortable({
    connectWith: $(".btn")
  });
  
$(currentDay).append(moment().format("LLLL"));


/*how do we get a moment to tell the time and highlight it in the red hour block
