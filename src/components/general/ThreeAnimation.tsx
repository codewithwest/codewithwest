'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const ThreeAnimation: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;
    
    const isDark = resolvedTheme === 'dark';
    const clock = new THREE.Clock();

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 4;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Ensure we don't add multiple canvases
    if (mountRef.current.children.length > 0) {
        mountRef.current.innerHTML = '';
    }
    mountRef.current.appendChild(renderer.domElement);
    
    // Geometry and Material
    const geometry = new THREE.IcosahedronGeometry(1.5, 0);
    const material = new THREE.MeshStandardMaterial({
      color: isDark ? 0xFFDA63 : 0x2563eb, // Primary-like colors
      emissive: isDark ? 0xFFDA63 : 0x2563eb,
      emissiveIntensity: isDark ? 0.4 : 0.6,
      metalness: 0.1,
      roughness: 0.2,
      wireframe: true,
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.1 : 0.3);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(isDark ? 0x2563eb : 0xFFDA63, 2, 100);
    pointLight.position.set(2, 3, 3);
    scene.add(pointLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle rotation and floating motion
      shape.rotation.y = 0.5 * elapsedTime;
      shape.rotation.x = 0.3 * elapsedTime;
      shape.position.y = Math.sin(elapsedTime * 0.5) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
        if (mountRef.current) {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeAnimation;
