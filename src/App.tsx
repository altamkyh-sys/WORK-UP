import { motion } from 'framer-motion'
import BackgroundDecor from './components/BackgroundDecor'
import SocialButton, { type SocialPlatform } from './components/SocialButton'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './components/icons'

const socialPlatforms: SocialPlatform[] = [
  {
    id: 'instagram',
    name: 'إنستغرام',
    handle: '@workupacademy.sy',
    description: 'تابع أحدث الصور والمحتوى الحصري',
    href: 'https://www.instagram.com/workupacademy.sy?igsh=Nndxamp4Z2RjNWFy&igsi=Nndxamp4Z2RjNWFy',
    brandColor: '#dd2a7b',
    hoverShadow: 'hover:shadow-[0_16px_40px_-12px_rgba(221,42,123,0.35)]',
    iconBg: 'rgba(221,42,123,0.10)',
    iconColor: '#dd2a7b',
    gradient: 'linear-gradient(45deg, #f58529, #dd2a7b 55%, #8134af)',
    Icon: InstagramIcon,
  },
  {
    id: 'whatsapp',
    name: 'واتساب',
    handle: '+963 965 868 630',
    description: 'تواصل معنا مباشرة وسنرد عليك فورًا',
    href: 'https://wa.me/963965868630',
    brandColor: '#128C7E',
    hoverShadow: 'hover:shadow-[0_16px_40px_-12px_rgba(37,211,102,0.35)]',
    iconBg: 'rgba(37,211,102,0.12)',
    iconColor: '#128C7E',
    Icon: WhatsAppIcon,
  },
  {
    id: 'facebook',
    name: 'فيسبوك',
    handle: 'Work Up Academy',
    description: 'انضم إلى مجتمعنا وكن على اطلاع دائم',
    href: 'https://www.facebook.com/share/18tUcta8bA/',
    brandColor: '#1877F2',
    hoverShadow: 'hover:shadow-[0_16px_40px_-12px_rgba(24,119,242,0.35)]',
    iconBg: 'rgba(24,119,242,0.10)',
    iconColor: '#1877F2',
    Icon: FacebookIcon,
  },
]

export default function App() {
  return (
    <div dir="rtl" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#f6f9fa] font-tajawal text-[#1C2B54]">
      <BackgroundDecor />

      {/* top gradient ribbon in the logo palette */}
      <div className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-l from-[#1C2B54] via-[#00C0A5] to-[#1C2B54]" />

      <main className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center px-5 pb-12 pt-14 sm:pt-16">
        {/* ===== Logo card ===== */}
        <motion.div
          initial={{ opacity: 0, y: -24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-3xl border border-[#1C2B54]/8 bg-white px-8 py-9 shadow-[0_24px_60px_-20px_rgba(28,43,84,0.28)] sm:px-12 sm:py-11"
          >
            {/* subtle corner tints */}
            <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#00C0A5]/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-40 rounded-full bg-[#1C2B54]/8 blur-2xl" />

            <img
              src="/logo.png"
              alt="الشعار الرسمي"
              className="relative mx-auto w-full max-w-[22rem] select-none"
              draggable={false}
            />

            {/* bottom accent line */}
            <div className="relative mx-auto mt-7 flex items-center gap-3">
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#00C0A5]" />
              <span className="h-2 w-2 rounded-full bg-[#00C0A5]" />
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#00C0A5]" />
            </div>
          </motion.div>
        </motion.div>

        {/* ===== Tagline ===== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-center"
        >
          <p className="mx-auto max-w-md text-base leading-relaxed text-[#5a6b8c] sm:text-lg">
            كل طرق التواصل معنا في مكان واحد — تابعنا على منصاتنا الاجتماعية وكن دائمًا على مقربة
          </p>
        </motion.div>

        {/* ===== Social buttons ===== */}
        <section className="mt-9 flex w-full flex-col gap-4" aria-label="روابط التواصل الاجتماعي">
          {socialPlatforms.map((platform, index) => (
            <SocialButton key={platform.id} platform={platform} index={index} />
          ))}
        </section>
      </main>
    </div>
  )
}
