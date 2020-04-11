import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {

        flex: 1,
        paddingHorizontal: 10,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#011638",

    },
    life: {

        textAlign: "center",
        color: "#DEFFFC",
        fontSize: 150,
        //backgroundColor: "#444",
        marginLeft: 30,
        marginRight: 30,
        width: 180,
        height: 180,


    },
    plus_img: {
        marginTop: 85,


    },

    less_img: {
        marginTop: 85,
    },

    select_color_img: {

    },
    grant_img: {
        backgroundColor: 'green',
    },


    center_bar: {
        // backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: "space-between",
        height: 70

    },

    logo_img: {
        marginTop: 15,
    },


    line: {
        backgroundColor: '#C7D9B7',
        height: 1,
        width: 295,
        marginTop: 35
    },

    bottom_pane: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        //backgroundColor: "#E5D6",
        width: 340,
        height: 100

    },


    center_pane: {

        flexDirection: "row",
        justifyContent: "space-between",
    },

    top_pane: {
        alignItems: "center",
        backgroundColor: "silver",
        width: 320,

    },

    plane_1: {
        transform: [{ rotate: '180deg' }],
        //backgroundColor: "#823",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",

    },

    plane_2: {
        backgroundColor: "#333",
    },
    modal: {

        width: 50,
        height: 50

    },

});