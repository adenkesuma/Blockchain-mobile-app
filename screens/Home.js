import { useState } from 'react'
import { Text, View, SafeAreaView, FlatList } from 'react-native'

// import file in folder
import { COLORS, NFTData } from '../constants'
import { FocusedStatusBar, NFTCard, HomeHeader } from '../components'


const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar background={COLORS.primary} /> 

        <View style={{ flex: 1 }}>
            <View style={{ zIndex: 0 }}>
                <FlatList 
                    data={NFTData}
                    keyExtractor={({ id }) => id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<HomeHeader />}
                    renderItem={({ item }) => <NFTCard data={item} /> }
                />
            </View>

            {/* fixed background top header */}
            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1
            }}>
                <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                <View style={{ fles: 1, backgroundColor: COLORS.white }} />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home