;(function () {
    // The normal stuff
    let margin = { top: 0, left: 0, right: 0, bottom: 0 }
    let height = 700 - margin.top - margin.bottom
    let width = 700 - margin.left - margin.right

    // Just add a div, don't add an SVG
    let container = d3.select("#webgl-viz").append("div").style("position", "relative")

    let colorScale = d3.scaleOrdinal().range(['blue', 'orange', 'yellow'])

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
        datapoints.push({ round: 'third' })
    }
    for(let i = 0; i < 8647; i++) {
        datapoints.push({ round: 'second' })
    }
    for(let i = 0; i < 120; i++) {
        datapoints.push({ round: 'final' })
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

        // pick a random angle
        // between 0-200 pixels from center
        
        // d.circleCoords.x
        // d.circleCoords.y
        d.circleCoords = getCircleXY(300)

        // d.smallCircleCoords.x
        // d.smallCircleCoords.y
        d.smallCircleCoords = getCircleXY(30)
    
        d.color = colorScale(d.round)
        d.radius = 1
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
        circle.position.x = d.distributedCoords.x
        circle.position.y = d.distributedCoords.y
        circle.endFill()

        // Add it to the circles layer
        pointsContainer.addChild(circle)

        // Save the circle so we can move it later
        d.circle = circle
    })


    // If you wanted scrollytelling, you'd do this instead
    // d3.select("#step-one").on('stepin', function() {
    //
    // })

    // Map button
    d3.select("#to-distributed").on("click", function () {
        // Give the cities a new target x and y
        datapoints.forEach(d => {
            gsap.to(d.circle.position, { x: d.distributedCoords.x, y: d.distributedCoords.y, duration: 1.5 })
        })
    })

    // Chart button
    d3.select("#to-circle").on("click", function () {
        // Give the cities a new target x and y
        datapoints.forEach(d => {
            gsap.to(d.circle.position, { x: d.circleCoords.x, y: d.circleCoords.y, duration: 1.5 })
            if(d.round == 'third') {
                d.circle.visible = false
            } else {
                d.circle.visible = true
            }
        })
    })

    d3.select("#to-small-circle").on("click", function () {
        // Give the cities a new target x and y
        datapoints.forEach(d => {
            gsap.to(d.circle.position, { x: d.smallCircleCoords.x, y: d.smallCircleCoords.y, duration: 1.5 })
        })
    })


})()