import { motion } from 'framer-motion'

const MotionDiv = motion.div;
const MotionP = motion.p;

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="relative flex items-center justify-center mb-6">
                <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                <MotionDiv className="absolute w-10 h-10 border-4 border-t-transparent border-cyan-400 rounded-full" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }} />
            </div>

            <MotionP className="text-xl tracking-widest uppercase text-gray-700" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
                Loading, please wait...
            </MotionP>
        </div>
    )
}

export default Loading