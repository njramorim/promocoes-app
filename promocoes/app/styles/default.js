//estilos
import * as guide from './guide'
const gCor = guide.appColors
import {StyleSheet} from 'react-native'

const distanciaFormTopo = 180
const alturaInput = 40
const topInput = 10


import Dimensions from 'Dimensions'
const alturaTela = Dimensions.get('window').height
const larguraTela =Dimensions.get('window').width;

//cria modulo de estilo e o exporta
module.exports = StyleSheet.create ({
  absolute:{
    position: 'absolute',
  },
  fullScreenAbsolute: {
    position: 'absolute',
    top:0,
    left:0,
    width: larguraTela,
    height: alturaTela,
  },
  relative: {
    position: 'relative',
  },
  mainContainer: {
    flex: 1,
    padding: 30,
    paddingTop: distanciaFormTopo,
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: gCor.second,
    position: 'relative'
  },
  fullContainer: {
    backgroundColor: gCor.second,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
    paddingTop: 80,
    position: 'relative'
  },
  area2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 0,
    position: 'relative',
  },
  dropDownArea: {
    marginTop: -(alturaTela - 140),
  },
  loginInput: {
    height: alturaInput,
    padding:10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4,
    color: gCor.darkClean,
    backgroundColor: gCor.clean,
    zIndex: 10,
  },
  inputBgLeft:{
    paddingLeft: 50,

  },
  inputImgLeft: {
    left: 30,
    zIndex: 50,
  },
  inputImg1:{
    top: distanciaFormTopo,
  },
  inputImg2:{
    top: distanciaFormTopo + alturaInput + topInput,
  },
  inputImg3:{
    top: distanciaFormTopo + (alturaInput * 2) + (topInput * 2),
  },
  notFirstInput: {
    marginTop: topInput
  },
  loginButton: {
    height: alturaInput,
    marginTop: 15,
    paddingLeft: 0,
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 4,
    backgroundColor: gCor.first
  },
  loginButtonText: {
    color: gCor.clean,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },

  selectContainer: {
    position: 'relative',
    height: alturaInput + 10,
    borderRadius: 8,
    backgroundColor: gCor.clean,
  },
  optionListContainer: {
    backgroundColor:gCor.first,
    position: 'relative',
    paddingRight:0,
  },
  optionListItem: {
    paddingLeft:40,
    height:44,
    position: 'relative',
    overflow: 'hidden'
  },
  optionListImg: {
    top: 20,
    left: 12,
  },
  optionListImgBorder: {
    bottom: 0,
    left: 0,
  },
  optionListText: {
    fontSize: 15,
    height:44,
    paddingTop: 14,
    paddingLeft: 10,
    color: gCor.clean,
  },
  kmSelectContainer: {
    backgroundColor: gCor.firstDark,
  },
  selectText: {
    textAlign: 'left',
    paddingLeft: 80,
    fontSize: 15,
    lineHeight: alturaInput - 5,
    height: alturaInput + 10,
    backgroundColor: 'transparent',
  },
  nameSelectText: {
    color: gCor.cleanDark,
  },
  kmSelectText: {
    color: gCor.clean,
  },
  kmSelectImg: {
    top:0,
  },
  kmSelectImg2: {
    top:0,
    right:0,
  },
  kmOptionsContainer: {
    marginLeft:55,
    marginRight:49,
  },
  kmSelectOption: {
    marginTop: 0,
    borderRadius: 0,
    backgroundColor: gCor.firstMedium,
  },
  kmSelectOption2: {
    backgroundColor: gCor.first,
  },
  kmSelectTextOption: {
    paddingLeft:0,
    textAlign: 'center',
    fontSize: 38,
    fontWeight: '500',
    lineHeight: alturaInput + 8,
  },

  screenOverlay: {
    position: 'absolute',
    top: -(alturaTela / 3),
    left:-10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: alturaTela * 2,
    width:larguraTela + 50,
  },
  screenOverlayOff: {
    height:0,
    width:0,
  },
  offItem: {
    height:0,
    width:0,
    opacity:0,
    overflow: 'hidden',
    backgroundColor: 'transparent'
  },

  bigButton: {
    position: 'relative',
    marginTop: 15,
    height: alturaInput + 10,
    borderRadius: 4,
    overflow: 'hidden',
  },
  bigButtonText: {
    textAlign: 'center',
    height: alturaInput + 10,
    paddingTop: 14,
    fontSize: 18,
    color: gCor.clean,
    backgroundColor: gCor.first,
  },

  cardPromoWrap: {
    marginTop:15,
  },
  cardScrollView: {
    height: alturaTela - 220,
  },
  cardPromoGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardPromoItem: {
    alignItems: 'center',
    margin:5,
    marginBottom: 10,
    width: (larguraTela / 2) - 25,
    overflow: 'hidden',
    borderRadius:4,
    backgroundColor: gCor.clean,
  },
  cardPromoItemText: {
    padding:10,
    textAlign: 'center',
    fontSize:12,
    color: gCor.darkClean,
  },
})
