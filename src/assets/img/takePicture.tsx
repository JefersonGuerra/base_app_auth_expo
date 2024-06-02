import * as React from "react"
import Svg, { SvgProps, Path, Text } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    viewBox="0 0 90 112.5"
    {...props}
  >
    <Path d="m64.211 42.71 13.828-24.433C70.248 8.656 58.346 2.5 45 2.5c-1.125 0-2.235.057-3.337.143L64.211 42.71zM52.7 26.875 39.21 2.903C24.729 4.877 12.572 14.136 6.555 26.875H52.7zM56.543 60.859h27.888A42.372 42.372 0 0 0 87.5 45a42.29 42.29 0 0 0-7.968-24.76L56.543 60.859zM33.45 29.141H5.571A42.35 42.35 0 0 0 2.5 45c0 9.19 2.927 17.693 7.887 24.646L33.45 29.141zM37.35 63.125 50.9 87.083c14.433-2.006 26.544-11.252 32.546-23.958H37.35zM25.757 47.231 11.875 71.614C19.665 81.298 31.605 87.5 45 87.5c1.163 0 2.31-.06 3.449-.151L25.757 47.231z" />
    <Text
      y={105}
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize={5}
      fontWeight="bold"
    >
    </Text>
    <Text
      y={110}
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize={5}
      fontWeight="bold"
    >
    </Text>
  </Svg>
)
export default SvgComponent