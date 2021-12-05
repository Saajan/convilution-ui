import react from 'react';
import { Table } from 'antd';

const Widget3 = () => {
  const columns = [
    {
      title: 'Device OS',
      dataIndex: 'os',
      key: 'os',
    },
    {
      title: 'Attempts %',
      dataIndex: 'attempts',
      key: 'attempts',
    }
  ]
  const data = [
    {
      os: 'tvOS 14.3',
      attempts: '0.888'
    },
    {
      os: 'tvOS 14.02',
      attempts: '0.654'
    },
    {
      os: 'tvOS 14.01',
      attempts: '0.512'
    },
    {
      os: 'tvOS 13.23',
      attempts: '0.34'
    },
    {
      os: 'iOS 7.5',
      attempts: '0.21'
    },
    {
      os: 'tvOS 13.11',
      attempts: '0.143'
    },
    {
      os: 'tvOS 13.06',
      attempts: '0.093'
    },
    {
      os: 'tvOS 12.9',
      attempts: '0.084'
    },
    {
      os: 'iOS 6.3',
      attempts: '0.077'
    },
    {
      os: 'iOS 6.1',
      attempts: '0.01'
    },
  ]
  return (
    <div>
      <div>
        <div className="p-1 font-bold text-center">Least 10 Apple OS attempts in last month</div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}

export default Widget3;