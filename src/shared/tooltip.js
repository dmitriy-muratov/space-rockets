import React, {forwardRef} from "react";
import {Tooltip} from "@chakra-ui/core";

export const TooltipWrap = forwardRef((props, ref) => {
  return (
    <Tooltip {...props} ref={ref}>
    </Tooltip>
  )
});
