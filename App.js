import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,CheckBox,
  Alert, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'


export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={{flex:0.2,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
        {/* <Text> TOP</Text> */}
        {/* <Image
        style={styles.imagestyle}
        source={require('./assets/picture.png')}
      /> */}
      <Text
      style={{
          
        fontWeight:"900",
        fontSize:40,
        color:'#00A19D'
      }}>Sign Up</Text>
      </View>
      <View style={{flex:0.6,alignItems:'center',marginTop:30}}>
      <TextInput style={{backgroundColor:'#FFF5E4',marginBottom:20,width:320,height:50,color:'black',borderRadius:20,padding:5}}
      placeholder='e-mail'/>
      <TextInput secureTextEntry={true} style={{backgroundColor:'#FFF5E4',marginBottom:20,width:320,height:50,color:'black',borderRadius:20,padding:5}}
      placeholder='password'/>
      <TextInput secureTextEntry={true} style={{backgroundColor:'#FFF5E4',marginBottom:20,width:320,height:50,color:'black',borderRadius:20,padding:5}}
      placeholder='repeat password'/>
      <Text
        style={{
          
          fontWeight:"100",
          fontSize:10
        }}
        >Sign up with social account</Text>
        <View style={{flexDirection:"row",justifyContent:'center',backgroundColor:'white'}}>
        
        <FontAwesome name = 'google' size={25} style={{color:'blue'}}></FontAwesome>
        <FontAwesome name = 'facebook-square' size={25} style={{color:'blue',marginLeft:10}} ></FontAwesome>
        </View>
  
      
      </View>
      
      <View style={{flex:0.2,alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity
        style={ {
          backgroundColor:"#009DAE",
          padding: 10,
          width:320,
        
          alignItems:'center',
          justifyContent:'center',
          borderRadius:20


        }}
        onPress={()=> Alert.alert('Button Pressed')}
      >
        <Text
        style={{
          
          fontWeight:"600",
          fontSize:20
        }}
        >Sign Up</Text>
      </TouchableOpacity>
      <Text
        style={{
          
          fontWeight:"600",
          marginTop:15,
          fontSize:15,
          color:"#009DAE"
        }}
        >Read User License Agreement</Text>
      </View>

      {/* <Image
        style={styles.imagestyle}
        source={require('./assets/picture.png')}
      />
       <Text
      style={ {
        color: "white",
        fontSize:25,
        fontWeight:"900",
        marginRight:250,
        marginTop:100,
        // marginBottom:200
        
      }}>Log In</Text>
      <Text
      style={ {
        color: "#8A8E91",
        fontSize:12,
        fontWeight:"100",
        
        marginRight:205,
        marginTop:20,
        // marginBottom:200
        
      }}>Email/ Phone Number</Text>
      <TextInput style={{backgroundColor:'#708090',marginBottom:20, marginTop:10,width:320,color:'white'}}/>
      <Text
      style={ {
        color: "#8A8E91",
        fontSize:12,
        fontWeight:"100",
        
        marginRight:268,
        
        // marginBottom:200
        
      }}>Password</Text>
      <TextInput style={{backgroundColor:'#708090',marginBottom:20, marginTop:10,width:320,color:'white'}}/>

      <TouchableOpacity
        style={ {
          backgroundColor:"#ffa500",
          padding: 10,
          width:320
        }}
        onPress={()=> Alert.alert('Button Pressed')}
      >
        <Text
        style={{
          marginLeft:130,
          fontWeight:"600",
          fontSize:20
        }}
        >Next</Text>
      </TouchableOpacity> */}

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imagestyle:{width:100, height:100, backgroundColor:'yellow'}
});
