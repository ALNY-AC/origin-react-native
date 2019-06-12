import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**组件类 */
export default class $NAME$ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        }
    }
    /**渲染函数 */
    render() {
        return (
            <View style={styles.listPanel}>
                <View style={styles.listBox}>
                    {this.renderList(list)}
                </View>
            </View>
        );
    }
    /**渲染列表的函数
     * @param list 想要循环的数组
     */
    renderList(list) {
        return list.map((item, index) => {
            return this.renderItem(item, index, list);
        })
    }
    /**渲染列表项目的函数 
     * @param item 当前循环的元素
     * @param index 当前循环的下标
     * @param list 当前循环的数组
    */
    renderItem(item, index, list) {
        return (
            <View style={styles.item}>
                <Text>$NAME$-{item},{index}</Text>
            </View>
        );
    };
};


/**样式 */
const styles = StyleSheet.create({
    /**外壳 */
    listPanel: {
    },
    /**列表容器 */
    listBox: {
    },
    /**列表元素 */
    item: {
    }
});