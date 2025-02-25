import { View, Text, TouchableOpacity, TextInput, Image, } from 'react-native';
import { router } from 'expo-router';
import { styles } from '../styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Join() {
    //State for password visiblity
    const [showPassword, setShowPassword] = useState(false);

    return ( 
      <View style={styles.container}>
    <View style={styles.iconsection}>
   <TouchableOpacity onPress={() => router.back()}>
     <Ionicons name="arrow-back" size={24} color="black"/>
   </TouchableOpacity>
   <Image source={HEROLOGOGREEN}/>
    </View>

    <View style={styles.titleTextGroup}>
        <Text style={styles.subText}>Please fill in the details to create an account</Text>
      </View>

      <View style={styles.formGroup}>
       
      <View>
        <Text style={styles.formLabel}>Full name</Text>
        <TextInput 
        style={styles.formControl}
        placeholder="Enter your full name"
        />
        </View>

    <View>
      <Text style={styles.formLabel}>Email Address</Text>
      <TextInput 
      style={styles.formControl}
      placeholder="Enter your email"
      keyboardType="email-address"
      />
    </View>

    <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput 
              style={styles.passwordControl}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons 
                name={showPassword ? "eye-off" : "eye"} 
                size={24} 
                color="gray" 
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity 
          style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}
        >
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}
        >
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
}