export const getWidthStyle = (styles, Breakpoints, screenWidth) => {
  if (styles.type === "full") {
    return styles.full;
  }
  if (styles.type === "boxed") {
    if (screenWidth >= Breakpoints.Desktop) return styles.boxed.Widescreen;
    if (screenWidth <= Breakpoints.Desktop && screenWidth >= Breakpoints.Laptop)
      return styles.boxed.Desktop;
    if (
      screenWidth <= Breakpoints.Laptop &&
      screenWidth >= Breakpoints.Tablet_Landscape
    )
      return styles.boxed.Laptop;
    if (
      screenWidth <= Breakpoints.Tablet_Landscape &&
      screenWidth >= Breakpoints.Tablet_Portrait
    )
      return styles.boxed.Tablet_Landscape;
    if (
      screenWidth <= Breakpoints.Tablet_Portrait &&
      screenWidth >= Breakpoints.Mobile_Landscape
    )
      return styles.boxed.Tablet_Portrait;
    if (
      screenWidth <= Breakpoints.Mobile_Landscape &&
      screenWidth >= Breakpoints.Mobile_Portrait
    )
      return styles.boxed.Mobile_Landscape;
    if (screenWidth <= Breakpoints.Mobile_Portrait)
      return styles.boxed.Mobile_Portrait;
  }
  return null;
};
export const getColumnsGap = (styles, Breakpoints, screenWidth) => {
  if (styles.type === "default") return styles.default;
  if (styles.type === "noGap") return styles.noGap;
  if (styles.type === "narrow") return styles.narrow;
  if (styles.type === "extended") return styles.extended;
  if (styles.type === "wider") return styles.wider;
  if (styles.type === "custom") {
    if (screenWidth >= Breakpoints.Desktop) return styles.Custom_Gap.Widescreen;
    if (screenWidth <= Breakpoints.Desktop && screenWidth >= Breakpoints.Laptop)
      return styles.Custom_Gap.Desktop;
    if (
      screenWidth <= Breakpoints.Laptop &&
      screenWidth >= Breakpoints.Tablet_Landscape
    )
      return styles.Custom_Gap.Laptop;
    if (
      screenWidth <= Breakpoints.Tablet_Landscape &&
      screenWidth >= Breakpoints.Tablet_Portrait
    )
      return styles.Custom_Gap.Tablet_Landscape;
    if (
      screenWidth <= Breakpoints.Tablet_Portrait &&
      screenWidth >= Breakpoints.Mobile_Landscape
    )
      return styles.Custom_Gap.Tablet_Portrait;
    if (
      screenWidth <= Breakpoints.Mobile_Landscape &&
      screenWidth >= Breakpoints.Mobile_Portrait
    )
      return styles.Custom_Gap.Mobile_Landscape;
    if (screenWidth <= Breakpoints.Mobile_Portrait)
      return styles.Custom_Gap.Mobile_Portrait;
  }
  return null;
};
export const getHeight = (styles, Breakpoints, screenWidth) => {
  if (styles.type === "default") return styles.default;
  if (styles.type === "fit_to_screen") return styles.fit_to_screen;
  if (styles.type === "min_height") {
    if (screenWidth >= Breakpoints.Desktop)
      return styles.Minimum_Height.Widescreen;
    if (screenWidth <= Breakpoints.Desktop && screenWidth >= Breakpoints.Laptop)
      return styles.Minimum_Height.Desktop;
    if (
      screenWidth <= Breakpoints.Laptop &&
      screenWidth >= Breakpoints.Tablet_Landscape
    )
      return styles.Minimum_Height.Laptop;
    if (
      screenWidth <= Breakpoints.Tablet_Landscape &&
      screenWidth >= Breakpoints.Tablet_Portrait
    )
      return styles.Minimum_Height.Tablet_Landscape;
    if (
      screenWidth <= Breakpoints.Tablet_Portrait &&
      screenWidth >= Breakpoints.Mobile_Landscape
    )
      return styles.Minimum_Height.Tablet_Portrait;
    if (
      screenWidth <= Breakpoints.Mobile_Landscape &&
      screenWidth >= Breakpoints.Mobile_Portrait
    )
      return styles.Minimum_Height.Mobile_Landscape;
    if (screenWidth <= Breakpoints.Mobile_Portrait)
      return styles.Minimum_Height.Mobile_Portrait;
  }
  return null;
};
export const getOverflow = (styles) => {
  if (styles.type === "default") return styles.default;
  if (styles.type === "hidden") return styles.hidden;
  return null;
};
export const getBackground = (styles, Breakpoints, screenWidth) => {
  if (styles.type === "color") return styles.color;
  if (styles.type === "image") {
    if (screenWidth >= Breakpoints.Desktop) return styles.image.Widescreen;
    if (screenWidth <= Breakpoints.Desktop && screenWidth >= Breakpoints.Laptop)
      return styles.image.Desktop;
    if (
      screenWidth <= Breakpoints.Laptop &&
      screenWidth >= Breakpoints.Tablet_Landscape
    )
      return styles.image.Laptop;
    if (
      screenWidth <= Breakpoints.Tablet_Landscape &&
      screenWidth >= Breakpoints.Tablet_Portrait
    )
      return styles.image.Tablet_Landscape;
    if (
      screenWidth <= Breakpoints.Tablet_Portrait &&
      screenWidth >= Breakpoints.Mobile_Landscape
    )
      return styles.image.Tablet_Portrait;
    if (
      screenWidth <= Breakpoints.Mobile_Landscape &&
      screenWidth >= Breakpoints.Mobile_Portrait
    )
      return styles.image.Mobile_Landscape;
    if (screenWidth <= Breakpoints.Mobile_Portrait)
      return styles.image.Mobile_Portrait;
  }
  if (styles.type === "gradient") return styles.gradient;
  if (styles.type === "video") return styles.video;
  return null;
};
export const getBorder = (styles, Breakpoints, screenWidth) => {
  if (styles.Border_Width) {
    if (screenWidth >= Breakpoints.Desktop) return styles.Widescreen;
    if (screenWidth <= Breakpoints.Desktop && screenWidth >= Breakpoints.Laptop)
      return styles.Desktop;
    if (
      screenWidth <= Breakpoints.Laptop &&
      screenWidth >= Breakpoints.Tablet_Landscape
    )
      return styles.Laptop;
    if (
      screenWidth <= Breakpoints.Tablet_Landscape &&
      screenWidth >= Breakpoints.Tablet_Portrait
    )
      return styles.Tablet_Landscape;
    if (
      screenWidth <= Breakpoints.Tablet_Portrait &&
      screenWidth >= Breakpoints.Mobile_Landscape
    )
      return styles.Tablet_Portrait;
    if (
      screenWidth <= Breakpoints.Mobile_Landscape &&
      screenWidth >= Breakpoints.Mobile_Portrait
    )
      return styles.Mobile_Landscape;
    if (screenWidth <= Breakpoints.Mobile_Portrait)
      return styles.Mobile_Portrait;
  }
  return null;
};
export const getBorderRadius = (styles, Breakpoints, screenWidth) => {
  if (styles.border_radius) {
    if (screenWidth >= Breakpoints.Desktop) return styles.Widescreen;
    if (screenWidth <= Breakpoints.Desktop && screenWidth >= Breakpoints.Laptop)
      return styles.Desktop;
    if (
      screenWidth <= Breakpoints.Laptop &&
      screenWidth >= Breakpoints.Tablet_Landscape
    )
      return styles.Laptop;
    if (
      screenWidth <= Breakpoints.Tablet_Landscape &&
      screenWidth >= Breakpoints.Tablet_Portrait
    )
      return styles.Tablet_Landscape;
    if (
      screenWidth <= Breakpoints.Tablet_Portrait &&
      screenWidth >= Breakpoints.Mobile_Landscape
    )
      return styles.Tablet_Portrait;
    if (
      screenWidth <= Breakpoints.Mobile_Landscape &&
      screenWidth >= Breakpoints.Mobile_Portrait
    )
      return styles.Mobile_Landscape;
    if (screenWidth <= Breakpoints.Mobile_Portrait)
      return styles.Mobile_Portrait;
    return null;
  }
  return null;
};
export const getMargin = (styles, Breakpoints, screenWidth) => {
  if (screenWidth >= Breakpoints.Desktop) return styles.Widescreen;
  if (screenWidth <= Breakpoints.Desktop && screenWidth >= Breakpoints.Laptop)
    return styles.Desktop;
  if (
    screenWidth <= Breakpoints.Laptop &&
    screenWidth >= Breakpoints.Tablet_Landscape
  )
    return styles.Laptop;
  if (
    screenWidth <= Breakpoints.Tablet_Landscape &&
    screenWidth >= Breakpoints.Tablet_Portrait
  )
    return styles.Tablet_Landscape;
  if (
    screenWidth <= Breakpoints.Tablet_Portrait &&
    screenWidth >= Breakpoints.Mobile_Landscape
  )
    return styles.Tablet_Portrait;
  if (
    screenWidth <= Breakpoints.Mobile_Landscape &&
    screenWidth >= Breakpoints.Mobile_Portrait
  )
    return styles.Mobile_Landscape;
  if (screenWidth <= Breakpoints.Mobile_Portrait) return styles.Mobile_Portrait;
  return null;
};
export const getPadding = (styles, Breakpoints, screenWidth) => {
  if (screenWidth >= Breakpoints.Desktop) return styles.Widescreen;
  if (screenWidth <= Breakpoints.Desktop && screenWidth >= Breakpoints.Laptop)
    return styles.Desktop;
  if (
    screenWidth <= Breakpoints.Laptop &&
    screenWidth >= Breakpoints.Tablet_Landscape
  )
    return styles.Laptop;
  if (
    screenWidth <= Breakpoints.Tablet_Landscape &&
    screenWidth >= Breakpoints.Tablet_Portrait
  )
    return styles.Tablet_Landscape;
  if (
    screenWidth <= Breakpoints.Tablet_Portrait &&
    screenWidth >= Breakpoints.Mobile_Landscape
  )
    return styles.Tablet_Portrait;
  if (
    screenWidth <= Breakpoints.Mobile_Landscape &&
    screenWidth >= Breakpoints.Mobile_Portrait
  )
    return styles.Mobile_Landscape;
  if (screenWidth <= Breakpoints.Mobile_Portrait) return styles.Mobile_Portrait;
  return null;
};
export const getResponsive = (styles, Breakpoints, screenWidth) => {
  if (
    styles.devices.widescreen &&
    styles.devices.desktop &&
    styles.devices.laptop &&
    styles.devices.tablet_landscape &&
    styles.devices.tablet_portrait &&
    styles.devices.mobile_landscape &&
    styles.devices.mobile_portrait
  )
    return styles.visible;
  if (screenWidth >= Breakpoints.Desktop && styles.devices.widescreen)
    return styles.visible;
  if (
    screenWidth <= Breakpoints.Desktop &&
    screenWidth >= Breakpoints.Laptop &&
    styles.devices.desktop
  )
    return styles.visible;
  if (
    screenWidth <= Breakpoints.Laptop &&
    screenWidth >= Breakpoints.Tablet_Landscape &&
    styles.devices.laptop
  )
    return styles.visible;
  if (
    screenWidth <= Breakpoints.Tablet_Landscape &&
    screenWidth >= Breakpoints.Tablet_Portrait &&
    styles.devices.tablet_landscape
  )
    return styles.visible;
  if (
    screenWidth <= Breakpoints.Tablet_Portrait &&
    screenWidth >= Breakpoints.Mobile_Landscape &&
    styles.devices.tablet_portrait
  )
    return styles.visible;
  if (
    screenWidth <= Breakpoints.Mobile_Landscape &&
    screenWidth >= Breakpoints.Mobile_Portrait &&
    styles.devices.mobile_landscape
  )
    return styles.visible;
  if (
    screenWidth <= Breakpoints.Mobile_Portrait &&
    styles.devices.mobile_portrait
  )
    return styles.visible;
  return styles.hide;
};
