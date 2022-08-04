/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Home } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import HomeCard from "./HomeCard";
import { Collection } from "@aws-amplify/ui-react";
export default function HomeCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Home,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "HomeCardCollection")}
    >
      {(item, index) => (
        <HomeCard
          home={item}
          height="auto"
          width="auto"
          margin="0 0 0 1px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></HomeCard>
      )}
    </Collection>
  );
}
