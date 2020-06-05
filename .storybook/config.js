import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import "tailwindcss/dist/base.min.css";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { GLOBAL_STYLES } from '../src/constants/styles';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);


addParameters({
  options: {
    brandTitle: "Sendy",
    brandUrl: "#",
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: "bottom",
    showSearchBox: false,
    sidebarAnimations: true,
    selectedPanel: undefined,
    enableShortcuts: true,
    isToolshown: true,
    showRoots: true,
  },
  // docs: { components },
  readme: {
    codeTheme: "github",
  },
  backgrounds: [
    { name: "light", value: "#fefefe", default: true },
    { name: "dark", value: "#282c35" },
  ],
});

const Story = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
`;

const withStoryStyles = (storyFn) => {
  return (
    <>
      <Global
        styles={css`
          ${GLOBAL_STYLES};
          .sbdocs.sbdocs-preview {
            background-color: #f4f5f7;
          }
        `}
      />
      <Story>{storyFn()}</Story>
    </>
  );
};

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withStoryStyles);



