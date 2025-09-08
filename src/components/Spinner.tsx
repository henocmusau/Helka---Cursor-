import { LoaderCircle } from 'lucide-react'
import React from 'react'

type Props = {
    otherStyle?: string
}
export default function Spinner({ otherStyle }: Props) {
    return (
        <LoaderCircle className={`animate-spin w-6 h-6 ${otherStyle}`} />
    )
}
