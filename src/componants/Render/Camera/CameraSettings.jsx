import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

// import { GUI } from "dat.gui";

function CameraSettings() {
  // useEffect(() => {
  //   const gui = new GUI();
  //   const cameraFolder = gui.addFolder("Camera");
  //   cameraFolder.add(cameraRef.current.position, "x", -500, 500);
  //   cameraFolder.add(cameraRef.current.position, "y", -500, 500);
  //   cameraFolder.add(cameraRef.current.position, "z", -500, 500);
  //   cameraFolder.open();

  //   const rotationFolder = gui.addFolder("Rotation Camera");
  //   rotationFolder.add(cameraRef.current.rotation, "x", 0, Math.PI * 2);
  //   rotationFolder.add(cameraRef.current.rotation, "y", 0, Math.PI * 2);
  //   rotationFolder.add(cameraRef.current.rotation, "z", 0, Math.PI * 2);
  //   rotationFolder.open();

  //   return () => {
  //     gui.destroy();
  //   };
  // }, []);

  return (
    <>
      <OrbitControls
        autoRotate={false}
        autoRotateSpeed={0.5}
        enableZoom={false}
        enablePan={true}
        enableDamping={true}
        dampingFactor={0.04}
        minDistance={0}
        maxDistance={1000}
        enableRotate={true}
        // maxPolarAngle={Math.PI / 2.3}
        target={[0, 0, 0]}
      />

      <PerspectiveCamera
        makeDefault
        position={[0, 0, 5]}
        rotation={[0, 0, 0]}
        fov={innerWidth < 768 ? 100 : 75}
        near={1}
        far={1500}
        shadows
      />
    </>
  );
}

export default CameraSettings;
