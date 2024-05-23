import React, { useEffect, useState } from 'react'
import Search from './Search'
import ProductTable from './ProductTable';
import TableBottom from './TableBottom';
import TransctionsStatistics from './TransctionsStatistics';
// import BarChart from './BarChart';
import BarChartContainer from './BarChartContainer';
import { ApiEndPoints, requestMethod, serverCall } from './Server';


const TransactionList = () => {
  const [TransactionData, setTransactionData] = useState([])
  const [pageno, setPageNo] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [month, setMonth] = useState({ value: '03', label: 'March' })
  const [statisticsInfo, setStatistic] = useState({
    "totalSaleAmount": 0,
    "totalSoldItems": 0,
    "totalNotSoldItems": 0
  })
  const [BarChartData, setBarChart] = useState([])

  const getTransactionListData = async (pageNo, searchText, month) => {
    try {
      const params = {
        page: pageNo,
        perPage: 10,
        searchTitle: searchText,
        month: month
      }
      const result = await serverCall(ApiEndPoints.TRANSACTIONLIST, params)
      if (result && result.transactions) {
        setTransactionData(result.transactions)

      }

    } catch (error) {

    }
  }

  const getStatisticData = async (month) => {
    try {
      const params = {
        month: month
      }
      const result = await serverCall(ApiEndPoints.STATISTICS, params)
      if (result) {
        setStatistic(result)

      }

    } catch (error) {
      console.log(error)

    }
  }

  const getBarChartData = async (month) => {
    try {
      const params = {

        month: month
      }
      const result = await serverCall(ApiEndPoints.BARCHART, params, requestMethod.GET)

      if (result.barChartData) {
        setBarChart(result.barChartData)

      }

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getTransactionListData(1, '', month.value)
    getStatisticData(month.value)
    getBarChartData(month.value)

  }, [])

  const onSearch = (search) => {
    setSearchText(search)
    setPageNo(1)
    getTransactionListData(1, search, month.value)
  }

  const onChangePage = (page) => {
    setPageNo(page)
    getTransactionListData(page, searchText, month.value)
  }
  const onChangeMonth = (month) => {
    setMonth(month)
    setSearchText('')
    getTransactionListData(1, '', month.value)
    getStatisticData(month.value)
    getBarChartData(month.value)
  }

  return (
    <div
      style={{
        width: "75%",
        margin: 'auto',

      }}
    >
      <Search
        setSearch={onSearch}
        month={month}
        setMonth={onChangeMonth}
        searchtext={searchText}
      />
      <ProductTable
        data={TransactionData}
      />
      <TableBottom
        pageno={pageno}
        onChangePage={onChangePage}
      />
      {Object.keys(statisticsInfo).length > 0 && <TransctionsStatistics
        month={month.label}
        total_sale={statisticsInfo.totalSaleAmount ?? 0}
        total_sold_item={statisticsInfo.totalSoldItems ?? 0}
        total_not_sold_item={statisticsInfo.totalNotSoldItems ?? 0}
      />}

      {BarChartData.length > 0 &&
        <BarChartContainer
          barChartData={BarChartData}
        />
      }
    </div>
  )
}

export default TransactionList
