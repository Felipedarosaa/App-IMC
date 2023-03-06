import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        bottom: 0,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },

    form: {
        width: "100%",
        height: "40%",
        marginTop: 30,
        padding: 10,
    },

    formLabel: {
        color: "black",
        fontSize: 18,
        paddingLeft: 20,
        // fontWeight: "bold",
    },

    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#DCDCDC",
        height:45,
        margin:12,
        paddingLeft:10,
    },

    textButtonCalculator: {
        fontSize: 20,
        color: "white",
        width: 240,
        textAlign: "center",
    },

    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 12,
        margin: 30,
    },

    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },

    exhibitionResultImc:{
        width:"100%",
        height:"100%",
       },

    listImcs:{
        marginTop: 10,
      },

      resultImcItem:{
       fontSize:28,
       color:"red",
       height:50,
       width:"100%",
      },

      textResultItemList:{
       color:"red",
       fontSize:17,
      }


});

export default styles