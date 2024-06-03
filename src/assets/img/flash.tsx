import * as React from "react"
import Svg, { SvgProps, Path, Text } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 28 35" {...props}>
    <Path
      d="M9 26.5a.5.5 0 0 1-.207-.045.5.5 0 0 1-.275-.587L11.345 15.5H7a.5.5 0 0 1-.487-.612l3-13A.5.5 0 0 1 10 1.5h7a.5.5 0 0 1 .457.7l-3.687 8.3H19a.5.5 0 0 1 .416.777l-10 15A.5.5 0 0 1 9 26.5Zm-1.372-12H12a.5.5 0 0 1 .482.632l-2.189 8.027L18.065 11.5H13a.5.5 0 0 1-.457-.7l3.687-8.3H10.4Z"
      data-name="Layer 2"
    />
    <Text
      y={43}
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize={5}
      fontWeight="bold"
    >
      {"Created by Ilham Fitrotul Hayat"}
    </Text>
    <Text
      y={48}
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize={5}
      fontWeight="bold"
    >
      {"from the Noun Project"}
    </Text>
  </Svg>
)
export default SvgComponent