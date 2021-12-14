import React, { Component, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function DemoHook(props) {
    // Hook hoạt động ở cấp function
    // const [state, setObjectState] = useObjectState({ title: "React Native 03", address: "TP.HCM" });
    const [title, setTitle] = useState();

    useEffect(() => {
        console.log('render');
    }, [])

    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{title}</Text>
        <TouchableOpacity onPress={() => setTitle("Hong cute")}>
            <Text> Change title</Text>
        </TouchableOpacity>
        {/* <Text>{state.address}</Text>
        <TouchableOpacity onPress={() => setObjectState({ address: "Lam Dong" })}>
            <Text> Change address</Text>
        </TouchableOpacity> */}
    </View >
}

const useObjectState = objectState => {
    const [state, setstate] = useState(objectState);

    const setObjectState = params => {
        const listKey = Object.keys(params);
        for (let index = 0; index < listKey.length; index++) {
            const key = listKey[index];
            const value = params[listKey[index]];

            setstate({ ...state, [key]: value })

        }

    };
    return [state, setObjectState];
}
