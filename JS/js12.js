function process()
{
    var chude = document.getElementById("demo").value
    var maunen = document.getElementById("color").value
    var mauchu = document.getElementById("textcolor").value
    document.getElementById("first").innerHTML = chude 
    document.getElementById("color").style.backgroundColor = maunen 
    document.getElementById("textcolor").style.color = mauchu 
}