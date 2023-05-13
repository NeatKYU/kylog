interface cTextareaProps {
    rows?: number;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    className?: string;
    value?: string;
    placeHolder?: string;
}

export const CTextarea = (props: cTextareaProps) => {
    const { rows, onChange, className, value, placeHolder } = props;
    return (
        <textarea
            className={`resize-none rounded bg-white dark:bg-zinc-700 outline-none border p-2 ${className ?? ''}`}
            rows={rows}
            onChange={onChange}
            value={value}
            placeholder={placeHolder}
        ></textarea>
    );
};

CTextarea.defalutProps = {
    rows: 5,
    className: '',
};
