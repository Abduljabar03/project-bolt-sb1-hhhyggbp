import cv2
import numpy as np
from PIL import Image
import requests
from io import BytesIO
import os

# Create public folder if it doesn't exist
public_folder = os.path.join(os.path.dirname(__file__), 'project', 'public')
os.makedirs(public_folder, exist_ok=True)

# Download the plane wing image
print("Downloading plane wing image...")
url = 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1920'
response = requests.get(url)
img = Image.open(BytesIO(response.content))

# Convert to numpy array
img_array = np.array(img)
height, width = img_array.shape[:2]

# Create video writer
output_path = os.path.join(public_folder, 'plane-wing-boomerang.mp4')
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
fps = 30
out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

print(f"Creating video: {output_path}")

# Create boomerang effect: forward and backward
frames = []
num_frames = 120  # 4 seconds at 30 fps

# Forward animation with subtle zoom and pan
print("Generating frames...")
for i in range(num_frames):
    # Create a subtle zoom effect
    zoom_factor = 1.0 + (i / num_frames) * 0.1
    h, w = img_array.shape[:2]
    
    # Calculate crop box for zoom
    new_h, new_w = int(h / zoom_factor), int(w / zoom_factor)
    start_y, start_x = (h - new_h) // 2, (w - new_w) // 2
    cropped = img_array[start_y:start_y+new_h, start_x:start_x+new_w]
    
    # Resize back to original size
    frame = cv2.resize(cropped, (w, h))
    frame = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)
    frames.append(frame)

# Backward animation (boomerang effect)
for i in range(num_frames-1, 0, -1):
    zoom_factor = 1.0 + (i / num_frames) * 0.1
    h, w = img_array.shape[:2]
    
    new_h, new_w = int(h / zoom_factor), int(w / zoom_factor)
    start_y, start_x = (h - new_h) // 2, (w - new_w) // 2
    cropped = img_array[start_y:start_y+new_h, start_x:start_x+new_w]
    
    frame = cv2.resize(cropped, (w, h))
    frame = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)
    frames.append(frame)

# Write all frames to video
for i, frame in enumerate(frames):
    out.write(frame)
    if (i + 1) % 30 == 0:
        print(f"Processed {i + 1}/{len(frames)} frames")

out.release()
print(f"Video created successfully: {output_path}")
print(f"Total frames: {len(frames)}")
print(f"Duration: {len(frames) / fps:.1f} seconds")
