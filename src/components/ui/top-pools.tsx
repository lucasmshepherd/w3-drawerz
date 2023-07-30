import cn from 'classnames';
import CurrencySwapIcons from '@/components/ui/currency-swap-icons';
import { useLayout } from '@/lib/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/lib/constants';
import { ethers } from 'ethers';
import { useContract, useContractRead } from '@thirdweb-dev/react';

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const daysFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

interface TopPoolsProps {
  limit?: number;
}

function GetBalance(contract, input, key) {
  let raynBalance;
  let raynDecimals;
  let raynSplit;
  let remainder;
  const { data, isLoading } = useContractRead(contract, 'poolInfo', [input]);
  //console.log(data)
  if (data) {
    remainder = data[key];

    if (key == 'depositedAmount') {
      raynBalance = ethers.utils.formatEther(remainder);
      raynBalance = formatter.format(raynBalance);
      return raynBalance;
    } else if (key == 'apy') {
      raynBalance = daysFormatter.format(remainder);
      return raynBalance;
    } else if (key == 'lockDays') {
      raynBalance = daysFormatter.format(remainder);
      return raynBalance;
    }
  }
}

export default function TopPools({ limit }: TopPoolsProps) {
  let zero, one, two;
  let zeroLock, oneLock, twoLock;
  let zeroApy, oneApy, twoApy;
  const { layout } = useLayout();
  const { contract } = useContract(
    '0xF0f3794d6C174DB5d11c322A07C1dD88C2B17A25'
  );

  zero = GetBalance(contract, 0, 'depositedAmount');
  one = GetBalance(contract, 1, 'depositedAmount');
  two = GetBalance(contract, 2, 'depositedAmount');
  zeroApy = GetBalance(contract, 0, 'apy');
  oneApy = GetBalance(contract, 1, 'apy');
  twoApy = GetBalance(contract, 2, 'apy');
  zeroLock = GetBalance(contract, 0, 'lockDays');
  oneLock = GetBalance(contract, 1, 'lockDays');
  twoLock = GetBalance(contract, 2, 'lockDays');

  return (
    <div
      className={cn(
        'rounded-lg bg-white p-6 shadow-card dark:bg-light-dark sm:p-8',
        {
          'w-full lg:w-[49%]': layout === LAYOUT_OPTIONS.RETRO,
        }
      )}
    >
      <h3 className="mb-6 text-base font-medium uppercase">Legacy Staking</h3>
      <div className="mb-5 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span className="flex items-center font-medium ">RAYN Pools</span>
        <span className=" flex items-center font-medium ">Staked</span>
      </div>

      <div className="mb-5 flex items-center justify-between text-sm text-gray-900 last:mb-0 dark:text-white">
        <div className="flex grow-0 items-center ">
          <CurrencySwapIcons from="RAYN" to="RAYN2" /> {zeroApy}% APY |{' '}
          {zeroLock} Days
        </div>

        <span className="flex items-center justify-end text-right">
          {zero} RAYN
        </span>
      </div>

      <div className="mb-5 flex items-center justify-between text-sm text-gray-900 last:mb-0 dark:text-white">
        <div className="flex grow-0 items-center">
          <CurrencySwapIcons from="RAYN" to="RAYN2" /> {oneApy}% APY | {oneLock}{' '}
          Days
        </div>

        <span className="flex items-center justify-end text-right">
          {one} RAYN
        </span>
      </div>

      <div className="mb-5 flex items-center justify-between text-sm text-gray-900 last:mb-0 dark:text-white">
        <div className="flex grow-0 items-center">
          <CurrencySwapIcons from="RAYN" to="RAYN2" /> {twoApy}% APY | {twoLock}{' '}
          Days
        </div>

        <span className="flex items-center justify-end text-right">
          {two} RAYN
        </span>
      </div>
    </div>
  );
}

