import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  itemCard: {
    marginVertical: 7,
    marginHorizontal: 10,
    padding: 7,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    maxWidth: Math.round(((Dimensions.get('window').width) / 2) - 42)
  },
  itemImage: {
    width: 150,
    height: 150, 
    resizeMode:'contain'
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 4
  },
  itemBrand: {
    color: 'gray'
  },
  itemQuality: {
    color: 'gray'
  }

});