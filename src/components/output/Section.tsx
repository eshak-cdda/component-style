"use client";
import React, { ReactNode, CSSProperties, useState, useEffect } from "react";
import {
  getResponsive,
  getWidthStyle,
  getColumnsGap,
  getHeight,
  getOverflow,
  getBackground,
  getBorder,
  getBorderRadius,
  getMargin,
  getPadding,
} from "../../utils/conditions";

const HtmlTags = [
  "div",
  "header",
  "footer",
  "main",
  "article",
  "section",
  "aside",
  "nav",
] as const;

type AllowedTags = (typeof HtmlTags)[number];

type SectionProps = {
  tag: AllowedTags;
  children: ReactNode;
  style?: CSSProperties;
};

const Section: React.FC<SectionProps> = ({ tag, children }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  // get screenWidth
  const handleResize = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("screenWidth", screenWidth);

  const allowedTags = HtmlTags;

  const Breakpoints = {
    Widescreen: 1440,
    Desktop: 1200,
    Laptop: 1024,
    Tablet_Landscape: 900,
    Tablet_Portrait: 750,
    Mobile_Landscape: 600,
    Mobile_Portrait: 450,
  };

  const styles = {
    layout: {
      Display: {
        display: `flex`,
      },
      Content_Width: {
        type: "full", // boxed || full
        full: {
          width: "100%",
        },
        boxed: {
          value_type: "px", // rem || px || em || percent
          Widescreen: {
            width: "800px",
          },
          Desktop: {
            width: "700px",
          },
          Laptop: {
            width: "600px",
          },
          Tablet_Landscape: {
            width: "500px",
          },
          Tablet_Portrait: {
            width: "400px",
          },
          Mobile_Landscape: {
            width: "300px",
          },
          Mobile_Portrait: {
            width: "200px",
          },
        },
      },
      Columns_Gap: {
        type: "noGap", // default || noGap || narrow || extended || wider || custom
        default: {
          gap: "10px",
        },
        noGap: {
          gap: "0",
        },
        narrow: {
          gap: "5px",
        },
        extended: {
          gap: "20px",
        },
        wider: {
          gap: "25px",
        },
        Custom_Gap: {
          value_type: "px", // rem || px || em || percent || VH || VW
          Widescreen: {
            gap: "30",
          },
          Desktop: {
            gap: "25",
          },
          Laptop: {
            gap: "20",
          },
          Tablet_Landscape: {
            gap: "15",
          },
          Tablet_Portrait: {
            gap: "10",
          },
          Mobile_Landscape: {
            gap: "5",
          },
          Mobile_Portrait: {
            gap: "2",
          },
        },
      },
      Height: {
        type: "min_height", // default || fit_to_screen || min_height
        default: {
          minHeight: "auto",
        },
        fit_to_screen: {
          minHeight: "100vh",
        },
        Minimum_Height: {
          value_type: "px", // rem || px || em || percent || VH
          Widescreen: {
            minHeight: "400px",
          },
          Desktop: {
            minHeight: "350px",
          },
          Laptop: {
            minHeight: "300px",
          },
          Tablet_Landscape: {
            minHeight: "250px",
          },
          Tablet_Portrait: {
            minHeight: "200px",
          },
          Mobile_Landscape: {
            minHeight: "150px",
          },
          Mobile_Portrait: {
            minHeight: "100px",
          },
        },
      },
      Column_Position: {
        justifyContent: `center`,
      },
      Vertical_Align: {
        alignItems: `center`,
      },
      Overflow: {
        type: "hidden", // hidden || default
        hidden: {
          overflow: `hidden`,
        },
        default: {
          overflow: `auto`,
        },
      },
    },
    style: {
      background: {
        type: `color`, //image || video || color || gradient || none
        color: {
          backgroundColor: `green`,
        },
        image: {
          Widescreen: {
            backgroundImage: `url(/bg1.jpg)`,
            backgroundAttachment: `fixed`, //scroll || fixed
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          },
          Desktop: {
            backgroundImage: `url(/bg2.png)`,
            backgroundAttachment: `fixed`, //scroll || fixed
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          },
          Laptop: {
            backgroundImage: `url(/bg3.jpg)`,
            backgroundAttachment: `fixed`, //scroll || fixed
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          },
          Tablet_Landscape: {
            backgroundImage: `url(/bg4.jpg)`,
            backgroundAttachment: `fixed`, //scroll || fixed
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          },
          Tablet_Portrait: {
            backgroundImage: `url(/bg5.jpg)`,
            backgroundAttachment: `fixed`, //scroll || fixed
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          },
          Mobile_Landscape: {
            backgroundImage: `url(/bg2.png)`,
            backgroundAttachment: `fixed`, //scroll || fixed
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          },
          Mobile_Portrait: {
            backgroundImage: `url(/bg2.png)`,
            backgroundAttachment: `fixed`, //scroll || fixed
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          },
        },
        gradient: {
          background: `linear-gradient(90deg, #ff0000, #00ff00)`,
        },
        video: {},
      },
      Background_Overlay: {
        backgroundOverlay: false,
        type: "color", // gradient || color
        color: {
          backgroundColor: `red`,
          opacity: "0.5",
        },
        gradient: {
          background: `linear-gradient(90deg, #ff0000, #00ff00)`,
          opacity: "0.5",
        },
        filters: {
          filter: "blur(5px)",
        },
      },
      border: {
        normal: {
          value_type: "px", // rem || px || em || percent
          Border_Type: "none", // none || solid || dotted
          Box_Shadow: {
            color: "#000000",
            horizontal: 10,
            vertical: 10,
            blur: 0.5,
            spread: 0.2,
            position: "",
            boxShadow: "1px 2px 2px 4px red",
          },
          Border_Radius: {
            border_radius: true,
            Widescreen: {
              borderTopRightRadius: "15px",
              borderTopLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              borderBottomLeftRadius: "15px",
            },
            Desktop: {
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              borderBottomLeftRadius: "12px",
            },
            Laptop: {
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              borderBottomLeftRadius: "10px",
            },
            Tablet_Landscape: {
              borderTopRightRadius: "8px",
              borderTopLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              borderBottomLeftRadius: "8px",
            },
            Tablet_Portrait: {
              borderTopRightRadius: "5px",
              borderTopLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              borderBottomLeftRadius: "5px",
            },
            Mobile_Landscape: {
              borderTopRightRadius: "3px",
              borderTopLeftRadius: "3px",
              borderBottomRightRadius: "3px",
              borderBottomLeftRadius: "3px",
            },
            Mobile_Portrait: {
              borderTopRightRadius: "1px",
              borderTopLeftRadius: "1px",
              borderBottomRightRadius: "1px",
              borderBottomLeftRadius: "1px",
            },
          },
          width: {
            Border_Width: true,
            Widescreen: {
              borderStyle: "solid",
              borderTopWidth: "5px",
              borderBottomWidth: "5px",
              borderLeftWidth: "5px",
              borderRightWidth: "5px",
              borderColor: "red",
            },
            Desktop: {
              borderStyle: "solid",
              borderTopWidth: "0",
              borderBottomWidth: "0",
              borderLeftWidth: "0",
              borderRightWidth: "0",
              borderColor: "skyblue",
            },
            Laptop: {
              borderStyle: "solid",
              borderTopWidth: "0",
              borderBottomWidth: "0",
              borderLeftWidth: "0",
              borderRightWidth: "0",
              borderColor: "blue",
            },
            Tablet_Landscape: {
              borderStyle: "solid",
              borderTopWidth: "0",
              borderBottomWidth: "0",
              borderLeftWidth: "0",
              borderRightWidth: "0",
              borderColor: "red",
            },
            Tablet_Portrait: {
              borderStyle: "solid",
              borderTopWidth: "0",
              borderBottomWidth: "0",
              borderLeftWidth: "0",
              borderRightWidth: "0",
              borderColor: "orange",
            },
            Mobile_Landscape: {
              borderStyle: "solid",
              borderTopWidth: "0",
              borderBottomWidth: "0",
              borderLeftWidth: "0",
              borderRightWidth: "0",
              borderColor: "sky",
            },
            Mobile_Portrait: {
              borderStyle: "solid",
              borderTopWidth: "0",
              borderBottomWidth: "0",
              borderLeftWidth: "0",
              borderRightWidth: "0",
              borderColor: "red",
            },
          },
        },
        hover: {
          Box_Shadow: {
            color: "#000000",
            horizontal: 10,
            vertical: 10,
            blur: 0.5,
            spread: 0.2,
            position: "",
          },
          value_type: "px", // rem || px || em || percent
          Border_Type: "none", // none || solid || dotted
          width: {
            Desktop: {
              borderStyle: "solid",
              borderTop: "",
              borderBottom: "",
              borderLeft: "",
              borderRight: "",
              borderColor: "#000000",
              Border_Radius: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
              },
            },
            Laptop: {
              borderStyle: "solid",
              borderTop: "",
              borderBottom: "",
              borderLeft: "",
              borderRight: "",
              borderColor: "#000000",
              Border_Radius: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
              },
            },
            Widescreen: {
              borderStyle: "solid",
              borderTop: "",
              borderBottom: "",
              borderLeft: "",
              borderRight: "",
              borderColor: "#000000",
              Border_Radius: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
              },
            },
            Tablet_Portrait: {
              borderStyle: "solid",
              borderTop: "",
              borderBottom: "",
              borderLeft: "",
              borderRight: "",
              borderColor: "#000000",
              Border_Radius: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
              },
            },
            Tablet_Landscape: {
              borderStyle: "solid",
              borderTop: "",
              borderBottom: "",
              borderLeft: "",
              borderRight: "",
              borderColor: "#000000",
              Border_Radius: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
              },
            },
            Mobile_Portrait: {
              borderStyle: "solid",
              borderTop: "",
              borderBottom: "",
              borderLeft: "",
              borderRight: "",
              borderColor: "#000000",
              Border_Radius: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
              },
            },
            Mobile_Landscape: {
              borderStyle: "solid",
              borderTop: "",
              borderBottom: "",
              borderLeft: "",
              borderRight: "",
              borderColor: "#000000",
              Border_Radius: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
              },
            },
          },
        },
      },
      Shape_Divider: {},
      Typography: {
        Text_align: {
          Desktop: {
            textAlign: "center",
          },
          Laptop: {
            textAlign: "center",
          },
          Widescreen: {
            textAlign: "center",
          },
          Tablet_Portrait: {
            textAlign: "center",
          },
          Tablet_Landscape: {
            textAlign: "center",
          },
          Mobile_Portrait: {
            textAlign: "center",
          },
          Mobile_Landscape: {
            textAlign: "center",
          },
        },
        Colors: {
          heading: {
            color: "orange",
          },
          text: {
            color: "black",
          },
          link_hover: {
            color: "blue",
          },
          link: {
            color: "blue",
          },
        },
      },
    },
    Advanced: {
      advanced: {
        Margin: {
          value_type: "px", // rem || px || em || percent
          Widescreen: {
            marginTop: "50",
            marginBottom: "50",
            marginLeft: "50",
            marginRight: "50",
          },
          Desktop: {
            marginTop: "40",
            marginBottom: "40",
            marginLeft: "40",
            marginRight: "40",
          },
          Laptop: {
            marginTop: "35",
            marginBottom: "35",
            marginLeft: "35",
            marginRight: "35",
          },
          Tablet_Landscape: {
            marginTop: "30",
            marginBottom: "30",
            marginLeft: "30",
            marginRight: "30",
          },
          Tablet_Portrait: {
            marginTop: "25",
            marginBottom: "25",
            marginLeft: "25",
            marginRight: "25",
          },
          Mobile_Landscape: {
            marginTop: "20",
            marginBottom: "20",
            marginLeft: "20",
            marginRight: "20",
          },
          Mobile_Portrait: {
            marginTop: "15",
            marginBottom: "15",
            marginLeft: "15",
            marginRight: "15",
          },
        },
        Padding: {
          value_type: "px", // rem || px || em || percent
          Widescreen: {
            paddingTop: "60px",
            paddingBottom: "60px",
            paddingLeft: "60px",
            paddingRight: "60px",
          },
          Desktop: {
            paddingTop: "50px",
            paddingBottom: "50px",
            paddingLeft: "50px",
            paddingRight: "50px",
          },
          Laptop: {
            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "40px",
            paddingRight: "40px",
          },
          Tablet_Landscape: {
            paddingTop: "30px",
            paddingBottom: "30px",
            paddingLeft: "30px",
            paddingRight: "30px",
          },
          Tablet_Portrait: {
            paddingTop: "25px",
            paddingBottom: "25px",
            paddingLeft: "25px",
            paddingRight: "25px",
          },
          Mobile_Landscape: {
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          },
          Mobile_Portrait: {
            paddingTop: "15px",
            paddingBottom: "15px",
            paddingLeft: "15px",
            paddingRight: "15px",
          },
        },
        Z_Index: {
          ZIndex: "",
        },
        CSS_ID: {
          id: "",
        },
        CSS_Classes: {
          class: "",
        },
      },
      Motion_Effects: {
        Scrolling_Effects: {},
        Sticky: {
          Sticky_type: "top", // top || bottom || none
          Sticky_top: {
            position: "sticky",
            top: 0,
          },
          Sticky_bottom: {
            position: "sticky",
            bottom: 0,
          },
        },
      },
      Responsive: {
        Visibility: {
          devices: {
            widescreen: true,
            desktop: true,
            laptop: false,
            tablet_landscape: true,
            tablet_portrait: true,
            mobile_landscape: true,
            mobile_portrait: true,
          },
          hide: {
            display: "none",
          },
          visible: {
            display: "flex",
          },
        },
      },
      Attributes: {},
      Custom_CSS: {},
    },
  };

  const widthStyle = getWidthStyle(
    styles.layout.Content_Width,
    Breakpoints,
    screenWidth
  );
  const columnsGap = getColumnsGap(
    styles.layout.Columns_Gap,
    Breakpoints,
    screenWidth
  );
  const height = getHeight(styles.layout.Height, Breakpoints, screenWidth);
  const overflow = getOverflow(styles.layout.Overflow);
  const background = getBackground(
    styles.style.background,
    Breakpoints,
    screenWidth
  );
  const border = getBorder(
    styles.style.border.normal.width,
    Breakpoints,
    screenWidth
  );
  const borderRadius = getBorderRadius(
    styles.style.border.normal.Border_Radius,
    Breakpoints,
    screenWidth
  );
  const margin = getMargin(
    styles.Advanced.advanced.Margin,
    Breakpoints,
    screenWidth
  );
  const padding = getPadding(
    styles.Advanced.advanced.Padding,
    Breakpoints,
    screenWidth
  );
  const responsive = getResponsive(
    styles.Advanced.Responsive.Visibility,
    Breakpoints,
    screenWidth
  );

  const expectedStyles = {
    ...styles.layout.Display,
    ...styles.layout.Column_Position,
    ...styles.layout.Vertical_Align,
    ...widthStyle,
    ...columnsGap,
    ...height,
    ...overflow,
    ...background,
    ...border,
    ...borderRadius,
    ...margin,
    ...padding,
    ...responsive,
  };

  console.log("all style", expectedStyles);

  if (!allowedTags.includes(tag)) {
    console.error(`Invalid tag "${tag}" provided. Using default tag "div".`);
    return <div>{children}</div>;
  }

  const TagComponent = tag as keyof JSX.IntrinsicElements;

  return <TagComponent style={expectedStyles}>{children}</TagComponent>;
};

export default Section;
