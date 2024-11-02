self.onmessage = (e) => {
  const { data, width, height, scale } = e.data;
  const points: number[] = [];
  const threshold = 128;

  for (let y = 0; y < height; y += 2) {
    let linePoints: number[] = [];
    let isDrawing = false;

    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;

      if (brightness < threshold) {
        linePoints.push(
          (x - width / 2) * scale / width,
          -(y - height / 2) * scale / height,
          0
        );
        isDrawing = true;
      } else if (isDrawing) {
        if (linePoints.length > 0) {
          points.push(...linePoints);
          points.push(...linePoints.slice(-3));
        }
        linePoints = [];
        isDrawing = false;
      }
    }

    if (linePoints.length > 0) {
      points.push(...linePoints);
    }
  }

  self.postMessage(points);
}; 