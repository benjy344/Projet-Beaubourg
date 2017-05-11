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

    if (b > 60 && $('#view').hasClass('hidden')) {
        $('#app').addClass('hidden');
        $('#view').removeClass('hidden');
    } else if (b <= 60 && $('#app').hasClass('hidden')) {
        $('#view').addClass('hidden');
        $('#app').removeClass('hidden')
    }
}

/**
* @function onVRViewReady
* @description Load default scene when VR view is ready
* @param {object} e - VR Event
**/
function onVRViewReady(e) {
    console.log('onVRViewReady');
    loadScene('sandbox');
}

/**
* @function onModeChange
* @description Function to execute when changing VR mode
* @param {object} e - VR Event
**/
function onModeChange(e) {
    console.log('onModeChange', e.mode);
}

/**
* @function onHotspotClick
* @description Handle changing view by clicking on hotspots
* @param {object} e - VR Event
**/
function onHotspotClick(e) {
    console.log('onHotspotClick', e.id);
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
        is_autopan_off: true
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
    console.log('Error! %s', e.message);
}
