import { spawn } from 'child_process'
import Link from 'next/link'
import SectionTitle from '../components/section-title'
import MiscItem from './misc-item'

const items = [
    {
        'title': 'MITの深層学習の講義レポジトリにある正規表現の修正プルリクエスト',
        'child': (<span className="text-lg leading-relaxed mb-4">Juliaで講義中のコードを再実装しようとしていた際に発見した。<Link href={"https://github.com/aamini/introtodeeplearning/pull/65"}><a className="hover:underline">(リンク)</a></Link></span>)
    },
    {
        'title': 'サバイバルTypeScriptの誤字修正プルリクエスト',
        'child': (<span className="text-lg leading-relaxed mb-4">TypeScript勉強中に発見した。<Link href={'https://github.com/yytypescript/book/pull/13'}><a className="hover:underline">(リンク)</a></Link></span>)
    },
    {
        'title': 'ECサイトの脆弱性報告',
        'child': (<span className="text-lg leading-relaxed mb-4">地元の模型店が利用しているレンタルサーバーが提供するEC機能に商品価格を変更可能なバグがあることを発見し、IPA報告して受理された。</span>)
    },
]

const Misc = () => {
    const miscIterms = items.map(({ title, child }) => (<MiscItem key={title} title={title}>{child}</MiscItem>))
    return (
        <section>
            <SectionTitle>Misc</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                {miscIterms}
            </div>
        </section>
    )
}

export default Misc