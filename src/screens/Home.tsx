import { View, Text, StatusBar, ScrollView } from 'react-native'
import styled from 'styled-components'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const OuterView = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  /* paddingHorizontal */
  padding-inline: 15;
  align-items: center;
`

const TitleText = styled(Text)`
  font-size: 25;
  font-weight: 500;
`

// const IconContainer = styled(View)`
//   justify-content: space-around;
//   flex-direction: row;
//   padding-inline: 15;
//   align-items: center;
// `

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <OuterView>
        <View>
          <TitleText>
            Instagram
          </TitleText>
        </View>
        <OuterView>
          <FontAwesome name="plus-square-o" style={{ fontSize: 24, paddingHorizontal: 15 }} />
          <Feather name="navigation" style={{ fontSize: 24 }} />
        </OuterView>
      </OuterView>
      <ScrollView>
        {/* Stroies */}
        {/* Posts */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home