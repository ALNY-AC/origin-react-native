import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**组件类 */
export default class $NAME$ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
    }
    /**渲染函数 */
    render() {
        return (
            <View style={styles.panel}>
                <View style={styles.header}>
                </View>
                <View style={styles.body}>
                    <Text>$NAME$</Text>
                </View>
                <View style={styles.footer}>
                </View>
            </View>
        );
    }
};


/**样式 */
const styles = StyleSheet.create({
    /**外壳 */
    panel: {
    },
    /**头部 */
    header: {
    },
    /**内容区 */
    body: {
    },
    /**页脚 */
    footer: {
    }
});