import * as React from "react"
import Svg, { SvgProps, Path, Text } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    viewBox="0 0 100 125"
    {...props}
  >
    <Path d="M65.69 35.76 44.01 57.43l-9.7-9.7a3.217 3.217 0 0 0-4.54 0 3.217 3.217 0 0 0 0 4.54l11.97 11.97c.63.63 1.45.94 2.27.94s1.64-.31 2.27-.94L70.23 40.3a3.217 3.217 0 0 0 0-4.54 3.199 3.199 0 0 0-4.54 0z" />
    <Path d="M50 10c-22.06 0-40 17.94-40 40s17.94 40 40 40 40-17.94 40-40-17.94-40-40-40zm0 73.58c-18.51 0-33.58-15.06-33.58-33.58S31.49 16.42 50 16.42 83.58 31.48 83.58 50 68.51 83.58 50 83.58z" />
  </Svg>
)
export default SvgComponent
