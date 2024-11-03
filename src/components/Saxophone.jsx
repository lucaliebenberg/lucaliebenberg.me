/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/saxophone.glb --transform 
Files: public/models/saxophone.glb [3.23MB] > /Users/_lucaliebenberg/Desktop/Coding/personal-portfolio-v2/saxophone-transformed.glb [272.56KB] (92%)
Author: ANDRIANIAINAToky (https://sketchfab.com/ANDRIANIAINAToky)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/saxophone-alto-08448f4bfbca474b80ba35a571648a27
Title: saxophone alto
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as THREE from 'three';

const Saxophone = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    // Animate position (up and down)
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  const { nodes, materials } = useGLTF('/models/saxophone-transformed.glb')

  // Enhance material brightness
  materials.gold_pure_material.metalness = 0.9;
  materials.gold_pure_material.roughness = 0.1;
  materials.gold_pure_material.envMapIntensity = 2;
  materials.gold_pure_material.color = new THREE.Color(1.2, 1, 0.4); // Brighter gold

  materials.silver_polished.metalness = 1;
  materials.silver_polished.roughness = 0.05;
  materials.silver_polished.envMapIntensity = 2.5;
  materials.silver_polished.color = new THREE.Color(1.2, 1.2, 1.2); // Brighter silver

  // Optional: Add emissive glow
  materials.gold_pure_material.emissive = new THREE.Color(0.2, 0.1, 0);
  materials.gold_pure_material.emissiveIntensity = 0.2;

  return (
    <group {...props} dispose={null} ref={targetRef}>
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Object_2.geometry} 
        material={materials.gold_pure_material} 
        rotation={[-Math.PI / 2, 0, 0]} 
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Object_3.geometry} 
        material={materials.silver_polished} 
        rotation={[-Math.PI / 2, 0, 0]} 
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Object_4.geometry} 
        material={materials.wire_006134006} 
        rotation={[-Math.PI / 2, 0, 0]} 
      />
      <mesh
        castShadow
        receiveShadow 
        geometry={nodes.Object_5.geometry} 
        material={materials.leather_05} 
        rotation={[-Math.PI / 2, 0, 0]} 
      />
    </group>
  )
}

useGLTF.preload('/models/saxophone-transformed.glb')

export default Saxophone;