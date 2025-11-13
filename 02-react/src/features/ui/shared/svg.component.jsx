export function SVG({ height = 24, width = 24, fill = 'none', stroke = 'currentColor', strokeLinecap = 'round', strokeLinejoin = 'round', strokeWidth = 1, viewBox, children }) {
	return <svg xmlns='http://www.w3.org/2000/svg' height={height} width={width} fill={fill} stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth} viewBox={viewBox}>{children}</svg>
}
