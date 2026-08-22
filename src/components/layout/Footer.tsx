import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

const Footer = ({ navigation }: any) => {
  console.log("navigation=>", navigation);

  return (
    <View style={styles.wrapper}>
      {/* Footer */}
      <View style={styles.footer}>
        {/* Home */}
        <Pressable style={styles.iconButton} onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/home.png')}
            style={styles.icon}
          />
        </Pressable>

        {/* Profile */}
        <Pressable style={styles.iconButton} onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../assets/user.png')}
            style={styles.icon}
          />
        </Pressable>

        {/* Space for center button */}
        <View style={styles.centerSpace} />

        {/* Orders */}
        <Pressable style={styles.iconButton} onPress={() => navigation.navigate('Order')}>
          <Image
            source={require('../../assets/comment.png')}
            style={styles.icon}
          />
        </Pressable>

        {/* Favorite */}
        <Pressable style={styles.iconButton}>
          <Image
            source={require('../../assets/heart.png')}
            style={styles.icon}
          />
        </Pressable>
      </View>

      {/* Floating Button */}
      <Pressable style={styles.floatingButton}>
        <Image
          source={require('../../assets/plus.png')}
          style={styles.plusIcon}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginTop: 5,
  },

  footer: {
    height: 68,
    backgroundColor: '#F7253E',

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    paddingHorizontal: 8,
  },

  iconButton: {
    width: 45,
    height: 45,

    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  centerSpace: {
    width: 55,
  },

  floatingButton: {
    position: 'absolute',

    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: '#F7253E',

    top: -27,
    left: '50%',

    marginLeft: -29,

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 4,
    borderColor: '#fff',

    elevation: 6,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },

  plusIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default Footer;
