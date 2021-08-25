import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import orgReducer from "./OrgReducer";
import teamAccessReducer from "./teamAccessReducer";
import toggleRegReducer from "./toggleRegReducer";
import userAuthReducer from "./userAuthReducer";
import userReducer from "./UserReducer";
import episodeReducer from "./episodeReducer";
import themeReducer from "./themeReducer";
import topicReducer from "./topicReducer";
import audioReducer from "./audioReducer";

export default combineReducers({
  form: formReducer,
  teamAcess: teamAccessReducer,
  auth: userAuthReducer,
  toggle: toggleRegReducer,
  org: orgReducer,
  user: userReducer,
  theme: themeReducer,
  topic: topicReducer,
  episode: episodeReducer,
  activeAudio: audioReducer
});
