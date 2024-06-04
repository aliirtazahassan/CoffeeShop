import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  LoginBody: {
    width: 350,
    height: 400,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    borderRadius: 20,
  },
  LoginHeader: {
    color: '#0ff',
    margin: 20,
    fontSize: 32,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  inputContainer: {
    marginTop: 20,
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: 300,
    height: 40,
    borderRadius: 10,
    color: '#ffff',
    marginTop: 20,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#0ff',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0ff',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  text: {
    color: '#fff',
    marginTop: 20,
  },
  signupBody: {
    width: 350,
    height: 580,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    borderRadius: 20,
  },
  mainBody: {
    backgroundColor: '#000000',
    flex: 1,
  },
  imageHeader: {
    width: 'auto',
    height: 250,
  },
  introBox: {
    width: 'auto',
    height: 150,
    backgroundColor: 'rgba(128,0,0,0.3)',
    marginTop: -150,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  introText: {
    color: '#ffff',
    fontSize: 18,
    padding: 15,
    margin: 10,
  },
  productItem: {
    width: 190,
    marginLeft: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  productImage:{
    width: 187,
    height: 150,
    borderRadius: 20,
    borderRadius: 20,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  productName: {
    color: '#ffff',
    textAlign: 'center',
    margin: 8,
    fontSize: 18,
  },
  productDescription:{
    color: '#fff',
  },
  productDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  
  productPrice: {
    color: '#ffff',
    textAlign: 'left',
    flex: 1,
  },
  addCartButton: {
    width: 20,
    height: 20,
  },
  centerHeading:{
    color: '#0ff',
    textAlign: 'center',
    fontSize: 28,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cartHeader:
  {
    color: '#0ff',
    textAlign: 'center',
    fontSize: 28,
    marginTop: 10,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  cartBox: {
    flexDirection: 'row',
    marginTop: 50,
    width: 380,
    borderColor: '#ffff',
    borderWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  cartBoxImage:{
    width: 130,
    height: 130,
    resizeMode: 'center',
  },
  cartBoxDetails:{
    flex: 1,
    backgroundColor: 'rgba(150,0,0,0.7)',
  },
  cartBoxName: {
    color: '#ffff',
    fontSize: 18,
    paddingLeft: 8,
    marginTop: 10
  },
  cartBoxDescription:{
    color: '#ffff',
    fontSize: 14,
    paddingLeft: 8,
    paddingTop: 5,
  },
  cartBoxButtonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align items on the opposite ends
    paddingHorizontal: 10, // Add horizontal padding for spacing
    marginTop: 10,
    marginBottom: 10,
  },
  cartBoxPrice: {
    color: '#ffff',
  },
  buyButton: {
    backgroundColor: '#FFFF00',
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 5,
  },
});

export default styles;
