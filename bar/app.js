var app = angular.module('plunker', ['nvd3']);

app.controller('MainCtrl', function($scope) {
  $scope.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 350,
                x: function(d){ return d.label;},
                y: function(d){return d.value;},
                showControls: false,
                showValues: true,
                duration: 500,
                margin: {
                  left: 300,
                  right: 100
                },
                stacked: false,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values de x',
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    }
                },
                tooltip: {
                  enabled: true,
                  headerFormatter: function (d, i) {
                    return "header " + d;
                      //return yAxis.tickFormat()(d, i);
                  },
                  keyFormatter: function(d,i) {
                      debugger;
                      return "key :" + d;
                  },
                  valueFormatter: function(d,i){
                      return "valor: " + d;
                  }
                }
            }
        };

        $scope.data = [
            {
                "key": "Series1",
                "color": "#d62728",
                "values": [
                    {
                        "label" : "Este es el nombre del grupo de prueba" ,
                        "value" : 1.8746444827653
                    } ,
                    {
                        "label" : "Group B" ,
                        "value" : 8.0961543492239
                    } ,
                    {
                        "label" : "Group C" ,
                        "value" : 0.57072943117674
                    }
                ]
            },
            {
                "key": "Series2",
                "color": "#1f77b4",
                "values": [
                    {
                        "label" : "Group A" ,
                        "value" : 25.307646510375
                    } ,
                    {
                        "label" : "Group B" ,
                        "value" : 16.756779544553
                    } ,
                    {
                        "label" : "Group C" ,
                        "value" : 18.451534877007
                    }
                ]
            }
        ]
});
