//main div
// ;(function () {
//     // The normal stuff
//     let margin = { top: 0, left: 0, right: 0, bottom: 0 }
//     let height = 700 - margin.top - margin.bottom
//     let width = 700 - margin.left - margin.right

//     // Just add a div, don't add an SVG
//     let container = d3.select("#webgl-viz-main").append("div").style("position", "relative")


//    let colorScale = d3.scaleOrdinal().domain(['first','second','third', 'fourth', 'fifth']).range(['blue','orange','red', 'green', 'purple'])

//    // make a radius scale to change circle radii as you scroll
//    letradiusScale = d3.scaleS

//     // initialize PIXI.js and add it to the div
//     let app = new PIXI.Application({
//         width: width + margin.left + margin.right,
//         height: height + margin.top + margin.bottom,
//         antialias: true,
//         backgroundColor: 0xffffff,
//         autoDensity: true,
//     })
//     container.node().appendChild(app.view)
    
//     var pointsContainer = new PIXI.Container()
//     app.stage.addChild(pointsContainer)
    
//     let datapoints = []
//     for(let i = 0; i < 12000; i++) {
//         datapoints.push({ round: 'first' })
//     }
//     for(let i = 0; i < 600; i++) {
//         datapoints.push({ round: 'second' })
//     }
//     for(let i = 0; i < 120; i++) {
//         datapoints.push({ round: 'third' })
//     }
//     for(let i = 0; i < 49; i++) {
//         datapoints.push({ round: 'fourth' })
//     }

//     function getCircleXY(circleRadius) {
//         let angle = Math.random()*Math.PI*2;
//         let radius = Math.random() * circleRadius * circleRadius;
//         let x = width / 2 + Math.sqrt(radius) * Math.cos(angle);
//         let y = height / 2 + Math.sqrt(radius) * Math.sin(angle);
//         return { x: x, y: y }
//     }

//     // Instead of re-calculating the coordinates/sizes/colors
//     // every time we draw, just do it all at once and save
//     // it back into each datapoint d
//     datapoints.forEach(d => {
//         // Random x/y over the entire viz
//         // d.distributedCoords.x
//         // d.distributedCoords.y
//         d.distributedCoords = {
//             x: Math.random() * width,
//             y: Math.random() * height
//         }

//         // pick a random angle
//         // between 0-200 pixels from center

//         // d.circleCoords.x
//         // d.circleCoords.y
//         d.firstCircleCoords = getCircleXY(300)
    
//         d.color = colorScale(d.round)
//         d.radius = 2
//         // reduce opacity??
//     })

//     // Create a PIXI.js circle for each city
//     datapoints.forEach(d => {
//         const circle = new PIXI.Graphics()

//         // PIXI.js knows colors as "0xFFFFFF" not "#FFFFFF"
//         // so we have to convert it
//         const color = PIXI.utils.string2hex(d.color)
//         circle.beginFill(color)
//         circle.drawCircle(0, 0, d.radius)

//         // default position of the circles on the page
//         circle.position.x = d.firstCircleCoords.x
//         circle.position.y = d.firstCircleCoords.y
//         circle.endFill()

//         // Add it to the cities layer
//         pointsContainer.addChild(circle)

//         // Save the circle so we can move it later
//         d.circle = circle
//     })


    

// })()
////////////////////////////////////////////////////////////////////

