/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useEffect } from "react";
import { useHelper, useDepthBuffer, SpotLight } from "@react-three/drei";
import { PointLightHelper } from "three";
import {
  EffectComposer,
  Vignette,
  Bloom,
  HueSaturation,
  SMAA,
  BrightnessContrast,
} from "@react-three/postprocessing";

function Environement() {
  return (
    <>
      <color attach="background" args={["#262626"]} />

      <ambientLight intensity={10} color={0xa0a0fc} />

      <directionalLight intensity={6.5} color={0xe8c37b} position={[0, 0, 0]} />

      <EffectComposer disableNormalPass multisampling={false}>
        <Bloom
          luminanceThreshold={0.1}
          radius={0.9}
          levels={3}
          intensity={10}
          mipmapBlur
        />
        <Vignette offset={0.4} darkness={0.3} eskil={false} />
        {/* <HueSaturation hue={0} saturation={0} /> */}
        {/* <SMAA /> */}
      </EffectComposer>
    </>
  );
}

export default Environement;
