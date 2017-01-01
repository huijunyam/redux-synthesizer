import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
  }

  render() {
    return (
      <div>
        <ul>
          {this.notes.map((note, idx) => (
            <li key={idx}>{note.stop()}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Synth;
