import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 'null',
            data: {
                face: 'ffff'   
            }
        }
        this.getData = this.getData.bind(this);
    }
    getData() {
        this.setState({test: 'success test'});
        fetch("https://api-cn.faceplusplus.com/facepp/v3/detect?api_key=xoGiSlrdE0B6v-63JE_oFe9--FLbb2vL&api_secret=boHJ5efx-5wrc1HAkeDtPerE-Ezu3gC3&image_url=http://imgsrc.baidu.com/forum/w%3D580/sign=28a06bb78c1001e94e3c1407880f7b06/48540923dd54564e1934c667b2de9c82d1584f1e.jpg&return_landmark=1",
        {
            method: 'POST'
        })
        .then(function(res){ return res.json(); })
        .then(function(responJSON){
            console.log(JSON.stringify(responJSON));
         })
        .catch((error) => {
            console.log(error);
        })
    }
    render() {
        return (
            <TouchableHighlight onPress={this.getData}>
                <Text>{this.state.data.face}</Text>       
            </TouchableHighlight>
        );
    }
}