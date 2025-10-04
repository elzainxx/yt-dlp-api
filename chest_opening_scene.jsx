// After Effects Script: Chest Opening Scene
// Resolution: 1080x1920, 30fps, 5 seconds duration
// Modern styling with dynamic geometric effects
// Enhanced with error handling and performance optimizations

(function() {
    // Error handling wrapper
    try {
        // Check if After Effects is running
        if (!app.project) {
            throw new Error("No After Effects project is open. Please create or open a project first.");
        }
        
        // Create new composition with error handling
        var comp = app.project.items.addComp("Chest Opening Scene", 1080, 1920, 1, 5, 30);
        
        if (!comp) {
            throw new Error("Failed to create composition. Please check your After Effects version compatibility.");
        }
        
        // Start undo group for better performance
        app.beginUndoGroup("Create Chest Opening Scene");
    
        // Set composition settings
    comp.bgColor = [0.05, 0.05, 0.1]; // Dark blue background
    
    // Create main solid layer for base
    var baseLayer = comp.layers.addSolid([0.1, 0.1, 0.15], "Base Layer", 1080, 1920, 1);
    
    // Apply Lumetri Color effect
    var lumetriEffect = baseLayer.Effects.addProperty("ADBE Lumetri Color");
    var lumetri = lumetriEffect.property("ADBE Lumetri Color");
    
    // Increase warmth (+15) and vibrance (+20)
    lumetri.property("ADBE Lumetri Color Warmth").setValue(15);
    lumetri.property("ADBE Lumetri Color Vibrance").setValue(20);
    
    // Add CC Vignette effect
    var vignetteEffect = baseLayer.Effects.addProperty("ADBE CC Vignette");
    var vignette = vignetteEffect.property("ADBE CC Vignette");
    vignette.property("ADBE CC Vignette Amount").setValue(30);
    
    // Create geometric frame layer
    var frameLayer = comp.layers.addSolid([0.72, 0.45, 0.2], "Bronze Frame", 1080, 1920, 1);
    
    // Create mask for geometric split reveal
    var mask = frameLayer.Masks.addProperty("ADBE Mask Shape");
    var maskShape = mask.property("ADBE Mask Shape");
    
    // Create split box reveal animation
    var maskPath = new Shape();
    maskPath.vertices = [
        [540, 0],    // Top center
        [1080, 0],   // Top right
        [1080, 960], // Middle right
        [540, 960],  // Middle center
        [0, 960],    // Middle left
        [0, 0]       // Top left
    ];
    maskPath.inTangents = [];
    maskPath.outTangents = [];
    maskPath.closed = true;
    
    // Animate the mask for split reveal effect
    var maskKeyframes = [
        {time: 0, value: new Shape()}, // Start with no mask
        {time: 1, value: maskPath}     // Full split at 1 second
    ];
    
    maskShape.setValueAtTime(0, maskKeyframes[0].value);
    maskShape.setValueAtTime(1, maskKeyframes[1].value);
    
    // Add elastic ease to mask animation
    maskShape.setTemporalEaseAtKey(1, [new KeyframeEase(0, 33.33), new KeyframeEase(0, 33.33)]);
    
    // Create particle system layer for golden dust
    var particleLayer = comp.layers.addSolid([1, 0.85, 0], "Golden Dust", 1080, 1920, 1);
    particleLayer.opacity.setValue(60);
    
    // Add CC Particle World effect for golden dust
    var particleEffect = particleLayer.Effects.addProperty("ADBE CC Particle World");
    var particles = particleEffect.property("ADBE CC Particle World");
    
    // Configure particle system with enhanced settings
    particles.property("ADBE CC Particle World Birth Rate").setValue(3); // Increased for more dramatic effect
    particles.property("ADBE CC Particle World Longevity").setValue(4); // Longer particle life
    particles.property("ADBE CC Particle World Velocity").setValue(0.8); // More dynamic movement
    particles.property("ADBE CC Particle World Gravity").setValue(-0.3); // Stronger upward motion
    particles.property("ADBE CC Particle World Particle Type").setValue(4); // Faded Sphere
    particles.property("ADBE CC Particle World Birth Size").setValue(0.4); // Slightly larger particles
    particles.property("ADBE CC Particle World Death Size").setValue(0.05); // Smaller fade out
    
    // Set particle color to gold
    particles.property("ADBE CC Particle World Birth Color").setValue([1, 0.84, 0]);
    particles.property("ADBE CC Particle World Death Color").setValue([1, 0.9, 0.3]);
    
    // Add glow effect to particles for enhanced cinematic look
    var glowEffect = particleLayer.Effects.addProperty("ADBE Glow");
    var glow = glowEffect.property("ADBE Glow");
    glow.property("ADBE Glow Intensity").setValue(2);
    glow.property("ADBE Glow Radius").setValue(20);
    glow.property("ADBE Glow Colors").setValue(1); // A & B Colors
    glow.property("ADBE Glow Color A").setValue([1, 0.84, 0]);
    glow.property("ADBE Glow Color B").setValue([1, 0.9, 0.3]);
    
    // Animate particle system timing
    particleLayer.inPoint = 0.5;
    particleLayer.outPoint = 3;
    
    // Create text layer for main title
    var titleLayer = comp.layers.addText("TROY'S FATE");
    var titleText = titleLayer.property("Source Text");
    var titleTextDoc = titleText.value;
    
    // Configure title text styling
    titleTextDoc.fontSize = 85;
    titleTextDoc.font = "Bebas Neue";
    titleTextDoc.fillColor = [0, 0.9, 1]; // Cyan color
    titleTextDoc.strokeColor = [1, 0.84, 0]; // Gold stroke
    titleTextDoc.strokeWidth = 4;
    titleTextDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
    
    titleText.setValue(titleTextDoc);
    
    // Add drop shadow effect to title
    var titleShadowEffect = titleLayer.Effects.addProperty("ADBE Drop Shadow");
    var titleShadow = titleShadowEffect.property("ADBE Drop Shadow");
    titleShadow.property("ADBE Drop Shadow Distance").setValue(8);
    titleShadow.property("ADBE Drop Shadow Softness").setValue(15);
    titleShadow.property("ADBE Drop Shadow Opacity").setValue(80);
    titleShadow.property("ADBE Drop Shadow Color").setValue([0, 0, 0]);
    
    // Position title at top center (safe zone)
    titleLayer.transform.position.setValue([540, 200]);
    
    // Add swish pan animation to title
    var titlePosition = titleLayer.transform.position;
    titlePosition.setValueAtTime(0, [540, -100]); // Start off-screen
    titlePosition.setValueAtTime(0.5, [540, 200]); // End at final position
    
    // Add elastic ease
    titlePosition.setTemporalEaseAtKey(0.5, [new KeyframeEase(0, 33.33), new KeyframeEase(0, 33.33)]);
    
    // Add subtle rotation animation for dynamic effect
    var titleRotation = titleLayer.transform.rotation;
    titleRotation.setValueAtTime(0, 5); // Start slightly rotated
    titleRotation.setValueAtTime(0.5, 0); // End at normal rotation
    titleRotation.setTemporalEaseAtKey(0.5, [new KeyframeEase(0, 33.33), new KeyframeEase(0, 33.33)]);
    
    // Create subtitle layer
    var subtitleLayer = comp.layers.addText("One Choice • One Chest");
    var subtitleText = subtitleLayer.property("Source Text");
    var subtitleTextDoc = subtitleText.value;
    
    // Configure subtitle styling
    subtitleTextDoc.fontSize = 42;
    subtitleTextDoc.font = "Raleway SemiBold";
    subtitleTextDoc.fillColor = [1, 0.42, 0.42]; // Red color
    subtitleTextDoc.justification = ParagraphJustification.CENTER_JUSTIFY;
    
    subtitleText.setValue(subtitleTextDoc);
    
    // Position subtitle in lower third
    subtitleLayer.transform.position.setValue([540, 1600]);
    
    // Add type-on effect using scale wipe
    var subtitleScale = subtitleLayer.transform.scale;
    subtitleScale.setValueAtTime(2, [0, 0]); // Start scaled down
    subtitleScale.setValueAtTime(4.5, [100, 100]); // End at full scale
    
    // Add CC Scale Wipe effect for type-on animation
    var scaleWipeEffect = subtitleLayer.Effects.addProperty("ADBE CC Scale Wipe");
    var scaleWipe = scaleWipeEffect.property("ADBE CC Scale Wipe");
    scaleWipe.property("ADBE CC Scale Wipe Completion").setValueAtTime(2, 0);
    scaleWipe.property("ADBE CC Scale Wipe Completion").setValueAtTime(4.5, 100);
    
    // Create texture overlay layer
    var textureLayer = comp.layers.addSolid([0.72, 0.45, 0.2], "Bronze Texture", 1080, 1920, 1);
    
    // Add Fractal Noise effect
    var fractalEffect = textureLayer.Effects.addProperty("ADBE Fractal Noise");
    var fractal = fractalEffect.property("ADBE Fractal Noise");
    
    // Configure fractal noise
    fractal.property("ADBE Fractal Noise Fractal Type").setValue(1); // Turbulent Smooth
    fractal.property("ADBE Fractal Noise Noise Type").setValue(1); // Spline
    fractal.property("ADBE Fractal Noise Contrast").setValue(150);
    fractal.property("ADBE Fractal Noise Brightness").setValue(50);
    fractal.property("ADBE Fractal Noise Scale").setValue(50);
    fractal.property("ADBE Fractal Noise Complexity").setValue(4);
    
    // Animate fractal evolution
    var evolution = fractal.property("ADBE Fractal Noise Evolution");
    evolution.setValueAtTime(0, 0);
    evolution.setValueAtTime(5, 360); // Full rotation over 5 seconds
    
    // Set blend mode to overlay and reduce opacity
    textureLayer.blendingMode = BlendingMode.OVERLAY;
    textureLayer.opacity.setValue(15);
    
    // Create audio layer for sound design
    var audioLayer = comp.layers.addSolid([0, 0, 0], "Audio Guide", 1080, 1920, 1);
    audioLayer.enabled = false; // Disable visual, keep for reference
    
    // Add markers for sound cues
    comp.markerProperty.setValueAtTime(0, new MarkerValue("Deep cinematic brass hit"));
    comp.markerProperty.setValueAtTime(1, new MarkerValue("Metallic chest creak"));
    comp.markerProperty.setValueAtTime(2.5, new MarkerValue("Soft whoosh for text"));
    
    // Set up layer ordering and timing
    var layers = comp.layers;
    layers[0].name = "Audio Guide";
    layers[1].name = "Bronze Texture";
    layers[2].name = "One Choice • One Chest";
    layers[3].name = "TROY'S FATE";
    layers[4].name = "Golden Dust";
    layers[5].name = "Bronze Frame";
    layers[6].name = "Base Layer";
    
    // Add subtle camera shake for cinematic effect
    var camera = comp.layers.addCamera("Cinematic Camera", [540, 960]);
    var cameraPosition = camera.transform.position;
    
    // Add subtle shake animation (optimized with expression)
    cameraPosition.setValue([540, 960, -1000]);
    
    // Add wiggle expression for more efficient camera shake
    var shakeExpression = "wiggle(0.5, 3) + [540, 960, -1000]";
    cameraPosition.expression = shakeExpression;
    
    // Set composition to active
    app.project.activeItem = comp;
    
        // Alert completion
        alert("Chest Opening Scene created successfully!\n\nComposition: " + comp.name + "\nResolution: 1080x1920\nDuration: 5 seconds\nFrame Rate: 30fps\n\nAll effects and animations have been applied with modern styling.");
        
    } catch (error) {
        // Error handling
        alert("Error creating Chest Opening Scene:\n\n" + error.message + "\n\nPlease check your After Effects version and try again.");
        app.endUndoGroup();
    }
    
})();