// components/NamaItem.tsx

import { StyleSheet, Text, View } from "react-native";

interface Props {
  nim: string; // Tambahkan properti nim
  nama: string;
  font: string;
}

export default function NamaItem({ nim, nama, font }: Props) { // Destructure 'nim' juga
  return (
    <View style={styles.card}>
      {/* NIM dulu baru Nama */}
      <Text style={[styles.nama, { fontFamily: font }]}>
        {nim} - {nama}
      </Text>
      <Text style={styles.infoFont}>Font: {font}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 18,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "red",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  nama: {
    fontSize: 20,
    color: "#3B060A",
  },
  infoFont: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
});