/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="1280px"
      height="677px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      src={home?.image_url}
      {...rest}
      {...getOverrideProps(overrides, "HomeCard")}
    >
      <Image
        width="841px"
        height="492px"
        position="absolute"
        top="26px"
        left="102px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "photo-1658828497357-557756e95576 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="50px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="205px"
        height="50px"
        position="absolute"
        top="547px"
        left="119px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Title"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="36px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="50px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="205px"
        height="50px"
        position="absolute"
        top="607px"
        left="119px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Discription"
        {...getOverrideProps(overrides, "Discription")}
      ></Text>
    </View>
  );
}
