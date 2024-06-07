import * as React from "react"
import Svg, { SvgProps, Path, Text } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SvgComponent = (props: SvgProps) => (
  <Svg
    data-name="Layer 1"
    viewBox="0 0 100 125"
    {...props}
  >
    <Path d="m30.48 38.9-4.39 14.77A2 2 0 0 0 28 56.24h14.7l-6.6 35.43a2 2 0 0 0 3.6 1.52l19.18-27.05-3.26-2.31L41.7 83.45l5.38-28.84a2 2 0 0 0-2-2.37H30.69L34.32 40ZM64.84 57.74l8.78-12.39A2 2 0 0 0 72 42.19H56.12l10.73-30.1A2 2 0 0 0 65 9.42H41a2 2 0 0 0-1.91 1.42l-4.93 16.22L13.35 6.25l-2.83 2.83L86.65 85.2l2.83-2.83Zm3.28-11.55L62 54.87l-8.68-8.68ZM42.48 13.42h19.66L51.4 43.52a2 2 0 0 0-.1.68L37.37 30.27Z" />
    <Text
      y={115}
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize={5}
      fontWeight="bold"
    >
      {"Created by Ahock"}
    </Text>
    <Text
      y={120}
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize={5}
      fontWeight="bold"
    >
      {"from the Noun Project"}
    </Text>
  </Svg>
)
export default SvgComponent
