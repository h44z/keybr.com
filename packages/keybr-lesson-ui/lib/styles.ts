import { Color, RgbColor } from "@keybr/color";
import { useComputedStyles } from "@keybr/themes";
import { type CSSProperties, useMemo } from "react";

export function useKeyStyles() {
  const { getPropertyValue } = useComputedStyles();
  const slow = getPropertyValue("--slow-key-color") || "#cc0000";
  const fast = getPropertyValue("--fast-key-color") || "#60d788";

  return useMemo(() => {
    const min = Color.parse(slow).toRgb();
    const max = Color.parse(fast).toRgb();

    function confidenceColor(confidence: number): Color {
      return RgbColor.between(min, max, Math.max(0, Math.min(1, confidence)));
    }

    function keyStyles(
      isIncluded: boolean,
      confidence: number | null,
    ): CSSProperties {
      if (isIncluded && confidence != null) {
        return {
          backgroundColor: String(confidenceColor(confidence)),
        };
      } else {
        return {};
      }
    }

    return { confidenceColor, keyStyles };
  }, [slow, fast]);
}
