import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Spiderman(props) {
    const { nodes, materials } = useGLTF('/SpidermanModel.glb')
    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <group position={[45.067, 0, 1.156]} rotation={[-Math.PI / 2, 0, 0]} scale={144.256}>
                    <group position={[0, 0, 1.866]} rotation={[0, 0, 0.302]} scale={2.073}>
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                            geometry={nodes.Object_8.geometry}
                            material={materials.material}
                            skeleton={nodes.Object_8.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.Object_86.geometry}
                            material={materials['Material.003']}
                            skeleton={nodes.Object_86.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.Object_88.geometry}
                            material={materials['lens2.001']}
                            skeleton={nodes.Object_88.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.Object_90.geometry}
                            material={materials['lens.001']}
                            skeleton={nodes.Object_90.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.Object_92.geometry}
                            material={materials['Material.004']}
                            skeleton={nodes.Object_92.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.Object_94.geometry}
                            material={materials['glass.001']}
                            skeleton={nodes.Object_94.skeleton}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/SpidermanModel.glb')
