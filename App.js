import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ImageBackground, NativeModules, Touchable } from 'react-native';
import Tile from './src/Tile';
import FadeInView from './src/FadeInVIiew';


const locale = NativeModules.I18nManager.localeIdentifier
export default function App() {
  const [clickable, setClickable] = useState(true)
  const [list, setList] = useState([])
  const [resetCount, setResetCount] = useState(0)
  const didWin = function(myID){
    var test;
    if (list.includes(myID)){
      test = [ ...list.filter(function (id) {
        return id !== myID;
    })]
    }
    else{
      test =[...list,myID]
    }
    setList(test);
    if (test.sort().join(',') === DataToWin.sort().join(',')){
      setClickable(false)
    }
  }
  const reset = ()=>{
    setClickable(true);
    setList([]);
    setResetCount(resetCount+1);
  }
  const DataToWin = (locale =='he' || locale=='iw_IL')?
  [
    0, 1, 15, 16, 2, 24, 27, 28, 3, 34, 35, 36, 37, 38, 4, 41, 42, 46, 47, 48, 8, 20
  ]:
  [
    12, 14, 18, 19, 2, 21, 24, 28, 3, 34, 35, 38, 39, 4, 40, 41, 42, 43, 48, 5, 6, 44
  ]
  return (
      <ImageBackground source={require('./images/decoration-cropped.png')} style={styles.container}>

    
      <Text style={styles.Header}>לאבא!</Text>
      <Text style={styles.Text}>אומנם טיפה באיחור,</Text>
      <Text style={styles.Text}> אבל - המון המון מזל טוב, עד 120</Text>
      <Text style={styles.Text}>מקווים ששנה הבאה תהיה טובה ומהנה</Text>
      <Text style={styles.Text}>לפחות כמו השנה הזו, ואפילו יותר!</Text>
      <Text style={styles.Text}>שתזכה להמון אושר, שמחה ואהבה</Text>
      <Text style={styles.Text}>אוהבים </Text>
      {AllRowsLetters.map((row)=>{
        return (
          <View style={styles.row}>
          {row.map((Data)=>{
            return(
              <Tile letter={Data[0]} onPress={didWin} myID={Data[1]} clickable={clickable} isEndGame={DataToWin.includes(Data[1])} reset={resetCount} />
              )
            })}
          </View>
        )
        
      })}
      <StatusBar style="auto" />
 
          <FadeInView toStart={!clickable} style={styles.FadeInVIEW} onPress={reset} reset={resetCount}>
              <Image source={require('./images/Heart.png')} style={styles.image} resizeImage='cover' />
          </FadeInView>
      
      
      </ImageBackground>
  );
}

const AllRowsLetters = (locale =='he'|| locale=='iw_IL')?
[  
  [['ל',0],['י',1],['א',2],['ו',3],['ר',4],['נ',5],['ג',6]],
  [['ט',7],['ע',8],['ז',9],['ע',10],['ה',11],['ד',12],['כ',13]],
  [['פ',14],['ל',15],['נ',16],['ס',17],['ע',18],['ו',19],['א',20]],
  [['ד',21],['ב',22],['ח',23],['ת',24],['א',25],['ש',26],['י',27]],
  [['ג',28],['נ',29],['ט',30],['ג',31],['ע',32],['צ',33],['ג',34]],
  [['י',35],['ו',36],['ב',37],['ל',38],['ב',39],['ר',40],['ו',41]],
  [['א',42],['מ',43],['ה',44],['צ',45],['ש',46],['ח',47],['ר',48]]
]:
[  
  [['ג',0],['נ',1],['ר',2],['ו',3],['א',4],['י',5],['ל',6]],
  [['כ',7],['ד',8],['ה',9],['ע',10],['ז',11],['ע',12],['ט',13]],
  [['א',14],['ו',15],['ע',16],['ס',17],['נ',18],['ל',19],['פ',20]],
  [['י',21],['ש',22],['א',23],['ת',24],['ח',25],['ב',26],['ד',27]],
  [['ג',28],['צ',29],['ע',30],['ג',31],['ט',32],['נ',33],['ג',34]],
  [['ו',35],['ר',36],['ב',37],['ל',38],['ב',39],['ו',40],['י',41]],
  [['ר',42],['ח',43],['ש',44],['צ',45],['ה',46],['מ',47],['א',48]]
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Text:{
    fontSize: 18,
    marginBottom: 5,
    color: '#006400'
  },
  Header:{
    fontSize: 25,
    textDecorationLine: 'underline',
    marginBottom: 10,
    color: '#006400',
    marginTop: 35,
  },
  image:{
    height:140,
    width:140,
    zIndex:-100,
    justifyContent:'center',

  },
  FadeInVIEW:{
    position: 'absolute',
    bottom: 285
    
  }
});
