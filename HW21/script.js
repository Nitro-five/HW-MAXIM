let _value = 0;

const set = value => {
    console.log('[set][_value]', _value);
    console.log('[set]', value);
    _value = value;
};

const add = num => {
    console.log('[add][_value]', _value);
    console.log('[add]', num);
    _value += num;
};

const mult = num =>{
   console.log('[mult][_value]', _value);
   console.log('[add]',num);
}

const div = num => {
    console.log('[div][_value]', _value);
    console.log('[div]', num);
    _value /= num;
};

const sub = num =>{
   console.log('[sub] [_value]',_value);
   console.log('[sub]', num);
   _value -=num;
}

const printResult = () => {
    console.log(_value);
};

module.exports = {
    set,
    add,
    mult,
    div,
    sub,
    getResult:() => _value,
    printResult: () => console.log(_value)
};