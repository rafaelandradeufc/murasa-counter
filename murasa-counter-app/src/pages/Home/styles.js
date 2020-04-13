import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 10,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: "#011638",

    },

    life_text: {

        textAlign: "center",
        color: "#DEFFFC",
        fontSize: 150,
        marginLeft: 30,
        marginRight: 30,
        width: 180,
        height: 180,


    },

    life_text_lose: {

        textAlign: "center",
        color: "red",
        fontSize: 150,
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
        marginRight: 120,
    },

    center_bar: {
        alignItems: "center",
        flexDirection: 'row',
        width: Dimensions.get('window').width,


    },


    line_1: {
        backgroundColor: '#CDCDCD',
        height: 1,
        width: 110,
        marginRight: 10,
        marginLeft: 5,

    },

    line_2: {
        backgroundColor: '#CDCDCD',
        height: 1,
        width: 140,
        marginLeft: 10,

    },

    value_mdx: {
        textAlign: "center",
        color: "#060138",
        fontSize: 15,
        fontWeight: "bold",
    },

    circle_mdx: {
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        width: 30,
        backgroundColor: '#DEFFFC',
        borderRadius: 5,


    },
    bottom_pane_1: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: 340,
        height: 40,
        marginTop: 40,

    },

    bottom_pane_2: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: 340,
        height: 40,
        marginTop: 40,

    },


    center_pane_1: {

        flexDirection: "row",
        justifyContent: "space-between",
    },

    center_pane_2: {

        flexDirection: "row",
        justifyContent: "space-between",
    },

    top_pane_1: {
        alignItems: "center",
        flexDirection: "row",
        width: 320,

    },

    top_pane_2: {
        alignItems: "center",
        flexDirection: "row-reverse",
        width: 320,

    },

    plane_1: {
        transform: [{ rotate: '180deg' }],
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: (Dimensions.get('window').height / 2) - 50,

    },

    plane_2: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: (Dimensions.get('window').height / 2) - 50,


    },

    //MODAL

    modal_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    modal_1: {

        backgroundColor: "#B1D7D3",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        width: 340,
        height: 150,
        borderRadius: 10

    },
    modal_2: {

        transform: [{ rotate: '180deg' }],
        backgroundColor: "#41658A",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        width: 340,
        height: 150,
        borderRadius: 10

    }

});