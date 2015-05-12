(function () {
	var males = ['Males'],
    	females = ['Females'],
    	collegeId = location.href;

    collegeId = collegeId.match(/\/(\d+)/);
    collegeId = collegeId[1];

    $.ajax({
        url: "/api/question2/" + collegeId,
        success: function(data) {
            males.push(parseInt(data.EFTOTLM));
            females.push(parseInt(data.EFTOTLW));

            $('#chart').highcharts({
                chart: {
                    plotBackgroundColor: '#303030'
,
                    plotShadow: true
                },
                title: {
                    text: data.INSTNM
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                            	color: 'white'
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Count',
                    data: [males, females]
                }]
            });
        }
    });
})();