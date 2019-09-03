// Function to convert json data to an HTML table with attr names as TH's and values in TD's
function convertJSONtoTable(json, strTableClasses, strTableID, strColumnToHide=null){
    var cols = Object.keys(json[0]);
	var headerRow = '';
	var bodyRows = '';
	strTableClasses = strTableClasses || '';
	cols.map(function(col) {
		if(col != strColumnToHide){
			headerRow += '<th>' + col + '</th>';
		}
		else{
			headerRow += '<th style="display:none;">' + col + '</th>';
		}
	});
	json.map(function(row) {
		bodyRows += '<tr>';
		cols.map(function(colName) {
			if(colName != strColumnToHide){
				bodyRows += '<td>' + row[colName] + '</td>';
			}
			else{
				bodyRows += '<td style="display:none;">' + row[colName] + '</td>';
			}
		});
		bodyRows += '</tr>';
	});
	return '<table border=1 class="' +
		strTableClasses +
	   	'" id="' + 
	   	strTableID +
	   	'"><thead><tr>' +
       	headerRow +
       	'</tr></thead><tbody>' +
       	bodyRows +
       	'</tbody></table>';
}

