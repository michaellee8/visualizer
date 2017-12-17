import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Visualizer from "./visualizer";

storiesOf("Visualizer", module).add("from head", () => <Visualizer />);
