interface SizedBoxProps {
	h: string;
}

export const SizedBox = (props: SizedBoxProps) => {
	const { h } = props;
	return (
		<div style={{height: h, width: '100%'}}/>
	)
}