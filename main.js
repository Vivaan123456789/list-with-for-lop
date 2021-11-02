var name_student_array =[];
function submit(){
    var displey_student_array=[];
    for(var j=1; j<=4; j++){
        var name_student=document.getElementById("name_of_the_student_"+j).value ;
        name_student_array.push(name_student);
    } 
    var length_name_student_array=name_student_array.length;
console.log(length_name_student_array)
for(var k=0;k<length_name_student_array;k++){
    displey_student_array.push("<h4>NAME- "+name_student_array[k]+"</h4>")
}
document.getElementById("display_name_with_commas").innerHTML=displey_student_array;
var remove_comma=displey_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_comma;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){name_student_array.sort();
var displey_student_array_sorting=[];
var lenght_array=name_student_array.length;
for(var k=0;k<lenght_array;k++){
    displey_student_array_sorting.push("<h4>NAME- "+name_student_array[k]+"</h4>")
}
var remove_comma=displey_student_array_sorting.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}