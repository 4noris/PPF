'use client';

import { Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

function createRng(seed: number) {
  let state = seed >>> 0;

  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return reducedMotion;
}

interface GalaxyDiscProps {
  count: number;
  opacity: number;
  reducedMotion: boolean;
}

function GalaxyDisc({ count, opacity, reducedMotion }: GalaxyDiscProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  const { colors, positions } = useMemo(() => {
    const rng = createRng(3907);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const coreColor = new THREE.Color('#fff2c4');
    const blueArm = new THREE.Color('#8fb7ff');
    const greenArm = new THREE.Color('#baf6cf');
    const roseArm = new THREE.Color('#ff9ab3');
    const arms = 5;
    const maxRadius = 8.8;

    for (let i = 0; i < count; i += 1) {
      const armAngle = ((i % arms) / arms) * Math.PI * 2;
      const radius = Math.pow(rng(), 0.68) * maxRadius;
      const spin = radius * 0.72;
      const scatter = Math.pow(rng(), 2.3) * (rng() < 0.5 ? -1 : 1) * 1.18;
      const angle = armAngle + spin + (rng() - 0.5) * 0.25;
      const verticalDrift = (rng() - 0.5) * 0.34 * (1 - radius / maxRadius);
      const index = i * 3;

      positions[index] = Math.cos(angle) * radius + scatter;
      positions[index + 1] = verticalDrift + (rng() - 0.5) * 0.08;
      positions[index + 2] = Math.sin(angle) * radius + scatter * 0.58;

      const color = coreColor.clone();
      const armColor = i % 11 === 0 ? roseArm : i % 6 === 0 ? greenArm : blueArm;
      const edgeMix = Math.min(radius / maxRadius, 1);
      const brightness = 0.62 + rng() * 0.38;

      color.lerp(armColor, edgeMix * 0.86);
      colors[index] = color.r * brightness;
      colors[index + 1] = color.g * brightness;
      colors[index + 2] = color.b * brightness;
    }

    return { colors, positions };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current || reducedMotion) {
      return;
    }

    const elapsed = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = elapsed * 0.018 + state.pointer.x * 0.018;
    pointsRef.current.rotation.x = -0.34 + Math.sin(elapsed * 0.12) * 0.025 + state.pointer.y * 0.014;

    if (materialRef.current) {
      materialRef.current.opacity = opacity + Math.sin(elapsed * 0.82) * 0.025;
    }
  });

  return (
    <points ref={pointsRef} frustumCulled={false} position={[0, -0.15, -3.7]} rotation={[-0.34, 0.1, -0.16]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        opacity={opacity}
        size={0.026}
        sizeAttenuation
        toneMapped={false}
        transparent
        vertexColors
      />
    </points>
  );
}

interface StarShellProps {
  count: number;
  opacity: number;
  radius: number;
  reducedMotion: boolean;
  seed: number;
  size: number;
  speed: number;
}

function StarShell({ count, opacity, radius, reducedMotion, seed, size, speed }: StarShellProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { colors, positions } = useMemo(() => {
    const rng = createRng(seed);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const cool = new THREE.Color('#dfe9ff');
    const warm = new THREE.Color('#ffe4b8');
    const signal = new THREE.Color('#baf6cf');

    for (let i = 0; i < count; i += 1) {
      const index = i * 3;
      const theta = rng() * Math.PI * 2;
      const phi = Math.acos(2 * rng() - 1);
      const shellRadius = radius * (0.42 + rng() * 0.58);
      const color = cool.clone();
      const tint = rng();
      const brightness = 0.48 + rng() * 0.52;

      positions[index] = Math.sin(phi) * Math.cos(theta) * shellRadius;
      positions[index + 1] = Math.cos(phi) * shellRadius * 0.74;
      positions[index + 2] = Math.sin(phi) * Math.sin(theta) * shellRadius - 8;

      color.lerp(tint > 0.82 ? signal : warm, tint > 0.82 ? 0.28 : 0.18);
      colors[index] = color.r * brightness;
      colors[index + 1] = color.g * brightness;
      colors[index + 2] = color.b * brightness;
    }

    return { colors, positions };
  }, [count, radius, seed]);

  useFrame((state) => {
    if (!pointsRef.current || reducedMotion) {
      return;
    }

    const elapsed = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = elapsed * speed;
    pointsRef.current.rotation.x = Math.sin(elapsed * 0.08) * 0.035;
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        opacity={opacity}
        size={size}
        sizeAttenuation
        toneMapped={false}
        transparent
        vertexColors
      />
    </points>
  );
}

function GalaxyScene({ isDark, reducedMotion }: { isDark: boolean; reducedMotion: boolean }) {
  return (
    <>
      <GalaxyDisc count={isDark ? 3200 : 1900} opacity={isDark ? 0.7 : 0.18} reducedMotion={reducedMotion} />
      <StarShell
        count={isDark ? 1800 : 900}
        opacity={isDark ? 0.5 : 0.17}
        radius={22}
        reducedMotion={reducedMotion}
        seed={8821}
        size={0.028}
        speed={0.006}
      />
      <StarShell
        count={isDark ? 700 : 320}
        opacity={isDark ? 0.8 : 0.22}
        radius={13}
        reducedMotion={reducedMotion}
        seed={1741}
        size={0.042}
        speed={-0.01}
      />
      <Stars
        count={isDark ? 3600 : 1600}
        depth={48}
        fade
        factor={isDark ? 3.6 : 2.3}
        radius={86}
        saturation={0.38}
        speed={reducedMotion ? 0 : isDark ? 0.34 : 0.12}
      />
    </>
  );
}

export function GalaxyBackground() {
  const { theme } = useTheme();
  const reducedMotion = usePrefersReducedMotion();
  const isDark = theme === 'dark';

  return (
    <div className={`galaxy-background ${isDark ? 'galaxy-background-dark' : 'galaxy-background-light'}`} aria-hidden="true">
      <Canvas
        camera={{ fov: 58, position: [0, 0, 7.2] }}
        dpr={[1, 1.6]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        performance={{ min: 0.55 }}
      >
        <GalaxyScene isDark={isDark} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
