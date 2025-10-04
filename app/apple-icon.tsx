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
      <img
        src="https://res.cloudinary.com/dfzlugyei/image/upload/c_fill,g_center,r_max,w_180,h_180/v1759543582/Untitled_design_2_p3hctr.png"
        alt="The Tooth Studio Logo"
        width={180}
        height={180}
      />
    ),
    {
      ...size,
    }
  )
}
