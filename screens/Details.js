import React from 'react'
import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants'
import { CircleButton, RectangleButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components'

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{
      width: '100%',
      height: 373
    }}>
      <Image 
        style={{
          width: '100%',
          height: '100%'
        }}
        resizeMode='cover'
        source={data.image}
        alt="image"
      />

      <CircleButton 
        left={15}
        top={StatusBar.currentHeight + 10}
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
      />

      <CircleButton 
        right={15}
        imgUrl={assets.heart}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  )
}

const Details = ({ route, navigation }) => {
  const { data } = route.params

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1
      }}>
        <RectangleButton 
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        />
      </View>

      <FlatList 
        data={data.bids}
        keyExtractor={( item ) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} /> 

              {data.bids.length > 0 && (
                <Text style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary
                }}>
                  Current Bids
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
        renderItem={({ item }) => <DetailsBid bid={item} />}
      />
    </SafeAreaView>
  )
}

export default Details