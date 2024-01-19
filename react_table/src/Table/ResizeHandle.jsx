import cx from "classnames";
import React from "react";

import { useStyles } from "./TableStyles";

export const ResizeHandle = ({ column }) => {
  const classes = useStyles();
  return (
    <div
      {...column.getResizerProps()}
      // override the useResizeColumns default
      style={{ cursor: "col-resize" }}
      className={cx({
        [classes.resizeHandle]: true,
        handleActive: column.isResizing,
      })}
    />
  );
};
