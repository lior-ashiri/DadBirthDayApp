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
    6,13,20,19,18,17,16,25,30,31,32,33,34,38,39,40,45,44,43,42
  ]:
  [
    0,7,14,15,16,17,18,23,28,29,30,31,32,36,37,38,45,46,47,48
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
  [['א',0],['ב',1],['ג',2],['ד',3],['ה',4],['ו',5],['ש',6]],
  [['ז',7],['ח',8],['ט',9],['י',10],['כ',11],['ל',12],['ח',13]],
  [['מ',14],['נ',15],['א',16],['י',17],['ג',18],['ו',19],['ר',20]],
  [['ס',21],['ע',22],['פ',23],['צ',24],['י',25],['ק',26],['ר',27]],
  [['ש',28],['ת',29],['ל',30],['י',31],['א',32],['ו',33],['ר',34]],
  [['א',35],['ב',36],['ג',37],['ע',38],['נ',39],['ת',40],['ד',41]],
  [['י',42],['ו',43],['ב',44],['ל',45],['ה',46],['ו',47],['ז',48]]
]:
[  
  [['ש',0],['ו',1],['ה',2],['ד',3],['ג',4],['ב',5],['א',6]],
  [['ח',7],['ל',8],['כ',9],['י',10],['ט',11],['ח',12],['ז',13]],
  [['ר',14],['ו',15],['ג',16],['י',17],['א',18],['נ',19],['מ',20]],
  [['ר',21],['ק',22],['י',23],['צ',24],['פ',25],['ע',26],['ס',27]],
  [['ר',28],['ו',29],['א',30],['י',31],['ל',32],['ת',33],['ש',34]],
  [['ד',35],['ת',36],['נ',37],['ע',38],['ג',39],['ב',40],['א',41]],
  [['ז',42],['ו',43],['ה',44],['ל',45],['ב',46],['ו',47],['י',48]]
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
    height:200,
    width:200,
    zIndex:-100,
    justifyContent:'center',

  },
  FadeInVIEW:{
    position: 'absolute',
    bottom: 165
    
  }
});
