(function () {
	var tuitionData = [],
		seriesData = [],
		name,
    	collegeId = location.href;

    collegeId = collegeId.match(/\/(\d+)/);
    collegeId = collegeId[1];

    $.ajax({
        url: "/api/question3/" + collegeId,
        success: function(data) {
			name = data.INSTNM;
			tuitionData.push(parseInt(data.Tuition09));
			tuitionData.push(parseInt(data.Tuition10));
			tuitionData.push(parseInt(data.Tuition11));

			seriesData.push({
				name : name,
				data : tuitionData
			});

            $('#chart').highcharts({
                chart: {
                    zoomType: 'x'
                },
                title: {
                	text: data.INSTNM
                },
                xAxis : {
                	categories : ['2009', '2010', '2011']
                },
                yAxis: {
                	title: {
                		text: 'Tuition'
                	}
                },
                legend: {
                	enabled: false
                },
                plotOptions: {
		            area: {
		                fillColor: {
		                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
		                    stops: [
		                        [0, Highcharts.getOptions().colors[0]],
		                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
		                    ]
		                },
		                marker: {
		                    radius: 2
		                },
		                lineWidth: 1,
		                states: {
		                    hover: {
		                        lineWidth: 1
		                    }
		                },
		                threshold: null
		            }
		        },
                series: seriesData
            });
        }
    });
})();