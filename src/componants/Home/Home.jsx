/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Environement from "../Render/Environment/Environement";
import CameraSettings from "../Render/Camera/CameraSettings";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Canvas>
          <OrbitControls />
          <Environement />
          <CameraSettings />

          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}
