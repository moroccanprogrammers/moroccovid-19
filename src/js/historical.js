const api_url_hestori = 'https://corona.lmao.ninja/v2/historical/morocco?lastdays=all';
	
async function getHestorical() {
    var valChart = new Array(),
        i=0;
        
    const response = await fetch(api_url_hestori),
            data = await response.json(),
            cases = data.timeline['cases'],
            deaths = data.timeline['deaths'],
            recovered = data.timeline['recovered'],
            count = Object.keys(cases).length;

    $.each( cases, function( key, value ) {
        if(cases[''+key+'']!=0) {
            var col = "<tr><td>"+key+"</td><td>"+cases[''+key+'']+"</td><td>"+deaths[''+key+'']+"</td><td>"+recovered[''+key+'']+"</td></tr>";
            valChart[i]=[key,parseInt(cases[key]),parseInt(deaths[key]),parseInt(recovered[key])];
            $('.statistique').append(col);
            i++;
        }
    });

    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var chartdata = new google.visualization.DataTable();
    chartdata.addColumn('string', 'التاريخ');
    chartdata.addColumn('number', 'الحالات');
    chartdata.addColumn('number', 'الوفيات');
    chartdata.addColumn('number', 'المتعافون');
      
    chartdata.addRows(valChart);

    var options = {
      width: '100%',
      height: '500px'
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    const draw = () => {
      chart.draw(chartdata, google.charts.Line.convertOptions(options));
    }

    draw()
    
    if (window.addEventListener) {
      window.addEventListener('resize', draw);
    }
    else if (window.attachEvent) { // for old browser version
      window.attachEvent('onresize', draw);
    }
    else {
      window.resize = draw;
    }  
  }

}

getHestorical();