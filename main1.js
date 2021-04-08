// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

let recover, result;

axios
  .get('https://api.covid19api.com/country/india/status/confirmed/live?from=2021-04-05T12:00:00Z&to=2021-04-06T00:00:00Z', {
    timeout: 8000
  })
  .then(res => showOutputnow(res)
      
    )
    .catch(err => console.error(err));


  axios
    .get('https://api.covid19api.com/total/country/india?from=2021-04-05T12:00:00Z&to=2021-04-06T00:00:00Z', {
      timeout: 5000
    })
    .then(res => showOutputDeath(res)
      
    )
    .catch(err => console.error(err));

  

axios
  .get('https://api.covid19api.com/total/country/india?from=2021-04-05T12:00:00Z&to=2021-04-06T00:00:00Z', {
    timeout: 5000
  })
  .then(res => {
    //showOutputRecovered(res);
    //recover = JSON.stringify(res.data[0].Recovered);
    //console.log(recover);
    
  document.getElementById('res3').innerHTML = `
  ${res.data[0].Recovered}`
  }
    )
    .catch(err => console.error(err));


// Show output in browser now
function showOutputnow(res) {
  document.getElementById('res1').innerHTML = `
  
  <p>${JSON.stringify(res.data[0].Cases)}</p>
  
`;
}

// Show output in browser.map(d =>d.Deaths)
function showOutputDeath(res) {
  document.getElementById('res2').innerHTML = `
 
      <p>${JSON.stringify(res.data[0].Deaths)}</p>
    
`;
}


// Show output in browser
// function showOutputRecovered(res) {
   
//   document.getElementById('res3').innerHTML = `
//       ${res.data[0].Recovered}
    

// `;
// }

//For daily confirmed cases

axios
  .get('https://api.covid19api.com/country/india/status/confirmed?from=2020-01-30T00:00:00Z&to=2021-04-06T00:00:00Z', {
    timeout: 5000
  })
  .then(res => {
    datac = JSON.stringify( res.data.map(d => d.Cases));
    console.log(datac)
    
  // document.getElementById('daily').innerHTML = `
  // ${res.data.map(d => d.Cases)}`
  }
    )
    .catch(err => console.error(err));











Highcharts.chart('container-1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Overall Active Cases vs Death vs Recovered in India'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Recover',
            y:61.1,
            //y:document.getElementById('res3').innerHTML,
          //y: res.data[0].Recovered ,
            sliced: true,
            selected: false
        }, {
            name: 'Active',
            y: 6.84
        }, {
            name: 'Death',
            y: 1.61
        }]
    }]
});


