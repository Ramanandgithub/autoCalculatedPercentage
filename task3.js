const dropdown = document.getElementById("dropdown");



dropdown.addEventListener("change", function (e) {
    const currVal = e.target.value;
    if (currVal == "Yes") {
        form.style.display = "block";

    } else {
        form.style.display = "none";

    }
})


const omarks = document.getElementById("omarks");
const mmarks = document.getElementById("mmarks");
const percentage = document.getElementById("percentage");
const status = document.getElementById("status");



mmarks.addEventListener("input", function () {



   let ObtainMarks = 0;
   let MaximumMarks = 0;

      ObtainMarks = omarks.value;
     MaximumMarks = mmarks.value

    const per1 = (ObtainMarks / MaximumMarks) * 100;
    

    const per = per1.toFixed(2);



    percentage.value = per;







    setTimeout(function(){
        if (per < 33) {
        status.value = "Fail";

    }else if(MaximumMarks == 0){
        status.value = "";

    }


    else {
        status.value = "Pass";
    }
    },2500)

})

omarks.addEventListener("input", function () {



    const ObtainMarks = omarks.value;
    const MaximumMarks = mmarks.value

    const per1 = (ObtainMarks / MaximumMarks) * 100;

    const per = per1.toFixed(2);

    if(per >=101){
        console.log("some erroe per is > 100");

    }else{
        percentage.value = per;

    }



    







    setTimeout(function(){
        if (per < 33) {
        status.value = "Fail";

    }else if(MaximumMarks == 0){
        status.value = "";

    }


    else {
        status.value = "Pass";
    }
    },2500)

})