import cn from 'classnames';
import { useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { ArrowUp } from '@/components/icons/arrow-up';
import { LongArrowUp } from '@/components/icons/long-arrow-up';
import { walletCurrencies } from '@/data/static/wallet-currencies';

const data = [
  {
    name: 'Circulating',
    value: 700,
    volume: '70%',
    named: true,
  },
  {
    name: 'Staking',
    value: 190,
    volume: '19%',
    named: false,
  },
  {
    name: 'Prizes',
    value: 50,
    volume: '5%',
    named: true,
  },
  {
    name: 'Advisers',
    value: 20,
    volume: '2%',
    named: false,
  },
  {
    name: 'Operations',
    value: 20,
    volume: '2%',
    named: false,
  },
  {
    name: 'Team',
    value: 20,
    volume: '2%',
    named: false,
  },
  {
    name: 'Burn',
    value: 40,
    volume: '4%',
    named: true,
  },
];

export default function WalletCard() {
  const [named, setName] = useState('Circulating');
  const [percentage, setPercentage] = useState(data[0].volume);
  return (
    <div className="rounded-lg p-6 shadow-card sm:p-8">
      {/* <h3 className="mb-6 mt-0 text-base font-medium uppercase">Distribution</h3> */}

      <div className="relative flex h-[290px] justify-center">
        <ResponsiveContainer width={290} height="100%">
          <PieChart width={290} height={290}>
            <Pie
              data={data}
              cx={140}
              cy={140}
              innerRadius={98}
              outerRadius={135}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              onMouseMove={(data) => {
                setName(
                  data.payload.payload && data.payload.payload.name
                );
                setPercentage(
                  data.payload.payload && data.payload.payload.volume
                );
              }}
            >
              {walletCurrencies.map((currency) => (
                <Cell
                  key={`cell-${currency.code}`}
                  fill={currency.color}
                  stroke="transparent"
                />
              ))}
            </Pie>
            <Tooltip content={<></>} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute left-2/4 top-2/4 flex h-[156px] w-[156px] -translate-x-2/4 -translate-y-2/4 transform items-center justify-center rounded-full border-2 border-solid border-gray-400 bg-gray-50 dark:border-gray-600 dark:bg-gray-900">
          <span
            className='flex items-center text-base text-center justify-center font-medium'
          >
            {named}<br/>
            {percentage}
          </span>
        </div>
      </div>

      <div className="mt-10">
        <div className="mb-5 flex items-center justify-between text-sm text-gray-400">
          <span>Designation</span>
          <span>Amount</span>
        </div>
        <ul className="grid gap-3">
          {walletCurrencies.map((currency) => (
            <li
              key={currency.code}
              id={currency.name}
              className="grid grid-cols-[150px_repeat(2,1fr)] items-center justify-between text-sm text-white 2xl:grid-cols-[140px_repeat(2,1fr)] 3xl:grid-cols-[150px_repeat(2,1fr)]"
            >
              <span className="disname flex items-center gap-2.5 whitespace-nowrap">
                <b>{currency.name}</b>
              </span>
              <span className="text-center italic">{currency.code}</span>
              <span
                className='flex items-center justify-end'
              >
                {currency.volume}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
