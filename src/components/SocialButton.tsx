import type { ComponentType, SVGProps } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export interface SocialPlatform {
  id: string
  name: string
  handle: string
  description: string
  href: string
  brandColor: string
  hoverShadow: string
  iconBg: string
  iconColor: string
  gradient?: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

interface SocialButtonProps {
  platform: SocialPlatform
  index: number
}

export default function SocialButton({ platform, index }: SocialButtonProps) {
  const { Icon } = platform

  return (
    <motion.a
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.45 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#1C2B54]/8 bg-white p-4 pr-5 shadow-[0_2px_14px_rgba(28,43,84,0.06)] transition-all duration-300 hover:border-transparent hover:shadow-xl sm:p-5 sm:pr-6 ${platform.hoverShadow}`}
    >
      {/* brand gradient hairline revealed on hover */}
      <span
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to left, ${platform.brandColor}14, transparent 55%)`,
        }}
      />
      {/* leading accent bar (right side in RTL) */}
      <span
        className="absolute right-0 top-1/2 h-10 w-1.5 -translate-y-1/2 rounded-l-full transition-all duration-300 group-hover:h-[70%]"
        style={{ background: platform.gradient ?? platform.brandColor }}
      />

      {/* icon tile */}
      <span
        className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 sm:h-16 sm:w-16"
        style={{ backgroundColor: platform.iconBg }}
      >
        <Icon
          className="h-7 w-7 transition-colors duration-300 sm:h-8 sm:w-8"
          style={{
            color: platform.iconColor,
            ...(platform.gradient ? { backgroundImage: platform.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : {}),
          }}
        />
      </span>

      {/* text */}
      <span className="relative z-10 flex min-w-0 flex-1 flex-col">
        <span className="font-cairo text-lg font-extrabold text-[#1C2B54] sm:text-xl">{platform.name}</span>
        <span className="truncate text-sm text-[#5a6b8c]">{platform.description}</span>
        <span className="mt-0.5 text-xs font-medium tracking-wide" style={{ color: platform.brandColor }} dir="ltr">
          {platform.handle}
        </span>
      </span>

      {/* arrow */}
      <span
        className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1C2B54]/[0.04] text-[#1C2B54]/50 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-white"
      >
        <span
          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: platform.gradient ?? platform.brandColor }}
        />
        <ArrowLeft className="relative h-5 w-5" />
      </span>
    </motion.a>
  )
}
