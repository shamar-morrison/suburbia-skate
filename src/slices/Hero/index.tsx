import { FC } from 'react'
import { Content } from '@prismicio/client'
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from '@prismicio/react'
import { Bounded } from '@/app/components/bounded'
import { Heading } from '@/app/components/heading'
import { ButtonLink } from '@/app/components/button-link'
import { TallLogo } from '@/slices/Hero/tall-logo'
import { WideLogo } from '@/slices/Hero/wide-logo'

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink h-dvh overflow-hidden relative text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 flex items-center pt-20">
        <WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block" />
        <TallLogo className="w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden" />
      </div>

      <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
        <Heading className="relative max-w-2xl place-self-start" size="lg">
          <PrismicText field={slice.primary.heading} />
        </Heading>

        <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink
            field={slice.primary.button}
            icon="skateboard"
            size="lg"
            className="z-20 mt-2 block"
          >
            {slice.primary.button.text}
          </ButtonLink>
        </div>
      </div>
    </Bounded>
  )
}

export default Hero
