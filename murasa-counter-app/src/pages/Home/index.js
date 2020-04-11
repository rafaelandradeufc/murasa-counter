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


    const [lifing_1, setLifing_1] = useState(20);
    const [lifing_2, setLifing_2] = useState(20);


    function addPlus1(num) {
        setLifing_1(++num);   
    }

    function addLess1(num) {
        setLifing_1(--num);  
    }

    function addPlus2(num) {
        setLifing_2(++num);   
    }

    function addLess2(num) {
        setLifing_2(--num);  
    }


    return (

        <View style={styles.container} >

            <View style={styles.plane_1} >

                <View style={styles.top_pane}>
                    <TouchableOpacity onPress={() => { }}>
                        <SvgUri style={select_color_img} source={select_color_img}/>
                    </TouchableOpacity >
                </View>


                <View style={styles.center_pane}>
                    <TouchableOpacity onPress={() => { addLess1(lifing_1) }}>
                        <SvgUri style={styles.less_img} source={less_img}/>
                    </TouchableOpacity >

                    <Text style={styles.life}>{lifing_1}</Text>

                    <TouchableOpacity onPress={() => { addPlus1(lifing_1)}} >
                        <SvgUri style={styles.plus_img} source={plus_img}/>
                    </TouchableOpacity >

                </View>


                <View style={styles.bottom_pane}>
                    <TouchableOpacity onPress={() => {}}>
                        <SvgUri style={select_color_img} source={select_color_img}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}}>
                        <SvgUri style={grant_img} source={grant_img}/>
                    </TouchableOpacity >

                </View>

            </View>

            <View style={styles.center_bar}>
                <SvgUri style={styles.logo_img} source={logo_img}/>
                <View style={styles.line}></View>
            </View >


            <View style={styles.plane_2}>
                <Text style={styles.life}>{lifing_2}</Text>
            </View>

        </View>


    );

}