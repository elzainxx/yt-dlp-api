# Chest Opening Scene - After Effects Script

## Overview
This After Effects ExtendScript creates a cinematic chest opening scene with modern styling, dynamic geometric effects, particle systems, and professional text animations. The script is optimized for mobile-first design (1080x1920 resolution) and includes enhanced error handling and performance optimizations.

## Features

### Visual Effects
- **Geometric Split Reveal**: Dynamic mask animation creating a chest-opening effect
- **Golden Particle System**: Enhanced CC Particle World with glow effects
- **Cinematic Camera Shake**: Optimized wiggle expression for realistic movement
- **Bronze Texture Overlay**: Animated fractal noise for metallic appearance
- **Color Grading**: Lumetri Color effects with warmth and vibrance adjustments
- **Vignette Effect**: CC Vignette for cinematic depth

### Text Animations
- **Main Title**: "TROY'S FATE" with cyan fill and gold stroke
  - Swish pan animation from off-screen
  - Subtle rotation animation
  - Drop shadow for enhanced readability
- **Subtitle**: "One Choice • One Chest" with type-on effect
  - Scale wipe animation
  - Positioned in lower third

### Audio Markers
The script includes audio markers for sound design:
- 0s: Deep cinematic brass hit
- 1s: Metallic chest creak
- 2.5s: Soft whoosh for text

## Technical Specifications
- **Resolution**: 1080x1920 (9:16 aspect ratio)
- **Frame Rate**: 30fps
- **Duration**: 5 seconds
- **Background Color**: Dark blue (#0D0D1A)
- **Composition Name**: "Chest Opening Scene"

## Usage Instructions

### Prerequisites
- Adobe After Effects CC 2018 or later
- An open After Effects project
- Required fonts: Bebas Neue, Raleway SemiBold (or system defaults)

### Installation
1. Open After Effects
2. Create or open a project
3. Go to File > Scripts > Run Script File
4. Select `chest_opening_scene.jsx`
5. The script will automatically create the composition

### Customization Options

#### Colors
- **Background**: Modify `comp.bgColor` (line 25)
- **Base Layer**: Change `[0.1, 0.1, 0.15]` (line 28)
- **Frame Color**: Adjust `[0.72, 0.45, 0.2]` (line 29)
- **Title Fill**: Modify `[0, 0.9, 1]` (line 118)
- **Title Stroke**: Change `[1, 0.84, 0]` (line 119)
- **Subtitle Color**: Adjust `[1, 0.42, 0.42]` (line 120)

#### Text Content
- **Main Title**: Change "TROY'S FATE" (line 111)
- **Subtitle**: Modify "One Choice • One Chest" (line 151)

#### Animation Timing
- **Title Entry**: Adjust keyframes at 0s and 0.5s (lines 138-139)
- **Subtitle Entry**: Modify timing at 2s and 4.5s (lines 130-131, 136-137)
- **Particle Duration**: Change `inPoint` and `outPoint` (lines 107-108)

#### Particle System
- **Birth Rate**: Modify `setValue(3)` (line 85)
- **Longevity**: Adjust `setValue(4)` (line 86)
- **Velocity**: Change `setValue(0.8)` (line 87)
- **Gravity**: Modify `setValue(-0.3)` (line 88)

## Performance Optimizations

### Implemented Features
- **Undo Group Management**: Single undo operation for entire script
- **Expression-Based Camera Shake**: Replaced 150 keyframes with efficient wiggle expression
- **Error Handling**: Comprehensive try-catch blocks with user-friendly messages
- **Validation**: Project and composition existence checks

### Memory Usage
- Optimized particle system settings for balanced performance
- Efficient layer ordering and timing
- Minimal keyframe usage where possible

## Error Handling
The script includes robust error handling for:
- Missing After Effects project
- Composition creation failures
- Version compatibility issues
- General script execution errors

## Layer Structure
```
Audio Guide (disabled)
Bronze Texture (overlay blend mode)
One Choice • One Chest (subtitle)
TROY'S FATE (main title)
Golden Dust (particles with glow)
Bronze Frame (geometric mask)
Base Layer (background with effects)
Cinematic Camera (with shake)
```

## Troubleshooting

### Common Issues
1. **"No After Effects project is open"**
   - Solution: Create or open a project before running the script

2. **Font not found**
   - Solution: Install Bebas Neue and Raleway SemiBold, or modify font names in the script

3. **Effects not available**
   - Solution: Ensure you have After Effects CC 2018+ with all effects installed

4. **Performance issues**
   - Solution: Close other compositions, reduce particle birth rate, or lower resolution

### Performance Tips
- Run the script on a clean project for best performance
- Close unnecessary panels and compositions
- Ensure sufficient RAM (8GB+ recommended)
- Use GPU acceleration if available

## Version History
- **v1.0**: Initial release with basic chest opening scene
- **v1.1**: Added error handling and performance optimizations
- **v1.2**: Enhanced particle system with glow effects
- **v1.3**: Added title rotation animation and drop shadow

## Support
For issues or feature requests, please check:
1. After Effects version compatibility
2. Required fonts installation
3. Project settings and memory allocation
4. Script execution permissions

## License
This script is provided as-is for educational and commercial use. Modify and distribute freely.