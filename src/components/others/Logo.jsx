import Orb  from '../Bits/Background/Orb/Orb.jsx'

const Logo = () => {
  return (
     <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden">
        {/* Orb Background */}
        <Orb hue={200} />

        {/* Text in the center */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg pointer-events-none">
          Darshil Vadoliya
        </div>
      </div>
  )
}

export default Logo