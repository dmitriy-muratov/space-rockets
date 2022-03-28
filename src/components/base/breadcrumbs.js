import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box, useColorMode,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { ChevronsRight } from "react-feather";
import {Theme} from "../../services/styling";

export default function Breadcrumbs({ items }) {
  const {colorMode} = useColorMode();

  return (
    <Breadcrumb
      p="6"
      spacing="1"
      separator={<Box size="1em" as={ChevronsRight} color="gray.300" />}
    >
      {items.map((item, index) => {
        const isCurrentPage = items.length === index + 1;
        return (
          <BreadcrumbItem isCurrentPage={isCurrentPage} key={item.label}>
            <BreadcrumbLink
              color={Theme().textColor[colorMode]}
              as={!isCurrentPage ? Link : undefined}
              to={!isCurrentPage ? item.to : undefined}
            >
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
