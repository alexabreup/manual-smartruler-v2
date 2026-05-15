
from pygltflib import GLTF2
import numpy as np

def inspect_glb(path):
    gltf = GLTF2().load(path)
    print(f"File: {path}")
    print(f"Nodes: {len(gltf.nodes)}")
    print(f"Meshes: {len(gltf.meshes)}")
    
    # Very simple inspection of first mesh
    if gltf.meshes:
        mesh = gltf.meshes[0]
        print(f"First mesh primitives: {len(mesh.primitives)}")
        for i, prim in enumerate(mesh.primitives):
            print(f"  Prim {i}: attributes={prim.attributes}")

if __name__ == '__main__':
    inspect_glb('C:/Users/alxab/Documents/ELT/manual-smartruler-v2/public/smart2.glb')
