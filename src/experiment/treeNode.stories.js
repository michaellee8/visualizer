import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TreeNode from "./treeNode";

storiesOf("TreeNode", module).add("with text", () => (
  <TreeNode text={"test content"}>
    <div
      style={{
        width: "3em",
        height: "3em",
        display: "block",
        backgroundColor: "yellow"
      }}
    />
  </TreeNode>
));
