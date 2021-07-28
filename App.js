import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function App() {
  const apiURL = "http://127.0.0.1:1337/videos";
  const [videos, setVideos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchVideos = async () => {
    return fetch(apiURL)
      .then((result) => {
        result.json();
      })
      .then((json) => {
        setVideos(json);
        setLoaded(true);
        console.log(videos);
      });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <View style={styles.container}>
      {loaded ? (
        <View>
          <Text>Success</Text>
        </View>
      ) : (
        <View>
          <Text>Loading..</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
