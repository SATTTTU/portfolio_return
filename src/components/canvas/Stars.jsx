import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ count = 2500, ...props }) => {
  const ref = useRef();

  const sphere = useMemo(
    () => random.inSphere(new Float32Array(count), { radius: 1.15 }),
    [count]
  );

  useFrame((state, delta) => {
    if (!ref.current) return;
    // Slower rotation = calmer background (better UX)
    ref.current.rotation.x -= delta / 35;
    ref.current.rotation.y -= delta / 55;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#b8b5ff'
          opacity={0.55}
          size={0.0018}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1] pointer-events-none'>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        // Keep it crisp but not expensive on mobile
        dpr={isMobile ? [1, 1.2] : [1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
      >
        <Suspense fallback={null}>
          <Stars count={isMobile ? 1400 : 2600} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
