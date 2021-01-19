import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

export default function AppCounter({ counterNum, onPressMin, onPressPlus }) {
  return (
    <View style={styles.counterContainer}>
      {counterNum == 0 ? (
        <View style={[styles.counterBtn, { backgroundColor: "gray" }]}>
          <TouchableWithoutFeedback disabled={false}>
            <MaterialCommunityIcons name="minus" size={20} color="#fff" />
          </TouchableWithoutFeedback>
        </View>
      ) : (
        <View style={styles.counterBtn}>
          <TouchableWithoutFeedback disabled={false} onPress={onPressMin}>
            <MaterialCommunityIcons name="minus" size={20} color="#fff" />
          </TouchableWithoutFeedback>
        </View>
      )}
      <View style={styles.counterBox}>
        <Text>{counterNum}</Text>
      </View>
      <View style={styles.counterBtn}>
        <TouchableWithoutFeedback onPress={onPressPlus}>
          <MaterialCommunityIcons name="plus" size={20} color="#fff" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  counterBox: {
    backgroundColor: colors.white,
    width: 30,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    justifyContent: "space-around",
    borderWidth: 0.5,
    borderColor: colors.sublight,
    borderRadius: 3,
  },
  counterBtn: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
    borderRadius: 15,
  },
  counterBtnMin: {
    backgroundColor: "#1E90FF",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
});

//  <View style={styles.container}>
//       {icon && (
//         <MaterialCommunityIcons
//           name={icon}
//           size={18}
//           color={colors.medium}
//           style={styles.icon}
//         />
//       )}
//       <Text style={styles.counterText}>{title}</Text>
//       <View style={styles.counterContainer}>
//         {counterNum == 0 ? (
//           <View style={[styles.counterBtn, { backgroundColor: "gray" }]}>
//             <TouchableWithoutFeedback disabled={false}>
//               <MaterialCommunityIcons name="minus" size={20} color="#fff" />
//             </TouchableWithoutFeedback>
//           </View>
//         ) : (
//           <View style={styles.counterBtn}>
//             <TouchableWithoutFeedback disabled={false} onPress={onPressMin}>
//               <MaterialCommunityIcons name="minus" size={20} color="#fff" />
//             </TouchableWithoutFeedback>
//           </View>
//         )}
//         <View style={styles.counterBox}>
//           <Text>{counterNum}</Text>
//         </View>
//         <View style={styles.counterBtn}>
//           <TouchableWithoutFeedback onPress={onPressPlus}>
//             <MaterialCommunityIcons name="plus" size={20} color="#fff" />
//           </TouchableWithoutFeedback>
//         </View>
//       </View>
//     </View>
