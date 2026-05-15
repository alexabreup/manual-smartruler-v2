import trimesh
import numpy as np
from PIL import Image, ImageDraw
import os

def render_technical_drawing(glb_path, output_path):
    # 1. Load the GLB
    scene = trimesh.load(glb_path)
    
    # 2. Convert scene to a single mesh
    if isinstance(scene, trimesh.Scene):
        mesh = scene.to_geometry()
        if isinstance(mesh, trimesh.Scene):
             mesh = mesh.dump(concatenate=True)
    else:
        mesh = scene

    # 3. Setup Image
    width, height = 2400, 1600
    img = Image.new('RGB', (width, height), 'white')
    draw = ImageDraw.Draw(img)

    # 4. Define regions
    padding = 100
    cell_w = (width - 3 * padding) // 2
    cell_h = (height - 3 * padding) // 2

    regions = [
        ("VISTA FRONTAL", padding, padding),
        ("VISTA LATERAL", padding * 2 + cell_w, padding),
        ("VISTA SUPERIOR", padding, padding * 2 + cell_h)
    ]

    # 5. Scale
    extents = mesh.extents
    max_dim = np.max(extents)
    scale = (min(cell_w, cell_h) - 200) / max_dim

    def project_and_draw(mesh_to_draw, label, x_off, y_off):
        m = mesh_to_draw.copy()
        if label == "VISTA FRONTAL":
            pass 
        elif label == "VISTA LATERAL":
            m.apply_transform(trimesh.transformations.rotation_matrix(np.pi/2, [0, 1, 0]))
        elif label == "VISTA SUPERIOR":
            m.apply_transform(trimesh.transformations.rotation_matrix(-np.pi/2, [1, 0, 0]))

        # Project
        vertices = m.vertices - m.centroid
        proj_vertices = vertices[:, :2] * scale
        
        # Center in cell
        proj_vertices[:, 0] += x_off + cell_w / 2
        proj_vertices[:, 1] += y_off + cell_h / 2
        
        # Draw edges
        edges = m.edges_unique
        for edge in edges:
            p1 = proj_vertices[edge[0]]
            p2 = proj_vertices[edge[1]]
            draw.line([p1[0], p1[1], p2[0], p2[1]], fill='black', width=2)
            
        # Label at bottom
        draw.text((x_off + cell_w/2 - 50, y_off + cell_h - 40), label, fill='black')

    # 6. Render
    for label, x, y in regions:
        project_and_draw(mesh, label, x, y)

    # 7. Add Title
    draw.text((width/2 + 200, height/2 + 200), "DETALHAMENTO TÉCNICO - SMART RULER", fill='black')

    # 8. Save
    img.save(output_path)
    print(f"Technical drawing saved to {output_path}")

if __name__ == '__main__':
    glb = 'C:/Users/alxab/Documents/ELT/manual-smartruler-v2/public/smart2.glb'
    output = 'C:/Users/alxab/Documents/ELT/manual-smartruler-v2/public/smartruler-3vistas-tecnico.png'
    render_technical_drawing(glb, output)
