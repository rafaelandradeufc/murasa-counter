import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles';
import SvgUri from 'react-native-svg-uri';

import plus_img from '../../assets/plus.svg';
import less_img from '../../assets/less.svg';
import logo_img from '../../assets/logo.svg';
import grant_img from '../../assets/grant.svg';

import select_color_img from '../../assets/select_color.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {


    var life_player_1 = 20;
    var life_player_2 = 22;

    const [life, setLife] = useState(20);


    function addPlus() {

        setLife(++life_player_1);
        //console.log(life_player_1);
    }

    function addLess() {
        --life_player_1;
        //console.log(life_player_1);
    }


    return (

        <
        View style = { styles.container } >

        <
        View style = { styles.plane_1 } >

        <
        View style = { styles.top_pane } >
        <
        TouchableOpacity onPress = {
            () => {}
        } >
        <
        SvgUri style = { select_color_img }
        source = { select_color_img }
        /> < /
        TouchableOpacity > <
        /View>


        <
        View style = { styles.center_pane } >
        <
        TouchableOpacity onPress = {
            () => { addLess() }
        } >
        <
        SvgUri style = { styles.less_img }
        source = { less_img }
        /> < /
        TouchableOpacity >

        <
        Text style = { styles.life } > { life } < /Text> <
        Home life = { 12 } > < /Home>

        <
        TouchableOpacity onPress = {
            () => { addPlus() }
        } >
        <
        SvgUri style = { styles.plus_img }
        source = { plus_img }
        /> < /
        TouchableOpacity >

        <
        /View>


        <
        View style = { styles.bottom_pane } >
        <
        TouchableOpacity onPress = {
            () => {}
        } >
        <
        SvgUri style = { select_color_img }
        source = { select_color_img }
        /> < /
        TouchableOpacity >

        <
        TouchableOpacity onPress = {
            () => {}
        } >
        <
        SvgUri style = { grant_img }
        source = { grant_img }
        /> < /
        TouchableOpacity >


        <
        /View>




        <
        /View>

        <
        View style = { styles.center_bar } >
        <
        SvgUri style = { styles.logo_img }
        source = { logo_img }
        /> <
        View style = { styles.line } > < /View> < /
        View >


        <
        View style = { styles.plane_2 } >

        <
        Text style = { styles.life } > { life_player_2 } < /Text>

        <
        /View>

        <
        /View>


    );

}