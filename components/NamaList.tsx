import { View } from "react-native";
import daftarFont from "../constants/daftarFont";
import daftarNama from "../constants/daftarNama";
import NamaItem from "./NamaItem";

export default function NamaList() {
  return (
    <View>
      {daftarNama.map((nama, idx) => (
        <NamaItem key={idx} nama={nama} font={daftarFont[idx]} />
      ))}
    </View>
  );
}
