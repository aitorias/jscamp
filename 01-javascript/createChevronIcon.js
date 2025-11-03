export default function createChevronIcon(direction = 'left') {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');

	svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');

  const path1 = document.createElementNS(svgNS, 'path');

	path1.setAttribute('stroke', 'none');
  path1.setAttribute('d', 'M0 0h24v24H0z');
  path1.setAttribute('fill', 'none');

  const path2 = document.createElementNS(svgNS, 'path');
  const d = direction === 'left' ? 'M15 6l-6 6l6 6' : 'M9 6l6 6l-6 6';

	path2.setAttribute('d', d);

  svg.append(path1, path2);

	return svg;
}
