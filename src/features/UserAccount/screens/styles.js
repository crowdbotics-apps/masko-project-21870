import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        display: 'flex',
    }, // linear-gradient(180deg, #556897 50%, #6E87C6 100%)
    itemsContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: "center",
        height: height,
        width: width,
        padding: 10,
    },
    item: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        padding: 10,
        color: 'black',
        width: '48%',
        margin: 2,
    },
    itemLogo: {
    },
    itemFont: {
        color: 'black',
        fontWeight: 'bold',
        padding: 10
    },

    logo: {
        width: "100%"
    },
    mainText: {
        fontSize: 20,
        fontFamily: "Roboto-Medium",
        marginTop: 20,
        color: "#130D3C"
    },
    yellowButton:{
        fontFamily: "Montserrat",
        // backgroundColor: "#FFCD3E",
        borderRadius: 30,
        margin: 10,
        borderWidth: 0,
        width: width*0.85,
        alignSelf: 'center'
    },
    whiteFont: {
        fontFamily: "Montserrat",
        color: 'white',
        
    },
    yellowFont: {
        fontFamily: "Montserrat",
        color: '#FFCD3E',
    },
    loginHeading:{
        fontFamily: "Montserrat",
        color: '#FFF',
        marginBottom:20,
        marginTop:10,
        fontSize:20,
        alignSelf:'center',

    },
    termsHeading:{
        fontFamily: "Montserrat",
        color: '#FFF',
        marginBottom:20,
        marginTop:10,
        fontSize:17,
        alignSelf:'center',
        fontWeight: "bold"

    },
    yellowFontBold: {
        fontFamily: "Montserrat",
        color: '#FFCD3E',
        fontWeight:'bold'
    },
    inputBox:{
        borderBottomColor:'#7384B2',
        borderBottomWidth:1,
        padding:10,
        margin:10,
        backgroundColor:null,
        fontFamily: "Montserrat",
        color: '#FFF',
    },
    inputBoxText:{
        fontFamily: "Montserrat",
        color: '#FFF',
        fontSize: 13
    },
    selectBox:{
        borderBottomColor:'#7384B2',
        borderBottomWidth:1,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        padding:10,
        margin:10,
        backgroundColor:null,
        fontFamily: "Montserrat",
        color: '#FFF',
        alignItems:'flex-start'
    },

    
    inputIconContainer:{
        flex: 1, 
        flexDirection: 'row',
        alignItems:'center',
        borderBottomColor:'#7384B2',
        borderBottomWidth:1,
        padding:10,
        margin:10,
        backgroundColor:null,
        fontFamily: "Montserrat",
        color: '#FFF',

    },
    inputBoxIcon:{
        backgroundColor:null,
        fontFamily: "Montserrat",
        color: '#FFF',
        borderWidth: 0
    },
    iconItem:{
        width: 20,
    },
    termsModalContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:"#6D84C1",
        height: height*0.9,
        width: width*0.9,
        padding: 10,
        borderRadius: 10,
    },
    termsConditionText:{
        fontFamily: "Montserrat",
        color: 'white',
        lineHeight: 22,
        
    }

}); 

export default styles;