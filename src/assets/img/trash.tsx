import * as React from "react"
import Svg, { SvgProps, Path, Text } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="-5 -10 110 135" {...props}>
    <Path d="M39.16 81.41h.078c.828-.04 1.461-.75 1.422-1.578l-2.121-41.11a1.503 1.503 0 0 0-3 .156l2.121 41.11c.04.8.7 1.422 1.5 1.422zM50 81.41a1.5 1.5 0 0 0 1.5-1.5V38.801a1.5 1.5 0 0 0-3 0V79.91a1.5 1.5 0 0 0 1.5 1.5zM60.77 81.398h.078c.79 0 1.461-.621 1.5-1.422l2.121-41.109a1.505 1.505 0 0 0-1.422-1.578 1.49 1.49 0 0 0-1.578 1.422L59.35 79.82c-.04.828.589 1.531 1.421 1.578z" />
    <Path d="M59.148 10H40.859a5 5 0 0 0-5 5v3.95H22.3a5.633 5.633 0 0 0-5.629 5.628v1.5a5.633 5.633 0 0 0 5.629 5.629h.39l3.77 51.949c.262 3.559 3.262 6.36 6.828 6.36H66.71c3.57 0 6.578-2.79 6.828-6.36l3.77-51.949h.39a5.633 5.633 0 0 0 5.63-5.629v-1.5a5.633 5.633 0 0 0-5.63-5.629H64.14V15a5 5 0 0 0-5-5zm-20.297 5c0-1.102.898-2 2-2H59.14c1.102 0 2 .898 2 2v3.95H38.839V15zM70.55 83.43A3.865 3.865 0 0 1 66.71 87H33.288c-2.011 0-3.699-1.57-3.84-3.57L25.687 31.7h48.62l-3.761 51.73zm7.16-61.48c1.45 0 2.63 1.18 2.63 2.629v1.5c0 1.45-1.18 2.629-2.63 2.629l-55.422.004a2.632 2.632 0 0 1-2.629-2.63v-1.5c0-1.448 1.18-2.628 2.63-2.628h55.43z" />
    <Text
      y={117.5}
      fontFamily="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize={5}
      fontWeight="bold"
    >
    </Text>
    <Text
      y={122.5}
      fontFamily="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize={5}
      fontWeight="bold"
    >
    </Text>
  </Svg>
)
export default SvgComponent