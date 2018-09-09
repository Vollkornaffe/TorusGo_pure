import {connect} from 'react-redux';
import {IState} from '../types/redux';
import ThreeAnimation, {IProps} from "./ThreeAnimation";

const mapStateToProps = (state: IState): IProps => {
  const width = state.dimensions.window.width - state.dimensions.sideBar.width;
  const height = state.dimensions.window.height - state.dimensions.appBar.height;
  const offsetX = state.dimensions.sideBar.width;
  const offsetY = state.dimensions.appBar.height;

  // TOOD retrieve these from store
  const boardSizeX: number = 15;
  const boardSizeY: number = 21;
  const radius: number = 1;
  const thickness: number = 0.3;
  const stoneSize: number = 0.025;
  // const keys ?
  const boardState: number[] = [
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
    0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,
  ];

  return {
    width,
    height,
    offsetX,
    offsetY,
    boardSizeX,
    boardSizeY,
    radius,
    thickness,
    stoneSize,
    boardState,
  };
};

export default connect(mapStateToProps)(ThreeAnimation);