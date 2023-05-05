interface cCardProps {
	className?: string;
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface cCardChildrenProps {
	className?: string;
	children?: React.ReactNode;
}


export const CCard = (props:cCardProps) => {
	const { className, children } = props;

	return (
		<div 
			className={`
				bg-white
				dark:bg-zinc-600
				flex flex-col px-3
				rounded-lg
				border
				dark:border-zinc-500
				${className}
			`}
		>
			{children}
		</div>
	)
}

const Header = (props: cCardChildrenProps) => {
	const { children, className } = props;
	return (
		<div 
			className={`
				flex py-3 items-center
				${className}
			`}
		>
			{children}
		</div>
	)
}

const Body = (props: cCardChildrenProps) => {
	const { children, className } = props;
	return (
		<div 
			className={`
				flex py-2 flex-auto
				${className}
			`}
		>
			{children}
		</div>
	)
}

const Footer = (props: cCardChildrenProps) => {
	const { children, className } = props;
	return (
		<div 
			className={`
				flex py-2 flex-1
				${className}
			`}
		>
			{children}
		</div>
	)
}

CCard.Header = Header;
CCard.Body = Body;
CCard.Footer = Footer;

CCard.defalutProps = {

}