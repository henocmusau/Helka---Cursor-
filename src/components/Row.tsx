import { HTMLAttributes } from "react";

type RowProps = HTMLAttributes<HTMLDivElement>

export default function Row({ style, ...rest }: RowProps) {
    return (
        <div style={{ ...style, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} {...rest} />
    )
}

const styles = {
    display: 'flex',
}