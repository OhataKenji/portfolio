import cn from 'classnames'
import Link from 'next/link'
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
  const image = (
    <img
      src={basePath + src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/product/${slug}`} href="/product/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
