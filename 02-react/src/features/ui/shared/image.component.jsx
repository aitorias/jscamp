export function Image({ src, alt, width, height, className, style }) {
	return (
		<img src={src} alt={alt} width={width} height={height} className={className} style={style} />
	)
}
