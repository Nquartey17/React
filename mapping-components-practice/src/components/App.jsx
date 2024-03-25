import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(emoji) {
  return (
    <Entry
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      detail={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
        {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🙏
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.
          </dd>
        </div> */}
      </dl>
    </div>
  );
}

export default App;
