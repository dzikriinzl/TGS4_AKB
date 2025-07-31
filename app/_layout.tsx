// app/_layout.tsx

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// --- Import Font Statis (SESUAI DENGAN SCREENSHOT FOLDER ANDA) ---
import LoraBold from "../assets/fonts/static/Lora-Bold.ttf";
import MerriweatherSansSemiBoldItalic from "../assets/fonts/static/MerriweatherSans-SemiBoldItalic.ttf"; // INI PERBAIKANNYA!
import OswaldRegular from "../assets/fonts/static/Oswald-Regular.ttf";
import PlayfairDisplayRegular from "../assets/fonts/static/PlayfairDisplay-Regular.ttf";
import RobotoBlack from "../assets/fonts/static/Roboto-Black.ttf";

// --- Import Font Variabel (SESUAI DENGAN SCREENSHOT FOLDER ANDA) ---
// Perhatikan nama file yang panjang dan unik untuk variable fonts
import InterItalicVariable from "../assets/fonts/variable/Inter-Italic-VariableFont_opsz,wght.ttf";
import ManropeBoldVariable from "../assets/fonts/variable/Manrope-Bold.ttf"; // Meskipun variabel, nama file Anda Manrope-Bold.ttf
import OutfitBlackVariable from "../assets/fonts/variable/Outfit-Black.ttf"; // Nama file Anda Outfit-Black.ttf
import RedHatMonoVariable from "../assets/fonts/variable/RedHatMono.ttf"; // Nama file Anda RedHatMono.ttf
import UrbanistVariable from "../assets/fonts/variable/Urbanist.ttf"; // Nama file Anda Urbanist.ttf

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    // --- Daftarkan Font Statis ---
    "Lora-Bold": LoraBold,
    "MerriweatherSans-SemiBoldItalic": MerriweatherSansSemiBoldItalic, // INI PERBAIKANNYA!
    "Oswald-Regular": OswaldRegular,
    "PlayfairDisplay-Regular": PlayfairDisplayRegular,
    "Roboto-Black": RobotoBlack,

    // --- Daftarkan Font Variabel ---
    "Inter-Italic-Variable": InterItalicVariable,
    "Manrope-Bold": ManropeBoldVariable, // Menggunakan nama sesuai file
    "Outfit-Black": OutfitBlackVariable, // Menggunakan nama sesuai file
    "RedHatMono-Variable": RedHatMonoVariable, // Menggunakan nama sesuai file
    "Urbanist-Variable": UrbanistVariable, // Menggunakan nama sesuai file
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return <Stack />;
}