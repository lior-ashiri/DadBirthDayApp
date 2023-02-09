import React, {useRef, useEffect, useState} from 'react';
import {Animated, Text, View, Pressable} from 'react-native';

const FadeInView = props => {
    var fadeAnim =new Animated.Value(0);
    useEffect(()=>{
        fadeAnim.current=new Animated.Value(0);
    },[props.reset]);

        useEffect(() => {
            
            if(props.toStart===true){
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }).start();
        }
        }, [fadeAnim, props.toStart]);




  return (
    props.toStart && 
        <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
        <Pressable onPress={props.onPress}>

      {props.children}
        </Pressable>
    </Animated.View>
    
  );
};
export default FadeInView;