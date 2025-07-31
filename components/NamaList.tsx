// components/NamaList.tsx

import { View } from "react-native";
import daftarFont from "../constants/daftarFont";
import daftarNama from "../constants/daftarNama"; // Ini sekarang array of objects
import NamaItem from "./NamaItem";

export default function NamaList() {
  return (
    <View>
      {daftarNama.map((item, idx) => ( // Ganti 'nama' jadi 'item' (objek {nim, nama})
        <NamaItem
          key={idx}
          nim={item.nim} // Teruskan NIM
          nama={item.nama} // Teruskan Nama
          font={daftarFont[idx]}
        />
      ))}
    </View>
  );
}