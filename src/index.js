import 'babel-polyfill'
import CanvasMap from './canvas-map'

let map=CanvasMap({
  textContainer:document.querySelector('.text'),
  mapSrc:'img/world_map_blank.svg',
  trailVisitedColor:'#7e2c20',
  fontPresentColor:'#5D5C56',
}).appendTo('.container')
