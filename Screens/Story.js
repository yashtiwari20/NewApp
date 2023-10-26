import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet,ProgressBarAndroid } from 'react-native';

const Screen2 = ({navigation}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (progress < 1) {
        setProgress(progress + 0.05);
      } else {
        clearInterval(progressInterval);
        setTimeout(() => {
         
          navigation.navigate('Home');
        }, 1000);
      }
    }, 500);
    return () => clearInterval(progressInterval);
  }, [progress]);


  return (
    <View style={{backgroundColor:'#191970',height:'100%'}} >
        <View style={{position:'relative',margin:20}}>
      <ProgressBarAndroid
        styleAttr="Horizontal"
        indeterminate={false}
        progress={progress}
      />
      </View>
      <View>
        <Image   style={styles.newsImage}source={{uri:'https://images1.wionews.com/images/wion/900x1600/2023/7/3/1688378631742_FzsB5iagAEVzxn.jpg'}}/>
      <Text style={styles.headline}>ISRO Has Launched CHandrayan 3</Text>
      </View>
    </View>

  );
};
const styles=StyleSheet.create({
  newsImage: {
    width: '90%',
    height:"60%",
    margin:20,
  },
  headline: {
    fontSize: 30,
    textAlign:'center',
    position:'relative',
    color:'white'
    
  },
});

export default Screen2;
