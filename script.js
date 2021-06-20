function onChange(v){
    selrate.innerHTML= v+"%";
}
function compute()
{
    let myRate=Number(document.getElementById("myRange").value);
    let p = Number(document.getElementById("principal").value);
    let years = Number(document.getElementById("years").value);
    let receiveAmount= ((myRate*p*years)/100).toFixed(2);
    showintr.innerHTML=`<p>If you deposit <span style="background-color:yellow;">${p}</span>,</p><p>at an Interest rate of <span style="background-color:yellow;">${myRate}%</span>.</p><p>You will recevie an amount of <span style="background-color:yellow;">${receiveAmount}</span>,</p><p>in the year <span style="background-color:yellow;">${2020+years}</span>.</p>`
}
        