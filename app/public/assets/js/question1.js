(function() {
    var collegeNames = [],
        collegeData = [],
        chartData = [];

    $.ajax({
        url: "/api/question1",
        success: function(data) {
            async.forEach(data, function(college, callback) {
                    collegeNames.push(college.name);
                    collegeData.push(parseInt(college.enrollment.EFTOTLT));
                    callback();
                },

                function(err) {
                    if (err) 
                        throw err;

                    chartData.push({
                        name: 'Enrollments',
                        data: collegeData
                    });

                    $('#chart').highcharts({
                        chart: {
                            type: 'column'
                        },

                        title: {
                            text: 'Top 10 colleges by enrollment'
                        },

                        xAxis: {
                            categories: collegeNames
                        },

                        yAxis: {
                            title: {
                                text: 'Enrollment'
                            }
                        },

                        plotOptions: {
                            bar: {
                                dataLabels: {
                                    enabled: true
                                }
                            }
                        },

                        series: chartData
                    });
                });
        }
    })
})();
