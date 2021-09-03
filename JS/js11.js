function reverseString()
{

    var string = document.getElementById("normal").value
    var mang = string.split(" ")
    var count = 0
    var mangKetQua = []
    for (var index =0; index <= 120; index++)
    {
        mangKetQua[index] = 0
    }  

    for ( var index =0; index < mang.length ; index++)
    {
        if (mang[index].trim() != "")
    count ++
    }

    var ketqua = "Characters: " + string.length + "<br>" + "Words: " + count +"<br>"

    for( var index = 0; index < string.length ; index ++)
    {
        if (string.charCodeAt(index) >= 'a' && string.charCodeAt(index) <= 'z')
        mangKetQua[string.charCodeAt(index)-32] ++
        else
        mangKetQua[string.charCodeAt(index)] ++
    }
    console.log(mangKetQua.toString())
    for( var index=0; index < mangKetQua[index].length ;index++)
    {
        if (mangKetQua[index] > 0)
        ketqua += "Characters" + String.fromCharCode(index)+ mangKetQua[index]+"<br>"
    }
document.getElementById("result").innerHTML = ketqua 
}