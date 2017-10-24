import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, View } from "react-native";

const Separator = () => (
  <View style={styles.separatorContainer}>
    <View style={styles.separatorOffset} />
    <View
      style={{
        flexDirection: "row",
        flex: 8,
        borderColor: "#EDEDED",
        borderWidth: 0.8,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: "row",
  },
  separatorOffset: {
    flexDirection: "row",
    flex: 2,
  },
});

export default Separator;
