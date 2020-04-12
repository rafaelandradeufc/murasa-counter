import { StyleSheet } from 'react-native';
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
        //backgroundColor: "#444",
        marginLeft: 30,
        marginRight: 30,
        width: 180,
        height: 180,


    },

    life_text_lose: {

        textAlign: "center",
        color: "red",
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
        marginRight: 120,
    },

    center_bar: {
        // backgroundColor: 'blue',
        alignItems: "center",
        flexDirection: 'row',
        //justifyContent: "space-between",

    },


    line_1: {
        backgroundColor: '#CDCDCD',
        height: 1,
        width: 120,
        marginRight: 10,
        marginLeft: 5,

    },

    line_2: {
        backgroundColor: '#CDCDCD',
        height: 1,
        width: 135,
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
        // backgroundColor: "#245",
        width: 340,
        height: 40,
        marginTop: 40,
        marginBottom: -20,


    },

    bottom_pane_2: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        // backgroundColor: "#E5D6",
        width: 340,
        height: 40,
        marginTop: 40

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
        // backgroundColor: "green",
        width: 320,

    },

    top_pane_2: {
        alignItems: "center",
        flexDirection: "row-reverse",
        //backgroundColor: "green",
        width: 320,

    },

    plane_1: {
        transform: [{ rotate: '180deg' }],
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        //backgroundColor: "#333",

    },

    plane_2: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        //backgroundColor: "#333",

    },

    //MODAL

    modal_container: {
        flex: 1,
        //backgroundColor: "#011638",
        justifyContent: "center",
        alignItems: "center",
    },

    modal_1: {

        backgroundColor: "silver",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        width: 340,
        height: 150,
        borderRadius: 10

    },
    modal_2: {
        backgroundColor: "blue",

    }

});