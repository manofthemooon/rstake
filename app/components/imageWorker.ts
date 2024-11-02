self.onmessage = (e) => {
  const { data, width, height, density, scale } = e.data;
  const points: number[] = [];

  for (let y = 0; y < height; y += density) {
    for (let x = 0; x < width; x += density) {
      const i = (Math.floor(y) * width + Math.floor(x)) * 4;
      const alpha = data[i + 3];
      const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
      
      if (alpha > 128 && brightness < 128) {
        const xPos = ((x - width / 2) / width) * scale;
        const yPos = ((height / 2 - y) / height) * scale;
        const zPos = (Math.random() - 0.5) * 0.03;
        
        points.push(xPos, yPos, zPos);
      }
    }
  }

  self.postMessage(points);
}; 