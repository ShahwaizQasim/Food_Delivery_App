import React, { useState } from 'react';
import Layout from '../components/ui/layout';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import ThemeButton from '../components/ui/Buttons';
import FoodImage from '../components/Food/FoodImage';
import FoodInfo from '../components/Food/FoodInfo';
import { useNavigation } from '@react-navigation/native';

const FoodDetails = () => {
  const [spicyLevel, setSpicyLevel] = useState(0.5); // 0 = Mild, 1 = Hot
  const [portion, setPortion] = useState(2);
  const navigation = useNavigation();
  return (
    <Layout>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        {/* header  */}
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.goBack()}
              style={{ padding: 8 }}
            >
              <Image
                source={require('../assets/arrow-left.png')}
                style={styles.ArrowImg}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={require('../assets/search.png')}
              style={styles.ArrowImg}
            />
          </View>
        </View>

        {/* burerImage  */}
        <FoodImage source={require('../assets/burgerDetail.png')} />
        <View style={styles.textConatiner}>
          <FoodInfo
            title="Cheeseburger Wendy's Burger"
            rating="4.9"
            time="26 mins"
            description="The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles."
          />

          <View style={styles.wrapper}>
            {/* Spicy + Portion Row */}
            <View style={styles.row}>
              {/* ===== Spicy Section ===== */}
              <View style={styles.section}>
                <Text style={styles.label}>Spicy</Text>

                <View style={styles.sliderRow}>
                  <Text style={styles.sideText}>Mild</Text>

                  <View style={styles.track}>
                    <View
                      style={[
                        styles.filledTrack,
                        { width: `${spicyLevel * 100}%` },
                      ]}
                    />
                    <View
                      style={[styles.thumb, { left: `${spicyLevel * 100}%` }]}
                    />
                  </View>

                  <Text style={styles.sideText}>Hot</Text>
                </View>
              </View>

              {/* ===== Portion Section ===== */}
              <View style={styles.section2}>
                <Text style={styles.label}>Portion</Text>

                <View style={styles.portionRow}>
                  <TouchableOpacity
                    style={styles.circleBtn}
                    onPress={() => setPortion(prev => Math.max(1, prev - 1))}
                  >
                    <Text style={styles.btnText}>−</Text>
                  </TouchableOpacity>

                  <Text style={styles.portionText}>{portion}</Text>

                  <TouchableOpacity
                    style={styles.circleBtn}
                    onPress={() => setPortion(prev => prev + 1)}
                  >
                    <Text style={styles.btnText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <View>
              <ThemeButton
                btnStyle={styles.btnDesign}
                textStyle={{ fontSize: 18 }}
              >
                $8.24
              </ThemeButton>
            </View>
            <View>
              <ThemeButton
                btnStyle={styles.btnDesign2}
                textStyle={{ fontSize: 18 }}
              >
                Order Now
              </ThemeButton>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    margin: 'auto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 34,
  },
  ArrowImg: {
    height: 30,
    width: 30,
  },
  textConatiner: {
    flex: 0.6,
  },
  wrapper: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 50,
    marginTop: 10,
  },
  section: {
    flex: 1,
    alignItems: 'flex-start',
  },
  section2: {
    alignItems: 'flex-end',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 10,
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideText: {
    fontSize: 13,
    color: '#666',
  },
  track: {
    flex: 1,
    height: 4,
    backgroundColor: '#FFCDD2',
    borderRadius: 10,
    marginHorizontal: 8,
    justifyContent: 'center',
    position: 'relative',
  },
  filledTrack: {
    height: 4,
    backgroundColor: '#E53935',
    borderRadius: 10,
    position: 'absolute',
    left: 0,
  },
  thumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#E53935',
    position: 'absolute',
    top: -6,
    marginLeft: -8,
  },
  portionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#E53935',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginTop: -1,
  },
  portionText: {
    fontSize: 17,
    fontWeight: '600',
    marginHorizontal: 14,
    color: '#222',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 38,
  },
  btnDesign: {
    backgroundColor: '#EF2A39',
  },
  btnDesign2: {
    backgroundColor: '#3C2F2F',
    paddingHorizontal: 34,
  },
});

export default FoodDetails;
