self.onmessage = (e) => {
  const { data, width, height, density, scale } = e.data;
  const points: number[] = [];
  const threshold = 128;
  const step = Math.max(1, Math.floor(1 / density)); // Шаг для контроля плотности точек

  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const i = (y * width + x) * 4;
      
      // Проверяем альфа-канал (прозрачность)
      if (data[i + 3] < 10) continue;
      
      const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
      
      if (brightness < threshold) {
        points.push(
          (x - width / 2) * scale / width,
          -(y - height / 2) * scale / height,
          0
        );
      }
    }
  }

  self.postMessage(points);
}; 