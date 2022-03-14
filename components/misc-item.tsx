import { ReactNode } from 'react'

type Props = {
    title: string,
    children: ReactNode
}

const MiscItem = (props: Props) => {
    return (
        <div>
            <h3 className="text-3xl mb-3 leading-snug">{props.title}</h3>
            <div>{props.children}</div>
        </div>)
}

export default MiscItem