Highcharts.chart('container-2', {

  title: {
      text: ' India\'s Confirmed Cases Daily Trend'
  },


  // yAxis: {
  //     title: {
  //         text: 'Number of Employees'
  //     }
  // },

   xAxis: {
    type: 'datetime'
  //     accessibility: {
  //        range:1 * 30 * 24 * 3600 * 1000,
  //          rangeDescription: 'Range:jan 2020 to april 2021'
  //    },
  //   // categories: ['Jan-2020', 'Feb-2020', 'Mar-2020', 'Apr-2020', 'May-2020', 'Jun-2020', 'Jul-2020', 'Aug-2020', 'Sep-2020', 'Oct-2020', 'Nov-2020', 'Dec-2020','Jan-2021', 'Feb-2021', 'Mar-2021', 'Apr-2021', 'May-2021', 'Jun-2021', 'Jul-2021', 'Aug-2021', 'Sep-2021', 'Oct-2021', 'Nov-2021', 'Dec-2021']
   },

  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
      //pointStart: '2020 to 2021',
        
      }
  },

  series: [{
      name: 'Daily-confirmed',
    data: [1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 28, 30, 31, 34, 39, 43, 56, 62, 73, 82, 102, 113, 119, 142, 156, 194, 244, 330, 396, 499, 536, 657, 727, 887, 987, 1024, 1251, 1397, 1998, 2543, 2567, 3082, 3588, 4778, 5311, 5916, 6725, 7598, 8446, 9205, 10453, 11487, 12322, 13430, 14352, 15722, 17615, 18539, 20080, 21370, 23077, 24530, 26283, 27890, 29451, 31324, 33062, 34863, 37257, 39699, 42505, 46437, 49400, 52987, 56351, 59695, 62808, 67161, 70768, 74292, 78055, 81997, 85784, 90648, 95698, 100328, 106475, 112028, 118226, 124794, 131423, 138536, 144950, 150793, 158086, 165386, 173491, 181827, 190609, 198370, 207191, 216824, 226713, 236184, 246622, 257486, 265928, 276146, 286605, 297535, 308993, 320922, 332424, 343091, 354065, 366946, 380532, 395048, 410451, 425282, 440215, 456183, 473105, 490401, 508953, 528859, 548318, 566840, 585481, 604641, 625544, 648315, 673165, 697413, 719664, 742417, 767296, 793802, 820916, 849522, 878254, 906752, 936181, 968857, 1003832, 1039084, 1077781, 1118206, 1155338, 1193078, 1238798, 1288108, 1337024, 1385635, 1435616, 1480073, 1531669, 1581963, 1634746, 1695988, 1750723, 1803695, 1855745, 1908254, 1964536, 2027074, 2088611, 2153010, 2215074, 2268675, 2329638, 2396637, 2461190, 2525922, 2589952, 2647663, 2702681, 2767253, 2836925, 2905825, 2975701, 3044940, 3106348, 3167323, 3224547, 3310234, 3387500, 3463972, 3542733, 3621245, 3691166, 3769523, 3853406, 3936747, 4023179, 4113811, 4204613, 4280422, 4370128, 4465863, 4562414, 4659984, 4754356, 4846427, 4930236, 5020359, 5118253, 5214677, 5308014, 5400619, 5487580, 5562663, 5646010, 5732518, 5818570, 5903932, 5992532, 6074702, 6145291, 6225763, 6312584, 6394068, 6473544, 6549373, 6623815, 6685082, 6757131, 6835655, 6906151, 6979423, 7053806, 7120538, 7175880, 7239389, 7307097, 7370468, 7432680, 7494551, 7550273, 7597063, 7651107, 7706946, 7761312, 7814682, 7864811, 7909959, 7946429, 7990322, 8040203, 8088851, 8137119, 8184082, 8229313, 8267623, 8313876, 8364086, 8411724, 8462080, 8507754, 8553657, 8591730, 8636011, 8683916, 8728795, 8773479, 8814579, 8845127, 8874290, 8912907, 8958483, 9004365, 9050597, 9095806, 9139865, 9177840, 9222216, 9266705, 9309787, 9351109, 9392919, 9431691, 9462809, 9499413, 9534964, 9571559, 9608211, 9644222, 9677203, 9703770, 9735850, 9767371, 9796744, 9826775, 9857029, 9884100, 9906165, 9932547, 9956557, 9979447, 10004599, 10031223, 10055560, 10075116, 10099066, 10123778, 10146845, 10169118, 10187850, 10207871, 10224303, 10244852, 10266674, 10266674, 10286709, 10323965, 10340469, 10356844, 10374932, 10395278, 10413417, 10413417, 10450284, 10466595, 10479179, 10495147, 10512093, 10527683, 10542841, 10557985, 10571773, 10581823, 10595639, 10610883, 10625428, 10639684, 10654533, 10667736, 10676838, 10689527, 10701193, 10720048, 10733130, 10746174, 10757610, 10766245, 10777284, 10790183, 10802591, 10814304, 10826363, 10838194, 10847304, 10858371, 10871294, 10880603, 10892746, 10904940, 10916589, 10925710, 10937320, 10950201, 10963394, 10977387, 10991651, 11005850, 11016434, 11030176, 11046914, 11063491, 11079979, 11096731, 11112241, 11124527, 11139516, 11156923, 11173761, 11192045, 11210799, 11229398, 11244786, 11262707, 11285561, 11308846, 11333728, 11359048, 11385339, 11409831, 11438734, 11474605, 11514331, 11555284, 11599130, 11646081, 11686796, 11734058, 11787534, 11846652, 11908910, 11971624, 12039644, 12095855, 12149335, 12221665, 12303131, 12392260, 12485509, 12589067, 12686049, 12801785],
    pointStart: Date.UTC(2020, 0, 1),
    pointInterval: 8 * 1200 * 10000 
  }, ],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 400
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }

});