;(function () {
    // The normal stuff
    let margin = { top: 0, left: 0, right: 0, bottom: 0 }
    let height = 700 - margin.top - margin.bottom
    let width = 700 - margin.left - margin.right

    // Just add a div, don't add an SVG
    let container = d3.select("#webgl-viz").append("div").style("position", "relative")


    let colorScale = d3.scaleOrdinal().domain(['first','second','third', 'fourth', 'fifth']).range(['blue','orange','red', 'green', 'purple'])

// Just blue?
//    let colorScale = d3.scaleOrdinal().domain(['first','second','third', 'fourth']).range(['blue'])

   // make a radius scale to change circle radii as you scroll
   letradiusScale = d3.scaleS

    // initialize PIXI.js and add it to the div
    let app = new PIXI.Application({
        width: width + margin.left + margin.right,
        height: height + margin.top + margin.bottom,
        antialias: true,
        backgroundColor: 0xffffff,
        autoDensity: true,
    })
    container.node().appendChild(app.view)
    
    var pointsContainer = new PIXI.Container()
    app.stage.addChild(pointsContainer)
    
    let datapoints = []
    for(let i = 0; i < 12000; i++) {
        datapoints.push({ round: 'first' })
    }
    for(let i = 0; i < 600; i++) {
        datapoints.push({ round: 'second' })
    }
    for(let i = 0; i < 120; i++) {
        datapoints.push({ round: 'third' })
    }
    for(let i = 0; i < 60; i++) {
        datapoints.push({ round: 'fourth' })
    }
    for(let i = 0; i < 10; i++) {
        datapoints.push({ round: 'fifth' })
    }

    function getCircleXY(circleRadius) {
        let angle = Math.random()*Math.PI*2;
        let radius = Math.random() * circleRadius * circleRadius;
        let x = width / 2 + Math.sqrt(radius) * Math.cos(angle);
        let y = height / 2 + Math.sqrt(radius) * Math.sin(angle);
        return { x: x, y: y }
    }

    // Instead of re-calculating the coordinates/sizes/colors
    // every time we draw, just do it all at once and save
    // it back into each datapoint d
    datapoints.forEach(d => {
        // Random x/y over the entire viz
        // d.distributedCoords.x
        // d.distributedCoords.y
        d.distributedCoords = {
            x: Math.random() * width,
            y: Math.random() * height
        }

        // Can I make other shapes????

        // d.line = {
        //     x: Math.floor() * width,
        //     y: Math.random() * height
        // }

        // pick a random angle
        // between 0-200 pixels from center

        // d.circleCoords.x
        // d.circleCoords.y
        d.firstCircleCoords = getCircleXY(300)
        d.secondCircleCoords = getCircleXY(100)
        d.thirdCircleCoords = getCircleXY(50)
        d.fourthCircleCoords = getCircleXY(30)
        d.fifthCircleCoords = getCircleXY(10)
    
        d.color = colorScale(d.round)
        d.radius = 2
        // reduce opacity??
    })

    // Create a PIXI.js circle for each city
    datapoints.forEach(d => {
        const circle = new PIXI.Graphics()

        // PIXI.js knows colors as "0xFFFFFF" not "#FFFFFF"
        // so we have to convert it
        const color = PIXI.utils.string2hex(d.color)
        circle.beginFill(color)
        circle.drawCircle(0, 0, d.radius)

        // default position of the circles on the page
        circle.position.x = d.firstCircleCoords.x
        circle.position.y = d.firstCircleCoords.y
        circle.endFill()

        // Add it to the cities layer
        pointsContainer.addChild(circle)

        // Save the circle so we can move it later
        d.circle = circle
    })


    // Scrollytelling functions
    // d3.select("#step1").on("stepin", function () {
    //     // Give the cities a new target x and y
    //     datapoints.forEach(d => {
    //         gsap.to(d.circle.position, { x: d.distributedCoords.x, y: d.distributedCoords.y, duration: 1.5 })
    //     })
    // })

//step in 
    d3.select("#step1").on("stepin", function () {
        datapoints.forEach(d => {
            if(d.round == 'second') {
                d.circle.visible = true
            } else {
                d.circle.visible = false
            }
            gsap.to(d.circle.position, { x: d.secondCircleCoords.x, y: d.secondCircleCoords.y, duration: 2 })
        })
    })

    d3.select("#step2").on("stepin", function () {
        datapoints.forEach(d => {
            if(d.round == 'third') {
                d.circle.visible = true
            } else {
                d.circle.visible = false
            }
            gsap.to(d.circle.position, { x: d.thirdCircleCoords.x, y: d.thirdCircleCoords.y, duration: 2 })
        })
    })
    d3.select("#step3").on("stepin", function () {
        datapoints.forEach(d => {
            if(d.round == 'fourth') {
                d.circle.visible = true
            } else {
                d.circle.visible = false
            }
            gsap.to(d.circle.position, { x: d.fourthCircleCoords.x, y: d.fourthCircleCoords.y, duration: 2 })
        })
    })

    d3.select("#step5").on("stepin", function () {
        console.log("stepping in to step 5")
        datapoints.forEach(d => {
            if(d.round == 'fifth') {
                d.circle.visible = true
            } else {
                d.circle.visible = false
            }
            gsap.to(d.circle.position, { x: d.fifthCircleCoords.x, y: d.fifthCircleCoords.y, duration: 2 })
        })
    })

// step out
d3.select("#step5").on("stepout", function () {
    console.log("stepping out of step 5")
    datapoints.forEach(d => {
        if(d.round == 'fourth') {
            d.circle.visible = true
        } else {
            d.circle.visible = false
        }
        gsap.to(d.circle.position, { x: d.fourthCircleCoords.x, y: d.fourthCircleCoords.y, duration: 2 })
    })
})

d3.select("#step3").on("stepout", function () {
    datapoints.forEach(d => {
        if(d.round == 'third') {
            d.circle.visible = true
        } else {
            d.circle.visible = false
        }
        gsap.to(d.circle.position, { x: d.thirdCircleCoords.x, y: d.thirdCircleCoords.y, duration: 2 })
    })
})

d3.select("#step2").on("stepout", function () {
    datapoints.forEach(d => {
        if(d.round == 'second') {
            d.circle.visible = true
        } else {
            d.circle.visible = false
        }
        gsap.to(d.circle.position, { x: d.secondCircleCoords.x, y: d.secondCircleCoords.y, duration: 2 })
    })
})

d3.select("#step1").on("stepout", function () {
    datapoints.forEach(d => {
        if(d.round == 'first') {
            d.circle.visible = true
        } else {
            d.circle.visible = false
        }
        gsap.to(d.circle.position, { x: d.firstCircleCoords.x, y: d.firstCircleCoords.y, duration: 2 })
    })
})


})()

// SCROLLYTELLING TIME!!!!!!
// instantiate the scrollama
const scroller = scrollama();

scroller
  .setup({
    container: "#scrolly",
    step: ".step",
    offset: 0.4,
	// debug: true
  })
  
  .onStepEnter((response) => {
    d3.select(response.element).dispatch('stepin');
  })
  .onStepExit((response) => {
    console.log("step exit", console.log("step exit", response))
    // Only trigger stepout if scrolling up
    if (response.direction === "up"){
        console.log("triggering step out")
        d3.select(response.element)
        .dispatch('stepout');
    }
})
