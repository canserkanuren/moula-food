import { HISTORY_SCAN_ALL, HISTORY_SCAN_CLEAR, HISTORY_SCAN_ADD, HISTORY_SCAN_DEL } from "../actions/historyActions";
import { HISTORY_SEARCH_ALL, HISTORY_SEARCH_CLEAR, HISTORY_SEARCH_ADD, HISTORY_SEARCH_DEL } from "../actions/historyActions";

const INITIAL_STATE = {
  searched: [],
  scanned: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HISTORY_SCAN_ALL:
      return { scanned: action.payload };
    case HISTORY_SCAN_CLEAR:
      return { scanned: action.payload };
    case HISTORY_SCAN_ADD:
      return { scanned: action.payload };
    case HISTORY_SCAN_DEL:
      return { scanned: action.payload };

    case HISTORY_SEARCH_ALL:
      return { searched: action.payload };
    case HISTORY_SEARCH_CLEAR:
      return { searched: action.payload };
    case HISTORY_SEARCH_ADD:
      return { searched: action.payload };
    case HISTORY_SEARCH_DEL:
      return { searched: action.payload };

    default:
      return state
  }
}