import OpenFFService from "../../services/OpenFFService";

const INITIAL_STATE = {
    openFFService: new OpenFFService()
}

export default (state = INITIAL_STATE, actions) => {
    return state;
}