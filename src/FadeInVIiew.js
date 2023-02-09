import React, {useRef, useEffect, useState} from 'react';
import {Animated, Text, View} from 'react-native';

const FadeInView = props => {
//   const [toStart, setToStart] = useState(false);
//   const toStart = useRef(props.toStart)
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
// function startMy(){
//     setToStart(true);
// }


        // setToStart(true)
        useEffect(() => {
            if(props.toStart===true){
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }).start();
        }
        }, [fadeAnim, props.toStart]);




  return (
    props.toStart && <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};
export default FadeInView;
// You can then use your `FadeInView` in place of a `View` in your components:
// export default () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <FadeInView
//         style={{
//           width: 250,
//           height: 50,
//           backgroundColor: 'powderblue',
//         }}>
//         <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
//           Fading in
//         </Text>
//       </FadeInView>
//     </View>
//   );
// };