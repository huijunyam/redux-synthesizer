import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.notes.indexOf(note) !== -1) {
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  render() {
    this.playNotes();
    const noteKey = NOTE_NAMES.map((note, idx) => (
      <NoteKey key={idx} note={note} pressed={this.props.notes.includes(note)} />
    ));
    return (
      <div>
        <div>
          Redux Synthesizer
        </div>
        <div>
          {noteKey}
        </div>
      </div>
    );
  }
}

export default Synth;
