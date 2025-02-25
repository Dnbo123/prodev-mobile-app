import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '../styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';

export default function Home() {

    return ( 
        <View style={styles.container}>
            <ImageBackground
        source={require("@/assets/images/background-image.png")}
        style={styles.backgroundImageContainer}
            >
        <View style={styles.logoContainer}>
         <Image source={require("@/assets/images/Logo.png")}/>
        </View>
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Find your favourite place here
          </Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              The best prices for  over 2 million properties worldwide
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 'auto', marginBottom: 40 }}>
          <View style={styles.buttonGroup}>
            <Link href="/join" asChild>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>Join</Text>
              </TouchableOpacity>
            </Link>
            <Link href="../sign" asChild>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Sign in</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
            </ImageBackground>
        </View>
    )
}