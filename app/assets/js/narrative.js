console.log("narrative Start");

var chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['Murders in US', 13752, 13164, 12795, 12888, 12253],
            ['x', 2009, 2010, 2011, 2012, 2013]
        ],
        selection: {
            enabled: true
        }
    }
});

debugger; 

var defaultMessage = document.getElementById('message').innerHTML,
    currentIndex = 0,
    timer, duration = 4000,
    demos = [

        function () {
        chart.load({
            columns: [
                ['Murders in US', 13752, 13164, 12795, 12888, 12253]
            ]

        })
        setMessage('In the past few years, homicide rates have been decreasing.');
    },

        
    function () {
        chart.load({
            columns: [
                ['Murders in US', 44.8282, 42.5538, 41.0462, 41.0299, 38.7144]
            ]
        })
        setMessage('The homicide rate per 10,000 follow a similar trend');
    },

    function () {
        chart.load({
            columns: [
                ['Murders in US', 13752, 13164, 12795, 12888, 12253]
            ]

        })
        setMessage('However lets return to the raw numbers, and shift our focus away from the trend');
    },

    function () {
        chart.transform('area-spline');
        setMessage('and towards the composition of homicides. Between 2009-2013, there were 65,000 murders in the US.');
    },

    function () {
        chart.load({
            columns: [
                ['Blunt objects', 623, 549, 502, 522, 428]
            ]

        })
        setMessage('Of the 65,000 homicides, 2,600 were perpetrated with a blunt object such as a hammer or baseball bat.');
    },

    function () {
        chart.load({
            columns: [
                ['Personal weapon', 817, 769, 751, 707, 687]
            ]

        })
        setMessage('Personal weapons (punching, kicking, etc.) were responsible for 3,700 deaths.');
    },

    function () {
        chart.load({
            columns: [
                ['Knives', 1836, 1732, 1716, 1604, 1490

                ]
            ]

        })
        setMessage('Knives and other cutting objects were respondible for 2,600 deaths.');
    },

    function () {
        chart.load({
            columns: [
                ['Firearms', 9199, 8874, 8653, 8897, 8454]
            ]

        })
        setMessage('Most homicides in the US are from firearms, which were responsible for 44,000 deaths.');
    },

    function () {
        chart.load({
            columns: [
                ['Other', 1277, 1240, 1173, 1158, 1194]
            ]

        })
        setMessage('Various other means of homicide are collected in this bucket category.');
    },

    function () {
        chart.focus('Blunt objects');
        setMessage('An oft repeated claim is that baseball bats are responsible for more deaths than guns, leading some to satirically argue for better baseball bat legislation. However, this is clearly not true.');
    },

    function () {
        chart.focus('Personal weapon');
        setMessage('In fact, "bare" arms (haha) are more dangerous than baseball bats.');
    },

    function () {
        chart.revert();
        setMessage('Sorry for the pun.');
    },

    function () {
        chart.groups([
            ['Blunt objects', 'Personal weapon', 'Knives', 'Other']
        ]);
        setMessage('If we group the all nongun related violence, it is still far smaller in magnitude than gun violence.');
    },
        
            function () {
        chart.regions([{
            start: 2011,
            end: 2012
        }]);
        setMessage('Interestingly, the uptick in homicides from 2011 to 2012 seems to entirely stem from gun violence.');
    },
        
        function () {
        chart.regions([]);
        setMessage('So what is the conclusion of this demo? Will banning guns drop our murder rate to 1/3 its current level?');
    },
        
        function () {
        chart.unload({
            ids: 'Blunt objects'
        });
        setMessage('No. This demo does not examine the relationship between gun control and crime rates.');
    },
        function () {
        chart.unload({
            ids: 'Personal weapon'
        });
        setMessage('What is clear however is that gun violence is a major problem in this country, and worth researching.');
    },
        
        function () {
        chart.unload({
            ids: 'Knives'
        });
        setMessage('However, in the 90s, congress passed legislation banning the CDC from researching gun violence.');
    },
        
        function () {
        chart.unload({
            ids: 'Other'
        });
        setMessage('This was in response to a finding by the CDC that gun ownership increases the risk of homicide or suicide by three times.');
    },
        
        function () {
        chart.unload({
            ids: 'Firearms'
        });
        setMessage('While it is unclear how we can solve the problem of gun violence, it is clear that we need to know more.');
    },
        
         function () {
        chart.transform('line');
        setMessage('We live in a fortunate time of decreasing violence overall. However mass shooting and firearm related suicide are a growing problem and we need more research to adequately address these issues.');
    },
     
    function () {
        setMessage('Starting Demo..');
    }];

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

d3.select('#start_btn').on("click", function () {
    console.log("Hello console");

    if (this.innerHTML === "Stop Demo") {
        stopDemo();
        this.innerHTML = "Continue Demo";
        return;
    }
    this.innerHTML = "Stop Demo";
    setMessage('Starting Demo..');
    timer = setInterval(function () {
        if (currentIndex == demos.length) currentIndex = 0;
        demos[currentIndex++]();
    }, duration);
});

function stopDemo() {
    clearInterval(timer);
};

console.log("narrative End");