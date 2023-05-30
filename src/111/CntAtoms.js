import { atom, selector } from "recoil";

export const CntAtoms = atom({
    key: 'CntAtoms',
    default: 0
});

//아톰이 바뀌면 셀렉터도 자동으로 바뀌고 호출.

export const CntAtomsTwice = selector({ //변경시 같이 일어나야 하는 일
    key: 'CntAtomsTwice',
    get: ({ get }) => {
        return get(CntAtoms) * 2;

    }
});