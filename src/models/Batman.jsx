import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Batman(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/BatmanModel.glb')
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={90.402}>
                    <group name="Batmanfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Object_4">
                                    <primitive object={nodes._rootJoint} />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials.H_BatMan_D}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/BatmanModel.glb')
