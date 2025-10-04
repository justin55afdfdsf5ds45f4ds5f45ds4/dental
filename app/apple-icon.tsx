import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
export const dynamic = 'force-static'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          borderRadius: 90,
        }}
      >
        <img
          src="https://res.cloudinary.com/dfzlugyei/image/upload/v1759543582/Untitled_design_2_p3hctr.png"
          alt="The Tooth Studio Logo"
          width={180}
          height={180}
          style={{
            width: 180,
            height: 180,
            borderRadius: 90,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
