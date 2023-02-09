import React, {useState} from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
const Tile = (props)=>{
    const [pressed, setPressed] = useState(false)
    return (
        <Pressable onPress={()=>{ if(props.clickable){setPressed(!pressed)}; props.onPress(props.myID)}} style={styles.Tile}>
            <Text style={[{ color: props.clickable? ( pressed ? 'red' : 'black') :(props.isEndGame? '#006400': 'gold')}, styles.Text]}>
      {props.letter}
    </Text>
    </Pressable>
//   style={({ pressed }) => [{ backgroundColor: pressed ? 'black' : 'white' }, styles.Tile ]}>
//   {({ pressed }) => (
    
//   )}
// </Pressable>
    )
}
const styles = StyleSheet.create({
    Tile: {
        backgroundColor: '#DDFFFD',
        borderWidth: 1,
        borderColor: '#999',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text: {
        fontSize: 35
    }
});
export default Tile;