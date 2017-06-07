/**
* @file VR View functions for standalone version
* @author François-Xavier Bresson
**/

/**
* @function processGyro
* @description Process gyroscopic data
* @param {object} a - Alpha orientation
* @param {object} b - Beta orientation
* @param {object} g - Gamma orientation
**/
function processGyro(a, b, g) {
    deviceOrientationData.alpha = a;
    deviceOrientationData.beta = b;
    deviceOrientationData.gamma = g;

    if (hasGyro) {

        if (b > 60 && !$app.hasClass('hidden')) {
            $app.addClass('hidden');
            $view.removeClass('hidden');
        } else if (b <= 60 && $app.hasClass('hidden')) {
            $app.removeClass('hidden');
            $view.addClass('hidden');
        }
    } else {

        if (b > 7 ) { //Hide app
            $app.removeClass('manualSwitch');

            if (!$view.hasClass('manualSwitch') && $view.hasClass('hidden')) {
                $app.addClass('hidden');
                $view.removeClass('hidden');
                $switchView.addClass('hide font-icon-showmobile');
                $switchView.removeClass('font-icon-hidemobile');
            } 

        } else if (b <= 7) { //Hide view

            $view.removeClass('manualSwitch');

            if (!$app.hasClass('manualSwitch') && $app.hasClass('hidden') ) {
                $app.removeClass('hidden');
                $view.addClass('hidden');
                $switchView.removeClass('hide font-icon-showmobile');
                $switchView.addClass('font-icon-hidemobile');
            } 
        }
    }
}


/**
* @function onVRViewReady
* @description Load default scene when VR view is ready
* @param {object} e - VR Event
**/
function onVRViewReady(e) {
    loadScene('level1');
}

/**
* @function onModeChange
* @description Function to execute when changing VR mode
* @param {object} e - VR Event
**/
function onModeChange(e) {
}

/**
* @function onHotspotClick
* @description Handle changing view by clicking on hotspots
* @param {object} e - VR Event
**/
function onHotspotClick(e) {
    if (e.id) {
        loadScene(e.id);
    }
}

/**
* @function loadScene
* @description Load VR scene and set the hotspots
* @param {string} id - Identifier of the scene to load
**/
function loadScene(id) {
    // Set the image
    vrView.setContent({
        image: vrviews + scenes[id].image,
        is_autopan_off: true,
        default_yaw: 0
    });

    // Add all the hotspots for the scene
    if(screen == 'sandbox') {
        var sceneHotspots = Object.keys(scenes[id].hotspots);
        for (var i = 0; i < sceneHotspots.length; i++) {
            var hotspotKey = sceneHotspots[i];
            var hotspot = scenes[id].hotspots[hotspotKey];

            vrView.addHotspot(hotspotKey, {
                pitch: hotspot.pitch,
                yaw: hotspot.yaw,
                radius: hotspot.radius,
                distance: hotspot.distance
            });
        }
    }
}

/**
* @function onVRViewError
* @description Handle VR errors
* @param {object} e - VR Event
**/
function onVRViewError(e) {
}
