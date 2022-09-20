import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,
  Alert, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={{flex:0.2,alignItems:'center',justifyContent:'center'}}>
        {/* <Text> TOP</Text> */}
        <Image
        style={styles.imagestyle}
        source={require('./assets/picture.png')}
      />
      </View>
      <View style={{flex:0.6,alignItems:'center',justifyContent:'center'}}>
      <TextInput style={{backgroundColor:'#708090',marginBottom:20, marginTop:10,width:320,color:'white'}}
      placeholder='first name'/>
      <TextInput style={{backgroundColor:'#708090',marginBottom:20, marginTop:10,width:320,color:'white'}}
      placeholder='last name'/>
      <TextInput style={{backgroundColor:'#708090',marginBottom:20, marginTop:10,width:320,color:'white'}}
      placeholder='email'/>
      <TextInput style={{backgroundColor:'#708090',marginBottom:20, marginTop:10,width:320,color:'white'}}
      placeholder='password'/>
      
      </View>
      <View style={{flex:0.2,alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity
        style={ {
          backgroundColor:"#ffa500",
          padding: 10,
          width:320,
          alignItems:'center',
          justifyContent:'center'


        }}
        onPress={()=> Alert.alert('Button Pressed')}
      >
        <Text
        style={{
          
          fontWeight:"600",
          fontSize:20
        }}
        >Enter</Text>
      </TouchableOpacity>
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
