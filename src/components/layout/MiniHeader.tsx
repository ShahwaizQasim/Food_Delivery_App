import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MiniHeader = ({onPress}:any) => {
    return (
        <View style={styles.header}>
            <View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={onPress}
                    style={{ padding: 8 }}
                >
                    <Image
                        source={require('../../assets/arrow-left.png')}
                        style={styles.ArrowImg}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <Image
                    source={require('../../assets/search.png')}
                    style={styles.ArrowImg}
                />
            </View>
        </View>

    )
}

export default MiniHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 34,
    },
    ArrowImg: {
        height: 30,
        width: 30,
    },
})