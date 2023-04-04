import * as React from 'react'
import Svg, { Rect, Defs, Pattern, Use, Image } from 'react-native-svg'
function SvgMain2(props) {
  return (
    <Svg
      width={191}
      height={158}
      viewBox="0 0 191 158"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Rect
        width={190.82}
        height={157.75}
        rx={24}
        fill="url(#pattern0)"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_1_909" transform="scale(.0016 .00139)" />
        </Pattern>
        <Image
          id="image0_1_909"
          width={622}
          height={720}
        />
      </Defs>
    </Svg>
  )
}
export default SvgMain2