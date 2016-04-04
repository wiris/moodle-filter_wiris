var table = document.getElementById("wrs_filter_info_table");
var row = table.insertRow(-1);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);

cell1.innerHTML = "WIRIS Quizzes";

var httpRequest = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');
var quizzinfoUrl = '../../question/type/wq/info.php';
httpRequest.open('GET', quizzinfoUrl, false);
httpRequest.send(null);

if (httpRequest.status == 404) {
	cell2.innerHTML = "WIRIS Quizzes not installed";
	cell3.innerHTML = '<a href="http://www.wiris.com/en/quizzes/" target="_blank">More info</a>';
} else if(httpRequest.status == 200) {
	if (httpRequest.responseText.indexOf("ERROR") == -1) {
		cell2.innerHTML = "WIRIS Quizzes properly installed";
		cell3.innerHTML = '<span class="ok">OK</span>';
	} else {
		cell2.innerHTML = '<span class="error">WIRIS Quizzes properly installed</span>';
		cell3.innerHTML = '<span class="error">ERROR</span>';
	}
}