'use client'

import { useEffect, useRef } from 'react'

type TechCoreProps = {
  className?: string
  interactive?: boolean
}

const VIOLET: [number, number, number] = [0.502, 0.322, 1]
const SAFFRON: [number, number, number] = [1, 0.722, 0.161]
const VERDANT: [number, number, number] = [0.082, 0.518, 0.431]
const WHITE: [number, number, number] = [1, 1, 1]

const TechCore = ({ className, interactive = false }: TechCoreProps) => {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const state = { dead: false, stop: () => {} }
    const canvas = document.createElement('canvas')
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'
    host.appendChild(canvas)

    const gl = canvas.getContext('webgl', { antialias: true, alpha: true, preserveDrawingBuffer: true })
    if (!gl) {
      canvas.remove()
      return
    }

    const vertexSource = `
      attribute vec3 aPos;
      attribute vec3 aColor;
      uniform float uTime;
      uniform float uAspect;
      uniform vec2 uPointer;
      varying vec3 vColor;
      void main() {
        float yaw = uTime + uPointer.x;
        float cy = cos(yaw);
        float sy = sin(yaw);
        vec3 p = vec3(aPos.x * cy + aPos.z * sy, aPos.y, -aPos.x * sy + aPos.z * cy);
        float pitch = 0.38 + uPointer.y;
        float cx = cos(pitch);
        float sx = sin(pitch);
        float y2 = p.y * cx - p.z * sx;
        float z2 = p.y * sx + p.z * cx;
        z2 -= 6.6;
        float f = 1.35;
        gl_Position = vec4(p.x * f / uAspect, y2 * f, z2 * -0.15, -z2);
        vColor = aColor;
      }
    `
    const fragmentSource = `
      precision mediump float;
      varying vec3 vColor;
      void main() {
        gl_FragColor = vec4(vColor, 1.0);
      }
    `

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) throw new Error('shader')
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource))
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource))
    gl.linkProgram(program)
    gl.useProgram(program)

    const lines: number[] = []
    const pushLine = (
      ax: number,
      ay: number,
      az: number,
      bx: number,
      by: number,
      bz: number,
      color: [number, number, number]
    ) => {
      lines.push(ax, ay, az, ...color, bx, by, bz, ...color)
    }

    const phi = (1 + Math.sqrt(5)) / 2
    const raw = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ]
    const verts = raw.map(([x, y, z]) => {
      const length = Math.hypot(x, y, z)
      return [x / length, y / length, z / length]
    })
    const faces = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
    ]
    const seen = new Set<string>()
    faces.forEach(([a, b, c]) => {
      ;[[a, b], [b, c], [c, a]].forEach(([i, j]) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`
        if (seen.has(key)) return
        seen.add(key)
        const scale = 1.15
        pushLine(
          verts[i][0] * scale, verts[i][1] * scale, verts[i][2] * scale,
          verts[j][0] * scale, verts[j][1] * scale, verts[j][2] * scale,
          VIOLET
        )
      })
    })

    const octa = [
      [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1],
    ]
    const octaEdges = [
      [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 2], [1, 3], [1, 4], [1, 5],
      [2, 4], [2, 5], [3, 4], [3, 5],
    ]
    octaEdges.forEach(([i, j]) => {
      const scale = 0.42
      pushLine(
        octa[i][0] * scale, octa[i][1] * scale, octa[i][2] * scale,
        octa[j][0] * scale, octa[j][1] * scale, octa[j][2] * scale,
        VERDANT
      )
    })

    const rotate = (x: number, y: number, z: number, rx: number, ry: number, rz: number) => {
      const cx = Math.cos(rx)
      const sx = Math.sin(rx)
      let y1 = y * cx - z * sx
      let z1 = y * sx + z * cx
      const cy = Math.cos(ry)
      const sy = Math.sin(ry)
      const x2 = x * cy + z1 * sy
      const z2 = -x * sy + z1 * cy
      const cz = Math.cos(rz)
      const sz = Math.sin(rz)
      return [x2 * cz - y1 * sz, x2 * sz + y1 * cz, z2]
    }

    const addRing = (radius: number, tilt: [number, number, number], color: [number, number, number]) => {
      const steps = 96
      for (let i = 0; i < steps; i += 1) {
        const a0 = (i / steps) * Math.PI * 2
        const a1 = ((i + 1) / steps) * Math.PI * 2
        const p0 = rotate(Math.cos(a0) * radius, Math.sin(a0) * radius, 0, tilt[0], tilt[1], tilt[2])
        const p1 = rotate(Math.cos(a1) * radius, Math.sin(a1) * radius, 0, tilt[0], tilt[1], tilt[2])
        pushLine(p0[0], p0[1], p0[2], p1[0], p1[1], p1[2], color)
      }
    }

    addRing(1.75, [1.35, 0.2, 0.1], VIOLET)
    addRing(2.1, [0.9, 0.7, 0.25], SAFFRON)
    addRing(2.45, [0.4, 1.2, 0.8], VERDANT)

    const cube = (cx: number, cy: number, cz: number, size: number, color: [number, number, number]) => {
      const s = size / 2
      const corners = [
        [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
        [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s],
      ].map(([x, y, z]) => [x + cx, y + cy, z + cz])
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ]
      edges.forEach(([i, j]) => {
        pushLine(corners[i][0], corners[i][1], corners[i][2], corners[j][0], corners[j][1], corners[j][2], color)
      })
    }

    const nodeColors = [VIOLET, SAFFRON, VERDANT, WHITE]
    nodeColors.forEach((color, index) => {
      const angle = (index / nodeColors.length) * Math.PI * 2
      const orbit = index % 2 === 0 ? 1.75 : 2.15
      cube(Math.cos(angle) * orbit, (index - 1.5) * 0.28, Math.sin(angle) * orbit, 0.14, color)
    })

    const data = new Float32Array(lines)
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
    const stride = 6 * 4
    const posLoc = gl.getAttribLocation(program, 'aPos')
    const colorLoc = gl.getAttribLocation(program, 'aColor')
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, stride, 0)
    gl.enableVertexAttribArray(colorLoc)
    gl.vertexAttribPointer(colorLoc, 3, gl.FLOAT, false, stride, 12)
    const timeLoc = gl.getUniformLocation(program, 'uTime')
    const aspectLoc = gl.getUniformLocation(program, 'uAspect')
    const pointerLoc = gl.getUniformLocation(program, 'uPointer')
    const count = lines.length / 6

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 }
    const onMove = (event: PointerEvent) => {
      if (!interactive) return
      const rect = host.getBoundingClientRect()
      const nx = (event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5
      const ny = (event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5
      pointer.tx = nx * 0.55
      pointer.ty = ny * 0.35
    }
    if (interactive) window.addEventListener('pointermove', onMove)

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0

    const draw = (time: number) => {
      const width = host.clientWidth || 1
      const height = host.clientHeight || 1
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      const bufferWidth = Math.floor(width * pixelRatio)
      const bufferHeight = Math.floor(height * pixelRatio)
      if (canvas.width !== bufferWidth || canvas.height !== bufferHeight) {
        canvas.width = bufferWidth
        canvas.height = bufferHeight
      }
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      if (!reduced && interactive) {
        pointer.x += (pointer.tx - pointer.x) * 0.06
        pointer.y += (pointer.ty - pointer.y) * 0.06
      }
      gl.uniform1f(timeLoc, reduced ? 0.6 : time * 0.35)
      gl.uniform1f(aspectLoc, width / height)
      gl.uniform2f(pointerLoc, pointer.x, pointer.y)
      gl.drawArrays(gl.LINES, 0, count)
    }

    const tick = (now: number) => {
      draw(now / 1000)
      if (!reduced && !state.dead) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    const observer = new ResizeObserver(() => draw(performance.now() / 1000))
    observer.observe(host)

    state.stop = () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      if (interactive) window.removeEventListener('pointermove', onMove)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      canvas.remove()
    }
    if (state.dead) state.stop()

    return () => {
      state.dead = true
      state.stop()
    }
  }, [interactive])

  return <div ref={hostRef} className={className} aria-hidden="true" />
}

export default TechCore
