import { connect } from 'react-redux';
import { startRecording, stopRecording } from '../../actions/track_actions.js';
import Recorder from './recorder';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  isRecording: state.isRecording
});

const mapDispatchToProps = (dispatch) => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
