import {ru} from '../assets/ru'
import {eng} from '../assets/eng'
import {useSelector} from "react-redux";
import {selectLang} from "../store/lang/selectors";

export function useLang() {
    const lang = useSelector(selectLang)
    let texts = {}

    if (!lang) {
        texts = ru
    } else {
        texts = eng
    }

    return {
        buttons: texts.buttons,
        inputs: texts.inputs,
        texts: texts.texts,
        errors: texts.errors,
        selects: texts.selects
    }
}