import 'babel-polyfill'
import CanvasMap from './canvas-map'

let map=CanvasMap({
  textContainer:document.querySelector('.text'),
  mapSrc:'img/world_map_blank.svg',
  trailVisitedColor:'#ffeb43',
  fontPresentColor:'#A2F4C5',
}).appendTo('.container')
