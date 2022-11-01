import trianglify from 'trianglify';

export const trianglifyBackground = () => {
  const pattern = trianglify({
    width: window.innerWidth,
    height: window.innerHeight,
    cellSize: 100,
    xColors: ['#0B2631', '#000000', '#000000', '#010F1C'],
    yColors: ['#0B2631', '#000000', '#010F1C'],
  });
  const trianglifyCanvas = pattern.toCanvas();
  trianglifyCanvas.id = 'trianglify';
  document.body.insertBefore(trianglifyCanvas, document.body.firstChild);
};
