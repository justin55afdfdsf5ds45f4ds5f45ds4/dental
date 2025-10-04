import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          borderRadius: 16,
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <img
            src="https://res.cloudinary.com/dfzlugyei/image/upload/c_fill,g_center,r_max,w_32,h_32/v1759543582/Untitled_design_2_p3hctr.png"
            alt="The Tooth Studio Logo"
            width={32}
            height={32}
            style={{
              width: 32,
              height: 32,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
