import React, { useState } from 'react'
import { View, Text, StatusBar, Modal, TouchableHighlight } from 'react-native'
import styles from './styles';
import SvgUri from 'react-native-svg-uri';
import { TouchableOpacity } from 'react-native-gesture-handler';

import plus_img from '../../assets/plus.svg';
import less_img from '../../assets/less.svg';
import logo_img from '../../assets/logo.svg';
import grant_img from '../../assets/grant.svg';
import refresh_img from '../../assets/refresh.svg';
import select_color_img from '../../assets/select_color.svg';
import red from '../../assets/red.svg';
import blue from '../../assets/blue.svg';
import green from '../../assets/green.svg';
import black from '../../assets/black.svg';
import white from '../../assets/white.svg';



export default function Home() {


    const [lifing_1, setLifing1] = useState(20);
    const [lifing_2, setLifing2] = useState(20);
    const [math_win_1, setMathWin1] = useState(0);
    const [math_win_2, setMathWin2] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [color_1, setColor1] = useState(select_color_img);
    const [color_2, setColor2] = useState(select_color_img);
    const [player, setPlayer] = useState(0);

    function checkPlayer(color) {
        if (player ==  1) {
            setColor1(color);
        } else {
            setColor2(color);
        }
    }


    function loseMath1() {
        if (lifing_1 <= 0) {
            return styles.life_text_lose;
        }
        return styles.life_text;
    }

    function loseMath2() {
        if (lifing_2 <= 0) {
            return styles.life_text_lose;
        }
        return styles.life_text;
    }

    function refreshMath() {
        setLifing1(20);
        setLifing2(20);
        setMathWin1(0);
        setMathWin2(0);
    }

    function addGrant1(num) {
        setMathWin1(++num);
    }

    function addGrant2(num) {
        setMathWin2(++num);
    }

    function addPlus1(num) {
        setLifing1(++num);

    }

    function addLess1(num) {
        setLifing1(--num);
    }

    function addPlus2(num) {
        setLifing2(++num);
    }

    function addLess2(num) {
        setLifing2(--num);
    }


    return (

        <View style={styles.container} >

            <StatusBar backgroundColor="#b3e6ff" barStyle="dark-content" hidden={true} />

            <View style={styles.plane_1} >

                <View style={styles.top_pane_1}>

                    <View style={styles.circle_mdx}>
                        <Text style={styles.value_mdx}>{math_win_1}</Text>
                    </View>

                </View>


                <View style={styles.center_pane_1}>
                    <TouchableOpacity onPress={() => { addLess1(lifing_1) }}>
                        <SvgUri style={styles.less_img} source={less_img} />
                    </TouchableOpacity >

                    <Text style={loseMath1()}>{lifing_1}</Text>

                    <TouchableOpacity onPress={() => { addPlus1(lifing_1) }} >
                        <SvgUri style={styles.plus_img} source={plus_img} />
                    </TouchableOpacity >

                </View>


                <View style={styles.bottom_pane_1}>

                    <TouchableOpacity onPress={() => { setPlayer(1); setModalVisible(true); }}>
                        <SvgUri style={styles.select_color_img} source={color_1} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { addGrant1(math_win_1) }}>
                        <SvgUri style={styles.grant_img} source={grant_img} />
                    </TouchableOpacity >

                </View>

            </View>

            <View style={styles.center_bar}>
                <SvgUri style={styles.logo_img} source={logo_img} />
                <View style={styles.line_1}></View>

                <TouchableOpacity onPress={() => { refreshMath() }}>
                    <SvgUri style={styles.refresh_img} source={refresh_img} />
                </TouchableOpacity >

                <View style={styles.line_2}></View>
            </View >


            <Modal animationType="fade" transparent={true}
                visible={modalVisible}>

                <View style={styles.modal_container}>

                    <View style={styles.modal_1}>

                        <TouchableHighlight onPress={() => {
                            setModalVisible(!modalVisible);
                            checkPlayer(red);
                        }}>
                            <SvgUri source={red} />
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => {
                            setModalVisible(!modalVisible);
                            checkPlayer(blue);
                        }}>
                            <SvgUri source={blue} />
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => {
                            setModalVisible(!modalVisible);
                            checkPlayer(black);
                        }}>
                            <SvgUri source={black} />
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => {
                            setModalVisible(!modalVisible);
                            checkPlayer(green);
                        }}>
                            <SvgUri source={green} />
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => {
                            setModalVisible(!modalVisible);
                            checkPlayer(white);
                        }}>
                            <SvgUri source={white} />
                        </TouchableHighlight>

                    </View>
                </View>

            </Modal>


            <View style={styles.plane_2} >

                <View style={styles.top_pane_2}>

                    <View style={styles.circle_mdx}>
                        <Text style={styles.value_mdx}>{math_win_2}</Text>
                    </View>

                </View>

                <View style={styles.center_pane_2}>
                    <TouchableOpacity onPress={() => { addLess2(lifing_2) }}>
                        <SvgUri style={styles.less_img} source={less_img} />
                    </TouchableOpacity >

                    <Text style={loseMath2()}>{lifing_2}</Text>

                    <TouchableOpacity onPress={() => { addPlus2(lifing_2) }} >
                        <SvgUri style={styles.plus_img} source={plus_img} />
                    </TouchableOpacity >

                </View>

                <View style={styles.bottom_pane_2}>





                    <TouchableOpacity onPress={() => { setPlayer(2); setModalVisible(true); }}>
                        <SvgUri style={styles.select_color_img} source={color_2} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { addGrant2(math_win_2) }}>
                        <SvgUri style={styles.grant_img} source={grant_img} />
                    </TouchableOpacity >

                </View>





            </View>

        </View>


    );

}