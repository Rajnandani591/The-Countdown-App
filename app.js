const end_date = "10 Jan 2026 00:00:00";
 let ends = document.getElementById("endDate").innerText = end_date;
 let input = document.querySelectorAll("input");

function clock(){
    const end = new Date(end_date);
    const now = new Date();
   let diff = (end-now)/1000;
   console.log(diff);
   input[0].value = Math.floor(diff/3600/24); // for Calculating Days

   input[1].value = Math.floor((diff/3600)%24); // for Calculating hours

   input[2].value = Math.floor((diff/60)%60); // for Calculating Minutes

   input[3].value = Math.floor((diff)%60); // for Calculating Seconds
}
clock()