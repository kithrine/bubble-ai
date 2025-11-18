import Orb from "../components/react-bits+motion/Orb"

const HomeScreen = () => {
  return (
    <>
      <div className="min-h-screen bg-base-100 pt-16">
        <div className="relative z-0" style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>

        <div className="text-in-orb md:ps-65 md:hs-overlay-minified:ps-13">
          <h1 className="font-chango text-5xl font-bold">BubbleAI</h1>
        </div>
      </div>
    </>
  )
}

export default HomeScreen