import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const SectionTitle = (props: Props) => {
    return (<h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        {props.children}
    </h2>)
}

export default SectionTitle