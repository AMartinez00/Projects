import React from "react";
import { ScrollView, StatusBar } from "react-native";

import MusicQuestions from "../data/Music";
import ArtQuestions from "../data/Art";
import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Music"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Music",
          questions: MusicQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Art"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Art",
          questions: ArtQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Computers"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: computerQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
);
