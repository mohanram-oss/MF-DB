// declaring onload function
window.onload=param;
// param checker funtion
function param()
{
    const param = window.location.search
    const urlParams = new URLSearchParams(param);
    const id= urlParams.get('id')
    console.log(param);
// making get request
    var url = "https://1o24sestji.execute-api.ap-south-1.amazonaws.com/test/student/" + encodeURIComponent(id);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url , false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
    
}
