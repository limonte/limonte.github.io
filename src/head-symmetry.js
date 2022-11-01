// In SVG file there's only left half of the head, create the symmetrical right half programmatically
export const headSymmetry = (svg) => {
  const width = svg.offsetWidth;
  const svgDoc = svg.contentDocument;
  const symmetrySource = svgDoc.getElementById('symmetry-source');
  const symmetryTarget = svgDoc.getElementById('symmetry-target');

  const elementsToFlip = symmetrySource.querySelectorAll('path, polygon, line, circle');

  for (let i = 0; i < elementsToFlip.length; i++) {
    const original = elementsToFlip[i];
    const flipped = original.cloneNode(true);
    if (original.getAttribute('symmetry-id')) {
      flipped.setAttribute('id', original.getAttribute('symmetry-id'));
    }

    // flip line
    if (flipped.tagName === 'line') {
      const x1 = width - flipped.getAttribute('x1');
      const x2 = width - flipped.getAttribute('x2');
      flipped.setAttribute('x1', x1);
      flipped.setAttribute('x2', x2);

      // flip circle
    } else if (flipped.tagName === 'circle') {
      const cx = width - flipped.getAttribute('cx');
      flipped.setAttribute('cx', cx);

      // flip path, polygon
    } else {
      let attr;
      if (flipped.tagName === 'path') {
        attr = 'd';
      } else if (flipped.tagName === 'polygon') {
        attr = 'points';
      }

      let points = flipped.getAttribute(attr).split(' ');
      for (let j = 0; j < points.length; j++) {
        let x = points[j].match(/(\d+),/);
        if (x) {
          x = x[1];
        } else {
          continue;
        }
        x = width - x;
        points[j] = points[j].replace(/\d+,/, x + ',');
      }
      points = points.join(' ');
      flipped.setAttribute(attr, points);
    }

    symmetryTarget.appendChild(flipped);
  }
};
