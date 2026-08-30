import { motion } from 'framer-motion'

const starTile = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'><g fill='none' stroke='#1C2B54' stroke-width='1'><path d='M48 8l9.4 21.6L80 20l-9.6 22.6L92 48l-21.6 5.4L80 76l-22.6-9.6L48 88l-9.4-21.6L16 76l9.6-22.6L4 48l21.6-5.4L16 20l22.6 9.6z'/><circle cx='48' cy='48' r='13'/></g></svg>`)

export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* geometric lattice */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: `url("data:image/svg+xml,${starTile}")`, backgroundSize: '96px 96px' }}
      />

      {/* soft color glows matched to the logo palette */}
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#00C0A5] opacity-[0.13] blur-[110px]" />
      <div className="absolute top-1/3 -right-48 h-[26rem] w-[26rem] rounded-full bg-[#1C2B54] opacity-[0.10] blur-[120px]" />
      <div className="absolute -bottom-48 left-1/4 h-[24rem] w-[24rem] rounded-full bg-[#00C0A5] opacity-[0.10] blur-[110px]" />

      {/* floating geometric rings */}
      <motion.div
        className="absolute top-24 right-[7%] h-16 w-16 rounded-full border-2 border-[#00C0A5]/20"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-28 left-[6%] h-24 w-24 rounded-full border-2 border-[#1C2B54]/10"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
      <motion.div
        className="absolute top-[46%] right-[13%] hidden h-6 w-6 rounded-full bg-[#00C0A5]/15 md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      />
    </div>
  )
}
