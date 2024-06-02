import * as React from "react"
import Svg, { SvgProps, G, Path, Text } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 32 40" {...props}>
    <G data-name="Layer 2">
      <Path d="M9 21h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-.93a1 1 0 0 1-.832-.445l-.812-1.219A2.993 2.993 0 0 0 17.93 3h-3.86a2.993 2.993 0 0 0-2.5 1.336l-.812 1.219A1 1 0 0 1 9.93 6H9a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3ZM8 9a1 1 0 0 1 1-1h.93a2.993 2.993 0 0 0 2.5-1.336l.812-1.219A1 1 0 0 1 14.07 5h3.86a1 1 0 0 1 .832.445l.812 1.219A2.993 2.993 0 0 0 22.07 8H23a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Z" />
      <Path d="M14.707 23.293a1 1 0 0 0-1.414 1.414l.19.191C7.555 24.447 4 22.471 4 21a1.714 1.714 0 0 1 .678-1.173 1 1 0 0 0-1.356-1.471A3.59 3.59 0 0 0 2 21c0 3.453 5.662 5.492 11.673 5.913l-.38.38a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414ZM16 17a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM28.678 18.356a1 1 0 0 0-1.356 1.471A1.714 1.714 0 0 1 28 21c0 1.063-1.939 2.6-6.2 3.452a1 1 0 0 0 .2 1.981.964.964 0 0 0 .2-.02c4.886-.98 7.8-3 7.8-5.413a3.59 3.59 0 0 0-1.322-2.644Z" />
    </G>
    <Text
      y={47}
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize={5}
      fontWeight="bold"
    >
      {"Created by Saepul Nahwan"}
    </Text>
    <Text
      y={52}
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize={5}
      fontWeight="bold"
    >
      {"from the Noun Project"}
    </Text>
  </Svg>
)
export default SvgComponent