import { ReactNode } from "react"

interface TextProps {
    tag?: 'p' | 'h1' | 'h2' | 'h3'
    variant?: 'heading-1' | 'heading-2' | 'subtitle-1' | 'subtitle-2' | 'body-1' | 'body-small'
    additionalStyle?: string
    children: ReactNode
}
export default function ThemedText({ children, tag, variant, additionalStyle }: TextProps) {
    const style = `${variant ?? 'body-1'} ${additionalStyle}`

    if (tag === 'h1') {
        return <h1 className={style}>{children}</h1>
    } else if (tag === 'h2') {
        return <h2 className={style}>{children}</h2>
    } else if (tag === 'h3') {
        return <h3 className={style}>{children}</h3>
    } else {
        return <p className={style}>{children}</p>
    }
}
