/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { Bathrooms } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import BathroomCard from "./BathroomCard";
import { Collection } from "@aws-amplify/ui-react";
export default function BathroomCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.rating(SortDirection.DESCENDING) };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Bathrooms,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "BathroomCardCollection")}
    >
      {(item, index) => (
        <BathroomCard
          bathrooms={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></BathroomCard>
      )}
    </Collection>
  );
}
