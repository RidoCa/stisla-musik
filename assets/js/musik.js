$(document).ready(function(){
    var color = randomColor({format:'rgbArray',hue: 'red'});
    
    //custom fungsi clamp untuk numerik
    Number.prototype.clamp = function(min, max) {
        return Math.min(Math.max(this, min), max);
    };

    //ubah warna elemen
    $("div").each(function () {
        var c = $(this).css("background-color");
        
        if (c == "rgb(103, 119, 239)") {
            $(this).attr("style","background-color:rgb("+color[0]+","+color[1]+","+color[2]+") !important;");
        }

        var c2 = $(this).css("color");
        
        if (c2 == "rgb(103, 119, 239)") {
            $(this).attr("style", "color:rgb("+color[0]+","+color[1]+","+color[2]+") !important;");
        }
    });

    $(".nav-link").each(function () {
        var c = $(this).css("background-color");
        
        if (c == "rgb(103, 119, 239)") {
            $(this).attr("style","background-color:rgb("+color[0]+","+color[1]+","+color[2]+") !important;");
        }

        var c2 = $(this).css("color");
        
        if (c2 == "rgb(103, 119, 239)") {
            $(this).attr("style", "color:rgb("+color[0]+","+color[1]+","+color[2]+") !important;");
        }
    });

    //chart js
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{
            label: 'Penjualan',
            data: [32, 18, 43, 30, 63, 51, 58, 61],
            borderWidth: 2,
            backgroundColor: "rgba("+color[0]+","+color[1]+","+color[2]+",0.8)",
            borderWidth: 0,
            borderColor: 'transparent',
            pointBorderWidth: 0,
            pointRadius: 3.5,
            pointBackgroundColor: 'transparent',
            pointHoverBackgroundColor: "rgba("+color[0]+","+color[1]+","+color[2]+",0.8)",
        }]
    },
    options: {
        animation: {
            duration: 0
        }
    }
    });

    var balance_chart = document.getElementById("balance-chart").getContext('2d');

    var balance_chart_bg_color = balance_chart.createLinearGradient(0, 0, 0, 70);
    balance_chart_bg_color.addColorStop(0, "rgba("+color[0]+","+color[1]+","+color[2]+",.2)");
    balance_chart_bg_color.addColorStop(1, "rgba("+color[0]+","+color[1]+","+color[2]+",0)");

    var myChart2 = new Chart(balance_chart, {
    type: 'line',
    data: {
        labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
        datasets: [{
        label: 'Balance',
            data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
            backgroundColor: balance_chart_bg_color,
            borderWidth: 3,
            borderColor: "rgba("+color[0]+","+color[1]+","+color[2]+",1)",
            pointBorderWidth: 0,
            pointBorderColor: 'transparent',
            pointRadius: 3,
            pointBackgroundColor: 'transparent',
            pointHoverBackgroundColor: "rgba("+color[0]+","+color[1]+","+color[2]+",1)",
        }]
    },
    options: {
        layout: {
        padding: {
            bottom: -1,
            left: -1
        }
        },
        legend: {
        display: false
        },
        scales: {
        yAxes: [{
            gridLines: {
            display: false,
            drawBorder: false,
            },
            ticks: {
            beginAtZero: true,
            display: false
            }
        }],
        xAxes: [{
            gridLines: {
            drawBorder: false,
            display: false,
            },
            ticks: {
            display: false
            }
        }]
        },
        animation: {
            duration: 0
        }
    }
    });

    var sales_chart = document.getElementById("sales-chart").getContext('2d');

    var sales_chart_bg_color = sales_chart.createLinearGradient(0, 0, 0, 80);
    balance_chart_bg_color.addColorStop(0, "rgba("+color[0]+","+color[1]+","+color[2]+",.2)");
    balance_chart_bg_color.addColorStop(1, "rgba("+color[0]+","+color[1]+","+color[2]+",0)");

    var myChart3 = new Chart(sales_chart, {
    type: 'line',
    data: {
        labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
        datasets: [{
        label: 'Penjualan',
        data: [70, 62, 44, 40, 21, 63, 82, 52, 50, 31, 70, 50, 91, 63, 51, 60],
            borderWidth: 2,
            backgroundColor: balance_chart_bg_color,
            borderWidth: 3,
            borderColor: "rgba("+color[0]+","+color[1]+","+color[2]+",1)",
            pointBorderWidth: 0,
            pointBorderColor: 'transparent',
            pointRadius: 3,
            pointBackgroundColor: 'transparent',
            pointHoverBackgroundColor: "rgba("+color[0]+","+color[1]+","+color[2]+",1)",
        }]
    },
    options: {
        layout: {
        padding: {
            bottom: -1,
            left: -1
        }
        },
        legend: {
        display: false
        },
        scales: {
        yAxes: [{
            gridLines: {
            display: false,
            drawBorder: false,
            },
            ticks: {
            beginAtZero: true,
            display: false
            }
        }],
        xAxes: [{
            gridLines: {
            drawBorder: false,
            display: false,
            },
            ticks: {
            display: false
            }
        }]
        },
        animation: {
            duration: 0
        }
    }
    });

    $("#products-carousel").owlCarousel({
    items: 3,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    responsive: {
        0: {
        items: 2
        },
        768: {
        items: 2
        },
        1200: {
        items: 3
        }
    }
    });


    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')
    const card3 = document.getElementById('card3')

    const buttons = $(".btn:not(.not)");
    const bsliders = $(".budget-price-square:not(.not)");
    const cflag = $(".media .img-fluid");
    const li = $("ul.sidebar-menu li.nav-item");
    const trs = $("table tr");
    const body = $("body");

    const bukaButton = document.getElementById('buka-musik');
    const file = document.getElementById("file");
    const audio = document.getElementById("audio");

    $(bukaButton).on('click',function(){
        file.click();
    })
    

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    
    file.onchange = function() {
        const files = this.files;
        audio.src = URL.createObjectURL(files[0]);
        audio.load();
        audio.play();
        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);
        var analyser = context.createAnalyser();

        src.connect(analyser);
        analyser.connect(context.destination);

        analyser.fftSize = 256;

        var bufferLength = analyser.frequencyBinCount;
        console.log(bufferLength);

        var dataArray = new Uint8Array(bufferLength);

        myChart.data.labels = dataArray;
        var WIDTH = canvas.width;
        var HEIGHT = canvas.height;
        

        var barWidth = (WIDTH / bufferLength) * 2.5;
        var barHeight;
        var x = 0;
        

        //animasi efek
        function renderFrame() {
            requestAnimationFrame(renderFrame);

            x = 0;

            ctx.fillStyle = "linen";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);

            analyser.getByteFrequencyData(dataArray);
            var newData = [];
            var newData1 = [];
            var newData2 = [];

            var max = Math.max(...dataArray);

            var ib = parseInt(bufferLength/bsliders.length);
            var cib = 0
            var lib = [];

            var cf = parseInt(bufferLength/cflag.length);
            var ccf = 0
            var lcf = [];

            var bs = parseInt(bufferLength/buttons.length);
            var cbs = 0
            var lbs = [];

            var lis = parseInt(bufferLength/li.length);
            var clis = 0
            var llis = [];

            var tr = parseInt(bufferLength/trs.length);
            var ctr = 0
            var ltr = [];

            var ttl = 0;

            for (var i = 0; i < bufferLength; i++) {
                var f = dataArray[i] * 100;
                ttl += dataArray[i];
                barHeight = dataArray[i] + 50;
                //console.log(f)
                newData.push(f);

                if(i < 16){
                    newData1.push(f)
                } else if(i >= 16 && i < 32) {
                    newData2.push(f)
                }

                if(((cib+1) * ib) > i){
                    lib.push(dataArray[i]);
                } else {
                    var total = 0;
                    for(var b = 0; b < lib.length; b++) {
                        total += lib[b];
                    }
                   
                    var avg = total / lib.length - 10;
                    var sv = (avg * 100/max)+(0-0);
                    $(bsliders[cib]).attr('style','width:'+sv+'%;')
                    $(bsliders[cib]).parent().find('.budget-price-label').html("$"+parseInt(avg))

                    cib++;
                    lib = [dataArray[i]];
                }

                if(((ccf+1) * cf) > i){
                    lcf.push(dataArray[i]);
                } else {
                    var total = 0;
                    for(var b = 0; b < lcf.length; b++) {
                        total += lcf[b];
                    }
                   
                    var avg = total / lcf.length - 10;
                    var sv = (avg * 1/max)+(.5-0);
                    $(cflag[ccf]).parent().find('.text-small.text-muted').html(parseInt(avg))
                    $(cflag[ccf]).attr("style", "transform:scale("+sv+") !important;");
                    ccf++;
                    lcf = [dataArray[i]];
                }


                if(((cbs+1) * bs) > i){
                    lbs.push(dataArray[i]);
                } else {
                    var total = 0;
                    for(var b = 0; b < lbs.length; b++) {
                        total += lbs[b];
                    }
                   
                    var avg = total / lbs.length - 10;
                    var sv = (avg * 1/max)+(.5-0);
                    var r = color[0] + (avg/sv);
                    var g = color[1] + (avg/sv);
                    var b = color[2];
                    $(buttons[cbs]).parent().find('.text-small.text-muted').html(parseInt(avg))
                    $(buttons[cbs]).attr("style", "transform:scale("+sv+") !important;background:rgb(" + r + "," + g + "," + b + ") !important;");
                    cbs++;
                    lbs = [dataArray[i]];
                }


                if(((clis+1) * lis) > i){
                    llis.push(dataArray[i]);
                } else {
                    var total = 0;
                    for(var b = 0; b < llis.length; b++) {
                        total += llis[b];
                    }
                   
                    var avg = total / li.length;
                
                    var sv = (avg * 10/max)+(-10-0);
                  
                   
                    $(li[clis]).attr("style", "transform:translateX("+(sv * 10)+"px) !important;");
                    clis++;
                    llis = [dataArray[i]];
                }


                if(((ctr+1) * tr) > i){
                    ltr.push(dataArray[i]);
                } else {
                    var total = 0;
                    for(var b = 0; b < ltr.length; b++) {
                        total += ltr[b];
                    }
                   
                    var avg = total / ltr.length;
                
                    var sv = (avg * 10/max)+(-5-0);
                  
                   
                    $(trs[ctr]).attr("style", "transform:translateX("+(sv * 10)+"px) !important;");
                    ctr++;
                    ltr = [dataArray[i]];
                }

                var r = color[0] + (i/bufferLength);
                var g = color[1] + (i/bufferLength);
                var b = color[2];

                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

                x += barWidth + 1;

                

                
            }
           
            var v1 = dataArray[(parseInt(dataArray.length/4)).clamp(0,bufferLength)];
            var s1 = (v1 * 1 / max) + (.4-0);
            $(card1).attr("style", "transform:scale("+s1+") !important;");
            $(card1).find(".card-wrap .card-body").html(parseInt(v1));

            var v2 = dataArray[(parseInt(dataArray.length/3)).clamp(0,bufferLength)];
            var s2 = (v2 * 1 / max) + (.4-0);
            $(card2).attr("style", "transform:scale("+s2+") !important;");
            $(card2).find(".card-wrap .card-body").html("$"+parseInt(v2));

            var v3 = dataArray[(parseInt(dataArray.length/2)).clamp(0,bufferLength)];
            var s3 = (v3 * 1 / max) + (.4-0);
            $(card3).attr("style", "transform:scale("+s3+") !important;");
            $(card3).find(".card-wrap .card-body").html(parseInt(v3));


            
        


            myChart.data.datasets = [{
                label: 'Penjualan',
                    data: newData,
                    borderWidth: 2,
                    backgroundColor: "rgba("+color[0]+","+color[1]+","+color[2]+",0.8)",
                    borderWidth: 0,
                    borderColor: 'transparent',
                    pointBorderWidth: 0,
                    pointRadius: 3.5,
                    pointBackgroundColor: 'transparent',
                    pointHoverBackgroundColor: "rgba("+color[0]+","+color[1]+","+color[2]+",0.8)",
                }]
            myChart.update();

            myChart2.data.datasets = [{
                label: 'Balance',
                    data: newData1,
                    backgroundColor: balance_chart_bg_color,
                    borderWidth: 3,
                    borderColor: "rgba("+color[0]+","+color[1]+","+color[2]+",1)",
                    pointBorderWidth: 0,
                    pointBorderColor: 'transparent',
                    pointRadius: 3,
                    pointBackgroundColor: 'transparent',
                    pointHoverBackgroundColor: "rgba("+color[0]+","+color[1]+","+color[2]+",1)",
                }];

                myChart2.update();

                myChart3.data.datasets = [{
                    label: 'Balance',
                        data: newData2,
                        backgroundColor: balance_chart_bg_color,
                        borderWidth: 3,
                        borderColor: "rgba("+color[0]+","+color[1]+","+color[2]+",1)",
                        pointBorderWidth: 0,
                        pointBorderColor: 'transparent',
                        pointRadius: 3,
                        pointBackgroundColor: 'transparent',
                        pointHoverBackgroundColor: "rgba("+color[0]+","+color[1]+","+color[2]+",1)",
                    }];
    
                    myChart3.update();

            
        }

        audio.play();
        renderFrame();
    };
});



