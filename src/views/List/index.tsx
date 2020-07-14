import React, { useEffect } from 'react'
import { getList } from './services'
import './index.less'

const List = () => {

  const queryList = async () => {
    const res: any = await getList()
  }

  useEffect(() => {
    queryList()
  }, [])

  return <div>List</div>
}

export default List
