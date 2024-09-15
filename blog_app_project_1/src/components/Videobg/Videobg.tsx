"use client";

// import { useRef, useEffect } from 'react';
import styles from "@/components/Videobg/Videobg.module.css";
// import videoBg from "/Users/saamyukkth/Nextjs-14-FullStack-App-project-1/blog_app_project_1/public/videobg4.mp4";

// const Videobg = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly typing the ref

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0.5; // Slow down the video to 50% speed
//     }
//   }, []);

//   return (
//     <div className={styles.videobg}>
//       <video
//         ref={videoRef}
//         src={videoBg}
//         autoPlay
//         muted
//         loop
//         className={styles.videoElement}
//       />
//     </div>
//   );
// }

// export default Videobg;


import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';

export const Videobg: React.FC = () => {
    return (
      <div className={styles.Videobg}>
        <Canvas style={{ height: '1000px', }}>
            <EthereumModel />
            <PerspectiveCamera
              makeDefault
              position={[-30, -30, 50]} // Adjust camera position
              fov={175} // Adjust field of view
            />
        </Canvas>
      </div>
    );
};
interface EthereumModelProps {
    // Define any props here if needed
}
export const EthereumModel: React.FC = () => {
    const myModel = useLoader(GLTFLoader, '/ethereum_3d_logo.glb');
    const modelRef = useRef<Mesh>(null);

    useFrame((_state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta / 2;
        }
    });

    return (
        <>
            <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={5000} />
            <pointLight position={[1, 1, 1]} color="#36e2e2" intensity={5000} />
            <primitive object={myModel.scene} ref={modelRef} scale={[1, 1, 1]}/>
        </>
    );
};
