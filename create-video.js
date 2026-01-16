const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create public folder
const publicFolder = path.join(__dirname, 'project', 'public');
if (!fs.existsSync(publicFolder)) {
  fs.mkdirSync(publicFolder, { recursive: true });
}

// Download image and create animated video using ffmpeg
console.log('Creating boomerang video from plane wing image...');

const imageUrl = 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1920';
const tempImage = path.join(publicFolder, 'temp-plane.jpg');
const outputVideo = path.join(publicFolder, 'plane-wing-boomerang.mp4');

// Download the image
https.get(imageUrl, (response) => {
  const fileStream = fs.createWriteStream(tempImage);
  response.pipe(fileStream);
  
  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Image downloaded. Creating video...');
    
    try {
      // Use ffmpeg to create a zooming boomerang video
      // This creates frames with zoom effect and reverses them for boomerang effect
      const command = `ffmpeg -loop 1 -i "${tempImage}" -vf "scale=1920:1080,zoompan=z='min(zoom+0.0015,1.5)':d=120:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)',reverse" -c:v libx264 -pix_fmt yuv420p -y "${outputVideo}"`;
      
      execSync(command, { stdio: 'inherit' });
      console.log(`Video created successfully: ${outputVideo}`);
      
      // Clean up temp image
      fs.unlinkSync(tempImage);
      console.log('Temp file cleaned up');
    } catch (error) {
      console.error('Error creating video with ffmpeg:', error.message);
      console.log('\nAlternative: Please install FFmpeg from https://ffmpeg.org/download.html');
    }
  });
}).on('error', (err) => {
  console.error('Error downloading image:', err);
  fs.unlink(tempImage, () => {});
});
