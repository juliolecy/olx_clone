import{ styled, keyframes }from 'styled-components'

const Spinner = keyframes`
 0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.55,1.55);
  } 100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1,1);
  }
`
export const Container = styled.div`
min-height: 12rem;
.spin div > div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #0a0a0a;
  animation: ${Spinner} 1.8518518518518516s linear infinite;
}.spin div:nth-child(1) > div {
  left: 134px;
  top: 92px;
  animation-delay: -1.5873015873015872s;
}
.spin > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 142px 100px;
}.spin div:nth-child(2) > div {
  left: 118px;
  top: 125px;
  animation-delay: -1.3227513227513226s;
}
.spin > div:nth-child(2) {
  transform: rotate(51.42857142857143deg);
  transform-origin: 126px 133px;
}.spin div:nth-child(3) > div {
  left: 83px;
  top: 133px;
  animation-delay: -1.0582010582010581s;
}
.spin > div:nth-child(3) {
  transform: rotate(102.85714285714286deg);
  transform-origin: 91px 141px;
}.spin div:nth-child(4) > div {
  left: 54px;
  top: 110px;
  animation-delay: -0.7936507936507936s;
}
.spin > div:nth-child(4) {
  transform: rotate(154.28571428571428deg);
  transform-origin: 62px 118px;
}.spin div:nth-child(5) > div {
  left: 54px;
  top: 74px;
  animation-delay: -0.5291005291005291s;
}
.spin > div:nth-child(5) {
  transform: rotate(205.71428571428572deg);
  transform-origin: 62px 82px;
}.spin div:nth-child(6) > div {
  left: 83px;
  top: 51px;
  animation-delay: -0.26455026455026454s;
}
.spin > div:nth-child(6) {
  transform: rotate(257.14285714285717deg);
  transform-origin: 91px 59px;
}.spin div:nth-child(7) > div {
  left: 118px;
  top: 59px;
  animation-delay: 0s;
}
.spin > div:nth-child(7) {
  transform: rotate(308.57142857142856deg);
  transform-origin: 126px 67px;
}
.loadingio-spinner-spin-1g1xtii6mo {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #f1f2f3;
}
.spin {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.spin div { box-sizing: content-box; }

`