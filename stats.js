function addTableCellToRow( rowElement, textContent) {
    var td = document.createElement("td");
  var textNode = document.createTextNode(textContent);
  td.appendChild(textNode);
  rowElement.appendChild(td);
}

function displayContacts( jsonString) {

  var divElement = document.getElementById("mydiv");
  while(divElement.firstChild) {
    divElement.removeChild(divElement.firstChild);
  }

  var tableElement = document.createElement("table");
  var col = document.createElement("col");
  var group=document.createElement("colgroup");
  var tableRowElement = document.createElement("tr");
  var firstCellElement = document.createElement('th');
  firstCellElement.colSpan=5;
  var secondCellElement = document.createElement('th');
  secondCellElement.colSpan=3;
  var thirdCellElement = document.createElement('th');
  thirdCellElement.colSpan=3;
  firstCellElement.appendChild( document.createTextNode("CPU"));
  secondCellElement.appendChild( document.createTextNode("Memory"));
  thirdCellElement.appendChild( document.createTextNode("Network"));
  tableRowElement.appendChild( firstCellElement);
  tableRowElement.appendChild( secondCellElement);
  tableRowElement.appendChild( thirdCellElement);
  tableElement.appendChild( tableRowElement);
  var tableRowElement2 = document.createElement("tr");
  var sh1 = document.createElement('th');
  var sh2 = document.createElement('th');
  var sh3 = document.createElement('th');
  var cpu1= document.createElement('th');
  var cpu2= document.createElement('th');
  var sh4 = document.createElement('th');
  var sh5 = document.createElement('th');
  var sh6 = document.createElement('th');
  var sh7 = document.createElement('th');
  var sh8 = document.createElement('th');
  var sh9 = document.createElement('th');
  sh1.appendChild(document.createTextNode("util_per_core"));
  sh2.appendChild(document.createTextNode("count_phy"));
  sh3.appendChild(document.createTextNode("count_vir"));
  cpu1.appendChild(document.createTextNode("Mean_Freq"));
  cpu2.appendChild(document.createTextNode("Mean_Load"));
  sh4.appendChild(document.createTextNode("volume"));
  sh5.appendChild(document.createTextNode("utilization"));
  sh6.appendChild(document.createTextNode("Frequency"));
  sh7.appendChild(document.createTextNode("Ingress_utilization"));
  sh8.appendChild(document.createTextNode("Egress_utilization"));
  sh9.appendChild(document.createTextNode("Speed"));
  tableRowElement2.appendChild(sh1);
  tableRowElement2.appendChild(sh2);
  tableRowElement2.appendChild(sh3);
  tableRowElement2.appendChild(cpu1);
  tableRowElement2.appendChild(cpu2);
  tableRowElement2.appendChild(sh4);
  tableRowElement2.appendChild(sh5);
  tableRowElement2.appendChild(sh6);
  tableRowElement2.appendChild(sh7);
  tableRowElement2.appendChild(sh8);
  tableRowElement2.appendChild(sh9);
  tableElement.appendChild(tableRowElement2);
  divElement.appendChild(tableElement);

  var phonebook = eval( "(" + jsonString + ")");

  for( i = 0; i < phonebook.usage.length; i++) {

    var tr = document.createElement("tr");
    tableElement.appendChild(tr);

    addTableCellToRow( tr, phonebook.usage[i].cpu.util_per_core);
    addTableCellToRow( tr, phonebook.usage[i].cpu.count_phy);
    addTableCellToRow( tr, phonebook.usage[i].cpu.count_vir);
	addTableCellToRow( tr, phonebook.usage[i].cpu.mean_freq);
	addTableCellToRow( tr, phonebook.usage[i].cpu.mean_load);
    addTableCellToRow( tr, phonebook.usage[i].mem.vol);
    addTableCellToRow( tr, phonebook.usage[i].mem.util);
    addTableCellToRow( tr, phonebook.usage[i].mem.freq);
    addTableCellToRow( tr, phonebook.usage[i].net.Ingress_util);
    addTableCellToRow( tr, phonebook.usage[i].net.Egress_util);
    addTableCellToRow( tr, phonebook.usage[i].net.Speed);
  }
}
function demo() {
  //var text = '{"usage":[{"cpu": {"util_per_core": [0.0, 0.0], "count_phy": 2, "count_vir": 2, "mean_freq": 1596.004, "mean_load": 0.0}, "mem": {"vol": 1.953, "util": 0.185, "freq": 1366}, "net": {"Ingress_util": 0.0, "Egress_util": 0.0, "Speed": 423}},{"cpu": {"util_per_core": [0.0, 0.0], "count_phy": 2, "count_vir": 2, "mean_freq": 1596.004, "mean_load": 0.0}, "mem": {"vol": 1.953, "util": 0.185, "freq": 1366}, "net": {"Ingress_util": 0.0, "Egress_util": 0.0, "Speed": 423}}]}';
  //displayContacts( text);
}

var xmlHttpRequest;

function sendRequest() {
  xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = receive;
  xmlHttpRequest.open( "GET", "brahim_data2.js", true);
  xmlHttpRequest.send();
}

function receive() {
  if ( xmlHttpRequest.readyState == 4) {
    if ( xmlHttpRequest.status == 200) {
      //var xmlDoc = xmlHttpRequest.responseXML.documentElement;
      displayContacts( xmlHttpRequest.responseText);
    } else {
      alert( "Error response: " + xmlHttpRequest.status);
    }
  }
}

window.setInerval (window.setTimeout("sendRequest()",3000), 2000);



// function rep(){
//   setInterval(() => {
//     sendRequest(),
//     receive()
//   }, 3000);
// }
