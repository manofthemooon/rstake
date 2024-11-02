self.onmessage = (e) => {
  const { data, width, height, density, scale } = e.data;
  const points = [];

  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 0 && Math.random() < density) {
      const x = ((i / 4) % width - width / 2) * scale;
      const y = (Math.floor((i / 4) / width) - height / 2) * scale;
      points.push(x, -y, 0);
    }
  }

  self.postMessage(points);
}; 