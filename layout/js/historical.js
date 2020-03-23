const api_url_hestori = 'https://corona.lmao.ninja/historical';
	
async function getHestorical() {
    var valChart = new Array();
        i=0;
    const   response = await fetch(api_url_hestori),
            data = await response.json(),
            cases = data[63].timeline['cases'],
            deaths = data[63].timeline['deaths'],
            recovered = data[63].timeline['recovered'],
            count = Object.keys(cases).length;

    $.each( cases, function( key, value ) {
        if(cases[''+key+'']!=0) {
            var col = "<tr><td>"+key+"</td><td>"+cases[''+key+'']+"</td><td>"+deaths[''+key+'']+"</td><td>"+recovered[''+key+'']+"</td></tr>";
            valChart[i]=[key,parseInt(cases[key]),parseInt(deaths[key]),parseInt(recovered[key])];
            $('.statistique').append(col);
            i++;
        }

    });
    //console.log(valChart);
    //chart script

    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var chartdata = new google.visualization.DataTable();
    chartdata.addColumn('string', 'التاريخ');
    chartdata.addColumn('number', 'الحالات');
    chartdata.addColumn('number', 'الوفيات');
    chartdata.addColumn('number', 'المتعافون');

      console.log(valChart);
      chartdata.addRows(valChart);
  
    

    var options = {
      width: '100%',
      height: '500px'
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(chartdata, google.charts.Line.convertOptions(options));
  }


}
getHestorical();
