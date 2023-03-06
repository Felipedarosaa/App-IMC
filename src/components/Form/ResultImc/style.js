import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    resultImc: {
        flex: 1,
        marginTop: 5,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },

    numberImc: {
        color: "#FF0043",
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 15,
        fontSize: 48,
    },

    information: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold",
    },

    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginTop: 20,
    },

    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        padding: 8,
    },

    sharedText: {
        color: "white",
        fontWeight: "bold",
        paddingHorizontal:20,
    }

});

export default styles