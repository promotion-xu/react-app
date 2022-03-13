import { appendFile } from 'fs'
import { useState, useEffect, useCallback } from 'react'


export default function () {
    const [data, setData] = useState({})

    const fetchData = useCallback(async () => {
        try {
            const res = await api.getUserData()
            if (res.code !== 200) {
                throw new Error(res.data.message)
            }
            setData(res)
        } catch (e) {
            setData({})
        }
    }, [])

    return data
}